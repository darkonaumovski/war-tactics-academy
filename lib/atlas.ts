import { geoNaturalEarth1 } from "d3-geo";
// The atlas draws in a fixed 900×470 viewBox. A view is a zoom factor and the
// projected point at the centre of the frame; everything else is derived.
export const ATLAS_WIDTH = 900;
export const ATLAS_HEIGHT = 470;
export const MAX_ZOOM = 32;
// Markers closer than this on screen merge into one numbered group. It is
// wider than two group circles, so neighbouring groups never overlap.
export const GROUP_DISTANCE_PX = 32;
export const groupRadius = (count: number) => 10 + Math.min(count - 1, 5);
export type Point = [number, number];
export type View = { zoom: number; center: Point };
export type AtlasMarker = { slug: string; name: string; xy: Point };
export type MarkerGroup = { key: string; xy: Point; members: AtlasMarker[] };
export const atlasProjection = () =>
  geoNaturalEarth1().scale(170).translate([450, 245]);
export const worldView: View = {
  zoom: 1,
  center: [ATLAS_WIDTH / 2, ATLAS_HEIGHT / 2],
};
// Fixed boxes ([west, south, east, north] in degrees) for the region select.
// They overlap at their edges; every engagement must fall inside at least one.
export const atlasRegions = [
  { id: "western-europe", name: "Western Europe", box: [-6, 42, 9, 55] },
  { id: "central-europe", name: "Central Europe", box: [6, 46, 21, 55] },
  {
    id: "italy",
    name: "Italy and the central Mediterranean",
    box: [5, 35, 19, 47],
  },
  { id: "balkans", name: "Balkans and Greece", box: [17, 36, 30, 46.5] },
  {
    id: "eastern-europe",
    name: "Eastern Europe and Russia",
    box: [17, 44, 48, 58],
  },
  { id: "middle-east", name: "Middle East and Egypt", box: [28, 27, 53, 40] },
  { id: "south-asia", name: "Central and South Asia", box: [50, 20, 80, 45] },
  { id: "east-asia", name: "East Asia", box: [95, 10, 145, 42] },
  {
    id: "americas",
    name: "The Americas and the Pacific",
    box: [-180, 15, -65, 50],
  },
] as const satisfies {
  id: string;
  name: string;
  box: [number, number, number, number];
}[];
export const inBox = (
  [west, south, east, north]: readonly number[],
  lon: number,
  lat: number,
) => lon >= west && lon <= east && lat >= south && lat <= north;
// Keep the frame on the map: at zoom z the visible half-width is 450/z units.
export function clampView({ zoom, center }: View): View {
  const z = Math.min(MAX_ZOOM, Math.max(1, zoom));
  const hw = ATLAS_WIDTH / 2 / z;
  const hh = ATLAS_HEIGHT / 2 / z;
  return {
    zoom: z,
    center: [
      Math.min(ATLAS_WIDTH - hw, Math.max(hw, center[0])),
      Math.min(ATLAS_HEIGHT - hh, Math.max(hh, center[1])),
    ],
  };
}
// Fit projected points in the frame with a margin on every side.
export function fitPoints(points: Point[], margin = 0.15): View {
  if (!points.length) return worldView;
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const [x0, x1, y0, y1] = [
    Math.min(...xs),
    Math.max(...xs),
    Math.min(...ys),
    Math.max(...ys),
  ];
  const w = Math.max(x1 - x0, 1e-6);
  const h = Math.max(y1 - y0, 1e-6);
  const zoom = Math.min(ATLAS_WIDTH / w, ATLAS_HEIGHT / h) * (1 - 2 * margin);
  return clampView({ zoom, center: [(x0 + x1) / 2, (y0 + y1) / 2] });
}
// The projection curves meridians, so sample the box edges, not only corners.
export function regionView(box: readonly number[]): View {
  const project = atlasProjection();
  const [west, south, east, north] = box;
  const points: Point[] = [];
  for (let i = 0; i <= 8; i++) {
    const lon = west + ((east - west) * i) / 8;
    const lat = south + ((north - south) * i) / 8;
    points.push(
      project([lon, south]) as Point,
      project([lon, north]) as Point,
      project([west, lat]) as Point,
      project([east, lat]) as Point,
    );
  }
  return fitPoints(points, 0.02);
}
// Greedy grouping in input order: each marker joins the first group whose seed
// lies within the threshold, so the result is stable for a given catalog order.
// `pxPerUnit` is the rendered size of one viewBox unit at zoom 1.
export function groupMarkers(
  markers: AtlasMarker[],
  zoom: number,
  pxPerUnit: number,
  distancePx = GROUP_DISTANCE_PX,
): MarkerGroup[] {
  const threshold = distancePx / (pxPerUnit * zoom);
  const seeds: { xy: Point; members: AtlasMarker[] }[] = [];
  for (const m of markers) {
    const seed = seeds.find(
      (s) => Math.hypot(s.xy[0] - m.xy[0], s.xy[1] - m.xy[1]) < threshold,
    );
    if (seed) seed.members.push(m);
    else seeds.push({ xy: m.xy, members: [m] });
  }
  return seeds.map((s) => ({
    key: s.members.map((m) => m.slug).join("|"),
    xy: [
      s.members.reduce((t, m) => t + m.xy[0], 0) / s.members.length,
      s.members.reduce((t, m) => t + m.xy[1], 0) / s.members.length,
    ],
    members: s.members,
  }));
}
// Clicking a group zooms to fit its members. When even the maximum zoom cannot
// separate them, the result names the group to spread around its centre; the
// key is recomputed at the new zoom so it matches what the atlas will draw.
export function groupTarget(
  group: MarkerGroup,
  markers: AtlasMarker[],
  pxPerUnit: number,
): { view: View; spreadKey: string | null } {
  const view = fitPoints(
    group.members.map((m) => m.xy),
    0.3,
  );
  if (groupMarkers(group.members, view.zoom, pxPerUnit).length > 1)
    return { view, spreadKey: null };
  const target = groupMarkers(markers, view.zoom, pxPerUnit).find((g) =>
    g.members.includes(group.members[0]),
  )!;
  return {
    view: clampView({ zoom: view.zoom, center: target.xy }),
    spreadKey: target.key,
  };
}
// The view that shows one marker on its own: the smallest power-of-two zoom at
// which no other visible marker shares its group, centred on the marker.
export function focusView(
  slug: string,
  markers: AtlasMarker[],
  pxPerUnit: number,
): { view: View; spreadKey: string | null } {
  const marker = markers.find((m) => m.slug === slug);
  if (!marker) return { view: worldView, spreadKey: null };
  for (let zoom = 2; zoom <= MAX_ZOOM; zoom *= 2) {
    const group = groupMarkers(markers, zoom, pxPerUnit).find((g) =>
      g.members.includes(marker),
    )!;
    if (group.members.length === 1)
      return {
        view: clampView({ zoom, center: marker.xy }),
        spreadKey: null,
      };
    if (zoom === MAX_ZOOM)
      return {
        view: clampView({ zoom, center: group.xy }),
        spreadKey: group.key,
      };
  }
  return { view: worldView, spreadKey: null };
}
// Screen offsets (px) for a spread group: a ring that grows with its size.
export function spreadOffsets(count: number): Point[] {
  const radius = Math.max(34, count * 10);
  return Array.from({ length: count }, (_, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / count;
    return [Math.cos(a) * radius, Math.sin(a) * radius];
  });
}
