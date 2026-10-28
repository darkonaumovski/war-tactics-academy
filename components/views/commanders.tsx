import Link from "next/link";
import type { Battle, Catalog, Commander } from "../../lib/types";
import {
  Heading,
  SectionTitle,
  BattleCard,
  Breadcrumbs,
  Sources,
  Empty,
  EngagementTimeline,
} from "../ui";
import { CAREER_WIDTH, careerLayout, formatYear } from "../../lib/logic";
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
  const linked = c.battles.filter((b) => x.battleSlugs.includes(b.slug));
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
      <SectionTitle
        number="↗"
        title="Associated engagements"
        href={x.battleSlugs.length ? `/battles?commander=${x.slug}` : undefined}
        label="Browse in the catalog"
      />
      {linked.length > 1 ? (
        <>
          <CareerStrip name={x.name} battles={linked} c={c} />
          <EngagementTimeline
            battles={linked}
            campaigns={c.campaigns}
            outcome
          />
        </>
      ) : linked.length ? (
        <div className="battle-grid">
          <BattleCard battle={linked[0]} />
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
// Linked engagements on a year axis, stacked within a year, with a band for
// each war. The timeline below it is the text equivalent.
function CareerStrip({
  name,
  battles,
  c,
}: {
  name: string;
  battles: Battle[];
  c: Catalog;
}) {
  const { dots, ticks, bands, stack, rows } = careerLayout(battles, c.wars);
  const base = 14 + stack * 15;
  const height = base + 34 + rows * 22;
  const label = (year: number) => formatYear(year).replace(/ CE$/, "");
  return (
    <figure className="career-strip">
      <svg
        viewBox={`0 0 ${CAREER_WIDTH} ${height}`}
        role="img"
        aria-label={`${name}: ${battles.length} linked engagements from ${label(battles[0].year)} to ${label(battles[battles.length - 1].year)}, in ${bands.map((b) => b.name).join(" and ")}`}
      >
        <line
          className="career-axis"
          x1="0"
          x2={CAREER_WIDTH}
          y1={base}
          y2={base}
        />
        {ticks.map((t) => (
          <g key={t.year}>
            <line
              className="career-axis"
              x1={t.x}
              x2={t.x}
              y1={base}
              y2={base + 5}
            />
            <text x={t.x} y={base + 18} textAnchor="middle">
              {label(t.year)}
            </text>
          </g>
        ))}
        {dots.map((d) => (
          <circle
            key={d.slug}
            className="career-dot"
            cx={d.x}
            cy={base - 9 - d.level * 15}
            r="5.5"
          />
        ))}
        {bands.map((b) => (
          <g key={b.name}>
            <rect
              className="career-band"
              x={b.x1}
              y={base + 28 + b.row * 22}
              width={b.x2 - b.x1}
              height="16"
              rx="3"
            />
            <text x={b.x1 + 6} y={base + 40 + b.row * 22}>
              {b.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>
        Each dot is a linked engagement; engagements in the same year are
        stacked. Bands show the wars they belong to.
      </figcaption>
    </figure>
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
