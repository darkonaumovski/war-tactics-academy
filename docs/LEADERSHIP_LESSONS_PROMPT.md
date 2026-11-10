# Prompt: Leadership Lessons, beginning with Napoleon

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (9 November 2026):** Phase 0 evidence pass done and approved; the results are in `docs/LEADERSHIP_EVIDENCE.md`, and this prompt carries its corrections. The types, schema, volume scaffold and tests exist. The pilot (batch L1: lessons 0, 2 and 13, with the routes and nav entry) is written, and I approved its format, length (about 1,400–1,500 words of body text) and voice on 9 November 2026. Batches L2 to L4 (lessons 1 and 3 to 11) are written. Resume at batch L5, following the pilot as the model.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. The site explains what commanders did and why. It does not yet ask what a person who leads others can take from it.

Your job is to build **Leadership Lessons**, a new series of the Academy, and to write its first volume: **Leadership Lessons from Napoleon**. Further commanders will follow as later volumes, so the structure must take them without rework, but write only Napoleon now.

Work as three specialists reading the same evidence, and keep their voices separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what the commander could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses a dead man.

A lesson is finished when each specialist would sign it. If the three disagree, show the disagreement. That is often the most useful thing on the page.

The curriculum below is a **research plan, not a source**. Dates, episodes, attributions, scholarly references and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## The question that organises the volume

Napoleon won for nearly two decades and then lost everything. Every lesson should add evidence to one question, stated in the volume's introduction and answered, with its uncertainties, in the last lesson:

> **Did Napoleon get worse, or did the problem get harder?**

The candidate answers are that his judgement declined (health, age, hubris, isolation); that scale outran a personal method of command; that his army's quality fell while his enemies learned; and that his aims could never be settled by battle. Do not choose in advance. The honest conclusion may be that these combined, and that the sources cannot weigh them precisely.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check. Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Paywalled research.** A paper of which you could read only the abstract may be cited only for what the abstract states, and the audit must say "abstract only". Do not describe methods, samples or effect sizes you did not read.
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty figures, no invented quotations, no guessed troop coordinates and no numerical commander ratings. Use `fact`, `interpretation` and `uncertainty` honestly.
5. **Quotations.** Quote Napoleon or anyone else only from a text you read, with its locator, and name the chain of transmission ("as Caulaincourt reports it"). A published English translation may be quoted as that translation. Your own rendering of a French, German or Russian text is a paraphrase and takes no quotation marks. Keep quotations from modern copyrighted works very short.
6. **No retrospective diagnosis.** Never assign a psychiatric or personality-disorder label, and no "dark triad" scoring. Say what he did and which mechanism might be relevant; do not claim to know his inner state. Psychological readings are always `evidence: "interpretation"` and always carry a stated limit.
7. **One case proves nothing.** A lesson drawn from a single career is a hypothesis. Every principle must be written as a conditional claim with its scope ("when subordinates share a doctrine and can act out of contact, …"), and every lesson must include a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.** Keep hindsight out of the strategist's verdict. A good decision can lose and a poor one can win; say which you think this was and why.
9. **The human cost stays in the frame.** A lesson on how he moved men must not read as admiration of what he moved them to do. Conscripted peasants, civilians under requisition, prisoners at Jaffa and the enslaved people of Saint-Domingue are part of the record. State the cost as fact, not spectacle, and without casualty figures.
10. **Stay even-handed between national traditions and schools of biography.** French commemorative writing, British Waterloo writing and Russian 1812 writing each have a stake. Admiring and hostile biographers both belong in the debates and neither sets the narrative.
11. **No management-book voice.** Write for an intelligent adult, in the plain register of the existing studies. No "5 secrets of", no slogans, no invented business anecdotes, no direct advice stated more firmly than the evidence allows.
12. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
13. Match the existing code style, naming and comment density. Don't refactor unrelated code, and do not add engagements or commanders under this prompt; propose them instead.

## Traps specific to Napoleon

All entries are from memory. Trace each one before relying on it, and record the result in the audit. The orientation lesson should teach the most instructive of them.

**He wrote his own record.** He is the most interested witness to his own career: the bulletins, the rewritten accounts of Marengo, and the St Helena dictations were all made to be read. Treat them as evidence of what he wanted believed unless a second source supports them.

**Sayings that need tracing.** Use one only if you find its origin, and then present it with that origin.

| Saying                                                                                 | Problem to resolve                                                                                                                                              |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "An army marches on its stomach"                                                       | Attributed; find any contemporary text                                                                                                                          |
| "Never interrupt your enemy when he is making a mistake"                               | Untraced as far as I know                                                                                                                                       |
| "Give me lucky generals"                                                               | Untraced as far as I know                                                                                                                                       |
| "Every soldier carries a marshal's baton in his knapsack"                              | Attributed in several forms and to more than one ruler                                                                                                          |
| "History is a set of lies agreed upon"                                                 | Variants, and attributed to others                                                                                                                              |
| "Impossible is not French"                                                             | Popular reworking of a line in an 1813 letter; find the letter                                                                                                  |
| "It is with toys that mankind is governed"                                             | **Traced:** Thibaudeau, _Bonaparte and the Consulate_ (trans. Fortescue), ch. VIII, pp. 142–143. Berlier used "toys" first. Check the page against the scan     |
| "a man such as I am does not concern himself much about the lives of a million of men" | **Traced:** Metternich, autobiographical memoir, vol. 1, p. 190. His word alone, written later; read his footnote before use                                    |
| "Soldiers, you are naked, ill-fed…" (Nice, 1796)                                       | The Napoleon's Campaigns course already notes this proclamation was probably reconstructed later. Good material for a source check                              |
| "Wellington is a bad general"                                                          | **Traced to Houssaye,** _1815: Waterloo_, pp. 163–164, as a reply to Soult. Read Houssaye's note to establish the chain                                         |
| _Military Maxims of Napoleon_                                                          | Unresolved. Catalogue records show Burnod's notes and text extracted from the St Helena memoirs; the earliest seen is 1828. Do not treat it as his own treatise |

**Legends to test.**

- His height and the "Napoleon complex": use only as an example of a myth. Do not build any argument on it.
- Knowing every veteran by name: Wellington says Lobau prepared lists (Stanhope, _Notes of Conversations_, p. 24). He is a rival, reported at second hand, and Chaptal independently praises Napoleon's memory for names. Present the disagreement.
- Sleeping four hours, dictating several letters at once, perfect memory for muster returns: trace each to a witness and note whether that witness admired him.
- Arcole and the flag: the existing course and study already separate the event from the image.
- Illness at Borodino, Leipzig or Waterloo as the explanation of defeat: medical claims are unresolved, so mention them only as a contested factor.
- Poisoned plague patients at Jaffa, and the massacre of prisoners there: keep separate the well-attested from the contested.
- Bourrienne's memoirs are notoriously unreliable, and Ségur on 1812 was contested at the time (Gourgaud). Marmont is defending himself over 1814. Grouchy, Ney and their defenders are arguing about blame for 1815.

**Claims from popular psychology you must not use.** Ego depletion, power posing, Myers-Briggs types, the 10,000-hour rule, the popular version of Dunning–Kruger, and Yerkes–Dodson as a simple curve for stress. Janis's groupthink may be mentioned only with its weak empirical record. Owen and Davidson's "hubris syndrome" may be discussed only as a debated proposal about office-holders, never applied as a finding about Napoleon. Anachronism applies too: the corps system was not "mission command", and Boyd's decision cycle is a modern lens, not something he practised.

## Phase 0: structure and evidence (one commit, before any lesson)

Read `lib/types.ts`, `lib/validation.ts`, `lib/content.ts`, `lib/projections.ts`, `data/collections.ts`, `data/collection-courses.ts`, `data/lesson-exercises.ts`, `data/learning.ts`, `components/learning.tsx`, `components/shell.tsx`, `components/views/academy.tsx`, `components/views/commanders.tsx`, `components/views/search.tsx`, `app/sitemap.ts`, `docs/DATA_MODEL.md`, `docs/ARCHITECTURE.md` and `tests/unit/*.test.ts`. Note the current counts of engagements, commanders, courses and exercises; other batches may have landed.

**Recommended structure; change it if the code argues otherwise and tell me why.**

- **Own section, not another Academy course.** Courses run along a narrative; these run along a question, and each lesson carries much more apparatus. Add a nav entry "Leadership Lessons" with routes `/leadership/`, `/leadership/[commanderSlug]/` and `/leadership/[commanderSlug]/[lessonSlug]/`, using `generateStaticParams` and `dynamicParams = false` as in `app/commanders/[slug]/page.tsx`, and `pageMetadata` for each.
- **File-based data, outside Prisma and `getCatalog`.** Follow the precedent of `data/collections.ts`: `data/leadership/index.ts` plus `data/leadership/napoleon.ts`. Lesson text must reach only its own lesson page. Hub and search receive projections holding titles and summaries, as `lib/projections.ts` does for list pages; `/battles` is already heavy and must not grow.
- **Reuse** `Quiz`, `SourceCheck` and `DecisionExercise` from `components/learning.tsx`, the `Evidence`, `Source` and `SectionRef` types, and the existing local progress mechanism.
- **Validation** with a zod schema in `lib/validation.ts`, as for courses.

**Types.** Approved and in `lib/types.ts` (`LeadershipLesson`, `LeadershipVolume`), validated by `leadershipVolumeSchema`. Psychologist blocks carry a `base` of meta-analysis, review, single study, theory, contested or none; `none` says plainly that no reliable mechanism is offered. The schema enforces the editorial rules, so a batch that breaks one fails its tests.

**Evidence pass.** Done: see `docs/LEADERSHIP_EVIDENCE.md`, which grades every lesson and lists what has and has not been read. Each batch must close the gaps named there for its lessons. Long memoirs were searched rather than read through, and web articles came through a summarising tool, so re-read exact wording before quoting it.

## Anatomy of a lesson

Aim for 1,500–2,500 words of body text, in this order on the page:

1. **The moment.** One concrete scene, with place and date, that sets the problem.
2. **The claim under test.** One sentence, conditional and falsifiable.
3. **What happened.** Two to four episodes linked to their studies, `fact` wherever a read source supports it. Don't retell the studies; link to them and select only what the argument needs.
4. **Who says so.** The main witnesses, each with their stake.
5. **The strategist's reading.** Ends, means, alternatives actually available, the enemy's options and the verdict without hindsight.
6. **The psychologist's reading.** One or two mechanisms at most, each with its research base and a sentence on why the application to a historical person is limited.
7. **The shadow.** Where the same behaviour produced failure, preferably in Napoleon's own career.
8. **The counter-case.** A commander in the catalog who solved the problem differently, and what that shows.
9. **The cost.** Who paid for this behaviour, where it matters to the lesson.
10. **Carrying it forward.** When the claim holds, when it fails, and three questions a reader can put to their own situation. Conditions and questions rather than instructions.
11. **What this adds to the question.** One short paragraph on "worse or harder?".
12. **Exercises.** Three quiz questions on the lesson text, a source check where witnesses truly disagree, and a seminar prompt with guidance.

Show the three specialists with labelled headings and the existing evidence badges, so a reader always knows whether they are reading record, judgement or inference.

## The curriculum

Engagement and campaign slugs below exist in the catalog today. Other episodes have no study and are referred to in prose only. The Peninsular War is the largest gap: no Spanish engagement is in the catalog, so propose additions rather than adding them.

### Orientation

**0. `how-to-read-napoleon` — How to learn from Napoleon without being fooled by him (L1)**

- Purpose: the source hierarchy, the traps above, hindsight and survivorship bias, the halo effect, why one career cannot prove a rule, and the volume's question.
- Episodes: `marengo` (the rewritten official accounts), `arcole` (the image), the Nice proclamation at `montenotte`.
- Psychology: hindsight bias (Fischhoff 1975), halo effect (Thorndike 1920; Rosenzweig, _The Halo Effect_).

### Part I. Judgement

**1. `inherit-before-you-invent` — What he inherited (L2)**

- Claim: when a leader appears to have created a system, look first for what they inherited and scaled.
- Episodes: `toulon`, `montenotte`; divisional organisation, Gribeauval artillery, Guibert and Bourcet, the Revolution's mass armies and its open promotion.
- Shadow: the legend credits him alone, and he encouraged it.
- Counter-case: `archduke-charles`, who had to reform an inherited system against its owners.
- Psychology: attribution to persons over situations.

**2. `intuition-is-stored-work` — The coup d'œil (L1, pilot)**

- Claim: fast battlefield judgement is reliable when long preparation meets a setting whose signals have stayed the same.
- Episodes: `rivoli`, `austerlitz`, with `toulon` as the early case; Clausewitz on coup d'œil (_On War_, I.3).
- Shadow: `borodino` and the wider `russian-campaign-of-1812`, where distance, supply and an enemy who would not offer the expected battle changed the signals.
- Counter-case: `mikhail-kutuzov` or `barclay-de-tolly`, who read the same war differently.
- Psychology: recognition-primed decision-making (Klein); conditions for valid intuition (Kahneman and Klein 2009); expert pattern memory (Chase and Simon 1973).

**3. `plan-for-being-wrong` — Plans that survive error (L2)**

- Claim: when the situation cannot be known in advance, an organisation built to absorb a wrong assumption is worth more than a correct prediction.
- Episodes: `ulm`, `jena-auerstedt` (he misjudged where the main Prussian army was, and the system forgave him), `marengo` (it nearly did not).
- Counter-case: Weyrother's disposition at `austerlitz`, and `levin-von-bennigsen` if the sources help.
- Psychology: overconfidence (Moore and Healy 2008); the premortem (Klein 2007) in the transfer section.

**4. `tempo-and-the-decisive-point` — Speed, and what it is spent on (L2)**

- Claim: speed pays when it concentrates force at the point that matters, and it is paid for in people.
- Episodes: `montenotte`, `castiglione` (giving up the siege of Mantua to concentrate), `six-days-campaign`.
- Shadow: the exhausting marches of 1813 around `dresden`, and 1814, where brilliance could not change the arithmetic (`la-rothiere`, `laon`).
- Counter-case: `mikhail-kutuzov`'s deliberate slowness.
- Psychology: sleep loss and judgement (Harrison and Horne 2000), only for what the evidence on his actual sleep allows.

### Part II. Moving people

**5. `be-seen-where-it-is-hardest` — Presence (L3)**

- Claim: visible shared risk builds authority when followers read it as belonging to them, and it can be staged.
- Episodes: `lodi`, `arcole`, the plague hospital at Jaffa and Gros's painting (`acre`), the eve of `austerlitz`.
- Shadow: the distance and privilege of the later Empire; the Guard.
- Counter-case: `arthur-wellesley`, cool and unsentimental, yet trusted. Keegan's _The Mask of Command_ frames the contrast.
- Psychology: social identity leadership (Haslam, Reicher and Platow); emotional contagion (Barsade 2002).

**6. `what-people-will-do-for-recognition` — Honour, promotion and reward (L3)**

- Claim: public recognition mobilises people when it is seen as fair, and loses force once it hardens into property.
- Episodes: the Legion of Honour, the marshalate, Davout's corps after `jena-auerstedt`, and the Revolution's open careers as the origin.
- Shadow: enriched marshals and the new nobility; the marshals' pressure for abdication in the `campaign-in-france-1814`.
- Counter-case: `gebhard-leberecht-von-blucher` and the Prussian opening of the officer corps after 1806.
- Psychology: rewards and intrinsic motivation (Deci, Koestner and Ryan 1999); procedural justice (Lind and Tyler).

**7. `words-that-win-and-words-that-spend-trust` — Proclamations and bulletins (L3)**

- Claim: when a leader controls what followers are told, they can shape what a situation means, and each distortion draws on a limited account of trust.
- Episodes: the Italian letters and bulletins, the Arabic proclamation (`pyramids`), the Austerlitz proclamation, the 29th Bulletin after `berezina`.
- Shadow: the saying that someone "lies like a bulletin", if a source supports it; what the French public did not learn.
- Counter-case: `arthur-wellesley`'s dry despatches.
- Psychology: impression management (Goffman); sensemaking (Weick).

### Part III. Building the instrument

**8. `delegate-the-fight` — The corps and its commanders (L4)**

- Claim: delegation works when subordinates share a doctrine, have forces able to survive alone and know the intent.
- Episodes: `jena-auerstedt` (Davout; Bernadotte's failure to intervene), `friedland` (Lannes), `aspern-essling` (Masséna and Lannes).
- Shadow: he delegated the fight but seldom the thinking, which leads to lesson 10.
- Counter-case: the Prussian army of 1806, with `louis-nicolas-davout`, `jean-lannes` and `andre-massena` linked as the successful delegates.
- Psychology and organisation: span of control; trust and autonomy. Do not call this mission command.

**9. `a-headquarters-built-for-one-mind` — What a personal staff could and could not do (L4)**

- Claim: when a headquarters is built to serve one mind, it extends that mind's reach and leaves little that can think without it.
- Episodes: `ulm`, `austerlitz`; Berthier, the cabinet, Bacler d'Albe's topographic office. Britannica says the staff were required not to think independently and Gambiez says Berthier was far more than a transmitter: make that the source check. Use van Creveld's directed telescope only if his text or Griffin's can be read.
- Shadow: the same system at the distances of 1812.
- Counter-case: `arthur-wellesley`'s small, personal staff, which complicates any simple rule.
- Psychology: limits of attention and information overload.

**10. `the-bottleneck` — When everything depends on one mind (L4)**

- Claim: an organisation trained to wait for one person's decision fails where that person is absent.
- Episodes: `german-campaign-of-1813` and the marshals' separate defeats, `dresden`, `leipzig`, and `ligny` and `waterloo` (d'Erlon's wandering corps, Grouchy, Soult in Berthier's place).
- Historian's check: the St Helena blame placed on Ney and Grouchy is itself a source problem.
- Counter-case: the `gebhard-leberecht-von-blucher` and Gneisenau partnership. Wellington also centralised, which shows that centralisation alone explains little.
- Psychology: learned reliance and reluctance to act without orders, stated cautiously.

**11. `your-rivals-are-learning` — Competitors copy success (L4)**

- Claim: when one side keeps winning by the same method, its opponents have more reason to learn from it than it has itself.
- Episodes: `aspern-essling`, `wagram`, `leipzig`, the Trachenberg plan to avoid Napoleon and strike his marshals, Prussian reform after 1806.
- Shadow: his army's falling quality and his reliance on mass.
- Counter-case: `archduke-charles`, `karl-philipp-schwarzenberg`.
- Psychology: the success trap (Levinthal and March 1993; Audia, Locke and Smith 2000).

### Part IV. The limits of the self

**12. `winning-battles-is-not-ending-wars` — Victory without settlement (L5)**

- Claim: while battles keep being won, success can conceal the absence of a political end that opponents could accept.
- Episodes: `friedland` and Tilsit, Spain from 1808 (in prose), `lutzen-1813` and `bautzen` and the armistice and Prague talks of 1813, the terms refused in the `campaign-in-france-1814`.
- Shadow: this lesson is the shadow of Part I.
- Counter-case: `mikhail-kutuzov`; Metternich and Talleyrand as political readers, in prose.
- Psychology: goals pursued past their usefulness (Ordóñez et al. 2009).

**13. `knowing-when-to-stop` — Acre and Moscow (L1, pilot)**

- Claim: cutting losses is hardest when the leader's standing is tied to the commitment and no one can release them from it.
- Episodes: `acre` (he stopped, and told a story of success), `smolensk-1812` (the choice to go on), the wait in Moscow, `maloyaroslavets`.
- Counter-case: `barclay-de-tolly` and `mikhail-kutuzov` giving up ground and the city.
- Psychology: escalation of commitment, presented as contested. Białek et al. (2021) found no effect in a replication of Staw, the FLoRA atlas also lists a mixed 2022 replication, and Sleesman et al. (2012) reviews many determinants. Caulaincourt says Napoleon had no illusions about Moscow yet stayed, which is hard to file under a laboratory bias. Use `base: "contested"`. Staw's own paper has not been read.

**14. `who-can-tell-you-no` — Dissent and power (L5)**

- Claim: the higher a leader's success, the more deliberately dissent must be protected.
- Episodes: Caulaincourt's warnings before 1812, Davout's rejected flanking plan at `borodino`, the warnings before `waterloo`.
- Test the opposite: who could still speak frankly to him, and did it change anything?
- Counter-case: the councils of `mikhail-kutuzov`; `gebhard-leberecht-von-blucher` and Gneisenau.
- Psychology: psychological safety (Edmondson 1999); organisational silence (Morrison and Milliken 2000); power and perspective-taking (Keltner et al. 2003; Galinsky et al. 2006).

**15. `the-last-reserve` — Holding back and throwing in (L5)**

- Claim: when only one reserve remains, how a leader spends it shows how they weigh future options against present losses.
- Episodes: `borodino` (withheld), `waterloo` (committed), `leipzig`. Link the `commit-the-guard` exercise.
- Counter-case: `mikhail-kutuzov` at Borodino, `arthur-wellesley` at Waterloo.
- Psychology: risk-taking when facing losses (Kahneman and Tversky 1979), as illustration only; it cannot explain one decision.

**16. `when-the-leader-leaves` — Egypt 1799 and Smorgoni 1812 (L5)**

- Claim: when a leader leaves those they led, the decision may be rational and still break the bond that made them follow.
- Episodes: the departure from Egypt after `aboukir-1799` and Kléber's reaction; leaving after `berezina`; the farewell at Fontainebleau.
- Give both cases in full: he could raise a new army only from Paris, and the army he left died without him.
- Counter-case: `serbian-retreat-1915`, a king and government sharing the retreat with their army. That study does not currently mention the king, so this needs a new read source; find another counter-case if none confirms it.
- Psychology: psychological contract breach (Robinson and Rousseau 1994).

### Part V. What remains

**17. `what-outlasts-you` — Charisma and succession (L6)**

- Claim: when authority rests on personal success, it must become institutional or end with the person.
- Episodes: the Malet conspiracy of 1812, treated as disputed (Lentz says the dignitaries appeared reluctant and warns against exaggerating it; Caulaincourt reports Napoleon complaining that Clarke ran to swear the oath to the King of Rome; do not repeat that nobody thought of the heir), the marriage of 1810 and the King of Rome, the return in the `waterloo-campaign`, and the institutions that did survive.
- Counter-case: the Prussian General Staff as an attempt to institutionalise what he personalised.
- Theory: Weber on charismatic authority and its routinisation.

**18. `the-ledger` — Effective is not the same as good (L6)**

- Claim, for discussion rather than proof: when a leader is measured, the measure must include what they spent and on whom.
- Material: the prisoners at Jaffa, the restoration of slavery and Saint-Domingue, conscription, requisition, Spain, Russia; legal and administrative legacies; hostile and admiring biographers side by side.
- Psychology: moral disengagement (Bandura 1999), applied to justifications on the record and not to his conscience.
- Theory: Kellerman on bad leadership; Ciulla on ethics and effectiveness.
- Close the volume: answer "worse or harder?" and invite the reader to dispute the answer in the seminar.

## Sources to try

Check that each exists, is readable and says what you cite. Use these tiers, and mark a source's tier in the audit.

- **Documents.** Fondation Napoléon's _Correspondance générale_ and its online material; contemporary orders; the bulletins and _Le Moniteur_ as evidence of messaging.
- **Already read for this site.** Johnston's _The Corsican_, Rose's _Life of Napoleon I_, the 1911 _Britannica_ campaign articles, Wilson's _Narrative_, Thiébault, Lavalette and Fondation Napoléon articles. Read again what you cite in a lesson.
- **Witnesses with a stake.** Caulaincourt, Chaptal, Roederer, Thibaudeau, Marmont, Marbot, Rémusat, Coignet, Bourgogne, Ségur and Gourgaud's reply to him.
- **St Helena.** Las Cases, Gourgaud, Bertrand, Montholon, O'Meara.
- **Opponents.** Metternich, Clausewitz, Müffling, Stanhope's conversations with Wellington, Russian memoirs such as those already used in the Austerlitz study.
- **Scholarship, for the debates.** Chandler, Rothenberg, Elting, van Creveld, Keegan, Lynn, Forrest, Paret, Esdaile, Englund, Broers, Dwyer, Bell, Roberts, Lieven, Muir and Hazareesingh. Most are in copyright: use what is lawfully readable (publisher pages, reviews, open articles, Internet Archive where permitted) and cite only that.
- **Psychology and organisation.** The papers named in the curriculum, preferably author-hosted PDFs, PubMed or publisher abstracts, subject to rule 3. Prefer reviews and replicated findings to single studies.
- **Doctrine, for anachronism checks.** Publicly available manuals such as U.S. Army ADP 6-0.

## Phases

- **Phase 0.** Done: evidence pass, types, schema, volume scaffold and tests, with no routes, so no empty pages go live.
- **Phase 1, pilot (L1).** Lessons 0, 2 and 13: the orientation, one strength and one failure, with the routes and nav entry that show them. `Quiz` takes `courseSlug="leadership/napoleon-bonaparte"`, so progress keys stay separate. Stop and let me judge the format, length and voice before anything else is written.
- **Phase 2 (L2–L6).** The remaining lessons in the batches marked above, one commit each after my approval.
- **Phase 3, integration.** The volume hub with its introduction, parts and a strength-and-shadow table; a "Leadership lessons" block on Napoleon's commander page and on the study pages the lessons cite; search records; sitemap; the About page.
- **Phase 4, optional and ask first.** Up to four new Decision Room scenarios, each with exactly one historical option in varied position. Candidates: raising the siege at `castiglione`, going on from `smolensk-1812`, choosing the road at `maloyaroslavets`, and the single line of retreat at `leipzig`. Also propose Peninsular engagements and missing commanders (Berthier, Soult, Grouchy, Gneisenau, Scharnhorst), and a template for later volumes in `docs/`. Don't begin another commander.

## Checks and bookkeeping for every batch

- `tests/unit/leadership.test.ts` and `leadershipVolumeSchema` already enforce the structure and the editorial rules. Keep them passing; add a banned saying to the schema if one comes up, and remove one only after recording its origin in the audit.
- Update hard-coded counts in `tests/unit/data.test.ts` if they change, `README.md`, `components/views/about.tsx`, `docs/DATA_MODEL.md` and `docs/ARCHITECTURE.md`; mark progress in `docs/PRODUCT_ROADMAP.md`.
- Add a `docs/SOURCE_AUDIT.md` section for each batch listing every source read, how it was read, its language, its tier and its evidence limits, plus each saying or legend traced and the result. Run a link check on every new URL.
- Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run db:seed`, `npm run build` and `npm run test:e2e:chromium`. Everything must pass before you ask me to commit.
- Compare the built sizes of `/battles`, the home page and `/commanders` before and after. They must not grow beyond a few bytes for nav.
- Spot-check the hub and two new lessons in the browser, at desktop and 375px, in light and dark themes.
- After each commit, add a row to the README release history in the same style as the existing rows; it goes into the next commit.

## Definition of done

- The Napoleon volume is live with its orientation and every lesson that survived the evidence pass, and any dropped or merged lesson is agreed with me.
- Every factual claim traces to a source read and audited; every saying used has a named origin.
- Each lesson shows the historian, strategist and psychologist separately, carries a shadow, a counter-case and scope conditions, and contributes to "worse or harder?".
- No psychiatric labels, casualty figures, invented quotations or commander ratings appear.
- List-page payloads are unchanged and all checks pass.
- Docs and counts are consistent, and each batch is committed separately with my approval.

Start with Phase 0. Show me the proposed routes, types, evidence table and any corrections to this plan before writing lessons.
