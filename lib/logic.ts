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
export function filterBattles(
  battles: Battle[],
  f: Partial<BattleFilters>,
  links: {
    commanders?: { slug: string; battleSlugs: string[] }[];
    collections?: { slug: string; wars?: string[]; campaigns?: string[] }[];
  } = {},
) {
  const q = normalize((f.q ?? "").trim());
  const commander = links.commanders?.find((c) => c.slug === f.commander);
  const collection = links.collections?.find((c) => c.slug === f.collection);
  return battles.filter(
    (b) =>
      (!q ||
        normalize(`${b.name} ${b.summary} ${b.location} ${b.topic}`).includes(
          q,
        )) &&
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
