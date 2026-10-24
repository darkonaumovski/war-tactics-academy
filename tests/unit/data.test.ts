import { it, expect } from "vitest";
import research from "../../data/research.json";
import commanders from "../../data/commanders.json";
import { researchSchema, commanderSchema } from "../../lib/validation";
import { battles, wars, campaigns, eras } from "../../data/catalog";
import { courses } from "../../data/learning";
it("validates source-backed analyses and the commander corpus", () => {
  expect(researchSchema.parse(research)).toHaveLength(8);
  expect(commanderSchema.parse(commanders)).toHaveLength(44);
});
it("provides 29 unique engagement slugs and a connected hierarchy", () => {
  expect(battles).toHaveLength(29);
  expect(new Set(battles.map((b) => b.slug)).size).toBe(29);
  for (const b of battles) {
    expect(wars.some((w) => w.slug === b.warId)).toBe(true);
    expect(
      campaigns.some((c) => c.slug === b.campaignId && c.warId === b.warId),
    ).toBe(true);
    expect(eras.some((e) => e.id === b.eraId)).toBe(true);
    expect(b.lat).toBeGreaterThanOrEqual(-90);
    expect(b.lat).toBeLessThanOrEqual(90);
  }
});
it("links all commander assignments to real engagement records", () => {
  for (const c of commanders)
    for (const slug of c.battleSlugs)
      expect(battles.some((b) => b.slug === slug)).toBe(true);
});
it("has source-backed examples and valid answers in every lesson", () => {
  for (const course of courses)
    for (const l of course.lessons) {
      expect(l.paragraphs.length).toBeGreaterThanOrEqual(3);
      expect(
        l.battleSlugs.every((s) => research.some((r) => r.slug === s)),
      ).toBe(true);
      for (const q of l.questions) {
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.choices.length);
      }
    }
});
