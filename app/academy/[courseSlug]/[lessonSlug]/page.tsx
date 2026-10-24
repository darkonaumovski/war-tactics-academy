import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalog } from "../../../../lib/content";
import { pageMetadata } from "../../../../lib/metadata";
import { LessonPage } from "../../../../components/views/academy";
type Props = { params: Promise<{ courseSlug: string; lessonSlug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  const c = await getCatalog();
  return c.courses.flatMap((course) =>
    course.lessons.map((l) => ({
      courseSlug: course.slug,
      lessonSlug: l.slug,
    })),
  );
}
async function find(params: Props["params"]) {
  const { courseSlug, lessonSlug } = await params;
  const c = await getCatalog();
  const course = c.courses.find((x) => x.slug === courseSlug);
  return {
    c,
    course,
    lesson: course?.lessons.find((l) => l.slug === lessonSlug),
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course, lesson } = await find(params);
  if (!course || !lesson) return {};
  return pageMetadata(
    lesson.title,
    `${course.title}: ${lesson.objectives.join(" ")}`,
    `/academy/${course.slug}/${lesson.slug}/`,
    "article",
  );
}
export default async function Page({ params }: Props) {
  const { c, course, lesson } = await find(params);
  if (!course || !lesson) notFound();
  return <LessonPage lesson={lesson} course={course} c={c} />;
}
