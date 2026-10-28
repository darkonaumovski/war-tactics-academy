import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { CollectionsPage } from "../../components/views/collections";
export const metadata = pageMetadata(
  "Collections",
  "Curated paths through the catalog: Alexander, Rome, Napoleon, the First and Second World Wars and the Serbian Front, each with its strategic arc and a dated timeline of studies.",
  "/collections/",
);
export default async function Page() {
  return <CollectionsPage c={await getCatalog()} />;
}
