import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { SimulatorPage } from "../../components/views/simulator";
export const metadata = pageMetadata(
  "Decision Room",
  "Step into a historical decision point, weigh incomplete information and compare your reasoning with the historical record.",
  "/simulator/",
);
export default async function Page() {
  return <SimulatorPage c={await getCatalog()} />;
}
