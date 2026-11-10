import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LeadershipVolume } from "../lib/types";
import type { LessonLink } from "../data/leadership";
import { SectionTitle } from "./ui";
// The Leadership Lessons a commander's profile leads to: the volume about them,
// or the lessons that use them as the counter-case.
export function LeadershipLinks({
  volume,
  counterCases,
}: {
  volume?: LeadershipVolume;
  counterCases: LessonLink[];
}) {
  if (!volume && !counterCases.length) return null;
  return (
    <>
      <SectionTitle number="◆" title="Leadership lessons" />
      <div className="lesson-list">
        {volume && (
          <Link href={`/leadership/${volume.commanderSlug}`}>
            <span className="lesson-number">{volume.lessons.length}</span>
            <div>
              <h2>{volume.title}</h2>
              <p>{volume.summary}</p>
            </div>
            <ArrowRight size={20} />
          </Link>
        )}
        {counterCases.map(({ volume: v, lesson }) => (
          <Link
            key={`${v.commanderSlug}/${lesson.slug}`}
            href={`/leadership/${v.commanderSlug}/${lesson.slug}`}
          >
            <span className="lesson-number">
              {String(v.lessons.indexOf(lesson) + 1).padStart(2, "0")}
            </span>
            <div>
              <h2>{lesson.title}</h2>
              <p>
                The counter-case in {v.title}: {lesson.claim}
              </p>
            </div>
            <ArrowRight size={20} />
          </Link>
        ))}
      </div>
    </>
  );
}
