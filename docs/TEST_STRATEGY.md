# Test strategy

## Unit and component tests

Vitest runs eight test files with 41 cases covering BCE/CE formatting, forbidden year zero, normalized search, combined filtering, empty results, phase advancement, quiz scoring, decision transitions, scenario consistency, persistence round trips, corrupt/unsupported storage, unsafe destinations, storage denial, source schemas, relationship integrity and quiz feedback/retry behavior. Course checks validate all four paths, curriculum order, unique lesson slugs, answer indexes, and the diagrams, seminars and sources of the extended paths. Media checks validate every record, unique IDs, video-only embeds, portrait hosts permitted by the image optimizer, and links to existing battles and commanders. Content-depth checks require a validated command record and chronology for every commander, details for every war, section references that point at existing sources, every perspective field for the seven battles with perspectives, and six exercises that each have one historical choice, a linked study and varied answer positions. React Testing Library exercises the quiz and the media library (filters, empty-state recovery, the video tab, on-request embeds and the portrait error fallback) through visible controls.

## Browser tests

Playwright defines Chromium, Firefox and WebKit projects. Unless `PLAYWRIGHT_BASE_URL` is set, it builds the static export and serves it with `scripts/serve-static.mjs`, so browser tests run against the files that are deployed, including real 404 responses. Each runs the same 45 scenarios. Tests use accessible roles and labels where possible; stable semantic containers scope repeated content. They cover:

- Homepage actions, main navigation, featured study and mobile navigation.
- Battle search, combined filters, no-results recovery, details, commander navigation and actual HTTP 404 response.
- All twenty-four replay timelines, phase selection, playback, zoom, keyboard pan, event popup and text alternative.
- Atlas functionality with all external HTTPS requests blocked.
- Commander search, profile associations and qualitative comparison.
- Lesson answers, explanatory results and completion after reload, in both the Foundations path and the Classical Warfare path, including seminar guidance and lesson page titles.
- Media library filtering, empty-state recovery, the video tab, on-request official embeds (with YouTube blocked) and links to related studies.
- Commander portrait attribution and the fallback when the image request fails.
- All six decision exercises, history/counterfactual separation and persistence.
- The engagement category filter, including operations.
- Page metadata (title, description, canonical URL, Open Graph type) and the sitemap.
- Commander role filtering, the command record and chronology on a profile, and principal commands and notable decisions in the comparison.
- War pages with participants, chronology and links to key commanders.
- Study section references linking to the cited source, and every perspective field on a battle with new perspectives.
- Bookmark save/reload/remove and global search across content families.
- Era/war/campaign/engagement navigation, theme persistence and keyboard skip link.
- Eleven representative pages at 375, 768 and 1440 pixels with no document-level horizontal overflow.
- Fourteen principal screens, including the library, portrait and chronology profiles, the Austerlitz study, a war page, search and an Industrial and World Wars lesson, with axe-core serious/critical violations asserted absent.
- Five light-theme screens with the same accessibility threshold. On the home page, the audit first scrolls through so that scroll-revealed sections are visible (axe skips transparent text).
- Scroll reveals: content in view is never hidden, below-the-fold sections appear when reached, jumping to the end leaves no section hidden, and reduced motion shows every section unmoved.
- All main sections checked for successful HTTP responses and uncaught browser errors. The check waits for each page's network to settle before moving on, because WebKit reports link prefetches cancelled by the next navigation as errors.

## Execution artifacts

HTML reports are in `playwright-report/`; JSON results and failure screenshots are in `test-results/`. Traces are captured on the first retry (CI retries once; local runs have no automatic retry). Reports are ignored by Git. Representative screenshots are retained in `docs/screenshots/`.

## Defect policy

Failures are investigated and fixed, not skipped or weakened. Initial QA found a 200 status for streamed not-found pages, inaccessible short-window theme controls, insufficient small-label contrast, a logo name mismatch and focusable atlas markers nested under an image role. Fixes targeted the implementation: blocking route resolution, scrollable sidebar, higher contrast, natural accessible logo text and a group role for the interactive SVG. The map-role test changed to match the corrected accessible semantics, while retaining the map visibility assertion.

## Limits

Browser accessibility scans do not establish full WCAG conformance. Screen-reader review, touch hardware, high zoom, long translated strings and production performance profiling remain manual/backlog work. Source scholarship cannot be proved by software tests. The data checks establish structure and relationships, not the truth of every historical interpretation.

Actual results, commands and environment restrictions are recorded separately in `VERIFICATION.md`.

Cross-browser testing also identified input accepted before React hydration in WebKit. Catalog controls now remain disabled until their handlers are ready. WebKit's default tab behavior skipped the anchor-based skip link; an explicit zero tab index makes that critical control reachable without changing the natural order. The light-theme regression check caught a dark-on-dark primary button; its text contrast was corrected without excluding any axe rules.
