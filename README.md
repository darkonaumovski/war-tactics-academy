# War Tactics Academy

**The Art of Command — Learn from History. Think Like a General.**

A working historical learning application built with Next.js, React, TypeScript, Prisma and SQLite. No login, paid service, remote database or API key is required. It builds to a fully static site, and a GitHub Actions workflow publishes it to GitHub Pages at `https://darkonaumovski.github.io/war-tactics-academy/` once Pages is enabled for the repository.

## Implemented

- Editorial dark interface, optional persistent light theme, desktop sidebar and mobile navigation.
- 29 engagement records spanning seven era groupings, classified as battles, sieges, operations or campaigns, with approximate geographic locations. Operation Overlord (Normandy) is the first operation record.
- 44 commander profiles, each with a command role (ruler-commander, field, naval, staff or coalition and theater commander), ranks and titles, principal commands, a dated chronology, a notable decision, defeats and reverses, qualitative comparison, linked engagements and further reading. The catalog can be filtered by command role.
- War pages for all 23 wars with principal participants, geographic scope, a short chronology of key developments, key commanders and reading drawn from linked studies and profiles.
- Eight referenced studies: Marathon, Cannae, Alesia, Hastings, Austerlitz, Waterloo, Midway and Stalingrad. Each has 14 analysis sections and four replay phases. 110 of the 112 sections show which listed sources they draw on, with book and chapter locators for classical texts.
- Fifteen command perspectives across seven battles (Cannae, Alesia, Hastings, Austerlitz, Waterloo, Midway and Stalingrad). Each covers objective, available information, uncertainty, constraints, forces, terrain, logistics, decisions and retrospective interpretation, clearly described as reconstructed reasoning rather than quotations.
- Searchable battle and commander catalogs; combined era, region and engagement-type filters; global search across battles, commanders, wars, campaigns and learning.
- An offline-capable world atlas using bundled Natural Earth geography. No tile server is required. Battle replay supports pan, zoom, selection, playback, event popups, legends and a full text timeline.
- Six decision exercises (Waterloo, Cannae, Midway, Austerlitz, Alesia and Hastings) with historical feedback, explicit counterfactual limits and saved completion.
- Four learning paths with 21 lessons: Foundations of Military History, Classical Warfare, Napoleonic Warfare, and Industrial and World Wars. Each lesson has objectives, historical cases, a concept diagram, a quiz and a persistent best score. Classical and Industrial lessons add lesson-specific readings and seminar prompts.
- Browser-local bookmarks, recently visited records, lesson results, decision choices and theme preferences.
- Curated media library with nine verified records: two official National Archives (UK) YouTube videos, loaded only on request through privacy-enhanced embeds; two public-domain portraits (Grant and Eisenhower), also shown on their commander profiles; two historic maps; and three primary documents. Every record stores publisher, license, attribution and verification date. The source reading list remains alongside it.
- Normalized relational database schema, versioned migration, transactional idempotent seed, validation and automated tests.

## Quick start

Prerequisites: Node.js **22.12 or later** (tested with Node 24.20.0), npm and a supported desktop operating system. SQLite is embedded; no separate server is needed. Internet access is needed for the initial package/browser installation and external reading links, but not for atlas rendering.

```sh
git clone https://github.com/darkonaumovski/war-tactics-academy.git
cd war-tactics-academy
npm ci
npm run db:setup
npm run dev
```

Open **http://127.0.0.1:3000**. In PowerShell environments that block npm's `.ps1` shim, use `npm.cmd` instead of `npm`.

The default database is `prisma/academy.db`. Optional configuration:

```env
DATABASE_URL="file:./prisma/academy.db"
```

Copy `.env.example` to `.env` only if customization is needed. The CLI resolves relative SQLite paths against the project root to avoid Windows/schema-directory ambiguity. Run scripts from the project root. Generated clients, databases and environment files are ignored by Git.

`npm run db:setup` generates the Prisma client, applies checked-in migrations and seeds the catalog. For existing installations:

```sh
npm run db:generate
npm run db:migrate
npm run db:seed
```

After pulling changes that include new migrations, run `npm run db:migrate` and `npm run db:seed` again (or `npm run db:setup`). The seed uses upserts inside a transaction. Repeating it updates matching records without duplicating them. It does not remove obsolete records after editorial deletions; removal requires an explicit migration/editorial cleanup. Browser learning progress is independent of the catalog database.

## Production build and hosting

```sh
npm run build
npm start
```

The app is a Next.js static export. `npm run build` reads the seeded SQLite catalog once and prerenders every page (171 at present) into `out/`; run it after database setup. `npm start` serves `out/` on http://127.0.0.1:3000 with `scripts/serve-static.mjs`, which mimics GitHub Pages: directory paths resolve to `index.html`, paths without a trailing slash redirect, and unknown paths return `404.html` with a 404 status. No database or Node server is needed at runtime.

### GitHub Pages

`.github/workflows/deploy.yml` runs on every push to `main`: it installs dependencies, sets up and seeds the database, runs lint, type checking and unit tests, builds with `BASE_PATH=/<repository-name>/`, and publishes `out/` to GitHub Pages. One-time setup: repository Settings → Pages → Source: "GitHub Actions". On a free GitHub plan, Pages requires a public repository.

To preview the project-pages layout locally:

```sh
BASE_PATH=/war-tactics-academy/ npm run build
BASE_PATH=/war-tactics-academy/ npm start
```

Then open http://127.0.0.1:3000/war-tactics-academy/. In Git Bash on Windows, prefix both commands with `MSYS_NO_PATHCONV=1` so the path is not rewritten.

Static hosting constraints: URLs end with a trailing slash; search results and battle filters from the query string (`?q=`, `?era=`) are applied in the browser; the video tab is its own page (`/library/videos/`); portraits load directly from the holding archive because there is no image optimizer. Changes to the catalog reach the site only through a new build.

## Development and verification

```sh
npm run lint
npm run typecheck
npm test
npm run test:e2e:chromium
npm run test:e2e
npm run test:report
```

Playwright uses Chromium, Firefox and WebKit projects. Install browser binaries when absent:

```sh
npx playwright install chromium firefox webkit
```

Tests automatically build the static export and serve it on port 3000 if needed, so they exercise the same files that are deployed. `PLAYWRIGHT_BASE_URL` targets an already-running server and disables automatic startup. A local running server is reused outside CI. HTML reports are written to `playwright-report/`, JSON results to `test-results/results.json`, screenshots on failures, and traces on the first retry. CI retries once; local runs do not hide failures with automatic retries.

See [verification results](docs/VERIFICATION.md) for actual execution results and limits, and [test strategy](docs/TEST_STRATEGY.md) for coverage.

```sh
node scripts/capture-preview.mjs
```

With the local server running, this captures the desktop homepage, mobile homepage and Waterloo study into `docs/screenshots/`.

## Project structure

```text
app/                  Root layout, one file-based route per page, sitemap, error and 404 pages, styles
components/views/     Page views, one module per section (battles, commanders, wars, academy…)
components/           Reusable UI, catalogs, maps, quizzes, search, media and progress
data/                 Engagements, commanders, research, learning and scenarios
lib/                  Domain types, Prisma client, repository, validation, persistence
prisma/               Relational schema, migration and transactional seed
tests/unit/           Logic, persistence, data integrity and quiz component tests
tests/e2e/            Playwright workflows, accessibility and responsive tests
scripts/              Preview capture and focused browser diagnostics
docs/                 Architecture, schema, source audits, roadmap and results
```

File-based App Router routes implement `/`, `/battles`, `/battles/[slug]`, `/commanders`, `/commanders/[slug]`, `/commanders/compare`, `/wars`, `/wars/[slug]`, `/campaigns/[slug]`, `/atlas`, `/academy`, `/academy/[courseSlug]`, `/academy/[courseSlug]/[lessonSlug]`, `/simulator`, `/simulator/[scenarioSlug]`, `/library`, `/library/videos`, `/about`, `/search` and `/saved`, plus `/sitemap.xml`. Each dynamic route lists its records in `generateStaticParams` with `dynamicParams = false`, so unknown paths and slugs render the custom not-found page. Every page has a title, description, canonical URL and Open Graph and Twitter metadata; `SITE_URL` sets the absolute origin used for them and for the sitemap.

## Historical methodology

Historical fact, scholarly interpretation, uncertainty and counterfactual analysis are explicitly distinguished. Detailed studies cite institutional histories and primary texts, with caveats about retrospective testimony and conflicting evidence. The eight studies are concise editorial syntheses, not full scholarly monographs. Other records are clearly labeled catalog introductions. Study sections name the listed sources they draw on. These references were assigned only after each institutional page had been read; sources that could not be opened are not attached to individual sections. They are section-level references, not footnotes for every sentence. Commander chronologies and war overviews summarize well-established events; their further reading is not a citation for each entry.

No casualty totals, private thoughts, invented quotations, precise intelligence logs or commander performance ratings are fabricated. Geographic markers indicate approximate places. Replay geometry is an abstract teaching schematic, not verified troop coordinates or surveyed movements. Force blocks do not represent equal unit sizes. Political and civilian consequences remain part of the historical context.

Read [source audit](docs/SOURCE_AUDIT.md) and [commander sourcing notes](docs/COMMANDER_SOURCES.md). Some verification used indexed source text; the audit identifies retrieval limits. Specialist review and fuller contrasting bibliographies remain important next steps.

## Media and licensing

The interface's map art, monograms and diagrams are original SVG graphics. Monograms are graphic identifiers, not likenesses; only commanders with an item-level public-domain portrait record show a photograph. Natural Earth world geography is public domain, distributed through `world-atlas`; [Natural Earth terms](https://www.naturalearthdata.com/about/terms-of-use/) apply. Typography uses four SIL Open Font License families: Cormorant Garamond for headings, Source Serif 4 for reading text, Inter for the interface and IBM Plex Mono for labels and coordinates. `next/font` downloads them at build time and serves them with the site, so visitors' browsers never contact Google; only the Latin files (about 84 KB) are preloaded, and other scripts load on demand.

External readings remain with their publishers. No publisher artwork or full article has been copied. Curated media lives in `data/media.json`, is validated by `lib/media.ts` and is also seeded into the `MediaResource` table with its source, publisher, license and attribution. Video IDs were checked against the publisher's own page and YouTube oEmbed; nothing is autoplayed or rehosted. Portraits are loaded from the holding archive through the Next.js image optimizer (only that archive path is allowed) and fall back to a text notice with attribution if the image cannot load. Historic maps and documents are linked, not reproduced. See [media provenance](docs/MEDIA_RESEARCH_UPDATE.md).

## Known limitations

- The four learning paths are introductory editorial courses (one question per lesson), not reviewed university curricula.
- The eight battle analyses and 44 commander profiles need deeper scholarly review, fuller biographies and sentence-level citations before being treated as an academic reference work. Study sections are still brief.
- War pages give orientation, not comprehensive operational histories, and have no dedicated bibliography. Campaign pages remain indexes. Some commander profiles have no dedicated engagement study yet.
- Replay diagrams explain abstract relationships; they do not simulate combat or reconstruct exact formations. Atlas locations and Natural Earth coastlines are approximate modern geographic context.
- The media library is a small starting collection (nine records). Most engagements and commanders have no video, portrait or map yet; the two videos cover only D-Day. Embeds and archive images depend on third-party availability.
- Progress belongs to one browser and is lost if its local storage is cleared. Storage denial is handled without crashing; save actions report failures.
- The site is static: the database is a build-time content store, and updates require a rebuild. SQLite and the JSON read projections favor a simple edition. A historian-facing editor, accounts, synchronization, claim-level citation workflow and larger-scale database queries are future work.
- Automated accessibility tests supplement, but do not replace, manual screen-reader testing. No Lighthouse score or universal accessibility certification is claimed.

See [prioritized roadmap](docs/PRODUCT_ROADMAP.md).
