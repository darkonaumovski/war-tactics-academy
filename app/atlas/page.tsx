import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { AtlasPage } from "../../components/views/atlas";
export const metadata = pageMetadata(
  "Interactive Atlas",
  "Place each engagement in its approximate geographic context on an offline world map.",
  "/atlas/",
);
export default async function Page() {
  return <AtlasPage c={await getCatalog()} />;
}
