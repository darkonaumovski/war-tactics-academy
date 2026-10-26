# Data model

The authoritative schema is `prisma/schema.prisma`; two checked-in SQL migrations create it (`initial`, then `course_ordinal`, which adds course ordering). `prisma/seed.ts` validates historical research, commander, course and media data before a single transaction populates it.

| Entity              | Responsibility and explicit relationships                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HistoricalEra       | Era grouping; has wars and commander profiles                                                                                                             |
| War                 | Political conflict context; belongs to an era; has campaigns                                                                                              |
| Campaign            | Operational index; belongs to a war; has engagements                                                                                                      |
| Battle              | Engagement name, category, signed historical year, region, approximate latitude/longitude, editorial projection; belongs to a campaign                    |
| Commander           | Profile, lifetime, role, context and assessment; belongs to an era                                                                                        |
| Faction             | Named participant group                                                                                                                                   |
| BattleParticipant   | Composite-key battle–faction join                                                                                                                         |
| CommanderAssignment | Composite-key battle–commander join with responsibility note                                                                                              |
| BattlePhase         | Ordered phase within one battle; unique battle/ordinal pair                                                                                               |
| MapEvent            | Phase-associated event; coordinate system explicitly `schematic`                                                                                          |
| HistoricalDecision  | Curated exercise linked to a battle                                                                                                                       |
| DecisionOption      | Ordered choice, feedback and historical-choice flag                                                                                                       |
| HistoricalSource    | Unique source URL, title and publisher                                                                                                                    |
| BattleSource        | Composite-key engagement–source join                                                                                                                      |
| CommanderSource     | Composite-key commander–source join                                                                                                                       |
| MediaResource       | Curated media (video, portrait, map, document) or linked reading, with kind, author/publisher, license/reuse description and attribution; links to source |
| LearningCourse      | Course title, level, description and curriculum ordinal                                                                                                   |
| Lesson              | Ordered lesson in a course with objectives/content projection                                                                                             |
| LessonSource        | Composite-key lesson–source join, covering lesson-specific readings and the studies of referenced battles                                                 |
| Quiz                | One quiz per lesson                                                                                                                                       |
| QuizQuestion        | Prompt, choice array, answer index and explanatory feedback                                                                                               |

## Editorial and normalized data

`data/catalog.ts` supplies 33 engagements, 33 war/context indexes, 29 campaign indexes and seven era groupings. Engagement rows are authored in per-collection modules under `data/battles/` (`alexander`, `rome`, `napoleon`, `ww1`, `ww2` and `other`), typed by `data/battles/row.ts`; `data/catalog.ts` combines them in chronological order. A campaign index exists once at least one engagement names it. `data/commanders.json` supplies 44 profiles, each with a `details` object (command role, titles, principal commands, chronology, notable decision, setback). `data/war-details.ts` supplies participants, geographic scope and a chronology for all 33 wars; `data/catalog.ts` merges them into each war record. `data/research.ts` combines the per-collection files in `data/research/` into thirty-three detailed analyses (one per engagement), 132 ordered phases and 65 perspectives across thirty-two engagements. Study sections may carry `refs`: indexes into the study's `sources` with an optional standard locator such as `6.102`. `data/learning.ts` contains the Foundations and Napoleonic courses and six scenarios, and combines them with the Classical Warfare and Industrial and World Wars courses from `data/additional-courses.ts`: four courses and 21 lessons in curriculum order. `data/media.json` holds nine curated media records, validated by `lib/media.ts`.

JSON fields retain authored prose, perspective objects and render-ready domain records. These are deliberate read projections, not substitutes for the relational links. All seed writes are transactional. Unique IDs and joins make repeated seeds idempotent. Campaigns no longer present in the editorial data are deleted after engagements have been updated. Other entities are not pruned automatically; destructive editorial changes need explicit migrations or cleanup.

Dates use signed integer years without year zero. Human-readable date/range strings retain BCE labels, ranges and uncertainty. Engagement `kind` distinguishes Battle, Siege, Operation and Campaign. Operation Overlord (Normandy) is classified as an operation within the North-west Europe campaign. Historical era boundaries are navigational groupings, not claims that global periodization is uniform. Commander profiles use one principal era for browsing even when a life spans several.

## Geographic integrity

Latitude and longitude belong to the engagement's approximate geographic context. Map events have no fabricated geodetic troop coordinates. Replay force blocks and arrows live in SVG display space; they do not imply force counts or surveyed deployments. Natural Earth geography supplies modern coastlines, not historical political borders.

## Browser progress

The versioned `wta-progress-v1` localStorage value contains bookmarks, at most six recent records, best lesson scores, selected scenario choices and theme. Reading destinations are constrained to local battle/commander paths. Corrupt or incompatible records reset safely. This abstraction can later be implemented against authenticated account storage.

## Expansion

Section references are stored in the editorial projection rather than as relational rows. Add sentence-level citations, source editions and page locators before expanding detailed analysis. Add explicit perspective/claim tables when editorial tooling requires querying them individually. Richer chronological dates need calendar and uncertainty fields. Future account tables must remain separate from the historical content graph.
