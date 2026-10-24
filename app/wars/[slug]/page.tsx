import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalog } from "../../../lib/content";
import { pageMetadata } from "../../../lib/metadata";
import { WarPage } from "../../../components/views/wars";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  const c = await getCatalog();
  return c.wars.map((x) => ({ slug: x.slug }));
}
async function find(params: Props["params"]) {
  const { slug } = await params;
  const c = await getCatalog();
  return { c, record: c.wars.find((x) => x.slug === slug) };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { record } = await find(params);
  if (!record) return {};
  return pageMetadata(
    record.name,
    record.summary,
    `/wars/${record.slug}/`,
    "article",
  );
}
export default async function Page({ params }: Props) {
  const { c, record } = await find(params);
  if (!record) notFound();
  return <WarPage war={record} c={c} />;
}
