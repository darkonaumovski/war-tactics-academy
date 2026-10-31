# Verification record

## Final pass of the battle expansion (31 October 2026)

Date: 31 October 2026 (Europe/Warsaw). Environment: Windows, Node 24.20.0. This record covers the final pass (Stage G) after the battle expansion: 127 engagements and studies, 106 commanders, 33 wars, 79 campaigns, six collections, ten courses and fifteen exercises.

| Check                                     | Result                                                                                                                                                    |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run lint`                            | Passed, no warnings or errors                                                                                                                             |
| `npm run typecheck`                       | Passed, strict TypeScript                                                                                                                                 |
| `npm test`                                | 79 passed, 0 failed, 10 test files                                                                                                                        |
| `npm run db:seed`                         | Passed: 127 engagements, 106 commanders, 127 studies, 10 courses, 15 exercises, 9 media records                                                           |
| `npm run build`                           | Passed; 441 pages, the not-found page and `sitemap.xml`; `out/` is about 105 MB                                                                           |
| Internal links in the static export       | 444 HTML files, 13,746 root-relative links, every target present in `out/`                                                                                |
| Collection, campaign and commander pages  | All 194 opened in Chromium (both indexes, 6 collections, 79 campaigns, 106 commanders and the comparison): HTTP 200, a heading, no page or console errors |
| Full Playwright run against static export | **180 passed, 0 failed, 0 skipped** in 13.6 minutes; 60 each in Chromium, Firefox and WebKit                                                              |

The crawl and the full run used `scripts/serve-static.mjs` on the exported files. Each page also requested route prefetch payloads that 404 locally: a Windows build writes them as `battles/__next.battles/__PAGE__.txt`, while the client asks for `battles/__next.battles.__PAGE__.txt`. The deploy workflow builds on Linux, and the live site serves the requested name with HTTP 200, so readers are not affected.

Getting to a clean run took three test changes, none in the site. The first full run failed two of 180 tests. In Firefox, the search test checked results for `?type=Battle` before the page had applied the type from the URL, so the prerendered list (all types) still held Otto von Below's profile, whose text names the Monastir offensive; the test now waits for the type select to show "Battle". In WebKit, the test that opens every study's timeline ran out of its fixed 180-second budget: with 127 studies WebKit needs about two seconds each. The budget now scales with the number of studies (four seconds each). A second run, slowed by the computer going to sleep, and a third timed out in axe scans: axe takes 23 to 52 seconds on the 127-card catalog in every engine, close to the 45-second test limit, and longer on a study page while the other worker runs the timeline test. The accessibility scans now have 90 seconds. No scan reported a violation in any run.

A fresh database built from the migrations and seed holds 127 `Battle`, 106 `Commander`, 33 `War`, 79 `Campaign`, 523 `BattlePhase`, 15 `HistoricalDecision`, 45 `DecisionOption`, 10 `LearningCourse`, 51 `Lesson`, 51 `QuizQuestion`, 106 `CommanderSource`, 494 `BattleSource`, 425 `LessonSource`, 462 `HistoricalSource` and 368 `MediaResource` rows (9 curated media records and 359 linked readings). The working database has three more `HistoricalSource` rows and one more `MediaResource` row, left by replaced links (see below).

The sections below are the record of 24 October 2026, kept for its defects and history.

## Typography and motion update (24 October 2026)

Date: 24 October 2026 (Europe/Warsaw). Environment: Windows, Node 24.20.0, npm 11.19.0. Local servers were bound to loopback. The site is published to GitHub Pages by the deploy workflow; this record covers local verification of the typography and motion update before it is pushed.

### Completed checks

| Check                                                  | Result                                                                                                     |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `npm run lint`                                         | Passed, no warnings or errors                                                                              |
| `npm run typecheck`                                    | Passed, strict TypeScript                                                                                  |
| `npm test`                                             | 41 passed, 0 failed, 8 test files                                                                          |
| `npm run build`                                        | Passed; 171 prerendered pages plus `sitemap.xml` from file-based routes                                    |
| Build with `BASE_PATH` and `SITE_URL` for GitHub Pages | Passed; canonical, Open Graph and sitemap URLs use `https://darkonaumovski.github.io/war-tactics-academy/` |
| `npm run db:setup`                                     | Passed; both checked-in migrations applied (`initial`, `course_ordinal`) and catalog populated             |
| Repeated `npm run db:seed`                             | Passed; no duplicate catalog records; the renamed campaign's old record removed                            |
| Full Playwright run against static export              | **135 passed, 0 failed, 0 skipped** in 5.6 minutes                                                         |
| Chromium / Firefox / WebKit                            | 45 passed each                                                                                             |
| Motion-sensitive tests, 4 repeats per engine           | 36 of 36 passed                                                                                            |
| Preloaded fonts / home page JavaScript                 | 2 files, 84 KB / 258 KB gzipped (223 KB before Motion)                                                     |

The browser runs built the static export and served it with `scripts/serve-static.mjs`, the same files that are deployed. The suite has 45 scenarios per engine (135 in total). No retries were configured and nothing was skipped.

The first full run with Motion failed two WebKit accessibility tests: a home section stayed transparent after the test scrolled quickly through the page. WebKit evaluated intersections too infrequently to see a block that was passed in one step, which a visitor jumping with the End key could also hit. The reveal now also checks on scroll whether a block has entered or been passed, and a test jumps straight to the end to cover this. A repeat run then exposed a test-only race (the scroll pass finished before hydration), so the audit helper repeats its scroll pass until every section is visible. After both changes, the full suite passed 135 of 135 and the motion-sensitive tests passed 36 of 36 repeated runs.

The original edition recorded 24 unit and 84 browser tests. Later updates recorded 33 unit and 102 browser tests, 38 unit and 114 browser tests, the static-export conversion, and 41 unit and 120 browser tests after the route restructure. This record reflects self-hosted typography and Motion animations.

### Database verification

Read-only SQLite queries after repeated setup confirmed:

| Entity              |                                            Count |
| ------------------- | -----------------------------------------------: |
| Battle / engagement |                                               29 |
| Commander           |                                               44 |
| War                 |                                               23 |
| Campaign            |                                               29 |
| BattlePhase         |                                               32 |
| HistoricalDecision  |                                                6 |
| DecisionOption      |                                               18 |
| LearningCourse      |                                                4 |
| Lesson              |                                               21 |
| QuizQuestion        |                                               21 |
| CommanderSource     |                                               44 |
| BattleSource        |                                               27 |
| LessonSource        |                                              109 |
| HistoricalSource    |                                               89 |
| MediaResource       | 37 (9 curated media records, 28 linked readings) |

`HistoricalSource` and `MediaResource` still contain rows for the three replaced source links. The seed upserts content and does not delete obsolete records, but it now replaces each battle's, commander's and lesson's source joins, so no join points at a replaced link. A fresh database contains only current sources.

### Important commands executed

```text
npm view next version
npm view react version
npm view prisma version
npm install --no-fund
npm exec prisma -- validate
npm exec prisma -- migrate dev --name initial
npm run db:generate
npm run db:setup
npm run db:seed
npm run lint
npm run typecheck
npm test
npm run test:e2e:chromium
npm exec playwright -- install firefox webkit
npm run test:e2e -- --project=firefox --project=webkit
npm run build
npm start
npm run test:e2e
node scripts/capture-preview.mjs
```

Stabilization update (extended courses and media library):

```text
npx prisma migrate dev --name course-ordinal --create-only
npm run db:setup
npm run db:seed
npm run lint
npm run typecheck
npm test
npm run build
npx playwright test --project=chromium
npm start
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 npx playwright test
```

Content-depth update:

```text
npm run db:seed
npm run lint
npm run typecheck
npm test
npm run build
npx playwright test --project=chromium
npm start
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 npx playwright test
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 npx playwright test --project=webkit -g "no browser runtime errors" --repeat-each=5
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 npx playwright test --project=webkit
```

Static export for GitHub Pages:

```text
npm run lint
npm run typecheck
npm test
npm run build
MSYS_NO_PATHCONV=1 BASE_PATH=/war-tactics-academy/ npm run build
MSYS_NO_PATHCONV=1 BASE_PATH=/war-tactics-academy/ PORT=3100 node scripts/serve-static.mjs
npx playwright test --project=chromium
npx playwright test
npx playwright test -g "no browser runtime errors" --repeat-each=4
```

Windows commands used the `npm.cmd` shim. Source files were formatted with Prettier. The Sites dependency helper initially failed to launch npm correctly on this Windows host; direct npm installation succeeded. Prisma's relative CLI database path was corrected to resolve against the workspace root. Restricted-shell user lookup prevented tsx from starting, so authorized local execution was used. An approval-review usage limit interrupted one diagnostic during the first session; it was successfully resumed after the user requested continuation.

### Defects found and fixed

- Streamed invalid-slug pages returned HTTP 200: removed the early root loading boundary and retained inline navigation feedback. Tests assert the actual 404 status and the custom page.
- The sidebar's theme switch could fall below a short viewport: made the sidebar scrollable and kept its children from shrinking.
- Small gold labels had insufficient contrast: increased their contrast in both themes.
- The logo accessible name did not include its full visible text: use its natural text alternative.
- Interactive atlas markers were nested within an image role: the SVG now has a group role with named keyboard controls.
- WebKit accepted early search input before React handlers attached: controlled catalog inputs remain disabled until hydration.
- WebKit skipped the skip-navigation anchor by default: explicitly set a zero tab index.
- The light palette had low-contrast primary button text, and animated color changes briefly produced low-contrast links: corrected the button color and removed text/background color transitions.
- Malformed fractional progress values could index a nonexistent scenario option: local persistence accepts only nonnegative integer progress values.

Found while completing the extended courses and media library:

- The two new courses were in the source data but not in the database, because it had not been re-seeded. Course order also depended on SQLite insertion order. Added a `LearningCourse.ordinal` column (migration `course_ordinal`), seeded it, and ordered the catalog query by it.
- The media library, portraits and seminar prompts had no styles. Added styles that match the existing panels in both themes and at mobile widths.
- Media cards labeled related records with raw slugs such as "normandy". They now show the record names, and the result count uses the singular for one resource.
- The commander profile note claimed "dated milestones" that no profile has. Restored the accurate editorial-status wording.
- Lesson pages used the generic site title. Metadata now resolves lesson titles.
- Unused optional fields (commander/war/campaign details, per-section source references, extra perspective fields) had types and schemas but no data or rendering. They were removed until content and UI exist for them.
- Lesson-specific readings were not stored in `LessonSource`, and media records were not in `MediaResource`. The seed now writes both and validates courses with a Zod schema.
- Next.js warned about smooth scrolling on `<html>` during route transitions. The root element now sets `data-scroll-behavior="smooth"`.

Found while deepening the historical content:

- A full check of all 88 source URLs found the dead National Archives Waterloo page (HTTP 410) and two dead commander sources (HTTP 404). They were replaced with verified pages; see the source audit.
- The Cannae study described the Cambridge excerpt as covering the preceding campaign. Reading it showed it introduces Livy and his text, so the note was corrected.
- Seeding left source joins for replaced links in place. The seed now replaces each record's source joins.
- War, campaign and exercise pages used the generic site title. Metadata now resolves their names.
- The Zod commander and research schemas would have silently stripped the new fields during seeding. They now validate them.

Found while converting to a static export for GitHub Pages:

- The global search box and the search page used plain HTML forms with action "/search", which ignore the base path and would have sent visitors to the wrong site under /war-tactics-academy/. Both now use next/form, which applies the base path.
- Request-time query strings cannot be rendered statically. Search and battle filters now read them in the browser, and the video tab moved to its own page.
- The portrait-fallback test blocked the Next image optimizer, which a static site does not use. It now blocks the archive host directly.

Found while restructuring the routes:

- The seed updated only the JSON payload of existing engagements, so a changed name, kind or campaign never reached the relational columns. It now updates them too.
- Renaming a campaign left its old record in the database, where it would have produced an empty campaign page. The seed now deletes campaigns that are no longer in the data.
- Generated route types in .next/ still referenced the removed catch-all route and failed type checking until regenerated.

Found while adding typography and motion:

- next/font preloads every listed subset, so the first configuration preloaded six font files (221 KB). The generated CSS declares all unicode ranges regardless, so only Latin is now preloaded (two files, 84 KB) and other ranges load when a page uses them.
- next/font rejects options passed through a shared variable; each family now lists its options literally.
- Scroll reveals could leave a section hidden after a fast jump in WebKit; reveals now also trigger once a section has been scrolled past.
- The preview screenshot script takes full-page captures without scrolling, which would show unrevealed sections as blank; it now emulates reduced motion.

### Screenshots and reports

- `docs/screenshots/home-desktop-viewport.png` — desktop first screen.
- `docs/screenshots/home-mobile-viewport.png` — mobile first screen.
- `docs/screenshots/home-desktop.png` — full desktop homepage.
- `docs/screenshots/home-mobile.png` — full mobile homepage.
- `docs/screenshots/waterloo-desktop.png` — full detailed study.
- `playwright-report/index.html` — latest HTML test report.
- `test-results/results.json` — latest machine-readable browser results.

Screenshots were captured from the production build and visually inspected. Temporary preview servers were stopped after verification; use `npm run dev` or `npm start` to restart locally. The screenshots remain available without a running server.

### Practical limits

Automated checks do not establish full WCAG conformance, scholarly consensus or a Lighthouse score. No screen-reader certification, production load test or deployment claim is made. See the source audits and roadmap for editorial, media and curriculum limitations.
