# Data model

The authoritative schema is `prisma/schema.prisma`; the checked-in initial SQL migration creates the database. `prisma/seed.ts` validates historical research and commander data before a single transaction populates it.

| Entity | Responsibility and explicit relationships |
| --- | --- |
| HistoricalEra | Era grouping; has wars and commander profiles |
| War | Political conflict context; belongs to an era; has campaigns |
| Campaign | Operational index; belongs to a war; has engagements |
| Battle | Engagement name, category, signed historical year, region, approximate latitude/longitude, editorial projection; belongs to a campaign |
| Commander | Profile, lifetime, role, context and assessment; belongs to an era |
| Faction | Named participant group |
| BattleParticipant | Composite-key battle–faction join |
| CommanderAssignment | Composite-key battle–commander join with responsibility note |
| BattlePhase | Ordered phase within one battle; unique battle/ordinal pair |
| MapEvent | Phase-associated event; coordinate system explicitly `schematic` |
| HistoricalDecision | Curated exercise linked to a battle |
| DecisionOption | Ordered choice, feedback and historical-choice flag |
| HistoricalSource | Unique source URL, title and publisher |
| BattleSource | Composite-key engagement–source join |
| CommanderSource | Composite-key commander–source join |
| MediaResource | Reading resource with author, license/reuse description and attribution; links to source |
| LearningCourse | Course title, level and description |
| Lesson | Ordered lesson in a course with objectives/content projection |
| LessonSource | Composite-key lesson–source join |
| Quiz | One quiz per lesson |
| QuizQuestion | Prompt, choice array, answer index and explanatory feedback |

## Editorial and normalized data

`data/catalog.ts` supplies 29 engagements, 23 war/context indexes, 29 campaign indexes and seven era groupings. `data/commanders.json` supplies 44 profiles. `data/research.json` supplies eight detailed analyses, 32 ordered phases and seven perspectives. `data/learning.ts` contains two courses, ten lessons and three scenarios.

JSON fields retain authored prose, perspective objects and render-ready domain records. These are deliberate read projections, not substitutes for the relational links. All seed writes are transactional. Unique IDs and joins make repeated seeds idempotent. The seed does not automatically prune removed entries; destructive editorial changes need explicit migrations or cleanup.

Dates use signed integer years without year zero. Human-readable date/range strings retain BCE labels, ranges and uncertainty. Engagement `kind` distinguishes Battle, Siege and Campaign; a future Operation category can be added with its own records. Historical era boundaries are navigational groupings, not claims that global periodization is uniform. Commander profiles use one principal era for browsing even when a life spans several.

## Geographic integrity

Latitude and longitude belong to the engagement's approximate geographic context. Map events have no fabricated geodetic troop coordinates. Replay force blocks and arrows live in SVG display space; they do not imply force counts or surveyed deployments. Natural Earth geography supplies modern coastlines, not historical political borders.

## Browser progress

The versioned `wta-progress-v1` localStorage value contains bookmarks, at most six recent records, best lesson scores, selected scenario choices and theme. Reading destinations are constrained to local battle/commander paths. Corrupt or incompatible records reset safely. This abstraction can later be implemented against authenticated account storage.

## Expansion

Add claim-level citations, source editions and page locators before expanding detailed analysis. Add explicit perspective/claim tables when editorial tooling requires querying them individually. Richer chronological dates need calendar and uncertainty fields. Future account tables must remain separate from the historical content graph.
