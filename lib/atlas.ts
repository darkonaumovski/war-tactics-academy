import {
  geoNaturalEarth1,
  geoPath,
  type GeoPermissibleObjects,
  type GeoStream,
} from "d3-geo";
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
  { id: "western-europe", name: "Western Europe", box: [-6, 42, 9, 58] },
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
    id: "south-west-pacific",
    name: "South-east Asia and the South-west Pacific",
    box: [95, -25, 165, 12],
  },
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
// Route maps: a static frame around one campaign or collection, with its
// engagements numbered in date order. The line joins them in that order and
// does not trace any army's movements.
export const ROUTE_WIDTH = 600;
export const ROUTE_HEIGHT = 400;
const ROUTE_PAD = 44;
// Small frames are widened to at least this many degrees: a single
// engagement shows its surroundings, a tight route still fills the frame.
const MIN_SPAN: [number, number] = [6, 4];
const MIN_ROUTE_SPAN: [number, number] = [2.5, 1.6];
// Markers whose pills would come closer than this (viewBox units) merge into
// one marker labelled with all their numbers.
export const ROUTE_GAP = 4;
export type RouteStop = {
  slug: string;
  name: string;
  date: string;
  lon: number;
  lat: number;
};
export type RouteMarker = {
  label: string;
  xy: Point;
  width: number;
  stops: (RouteStop & { n: number })[];
};
// "3–7, 11" from [3, 4, 5, 6, 7, 11].
export function numberRanges(ns: number[]) {
  const runs: [number, number][] = [];
  for (const n of [...ns].sort((a, b) => a - b)) {
    const last = runs[runs.length - 1];
    if (last && n === last[1] + 1) last[1] = n;
    else runs.push([n, n]);
  }
  return runs.map(([a, b]) => (a === b ? `${a}` : `${a}–${b}`)).join(", ");
}
// Frames wider than this many degrees use the coarse coastline.
const COARSE_SPAN = 20;
// Drops projected points within a unit of the last one kept, so a coastline
// at a small scale does not carry detail no one can see.
const thin = (out: GeoStream): GeoStream => {
  let last: Point | null = null;
  let skipped: Point | null = null;
  return {
    point(x, y) {
      if (last && Math.hypot(x - last[0], y - last[1]) < 1) {
        skipped = [x, y];
        return;
      }
      out.point(x, y);
      last = [x, y];
      skipped = null;
    },
    lineStart() {
      last = skipped = null;
      out.lineStart();
    },
    lineEnd() {
      if (skipped) out.point(skipped[0], skipped[1]);
      last = skipped = null;
      out.lineEnd();
    },
    polygonStart: () => out.polygonStart(),
    polygonEnd: () => out.polygonEnd(),
    sphere: () => out.sphere?.(),
  };
};
export function routeLayout(
  stops: RouteStop[],
  land: { fine: GeoPermissibleObjects; coarse: GeoPermissibleObjects },
  line: boolean,
) {
  const lons = stops.map((s) => s.lon);
  const lats = stops.map((s) => s.lat);
  const mid = (v: number[]) => (Math.min(...v) + Math.max(...v)) / 2;
  const half = (v: number[], min: number) =>
    Math.max(Math.max(...v) - Math.min(...v), min) / 2;
  const [cx, cy, hx, hy] = [
    mid(lons),
    mid(lats),
    half(lons, (stops.length > 1 ? MIN_ROUTE_SPAN : MIN_SPAN)[0]),
    half(lats, (stops.length > 1 ? MIN_ROUTE_SPAN : MIN_SPAN)[1]),
  ];
  const projection = geoNaturalEarth1().fitExtent(
    [
      [ROUTE_PAD, ROUTE_PAD],
      [ROUTE_WIDTH - ROUTE_PAD, ROUTE_HEIGHT - ROUTE_PAD],
    ],
    {
      type: "MultiPoint",
      coordinates: [
        [cx - hx, cy - hy],
        [cx + hx, cy - hy],
        [cx - hx, cy + hy],
        [cx + hx, cy + hy],
      ],
    },
  );
  projection.clipExtent([
    [0, 0],
    [ROUTE_WIDTH, ROUTE_HEIGHT],
  ]);
  const path =
    geoPath({ stream: (out) => projection.stream(thin(out)) }).digits(0)(
      Math.max(hx, hy) * 2 > COARSE_SPAN ? land.coarse : land.fine,
    ) ?? "";
  const numbered = stops.map((s, i) => ({
    ...s,
    n: i + 1,
    xy: projection([s.lon, s.lat]) as Point,
  }));
  // Merge markers whose pills would touch, recomputing each merged pill
  // (its label, and so its width, grows), until no two overlap.
  const pill = (stops: (RouteStop & { n: number; xy: Point })[]) => {
    const label = numberRanges(stops.map((x) => x.n));
    return {
      label,
      width: Math.max(26, label.length * 8 + 14),
      xy: [
        stops.reduce((t, x) => t + x.xy[0], 0) / stops.length,
        stops.reduce((t, x) => t + x.xy[1], 0) / stops.length,
      ] as Point,
      stops,
    };
  };
  let pills = numbered.map((x) => pill([x]));
  const touch = (p: ReturnType<typeof pill>, q: ReturnType<typeof pill>) =>
    Math.abs(p.xy[0] - q.xy[0]) < (p.width + q.width) / 2 + ROUTE_GAP &&
    Math.abs(p.xy[1] - q.xy[1]) < 26 + ROUTE_GAP;
  for (let merged = true; merged;) {
    merged = false;
    for (let i = 0; i < pills.length && !merged; i++)
      for (let j = i + 1; j < pills.length && !merged; j++)
        if (touch(pills[i], pills[j])) {
          const joined = pill([...pills[i].stops, ...pills[j].stops]);
          pills = [...pills.filter((_, k) => k !== i && k !== j), joined];
          merged = true;
        }
  }
  const markers: RouteMarker[] = pills
    .map((p) => ({
      ...p,
      stops: p.stops
        .map(({ slug, name, date, lon, lat, n }) => ({
          slug,
          name,
          date,
          lon,
          lat,
          n,
        }))
        .sort((x, y) => x.n - y.n),
    }))
    .sort((x, y) => x.stops[0].n - y.stops[0].n);
  const at = (slug: string) =>
    markers.find((m) => m.stops.some((s) => s.slug === slug))!;
  // Segments between consecutive markers, trimmed so arrows stop at the rim.
  const segments: [number, number, number, number][] = [];
  if (line)
    for (let i = 1; i < stops.length; i++) {
      const a = at(stops[i - 1].slug);
      const b = at(stops[i].slug);
      if (a === b) continue;
      const [dx, dy] = [b.xy[0] - a.xy[0], b.xy[1] - a.xy[1]];
      const d = Math.hypot(dx, dy);
      // Distance from a pill centre to its edge along the segment.
      const rim = (w: number) =>
        Math.min(
          w / 2 / Math.max(Math.abs(dx) / d, 1e-6),
          13 / Math.max(Math.abs(dy) / d, 1e-6),
        );
      const [ta, tb] = [rim(a.width) + 3, rim(b.width) + 6];
      if (d <= ta + tb) continue;
      segments.push([
        a.xy[0] + (dx * ta) / d,
        a.xy[1] + (dy * ta) / d,
        b.xy[0] - (dx * tb) / d,
        b.xy[1] - (dy * tb) / d,
      ]);
    }
  // Names beside single-engagement markers, right if free, else left.
  const boxes = markers.map(
    (m) =>
      [
        m.xy[0] - m.width / 2,
        m.xy[1] - 13,
        m.xy[0] + m.width / 2,
        m.xy[1] + 13,
      ] as [number, number, number, number],
  );
  const labels: { text: string; x: number; y: number; end: boolean }[] = [];
  for (const m of markers.filter((x) => x.stops.length === 1)) {
    const text = m.stops[0].name;
    const w = text.length * 7.2;
    for (const end of [false, true]) {
      const x = end ? m.xy[0] - m.width / 2 - 6 : m.xy[0] + m.width / 2 + 6;
      const box: [number, number, number, number] = end
        ? [x - w, m.xy[1] - 9, x, m.xy[1] + 9]
        : [x, m.xy[1] - 9, x + w, m.xy[1] + 9];
      const inside = box[0] >= 0 && box[2] <= ROUTE_WIDTH;
      const free = !boxes.some(
        (b) => box[0] < b[2] && box[2] > b[0] && box[1] < b[3] && box[3] > b[1],
      );
      if (inside && free) {
        boxes.push(box);
        labels.push({ text, x, y: m.xy[1] + 5, end });
        break;
      }
    }
  }
  return { path, markers, segments, labels };
}
