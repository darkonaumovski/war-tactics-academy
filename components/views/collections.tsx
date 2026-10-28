import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Info,
  Shield,
  Target,
} from "lucide-react";
import type { Battle, Catalog, Collection } from "../../lib/types";
import {
  collectionBattles,
  collectionPeriod,
  collections,
} from "../../data/collections";
import { formatYear } from "../../lib/logic";
import { Heading, SectionTitle, Breadcrumbs } from "../ui";
export function CollectionsPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="READING PATHS / 05"
        title="Collections"
        description="Curated paths through the catalog: an introduction, the strategic arc, and every study in date order."
      />
      <div className="war-grid collection-grid">
        {collections.map((x) => {
          const battles = collectionBattles(x, c.battles);
          return (
            <Link key={x.slug} href={`/collections/${x.slug}`}>
              <span className="eyebrow">
                {collectionPeriod(battles)} · {battles.length} engagements
              </span>
              <h3>
                {x.title}
                <ArrowUpRight size={17} />
              </h3>
              <p>{x.summary}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export function CollectionPage({
  collection: x,
  c,
}: {
  collection: Collection;
  c: Catalog;
}) {
  const battles = collectionBattles(x, c.battles);
  const slugs = new Set(battles.map((b) => b.slug));
  const byYear = new Map<number, Battle[]>();
  for (const b of battles)
    byYear.set(b.year, [...(byYear.get(b.year) ?? []), b]);
  const campaignCount = new Set(battles.map((b) => b.campaignId)).size;
  const commanders = c.commanders.filter((m) =>
    m.battleSlugs.some((s) => slugs.has(s)),
  );
  const courses = c.courses.filter((k) => x.courseSlugs.includes(k.slug));
  const exercises = c.scenarios.filter((s) => slugs.has(s.battleSlug));
  const name = (slug: string) =>
    battles.find((b) => b.slug === slug)?.name ?? slug;
  return (
    <div className="page-container">
      <Breadcrumbs
        items={[
          { name: "Collections", href: "/collections" },
          { name: x.title },
        ]}
      />
      <Heading
        eyebrow={`COLLECTION / ${collectionPeriod(battles)}`}
        title={x.title}
        description={x.introduction}
      />
      <p className="collection-facts">
        {battles.length} engagements · {campaignCount} campaigns ·{" "}
        {commanders.length} commander profiles
      </p>
      {x.inProgress && (
        <div className="catalog-notice">
          <Info />
          <div>
            <h2>A collection in progress</h2>
            <p>{x.inProgress}</p>
          </div>
        </div>
      )}
      <section className="collection-arc">
        <h2>The strategic arc</h2>
        {x.arc.map((p) => (
          <div key={p.studies.join("|")}>
            <p>{p.text}</p>
            <p className="arc-studies">
              Drawn from{" "}
              {p.studies.map((s, i) => (
                <span key={s}>
                  {i > 0 && ", "}
                  <Link href={`/battles/${s}`}>{name(s)}</Link>
                </span>
              ))}
            </p>
          </div>
        ))}
      </section>
      <SectionTitle
        number="↳"
        title="Timeline"
        href={`/battles?collection=${x.slug}`}
        label="Browse in the catalog"
      />
      <div className="collection-timeline">
        {[...byYear].map(([year, items]) => (
          <section key={year}>
            <h3>{formatYear(year)}</h3>
            <ol className="chronology">
              {items.map((b) => {
                const campaign = c.campaigns.find(
                  (k) => k.slug === b.campaignId,
                );
                return (
                  <li key={b.slug}>
                    <strong>{b.date}</strong>
                    <span>
                      <Link href={`/battles/${b.slug}`}>{b.name}</Link>
                      <small>
                        {b.kind} · {b.location}
                        {campaign && (
                          <>
                            {" · "}
                            <Link href={`/campaigns/${campaign.slug}`}>
                              {campaign.name}
                            </Link>
                          </>
                        )}
                      </small>
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
      {!!commanders.length && (
        <>
          <h2>Commanders in this collection</h2>
          <div className="campaign-list">
            {commanders.map((m) => (
              <Link href={`/commanders/${m.slug}`} key={m.slug}>
                <Shield size={18} />
                {m.name}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </>
      )}
      {!!(courses.length || exercises.length) && (
        <>
          <h2>Learn and practise</h2>
          <div className="campaign-list">
            {courses.map((k) => (
              <Link href={`/academy/${k.slug}`} key={k.slug}>
                <GraduationCap size={18} />
                {k.title}
                <ArrowRight size={16} />
              </Link>
            ))}
            {exercises.map((s) => (
              <Link href={`/simulator/${s.slug}`} key={s.slug}>
                <Target size={18} />
                {s.title}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </>
      )}
      <p className="editorial-note">
        The strategic arc summarises the linked studies and adds nothing they do
        not support; their sources are listed on each study page.
      </p>
    </div>
  );
}
