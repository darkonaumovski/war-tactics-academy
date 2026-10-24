import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
page.on("pageerror", (e) => console.log("RUNTIME", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("CONSOLE", m.text().slice(0, 1500));
});
await page.goto(`http://127.0.0.1:3000${process.argv[2] ?? "/"}`);
if (process.argv.includes("--light"))
  await page.getByRole("button", { name: "Light reading mode" }).click();
const axe = await new AxeBuilder({ page }).analyze();
for (const v of axe.violations)
  console.log(
    JSON.stringify({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    }),
  );
console.log("theme buttons", await page.getByRole("button").allTextContents());
await browser.close();
