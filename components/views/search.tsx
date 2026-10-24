import type { Catalog } from "../../lib/types";
import { Heading } from "../ui";
import { SearchResults, type SearchRecord } from "../search";
export function SearchPage({ c }: { c: Catalog }) {
  const records: SearchRecord[] = [
    ...c.battles.map((b) => ({
      title: b.name,
      text: b.summary,
      href: `/battles/${b.slug}`,
      type: "Battle",
    })),
    ...c.commanders.map((b) => ({
      title: b.name,
      text: b.summary,
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
      href: `/campaigns/${b.slug}`,
      type: "Campaign",
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
