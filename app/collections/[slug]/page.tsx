import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalog } from "../../../lib/content";
import { pageMetadata } from "../../../lib/metadata";
import { collections } from "../../../data/collections";
import { CollectionPage } from "../../../components/views/collections";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return collections.map((x) => ({ slug: x.slug }));
}
async function find(params: Props["params"]) {
  const { slug } = await params;
  return collections.find((x) => x.slug === slug);
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const record = await find(params);
  if (!record) return {};
  return pageMetadata(
    record.title,
    record.summary,
    `/collections/${record.slug}/`,
    "article",
  );
}
export default async function Page({ params }: Props) {
  const record = await find(params);
  if (!record) notFound();
  return <CollectionPage collection={record} c={await getCatalog()} />;
}
