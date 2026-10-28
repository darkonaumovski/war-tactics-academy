import { describe, it, expect } from "vitest";
import {
  ATLAS_HEIGHT,
  ATLAS_WIDTH,
  MAX_ZOOM,
  atlasProjection,
  atlasRegions,
  clampView,
  focusView,
  groupMarkers,
  groupTarget,
  inBox,
  regionView,
  spreadOffsets,
  type AtlasMarker,
  type Point,
} from "../../lib/atlas";
import { battles } from "../../data/catalog";
const project = atlasProjection();
const markers: AtlasMarker[] = battles.map((b) => ({
  slug: b.slug,
  name: b.name,
  xy: project([b.lon, b.lat]) as Point,
}));
// A phone renders the 900-unit viewBox at about 0.42 px per unit.
const phone = 375 / ATLAS_WIDTH;
const onScreen = (xy: Point, zoom: number, center: Point) =>
  Math.abs((xy[0] - center[0]) * zoom) <= ATLAS_WIDTH / 2 &&
  Math.abs((xy[1] - center[1]) * zoom) <= ATLAS_HEIGHT / 2;
describe("atlas regions", () => {
  it("place every engagement in at least one region", () => {
    const outside = battles.filter(
      (b) => !atlasRegions.some((r) => inBox(r.box, b.lon, b.lat)),
    );
    expect(outside.map((b) => b.slug)).toEqual([]);
  });
  it("keep every engagement of a region on screen", () => {
    for (const r of atlasRegions) {
      const { zoom, center } = regionView(r.box);
      expect(zoom).toBeGreaterThan(1);
      for (const b of battles.filter((x) => inBox(r.box, x.lon, x.lat)))
        expect(
          onScreen(project([b.lon, b.lat]) as Point, zoom, center),
          `${b.slug} in ${r.id}`,
        ).toBe(true);
    }
  });
  it("separate the Serbian Front markers in the Balkans view", () => {
    const { zoom } = regionView(
      atlasRegions.find((r) => r.id === "balkans")!.box,
    );
    const serbian = markers.filter((m) =>
      ["cer", "kolubara", "kajmakcalan"].includes(m.slug),
    );
    expect(groupMarkers(serbian, zoom, 1.2)).toHaveLength(3);
  });
});
describe("atlas views", () => {
  it("clamp zoom and keep the frame on the map", () => {
    expect(clampView({ zoom: 100, center: [0, 0] }).zoom).toBe(MAX_ZOOM);
    expect(clampView({ zoom: 0.5, center: [0, 0] })).toEqual({
      zoom: 1,
      center: [ATLAS_WIDTH / 2, ATLAS_HEIGHT / 2],
    });
  });
});
describe("atlas marker groups", () => {
  it("group nearby markers at world zoom and keep every marker once", () => {
    const groups = groupMarkers(markers, 1, phone);
    expect(groups.length).toBeLessThan(markers.length);
    expect(groups.flatMap((g) => g.members)).toHaveLength(markers.length);
  });
  it("are deterministic", () =>
    expect(groupMarkers(markers, 4, 1).map((g) => g.key)).toEqual(
      groupMarkers(markers, 4, 1).map((g) => g.key),
    ));
  it("spread markers that no zoom can separate", () => {
    const pair = markers.filter((m) =>
      ["cynoscephalae", "pharsalus"].includes(m.slug),
    );
    expect(groupMarkers(pair, MAX_ZOOM, 1.2)).toHaveLength(1);
    const target = groupTarget(groupMarkers(pair, 1, 1)[0], pair, 1.2);
    expect(target.view.zoom).toBe(MAX_ZOOM);
    expect(target.spreadKey).toBe("cynoscephalae|pharsalus");
  });
  it("zoom to a group that can be separated", () => {
    const group = groupMarkers(markers, 1, phone).find((g) =>
      g.members.some((m) => m.slug === "austerlitz"),
    )!;
    const target = groupTarget(group, markers, phone);
    expect(target.spreadKey).toBeNull();
    expect(target.view.zoom).toBeGreaterThan(1);
  });
  it("lay out a spread group on a ring", () => {
    const offsets = spreadOffsets(4);
    expect(offsets).toHaveLength(4);
    for (const [x, y] of offsets) expect(Math.hypot(x, y)).toBeCloseTo(40);
  });
});
describe("atlas focus", () => {
  it("shows a marker on its own when a zoom can separate it", () => {
    const { view, spreadKey } = focusView("hastings", markers, 1.2);
    expect(spreadKey).toBeNull();
    const group = groupMarkers(markers, view.zoom, 1.2).find((g) =>
      g.members.some((m) => m.slug === "hastings"),
    )!;
    expect(group.members).toHaveLength(1);
  });
  it("spreads the group when no zoom can", () => {
    const { view, spreadKey } = focusView("pharsalus", markers, phone);
    expect(view.zoom).toBe(MAX_ZOOM);
    expect(spreadKey?.split("|")).toContain("pharsalus");
  });
});
