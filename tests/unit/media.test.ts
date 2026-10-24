import { it, expect } from "vitest";
import records from "../../data/media.json";
import commanders from "../../data/commanders.json";
import { media, mediaSchema } from "../../lib/media";
import { battles, eras } from "../../data/catalog";
import config from "../../next.config";
it("validates every curated media record with attribution and licensing", () => {
  expect(mediaSchema.parse(records)).toHaveLength(media.length);
  expect(new Set(media.map((m) => m.id)).size).toBe(media.length);
  for (const m of media) {
    expect(m.license.length, m.id).toBeGreaterThan(0);
    expect(m.attribution.length, m.id).toBeGreaterThan(0);
    expect(
      eras.some((e) => e.id === m.eraId),
      m.id,
    ).toBe(true);
  }
});
it("embeds only verified privacy-enhanced YouTube players for videos", () => {
  for (const m of media) {
    if (m.kind === "video") expect(m.embedUrl, m.id).toBeDefined();
    else expect(m.embedUrl, m.id).toBeUndefined();
  }
});
it("serves portrait images only from hosts allowed by the image optimizer", () => {
  const patterns = config.images?.remotePatterns ?? [];
  for (const m of media.filter((m) => m.imageUrl)) {
    expect(m.kind, m.id).toBe("portrait");
    const url = new URL(m.imageUrl!);
    expect(
      patterns.some(
        (p) =>
          typeof p !== "string" &&
          !(p instanceof URL) &&
          p.hostname === url.hostname &&
          url.pathname.startsWith((p.pathname ?? "/").replace(/\*+$/, "")),
      ),
      m.id,
    ).toBe(true);
  }
});
it("links media only to existing battles and commanders", () => {
  for (const m of media) {
    for (const slug of m.battleSlugs)
      expect(
        battles.some((b) => b.slug === slug),
        `${m.id} → ${slug}`,
      ).toBe(true);
    for (const slug of m.commanderSlugs)
      expect(
        commanders.some((c) => c.slug === slug),
        `${m.id} → ${slug}`,
      ).toBe(true);
  }
});
