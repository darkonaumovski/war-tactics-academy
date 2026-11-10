import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Flag,
  Info,
  Medal,
  Shield,
  Swords,
} from "lucide-react";
import type {
  Catalog,
  Evidence,
  LeadershipLesson,
  LeadershipReading,
  LeadershipVolume,
  SectionRef,
  Source,
} from "../../lib/types";
import { leadershipVolumes } from "../../data/leadership";
import { Heading, Breadcrumbs, Sources } from "../ui";
import { CourseProgress, LessonStatus } from "../persistence-ui";
import { Quiz, SourceCheck } from "../learning";
const progressKey = (v: LeadershipVolume) => `leadership/${v.commanderSlug}`;
const evidenceLabels: Record<Evidence, string> = {
  fact: "Historical account",
  interpretation: "Interpretation",
  uncertainty: "Uncertainty",
};
function Refs({ refs, sources }: { refs: SectionRef[]; sources: Source[] }) {
  if (!refs.length) return null;
  return (
    <p className="section-refs">
      <span>Draws on</span>
      {refs.map((r) => (
        <a
          key={`${r.source}-${r.locator ?? ""}`}
          href={`#source-${r.source + 1}`}
          title={sources[r.source].title}
        >
          [{r.source + 1}] {sources[r.source].publisher}
          {r.locator && `, ${r.locator}`}
        </a>
      ))}
    </p>
  );
}
function Reading({
  title,
  reading,
  sources,
  children,
}: {
  title?: string;
  reading: LeadershipReading;
  sources: Source[];
  children?: React.ReactNode;
}) {
  return (
    <div className="leadership-reading">
      <div className="leadership-reading-head">
        {title && <h3>{title}</h3>}
        <span className={`evidence ${reading.evidence}`}>
          {evidenceLabels[reading.evidence]}
        </span>
      </div>
      <p>{reading.text}</p>
      {children}
      <Refs refs={reading.refs} sources={sources} />
    </div>
  );
}
function Lens({ name, title }: { name: string; title: string }) {
  return (
    <header className="leadership-lens">
      <span className="eyebrow">{name}</span>
      <h2>{title}</h2>
    </header>
  );
}
function StudyLinks({ slugs, c }: { slugs: string[]; c: Catalog }) {
  const battles = slugs.flatMap(
    (slug) => c.battles.find((b) => b.slug === slug) ?? [],
  );
  if (!battles.length) return null;
  return (
    <div className="leadership-links">
      {battles.map((b) => (
        <Link href={`/battles/${b.slug}`} key={b.slug}>
          <Swords size={14} />
          {b.name}
          <ArrowUpRight size={13} />
        </Link>
      ))}
    </div>
  );
}
export function LeadershipPage() {
  return (
    <div className="page-container">
      <Heading
        eyebrow="LEADERSHIP IN PRACTICE"
        title="Leadership Lessons"
        description="What a person who leads others can take from the great commanders, read by a historian, a strategist and a psychologist, with the evidence and the costs left in."
      />
      <div className="course-grid">
        {leadershipVolumes.map((v) => (
          <article className="course-card" key={v.commanderSlug}>
            <div className="course-emblem">
              <Medal size={55} strokeWidth={1} />
              <span>{v.lessons.length} LESSONS</span>
            </div>
            <div>
              <span className="eyebrow">VOLUME</span>
              <h2>{v.title}</h2>
              <p>{v.summary}</p>
              <CourseProgress
                courseSlug={progressKey(v)}
                lessonCount={v.lessons.length}
              />
              <Link
                className="text-link"
                href={`/leadership/${v.commanderSlug}`}
              >
                Open this volume <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="catalog-notice">
        <Info />
        <div>
          <h2>How to read these lessons</h2>
          <p>
            Each lesson tests one claim against a career. The labels show
            whether you are reading the historical account or an interpretation,
            and every psychological reading says how far it can go. One career
            cannot prove a rule.
          </p>
        </div>
      </div>
    </div>
  );
}
export function LeadershipVolumePage({
  volume: v,
}: {
  volume: LeadershipVolume;
}) {
  return (
    <div className="page-container narrow">
      <Breadcrumbs
        items={[
          { name: "Leadership Lessons", href: "/leadership" },
          { name: v.title },
        ]}
      />
      <Heading
        eyebrow={`VOLUME / ${v.lessons.length} LESSONS`}
        title={v.title}
        description={v.introduction}
      />
      <div className="leadership-claim">
        <span className="eyebrow">THE QUESTION OF THIS VOLUME</span>
        <p>{v.question}</p>
      </div>
      <CourseProgress
        courseSlug={progressKey(v)}
        lessonCount={v.lessons.length}
      />
      {v.inProgress && (
        <div className="catalog-notice">
          <Info />
          <div>
            <h2>A volume in progress</h2>
            <p>{v.inProgress}</p>
          </div>
        </div>
      )}
      {v.parts.map((part) => {
        const lessons = v.lessons.filter((l) => l.part === part);
        if (!lessons.length) return null;
        return (
          <section key={part}>
            <h2 className="leadership-part">{part}</h2>
            <div className="lesson-list">
              {lessons.map((l) => (
                <Link
                  key={l.slug}
                  href={`/leadership/${v.commanderSlug}/${l.slug}`}
                >
                  <span className="lesson-number">
                    {String(v.lessons.indexOf(l) + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2>{l.title}</h2>
                    <p>{l.claim}</p>
                    <LessonStatus id={`${progressKey(v)}/${l.slug}`} />
                  </div>
                  <ArrowRight size={20} />
                </Link>
              ))}
            </div>
          </section>
        );
      })}
      <StrengthAndShadow volume={v} />
    </div>
  );
}
// Each lesson's strength beside the cost it carried, with the volume's answer.
function StrengthAndShadow({ volume: v }: { volume: LeadershipVolume }) {
  const rows = v.lessons.filter((l) => l.inBrief);
  if (!rows.length) return null;
  const last = v.lessons[v.lessons.length - 1];
  return (
    <section className="leadership-ledger" aria-labelledby="ledger-title">
      <h2 className="leadership-part" id="ledger-title">
        Strengths and their shadows
      </h2>
      <p>
        Every strength in this volume carried a cost. The table sets them side
        by side, one line for each lesson.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Lesson</th>
            <th scope="col">The strength</th>
            <th scope="col">Its shadow</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={l.slug}>
              <th scope="row">
                <Link href={`/leadership/${v.commanderSlug}/${l.slug}`}>
                  {String(v.lessons.indexOf(l) + 1).padStart(2, "0")} {l.title}
                </Link>
              </th>
              <td data-label="The strength">{l.inBrief!.strength}</td>
              <td data-label="Its shadow">{l.inBrief!.shadow}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!v.inProgress && (
        <p>
          The last lesson,{" "}
          <Link href={`/leadership/${v.commanderSlug}/${last.slug}`}>
            {last.title}
          </Link>
          , answers the question of this volume, and its seminar asks you to
          argue the opposite.
        </p>
      )}
    </section>
  );
}
export function LeadershipLessonPage({
  volume: v,
  lesson: l,
  c,
}: {
  volume: LeadershipVolume;
  lesson: LeadershipLesson;
  c: Catalog;
}) {
  const index = v.lessons.indexOf(l);
  const next = v.lessons[index + 1];
  const commander = c.commanders.find(
    (m) => m.slug === l.counterCase.commanderSlug,
  );
  return (
    <div className="page-container lesson-page leadership-lesson">
      <Breadcrumbs
        items={[
          { name: "Leadership Lessons", href: "/leadership" },
          { name: v.title, href: `/leadership/${v.commanderSlug}` },
          { name: l.title },
        ]}
      />
      <Heading
        eyebrow={`${l.part} / LESSON ${index + 1} OF ${v.lessons.length}`}
        title={l.title}
      />
      <section>
        <Lens name="THE MOMENT" title="Where it starts" />
        <Reading reading={l.moment} sources={l.sources} />
      </section>
      <div className="leadership-claim">
        <span className="eyebrow">THE CLAIM UNDER TEST</span>
        <p>{l.claim}</p>
      </div>
      <section>
        <Lens name="THE HISTORIAN" title="What happened" />
        {l.episodes.map((e) => (
          <Reading
            key={e.title}
            title={e.title}
            reading={e}
            sources={l.sources}
          >
            <StudyLinks slugs={e.battleSlugs} c={c} />
            {e.campaignSlugs?.map((slug) => (
              <div className="leadership-links" key={slug}>
                <Link href={`/campaigns/${slug}`}>
                  <Flag size={14} />
                  {c.campaigns.find((x) => x.slug === slug)?.name}
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            ))}
          </Reading>
        ))}
        <h3 className="leadership-subhead">Who says so</h3>
        <div className="leadership-witnesses">
          {l.witnesses.map((w) => (
            <article key={w.who}>
              <strong>{w.who}</strong>
              <p className="leadership-stake">{w.stake}</p>
              <p>{w.says}</p>
              <Refs refs={w.refs} sources={l.sources} />
            </article>
          ))}
        </div>
      </section>
      <section>
        <Lens name="THE STRATEGIST" title="Without hindsight" />
        {l.strategist.map((s) => (
          <Reading key={s.text} reading={s} sources={l.sources} />
        ))}
      </section>
      <section>
        <Lens name="THE PSYCHOLOGIST" title="What research can add" />
        {l.psychologist.map((p) => (
          <Reading
            key={p.mechanism}
            title={p.mechanism}
            reading={p}
            sources={l.sources}
          >
            <p className="leadership-limit">
              <strong>Research base: {p.base}.</strong> {p.limit}
            </p>
          </Reading>
        ))}
      </section>
      <section>
        <Lens name="THE SHADOW" title="Where the same behaviour failed" />
        <Reading reading={l.shadow} sources={l.sources}>
          <StudyLinks slugs={l.shadow.battleSlugs ?? []} c={c} />
        </Reading>
      </section>
      <section>
        <Lens name="THE COUNTER-CASE" title="Another way to meet the problem" />
        <Reading reading={l.counterCase} sources={l.sources}>
          <div className="leadership-links">
            {commander && (
              <Link href={`/commanders/${commander.slug}`}>
                <Shield size={14} />
                {commander.name}
                <ArrowUpRight size={13} />
              </Link>
            )}
          </div>
          <StudyLinks slugs={l.counterCase.battleSlugs} c={c} />
        </Reading>
      </section>
      {l.cost && (
        <section>
          <Lens name="THE COST" title="Who paid" />
          <Reading reading={l.cost} sources={l.sources} />
        </section>
      )}
      <section>
        <Lens name="CARRYING IT FORWARD" title="When this applies" />
        <div className="leadership-transfer">
          <div>
            <h3>It tends to hold when</h3>
            <ul>
              {l.transfer.holdsWhen.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>It tends to fail when</h3>
            <ul>
              {l.transfer.failsWhen.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="leadership-subhead">Questions for your own situation</h3>
        <ol className="leadership-questions">
          {l.transfer.questions.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </section>
      <div className="leadership-claim">
        <span className="eyebrow">WHAT THIS ADDS TO THE QUESTION</span>
        <p className="leadership-question">{v.question}</p>
        <p>{l.bearsOn}</p>
      </div>
      <Quiz lesson={l} courseSlug={progressKey(v)} />
      {l.sourceCheck && <SourceCheck check={l.sourceCheck} />}
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
      <div className="lesson-navigation">
        <Link className="text-link" href={`/leadership/${v.commanderSlug}`}>
          ← Back to volume
        </Link>
        {next && (
          <Link
            className="button secondary"
            href={`/leadership/${v.commanderSlug}/${next.slug}`}
          >
            Next lesson <ArrowRight size={15} />
          </Link>
        )}
      </div>
      <Sources sources={l.sources} />
    </div>
  );
}
