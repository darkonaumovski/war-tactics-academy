import type { Battle, Question } from "./types";
export function formatYear(year: number) {
  if (!Number.isInteger(year) || year === 0)
    throw new Error("Historical year must be a nonzero integer");
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}
export const normalize = (v: string) =>
  v
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
// Catalog filters live in the URL so a filtered view can be shared. Keys are
// written in this order and only when they differ from the default.
export const filterKeys = [
  "q",
  "era",
  "region",
  "kind",
  "war",
  "campaign",
  "commander",
  "collection",
  "sort",
  "view",
] as const;
export type FilterKey = (typeof filterKeys)[number];
export type BattleFilters = Record<FilterKey, string>;
export const sortOrders = ["date", "date-desc", "name"] as const;
export const views = ["cards", "list"] as const;
export const emptyFilters: BattleFilters = {
  q: "",
  era: "",
  region: "",
  kind: "",
  war: "",
  campaign: "",
  commander: "",
  collection: "",
  sort: "date",
  view: "cards",
};
// Values outside `allowed` (an unknown war, a misspelt sort) fall back to the
// default, so a stale or edited link still shows a sensible catalog.
export function parseFilters(
  params: { get(key: string): string | null },
  allowed: Partial<Record<FilterKey, readonly string[]>> = {},
): BattleFilters {
  const valid: Partial<Record<FilterKey, readonly string[]>> = {
    sort: sortOrders,
    view: views,
    ...allowed,
  };
  const f = { ...emptyFilters };
  for (const key of filterKeys) {
    const v = params.get(key);
    if (v && (!valid[key] || valid[key].includes(v))) f[key] = v;
  }
  return f;
}
export function filterQuery(f: Partial<BattleFilters>) {
  const params = new URLSearchParams();
  for (const key of filterKeys) {
    const v = f[key];
    if (v && v !== emptyFilters[key]) params.set(key, v);
  }
  return params.toString();
}
// A collection holds every engagement of its listed wars and campaigns.
export const inCollection = (
  c: { wars?: string[]; campaigns?: string[] },
  b: Battle,
) => !!(c.wars?.includes(b.warId) || c.campaigns?.includes(b.campaignId));
// Every word of the query must appear somewhere in the text, in any order;
// case and accents are ignored.
export function matchesQuery(text: string, query: string) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const t = normalize(text);
  return words.every((w) => t.includes(w));
}
// Lower ranks come first: exact title, title containing the query, title
// containing every word, other text containing the whole query, then any
// other match (its words scattered, or inside longer words).
export function searchRank(title: string, query: string, text = "") {
  const q = normalize(query.trim()).replace(/\s+/g, " ");
  const t = normalize(title);
  if (!q) return 4;
  if (t === q) return 0;
  if (t.includes(q)) return 1;
  if (matchesQuery(title, query)) return 2;
  return normalize(text).replace(/\s+/g, " ").includes(q) ? 3 : 4;
}
type SearchLinks = {
  wars?: { slug: string; name: string }[];
  campaigns?: { slug: string; name: string }[];
  commanders?: { slug: string; name: string; battleSlugs: string[] }[];
  collections?: {
    slug: string;
    title: string;
    wars?: string[];
    campaigns?: string[];
  }[];
};
// What an engagement can be found by: its own fields plus the names of its
// war, campaign, commanders and collections.
export const battleSearchText = (b: Battle, links: SearchLinks = {}) =>
  [
    b.name,
    b.summary,
    b.location,
    b.topic,
    b.date,
    b.kind,
    links.wars?.find((w) => w.slug === b.warId)?.name,
    links.campaigns?.find((c) => c.slug === b.campaignId)?.name,
    ...(links.commanders ?? [])
      .filter((c) => c.battleSlugs.includes(b.slug))
      .map((c) => c.name),
    ...(links.collections ?? [])
      .filter((c) => inCollection(c, b))
      .map((c) => c.title),
  ]
    .filter(Boolean)
    .join(" ");
export function filterBattles(
  battles: Battle[],
  f: Partial<BattleFilters>,
  links: SearchLinks = {},
) {
  const q = (f.q ?? "").trim();
  const commander = links.commanders?.find((c) => c.slug === f.commander);
  const collection = links.collections?.find((c) => c.slug === f.collection);
  return battles.filter(
    (b) =>
      (!q || matchesQuery(battleSearchText(b, links), q)) &&
      (!f.era || b.eraId === f.era) &&
      (!f.region || b.region === f.region) &&
      (!f.kind || b.kind === f.kind) &&
      (!f.war || b.warId === f.war) &&
      (!f.campaign || b.campaignId === f.campaign) &&
      (!f.commander || !!commander?.battleSlugs.includes(b.slug)) &&
      (!f.collection || (!!collection && inCollection(collection, b))),
  );
}
// Catalog order is already chronological (Battle.ordinal).
export function sortBattles(battles: Battle[], sort: string) {
  if (sort === "date-desc") return [...battles].reverse();
  if (sort === "name")
    return [...battles].sort((a, b) => a.name.localeCompare(b.name, "en"));
  return battles;
}
export function nextPhase(current: number, count: number) {
  return count < 1 ? 0 : (current + 1) % count;
}
export function quizScore(questions: Question[], answers: number[]) {
  return questions.reduce(
    (score, q, i) => score + Number(q.answer === answers[i]),
    0,
  );
}
export function decisionTransition(
  state: "briefing" | "feedback",
  option: number,
  count: number,
) {
  if (
    state !== "briefing" ||
    !Number.isInteger(option) ||
    option < 0 ||
    option >= count
  )
    throw new Error("Invalid decision transition");
  return "feedback" as const;
}
// Career strip: one dot per linked engagement on a year axis, stacked within
// a year, with a band per war spanning the commander's engagements in it.
export const CAREER_WIDTH = 600;
const CAREER_PAD = 24;
export function careerLayout(
  battles: Battle[],
  wars: { slug: string; name: string }[],
) {
  const years = battles.map((b) => b.year);
  const lo = Math.min(...years) - 1;
  const hi = Math.max(...years) + 1;
  const x = (year: number) =>
    CAREER_PAD + ((year - lo) / (hi - lo)) * (CAREER_WIDTH - 2 * CAREER_PAD);
  const seen = new Map<number, number>();
  const dots = battles.map((b) => {
    const level = seen.get(b.year) ?? 0;
    seen.set(b.year, level + 1);
    return { slug: b.slug, name: b.name, year: b.year, x: x(b.year), level };
  });
  // The smallest step that keeps the axis to at most eight labels.
  const step =
    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500].find((s) => (hi - lo) / s <= 8) ??
    1000;
  const ticks: number[] = [];
  for (let y = Math.ceil(lo / step) * step; y <= hi; y += step)
    if (y !== 0) ticks.push(y);
  const bands: { name: string; from: number; to: number; row: number }[] = [];
  for (const b of battles) {
    const name = wars.find((w) => w.slug === b.warId)?.name ?? b.warId;
    const band = bands.find((x) => x.name === name);
    if (band) band.to = b.year;
    else bands.push({ name, from: b.year, to: b.year, row: 0 });
  }
  // Bands that overlap in time go on separate rows.
  for (const [i, band] of bands.entries())
    while (
      bands
        .slice(0, i)
        .some(
          (o) => o.row === band.row && o.from <= band.to && band.from <= o.to,
        )
    )
      band.row++;
  return {
    dots,
    ticks: ticks.map((year) => ({ year, x: x(year) })),
    bands: bands.map((b) => ({ ...b, x1: x(b.from) - 8, x2: x(b.to) + 8 })),
    stack: Math.max(...seen.values()),
    rows: Math.max(...bands.map((b) => b.row)) + 1,
  };
}
