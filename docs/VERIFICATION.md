# Verification record

Date: 24 October 2026 (Europe/Warsaw). Environment: Windows, Node 24.20.0, npm 11.19.0. All application servers were bound to loopback; no publication or external deployment occurred.

## Completed checks

| Check                           | Result                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------- |
| `npm run lint`                  | Passed, no warnings or errors                                                                  |
| `npm run typecheck`             | Passed, strict TypeScript                                                                      |
| `npm test`                      | 33 passed, 0 failed, 6 test files                                                              |
| `npm run build`                 | Passed; optimized Next.js production build and generated Prisma client                         |
| `npm run db:setup`              | Passed; both checked-in migrations applied (`initial`, `course_ordinal`) and catalog populated |
| Repeated `npm run db:seed`      | Passed; no duplicate catalog records                                                           |
| Final Playwright production run | **102 passed, 0 failed, 0 skipped** in 3.8 minutes                                             |
| Chromium                        | 34 passed                                                                                      |
| Firefox                         | 34 passed                                                                                      |
| WebKit                          | 34 passed                                                                                      |

The final browser run used the built production server, with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000`. It contained 34 scenarios per engine (102 total), covering Chromium, Firefox and WebKit. All passed in one final full run, with no retries, skips or weakened assertions. The configuration enables failure screenshots, HTML/JSON reports and first-retry traces. Across unit/component and browser suites, 135 tests passed.

The original edition recorded 24 unit and 84 browser tests. This record was updated after the extended learning paths and curated media library were completed and brought under test.

## Database verification

Read-only SQLite queries after repeated setup confirmed:

| Entity              |                                            Count |
| ------------------- | -----------------------------------------------: |
| Battle / engagement |                                               29 |
| Commander           |                                               44 |
| War                 |                                               23 |
| Campaign            |                                               29 |
| BattlePhase         |                                               32 |
| HistoricalDecision  |                                                3 |
| LearningCourse      |                                                4 |
| Lesson              |                                               21 |
| QuizQuestion        |                                               21 |
| LessonSource        |                                              109 |
| HistoricalSource    |                                               86 |
| MediaResource       | 36 (9 curated media records, 27 linked readings) |

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
