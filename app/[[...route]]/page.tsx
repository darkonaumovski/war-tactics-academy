import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCatalog } from "../../lib/content";
import {
  HomePage,
  BattlesPage,
  BattlePage,
  CommandersPage,
  CommanderPage,
  ComparePage,
  WarsPage,
  WarPage,
  CampaignPage,
  AtlasPage,
  AcademyPage,
  CoursePage,
  LessonPage,
  SimulatorPage,
  ScenarioPage,
  LibraryPage,
  AboutPage,
  SearchPage,
  SavedPage,
} from "../../components/pages";
// Every page is prerendered at build time for static hosting (GitHub Pages).
// Paths not listed here 404 instead of rendering on demand.
export const dynamicParams = false;
type Props = { params: Promise<{ route?: string[] }> };
export async function generateStaticParams() {
  const c = await getCatalog();
  const sections = [
    "battles",
    "commanders",
    "wars",
    "atlas",
    "academy",
    "simulator",
    "library",
    "about",
    "search",
    "saved",
  ];
  return [
    [],
    ...sections.map((s) => [s]),
    ["commanders", "compare"],
    ["library", "videos"],
    ...c.battles.map((b) => ["battles", b.slug]),
    ...c.commanders.map((x) => ["commanders", x.slug]),
    ...c.wars.map((w) => ["wars", w.slug]),
    ...c.campaigns.map((x) => ["campaigns", x.slug]),
    ...c.courses.map((x) => ["academy", x.slug]),
    ...c.courses.flatMap((x) =>
      x.lessons.map((l) => ["academy", x.slug, l.slug]),
    ),
    ...c.scenarios.map((x) => ["simulator", x.slug]),
  ].map((route) => ({ route }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { route = [] } = await params;
  const c = await getCatalog();
  const slug = route.at(-1);
  const title =
    c.battles.find((b) => b.slug === slug)?.name ??
    c.commanders.find((b) => b.slug === slug)?.name ??
    (route[0] === "wars"
      ? c.wars.find((w) => w.slug === slug)?.name
      : undefined) ??
    (route[0] === "campaigns"
      ? c.campaigns.find((x) => x.slug === slug)?.name
      : undefined) ??
    (route[0] === "simulator"
      ? c.scenarios.find((x) => x.slug === slug)?.title
      : undefined) ??
    c.courses.find((b) => b.slug === slug)?.title ??
    (route[0] === "academy" && route.length === 3
      ? c.courses
          .find((b) => b.slug === route[1])
          ?.lessons.find((l) => l.slug === slug)?.title
      : undefined) ??
    (
      {
        battles: "Battle Atlas",
        commanders: "Hall of Commanders",
        wars: "Wars & Campaigns",
        atlas: "Interactive Atlas",
        academy: "The Academy",
        simulator: "Decision Room",
        library: "Sources & Library",
        about: "Our Methodology",
        search: "Search the Academy",
        saved: "My Collection",
        compare: "Compare Commanders",
        videos: "Documentaries & Lectures",
      } as Record<string, string>
    )[slug ?? ""];
  return title
    ? { title }
    : { title: "War Tactics Academy — The Art of Command" };
}
export default async function Page({ params }: Props) {
  const { route = [] } = await params;
  const c = await getCatalog();
  const [root, slug, lesson] = route;
  if (!root) return <HomePage c={c} />;
  if (route.length > 3) notFound();
  if (root === "battles" && route.length <= 2) {
    if (!slug) return <BattlesPage c={c} />;
    const b = c.battles.find((b) => b.slug === slug);
    if (!b) notFound();
    return <BattlePage battle={b} c={c} />;
  }
  if (root === "commanders" && route.length <= 2) {
    if (!slug) return <CommandersPage c={c} />;
    if (slug === "compare") return <ComparePage c={c} />;
    const b = c.commanders.find((b) => b.slug === slug);
    if (!b) notFound();
    return <CommanderPage commander={b} c={c} />;
  }
  if (root === "wars" && route.length <= 2) {
    if (!slug) return <WarsPage c={c} />;
    const w = c.wars.find((w) => w.slug === slug);
    if (!w) notFound();
    return <WarPage war={w} c={c} />;
  }
  if (root === "campaigns" && route.length === 2) {
    const campaign = c.campaigns.find((w) => w.slug === slug);
    if (!campaign) notFound();
    return <CampaignPage campaign={campaign} c={c} />;
  }
  if (root === "academy") {
    if (!slug) return <AcademyPage c={c} />;
    const course = c.courses.find((w) => w.slug === slug);
    if (!course) notFound();
    if (!lesson) return <CoursePage course={course} />;
    const l = course.lessons.find((l) => l.slug === lesson);
    if (!l) notFound();
    return <LessonPage lesson={l} course={course} c={c} />;
  }
  if (root === "simulator" && route.length <= 2) {
    if (!slug) return <SimulatorPage c={c} />;
    const s = c.scenarios.find((s) => s.slug === slug);
    if (!s) notFound();
    return <ScenarioPage scenario={s} c={c} />;
  }
  if (root === "library" && slug === "videos" && route.length === 2)
    return <LibraryPage c={c} videos />;
  if (route.length !== 1) notFound();
  switch (root) {
    case "atlas":
      return <AtlasPage c={c} />;
    case "library":
      return <LibraryPage c={c} />;
    case "about":
      return <AboutPage />;
    case "search":
      return <SearchPage c={c} />;
    case "saved":
      return <SavedPage />;
    default:
      notFound();
  }
}
