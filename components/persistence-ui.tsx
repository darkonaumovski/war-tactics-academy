"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bookmark, Check, Clock, ArrowUpRight } from "lucide-react";
import {
  emptyProgress,
  eventName,
  readProgress,
  writeProgress,
  toggleBookmark,
  type Reading,
} from "../lib/persistence";
export function useProgress() {
  const [progress, setProgress] = useState(emptyProgress);
  useEffect(() => {
    const update = () => setProgress(readProgress());
    update();
    window.addEventListener(eventName, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(eventName, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  return progress;
}
export function SaveRecord({ record }: { record: Reading }) {
  const progress = useProgress();
  const [error, setError] = useState(false);
  const saved = progress.bookmarks.some((r) => r.href === record.href);
  const { href, title, kind } = record;
  useEffect(() => {
    writeProgress((p) => ({
      ...p,
      recent: [
        { href, title, kind },
        ...p.recent.filter((r) => r.href !== href),
      ].slice(0, 6),
    }));
  }, [href, title, kind]);
  return (
    <div>
      <button
        className={`button secondary ${saved ? "is-saved" : ""}`}
        aria-pressed={saved}
        onClick={() =>
          setError(!writeProgress((p) => toggleBookmark(record, p)))
        }
      >
        {saved ? <Check size={16} /> : <Bookmark size={16} />}{" "}
        {saved ? "Saved to collection" : "Save to collection"}
      </button>
      {error && (
        <p role="status" className="small">
          Browser storage is unavailable. This change could not be saved.
        </p>
      )}
    </div>
  );
}
export function SavedCollection({ recent = false }: { recent?: boolean }) {
  const p = useProgress();
  const records = recent ? p.recent : p.bookmarks;
  return records.length ? (
    <div className="saved-records">
      {records.map((r) => (
        <Link href={r.href} key={r.href}>
          {recent ? <Clock size={18} /> : <Bookmark size={18} />}
          <span>
            <small>{r.kind}</small>
            {r.title}
          </span>
          <ArrowUpRight size={16} />
        </Link>
      ))}
    </div>
  ) : (
    <div className="empty small">
      <Bookmark size={23} />
      <p>
        {recent
          ? "Your recently explored records will appear here."
          : "Your collection starts with a question. Save a battle or commander to return to it."}
      </p>
      <Link className="text-link" href="/battles">
        Explore the battle atlas →
      </Link>
    </div>
  );
}
export function CourseProgress({
  courseSlug,
  lessonCount,
}: {
  courseSlug: string;
  lessonCount: number;
}) {
  const p = useProgress();
  const count = Object.keys(p.lessons).filter((k) =>
    k.startsWith(`${courseSlug}/`),
  ).length;
  return (
    <div className="course-progress">
      <span>
        {count} of {lessonCount} lessons completed
      </span>
      <progress
        value={count}
        max={lessonCount}
        aria-label="Course completion"
      />
    </div>
  );
}
export function LessonStatus({ id }: { id: string }) {
  const p = useProgress();
  return p.lessons[id] !== undefined ? (
    <span className="completion">
      <Check size={14} />
      Completed
    </span>
  ) : null;
}
export function ScenarioStatus({ id }: { id: string }) {
  const p = useProgress();
  return p.scenarios[id] !== undefined ? (
    <span className="completion">
      <Check size={14} />
      Explored
    </span>
  ) : null;
}
