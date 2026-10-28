"use client";
import { FadeIn } from "./motion";
import { useEffect, useState, useRef, useId } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { nextPhase } from "../lib/logic";
import type { Battle } from "../lib/types";
import { Cartography } from "./cartography";
export function BattleMap({ battle }: { battle: Battle }) {
  const phases = battle.research?.phases ?? [];
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [event, setEvent] = useState(false);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(
    null,
  );
  const arrow = useId().replace(/:/g, "");
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(
      () =>
        setPhase((p) => {
          if (p >= phases.length - 1) {
            setPlaying(false);
            return p;
          }
          return nextPhase(p, phases.length);
        }),
      4000,
    );
    return () => clearInterval(timer);
  }, [playing, phases.length]);
  const current = phases[phase];
  if (!current) return null;
  // Sea battles draw ship markers instead of land units.
  const naval = ["actium", "tsushima", "jutland", "midway"].includes(
    battle.slug,
  );
  const advance = phase * 30;
  return (
    <section className="replay" aria-label="Interactive battle timeline">
      <div className="replay-top">
        <span className="eyebrow">
          BATTLEFIELD STUDY / {naval ? "NAVAL" : "LAND"}
        </span>
        <span className="schematic-label">
          <Info size={13} /> Conceptual schematic · not to scale
        </span>
      </div>
      <div className="replay-layout">
        <div className="schematic-wrap">
          <div
            className="schematic"
            tabIndex={0}
            role="group"
            aria-label="Battle schematic. Use arrow keys to pan; use zoom buttons to magnify."
            onKeyDown={(e) => {
              const v: Record<string, [number, number]> = {
                ArrowLeft: [20, 0],
                ArrowRight: [-20, 0],
                ArrowUp: [0, 20],
                ArrowDown: [0, -20],
              };
              if (v[e.key]) {
                e.preventDefault();
                const [x, y] = v[e.key];
                setPan((p) => ({
                  x: Math.max(-300, Math.min(300, p.x + x)),
                  y: Math.max(-200, Math.min(200, p.y + y)),
                }));
              }
            }}
            onPointerDown={(e) => {
              if ((e.target as HTMLElement).closest("button")) return;
              drag.current = {
                x: e.clientX,
                y: e.clientY,
                px: pan.x,
                py: pan.y,
              };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const d = drag.current;
              if (d)
                setPan({
                  x: Math.max(-300, Math.min(300, d.px + e.clientX - d.x)),
                  y: Math.max(-200, Math.min(200, d.py + e.clientY - d.y)),
                });
            }}
            onPointerUp={() => (drag.current = null)}
            onPointerCancel={() => (drag.current = null)}
          >
            <div
              className="schematic-terrain"
              style={{
                transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`,
              }}
            >
              <Cartography variant={battle.name} />
              <svg
                viewBox="0 0 700 420"
                className="force-overlay"
                role="img"
                aria-label={`${current.title}. Abstract force relationship; formations and arrows are explanatory, not verified troop positions.`}
              >
                <defs>
                  <marker
                    id={arrow}
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <path d="m0 0 8 4-8 4z" fill="#e0bf7c" />
                  </marker>
                </defs>
                <g fill="#84a9ae" stroke="#d2e5df" strokeWidth="1.4">
                  {[0, 1, 2].map((i) => (
                    <rect
                      key={i}
                      x={195 + i * 82}
                      y={125 + advance / 2}
                      width="56"
                      height={naval ? 12 : 18}
                      rx={naval ? 9 : 1}
                    />
                  ))}
                </g>
                <g fill="#a75b4d" stroke="#e8b1a1" strokeWidth="1.4">
                  {[0, 1, 2].map((i) => (
                    <rect
                      key={i}
                      x={210 + i * (phase === 3 ? 105 : 72)}
                      y={300 - advance}
                      width="48"
                      height={naval ? 12 : 18}
                      rx={naval ? 9 : 1}
                    />
                  ))}
                </g>
                {phase > 0 && (
                  <path
                    d={`M350 295 Q${phase === 2 ? 470 : 350} 230 350 ${170 + advance / 2}`}
                    fill="none"
                    stroke="#e0bf7c"
                    strokeWidth="2.5"
                    strokeDasharray="7 6"
                    markerEnd={`url(#${arrow})`}
                  />
                )}
                <text
                  x="340"
                  y="85"
                  textAnchor="middle"
                  fill="#f5f1e8"
                  fontSize="14"
                  fontFamily="monospace"
                >
                  {battle.factions[0]}
                </text>
                <text
                  x="340"
                  y="365"
                  textAnchor="middle"
                  fill="#f5f1e8"
                  fontSize="14"
                  fontFamily="monospace"
                >
                  {battle.factions[1]}
                </text>
              </svg>
            </div>
            <div className="map-controls">
              <button
                aria-label="Zoom in"
                disabled={zoom >= 2}
                onClick={() => setZoom((z) => Math.min(2, z + 0.25))}
              >
                <ZoomIn size={18} />
              </button>
              <button
                aria-label="Zoom out"
                disabled={zoom <= 0.75}
                onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))}
              >
                <ZoomOut size={18} />
              </button>
              <button
                aria-label="Reset map view"
                onClick={() => {
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                }}
              >
                <Move size={18} />
              </button>
            </div>
            <button
              className="map-event"
              onClick={() => setEvent(!event)}
              aria-expanded={event}
            >
              ◎ Phase {phase + 1} event
            </button>
            {event && (
              <div className="event-popup">
                <strong>{current.title}</strong>
                <p>{current.description}</p>
              </div>
            )}
          </div>
          <div className="map-legend">
            <span>
              <i className="force-blue" />
              {battle.factions[0]}
            </span>
            <span>
              <i className="force-red" />
              {battle.factions[1]}
            </span>
            <span>⇢ conceptual pressure</span>
          </div>
        </div>
        <div className="phase-info" aria-live="polite">
          <span className="eyebrow">
            PHASE {String(phase + 1).padStart(2, "0")} /{" "}
            {String(phases.length).padStart(2, "0")}
          </span>
          <FadeIn key={phase}>
            <span className="phase-time">{current.time}</span>
            <h3>{current.title}</h3>
            <p>{current.description}</p>
          </FadeIn>
          <div className="note">
            <Info size={15} />
            <span>
              Blocks and arrows illustrate relationships only. Their placement
              is not a reconstruction of historical units. Read the
              source-backed timeline below.
            </span>
          </div>
        </div>
      </div>
      <div className="timeline-controls">
        <button
          className="play-button"
          aria-label={playing ? "Pause timeline" : "Play timeline"}
          onClick={() => {
            if (phase === phases.length - 1) setPhase(0);
            setPlaying(!playing);
          }}
        >
          {playing ? <Pause size={17} /> : <Play size={17} />}
        </button>
        <button
          aria-label="Previous phase"
          disabled={phase === 0}
          onClick={() => {
            setPhase((p) => p - 1);
            setPlaying(false);
          }}
        >
          <ChevronLeft size={17} />
        </button>
        <div
          className="phase-tabs"
          role="group"
          aria-label="Select battle phase"
        >
          {phases.map((p, i) => (
            <button
              key={p.title}
              onClick={() => {
                setPhase(i);
                setPlaying(false);
              }}
              aria-pressed={phase === i}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {p.title}
            </button>
          ))}
        </div>
        <button
          aria-label="Next phase"
          disabled={phase === phases.length - 1}
          onClick={() => {
            setPhase((p) => p + 1);
            setPlaying(false);
          }}
        >
          <ChevronRight size={17} />
        </button>
        <button
          aria-label="Reset timeline"
          onClick={() => {
            setPhase(0);
            setPlaying(false);
          }}
        >
          <RotateCcw size={16} />
        </button>
      </div>
      <details className="text-timeline">
        <summary>Read the complete accessible timeline</summary>
        <ol>
          {phases.map((p) => (
            <li key={p.title}>
              <strong>
                {p.time} — {p.title}
              </strong>
              <p>{p.description}</p>
            </li>
          ))}
        </ol>
      </details>
    </section>
  );
}
