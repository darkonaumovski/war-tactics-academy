import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import { research } from "../../data/research";
// Scroll-revealed sections stay transparent until seen, and axe skips
// transparent text. Scroll through the page so every section is audited.
// The pass repeats because hydration can finish after an early pass, at which
// point sections below the top are (correctly) hidden until scrolled to again.
async function revealAll(page: Page) {
  await expect(async () => {
    await page.evaluate(async () => {
      for (let y = 0; y <= document.body.scrollHeight; y += 400) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    for (const block of await page.locator(".home-content > div").all())
      await expect(block).toHaveCSS("opacity", "1", { timeout: 1500 });
  }).toPass({ timeout: 20000 });
}
test("homepage navigation, featured study and hero actions", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Command",
  );
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Explore Battles", exact: true })
    .click();
  await expect(page).toHaveURL(/\/battles\/$/);
  await page.goto("/");
  await page
    .getByRole("link", { name: "Enter the Academy", exact: true })
    .click();
  await expect(page).toHaveURL(/\/academy\/$/);
  await page.goto("/");
  await page.getByRole("link", { name: "Explore the Waterloo study" }).click();
  await expect(
    page.getByRole("heading", { name: "Waterloo", exact: true, level: 1 }),
  ).toBeVisible();
});
test("battle search and combined filters", async ({ page }) => {
  await page.goto("/battles");
  await expect(page.getByRole("status")).toHaveText("29 engagements");
  await page.getByRole("textbox", { name: "Search battles" }).fill("Waterloo");
  await expect(page.getByRole("status")).toHaveText("1 engagements");
  await page.getByRole("link", { name: /Time, terrain & coalition/ }).click();
  await expect(page).toHaveURL(/waterloo\/$/);
  await page.goto("/battles");
  await page
    .getByLabel("Historical era", { exact: true })
    .selectOption("world-wars");
  await page.getByLabel("Region", { exact: true }).selectOption("Pacific");
  await expect(page.getByRole("status")).toHaveText("1 engagements");
  await expect(
    page.getByRole("heading", { name: "Midway", exact: true }),
  ).toBeVisible();
  await page.getByLabel("Search battles").fill("absent");
  await expect(
    page.getByRole("heading", { name: "No records match" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.getByRole("status")).toHaveText("29 engagements");
});
test("battle detail related commander and proper not-found", async ({
  page,
}) => {
  await page.goto("/battles/waterloo");
  await page
    .locator(".study-aside")
    .getByRole("link", { name: "Napoleon Bonaparte" })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Napoleon Bonaparte",
  );
  await expect(
    page.getByRole("heading", { name: "Waterloo", exact: true }),
  ).toBeVisible();
  const response = await page.goto("/battles/not-a-real-battle");
  await expect(
    page.getByRole("heading", { name: "This record isn’t in the archive." }),
  ).toBeVisible();
  expect(response?.status()).toBe(404);
});
test("timeline selection, playback, zoom and accessible alternative", async ({
  page,
}) => {
  await page.goto("/battles/waterloo");
  const phases = page
    .getByRole("group", { name: "Select battle phase" })
    .getByRole("button");
  await expect(phases).toHaveCount(4);
  await phases.nth(2).click();
  await expect(phases.nth(2)).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".phase-info .eyebrow")).toContainText("03");
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await page.getByRole("group", { name: /Battle schematic/ }).focus();
  await page.keyboard.press("ArrowRight");
  await page.getByRole("button", { name: "Reset map view" }).click();
  await page.getByRole("button", { name: "Phase 3 event" }).click();
  await expect(page.locator(".event-popup")).toBeVisible();
  await page.getByRole("button", { name: "Reset timeline" }).click();
  await page.getByRole("button", { name: "Play timeline" }).click();
  await expect(phases.nth(1)).toHaveAttribute("aria-pressed", "true", {
    timeout: 7000,
  });
  await page.getByRole("button", { name: "Pause timeline" }).click();
  await page.getByText("Read the complete accessible timeline").click();
  await expect(page.locator(".text-timeline li")).toHaveCount(4);
});
test("every detailed study has a functional timeline", async ({ page }) => {
  for (const { slug } of research) {
    await page.goto(`/battles/${slug}`);
    const buttons = page
      .getByRole("group", { name: "Select battle phase" })
      .getByRole("button");
    await expect(buttons).toHaveCount(4);
    await buttons.nth(3).click();
    await expect(page.locator(".phase-info .eyebrow")).toContainText("04");
    await expect(page.locator(".analysis-section")).toHaveCount(14);
  }
});
test("atlas works without external network services", async ({ page }) => {
  await page.route("https://**/*", (r) => r.abort());
  await page.goto("/atlas");
  await expect(
    page.getByRole("group", {
      name: "World map of approximate engagement locations",
    }),
  ).toBeVisible();
  await page.getByLabel("Atlas era").selectOption("ancient");
  await page.getByRole("button", { name: "Show Cannae", exact: true }).click();
  await expect(page.locator(".atlas-selection h3")).toHaveText("Cannae");
  await page.getByRole("button", { name: "Zoom atlas in" }).click();
  await page.getByRole("link", { name: "Explore engagement" }).click();
  await expect(page).toHaveURL(/cannae\/$/);
});
test("commander search, profile and comparison", async ({ page }) => {
  await page.goto("/commanders");
  await page.getByLabel("Search commanders").fill("Hannibal");
  await page.getByRole("link", { name: /Hannibal Barca/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Hannibal Barca",
  );
  await expect(
    page.getByRole("heading", { name: "Cannae", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Compare historical approaches" })
    .click();
  await page
    .getByLabel("Commander 1", { exact: true })
    .selectOption("hannibal-barca");
  await page
    .getByLabel("Commander 2", { exact: true })
    .selectOption("chester-w-nimitz");
  await expect(
    page.getByRole("columnheader", { name: "Hannibal Barca" }),
  ).toBeVisible();
  await expect(
    page.getByRole("columnheader", { name: "Chester W. Nimitz" }),
  ).toBeVisible();
});
test("lesson quiz accepts an answer, explains it and persists progress", async ({
  page,
}) => {
  await page.goto("/academy");
  await page
    .getByRole("link", { name: "Explore this learning path" })
    .first()
    .click();
  await page.getByRole("link", { name: /Strategy versus tactics/ }).click();
  await page
    .getByRole("radio", {
      name: "Tactical victory and political settlement are different problems.",
    })
    .check();
  await page.getByRole("button", { name: "Check my understanding" }).click();
  await expect(page.getByRole("status")).toContainText("1/1");
  await page.reload();
  await expect(
    page.getByText("Previously completed · score 1/1"),
  ).toBeVisible();
  await page.getByRole("link", { name: "Back to course" }).click();
  await expect(page.getByText("1 of 5 lessons completed")).toBeVisible();
});
test("extended learning paths are listed and their lessons persist progress", async ({
  page,
}) => {
  await page.goto("/academy");
  await expect(
    page.getByRole("heading", { name: "Classical Warfare", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Industrial and World Wars",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("0 of 6 lessons completed")).toBeVisible();
  await page.goto("/academy/classical-warfare");
  await page.getByRole("link", { name: /Historical siege warfare/ }).click();
  await expect(page).toHaveTitle(/Historical siege warfare/);
  await page.getByText("Approach to the evidence").click();
  await expect(page.getByText(/Assess specific claims/)).toBeVisible();
  await page
    .getByRole("radio", {
      name: "Roman forces faced pressure from inside and outside",
    })
    .check();
  await page.getByRole("button", { name: "Check my understanding" }).click();
  await expect(page.getByRole("status")).toContainText("1/1");
  await page.reload();
  await expect(
    page.getByText("Previously completed · score 1/1"),
  ).toBeVisible();
  await page.getByRole("link", { name: "Back to course" }).click();
  await expect(page.getByText("1 of 5 lessons completed")).toBeVisible();
});
test("decision feedback separates history and counterfactual and persists", async ({
  page,
}) => {
  await page.goto("/simulator/hold-the-ridge");
  await expect(
    page.getByRole("heading", { name: "What remains uncertain" }),
  ).toBeVisible();
  await page.getByRole("radio", { name: /Withdraw early/ }).check();
  await page.getByRole("button", { name: "Examine this decision" }).click();
  await expect(
    page.getByRole("heading", { name: "What actually happened" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Counterfactual interpretation" }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "What actually happened" }),
  ).toBeVisible();
  await expect(
    page.getByRole("radio", { name: /Withdraw early/ }),
  ).toBeChecked();
  await page.getByRole("button", { name: "Explore another approach" }).click();
  await expect(
    page.getByRole("button", { name: "Examine this decision" }),
  ).toBeDisabled();
});
test("all six historical exercises are usable", async ({ page }) => {
  for (const slug of [
    "after-cannae",
    "midway-intelligence",
    "hold-the-ridge",
    "strike-the-plateau",
    "two-fronts-at-alesia",
    "march-south",
  ]) {
    await page.goto(`/simulator/${slug}`);
    await page.getByRole("radio").first().check();
    await page.getByRole("button", { name: "Examine this decision" }).click();
    await expect(
      page.getByRole("heading", { name: "What actually happened" }),
    ).toBeVisible();
  }
});
test("bookmarks survive reload and can be removed", async ({ page }) => {
  await page.goto("/battles/waterloo");
  await page
    .getByRole("button", { name: "Save to collection", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Saved to collection" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Saved to collection" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.goto("/saved");
  await expect(
    page
      .locator(".saved-records")
      .first()
      .getByRole("link", { name: /Waterloo/ }),
  ).toBeVisible();
  await page.goto("/battles/waterloo");
  await page.getByRole("button", { name: "Saved to collection" }).click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Save to collection", exact: true }),
  ).toHaveAttribute("aria-pressed", "false");
});
test("media library filters records and loads official embeds on request", async ({
  page,
}) => {
  await page.route(/youtube(-nocookie)?\.com/, (r) => r.abort());
  await page.goto("/library");
  await expect(page.getByRole("status")).toHaveText("9 resources");
  await page.getByLabel("Media type").selectOption("portrait");
  await expect(page.getByRole("status")).toHaveText("2 resources");
  await page.getByLabel("Search media").fill("Grant");
  await expect(page.getByRole("status")).toHaveText("1 resource");
  await page.getByLabel("Search media").fill("no such record");
  await page.getByRole("button", { name: "Clear media filters" }).click();
  await expect(page.getByRole("status")).toHaveText("9 resources");
  await page.getByRole("link", { name: "Documentaries & lectures" }).click();
  await expect(page).toHaveURL(/\/library\/videos\/$/);
  await expect(page.getByRole("status")).toHaveText("2 resources");
  await expect(page.locator("iframe")).toHaveCount(0);
  await page
    .getByRole("button", {
      name: "Load video: Archives Live: D-Day",
      exact: true,
    })
    .click();
  await expect(
    page.getByTitle("Archives Live: D-Day", { exact: true }),
  ).toHaveAttribute("src", /^https:\/\/www\.youtube-nocookie\.com\/embed\//);
  await page
    .getByRole("link", { name: "Study: Operation Overlord (Normandy) →" })
    .first()
    .click();
  await expect(page).toHaveURL(/battles\/normandy\/$/);
});
test("commander portrait carries attribution and degrades if unavailable", async ({
  page,
}) => {
  await page.goto("/commanders/ulysses-s-grant");
  const portrait = page.locator(".profile-intro figure");
  await expect(
    portrait.getByRole("link", { name: /Ulysses S. Grant portrait/ }),
  ).toBeVisible();
  await expect(portrait).toContainText("Public domain");
  await page.route("https://catalog.archives.gov/**", (r) => r.abort());
  await page.reload();
  await expect(portrait).toContainText("Image unavailable");
  await expect(
    portrait.getByRole("link", { name: /Ulysses S. Grant portrait/ }),
  ).toBeVisible();
});
test("commander profile shows its command record and role filter", async ({
  page,
}) => {
  await page.goto("/commanders");
  await page.getByLabel("Commander type").selectOption("Naval commander");
  await expect(page.getByRole("status")).toContainText("4 historical figures");
  await page.getByRole("link", { name: /Yi Sun-sin/ }).click();
  await expect(page).toHaveTitle(/Yi Sun-sin/);
  await expect(
    page.getByRole("heading", { name: /Command record/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Chronology" }),
  ).toBeAttached();
  await expect(page.locator(".chronology")).toContainText("Myeongnyang");
  await expect(
    page.getByRole("heading", { name: "Defeats & reverses" }),
  ).toBeVisible();
});
test("comparison includes principal commands and notable decisions", async ({
  page,
}) => {
  await page.goto("/commanders/compare");
  await expect(
    page.getByRole("rowheader", { name: "Principal commands" }),
  ).toBeVisible();
  await expect(
    page.getByRole("row", { name: /A notable decision/ }),
  ).toContainText("Pratzen");
});
test("war page shows participants, chronology and key commanders", async ({
  page,
}) => {
  await page.goto("/wars/punic");
  await expect(page).toHaveTitle(/Second Punic War/);
  await expect(
    page.getByRole("heading", { name: "Principal participants" }),
  ).toBeVisible();
  await expect(page.locator(".war-context .chronology")).toContainText(
    "Battle of Cannae",
  );
  await page.getByRole("link", { name: "Hannibal Barca", exact: true }).click();
  await expect(page).toHaveURL(/commanders\/hannibal-barca\/$/);
});
test("study sections link to their sources and perspectives show every field", async ({
  page,
}) => {
  await page.goto("/battles/marathon");
  const terrain = page.locator(".analysis-section").filter({
    has: page.getByRole("heading", { name: "Geography and terrain" }),
  });
  await terrain.getByRole("link", { name: /\[1\].*6\.102/ }).click();
  await expect(page).toHaveURL(/#source-1$/);
  await expect(page.locator("#source-1")).toContainText("Herodotus");
  await page.goto("/battles/austerlitz");
  const perspectives = page.locator(".perspective-grid > article");
  await expect(perspectives).toHaveCount(2);
  for (const label of [
    "Available forces",
    "Terrain considerations",
    "Logistics",
    "Outcome & retrospective interpretation",
  ])
    await expect(
      perspectives.first().getByRole("heading", { name: label }),
    ).toBeVisible();
});
test("engagement category filter distinguishes operations", async ({
  page,
}) => {
  await page.goto("/battles");
  await page.getByLabel("Engagement category").selectOption("Operation");
  await expect(page.getByRole("status")).toHaveText("1 engagements");
  await page
    .getByRole("link", { name: /Operation Overlord \(Normandy\)/ })
    .click();
  await expect(page.getByText("North-west Europe campaign")).toBeVisible();
});
test("pages publish descriptive metadata and a sitemap", async ({ page }) => {
  await page.goto("/battles/waterloo/");
  await expect(page).toHaveTitle("Waterloo | War Tactics Academy");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Hundred Days/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/battles\/waterloo\/$/,
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "article",
  );
  const sitemap = await page.request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const xml = await sitemap.text();
  expect(xml).toContain("/battles/waterloo/</loc>");
  expect(xml).toContain("/academy/classical-warfare/siege-warfare/</loc>");
});
test("global search includes campaigns and learning", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("searchbox", { name: "Search the academy" })
    .fill("Waterloo");
  await page.getByRole("button", { name: "Submit search" }).click();
  await expect(page.locator(".search-results")).toContainText(
    "Waterloo campaign",
  );
  await page
    .getByLabel("Content type", { exact: true })
    .selectOption("Learning");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.locator(".search-results")).toContainText(
    "Coalition warfare",
  );
});
test("war to campaign to battle hierarchy", async ({ page }) => {
  await page.goto("/wars/napoleonic");
  await page
    .getByRole("link", { name: "Waterloo campaign", exact: true })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Waterloo campaign",
  );
  await page.getByRole("link", { name: /Time, terrain & coalition/ }).click();
  await expect(page).toHaveURL(/battles\/waterloo\/$/);
});
test("theme preference persists", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Light reading mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Dark reading mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
test("mobile navigation opens and closes after navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "The Academy", exact: true })
    .click();
  await expect(page).toHaveURL(/academy\/$/);
  await expect(
    page.getByRole("button", { name: "Open navigation", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
});
test("keyboard skip navigation reaches the main landmark", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
});
for (const width of [375, 768, 1440])
  test(`responsive pages have no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/battles",
      "/battles/waterloo",
      "/commanders",
      "/commanders/compare",
      "/academy/foundations/terrain",
      "/academy/classical-warfare/siege-warfare",
      "/simulator/hold-the-ridge",
      "/atlas",
      "/library",
      "/commanders/ulysses-s-grant",
    ]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth + 1,
        ),
        route,
      ).toBe(true);
    }
  });
for (const route of [
  "/",
  "/battles",
  "/battles/waterloo",
  "/commanders/compare",
  "/academy/foundations/strategy-and-tactics",
  "/academy/industrial-world-wars/air-and-naval-operations",
  "/simulator/hold-the-ridge",
  "/atlas",
  "/library",
  "/commanders/ulysses-s-grant",
  "/commanders/yi-sun-sin",
  "/battles/austerlitz",
  "/wars/punic",
  "/search?q=terrain",
])
  test(`accessibility: ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.getByRole("main")).toBeVisible();
    if (route === "/") await revealAll(page);
    const result = await new AxeBuilder({ page }).analyze();
    expect(
      result.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical",
      ),
    ).toEqual([]);
  });
test("home sections reveal on scroll and respect reduced motion", async ({
  page,
}) => {
  await page.goto("/");
  const commanders = page.locator(".home-content > .commander-grid");
  // Content that starts in view is never hidden.
  await expect(page.locator(".hero h1")).toHaveCSS("opacity", "1");
  await expect(commanders).toHaveCSS("opacity", "0");
  await commanders.scrollIntoViewIfNeeded();
  await expect(commanders).toHaveCSS("opacity", "1");
  // Jumping straight to the end must not leave skipped sections hidden.
  await page.reload();
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }),
  );
  await expect(page.locator(".home-content > .era-strip")).toHaveCSS(
    "opacity",
    "1",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator(".home-content > .challenge-banner")).toHaveCSS(
    "opacity",
    "1",
  );
  await expect(commanders).toHaveCSS("transform", "none");
});
test("main routes produce no browser runtime errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of [
    "/",
    "/battles",
    "/commanders",
    "/wars",
    "/atlas",
    "/academy",
    "/simulator",
    "/library",
    "/library/videos/",
    "/about",
    "/saved",
    "/search?q=terrain",
  ]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // Let link prefetches finish: WebKit reports fetches cancelled by the next
    // page.goto as errors, which a reader who stays on the page never triggers.
    await page.waitForLoadState("networkidle");
  }
  expect(errors).toEqual([]);
});

test("light theme maintains accessible contrast", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Light reading mode" }).click();
  for (const route of [
    "/",
    "/academy/foundations/strategy-and-tactics",
    "/simulator/hold-the-ridge",
    "/battles/austerlitz",
    "/commanders/yi-sun-sin",
  ]) {
    await page.goto(route);
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    if (route === "/") await revealAll(page);
    const result = await new AxeBuilder({ page }).analyze();
    expect(
      result.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical",
      ),
    ).toEqual([]);
  }
});
