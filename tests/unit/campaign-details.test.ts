import { describe, it, expect } from "vitest";
import { campaignDetails } from "../../data/campaign-details";
import { warDetails } from "../../data/war-details";
import { battles, campaigns } from "../../data/catalog";
import { research } from "../../data/research";

describe("campaign narratives", () => {
  const entries = Object.entries(campaignDetails);
  it("cover the three Alexander campaigns", () =>
    expect(Object.keys(campaignDetails).sort()).toEqual([
      "campaigns-in-bactria-and-sogdiana",
      "indian-campaign",
      "macedonian-invasion-of-persia",
    ]));
  it("belong to existing campaigns, which carry them", () => {
    for (const [slug, d] of entries) {
      const c = campaigns.find((x) => x.slug === slug);
      expect(c, slug).toBeDefined();
      expect(c!.details).toBe(d);
      expect(c!.summary).toBe(d.summary);
    }
  });
  it("name only studied engagements of their own campaign", () => {
    for (const [slug, d] of entries)
      for (const s of d.narrative)
        for (const study of s.studies) {
          const b = battles.find((x) => x.slug === study);
          expect(b?.campaignId, `${slug}: ${study}`).toBe(slug);
          expect(
            research.some((r) => r.slug === study),
            study,
          ).toBe(true);
        }
  });
  it("mention every engagement of the campaign", () => {
    for (const [slug, d] of entries) {
      const named = d.narrative.flatMap((s) => s.studies);
      for (const b of battles.filter((x) => x.campaignId === slug))
        expect(named, `${slug}: ${b.slug}`).toContain(b.slug);
    }
  });
  it("cite valid sources, and use every source", () => {
    for (const [slug, d] of entries) {
      expect(d.narrative.length).toBeGreaterThanOrEqual(4);
      expect(new Set(d.narrative.map((s) => s.title)).size).toBe(
        d.narrative.length,
      );
      const used = new Set<number>();
      for (const s of d.narrative) {
        expect(s.refs.length, `${slug}: ${s.title}`).toBeGreaterThan(0);
        for (const r of s.refs) {
          expect(d.sources[r.source], `${slug}: ${s.title}`).toBeDefined();
          used.add(r.source);
        }
      }
      expect(used.size, slug).toBe(d.sources.length);
      expect(new Set(d.sources.map((s) => s.url)).size).toBe(d.sources.length);
      for (const s of d.sources) expect(s.url).toMatch(/^https:\/\//);
    }
  });
});

describe("war bibliographies", () => {
  it("have annotated, unique https sources", () => {
    const withBibliography = Object.entries(warDetails).filter(
      ([, d]) => d.bibliography,
    );
    expect(withBibliography.map(([slug]) => slug)).toEqual(["alexander"]);
    for (const [, d] of withBibliography) {
      const list = d.bibliography!;
      expect(new Set(list.map((s) => s.url)).size).toBe(list.length);
      for (const s of list) {
        expect(s.url).toMatch(/^https:\/\//);
        expect(s.note.length).toBeGreaterThan(40);
      }
    }
  });
});
