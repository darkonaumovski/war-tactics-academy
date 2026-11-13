# Verification record

## Commander list and comparison weight (13 November 2026)

The built commander list had grown to 437 KB (115 KB gzipped) as profiles were added, because its client catalog received every commander's full record: chronology, principal commands, assessments, engagement links and source. The cards and filters read only the name, state, years, era, role, approach, command role and titles. The page now receives a projection of those fields (`commanderListing` in `lib/projections.ts`); each profile page still receives its full record.

| Built page              | Before | After  |
| ----------------------- | ------ | ------ |
| Commander list          | 437 KB | 167 KB |
| Commander list, gzipped | 115 KB | 34 KB  |
| Comparison              | 368 KB | 238 KB |
| Comparison, gzipped     | 106 KB | 72 KB  |

The home page, the battle catalog and the search page were unchanged. All 133 unit and 89 end-to-end tests passed in Chromium, and the era, command-role and text filters were checked in the browser, including a search that matches only a commander's titles. The comparison page, which can show any two commanders, then received every full record. It now receives a second projection (`commanderComparison`) with the fields its table shows, leaving out each commander's chronology, summary, era and engagement links. All thirteen rows were checked in the browser for two pairs of commanders.

## Search page weight (13 November 2026)

The built search page had grown to 601 KB (125 KB gzipped) as the Leadership Lessons volumes were added. Measuring the export showed two parts: 318 KB of HTML, because with no query the page prerendered every one of its 493 records as a result, and 280 KB of serialised records that the browser filters (battles 74 KB, course lessons 58 KB of full lesson text, commanders 43 KB, leadership lessons 24 KB, campaigns 18 KB). No end-to-end test relied on the empty-query list.

Two changes, with no change to which records a query finds: the page now shows a short prompt instead of results until there is a query or a type filter (a type alone still lists its records), and battle records no longer repeat their name and summary inside their keywords, since those are already the record's title and text.

| Built page         | Before | After  |
| ------------------ | ------ | ------ |
| Search, total      | 601 KB | 277 KB |
| HTML               | 318 KB | 14 KB  |
| Serialised records | 280 KB | 262 KB |
| Search, gzipped    | 125 KB | 79 KB  |

The home page, the battle catalog and the commander list were unchanged. All 133 unit and 89 end-to-end tests passed in Chromium, including a new test for the empty-search prompt and for browsing by type. Moving the records to a separate file loaded on the first search was proposed and not done.

## Phone performance on a local build (9 November 2026)

Lighthouse 13.5.0 ran in its default mobile mode (a mid-range phone on simulated slow 4G) with Playwright's Chromium against three local builds: the export of commit `59995ab`, a build with only the data changes, and the final build. A temporary local server applied gzip, as GitHub Pages does, and served route payloads under the names Linux builds use. Each page was audited three times per build, and the table gives the median. Lighthouse's CPU benchmark stayed between about 1,600 and 2,240 across the runs. These are lab results from one computer and are not comparable with the live-site tables below; the changes have not yet been measured on the live site.

| Page           | Performance  | Largest paint (s) | Total blocking time (ms) | Page weight (KB)  |
| -------------- | ------------ | ----------------- | ------------------------ | ----------------- |
| Home           | 58 → 88 → 90 | 6.5 → 3.6 → 3.6   | 409 → 99 → 90            | 1,026 → 460 → 456 |
| Battle catalog | 41 → 68 → 79 | 8.6 → 4.0 → 3.8   | 810 → 674 → 323          | 1,400 → 534 → 497 |
| Atlas          | 60 → 81 → 81 | 7.1 → 4.1 → 4.1   | 269 → 213 → 202          | 1,101 → 533 → 533 |
| Waterloo study | 86 → 89 → 91 | 3.9 → 3.5 → 3.4   | 155 → 77 → 89            | 546 → 381 → 381   |

Each cell reads baseline → data changes → final build. The Waterloo study was not edited directly and serves as a control; it improved because the narrative bundle described below no longer loads on it.

- **Page data.** The battle catalog passed the whole catalog to a client component, and the home page and the atlas passed every engagement with its full study. Each client view now receives only the fields it reads (`lib/projections.ts`). A unit test keeps study and narrative text out of those projections and bounds their size. Catalog HTML fell from 3,916 KB to 1,093 KB (770 KB to 64 KB gzipped), home from 1,851 KB to 257 KB (481 KB to 65 KB), and the atlas from 1,712 KB to 152 KB (465 KB to 52 KB).
- **JavaScript.** Client components imported the era list from `data/catalog.ts`, which put every campaign narrative in a 468 KB chunk (155 KB gzipped) loaded by every page that uses those components. The list now lives in `data/eras.ts`, the chunk is gone, and total JavaScript fell from 1,950 KB to 1,453 KB. A unit test stops client components importing the full data modules.
- **Catalog rendering.** The decorative map on each card drew 114 separate strokes; each repeated layer is now one path, taking the catalog from 24,764 DOM elements to 9,080. Cards use `content-visibility: auto`, so off-screen cards skip layout and paint. Main-thread work on the catalog fell from 4.2 s to 2.0 s.
- **Appearance.** Screenshots of the catalog, home and a war page at phone and desktop widths were compared with the baseline. War pages are identical; elsewhere most differences are antialiasing of at most 3 of 255 levels per channel. On the desktop catalog, card contents can move by up to one pixel, because each card now lays out independently on fractional column widths.

Unit tests (105), lint and type checks passed. The Playwright suite passed in Chromium (60 of 60) and Firefox (60 of 60). In WebKit the first run passed 59 of 60: the mobile navigation test timed out waiting for hydration while another process was rebuilding `out/`. Against an isolated build of these changes on `59995ab`, WebKit passed 60 of 60 and that test passed eight repeats out of eight. The largest paint on phones is now limited mainly by font loading and render-blocking CSS, which were not changed.

## Lighthouse on the live site (2 November 2026)

Lighthouse 13.5.0 was run against the deployed site (commit `c11ccf5`) with Playwright's Chromium, once per page in its mobile mode (a mid-range phone on simulated slow 4G) and once in its desktop mode. These are single lab runs, so scores move by a few points between runs.

| Page                | Mobile performance | Desktop performance | Accessibility | Best practices | SEO |
| ------------------- | -----------------: | ------------------: | ------------: | -------------: | --: |
| Home                |                 56 |                  98 |           100 |             96 | 100 |
| Battle catalog      |                 38 |                  89 |            98 |             96 | 100 |
| Waterloo study      |                 67 |                 100 |            98 |             96 | 100 |
| Atlas               |                 60 |                  99 |            98 |             96 | 100 |
| Napoleon profile    |                 88 |                 100 |           100 |             96 | 100 |
| Napoleon collection |                 88 |                 100 |           100 |             96 | 100 |
| Academy             |                 89 |                 100 |           100 |             96 | 100 |

Findings and fixes:

- Every page downloaded about 1.3 MB of other routes' data, prefetched by the sidebar and breadcrumb links as soon as they appeared (the battle catalog, home and atlas pages alone came to more than 1.1 MB). On a slow phone this competed with the page being opened: the Waterloo study's summary paragraph, its largest element, rendered at 10.8 s in the simulation. Shell and breadcrumb links, and links elsewhere to the catalog, the atlas and the home page, now prefetch only when the reader hovers, focuses or touches them, following the hover-triggered pattern in the Next.js documentation; the global search form no longer prefetches `/search`. A local check after the change found none of those three routes prefetched on any of the seven pages.
- With no icon declared, browsers requested `/favicon.ico` from the domain root, outside the project path, and got a 404; this was the only best-practices deduction. The site now declares `app/icon.svg`, the logo's swords mark, linked under the base path.
- Battle cards, the atlas selection card and the replay's phase title were `<h3>` headings directly after the page's `<h1>`. The catalog grid now has a visually hidden “Engagements” heading, and the other two are `<h2>`, styled as before.
- Still open: the battle catalog spends about 6.5 s of main-thread time on a simulated phone rendering 127 cards and carries its full catalog data. GitHub Pages' 10-minute cache lifetime cannot be changed from the site.

After the fixes were deployed (commit `4da3776`), the same audits were run again. A first repeat ran while the computer was busy (Lighthouse's CPU benchmark averaged 921, against 1895 for the baseline) and is not used; the second averaged 1825 and is comparable.

| Page                | Mobile performance | Desktop performance | Accessibility | Best practices | Page weight (mobile) |
| ------------------- | -----------------: | ------------------: | ------------: | -------------: | -------------------: |
| Home                |            56 → 52 |             98 → 97 |     100 → 100 |       96 → 100 |       2,244 → 844 KB |
| Battle catalog      |            38 → 39 |             89 → 88 |      98 → 100 |       96 → 100 |     2,486 → 1,041 KB |
| Waterloo study      |            67 → 87 |            100 → 99 |      98 → 100 |       96 → 100 |       1,903 → 458 KB |
| Atlas               |            60 → 56 |             99 → 98 |      98 → 100 |       96 → 100 |       2,323 → 913 KB |
| Napoleon profile    |            88 → 91 |           100 → 100 |     100 → 100 |       96 → 100 |       1,853 → 412 KB |
| Napoleon collection |            88 → 93 |           100 → 100 |     100 → 100 |       96 → 100 |       1,919 → 475 KB |
| Academy             |            89 → 93 |           100 → 100 |     100 → 100 |       96 → 100 |       1,831 → 343 KB |

Page weight fell by 58–81% on every page, and accessibility and best practices reached 100 everywhere. The Waterloo study's largest element now renders at 3.5 s on a simulated phone, against 10.8 s. The home page, the atlas and the battle catalog are unchanged within the variation between runs: their mobile cost comes from their own data and rendering (the atlas and its preview on the home page, and the catalog's 127 cards), not from prefetching, and is the next performance work.

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
