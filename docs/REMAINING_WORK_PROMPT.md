# Prompt: finish the battle expansion and its follow-up work

Paste everything below the line into a new Claude Code session opened in this repository, or say “continue with the remaining work prompt, stage A” (or another stage).

---

You are continuing **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Two earlier prompts drive this work: [`BATTLE_EXPANSION_PROMPT.md`](BATTLE_EXPANSION_PROMPT.md) (five collections, about 110 engagements) and [`SERBIAN_FRONT_PROMPT.md`](SERBIAN_FRONT_PROMPT.md) (complete). This prompt lists what is left, in the order to do it. Where this prompt is silent, the battle expansion prompt and its brief still apply.

## Where things stand (30 October 2026, commit `b983ab2`)

| Area                    | Done                                                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engagements and studies | 127, each with a full study: Alexander (complete), Rome (complete), Napoleon (complete, 34 studies from Toulon to Waterloo, including the optional N7 batch), the First World War (complete, 30 studies including the 14 of the Serbian Front), the Second World War (complete, 23 studies), and the original catalog                    |
| Campaigns and wars      | 79 campaigns, 33 wars; every `napoleonic` and `ww1` chronology entry, and every `ww2` entry for the engagements studied, checked against sources                                                                                                                                                                                         |
| Commander profiles      | 106, including 16 Serbian Front commanders; Stage E added 46 in twelve batches (E1–E12): every profile proposed for the First and Second World Wars, Napoleon, Alexander and Rome, each linked to the engagements its sources confirm                                                                                                    |
| Learning                | 10 courses with 51 lessons; 15 decision exercises. Stage F added a five-lesson course and one exercise for each of Alexander (Hydaspes), Rome (Pharsalus), Napoleon (Auerstedt), the First World War (Jutland) and the Second World War (Leyte Gulf)                                                                                     |
| App                     | Readable atlas (marker groups, regions, `?battle=` links); six collection pages; catalog filters by war, campaign, commander and collection, kept in the URL, with sorting and a list view; schematic route maps on campaign and collection pages; career strips and timelines on commander pages; search by war, campaign and commander |
| Stages                  | **Stages A to F are done** (Stage F pushed through `360267b`; F2–F4 committed as `ef0673f`, `31047f9` and `12099e1`, and F5 is in the commit that carries this line). Next: **Stage G**, the final pass.                                                                                                                                 |

## Rules that override everything else

1. **Read `AGENTS.md` first** and the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page opened and read in the session. Never guess a URL. If a claim cannot be verified, rewrite it or leave the section unreferenced. Brief claims that no source supports are dropped and listed in the audit.
3. **Editorial rules** from `docs/SOURCE_AUDIT.md`: no casualty or strength figures, no invented quotations, no guessed coordinates (use the nearest town and say so), no numerical commander ratings. Use `fact`, `interpretation` and `uncertainty` honestly; perspectives separate documented actions from reconstruction. Foreground the human cost as fact where it shaped events (Poland 1939, Barbarossa, Singapore, Okinawa, Berlin).
4. **Batches of three to five items.** After each: full checks, diff summary, wait for approval before committing. Never push without explicit approval.
5. Match the existing code style, naming and comment density. Don't refactor unrelated code.

## Per-batch workflow (engagements)

1. Read the batch's brief entries in `docs/BATTLE_EXPANSION_BRIEF.md`; treat them as a plan, not a source.
2. Read sources. Britannica returns 403 to scripts: read it in the built-in browser and use only the article text, never its AI summaries or AI-only “topic” pages. 1914-1918-online shows a bot check that clears by itself after a few seconds in the browser; its PDF versions stay blocked. PDFs that WebFetch saves can be read by extracting text with `pdfjs-dist@4` in the scratchpad.
3. Write rows in `data/battles/<collection>.ts` and studies in `data/research/<collection>.json` with a scratchpad script (14 sections in the fixed order, at least 12 with `refs`, at least four phases, at least two complete perspectives).
4. Link existing commanders in `data/commanders.json` only where a read source confirms the role. Check the war's chronology in `data/war-details.ts` against read sources.
5. Update counts: `tests/unit/data.test.ts` (and its same-year ordering pairs when a batch has several engagements in one year), the README feature list and wording, `docs/DATA_MODEL.md`. Add a `docs/SOURCE_AUDIT.md` section and link-check every new URL.
6. Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run db:seed`, `npm run build`, `npm run test:e2e:chromium`. Spot-check two study pages and the campaign page at desktop and 375px.
7. After each commit, add its README release-history row; it goes into the next commit.

**Known pitfall:** the seed builds source ids as `slugify(url)`. A URL that differs from one already in the data only by a trailing slash collides and breaks the seed. Reuse the exact URL form already present.

## Stage A: finish Napoleon (done)

All four batches were written, committed and pushed on 27 October 2026 (`96a2f28`, `9a5e145`, `e9f9d26`, `e254f6b`); the table is kept for reference.

| Batch | Engagements                                             | Notes                                                                                   |
| ----- | ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| N4    | eckmuhl, aspern-essling, wagram, smolensk-1812          | New campaigns: War of the Fifth Coalition, Russian campaign                             |
| N5    | borodino, berezina, lutzen-1813, bautzen, dresden       | Link Kutuzov to Borodino if a source confirms it; human cost of the retreat from Moscow |
| N6    | leipzig, six-days-campaign, laon, arcis-sur-aube, ligny | Ligny with Quatre Bras as a phase; Wellington is not at Ligny                           |
| N7    | vendemiaire, maloyaroslavets, hanau, la-rothiere        | Optional; added at the user's request                                                   |

Check the remaining `napoleonic` chronology entries (1808, 1812, 1813, 1814, 1815) in these batches. Useful sources: Britannica's “Napoleonic Wars” section pages and battle articles; the Fondation Napoléon's _Revue du Souvenir Napoléonien_ articles, chronologies and _Dictionnaire Napoléon_ biographies.

## Stage B: make the app work at about 110 engagements (Phase 3, done)

Do this before the world wars, which add about 30 markers in Western Europe. Read `components/views/battles.tsx`, `wars.tsx`, `commanders.tsx`, `atlas.tsx`, `search.tsx` and `components/catalogs.tsx` first, then propose each item before building it.

1. **Atlas.** Group nearby markers or add zoom-to-region so dense areas (Western Europe, the Balkans, northern Italy) are readable, including at 375px. Today the ten Serbian Front markers overlap even at maximum zoom.
2. **Collection pages.** Six curated pages: Alexander, Rome, Napoleon, the First World War, the Second World War and the Serbian Front. Each with an introduction, the strategic arc and an ordered timeline linking the studies; `generateStaticParams`, metadata, sitemap and navigation. This also closes the last open item of the Serbian Front prompt.
3. **Battle catalog filters.** Add war, campaign and commander filters to the existing search, era, region and kind filters, all as URL parameters so filters are shareable under static export; add sorting by date and a compact list view.
4. **Campaign pages as routes.** Show each campaign's engagements in date order on a schematic map line (for example Alexander's march, Napoleon in Italy 1796–97, the Serbian Front 1914–1918). Geometry stays schematic.
5. **Commander career timelines.** A visual dated timeline of linked engagements on each commander page (Napoleon will have about 30).
6. **Search.** Confirm engagements can be found by name, war, campaign and commander; add tests.

Add or update unit and e2e tests for each item; keep the axe accessibility checks passing.

## Stage C: the First World War (4 batches, done)

All four batches were written and committed on 28 and 29 October 2026 (`f1f8c75`, `da5e621`, `866c057` and the commit that carries this line); the table is kept for reference.

| Batch | Engagements                                                 |
| ----- | ----------------------------------------------------------- |
| W1-1  | marne-1914, first-ypres, second-ypres, gallipoli            |
| W1-2  | jutland, somme, brusilov-offensive, caporetto               |
| W1-3  | passchendaele, cambrai-1917, operation-michael, amiens-1918 |
| W1-4  | megiddo-1918, meuse-argonne                                 |

Existing profiles to link where a source confirms it: Foch, Haig, Brusilov, Atatürk (Gallipoli), Rommel (Caporetto), Otto von Below (his Fourteenth Army broke through at Tolmein in 1917, so Caporetto), Falkenhayn and Gallwitz (the Somme, if confirmed). Check the remaining `ww1` chronology entries, which were not verified in the Serbian Front work.

## Stage D: the Second World War (5 batches, done)

All five batches were written and committed on 29 and 30 October 2026 (`024db95`, `26d64dd`, `15f740e`, `cf4b2b7` and the commit that carries this line); the table is kept for reference.

| Batch | Engagements                                                   |
| ----- | ------------------------------------------------------------- |
| W2-1  | poland-1939, france-1940, battle-of-britain, barbarossa       |
| W2-2  | moscow-1941, pearl-harbor, singapore-1942, coral-sea          |
| W2-3  | guadalcanal, battle-of-the-atlantic, imphal-kohima, bagration |
| W2-4  | market-garden, leyte-gulf, battle-of-the-bulge, iwo-jima      |
| W2-5  | okinawa, berlin-1945                                          |

Human cost as fact: Poland 1939, Barbarossa, Singapore (including the Sook Ching massacres), Okinawa and Berlin. Existing profiles to link: Zhukov, Rokossovsky, Eisenhower, Montgomery, Patton, Nimitz, Yamamoto, MacArthur, Rommel (France 1940).

## Stage E: commander profiles (Phase 2)

For each collection, propose a short list before writing, one batch at a time, each profile with the full `Commander` shape, at least four timeline items and one linked source (other sources in `docs/COMMANDER_SOURCES.md`). Leave out anyone without an institutional or scholarly source for their life dates and role.

- **Alexander and Rome:** Darius III, Porus, Pompey, Agrippa, Octavian/Augustus, Arminius, Boudica, Titus, Constantine I, Aetius, Attila.
- **Napoleon:** Davout, Ney, Murat, Masséna, Lannes, Archduke Charles, Blücher, Schwarzenberg, Bennigsen, Bagration, Barclay de Tolly.
- **First World War:** Joffre, Moltke the Younger, Hindenburg, Ludendorff, Jellicoe, Scheer, Pétain, Allenby, Pershing, Monash, Currie. (Mackensen, Falkenhayn, Gallwitz, Seeckt and Otto von Below already exist.)
- **Second World War:** Guderian, Manstein, Rundstedt, Model, Dowding, Slim, Yamashita, Halsey, Spruance, Kuribayashi, Konev, Chuikov, Dönitz.

## Stage F: learning content (Phase 4, done)

Done in five batches on 31 October 2026 (F1 `360267b`, F2 `ef0673f`, F3 `31047f9`, F4 `12099e1`, F5 in the commit that carries this line): Alexander, Rome, Napoleon, the First and Second World Wars each have a five-lesson course and one exercise (the Hydaspes, Pharsalus, Auerstedt, Jutland and Leyte Gulf). The original brief follows.

One course per remaining collection (Alexander, Rome, Napoleon, the First and Second World Wars) with three to five lessons in the extended format of `data/additional-courses.ts` (objectives, three paragraphs, linked studies, readings, diagram, one quiz, seminar prompt), plus simulator scenarios with exactly one historical option in a varied position. Candidates: Hydaspes, Pharsalus, Teutoburg, Jena–Auerstedt as Davout, Borodino (commit the Guard?), Marne 1914, Jutland as Jellicoe, Market Garden drop zones, Leyte Gulf as Halsey. The Serbian Front course and four scenarios already exist. Update the course list in `data/learning.ts` and the counts in `tests/unit/data.test.ts` and `tests/unit/content-depth.test.ts`.

## Stage G: final pass

- Bring `docs/VERIFICATION.md`, `docs/PRODUCT_ROADMAP.md`, `docs/TEST_STRATEGY.md`, `docs/ARCHITECTURE.md` and the About page up to date (several still describe the 29-engagement edition).
- Check that every collection, campaign and commander page works under static export and passes the full test suite in all three browsers (`npm run test:e2e`).

## Suggested order and pacing

| Step | Work                                                                       | Rough size |
| ---- | -------------------------------------------------------------------------- | ---------- |
| 1    | Stage A: N4–N7 (done)                                                      | done       |
| 2    | Stage B: atlas, collections, filters, route maps, timelines, search (done) | done       |
| 3    | Stage C: W1-1 to W1-4 (done)                                               | done       |
| 4    | Stage D: W2-1 to W2-5 (done)                                               | done       |
| 5    | Stage E: profiles E1–E12 (done)                                            | done       |
| 6    | Stage F: courses and scenarios (done)                                      | done       |
| 7    | Stage G: final pass                                                        | 1 session  |

A session here means roughly one batch within a Pro usage window; reading sources is the largest cost.

## Definition of done

- Every engagement in the brief's core list has a catalog row and a validated study with read sources and an audit entry; N7 is added or declined.
- Every existing commander who led one of the new engagements is linked to it; the Phase 2 profiles are added where sources allow.
- The six collection pages, the new filters, campaign route maps, commander timelines and a readable atlas work under static export.
- Each collection has a course and scenarios.
- All checks pass, counts and docs are consistent, and each batch is committed separately with approval.

Start with Stage E, the First World War or Second World War profiles, unless I say otherwise; propose the list of profiles and their sources before writing.
