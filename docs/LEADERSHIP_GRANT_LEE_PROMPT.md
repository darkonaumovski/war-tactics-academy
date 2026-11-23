# Prompt: Leadership Lessons from Grant and Lee (Volume 8)

Paste everything below the line into a new Claude Code session opened in this repository.

**Status (23 November 2026):** Phase S done. The user chose Grant, with Lee as the counter-volume, from the later volumes listed in `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, after the Hannibal and Scipio volume and all its proposals were completed, and approved the six suggested studies: Fort Donelson and Shiloh (a new Western campaign of 1862), Chancellorsville (a new Chancellorsville campaign), the Wilderness and Spotsylvania (a new Overland campaign) and Petersburg (a new Petersburg campaign). Grant's profile now links six studies and Lee's five, eight distinct between them; what was read is in `docs/SOURCE_AUDIT.md`. Phase 0 done: `docs/LEADERSHIP_EVIDENCE_GRANT_LEE.md` grades the thirteen lessons (lesson 9 thin, to be read up or merged into lesson 10) and traces every saying, correcting the fight-it-out sentence to Grant's "purpose"; the volume is scaffolded unlisted at `data/leadership/ulysses-s-grant.ts`, with five sayings banned in `lib/validation.ts`. Lessons 0 to 7 are written (the pilot, batch G1; Part I, batch G2; lessons 4 and 6, batch G3) and the volume is listed as in progress; lessons 8 to 12 follow in batches of two to four.

## Why Grant and Lee, and what is missing (readiness analysis, 23 November 2026)

`docs/LEADERSHIP_VOLUME_TEMPLATE.md` asks for a profile and at least eight engagement studies, so lessons link to studies instead of retelling them. For a volume shared by two commanders, as Foch and Haig's and Hannibal and Scipio's were, the bar is eight distinct studies between them. Grant links one study (`vicksburg`) and Lee one (`gettysburg`), so two distinct studies exist. The subject was chosen ahead of Slim and Yi Sun-sin because its main sources are public domain and readable in full: Grant's _Personal Memoirs_, Sherman's _Memoirs_, Longstreet's and Porter's memoirs, the _Official Records of the War of the Rebellion_ and the 1911 Britannica, while Slim's own account is in copyright and a lawful translation of Yi's war diary has not yet been found.

Counting `battleSlugs` in `data/commanders.json`:

| Material                  | In the catalog now                                                                                                                                                                                                         | Gap                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Studies they commanded in | 2 distinct: `vicksburg` (1863; Grant) and `gettysburg` (1863; Lee). Sherman links `vicksburg` and `atlanta-campaign`                                                                                                       | Six more to reach eight. Nothing from Grant's first campaigns in the West, nothing of Lee at his most successful, and nothing of the 1864–1865 campaign in which the two commanders faced each other |
| Campaigns and wars        | War `civil-war` (participants, geography and a chronology from Fort Sumter to the Thirteenth Amendment); campaign narratives `vicksburg-campaign`, `gettysburg-campaign` and `atlanta-campaign`                            | No campaign for Forts Henry and Donelson and Shiloh, for Chancellorsville, or for the Overland campaign and Petersburg: Phase S must decide which new campaign narratives are needed                 |
| Profiles                  | `ulysses-s-grant`, sourced to a Library of Congress biography; `robert-e-lee`, sourced to a National Park Service page on Lee and slavery; `william-t-sherman`, sourced to the National Park Service. All concise profiles | All are thin for volume subjects. The evidence pass should propose revisions like Wellington's, Caesar's and Hannibal and Scipio's (`4b891b1`, `735ab6b`, `4526f99`)                                 |
| Counter-case profiles     | The volumes' subjects (Napoleon, Alexander, the Serbian commanders, Foch and Haig, Wellington, Caesar, Hannibal and Scipio) and their counter-cases, among them Fabius Maximus, Kutuzov, Barclay de Tolly and Pompey       | No profiles of Meade, Jackson, Longstreet, Joseph E. Johnston, Sheridan or Lincoln; refer to them in prose, or propose profiles in Phase 4                                                           |
| Learning material         | No decision exercise from the war; no course unit on it                                                                                                                                                                    | Phase 4 may propose exercises                                                                                                                                                                        |
| Earlier volumes' use      | Sherman is a counter-case in the Alexander volume; Grant and Lee have not appeared                                                                                                                                         | The orientation should say where readers have met the war before: Fabius's delay and Hannibal's victories in Volume 7 are the closest earlier treatment of the volume's question                     |

**Verdict:** the readiest of the remaining subjects for sources, but six studies short. A studies phase that fills Grant's war in the West, Lee's victories in Virginia and the campaign of 1864 would complete it.

---

You are extending **War Tactics Academy**, a Next.js App Router site with static export to GitHub Pages; pushes to `main` deploy automatically. Its **Leadership Lessons** series has seven complete volumes: Napoleon (`data/leadership/napoleon.ts`), Alexander the Great (`data/leadership/alexander-the-great.ts`), the Serbian Supreme Command (`data/leadership/radomir-putnik.ts`), Foch and Haig (`data/leadership/douglas-haig.ts`), Wellington (`data/leadership/arthur-wellesley.ts`), Julius Caesar (`data/leadership/julius-caesar.ts`) and Hannibal and Scipio (`data/leadership/hannibal-barca.ts`). They were built under `docs/LEADERSHIP_LESSONS_PROMPT.md`, `docs/LEADERSHIP_NEXT_VOLUMES_PROMPT.md`, `docs/LEADERSHIP_WELLINGTON_PROMPT.md`, `docs/LEADERSHIP_CAESAR_PROMPT.md` and `docs/LEADERSHIP_HANNIBAL_SCIPIO_PROMPT.md`, and generalised in `docs/LEADERSHIP_VOLUME_TEMPLATE.md`. A comparison page (`/leadership/compare/`, data in `data/leadership/problems.ts`) sets eleven recurring problems beside the lessons that test them.

Your job is to write **Volume 8: Leadership Lessons from Grant and Lee**, a paired volume on the two commanders of the American Civil War who ended it facing each other, from Grant's first independent command in 1861 to Lee's surrender at Appomattox in April 1865. Their later lives enter only where they bear on how each was judged and remembered: Grant's memoirs, written as he was dying, and the Lost Cause that made Lee its emblem.

Work, as in the earlier volumes, as three specialists reading the same evidence, with their voices kept separate on the page:

- **The historian** establishes what happened, who says so and why that witness might shade it.
- **The strategist** judges the decision against its ends, means, alternatives and enemy, using only what the commander could know at the time.
- **The psychologist** asks which established mechanism might illuminate the behaviour, states how far that reading can go, and never diagnoses the dead.

A lesson is finished when each specialist would sign it. If they disagree, show the disagreement.

The curriculum below is a **research plan, not a source**. Dates, episodes, attributions, sayings, letters and psychological citations were written from memory and must each be checked against something you read. Correct or drop anything a source does not support, and tell me what changed.

## What this volume must add, not repeat

The earlier volumes already teach inheritance, intuition, tempo, presence, recognition, delegation, rivals who learn, victory without settlement, stopping, dissent, succession, the consent of followers, coalitions, learning under attrition, caution as arithmetic, supply, the government at home, a record written by its maker, speed, an army bound to its general, an enemy's divisions, clemency, legitimacy, who pays, invasion, reading the enemy commander, allies who stayed, an army of many peoples, delay, a young commander, learning from the enemy, and the record written by the winners' friends. Grant and Lee earn a volume by what they show that the others could not:

- **Persistence as a method, and its cost.** Grant kept moving after defeats that would have stopped other commanders, at Shiloh, at Vicksburg and in the Wilderness, and the volume can ask when persistence is strategy and when it is only the willingness to spend lives.
- **A war won by a state's resources and a commander who used them together.** In 1864 Grant directed every Union army at once, and the volume can ask what a commander adds when his side is larger and richer.
- **The best tactician of his side on the side that could not win,** and whose offensives may have spent the army his cause could not replace.
- **A cause that is the ledger.** The Confederacy fought to preserve slavery, and the Union army became an army of emancipation; formerly enslaved men served in it. No lesson may treat the war's cause as a matter of opinion where the sources settle it.
- **A record contested for a century and a half.** Grant wrote his memoirs to provide for his family; Lee wrote none, and his reputation was built after his death by former Confederates in the Lost Cause, which made him a symbol and made Grant a butcher. The orientation can build on Caesar's self-written record and Hannibal's record written by the winners' friends with a fourth case: a record rewritten by the losers.

Where a lesson meets an earlier volume's theme, link that lesson in prose and build on it; do not restate its psychology or its argument. In particular: link the Hannibal and Scipio volume's `the-delayer`, `the-ledger` and `over-the-alps`, Wellington's `the-only-army` and `the-government-at-home`, Napoleon's `winning-battles-is-not-ending-wars` and `the-last-reserve`, the Western Front's `the-ledger-of-learning`, and Caesar's `clemency`.

## Rules that override everything else

1. **Read `AGENTS.md` first.** This Next.js version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before changing routes, metadata or data loading.
2. **Cite only what you have read.** Every source must be a page or text you opened and read in this session. Use WebFetch, or the built-in browser when a site blocks bots or fails a certificate check (Britannica refuses scripts and needs the browser). Never guess a URL. If a claim cannot be verified, rewrite it or leave it out; never attach an unread source. Record what you read in `docs/SOURCE_AUDIT.md`.
3. **Copyrighted and paywalled work** may be cited only for what you lawfully read: an abstract (the audit must say "abstract only"), a publisher's page, a review, or a short quotation from a page that is openly readable. The standard modern histories (Freeman, Catton, Foote, McPherson, Simpson, Gallagher and others) are in copyright; do not reconstruct them.
4. **Follow the editorial rules in `docs/SOURCE_AUDIT.md`:** no casualty or army figures, no invented quotations, no guessed troop coordinates, no numerical commander ratings. The casualty totals of the Overland campaign, Shiloh, Gettysburg and the war as a whole are famous and contested; give none of them, and say so where a source's number is the point. Use `fact`, `interpretation` and `uncertainty` honestly. `leadershipVolumeSchema` enforces much of this; add this volume's banned sayings to it.
5. **Quotations** only from a text you read, with its chain of transmission: Grant's own dispatches and memoirs, Lee's dispatches and letters as printed, reported conversations as reported by the person who heard them, and recollections written decades later named as such. A saying first printed long after the war is a recollection, not a quotation of the war.
6. **No retrospective diagnosis.** No psychiatric or personality labels. Stories of Grant's drinking, Lee's health in 1863 and either man's moods are reports to be traced to their sources; draw no inference about command from them.
7. **One case proves nothing.** Every principle is a conditional claim with its scope, and every lesson includes a case where the same behaviour failed.
8. **Judge decisions by what was knowable then.** Grant did not know at Shiloh's first evening that Buell would arrive in time, or Lee at Gettysburg what lay on Cemetery Ridge.
9. **The human cost stays in the frame,** stated as fact, not spectacle, and without figures: the enslaved people the Confederacy fought to keep and those who freed themselves by reaching Union lines; the soldiers of both armies; the United States Colored Troops and the massacres of Black soldiers at Fort Pillow and the Crater; prisoners of war on both sides and the breakdown of exchange; civilians under siege at Vicksburg and Petersburg; the Shenandoah Valley and Georgia laid waste; and the wounded left between the lines at Cold Harbor.
10. **Do not adopt the Lost Cause.** The Confederacy's own declarations of secession name slavery as their cause; read them and cite them. Lee is not to be presented as an opponent of slavery without the evidence of what he wrote and did as a slaveholder, and Grant is not to be presented as a butcher without the evidence of how his casualties compared and who first called him one. Neither the Lost Cause nor its mirror image sets the narrative.
11. **No management-book voice.** Conditions and questions, not instructions.
12. **Work in batches of two to four lessons.** Run the full checks after each batch, show me a diff summary and wait for my approval before each commit. Never push without my explicit go-ahead.
13. Match the existing code style. Don't refactor unrelated code. Add engagements and commanders only in Phase S below, and only after I approve the list.

---

## The question that organises the volume

Grant won the war; Lee won more of the battles in which he commanded, and became the war's most admired general. Every lesson adds evidence to one question:

> **Why did Grant win: persistence, the Union's resources, Lee's own choices, or does the record decide what we see?**

The candidate answers: **persistence**, a commander who kept moving forward after setbacks and would not let the enemy recover; **the Union's resources**, a larger population, industry, railroads and a navy, which any competent general could eventually have turned into victory; **Lee's own choices**, offensives at Gettysburg and elsewhere that spent an army the Confederacy could not replace; and **the record**, a war narrated first by Grant's memoirs and then for decades by the Lost Cause, which may decide which of the other answers we can see. The premise must be tested: was persistence a strategy, or Grant's description of what he had done? Do not choose in advance.

## Traps specific to Grant and Lee

All entries are from memory. Trace each one and record the result in the audit. The orientation lesson teaches the most instructive.

**The record was rewritten by the losers.** Grant's _Personal Memoirs_ (1885–1886) were written twenty years after the war, as he was dying of cancer, to provide for his family; they are clear, sparing and self-serving in places. Lee wrote no memoir and destroyed or kept back papers; after his death former Confederate officers, Jubal Early above all, built his reputation and blamed Longstreet for Gettysburg in the _Southern Historical Society Papers_. Find the passages before relying on any of this.

| Saying or story                                                        | Problem to resolve                                                                                                                                                                                                |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "No terms except an unconditional and immediate surrender"             | Grant's letter to Buckner at Fort Donelson, February 1862. Find the letter in the _Official Records_ or the memoirs and quote it from there                                                                       |
| "I propose to fight it out on this line if it takes all summer"        | Grant's dispatch to Halleck from Spotsylvania, May 1864. Find the dispatch                                                                                                                                        |
| "It is well that war is so terrible, or we should grow too fond of it" | Attributed to Lee at Fredericksburg in 1862 by later writers. Trace the earliest printing and who claimed to hear it; use only with that chain                                                                    |
| "It's all my fault"                                                    | Lee after Pickett's charge, as reported by witnesses such as the British observer Fremantle. Trace the report                                                                                                     |
| "Lee to the rear"                                                      | The Texans at the Wilderness refusing to let Lee lead a charge. Trace the earliest account                                                                                                                        |
| "Duty is the sublimest word in our language"                           | A letter attributed to Lee and long shown to be a forgery. Confirm and ban it                                                                                                                                     |
| Grant the drunkard                                                     | Stories from Shiloh and Vicksburg, Rawlins's letters, Cadwallader's later memoir. Trace each to its witness and date; draw no inference about command                                                             |
| Grant the butcher                                                      | Who first used the word, when, and on what comparison. Present with its origin; the casualty totals themselves are not given                                                                                      |
| Lee and slavery                                                        | His 1856 letter calling slavery a moral and political evil, his management of the Arlington estate, the testimony of Wesley Norris about the punishment of escaped slaves. Read and present the evidence together |
| Appomattox: the sword and the salute                                   | Grant's memoirs say he did not ask for Lee's sword; Chamberlain's account of the salute at the surrender of arms was written decades later. Present each with its witness                                         |
| Longstreet blamed for Gettysburg                                       | The Lost Cause charge that he was slow on 2 July; trace its origin after Lee's death and Longstreet's reply                                                                                                       |
| "War is hell"                                                          | Sherman's, from a speech long after the war, and off-topic for command. Ban it as a saying of the war                                                                                                             |

**Claims you must not use:** retrospective diagnoses; the popular-psychology list in the Napoleon prompt (ego depletion, power posing, Myers-Briggs, the 10,000-hour rule, popular Dunning–Kruger, Yerkes–Dodson as a curve); any statement that slavery was not the cause of secession; "the war of Northern aggression" except as a phrase quoted and identified as Lost Cause usage; and any casualty figure presented as fact.

---

## Phase S, studies first (needs my approval of the list)

Propose six new engagement studies, chosen to fill the gaps in the readiness table, and wait for my choice. Candidates, in rough order of what they add:

| Candidate                                   | What it adds to the volume                                                                                                         | Sources to try                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Fort Donelson, February 1862**            | Grant's first great success: a combined river and land campaign, a counterattack met in Grant's absence, and the surrender letter  | Grant, _Memoirs_ ch. 21–23; _Official Records_ ser. I vol. 7; 1911 Britannica; NPS           |
| **Shiloh, April 1862**                      | Grant surprised, the first day nearly lost, and the second day won with Buell's army: persistence and its critics                  | Grant, _Memoirs_ ch. 24–25; Sherman, _Memoirs_; _Official Records_ vol. 10; NPS              |
| **Chancellorsville, May 1863**              | Lee at his most daring: dividing his army in the face of a larger one, Jackson's flank march and Jackson's death                   | _Official Records_ vol. 25; Lee's report; _Battles and Leaders_ vol. 3; 1911 Britannica; NPS |
| **The Wilderness, May 1864**                | The first meeting of Grant and Lee, and Grant's decision to move south rather than withdraw after a costly battle                  | Grant, _Memoirs_ ch. 50–51; Porter, _Campaigning with Grant_; _Official Records_ vol. 36     |
| **Spotsylvania Court House, May 1864**      | Assaults on fortified lines, the Mule Shoe, and the "fight it out on this line" dispatch                                           | Grant, _Memoirs_ ch. 52–53; _Official Records_ vol. 36; NPS                                  |
| **Petersburg, June 1864 – April 1865**      | Siege and the end of Lee's army as a field force; the Crater and the United States Colored Troops; the last campaign to Appomattox | Grant, _Memoirs_ ch. 56–67; _Official Records_ vols. 40–46; NPS                              |
| **Chattanooga, November 1863**              | Grant takes over a besieged army and breaks the siege: the command that brought him east                                           | Grant, _Memoirs_ ch. 40–44; _Official Records_ vol. 31                                       |
| **Cold Harbor, June 1864**                  | The assault Grant said in his memoirs he regretted, and the wounded left between the lines                                         | Grant, _Memoirs_ ch. 54–55; Porter; _Official Records_ vol. 36                               |
| **Antietam, September 1862**                | Lee's first invasion of the North and its political consequence, the preliminary Emancipation Proclamation                         | _Official Records_ vol. 19; 1911 Britannica; NPS                                             |
| **Second Manassas or the Seven Days, 1862** | Lee's first campaigns in command                                                                                                   | _Official Records_ vols. 11–12; 1911 Britannica                                              |

My suggestion, for you to test: Fort Donelson, Shiloh, Chancellorsville, the Wilderness, Spotsylvania and Petersburg, which give Grant six studies (Fort Donelson, Shiloh, Vicksburg, the Wilderness, Spotsylvania, Petersburg), Lee five (Chancellorsville, Gettysburg, the Wilderness, Spotsylvania, Petersburg) and eight distinct studies between them, with Chattanooga, Cold Harbor or Antietam as alternatives if the evidence pass needs another. Each study follows the existing format exactly (fourteen sections, four or more phases, two perspectives, at least four sources read for it, no figures). Rows go in the file that holds `vicksburg` and `gettysburg` under the war `civil-war`; check how campaigns are assigned there and propose new campaign narratives (for example for Forts Henry and Donelson and Shiloh, for Chancellorsville, and for the Overland campaign and Petersburg) following `data/campaign-details.ts`. Link Grant's and Lee's profiles, extend the war page if needed, update counts and tests, and add a `docs/SOURCE_AUDIT.md` section, as the Hannibal and Scipio studies did (`28a8bca`). One commit for the studies, after my approval, before Phase 0.

Grant's _Personal Memoirs_ and Sherman's _Memoirs_ are on Project Gutenberg and Wikisource; the _Official Records_ are on Cornell's Making of America and other public archives; Porter's _Campaigning with Grant_ and Longstreet's _From Manassas to Appomattox_ are public domain; the National Park Service has pages for each battlefield. Confirm every address in the browser before citing it.

## Phase 0 (one commit, after Phase S, before any lesson)

Re-read `docs/LEADERSHIP_VOLUME_TEMPLATE.md`, `data/leadership/index.ts`, the volume object and first two lessons of `data/leadership/hannibal-barca.ts` (the most recent shared volume), `lib/types.ts`, `lib/validation.ts`, `tests/unit/leadership.test.ts`, `components/views/leadership.tsx` and the `app/leadership/` routes. Note current counts; other work may have landed.

1. **Route and type.** A shared volume uses `commanderSlug` for its route and `alsoCommanderSlugs` for the other profiles that lead to it. Propose which commander gives the route (`/leadership/ulysses-s-grant/` with Lee in `alsoCommanderSlugs` is the default) and the volume title, and confirm no type change is needed.
2. **Evidence pass.** Write `docs/LEADERSHIP_EVIDENCE_GRANT_LEE.md` in the format of `docs/LEADERSHIP_EVIDENCE_HANNIBAL_SCIPIO.md`: grade every planned lesson strong, adequate or thin on its history and its psychology, trace every saying in the traps table, list what has and has not been read, and recommend merges and drops. Propose revisions of both profiles, and of Sherman's if he carries a lesson, for a later batch.
3. **Scaffold** the volume file with the volume object (`inProgress` set, no lessons) and the volume tests, with nothing going live until the pilot ships. Add the banned sayings to `lib/validation.ts`.

Show me the evidence table, the route decision, the profile proposals and any corrections to this plan before writing lessons.

---

## The curriculum

Engagement slugs that exist today: `vicksburg`, `gettysburg` and `atlanta-campaign`, the campaigns `vicksburg-campaign`, `gettysburg-campaign` and `atlanta-campaign`, and the war `civil-war`. Slugs for Phase S studies are placeholders until the studies exist. Anything without a study is referred to in prose only. Counter-cases come from catalog commanders.

### Orientation

**0. `how-to-read-grant-and-lee` — A war rewritten by the losers**

- Purpose: Grant's memoirs, their circumstances and their reticence; Lee's silence and the reputation built for him after his death; the _Official Records_ as the closest thing to a neutral record; the declarations of secession; the voices of the enslaved and of Black soldiers, and how few survive in the commanders' sources. Compare with the earlier orientations: Caesar wrote his own record, Hannibal's was written by the winners' friends, and here the losers rewrote theirs.
- Episodes: Grant writing against time in 1884–1885; Early and the Southern Historical Society on Gettysburg; the forged "duty" letter.
- Psychology: `base: "none"` unless a sound review on collective memory is read.

### Part I. Grant in the West

**1. `unconditional-surrender` — Taking the initiative**

- Claim: a commander who moves before his superiors or his enemy expect can win more than his orders asked, but only if he can hold what he takes when the enemy strikes back.
- Episodes: Forts Henry and Donelson (`fort-donelson` if studied); the counterattack while Grant was away; the surrender letter.
- Counter-case: from the catalog, a commander whose initiative outran his means; Caesar's `celeritas` already uses Hannibal, so propose another.

**2. `surprised-at-shiloh` — Being caught unprepared and holding on**

- Claim: a commander surprised in the field can recover if he keeps his head and his reinforcements arrive, but the recovery does not excuse the surprise.
- Episodes: the first day at Shiloh (`shiloh` if studied); Sherman's camps; Buell's arrival; the newspapers and Halleck afterwards.
- Counter-case: from the catalog, a surprise that was not recovered.

**3. `cutting-loose` — Operating without a line of supply**

- Claim: a commander who abandons his line of supply can move faster than his enemy expects, but only where the country can feed his army and the campaign is short.
- Episodes: the failed approaches to Vicksburg; the crossing below the city and the march inland (`vicksburg`, `vicksburg-campaign`); the siege and the civilians in the caves.
- Counter-case: Hannibal's `over-the-alps` or Napoleon in Russia; link, do not repeat.

### Part II. Lee in Virginia

**4. `the-divided-army` — Boldness against a larger enemy**

- Claim: a commander facing a larger army can win by dividing his own and striking where the enemy does not expect, but only while the enemy commander is slow to read it.
- Episodes: Chancellorsville (`chancellorsville` if studied); Jackson's flank march; Jackson's death.
- Counter-case: from the catalog; link the Hannibal volume's `reading-the-consul`.

**5. `the-third-day` — The offensive the army could not afford**

- Claim: a commander whose side cannot replace its losses must weigh every offensive against the army it spends, but the weighing is hardest after a run of victories.
- Episodes: Gettysburg (`gettysburg`, `gettysburg-campaign`); the second and third days; Lee's report and the later quarrel over Longstreet.
- Counter-case: Wellington's `the-only-army`; link, do not repeat.

### Part III. Grant against Lee

**6. `general-in-chief` — Directing every army at once**

- Claim: a commander given the whole of a larger side's forces can win by making them press together, but only if he can work with the political leadership and the generals he did not choose.
- Episodes: Grant's appointment in 1864; his plan for simultaneous advances; Lincoln, Halleck and Meade; Sherman in Georgia (`atlanta-campaign`).
- Counter-case: the Western Front's coalition lessons, or Napoleon; propose in the evidence pass.

**7. `fight-it-out-on-this-line` — Persistence and its price**

- Claim: a commander who keeps attacking after costly battles can wear down an enemy who cannot replace his losses, but only if the attacks serve a plan and the government and people will bear the cost.
- Episodes: the Wilderness and the decision to move south (`wilderness` if studied); Spotsylvania and the dispatch (`spotsylvania` if studied); Cold Harbor and Grant's regret.
- Counter-case: the Western Front's `the-ledger-of-learning`, or Haig on the Somme; link the Hannibal volume's `the-delayer` for the opposite method.

**8. `the-army-that-could-not-be-replaced` — Defending a cause by entrenchment**

- Claim: a commander whose army cannot be replaced can hold a stronger enemy for a long time from fortified lines, but only if his supply lines hold and his men will stay.
- Episodes: Petersburg (`petersburg` if studied); the railroads; desertion in the winter of 1864–1865.
- Counter-case: from the catalog; link Wellington's `the-only-army` and the Serbian volume's retreat.

**9. `the-exchange-that-stopped` — Prisoners and the arithmetic of attrition**

- Claim: a commander may refuse what his own men's families beg for if he judges it prolongs the war, but the cost falls on prisoners who cannot speak in the decision.
- Episodes: the breakdown of prisoner exchange, the Confederacy's refusal to exchange Black soldiers, Grant's correspondence on exchange; Andersonville and Union prisons.
- Counter-case: from the catalog; propose in the evidence pass.

**10. `whose-war` — The army of emancipation**

- Claim: a war fought for one aim can become a war for another, and the commanders who adapt to the new aim may win support the old one could not, but those who fight for the new aim may pay most.
- Episodes: the United States Colored Troops; Fort Pillow; the Crater at Petersburg; Grant's and Lee's views of Black soldiers, and the Confederacy's last-month vote to arm enslaved men.
- Counter-case: from the catalog; propose in the evidence pass.

### Part IV. The end and after

**11. `appomattox` — Terms the defeated could accept**

- Claim: a victor who offers generous terms can end a war faster and make the peace easier to keep, but only on conditions the defeated cannot later turn against the victory.
- Episodes: the last campaign to Appomattox; the terms; paroles and the men allowed to keep their horses; the sword and the salute as recollections.
- Counter-case: Caesar's `clemency`; link, do not repeat; and the Western Front's `how-to-end-it`.

**12. `the-ledger` — Answering the question**

- Purpose: weigh the evidence of the volume, answer "Why did Grant win?", test the premise that persistence was a strategy, and invite the reader to argue the opposite. Include the soldiers of both armies, the enslaved people the Confederacy fought to keep, the Black soldiers and their families, prisoners, the civilians of Vicksburg and Petersburg, the Shenandoah and Georgia, and the Lost Cause that shaped how both men were remembered for a century.
- Counter-case: the Hannibal volume's `the-ledger` or Napoleon's `the-ledger`, commanders whose victories did not decide their wars.

### Sources to try

Check that each exists, is readable and says what you cite.

- **The commanders' own words.** Grant, _Personal Memoirs_ (1885–1886); Grant's dispatches and letters in the _Official Records_ and in the _Papers of Ulysses S. Grant_ where openly readable; Lee's reports and dispatches in the _Official Records_ and _Lee's Dispatches_ (ed. Freeman, 1915).
- **Witnesses.** Sherman, _Memoirs_; Horace Porter, _Campaigning with Grant_; James Longstreet, _From Manassas to Appomattox_; Walter Taylor, _Four Years with General Lee_; Arthur Fremantle, _Three Months in the Southern States_; _Battles and Leaders of the Civil War_; Joshua Chamberlain, _The Passing of the Armies_; the testimony of Wesley Norris (1866).
- **The cause.** The declarations of the causes of secession (Mississippi, South Carolina, Georgia, Texas) and Alexander Stephens's "Cornerstone" speech, read in full.
- **Reference.** The 1911 Britannica, "American Civil War", "Grant, Ulysses Simpson" and "Lee, Robert Edward"; Britannica's modern biographies (browser only); the National Park Service's battle and biography pages; the Library of Congress; Encyclopedia Virginia.
- **Modern scholarship, for the debates.** The Lost Cause, Grant's reputation, casualty comparisons and Lee and slavery; use only what is lawfully readable (open articles, reviews, publisher pages) and cite only that.
- **Already used by this site.** The `vicksburg`, `gettysburg` and `atlanta-campaign` studies, the three campaign narratives and the `civil-war` war page, with their sources. Re-read what you cite.
- **Psychology.** As named in the curriculum, rule 3 applying. Prefer reviews and meta-analyses to single studies.

### Phases

- **Phase S.** Studies first, above. One commit.
- **Phase 0.** Above. One commit.
- **Phase 1, pilot.** Lessons 0, 5 and 7: the record, Lee's third day and Grant's persistence, which test the volume's question from both sides. `Quiz` takes the volume's course slug. The routes already exist, so only the volume data ships. Stop for me to judge.
- **Phase 2.** The remaining lessons in batches of two to four, in curriculum order, one commit each after my approval.
- **Phase 3, integration.** Should need no new code: check the hub, the volume page's strength-and-shadow table, both profiles, the counter-case profiles, study links, search and the sitemap in the browser, and add a README feature line. Then propose a comparison-page batch adding this volume's lessons to the existing problems (reading the record, reading the enemy, stopping, what cannot be replaced, victory and settlement, who pays) and any new problem the volume raises. With eight volumes the grid will need another look: the comparison page shows at most three columns up to 1600 pixels and four above.
- **Phase 4, optional, ask first.** Up to three Decision Room scenarios, each with exactly one historical option in varied position and a study to link. Candidates: Grant after the first day at Shiloh, retreat across the river or attack in the morning; Lee on the evening of 2 July at Gettysburg, attack again or manoeuvre; Grant after the Wilderness, withdraw or move south. Propose missing profiles (Meade, Jackson, Longstreet, Sheridan) and the revisions of the commanders' profiles.

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
- The war's cause is stated from the Confederacy's own declarations; no lesson adopts the Lost Cause.
- No psychiatric labels, casualty or army figures, invented quotations or commander ratings.
- List-page payloads unchanged except where studies or profiles were added, all checks pass, docs and counts consistent, each batch committed separately with my approval.

Start with Phase S. Show me the studies you propose, with what each adds and the sources you found for it, before writing any.
