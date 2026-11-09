import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { leadershipVolumes } from "../../../../data/leadership";
import { getCatalog } from "../../../../lib/content";
import { pageMetadata } from "../../../../lib/metadata";
import { LeadershipLessonPage } from "../../../../components/views/leadership";
type Props = {
  params: Promise<{ commanderSlug: string; lessonSlug: string }>;
};
export const dynamicParams = false;
export function generateStaticParams() {
  return leadershipVolumes.flatMap((v) =>
    v.lessons.map((l) => ({
      commanderSlug: v.commanderSlug,
      lessonSlug: l.slug,
    })),
  );
}
async function find(params: Props["params"]) {
  const { commanderSlug, lessonSlug } = await params;
  const volume = leadershipVolumes.find(
    (v) => v.commanderSlug === commanderSlug,
  );
  return { volume, lesson: volume?.lessons.find((l) => l.slug === lessonSlug) };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { volume, lesson } = await find(params);
  if (!volume || !lesson) return {};
  return pageMetadata(
    lesson.title,
    lesson.claim,
    `/leadership/${volume.commanderSlug}/${lesson.slug}/`,
    "article",
  );
}
export default async function Page({ params }: Props) {
  const { volume, lesson } = await find(params);
  if (!volume || !lesson) notFound();
  return (
    <LeadershipLessonPage
      volume={volume}
      lesson={lesson}
      c={await getCatalog()}
    />
  );
}
