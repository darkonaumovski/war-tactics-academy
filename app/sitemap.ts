import type { MetadataRoute } from "next";
import { getCatalog } from "../lib/content";
import { siteUrl } from "../lib/metadata";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const c = await getCatalog();
  const paths = [
    "",
    "battles/",
    "commanders/",
    "commanders/compare/",
    "wars/",
    "atlas/",
    "academy/",
    "simulator/",
    "library/",
    "library/videos/",
    "about/",
    ...c.battles.map((b) => `battles/${b.slug}/`),
    ...c.commanders.map((x) => `commanders/${x.slug}/`),
    ...c.wars.map((w) => `wars/${w.slug}/`),
    ...c.campaigns.map((x) => `campaigns/${x.slug}/`),
    ...c.courses.flatMap((x) => [
      `academy/${x.slug}/`,
      ...x.lessons.map((l) => `academy/${x.slug}/${l.slug}/`),
    ]),
    ...c.scenarios.map((x) => `simulator/${x.slug}/`),
  ];
  // Relative to siteUrl, which already includes any base path.
  return paths.map((p) => ({ url: new URL(p, siteUrl).href }));
}
