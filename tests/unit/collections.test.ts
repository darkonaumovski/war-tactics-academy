import { describe, it, expect } from "vitest";
import {
  collectionBattles,
  collectionPeriod,
  collections,
} from "../../data/collections";
import { battles, campaigns, wars } from "../../data/catalog";
import { courses } from "../../data/learning";
import { alexanderRows } from "../../data/battles/alexander";
import { romeRows } from "../../data/battles/rome";
import { napoleonRows } from "../../data/battles/napoleon";
import { serbianFrontRows } from "../../data/battles/serbian-front";
import { ww1Rows } from "../../data/battles/ww1";
import { ww2Rows } from "../../data/battles/ww2";
const members = (slug: string) =>
  collectionBattles(
    collections.find((x) => x.slug === slug)!,
    battles,
  ).map((b) => b.slug);
describe("collections", () => {
  it("are the six planned collections with unique slugs", () =>
    expect(collections.map((x) => x.slug)).toEqual([
      "alexander",
      "rome",
      "napoleon",
      "ww1",
      "serbian-front",
      "ww2",
    ]));
  it("refer only to existing wars, campaigns and courses", () => {
    for (const x of collections) {
      for (const w of x.wars ?? [])
        expect(wars.map((v) => v.slug)).toContain(w);
      for (const k of x.campaigns ?? [])
        expect(campaigns.map((v) => v.slug)).toContain(k);
      for (const k of x.courseSlugs)
        expect(courses.map((v) => v.slug)).toContain(k);
    }
  });
  it("include every row of their collection module", () => {
    for (const [slug, rows] of [
      ["alexander", alexanderRows],
      ["rome", romeRows],
      ["napoleon", napoleonRows],
      ["serbian-front", serbianFrontRows],
      ["ww1", [...ww1Rows, ...serbianFrontRows]],
      ["ww2", ww2Rows],
    ] as const)
      expect(members(slug).sort()).toEqual(rows.map((r) => r[0]).sort());
  });
  it("list members in date order", () => {
    for (const x of collections) {
      const years = collectionBattles(x, battles).map((b) => b.year);
      expect(years).toEqual([...years].sort((a, b) => a - b));
    }
  });
  it("draw each arc paragraph only from member studies", () => {
    for (const x of collections) {
      const slugs = members(x.slug);
      for (const p of x.arc) {
        expect(p.studies.length).toBeGreaterThan(0);
        for (const s of p.studies)
          expect(slugs, `${x.slug}: ${s}`).toContain(s);
      }
    }
  });
  it("cover every member study in the arc of a finished collection", () => {
    for (const x of collections.filter((c) => !c.inProgress)) {
      const cited = new Set(x.arc.flatMap((p) => p.studies));
      expect(members(x.slug).filter((s) => !cited.has(s))).toEqual([]);
    }
  });
  it("format their period from the first and last engagement", () => {
    const period = (slug: string) =>
      collectionPeriod(
        collectionBattles(
          collections.find((x) => x.slug === slug)!,
          battles,
        ),
      );
    expect(period("alexander")).toBe("334–326 BCE");
    expect(period("rome")).toBe("216 BCE – 451 CE");
    expect(period("napoleon")).toBe("1793–1815");
  });
});
