import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { leadershipVolumes } from "../../../data/leadership";
import { pageMetadata } from "../../../lib/metadata";
import { LeadershipVolumePage } from "../../../components/views/leadership";
type Props = { params: Promise<{ commanderSlug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return leadershipVolumes.map((v) => ({ commanderSlug: v.commanderSlug }));
}
async function find(params: Props["params"]) {
  const { commanderSlug } = await params;
  return leadershipVolumes.find((v) => v.commanderSlug === commanderSlug);
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const volume = await find(params);
  if (!volume) return {};
  return pageMetadata(
    volume.title,
    volume.summary,
    `/leadership/${volume.commanderSlug}/`,
    "article",
  );
}
export default async function Page({ params }: Props) {
  const volume = await find(params);
  if (!volume) notFound();
  return <LeadershipVolumePage volume={volume} />;
}
