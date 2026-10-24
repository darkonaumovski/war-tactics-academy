export type Reading = { href: string; title: string; kind: string };
export type Progress = {
  version: 1;
  bookmarks: Reading[];
  recent: Reading[];
  lessons: Record<string, number>;
  scenarios: Record<string, number>;
  theme: "dark" | "light";
};
export const emptyProgress = (): Progress => ({
  version: 1,
  bookmarks: [],
  recent: [],
  lessons: {},
  scenarios: {},
  theme: "dark",
});
const key = "wta-progress-v1";
export const eventName = "wta-progress";
export function readProgress(storage?: Pick<Storage, "getItem">): Progress {
  try {
    const s =
      storage ??
      (typeof window !== "undefined" ? window.localStorage : undefined);
    const raw = s?.getItem(key);
    if (!raw) return emptyProgress();
    const p = JSON.parse(raw);
    const isReading = (x: Reading) =>
      x &&
      typeof x.href === "string" &&
      /^\/(battles|commanders)\/[a-z0-9-]+$/.test(x.href) &&
      typeof x.title === "string" &&
      typeof x.kind === "string";
    if (
      p.version !== 1 ||
      !Array.isArray(p.bookmarks) ||
      !Array.isArray(p.recent) ||
      !p.lessons ||
      !p.scenarios
    )
      return emptyProgress();
    const numbers = (v: Record<string, unknown>): Record<string, number> =>
      Object.fromEntries(
        Object.entries(v).filter(
          (entry): entry is [string, number] =>
            typeof entry[1] === "number" &&
            Number.isInteger(entry[1]) &&
            entry[1] >= 0,
        ),
      );
    return {
      version: 1,
      bookmarks: p.bookmarks.filter(isReading),
      recent: p.recent.filter(isReading).slice(0, 6),
      lessons: numbers(p.lessons),
      scenarios: numbers(p.scenarios),
      theme: p.theme === "light" ? "light" : "dark",
    };
  } catch {
    return emptyProgress();
  }
}
export function writeProgress(
  update: (p: Progress) => Progress,
  storage?: Pick<Storage, "getItem" | "setItem">,
): boolean {
  try {
    const s =
      storage ??
      (typeof window !== "undefined" ? window.localStorage : undefined);
    if (!s) return false;
    s.setItem(key, JSON.stringify(update(readProgress(s))));
    if (typeof window !== "undefined")
      window.dispatchEvent(new Event(eventName));
    return true;
  } catch {
    return false;
  }
}
export function toggleBookmark(record: Reading, p: Progress): Progress {
  return {
    ...p,
    bookmarks: p.bookmarks.some((r) => r.href === record.href)
      ? p.bookmarks.filter((r) => r.href !== record.href)
      : [record, ...p.bookmarks],
  };
}
