import { it, expect } from "vitest";
import { research } from "../../data/research";
import commanders from "../../data/commanders.json";
import {
  researchSchema,
  commanderSchema,
  warDetailsSchema,
} from "../../lib/validation";
import { battles, wars } from "../../data/catalog";
import { warDetails } from "../../data/war-details";
import { scenarios } from "../../data/learning";
it("gives every commander a validated command record and chronology", () => {
  const parsed = commanderSchema.parse(commanders);
  for (const c of parsed) {
    expect(c.details, c.slug).toBeDefined();
    expect(c.details!.timeline.length, c.slug).toBeGreaterThanOrEqual(4);
    expect(c.details!.principalCommands.length, c.slug).toBeGreaterThan(0);
  }
  // Each command role should be represented, so the catalog filter is meaningful.
  expect(new Set(parsed.map((c) => c.details!.category)).size).toBe(5);
});
it("gives every war validated participants, scope and chronology", () => {
  warDetailsSchema.parse(warDetails);
  for (const w of wars) expect(w.details, w.slug).toBeDefined();
  expect(Object.keys(warDetails).sort()).toEqual(
    wars.map((w) => w.slug).sort(),
  );
});
it("points every section reference at an existing study source", () => {
  for (const study of researchSchema.parse(research)) {
    const referenced = study.sections.filter((s) => s.refs?.length);
    expect(referenced.length, study.slug).toBeGreaterThanOrEqual(12);
    for (const s of referenced)
      for (const r of s.refs!) {
        expect(r.source, `${study.slug}: ${s.title}`).toBeLessThan(
          study.sources.length,
        );
      }
  }
});
it("covers every perspective field for battles with commander perspectives", () => {
  const withPerspectives = researchSchema
    .parse(research)
    .filter((s) => s.perspectives?.length);
  // Every study except Marathon has command perspectives.
  expect(withPerspectives.map((s) => s.slug).sort()).toEqual(
    research
      .map((s) => s.slug)
      .filter((s) => s !== "marathon")
      .sort(),
  );
  for (const study of withPerspectives) {
    expect(study.perspectives!.length).toBeGreaterThanOrEqual(2);
    for (const p of study.perspectives!)
      for (const key of ["forces", "terrain", "logistics", "outcome"] as const)
        expect(p[key], `${study.slug}: ${p.name} ${key}`).toBeTruthy();
  }
});
it("defines fourteen exercises, each with one historical choice and a study", () => {
  expect(scenarios).toHaveLength(14);
  expect(new Set(scenarios.map((s) => s.slug)).size).toBe(14);
  for (const s of scenarios) {
    expect(
      s.options.filter((o) => o.historical),
      s.slug,
    ).toHaveLength(1);
    expect(
      battles.some((b) => b.slug === s.battleSlug),
      s.slug,
    ).toBe(true);
    expect(
      research.some((r) => r.slug === s.battleSlug),
      s.slug,
    ).toBe(true);
  }
  // The historical answer should not always sit in the same position.
  expect(
    new Set(scenarios.map((s) => s.options.findIndex((o) => o.historical)))
      .size,
  ).toBeGreaterThan(1);
});
it("distinguishes battles, sieges, operations and campaigns", () => {
  expect(new Set(battles.map((b) => b.kind))).toEqual(
    new Set(["Battle", "Siege", "Operation", "Campaign"]),
  );
  expect(battles.find((b) => b.slug === "normandy")?.kind).toBe("Operation");
});
