# Architecture

## Runtime and boundaries

Next.js App Router prerenders the whole application at build time as a static export (`output: "export"`, `trailingSlash: true`, an optional `basePath` from `BASE_PATH`). TypeScript is strict. SQLite persistence is managed by Prisma 7.10.1 with the better-sqlite3 adapter. React 19.3.1 and Next.js 16.4.3 are locked in the package lock; the Prisma 8 prerelease was deliberately not adopted.

The route dispatcher in `app/[[...route]]/page.tsx` lists every page in `generateStaticParams` and sets `dynamicParams = false`, so unlisted paths are served the static 404 page. It still checks slugs and calls `notFound()` defensively. The root layout provides a persistent shell. Server-rendered page views receive domain data from `lib/content.ts`; catalogs, maps, quizzes, theme and progress components hydrate as interactive client boundaries. All text uses React escaping; there is no HTML injection or dynamic evaluation of historical content.

`lib/content.ts` reads the seeded database during the build only; the deployed site has no server or database. React `cache` deduplicates repeated reads within a render, including metadata generation. The first edition reads the catalog in bulk; query-level pagination and selective loading are appropriate when the corpus grows.

Curated media is the exception to database reads: `lib/media.ts` validates `data/media.json` with Zod at module load, and the library and profile views import it directly. The same records are seeded into `MediaResource`/`HistoricalSource` so the relational source graph stays complete. Course order comes from the `LearningCourse.ordinal` column.

The schema stores explicit relational links plus validated JSON editorial/read projections. Server views consume those projections for simple type-safe rendering. The seed writes both forms in one transaction. Editing a projection directly without its relationship rows is unsupported; editorial source files and the seed are the update path.

## Design decisions

- **Plain CSS and reusable components:** bespoke editorial styling avoids unnecessary component/theme dependencies. CSS variables, breakpoints and native controls provide consistent dark/light and responsive behavior. Tailwind, shadcn and a motion library are not mandatory for this design.
- **SVG rather than network tiles:** a bundled Natural Earth world atlas keeps the core experience available offline and eliminates API keys, external tile failures and tracking. Approximate atlas locations are distinct from conceptual battle replay geometry.
- **System fonts and original SVGs:** no remote font service or unlicensed artwork. Content pages remain usable when external publishers are unreachable.
- **Opt-in external media:** YouTube players use `youtube-nocookie.com` and are created only after the reader presses a load button. Portrait images are served through the Next.js image optimizer, restricted by `images.remotePatterns` to one archive path, and replaced by an attributed text fallback on error.
- **Browser-local progress:** `lib/persistence.ts` is the replaceable persistence boundary. Versioned data includes bookmarks, recent visits, scores, choices and theme. Invalid JSON, incompatible versions, blocked storage and unsafe stored link targets are handled defensively.
- **No authentication or write API:** the local MVP does not need public mutation endpoints. Content updates occur through versioned files and a transactional seed. Account synchronization should introduce authorization and server validation as a separate phase.

## Navigation and failures

The layout is persistent across navigation. The server waits for route resolution before returning a page, allowing missing records to return a genuine HTTP 404. A root loading boundary was removed after browser tests showed it began streaming a 200 response before invalid-slug resolution. Main navigation instead provides inline pending feedback with `useLinkStatus`. Catalog inputs remain disabled until hydration attaches their handlers, avoiding lost early input on slower browsers. Empty catalogs, unavailable media, storage failures and runtime errors each have contextual messages.

Metadata is generated for principal records and sections. Reading bookmarks do not affect server content. Daily challenge rotation follows Europe/Warsaw calendar days.

## Deployment

The site is published to GitHub Pages by `.github/workflows/deploy.yml`, which builds with `BASE_PATH=/<repository-name>/` and uploads `out/`. Query-string state cannot be rendered on a static host, so the search page and battle catalog render their default state at build time and apply `?q=`, `?type=` and `?era=` in the browser (`useSearchParams` inside a `Suspense` boundary whose fallback is the prerendered default). The video tab is a separate page, `/library/videos/`. Search forms use `next/form`, which applies the base path. `scripts/serve-static.mjs` reproduces Pages behavior locally and for Playwright.

If a server is needed later (accounts, writes), the compatible shape is a Node process with a persistent database and backups behind an HTTPS proxy. Horizontal scale would require an appropriate database strategy. A PostgreSQL migration changes the provider, driver adapter, connection configuration and migration history; the logical entity graph can remain.

## Performance and remaining work

The app requires no tile requests or downloaded fonts and does not autoplay animations. Static export output is about 21 MB, mostly prerendered pages and route payloads. Replay playback is explicitly started and cleaned up on unmount. Reduced-motion preferences disable CSS transitions. Original vector artwork scales without raster downloads. The initial full catalog and world geography are small enough for the MVP but should be profiled as they grow. Lazy loading heavier atlas assets, route-specific database projections and a production Lighthouse run are future performance work; no unmeasured score is claimed.
