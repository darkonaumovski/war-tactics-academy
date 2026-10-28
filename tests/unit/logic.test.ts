import { describe, it, expect } from "vitest";
import {
  formatYear,
  filterBattles,
  filterQuery,
  parseFilters,
  sortBattles,
  emptyFilters,
  nextPhase,
  quizScore,
  decisionTransition,
  normalize,
} from "../../lib/logic";
import { battles } from "../../data/catalog";
import { collections } from "../../data/collections";
import commanders from "../../data/commanders.json" with { type: "json" };
import { courses, scenarios } from "../../data/learning";
describe("historical date conventions", () => {
  it("formats BCE without a negative sign", () =>
    expect(formatYear(-490)).toBe("490 BCE"));
  it("formats CE", () => expect(formatYear(1815)).toBe("1815 CE"));
  it("rejects year zero and fractional dates", () => {
    expect(() => formatYear(0)).toThrow();
    expect(() => formatYear(1.2)).toThrow();
  });
});
describe("catalog filtering", () => {
  it("finds Waterloo by name", () =>
    expect(filterBattles(battles, { q: " waterLOO " })).toHaveLength(1));
  it("finds a geographic region using text", () =>
    expect(filterBattles(battles, { q: "Moravia" })[0].slug).toBe(
      "austerlitz",
    ));
  it("combines filters rather than replacing them", () =>
    expect(
      filterBattles(battles, {
        era: "world-wars",
        region: "Pacific",
        kind: "Battle",
      }).map((b) => b.slug),
    ).toEqual(["midway"]));
  it("returns an empty result for incompatible filters", () =>
    expect(
      filterBattles(battles, { era: "ancient", region: "Pacific" }),
    ).toEqual([]));
  it("matches accented names", () => expect(normalize("Tōgō")).toBe("togo"));
  it("filters by war and campaign", () => {
    expect(
      filterBattles(battles, { war: "napoleonic" }).every(
        (b) => b.warId === "napoleonic",
      ),
    ).toBe(true);
    expect(
      filterBattles(battles, { campaign: "macedonian-front" }).map(
        (b) => b.slug,
      ),
    ).toEqual([
      "kajmakcalan",
      "monastir-1916",
      "dobro-pole",
      "liberation-of-serbia-1918",
    ]);
  });
  it("filters by commander and collection through their links", () => {
    const kutuzov = filterBattles(
      battles,
      { commander: "mikhail-kutuzov" },
      { commanders },
    ).map((b) => b.slug);
    expect(kutuzov).toEqual(
      commanders
        .find((c) => c.slug === "mikhail-kutuzov")!
        .battleSlugs.filter((s) => battles.some((b) => b.slug === s))
        .sort(
          (a, b) =>
            battles.findIndex((x) => x.slug === a) -
            battles.findIndex((x) => x.slug === b),
        ),
    );
    expect(
      filterBattles(battles, { collection: "alexander" }, { collections }),
    ).toHaveLength(battles.filter((b) => b.warId === "alexander").length);
    expect(
      filterBattles(battles, { commander: "nobody" }, { commanders }),
    ).toEqual([]);
  });
  it("sorts by date either way and by name", () => {
    expect(sortBattles(battles, "date")[0].slug).toBe(battles[0].slug);
    expect(sortBattles(battles, "date-desc")[0].slug).toBe(
      battles[battles.length - 1].slug,
    );
    const names = sortBattles(battles, "name").map((b) => b.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, "en")));
  });
});
describe("catalog filters in the URL", () => {
  it("round-trip through the query string", () => {
    const f = {
      ...emptyFilters,
      q: "river crossing",
      war: "napoleonic",
      sort: "date-desc",
      view: "list",
    };
    expect(filterQuery(f)).toBe(
      "q=river+crossing&war=napoleonic&sort=date-desc&view=list",
    );
    expect(parseFilters(new URLSearchParams(filterQuery(f)))).toEqual(f);
  });
  it("omit defaults and ignore unknown values", () => {
    expect(filterQuery(emptyFilters)).toBe("");
    expect(
      parseFilters(new URLSearchParams("war=atlantis&sort=random&view=grid"), {
        war: ["napoleonic"],
      }),
    ).toEqual(emptyFilters);
  });
});
describe("interactive state", () => {
  it("advances and wraps a phase safely", () => {
    expect(nextPhase(0, 4)).toBe(1);
    expect(nextPhase(3, 4)).toBe(0);
    expect(nextPhase(0, 0)).toBe(0);
  });
  it("scores correct, incorrect and missing answers", () => {
    const q = courses[0].lessons[0].questions;
    expect(quizScore(q, [0])).toBe(1);
    expect(quizScore(q, [1])).toBe(0);
    expect(quizScore(q, [])).toBe(0);
  });
  it("accepts only a valid decision from briefing", () => {
    expect(decisionTransition("briefing", 0, 3)).toBe("feedback");
    expect(() => decisionTransition("briefing", 3, 3)).toThrow();
    expect(() => decisionTransition("feedback", 0, 3)).toThrow();
    expect(() => decisionTransition("briefing", -0.1, 3)).toThrow();
  });
  it("has one historical choice and meaningful feedback in every scenario", () => {
    for (const s of scenarios) {
      expect(s.options.filter((o) => o.historical)).toHaveLength(1);
      expect(s.options.every((o) => o.feedback.length > 80)).toBe(true);
      expect(battles.some((b) => b.slug === s.battleSlug)).toBe(true);
    }
  });
});
