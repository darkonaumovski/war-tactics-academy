# Prompt: Leadership Lessons from Hannibal and Scipio (Volume 7)

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (20 November 2026):** Phase S done. The user chose Hannibal and Scipio as Volume 7 from the later volumes in `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, after the Caesar volume was completed. The studies phase added seven studies, the suggested six and Baecula (the Metaurus was fought by neither commander, so a seventh was needed for the two profiles to link eight), with a new campaign, Scipio's Spanish campaign; see the Phase S section of `docs/SOURCE_AUDIT.md`. Phase 0 is done: the evidence pass is `docs/LEADERSHIP_EVIDENCE_HANNIBAL_SCIPIO.md`, and the volume is scaffolded, unlisted, in `data/leadership/hannibal-barca.ts`. The pilot (lessons 0, 5 and 7) comes next.

## Why Hannibal and Scipio, and what is missing (readiness analysis, 20 November 2026)

`docs/LEADERSHIP_VOLUME_TEMPLATE.md` asks for a profile and at least eight engagement studies, so lessons link to studies instead of retelling them. For a volume shared by two commanders, as Foch and Haig's was, the bar is eight distinct studies between them. Hannibal links two (`cannae`, `zama`) and Scipio one (`zama`), so two distinct studies exist. The pair was chosen ahead of Grant, Slim and Yi Sun-sin because its main sources are public domain and readable in full (Polybius and Plutarch on LacusCurtius, Livy on Wikisource, Appian on Livius), the Roman collection and two campaign narratives already frame the war, and Hannibal has served as a counter-case four times in earlier volumes, so readers already meet him in the lessons.

Counting `battleSlugs` in `data/commanders.json`:

| Material                  | In the catalog now                                                                                                                                                                                                                                                                      | Gap                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Studies they commanded in | 2 distinct: `cannae` (216 BCE; Hannibal) and `zama` (202 BCE; both)                                                                                                                                                                                                                     | Six more to reach eight. Nothing from Hannibal's first two years in Italy, nothing from Scipio's war in Spain, and no engagement that shows the war being lost by Carthage away from Hannibal |
| Campaigns and wars        | War `punic` (with a chronology and a bibliography of Polybius 3, 15 and 18, Livy and the 1911 Britannica); campaign narratives `hannibal-s-italian-campaign` and `scipio-s-african-campaign`                                                                                            | No campaign for Scipio's war in Spain (210–206 BCE): Phase S must decide whether a new campaign narrative is needed                                                                           |
| Profiles                  | `hannibal-barca`, sourced to Charles Oughton's article for the Society for Classical Studies on Hannibal as historian at Ticinus and Cannae; `scipio-africanus`, sourced to a National Gallery glossary entry on Scipio in painting. Both are one-line concise profiles                 | Both are thin for volume subjects, and Scipio's source is about reception, not his career. The evidence pass should propose revisions like Wellington's and Caesar's (`4b891b1`, `735ab6b`)   |
| Counter-case profiles     | `alexander-the-great`, `pompey`, `julius-caesar`, `augustus`, `arminius`, `napoleon-bonaparte`, `arthur-wellesley`, `mikhail-kutuzov`, `barclay-de-tolly`, `andre-massena`, `gebhard-leberecht-von-blucher`, `august-von-gneisenau`, `robert-e-lee` and the volumes' other subjects     | No profiles of Fabius Maximus, Hasdrubal Barca, Masinissa, Marcellus, Varro or Flaminius; refer to them in prose, or propose profiles in Phase 4                                              |
| Learning material         | Decision exercise `after-cannae`; the Rome courses `classical-warfare` and `rome-at-war`                                                                                                                                                                                                | Link the exercise; do not duplicate it                                                                                                                                                        |
| Earlier volumes' use      | Hannibal is the counter-case in Alexander's `a-borrowed-army` (taking over his brother-in-law's army in Spain), `parmenions-advice` (Maharbal after Cannae) and `opis` (Polybius on an army kept free of sedition), and in Caesar's `celeritas` (a bold march that did not win the war) | Build on these; do not retell them. The orientation must say where the reader has met him before                                                                                              |

**Verdict:** the readiest of the remaining subjects for sources, and well framed by the catalog, but six studies short. A studies phase that fills Hannibal's early campaigns and Scipio's Spanish war would complete it.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has six complete volumes: Napoleon (`data/leadership/napoleon.ts`), Alexander the Great (`data/leadership/alexander-the-great.ts`), the Serbian Supreme Command (`data/leadership/radomir-putnik.ts`), Foch and Haig (`data/leadership/douglas-haig.ts`), Wellington (`data/leadership/arthur-wellesley.ts`) and Julius Caesar (`data/leadership/julius-caesar.ts`). They were built under `docs/LEADERSHIP_LESSONS_PROMPT.md`, `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, `docs/LEADERSHIP_WELLINGTON_PROMPT.md` and `docs/LEADERSHIP_CAESAR_PROMPT.md`, and generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`. A comparison page (`/leadership/compare/`, data in `data/leadership/problems.ts`) sets eleven recurring problems beside the lessons that test them.

Your job is to write **Volume 7: Leadership Lessons from Hannibal and Scipio**, a paired volume on the two commanders of the Second Punic War (218–201 BCE), from Hannibal's march from Spain to the peace after Zama. Their later lives enter only where they bear on how each was judged by his own state.

Work, as in the earlier volumes, as three specialists reading the same evidence, with their voices kept separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what the commander could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses the dead.

A lesson is finished when each specialist would sign it. If they disagree, show the disagreement.

The curriculum below is a **research plan, not a source**. Dates, episodes, attributions, passages, chapter references and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## What this volume must add, not repeat

The earlier volumes already teach inheritance, intuition, tempo, presence, recognition, delegation, rivals who learn, victory without settlement, stopping, dissent, succession, the consent of followers, coalitions, learning under attrition, caution as arithmetic, supply, the government at home, a record written by its maker, speed, an army bound to its general, an enemy's divisions, clemency, legitimacy and who pays. Hannibal and Scipio earn a volume by what they show that the others could not:

- **Two commanders on opposite sides, one learning from the other.** Scipio fought against Hannibal's methods for years before he met him, and the volume can follow a method passing from the side that invented it to the side that defeated it.
- **A war won on the battlefield and lost in the system.** Hannibal won the great battles in Italy, and Rome refused to make peace, kept raising armies and held most of its allies. The volume can ask what a commander's victories are worth against a state that will not accept defeat.
- **A commander whose own record is lost and whose enemy's friends wrote it.** Hannibal's own historians are lost; Polybius wrote in the circle of Scipio's adoptive grandson, and Livy two centuries later. The orientation can build on the Alexander volume's lost record and Caesar's self-written one with a third case: a record written by the winners' friends.
- **An army of many peoples held together far from home,** for fifteen years in Italy, without a state that could reinforce it.
- **A young commander given command by an assembly,** who went beyond his office, and a state that later turned on both its great general and its enemy's.

Where a lesson meets an earlier volume's theme, link that lesson in prose and build on it; do not restate its psychology or its argument. In particular: link Alexander's `a-borrowed-army`, `parmenions-advice` and `opis`, Caesar's `celeritas`, `clemency` and `gaul-divided`, Napoleon's `your-rivals-are-learning` and `winning-battles-is-not-ending-wars`, and Wellington's `the-only-army`.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check (Britannica refuses scripts and needs the browser). Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Paywalled research** may be cited only for what its abstract states, and the audit must say "abstract only".
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty or army figures, no invented quotations, no guessed troop coordinates, no numerical commander ratings. The ancient figures for Cannae, Trasimene and Zama, and for the elephants and the Alps, are famous and unreliable; give none of them, and say so where a source's number is the point. Use `fact`, `interpretation` and `uncertainty` honestly. `leadershipVolumeSchema` enforces much of this; add this volume's banned sayings to it.
5. **Quotations** only from a translation you read, with its book and chapter and its chain of transmission ("as Polybius reports it", "as Livy tells it"). Polybius wrote within living memory of the war and spoke with survivors; Livy wrote about two centuries later and drew on Polybius and on Roman annalists; Appian, Plutarch and Nepos wrote later still. Speeches in the ancient histories are their authors' compositions, as the Alexander and Caesar volumes treated them. Your own rendering of Latin or Greek is a paraphrase and takes no quotation marks.
6. **No retrospective diagnosis.** No psychiatric or personality labels. Hannibal's lost eye and Scipio's reported illness in Spain are reports; draw no inference about command from them.
7. **One case proves nothing.** Every principle is a conditional claim with its scope, and every lesson includes a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.** Hannibal did not know after Cannae that most of Rome's allies would stay loyal, or Scipio at New Carthage how the tide would serve.
9. **The human cost stays in the frame,** stated as fact, not spectacle, and without figures: Saguntum, the Italian countryside laid waste by both armies for fifteen years, the punishment of Capua and of Tarentum, the plundering of Locri under Scipio's legate, the Spanish peoples fought over by both sides, the enslaved, and the soldiers of every people in both armies.
10. **Stay even-handed between Rome and Carthage.** The record is Greek and Roman; Carthaginian voices survive only as reported by their enemies, and Carthage itself was destroyed in 146 BCE, half a century after the war. Neither Livy's patriotism, Polybius's admiration for the Scipios nor the modern romance of Hannibal sets the narrative. Say plainly where the Carthaginian side is unknowable.
11. **No management-book voice.** Conditions and questions, not instructions.
12. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
13. Match the existing code style. Don't refactor unrelated code. Add engagements and commanders only in Phase S below, and only after I approve the list.

---

## The question that organises the volume

Hannibal won the great battles of the war's first three years and stayed in Italy for fifteen; Scipio never lost a battle that he chose to fight and ended the war at Zama. Every lesson adds evidence to one question:

> **Why did the better tactician lose the war: Hannibal's strategy, Rome's system, Scipio's command, or the record written by the winners?**

The candidate answers: **Hannibal's strategy**, an invasion meant to break Rome's alliance in Italy, which most of the allies did not join; **Rome's system**, a state that refused to negotiate after Cannae, kept raising armies and wore him down; **Scipio's command**, a younger general who learned Hannibal's methods, took the war to Spain and Africa and beat him in the field; and **the record**, written by Greeks and Romans, some of them close to the Scipios, which may have shaped which of the other answers we can see. The premise itself must be tested: was Hannibal the better tactician, and by whose account? Do not choose in advance.

## Traps specific to Hannibal and Scipio

All entries are from memory. Trace each one and record the result in the audit. The orientation lesson teaches the most instructive.

**The record belongs to the winners' friends.** Hannibal took Greek historians with him, Silenus and Sosylus, whose works are lost but were used by later writers. Polybius, a Greek hostage in Rome, wrote in the circle of Scipio Aemilianus, the adopted grandson of Scipio Africanus, and drew on Laelius, Scipio's friend. Livy wrote under Augustus and drew on Polybius and on Roman annalists. Find the passages where Polybius names his sources and his visit to the Alps before relying on any of this.

| Saying or story                                                                    | Problem to resolve                                                                                                                                                          |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The boy's oath of enmity to Rome at the altar                                      | Polybius has Hannibal tell it himself, years later, to Antiochus. Present it with that chain: a story he told about himself, to a king, when it served him                  |
| "I will find a way or make one"                                                    | Untraced as far as I know; a modern motto. Ban it unless traced                                                                                                             |
| Vinegar and fire to break the rocks in the Alps                                    | Livy has it; Polybius, who says he crossed the pass himself, does not. Use it only as a test of sources                                                                     |
| "You know how to win a victory, Hannibal, not how to use one"                      | Maharbal after Cannae, as Livy reports it. The Alexander volume already uses it (`parmenions-advice`); link, do not repeat                                                  |
| "Hannibal at the gates"                                                            | A later Roman proverb, not a scene from the war. Do not present it as an event                                                                                              |
| Fabius "the Delayer" and the line about one man who restored the state by delaying | An Ennius verse quoted by later writers (Cicero, Livy). Find the quotation and its reporter before using it                                                                 |
| Scipio's continence and the Spanish captive                                        | Livy and Polybius tell it at New Carthage. Present it with its reporters and their purpose, as part of Scipio's reputation                                                  |
| Neptune and the tide at New Carthage                                               | Polybius rationalises Scipio's claim of divine help as a calculation about the ebb tide. A clean source check on a commander's use of religion and a historian's use of him |
| The meeting before Zama                                                            | Polybius and Livy give speeches to both; they are compositions. Use the meeting as an event, the speeches as the historians' framing                                        |
| The ranking of generals at Ephesus                                                 | Livy and Plutarch tell of Scipio and Hannibal meeting later and Hannibal ranking the great generals. Trace the chain (Livy cites an earlier writer); treat as anecdote      |
| The poison and Hannibal's last words                                               | Livy and others report his suicide in Bithynia. Present it with its reporters; last words are not quotations of him                                                         |
| "Carthage must be destroyed"                                                       | Cato's, half a century later, and off-topic for command. Ban the Latin form as anything said in this war                                                                    |

**Claims you must not use:** retrospective diagnoses; the popular-psychology list in the Napoleon prompt (ego depletion, power posing, Myers-Briggs, the 10,000-hour rule, popular Dunning–Kruger, Yerkes–Dodson as a curve); "Cannae" as a universal recipe in the voice of later staff colleges, unless quoted with its source as their reading; and any ancient figure presented as fact.

---

## Phase S, studies first (needs my approval of the list)

Propose six new engagement studies, chosen to fill the gaps in the readiness table, and wait for my choice. Candidates, in rough order of what they add:

| Candidate                                                  | What it adds to the volume                                                                                                          | Sources to try                                   |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **The Ticinus, 218 BCE**                                   | The first clash in Italy, and the only one where both men fought: Polybius says the young Scipio saved his wounded father there     | Polybius 3.62–66 and 10.3; Livy 21.45–47         |
| **The Trebia, 218 BCE**                                    | Hannibal reading an impatient consul and drawing him across a river in winter                                                       | Polybius 3.67–74; Livy 21.52–56                  |
| **Lake Trasimene, 217 BCE**                                | An ambush of a whole army on the march, and what it did to Roman command (Fabius made dictator)                                     | Polybius 3.78–85; Livy 22.1–7; Plutarch _Fabius_ |
| **New Carthage, 209 BCE**                                  | Scipio's first great stroke: intelligence, preparation, the tide and the capture of the enemy's base in Spain                       | Polybius 10.6–20; Livy 26.41–51                  |
| **The Metaurus, 207 BCE**                                  | The war lost away from Hannibal: a Roman consul's march across Italy to destroy the relieving army before Hannibal knew it had come | Polybius 11.1–3; Livy 27.43–51                   |
| **Ilipa, 206 BCE**                                         | Scipio reversing Hannibal's own methods to end Carthaginian power in Spain                                                          | Polybius 11.20–24; Livy 28.12–16                 |
| **Baecula, 208 BCE**                                       | Scipio's first battle against a Barcid, and Hasdrubal's escape towards Italy                                                        | Polybius 10.38–40; Livy 27.17–20                 |
| **The Great Plains, or the burning of the camps, 203 BCE** | Scipio in Africa: deception during a truce, and the war carried to Carthage                                                         | Polybius 14.1–8; Livy 30.3–8                     |
| **Saguntum, 219 BCE**                                      | The siege that began the war, and whose responsibility it was                                                                       | Polybius 3.15–17; Livy 21.5–15                   |

My suggestion, for you to test: the Ticinus, the Trebia, Trasimene, New Carthage, the Metaurus and Ilipa, which give Hannibal four studies before Zama (Ticinus, Trebia, Trasimene, Cannae), Scipio four (Ticinus, New Carthage, Ilipa, Zama) and the volume one engagement fought by neither, with Baecula or the burning of the camps as alternatives if the evidence pass needs another Scipio study. Each study follows the existing format exactly (`data/research/rome.json`: fourteen sections, four or more phases, two perspectives, at least four sources read for it, no figures). Rows go in `data/battles/rome.ts` under the war `punic`. Check how campaigns are assigned there: the Italian engagements belong with `hannibal-s-italian-campaign`, and Scipio's war in Spain has no campaign yet; propose whether to add one, following the campaign narratives in `data/campaign-details.ts`. Link Hannibal's and Scipio's profiles, extend the campaign narratives and the war page, update counts and tests, and add a `docs/SOURCE_AUDIT.md` section, as the Caesar studies did (`902ad1d`). One commit for the studies, after my approval, before Phase 0.

Polybius is on LacusCurtius in Paton's Loeb translation (books 3, 10, 11, 14 and 15 open), as is the Loeb Plutarch, including the _Life of Fabius Maximus_. Livy's books 21–30 are on Wikisource (_From the Founding of the City_). Appian's _Hannibalic War_ and _Spanish Wars_ are on Livius.org, linked from LacusCurtius. Chapter numbers are the locators.

## Phase 0 (one commit, after Phase S, before any lesson)

Re-read `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, `data/leadership/index.ts`, the volume object and first two lessons of `data/leadership/julius-caesar.ts` (the most recent volume) and of `data/leadership/douglas-haig.ts` (the earlier shared volume), `lib/types.ts`, `lib/validation.ts`, `tests/unit/leadership.test.ts`, `components/views/leadership.tsx` and the `app/leadership/` routes. Note current counts; other work may have landed.

1. **Route and type.** A shared volume uses `commanderSlug` for its route and `alsoCommanderSlugs` for the other profiles that lead to it, as the Western Front volume does (`douglas-haig` with `ferdinand-foch`). Propose which commander gives the route (`/leadership/hannibal-barca/` with Scipio in `alsoCommanderSlugs` is the default) and the volume title, and confirm no type change is needed.
2. **Evidence pass.** Write `docs/LEADERSHIP_EVIDENCE_HANNIBAL_SCIPIO.md` in the format of `docs/LEADERSHIP_EVIDENCE_CAESAR.md`: grade every planned lesson strong, adequate or thin on its history and its psychology, trace every saying in the traps table, list what has and has not been read, and recommend merges and drops. Propose revisions of both profiles for a later batch.
3. **Scaffold** the volume file with the volume object (`inProgress` set, no lessons) and the volume tests, with nothing going live until the pilot ships.

Show me the evidence table, the route decision, the profile proposals and any corrections to this plan before writing lessons.

---

## The curriculum

Engagement slugs that exist today: `cannae` and `zama`, and the campaigns `hannibal-s-italian-campaign` and `scipio-s-african-campaign`. Slugs for Phase S studies are placeholders until the studies exist. Anything without a study is referred to in prose only. Counter-cases come from catalog commanders.

### Orientation

**0. `how-to-read-the-hannibalic-war` — A war written by the winners' friends**

- Purpose: Hannibal's lost historians; Polybius's sources, his travels and his closeness to the Scipios; Livy's annalists and his patriotism; the later writers; what Carthage's destruction removed from the record; and the volume's question. Compare with the earlier orientations: Alexander's record is lost, Caesar wrote his own, and here the enemy's friends wrote both commanders' stories.
- Episodes: the oath at the altar as Hannibal told it (Polybius); the Alps in Polybius and Livy (`hannibal-s-italian-campaign`); Scipio and the tide at New Carthage (`new-carthage` if studied).
- Psychology: research on source credibility or on how narratives are retold only if a sound review is read; `base: "none"` is acceptable.

### Part I. Hannibal's war

**1. `over-the-alps` — The strategy of invasion**

- Claim: carrying a war into the enemy's own country can turn its strength against it, but only if the invader can live there and the enemy's allies will change sides.
- Episodes: the march from Spain and the Alps; the first Gallic allies; the decision not to march on Rome after Cannae (`cannae`).
- Shadow: an army that could not be reinforced from home, and a country laid waste by both sides.
- Counter-case: `napoleon-bonaparte` in Russia, or Caesar's `celeritas`, which already uses Hannibal; link, do not repeat.

**2. `reading-the-consul` — Knowing the enemy commander**

- Claim: a commander who studies the character of the opposing general can set traps that general will walk into, but only while the enemy keeps appointing the same kind of general.
- Episodes: the Trebia, Trasimene and Cannae (`the-trebia`, `lake-trasimene` if studied; `cannae`); Polybius on the general's need to know the enemy commander's character.
- Shadow: Rome changed its generals and its method; Fabius would not be drawn.
- Counter-case: from the catalog, a commander misled by the same assumption; propose one in the evidence pass. Link Napoleon's `your-rivals-are-learning` and Wellington's Salamanca lesson.

**3. `the-allies-who-stayed` — Breaking a confederacy**

- Claim: a strategy aimed at an enemy's allies can win where battles cannot, but only if the allies see more to gain from defection than to fear from the side they leave.
- Episodes: Hannibal's release of Italian prisoners; Capua's defection and its punishment; Tarentum; the Latin colonies that held.
- Shadow: the allies who did change sides paid most when Rome returned.
- Counter-case: Caesar's `gaul-divided` (the reverse case, an enemy's divisions used against it); link, do not repeat.

**4. `an-army-of-many-peoples` — Holding a coalition army far from home**

- Claim: a commander can hold an army of many peoples together without a state behind it, but only while he can feed, pay and win, and the cost of that falls on the country it lives on.
- Episodes: Polybius's praise for an army kept free of sedition; the Gauls, Spaniards, Numidians and Libyans in it; the years in southern Italy.
- Shadow: the army lived off Italy, and those left behind in the south when it was recalled.
- Counter-case: Alexander's `opis` already uses Polybius's judgement; build on it, and choose another (Wellington's allied army, or Blücher's) in the evidence pass.

**5. `the-delayer` — Rome's answer**

- Claim: refusing battle against a stronger field commander can win a war, but only if the state can bear the cost of the delay and the leader can bear the contempt of his own side.
- Episodes: Fabius after Trasimene (Plutarch _Fabius_); Minucius and the divided command; Rome's refusal to negotiate after Cannae (link the exercise `after-cannae`); the Metaurus (`the-metaurus` if studied), where a consul's march decided the war away from Hannibal.
- Shadow: the countryside burned while Rome waited.
- Counter-case: `barclay-de-tolly` or `mikhail-kutuzov`; link Wellington's `the-only-army`, which already uses Barclay.

### Part II. Scipio's answer

**6. `the-young-commander` — Command given by an assembly**

- Claim: a leader given command young and outside the usual route can act with a freedom older men lack, but only while early success keeps the doubters quiet.
- Episodes: Scipio's appointment to Spain; the march on New Carthage (`new-carthage` if studied), its preparation, its secrecy and the tide.
- Shadow: the claim of divine favour, which Polybius explains away and Scipio used.
- Counter-case: `alexander-the-great`; link `a-borrowed-army`, which uses Hannibal's own accession.

**7. `learning-from-the-enemy` — Taking the opponent's method**

- Claim: a commander who adopts and reverses the enemy's own methods can beat him, but only if his army can be trained to them and the enemy does not change first.
- Episodes: Baecula and Ilipa (`ilipa` if studied); the cavalry of Masinissa; Zama (`zama`).
- Shadow: a method copied is a method the enemy knows.
- Counter-case: from the catalog, a learner who copied the wrong lesson; propose one. Link the Western Front lesson on where the learning happened, and Napoleon's `your-rivals-are-learning`.

**8. `allies-made-and-kept` — Winning peoples, not only battles**

- Claim: a commander who treats the allies of his enemy generously can turn them, but only while his promises are kept and the alternative looks worse.
- Episodes: the Spanish hostages at New Carthage and the story of Scipio's continence; Masinissa's change of sides; Syphax.
- Shadow: the Spanish peoples who rose against Rome once Carthage was gone; the burning of the camps during a truce (`the-great-plains` if studied).
- Counter-case: Caesar's `clemency`; link, do not repeat.

**9. `taking-the-war-to-africa` — Persuading the state**

- Claim: a commander who must persuade his own government to adopt his strategy can win the argument by results, but only if he does not overstep the authority it gave him.
- Episodes: the debate in the Senate with Fabius over invading Africa (Livy 28); the volunteers and the Sicilian legions; the scandal at Locri under Scipio's legate Pleminius.
- Shadow: Locri, plundered by his own men, and an inquiry he survived.
- Counter-case: `julius-caesar`; link Caesar's `the-rubicon` and Wellington's `the-government-at-home`.

### Part III. The meeting and after

**10. `zama` — Two commanders who knew each other**

- Claim: when two commanders know each other's methods, the battle goes to the one with the better instrument for the method both expect, but only if he can keep it in hand.
- Episodes: the meeting before the battle (`zama`), as an event; Hannibal's dispositions and the elephants; the Roman lanes; Masinissa's and Laelius's return.
- Shadow: the peace terms, which Hannibal urged Carthage to accept.
- Counter-case: `pompey`; link Caesar's `a-rival-who-knew-him`, which asks the same question of Pharsalus.

**11. `both-rejected` — What their states did with them**

- Claim: a state can turn on the commanders who served it best once the danger is past, and how a commander answers that test shows what he served.
- Episodes: Hannibal's reforms in Carthage, exile and death in Bithynia; Scipio's prosecution and withdrawal to Liternum.
- Shadow: neither state honoured the man who had carried it.
- Counter-case: `arthur-wellesley` or Napoleon's `what-outlasts-you`; propose in the evidence pass.

**12. `the-ledger` — Answering the question**

- Purpose: weigh the evidence of the volume, answer "Why did the better tactician lose the war?", test the premise that he was the better tactician, and invite the reader to argue the opposite. Include Italy laid waste, the punished allies, Spain, the African countryside, Carthage's fate half a century later, and the record that made Hannibal a hero to Rome's later readers.
- Counter-case: `julius-caesar` or `napoleon-bonaparte`, commanders whose victories did not secure their states.

### Sources to try

Check that each exists, is readable and says what you cite.

- **The war's historians.** Polybius, _Histories_ 3, 7–11, 14–15 (Paton's Loeb on LacusCurtius); Livy, books 21–30 (Wikisource and Perseus); Appian, _Hannibalic War_, _Spanish Wars_ and _Punic Wars_ (Livius.org); Cornelius Nepos, _Hannibal_; Cassius Dio and Zonaras for what survives.
- **Lives.** Plutarch, _Fabius Maximus_ and _Marcellus_ (LacusCurtius); no Plutarch life of Scipio or of Hannibal survives. Say so.
- **Reference.** The 1911 Britannica, "Punic Wars" and "Scipio"; Britannica's modern biographies (browser only); Livius.org (Jona Lendering) on Hannibal, Scipio and the battles; the Society for Classical Studies article already linked from Hannibal's profile.
- **Modern scholarship, for the debates.** The authorship of Polybius's sources, the Alpine pass, the site of Zama, Hannibal's strategy after Cannae; use only what is lawfully readable (open articles, reviews, publisher pages) and cite only that.
- **Already used by this site.** The `cannae` and `zama` studies, the two campaign narratives and the `punic` war page, with their sources in `data/research/rome.json`, `data/campaign-details.ts` and `data/war-details.ts`. Re-read what you cite.
- **Psychology.** As named in the curriculum, rule 3 applying. Prefer reviews and meta-analyses to single studies.

### Phases

- **Phase S.** Studies first, above. One commit.
- **Phase 0.** Above. One commit.
- **Phase 1, pilot.** Lessons 0, 5 and 7: the record, Rome's answer and Scipio learning from the enemy, which test the volume's question from both sides. `Quiz` takes the volume's course slug. The routes already exist, so only the volume data ships. Stop for me to judge.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order, one commit each after my approval.
- **Phase 3, integration.** Should need no new code: check the hub, the volume page's strength-and-shadow table, both profiles, the counter-case profiles, study links, search and the sitemap in the browser, and add a README feature line. Then propose a comparison-page batch adding this volume's lessons to the existing problems (reading the record, reading the enemy, allies, stopping, who pays, settlement) and any new problem the volume raises.
- **Phase 4, optional, ask first.** Up to three Decision Room scenarios, each with exactly one historical option in varied position and a study to link. Candidates: Hannibal after Trasimene, march on Rome or turn south; the consul Nero before the Metaurus, leave his front to join his colleague or hold it; Scipio in 205, invade Africa now or finish in Italy first. Propose missing profiles (Fabius Maximus, Hasdrubal Barca, Masinissa) and the revisions of both commanders' profiles.

## Checks and bookkeeping for every batch

As in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, with the procedures learned since:

- Read every source cited, then draft; source-check the draft against what was read and correct overreach.
- Add a `docs/SOURCE_AUDIT.md` section per batch: every source, how it was read, language and limits, each saying traced and its result. Run a link check on new URLs where the tools allow it, and otherwise record that each page opened in the browser.
- Update the curriculum-order test in `tests/unit/leadership.test.ts`, the lesson count in the end-to-end test, hard-coded counts elsewhere (the README, `docs/PRODUCT_ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/TEST_STRATEGY.md`) and this prompt's status line.
- Run `npm run lint`, `npm run typecheck` and `npm test`, then `npm run db:setup` before `npm run build` (the build reads the seeded database, and new pages are missing from `out/` without it), then `npm run test:e2e:chromium`. If the end-to-end web server's own build fails, build once, serve `out/` with `npm start`, and run Playwright with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000`. Stopping the backgrounded server can leave `scripts/serve-static.mjs` listening on port 3000; stop that process afterwards. Never leave a shell inside `out/`: the next build fails to replace it. Run `npx prettier --write` on any JSON a script has rewritten.
- Confirm the built sizes of `/battles`, the home page and `/commanders` are unchanged (adding studies or profiles changes them; say by how much), and spot-check two new lessons at desktop and 375px, light and dark.
- Show the diff summary and wait for approval before committing. Push only on an explicit go-ahead. The README release row for each commit goes in the next commit.

## Definition of done

- Phase S's studies are live, and the two commanders link at least eight distinct studies between them.
- The volume is live with its orientation and every lesson that survived its evidence pass; any dropped or merged lesson agreed with me.
- Every factual claim traces to a source read and audited; every saying used has a named origin and reporter, and the banned sayings are in the schema.
- Each lesson shows the three specialists separately, carries a shadow, a counter-case and scope conditions, and contributes to the volume's question; lessons that meet an earlier volume's theme build on it rather than repeat it.
- No psychiatric labels, casualty or army figures, invented quotations or commander ratings.
- List-page payloads unchanged except where studies or profiles were added, all checks pass, docs and counts consistent, each batch committed separately with my approval.

Start with Phase S. Show me the studies you propose, with what each adds and the sources you found for it, before writing any.
