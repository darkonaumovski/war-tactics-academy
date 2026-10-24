import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { LibraryPage } from "../../components/views/library";
export const metadata = pageMetadata(
  "Sources & Library",
  "Primary accounts, institutional histories, historic maps, portraits and official videos, with attribution and licensing.",
  "/library/",
);
export default async function Page() {
  return <LibraryPage c={await getCatalog()} />;
}
