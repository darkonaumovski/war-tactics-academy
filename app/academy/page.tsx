import { pageMetadata } from "../../lib/metadata";
import { getCatalog } from "../../lib/content";
import { AcademyPage } from "../../components/views/academy";
export const metadata = pageMetadata(
  "The Academy",
  "Structured learning paths with lessons, historical cases and quizzes, from foundations to the world wars.",
  "/academy/",
);
export default async function Page() {
  return <AcademyPage c={await getCatalog()} />;
}
