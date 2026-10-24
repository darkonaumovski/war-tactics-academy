import { pageMetadata } from "../../../lib/metadata";
import { getCatalog } from "../../../lib/content";
import { ComparePage } from "../../../components/views/commanders";
export const metadata = pageMetadata(
  "Compare Commanders",
  "Compare two commanders' historical context and evidence. No invented ratings, no all-time rankings.",
  "/commanders/compare/",
);
export default async function Page() {
  return <ComparePage c={await getCatalog()} />;
}
