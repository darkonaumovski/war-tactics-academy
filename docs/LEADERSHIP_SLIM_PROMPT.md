# Prompt: Leadership Lessons from William Slim (Volume 9)

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (24 November 2026):** Phase S done. The user chose Slim from the later volumes listed in `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, after the Grant and Lee volume and all its proposals were completed, and approved seven studies: Gallabat (with a new `east-african-campaign`), the retreat from Burma (`burma-1942`, in `japanese-offensive-of-1941-1942`), and the first Arakan offensive, the Admin Box, Operation Thursday, Meiktila and Mandalay (one study, as Kirby treats them) and the race for Rangoon, all in `burma-campaign`. Slim's profile links eight studies; what was read is in `docs/SOURCE_AUDIT.md`. The source check below was corrected during Phase S: the Indian histories of the retreat and the reconquest are not transcribed on HyperWar, and their scans on the Internet Archive are lending-restricted, so they were not used; Kirby's five volumes and N. N. Madan's _The Arakan Operations, 1942–45_ are openly readable on the Internet Archive. Deepening `imphal-kohima` from Kirby vol. III and Monograph No. 134 remains proposed. Phase 0 done: `docs/LEADERSHIP_EVIDENCE_SLIM.md` grades the fourteen lessons (lesson 6 to be read up on the soldiers' side or folded into lessons 4 and 13), traces every saying in the traps table and finds that Kirby credits the rebuilding measures of late 1943 to Auchinleck as well as Slim; the volume is scaffolded unlisted at `data/leadership/william-slim.ts`, with three sayings banned in `lib/validation.ts` (the Kohima Epitaph without Edmonds, "Leadership is just plain you" and the wartime slur for the Japanese). The pilot, lessons 0, 4 and 7, is next.

## Why Slim, and what is missing (readiness analysis, 24 November 2026)

`docs/LEADERSHIP_VOLUME_TEMPLATE.md` asks for a profile and at least eight engagement studies, so lessons link to studies instead of retelling them. Slim links one study (`imphal-kohima`). He was chosen ahead of Yi Sun-sin because the record of his war can be read in full without his memoir. The British official history's volumes on Burma, the Indian official histories, the Japanese army's own operational monographs, the published wartime despatches and the U.S. Army's histories of the theatre are all openly readable, while a translation of Yi's war diary that can lawfully be read has still not been found. Slim's own books are in copyright, so the volume is about a commander whose own account can be quoted only briefly. That is the opposite problem to Grant's.

Counting `battleSlugs` in `data/commanders.json`:

| Material                | In the catalog now                                                                                                                                                                                                                                                           | Gap                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Studies he commanded in | 1: `imphal-kohima` (1944), with five sources: two National Army Museum pages, an Imperial War Museums photo essay, a JACAR timeline entry and Arakawa's paper for the National Institute for Defense Studies (2002). `singapore-1942` (Yamashita) is the nearest other study | Seven more to reach eight. Nothing of his first battles, the 1942 retreat, the Arakan or the reconquest of 1945, which is the half of the story his memoir's title promises. `imphal-kohima` itself rests on museum and encyclopedic pages and should be deepened from the official histories and Japanese Monograph No. 134 |
| Campaigns and wars      | War `ww2`; campaign `burma-campaign`, whose narrative (Saunders's RAF history and two U.S. Army campaign brochures) covers 1944; campaign `japanese-offensive-of-1941-1942`, which holds `singapore-1942`                                                                    | No narrative for the 1942 retreat, the Arakan in 1943 or the 1945 offensive, and no East African campaign for 1940. Phase S must decide which campaign each new study joins and which narratives grow                                                                                                                        |
| Profiles                | `william-slim`, a concise profile sourced to the National Army Museum's "William Slim: The soldiers' soldier". `tomoyuki-yamashita` is the only Japanese army commander of the Asian land war with a profile                                                                 | Thin for a volume subject. The evidence pass should propose a revision, as for Wellington, Caesar, Hannibal and Scipio, and Grant and Lee (`4b891b1`, `735ab6b`, `4526f99`, `964af82`)                                                                                                                                       |
| Counter-case profiles   | The earlier volumes' subjects and counter-cases. No one from the Burma war but Slim                                                                                                                                                                                          | No profiles of Mutaguchi, Wingate, Stilwell, Mountbatten, Giffard, Leese, Sato, Kimura or Messervy. Refer to them in prose, or propose profiles in Phase 4                                                                                                                                                                   |
| Learning material       | No Decision Room exercise from Burma. The Second World War course's unit on 1942–1944 names `imphal-kohima`, and a lesson quiz asks what Mutaguchi gambled on                                                                                                                | Phase 4 may propose exercises                                                                                                                                                                                                                                                                                                |
| Earlier volumes' use    | Slim has not appeared in any volume                                                                                                                                                                                                                                          | The orientation should say where readers have met an army rebuilt after defeat: the Serbian volume's `the-retreat-that-kept-an-army` and the Western Front's `where-the-learning-happened`                                                                                                                                   |

**Source check (24 November 2026).** Opened in this session, so that the plan rests on what can actually be read:

- **The British official history**, S. Woodburn Kirby and others, _The War Against Japan_ (HMSO, 1957–1969). HyperWar's index of the British official histories lists all five volumes without links. Its page for volume II, _India's Most Dangerous Hour_ (1958), gives only the contents: the defence and loss of Burma in 1942, the first Arakan offensive and the first Chindit operation. Volume III, _The Decisive Battles_ (1961), was opened as a scan at generalstaff.org of a library copy digitised by Google; a search reports volume IV, _The Reconquest of Burma_, at the same site, but it has not been opened. Confirm each volume's address and its copyright status before relying on it.
- **The Indian official histories**, _Official History of the Indian Armed Forces in the Second World War_ (Combined Inter-Services Historical Section, India and Pakistan). HyperWar has the contents pages of _The Retreat from Burma, 1941–42_ (1954) and _The Reconquest of Burma_, volumes I (1958) and II (1959), but their chapters are not transcribed (corrected in Phase S: the chapter pages return errors, and the scans on the Internet Archive are lending-restricted). _East African Campaign, 1940–41_ is transcribed in full; its third chapter, "The First Encounters", covers Gallabat. N. N. Madan's _The Arakan Operations, 1942–45_ (1954) is openly readable on the Internet Archive.
- **The Japanese Monographs**, operational histories written after the war by former Japanese officers for the U.S. Army, listed in HyperWar's guide. No. 134, _Burma Operations Record: 15th Army Operations in Imphal Area and Withdrawal to Northern Burma_ (revised, January 1943 to January 1945), and No. 132, _28th Army Operations in Akyab Area_ (revised, November 1943 to September 1945), have PDF links. Nos. 57, 58, 59, 131 and 148 are listed without them. The PDFs have not been opened.
- **The despatches** in the _London Gazette_. Supplement 38228 (11 March 1948), "Operations in Burma from 15th December, 1941, to 20th May, 1942", is Wavell's despatch covering the reports of Hutton and Alexander, and was opened in full. Supplement 38266 (22 April 1948), "Operations in the India Command, from 1st January, 1943, to 20th June, 1943", was opened at its first page. Single pages of later despatches were opened in Supplements 37728 (18 September 1946), 39171 (19 March 1951) and 39195 (12 April 1951). Confirm each despatch's title and author from its first page before citing it.
- **The U.S. Army's histories**, on HyperWar: Romanus and Sunderland's three volumes on the China–Burma–India theatre (_Stilwell's Mission to China_, _Stilwell's Command Problems_, _Time Runs Out in CBI_) and the campaign brochures _Burma, 1942_, _India-Burma_ and _Central Burma_. The site already cites the last two.
- **Reported, not opened:** the Australian Dictionary of Biography's entry on Slim by M. Collins Persse (2002); Slim's talk "Higher Command in War" to the U.S. Army Command and General Staff College in April 1952, printed in _Military Review_ in May 1990.

**Verdict:** a strong subject with readable official records from three armies, but seven studies short. A studies phase that gives him his first defeats, the retreat, the Arakan and the battles of 1945 would complete it.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has eight complete volumes: Napoleon (`data/leadership/napoleon.ts`), Alexander the Great (`data/leadership/alexander-the-great.ts`), the Serbian Supreme Command (`data/leadership/radomir-putnik.ts`), Foch and Haig (`data/leadership/douglas-haig.ts`), Wellington (`data/leadership/arthur-wellesley.ts`), Julius Caesar (`data/leadership/julius-caesar.ts`), Hannibal and Scipio (`data/leadership/hannibal-barca.ts`) and Grant and Lee (`data/leadership/ulysses-s-grant.ts`). They were built under `docs/LEADERSHIP_LESSONS_PROMPT.md`, `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, `docs/LEADERSHIP_WELLINGTON_PROMPT.md`, `docs/LEADERSHIP_CAESAR_PROMPT.md`, `docs/LEADERSHIP_HANNIBAL_SCIPIO_PROMPT.md` and `docs/LEADERSHIP_GRANT_LEE_PROMPT.md`, and generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`. A comparison page (`/leadership/compare/`, data in `data/leadership/problems.ts`) sets eleven recurring problems beside the lessons that test them.

Your job is to write **Volume 9: Leadership Lessons from William Slim**, on the commander who led the British and Indian forces out of Burma in 1942 and back into it in 1945. It runs from his first battle as a brigade commander, at Gallabat in 1940, to the fall of Rangoon in May 1945 and his near-removal in the same month. His later career enters only where it bears on how he was judged and remembered: _Defeat into Victory_ (1956), the account that made his reputation.

Work, as in the earlier volumes, as three specialists reading the same evidence, with their voices kept separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what the commander could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses the dead.

A lesson is finished when each specialist would sign it. If they disagree, show the disagreement.

The curriculum below is a **research plan, not a source**. Dates, episodes, attributions, sayings and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## What this volume must add, not repeat

The earlier volumes already teach inheritance, intuition, tempo, presence, recognition, delegation, rivals who learn, victory without settlement, stopping, dissent, succession, the consent of followers, coalitions, learning under attrition, caution as arithmetic, supply, the government at home, records written by their makers, by the winners' friends and by the losers, speed, an army bound to its general, an army of many peoples, delay, a young commander, learning from the enemy, persistence, a war won by resources, and a cause that is the ledger. Slim earns a volume by what he shows that the others could not:

- **Rebuilding an army after defeat.** The Serbian army was saved by retreat and rebuilt by allies; the Western Front's armies learned while attacking. Slim's army had been beaten in Burma and in the Arakan, and the volume can ask what turns an army that expects to lose into one that expects to win, and how much of that was one commander's doing.
- **A commander who began with defeats.** Gallabat, the 1942 retreat and the first Arakan were all defeats or failures in which he had a part. The volume can ask what a commander learns from his own defeats and how far he admits them.
- **Fighting at the end of the line.** Burma came last in Allied priorities for men, aircraft and landing craft, and the volume can ask how a commander plans when the means are decided elsewhere.
- **An army of an empire that was ending.** The Fourteenth Army was largely Indian, with African, Gurkha, Burmese and British formations, raised by a colonial state that many Indians and Burmese were working to end. Within three years of victory India, Pakistan and Burma were independent. No lesson may treat the army's loyalty, or the choices of those who fought against it, as simple.
- **A record written by a general who wrote well.** _Defeat into Victory_ is among the most admired generals' memoirs, and it frames how the campaign is still told. The orientation can build on the earlier records with a fifth case: a memoir that is generous to others and severe on its author, and still a memoir.

Where a lesson meets an earlier volume's theme, link that lesson in prose and build on it; do not restate its psychology or its argument. In particular: link the Serbian volume's `the-retreat-that-kept-an-army`, the Western Front's `where-the-learning-happened` and `the-ledger-of-learning`, Wellington's `the-scum-of-the-earth` and `allies-he-could-not-command`, the Hannibal volume's `an-army-of-many-peoples` and `reading-the-consul`, Caesar's `my-soldiers`, Napoleon's `plan-for-being-wrong` and `be-seen-where-it-is-hardest`, and Grant's `how-to-read-grant-and-lee` and `surprised-at-shiloh`.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check (HyperWar fails curl's certificate check here; Britannica refuses scripts). Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Copyrighted and paywalled work** may be cited only for what you lawfully read: an abstract (the audit must say "abstract only"), a publisher's page, a review, or a short quotation from a page that is openly readable. Slim's _Defeat into Victory_ (1956), _Unofficial History_ (1959) and _Courage and Other Broadcasts_ (1957) are in copyright, as are the standard modern histories and biographies (Lewin, Lyman, Allen, Keane, Rooney and others) and soldiers' memoirs such as Fraser's. Do not reconstruct them. A saying of Slim's may be used only as an openly readable page prints it, named as from his memoir, with its date.
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty or army figures, no invented quotations, no guessed troop coordinates, no numerical commander ratings. The losses of the Japanese Fifteenth Army at Imphal and the deaths among refugees in 1942 are famous and contested; give none of them, and say so where a source's number is the point. Use `fact`, `interpretation` and `uncertainty` honestly. `leadershipVolumeSchema` enforces much of this; add this volume's banned sayings to it.
5. **Quotations** only from a text you read, with its chain of transmission: despatches and orders as printed, the official histories as written by authors with access to the records, the Japanese Monographs as postwar accounts by officers of the defeated army, and recollections written later named as such. The memoir was written ten years after the events; treat it as a recollection.
6. **No retrospective diagnosis.** No psychiatric or personality labels. Stories of Wingate's health and behaviour, Mutaguchi's ambitions and Stilwell's temper are reports to be traced to their sources; draw no inference about command from them.
7. **One case proves nothing.** Every principle is a conditional claim with its scope, and every lesson includes a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.** Slim did not know in March 1944 how large a force was marching on Kohima, or in December 1944 that the Japanese would fall back behind the Irrawaddy.
9. **The human cost stays in the frame,** stated as fact, not spectacle, and without figures: the soldiers of every army, Indian, African, Gurkha, Burmese, British, Chinese, American and Japanese, and of the Indian National Army; the Indian and Burmese refugees who walked out of Burma in 1942; the Bengal famine of 1943, with India the base of the army; the Naga, Kuki, Chin and Kachin peoples whose hills were the battlefield; the prisoners of the Japanese, among them those on the Burma–Thailand railway; the wounded killed in the dressing station at the Admin Box, if the sources confirm it; the starving Japanese soldiers on the retreat from Imphal; and the Burmese towns destroyed in 1945.
10. **No imperial nostalgia, and no mirror image.** The army served a colonial state. Its soldiers were volunteers whose reasons the sources rarely record; say so. Describe the Indian National Army and the Burma National Army as the sources do, with what moved them where the sources say, and use neither "traitors" nor "liberators" in the narrator's voice. Say that Aung San's army changed sides in 1945 only with a source. Quote the wartime language for the Japanese only where a source's own words are the point, and identify it as such.
11. **Names.** Follow the catalog's existing usage: Japanese names in Western order (Renya Mutaguchi, as in `imphal-kohima`; Tomoyuki Yamashita), place names as the official histories give them, with the modern name at first mention where it differs (Rangoon, now Yangon; Akyab, now Sittwe). Note where the sources misname a commander. The RAF history's "General Hanayoa", already flagged in the `burma-campaign` narrative, is one case.
12. **No management-book voice.** Conditions and questions, not instructions. Slim is quoted in leadership courses more than most commanders. Do not let the volume become one of them.
13. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
14. Match the existing code style. Don't refactor unrelated code. Add engagements and commanders only in Phase S below, and only after I approve the list.

---

## The question that organises the volume

Slim took over an army that had been beaten twice, in Burma and in the Arakan, and led it back through Burma to Rangoon. Every lesson adds evidence to one question:

> **How do you rebuild an army that has learned to lose: by leadership, by means, through the enemy's mistakes, or does the record decide what we see?**

The candidate answers:

- **Leadership:** health, training, honesty with the soldiers, and a commander they trusted and saw.
- **Means:** India as a base, transport aircraft, Allied air superiority, reinforcements and supplies that others decided to send, which any competent commander could have used.
- **The enemy's mistakes:** Mutaguchi's offensive at Imphal, launched on captured supplies that never came, and the Japanese army's own exhaustion.
- **The record:** _Defeat into Victory_ became the standard account, and the "Forgotten Army" story, which may decide which of the other answers we can see.

The premise must be tested. Had the army learned to lose, or had it been badly trained, badly supplied and outmanoeuvred? Did the rebuilding begin before Slim took the army, with the training and medical reforms of India Command under Wavell, Auchinleck and Giffard? Do not choose in advance.

## Traps specific to Slim

All entries are from memory. Trace each one and record the result in the audit. The orientation lesson teaches the most instructive.

**The record was written by its hero, and he wrote it well.** _Defeat into Victory_ appeared in 1956, a decade after the war. It is admired for its honesty about its author's mistakes, and it is also the account of the man who won. The official histories were written by authors with full access to the official documents, as volume III's front matter says. The Japanese Monographs were written by officers of the defeated army for their occupiers. Find out what each could see before relying on it.

| Saying or story                                                   | Problem to resolve                                                                                                                                                                                      |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "The Forgotten Army"                                              | Who first used the phrase, where and when, and whether the army's own sources say it felt forgotten. Present with its origin                                                                            |
| Mountbatten: the finest general of the war                        | The current profile repeats it from the National Army Museum. Find Mountbatten's words, the occasion and the date, or reattribute or drop them                                                          |
| "Uncle Bill"                                                      | The soldiers' name for him. Trace the earliest source that reports it                                                                                                                                   |
| Slim's account of morale (spiritual, intellectual, material)      | From the copyrighted memoir. Paraphrase it only from an openly readable page that sets it out, and say where it comes from                                                                              |
| Slim blaming himself after Imphal's opening                       | The memoir admits he was late in withdrawing the 17th Division and misjudged the force against Kohima. Find what the official histories say about the same decisions before using the admission         |
| The Kohima Epitaph ("When you go home, tell them of us and say…") | Written by John Maxwell Edmonds and adapted for the 2nd Division's memorial at Kohima; not Slim's, and not the soldiers' own words. Confirm, and ban it as a saying of Slim or of the battle's soldiers |
| "Chalo Delhi" and the "March on Delhi"                            | The Indian National Army's slogan and the Japanese and Allied propaganda around Imphal. Trace each use; do not present the offensive's aim from a slogan                                                |
| Mutaguchi's ambition                                              | Stories that he expected to win the war at Imphal, or connected it to his part in the 1937 Marco Polo Bridge incident. Trace each to its witness and date                                               |
| Sato's withdrawal from Kohima                                     | The 31st Division's commander withdrawing against orders. Find it in Monograph No. 134 and the official histories, and present the reasons each gives                                                   |
| The Admin Box as the first defeat of a major Japanese attack      | A common claim about February 1944. Find who says it and in what terms; find what happened at the dressing station                                                                                      |
| Leese and Slim, May 1945                                          | The attempt by Slim's superior to replace him after Rangoon. Trace it in the official history and any openly readable account; present both sides                                                       |
| Wingate                                                           | Slim's later criticism of Wingate in the memoir and the official historians' judgements, which Wingate's defenders contested. Present the dispute with its parties; do not adjudicate it from one side  |
| Stilwell                                                          | "Vinegar Joe" and his views of British commanders, from his diaries as printed by Romanus and Sunderland. Quote only what they print                                                                    |
| "Learned helplessness"                                            | The volume's question invites it. It is an animal-learning finding; do not apply it to an army by analogy unless a review read in full supports its use for groups, and state the limits if you use it  |

**Claims you must not use:** retrospective diagnoses; the popular-psychology list in the Napoleon prompt (ego depletion, power posing, Myers-Briggs, the 10,000-hour rule, popular Dunning–Kruger, Yerkes–Dodson as a curve); any figure for the losses at Imphal or the deaths of 1942 or the famine presented as fact; and any statement that the Indian soldiers fought for the empire, or the Indian National Army against it, for one reason, unless a source says so of particular people.

---

## Phase S, studies first (needs my approval of the list)

Propose seven new engagement studies, chosen to fill the gaps in the readiness table, and wait for my choice. Candidates, in rough order of what they add:

| Candidate                                  | What it adds to the volume                                                                                                                                                                              | Sources to try                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gallabat, November 1940**                | His first battle as a brigade commander, against the Italians on the Sudan frontier: by the plan's account a fort taken and the attack on Metemma abandoned (to check). The defeat he later wrote about | _East African Campaign, 1940–41_, ch. III; the despatches for East Africa in the _London Gazette_ (find them); the 1911 Britannica cannot help       |
| **The retreat from Burma, March–May 1942** | Burma Corps from Prome to the Chindwin: Yenangyaung, the Chinese armies, the crossing at Shwegyin and the walk out, with the refugees. Keeping an army together in defeat                               | Gazette 38228 (Wavell, Hutton, Alexander); _The Retreat from Burma, 1941–42_; Kirby vol. II; Romanus and Sunderland; _Burma, 1942_; Monograph No. 57 |
| **The first Arakan offensive, 1942–1943**  | A failed offensive that Slim was brought into late, under an army commander who sidelined him: what a subordinate can and cannot do                                                                     | Gazette 38266 (Wavell, India Command, 1943); Kirby vol. II, ch. XV, XIX and XX; Saunders, RAF vol. II or III                                         |
| **The Admin Box, February 1944**           | The first battle fought on Slim's method: encircled formations standing and supplied by air. The test of the rebuilt army                                                                               | Kirby vol. III; Monograph No. 132; Saunders, RAF vol. III, ch. XV (already cited); Giffard's despatch (find it)                                      |
| **Meiktila, February–March 1945**          | The changed plan: IV Corps moved in secret to strike the Japanese base while XXXIII Corps held their attention at Mandalay. Deception, armour and air supply                                            | _The Reconquest of Burma_, vol. II, ch. X–XI; Kirby vol. IV; _Central Burma_; Leese's despatch (find it); Monograph No. 59 or 148                    |
| **Mandalay, March 1945**                   | XXXIII Corps' crossing of the Irrawaddy and the taking of the city, the other half of the battle Slim designed                                                                                          | _The Reconquest of Burma_, vol. II, ch. VIII, IX, X and XII; Kirby vol. IV; _Central Burma_                                                          |
| **Rangoon, April–May 1945**                | The race south against the monsoon, the seaborne landing (Operation DRACULA) and the fall of the capital; the Burma National Army changing sides; Slim's near-removal afterwards                        | _The Reconquest of Burma_, vol. II, ch. XIII–XV; Kirby vol. IV; Gazette 39195 (confirm its author); _Central Burma_                                  |
| **Operation Thursday, March 1944**         | Wingate's second Chindit expedition, flown in behind the Japanese: a subordinate with direct access to Churchill                                                                                        | _The Reconquest of Burma_, vol. I, ch. XVI–XX; Kirby vol. III; Romanus and Sunderland, _Stilwell's Command Problems_                                 |
| **The Sittang breakout, July 1945**        | The Japanese Twenty-Eighth Army's attempt to escape across the Sittang: the end of the campaign from the losing side                                                                                    | _The Reconquest of Burma_, vol. II, ch. XVI; Monograph No. 132; Kirby vol. IV                                                                        |
| **Syria and Iraq, 1941**                   | His division in the campaigns against Vichy France and Iraq: a commander's first independent success                                                                                                    | The despatches for Iraq and Syria (find them); Britannica                                                                                            |

My suggestion, for you to test: Gallabat, the retreat of 1942, the first Arakan, the Admin Box, Meiktila, Mandalay and Rangoon. With `imphal-kohima` these give Slim eight studies, from his first defeat to the reconquest, with Operation Thursday or the Sittang breakout as alternatives if the evidence pass needs another. If Gallabat cannot be sourced to four readable texts, replace it with Operation Thursday and teach Gallabat in prose. Each study follows the existing format exactly: fourteen sections, four or more phases, two perspectives, at least four sources read for it, no figures. The Japanese side must come from Japanese sources wherever the monographs, JACAR or the National Institute for Defense Studies allow.

Rows go in `data/battles/ww2.ts` under the war `ww2`. Check how campaigns are assigned there. The 1942 retreat may join `japanese-offensive-of-1941-1942` or have its own campaign; the Arakan, Meiktila, Mandalay and Rangoon may join `burma-campaign`, whose narrative would then need extending; Gallabat needs a campaign of its own, perhaps with a one-engagement context like those of batch K7. Propose these following `data/campaign-details.ts`. Link Slim's profile, update counts and tests, and add a `docs/SOURCE_AUDIT.md` section, as the Grant and Lee studies did. Propose deepening `imphal-kohima` from Kirby vol. III, _The Reconquest of Burma_ vol. I and Monograph No. 134, in the same commit or the next. One commit for the studies, after my approval, before Phase 0.

## Phase 0 (one commit, after Phase S, before any lesson)

Re-read `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, `data/leadership/index.ts`, the volume object and first two lessons of `data/leadership/arthur-wellesley.ts` (the most recent single-commander volume) and `data/leadership/ulysses-s-grant.ts` (the most recent volume), `lib/types.ts`, `lib/validation.ts`, `tests/unit/leadership.test.ts`, `components/views/leadership.tsx` and the `app/leadership/` routes. Note current counts; other work may have landed.

1. **Route and type.** A single-commander volume uses `commanderSlug` for its route: `/leadership/william-slim/`. Propose the volume title and confirm no type change is needed.
2. **Evidence pass.** Write `docs/LEADERSHIP_EVIDENCE_SLIM.md` in the format of `docs/LEADERSHIP_EVIDENCE_GRANT_LEE.md`. Grade every planned lesson strong, adequate or thin on its history and its psychology, trace every saying in the traps table, list what has and has not been read, and recommend merges and drops. Propose a revision of Slim's profile for a later batch.
3. **Scaffold** the volume file with the volume object (`inProgress` set, no lessons) and the volume tests, with nothing going live until the pilot ships. Add the banned sayings to `lib/validation.ts`.

Show me the evidence table, the route decision, the profile proposal and any corrections to this plan before writing lessons.

---

## The curriculum

Engagement slugs that exist today: `imphal-kohima` and `singapore-1942`, the campaigns `burma-campaign` and `japanese-offensive-of-1941-1942`, and the war `ww2`. Slugs for Phase S studies are placeholders until the studies exist. Anything without a study is referred to in prose only. Counter-cases come from catalog commanders.

### Orientation

**0. `how-to-read-slim` — A victory told by its general**

- Purpose: _Defeat into Victory_, its date, its reputation and its generosity; the official histories and who wrote them; the Japanese Monographs and their circumstances; the despatches, written by Slim's superiors; the "Forgotten Army". Then the voices that are missing: Indian, African, Burmese and Naga soldiers and civilians, who appear in the commanders' sources mostly as numbers and formations. Compare with the earlier orientations: Caesar and Grant also wrote their own records, but Slim's is admired for the faults it admits, which is its own reason to read it carefully.
- Episodes: the memoir's composition and reception, as far as an openly readable source describes them; the official historians' access to the records; the Kohima Epitaph, and how memorials become sources.
- Psychology: `base: "none"` unless a sound review on autobiographical memory or collective memory is read.

### Part I. Learning to lose

**1. `the-first-defeat` — What a commander learns from his own failure**

- Claim: a commander's first defeat can teach him more than a first victory, but only if he examines his own part in it rather than the troops' or the enemy's.
- Episodes: Gallabat and Metemma (`gallabat-1940` if studied); what Slim and the official history each say went wrong.
- Counter-case: from the catalog, a commander whose early defeat taught the wrong lesson; propose in the evidence pass.

**2. `the-long-retreat` — Keeping an army together in defeat**

- Claim: a commander in retreat can keep his army in being if he keeps it fighting and tells it the truth, but the retreat's cost falls on those who cannot keep up.
- Episodes: Burma Corps from Prome to Imphal (`burma-1942` if studied); Yenangyaung and the Chinese; Shwegyin; the refugees.
- Counter-case: the Serbian volume's `the-retreat-that-kept-an-army`; link, do not repeat. Napoleon's retreat from Moscow for an army that did not survive its retreat.

**3. `sidelined` — Serving under a superior who will not use you**

- Claim: a subordinate kept out of a failing campaign can learn from watching it, but he cannot fix what he does not command, and his learning is tested only later.
- Episodes: the first Arakan (`arakan-1943` if studied); Irwin, Slim and XV Corps; Wavell's despatch.
- Counter-case: from the catalog; link the Western Front's `what-reaches-the-top`.

### Part II. Rebuilding

**4. `the-army-that-expected-to-lose` — Rebuilding morale**

- Claim: an army that has been beaten can be made to expect victory again by training, health and a first success it can believe in, but only if the means arrive and the success is real.
- Episodes: Slim's Fourteenth Army in 1943–1944; malaria and the medical reforms; jungle training; the work of India Command before Slim, which the official histories describe.
- Counter-case: from the catalog; link Wellington's `the-scum-of-the-earth`, Caesar's `my-soldiers` and the Western Front's `where-the-learning-happened`.

**5. `stand-and-be-supplied` — Holding when cut off**

- Claim: a commander can order encircled troops to stand and fight if he can supply them from the air, but only while the air is his and the aircraft are there.
- Episodes: the Admin Box (`admin-box` if studied); the transport aircraft, many of them American, and who controlled them.
- Counter-case: from the catalog, an encircled army that was promised air supply and not saved; Stalingrad (`stalingrad`), from the existing study.

**6. `whose-army` — The soldiers of an empire that was ending**

- Claim: a commander can make an army of many peoples fight as one, but he cannot settle for them the question of whose war it is, and the answer may change after victory.
- Episodes: the Indian, Gurkha, East and West African and Burmese formations; recruitment and reasons, as far as sources record them; the Indian National Army; the Bengal famine with India the base; Quit India.
- Counter-case: the Hannibal volume's `an-army-of-many-peoples`; link, do not repeat.

### Part III. The decisive battle

**7. `fighting-at-the-end-of-his-line` — Letting the enemy come**

- Claim: a commander who draws an attacker to the end of its supply line can destroy it, but only if he reads the timing; withdrawing too late can lose what the plan was meant to save.
- Episodes: Imphal (`imphal-kohima`); the decision to fight on the Imphal plain rather than on the Chindwin; the late withdrawal of the 17th Division; Kohima and the force no one expected; the 5th Division flown in from the Arakan.
- Counter-case: Mutaguchi's own plan; link Grant's `surprised-at-shiloh`.

**8. `the-enemys-gamble` — Reading the enemy commander**

- Claim: a commander who reads his opponent's gamble can make it fail, but the gamble's failure is the opponent's as much as his own victory.
- Episodes: Mutaguchi and the Fifteenth Army's plan, from Monograph No. 134 and the National Institute for Defense Studies; his divisional commanders' objections; Sato's withdrawal; the retreat.
- Counter-case: the Hannibal volume's `reading-the-consul`; link, do not repeat.

**9. `the-subordinate-with-a-patron` — Wingate and the Chindits**

- Claim: a commander given a subordinate with a direct line to the head of government must make use of him, but cannot fully control him, and the judgement of the experiment may outlast both.
- Episodes: the first and second Chindit operations (`operation-thursday` if studied); Churchill and Quebec; Wingate's death; the later dispute.
- Counter-case: Wellington's `a-short-leash` or Caesar's `lieutenants`; propose in the evidence pass.

**10. `last-in-line` — Allies, masters and means decided elsewhere**

- Claim: a commander at the end of a coalition's priorities can plan only with what he is sent, but he can still choose what to ask for and what to do without.
- Episodes: Stilwell and the Chinese armies; Mountbatten's South East Asia Command; the American transport aircraft taken away in 1944–1945; landing craft sent to Europe.
- Counter-case: Wellington's `allies-he-could-not-command` and the Western Front's `coordination-by-persuasion`; link, do not repeat.

### Part IV. Victory

**11. `the-changed-plan` — Meiktila**

- Claim: a commander whose plan is upset by the enemy's withdrawal can win more by changing it than by pursuing it, but only if his army can move faster than the enemy can read the change.
- Episodes: the Japanese withdrawal behind the Irrawaddy in December 1944; the change from CAPITAL to EXTENDED CAPITAL; IV Corps' secret move; Meiktila and Mandalay (`meiktila-1945`, `mandalay-1945` if studied).
- Counter-case: Napoleon's `plan-for-being-wrong`; link, do not repeat.

**12. `after-rangoon` — Victory, and a superior who wanted him gone**

- Claim: a commander at the moment of victory can still be removed, and how he answers tells his army what its victory was worth.
- Episodes: the race to Rangoon and Operation DRACULA (`rangoon-1945` if studied); Leese's attempt to replace him; the Burma National Army; the Japanese surrender in Burma.
- Counter-case: from the catalog, a victorious commander who was removed; propose in the evidence pass.

**13. `the-ledger` — Answering the question**

- Purpose: weigh the evidence of the volume, answer "How do you rebuild an army that has learned to lose?", test the premise that the army had learned to lose, and invite the reader to argue the opposite. Include the soldiers of every army; the refugees of 1942; the famine; the hill peoples; the prisoners; the Japanese soldiers who starved; Burma's towns; and the independence of India, Pakistan and Burma within three years, which changed what the victory meant.
- Counter-case: the Serbian volume's `the-ledger-of-survival` or the Western Front's `the-ledger-of-learning`.

Fourteen lessons are planned; the evidence pass should expect to merge or drop one or two. Slugs need only be unique within a volume, but the comparison page and search read better without repeating an earlier volume's, which is why lesson 6 is not called `an-army-of-many-peoples`.

### Sources to try

Check that each exists, is readable and says what you cite.

- **The commanders' own words.** Openly readable texts by Slim are few: his talk "Higher Command in War" (1952, printed in _Military Review_, 1990) if it is openly available; his orders and reports as printed in the official histories. The despatches of Wavell, Alexander, Giffard, Mountbatten and Leese in the _London Gazette_ are his superiors' words, not his.
- **The official histories.** Kirby, _The War Against Japan_, vols. II–IV; the Indian official histories on HyperWar; Saunders's RAF history (already cited); Crew, _The Army Medical Services: Campaigns_, vol. V, _Burma_ (HMSO, 1966), if readable, for malaria and the medical reforms; Romanus and Sunderland.
- **The Japanese side.** Japanese Monographs Nos. 57–59, 131, 132, 134 and 148; JACAR; the National Institute for Defense Studies' forum papers (Arakawa, 2002, already cited).
- **Reference.** The National Army Museum, the Imperial War Museums, the Australian Dictionary of Biography, the Oxford Dictionary of National Biography if openly readable (abstract only otherwise), and Britannica's modern biography (browser only).
- **Modern scholarship, for the debates.** The "Forgotten Army", the Indian Army's wartime expansion and its soldiers' motives, the Indian National Army, the Bengal famine, Wingate, and the Leese affair; use only what is lawfully readable (open articles, reviews, publisher pages) and cite only that.
- **Already used by this site.** The `imphal-kohima` and `singapore-1942` studies, the `burma-campaign` narrative and the `ww2` war page, with their sources. Re-read what you cite.
- **Psychology.** As named in the curriculum, rule 3 applying. Prefer reviews and meta-analyses to single studies, and say when a finding about individuals is being applied to an army.

### Phases

- **Phase S.** Studies first, above. One commit.
- **Phase 0.** Above. One commit.
- **Phase 1, pilot.** Lessons 0, 4 and 7: the record, the rebuilding and Imphal, which test the volume's question from the memoir, the army and the battle. `Quiz` takes the volume's course slug. The routes already exist, so only the volume data ships. Stop for me to judge.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order, one commit each after my approval.
- **Phase 3, integration.** Should need no new code: check the hub, the volume page's strength-and-shadow table, the profile, the counter-case profiles, study links, search and the sitemap in the browser, and add a README feature line. Then propose a comparison-page batch adding this volume's lessons to the existing problems (reading the record, reading the enemy, adapting, what cannot be replaced, taking over, who pays) and any new problem the volume raises, such as rebuilding after defeat. With nine volumes the grid gives rows of three, three and three up to 1600 pixels, and four, four and one above; check whether the last row needs a change.
- **Phase 4, optional, ask first.** Up to three Decision Room scenarios, each with exactly one historical option in varied position and a study to link. Candidates: Slim in March 1944, when to withdraw the 17th Division and whether to fly a division from the Arakan to Imphal; Slim in December 1944, after the Japanese fell back behind the Irrawaddy, keep the plan or change it; Sato at Kohima at the end of May 1944, obey or withdraw. Propose missing profiles (Mutaguchi, Wingate, Stilwell, Mountbatten) and the revision of Slim's profile.

## Checks and bookkeeping for every batch

As in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, with the procedures learned since:

- Read every source cited, then draft; source-check the draft against what was read and correct overreach.
- Add a `docs/SOURCE_AUDIT.md` section per batch: every source, how it was read, language and limits, each saying traced and its result. Run a link check on new URLs where the tools allow it, and otherwise record that each page opened in the browser.
- Update the curriculum-order test in `tests/unit/leadership.test.ts`, the lesson count in the end-to-end test, hard-coded counts elsewhere (the README, `docs/PRODUCT_ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/TEST_STRATEGY.md`) and this prompt's status line.
- Run `npm run lint`, `npm run typecheck` and `npm test`, then `npm run db:setup` before `npm run build` (the build reads the seeded database, and new pages are missing from `out/` without it), then `npm run test:e2e:chromium`. If the end-to-end web server's own build fails, build once, serve `out/` with `npm start`, and run Playwright with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000`. Stopping the backgrounded server can leave `scripts/serve-static.mjs` listening on port 3000; stop that process afterwards. Never leave a shell inside `out/`: the next build fails to replace it. Run `npx prettier --write` on any JSON a script has rewritten.
- Confirm the built sizes of `/battles`, the home page and `/commanders` are unchanged (adding studies or profiles changes them; say by how much), and spot-check two new lessons at desktop and 375px, light and dark.
- Show the diff summary and wait for approval before committing. Push only on an explicit go-ahead. The README release row for each commit goes in the next commit.

## Definition of done

- Phase S's studies are live, and Slim's profile links at least eight studies.
- The volume is live with its orientation and every lesson that survived its evidence pass; any dropped or merged lesson agreed with me.
- Every factual claim traces to a source read and audited; every saying used has a named origin and reporter, and the banned sayings are in the schema.
- Each lesson shows the three specialists separately, carries a shadow, a counter-case and scope conditions, and contributes to the volume's question; lessons that meet an earlier volume's theme build on it rather than repeat it.
- The Japanese side is told from Japanese sources wherever they exist; the army's colonial frame and the human cost are stated without figures and without nostalgia.
- No psychiatric labels, casualty or army figures, invented quotations or commander ratings.
- List-page payloads unchanged except where studies or profiles were added, all checks pass, docs and counts consistent, each batch committed separately with my approval.

Start with Phase S. Show me the studies you propose, with what each adds and the sources you found for it, before writing any.
