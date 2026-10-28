import type { Catalog } from "../../lib/types";
import { Heading } from "../ui";
import { SearchResults, type SearchRecord } from "../search";
import { collections } from "../../data/collections";
import { battleSearchText, formatYear } from "../../lib/logic";
export function SearchPage({ c }: { c: Catalog }) {
  const warName = (slug: string) => c.wars.find((w) => w.slug === slug)?.name;
  const campaignName = (slug: string) =>
    c.campaigns.find((x) => x.slug === slug)?.name;
  const records: SearchRecord[] = [
    ...c.battles.map((b) => ({
      title: b.name,
      text: b.summary,
      keywords: battleSearchText(b, {
        wars: c.wars,
        campaigns: c.campaigns,
        commanders: c.commanders,
        collections,
      }),
      meta: [
        b.kind,
        formatYear(b.year),
        warName(b.warId),
        campaignName(b.campaignId),
      ]
        .filter(Boolean)
        .join(" · "),
      href: `/battles/${b.slug}`,
      type: "Battle",
    })),
    ...c.commanders.map((b) => ({
      title: b.name,
      text: b.summary,
      keywords: `${b.state} ${b.role} ${b.details?.titles ?? ""}`,
      href: `/commanders/${b.slug}`,
      type: "Commander",
    })),
    ...c.wars.map((b) => ({
      title: b.name,
      text: b.summary,
      href: `/wars/${b.slug}`,
      type: "War",
    })),
    ...c.campaigns.map((b) => ({
      title: b.name,
      text: b.summary,
      keywords: warName(b.warId),
      href: `/campaigns/${b.slug}`,
      type: "Campaign",
    })),
    ...collections.map((x) => ({
      title: x.title,
      text: x.summary,
      keywords: x.introduction,
      href: `/collections/${x.slug}`,
      type: "Collection",
    })),
    ...c.courses.flatMap((course) => [
      {
        title: course.title,
        text: course.description,
        href: `/academy/${course.slug}`,
        type: "Learning",
      },
      ...course.lessons.map((l) => ({
        title: l.title,
        text: l.paragraphs.join(" "),
        href: `/academy/${course.slug}/${l.slug}`,
        type: "Learning",
      })),
    ]),
  ];
  return (
    <div className="page-container">
      <Heading eyebrow="FOLLOW YOUR CURIOSITY" title="Search the Academy" />
      <SearchResults records={records} />
    </div>
  );
}
