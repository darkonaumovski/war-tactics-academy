"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import world from "world-atlas/land-110m.json";
import type { Battle } from "../lib/types";
import { eras } from "../data/catalog";
import { ZoomIn, ZoomOut, ArrowRight, MapPin } from "lucide-react";
export function Atlas({
  battles,
  preview = false,
}: {
  battles: Battle[];
  preview?: boolean;
}) {
  const [era, setEra] = useState("");
  const [selected, setSelected] = useState("waterloo");
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([450, 240]);
  const projection = useMemo(
    () => geoNaturalEarth1().scale(170).translate([450, 245]),
    [],
  );
  const path = useMemo(
    () =>
      geoPath(projection)(
        feature(
          world as unknown as Topology<{ land: GeometryCollection }>,
          (world as unknown as Topology<{ land: GeometryCollection }>).objects
            .land,
        ),
      ) ?? "",
    [projection],
  );
  const visible = battles.filter((b) => !era || b.eraId === era);
  const battle = visible.find((b) => b.slug === selected) ?? visible[0];
  return (
    <div className={`atlas ${preview ? "atlas-preview" : ""}`}>
      <div className="atlas-toolbar">
        <span className="eyebrow">A WORLD OF DECISIONS</span>
        <select
          aria-label="Atlas era"
          value={era}
          onChange={(e) => {
            setEra(e.target.value);
            setZoom(1);
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
      <div className="atlas-map">
        <svg
          viewBox="0 0 900 470"
          role="group"
          aria-label="World map of approximate engagement locations"
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
            width="900"
            height="470"
            fill={`url(#${preview ? "atlasGridPreview" : "atlasGrid"})`}
          />
          <g
            transform={`translate(450 235) scale(${zoom}) translate(${-center[0]} ${-center[1]})`}
          >
            <path d={path} fill="#36443f" stroke="#708272" strokeWidth=".65" />
            {visible.map((b) => {
              const p = projection([b.lon, b.lat]) ?? [0, 0];
              return (
                <g key={b.slug}>
                  <circle
                    cx={p[0]}
                    cy={p[1]}
                    r={(battle?.slug === b.slug ? 10 : 5) / zoom}
                    fill={battle?.slug === b.slug ? "#dfbc78" : "#c4aa73"}
                    fillOpacity={battle?.slug === b.slug ? 1 : 0.7}
                  />
                  <circle
                    cx={p[0]}
                    cy={p[1]}
                    r={13 / zoom}
                    fill="transparent"
                    role="button"
                    tabIndex={0}
                    aria-label={`Show ${b.name}`}
                    onClick={() => setSelected(b.slug)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(b.slug);
                      }
                    }}
                  />
                </g>
              );
            })}
          </g>
        </svg>
        <div className="map-controls">
          <button
            aria-label="Zoom atlas in"
            disabled={zoom >= 4}
            onClick={() => {
              const p = battle ? projection([battle.lon, battle.lat]) : null;
              if (p) setCenter(p as [number, number]);
              setZoom((z) => Math.min(4, z + 1));
            }}
          >
            <ZoomIn size={17} />
          </button>
          <button
            aria-label="Zoom atlas out"
            disabled={zoom <= 1}
            onClick={() => {
              setZoom((z) => Math.max(1, z - 1));
              if (zoom <= 2) setCenter([450, 240]);
            }}
          >
            <ZoomOut size={17} />
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
          Approximate locations · Natural Earth geography · No external tiles
          required
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
                  setSelected(b.slug);
                  const p = projection([b.lon, b.lat]);
                  if (p) setCenter(p as [number, number]);
                  setZoom(2);
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
