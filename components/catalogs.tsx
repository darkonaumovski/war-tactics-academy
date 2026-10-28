"use client";
import { Suspense, useState, type ReactNode } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LayoutGrid, List, Search, SlidersHorizontal, X } from "lucide-react";
import { eras } from "../data/catalog";
import { collections } from "../data/collections";
import {
  emptyFilters,
  filterBattles,
  filterQuery,
  normalize,
  parseFilters,
  sortBattles,
  type BattleFilters,
} from "../lib/logic";
import type { Battle, Catalog, Commander } from "../lib/types";
import { BattleCard, CommanderCard, Empty } from "./ui";
import { useHydrated } from "../lib/use-hydrated";
// Pages are prerendered for static hosting, so the unfiltered catalog is the
// build-time fallback and URL filters apply once the page hydrates.
export function BattleCatalog({ c }: { c: Catalog }) {
  return (
    <Suspense fallback={<BattleCatalogView c={c} urlQuery="" />}>
      <BattleCatalogFromUrl c={c} />
    </Suspense>
  );
}
function BattleCatalogFromUrl({ c }: { c: Catalog }) {
  return <BattleCatalogView c={c} urlQuery={useSearchParams().toString()} />;
}
function BattleCatalogView({ c, urlQuery }: { c: Catalog; urlQuery: string }) {
  const ready = useHydrated();
  const { battles } = c;
  // Order wars and campaigns by their first engagement, so lists read in time.
  const first = (key: "warId" | "campaignId", slug: string) =>
    battles.findIndex((b) => b[key] === slug);
  const wars = c.wars
    .filter((w) => first("warId", w.slug) >= 0)
    .sort((a, b) => first("warId", a.slug) - first("warId", b.slug));
  const campaigns = c.campaigns
    .filter((x) => first("campaignId", x.slug) >= 0)
    .sort((a, b) => first("campaignId", a.slug) - first("campaignId", b.slug));
  const commanders = c.commanders
    .map((x) => ({
      ...x,
      count: battles.filter((b) => x.battleSlugs.includes(b.slug)).length,
    }))
    .filter((x) => x.count);
  // Keep era, war and campaign consistent: a campaign implies its war, and a
  // war or campaign outside the chosen era is dropped.
  const consistent = (n: BattleFilters) => {
    const campaign = campaigns.find((x) => x.slug === n.campaign);
    if (campaign && !n.war) n.war = campaign.warId;
    const war = wars.find((w) => w.slug === n.war);
    if (war && n.era && war.eraId !== n.era) n.war = "";
    if (campaign && campaign.warId !== n.war) n.campaign = "";
    return n;
  };
  const parse = (query: string) =>
    consistent(
      parseFilters(new URLSearchParams(query), {
        era: eras.map((e) => e.id),
        war: wars.map((w) => w.slug),
        campaign: campaigns.map((x) => x.slug),
        commander: commanders.map((x) => x.slug),
        collection: collections.map((x) => x.slug),
      }),
    );
  const [f, setF] = useState(() => parse(urlQuery));
  // The URL changes either because this view wrote it or because the reader
  // followed a link to another filtered view; only the second resets state.
  const [seen, setSeen] = useState(urlQuery);
  if (urlQuery !== seen) {
    setSeen(urlQuery);
    if (urlQuery !== filterQuery(f)) setF(parse(urlQuery));
  }
  const update = (patch: Partial<BattleFilters>) => {
    const next = { ...f, ...patch };
    if (patch.campaign)
      next.war =
        campaigns.find((x) => x.slug === patch.campaign)?.warId ?? next.war;
    consistent(next);
    setF(next);
    const query = filterQuery(next);
    window.history.replaceState(
      null,
      "",
      query ? `?${query}` : window.location.pathname,
    );
  };
  const result = sortBattles(
    filterBattles(battles, f, { commanders: c.commanders, collections }),
    f.sort,
  );
  const name = (list: { slug: string; name: string }[], slug: string) =>
    list.find((x) => x.slug === slug)?.name ?? "";
  const select = (
    label: string,
    key: keyof BattleFilters,
    all: string,
    options: ReactNode,
  ) => (
    <select
      disabled={!ready}
      aria-label={label}
      value={f[key]}
      onChange={(e) => update({ [key]: e.target.value })}
    >
      <option value="">{all}</option>
      {options}
    </select>
  );
  const visibleWars = wars.filter((w) => !f.era || w.eraId === f.era);
  return (
    <>
      <div className="filter-bar battle-filters">
        <label className="search-field">
          <Search size={18} />
          <input
            disabled={!ready}
            aria-label="Search battles"
            placeholder="Find a battle, place or concept…"
            value={f.q}
            onChange={(e) => update({ q: e.target.value })}
          />
        </label>
        <div className="filter-grid">
          {select(
            "Historical era",
            "era",
            "All eras",
            eras.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            )),
          )}
          {select(
            "War",
            "war",
            "All wars",
            eras
              .filter((e) => visibleWars.some((w) => w.eraId === e.id))
              .map((e) => (
                <optgroup key={e.id} label={e.name}>
                  {visibleWars
                    .filter((w) => w.eraId === e.id)
                    .map((w) => (
                      <option key={w.slug} value={w.slug}>
                        {w.name}
                      </option>
                    ))}
                </optgroup>
              )),
          )}
          {select(
            "Campaign",
            "campaign",
            "All campaigns",
            f.war
              ? campaigns
                  .filter((x) => x.warId === f.war)
                  .map((x) => (
                    <option key={x.slug} value={x.slug}>
                      {x.name}
                    </option>
                  ))
              : visibleWars.map((w) => (
                  <optgroup key={w.slug} label={w.name}>
                    {campaigns
                      .filter((x) => x.warId === w.slug)
                      .map((x) => (
                        <option key={x.slug} value={x.slug}>
                          {x.name}
                        </option>
                      ))}
                  </optgroup>
                )),
          )}
          {select(
            "Commander",
            "commander",
            "All commanders",
            commanders.map((x) => (
              <option key={x.slug} value={x.slug}>
                {x.name} ({x.count})
              </option>
            )),
          )}
          {select(
            "Collection",
            "collection",
            "All collections",
            collections.map((x) => (
              <option key={x.slug} value={x.slug}>
                {x.title}
              </option>
            )),
          )}
          {select(
            "Region",
            "region",
            "All regions",
            [...new Set(battles.map((b) => b.region))]
              .sort()
              .map((r) => <option key={r}>{r}</option>),
          )}
          {select(
            "Engagement category",
            "kind",
            "All categories",
            ["Battle", "Siege", "Operation", "Campaign"].map((k) => (
              <option key={k}>{k}</option>
            )),
          )}
        </div>
      </div>
      <div className="results-line">
        <span role="status">{result.length} engagements</span>
        <span className="results-tools">
          <label>
            <SlidersHorizontal size={14} />
            <select
              disabled={!ready}
              aria-label="Sort engagements"
              value={f.sort}
              onChange={(e) => update({ sort: e.target.value })}
            >
              <option value="date">Oldest first</option>
              <option value="date-desc">Newest first</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
          <span className="view-toggle" role="group" aria-label="Layout">
            <button
              disabled={!ready}
              aria-pressed={f.view === "cards"}
              aria-label="Card view"
              onClick={() => update({ view: "cards" })}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              disabled={!ready}
              aria-pressed={f.view === "list"}
              aria-label="List view"
              onClick={() => update({ view: "list" })}
            >
              <List size={14} />
            </button>
          </span>
          {filterQuery(f) !== "" && (
            <button
              className="text-button"
              onClick={() => update(emptyFilters)}
            >
              Clear filters <X size={13} />
            </button>
          )}
        </span>
      </div>
      {!result.length ? (
        <Empty />
      ) : f.view === "list" ? (
        <BattleTable
          battles={result}
          wars={wars}
          campaigns={campaigns}
          name={name}
        />
      ) : (
        <div className="battle-grid">
          {result.map((b) => (
            <BattleCard key={b.slug} battle={b} />
          ))}
        </div>
      )}
    </>
  );
}
function BattleTable({
  battles,
  wars,
  campaigns,
  name,
}: {
  battles: Battle[];
  wars: { slug: string; name: string }[];
  campaigns: { slug: string; name: string }[];
  name: (list: { slug: string; name: string }[], slug: string) => string;
}) {
  return (
    <div
      className="battle-table"
      role="region"
      aria-label="Engagements as a list"
      tabIndex={0}
    >
      <table>
        <caption className="sr-only">Engagements matching the filters</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Engagement</th>
            <th scope="col" className="wide-only">
              Category
            </th>
            <th scope="col" className="wide-only">
              War
            </th>
            <th scope="col">Campaign</th>
            <th scope="col" className="wide-only">
              Region
            </th>
          </tr>
        </thead>
        <tbody>
          {battles.map((b) => (
            <tr key={b.slug}>
              <td>{b.date}</td>
              <th scope="row">
                <Link href={`/battles/${b.slug}`}>{b.name}</Link>
              </th>
              <td className="wide-only">{b.kind}</td>
              <td className="wide-only">{name(wars, b.warId)}</td>
              <td>{name(campaigns, b.campaignId)}</td>
              <td className="wide-only">{b.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function CommanderCatalog({ commanders }: { commanders: Commander[] }) {
  const ready = useHydrated();
  const [q, setQ] = useState("");
  const [era, setEra] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    ...new Set(commanders.flatMap((c) => c.details?.category ?? [])),
  ].sort();
  const result = commanders.filter(
    (c) =>
      (!era || c.eraId === era) &&
      (!category || c.details?.category === category) &&
      normalize(
        `${c.name} ${c.state} ${c.role} ${c.details?.titles ?? ""}`,
      ).includes(normalize(q)),
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
        <select
          disabled={!ready}
          aria-label="Commander type"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All command roles</option>
          {categories.map((x) => (
            <option key={x} value={x}>
              {x}
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
                ["Context", (c) => c.state],
                ["Lifetime", (c) => c.years],
                ["Command role", (c) => c.details?.category],
                ["Ranks & titles", (c) => c.details?.titles],
                ["Responsibility", (c) => c.role],
                [
                  "Principal commands",
                  (c) =>
                    c.details && (
                      <ul>
                        {c.details.principalCommands.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    ),
                ],
                ["Approach & resources", (c) => c.approach],
                ["Documented strengths", (c) => c.strength],
                ["A notable decision", (c) => c.details?.notableDecision],
                ["Setbacks & limitations", (c) => c.limitation],
                ["Defeats & reverses", (c) => c.details?.setback],
                ["Legacy", (c) => c.legacy],
              ] as [string, (c: Commander) => ReactNode][]
            ).map(([label, cell]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {pair.map((c) => (
                  <td key={c.slug}>{cell(c) ?? "—"}</td>
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
