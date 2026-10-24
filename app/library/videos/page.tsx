import { pageMetadata } from "../../../lib/metadata";
import { getCatalog } from "../../../lib/content";
import { LibraryPage } from "../../../components/views/library";
export const metadata = pageMetadata(
  "Documentaries & Lectures",
  "Official educational videos with attribution, loaded only when you choose to watch.",
  "/library/videos/",
);
export default async function Page() {
  return <LibraryPage c={await getCatalog()} videos />;
}
