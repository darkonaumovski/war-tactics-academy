import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { WarsPage } from "../../components/views/wars";
export const metadata = pageMetadata(
  "Wars & Campaigns",
  "A battle belongs to a campaign, and a campaign to a political struggle. Follow the connections across historical eras.",
  "/wars/",
);
export default async function Page() {
  return <WarsPage c={await getCatalog()} />;
}
