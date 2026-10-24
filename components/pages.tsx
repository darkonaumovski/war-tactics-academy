import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Swords,
  GraduationCap,
  Target,
  BookOpen,
  MapPin,
  Shield,
  Flag,
  Info,
} from "lucide-react";
import type {
  Catalog,
  Battle,
  Commander,
  War,
  Campaign,
  Course,
  Lesson,
  Scenario,
} from "../lib/types";
import { eras } from "../data/catalog";
import { normalize } from "../lib/logic";
import { dailyChallengeIndex } from "../lib/daily-challenge";
import {
  Heading,
  SectionTitle,
  BattleCard,
  CommanderCard,
  Breadcrumbs,
  Sources,
  Empty,
} from "./ui";
import { Cartography } from "./cartography";
import { BattleCatalog, CommanderCatalog, Comparison } from "./catalogs";
import { BattleMap } from "./battle-map";
import { Atlas } from "./atlas";
import {
  SaveRecord,
  SavedCollection,
  CourseProgress,
  LessonStatus,
  ScenarioStatus,
} from "./persistence-ui";
import { Quiz, DecisionExercise } from "./learning";
import { media } from "../lib/media";
import { MediaLibrary, HistoricalPortrait } from "./media-library";
export function HomePage({ c }: { c: Catalog }) {
  const featured = c.battles.find((b) => b.slug === "waterloo")!;
  const featuredCommanders = [
    "napoleon-bonaparte",
    "hannibal-barca",
    "yi-sun-sin",
  ];
  const challenge = c.scenarios[dailyChallengeIndex(c.scenarios.length)];
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-map">
          <Cartography />
          <span className="hero-coordinate">
            50°40′48″N &nbsp; 04°24′36″E
            <br />
            WATERLOO · 18 JUNE 1815
          </span>
        </div>
        <div className="hero-copy">
          <span className="hero-kicker">
            <span /> AN INDEPENDENT ACADEMY OF MILITARY HISTORY
          </span>
          <h1>
            The Art
            <br />
            of <em>Command.</em>
          </h1>
          <p>
            History is shaped by decisions.
            <br />
            Understand the battles. Examine the minds.
            <br />
            Discover what changed the world.
          </p>
          <div className="hero-actions">
            <Link href="/battles" className="button">
              Explore Battles <ArrowRight size={16} />
            </Link>
            <Link href="/academy" className="button secondary">
              Enter the Academy
            </Link>
          </div>
          <div className="hero-signature">
            <span />
            LEARN FROM HISTORY. THINK LIKE A GENERAL.
          </div>
        </div>
        <Link className="hero-map-link" href="/battles/waterloo">
          <span>ON THE MAP</span>Waterloo, 1815 <ArrowUpRight size={17} />
        </Link>
      </section>
      <div className="stat-strip">
        <div>
          <Swords />
          <strong>{c.battles.length}</strong>
          <span>Historic engagements</span>
        </div>
        <div>
          <Shield />
          <strong>{c.commanders.length}</strong>
          <span>Commanders in context</span>
        </div>
        <div>
          <Compass />
          <strong>{eras.length}</strong>
          <span>Historical eras</span>
        </div>
        <div>
          <GraduationCap />
          <strong>
            {c.courses.reduce(
              (total, course) => total + course.lessons.length,
              0,
            )}
          </strong>
          <span>Lessons in command</span>
        </div>
      </div>
      <div className="home-content">
        <SectionTitle
          number="01"
          title="Step onto the battlefield"
          href="/battles"
          label="Explore the atlas"
        />
        <div className="featured-study">
          <Link className="featured-map" href="/battles/waterloo">
            <Cartography />
            <span className="feature-badge">FEATURED BATTLE STUDY</span>
            <span className="feature-map-label">
              WATERLOO
              <br />
              <small>THE LAST GAMBLE</small>
            </span>
          </Link>
          <div className="featured-copy">
            <span className="eyebrow">18 JUNE 1815 · NAPOLEONIC WARS</span>
            <h2>
              One day.
              <br />
              An empire’s end.
            </h2>
            <p>
              Three armies. An uncertain arrival. Examine the decisions that
              shaped Waterloo through the perspectives of Napoleon, Wellington
              and Blücher.
            </p>
            <div className="feature-tags">
              <span>
                <Compass size={14} />
                4-phase replay
              </span>
              <span>
                <BookOpen size={14} />
                Source-backed analysis
              </span>
            </div>
            <Link href={`/battles/${featured.slug}`} className="text-link">
              Explore the Waterloo study <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="battle-grid home-battles">
          {["cannae", "austerlitz", "midway"].map((s) => (
            <BattleCard key={s} battle={c.battles.find((b) => b.slug === s)!} />
          ))}
        </div>
        <SectionTitle
          number="02"
          title="History has a geography"
          href="/atlas"
          label="Open interactive atlas"
        />
        <Atlas battles={c.battles} preview />
        <SectionTitle
          number="03"
          title="The minds behind the maneuvers"
          href="/commanders"
          label="Meet the commanders"
        />
        <div className="commander-grid home-commanders">
          {featuredCommanders
            .map((s) => c.commanders.find((x) => x.slug === s))
            .filter((x): x is Commander => !!x)
            .map((commander) => (
              <CommanderCard key={commander.slug} commander={commander} />
            ))}
        </div>
        <SectionTitle number="04" title="Across the ages" />
        <div className="era-strip">
          {eras.map((e, i) => (
            <Link href={`/battles?era=${e.id}`} key={e.id}>
              <span className="era-number">0{i + 1}</span>
              <h3>{e.name}</h3>
              <span>{e.period}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
        <div className="learning-feature">
          <div>
            <span className="eyebrow">THE ACADEMY / STRUCTURED LEARNING</span>
            <h2>
              Understand the why.
              <br />
              <em>Not just the what.</em>
            </h2>
            <p>
              Build a historian’s toolkit. Explore strategy, terrain, logistics
              and the limits of information through focused lessons and
              historical examples.
            </p>
            <Link className="button secondary" href="/academy">
              Find your learning path <ArrowRight size={16} />
            </Link>
          </div>
          <div className="learning-topics">
            {c.courses[0]?.lessons.slice(0, 4).map((l, i) => (
              <Link
                key={l.slug}
                href={`/academy/${c.courses[0].slug}/${l.slug}`}
              >
                <span>0{i + 1}</span>
                {l.title}
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </div>
        </div>
        <SectionTitle
          number="05"
          title="The wider campaign"
          href="/wars"
          label="Wars & campaigns"
        />
        <div className="war-links">
          {["punic", "napoleonic", "ww2"].map((s) => {
            const w = c.wars.find((w) => w.slug === s)!;
            return (
              <Link key={s} href={`/wars/${s}`}>
                <Flag size={21} />
                <span>
                  <small>{w.period}</small>
                  <h3>{w.name}</h3>
                </span>
                <ArrowRight size={18} />
              </Link>
            );
          })}
        </div>
        <div className="challenge-banner">
          <div className="challenge-icon">
            <Target size={42} strokeWidth={1} />
          </div>
          <div>
            <span className="eyebrow">TODAY’S DECISION CHALLENGE</span>
            <h2>{challenge.title}</h2>
            <p>
              You know the situation. You don’t know the outcome. What would you
              prioritize?
            </p>
          </div>
          <Link className="button" href={`/simulator/${challenge.slug}`}>
            Take the commander’s seat <ArrowRight size={16} />
          </Link>
        </div>
        <SectionTitle
          number="06"
          title="Your continuing exploration"
          href="/saved"
          label="Open my collection"
        />
        <SavedCollection recent />
      </div>
    </div>
  );
}
export function BattlesPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="THE HISTORICAL RECORD / 01"
        title="The Battle Atlas"
        description="From the plains of Marathon to the Pacific. Explore the terrain, decisions and consequences behind history’s pivotal engagements."
      />
      <BattleCatalog battles={c.battles} />
    </div>
  );
}
export function BattlePage({ battle: b, c }: { battle: Battle; c: Catalog }) {
  const commanders = c.commanders.filter((x) => x.battleSlugs.includes(b.slug));
  const war = c.wars.find((x) => x.slug === b.warId)!;
  const campaign = c.campaigns.find((x) => x.slug === b.campaignId)!;
  return (
    <div className="page-container battle-detail">
      <Breadcrumbs
        items={[{ name: "Battle Atlas", href: "/battles" }, { name: b.name }]}
      />
      <div className="detail-heading">
        <Heading
          eyebrow={`${b.date} / ${b.kind.toUpperCase()} / ${b.region.toUpperCase()}`}
          title={b.name}
          description={b.summary}
        />
        <SaveRecord
          record={{ href: `/battles/${b.slug}`, title: b.name, kind: b.kind }}
        />
      </div>
      <div className="detail-facts">
        <span>
          <MapPin size={16} />
          {b.location}
        </span>
        <span>
          <Flag size={16} />
          <Link href={`/wars/${war.slug}`}>{war.name}</Link>
        </span>
        <span>
          <Shield size={16} />
          {b.outcome}
        </span>
      </div>
      <div className="related-bar">
        <span>CAMPAIGN</span>
        <Link href={`/campaigns/${campaign.slug}`}>
          {campaign.name} <ArrowUpRight size={14} />
        </Link>
        <span>ERA</span>
        <Link href={`/battles?era=${b.eraId}`}>
          {eras.find((e) => e.id === b.eraId)?.name}
        </Link>
      </div>
      {b.research ? (
        <>
          <BattleMap battle={b} />
          <div className="article-layout">
            <article>
              <span className="eyebrow">READING THE BATTLE</span>
              <h2>Beyond the outcome</h2>
              {b.research.sections.map((s, i) => (
                <section className="analysis-section" key={s.title}>
                  <div className="analysis-heading">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.title}</h3>
                    <span className={`evidence ${s.evidence}`}>
                      {s.evidence === "fact"
                        ? "Historical account"
                        : s.evidence === "interpretation"
                          ? "Interpretation"
                          : "Uncertainty"}
                    </span>
                  </div>
                  <p>{s.text}</p>
                  {!!s.refs?.length && (
                    <p className="section-refs">
                      <span>Draws on</span>
                      {s.refs.map((r) => {
                        const source = b.research!.sources[r.source];
                        return (
                          <a
                            key={`${r.source}-${r.locator ?? ""}`}
                            href={`#source-${r.source + 1}`}
                            title={source.title}
                          >
                            [{r.source + 1}] {source.publisher}
                            {r.locator && `, ${r.locator}`}
                          </a>
                        );
                      })}
                    </p>
                  )}
                </section>
              ))}
            </article>
            <aside className="study-aside">
              <h3>At a glance</h3>
              <dl>
                <dt>Participants</dt>
                <dd>{b.factions.join(" / ")}</dd>
                <dt>Forces & losses</dt>
                <dd>
                  Not quantified in this edition. Estimates vary; consult the
                  cited sources.
                </dd>
                <dt>Study lens</dt>
                <dd>{b.topic}</dd>
                <dt>Geography</dt>
                <dd>
                  Atlas marker is approximate. Replay diagrams are schematic.
                </dd>
              </dl>
              <h3>Commanders in context</h3>
              {commanders.map((x) => (
                <Link key={x.slug} href={`/commanders/${x.slug}`}>
                  {x.name}
                  <ArrowUpRight size={15} />
                </Link>
              ))}
              {!commanders.length && (
                <p>
                  Named commanders are discussed in the analysis; individual
                  profiles are pending.
                </p>
              )}
              <Link className="text-link" href="#sources">
                Read the sources ↓
              </Link>
              {c.scenarios
                .filter((s) => s.battleSlug === b.slug)
                .map((s) => (
                  <Link
                    className="aside-challenge"
                    key={s.slug}
                    href={`/simulator/${s.slug}`}
                  >
                    <Target size={23} />
                    <span>
                      ENTER THE DECISION ROOM<strong>{s.title}</strong>
                    </span>
                  </Link>
                ))}
            </aside>
          </div>
          {!!b.research.perspectives?.length && (
            <section className="perspectives">
              <SectionTitle number="↔" title="The commander’s perspective" />
              <p className="muted">
                Historian-reconstructed reasoning, not invented private thoughts
                or direct quotations. Read alongside the sources. Force
                descriptions are qualitative; ancient and modern estimates of
                numbers differ.
              </p>
              <div className="perspective-grid">
                {b.research.perspectives.map((p) => (
                  <article key={p.name}>
                    <span className="eyebrow">COMMAND PERSPECTIVE</span>
                    <h3>{p.name}</h3>
                    {(
                      [
                        ["Objective", "objective"],
                        ["Available information", "known"],
                        ["Principal uncertainty", "uncertainty"],
                        ["Operational constraints", "constraints"],
                        ["Available forces", "forces"],
                        ["Terrain considerations", "terrain"],
                        ["Logistics", "logistics"],
                        ["Historical decisions", "decision"],
                        ["Outcome & retrospective interpretation", "outcome"],
                      ] as const
                    )
                      .filter(([, key]) => p[key])
                      .map(([label, key]) => (
                        <div key={key}>
                          <h4>{label}</h4>
                          <p>{p[key]}</p>
                        </div>
                      ))}
                  </article>
                ))}
              </div>
            </section>
          )}
          <Sources sources={b.research.sources} />
        </>
      ) : (
        <>
          <div className="catalog-notice">
            <Info />
            <div>
              <h2>A catalog introduction</h2>
              <p>
                This entry provides orientation. A detailed source review, phase
                reconstruction and opposing perspectives have not yet been
                prepared. No troop movements or precise force estimates are
                inferred.
              </p>
            </div>
          </div>
          <div className="two-columns">
            <section>
              <h2>Historical context</h2>
              <p>{war.summary}</p>
              <p>{war.causes}</p>
              <h3>Outcome</h3>
              <p>
                {b.outcome}. {war.consequences}
              </p>
            </section>
            <section>
              <h2>Related commanders</h2>
              {commanders.length ? (
                commanders.map((x) => (
                  <p key={x.slug}>
                    <Link className="text-link" href={`/commanders/${x.slug}`}>
                      {x.name} →
                    </Link>
                  </p>
                ))
              ) : (
                <p>
                  Commander profiles for this engagement are awaiting expansion.
                </p>
              )}
              <Link className="text-link" href={`/atlas`}>
                Locate this engagement in the atlas →
              </Link>
            </section>
          </div>
          <p className="editorial-note">
            Editorial status: introductory catalog summary. Consult the linked
            commander readings where available; this entry is not presented as a
            fully referenced battle analysis.
          </p>
        </>
      )}
    </div>
  );
}
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
export function WarsPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="THE WIDER PICTURE / 03"
        title="Wars & Campaigns"
        description="A battle belongs to a campaign. A campaign belongs to a political struggle. Follow the connections."
      />
      {eras.map((e) => (
        <section className="war-era" key={e.id}>
          <h2>
            {e.name}
            <span>{e.period}</span>
          </h2>
          <div className="war-grid">
            {c.wars
              .filter((w) => w.eraId === e.id)
              .map((w) => (
                <Link key={w.slug} href={`/wars/${w.slug}`}>
                  <span className="eyebrow">{w.period}</span>
                  <h3>
                    {w.name}
                    <ArrowUpRight size={17} />
                  </h3>
                  <p>{w.summary}</p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
export function WarPage({ war: w, c }: { war: War; c: Catalog }) {
  const battles = c.battles.filter((b) => b.warId === w.slug);
  const commanders = c.commanders.filter((x) =>
    x.battleSlugs.some((slug) => battles.some((b) => b.slug === slug)),
  );
  const sources = [
    ...battles.flatMap((b) => b.research?.sources ?? []),
    ...commanders.map((x) => x.source),
  ];
  return (
    <div className="page-container">
      <Breadcrumbs
        items={[{ name: "Wars", href: "/wars" }, { name: w.name }]}
      />
      <Heading eyebrow={w.period} title={w.name} description={w.summary} />
      <div className="two-columns">
        <section>
          <h2>Origins & objectives</h2>
          <p>{w.causes}</p>
        </section>
        <section>
          <h2>Outcomes & consequences</h2>
          <p>{w.consequences}</p>
        </section>
      </div>
      {w.details && (
        <div className="war-context">
          <section>
            <h2>Principal participants</h2>
            <ul>
              {w.details.participants.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h2>Geographic scope</h2>
            <p>{w.details.geography}</p>
          </section>
          <section>
            <h2>Key developments</h2>
            <ol className="chronology">
              {w.details.developments.map((entry) => (
                <li key={`${entry.date}-${entry.event}`}>
                  <strong>{entry.date}</strong>
                  <span>{entry.event}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      )}
      {!!commanders.length && (
        <>
          <h2>Key commanders</h2>
          <div className="campaign-list">
            {commanders.map((x) => (
              <Link href={`/commanders/${x.slug}`} key={x.slug}>
                <Shield size={18} />
                {x.name}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </>
      )}
      <h2>Campaigns in this collection</h2>
      <div className="campaign-list">
        {c.campaigns
          .filter((x) => x.warId === w.slug)
          .map((x) => (
            <Link href={`/campaigns/${x.slug}`} key={x.slug}>
              <Flag size={18} />
              {x.name}
              <ArrowRight size={16} />
            </Link>
          ))}
      </div>
      <SectionTitle number="↳" title="Connected engagements" />
      <div className="battle-grid">
        {battles.map((b) => (
          <BattleCard key={b.slug} battle={b} />
        ))}
      </div>
      <p className="editorial-note">
        Participants, scope and chronology are editorial orientation drawn from
        well-established events. The reading below comes from the linked battle
        studies and commander profiles; a dedicated war bibliography is future
        editorial work.
      </p>
      {!!sources.length && (
        <Sources
          sources={[...new Map(sources.map((s) => [s.url, s])).values()]}
        />
      )}
    </div>
  );
}
export function CampaignPage({
  campaign: x,
  c,
}: {
  campaign: Campaign;
  c: Catalog;
}) {
  const war = c.wars.find((w) => w.slug === x.warId)!;
  const battles = c.battles.filter((b) => b.campaignId === x.slug);
  return (
    <div className="page-container">
      <Breadcrumbs
        items={[
          { name: "Wars", href: "/wars" },
          { name: war.name, href: `/wars/${war.slug}` },
          { name: x.name },
        ]}
      />
      <Heading
        eyebrow={`CAMPAIGN / ${war.period}`}
        title={x.name}
        description={x.summary}
      />
      <div className="two-columns">
        <section>
          <h2>Strategic setting</h2>
          <p>
            {war.summary} {war.causes}
          </p>
        </section>
        <section>
          <h2>Geographic scope</h2>
          <p>
            {battles.map((b) => b.location).join("; ")}. These catalog locations
            provide orientation; boundaries and movements are not reconstructed.
          </p>
        </section>
      </div>
      <div className="battle-grid">
        {battles.map((b) => (
          <BattleCard key={b.slug} battle={b} />
        ))}
      </div>
      <p className="editorial-note">
        This is a campaign index. Detailed chronology, decisions and references
        are in the linked engagement studies where available.
      </p>
    </div>
  );
}
export function AtlasPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="GEOGRAPHY OF COMMAND / 04"
        title="The world is your classroom."
        description="Place each engagement in its geographic context. Select a marker, explore an era, or use the location list below."
      />
      <Atlas battles={c.battles} />
    </div>
  );
}
export function AcademyPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="STRUCTURED LEARNING / 05"
        title="Enter the Academy"
        description="Build understanding, one question at a time. Read the evidence, test your reasoning and connect lessons to real historical cases."
      />
      <div className="course-grid">
        {c.courses.map((course, i) => (
          <article className="course-card" key={course.slug}>
            <div className="course-emblem">
              <GraduationCap size={55} strokeWidth={1} />
              <span>PATH 0{i + 1}</span>
            </div>
            <div>
              <span className="eyebrow">
                {course.level} · {course.lessons.length} LESSONS
              </span>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <CourseProgress
                courseSlug={course.slug}
                lessonCount={course.lessons.length}
              />
              <Link className="text-link" href={`/academy/${course.slug}`}>
                Explore this learning path <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="catalog-notice">
        <BookOpen />
        <div>
          <h2>From foundations to source criticism</h2>
          <p>
            Begin with Foundations, examine ancient and Napoleonic cases, then
            compare evidence in Industrial and World Wars. Seminar prompts
            invite deeper analysis; quizzes and completion are saved in this
            browser.
          </p>
        </div>
      </div>
    </div>
  );
}
export function CoursePage({ course: c }: { course: Course }) {
  return (
    <div className="page-container narrow">
      <Breadcrumbs
        items={[{ name: "Academy", href: "/academy" }, { name: c.title }]}
      />
      <Heading
        eyebrow={`${c.level} / ${c.lessons.length} LESSONS`}
        title={c.title}
        description={c.description}
      />
      <CourseProgress courseSlug={c.slug} lessonCount={c.lessons.length} />
      <div className="lesson-list">
        {c.lessons.map((l, i) => (
          <Link key={l.slug} href={`/academy/${c.slug}/${l.slug}`}>
            <span className="lesson-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2>{l.title}</h2>
              <p>{l.objectives[0]}</p>
              <LessonStatus id={`${c.slug}/${l.slug}`} />
            </div>
            <ArrowRight size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export function LessonPage({
  lesson: l,
  course,
  c,
}: {
  lesson: Lesson;
  course: Course;
  c: Catalog;
}) {
  const index = course.lessons.findIndex((x) => x.slug === l.slug);
  const battles = c.battles.filter((b) => l.battleSlugs.includes(b.slug));
  const sources = [
    ...new Map(
      [
        ...(l.sources ?? []),
        ...battles.flatMap((b) => b.research?.sources ?? []),
      ].map((s) => [s.url, s]),
    ).values(),
  ];
  return (
    <div className="page-container lesson-page">
      <Breadcrumbs
        items={[
          { name: "Academy", href: "/academy" },
          { name: course.title, href: `/academy/${course.slug}` },
          { name: l.title },
        ]}
      />
      <Heading
        eyebrow={`LESSON ${index + 1} OF ${course.lessons.length} / ${course.level}`}
        title={l.title}
      />
      <div className="lesson-objectives">
        <span className="eyebrow">BY THE END OF THIS LESSON</span>
        <ul>
          {l.objectives.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
      <article className="lesson-article">
        {l.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </article>
      <div
        className="concept-diagram"
        role="img"
        aria-label={`Concept sequence: ${(l.diagram ?? ["Objectives", "Constraints", "Decisions", "Consequences"]).join(" → ")}`}
      >
        {(
          l.diagram ?? [
            "Objectives",
            "Constraints",
            "Decisions",
            "Consequences",
          ]
        ).map((s, i) => (
          <div key={s}>
            <span>0{i + 1}</span>
            <strong>{s}</strong>
            {i < 3 && <ArrowRight size={18} />}
          </div>
        ))}
      </div>
      {l.seminar && (
        <section className="seminar note">
          <div>
            <span className="eyebrow">SEMINAR / EXTEND YOUR ANALYSIS</span>
            <h2>{l.seminar.prompt}</h2>
            <details>
              <summary>Approach to the evidence</summary>
              <p>{l.seminar.guidance}</p>
            </details>
          </div>
        </section>
      )}
      <h2>Read the historical examples</h2>
      <div className="lesson-battles">
        {battles.map((b) => (
          <Link href={`/battles/${b.slug}`} key={b.slug}>
            <Swords size={18} />
            {b.name}
            <span>{b.date}</span>
            <ArrowUpRight size={15} />
          </Link>
        ))}
      </div>
      <Quiz lesson={l} courseSlug={course.slug} />
      <div className="lesson-navigation">
        <Link className="text-link" href={`/academy/${course.slug}`}>
          ← Back to course
        </Link>
        {course.lessons[index + 1] && (
          <Link
            className="button secondary"
            href={`/academy/${course.slug}/${course.lessons[index + 1].slug}`}
          >
            Next lesson <ArrowRight size={15} />
          </Link>
        )}
      </div>
      <Sources sources={sources} />
    </div>
  );
}
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
            <span className="scenario-number">0{i + 1}</span>
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
export function LibraryPage({ c, videos }: { c: Catalog; videos: boolean }) {
  const sources = [
    ...new Map(
      c.battles
        .flatMap((b) => b.research?.sources ?? [])
        .map((s) => [s.url, s]),
    ).values(),
  ];
  const labels = Object.fromEntries(
    [...c.battles, ...c.commanders].map((x) => [x.slug, x.name]),
  );
  return (
    <div className="page-container">
      <Heading
        eyebrow="THE READING ROOM / 07"
        title="Go back to the sources."
        description="Primary accounts, institutional histories and further reading. Evidence deserves a place at the center of every interpretation."
      />
      <div className="page-tabs">
        <Link aria-current={!videos ? "page" : undefined} href="/library">
          Sources & documents
        </Link>
        <Link
          aria-current={videos ? "page" : undefined}
          href="/library?type=videos"
        >
          Documentaries & lectures
        </Link>
      </div>
      <MediaLibrary
        key={String(videos)}
        items={media}
        labels={labels}
        videos={videos}
      />
      {!videos && <Sources sources={sources} />}
      <section className="licensing">
        <h2>Media & attribution</h2>
        <p>
          Interface cartography, diagrams and monograms are original graphics.
          Historical objects are separately identified with their dates and
          attribution. The world atlas uses public-domain Natural Earth
          geography, distributed through world-atlas.
        </p>
        <p>
          External readings remain the property of their publishers. Links
          provide access to documents and historic maps. Portraits use
          item-level public-domain records; videos use official embeds. Each
          resource records its author or institution, source and usage
          conditions.
        </p>
        <a
          className="text-link"
          href="https://www.naturalearthdata.com/about/terms-of-use/"
          target="_blank"
          rel="noreferrer"
        >
          Natural Earth public-domain terms ↗
        </a>
      </section>
    </div>
  );
}
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
          Eight engagements have referenced analyses. Other engagement records,
          war indexes and commander summaries provide orientation and identify
          their editorial limits. Dates and transliterations follow common
          modern conventions; no year zero is used. Figures are assessed
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
export function SearchPage({
  c,
  query,
  type,
}: {
  c: Catalog;
  query: string;
  type: string;
}) {
  const records = [
    ...c.battles.map((b) => ({
      title: b.name,
      text: b.summary,
      href: `/battles/${b.slug}`,
      type: "Battle",
    })),
    ...c.commanders.map((b) => ({
      title: b.name,
      text: b.summary,
      href: `/commanders/${b.slug}`,
      type: "Commander",
    })),
    ...c.wars.map((b) => ({
      title: b.name,
      text: b.summary,
      href: `/wars/${b.slug}`,
      type: "War",
    })),
    ...c.campaigns.map((b) => ({
      title: b.name,
      text: b.summary,
      href: `/campaigns/${b.slug}`,
      type: "Campaign",
    })),
    ...c.courses.flatMap((course) => [
      {
        title: course.title,
        text: course.description,
        href: `/academy/${course.slug}`,
        type: "Learning",
      },
      ...course.lessons.map((l) => ({
        title: l.title,
        text: l.paragraphs.join(" "),
        href: `/academy/${course.slug}/${l.slug}`,
        type: "Learning",
      })),
    ]),
  ];
  const result = records.filter(
    (r) =>
      (!type || r.type === type) &&
      normalize(`${r.title} ${r.text}`).includes(normalize(query.trim())),
  );
  return (
    <div className="page-container">
      <Heading eyebrow="FOLLOW YOUR CURIOSITY" title="Search the Academy" />
      <form className="filter-bar" action="/search">
        <input
          type="search"
          name="q"
          aria-label="Search query"
          defaultValue={query}
          placeholder="A person, battle, campaign or idea…"
        />
        <select name="type" aria-label="Content type" defaultValue={type}>
          <option value="">All content</option>
          {["Battle", "Commander", "War", "Campaign", "Learning"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <button type="submit" className="button">
          Search <ArrowRight size={15} />
        </button>
      </form>
      <p role="status" className="muted">
        {result.length} results {query && `for “${query}”`}
      </p>
      {result.length ? (
        <div className="search-results">
          {result.map((r) => (
            <Link href={r.href} key={r.href}>
              <span className="eyebrow">{r.type}</span>
              <h2>
                {r.title}
                <ArrowUpRight size={19} />
              </h2>
              <p>
                {r.text.slice(0, 220)}
                {r.text.length > 220 ? "…" : ""}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
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
