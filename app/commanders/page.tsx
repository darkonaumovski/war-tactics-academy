import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { CommandersPage } from "../../components/views/commanders";
export const metadata = pageMetadata(
  "Hall of Commanders",
  "Study the people behind the decisions: their resources, responsibilities, achievements and limitations.",
  "/commanders/",
);
export default async function Page() {
  return <CommandersPage c={await getCatalog()} />;
}
