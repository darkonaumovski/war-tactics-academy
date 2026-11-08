import { describe, it, expect } from "vitest";
import { lessonExercises } from "../../data/lesson-exercises";
import { courses } from "../../data/learning";
import { battles, campaigns } from "../../data/catalog";

const lessons = courses.flatMap((c) =>
  c.lessons.map((l) => ({ key: `${c.slug}/${l.slug}`, lesson: l })),
);

describe("lesson exercises", () => {
  it("belong to existing lessons, which carry them", () => {
    for (const [key, extra] of Object.entries(lessonExercises)) {
      const found = lessons.find((l) => l.key === key);
      expect(found, key).toBeDefined();
      expect(found!.lesson.questions.length).toBe(1 + extra.questions.length);
      expect(found!.lesson.sourceCheck).toBe(extra.sourceCheck);
    }
  });
  it("give every lesson three questions and most of them a source check", () => {
    for (const { key, lesson } of lessons)
      expect(lesson.questions.length, key).toBe(3);
    const withoutCheck = lessons
      .filter(({ lesson }) => !lesson.sourceCheck)
      .map(({ key }) => key)
      .sort();
    expect(withoutCheck).toEqual([
      "alexanders-campaigns/mountains-and-steppe",
      "industrial-world-wars/air-and-naval-operations",
      "industrial-world-wars/command-coordination",
      "industrial-world-wars/military-technology",
      "napoleonic-warfare/artillery",
      "napoleonic-warfare/two-battles",
    ]);
  });
  it("have valid, varied questions", () => {
    for (const { key, lesson } of lessons) {
      const prompts = lesson.questions.map((q) => q.prompt);
      expect(new Set(prompts).size, key).toBe(prompts.length);
      for (const q of lesson.questions) {
        expect(q.answer, q.prompt).toBeLessThan(q.choices.length);
        expect(new Set(q.choices).size, q.prompt).toBe(q.choices.length);
      }
    }
    const answers = Object.values(lessonExercises).flatMap((e) =>
      e.questions.map((q) => q.answer),
    );
    expect(new Set(answers).size).toBeGreaterThan(1);
  });
  it("offer source checks with one best answer and a sourced campaign", () => {
    for (const [key, { sourceCheck }] of Object.entries(lessonExercises)) {
      if (!sourceCheck) continue;
      expect(sourceCheck.options.filter((o) => o.best).length, key).toBe(1);
      expect(sourceCheck.witnesses.length, key).toBeGreaterThanOrEqual(2);
      expect(
        Number(!!sourceCheck.campaignSlug) + Number(!!sourceCheck.battleSlug),
        key,
      ).toBe(1);
      if (sourceCheck.battleSlug)
        expect(
          battles.some((b) => b.slug === sourceCheck.battleSlug),
          key,
        ).toBe(true);
      else
        expect(
          campaigns.find((c) => c.slug === sourceCheck.campaignSlug)?.details,
          key,
        ).toBeDefined();
    }
  });
});
