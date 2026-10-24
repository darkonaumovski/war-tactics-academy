import { describe, it, expect } from "vitest";
import {
  readProgress,
  writeProgress,
  emptyProgress,
  toggleBookmark,
} from "../../lib/persistence";
const record = { href: "/battles/waterloo", title: "Waterloo", kind: "Battle" };
describe("local persistence", () => {
  it("defaults without storage", () =>
    expect(readProgress(localStorage)).toEqual(emptyProgress()));
  it("persists and removes a bookmark", () => {
    expect(writeProgress((p) => toggleBookmark(record, p), localStorage)).toBe(
      true,
    );
    expect(readProgress(localStorage).bookmarks).toEqual([record]);
    writeProgress((p) => toggleBookmark(record, p), localStorage);
    expect(readProgress(localStorage).bookmarks).toEqual([]);
  });
  it("recovers from invalid JSON", () => {
    localStorage.setItem("wta-progress-v1", "{broken");
    expect(readProgress(localStorage)).toEqual(emptyProgress());
  });
  it("ignores incompatible versions", () => {
    localStorage.setItem(
      "wta-progress-v1",
      JSON.stringify({ ...emptyProgress(), version: 2 }),
    );
    expect(readProgress(localStorage)).toEqual(emptyProgress());
  });
  it("rejects unsafe saved destinations and non-numeric progress", () => {
    localStorage.setItem(
      "wta-progress-v1",
      JSON.stringify({
        ...emptyProgress(),
        bookmarks: [record, { ...record, href: "javascript:alert(1)" }],
        lessons: { a: 2, b: "oops", c: -1, d: 1.5 },
      }),
    );
    const p = readProgress(localStorage);
    expect(p.bookmarks).toEqual([record]);
    expect(p.lessons).toEqual({ a: 2 });
  });
  it("gracefully reports storage denial", () => {
    const denied = {
      getItem: () => {
        throw Error("blocked");
      },
      setItem: () => {
        throw Error("blocked");
      },
    };
    expect(readProgress(denied)).toEqual(emptyProgress());
    expect(writeProgress((p) => p, denied)).toBe(false);
  });
  it("persists independent learning and scenario state", () => {
    writeProgress(
      (p) => ({
        ...p,
        lessons: { "foundations/terrain": 1 },
        scenarios: { "hold-the-ridge": 0 },
      }),
      localStorage,
    );
    expect(readProgress(localStorage).lessons["foundations/terrain"]).toBe(1);
    expect(readProgress(localStorage).scenarios["hold-the-ridge"]).toBe(0);
  });
});
