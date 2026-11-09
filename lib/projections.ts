import type {
  Battle,
  Campaign,
  Catalog,
  Collection,
  Commander,
  War,
} from "./types";
// Every prop passed to a client component is written into the page. These
// projections name the fields each client view reads, field by field, so that
// a new field on a record stays off the list pages until a view asks for it.
export type BattleListing = Pick<
  Battle,
  | "slug"
  | "name"
  | "date"
  | "eraId"
  | "kind"
  | "region"
  | "location"
  | "lat"
  | "lon"
  | "warId"
  | "campaignId"
  | "summary"
  | "topic"
> & { hasStudy: boolean };
export const battleListing = (b: Battle): BattleListing => ({
  slug: b.slug,
  name: b.name,
  date: b.date,
  eraId: b.eraId,
  kind: b.kind,
  region: b.region,
  location: b.location,
  lat: b.lat,
  lon: b.lon,
  warId: b.warId,
  campaignId: b.campaignId,
  summary: b.summary,
  topic: b.topic,
  hasStudy: !!b.research,
});
export type BattleCatalogData = {
  battles: BattleListing[];
  wars: Pick<War, "slug" | "name" | "eraId">[];
  campaigns: Pick<Campaign, "slug" | "name" | "warId">[];
  commanders: Pick<Commander, "slug" | "name" | "battleSlugs">[];
  collections: Pick<Collection, "slug" | "title" | "wars" | "campaigns">[];
};
export const battleCatalogData = (
  c: Catalog,
  collections: Collection[],
): BattleCatalogData => ({
  battles: c.battles.map(battleListing),
  wars: c.wars.map((w) => ({ slug: w.slug, name: w.name, eraId: w.eraId })),
  campaigns: c.campaigns.map((x) => ({
    slug: x.slug,
    name: x.name,
    warId: x.warId,
  })),
  commanders: c.commanders.map((x) => ({
    slug: x.slug,
    name: x.name,
    battleSlugs: x.battleSlugs,
  })),
  collections: collections.map((x) => ({
    slug: x.slug,
    title: x.title,
    wars: x.wars,
    campaigns: x.campaigns,
  })),
});
export type AtlasBattle = Pick<
  Battle,
  "slug" | "name" | "date" | "eraId" | "kind" | "location" | "lat" | "lon"
>;
export const atlasBattle = (b: Battle): AtlasBattle => ({
  slug: b.slug,
  name: b.name,
  date: b.date,
  eraId: b.eraId,
  kind: b.kind,
  location: b.location,
  lat: b.lat,
  lon: b.lon,
});
