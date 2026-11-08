import { describe, it, expect } from "vitest";
import { campaignDetails } from "../../data/campaign-details";
import { warDetails } from "../../data/war-details";
import { battles, campaigns } from "../../data/catalog";
import { research } from "../../data/research";

// One-engagement campaigns outside the collections have a short context.
const shortContexts = new Set([
  "persian-expedition-to-the-aegean",
  "campaign-on-the-yangtze",
  "mesopotamian-campaign-of-530",
  "conquest-of-syria",
  "invasion-of-england",
  "saladin-s-campaign-of-1187",
  "third-crusade",
  "campaign-of-1211-against-the-jin",
  "mongol-invasion-of-hungary",
  "campaign-in-syria-and-palestine",
  "henry-v-s-campaign-of-1415",
  "siege-of-constantinople",
  "babur-s-invasion-of-hindustan",
  "nagashino-campaign",
  "joseon-naval-operations-of-1592",
  "sekigahara-campaign",
  "swedish-intervention-in-germany",
  "afzal-khan-s-expedition",
  "danube-campaign",
  "indian-campaign-of-1738-1739",
  "silesian-campaign-of-1757",
  "burgoyne-s-northern-campaign",
  "danubian-campaign-of-1789",
  "vicksburg-campaign",
  "gettysburg-campaign",
  "atlanta-campaign",
  "campaign-of-1870",
  "adwa-campaign",
  "baltic-fleet-voyage",
  "northwestern-campaign-of-1953-1954",
]);

describe("campaign narratives", () => {
  const entries = Object.entries(campaignDetails);
  it("cover every campaign in the catalog", () =>
    expect(Object.keys(campaignDetails).sort()).toEqual([
      "adwa-campaign",
      "afzal-khan-s-expedition",
      "atlanta-campaign",
      "attila-s-invasion-of-gaul",
      "babur-s-invasion-of-hindustan",
      "baltic-fleet-voyage",
      "battle-of-britain",
      "battle-of-the-atlantic",
      "boudican-revolt",
      "burgoyne-s-northern-campaign",
      "burma-campaign",
      "caesar-s-civil-war",
      "campaign-in-france-1814",
      "campaign-in-syria-and-palestine",
      "campaign-of-1211-against-the-jin",
      "campaign-of-1870",
      "campaign-on-the-yangtze",
      "campaigns-in-bactria-and-sogdiana",
      "central-pacific-drive",
      "conquest-of-syria",
      "constantine-s-italian-campaign",
      "crassus-s-parthian-expedition",
      "danube-campaign",
      "danubian-campaign-of-1789",
      "dardanelles-campaign",
      "east-prussian-campaign",
      "eastern-front-in-1916",
      "egyptian-and-syrian-campaign",
      "final-soviet-offensives-of-1945",
      "gallic-revolt-of-52-bce",
      "german-campaign-of-1813",
      "german-invasion-of-the-soviet-union",
      "german-summer-offensive-of-1942",
      "gettysburg-campaign",
      "gothic-war-of-376-382",
      "hannibal-s-italian-campaign",
      "henry-v-s-campaign-of-1415",
      "indian-campaign",
      "indian-campaign-of-1738-1739",
      "invasion-of-england",
      "invasion-of-poland",
      "italian-campaign-of-1796-1797",
      "italian-front",
      "japanese-midway-operation",
      "japanese-offensive-of-1941-1942",
      "joseon-naval-operations-of-1592",
      "judaean-campaign-of-vespasian-and-titus",
      "kursk-and-soviet-counteroffensives",
      "macedonian-front",
      "macedonian-invasion-of-persia",
      "marengo-campaign",
      "mesopotamian-campaign-of-530",
      "mongol-invasion-of-hungary",
      "nagashino-campaign",
      "north-african-campaign",
      "north-west-europe-campaign",
      "northwestern-campaign-of-1953-1954",
      "occupation-of-serbia",
      "paris-insurrection-of-1795",
      "persian-expedition-to-the-aegean",
      "philippines-campaign-of-1944-1945",
      "russian-campaign-of-1812",
      "saladin-s-campaign-of-1187",
      "scipio-s-african-campaign",
      "second-macedonian-war",
      "sekigahara-campaign",
      "serbian-campaign-of-1914",
      "serbian-campaign-of-1915",
      "siege-of-constantinople",
      "siege-of-toulon",
      "silesian-campaign-of-1757",
      "sinai-and-palestine-campaign",
      "solomon-islands-campaign",
      "south-pacific-operations-of-1942",
      "soviet-summer-offensive-of-1944",
      "swedish-intervention-in-germany",
      "third-crusade",
      "third-macedonian-war",
      "varus-s-campaign-in-germania",
      "vicksburg-campaign",
      "war-in-the-north-sea",
      "war-of-actium",
      "war-of-the-fifth-coalition",
      "war-of-the-fourth-coalition",
      "war-of-the-third-coalition",
      "waterloo-campaign",
      "western-campaign-of-1940",
      "western-front-in-1914",
      "western-front-in-1915",
      "western-front-in-1916",
      "western-front-in-1917",
      "western-front-in-1918",
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
      expect(d.narrative.length).toBeGreaterThanOrEqual(
        shortContexts.has(slug) ? 2 : 4,
      );
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
    expect(withBibliography.map(([slug]) => slug)).toEqual([
      "alexander",
      "punic",
      "macedonian-wars",
      "gallic",
      "roman-parthian",
      "roman-civil-wars",
      "roman-germanic",
      "roman-britain",
      "jewish-roman",
      "tetrarchy-civil-wars",
      "gothic-war",
      "hunnic-invasions",
      "french-revolutionary",
      "napoleonic",
      "ww1",
      "ww2",
    ]);
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
