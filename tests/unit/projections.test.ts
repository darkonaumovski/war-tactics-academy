import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import {
  atlasBattle,
  battleCatalogData,
  battleListing,
} from "../../lib/projections";
import { battles, campaigns, eras, wars } from "../../data/catalog";
import { collections } from "../../data/collections";
import type { Battle, Catalog, Commander } from "../../lib/types";

const commanders = [
  {
    slug: "napoleon-bonaparte",
    name: "Napoleon Bonaparte",
    battleSlugs: ["waterloo"],
    summary: "Text a list page never shows.",
  } as Commander,
];
// data/catalog holds the rows; studies join them in the database. A sentinel
// study and narrative make sure the projections really drop that text.
const SECRET = "Study text a list page never shows";
const study = { slug: "x", sources: [], sections: [], phases: [], note: SECRET };
const withStudy = { ...battles[0], research: study } as unknown as Battle;
const catalog = {
  battles: [withStudy, ...battles.slice(1)],
  wars: wars.map((w) => ({ ...w, details: { note: SECRET } })),
  campaigns: campaigns.map((x) => ({ ...x, details: { note: SECRET } })),
  commanders,
  courses: [],
  scenarios: [],
} as unknown as Catalog;

describe("what list pages send to the browser", () => {
  const data = battleCatalogData(catalog, collections);

  it("carries no study, narrative or essay text", () => {
    const json = JSON.stringify(data);
    expect(json).not.toContain('"research"');
    expect(json).not.toContain('"details"');
    expect(json).not.toContain('"introduction"');
    expect(json).not.toContain(SECRET);
    expect(json).not.toContain("Text a list page never shows");
    expect(JSON.stringify(atlasBattle(withStudy))).not.toContain(SECRET);
  });

  it("keeps the catalog small as studies grow", () => {
    expect(JSON.stringify(data).length).toBeLessThan(150_000);
    expect(JSON.stringify(battles.map(atlasBattle)).length).toBeLessThan(
      40_000,
    );
  });

  it("records whether a study exists without sending it", () => {
    expect(battleListing(withStudy).hasStudy).toBe(true);
    expect(
      battleListing({ ...withStudy, research: undefined }).hasStudy,
    ).toBe(false);
  });

  it("re-exports the era list unchanged", () => {
    expect(eras.map((e) => e.id)).toContain("napoleonic");
  });
});

describe("client components", () => {
  const dir = join(process.cwd(), "components");
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  const client = files
    .map((f) => [f, readFileSync(join(dir, f), "utf8")] as const)
    .filter(([, src]) => src.startsWith('"use client"'));

  it("are found", () => expect(client.length).toBeGreaterThan(5));

  it.each(client.map(([f, src]) => [f, src]))(
    "%s does not import the full data modules",
    (_, src) => {
      expect(src).not.toMatch(/from "[./]*data\/(catalog|collections)"/);
    },
  );
});
