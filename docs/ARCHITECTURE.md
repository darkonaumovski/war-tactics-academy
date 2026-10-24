# Architecture

## Runtime and boundaries

Next.js App Router renders the application on a local Node server. TypeScript is strict. SQLite persistence is managed by Prisma 7.10.1 with the better-sqlite3 adapter. React 19.3.1 and Next.js 16.4.3 are locked in the package lock; the Prisma 8 prerelease was deliberately not adopted.

The route dispatcher in `app/[[...route]]/page.tsx` resolves supported route families, checks slugs and calls `notFound()` for unknown paths. The root layout provides a persistent shell. Server-rendered page views receive domain data from `lib/content.ts`; catalogs, maps, quizzes, theme and progress components hydrate as interactive client boundaries. All text uses React escaping; there is no HTML injection or dynamic evaluation of historical content.

`lib/content.ts` reads the actual seeded database. React `cache` deduplicates repeated reads within a server render, including metadata generation. It is not an indefinite process cache. The first edition reads the catalog in bulk; query-level pagination and selective loading are appropriate when the corpus grows.

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

## Deployment boundary

No external publication occurred. The compatible initial deployment shape is a Node process with a persistent writable SQLite volume and backups, fronted by a configured HTTPS proxy. The checked-in commands bind to loopback for local use. Horizontal scale would require an appropriate database strategy. A PostgreSQL migration changes the provider, driver adapter, connection configuration and migration history; the logical entity graph can remain.

## Performance and remaining work

The app requires no tile requests or downloaded fonts and does not autoplay animations. Replay playback is explicitly started and cleaned up on unmount. Reduced-motion preferences disable CSS transitions. Original vector artwork scales without raster downloads. The initial full catalog and world geography are small enough for the MVP but should be profiled as they grow. Lazy loading heavier atlas assets, route-specific database projections and a production Lighthouse run are future performance work; no unmeasured score is claimed.
