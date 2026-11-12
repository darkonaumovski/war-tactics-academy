import { pageMetadata } from "../../../lib/metadata";
import { LeadershipComparePage } from "../../../components/views/leadership";
export const metadata = pageMetadata(
  "Compare the volumes",
  "The same leadership problems in Napoleon’s career, Alexander’s and the Serbian Supreme Command’s, with each volume’s lessons set side by side.",
  "/leadership/compare/",
);
export default function Page() {
  return <LeadershipComparePage />;
}
