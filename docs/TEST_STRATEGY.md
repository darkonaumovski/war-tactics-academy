# Test strategy

## Unit and component tests

Vitest runs ten test files with 79 cases.

- **Logic:** BCE/CE formatting, forbidden year zero, normalized and accent-insensitive search (every word in any order, exact titles ranked first), combined filters by era, war, campaign, commander and collection, empty results, sorting, filters round-tripped through the query string, phase advancement, quiz scoring, decision transitions, scenario consistency and career-strip layout.
- **Atlas and route maps:** every engagement falls in a region and stays on screen there, the Serbian Front markers separate in the Balkans view, zoom is clamped, nearby markers group deterministically and every marker appears once, groups zoom or fan out, and route maps number every stop once in date order, keep markers apart and draw a locator for a single engagement.
- **Collections:** the six planned collections, references to existing wars, campaigns and courses, membership in date order, and arc paragraphs that name only member studies (all of them, in a finished collection).
- **Data integrity:** source schemas, 127 unique engagement slugs in a connected hierarchy, same-year ordering by date, commander assignments that point at real engagements, all ten learning paths in curriculum order with valid answers, and a diagram, seminar and traceable sources for every extended-path lesson.
- **Content depth:** a validated command record and chronology for every commander, details for every war, section references that point at existing sources, every perspective field for each battle with perspectives, the distinction between battles, sieges, operations and campaigns, and fifteen exercises that each have one historical choice, a linked study and varied answer positions.
- **Media and persistence:** every media record with attribution and licence, video-only privacy-enhanced embeds, portrait hosts in the image configuration, links to existing battles and commanders; persistence round trips, corrupt or unsupported storage, unsafe destinations and storage denial; page metadata and base-path handling.
- **Components:** React Testing Library exercises the quiz (empty submission, explanation, retry) and the media library (filters, empty-state recovery, the video tab, on-request embeds and the portrait error fallback) through visible controls.

## Browser tests

Playwright defines Chromium, Firefox and WebKit projects. Unless `PLAYWRIGHT_BASE_URL` is set, it builds the static export and serves it with `scripts/serve-static.mjs`, so browser tests run against the files that are deployed, including real 404 responses. Each engine runs the same 60 scenarios (180 in total). Tests use accessible roles and labels where possible; stable semantic containers scope repeated content. They cover:

- Homepage actions, main navigation, featured study and mobile navigation.
- Battle search, combined filters, filters kept in the URL across a reload, a shared list-view link, the filtered catalog opened from war and commander pages, the engagement category filter, details, commander navigation and an actual HTTP 404 response.
- Every study's replay timeline (all 127, with their phase counts and 14 analysis sections), phase selection, playback, zoom, keyboard pan, event popup and text alternative.
- The atlas with all external HTTPS requests blocked, dense areas separated at 1280 and 375 pixels, and `?battle=` links from engagement pages.
- Collection pages with ordered timelines, schematic route maps on campaign and collection pages, and commander career strips in date order.
- Commander search, role filtering, profile associations, the command record and chronology, portrait attribution and its fallback, and the qualitative comparison with principal commands and notable decisions.
- Lesson answers, explanatory results and completion after reload, in both the Foundations path and an extended path, including seminar guidance and lesson page titles.
- Every decision exercise (15), history/counterfactual separation and persistence.
- Media library filtering, empty-state recovery, the video tab, on-request official embeds (with YouTube blocked) and links to related studies.
- War pages with participants, chronology and key commanders; the war, campaign and engagement hierarchy.
- Study section references linking to the cited source, and every perspective field on a battle with perspectives.
- Page metadata (title, description, canonical URL, Open Graph type) and the sitemap.
- Bookmark save/reload/remove; global search across content families, including campaigns, lessons and collections, and engagements found by war, campaign and commander.
- Theme persistence and the keyboard skip link.
- Fifteen representative pages at 375, 768 and 1440 pixels with no document-level horizontal overflow.
- Nineteen principal screens in the dark theme, including the library, collections, the list view, a campaign route map, Napoleon's career and the Austerlitz study, with axe-core serious/critical violations asserted absent; six light-theme screens with the same threshold. On the home page, the audit first scrolls through so that scroll-revealed sections are visible (axe skips transparent text).
- Scroll reveals: content in view is never hidden, below-the-fold sections appear when reached, jumping to the end leaves no section hidden, and reduced motion shows every section unmoved.
- Thirteen main sections checked for successful HTTP responses and uncaught browser errors. The check waits for each page's network to settle before moving on, because WebKit reports link prefetches cancelled by the next navigation as errors.

## Execution artifacts

HTML reports are in `playwright-report/`; JSON results and failure screenshots are in `test-results/`. Traces are captured on the first retry (CI retries once; local runs have no automatic retry). Reports are ignored by Git. Representative screenshots are retained in `docs/screenshots/`.

## Defect policy

Failures are investigated and fixed, not skipped or weakened. Initial QA found a 200 status for streamed not-found pages, inaccessible short-window theme controls, insufficient small-label contrast, a logo name mismatch and focusable atlas markers nested under an image role. Fixes targeted the implementation: blocking route resolution, scrollable sidebar, higher contrast, natural accessible logo text and a group role for the interactive SVG. The map-role test changed to match the corrected accessible semantics, while retaining the map visibility assertion.

## Limits

Browser accessibility scans do not establish full WCAG conformance. Screen-reader review, touch hardware, high zoom, long translated strings and production performance profiling remain manual/backlog work. Source scholarship cannot be proved by software tests. The data checks establish structure and relationships, not the truth of every historical interpretation.

Actual results, commands and environment restrictions are recorded separately in `VERIFICATION.md`.

Cross-browser testing also identified input accepted before React hydration in WebKit. Catalog controls now remain disabled until their handlers are ready. WebKit's default tab behavior skipped the anchor-based skip link; an explicit zero tab index makes that critical control reachable without changing the natural order. The light-theme regression check caught a dark-on-dark primary button; its text contrast was corrected without excluding any axe rules.
