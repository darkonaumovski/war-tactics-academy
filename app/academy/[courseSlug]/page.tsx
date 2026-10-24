import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalog } from "../../../lib/content";
import { pageMetadata } from "../../../lib/metadata";
import { CoursePage } from "../../../components/views/academy";
type Props = { params: Promise<{ courseSlug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  const c = await getCatalog();
  return c.courses.map((x) => ({ courseSlug: x.slug }));
}
async function find(params: Props["params"]) {
  const { courseSlug } = await params;
  const c = await getCatalog();
  return { c, record: c.courses.find((x) => x.slug === courseSlug) };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { record } = await find(params);
  if (!record) return {};
  return pageMetadata(
    record.title,
    record.description,
    `/academy/${record.slug}/`,
    "article",
  );
}
export default async function Page({ params }: Props) {
  const { record } = await find(params);
  if (!record) notFound();
  return <CoursePage course={record} />;
}
