"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { eras } from "../data/catalog";
import { filterBattles, normalize } from "../lib/logic";
import type { Battle, Commander } from "../lib/types";
import { BattleCard, CommanderCard, Empty } from "./ui";
import { useHydrated } from "../lib/use-hydrated";
export function BattleCatalog({ battles }: { battles: Battle[] }) {
  const ready = useHydrated();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [era, setEra] = useState(params.get("era") ?? "");
  const [region, setRegion] = useState("");
  const [kind, setKind] = useState("");
  const result = filterBattles(battles, q, era, region, kind);
  return (
    <>
      <div className="filter-bar">
        <label className="search-field">
          <Search size={18} />
          <input
            disabled={!ready}
            aria-label="Search battles"
            placeholder="Find a battle, place or concept…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
        <label>
          <span className="sr-only">Historical era</span>
          <select
            disabled={!ready}
            aria-label="Historical era"
            value={era}
            onChange={(e) => setEra(e.target.value)}
          >
            <option value="">All eras</option>
            {eras.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Region</span>
          <select
            disabled={!ready}
            aria-label="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">All regions</option>
            {[...new Set(battles.map((b) => b.region))].sort().map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <select
          disabled={!ready}
          aria-label="Engagement category"
          value={kind}
          onChange={(e) => setKind(e.target.value)}
        >
          <option value="">All categories</option>
          {["Battle", "Siege", "Campaign"].map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      <div className="results-line">
        <span role="status">{result.length} engagements</span>
        <span>
          <SlidersHorizontal size={14} />{" "}
          {q || era || region || kind ? (
            <button
              className="text-button"
              onClick={() => {
                setQ("");
                setEra("");
                setRegion("");
                setKind("");
              }}
            >
              Clear filters <X size={13} />
            </button>
          ) : (
            "Chronological order"
          )}
        </span>
      </div>
      {result.length ? (
        <div className="battle-grid">
          {result.map((b) => (
            <BattleCard key={b.slug} battle={b} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}
export function CommanderCatalog({ commanders }: { commanders: Commander[] }) {
  const ready = useHydrated();
  const [q, setQ] = useState("");
  const [era, setEra] = useState("");
  const result = commanders.filter(
    (c) =>
      (!era || c.eraId === era) &&
      normalize(`${c.name} ${c.state} ${c.role}`).includes(normalize(q)),
  );
  return (
    <>
      <div className="filter-bar">
        <label className="search-field">
          <Search size={18} />
          <input
            disabled={!ready}
            aria-label="Search commanders"
            placeholder="Search a commander or civilization…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
        <select
          disabled={!ready}
          aria-label="Commander era"
          value={era}
          onChange={(e) => setEra(e.target.value)}
        >
          <option value="">All eras</option>
          {eras.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div className="results-line" role="status">
        {result.length} historical figures · Context, never rankings
      </div>
      {result.length ? (
        <div className="commander-grid">
          {result.map((c) => (
            <CommanderCard key={c.slug} commander={c} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}
export function Comparison({ commanders }: { commanders: Commander[] }) {
  const ready = useHydrated();
  const [a, setA] = useState(
    commanders.find((c) => c.name.includes("Napoleon"))?.slug ??
      commanders[0].slug,
  );
  const [b, setB] = useState(
    commanders.find((c) => c.name.includes("Wellesley"))?.slug ??
      commanders[1].slug,
  );
  const pair = [
    commanders.find((c) => c.slug === a)!,
    commanders.find((c) => c.slug === b)!,
  ];
  return (
    <>
      <div className="comparison-selectors">
        {[a, b].map((v, i) => (
          <label key={i}>
            Commander {i + 1}
            <select
              disabled={!ready}
              value={v}
              aria-label={`Commander ${i + 1}`}
              onChange={(e) => (i === 0 ? setA : setB)(e.target.value)}
            >
              {commanders.map((c) => (
                <option
                  key={c.slug}
                  value={c.slug}
                  disabled={c.slug === (i === 0 ? b : a)}
                >
                  {c.name}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="comparison-table">
        <table>
          <caption>Historical context and qualitative assessment</caption>
          <thead>
            <tr>
              <th scope="col">Dimension</th>
              {pair.map((c) => (
                <th scope="col" key={c.slug}>
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(
              [
                ["Context", "state"],
                ["Lifetime", "years"],
                ["Responsibility", "role"],
                ["Approach & resources", "approach"],
                ["Documented strengths", "strength"],
                ["Setbacks & limitations", "limitation"],
                ["Legacy", "legacy"],
              ] as const
            ).map(([label, key]) => (
              <tr key={key}>
                <th scope="row">{label}</th>
                {pair.map((c) => (
                  <td key={c.slug}>{c[key]}</td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row">Further reading</th>
              {pair.map((c) => (
                <td key={c.slug}>
                  <a
                    className="text-link"
                    href={c.source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.source.title} ↗
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
