import Link from "next/link";
import type { Catalog, Commander } from "../../lib/types";
import {
  Heading,
  SectionTitle,
  BattleCard,
  Breadcrumbs,
  Sources,
  Empty,
} from "../ui";
import { CommanderCatalog, Comparison } from "../catalogs";
import { SaveRecord } from "../persistence-ui";
import { media } from "../../lib/media";
import { HistoricalPortrait } from "../media-library";
export function CommandersPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <div className="detail-heading">
        <Heading
          eyebrow="LEADERSHIP IN CONTEXT / 02"
          title="Hall of Commanders"
          description="Study the people behind the decisions—their resources, responsibilities, achievements and limitations."
        />
        <Link className="button secondary" href="/commanders/compare">
          Compare commanders ↔
        </Link>
      </div>
      <CommanderCatalog commanders={c.commanders} />
    </div>
  );
}
export function CommanderPage({
  commander: x,
  c,
}: {
  commander: Commander;
  c: Catalog;
}) {
  const portrait = media.find(
    (item) => item.kind === "portrait" && item.commanderSlugs.includes(x.slug),
  );
  return (
    <div className="page-container">
      <Breadcrumbs
        items={[{ name: "Commanders", href: "/commanders" }, { name: x.name }]}
      />
      <div className="detail-heading">
        <Heading
          eyebrow={`${x.state} / ${x.years}`}
          title={x.name}
          description={x.role}
        />
        <SaveRecord
          record={{
            href: `/commanders/${x.slug}`,
            title: x.name,
            kind: "Commander",
          }}
        />
      </div>
      <div className="profile-intro">
        {portrait ? (
          <HistoricalPortrait item={portrait} />
        ) : (
          <div className="large-monogram" aria-hidden="true">
            {x.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
            <span>HISTORICAL PROFILE</span>
          </div>
        )}
        <div>
          <span className="eyebrow">
            A LIFE IN CONTEXT
            {x.details && ` · ${x.details.category.toUpperCase()}`}
          </span>
          <p className="lead">{x.summary}</p>
          {x.details && <p className="profile-titles">{x.details.titles}</p>}
          <span className="editorial-note">
            Editorial status: concise profile. The chronology and command record
            summarize well-established events; the reading below offers further
            context but is not a citation for every entry, and claim-by-claim
            review remains future editorial work. Assessments are
            interpretations, not performance ratings. Profiles without an
            attributed public-domain portrait use a monogram, which is a graphic
            identifier, not a likeness.
          </span>
        </div>
      </div>
      <div className="profile-sections">
        {[
          ["Command philosophy & resources", x.approach],
          ["Documented strengths", x.strength],
          ["Weaknesses, defeats & setbacks", x.limitation],
          ["Historical legacy", x.legacy],
        ].map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
      {x.details && <SectionTitle number="⌖" title="Command record" />}
      {x.details && (
        <div className="command-record">
          <section>
            <h3>Principal commands</h3>
            <ul>
              {x.details.principalCommands.map((command) => (
                <li key={command}>{command}</li>
              ))}
            </ul>
            <h3>A notable decision</h3>
            <p>{x.details.notableDecision}</p>
            <h3>Defeats & reverses</h3>
            <p>{x.details.setback}</p>
          </section>
          <section aria-labelledby="chronology-title">
            <h2 className="sr-only" id="chronology-title">
              Chronology
            </h2>
            <span className="eyebrow" aria-hidden="true">
              CHRONOLOGY
            </span>
            <ol className="chronology">
              {x.details.timeline.map((entry) => (
                <li key={`${entry.date}-${entry.event}`}>
                  <strong>{entry.date}</strong>
                  <span>{entry.event}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      )}
      <SectionTitle number="↗" title="Associated engagements" />
      {x.battleSlugs.length ? (
        <div className="battle-grid">
          {c.battles
            .filter((b) => x.battleSlugs.includes(b.slug))
            .map((b) => (
              <BattleCard key={b.slug} battle={b} />
            ))}
        </div>
      ) : (
        <Empty
          title="More campaign studies to come"
          text="This figure’s principal responsibilities are discussed above. Dedicated battle records are not yet in this edition."
        />
      )}
      <div className="inline-action">
        <Link className="button secondary" href="/commanders/compare">
          Compare historical approaches ↔
        </Link>
      </div>
      <Sources sources={[x.source]} />
    </div>
  );
}
export function ComparePage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Breadcrumbs
        items={[
          { name: "Commanders", href: "/commanders" },
          { name: "Comparison" },
        ]}
      />
      <Heading
        eyebrow="A COMPARATIVE READING"
        title="Different worlds. Different commands."
        description="Compare historical context and evidence. No invented ratings, no all-time rankings."
      />
      <Comparison commanders={c.commanders} />
    </div>
  );
}
