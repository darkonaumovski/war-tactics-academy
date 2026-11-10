# Prompt: Leadership Lessons, the next volumes

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (10 November 2026):** Phase 0 committed (`5941d1c`): the shared-volume field (`alsoCommanderSlugs`), Volume 2's evidence pass (`docs/LEADERSHIP_EVIDENCE_ALEXANDER.md`) and its scaffold. Volume 2 agreed at thirteen lessons (see the evidence pass's "Agreed shape"). Pilot committed (`6e06103`): lessons 0, 2 and 6 (batch A1), with the volume listed as in progress. Phase 2: batch A2 (lessons 1, 3, 4 and 5) committed (`ed95965`); batch A3 (frankness, Opis with the former lesson 10 merged in, after Gaugamela) committed; ten of thirteen lessons written. The Napoleon volume is complete (nineteen lessons, integrated, four decision exercises). This prompt chooses the next commanders, analyses why, and sets out curricula for Volume 2 (Alexander the Great) and Volume 3 (Radomir Putnik and the Serbian Supreme Command, 1914–1918). Later volumes are listed with what the catalog must gain before each can begin. Order confirmed on 10 November 2026: Alexander first, then Serbia.

## Why these commanders (readiness analysis, 10 November 2026)

`docs/LEADERSHIP_VOLUME_TEMPLATE.md` asks for a commander whose profile exists and who has at least eight engagement studies, so lessons link to studies instead of retelling them. Counting `battleSlugs` in `data/commanders.json`:

| Candidate                                                 | Studies linked                                               | Other material already in the catalog                                                                             | Verdict                                                                                                                                          |
| --------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alexander the Great                                       | 9 (granicus to hydaspes)                                     | `alexander` collection, course, three campaign narratives, `cross-the-hydaspes` exercise                          | **Ready.** Opposite source problem to Napoleon: his own record is lost. Old translations of every ancient source are public domain               |
| Putnik and the Serbian Supreme Command                    | 14 across Putnik (7), Stepanović (6), Mišić (3), Bojović (5) | `serbian-front` collection and course, five campaign narratives, four exercises (Cer, Kolubara, 1915, Dobro Pole) | **Ready,** as a collective volume. Needs one small type change (below). A small army, a coalition and a catastrophe: problems Napoleon never had |
| Foch and Haig, the Western Front high command             | 8 distinct between them                                      | `ww1` collection, `turn-and-attack` exercise, Joffre, Pétain, Currie, Monash and Pershing profiles                | **Nearly ready.** The British "learning curve" debate gives a strong volume question. Propose after Volume 3                                     |
| Blücher with Gneisenau                                    | 9, all already used by the Napoleon volume                   | —                                                                                                                 | Possible, but it would retell the Napoleon volume from the other side. Better after the Gneisenau and Scharnhorst profiles proposed in Phase 4   |
| Napoleon's marshals (Ney, Murat, Lannes, Davout, Masséna) | 8–13 each                                                    | —                                                                                                                 | Their studies are Napoleon's studies; they serve better as counter-cases, as they already do                                                     |
| Wellington, Caesar, Hannibal and Scipio, Grant, Slim      | 1–2 each                                                     | —                                                                                                                 | Strong subjects, not ready. Each needs new studies first (see "Later volumes")                                                                   |

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has one complete volume, _Leadership Lessons from Napoleon_ (`data/leadership/napoleon.ts`), built under `docs/LEADERSHIP_LESSONS_PROMPT.md` and generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`.

Your job is to write the next two volumes, **one at a time**:

- **Volume 2: Leadership Lessons from Alexander the Great.**
- **Volume 3: Leadership Lessons from the Serbian Supreme Command, 1914–1918** (Radomir Putnik, with Stepa Stepanović, Živojin Mišić and Petar Bojović).

Write Volume 2 first; I have confirmed that order. Volume 3 begins only after Volume 2 is complete and I have approved it. Its curriculum is here now so that Phase 0 can settle the one structural change it needs.

Work, as in the Napoleon volume, as three specialists reading the same evidence, with their voices kept separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what the commander could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses the dead.

A lesson is finished when each specialist would sign it. If they disagree, show the disagreement.

The curricula below are a **research plan, not a source**. Dates, episodes, attributions, book and chapter references and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## What a new volume must add, not repeat

The Napoleon volume already teaches inheritance, intuition, plans that survive error, tempo, presence, recognition, proclamations, delegation, the personal headquarters, the bottleneck, rivals who learn, victory without settlement, stopping, dissent, the last reserve, leaving, succession and the ledger. A new volume earns its place by what its commander shows that Napoleon could not:

- **Alexander** shows the consent of followers and where it ends (the Hyphasis, Opis), ruling the people you defeated, and learning from a record written centuries later by people with their own purposes.
- **The Serbian Supreme Command** shows command shared among several people, a small army inside a coalition, a subordinate who overruled the plan and was right, command from a sickbed, and a defeat survived as an army.

Where a lesson meets a Napoleon theme (dissent, leaving, succession, the ledger), link the Napoleon lesson in prose and build on it; do not restate its psychology or its argument. Two volumes reaching different conclusions about the same problem are worth more than two that agree.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check. Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Paywalled research** may be cited only for what its abstract states, and the audit must say "abstract only".
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty figures, no invented quotations, no guessed troop coordinates, no numerical commander ratings. Use `fact`, `interpretation` and `uncertainty` honestly. `leadershipVolumeSchema` enforces much of this; add banned sayings and labels for the new volumes to it.
5. **Quotations** only from a text you read, with its locator and its chain of transmission ("as Arrian reports it, citing Ptolemy"). A published English translation may be quoted as that translation. Your own rendering of Greek, Latin, Serbian, German or French is a paraphrase and takes no quotation marks.
6. **No retrospective diagnosis.** No psychiatric, personality or addiction labels, and no "dark triad" scoring. This bites hardest on Alexander, whose drinking, violence and death have all been diagnosed in print: present such claims only as claims, with who makes them. Putnik's illness is a fact of the record; its effect on his judgement is not, unless a source shows it.
7. **One case proves nothing.** Every principle is a conditional claim with its scope, and every lesson includes a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.**
9. **The human cost stays in the frame,** stated as fact, not spectacle, and without figures: for Alexander, Thebes, Tyre, Gaza, Massaga, the Sogdian towns, Persepolis, the Gedrosian march and enslavement; for Serbia, the typhus winter, the retreat through Albania, the prisoners of war marched with it, Vido, the civilians of the Toplica reprisals, and the Serbian army's own conduct in the Balkan Wars.
10. **Stay even-handed between traditions.** For Alexander: Greek and Roman writers with moral purposes, modern admirers and debunkers, and the Persian view, which survives mostly in fragments and later Iranian tradition. For Serbia: Serbian commemorative writing, Yugoslav-era historiography and its politics, the Austro-Hungarian official history, Allied observers, and Bulgarian and Albanian perspectives. Neither the admirers nor the hostile set the narrative.
11. **No management-book voice.** Conditions and questions, not instructions.
12. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
13. Match the existing code style. Don't refactor unrelated code. **Do not add engagements or commanders under this prompt;** propose them.

## Phase 0, for both volumes (one commit, before any lesson)

Re-read `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, `data/leadership/index.ts`, `data/leadership/napoleon.ts` (the first two lessons and the volume object), `lib/types.ts`, `lib/validation.ts`, `tests/unit/leadership.test.ts`, `components/views/leadership.tsx` and the `app/leadership/` routes. Note current counts; other batches may have landed.

1. **Multi-commander volumes.** `LeadershipVolume` has one `commanderSlug`, which sets the route and the profile link. Volume 3 belongs to four commanders. Recommended: keep `commanderSlug: "radomir-putnik"` for the route and add an optional `alsoCommanderSlugs?: string[]`, so `volumeForCommander` also finds the volume from Mišić's, Stepanović's and Bojović's profiles. Show me the type, schema and helper change, and confirm that Volume 2 needs no change at all. Tell me if the code argues for another design.
2. **Evidence pass for Volume 2.** Write `docs/LEADERSHIP_EVIDENCE_ALEXANDER.md` in the format of `docs/LEADERSHIP_EVIDENCE.md`: grade every planned lesson strong, adequate or thin on its history and psychology, trace every saying in the traps table, list what has and has not been read, and recommend merges and drops. The Volume 3 evidence pass waits until Volume 2 is done.
3. **Scaffold** `data/leadership/alexander-the-great.ts` with the volume object (`inProgress` set, no lessons) and the volume tests, with no new routes going live until the pilot ships.

Show me the type change, the evidence table and any corrections to this plan before writing lessons.

---

## Volume 2: Leadership Lessons from Alexander the Great

### The question that organises the volume

Philip's army followed his son from the Hellespont to the Indus and then refused to go on. Within two years it mutinied again at Opis, and within a generation of his death everything he held had been divided and his whole family killed. Every lesson adds evidence to one question:

> **Did his army stop following him, or did he stop leading it?**

The candidate answers: his aims outran his men's (ever further conquest, and a Persian kingship they could not share); he changed, as the ancient writers insist (violence, suspicion, drink, flattery); the problem changed, since ruling a vast multi-ethnic empire required things a Macedonian army could not accept; and plain exhaustion after years and thousands of miles. Warn the reader early that "corrupted by success" is itself a moral pattern the ancient writers liked to find, so the second answer is partly the sources' own. Do not choose in advance.

### Traps specific to Alexander

All entries are from memory. Trace each one and record the result in the audit. The orientation lesson teaches the most instructive.

**No contemporary narrative survives.** The accounts that do survive were written three to five centuries later: Arrian (second century CE, mainly following Ptolemy and Aristobulus, both companions with interests of their own; Ptolemy later ruled Egypt), Plutarch's _Life_ (moral biography; his two speeches _On the Fortune of Alexander_ are rhetoric), Curtius Rufus (first century CE, rhetorical and often hostile), Diodorus book 17 and Justin's epitome of Trogus. Callisthenes, Cleitarchus, Nearchus, Onesicritus and Chares survive only in fragments. Teach the "vulgate" and the Arrian traditions as two families, not as a good and a bad source.

**Speeches are compositions.** The speeches at the Hyphasis (Coenus), at Opis and before battles were written by the historians. Treat them as evidence of what an ancient author thought plausible, never as Alexander's words.

**A non-Greek witness.** A Babylonian astronomical diary records the battle of Gaugamela and its aftermath. If a readable edition or translation can be found (Livius.org has published translations of Babylonian chronicles and diaries), it makes a good source check against the Greek accounts.

| Saying or story                                                                     | Problem to resolve                                                                                                                                   |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| "I will not steal a victory" (refusing a night attack before Gaugamela)             | Reported by Arrian and Plutarch; find both passages and note what each says his motive was                                                           |
| Parmenion: "I would accept, if I were Alexander"; "So would I, if I were Parmenion" | Arrian 2.25 and Plutarch, as far as I know. Part of a pattern in which Parmenion's advice is always wrong; that pattern is the material for lesson 5 |
| He wept that there were no more worlds to conquer                                   | Popular distortion. Plutarch's _On Tranquillity of Mind_ has him weep on hearing of infinite worlds, having not yet conquered one. Find the passage  |
| The Gordian knot, cut with a sword                                                  | Arrian gives Aristobulus's version that he pulled out the pin. A clean source check on how a story becomes the version everyone knows                |
| "To the strongest" (his answer on who should succeed him)                           | Arrian 7.26 and Diodorus 17.117, as far as I know, both hedged. Present it with its hedges                                                           |
| The Iliad under his pillow; taming Bucephalus; Diogenes                             | Plutarch, partly via Onesicritus. Usable as what later writers believed about him, not as fact                                                       |
| "An army of sheep led by a lion"                                                    | Untraced as far as I know; attributed to him in modern quotation books. Ban it unless traced                                                         |
| Cause of death (poison, malaria, typhoid, alcohol, Guillain–Barré)                  | Unresolved. Mention only as a contested question, never as an explanation of anything                                                                |
| Tarn's "unity of mankind" at the Opis banquet                                       | A twentieth-century thesis challenged by Badian (1958). Teach it as a debate about what the prayer for concord meant                                 |
| The Branchidae massacre                                                             | Told by Curtius, absent from Arrian. Keep separate the well-attested (Thebes, Tyre, Massaga) from the contested                                      |

**Claims you must not use:** retrospective diagnoses (alcoholism, narcissism, paranoia, megalomania); sexuality used to explain decisions; the Napoleon prompt's popular-psychology list (ego depletion, power posing, Myers-Briggs, the 10,000-hour rule, popular Dunning–Kruger, Yerkes–Dodson as a curve); "hammer and anvil" or "combined arms" presented as Macedonian doctrine rather than modern description.

### The curriculum

Every engagement slug below exists today: `granicus`, `issus`, `tyre`, `gaza-332-bce`, `gaugamela`, `persian-gate`, `jaxartes`, `sogdian-rock`, `hydaspes`, and the campaigns `macedonian-invasion-of-persia`, `campaigns-in-bactria-and-sogdiana` and `indian-campaign`. Thebes (335), the Hyphasis, the Malli town, Gedrosia and Opis have no studies and are referred to in prose only. Counter-cases come from catalog commanders.

#### Orientation

**0. `how-to-read-alexander` — Learning from a man whose record is lost**

- Purpose: the source families, speeches as compositions, the "corrupted by fortune" pattern, Roman uses of Alexander, the missing Persian side, and the volume's question. Compare with the Napoleon orientation: there the subject wrote too much; here he wrote nothing that survives.
- Episodes: `granicus` (Arrian has him cross at once against Parmenion's advice; Diodorus has the army cross unopposed at dawn: a real disagreement), `gaugamela` (the Babylonian diary), the Gordian knot in prose.
- Psychology: the romance of leadership (Meindl, Ehrlich and Dukerich 1985), the tendency to credit outcomes to leaders; prefer a later review if readable.

#### Part I. The instrument

**1. `a-borrowed-army` — Taking over his father's men**

- Claim: when a young leader takes over a proven organisation, the first test is whether its senior people will serve them, and the price of their service is often their independence.
- Episodes: the accession and Thebes in prose, `granicus`, `issus`; Philip's army, Antipater and Parmenion.
- Shadow: the old guard he later killed or lost (Parmenion, Philotas, Cleitus), which leads to lesson 7.
- Counter-case: `hannibal-barca`, who inherited his father's and brother-in-law's army in Spain.
- Link Napoleon's `inherit-before-you-invent`; do not repeat it. Psychology may be thin here; `base: "none"` is acceptable.

**2. `the-king-in-the-front-rank` — Personal risk**

- Claim: a commander's personal risk binds followers when they see it shared, and it stakes the whole enterprise on one life.
- Episodes: `granicus` (nearly killed, saved by Cleitus), `gaugamela`, `sogdian-rock` (volunteers rewarded for the climb), the wound at the Malli town in prose and the army's panic at the report of his death.
- Shadow: the Malli town, where the bond and the single point of failure were the same thing.
- Counter-case: `darius-iii`, who left the field at Issus and Gaugamela. Make the source check whether the Greek image of a cowardly Darius holds (Briant argues that Darius is seen only through Alexander's historians).
- Psychology: leading by example as a signal (Hermalin 1998, theory). Link Napoleon's `be-seen-where-it-is-hardest` for social identity.

**3. `a-new-enemy-every-year` — Adapting the method**

- Claim: a method travels when the leader keeps diagnosing each enemy instead of repeating the last victory.
- Episodes: `tyre` and `gaza-332-bce` (sieges), `jaxartes` (horse archers), `sogdian-rock` (a mountain fortress), `hydaspes` (a guarded river and elephants). Link `cross-the-hydaspes`.
- Shadow: the frontal failure at `persian-gate` before the turning path; Gedrosia, where the problem was terrain rather than an enemy.
- Counter-case: `porus` at the Hydaspes, or Napoleon's success trap (`your-rivals-are-learning`) as the cross-volume contrast.
- Psychology: adaptive versus routine expertise (Hatano and Inagaki 1986, theory).

**4. `seven-months-at-tyre` — When persistence is the strategy**

- Claim: spending months on one objective makes sense when leaving it would undo the strategy, and the same persistence becomes a liability once the reason has gone.
- Episodes: `tyre` (the mole; Arrian gives a strategic reason in a speech: denying the Persian fleet its bases, which is the historian's composition), `gaza-332-bce`, the two-year war in `campaigns-in-bactria-and-sogdiana`.
- Cross-volume: Napoleon left Acre after two months; Alexander stayed at Tyre. Ask what was different, and whether the answer is the decision or the outcome.
- Cost: the people of Tyre and Gaza.
- Psychology: keep it short; escalation of commitment is contested (see the Napoleon evidence pass), so `base: "contested"` or none.

#### Part II. The consent of the army

**5. `parmenions-advice` — When the record makes the adviser always wrong**

- Claim: when a record shows one adviser always wrong and the leader always right, suspect the record before the adviser, and ask who needed it that way.
- Episodes: the Granicus crossing, Darius's offer after `issus`, the night attack before `gaugamela`; Parmenion's killing in 330 in prose.
- Who says so: the traditions behind Arrian and Plutarch, and why Parmenion's reputation might have been shaped after his execution.
- Counter-case: `hannibal-barca` and Maharbal after Cannae (Livy 22.51), where the adviser is remembered as right. Link `after-cannae`.
- Psychology: devil's advocacy and dialectical inquiry (Schwenk 1990, meta-analysis); note it studies groups making decisions, not kings.

**6. `the-river-they-would-not-cross` — The Hyphasis, 326 BCE**

- Claim: followers' consent has limits a leader may learn only by reaching them, and how the leader turns back decides what remains of the bond.
- Episodes: `hydaspes` and its aftermath, the refusal at the Hyphasis in prose (Coenus's speech, the days of withdrawal, the unfavourable sacrifices that allowed a retreat), the `indian-campaign`.
- Shadow: the route home through Gedrosia. Some modern writers read it as punishment; treat that as a theory without ancient support unless you find it.
- Counter-case: the Napoleon marshals' pressure for abdication in 1814 (link `what-people-will-do-for-recognition`), or a catalog commander whose troops refused.
- Psychology: voice and exit (Hirschman, theory); employee voice and silence (Morrison 2014, review). State the distance from an army in India.

**7. `the-cost-of-frankness` — Philotas, Cleitus, Callisthenes**

- Claim: as a leader's power becomes absolute, the price of frankness rises for everyone near them, and the record of their violence comes from writers with reasons to remember it.
- Episodes in prose: the Philotas affair and Parmenion's death, the killing of Cleitus at a banquet, Callisthenes and the attempt to introduce prostration, the Pages' conspiracy; with `persian-gate` and `campaigns-in-bactria-and-sogdiana` for timing.
- Historian's check: Arrian, Plutarch and Curtius differ on each episode. Show where.
- Counter-case: `darius-iii`, killed by his own nobles once he had lost; a court without power loses the leader altogether.
- Psychology: power and approach (Keltner, Gruenfeld and Anderson 2003) only as far as the Napoleon `who-can-tell-you-no` lesson has not used it; prefer a fresh angle or `base: "none"`.

**8. `opis` — Changing who counts as one of us**

- Claim: when a leader widens the circle of insiders, the original core reads it as betrayal unless it keeps a place they recognise as theirs.
- Episodes in prose: the Susa marriages, the Persian youths trained in Macedonian fashion, the discharge of veterans, the mutiny at Opis and the reconciliation banquet; `sogdian-rock` (Roxane) and `hydaspes` (Porus reinstated).
- Debate: Tarn against Badian on what the prayer for concord meant.
- Counter-case: `hannibal-barca`, whose many-nationed army Polybius says never mutinied (11.19, as far as I know).
- Psychology: social identity theory of leadership and prototypicality (Hogg 2001; Haslam, Reicher and Platow).

#### Part III. Winning and ruling

**9. `after-gaugamela` — Victory is not rule**

- Claim: when a victory removes an enemy army but not the reasons for resistance, the hardest work starts after the battle.
- Episodes: `gaugamela`, Babylon and Susa (Persian governors kept in office), Persepolis burned (accident, revenge or policy: the sources differ), Bessus and Spitamenes, `jaxartes`, `sogdian-rock`.
- Counter-case: `augustus` after `actium`, who turned a victory into a settlement.
- Link Napoleon's `winning-battles-is-not-ending-wars`; here the problem is ruling, not making peace.
- Psychology: legitimacy (Tyler 2006, review), or `base: "none"`.

**10. `the-kings-king` — Becoming Persian to rule Persians**

- Claim: ruling the defeated needs their elites, and each step toward them is read by the original followers as a step away.
- Episodes: Persian dress and court ceremony, Persian satraps, Roxane, Porus kept as a ruler after `hydaspes`.
- Merge candidate with lesson 8 if the evidence pass finds too little to separate them.
- Counter-case: `porus`, or `augustus` and his careful public forms.

**11. `the-desert-road` — Logistics and who pays for daring**

- Claim: when a plan depends on one supply arrangement in a hostile land, the leader's boldness is paid for by those who cannot leave.
- Episodes: the march through Gedrosia and the failed link with Nearchus's fleet in prose; the depots and coastal strategy before `gaugamela` as the success.
- Scholarship: Engels (1978) on Macedonian logistics, if readable.
- Counter-case: `william-t-sherman` and the `atlanta-campaign`, deliberately living off the land.
- Psychology: the planning fallacy (Buehler, Griffin and Ross 1994).

#### Part IV. What remains

**12. `to-the-strongest` — No heir and no plan**

- Claim: when a leader's authority is wholly personal and no successor is prepared, the organisation survives them only by breaking apart.
- Episodes in prose: Babylon in 323, the ring given to Perdiccas, Philip III and Alexander IV, the Successors' wars, the killing of the royal family.
- Counter-case: `tokugawa-ieyasu` after `sekigahara`, who stepped down to secure his son's succession in his own lifetime.
- Link Napoleon's `what-outlasts-you` for Weber; add nothing from Weber the Napoleon lesson already says.

**13. `the-ledger-of-conquest` — Effective is not the same as good, again**

- Material: Thebes, Tyre, Gaza, Massaga (Plutarch calls it a stain on his record, as far as I know), the Sogdian towns, Persepolis, Gedrosia, enslavement; the cities founded and the Hellenistic world; the Middle Persian tradition of "the accursed Alexander" beside the Iskandar of later Persian epic; admiring and hostile modern historians side by side.
- Close the volume: answer "stop following or stop leading?", and invite the reader to argue the opposite. Compare briefly with Napoleon's "worse or harder?"

### Sources to try for Volume 2

Check that each exists, is readable and says what you cite.

- **Ancient texts in public-domain translation.** Arrian (Chinnock's translation on Project Gutenberg or Wikisource); Plutarch's _Life_ and _Moralia_ (Perrin's and Babbitt's Loeb translations on LacusCurtius); Curtius Rufus (Rolfe's Loeb on LacusCurtius); Diodorus 17 (LacusCurtius); Justin (Watson's translation); Polybius and Livy for the Hannibal counter-cases. Confirm each translation's copyright status before quoting.
- **Non-Greek evidence.** The Babylonian astronomical diary for 331 BCE and Babylonian chronicles (Livius.org); Encyclopaedia Iranica (already the profile's source, Briant's article) for the Persian side and the later Iranian tradition.
- **Scholarship, for the debates.** Bosworth, Badian, Briant, Heckel, Green, Lane Fox, Tarn, Engels, Worthington, Carney (on the court and the royal women). Use what is lawfully readable (open articles, publisher pages, reviews, Internet Archive where permitted) and cite only that.
- **Already used by this site.** The Alexander collection's studies and their sources in `data/research/alexander.json`. Re-read what you cite.
- **Psychology.** As named in the curriculum, rule 3 applying.

### Phases for Volume 2

- **Phase 0.** Above.
- **Phase 1, pilot.** Lessons 0, 2 and 6: the orientation, one strength and the refusal. `Quiz` takes `courseSlug="leadership/alexander-the-great"`. The routes already exist, so only the volume data ships. Stop for me to judge whether the format still works with ancient sources.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order, one commit each after my approval.
- **Phase 3, integration.** Should need no new code: check the hub, the volume page's strength-and-shadow table, profile and study links, search and the sitemap in the browser, and add a README feature line.
- **Phase 4, optional, ask first.** Up to three Decision Room scenarios (candidates: the night attack before Gaugamela; Tyre, besiege or bypass; at the Hyphasis, push on or turn back), each with exactly one historical option in varied position. Propose missing studies (Thebes 335, Halicarnassus, the Malli town) and profiles (Parmenion, Antipater, Spitamenes).

---

## Volume 3: Leadership Lessons from the Serbian Supreme Command, 1914–1918

Begin only after Volume 2 is approved. Run its own Phase 0 evidence pass first (`docs/LEADERSHIP_EVIDENCE_SERBIA.md`), and use the multi-commander change agreed in Volume 2's Phase 0.

### The question that organises the volume

In 1914 a small army, just out of two Balkan Wars and short of shells, defeated two invasions. In 1915 it lost its whole country, crossed the Albanian mountains in winter, and in 1918 broke through at Dobro Pole and marched home. Every lesson adds evidence to one question:

> **Did its commanders make Serbia's endurance, or did they keep from wasting it?**

The candidate answers: the quality of the high command (Putnik's reading of the enemy, Mišić's timing); the army itself (Balkan War veterans, peasant soldiers fighting for their homes); the enemy's errors (Potiorek's overreach, Austria-Hungary's war on two fronts); and the allies (French shells in 1914, the evacuation in 1916, the Salonika armies in 1918). Also ask the second question this volume is uniquely placed to answer: when command is shared among several people, who actually decided?

### Traps specific to the Serbian Front

All entries are from memory. Trace each one.

- **Commemorative writing.** The voivodes are national heroes, and Serbian popular writing tends to the epic. Yugoslav-era historiography had its own politics, especially about the dynasty and the Black Hand. Read the Austro-Hungarian official history (_Österreich-Ungarns letzter Krieg_) and Allied observers beside Serbian accounts.
- **Memoirs written later.** Mišić's memoir and accounts by Stepanović and others were written after the war and settle scores, including with each other and with the Supreme Command.
- **Witnesses with a commission.** R. A. Reiss documented Austro-Hungarian atrocities of 1914 at the Serbian government's invitation. His evidence is serious and his position must still be stated.
- **The 1,300 corporals.** The student volunteers sent to the front as corporals in late 1914 are a powerful national story. Trace what the record shows about their number, training and effect before building on it.
- **Sayings and orders** attributed to Putnik, Mišić and Stepanović in popular collections: use one only with a traced origin. Translate Serbian in your own words without quotation marks.
- **Putnik's illness.** He was ill through much of the war and was carried through the retreat; do not explain any decision by it unless a source does.
- **The other side's conduct.** The Carnegie Endowment's 1914 report on the Balkan Wars records crimes by all sides, the Serbian army among them. The ledger lesson must include it.

Sources in Serbian, German and French are expected. Record each source's language in the audit. The Serbian Front collection's sources (`data/research/serbian-front.json` and its `docs/SOURCE_AUDIT.md` sections) are a starting point; re-read what you cite.

### The curriculum

Every slug below exists today: `cer`, `syrmia-1914`, `drina-1914`, `romanija-1914`, `kolubara`, `belgrade-1915`, `invasion-of-serbia-1915`, `serbian-retreat-1915`, `mojkovac`, `kajmakcalan`, `monastir-1916`, `toplica-uprising`, `dobro-pole`, `liberation-of-serbia-1918`, with the campaigns `serbian-campaign-of-1914`, `serbian-campaign-of-1915`, `macedonian-front` and `occupation-of-serbia`, and the exercises `where-the-blow-falls`, `give-up-the-capital`, `november-1915` and `where-to-break-the-front`.

#### Orientation

**0. `how-to-read-the-serbian-front` — Heroes, memoirs and the enemy's files**

- Purpose: the traps above, the collective subject (a supreme command, not one man), and the volume's two questions.
- Episodes: `cer` as the first Allied victory of the war and how it is remembered, `kolubara` and the 1,300 corporals as a source check, `serbian-retreat-1915` and its imagery.
- Psychology: collective memory and national narratives (Liu and Hilton 2005, theory).

#### Part I. Judgement, 1914

**1. `where-will-the-blow-fall` — A central position against an unknown axis**

- Claim: when the enemy's main axis cannot be known, a central position that delays commitment is worth more than a forward guess, provided reconnaissance can tell you in time.
- Episodes: `cer` (Putnik expected the main attack from the north and shifted west), `drina-1914`. Link `where-the-blow-falls`.
- Counter-case: `franz-conrad-von-hotzendorf`, who sent an army toward Serbia and then away to Galicia; `oskar-potiorek`.
- Link Napoleon's `plan-for-being-wrong`.

**2. `when-allies-ask-you-to-attack` — Syrmia and Romanija**

- Claim: when a stronger ally asks a small army to attack, its goodwill must be weighed against the small army's survival, and the cost of agreeing may fall on one division.
- Episodes: `syrmia-1914` (the crossing into Austro-Hungarian territory in September), `romanija-1914` (the advance toward Sarajevo and the retreat).
- Counter-case: `ferdinand-foch` managing allies in 1918, from the coalition's centre rather than its edge.
- Psychology: likely `base: "none"`; this is a strategist's lesson.

**3. `the-capital-or-the-army` — Giving up Belgrade**

- Claim: when the army is the last thing that cannot be replaced, giving up a capital can be the condition of keeping the war.
- Episodes: `kolubara`, the shortened front and Belgrade abandoned at the start of December 1914, the shells that arrived from France. Link `give-up-the-capital`.
- Counter-case: `mikhail-kutuzov` and Moscow, as already used in the Napoleon volume; build on it, do not repeat it.
- Shadow: 1915, when giving up ground no longer saved the army's position.

**4. `the-subordinate-who-was-right` — Mišić on Suvobor**

- Claim: when the commander nearest the troops reads their state better than headquarters, the best decision may be to let him overrule the plan, and to share responsibility for the result.
- Episodes: `kolubara` (Mišić's insistence on withdrawing the First Army to rest and regroup, Putnik's consent, the counteroffensive that followed).
- Who says so: Mišić's own memoir and its stake; accounts more favourable to Putnik.
- Counter-case: `oskar-potiorek`, pressing exhausted armies on toward a symbolic capital. Cross-volume: Davout's rejected plan at Borodino.
- Psychology: leader openness and upward voice (Detert and Burris 2007).

#### Part II. Sharing command

**5. `command-from-a-sickbed` — Directing a war from a distance**

- Claim: command from a distance works when subordinates are experienced, trusted and know the intent, and fails where the commander must see for himself.
- Episodes: `cer` (Stepanović's initiative), `kolubara`, `drina-1914` (Bojović wounded, heavy losses).
- Contrast: Napoleon's `the-bottleneck`, the opposite arrangement.
- Psychology: autonomy and trust in teams; prefer a review. Keep Putnik's illness in rule 6's limits.

**6. `who-decided` — The voivodes, the regent and the government**

- Claim: in a shared command, the organisation chart says less than who could actually stop whom.
- Episodes: relations among Putnik, the army commanders, Prince Regent Alexander (formally commander-in-chief) and Pašić's government across 1914–1915; `invasion-of-serbia-1915`.
- Merge candidate with lesson 5 if the evidence pass finds too little.
- Counter-case: `paul-von-hindenburg` and `erich-ludendorff`, where the nominal and the real commander were also different men.

#### Part III. Catastrophe, 1915

**7. `november-1915` — When every option loses**

- Claim: when no option can save the position, leadership is the choice of what to preserve.
- Episodes: `belgrade-1915`, `invasion-of-serbia-1915` (the German, Austro-Hungarian and Bulgarian attack), the options of a last battle in Kosovo, a breakthrough south toward the Allies, or a retreat to the Adriatic. Link `november-1915`.
- Counter-case: `august-von-mackensen`, the attacker who planned it; cross-volume: the one bridge at Leipzig.

**8. `the-retreat-that-kept-an-army` — Albania and Corfu**

- Claim: shared hardship keeps the bond between leaders and led, but it cannot by itself keep an army alive.
- Episodes: `serbian-retreat-1915` (king, government and Putnik sharing the retreat; Austro-Hungarian prisoners marched with it; the young recruits), `mojkovac` (the Montenegrin rearguard), the Allied evacuation, Corfu and Vido.
- Cross-volume: this was the counter-case in Napoleon's `when-the-leader-leaves`. Go deeper here: what did the evacuation contribute that presence could not?
- Cost: as rule 9.

**9. `after-the-chief` — Putnik's removal and a command that continued**

- Claim: an organisation that has shared command can survive the loss of its chief, but the way he is removed tells those who remain what failure will cost them.
- Episodes in prose: Putnik's replacement after the retreat and his death in exile; Bojović's and then Mišić's tenure as chief; the Salonika trial of 1917 and the execution of Dragutin Dimitrijević, as power consolidated in exile.
- Psychology: scapegoating of leaders after failure; check what the research actually supports before using it.

#### Part IV. The return

**10. `a-near-goal` — Rebuilding on Corfu and Kajmakčalan**

- Claim: a defeated army recovers when it is re-equipped and given a near, concrete goal, and that goal can cost more than its strategic value.
- Episodes: reorganisation on Corfu, the Salonika front, `kajmakcalan` (the first return to Serbian soil), `monastir-1916`.
- Psychology: `base: "none"` unless a sound source is found; do not reach for post-traumatic growth.

**11. `where-to-break-the-front` — Dobro Pole**

- Claim: when a coalition's junior partner knows the ground best, it must make its case in the senior partner's terms, and then deliver.
- Episodes: `dobro-pole` (attacking where the mountains looked strongest; Mišić, Franchet d'Espèrey, and the earlier lobbying by Guillaumat), `liberation-of-serbia-1918`. Link `where-to-break-the-front`.
- Counter-case: `ferdinand-foch` and `amiens-1918`, the same year from the senior partner's chair.

**12. `the-people-left-behind` — The Toplica uprising**

- Claim: when a distant command encourages action among people it cannot protect, the cost falls on them, and timing is the commander's responsibility even when events outrun orders.
- Episodes: `toplica-uprising`, `occupation-of-serbia`, `kosta-pecanac` sent from Salonika to prepare resistance; Bulgarian and Austro-Hungarian reprisals.
- Historian's check: Pećanac's later collaboration in the Second World War must not colour the 1917 evidence, nor be hidden.

**13. `the-ledger-of-survival` — What endurance cost, and who else paid**

- Material: typhus in 1915, the retreat, Vido, civilians under occupation and in reprisals, Austro-Hungarian atrocities of 1914 (Reiss), the Serbian army's conduct in the Balkan Wars (Carnegie report), the Salonika trial, and the regent's later rule as king (the profile already records the 1929 dictatorship).
- Close the volume: answer "made it or kept from wasting it?" and "who decided?", and invite the reader to argue the opposite. Compare with Napoleon's and Alexander's answers.

### Sources to try for Volume 3

- **Already used by this site.** The Serbian Front studies, `data/research/serbian-front.json`, Bjelajac's 1914-1918-online article, Britannica on Putnik and Peter I, the Ministry of Defence of Serbia articles on the voivodes.
- **Documents and official histories.** _Österreich-Ungarns letzter Krieg_ (digitised volumes), Serbian Supreme Command orders where published, Reiss's reports (English and French editions of 1916), the Carnegie report of 1914.
- **Memoirs.** Mišić, Stepanović, Allied officers and medical missions in Serbia in 1915.
- **Scholarship.** DiNardo on the 1915 invasion, Mitrović, Gumz on the occupation, the 1914-1918-online encyclopedia, and Serbian academic work available openly. Cite only what is lawfully readable.

### Phases for Volume 3

As for Volume 2: evidence pass, pilot (lessons 0, 4 and 8), batches, integration, then optional exercises (candidates: Syrmia, cross or decline; Corfu, which goal first) and proposed profiles (Prince Regent Alexander's command role in more depth, Franchet d'Espèrey, Guillaumat).

---

## Later volumes (propose; do not begin)

Write these into `docs/PRODUCT_ROADMAP.md` as proposals when Volume 3 is done, each with what it needs first.

| Volume                                          | Question it could ask                                             | Needs first                                                                                                                                                                                                    |
| ----------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foch and Haig, the Western Front                | Did the generals learn, and was the learning worth its price?     | Nothing essential (eight studies). Optional: a Pétain study on the 1917 mutinies, a Cambrai-to-Hamel thread. Haig's diaries are in copyright; quote only briefly                                               |
| Wellington                                      | Can caution be a form of daring?                                  | The Peninsular studies already proposed (Bailén, Corunna, Talavera, Bussaco and Torres Vedras, Salamanca, Vitoria). Gurwood's _Dispatches_ are public domain                                                   |
| Julius Caesar                                   | What does a commander who writes his own record want us to learn? | Studies of Bibracte, the Sabis, Gergovia, Dyrrhachium, Ilerda, Thapsus and Munda. A natural pair with Napoleon's orientation lesson                                                                            |
| Hannibal and Scipio, a paired volume            | Why did the better tactician lose the war?                        | Studies of the Ticinus, the Trebia, Trasimene, New Carthage, the Metaurus and Ilipa. Polybius and Livy are public domain                                                                                       |
| Grant (with Lee as the counter-volume)          | Is persistence a strategy or a lack of one?                       | Studies of Fort Donelson, Shiloh, Chattanooga, the Wilderness, Spotsylvania, Petersburg and Appomattox. Grant's _Personal Memoirs_ are public domain; the Lost Cause is the source trap; slavery is the ledger |
| William Slim                                    | How do you rebuild an army that has learned to lose?              | Studies of the 1942 retreat from Burma, the Arakan, and Meiktila and Mandalay. _Defeat into Victory_ is in copyright                                                                                           |
| Yi Sun-sin                                      | How do you lead when your own government is the greater danger?   | Studies of Okpo, Sacheon, Myeongnyang and Noryang beside `hansan-island`. Find a readable translation of his war diary                                                                                         |
| Erich von Manstein, only with explicit approval | Can operational brilliance be separated from what it served?      | Studies of Sevastopol and Third Kharkov. _Lost Victories_ is a self-serving memoir; the "clean Wehrmacht" myth and his war-crimes conviction must frame the whole volume                                       |

### A cross-volume feature to propose after Volume 2 (ask first)

Once two volumes exist, the same problems recur: dissent, leaving, succession, the ledger, presence, allies. Propose an optional `themes` field on lessons and a `/leadership/themes/` page that sets the volumes' answers side by side, so a reader can compare how Napoleon, Alexander and the Serbian Supreme Command met the same problem. Show me the type and page design and the effect on list-page payloads before building anything.

## Checks and bookkeeping for every batch

As in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`:

- Read every source cited, then draft; source-check the draft against what was read and correct overreach.
- Add a `docs/SOURCE_AUDIT.md` section per batch: every source, how it was read, language, tier and limits, each saying or legend traced and its result. Run a link check on new URLs.
- Update the curriculum-order test in `tests/unit/leadership.test.ts`, the lesson count in the end-to-end test, hard-coded counts elsewhere, `docs/PRODUCT_ROADMAP.md` and this prompt's status line.
- Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run db:seed`, `npm run build` and `npm run test:e2e:chromium`. All must pass before you ask me to commit.
- Confirm the built sizes of `/battles`, the home page and `/commanders` are unchanged, and spot-check two new lessons at desktop and 375px, light and dark.
- Show the diff summary and wait for approval before committing. Push only on an explicit go-ahead. The README release row for each commit goes in the next commit.

## Definition of done, per volume

- The volume is live with its orientation and every lesson that survived its evidence pass; any dropped or merged lesson agreed with me.
- Every factual claim traces to a source read and audited; every saying used has a named origin.
- Each lesson shows the three specialists separately, carries a shadow, a counter-case and scope conditions, and contributes to the volume's question, and lessons that meet a Napoleon theme build on it rather than repeat it.
- No psychiatric labels, casualty figures, invented quotations or commander ratings.
- List-page payloads unchanged, all checks pass, docs and counts consistent, each batch committed separately with my approval.

Start with Phase 0. Show me the multi-commander change, the Alexander evidence table and any corrections to this plan before writing lessons.
