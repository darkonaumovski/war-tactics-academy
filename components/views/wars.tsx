import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, Flag } from "lucide-react";
import type { Catalog, War, Campaign } from "../../lib/types";
import { eras } from "../../data/catalog";
import { collections } from "../../data/collections";
import { Heading, SectionTitle, BattleCard, Breadcrumbs, Sources } from "../ui";
export function WarsPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="THE WIDER PICTURE / 03"
        title="Wars & Campaigns"
        description="A battle belongs to a campaign. A campaign belongs to a political struggle. Follow the connections."
      />
      <nav className="collection-strip" aria-label="Collections">
        <span className="eyebrow">Curated collections</span>
        {collections.map((x) => (
          <Link key={x.slug} href={`/collections/${x.slug}`}>
            {x.title}
          </Link>
        ))}
      </nav>
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
