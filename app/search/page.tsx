import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { SearchPage } from "../../components/views/search";
export const metadata = pageMetadata(
  "Search the Academy",
  "Search battles, commanders, wars, campaigns and lessons.",
  "/search/",
);
export default async function Page() {
  return <SearchPage c={await getCatalog()} />;
}
