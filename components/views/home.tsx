import Link from "next/link";
import { Reveal } from "../motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Swords,
  GraduationCap,
  Target,
  BookOpen,
  Shield,
  Flag,
} from "lucide-react";
import type { Catalog, Commander } from "../../lib/types";
import { eras } from "../../data/catalog";
import { dailyChallengeIndex } from "../../lib/daily-challenge";
import { SectionTitle, BattleCard, CommanderCard } from "../ui";
import { Cartography } from "../cartography";
import { Atlas } from "../atlas";
import { SavedCollection } from "../persistence-ui";
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
        <Reveal className="featured-study">
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
        </Reveal>
        <Reveal className="battle-grid home-battles">
          {["cannae", "austerlitz", "midway"].map((s) => (
            <BattleCard key={s} battle={c.battles.find((b) => b.slug === s)!} />
          ))}
        </Reveal>
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
        <Reveal className="commander-grid home-commanders">
          {featuredCommanders
            .map((s) => c.commanders.find((x) => x.slug === s))
            .filter((x): x is Commander => !!x)
            .map((commander) => (
              <CommanderCard key={commander.slug} commander={commander} />
            ))}
        </Reveal>
        <SectionTitle number="04" title="Across the ages" />
        <Reveal className="era-strip">
          {eras.map((e, i) => (
            <Link href={`/battles?era=${e.id}`} key={e.id}>
              <span className="era-number">0{i + 1}</span>
              <h3>{e.name}</h3>
              <span>{e.period}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </Reveal>
        <Reveal className="learning-feature">
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
        </Reveal>
        <SectionTitle
          number="05"
          title="The wider campaign"
          href="/wars"
          label="Wars & campaigns"
        />
        <Reveal className="war-links">
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
        </Reveal>
        <Reveal className="challenge-banner">
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
        </Reveal>
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
