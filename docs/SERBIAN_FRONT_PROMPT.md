# Prompt: add the Serbian Front of the First World War

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (27 October 2026):** Phases 0, 1 and 2 are done and pushed: the 14 core engagements (S1–S4) and 16 commander profiles (C1–C4). The four optional engagements were declined. Resume at Phase 3.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Every engagement in the app has a full, source-backed study. The First World War collection has no Balkan engagements yet, and Serbia is not even listed among the war's participants in `data/war-details.ts`.

Your job is to add **the whole Serbian Front, 1914–1918**: every major Serbian battle and maneuver, from the Austro-Hungarian invasions of 1914 through the 1915 collapse and the retreat through Albania to the Salonika (Macedonian) front and the liberation of Serbia in 1918. You will also add profiles for **the Serbian vojvode (field marshals) and generals, and the German and Austro-Hungarian commanders** who led in those campaigns.

The scope lists below are a **research plan, not a source**. Dates, unit assignments and who-commanded-what were written from memory and must each be checked against a source you read. Correct or drop anything a source does not support, and tell me what changed.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source in `data/research/*.json` and `data/commanders.json` must be a page you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check. Never guess a URL. If a claim cannot be verified, rewrite it or leave the section unreferenced; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty figures, no invented quotations, no guessed troop coordinates and no numerical commander ratings. Use `fact`, `interpretation` and `uncertainty` honestly. Perspectives must separate documented actions from reconstructed reasoning.
4. **Serbian-, German- and Hungarian-language sources are welcome** when they are institutional or scholarly (for example the Military Museum in Belgrade, the Archives of Serbia, the Austrian State Archives, the Heeresgeschichtliches Museum). Paraphrase in English, note the language in the audit, and never present a translation as a quotation.
5. **Foreground the human cost as fact, not spectacle**, where it shaped the campaign: violence against civilians in Mačva and around Šabac in August 1914, the typhus epidemic of 1914–1915, the retreat through Albania and Montenegro in winter 1915–1916, the deaths on Vido and the evacuation to Corfu, and the occupation of Serbia from 1915 to 1918.
6. **Stay even-handed.** These events sit inside competing Serbian, Austrian, Hungarian, German, Bulgarian, Albanian, Greek and Macedonian national narratives. Put contested readings in _Historiographical debates_, not in the narrative. Name places as the sources do and add the present-day country, for example "Bitola (Monastir), North Macedonia" or "Kajmakčalan, on the Greece–North Macedonia border".
7. **Spelling.** Use Serbian Latin with diacritics in names and text (Mišić, Stepanović, Kolubara, Mačkov Kamen) and plain ASCII in slugs (`zivojin-misic`, `mackov-kamen`).
8. **Work in batches of three to five items.** Run the full checks after each batch, show me the diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
9. Match the existing code style, naming and comment density. Don't refactor unrelated code.

## Phase 0: structure (one commit, before any study)

Read `lib/types.ts`, `lib/validation.ts`, `lib/content.ts`, `data/catalog.ts`, `data/battles/*.ts`, `data/research.ts`, `data/war-details.ts`, `data/commanders.json`, `docs/DATA_MODEL.md`, `docs/BATTLE_EXPANSION_PROMPT.md` and `tests/unit/*.test.ts`. Note the current engagement, study and commander counts; other batches may have landed since this prompt was written.

- **War.** Keep `warId: "ww1"` for every Serbian Front engagement unless you find a strong reason not to; ask me before adding a new war. Fix the `ww1` entry in `data/war-details.ts`: add Serbia and Montenegro to the participants, add the Balkans and Macedonia to the geography, and add dated chronology items for the Serbian Front (Austria-Hungary's declaration of war on Serbia, Cer, Kolubara, the 1915 invasion, the retreat to Corfu, Dobro Pole, Bulgaria's armistice, the liberation of Belgrade). Check each date against a read source.
- **Campaigns.** Campaigns come from the 12th field of each catalog row, so spelling must be identical across rows. Approved: _Serbian campaign of 1914_, _Serbian campaign of 1915_, _Occupation of Serbia_ and _Macedonian front_.
- **Files.** Put the rows in a new `data/battles/serbian-front.ts` and the studies in `data/research/serbian-front.json`, registered the same way as the existing collections, unless the existing layout suggests appending to `ww1.ts` and `ww1.json` is cleaner. Keep the exported shapes, the `lib/content.ts` contract and `prisma/seed.ts` working.
- **Slug check.** Make sure no proposed slug collides with an existing slug or one planned in `docs/BATTLE_EXPANSION_BRIEF.md`.
- Do not add engagements without studies.

Show me the file layout, campaign names and final engagement list before writing data.

## Phase 1: engagements and studies

Each engagement needs:

1. **A catalog row with every field:** slug, name, signed year, human-readable date, `eraId: "world-wars"`, kind (`Battle`, `Siege`, `Operation` or `Campaign`), region, location with the present-day country, approximate `lat`/`lon` of the general area taken from a source you read (or the nearest town's coordinates, noted in the audit), `warId`, campaign name, factions as `A|B`, summary, outcome and topic tag.
2. **A study** matching the existing ones: all 14 sections with the exact titles and order used elsewhere, at least 12 sections with `refs`, at least two sources (preferably three or four), at least four phases, and two or more perspectives with every field filled. At least one perspective must be Serbian and one Austro-Hungarian, German or Bulgarian, as the engagement requires.
3. **Commander links** in `battleSlugs`, only where a read source confirms that person commanded there.

Candidate sources to try (check each one exists and says what you cite): _1914-1918-online_ (International Encyclopedia of the First World War) articles on Serbia, the Balkan and Salonica fronts and individual commanders; Imperial War Museums; the National Army Museum; CWGC pages on the Salonika memorials; the French Ministry of the Armed Forces' _Chemins de mémoire_ pages on the Armée d'Orient; Britannica; Europeana 1914–1918; the Military Museum in Belgrade; the Austrian State Archives and Heeresgeschichtliches Museum; and primary texts available in full, such as R. A. Reiss's 1916 report on the first invasion of Serbia, used only for what it documents and labelled as a contemporary investigative report.

### Core engagements (approved 27 October 2026; dates still to verify per batch)

| Batch | Slug                        | Engagement                                             | Date                | Notes                                                                                                                                                                                                   |
| ----- | --------------------------- | ------------------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| S1    | `cer`                       | Battle of Cer                                          | Aug 1914            | First Allied victory of the war. Stepanović's Second Army against Potiorek's Fifth Army (Frank). Civilian killings in Šabac and Mačva. Sources give 16–20 or 17–19 August.                              |
| S1    | `syrmia-1914`               | Serbian offensive into Syrmia                          | Sep 1914            | The First Army and part of the Second cross the Sava at the Allies' urging.                                                                                                                             |
| S1    | `drina-1914`                | Battle of the Drina                                    | Sep–Oct 1914        | Second Austro-Hungarian invasion; Mačkov Kamen (14–22 September) and the move to trench warfare.                                                                                                        |
| S1    | `romanija-1914`             | Serbian and Montenegrin offensive toward Sarajevo      | Sep–Oct 1914        | Užice Army with the Montenegrin army; Pale taken; withdrawal after Glasinac.                                                                                                                            |
| S2    | `kolubara`                  | Battle of the Kolubara                                 | Nov–Dec 1914        | Offensive from 6 November, Belgrade evacuated, Mišić's First Army counter-offensive from 3 December, Belgrade retaken 15 December.                                                                      |
| S2    | `belgrade-1915`             | Defence of Belgrade                                    | Oct 1915            | Against Kövess's Third Army and Gallwitz's Eleventh Army; Živković's defence; Allied naval guns.                                                                                                        |
| S2    | `invasion-of-serbia-1915`   | Central Powers' invasion of Serbia                     | Oct–Nov 1915        | Mackensen's offensive from 6 October, Bulgaria from 12 or 14 October, Skopje lost on 22 October, the withdrawal to Kosovo and the retreat order of 25 November. Absorbs the earlier `kosovo-1915` idea. |
| S2    | `serbian-retreat-1915`      | Retreat through Montenegro and Albania                 | Nov 1915–early 1916 | Army, government, King Peter, civilians and prisoners crossing the mountains to the Adriatic; the evacuation to Corfu and Bizerte; Vido. Kind `Operation`.                                              |
| S2    | `mojkovac`                  | Battle of Mojkovac                                     | 6–7 Jan 1916        | Recommended optional: Vukotić's Montenegrin rearguard kept the Serbian retreat from being cut off. Ask before writing.                                                                                  |
| S3    | `kajmakcalan`               | Kajmakčalan and the Bulgarian offensive of August 1916 | Aug–Sep 1916        | The Bulgarian attack of 17 August, Gorničevo and the summit battle.                                                                                                                                     |
| S3    | `monastir-1916`             | Monastir offensive and the Crna bend                   | Oct–Nov 1916        | Franco-Serbian-Russian offensive under Sarrail; Bitola taken in November.                                                                                                                               |
| S3    | `toplica-uprising`          | Toplica Uprising                                       | Feb–Mar 1917        | Campaign _Occupation of Serbia_. Uprising in the Bulgarian and Austro-Hungarian zones and its violent suppression (Protogerov). Human cost as fact, without figures.                                    |
| S4    | `dobro-pole`                | Breakthrough at Dobro Pole                             | 15–18 Sep 1918      | Serbian Second Army with two French divisions; Franchet d'Espèrey; Mišić as chief of staff; leads to Bulgaria's armistice (29 or 30 September).                                                         |
| S4    | `liberation-of-serbia-1918` | Liberation of Serbia                                   | Sep–Nov 1918        | Veles and Štip 26 September, Niš 12 October, all of pre-war Serbia by 1 November.                                                                                                                       |

### Optional engagements (declined on 27 October 2026)

| Batch | Slug            | Engagement                                                 | Date         |
| ----- | --------------- | ---------------------------------------------------------- | ------------ |
| S5    | `krivolak-1915` | Anglo-French advance up the Vardar (Krivolak, Kosturino)   | Oct–Dec 1915 |
| S5    | `lovcen-1916`   | Austro-Hungarian conquest of Montenegro and Mount Lovćen   | Jan 1916     |
| S5    | `doiran-1918`   | Battle of Doiran (British and Greek, alongside Dobro Pole) | Sep 1918     |
| S5    | `dobruja-1916`  | The Serbian volunteer division in Dobruja                  | 1916         |

## Phase 2: commander profiles

The user wants profiles for all vojvode and generals of Serbia, Germany and Austria-Hungary who led in the Serbian campaigns. Each profile needs the full `Commander` shape, `details` with an existing `category` (`Ruler-commander`, `Field commander`, `Coalition and theater commander`, `Staff planner`), at least four timeline items, `principalCommands`, a `notableDecision` and a `setback`, all from sources you read. Keep `battleSlugs` limited to engagements in the catalog and confirmed by a source.

Verify every rank, command and date below; drop anyone whose role in Serbia a source does not confirm, and tell me who else the sources name.

**Serbia.** Explain _vojvoda_ (Serbia's highest military rank) in each vojvoda's `titles`, with the year it was conferred as a source states it.

| Slug                     | Person                                                   | Role to verify                                                                            |
| ------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `radomir-putnik`         | Vojvoda Radomir Putnik                                   | Chief of the Supreme Command staff, 1914–1915; Cer, Drina, Kolubara, 1915                 |
| `stepa-stepanovic`       | Vojvoda Stepa Stepanović                                 | Second Army; Cer, Drina, Kolubara, 1915, Dobro Pole                                       |
| `zivojin-misic`          | Vojvoda Živojin Mišić                                    | First Army at Kolubara; First Army in 1916; chief of staff for Dobro Pole                 |
| `petar-bojovic`          | Vojvoda Petar Bojović                                    | First Army in 1914; chief of staff 1916–1918; First Army at Dobro Pole and the liberation |
| `crown-prince-alexander` | Crown Prince Alexander Karađorđević                      | Regent and nominal commander-in-chief                                                     |
| `pavle-jurisic-sturm`    | General Pavle Jurišić Šturm                              | Third Army, 1914–1915                                                                     |
| `mihailo-zivkovic`       | General Mihailo Živković                                 | Defence of Belgrade, 1915                                                                 |
| `milos-vasic`            | General Miloš Vasić                                      | Army command on the Macedonian front, 1916                                                |
| _ask_                    | King Peter I, Miloš Božanović, Ilija Gojković and others | Only if a source shows a command role in a catalog engagement                             |

**Austria-Hungary.**

| Slug                          | Person                                    | Role to verify                                                        |
| ----------------------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| `oskar-potiorek`              | Feldzeugmeister Oskar Potiorek            | Commander of the Balkan forces, 1914; dismissed after Kolubara        |
| `liborius-von-frank`          | General Liborius Ritter von Frank         | Fifth Army, 1914                                                      |
| `eduard-von-bohm-ermolli`     | General Eduard von Böhm-Ermolli           | Second Army, August 1914, before its transfer to Galicia              |
| `franz-conrad-von-hotzendorf` | Field Marshal Franz Conrad von Hötzendorf | Chief of the General Staff; the 1914 two-front decision               |
| `archduke-eugen`              | Archduke Eugen of Austria                 | Took over the Balkan command from Potiorek in December 1914           |
| `hermann-kovess`              | General Hermann Kövess von Kövessháza     | Third Army, 1915 (Belgrade); Montenegro 1916; Balkan army group, 1918 |
| `stjepan-sarkotic`            | General Stjepan Sarkotić                  | Led troops from Bosnia and Herzegovina into Serbia in 1915            |
| _optional_                    | Ignaz Trollmann, Karl von Pflanzer-Baltin | Montenegro and Albania; only with the optional engagements            |

**Germany.**

| Slug                    | Person                                | Role to verify                                                                         |
| ----------------------- | ------------------------------------- | -------------------------------------------------------------------------------------- |
| `august-von-mackensen`  | Field Marshal August von Mackensen    | Army group that invaded Serbia, 1915                                                   |
| `hans-von-seeckt`       | General Hans von Seeckt               | Mackensen's chief of staff and planner, 1915                                           |
| `max-von-gallwitz`      | General Max von Gallwitz              | Eleventh Army, 1915                                                                    |
| `erich-von-falkenhayn`  | General Erich von Falkenhayn          | Chief of the General Staff; the strategic decision to open the route to Constantinople |
| `otto-von-below`        | General Otto von Below                | Army group in Macedonia, 1916–1917                                                     |
| `friedrich-von-scholtz` | General Friedrich von Scholtz         | Army group in Macedonia, 1917–1918 (Dobro Pole)                                        |
| _verify_                | Arnold von Winckler, Kuno von Steuben | Eleventh Army in Macedonia; include only if confirmed                                  |

**Others (ask me before adding).** Bulgaria (Nikola Zhekov, Kliment Boyadzhiev, Georgi Todorov), the Entente (Maurice Sarrail, Louis Franchet d'Espèrey, George Milne) and Montenegro (Janko Vukotić) shaped these battles but are outside the stated scope. Propose which, if any, deserve profiles. Link existing commanders where a source confirms it.

Profile batches, one commit each after my approval: **C1** the four vojvode; **C2** the other Serbian generals; **C3** Austria-Hungary; **C4** Germany; **C5** any optional profiles I approve.

## Phase 3: learning content and presentation

- **Campaign pages.** Check the Serbian campaigns render in date order on their campaign pages and on each commander's page. Same-year ordering was fixed in Phase 0 (`Battle.ordinal`, derived from each row's date text); check that the Serbian rows' date strings sort correctly.
- **Collection.** If a collections module exists by then, add a _Serbian Front, 1914–1918_ collection with an introduction, the strategic arc in a few paragraphs and an ordered timeline. If not, propose one.
- **Atlas.** Check the new markers are readable around Belgrade, the Drina and Bitola at desktop and 375px widths.
- **Course.** Propose one course with four or five lessons, each with objectives, paragraphs, linked engagements and a quiz in the existing format. Suggested themes: interior lines and the counterstroke at Cer; trading ground for time at the Kolubara; a three-sided invasion and the decision to retreat (1915); rebuilding an army in exile (Corfu to Salonika); breaking a mountain front at Dobro Pole.
- **Simulator scenarios.** Each needs exactly one historical option, with its position varied. Candidates: Putnik in August 1914 judging where the main Austro-Hungarian blow will fall; Mišić in November 1914 asking to give ground before counter-attacking; the Serbian Supreme Command in November 1915 choosing between a last stand, a break-out toward Salonika and retreat through Albania; and the Allied command in 1918 choosing where to break the Macedonian front. Update the scenario count in `tests/unit/content-depth.test.ts`.

## Checks and bookkeeping for every batch

- Update the hard-coded counts: `tests/unit/data.test.ts` (studies, engagements, commanders), `README.md`, the About page (`components/views/about.tsx`), `docs/DATA_MODEL.md` and `docs/ARCHITECTURE.md` where they state counts. Add profile sources to `docs/COMMANDER_SOURCES.md`.
- Add a `docs/SOURCE_AUDIT.md` section for the batch listing every source read, how it was read, its language and its evidence limits. Run a link check on every new URL.
- Run `npm run lint`, `npm run typecheck`, `npm test`, the seed, `npm run build` and `npm run test:e2e:chromium`. Everything must pass before you ask me to commit.
- Spot-check two new study pages, one campaign page and one new commander page in the browser at desktop and 375px width.
- After each commit, add a row to the README release history in the same style as the existing rows; it goes into the next commit.

## Definition of done

- Every core engagement has a catalog row and a validated study with read sources and an audit entry; the optional ones are added or explicitly declined by me.
- The `ww1` war details include Serbia, Montenegro and a dated Serbian Front chronology.
- Every confirmed Serbian, Austro-Hungarian and German commander has a profile linked to the engagements a source confirms.
- Campaign and commander pages list the Serbian engagements in true date order.
- All checks pass, docs and counts are consistent, and each batch is committed separately with my approval.

Start with Phase 0. Show me the proposed file layout, campaign names, final engagement list and any corrections to this plan before writing data.
