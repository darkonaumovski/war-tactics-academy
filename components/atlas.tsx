"use client";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { geoPath, type GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import world from "world-atlas/land-110m.json";
import type { Battle } from "../lib/types";
import { useHydrated } from "../lib/use-hydrated";
import { eras } from "../data/catalog";
import {
  ATLAS_HEIGHT,
  ATLAS_WIDTH,
  MAX_ZOOM,
  atlasProjection,
  atlasRegions,
  clampView,
  focusView,
  groupMarkers,
  groupRadius,
  groupTarget,
  regionView,
  spreadOffsets,
  worldView,
  type AtlasMarker,
  type Point,
  type View,
} from "../lib/atlas";
import { ZoomIn, ZoomOut, RotateCcw, ArrowRight, MapPin } from "lucide-react";
type Land = Topology<{ land: GeometryCollection }>;
const landPath = (projection: GeoProjection, land: Land) =>
  geoPath(projection)(feature(land, land.objects.land)) ?? "";
// The full atlas reads ?battle= so engagement pages can link to a located
// marker. The page is prerendered, so the world view is the build-time
// fallback and the focused view applies once the page hydrates.
export function Atlas({
  battles,
  preview = false,
}: {
  battles: Battle[];
  preview?: boolean;
}) {
  if (preview) return <AtlasView battles={battles} preview />;
  return (
    <Suspense fallback={<AtlasView battles={battles} />}>
      <AtlasFromUrl battles={battles} />
    </Suspense>
  );
}
function AtlasFromUrl({ battles }: { battles: Battle[] }) {
  const slug = useSearchParams().get("battle") ?? "";
  const focus = battles.some((b) => b.slug === slug) ? slug : undefined;
  return <AtlasView key={focus} battles={battles} initialFocus={focus} />;
}
function AtlasView({
  battles,
  preview = false,
  initialFocus,
}: {
  battles: Battle[];
  preview?: boolean;
  initialFocus?: string;
}) {
  const ready = useHydrated();
  const [era, setEra] = useState("");
  const [region, setRegion] = useState("");
  const [selected, setSelected] = useState(initialFocus ?? "waterloo");
  // While `focus` is set the view is derived from it, so it stays correct when
  // the rendered size (and with it the grouping distance) changes.
  const [focus, setFocus] = useState<string | null>(initialFocus ?? null);
  const [explicitView, setExplicitView] = useState<View>(worldView);
  const [explicitSpread, setExplicitSpread] = useState<string | null>(null);
  // Rendered pixels per viewBox unit at zoom 1; measured after hydration.
  const [pxPerUnit, setPxPerUnit] = useState(1);
  const [detail, setDetail] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    x: number;
    y: number;
    center: Point;
    moved: boolean;
  } | null>(null);
  const dragged = useRef(false);
  const projection = useMemo(() => atlasProjection(), []);
  const path = useMemo(
    () => landPath(projection, world as unknown as Land),
    [projection],
  );
  const visible = battles.filter((b) => !era || b.eraId === era);
  const markers = useMemo<AtlasMarker[]>(
    () =>
      battles
        .filter((b) => !era || b.eraId === era)
        .map((b) => ({
          slug: b.slug,
          name: b.name,
          xy: (projection([b.lon, b.lat]) ?? [0, 0]) as Point,
        })),
    [battles, era, projection],
  );
  const focused = focus ? focusView(focus, markers, pxPerUnit) : null;
  const view = focused?.view ?? explicitView;
  const spreadKey = focused ? focused.spreadKey : explicitSpread;
  const { zoom, center } = view;
  const unit = 1 / (pxPerUnit * zoom);
  const groups = groupMarkers(markers, zoom, pxPerUnit);
  const battle = visible.find((b) => b.slug === selected) ?? visible[0];
  const hiRes = zoom > 4;
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => {
      const r = svg.getBoundingClientRect();
      if (r.width && r.height)
        setPxPerUnit(Math.min(r.width / ATLAS_WIDTH, r.height / ATLAS_HEIGHT));
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);
  // The finer coastline is only worth its size once the map is zoomed in.
  useEffect(() => {
    if (!hiRes || detail) return;
    let live = true;
    import("world-atlas/land-50m.json").then((m) => {
      if (live) setDetail(landPath(projection, m.default as unknown as Land));
    });
    return () => {
      live = false;
    };
  }, [hiRes, detail, projection]);
  const show = (next: View, spread: string | null = null) => {
    setExplicitView(clampView(next));
    setExplicitSpread(spread);
    setFocus(null);
  };
  const locate = (slug: string) => {
    setSelected(slug);
    setFocus(slug);
    setExplicitSpread(null);
  };
  const onPointerDown = (e: PointerEvent<SVGSVGElement>) => {
    dragged.current = false;
    if (e.button !== 0 || zoom <= 1) return;
    drag.current = { x: e.clientX, y: e.clientY, center, moved: false };
  };
  const onPointerMove = (e: PointerEvent<SVGSVGElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.moved) {
      if (Math.hypot(dx, dy) < 5) return;
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    show(
      { zoom, center: [d.center[0] - dx * unit, d.center[1] - dy * unit] },
      spreadKey,
    );
  };
  const onPointerEnd = () => {
    if (drag.current?.moved) dragged.current = true;
    drag.current = null;
  };
  const markerButton = (m: AtlasMarker, xy: Point) => {
    const isSelected = battle?.slug === m.slug;
    return (
      <g key={m.slug}>
        <circle
          cx={xy[0]}
          cy={xy[1]}
          r={(isSelected ? 9 : 5) * unit}
          fill={isSelected ? "#dfbc78" : "#c4aa73"}
          fillOpacity={isSelected ? 1 : 0.75}
        />
        <circle
          cx={xy[0]}
          cy={xy[1]}
          r={12 * unit}
          fill="transparent"
          role="button"
          tabIndex={0}
          aria-label={`Show ${m.name}`}
          onClick={() => setSelected(m.slug)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelected(m.slug);
            }
          }}
        />
      </g>
    );
  };
  // Name labels once zoomed into a region, skipping any that would collide.
  const labelled: { m: AtlasMarker; xy: Point }[] = [];
  // Numbered group circles are placed first so no label covers a count.
  const placed: [number, number, number, number][] = groups
    .filter((g) => g.members.length > 1 && g.key !== spreadKey)
    .map((g) => {
      const r = groupRadius(g.members.length);
      const [x, y] = [g.xy[0] / unit, g.xy[1] / unit];
      return [x - r, y - r, x + r, y + r];
    });
  const marks: { m: AtlasMarker; xy: Point }[] = groups.flatMap((g) =>
    g.key === spreadKey && g.members.length > 1
      ? g.members.map((m, i) => {
          const o = spreadOffsets(g.members.length)[i];
          return {
            m,
            xy: [g.xy[0] + o[0] * unit, g.xy[1] + o[1] * unit] as Point,
          };
        })
      : g.members.length === 1
        ? [{ m: g.members[0], xy: g.xy }]
        : [],
  );
  if (!preview && zoom >= 3)
    for (const mark of [...marks].sort(
      (a, b) =>
        Number(b.m.slug === battle?.slug) - Number(a.m.slug === battle?.slug),
    )) {
      const x = mark.xy[0] / unit + 11;
      const y = mark.xy[1] / unit - 8;
      const box: [number, number, number, number] = [
        x,
        y,
        x + mark.m.name.length * 6.4,
        y + 15,
      ];
      if (
        placed.some(
          (p) =>
            box[0] < p[2] && box[2] > p[0] && box[1] < p[3] && box[3] > p[1],
        )
      )
        continue;
      placed.push(box);
      labelled.push(mark);
    }
  return (
    <div className={`atlas ${preview ? "atlas-preview" : ""}`}>
      <div className="atlas-toolbar">
        <span className="eyebrow">A WORLD OF DECISIONS</span>
        <div className="atlas-filters">
          {!preview && (
            <select
              disabled={!ready}
              aria-label="Atlas region"
              value={region}
              onChange={(e) => {
                const r = atlasRegions.find((x) => x.id === e.target.value);
                setRegion(e.target.value);
                show(r ? regionView(r.box) : worldView);
              }}
            >
              <option value="">Whole world</option>
              {atlasRegions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          )}
          <select
            disabled={!ready}
            aria-label="Atlas era"
            value={era}
            onChange={(e) => {
              setEra(e.target.value);
              show(view);
            }}
          >
            <option value="">All historical eras</option>
            {eras.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="atlas-map" ref={mapRef}>
        <svg
          ref={svgRef}
          className={zoom > 1 ? "is-zoomed" : undefined}
          viewBox={`0 0 ${ATLAS_WIDTH} ${ATLAS_HEIGHT}`}
          role="group"
          aria-label="World map of approximate engagement locations"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onClickCapture={(e) => {
            // A drag that ends over a marker must not also select it.
            if (dragged.current) {
              e.stopPropagation();
              dragged.current = false;
            }
          }}
        >
          <defs>
            <pattern
              id={preview ? "atlasGridPreview" : "atlasGrid"}
              width="45"
              height="47"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M45 0H0V47"
                fill="none"
                stroke="currentColor"
                strokeOpacity=".08"
              />
            </pattern>
          </defs>
          <rect
            width={ATLAS_WIDTH}
            height={ATLAS_HEIGHT}
            fill={`url(#${preview ? "atlasGridPreview" : "atlasGrid"})`}
          />
          <g
            transform={`translate(${ATLAS_WIDTH / 2} ${ATLAS_HEIGHT / 2}) scale(${zoom}) translate(${-center[0]} ${-center[1]})`}
          >
            <path
              d={hiRes && detail ? detail : path}
              fill="#36443f"
              stroke="#708272"
              strokeWidth=".65"
              vectorEffect="non-scaling-stroke"
            />
            {/* A spread group is drawn last so its ring sits above neighbours. */}
            {[...groups]
              .sort(
                (a, b) =>
                  Number(a.key === spreadKey) - Number(b.key === spreadKey),
              )
              .map((g) => {
                if (g.members.length === 1)
                  return markerButton(g.members[0], g.xy);
                const names = g.members.map((m) => m.name).join(", ");
                if (g.key === spreadKey) {
                  const offsets = spreadOffsets(g.members.length);
                  return (
                    <g key={g.key} className="atlas-spread">
                      {offsets.map((o, i) => (
                        <line
                          key={g.members[i].slug}
                          x1={g.xy[0]}
                          y1={g.xy[1]}
                          x2={g.xy[0] + o[0] * unit}
                          y2={g.xy[1] + o[1] * unit}
                          stroke="#c4aa73"
                          strokeOpacity=".6"
                          strokeWidth={unit}
                        />
                      ))}
                      <circle
                        cx={g.xy[0]}
                        cy={g.xy[1]}
                        r={3 * unit}
                        fill="#c4aa73"
                      />
                      {g.members.map((m, i) =>
                        markerButton(m, [
                          g.xy[0] + offsets[i][0] * unit,
                          g.xy[1] + offsets[i][1] * unit,
                        ]),
                      )}
                    </g>
                  );
                }
                const hasSelected = g.members.some(
                  (m) => m.slug === battle?.slug,
                );
                const open = () => {
                  const t = groupTarget(g, markers, pxPerUnit);
                  show(t.view, t.spreadKey);
                };
                return (
                  <g key={g.key} className="atlas-group">
                    <circle
                      cx={g.xy[0]}
                      cy={g.xy[1]}
                      r={groupRadius(g.members.length) * unit}
                      fill="#14232c"
                      fillOpacity=".92"
                      stroke={hasSelected ? "#f3d58f" : "#c4aa73"}
                      strokeWidth={(hasSelected ? 2.5 : 1.25) * unit}
                      role="button"
                      tabIndex={0}
                      aria-label={`${zoom >= MAX_ZOOM ? "Spread" : "Zoom to"} ${g.members.length} engagements: ${names}`}
                      onClick={open}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          open();
                        }
                      }}
                    />
                    <text
                      x={g.xy[0]}
                      y={g.xy[1]}
                      dy=".35em"
                      textAnchor="middle"
                      fontSize={11 * unit}
                      fill={hasSelected ? "#f3d58f" : "#e9dfcb"}
                      aria-hidden="true"
                    >
                      {g.members.length}
                    </text>
                  </g>
                );
              })}
            {labelled.map(({ m, xy }) => (
              <text
                key={m.slug}
                className="atlas-label"
                x={xy[0] + 11 * unit}
                y={xy[1] + 4 * unit}
                fontSize={11 * unit}
                strokeWidth={3 * unit}
                aria-hidden="true"
              >
                {m.name}
              </text>
            ))}
          </g>
        </svg>
        <div className="map-controls">
          <button
            aria-label="Zoom atlas in"
            disabled={zoom >= MAX_ZOOM}
            onClick={() => show({ zoom: zoom * 2, center })}
          >
            <ZoomIn size={17} />
          </button>
          <button
            aria-label="Zoom atlas out"
            disabled={zoom <= 1}
            onClick={() => show({ zoom: zoom / 2, center })}
          >
            <ZoomOut size={17} />
          </button>
          <button
            aria-label="Reset atlas view"
            disabled={zoom <= 1 && !region}
            onClick={() => {
              setRegion("");
              show(worldView);
            }}
          >
            <RotateCcw size={16} />
          </button>
        </div>
        {battle && (
          <div className="atlas-selection">
            <span className="eyebrow">
              {battle.date} · {battle.kind}
            </span>
            <h3>{battle.name}</h3>
            <p>
              <MapPin size={13} />
              {battle.location}
            </p>
            <Link href={`/battles/${battle.slug}`}>
              Explore engagement <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
      <div className="atlas-foot">
        <span>
          Approximate locations · Natural Earth geography · Numbered circles
          group nearby engagements; select one to zoom in
        </span>
        <span>{visible.length} engagements</span>
      </div>
      {!preview && (
        <div className="atlas-list">
          <h2>Explore by location</h2>
          <p className="muted">
            An accessible alternative to map markers. Select a record to locate
            it, then open its study. Locations indicate a general historical
            area, not troop coordinates.
          </p>
          <div>
            {visible.map((b) => (
              <button
                key={b.slug}
                aria-pressed={battle?.slug === b.slug}
                onClick={() => {
                  locate(b.slug);
                  mapRef.current?.scrollIntoView({ block: "nearest" });
                }}
              >
                {b.name}
                <small>{b.location}</small>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
