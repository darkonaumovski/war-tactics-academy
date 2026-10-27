# Commander catalog: editorial method and source coverage

The initial catalog contains 44 figures named in the product brief. It includes rulers, field commanders, admirals and theater commanders, and makes those distinctions in each record's `role`. It does not assign numerical ability scores.

## Status of this edition

All records are marked `editorialStatus: "catalog-summary"`. They are concise educational introductions, not fully annotated scholarly biographies. The linked `source` is a verified reference or further-reading destination discovered during research on 23 October 2026. A working source link does **not** mean that every sentence in the profile is established by that one page.

The biographical overview and named engagements summarize the conventional historical record. The `approach`, `strength`, `limitation` and `legacy` fields are editorial synthesis; they should be introduced in the interface as historical interpretation, not direct quotations or numerical rankings. No private thoughts, direct quotations, casualty totals or exact unit positions were invented.

The app shows a visible editorial-status note on every profile; the chronology and command record are concise syntheses of well-established events, and the listed reading is further reading rather than a citation for each entry. For future publication as a scholarly reference, profiles need multiple sources, claim-level citations and specialist review, especially for disputed dates and accounts written long after the events.

## Types of sources

- Biographical and campaign articles: National Army Museum, National Park Service, Library of Congress, Australian War Memorial, National Museum of the United States Army, Naval History and Heritage Command, National Diet Library, United States Holocaust Memorial Museum, and the National WWII Museum.
- Signed scholarly reference articles: Encyclopaedia Iranica and the International Encyclopedia of the First World War.
- Research: Stephen Pow and Jingjing Liao's 2018 study of Subutai, including translated Yuan Shi biographies; the Command and General Staff College study of Belisarius; a Society for Classical Studies paper concerning Hannibal's representation in Polybius.
- Contextual museum, library and heritage material: the linked pages for Scipio, Genghis Khan, Mehmed II, Yi Sun-sin, Oda Nobunaga, Tokugawa Ieyasu, Shaka, Suvorov, Kutuzov and Zhukov. These verify a relevant reading destination and historical context, but are not complete evidence for every military assessment.
- Government and institutional accounts: the Giáp biography and some museum accounts express national commemorative perspectives. Their claims should be compared with independent scholarship.
- General educational synthesis: the Saladin chronology at World History Encyclopedia; the Shivaji history course from National Sanskrit University.

The Khalid link documents the University of Petra's description of the Yarmouk panorama and the historical research behind it. It is **contextual reading only**, not sufficient support for a detailed reconstruction of Khalid's career. The profile therefore avoids numerical claims, exact formations and a purported verbatim decision narrative.

The Rokossovsky link specifically supports the difficult military-political context of Warsaw in 1944; it is not a full career biography. The Zhukov museum page focuses on his postwar role. Both retain catalog-summary status pending broader scholarly sourcing.

## Serbian Front profiles (27 October 2026)

Four profiles of the Serbian vojvode (field marshals) were added for the Serbian Front collection: Radomir Putnik, Stepa Stepanović, Živojin Mišić and Petar Bojović. Each record links one source, as the data model allows; the other sources read for it are listed here and in `docs/SOURCE_AUDIT.md`. Engagement links were added only where a source read confirms the commander's role.

| Profile          | Linked source                                                                                     | Other sources read                                                                                                                                     | Limits                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Radomir Putnik   | Britannica, “Radomir Putnik”                                                                      | Tasić, Raspopović and Hall (1914-1918-online); Serbian Ministry of Defence, centenary of his death (2017)                                              | Britannica gives the career outline; the date he was relieved of command is not given.                                                                                                                                         |
| Stepa Stepanović | Serbian Ministry of Defence, “Duke Stepa Stepanovic's name carved deep in Serbian history” (2015) | Ministry of Defence, 92nd anniversary (2021); _Serbia 1914_ catalogue; Municipality of Istočno Novo Sarajevo, “Park of the Greats” biography; Bjelajac | Commemorative sources. His 1918 command is attested only as taking part in the breakthrough, which is the basis for the Dobro Pole link. The vojvoda date (20 August 1914) and retirement (1920) come from the municipal page. |
| Živojin Mišić    | Serbian Ministry of Defence, anniversary of his death (2017)                                      | Bjelajac; _Serbia 1914_ catalogue                                                                                                                      | Years of birth and death come from Bjelajac. The “Colonel Mišić” whose detachment the catalogue places on the Drina is not identified with him, so he is not linked to the Drina.                                              |
| Petar Bojović    | Serbian Ministry of Defence, anniversary of his death (2017)                                      | _Serbia 1914_ catalogue                                                                                                                                | No source read gives his date of birth, so his years read “d. 1945”. The Ministry gives 26 September without a year for his promotion to vojvoda; the profile places it in 1918, after the breakthrough.                       |

## Historical caution

- Approximate lifetimes are labeled with `c.`, and BCE dates are explicit. These display strings are not machine-sortable date intervals.
- `eraId` is a browsing category, not a claim that a career fits a single period. Belisarius is grouped with late antiquity; early nineteenth-century southern African history is placed in the industrial-era catalog for chronological navigation.
- Empty `battleSlugs` arrays mean that no direct command association is provided among the current 29 engagements. They do not mean that the figure fought no important battles.
- `battleSlugs` connect commanders only to existing engagement records. A linked figure may have strategic or coordinating responsibility rather than local tactical command; Zhukov, Eisenhower and Nimitz are examples.
- Richard I is not linked to Hattin, which preceded his crusade. Scipio is not represented as the commander at Cannae.
- Alexander, Caesar, the Mongol commanders, Nader Shah and other conquerors are presented with the violence and coercion of conquest.
- Lee's profile identifies slavery and the Confederate cause; it does not reproduce Lost Cause claims. Rommel's profile uses the United States Holocaust Memorial Museum's treatment of the Rommel myth.
- Military success is not treated as moral endorsement. National reputation, wartime propaganda and retrospective myth are distinguished from historical evidence.

## Next editorial work

1. Add claim-level references and bibliography entries to every profile.
2. Prioritize early Islamic, Mongol, southern African and Soviet historiography for specialist review.
3. Add structured commands, campaigns, rank intervals and dated career events.
4. Add portrait assets only after checking the actual file's license, authorship and provenance. This edition intentionally contains no unverified portraits.
5. Review the qualitative comparison language with historians before introducing any stronger comparative conclusions.

All profile source URLs, publisher names and reading titles are stored alongside the corresponding record in `data/commanders.json`.
