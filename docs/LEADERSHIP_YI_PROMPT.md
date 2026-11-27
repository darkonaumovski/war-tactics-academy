# Leadership Lessons, Volume 10: Yi Sun-sin

**Status (25 November 2026):** Phase 0 done and approved, with the evidence pass's decisions (twelve lessons, lesson 8 folded into lessons 6 and 9; the banned sayings; the counter-cases; pilot lessons 0, 6 and 8): the volume plan below (question, traps, curriculum, phases) is written, `docs/LEADERSHIP_EVIDENCE_YI.md` grades its thirteen lessons and traces its sayings, and the volume is scaffolded unlisted at `data/leadership/yi-sun-sin.ts`, with its banned sayings in `lib/validation.ts`. Phase S done (`0cda2cb`). The pilot is written (batch P1): lessons 0, 6 and 8, the record, the agent's story and the remnant, with the volume listed as in progress at `/leadership/yi-sun-sin/`. Batch P2 adds lessons 1–3, the first year: beyond his province, the new ship and a way out. Batch P3 adds lessons 4, 5 and 7: what a fleet cannot do, the joint report and the successor. Batch P4 adds lessons 9–11, an ally who would let them go, Noryang and the ledger, and completes the volume, which is no longer marked as in progress; Phase 3 step 1 is done: the hub, the strength-and-shadow table, Yi's profile, the twelve counter-case profiles, the fourteen linked studies, search and the sitemap pick the volume up without new code, and the README has its feature line; the comparison batch T9 (step 2) adds the volume to `/leadership/compare/` as a tenth column, with seventeen entries under eleven problems and a new thirteenth problem, the government at home, drawn from seven volumes; on wide screens the lone tenth column spans the last row. Phase 4 is planned below and approved; its first step revises Yi's profile from the volume's reading, with Lee Jang-hee's entry in the Encyclopedia of Korean Culture as its source in place of the National Museum of Korea's exhibition page (`d8b5c26`). Step 2 adds three decision exercises, Yi and Won Gyun's appeal in 1592, Yi and the enemy agent's report in 1597 and Won Gyun ordered to sail, bringing the Decision Room to forty-eight (`9ba6b34`). Step 3 adds profiles of Won Gyun, Gwon Yul, Ryu Seong-ryong and Chen Lin (135 → 139), each from its own source, and seven lessons name them as people. Phase 4 is then complete. The seven studies are written, each from four or more sources read in this session, with a new campaign `joseon-naval-operations-of-1597-1598` and the 1592 campaign's narrative rewritten without ship numbers; Yi's profile links eight studies; what was read is in `docs/SOURCE_AUDIT.md`. The user chose to go ahead with Yi Sun-sin after the source check in `docs/LEADERSHIP_YI_SOURCE_CHECK.md` (`96b6cc9`), which found the volume feasible on lawful sources, but in Classical Chinese and Korean rather than English. The user approved the seven studies below and chose Chilcheollyang as the eighth. The rest of the volume prompt (its question, curriculum, traps and later phases) is written after Phase S, when the studies show what the lessons can carry, as the Slim volume's evidence pass reshaped its curriculum.

## Readiness

| Area              | What exists                                                                                                                                          | Gap                                                                                                                                                                               |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Profile           | `yi-sun-sin`, linked to the National Museum of Korea's exhibition page                                                                               | Revise after the volume, as for Slim                                                                                                                                              |
| Studies           | One: `hansan-island` (four sources: the _Encyclopedia of Korean Culture_, two Britannica pages, _Seikan iryaku_ vol. 2)                              | Seven more to reach eight                                                                                                                                                         |
| War and campaigns | War `imjin` (chronology in `data/war-details.ts`); campaign `joseon-naval-operations-of-1592`, whose narrative cites Britannica and the encyclopedia | No campaign for 1597–98. The 1592 narrative gives ship numbers for Hansan, against the rule on figures. The war chronology mixes Gregorian dates (Busan, Noryang) with lunar ones |
| Learning material | None from the Imjin War                                                                                                                              | Phase 4 may propose exercises                                                                                                                                                     |
| Other profiles    | None for Won Gyun, Chen Lin, Wakisaka Yasuharu, Konishi Yukinaga, Ryu Seong-ryong or King Seonjo                                                     | A later phase may propose some                                                                                                                                                    |

## Rules for Phase S

These carry over from the earlier volumes and add what the source check found.

1. **Cite only what you have read** in this session, and record it in `docs/SOURCE_AUDIT.md`. Never guess a URL. The Korean Classics Database needs the browser; its record pages use the pattern `db.itkc.or.kr/dir/item?itemId=MO#/dir/node?dataId=ITKC_MO_0232A_…`. The encyclopedia's search is at `encykorea.aks.ac.kr/Article/Search?query=…`.
2. **Reading in the original.** Yi's reports and diary (in the 1795 _Complete Works_) and the Annals' originals are in Classical Chinese; the Annals' translation and the encyclopedia are in Korean. Paraphrase them and name the language. Do not print an English sentence in quotation marks as Yi's or the court's words unless a source read in English prints it so. Where a reading is uncertain, say so.
3. **No figures:** no ship counts, casualty or army figures, in the studies or in the campaign narratives, even where the Korean sources give them. Remove the existing ship numbers from the 1592 narrative in the same commit.
4. **Dates in the lunar calendar** of the Korean sources, as `hansan-island` does ("8th day of the 7th lunar month, 1592"), unless a source read converts them. Make the war chronology consistent, or label each date's calendar.
5. **Both sides, and the third.** Each study needs at least four sources read, with the Japanese side from Japanese texts (_Seikan iryaku_, the General Staff's _Nihon senshi: Chōsen eki_, Ogawa's papers) wherever they cover it. For Noryang, try the Ming side (Chen Lin's biography in the _Ming shi_).
6. **Traps to trace, not repeat:** Won Gyun as villain, from Aston and Hulbert, against the Korean scholarship that disputes it; the iron chain and the disguised refugee boats at Myeongnyang, which the encyclopedia reports only as "some records"; the turtle ship as the first ironclad; the theory that Yi sought death at Noryang; and any count of battles won.
7. **Names.** Korean names in Revised Romanization as the catalog already uses (Yi Sun-sin, Won Gyun). Japanese names of this period in Japanese order, as the catalog gives them (Oda Nobunaga, Tokugawa Ieyasu, and Wakisaka Yasuharu in `hansan-island`); the Western order is used only for twentieth-century names. Places as the encyclopedia gives them, with the modern name where it differs.
8. **Checks and approval:** lint, typecheck, unit tests, `db:setup`, build and the end-to-end suite; built sizes of `/battles`, the home page and `/commanders`; the diff summary shown and approval given before the commit. Push only on the user's go-ahead.

## The studies

The dates below are from the encyclopedia's entries as listed in its search results, except Sacheon's, which is to confirm. What each study "adds" is a research plan written partly from memory: the turtle ship's first use at Sacheon, Yi's wound, the feigned withdrawal at Danghangpo, the death of the Japanese commander at Dangpo, the loss of the Gyeongsang fleet before Okpo and Gwon Yul's part in 1597 must each be checked against what is read, and corrected or dropped.

| Candidate                                                 | What it adds                                                                                                                                                                                  | Sources to read                                                                                                                                                                                                                                 |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Okpo**, 5th lunar month 1592                            | Yi's first sortie, with Won Gyun's Gyeongsang fleet already lost: the first Korean victory at sea, and his report as the first record of his command                                          | Yi's report 玉浦破倭兵狀 (_Complete Works_ vol. 2); _Seonjo sujeong sillok_, 25th year, 5th month, 1st day; encyclopedia E0038825; _Seikan iryaku_ vol. 1 or 2; Aston, ch. I; _Nihon senshi_                                                    |
| **Sacheon**, 5th or 6th lunar month 1592 (to confirm)     | The second sortie: the turtle ship's first recorded use and Yi's wound                                                                                                                        | Yi's report on the second sortie (vol. 2, title to confirm); encyclopedia E0026034; the Annals; diary for the 5th–6th months of 1592; _Seikan iryaku_; _Nihon senshi_                                                                           |
| **Danghangpo**, 6th lunar month 1592                      | The same sortie's last battle: a feigned withdrawal to draw the Japanese out of a narrow inlet, the tactic later used at Hansan                                                               | Encyclopedia E0013958; Yi's report; the Annals; _Seikan iryaku_; _Nihon senshi_                                                                                                                                                                 |
| **Busan**, 9th lunar month 1592                           | The attack on the Japanese base: the limits of victory at sea against an enemy holding the shore, and the question Ogawa raises of whether the sea campaign cut Japanese supply               | Yi's report 釜山破倭兵狀 (title to confirm); encyclopedia E0024286; the Annals; Ogawa (2022); _Nihon senshi_                                                                                                                                    |
| **Myeongnyang**, 16th day of the 9th lunar month, 1597    | Yi reinstated with the remnant of the fleet: a narrow strait, the tide and a few ships against many. The battle the legends gather around                                                     | Encyclopedia E0018250 (read); diary for the 9th month of 1597; the Annals; Ogawa's review of the literature (_Bulletin of International Pacific University_ no. 19), which argues the Korean victory was local; _Nihon senshi_; Ballard, ch. II |
| **Noryang**, 11th lunar month 1598                        | The last battle, fought with the Ming fleet against the Japanese withdrawing after Hideyoshi's death; Yi killed. Coalition command and the end of the war                                     | Encyclopedia E0012716; the _Military History_ article of 2011 on Noryang and Yi's death (KCI, full text); the Annals; _Ming shi_, Chen Lin's biography (to find); _Seikan iryaku_; Aston, ch. IV                                                |
| **Chilcheollyang**, 15th day of the 7th lunar month, 1597 | Won Gyun's defeat after Yi was arrested and stripped of command: the fleet Yi built destroyed under the commander the court preferred. The volume's counter-case and the core of its question | Encyclopedia E0058551 and its entry on Won Gyun (E0040619); the Annals (the court's orders to the fleet, Gwon Yul's role); Yi's diary for the 7th month of 1597; Aston, ch. IV; Hulbert, vol. II; _Nihon senshi_                                |
| _Alternative:_ **Dangpo**, 6th lunar month 1592           | Split from Sacheon if Chilcheollyang is not counted: the turtle ship in action, and the death of the Japanese commander there                                                                 | Yi's report; the Annals; the encyclopedia has no battle entry for Dangpo (only the fort and a commemorative map), so a fourth source would need finding                                                                                         |

### The eighth study: Chilcheollyang (chosen)

With `hansan-island`, the first six candidates give Yi seven studies of his own battles. The user chose Chilcheollyang as the eighth from these two options:

- **Chilcheollyang (recommended).** It is the battle the volume's question turns on: the government removed its admiral and the fleet was destroyed within months. Yi was not there; his profile would link it because his arrest and reinstatement frame it, as Slim's profile links Operation Thursday, which he did not lead. It is the best-sourced of the alternatives.
- **Dangpo, split from Sacheon.** All eight would then be Yi's own battles, but Dangpo has no encyclopedia entry and would rest on Yi's report, the Annals and the Japanese accounts, and the 1592 sorties would take five of the eight studies.

## Placement

Rows go in `data/battles/other.ts` under the war `imjin`, beside `hansan-island`, with research files in `data/research/other.json`.

- **Okpo, Sacheon, Danghangpo and Busan** join `joseon-naval-operations-of-1592`, whose narrative grows from one study to five. Rewrite it from the reports and the Annals, and remove its ship numbers.
- **Chilcheollyang, Myeongnyang and Noryang** need a new campaign, proposed as `joseon-naval-operations-of-1597-1598` ("Joseon naval operations of 1597–1598"), with a narrative in `data/campaign-details.ts`. The name follows the 1592 campaign's.
- The `imjin` chronology gains the 1597 arrest and Chilcheollyang, and its dates are made consistent.
- Link each study to Yi's profile (`battleSlugs`), update the catalog counts, the tests and the docs that state them, and add a `docs/SOURCE_AUDIT.md` section in the form of the Slim studies' (sources by study, how each was read, its language, what was not used).

One commit for the studies, after your approval, before Phase 0. If any study cannot reach four sources read, it is dropped or merged and the change is reported before the commit.

---

# The volume (Phase 0 onwards)

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has nine complete volumes, the most recent William Slim's (`data/leadership/william-slim.ts`, under `docs/LEADERSHIP_SLIM_PROMPT.md`), generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`. A comparison page (`/leadership/compare/`, data in `data/leadership/problems.ts`) sets twelve recurring problems beside the lessons that test them.

Your job is to write **Volume 10: Leadership Lessons from Yi Sun-sin**, on the Joseon admiral who commanded the Left Jeolla fleet from 1591 and the navies of the three southern provinces from 1593, was arrested and stripped of command in 1597, was restored after his successor's fleet was destroyed, and was killed at Noryang in the last battle of the war in 1598. It runs from his first sortie in the 5th lunar month of 1592 to his death; his earlier career enters only where the sources used for the war refer to it.

Work, as in the earlier volumes, as three specialists reading the same evidence, with their voices kept separate on the page: **the historian** (what happened, who says so and why that witness might shade it), **the strategist** (the decision against its ends, means, alternatives and enemy, using only what Yi could know) and **the psychologist** (which established mechanism might illuminate the behaviour, how far that reading can go, and never diagnosing the dead). A lesson is finished when each would sign it.

The curriculum below is a **research plan, not a source**. Where it goes beyond what Phase S read, check it against something read, and correct or drop what no source supports.

## What this volume must add, not repeat

The earlier volumes already teach records written by their makers, by friends and by losers, tempo, presence, delegation, rivals, coalitions, stopping, dissent, succession, the government at home, supply, rebuilding after defeat, and a cause that is the ledger. Yi earns a volume by what he shows that the others could not:

- **A government more dangerous than the enemy.** Napoleon was the government; Wellington and Slim answered to governments that trusted them in the end; the Serbian Supreme Command lost its chief to illness and politics. Yi was charged with crimes deserving death by his own king in the middle of the war, on the strength of an enemy agent's story, and restored only after the fleet he built was destroyed. The volume asks how a commander leads under that threat, and whether the threat was what the sources make it.
- **A record shaped by family, court and nation.** Yi's own diary and reports survive, but the sayings that made him famous come from his nephew's _Record of Conduct_; the Annals were compiled after the war and later revised; the Japanese compilation drew on Ryu Seong-ryong's _Jingbirok_; and Yi became a national symbol in modern Korea, which shaped how his rival Won Gyun was remembered. The orientation builds on the earlier records with a sixth case: a commander whose own words are in a language most readers cannot check, and whose legend was built by others.
- **War at sea.** No earlier volume is naval. The studies give the panokseon, the turtle ship, the tide and the narrows, and the limits of a fleet against an enemy holding the shore.
- **A rival who is still argued over.** Won Gyun's reputation is a live dispute in Korean scholarship. The volume must give both sides from the sources and not settle it by repeating Yi's.

Link earlier lessons where a theme meets them, and build on them: Slim's `how-to-read-slim` and `after-rangoon`, the Serbian volume's `after-the-chief` and `the-people-left-behind`, the Hannibal volume's `both-rejected` and `reading-the-consul`, Wellington's `allies-he-could-not-command`, Caesar's `lieutenants` and `a-rival-who-knew-him`, Grant's `how-to-read-grant-and-lee`.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read** in the session, and record it in `docs/SOURCE_AUDIT.md`. The Korean Classics Database and the encyclopedia need the browser; the National Institute of Korean History's Annals site refuses repeated requests, so read the Annals in the Korean Classics Database, whose Annals record IDs follow the pattern `ITKC_JT_N0_A30_07A_22A_00030` (the _Seonjo sillok_, 30th year, 7th month, 22nd day, third entry; `N1` for the revised edition).
3. **Copyright.** Yi's diary, reports and the Annals' originals are out of copyright; their modern Korean translations are not. Paraphrase translations and quote at most a few words. The 1977 English translation of the diary is in copyright and the copy on the Internet Archive is unlicensed: do not use it.
4. **Reading in the original.** Paraphrase Classical Chinese and Korean in your own words, name the language and the text, and do not put an English sentence in quotation marks as Yi's, the king's or anyone's unless a source read in English prints it so. Say where a reading is uncertain.
5. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty, army or ship figures, though every Korean source gives them; no invented quotations; no guessed coordinates; no ratings. Use `fact`, `interpretation` and `uncertainty` honestly. Add this volume's banned sayings to `leadershipVolumeSchema`.
6. **No retrospective diagnosis.** No psychiatric or personality labels. Yi's grief for his mother, his illnesses and his dreams, all recorded in the diary, are not evidence of a condition; Won Gyun's drinking, reported by his enemies, is a report to be attributed, not a fact about his character.
7. **One case proves nothing.** Every principle is conditional with its scope, and every lesson includes a case where the same behaviour failed, from the catalog.
8. **Judge decisions by what was knowable then.** Yi did not know in 1597 whether Katō Kiyomasa's crossing was a trap; Won Gyun did not know where the Japanese fleet would strike.
9. **The human cost stays in the frame,** without figures: the refugees on the shore, the Koreans held captive on Japanese ships and their testimony, the rowers and fishermen taken into the fleet, the deserters executed, the Japanese soldiers who drowned or fled ashore, the Ming soldiers, the Korean towns burned, and the captives the Ming admiral proposed to kill as collaborators.
10. **No nationalist voice and no mirror image.** Describe the Japanese invasion as the sources do; do not make Japanese commanders villains or Yi a saint, and do not make Won Gyun a villain or a victim.
11. **Names and dates** as in Phase S: Korean names in Revised Romanization, Japanese names of this period in Japanese order, Chinese in pinyin; lunar dates as the Korean sources give them.
12. **No management-book voice.** Conditions and questions, not instructions. A national hero invites lessons in virtue; the volume tests claims instead.
13. **Work in batches of two to four lessons,** with the full checks after each, the diff summary shown and approval given before each commit, and no push without the user's go-ahead.

## The question that organises the volume

> **How do you lead when your own government is the greater danger: by obedience, by evasion, by results, or does the record decide who was in danger?**

The candidate answers:

- **Obedience:** Yi waited for orders before leaving his province in 1592 and accepted arrest and service without rank in 1597.
- **Evasion:** he delayed the sortie the court ordered against Katō in 1597, which was the charge against him.
- **Results:** victories made him indispensable, and the fleet's destruction under Won Gyun brought him back.
- **The record:** the danger from the court is told chiefly by the Annals' historians, his nephew and later admirers, who had reasons to tell it so.

Test the premise. Was the court the greater danger, or the Japanese, or his ally, or his rival? Did the king's charges have any substance? Do not choose in advance.

## Traps specific to Yi

Trace each one and record the result in the evidence pass.

| Saying or story                                | Problem to resolve                                                                                                   |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| "I still have twelve warships"                 | Where does it come from: Yi's own memorial, the Annals, or a later biography? Give it with its source, or not at all |
| His last words, "do not announce my death"     | Find each version and who is said to have concealed his death                                                        |
| "Those who resolve to die live"                | Yi's own citation of the military classics on the eve of Myeongnyang; confirm in the diary                           |
| Undefeated in twenty-three battles             | A modern count; find whether any source read gives it, and do not use it as fact                                     |
| The turtle ship as the first ironclad          | What Yi's own description says                                                                                       |
| Tōgō Heihachirō's praise of Yi                 | A story that Japan's admiral at Tsushima ranked Yi above Nelson or himself. Trace it to a source read, or ban it     |
| "Nelson of the East"                           | Ballard's chapter of 1921; give it with its author and his errors                                                    |
| Won Gyun as coward and drunkard                | From _Jingbirok_, Aston and Yi's own diary; set it against Lee Jeong-il's entry and the 1604 merit roll              |
| The iron chain and the disguised refugee boats | The encyclopedia reports them only as "some records"                                                                 |
| Yi sought death at Noryang                     | The _Military History_ article doubts it; give the theory with its doubts                                            |
| The court's danger                             | The Annals' historians of 1598 and Yi's nephew are both partisans; read the king's own words of 1597 beside them     |

**Claims you must not use:** retrospective diagnoses; the popular-psychology list in the Napoleon prompt; any figure for ships, men or losses as fact; the twenty-three battles; and any statement of what Yi thought or felt that the diary does not record.

## The curriculum

Engagement slugs: `okpo`, `sacheon-1592`, `danghangpo`, `hansan-island`, `busanpo`, `chilcheollyang`, `myeongnyang`, `noryang`; campaigns `joseon-naval-operations-of-1592` and `joseon-naval-operations-of-1597-1598`; war `imjin`. Counter-cases come from catalog profiles and studies.

### Orientation

**0. `how-to-read-yi` — A commander written by his nephew, his court and his nation**

- Purpose: the diary, its gaps and the 1795 printing; the reports, written to the court; the _Record of Conduct_ by his nephew Yi Bun, the source of the famous sayings; the Annals and their revised edition; _Jingbirok_ through the _Seikan iryaku_; the Ming shi; Ballard and Aston; the modern encyclopedia's two views of Won Gyun. The voices that are missing: the rowers, the refugees, the captives, the Japanese crews.
- Episodes: Okpo as told by the report, the revised Annals and the _Seikan iryaku_; the twelve ships; the three versions of who hid his death.
- Psychology: `base: "none"` unless a review on collective memory is read.

### Part I. The first year

**1. `beyond-his-province` — Going where the orders do not reach**

- Claim: a commander whose neighbours have collapsed may go to their aid, but if he waits for authority he keeps the court's trust at the price of time, and if he does not he risks both.
- Episodes: `okpo`; Won Gyun's appeal; the commanders' reluctance and Jeong Un's urging; the deserters executed.
- Counter-case: Emmanuel de Grouchy at Waterloo (`emmanuel-de-grouchy`, `waterloo`), who kept to his orders and did not march to the guns.

**2. `the-new-ship` — A new weapon inside an old formation**

- Claim: a new weapon can open a battle if it is the point of a trained force, but it does not win alone, and its legend may outrun what it did.
- Episodes: `sacheon-1592`; Yi's description of the turtle ship; the feigned withdrawal and the tide; Yi's wound.
- Counter-case: Oda Nobunaga at Nagashino (`oda-nobunaga`, `nagashino`), firearms used inside a prepared position.

**3. `a-way-out` — Shaping where the enemy fights**

- Claim: an enemy who can escape ashore may be better offered a way out to sea, where he can be destroyed, but the method needs room and an enemy who takes the bait.
- Episodes: `danghangpo` and `hansan-island`; the reconnaissance, the opened line and the ship left at the mouth.
- Counter-case: Hannibal at Cannae (`hannibal-barca`, `cannae`), an enemy given no way out; link the Hannibal volume's `reading-the-consul`.

**4. `what-a-fleet-cannot-do` — The limits of victory at sea**

- Claim: a fleet can burn ships at anchor but cannot take a port without troops, and a commander may hold back from driving a beaten enemy to desperation, but his restraint can look like failure at court.
- Episodes: `busanpo`; Yi's reasons for withdrawing; the revised Annals' verdict; Ogawa's question about supply.
- Counter-case: John Jellicoe at Jutland (`john-jellicoe`, `jutland`), a fleet that kept command of the sea without a decisive victory.

### Part II. Rivals and the court

**5. `the-joint-report` — Credit, rivals and the court**

- Claim: how a commander reports his success shapes his rivals as much as his court, and an honest report that shames a colleague may cost the service later.
- Episodes: the joint report of 1592 (revised Annals); Yi's complaints of Won Gyun's men in the Okpo report; his rule to reward fighting rather than heads; the king's charge of 1597 that Yi had taken others' merit.
- Counter-case: from the catalog; link Caesar's `a-rival-who-knew-him` and `lieutenants`.

**6. `the-agents-story` — Refusing an order the enemy wrote**

- Claim: a commander who will not act on intelligence he suspects may be right about the enemy and still be destroyed by his own side, and the court that punishes him may believe it is enforcing discipline.
- Episodes: Yoshira's story and the sortie against Katō; the king's memorandum of the 3rd month of 1597; the factional reading in the encyclopedia; the _Seikan iryaku_'s account of Konishi's design.
- Counter-case: Joseph Stilwell's recall in 1944 (`joseph-stilwell`); link the Serbian volume's `after-the-chief`.

**7. `the-successor` — Ordered to attack**

- Claim: a successor appointed because he promised what his predecessor would not do may be unable to refuse the order to do it, and the defeat that follows belongs to more than one person.
- Episodes: `chilcheollyang`; Gwon Yul's pressure and the flogging; the king's judgement that the commander-in-chief's pressure caused the defeat; the two views of Won Gyun.
- Counter-case: from the catalog, a commander pressed by his government into an offensive he doubted; propose in the evidence pass.

### Part III. With almost nothing

**8. `without-rank` — Serving under the men who removed you**

- Claim: a commander removed from command can keep his usefulness by serving where he is put, but his service is a choice the sources record only from his side.
- Episodes: the diary of the 4th–7th months of 1597: his release, his mother's death, his service under Gwon Yul, the news of Chilcheollyang and his visit to the coast.
- Counter-case: from the catalog; link the Hannibal volume's `both-rejected` and Slim's `after-rangoon`.
- Note: the evidence pass may merge this lesson into lessons 6 and 9.

**9. `the-remnant` — Myeongnyang**

- Claim: a commander with almost nothing left can choose the ground and the moment, and his example and threats may hold a frightened force together for one battle, but one battle does not decide a campaign.
- Episodes: `myeongnyang`; the reappointment and the journey; Bae Seol's desertion; the move away from the strait; the threats to An Wi and Kim Eung-ham; the withdrawal north; the court's "small victory" and Ogawa's reading.
- Counter-case: Tadamichi Kuribayashi at Iwo Jima (`tadamichi-kuribayashi`, `iwo-jima`), a defence with almost nothing that held the ground it chose and was destroyed.

### Part IV. The end

**10. `an-ally-who-would-let-them-go` — Coalition at the end of a war**

- Claim: when the enemy is leaving, an ally may prefer to let him go, and a commander who wants to destroy him must persuade the ally without breaking the coalition.
- Episodes: the siege of the Suncheon fortress; Liu Ting's withdrawal; the envoys and their gifts; the _Record of Conduct_ on Yi's refusal to speak of peace and his dispute with Chen Lin over the captives on Namhae; the Annals on Yi's pleading.
- Counter-case: link Wellington's `allies-he-could-not-command` and Slim's `last-in-line`; a catalog counter-case to propose in the evidence pass.

**11. `noryang` — Death in the last battle**

- Claim: a commander's death in victory can become the story of his life, but how he died and who kept it secret are reported differently by every source.
- Episodes: `noryang`; the three versions of the concealment; the theory that he sought death; Deng Zilong; Shimazu or Konishi; the Ming credit.
- Counter-case: Thomas J. Jackson at Chancellorsville (`thomas-j-jackson`, `chancellorsville`), mortally wounded at the height of a victory.

**12. `the-ledger` — Answering the question**

- Purpose: weigh the evidence, answer "How do you lead when your own government is the greater danger?", test the premise that it was, and invite the reader to argue the opposite. Include the refugees and captives, the rowers and fishermen, the executed deserters, the Japanese soldiers, the Ming dead, Won Gyun's reputation, and what Korea made of Yi afterwards.
- Counter-case: the Serbian volume's `the-ledger-of-survival` or Slim's `the-ledger`.

Thirteen lessons are planned; the evidence pass should expect to merge one (lesson 8).

### Sources

The Phase S reading in `docs/SOURCE_AUDIT.md`, and for the lessons: Yi's diary and reports in the Korean Classics Database; the _Record of Conduct_ (vol. 9 of the _Complete Works_); the Annals and their revised edition there; the encyclopedia's entries on the battles, Yi, Won Gyun, Gwon Yul and Ryu Seong-ryong; the _Seikan iryaku_ and the _Ming shi_; the KCI articles found in the source check (Noryang, Won Gyun's reputation, Arima Seihō's criticism), full text where it can be opened; Ogawa; Aston and Ballard. Psychology: reviews and meta-analyses, abstracts at least, cited for what they say.

### Phases

- **Phase S.** Done (`0cda2cb`).
- **Phase 0.** The evidence pass, `docs/LEADERSHIP_EVIDENCE_YI.md`; route `/leadership/yi-sun-sin/`; the scaffold, unlisted; the banned sayings. One commit.
- **Phase 1, pilot.** Lessons 0, 6 and 9: the record, the agent's story and the remnant, which test the question from the record, the court and the battle. Stop for the user to judge.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order.
- **Phase 3, integration** and a comparison-page batch: add the volume's lessons to the existing problems, and propose a new problem if one arises, such as "a government against its commander". Planned in detail below, after the volume was completed (`2ce61e8`).
- **Phase 4, optional, ask first.** Up to three Decision Room exercises (candidates: Yi on Won Gyun's appeal in 1592; Yi ordered to intercept Katō in 1597; Won Gyun ordered to sail in 1597), and profiles for figures the lessons need (Won Gyun, Chen Lin, Gwon Yul, Ryu Seong-ryong), with a revision of Yi's profile. Planned in detail below (27 November 2026).

### Phase 3 plan (26 November 2026)

Two commits, as for the Slim volume (`7c1993d`, then batch T8 `3fc1a83`), each shown for approval first.

**Step 1, integration (no new code expected).** On the built site, at desktop width and at 375 pixels:

- the Leadership Lessons hub lists the volume as complete, and `/leadership/yi-sun-sin/` shows twelve lessons in five parts with the strength-and-shadow table;
- Yi's profile links the volume and the lessons that discuss him;
- the twelve counter-case profiles link back to their lessons: Grouchy, Nobunaga, Hannibal, Jellicoe, Labienus, Slim, Stilwell, Putnik, Kuribayashi, Blücher, Jackson and Belisarius;
- the engagement studies link their lessons: Yi's seven (Okpo, Sacheon, Danghangpo, Busanpo, Chilcheollyang, Myeongnyang, Noryang) and the counter-case battles (Waterloo, Nagashino, Cannae, Jutland, Syrmia 1914, Iwo Jima, Chancellorsville);
- search finds the lessons, and the sitemap lists all thirteen routes.

Then add the README feature line for the volume, the release row for `2ce61e8`, and the status in this prompt and the roadmap. Any defect found goes into the report, not silently into the commit.

**Step 2, comparison batch T9.** Yi becomes the tenth column of `/leadership/compare/`. Every placement below is to be confirmed against the lesson's own claim and text when the note is written; each note gains a Yi passage and a closing condition drawn only from the linked lessons.

| Problem                       | Yi lessons                                             | Why                                                                                      |
| ----------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Reading the record            | `how-to-read-yi`, `the-joint-report`                   | The diary, the reports and Yi Bun's sayings; two admirals' reports of the same victories |
| Taking over an organisation   | `the-successor`, `the-remnant`                         | Won Gyun inheriting a fleet and an order; Yi inheriting what was left of it              |
| Rebuilding after defeat       | `the-remnant`                                          | Gathering men and ships after Chilcheollyang, held together by example and by fear       |
| Presence and shared risk      | `noryang`, `the-remnant`                               | His ship alone in the strait; his death at the front in the last battle                  |
| Reading the enemy             | `the-new-ship`, `a-way-out`                            | A new ship for a new kind of fight; the lure at Hansan after Danghangpo                  |
| Who can tell you no           | `the-agents-story`                                     | A commander telling his court no, and the arrest it cost him                             |
| When to stop, when to persist | `what-a-fleet-cannot-do`                               | Busan: what a fleet could not do against an enemy ashore                                 |
| What cannot be replaced       | `the-successor`                                        | The fleet, lost at Chilcheollyang and not to be replaced                                 |
| Succession                    | `the-successor`, `noryang`                             | A successor bound by his promise; a death hidden so the battle could go on               |
| Allies and coalitions         | `an-ally-who-would-let-them-go`, `beyond-his-province` | Chen Lin and the peace on offer; going to the aid of another province's fleet            |
| Victory and settlement        | none                                                   | The war ended by the enemy's withdrawal; the volume is named among those with no lesson  |
| Who pays                      | `the-ledger`                                           | The ledger's second column                                                               |

That is seventeen entries under eleven problems, and nineteen from all twelve lessons with the new problem below.

**Proposed new thirteenth problem: "The government at home"**, asking: when the leader's own government can recall, replace or punish him, what keeps his command, and what does keeping it cost? The Yi volume's question is this problem, and several volumes already have a lesson on it:

- Yi: `the-agents-story`, `the-ledger`;
- Wellington: `the-government-at-home`;
- the Serbian Supreme Command: `after-the-chief`;
- Caesar: `the-rubicon`, the commander who turned on the authority that gave him his army;
- Hannibal and Scipio: `taking-the-war-to-africa` and `both-rejected`;
- Slim: `after-rangoon`;
- Grant and Lee: `general-in-chief`, if its text bears it out on Grant and the political leadership;
- Foch and Haig: to be checked in the batch (the volume mentions Lloyd George in several lessons, but none is titled for him);
- Napoleon and Alexander: named as having no lesson, since each was the government; the note says so.

**The grid.** Ten volumes in three columns leave the tenth card alone on a last row on screens wider than 1200 pixels. Recommended: on those screens, a lone last column spans the full row, so the Yi entries read as a closing band rather than a stray card; two columns between 760 and 1200 pixels already give five full rows, and one column below. The alternative is to leave the lone card as it falls. The heading becomes "The same problem, ten records". Tests count the new column, cards and problem; a source-audit section records the placements, and the commit carries the README row for the Step 1 commit.

### Phase 4 plan (27 November 2026)

Optional, as the phase list says; three commits, as for the Slim volume (`a4c0ba7`, `e615d56`, `3e31d03`), each shown for approval first. Every fact comes from sources read and audited for the volume, or read in the batch and recorded; no figures; Korean names in Revised Romanization, Japanese in Japanese order, lunar dates.

**Step 1, Yi's profile revised.** The profile still links the National Museum of Korea's exhibition page and was written before the volume. Rewrite every field from the volume's reading, with Lee Jang-hee's entry on Yi in the Encyclopedia of Korean Culture (read in Phase S) as its source: the first year's sorties and the waiting for orders; the command of the three provinces from 1593; the joint report and the rivalry; the charges of 1597 and service without rank; Myeongnyang; the coalition with Chen Lin; Noryang, with the disputed accounts of his death. The limitation names what the volume found: the sayings that made him famous come from his nephew's _Record of Conduct_, his reports put his rival's failings on the record, the recruitment in Namwon, and the court's verdict of a small victory at Myeongnyang. The current "notable decision" (Myeongnyang) and "setback" (1597) stay, reworded from the lessons.

**Step 2, three Decision Room exercises** (45 → 48), each told as the commander knew it, with one historical option and two counterfactuals, the historical one placed in a different position each time:

| Exercise                                        | Study            | The decision                                                                                                                                                                                                             | Sources (all read for the volume)                                                                                                           |
| ----------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Yi and Won Gyun's appeal, 5th month of 1592     | `okpo`           | Sail at once beyond his province; wait for the court's order and the Right Jeolla fleet (historical: he waited for the order, then sailed without the Right Jeolla ships); or refuse, citing the boundary of his command | Yi's reports on going to Gyeongsang's aid and on Okpo; his diary; the revised Annals; the _Seikan iryaku_                                   |
| Yi ordered to intercept Katō, 1st month of 1597 | `chilcheollyang` | Sail at once on the agent's report; delay and sail only to show willingness (historical, as the encyclopedia and the _Seikan iryaku_ tell it); or refuse in writing and report his reasons                               | The Annals of the 1st and 3rd months of 1597; Lee Jang-hee's entry; the _Seikan iryaku_, vol. 4                                             |
| Won Gyun ordered to sail, 7th month of 1597     | `chilcheollyang` | Sail with the whole fleet towards Busan as ordered (historical); refuse, as Bae Seol said he would rather do; or sail with part of the fleet and keep Hansan held                                                        | The Annals of the 1st and 7th months of 1597; the encyclopedia's entries on Chilcheollyang and on Won Gyun; Yi's diary; the _Seikan iryaku_ |

The second exercise needs care: the sources disagree on whether Yi refused, delayed or sailed reluctantly, so its historical option and feedback will say so. An alternative to it, if preferred: Yi and Chen Lin before Noryang, 11th month of 1598 (accept the peace, blockade on, or press the ally to meet the relief fleet), study `noryang`.

**Step 3, new profiles** (135 → 139 at most), each with its own source and named as `people` in the lessons that discuss it at length:

- **Won Gyun**, from Lee Jeong-il's entry in the Encyclopedia of Korean Culture (read), with the Annals and the 1604 merit roll; both views of him kept. Lessons: `the-joint-report`, `the-agents-story`, `the-successor`.
- **Chen Lin**, from the _Ming shi_, vol. 247 (read), with the _Record of Conduct_ and the _Seikan iryaku_. Lessons: `an-ally-who-would-let-them-go`, `noryang`.
- **Gwon Yul**, the commander-in-chief who pressed Won Gyun to sail; his encyclopedia entry is not yet read and has to be found first (the encyclopedia's search was not reachable by script and will be used in the browser). Lesson: `the-successor`.
- **Ryu Seong-ryong**, Yi's patron and the author of _Jingbirok_, a minister rather than a commander; likewise not yet read. Lessons: `how-to-read-yi`, `the-agents-story`. He may be left out if a civil official does not fit the Hall of Commanders.

Konishi Yukinaga appears in many lessons, but no source on his life has been read; he is not proposed unless one is. Each profile that cannot be sourced is dropped, and the gap recorded, as Mutaguchi's was for the Slim volume.
