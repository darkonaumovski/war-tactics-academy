import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import type { Catalog, Scenario } from "../../lib/types";
import { Heading, Breadcrumbs, Sources } from "../ui";
import { BattleMap } from "../battle-map";
import { ScenarioStatus } from "../persistence-ui";
import { DecisionExercise } from "../learning";
export function SimulatorPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="THE DECISION ROOM / 06"
        title="The outcome isn’t known. Yet."
        description="Step into a historical decision point. Work with imperfect information, consider the trade-offs and compare your reasoning with the historical record."
      />
      <div className="scenario-grid">
        {c.scenarios.map((s, i) => (
          <Link
            className="scenario-card"
            href={`/simulator/${s.slug}`}
            key={s.slug}
          >
            <span className="scenario-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="eyebrow">{s.commander}</span>
            <h2>{s.title}</h2>
            <p>{s.situation}</p>
            <ScenarioStatus id={s.slug} />
            <span className="text-link">
              Open the briefing <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
      <div className="note">
        <Info size={18} />
        <span>
          Curated historical exercises, not a combat simulation. Alternative
          outcomes are explicitly counterfactual. No score ranks commanders or
          glorifies loss.
        </span>
      </div>
    </div>
  );
}
export function ScenarioPage({
  scenario: s,
  c,
}: {
  scenario: Scenario;
  c: Catalog;
}) {
  const b = c.battles.find((b) => b.slug === s.battleSlug)!;
  return (
    <div className="page-container">
      <Breadcrumbs
        items={[
          { name: "Decision Room", href: "/simulator" },
          { name: s.title },
        ]}
      />
      <Heading
        eyebrow={`${b.name} / HISTORICAL DECISION EXERCISE`}
        title={s.title}
      />
      <DecisionExercise scenario={s} />
      <h2>Examine the historical setting</h2>
      <p className="muted">
        This replay describes the known sequence. If you want to reason from the
        briefing alone, complete your choice before exploring it.
      </p>
      <BattleMap battle={b} />
      <Link className="text-link" href={`/battles/${b.slug}`}>
        Read the full {b.name} analysis →
      </Link>
      <Sources sources={b.research?.sources ?? []} />
    </div>
  );
}
