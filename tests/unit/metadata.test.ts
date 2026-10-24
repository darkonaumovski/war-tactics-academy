import { it, expect } from "vitest";
import { pageMetadata, siteUrl } from "../../lib/metadata";
it("builds titled, described and canonical page metadata", () => {
  const m = pageMetadata(
    "Waterloo",
    "A coalition battle.",
    "/battles/waterloo/",
    "article",
  );
  expect(m.title).toBe("Waterloo");
  expect(m.description).toBe("A coalition battle.");
  expect(m.alternates?.canonical).toBe("/battles/waterloo/");
  expect(m.openGraph).toMatchObject({
    url: "/battles/waterloo/",
    type: "article",
  });
});
it("keeps a trailing slash on the site URL so base paths are preserved", () => {
  expect(siteUrl.href.endsWith("/")).toBe(true);
  expect(new URL("battles/", siteUrl).href).toBe(`${siteUrl.href}battles/`);
});
