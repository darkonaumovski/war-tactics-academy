import { pageMetadata } from "../../lib/metadata";
import { LeadershipPage } from "../../components/views/leadership";
export const metadata = pageMetadata(
  "Leadership Lessons",
  "What a person who leads others can take from the great commanders, read by a historian, a strategist and a psychologist.",
  "/leadership/",
);
export default function Page() {
  return <LeadershipPage />;
}
