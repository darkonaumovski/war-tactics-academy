# Prompt: Leadership Lessons from Julius Caesar (Volume 6)

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (20 November 2026):** Phase S is done. The user chose Caesar from the later volumes listed in `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, ahead of Hannibal and Scipio and Grant, and then the six suggested studies, which are in the catalog: Bibracte and the Sabis under a new campaign, `caesar-s-conquest-of-gaul-58-53-bce`, Gergovia under `gallic-revolt-of-52-bce`, and Ilerda, Dyrrhachium and Munda under `caesar-s-civil-war`, with a source audit section of their own. Caesar's profile now links eight studies, the template's minimum. The readiness analysis below was made from the catalog on 19 November, before those studies. Phase 0 is done (`2e2a68c`): the evidence pass in `docs/LEADERSHIP_EVIDENCE_CAESAR.md` merged lesson 7 into lesson 5, for twelve lessons, and proposed a revision of the profile. The pilot (batch C1, `d9c626f`) is live: lessons 0, 3 and 5. Batch C2 (`eee3ade`) is live: lessons 1, 2 and 4. Batch C3 (`ccc286a`) is live: lessons 6, 7 and 8. Batch C4 (`bffb564`) is live: lessons 9, 10 and 11, completing the twelve lessons, and the volume is no longer listed as in progress. Phase 3 is done: the hub, the strength-and-shadow table, Caesar’s profile, the counter-case profiles, the linked studies, search and the sitemap all pick the volume up without new code, and the README has its feature line (`b358357`). Batch T5 adds the volume to the comparison page as a sixth column: twelve entries from eleven lessons in eight existing problems, with no new problem, because the Rubicon lesson's question of legitimacy is what turns victory into a settlement. Awaiting approval: the profile revision and Phase 4.

## Why Caesar, and what is missing (readiness analysis, 19 November 2026)

`docs/LEADERSHIP_VOLUME_TEMPLATE.md` asks for a profile and at least eight engagement studies, so lessons link to studies instead of retelling them. No remaining candidate meets that bar: Caesar and Hannibal link two studies each, Scipio, Grant, Slim and Yi Sun-sin one each, and Manstein five but only with explicit approval. Caesar was chosen because his sources are public domain and readable online in full, the Roman collection already frames his wars, and his own _Commentaries_ make the orientation lesson the strongest test yet of the site's method of reading a record by who made it.

Counting `battleSlugs` for `julius-caesar` in `data/commanders.json`:

| Material                     | In the catalog now                                                                                                                                                                                                                                        | Gap                                                                                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Studies he commanded in      | 2: `alesia` (siege, 52 BCE) and `pharsalus` (48 BCE)                                                                                                                                                                                                      | Six more to reach eight. Nothing from the Gallic campaigns of 58–53, no defeat of his own, no battle of the civil war outside Greece                                                        |
| Studies he shaped or watched | `carrhae` (Crassus's disaster in 53, which ended the triumvirate's balance), `actium` (his heir's war, 31)                                                                                                                                                | Context only                                                                                                                                                                                |
| Campaigns and wars           | Wars `gallic` and `roman-civil-wars` in the Rome collection; campaign narratives `gallic-revolt-of-52-bce` (Cenabum to Alesia) and `caesar-s-civil-war` (the Rubicon to Munda)                                                                            | No campaign for the conquest of 58–53 BCE: Phase S must decide whether a new campaign narrative is needed or the war page suffices                                                          |
| Profile                      | `julius-caesar`, a concise profile sourced to Jona Lendering's Livius article; it already names Gergovia and Dyrrhachium as setbacks and calls his own accounts self-interested                                                                           | Sound but brief; the evidence pass should say whether it needs a revision like Wellington's (`4b891b1`)                                                                                     |
| Counter-case profiles        | `pompey`, `hannibal-barca`, `scipio-africanus`, `alexander-the-great`, `augustus`, `marcus-agrippa`, `arminius`, `napoleon-bonaparte`, `arthur-wellesley`, and the Leadership volumes' other subjects                                                     | No profiles of Vercingetorix, Labienus, Crassus, Cato, Brutus or Mark Antony; refer to them in prose, or propose profiles in Phase 4                                                        |
| Learning material            | Decision exercises `two-fronts-at-alesia` and `pompeys-cavalry`; the Rome courses `classical-warfare` and `rome-at-war`                                                                                                                                   | Link the exercises; do not duplicate them                                                                                                                                                   |
| Sources used for the studies | Caesar, _Gallic War_ 7 (Perseus; LacusCurtius) and _Civil War_ 3.88–99 (McDevitte and Bohn, via Livius); Plutarch's _Lives_ of Caesar and Pompey, Appian's _Civil Wars_ 2 and Cassius Dio 40–41 (Loeb translations on LacusCurtius); the Alésia MuséoParc | Suetonius, Cicero's letters, Hirtius and the later _Bellum_ books, and any scholarship on the Gallic side have not been read for this site yet. They are the core of the orientation lesson |

**Verdict:** the strongest remaining subject for the method, with the most readable sources, and the furthest from ready in studies. A studies phase of six engagements, chosen to fill the gaps above rather than to add victories, would complete it.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has five complete volumes: Napoleon (`data/leadership/napoleon.ts`), Alexander the Great (`data/leadership/alexander-the-great.ts`), the Serbian Supreme Command (`data/leadership/radomir-putnik.ts`), Foch and Haig (`data/leadership/douglas-haig.ts`) and Wellington (`data/leadership/arthur-wellesley.ts`). They were built under `docs/LEADERSHIP_LESSONS_PROMPT.md`, `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md` and `docs/LEADERSHIP_WELLINGTON_PROMPT.md`, and generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`. A comparison page (`/leadership/compare/`, data in `data/leadership/problems.ts`) sets eleven recurring problems beside the lessons that test them.

Your job is to write **Volume 6: Leadership Lessons from Julius Caesar**, about Gaius Julius Caesar as a commander, from his Gallic command in 58 BCE to Munda in 45. His earlier career and his dictatorship enter only where they bear on his command and on what it left behind.

Work, as in the earlier volumes, as three specialists reading the same evidence, with their voices kept separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what Caesar could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses the dead.

A lesson is finished when each specialist would sign it. If they disagree, show the disagreement.

The curriculum below is a **research plan, not a source**. Dates, episodes, attributions, passages, chapter references and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## What this volume must add, not repeat

The earlier volumes already teach inheritance, intuition, plans that survive error, tempo, presence, recognition, delegation, the personal headquarters, rivals who learn, victory without settlement, stopping, dissent, the last reserve, leaving, succession, the consent of followers, ruling the defeated, shared command, coalitions, learning under attrition, caution as arithmetic, preparation, supply, the costly storm, the government at home and who pays for a strategy. Caesar earns a volume by what he shows that they could not:

- **A record written by the commander, in the third person, while the war was still being fought.** Napoleon wrote too much after defeat, Alexander's own words are lost, and Wellington chose the form of letters. Caesar wrote the main account of his own wars, year by year, for readers in Rome who would vote on his future, and it is still the principal source for most of them.
- **Speed as a habit of command,** and the risks it ran: a commander who repeatedly moved before he was ready and before his enemy expected.
- **An army whose loyalty was to him rather than to the state,** built by pay, plunder, recognition and shared danger, and then used against the state.
- **Clemency as policy.** The same commander who pardoned Roman enemies in the civil war ordered massacres and mass enslavement in Gaul. Both were choices, and both were reported by him.
- **A rival who knew him.** Pompey had fought alongside him in politics and against him at Dyrrhachium and Pharsalus; the civil war was a contest between two commanders who could read each other.
- **Legitimacy.** He crossed the Rubicon with an army that would follow him into a war against the Republic it served, and his command cannot be separated from that choice.

Where a lesson meets an earlier volume's theme, link that lesson in prose and build on it; do not restate its psychology or its argument. In particular: link Napoleon's orientation and tempo lessons, Alexander's lessons on the front rank, on Opis and on succession, and Wellington's lessons on the record, the government at home and who pays.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check (Britannica refuses scripts and needs the browser). Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Paywalled research** may be cited only for what its abstract states, and the audit must say "abstract only".
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty or army figures, no invented quotations, no guessed troop coordinates, no numerical commander ratings. Ancient figures for armies, the dead and the enslaved are especially unreliable; give none of them, and say so where a source's number is the point (the elder Pliny's count of Caesar's victims, for example). Use `fact`, `interpretation` and `uncertainty` honestly. `leadershipVolumeSchema` enforces much of this; add this volume's banned sayings to it.
5. **Quotations** only from a translation you read, with its book and chapter and its chain of transmission ("as Suetonius reports it", "as Plutarch tells it"). Caesar's _Commentaries_ are his own words in a translator's English; Suetonius, Plutarch, Appian and Dio wrote one to three centuries later, and say so. Your own rendering of Latin or Greek is a paraphrase and takes no quotation marks. Speeches in the ancient histories are their authors' compositions, as the Alexander volume treated them.
6. **No retrospective diagnosis.** No psychiatric or personality labels. The ancient reports of his illness (Suetonius and Plutarch speak of seizures) are claims by later writers; present them as such and draw no inference about his command from them.
7. **One case proves nothing.** Every principle is a conditional claim with its scope, and every lesson includes a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.** He did not know at Gergovia how the assault would go, or at Dyrrhachium that Pompey would not follow up his victory.
9. **The human cost stays in the frame,** stated as fact, not spectacle, and without figures: the Helvetii and the Usipetes and Tencteri in 58 and 55, the people of Avaricum in 52, the hands cut off at Uxellodunum in 51, the enslaved of Gaul, the soldiers of both sides in the civil war, and Rome's own citizens.
10. **Stay even-handed between traditions.** The _Commentaries_ are a case for the defence; Cicero's letters, Suetonius and Cato's circle preserve hostile judgements; Lucan's poem is hostile and literary; the Gallic side survives almost only through Roman authors and archaeology. Neither the admirers (from Napoleon's _Précis_ to modern biographers) nor the debunkers set the narrative.
11. **No management-book voice.** Conditions and questions, not instructions.
12. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
13. Match the existing code style. Don't refactor unrelated code. Add engagements and commanders only in Phase S below, and only after I approve the list.

---

## The question that organises the volume

Caesar won a decade of wars in Gaul and four years of civil war, lost two engagements he chose to fight, and wrote the main account of nearly all of them himself. Every lesson adds evidence to one question:

> **What won Caesar his wars: his speed, his soldiers, his enemies' divisions, or his own account of them?**

The candidate answers: **speed**, the habit of moving before his enemies were ready, which his own pages celebrate and which nearly ruined him more than once; **his soldiers**, an army bound to him by pay, loot, recognition and shared danger, which followed him across the Rubicon; **his enemies' divisions**, Gallic peoples who fought each other as often as Rome and a Senate whose generals could not agree; and **his account**, a record that shaped what Rome believed about each year's fighting and still shapes what we believe. Warn the reader early that the _Commentaries_ argue for the first two answers and say little of the third, and that the fourth is the hardest to see because it is the source of most of the others. Do not choose in advance.

## Traps specific to Caesar

All entries are from memory. Trace each one and record the result in the audit. The orientation lesson teaches the most instructive.

**His record is his own.** The _Gallic War_ covers 58–52 BCE in seven books; Aulus Hirtius added an eighth after Caesar's death. The _Civil War_ breaks off in 48; the _Alexandrian_, _African_ and _Spanish War_ were written by officers of his. Suetonius reports Asinius Pollio's opinion that the _Commentaries_ were written carelessly and without regard to truth, and Cicero praised their plain style in his _Brutus_. Find both passages before using either.

| Saying or story                                  | Problem to resolve                                                                                                                                                                   |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Veni, vidi, vici" (Zela, 47)                    | Suetonius says it was carried on a placard in his Pontic triumph; Plutarch has it in a letter. Present it with its reporter and its purpose, as a boast written for Rome             |
| "The die is cast" at the Rubicon                 | Suetonius gives a Latin phrase; Plutarch says he spoke a Greek proverb, from Menander. Trace both; do not use the familiar Latin form as his words without its reporter              |
| "Et tu, Brute"                                   | Shakespeare's. Suetonius says he died in silence, or, by some accounts, spoke a Greek phrase to Brutus. Ban the Latin form; off-topic for command in any case                        |
| "Caesar's wife must be above suspicion"          | Plutarch's anecdote about his divorce; off-topic for command. Ban unless traced and needed                                                                                           |
| First in a village rather than second at Rome    | Plutarch's anecdote of a Gallic or Alpine village. Use only with its reporter, and only if a lesson needs ambition                                                                   |
| Men believe what they wish to believe            | A sentence of the _Gallic War_ (book 3, as far as I know). Quote only with its chapter                                                                                               |
| Fortune in war                                   | Several sayings about fortune are attributed to him; trace each to a chapter of the _Commentaries_ or ban it                                                                         |
| Pliny's count of the people his wars killed      | The elder Pliny's _Natural History_ gives a total for his victims in battle. It is a figure, and an ancient one: name the passage as evidence of how Romans reckoned, give no number |
| The tenth legion and the eagle-bearer in Britain | The standard-bearer of the tenth leaping into the sea is in the _Gallic War_ (book 4). Present it as Caesar's account of his men                                                     |
| The shield at the Sabis                          | Caesar's own account of seizing a shield and going to the front rank (book 2). It is his record of himself; Plutarch and others repeat it                                            |
| "Quirites" and the mutiny of 47                  | Suetonius, Appian and Dio tell of his ending a mutiny by addressing his soldiers as citizens rather than comrades. Compare the versions before using it                              |
| Napoleon's verdicts on Caesar                    | Napoleon dictated a _Précis des guerres de César_ on Saint Helena. Use it only if a text is found and read, and as one commander's reading of another                                |

**Claims you must not use:** retrospective diagnoses, including epilepsy as an explanation of anything he did; the popular-psychology list in the Napoleon prompt (ego depletion, power posing, Myers-Briggs, the 10,000-hour rule, popular Dunning–Kruger, Yerkes–Dodson as a curve); and modern totals for the dead and enslaved of the Gallic War presented as fact.

---

## Phase S, studies first (needs my approval of the list)

Propose six new engagement studies, chosen to fill the gaps in the readiness table, and wait for my choice. Candidates, in rough order of what they add:

| Candidate                                   | What it adds to the volume                                                                                      | Sources to try                                                              |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Gergovia, 52 BCE**                        | His defeat in Gaul, and how he explains it (troops who went beyond the signal to retire)                        | _Gallic War_ 7.36–53; Plutarch; Dio 40; the archaeological site at Gergovie |
| **Dyrrhachium, 48 BCE**                     | His defeat by Pompey in the siege lines, and what he did next                                                   | _Civil War_ 3.41–75; Plutarch _Caesar_ and _Pompey_; Appian 2; Suetonius    |
| **The Sabis (against the Nervii), 57 BCE**  | Surprise, presence in the front rank, and an army that held because its officers and men knew their work        | _Gallic War_ 2.16–28; Plutarch; Dio 39                                      |
| **Bibracte (against the Helvetii), 58 BCE** | The first campaign: a pretext, a pursuit, a battle that nearly went wrong, and a people sent home               | _Gallic War_ 1.2–29; Plutarch; Dio 38; the Bibracte museum                  |
| **Ilerda, 49 BCE**                          | A civil-war campaign won by manoeuvre and supply without a general battle, and clemency to the surrendered army | _Civil War_ 1.37–87; Appian 2; Dio 41                                       |
| **Munda, 45 BCE**                           | The last battle, nearly lost, and the end of clemency                                                           | _Spanish War_ (by an officer of his); Plutarch; Appian 2; Dio 43            |
| **Avaricum, 52 BCE**                        | A siege in winter, hunger in his own army, and the massacre of the town                                         | _Gallic War_ 7.13–31                                                        |
| **Thapsus, 46 BCE**                         | The African campaign and a battle begun, by some accounts, without his order                                    | _African War_; Plutarch; Appian 2; Dio 43                                   |
| **Uxellodunum, 51 BCE**                     | The end of resistance, and the punishment of the defenders                                                      | _Gallic War_ 8 (Hirtius)                                                    |

My suggestion, for you to test: Gergovia, Dyrrhachium, the Sabis, Bibracte, Ilerda and Munda, which bring in two defeats, a surprise, the first campaign, a bloodless one and the last, with Avaricum or Uxellodunum as alternatives if the cost lessons need a study of their own. Each study follows the existing format exactly (`data/research/rome.json`: fourteen sections, four or more phases, two perspectives, at least four sources read for it, no figures). Rows go in `data/battles/rome.ts` under the wars `gallic` and `roman-civil-wars`. Check how campaigns are assigned there: Gergovia and Avaricum belong with `gallic-revolt-of-52-bce`, the civil-war engagements with `caesar-s-civil-war`, and the campaigns of 58 and 57 have no campaign yet; propose whether to add one, following the campaign narratives in `data/campaign-details.ts`. Link Caesar's and Pompey's profiles, extend the campaign narratives and the war page, update counts and tests, and add a `docs/SOURCE_AUDIT.md` section, as the Peninsular and Wellington studies did (`87f59fa`, `64dd74a`, `48763c6`). One commit for the studies, after my approval, before Phase 0.

**Done (20 November 2026).** Reading corrected three entries in the table above: Plutarch's _Life of Caesar_ does not mention Gergovia; the _Spanish War_ is by an unknown author, not demonstrably an officer of Caesar's; and Appian's _Civil Wars_ 2 does not cover Munda. The audit section lists what was read for each study.

The _Commentaries_ are on LacusCurtius (Edwards's Loeb translation of the _Gallic War_, Peskett's of the _Civil War_), on Perseus, and in McDevitte and Bohn's translation on Project Gutenberg and Wikisource. LacusCurtius also has the Loeb Plutarch, Suetonius, Appian and Dio. Chapter numbers are the locators.

## Phase 0 (one commit, after Phase S, before any lesson)

Re-read `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, `data/leadership/index.ts`, the volume object and first two lessons of `data/leadership/arthur-wellesley.ts` (the most recent volume), `lib/types.ts`, `lib/validation.ts`, `tests/unit/leadership.test.ts`, `components/views/leadership.tsx` and the `app/leadership/` routes. Note current counts; other work may have landed.

1. **No type change should be needed.** The volume belongs to one commander, so `commanderSlug: "julius-caesar"` sets the route (`/leadership/julius-caesar/`) and the profile link. Confirm this, and tell me if the code argues otherwise.
2. **Evidence pass.** Write `docs/LEADERSHIP_EVIDENCE_CAESAR.md` in the format of `docs/LEADERSHIP_EVIDENCE_WELLINGTON.md`: grade every planned lesson strong, adequate or thin on its history and its psychology, trace every saying in the traps table, list what has and has not been read, and recommend merges and drops. Say whether the profile needs revising, and propose the revision for a later batch if it does.
3. **Scaffold** `data/leadership/julius-caesar.ts` with the volume object (`inProgress` set, no lessons) and the volume tests, with nothing going live until the pilot ships.

Show me the evidence table, any profile proposal and any corrections to this plan before writing lessons.

---

## The curriculum

Engagement slugs that exist today: `alesia` and `pharsalus`, with `carrhae` and `actium` as context, and the campaigns `gallic-revolt-of-52-bce` and `caesar-s-civil-war`. Slugs for Phase S studies are placeholders until the studies exist. Anything without a study is referred to in prose only. Counter-cases come from catalog commanders.

### Orientation

**0. `how-to-read-caesar` — A commander who wrote his own war**

- Purpose: the _Commentaries_ as yearly reports written in the third person for readers in Rome; what Hirtius and the officers who wrote the later books added; the later witnesses (Plutarch, Suetonius, Appian, Dio) and their sources, among them Asinius Pollio, who served with him and doubted his accuracy; Cicero's letters as a contemporary voice; the Gallic side, known almost only through Roman authors and archaeology; and the volume's question. Compare with the earlier orientations: Napoleon wrote after defeat, Alexander's words are lost, Wellington wrote letters and no memoir, and Caesar wrote the history of his wars while fighting them.
- Episodes: `gergovia` if studied (his account of his defeat against Plutarch's and Dio's), `alesia` (his account of his own engineering), Pollio's judgement as Suetonius reports it.
- Psychology: research on self-presentation or on third-person self-reference only if a sound review is read; `base: "none"` is acceptable.

### Part I. Speed and risk

**1. `celeritas` — Speed as a habit**

- Claim: moving before the enemy expects can decide a campaign, but only while the army can sustain the pace and the leader knows what lies ahead.
- Episodes: the Helvetii in 58 (`bibracte` if studied), the march to the legions in the winter of 52 (`gallic-revolt-of-52-bce`), the crossing to Greece in 48 before his whole army could follow.
- Shadow: the speed that left him short of supplies and men at Dyrrhachium.
- Counter-case: `hannibal-barca`, whose march into Italy was the boldest move of its century and did not win the war.
- Link the Napoleon lesson `tempo-and-the-decisive-point`; do not repeat its argument.

**2. `the-sabis` — Surprise, and the front rank**

- Claim: a leader who goes to the point of danger can steady an army in crisis, but only if the army's own officers and drill have already done most of the work.
- Episodes: the Sabis (`the-sabis` if studied), with Caesar's account of taking a shield and going forward; Munda (`munda` if studied), where Plutarch says he fought for his life.
- Shadow: a commander whose presence is the margin is a single point of failure.
- Counter-case: `alexander-the-great`; link `the-king-in-the-front-rank` and build on it rather than repeating it.

**3. `the-reverse-explained` — Defeat in his own words**

- Claim: how a leader explains a defeat shapes what the organisation learns from it, and an explanation that blames others' zeal protects the leader at the cost of the lesson.
- Episodes: `gergovia` and `dyrrhachium` if studied; his speeches to the army after each, as he reports them.
- Shadow: the same explanation that kept his army's confidence kept his own conduct out of question.
- Counter-case: `pompey` after Dyrrhachium, who did not follow up his victory; or `napoleon-bonaparte`'s bulletins, linking the Napoleon volume's orientation.

**4. `two-fronts` — Engineering under pressure**

- Claim: a besieger who fortifies against both the besieged and a relieving army can hold a position that should be untenable, if the labour can be done faster than the enemy can gather.
- Episodes: `alesia`; the lines at Dyrrhachium (`dyrrhachium` if studied), where the same method failed.
- Shadow: the cost of a siege falls first on those inside the walls; at Alesia, on the people Vercingetorix sent out, whom Caesar would not let through.
- Counter-case: from the catalog, a siege that failed for want of the same; propose one in the evidence pass. Link the exercise `two-fronts-at-alesia`.

### Part II. An army bound to him

**5. `my-soldiers` — Loyalty to the general, not the state**

- Claim: an army bound to its commander by pay, plunder and shared danger will follow him further than an army bound to an institution, including against that institution.
- Episodes: Vesontio in 58, where he ended a panic before Ariovistus by saying he would go on with the tenth legion alone, as he reports it; the crossing of the Rubicon; the mutiny of 47 and the word "citizens", in its several versions.
- Shadow: the Republic's armies became the property of their generals, and the civil wars that followed did not end with him.
- Counter-case: `alexander-the-great` at Opis; link the Alexander volume's lesson on the army's consent rather than repeating it.
- Psychology candidates: reciprocity and identification with a leader, only if a current review can be read.

**6. `lieutenants` — Delegation and its failures**

- Claim: delegating command to trusted lieutenants extends a commander's reach, but only while they share his purpose, and the most capable may leave him.
- Episodes: the destruction of Sabinus and Cotta's legion and Quintus Cicero's defence of his winter camp in 54; Labienus, his best lieutenant in Gaul, who went over to Pompey in 49 and fought him to Munda.
- Shadow: a command built on personal loyalty loses its best officers when loyalties divide.
- Counter-case: `gebhard-leberecht-von-blucher` and Gneisenau, or Wellington's `a-short-leash`; link, do not repeat.

**7. `pay-and-plunder` — What the soldiers were given**

- Claim: rewards bind followers to a leader, but the rewards of conquest are paid by the conquered, and what is promised must keep growing.
- Episodes: the enslaved and the booty of Gaul as his own pages and the later writers report them; the gifts promised in the civil war; the triumphs of 46.
- Shadow: the cost to Gaul, and the debts of the civil war.
- Counter-case: `napoleon-bonaparte`; link `what-people-will-do-for-recognition`.

### Part III. Enemies and allies

**8. `gaul-divided` — Using an enemy's divisions**

- Claim: a commander who can play an enemy's factions against each other can conquer more than his army could, until the enemy unites against him.
- Episodes: the Aedui as allies and their defection in 52; Vercingetorix's rising (`gallic-revolt-of-52-bce`, `alesia`); the Germans east of the Rhine as threat and pretext.
- Shadow: allies made by Rome were ruined by Rome.
- Counter-case: `arminius`, who united Germanic peoples against Rome and destroyed Varus's legions (`teutoburg`).

**9. `clemency` — Mercy as policy**

- Claim: mercy to a defeated enemy can win a war by making surrender safe, but only when it is credible and the enemy believes it will be honoured.
- Episodes: Corfinium and `ilerda` if studied in 49; the pardons after `pharsalus`; set against the Usipetes and Tencteri in 55, Avaricum in 52 and Uxellodunum in 51, as his and Hirtius's pages report them.
- Shadow: the men he pardoned killed him; the Gauls were not offered the same terms.
- Counter-case: `augustus`, whose proscriptions reversed the policy.

**10. `a-rival-who-knew-him` — Pompey**

- Claim: against an opponent who knows the leader's habits, the advantage goes to whoever can change them, but only if the other side does not adapt first.
- Episodes: `dyrrhachium` if studied; `pharsalus` and the hidden line against Pompey's cavalry; Pompey's death in Egypt.
- Shadow: a victory over a fellow Roman settled nothing about how Rome would be ruled.
- Counter-case: `pompey`; link the exercise `pompeys-cavalry` and the Napoleon lesson `your-rivals-are-learning`.

### Part IV. Beyond the battlefield

**11. `the-rubicon` — Command and legitimacy**

- Claim: a commander who turns his army against the authority that gave it to him may win the war and lose the legitimacy that made victory worth having.
- Episodes: the law that would have made him a private citizen open to prosecution; the Rubicon, in its versions; the dictatorship; the Ides of March.
- Shadow: the Republic did not survive his victory.
- Counter-case: `arthur-wellesley`, who served governments he despised; link Wellington's `the-government-at-home`.

**12. `the-ledger` — Answering the question**

- Purpose: weigh the evidence of the volume, answer "What won Caesar his wars?", and invite the reader to argue the opposite. Include Gaul and what conquest cost it, the civil war's dead on both sides, the Republic, and the record he left, which made him the model for later commanders from Napoleon on.
- Counter-case: `augustus`, his heir, who finished the work he began by other means.

### Sources to try

Check that each exists, is readable and says what you cite.

- **His own words, and his officers'.** Caesar, _Gallic War_ and _Civil War_ (Edwards and Peskett on LacusCurtius; Perseus; McDevitte and Bohn); Hirtius, _Gallic War_ 8; the _Alexandrian_, _African_ and _Spanish War_.
- **Contemporaries.** Cicero's letters (Shuckburgh's translation is public domain), his _Brutus_ on the _Commentaries_, and the speeches of 46–45 on Caesar's pardons.
- **Later writers.** Suetonius, _Divus Julius_ (Rolfe on LacusCurtius); Plutarch's _Lives_ of Caesar, Pompey, Cato the Younger and Crassus; Appian, _Civil Wars_ 2; Cassius Dio 38–44; Velleius Paterculus; Florus; Lucan's _Pharsalia_ as a hostile poem, not a history.
- **The Gallic side and archaeology.** The Alésia MuséoParc (already used), the Bibracte museum and the site of Gergovie; open archaeological reports where readable. Say plainly how little Gallic testimony survives.
- **Reference.** The 1911 Britannica, "Caesar, Gaius Julius" and the battle articles; Britannica's modern biography (browser only); Livius.org (Jona Lendering), already the profile's source.
- **Modern scholarship, for the debates.** Christian Meier, Matthias Gelzer, Adrian Goldsworthy and Kurt Raaflaub's work on the _Commentaries_ as propaganda; use only what is lawfully readable (open articles, reviews, publisher pages) and cite only that.
- **Already used by this site.** The `alesia` and `pharsalus` studies and the two campaign narratives, with their sources in `data/research/rome.json`. Re-read what you cite.
- **Psychology.** As named in the curriculum, rule 3 applying. Prefer reviews and meta-analyses to single studies.

### Phases

- **Phase S.** Studies first, above. One commit.
- **Phase 0.** Above. One commit.
- **Phase 1, pilot.** Lessons 0, 3 and 5: the record, the defeats in his own words and the army bound to him, which test the volume's question from both ends. `Quiz` takes `courseSlug="leadership/julius-caesar"`. The routes already exist, so only the volume data ships. Stop for me to judge.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order, one commit each after my approval.
- **Phase 3, integration.** Should need no new code: check the hub, the volume page's strength-and-shadow table, Caesar's profile, the counter-case profiles, study links, search and the sitemap in the browser, and add a README feature line. Then propose a comparison-page batch adding this volume's lessons to the existing problems (reading the record, presence, dissent, succession, allies, who pays) and any new problem the volume raises.
- **Phase 4, optional, ask first.** Up to three Decision Room scenarios, each with exactly one historical option in varied position and a study to link. Candidates: at Vesontio in 58, march on Ariovistus or wait; after Dyrrhachium in 48, withdraw into Thessaly or renew the siege; at Ilerda in 49, attack the Pompeians or starve them out. Propose missing profiles (Vercingetorix, Labienus, Crassus, Mark Antony) and any revision of Caesar's own profile.

## Checks and bookkeeping for every batch

As in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, with the procedures learned since:

- Read every source cited, then draft; source-check the draft against what was read and correct overreach.
- Add a `docs/SOURCE_AUDIT.md` section per batch: every source, how it was read, language and limits, each saying traced and its result. Run a link check on new URLs.
- Update the curriculum-order test in `tests/unit/leadership.test.ts`, the lesson count in the end-to-end test, hard-coded counts elsewhere, `docs/PRODUCT_ROADMAP.md` and this prompt's status line.
- Run `npm run lint`, `npm run typecheck` and `npm test`, then `npm run db:setup` before `npm run build` (the build reads the seeded database, and new pages are missing from `out/` without it), then `npm run test:e2e:chromium`. If the end-to-end web server's own build fails, build once, serve `out/` with `npm start`, and run Playwright with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000`. Stopping the backgrounded server can leave `scripts/serve-static.mjs` listening on port 3000; stop that process afterwards. Run `npx prettier --write` on any JSON a script has rewritten.
- Confirm the built sizes of `/battles`, the home page and `/commanders` are unchanged, and spot-check two new lessons at desktop and 375px, light and dark.
- Show the diff summary and wait for approval before committing. Push only on an explicit go-ahead. The README release row for each commit goes in the next commit.

## Definition of done

- Phase S's studies are live, and Caesar's profile links at least eight studies.
- The volume is live with its orientation and every lesson that survived its evidence pass; any dropped or merged lesson agreed with me.
- Every factual claim traces to a source read and audited; every saying used has a named origin and reporter, and the banned sayings are in the schema.
- Each lesson shows the three specialists separately, carries a shadow, a counter-case and scope conditions, and contributes to the volume's question; lessons that meet an earlier volume's theme build on it rather than repeat it.
- No psychiatric labels, casualty or army figures, invented quotations or commander ratings.
- List-page payloads unchanged, all checks pass, docs and counts consistent, each batch committed separately with my approval.

Start with Phase S. Show me the studies you propose, with what each adds and the sources you found for it, before writing any.
