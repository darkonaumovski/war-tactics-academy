import { it, expect } from "vitest";
import { research } from "../../data/research";
import commanders from "../../data/commanders.json";
import {
  researchSchema,
  commanderSchema,
  courseSchema,
} from "../../lib/validation";
import { battles, wars, campaigns, eras } from "../../data/catalog";
import { courses } from "../../data/learning";
it("validates source-backed analyses and the commander corpus", () => {
  expect(researchSchema.parse(research)).toHaveLength(117);
  expect(commanderSchema.parse(commanders)).toHaveLength(60);
});
it("provides 117 unique engagement slugs and a connected hierarchy", () => {
  expect(battles).toHaveLength(117);
  expect(new Set(battles.map((b) => b.slug)).size).toBe(117);
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
it("orders engagements in the same year by date", () => {
  const order = battles.map((b) => b.slug);
  for (const [earlier, later] of [
    ["tyre", "gaza-332-bce"],
    ["toulon", "vendemiaire"],
    ["vendemiaire", "montenotte"],
    ["montenotte", "lodi"],
    ["castiglione", "arcole"],
    ["acre", "aboukir-1799"],
    ["eylau", "friedland"],
    ["eckmuhl", "aspern-essling"],
    ["aspern-essling", "wagram"],
    ["smolensk-1812", "borodino"],
    ["borodino", "maloyaroslavets"],
    ["maloyaroslavets", "berezina"],
    ["lutzen-1813", "bautzen"],
    ["bautzen", "dresden"],
    ["dresden", "leipzig"],
    ["leipzig", "hanau"],
    ["la-rothiere", "six-days-campaign"],
    ["six-days-campaign", "laon"],
    ["laon", "arcis-sur-aube"],
    ["ligny", "waterloo"],
    ["cer", "tannenberg"],
    ["tannenberg", "marne-1914"],
    ["marne-1914", "first-ypres"],
    ["first-ypres", "kolubara"],
    ["gallipoli", "second-ypres"],
    ["second-ypres", "belgrade-1915"],
    ["syrmia-1914", "drina-1914"],
    ["drina-1914", "kolubara"],
    ["invasion-of-serbia-1915", "serbian-retreat-1915"],
    ["mojkovac", "verdun"],
    ["verdun", "jutland"],
    ["jutland", "brusilov-offensive"],
    ["brusilov-offensive", "somme"],
    ["somme", "kajmakcalan"],
    ["toplica-uprising", "passchendaele"],
    ["passchendaele", "caporetto"],
    ["caporetto", "cambrai-1917"],
    ["kajmakcalan", "monastir-1916"],
    ["operation-michael", "amiens-1918"],
    ["amiens-1918", "dobro-pole"],
    ["dobro-pole", "megiddo-1918"],
    ["megiddo-1918", "meuse-argonne"],
    ["megiddo-1918", "liberation-of-serbia-1918"],
    ["dobro-pole", "liberation-of-serbia-1918"],
    ["france-1940", "battle-of-britain"],
    ["barbarossa", "moscow-1941"],
    ["moscow-1941", "pearl-harbor"],
    ["pearl-harbor", "singapore-1942"],
    ["coral-sea", "midway"],
    ["midway", "el-alamein"],
  ])
    expect(order.indexOf(earlier), later).toBeLessThan(order.indexOf(later));
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
it("validates all five learning paths in curriculum order", () => {
  const parsed = courseSchema.parse(courses);
  expect(parsed.map((c) => c.slug)).toEqual([
    "foundations",
    "classical-warfare",
    "napoleonic-warfare",
    "industrial-world-wars",
    "serbian-front",
  ]);
  for (const course of parsed) {
    const slugs = course.lessons.map((l) => l.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(course.lessons.length).toBeGreaterThanOrEqual(5);
  }
});
it("gives every extended-path lesson a diagram, seminar and traceable sources", () => {
  for (const slug of [
    "classical-warfare",
    "industrial-world-wars",
    "serbian-front",
  ]) {
    const course = courses.find((c) => c.slug === slug)!;
    for (const l of course.lessons) {
      expect(l.diagram?.length, l.slug).toBeGreaterThanOrEqual(2);
      expect(l.seminar?.prompt, l.slug).toBeTruthy();
      // A lesson without its own reading must lean on a referenced battle study.
      expect(
        (l.sources?.length ?? 0) + l.battleSlugs.length,
        l.slug,
      ).toBeGreaterThan(0);
    }
  }
});
