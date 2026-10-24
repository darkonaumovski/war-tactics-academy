import Link from "next/link";
import { ArrowUpRight, Target, MapPin, Shield, Flag, Info } from "lucide-react";
import type { Catalog, Battle } from "../../lib/types";
import { eras } from "../../data/catalog";
import { Heading, SectionTitle, Breadcrumbs, Sources } from "../ui";
import { BattleCatalog } from "../catalogs";
import { BattleMap } from "../battle-map";
import { SaveRecord } from "../persistence-ui";
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
