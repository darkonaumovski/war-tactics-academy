import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, BookOpen } from "lucide-react";
import type { Battle, Campaign, Source, Commander } from "../lib/types";
import { formatYear } from "../lib/logic";
import { Cartography } from "./cartography";
export function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
export function SectionTitle({
  number,
  title,
  href,
  label = "View all",
}: {
  number: string;
  title: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="section-title">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
      {href && (
        <Link href={href}>
          {label}
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Academy</Link>
      {items.map((i, n) => (
        <span key={n}>
          <span aria-hidden="true">/</span>
          {i.href ? (
            <Link href={i.href}>{i.name}</Link>
          ) : (
            <span aria-current="page">{i.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function BattleCard({
  battle,
  featured = false,
}: {
  battle: Battle;
  featured?: boolean;
}) {
  return (
    <Link
      className={`battle-card ${featured ? "featured-card" : ""}`}
      href={`/battles/${battle.slug}`}
    >
      <div className={`battle-visual tone-${battle.eraId}`}>
        <Cartography variant={battle.name} compact />
        <span className="map-index">
          {battle.lat.toFixed(2)}° / {battle.lon.toFixed(2)}°
        </span>
        <span className="kind-pill">{battle.kind}</span>
        <span className="battle-year">{battle.date}</span>
      </div>
      <div className="battle-card-body">
        <div className="eyebrow">{battle.topic}</div>
        <h3>
          {battle.name}
          <ArrowUpRight size={19} />
        </h3>
        <p>{battle.summary}</p>
        <div className="card-foot">
          <span>
            <MapPin size={13} />
            {battle.region}
          </span>
          <span>
            {battle.research ? "Interactive study" : "Catalog record"}{" "}
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
export function CommanderCard({ commander }: { commander: Commander }) {
  return (
    <Link className="commander-card" href={`/commanders/${commander.slug}`}>
      <div className="commander-monogram" aria-hidden="true">
        {commander.name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
        <span>✧</span>
      </div>
      <div>
        <span className="eyebrow">{commander.state}</span>
        <h3>{commander.name}</h3>
        <span className="muted small">
          {commander.years}
          {commander.details && ` · ${commander.details.category}`}
        </span>
        <p>{commander.approach}</p>
      </div>
      <ArrowUpRight className="corner-arrow" size={18} />
    </Link>
  );
}
export function Sources({ sources }: { sources: Source[] }) {
  return (
    <section className="sources" id="sources">
      <h2>
        <BookOpen size={21} /> Sources & further reading
      </h2>
      <p className="small muted">
        Read critically. Primary accounts and later scholarship have different
        limits; a source list is not a claim of certainty.
      </p>
      <ol>
        {sources.map((s, i) => (
          <li key={`${s.url}-${i}`} id={`source-${i + 1}`}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.title}
              <ArrowUpRight size={14} />
            </a>
            <span>{s.publisher}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
export function Empty({
  title = "No records match",
  text = "Try another term or clear the filters.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="empty">
      <BookOpen size={30} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
// Engagements grouped by year. `numbers` maps a slug to its place on a route
// map; `outcome` shows each result instead of the location.
export function EngagementTimeline({
  battles,
  campaigns,
  numbers,
  outcome = false,
}: {
  battles: Battle[];
  campaigns: Campaign[];
  numbers?: Map<string, number>;
  outcome?: boolean;
}) {
  const byYear = new Map<number, Battle[]>();
  for (const b of battles)
    byYear.set(b.year, [...(byYear.get(b.year) ?? []), b]);
  return (
    <div className="engagement-timeline">
      {[...byYear].map(([year, items]) => (
        <section key={year}>
          <h3>{formatYear(year)}</h3>
          <ol className="chronology">
            {items.map((b) => {
              const campaign = campaigns.find((k) => k.slug === b.campaignId);
              return (
                <li key={b.slug}>
                  <strong>{b.date}</strong>
                  <span>
                    {numbers?.has(b.slug) && (
                      <span className="route-n">{numbers.get(b.slug)}</span>
                    )}
                    <Link href={`/battles/${b.slug}`}>{b.name}</Link>
                    <small>
                      {b.kind} · {outcome ? b.outcome : b.location}
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
  );
}
