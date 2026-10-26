import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heading } from "../ui";
export function AboutPage() {
  return (
    <div className="page-container narrow">
      <Heading
        eyebrow="OUR METHODOLOGY"
        title="History deserves careful questions."
        description="War Tactics Academy is an independent educational project about historical decisions and their human consequences."
      />
      <article className="prose">
        <h2>Learn from history. Think like a general.</h2>
        <p>
          Our purpose is to understand what commanders could know, how
          institutions constrained them, and why decisions had consequences.
          Studying military effectiveness does not excuse conquest, slavery, war
          crimes or extremist ideology.
        </p>
        <h2>Three kinds of claim</h2>
        <p>
          <strong>Historical account:</strong> a claim grounded in the cited
          record. Ancient and retrospective narratives can still be disputed.{" "}
          <strong>Interpretation:</strong> an explanation of significance or
          reasoning. <strong>Uncertainty:</strong> a limit of the surviving
          evidence or an unresolved dispute.
        </p>
        <h2>What the maps can tell you</h2>
        <p>
          Atlas markers locate approximate areas using modern geography. Battle
          replay diagrams are conceptual schematics. Their blocks and arrows do
          not establish surveyed unit positions, force sizes or exact movement
          routes. Decorative maps are original illustrations.
        </p>
        <h2>An honest first edition</h2>
        <p>
          Sixteen engagements have referenced analyses. Other engagement
          records, war indexes and commander summaries provide orientation and
          identify their editorial limits. Dates and transliterations follow
          common modern conventions; no year zero is used. Figures are assessed
          qualitatively, without invented ratings.
        </p>
        <h2>Learning, not winning</h2>
        <p>
          Decision exercises contain historically constrained choices and
          explain trade-offs. The alternatives are counterfactual; we do not
          claim to calculate what would have happened. Lesson completion
          measures participation and stores your best quiz score, not mastery
          certification.
        </p>
        <h2>Your reading belongs to you</h2>
        <p>
          Bookmarks, recently explored records and learning progress are saved
          in this browser. No account is required, and no analytics are
          installed. Clearing browser storage removes your progress. External
          source links open publisher websites with their own policies.
        </p>
        <h2>Sources and correction</h2>
        <p>
          Each detailed study links to its reading. Institutional scholarship is
          preferred where available, while ancient narratives are identified as
          such. Bibliographies are a starting point for verification, not a
          substitute for critical reading. Editorial corrections can be made
          through the project’s versioned content files.
        </p>
      </article>
      <Link className="button secondary" href="/library">
        Visit the source library <ArrowRight size={16} />
      </Link>
    </div>
  );
}
