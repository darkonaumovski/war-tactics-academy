# Prompt: Leadership Lessons from Wellington (Volume 5)

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (19 November 2026):** Phase S is done. The user chose Assaye, Badajoz and Burgos from the proposed studies, and they are in the catalog: Assaye (1803) under a new Second Anglo-Maratha War, Badajoz and Burgos (1812) under the `peninsular-war` campaign, with a source audit section of their own. Wellington's profile now links eight studies, the template's minimum. Vimeiro was proposed as a fourth and not chosen; Cintra and the inquiry stay in prose. Phase 0 is done: `docs/LEADERSHIP_EVIDENCE_WELLINGTON.md` grades the lessons and traces the sayings, recommends merging lesson 5 into lesson 4 (twelve lessons) and Napoleon at Acre as the counter-case for the breach, and proposes the profile revision; the volume is scaffolded unlisted in `data/leadership/arthur-wellesley.ts`, and eight untraced sayings are banned in `lib/validation.ts`. The pilot (batch V1, lessons 0, 2 and 4) is live: the volume is listed as in progress with the orientation, the preparation lesson and Salamanca. Phase 2 is complete: batch V2 added lessons 1, 3 and 5 (the only army, supply, the breach), batch V3 lessons 6–8 (subordinates, soldiers, allies) and batch V4 lessons 9–11 (the government at home, the empty country, the ledger), in the new numbering; the volume has all twelve lessons and is no longer marked in progress. Phase 3 is done: the hub, the strength-and-shadow table, Wellington’s profile, the counter-case profiles, the linked studies, search and the sitemap all pick the volume up without new code, and the README has its feature line. Its lessons are on the comparison page (batch T4), with a new problem, what cannot be replaced. Awaiting approval: the profile revision and Phase 4. The readiness analysis below is kept as written before Phase S.

## Why Wellington, and what is missing (readiness analysis, 18 November 2026)

`docs/LEADERSHIP_VOLUME_TEMPLATE.md` asks for a profile and at least eight engagement studies, so lessons link to studies instead of retelling them. Counting `battleSlugs` for `arthur-wellesley` in `data/commanders.json`:

| Material                     | In the catalog now                                                                                                                                                                                                | Gap                                                                                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Studies he commanded in      | 5: `talavera-1809`, `bussaco-torres-vedras-1810`, `salamanca-1812`, `vitoria-1813`, `waterloo`                                                                                                                    | Three more to reach eight. Nothing from India, nothing from 1808, no siege, and no defeat or failure of his own                                              |
| Studies he shaped from afar  | `bailen-1808` and `corunna-1809` (the war he inherited), `ligny` (the Prussian side of 1815)                                                                                                                      | Usable as context, not as his commands                                                                                                                       |
| Campaign narrative           | `peninsular-war`, with a section on each of the six Peninsular studies                                                                                                                                            | —                                                                                                                                                            |
| Profile                      | `arthur-wellesley`, a concise profile sourced to the National Army Museum; its timeline names Assaye, Vimeiro, Talavera, Torres Vedras, Salamanca, Burgos, Vitoria and Waterloo                                   | Thin for a volume subject: the evidence pass should list what the profile needs and propose a revision, as Volume 3 did for the regent                       |
| Counter-case profiles        | Napoleon, Masséna, Soult, Ney, Blücher, Gneisenau, Kutuzov, Barclay de Tolly, Marlborough (`john-churchill`), Foch, Haig, Eisenhower and others                                                                   | No profiles of Marmont, Joseph Bonaparte, Sir John Moore, Rowland Hill or Beresford; refer to them in prose or propose them                                  |
| Overlap with Volume 1        | Twelve Napoleon lessons mention Wellington; `the-last-reserve`, `tempo-and-the-decisive-point`, `how-to-read-napoleon` and `the-bottleneck` use Waterloo or the Peninsula                                         | Waterloo has been taught from Napoleon's side. This volume links those lessons and must not retell them                                                      |
| Sources used for the studies | Oman, vols I–III, V and VI; the 1911 Britannica "Peninsular War"; Britannica's Wellington biography (Elizabeth Longford) and "Battle of Vitoria"; the Fondation Napoléon's Wellington entry (Bertier de Sauvigny) | Wellington's own dispatches and the recorded table talk (Stanhope, Croker) have not been read for this site yet. They are the core of the orientation lesson |

**Verdict:** a strong subject, and nearly ready. Three or four new studies would complete it. They should be chosen to fill the gaps above, not to add more victories.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has four complete volumes: Napoleon (`data/leadership/napoleon.ts`), Alexander the Great (`data/leadership/alexander-the-great.ts`), the Serbian Supreme Command (`data/leadership/radomir-putnik.ts`) and Foch and Haig (`data/leadership/douglas-haig.ts`). They were built under `docs/LEADERSHIP_LESSONS_PROMPT.md` and `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, and generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`. A comparison page (`/leadership/compare/`, data in `data/leadership/problems.ts`) sets ten recurring problems beside the lessons that test them.

Your job is to write **Volume 5: Leadership Lessons from Wellington**, about Arthur Wellesley, first Duke of Wellington, as a commander from India to Waterloo. His later political career enters only where it bears on what his command left behind.

Work, as in the earlier volumes, as three specialists reading the same evidence, with their voices kept separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what Wellington could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses the dead.

A lesson is finished when each specialist would sign it. If they disagree, show the disagreement.

The curriculum below is a **research plan, not a source**. Dates, episodes, attributions, letters, page references and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## What this volume must add, not repeat

The earlier volumes already teach inheritance, intuition, plans that survive error, tempo, presence, recognition, delegation, the personal headquarters, rivals who learn, victory without settlement, stopping, dissent, the last reserve, leaving, succession, the consent of followers, ruling the defeated, shared command, a small army inside a coalition, a defeat survived as an army, learning under attrition and coordination among allies. Wellington earns a volume by what he shows that they could not:

- **An army that could not be replaced.** Britain had one field army, and a Parliament and a press that could recall it. His caution can be read as arithmetic.
- **Preparation as the main act of command.** Positions chosen in advance, a fortified line built a year before it was needed, and supply organised so his own army could stay put while the enemy starved.
- **A reputation for caution used as a weapon.** Marmont at Salamanca and Jourdan at Vitoria both assumed he would manoeuvre rather than fight, and both were wrong.
- **Allies he could not command,** from Cuesta at Talavera to the Prussians at Waterloo, and an allied army (the Portuguese) that he did come to command.
- **A record kept in official letters.** Napoleon wrote too much, and Alexander's own words are lost. Wellington wrote dispatches, refused to write memoirs and let his friends record his conversation.
- **Strategy paid for by civilians,** in the devastation of Portugal in 1810, the sack of stormed towns and the plunder at Vitoria. His career also served British expansion in India.

Where a lesson meets an earlier volume's theme, link that lesson in prose and build on it; do not restate its psychology or its argument. At Waterloo in particular, link the Napoleon lessons and write from the other side of the field. Two volumes reaching different conclusions about the same battle are worth more than two that agree.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check (Britannica refuses scripts and needs the browser). Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Paywalled research** may be cited only for what its abstract states, and the audit must say "abstract only".
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty or army figures, no invented quotations, no guessed troop coordinates, no numerical commander ratings. Use `fact`, `interpretation` and `uncertainty` honestly. `leadershipVolumeSchema` enforces much of this; add this volume's banned sayings to it.
5. **Quotations** only from a text you read, with its locator and its chain of transmission ("as Stanhope records it", "as Creevey reports it"). Wellington's dispatches are his own words; table talk recorded years later by others is not, and says so. Your own rendering of French, Spanish or Portuguese is a paraphrase and takes no quotation marks.
6. **No retrospective diagnosis.** No psychiatric or personality labels. His coldness, his contempt for his men and his difficult marriage are claims made by witnesses and biographers; present them as claims, with who makes them.
7. **One case proves nothing.** Every principle is a conditional claim with its scope, and every lesson includes a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.** He did not know that Masséna would stop before the Lines, or that Marmont would string out his left.
9. **The human cost stays in the frame,** stated as fact, not spectacle, and without figures: the Portuguese peasants ordered from their homes in 1810, the people of Coimbra, the French wounded left at Bussaco, the sacks of Ciudad Rodrigo, Badajoz and San Sebastián, the plunder at Vitoria, flogging and hanging in his own army, and the people of the Maratha territories in 1803.
10. **Stay even-handed between traditions.** British regimental memoirs and Victorian hero-worship; French memoirs that explain defeat (Marmont, Jourdan, Foy, Pelet); Spanish and Portuguese historiography, for which Wellington is one actor in their own war of independence, not its centre; and, for India, the Maratha side, which English-language sources mostly omit. The admirers do not set the narrative, and neither do the debunkers.
11. **No management-book voice.** Conditions and questions, not instructions.
12. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
13. Match the existing code style. Don't refactor unrelated code. Add engagements and commanders only in Phase S below, and only after I approve the list.

---

## The question that organises the volume

He was called a defensive general by enemies who had not yet fought him, and he won Salamanca in an afternoon by attacking. He spent a year building a fortified line, then stormed fortresses before their walls were properly breached. Every lesson adds evidence to one question:

> **Can caution be a form of daring?**

The candidate answers: caution as **arithmetic**, since Britain had one army and a government that could recall it, so preserving it was the boldest thing he could do; caution as **temperament**, a man who disliked risk and was lucky in his enemies; caution as **method**, preparation that made sudden boldness possible when the enemy erred; and caution as **reputation**, which his enemies believed and he exploited. Warn the reader early that the British tradition of the steady, defensive Wellington and the French tradition of the overcautious one are both partly stories each side told about him. Do not choose in advance.

## Traps specific to Wellington

All entries are from memory. Trace each one and record the result in the audit. The orientation lesson teaches the most instructive.

**His record is official.** His dispatches were edited by John Gurwood during Wellington's lifetime and with his cooperation, and the _Supplementary Despatches_ were published by his son after his death. They are evidence of what he chose to report and how. His conversation survives through Philip Henry Stanhope, John Wilson Croker, Thomas Creevey and others, written down at the time or later and published after his death. He refused to write memoirs and disliked other people's accounts of his battles.

**Waterloo myth.** Waterloo has a vast literature of its own, with national claims (British, Prussian, Dutch-Belgian) about who won it. This site's Waterloo study and the Napoleon volume already handle the battle; this volume links them and keeps to what Waterloo shows about Wellington.

| Saying or story                                                                              | Problem to resolve                                                                                                                                        |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "The battle of Waterloo was won on the playing fields of Eton"                               | Probably apocryphal; often traced to Montalembert in the 1850s. The Fondation's biography already hedges it ("aurait-il dit"). Ban it unless traced       |
| "The scum of the earth"                                                                      | Attested in his letter after Vitoria, as far as I know, and in Stanhope's longer version about enlisting for drink. Give the context, not just the phrase |
| "The nearest run thing you ever saw in your life"                                            | Creevey's record of a conversation in Brussels after Waterloo. Present it as Creevey's report                                                             |
| "Hard pounding, gentlemen"; "Up, Guards, and at 'em"                                         | Battlefield sayings with weak attestation; he is said to have denied the second. Trace or ban                                                             |
| "I don't know what effect these men will have upon the enemy, but, by God, they frighten me" | Widely attributed, poorly sourced. Trace or ban                                                                                                           |
| "Publish and be damned"                                                                      | Attached to the Harriette Wilson memoirs; disputed. Off-topic for command unless traced and needed                                                        |
| The history of a battle is like the history of a ball                                        | A letter of 1815, as far as I know. Useful for the orientation lesson if found in the dispatches                                                          |
| Guessing what was on the other side of the hill                                              | Recorded by Croker, as far as I know. Find the passage and its date                                                                                       |
| Napoleon's campaigns as harness of leather, his own as rope, mended when it broke            | Recorded table talk, as far as I know; trace the recorder before using it in the supply lesson                                                            |
| "Forty thousand men in forty minutes" (Salamanca)                                            | An epigram Oman and Britannica both repeat; find who first said it and present it as an epigram, not a measurement                                        |
| "Sepoy general" (Napoleon's dismissal)                                                       | Britannica's biography mentions it; trace to a source in Napoleon's own words or present it as reported                                                   |
| Next to a battle lost, the saddest thing is a battle won                                     | Attributed in several forms. Trace or ban                                                                                                                 |

**Claims you must not use:** retrospective diagnoses; "the Iron Duke" as a description of his character rather than a later nickname; the Napoleon prompt's popular-psychology list (ego depletion, power posing, Myers-Briggs, the 10,000-hour rule, popular Dunning–Kruger, Yerkes–Dodson as a curve); and "the thin red line", which belongs to the Crimean War and is only a later description of British infantry tactics. Britannica's biography uses it in quotation marks; do not repeat it as if it were his term.

---

## Phase S, studies first (needs my approval of the list)

Propose three or four new engagement studies, chosen to fill the gaps in the readiness table, and wait for my choice. Candidates, in rough order of what they add:

| Candidate                                                           | What it adds to the volume                                                                                                | Sources to try                                                                                                                            |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Assaye, 1803**                                                    | India, an attack against odds before the reputation for caution existed, and the empire in the ledger                     | The 1911 Britannica "Assaye"; Wellington's Indian dispatches (the first volumes of Gurwood; check which); scholarship on the Maratha side |
| **Siege of Badajoz, 1812** (or Ciudad Rodrigo and Badajoz together) | A deliberate costly risk taken against time, an assault that failed at the breaches and succeeded elsewhere, and the sack | Oman vol. V; the 1911 Britannica; Britannica "Siege of Badajoz (1812)"; Napier                                                            |
| **Burgos, 1812** (siege and retreat)                                | His own failure, a retreat in which discipline broke down, and how he reported it                                         | Oman vol. VI (pp. 1–160 or so; check); the 1911 Britannica; Larpent's journal                                                             |
| **Vimeiro, 1808**                                                   | His first battle against the French, then superseded on the field, the Convention of Cintra and the inquiry at home       | Oman vol. I; the 1911 Britannica                                                                                                          |
| **Oporto, 1809** (crossing of the Douro)                            | A surprise crossing against Soult, the boldest stroke of his early command                                                | Oman vol. II; the 1911 Britannica                                                                                                         |
| **Fuentes de Oñoro, 1811**                                          | A near defeat, a position extended too far, and Masséna's last attempt                                                    | Oman vol. IV; the 1911 Britannica                                                                                                         |
| **Sorauren and the Pyrenees, 1813**                                 | Soult's counter-offensive, and Wellington's reputation used as a weapon                                                   | Oman vol. VI; the 1911 Britannica                                                                                                         |

My suggestion, for you to test: Assaye, Badajoz and Burgos, which bring in India, a siege and a failure, with Vimeiro as a fourth if the politics lesson needs it. Each study follows the existing format exactly (`data/research/napoleon.json`: fourteen sections, four or more phases, two perspectives, at least four sources read for it, no figures). Peninsular rows go in `data/battles/napoleon.ts` under the `peninsular-war` campaign. Assaye belongs to the Second Anglo-Maratha War, so check which module under `data/battles/` and which war or context entry it belongs to, and how one-engagement campaigns outside the collections are handled. Link the profiles concerned, extend the `peninsular-war` narrative for Peninsular additions, update counts and tests, and add a `docs/SOURCE_AUDIT.md` section, as the two Peninsular batches did (`87f59fa`, `64dd74a`). One commit for the studies, after my approval, before Phase 0.

Oman's volumes are on the Internet Archive. The University of Toronto scans (`historyofpeninsu01oman` to `historyofpeninsu07oman`) keep their page numbers in the text, so studies can cite pages. Project Gutenberg has some of the volumes as plain text, without page markers. The scratchpad scripts from the second Peninsular batch show the study and integration pattern; rewrite them rather than relying on them being present.

## Phase 0 (one commit, after Phase S, before any lesson)

Re-read `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, `data/leadership/index.ts`, the volume object and first two lessons of `data/leadership/douglas-haig.ts` (the most recent volume), `lib/types.ts`, `lib/validation.ts`, `tests/unit/leadership.test.ts`, `components/views/leadership.tsx` and the `app/leadership/` routes. Note current counts; other work may have landed.

1. **No type change should be needed.** The volume belongs to one commander, so `commanderSlug: "arthur-wellesley"` sets the route (`/leadership/arthur-wellesley/`) and the profile link. Confirm this, and tell me if the code argues otherwise.
2. **Evidence pass.** Write `docs/LEADERSHIP_EVIDENCE_WELLINGTON.md` in the format of `docs/LEADERSHIP_EVIDENCE.md`: grade every planned lesson strong, adequate or thin on its history and its psychology, trace every saying in the traps table, list what has and has not been read, and recommend merges and drops. Say what the profile needs (a fuller summary, a better source than the National Army Museum page alone, the Indian and political careers placed correctly), and propose the revision for a later batch.
3. **Scaffold** `data/leadership/arthur-wellesley.ts` with the volume object (`inProgress` set, no lessons) and the volume tests, with nothing going live until the pilot ships.

Show me the evidence table, the profile proposal and any corrections to this plan before writing lessons.

---

## The curriculum

Engagement slugs that exist today: `talavera-1809`, `bussaco-torres-vedras-1810`, `salamanca-1812`, `vitoria-1813`, `waterloo`, with `bailen-1808`, `corunna-1809` and `ligny` as context, and the campaign `peninsular-war`. Slugs for Phase S studies are placeholders until the studies exist. Anything without a study is referred to in prose only. Counter-cases come from catalog commanders.

### Orientation

**0. `how-to-read-wellington` — A commander who left dispatches, not memoirs**

- Purpose: the dispatches and how Gurwood's edition was made; table talk recorded by Stanhope, Croker and Creevey; the Waterloo literature and its national claims; the British hero and the French cautious general as two inherited pictures; and the volume's question. Compare with the earlier orientations: Napoleon wrote too much, Alexander's words are lost, and Wellington wrote a great deal but chose its form.
- Episodes: `waterloo` (his dispatch, and why its brevity offended people, beside the Napoleon volume's reading), `talavera-1809` (his report against Oman's reconstruction), the letter comparing a battle to a ball, in prose.
- Psychology: the romance of leadership, already used by Volume 2; link it and add only what is new here. `base: "none"` is acceptable.

### Part I. An army that could not be replaced

**1. `the-only-army` — Caution as arithmetic**

- Claim: when a leader commands something that cannot be replaced, preserving it can be the decisive act, but only if preserving it serves a purpose beyond survival.
- Episodes: `talavera-1809` (victory followed by retreat, and his refusal of joint operations afterwards), `bussaco-torres-vedras-1810` (the parliamentary pressure the 1911 Britannica describes).
- Shadow: opportunities refused, and allies who read his caution as bad faith.
- Counter-case: `barclay-de-tolly`, whose retreat in 1812 was strategically defensible and cost him his command.
- Psychology candidates: accountability and decision-making (Lerner and Tetlock 1999); loss framing, only if a source links it to commanders, never as a general explanation.

**2. `ground-chosen-in-advance` — Preparation as command**

- Claim: preparation done before the enemy arrives can decide a battle, provided the enemy chooses to fight on the prepared ground.
- Episodes: `bussaco-torres-vedras-1810` (the Lines planned in October 1809; Bussaco's hidden track behind the crest), `waterloo` (the reverse slope; link, do not retell), `talavera-1809`.
- Shadow: a prepared position is worthless if the enemy will not attack it, and preparation can harden into waiting.
- Counter-case: `andre-massena`, who attacked the ridge he had not reconnoitred, then refused to attack the Lines.
- Link the Napoleon lesson `plan-for-being-wrong`.

**3. `the-commissariat` — Supply as strategy**

- Claim: an army that can feed itself where the enemy cannot gains time, and time can do what battles cannot.
- Episodes: `bussaco-torres-vedras-1810` (Masséna starved before the Lines), `talavera-1809` (his own army half-starved when Spanish supplies failed), `vitoria-1813` (the supply line moved to Santander).
- Shadow: the cost of an empty country falls on its people (lesson 11).
- Counter-case: `napoleon-bonaparte` in Russia (`smolensk-1812`, `berezina`).
- Psychology may be thin; `base: "none"` is acceptable.

### Part II. Caution and daring

**4. `the-afternoon-at-salamanca` — Striking when the enemy errs**

- Claim: a leader who has refused battle for days can strike at once when the enemy makes a mistake, if the army is hidden, ready and close at hand.
- Episodes: `salamanca-1812` (the noon attack cancelled, then the decision above the village of Arapiles), Assaye if studied.
- Shadow: waiting for an enemy's mistake is a strategy only if the enemy makes one.
- Counter-case: `napoleon-bonaparte` at `waterloo`, waiting for the ground to dry; link `the-last-reserve`.
- Link the Napoleon lesson `intuition-is-stored-work`; do not repeat its psychology.

**5. `a-reputation-for-caution` — When the enemy believes your reputation**

- Claim: a predictable reputation can be a weapon, but only while the leader can still break it at the right moment.
- Episodes: `salamanca-1812` (Marmont's conviction that he would retreat), `vitoria-1813` (Jourdan's expectation that he would keep marching round), Oman's judgement that after Salamanca no French general took liberties with him.
- Shadow: a reputation that his own government and allies also believed.
- Counter-case: `michel-ney` or `andre-massena`, who formed their view of the British from other campaigns; choose whichever the evidence supports.
- Candidate merge with lesson 4, if the evidence pass finds too little that is distinct.

**6. `the-breach` — The costly risk**

- Claim: a commander known for husbanding his army may still pay heavily for time, and the cost includes what the army does afterwards.
- Episodes: the Badajoz and Burgos studies if Phase S adds them, otherwise prose; `vitoria-1813`.
- Shadow: the sack of stormed towns, which his officers could not or would not stop.
- Counter-case: from the catalog, a siege commander whose assault failed or whose army ran out of control; propose one in the evidence pass.

### Part III. People

**7. `a-short-leash` — Commanding subordinates he did not trust**

- Claim: close control of subordinates reduces errors when they are uneven, and limits what they can do when he is not there.
- Episodes: `vitoria-1813` (Graham's caution and Dalhousie's delay against Picton and Hill), `bussaco-torres-vedras-1810` (Leith moving on standing orders; Craufurd), `salamanca-1812` (Pakenham, briefed in person).
- Shadow: officers who never learned to act alone, and blame placed on them for faults of the plan.
- Counter-case: `gebhard-leberecht-von-blucher`, whose partnership with Gneisenau worked the other way.
- Link the Napoleon lesson `delegate-the-fight`.

**8. `the-scum-of-the-earth` — Contempt and care**

- Claim: a leader can despise his followers in words and still look after them in practice, but the words are part of the record of how they were treated.
- Episodes: `vitoria-1813` (the plunder, and the letter), `talavera-1809`, `bussaco-torres-vedras-1810` (Britannica: the 1811 evacuation confirmed his soldiers' trust in him); flogging and hanging in his army.
- Shadow: discipline that broke down after every storm and every retreat.
- Counter-case: `napoleon-bonaparte`; link `what-people-will-do-for-recognition`.
- Psychology candidates: expectations and their effect on followers, only if a current review can be read, with its contested status stated.

**9. `allies-he-could-not-command` — Coalition without authority**

- Claim: cooperation with an ally you cannot command depends on what each side can see the other doing, not on promises.
- Episodes: `talavera-1809` (Cuesta, and the Spanish supplies that never came), `bussaco-torres-vedras-1810` (the Portuguese army under Beresford, inside his divisions), `vitoria-1813` (Spanish divisions; the Cortes's grant of command in 1812), `waterloo` with `ligny` (the Prussian promise).
- Shadow: allies blamed for failures that were partly his.
- Counter-case: `ferdinand-foch` or `karl-philipp-schwarzenberg`. Link the comparison page's problem "Allies and coalitions".

### Part IV. Beyond the battlefield

**10. `the-government-at-home` — Managing those who can recall you**

- Claim: a commander far from home wins time from his government by what he reports and how, and loses it by surprises.
- Episodes: Vimeiro, Cintra and the inquiry (study or prose), `talavera-1809` (the peerage and the criticism), `bussaco-torres-vedras-1810` (the party urging withdrawal).
- Shadow: reporting shaped to protect himself.
- Counter-case: `andre-massena`, whose aide went to Paris to explain why he could not attack; or Napoleon's marshals in Spain, reporting to an emperor in Germany or Russia.

**11. `the-empty-country` — Who pays for a strategy**

- Claim: a strategy can be right and its cost still unjust, and the people who pay are rarely those who decide.
- Episodes: `bussaco-torres-vedras-1810` (the devastation order, Coimbra, the Ordenança and the French reprisals), the sacks of the stormed towns, `vitoria-1813` (plunder).
- Shadow: the cost in his own reputation was small; the cost to Portuguese and Spanish civilians was not.
- Counter-case: `mikhail-kutuzov` and 1812, a different scorched country.
- Link the comparison page's problem "Who pays".

**12. `the-ledger` — Answering the question**

- Purpose: weigh the evidence of the volume, answer "Can caution be a form of daring?", and invite the reader to argue the opposite. Include India and the empire his career served, Waterloo as a shared and contested victory, and what his command left to the British army.
- Counter-case: `john-churchill`, the earlier British coalition commander to whom Foy compared him after Salamanca.

### Sources to try

Check that each exists, is readable and says what you cite.

- **His own words.** Gurwood, _The Dispatches of Field Marshal the Duke of Wellington_ (1834–1839, and the enlarged edition); the _Supplementary Despatches_ (1858–1872). Public domain; look for scans on the Internet Archive and HathiTrust, and confirm the volume and page of every letter you cite.
- **Recorded conversation.** Philip Henry Stanhope, _Notes of Conversations with the Duke of Wellington_ (1888); _The Croker Papers_ (1884); _The Creevey Papers_ (1903). All public domain. Each is a record by someone else, with a date and a purpose of its own.
- **Narratives.** Oman, all seven volumes (Internet Archive; see Phase S); Napier, _History of the War in the Peninsula_ (public domain, and partisan; Oman corrects him often); Fortescue, _A History of the British Army_ (check copyright and availability per volume); the 1911 Britannica, "Peninsular War" and "Wellington".
- **Witnesses inside his army.** Larpent's _Private Journal_ (the judge-advocate at headquarters); the memoirs of Kincaid, Harry Smith, Grattan and Tomkinson, as Oman uses them. Public domain.
- **The other side.** Foy's _Vie militaire_, Marmont's _Mémoires_, Jourdan, Pelet and Thiébault as available in print or scan; the Fondation Napoléon's articles; Spanish and Portuguese historiography, such as the Real Academia de la Historia's biographical dictionary, if it is readable, and Portuguese accounts of 1810. For Assaye, scholarship on the Maratha states.
- **Modern scholarship, for the debates.** Rory Muir, Elizabeth Longford, Charles Esdaile (for a Spanish-centred view of the war), Huw Davies, Gordon Corrigan, Jac Weller. Use what is lawfully readable (open articles, author websites, publisher pages, reviews, Internet Archive where permitted) and cite only that.
- **Already used by this site.** The six Peninsular studies and the Waterloo study, with their sources in `data/research/napoleon.json`, and Britannica's Wellington biography. Re-read what you cite.
- **Psychology.** As named in the curriculum, rule 3 applying. Prefer reviews and meta-analyses to single studies.

### Phases

- **Phase S.** Studies first, above. One commit.
- **Phase 0.** Above. One commit.
- **Phase 1, pilot.** Lessons 0, 2 and 4: the orientation, the preparation lesson and Salamanca, which together test the volume's question from both ends. `Quiz` takes `courseSlug="leadership/arthur-wellesley"`. The routes already exist, so only the volume data ships. Stop for me to judge.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order, one commit each after my approval.
- **Phase 3, integration.** Should need no new code: check the hub, the volume page's strength-and-shadow table, Wellington's profile, the counter-case profiles, study links, search and the sitemap in the browser, and add a README feature line. Then propose a comparison-page batch adding this volume's lessons to the existing problems (allies, who pays, reading the enemy, reading the record) and any new problem the volume raises.
- **Phase 4, optional, ask first.** Up to three Decision Room scenarios, each with exactly one historical option in varied position. Candidates: after Talavera, stay with Cuesta or withdraw to Portugal; in 1810, fight on the frontier or fall back to the Lines; at Salamanca at noon, attack or wait. Propose missing profiles (Marmont, Joseph Bonaparte, Sir John Moore, Rowland Hill, Beresford) and the revision of Wellington's own profile.

## Checks and bookkeeping for every batch

As in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, with two procedures learned since:

- Read every source cited, then draft; source-check the draft against what was read and correct overreach.
- Add a `docs/SOURCE_AUDIT.md` section per batch: every source, how it was read, language and limits, each saying traced and its result. Run a link check on new URLs.
- Update the curriculum-order test in `tests/unit/leadership.test.ts`, the lesson count in the end-to-end test, hard-coded counts elsewhere, `docs/PRODUCT_ROADMAP.md` and this prompt's status line.
- Run `npm run lint`, `npm run typecheck` and `npm test`, then `npm run db:setup` before `npm run build` (the build reads the seeded database, and new pages are missing from `out/` without it), then `npm run test:e2e:chromium`. If the end-to-end web server's own build fails, build once, serve `out/` with `npm start`, and run Playwright with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000`. Run `npx prettier --write` on any JSON a script has rewritten.
- Confirm the built sizes of `/battles`, the home page and `/commanders` are unchanged, and spot-check two new lessons at desktop and 375px, light and dark.
- Show the diff summary and wait for approval before committing. Push only on an explicit go-ahead. The README release row for each commit goes in the next commit.

## Definition of done

- Phase S's studies are live, and Wellington's profile links at least eight studies.
- The volume is live with its orientation and every lesson that survived its evidence pass; any dropped or merged lesson agreed with me.
- Every factual claim traces to a source read and audited; every saying used has a named origin, and the banned sayings are in the schema.
- Each lesson shows the three specialists separately, carries a shadow, a counter-case and scope conditions, and contributes to the volume's question; lessons that meet an earlier volume's theme build on it rather than repeat it, and Waterloo is not retold.
- No psychiatric labels, casualty or army figures, invented quotations or commander ratings.
- List-page payloads unchanged, all checks pass, docs and counts consistent, each batch committed separately with my approval.

Start with Phase S. Show me the studies you propose, with what each adds and the sources you found for it, before writing any.
