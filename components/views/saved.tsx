import { Heading, SectionTitle } from "../ui";
import { SavedCollection } from "../persistence-ui";
export function SavedPage() {
  return (
    <div className="page-container">
      <Heading
        eyebrow="YOUR PERSONAL FIELD GUIDE"
        title="My collection"
        description="Return to the questions that caught your attention. Saved locally in this browser."
      />
      <h2>Saved records</h2>
      <SavedCollection />
      <SectionTitle number="↺" title="Recently explored" />
      <SavedCollection recent />
    </div>
  );
}
