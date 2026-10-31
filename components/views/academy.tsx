import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Swords,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import type { Catalog, Course, Lesson } from "../../lib/types";
import { Heading, Breadcrumbs, Sources } from "../ui";
import { CourseProgress, LessonStatus } from "../persistence-ui";
import { Quiz } from "../learning";
export function AcademyPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow={`STRUCTURED LEARNING / ${String(c.courses.length).padStart(2, "0")}`}
        title="Enter the Academy"
        description="Build understanding, one question at a time. Read the evidence, test your reasoning and connect lessons to real historical cases."
      />
      <div className="course-grid">
        {c.courses.map((course, i) => (
          <article className="course-card" key={course.slug}>
            <div className="course-emblem">
              <GraduationCap size={55} strokeWidth={1} />
              <span>PATH {String(i + 1).padStart(2, "0")}</span>
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
