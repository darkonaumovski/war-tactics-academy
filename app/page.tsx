import { getCatalog } from "../lib/content";
import { pageMetadata, siteDescription } from "../lib/metadata";
import { HomePage } from "../components/views/home";
export const metadata = {
  ...pageMetadata(
    "War Tactics Academy — The Art of Command",
    siteDescription,
    "/",
  ),
  title: { absolute: "War Tactics Academy — The Art of Command" },
};
export default async function Page() {
  return <HomePage c={await getCatalog()} />;
}
