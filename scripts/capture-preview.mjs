import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const origin = process.env.PREVIEW_URL ?? "http://127.0.0.1:3000";
await mkdir("docs/screenshots", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  // Full-page captures never scroll, so scroll reveals would show as blank.
  reducedMotion: "reduce",
});
await page.goto(origin);
await page.getByRole("heading", { level: 1 }).waitFor();
await page.screenshot({
  path: "docs/screenshots/home-desktop.png",
  fullPage: true,
});
await page.screenshot({ path: "docs/screenshots/home-desktop-viewport.png" });
await page.goto(`${origin}/battles/waterloo`);
await page.getByRole("group", { name: "Select battle phase" }).waitFor();
await page.screenshot({
  path: "docs/screenshots/waterloo-desktop.png",
  fullPage: true,
});
await page.setViewportSize({ width: 375, height: 812 });
await page.goto(origin);
await page.screenshot({
  path: "docs/screenshots/home-mobile.png",
  fullPage: true,
});
await page.screenshot({ path: "docs/screenshots/home-mobile-viewport.png" });
await browser.close();
console.log("Saved desktop, mobile and Waterloo screenshots.");
