# Historical source audit

Checked 23 October 2026. The eight analyses in `data/research.json` are concise editorial syntheses, not transcriptions. Each contains the 14 requested analysis categories and four chronological phases. Cannae, Alesia, Hastings, Austerlitz, Waterloo, Midway and Stalingrad include opposing command perspectives. Those perspectives explicitly distinguish documented actions from reconstructed constraints or reasoning.

## Verified source families

| Analysis   | Sources consulted                                                                                                                                   | Evidence and limits                                                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Marathon   | Herodotus, _Histories_ 6; Encyclopaedia Iranica, “Datis”; Hellenic Ministry of Culture, Archaeological Museum of Marathon                           | Later Greek literary testimony, a scholarly biographical entry and material-memory context. Cavalry activity, troop locations and Datis's fate require caution.      |
| Cannae     | Polybius, _Histories_ 3; Livy 22 in a University of Richmond teaching extract; Cambridge University Press introduction; Livy's epitome at Livius    | Ancient narrative traditions are not neutral eyewitness records. Do not convert Livy's contrast between the consuls into verified private motives.                   |
| Alesia     | Caesar, _Gallic War_ 7 through Perseus and LacusCurtius; Alésia MuséoParc                                                                           | Caesar was a participant with political interests. Two hosts of his text are not two independent witnesses. Museum interpretation adds landscape context.            |
| Hastings   | English Heritage; Historic England registered battlefield entry and battlefield report                                                              | Institutional interpretation grounded in surviving narratives and terrain. Exact battlefield extent and Harold's fatal wound remain unresolved here.                 |
| Austerlitz | Fondation Napoléon timeline and battlefield guide; French Ministry of the Armed Forces                                                              | Narrative, topographic and commemorative sources. The app does not repeat casualty figures or exact clock times.                                                     |
| Waterloo   | National Army Museum; Royal Armouries; Fondation Napoléon Prussian dossier; The National Archives catalogue record for three 1815 plans (MPH 1/387) | Comparison avoids treating the battle as an exclusively British or French story. The archival sketch is evidence, not a coordinate dataset for troop animation.      |
| Midway     | Naval History and Heritage Command chronology, historical overview and anniversary discussion; U.S. Naval War College operational study             | Operational reporting supports force structure, decisions and chronology. Intelligence never supplied a complete real-time picture.                                  |
| Stalingrad | National WWII Museum; United States Holocaust Memorial Museum; National Army Museum                                                                 | Modern institutional scholarship and broader war context. City fighting, encirclement and the southern campaign are related but not interchangeable casualty scopes. |

Each record stores direct source URLs and publishers. Search-result text was available for all linked sources. Direct page retrieval additionally succeeded for the National Army Museum Waterloo article and National WWII Museum Stalingrad article. A direct fetch of the Polybius Perseus page returned a cache miss, although the indexed source text was available; this is a retrieval limitation, not a claim that the source was independently audited line by line.

## Editorial rules used

- `fact` means an event or claim supported by the cited source set. Where ancient evidence is an author's report, the prose says so; the label does not make that author's account infallible.
- `interpretation` identifies the academy's explanatory synthesis or learning question. It is not a purported quotation, private thought or precise intelligence record.
- `uncertainty` makes material limitations visible.
- Phase times are broad chronological labels. These are schematic teaching sequences, not georeferenced unit positions, ship tracks or precise reconstructed movement orders.
- No numerical casualties, invented direct quotations, guessed troop coordinates or numerical commander ratings are included.
- No remote media has been copied. Source links are reading references, not licenses to reuse publisher imagery.
- Source pages can themselves contain simplified or disputed claims. For example, the Waterloo analysis does not adopt broad claims of uninterrupted European peace after 1815; the Austerlitz analysis avoids incompatible casualty totals.

## Remaining editorial work

A specialist review should expand claim-level citations, add contrasting scholarship, and audit primary-text translations. These eight analyses are deliberately concise. Catalog records outside this set must not be presented as having the same depth of verification. Modern scholarship and archaeological reports should precede any future conversion of schematic positions into geographic overlays.

## Section references and link check (24 October 2026)

Every source URL in the catalog was requested. Pages that refused automated requests (HTTP 403 or 429) or failed on local certificate validation were opened in a browser where section references depended on them.

Section references were assigned only to sources whose content was read during this check:

- Read and mapped: Herodotus, Polybius and Caesar by standard book and chapter; Encyclopaedia Iranica on Datis; the Marathon museum page; Livy's periochae at Livius; the Alésia MuséoParc page; English Heritage and the Historic England list entry for Hastings; the Fondation Napoléon timeline and battlefield guide and the French Army page for Austerlitz; the National Army Museum, Royal Armouries and Fondation Napoléon Blücher dossier for Waterloo; the NHHC Midway overview, H-Gram 006-1 and 75th-anniversary speech; and the National WWII Museum, USHMM and National Army Museum pages for Stalingrad.
- Not mapped to individual sections, because their content could not be read here: the University of Richmond Livy extract (certificate rejected), the Historic England battlefield report (served only as a download), and the U.S. Naval War College study (a large PDF). They remain in the study source lists.

Corrections made as a result:

- The National Archives' Waterloo education page now returns HTTP 410 (Gone), along with its whole section. It was replaced with the catalogue record for the three 1815 plans (MPH 1/387), which are not digitised. The Waterloo study no longer describes the contents of the sketch's key.
- The Cambridge University Press excerpt introduces Livy's life and the survival of his text; it does not discuss the 216 BCE campaign. The Cannae source note now says so, and the terrain claim is attributed to Polybius 3.110.
- Two commander sources were dead (HTTP 404): the MuséoParc press dossier for Julius Caesar and the NHHC "Midway's Strategic Lessons" page for Nimitz. They were replaced with Livius.org's Caesar overview and NHHC's biography of Nimitz.
- The Shivaji PDF link was redirected by a local network filter, so its status could not be determined from this environment.
