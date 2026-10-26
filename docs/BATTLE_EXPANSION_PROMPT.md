# Prompt: expand War Tactics Academy with five campaign collections

Paste everything below the line into a new Claude Code session opened in this repository.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. It currently has 29 engagements, each with a detailed study, and 44 commander profiles. Your job is to add five campaign collections, about 80 new engagements in all, as source-backed studies. You will also make the app usable at roughly four times its current size.

## Collections

1. **Alexander the Great's campaign** (334–323 BCE). It currently has only Gaugamela.
2. **The Roman Republic and Empire.** The most important battles; it currently has Cannae and Alesia.
3. **Every battle Napoleon commanded in person** (1793–1815). It currently has Austerlitz and Waterloo.
4. **The First World War.** It currently has Tannenberg and Verdun.
5. **The Second World War.** It currently has Midway, El Alamein, Stalingrad, Kursk and Normandy.

The editorial starting point is [`docs/BATTLE_EXPANSION_BRIEF.md`](BATTLE_EXPANSION_BRIEF.md). It covers each new engagement: proposed slug, kind, campaign, factions, commanders, topic tag, a strategic analysis and candidate sources. **The brief is unverified.** Treat it as a research plan, not as a source.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source in `data/research.json` and `data/commanders.json` must be a page you actually opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check. Never guess a URL. If a claim cannot be verified, leave the section unreferenced or rewrite the claim, and never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`.** That means no casualty figures, no invented quotations, no guessed troop coordinates and no numerical commander ratings. Ancient army sizes are reported only as an ancient author's claim, marked `uncertainty`. Use `fact`, `interpretation` and `uncertainty` honestly. Perspectives must separate documented actions from reconstructed reasoning.
4. **Foreground the human cost** where the brief flags it: Jerusalem 70, Jaffa, Barbarossa, Poland 1939, Singapore, Okinawa and Berlin. Do this as fact, not spectacle.
5. **Work in batches of four or five engagements.** Run the full checks after each batch, show me the diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
6. Match the existing code style, naming and comment density. Don't refactor unrelated code.

## Phase 0: structure (one commit, before any study)

Read `lib/types.ts`, `lib/validation.ts`, `data/catalog.ts`, `data/war-details.ts`, `data/commanders.json`, `docs/DATA_MODEL.md` and `tests/unit/*.test.ts`.

- **New wars**, added to `wars` in `data/catalog.ts` with a matching entry in `data/war-details.ts` (participants, geography, and a chronology of at least one dated item; the tests require one entry per war). Ancient-era wars: `macedonian-wars`, `roman-parthian`, `roman-civil-wars` (49–31 BCE), `roman-germanic`, `roman-britain`, `jewish-roman`, `tetrarchy-civil-wars`, `gothic-war` (376–382) and `hunnic-invasions`. Napoleonic era: `french-revolutionary` (1792–1802), which covers Toulon to Marengo. Reuse `alexander`, `punic`, `napoleonic`, `ww1` and `ww2`.
- **Campaign names.** Reuse existing ones where the brief says so: _Macedonian invasion of Persia_, _War of the Third Coalition_, _Waterloo campaign_, _Western Front in 1916_ and _North-west Europe campaign_. Campaigns are derived from the 12th field of each catalog row, so identical spelling matters.
- **Scaling the catalog.** The `rows` tuple array in `data/catalog.ts` will grow past 100 entries. Decide whether to keep it or split it into per-collection modules (for example `data/battles/alexander.ts`) re-exported from `catalog.ts`. Prefer the split if it keeps diffs reviewable. Do the same for `data/research.json` if per-collection files make review easier. Keep the exported shapes and `lib/content.ts` contract unchanged, and keep `prisma/seed.ts` working.
- Do not add engagements without studies. Every engagement in this app has a full study, and that convention stays.

## Phase 1: engagements and studies (batches)

For each engagement:

1. **Catalog row** with every field: slug, name, signed year (no year zero), human-readable date, `eraId` (`ancient` up to 500 CE, `napoleonic` for 1793–1815, `world-wars`), kind, region, location, approximate `lat`/`lon` of the engagement's general area, `warId`, campaign name, factions as `A|B`, summary, outcome and topic tag. Take coordinates from a source you read, such as a battlefield or institutional page. If none states them, give the nearest town's coordinates and say so in the audit.
2. **Study** in `data/research.json`, matching the existing studies:
   - All 14 sections, with these exact titles in this order: _Historical background_, _Political and strategic context_, _Campaign objectives_, _Geography and terrain_, _Opposing forces and command structures_, _Initial deployment_, _Chronological phases_, _Important command decisions_, _Decisive turning points_, _Outcome_, _Consequences_, _Historical lessons_, _Historiographical debates_, _Source references_.
   - At least 12 sections with `refs`, using standard locators for classical texts (for example Arrian `2.11`, Polybius `18.28`).
   - At least two sources, preferably three or four. For ancient battles, pair a primary text (Wikisource, LacusCurtius or Perseus translations) with a modern institutional or scholarly page (Livius.org, Encyclopaedia Iranica, museums). For Napoleon, use the Fondation Napoléon and national army or museum sources. For the world wars, use Imperial War Museums, the National Army Museum, the National WWII Museum, NHHC, the Australian War Memorial, the Canadian War Museum, CWGC, _1914-1918-online_, USHMM and similar.
   - Exactly four phases, or more where the battle needs it (for example Acre with Mount Tabor, Ligny with Quatre Bras, France 1940 with Dunkirk).
   - Two or more perspectives, each with every field: objective, known, uncertainty, constraints, decision, forces, terrain, logistics, outcome.
3. **Commander links.** Add the slug to `battleSlugs` of existing commanders. For example: Scipio Africanus → `zama`; Hannibal → `zama`; Julius Caesar → `pharsalus`; Napoleon → every Napoleonic engagement; Kutuzov → `borodino`; Wellington is not at Ligny; Foch, Haig, Brusilov and Atatürk → their WWI battles; Zhukov, Rokossovsky, Eisenhower, Montgomery, Patton, Nimitz, Yamamoto and MacArthur → their WWII battles; Rommel → `caporetto` and `france-1940`. Check each link against a source; don't link from the brief alone.

### Batch order

Each batch is one commit after my approval.

| Batch | Engagements                                                                 |
| ----- | --------------------------------------------------------------------------- |
| A1    | granicus, issus, tyre, gaza-332-bce                                         |
| A2    | persian-gate, jaxartes, sogdian-rock, hydaspes                              |
| R1    | zama, cynoscephalae, pydna, carrhae                                         |
| R2    | pharsalus, actium, teutoburg, watling-street                                |
| R3    | jerusalem-70, milvian-bridge, adrianople, catalaunian-plains                |
| N1    | toulon, montenotte, lodi, castiglione, arcole                               |
| N2    | rivoli, pyramids, acre, aboukir-1799, marengo                               |
| N3    | ulm, jena-auerstedt, eylau, friedland                                       |
| N4    | eckmuhl, aspern-essling, wagram, smolensk-1812                              |
| N5    | borodino, berezina, lutzen-1813, bautzen, dresden                           |
| N6    | leipzig, six-days-campaign, laon, arcis-sur-aube, ligny                     |
| N7    | _(optional, ask me first)_ vendemiaire, maloyaroslavets, hanau, la-rothiere |
| W1-1  | marne-1914, first-ypres, second-ypres, gallipoli                            |
| W1-2  | jutland, somme, brusilov-offensive, caporetto                               |
| W1-3  | passchendaele, cambrai-1917, operation-michael, amiens-1918                 |
| W1-4  | megiddo-1918, meuse-argonne                                                 |
| W2-1  | poland-1939, france-1940, battle-of-britain, barbarossa                     |
| W2-2  | moscow-1941, pearl-harbor, singapore-1942, coral-sea                        |
| W2-3  | guadalcanal, battle-of-the-atlantic, imphal-kohima, bagration               |
| W2-4  | market-garden, leyte-gulf, battle-of-the-bulge, iwo-jima                    |
| W2-5  | okinawa, berlin-1945                                                        |

## Phase 2: commander profiles

Add profiles marked _new_ in the brief only where they lead an engagement in the catalog, and only from sources you read. Each profile needs the full `Commander` shape, `details` with at least four timeline items, and an existing `category`. Priority order:

1. **Alexander and Rome:** Darius III, Porus, Pompey, Agrippa, Octavian/Augustus, Arminius, Boudica, Titus, Constantine I, Aetius, Attila.
2. **Napoleon's campaigns:** Davout, Ney, Murat, Masséna, Lannes, Archduke Charles, Blücher, Schwarzenberg, Bennigsen, Bagration, Barclay de Tolly.
3. **First World War:** Joffre, Moltke the Younger, Hindenburg, Ludendorff, Jellicoe, Scheer, Pétain, Allenby, Pershing, Monash, Currie.
4. **Second World War:** Guderian, Manstein, Rundstedt, Model, Dowding, Slim, Yamashita, Halsey, Spruance, Kuribayashi, Konev, Chuikov, Dönitz.

Propose a short list for each collection before writing, and ask me how many to add per batch.

## Phase 3: making the app work at about 110 engagements

Read the existing views first (`components/views/battles.tsx`, `wars.tsx`, `commanders.tsx`, `atlas.tsx`, `search.tsx`, and `components/catalogs.tsx`), then propose and build:

1. **Collections.** Add five curated collection pages (for example `/collections/alexander`, `/collections/rome`, `/collections/napoleon`, `/collections/ww1`, `/collections/ww2`). Each needs an introduction, the strategic arc in a few paragraphs, and an ordered timeline of its engagements linking to the studies. Define them in a small data module with `generateStaticParams` and page metadata, and add them to the sitemap and navigation.
2. **Battle catalog filters.** Filter by war, campaign, commander, kind and era. Use URL query parameters, as `?era=` already works, so filters are shareable and work under static export. Add sorting by date and a compact list view if the grid gets long.
3. **Campaign pages as routes.** Show engagements in date order on a small schematic map line, for example Alexander's march from the Granicus to the Hydaspes or Napoleon's 1796–97 Italian campaign. Keep the existing rule that map geometry is schematic, not surveyed.
4. **Commander career timeline.** List linked engagements in date order on each commander page. Napoleon alone will have about 30.
5. **Atlas.** Make dense regions (Western Europe, Belgium and northern France) readable with clustering or zoom-to-region. Test it at mobile width.
6. **Search** must find new engagements by name, war, campaign and commander.

## Phase 4: learning content (after the studies)

- **Courses.** Propose one course per collection with three to five lessons, each with objectives, paragraphs, linked engagements and a quiz in the existing format. Suggested lesson themes include "Alexander and the river crossing (Granicus, Issus, Hydaspes)", "From maniple to cohort (Cynoscephalae, Pydna, Pharsalus)", "The central position (Montenotte to Rivoli)", "The corps system (Ulm, Jena–Auerstedt)", "From attrition to all-arms battle (Somme, Cambrai, Amiens)" and "Deception and deep operations (Megiddo, Bagration)".
- **Simulator scenarios.** Each scenario needs exactly one historical option, with the historical answer's position varied. Candidates:
  - Hydaspes: how to cross a guarded river.
  - Pharsalus: where to place the reserve.
  - Teutoburg: whether to trust Arminius's report.
  - Jena–Auerstedt, as Davout facing the main Prussian army alone.
  - Borodino: commit the Guard or not.
  - Marne 1914: closing the gap.
  - Jutland, as Jellicoe deploying to port or starboard.
  - Market Garden: drop zones close to or far from the bridge.
  - Leyte Gulf, as Halsey: go north or guard San Bernardino Strait.

  Update the scenario count in `tests/unit/content-depth.test.ts`.

## Checks and bookkeeping for every batch

- Update the hard-coded counts: `tests/unit/data.test.ts` (studies, engagements, commanders), `README.md` (feature list, "twenty-nine studies" wording, limitations), the About page (`components/views/about.tsx`), `docs/DATA_MODEL.md` and `docs/ARCHITECTURE.md` where they state counts.
- Add a `docs/SOURCE_AUDIT.md` section for the batch listing every source read, how it was read and its evidence limits. Run a link check on every new URL.
- Add a row to the README release history after the commit, in the same style as the existing rows.
- Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` and `npm run test:e2e:chromium`. Everything must pass before you ask me to commit.
- Spot-check two new study pages and one campaign page in the browser at desktop and mobile width.

## Definition of done

- Every engagement in the brief's core list has a catalog row and a validated study with read sources and an audit entry.
- Every existing commander who led one of the new engagements is linked to it.
- The five collection pages, filters, campaign timelines and commander career timelines work under static export.
- All checks pass, docs and counts are consistent, and each batch is committed separately with my approval.

Start with Phase 0. Show me the proposed file layout and the new wars and campaigns list before writing data.
