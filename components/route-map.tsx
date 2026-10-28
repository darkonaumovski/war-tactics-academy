import { useId } from "react";
import Link from "next/link";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import land50m from "world-atlas/land-50m.json";
import land110m from "world-atlas/land-110m.json";
import {
  ROUTE_HEIGHT,
  ROUTE_WIDTH,
  routeLayout,
  type RouteStop,
} from "../lib/atlas";
type Land = Topology<{ land: GeometryCollection }>;
const toLand = (t: unknown) => feature(t as Land, (t as Land).objects.land);
const land = { fine: toLand(land50m), coarse: toLand(land110m) };
// Rendered at build time: the page ships the finished SVG and no map script.
// Stops must be in date order; numbers follow that order.
export function RouteMap({
  stops,
  title,
  line = true,
  list = false,
}: {
  stops: RouteStop[];
  title: string;
  line?: boolean;
  list?: boolean;
}) {
  const id = `route${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const { path, markers, segments, labels } = routeLayout(stops, land, line);
  const single = stops.length === 1;
  return (
    <figure
      className={`route-map ${single ? "route-map-single" : list ? "" : "route-map-wide"}`}
    >
      <div className="route-body">
        <svg
          viewBox={`0 0 ${ROUTE_WIDTH} ${ROUTE_HEIGHT}`}
          role="img"
          aria-labelledby={`${id}-title`}
        >
          <title id={`${id}-title`}>{title}</title>
          <defs>
            <marker
              id={`${id}-arrow`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0L10 5L0 10z" fill="#c4aa73" />
            </marker>
          </defs>
          <rect width={ROUTE_WIDTH} height={ROUTE_HEIGHT} fill="#14232c" />
          <path d={path} fill="#36443f" stroke="#708272" strokeWidth=".8" />
          {segments.map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c4aa73"
              strokeWidth="1.6"
              strokeDasharray="5 4"
              markerEnd={`url(#${id}-arrow)`}
            />
          ))}
          {single && (
            <circle
              cx={markers[0].xy[0]}
              cy={markers[0].xy[1]}
              r="8"
              fill="#dfbc78"
              stroke="#14232c"
              strokeWidth="2"
            />
          )}
          {markers.map(
            (m) =>
              !single && (
                <g key={m.label} className="route-marker">
                  <rect
                    x={m.xy[0] - m.width / 2}
                    y={m.xy[1] - 13}
                    width={m.width}
                    height="26"
                    rx="13"
                    fill="#14232c"
                    stroke="#dfbc78"
                    strokeWidth="1.5"
                  />
                  <text
                    x={m.xy[0]}
                    y={m.xy[1]}
                    dy=".35em"
                    textAnchor="middle"
                    fill="#f3e6c4"
                    fontSize="13"
                  >
                    {m.label}
                  </text>
                </g>
              ),
          )}
          {labels.map((l) => (
            <text
              key={l.text}
              className="route-label"
              x={l.x}
              y={l.y}
              textAnchor={l.end ? "end" : "start"}
              fontSize="13"
            >
              {l.text}
            </text>
          ))}
        </svg>
        {list && (
          <ol className="route-list">
            {stops.map((s, i) => (
              <li key={s.slug}>
                <span className="route-n">{i + 1}</span>
                <span>
                  <Link href={`/battles/${s.slug}`}>{s.name}</Link>
                  <small>{s.date}</small>
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
      <figcaption>
        {single
          ? "Approximate location, shown with its surroundings."
          : line
            ? "Numbers follow the date order. The dashed line joins the engagements in that order; it does not trace any army’s movements. Locations are approximate."
            : "Numbers follow the date order. Locations are approximate."}
      </figcaption>
    </figure>
  );
}
