import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { BattlesPage } from "../../components/views/battles";
export const metadata = pageMetadata(
  "Battle Atlas",
  "From the plains of Marathon to the Pacific: explore the terrain, decisions and consequences behind history's pivotal engagements.",
  "/battles/",
);
export default async function Page() {
  return <BattlesPage c={await getCatalog()} />;
}
