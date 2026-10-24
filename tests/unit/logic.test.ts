import { describe, it, expect } from "vitest";
import {
  formatYear,
  filterBattles,
  nextPhase,
  quizScore,
  decisionTransition,
  normalize,
} from "../../lib/logic";
import { battles } from "../../data/catalog";
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
    expect(filterBattles(battles, " waterLOO ")).toHaveLength(1));
  it("finds a geographic region using text", () =>
    expect(filterBattles(battles, "Moravia")[0].slug).toBe("austerlitz"));
  it("combines filters rather than replacing them", () =>
    expect(
      filterBattles(battles, "", "world-wars", "Pacific", "Battle").map(
        (b) => b.slug,
      ),
    ).toEqual(["midway"]));
  it("returns an empty result for incompatible filters", () =>
    expect(filterBattles(battles, "", "ancient", "Pacific")).toEqual([]));
  it("matches accented names", () => expect(normalize("Tōgō")).toBe("togo"));
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
