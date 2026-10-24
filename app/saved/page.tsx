import { pageMetadata } from "../../lib/metadata";
import { SavedPage } from "../../components/views/saved";
export const metadata = pageMetadata(
  "My Collection",
  "Your bookmarks, recent reading and progress, saved locally in this browser.",
  "/saved/",
);
export default function Page() {
  return <SavedPage />;
}
