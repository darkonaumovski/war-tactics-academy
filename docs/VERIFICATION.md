# Verification record

Date: 24 October 2026 (Europe/Warsaw). Environment: Windows, Node 24.20.0, npm 11.19.0. All application servers were bound to loopback; no publication or external deployment occurred.

## Completed checks

| Check                          | Result                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| `npm run lint`                 | Passed, no warnings or errors                                                                  |
| `npm run typecheck`            | Passed, strict TypeScript                                                                      |
| `npm test`                     | 38 passed, 0 failed, 7 test files                                                              |
| `npm run build`                | Passed; optimized Next.js production build and generated Prisma client                         |
| `npm run db:setup`             | Passed; both checked-in migrations applied (`initial`, `course_ordinal`) and catalog populated |
| Repeated `npm run db:seed`     | Passed; no duplicate catalog records                                                           |
| Full Playwright production run | **113 passed, 1 failed, 0 skipped** in 3.7 minutes                                             |
| Chromium                       | 38 passed                                                                                      |
| Firefox                        | 38 passed                                                                                      |
| WebKit, full run               | 37 passed, 1 failed (intermittent; see below)                                                  |
| WebKit, failed test repeated   | 5 of 5 passed                                                                                  |
| WebKit, whole project rerun    | 38 passed                                                                                      |

The browser runs used the built production server, with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000`. The suite has 38 scenarios per engine (114 in total) across Chromium, Firefox and WebKit. No retries were configured, nothing was skipped and no assertion was weakened. The configuration enables failure screenshots, HTML/JSON reports and first-retry traces.

In the full three-engine run, WebKit's "main routes produce no browser runtime errors" test failed once. It recorded errors of the form "…?\_rsc=… due to access control checks" for eight routes: React Server Component prefetch requests that WebKit reported as failed while the test navigated rapidly from page to page. The test passed in five isolated repetitions and in a rerun of the whole WebKit project. This is recorded as an intermittent WebKit prefetch-cancellation failure under parallel load, not as a pass. It has not yet been investigated further.

The original edition recorded 24 unit and 84 browser tests. A later update recorded 33 unit and 102 browser tests after the extended learning paths and media library were completed. This record reflects the deeper commander, war, perspective, source-reference and exercise content.

## Database verification

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

## Important commands executed

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

Windows commands used the `npm.cmd` shim. Source files were formatted with Prettier. The Sites dependency helper initially failed to launch npm correctly on this Windows host; direct npm installation succeeded. Prisma's relative CLI database path was corrected to resolve against the workspace root. Restricted-shell user lookup prevented tsx from starting, so authorized local execution was used. An approval-review usage limit interrupted one diagnostic during the first session; it was successfully resumed after the user requested continuation.

## Defects found and fixed

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

## Screenshots and reports

- `docs/screenshots/home-desktop-viewport.png` — desktop first screen.
- `docs/screenshots/home-mobile-viewport.png` — mobile first screen.
- `docs/screenshots/home-desktop.png` — full desktop homepage.
- `docs/screenshots/home-mobile.png` — full mobile homepage.
- `docs/screenshots/waterloo-desktop.png` — full detailed study.
- `playwright-report/index.html` — latest HTML test report.
- `test-results/results.json` — latest machine-readable browser results.

Screenshots were captured from the production build and visually inspected. Temporary preview servers were stopped after verification; use `npm run dev` or `npm start` to restart locally. The screenshots remain available without a running server.

## Practical limits

Automated checks do not establish full WCAG conformance, scholarly consensus or a Lighthouse score. No screen-reader certification, production load test or deployment claim is made. See the source audits and roadmap for editorial, media and curriculum limitations.
