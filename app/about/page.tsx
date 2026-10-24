import { pageMetadata } from "../../lib/metadata";
import { AboutPage } from "../../components/views/about";
export const metadata = pageMetadata(
  "Our Methodology",
  "How War Tactics Academy separates historical fact, interpretation, uncertainty and counterfactual analysis.",
  "/about/",
);
export default function Page() {
  return <AboutPage />;
}
