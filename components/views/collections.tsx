import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Info,
  Shield,
  Target,
} from "lucide-react";
import type { Catalog, Collection } from "../../lib/types";
import {
  collectionBattles,
  collectionPeriod,
  collections,
} from "../../data/collections";
import { Heading, SectionTitle, Breadcrumbs, EngagementTimeline } from "../ui";
import { RouteMap } from "../route-map";
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
      <RouteMap
        stops={battles}
        title={`Map of ${x.title}: ${battles.length} engagements numbered in date order${x.route ? ", joined in that order" : ""}`}
        line={!!x.route}
      />
      <SectionTitle
        number="↳"
        title="Timeline"
        href={`/battles?collection=${x.slug}`}
        label="Browse in the catalog"
      />
      <EngagementTimeline
        battles={battles}
        campaigns={c.campaigns}
        numbers={new Map(battles.map((b, i) => [b.slug, i + 1]))}
      />
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
