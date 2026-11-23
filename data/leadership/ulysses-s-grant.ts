import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 8, shared by Grant and Lee, written in reviewed batches (batch G1,
// the pilot, is lessons 0, the record, 5, Lee's third day, and 7, Grant's
// persistence); docs/LEADERSHIP_EVIDENCE_GRANT_LEE.md records which sources
// can carry each lesson, and docs/SOURCE_AUDIT.md how each was read. Grant's
// memoirs are cited by chapter on Wikisource; scanned books by page.
const grant = (chapter: string, subject: string): Source => ({
  title: `Ulysses S. Grant, Personal Memoirs (1885–1886), chapter ${chapter}: ${subject}`,
  url: `https://en.wikisource.org/wiki/Personal_Memoirs_of_U._S._Grant/Chapter_${chapter}`,
  publisher: "Wikisource",
});
const eb1911 = (page: string, title: string): Source => ({
  title: `“${title}”, Encyclopædia Britannica, 11th ed. (1911)`,
  url: `https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/${page}`,
  publisher: "Wikisource",
});
const virginia = (entry: string, title: string): Source => ({
  title,
  url: `https://encyclopediavirginia.org/entries/${entry}/`,
  publisher: "Encyclopedia Virginia, Virginia Humanities",
});
const s = {
  grant25: grant("XXV", "General Johnston—Remarks on Shiloh"),
  grant50: grant("L", "Entering the Wilderness—Battle of the Wilderness"),
  grant51: grant("LI", "Movement by the Left Flank"),
  grant52: grant("LII", "Battle of Spottsylvania"),
  grant55: grant("LV", "Battle of Cold Harbor—Correspondence with Lee"),
  grant56: grant("LVI", "The Movement on Petersburg"),
  grant67: grant("LXVII", "Negotiations at Appomattox"),
  ebGrant: eb1911("Grant,_Ulysses_Simpson", "Grant, Ulysses Simpson"),
  ebLee: eb1911("Lee,_Robert_Edward", "Lee, Robert Edward"),
  ebWilderness: eb1911("Wilderness", "Wilderness"),
  longstreet: virginia(
    "longstreet-james-1821-1904",
    "James Longstreet (1821–1904) (William Garrett Piston)",
  ),
  pryor: virginia(
    "lee-robert-e-1807-1870",
    "Robert E. Lee (1807–1870) (Elizabeth Brown Pryor)",
  ),
  mertzWilderness: virginia(
    "wilderness-battle-of-the",
    "Wilderness, Battle of the (Greg Mertz)",
  ),
  greene: virginia(
    "petersburg-campaign",
    "Petersburg Campaign (A. Wilson Greene)",
  ),
  declarations: {
    title:
      "The Declaration of Causes of Seceding States (Georgia, Mississippi, South Carolina, Texas)",
    url: "https://www.battlefields.org/learn/primary-sources/declaration-causes-seceding-states",
    publisher: "American Battlefield Trust",
  },
  mississippi: {
    title:
      "A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi (1861)",
    url: "https://avalon.law.yale.edu/19th_century/csa_missec.asp",
    publisher: "The Avalon Project, Yale Law School",
  },
  leeSlavery: {
    title: "Robert E. Lee and Slavery",
    url: "https://www.nps.gov/arho/learn/historyculture/robert-e-lee-and-slavery.htm",
    publisher:
      "National Park Service, Arlington House, The Robert E. Lee Memorial",
  },
  unpleasantLegacy: {
    title: "An Unpleasant Legacy",
    url: "https://home.nps.gov/arho/learn/historyculture/an-unpleasant-legacy.htm",
    publisher:
      "National Park Service, Arlington House, The Robert E. Lee Memorial",
  },
  heuston: {
    title:
      "Sean Heuston, The Most Famous Thing Robert E. Lee Never Said: Duty, Forgery, and Cultural Amnesia (2014), abstract",
    url: "https://www.cambridge.org/core/journals/journal-of-american-studies/article/most-famous-thing-robert-e-lee-never-said-duty-forgery-and-cultural-amnesia/D2FB98509DF2B5C08176C6B0E64C10B1",
    publisher: "Journal of American Studies (Cambridge Core)",
  },
  fremantle: {
    title:
      "Arthur J. L. Fremantle, Three Months in the Southern States, April–June 1863 (1864)",
    url: "https://archive.org/details/threemonthsinsou01frem",
    publisher: "Internet Archive",
  },
  cooke: {
    title: "John Esten Cooke, A Life of Gen. Robert E. Lee (New York, 1871)",
    url: "https://archive.org/details/alifegenroberte00cookgoog",
    publisher: "Internet Archive",
  },
  suetonius: {
    title:
      "Suetonius, The Deified Julius, trans. J. C. Rolfe (Loeb Classical Library, 1913)",
    url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Julius%2A.html",
    publisher: "LacusCurtius, University of Chicago",
  },
  gettysburgNps: {
    title: "Gettysburg Overview",
    url: "https://www.nps.gov/gett/learn/historyculture/gettysburg-overview.htm",
    publisher: "National Park Service, Gettysburg National Military Park",
  },
  leeReport: {
    title:
      "Robert E. Lee’s Report of the Gettysburg Campaign, January 20, 1864 (from the Official Records)",
    url: "https://explorepahistory.com/odocument.php?docId=1-4-F4",
    publisher: "ExplorePAhistory.com",
  },
  leeToDavis: {
    title:
      "Letter from Gen. Robert E. Lee to Confederate President Jefferson Davis, 8 July 1863",
    url: "https://www.battlefields.org/learn/primary-sources/letter-gen-robert-e-lee-confederate-president-jefferson-davis",
    publisher: "American Battlefield Trust",
  },
  watson: {
    title: "German Spring Offensives 1918 (Alexander Watson)",
    url: "https://encyclopedia.1914-1918-online.net/article/german-spring-offensives-1918/",
    publisher:
      "1914-1918-online. International Encyclopedia of the First World War",
  },
  philpott: {
    title: "Somme, Battles of (William Philpott)",
    url: "https://encyclopedia.1914-1918-online.net/article/somme-battles-of/",
    publisher:
      "1914-1918-online. International Encyclopedia of the First World War",
  },
  greenwalt: {
    title:
      "Phillip Greenwalt, They Called Grant a Butcher. But Can a Butcher Have Regrets? (Hallowed Ground, 2018)",
    url: "https://www.battlefields.org/learn/articles/they-called-grant-butcher-can-butcher-have-regrets",
    publisher: "American Battlefield Trust",
  },
  roth: {
    title:
      "Stefan Roth, Thomas Robbert and Lennart Straus, On the sunk-cost effect in economic decision-making: a meta-analytic review (2015), abstract",
    url: "https://link.springer.com/article/10.1007/s40685-014-0014-8",
    publisher: "Business Research (Springer)",
  },
} satisfies Record<string, Source>;

export const grantLeeVolume: LeadershipVolume = {
  commanderSlug: "ulysses-s-grant",
  alsoCommanderSlugs: ["robert-e-lee"],
  title:
    "Leadership Lessons from Grant and Lee: the American Civil War, 1861–1865",
  summary:
    "What a person who leads others can take from Ulysses S. Grant and Robert E. Lee, the opposing commanders of the American Civil War’s last year, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In February 1862 Ulysses S. Grant, a little-known Union brigadier, took Forts Henry and Donelson and demanded unconditional surrender; at Shiloh two months later his army was attacked in its camps and held on; in 1863 he took Vicksburg. In March 1864 Lincoln brought him east as general-in-chief of all the Union armies, and for a year he fought Robert E. Lee, who had beaten a larger army at Chancellorsville and lost at Gettysburg, through the Wilderness, Spotsylvania and the siege of Petersburg, until Lee surrendered at Appomattox on 9 April 1865. The Confederacy Lee served was founded to keep slavery, as its own states’ declarations of secession say. The record is unequal. Grant wrote his memoirs twenty years later, finishing them days before he died of cancer; Lee wrote none, and after his death former Confederates made him the Confederacy’s stainless hero and blamed others for his defeats. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. The costs stay in view: the enslaved people the Confederacy fought to keep and those who freed themselves, the soldiers of both armies, the Black soldiers of the Union army, prisoners on both sides, the civilians of Vicksburg and Petersburg, and the wounded left between the lines. One war cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "Why did Grant win: persistence, the Union’s resources, Lee’s own choices, or does the record decide what we see?",
  parts: [
    "Orientation",
    "Grant in the West",
    "Lee in Virginia",
    "Grant against Lee",
    "The end and after",
  ],
  lessons: [
    {
      slug: "how-to-read-grant-and-lee",
      title: "A war rewritten by the losers: how to read Grant and Lee",
      part: "Orientation",
      themes: ["communication", "judgement", "ethics"],
      claim:
        "When the losing side of a war rewrites its record, a lesson drawn from that war is only as sound as the reader’s ability to separate what the commanders did and wrote at the time from what was written later to explain a defeat or defend a reputation.",
      inBrief: {
        strength:
          "Grant’s memoirs, Lee’s reports and letters, and the Confederacy’s own declarations of secession survive and can be read side by side.",
        shadow:
          "Lee left no memoir, and for a century his reputation was written by men who needed him blameless.",
      },
      moment: {
        text: "In the last months of his life Grant was writing against time. The 1911 Britannica records that the task led to his Personal Memoirs, that for most of the work he was suffering tortures from cancer of the throat, and that he finished the manuscript only four days before his death. The book is clear and sparing, and in places it argues. Grant calls Shiloh more persistently misunderstood than any other battle of the war, and says that public opinion had been formed wrongly long before correct accounts appeared; he calls the story of Lee surrendering his sword at Appomattox and receiving it back the purest romance. Lee wrote no such book. The war’s most admired general reaches us through his reports and letters, and through what others wrote about him after he died.",
        evidence: "fact",
        refs: [
          { source: 0 },
          { source: 1, locator: "ch. XXV" },
          { source: 2, locator: "ch. LXVII" },
        ],
      },
      episodes: [
        {
          title: "Grant’s argument with the record",
          text: "Grant wrote his account of Shiloh as a correction. He argues from the Confederate generals’ own councils of war, still debating the attack on the morning it began, that there was no surprise, and he rejects the claim of Confederate writers that the battle was won until Albert Sidney Johnston fell. He also explains why he made no full official report: Halleck took command in the field a few days later and Grant was not shown Buell’s reports until the War Department published them. The memoirs are the work of a commander answering twenty years of criticism, and the Shiloh study sets his account beside the historians who say the camps were surprised.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. XXV" }],
          battleSlugs: ["shiloh"],
        },
        {
          title: "Early’s campaign and Lee’s silence",
          text: "Piston writes that in his wartime reports and private papers Lee never criticised Longstreet. Lee’s own report of the Gettysburg campaign, dated January 1864, notes only that Longstreet’s dispositions on 3 July were not completed as early as expected. After Lee’s death in 1870, Piston continues, Jubal Early accused Longstreet of being late on the second day at Gettysburg and so losing the battle and the war, opened the attack in a speech at Washington and Lee on 19 January 1872 and kept it up for two decades with Gordon, Fitzhugh Lee and Jefferson Davis. With the defeat transferred to Longstreet, Lee emerged as the Confederacy’s stainless hero, beaten by numbers and never outgeneralled.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }],
          battleSlugs: ["gettysburg"],
        },
        {
          title: "Words given to Lee",
          text: "Three sayings show three kinds of evidence. The most famous, the sentence calling duty the sublimest word in the language, Lee never wrote: Heuston shows it comes from a forged letter, probably made by a Union soldier at Arlington, and was known to be a forgery early in the twentieth century. At Fredericksburg, John Esten Cooke’s biography of 1871 has Lee murmuring that it was well this was so terrible, or they would grow too fond of it; Cooke does not say who heard it. After the repulse at Gettysburg, the British officer Arthur Fremantle, who was there and published his diary in 1864, heard Lee tell General Wilcox that all this had been his fault. A forgery, a biographer’s report and a witness’s diary are not the same evidence, though all three are quoted as Lee’s words.",
          evidence: "fact",
          refs: [
            { source: 5 },
            { source: 6 },
            { source: 7, locator: "pp. 267–269" },
          ],
          battleSlugs: ["gettysburg"],
        },
        {
          title: "What the war was for",
          text: "The seceding states said why they left. Mississippi’s declaration opens by saying that its position is thoroughly identified with the institution of slavery, the greatest material interest of the world. Georgia’s begins with ten years of complaints against the non-slaveholding states about African slavery; South Carolina’s charges those states with increasing hostility to the institution; Texas’s says she joined the Union as a commonwealth holding negro slavery, which her people intended should exist in all future time. Grant, at Appomattox, called the Confederate cause one of the worst for which a people ever fought, and one for which there was the least excuse. The declarations are the evidence; Grant’s sentence is his judgement.",
          evidence: "fact",
          refs: [
            { source: 8 },
            { source: 9 },
            { source: 2, locator: "ch. LXVII" },
          ],
          battleSlugs: [],
          campaignSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The winning commander, writing twenty years later, dying, to provide for his family and to answer his critics.",
          says: "Shiloh was misunderstood, the sword story is romance, and the Confederate cause was among the worst ever fought for.",
          refs: [
            { source: 0 },
            { source: 1, locator: "ch. XXV" },
            { source: 2, locator: "ch. LXVII" },
          ],
        },
        {
          who: "Jubal Early, as Piston describes him",
          stake:
            "A former Confederate general who led a division at Gettysburg and after Lee’s death led the effort to enshrine him.",
          says: "Longstreet’s lateness on 2 July lost the battle and the war.",
          refs: [{ source: 3 }],
        },
        {
          who: "Arthur Fremantle",
          stake:
            "A British officer travelling with the Confederate armies in 1863, who openly admired the South and published his diary the next year.",
          says: "Lee took the whole weight of the repulse on his own shoulders.",
          refs: [{ source: 7, locator: "preface; pp. 268–269" }],
        },
        {
          who: "Wesley Norris, as the Park Service quotes him",
          stake:
            "A man enslaved at Arlington who tried to free himself in 1859 and gave his account in 1866, one of the few voices of the enslaved in the commanders’ story.",
          says: "Lee had him and his sister and cousin whipped for running away.",
          refs: [{ source: 10 }],
        },
      ],
      strategist: [
        {
          text: "The strategist judges a decision by what the commander knew when he made it. For Grant there is his own account, written with hindsight but also with the dispatches he printed, such as the letter to Buckner and the letter to Halleck from Spotsylvania. For Lee there are his reports and letters, written for Jefferson Davis’s government, often months after the event: the Gettysburg report is dated January 1864. Neither is a neutral record, but both are closer to the decision than the postwar quarrel. The method is to read each decision first in the documents of the time, then in the later accounts, and to notice where the later accounts know too much.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "ch. XXV" }, { source: 4 }],
        },
        {
          text: "The record also supplies two verdicts that frame the volume. The 1911 Britannica writes that Grant would have followed other unsuccessful generals into retirement had he not shown, whatever his mistakes and whether or not he was sober and temperate, the iron determination that Lincoln and the Northern people wanted. Pryor writes that Lee’s hands-on leadership was one reason he frustrated Grant’s powerful machine for so long, and that historians have questioned whether his costly offensive battles were the right strategy for his side. Persistence and Lee’s own choices are claims to test, and this volume tests them.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 11 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on collective memory and on how groups explain defeat could be relevant to the Lost Cause, but none was read for this volume, and a general finding would add little to what the documents show directly: a report that blames no one, a speech that blames Longstreet, and a reputation that grew from the second. The lesson relies on the documents and their dates.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited. The lesson’s claims rest on comparing documents written at the time with those written later.",
        },
      ],
      shadow: {
        text: "The record still has its distortions. The 1911 Britannica’s article on Lee, written within living memory of the war, never mentions slavery. For decades, the Park Service writes, most historians followed Douglas Southall Freeman in dismissing the accounts of Lee having enslaved people whipped as libel by antislavery agitators; Elizabeth Brown Pryor, in 2007, judged that Wesley Norris’s account rings true because much of it can be verified. What a reader of Lee finds depends on which of his biographers was trusted, and for most of a century it was the ones who needed him blameless.",
        evidence: "fact",
        refs: [{ source: 12 }, { source: 10 }],
      },
      counterCase: {
        text: "Caesar is the opposite case, read at length in the Caesar volume’s orientation: a winner who wrote his own record. Suetonius quotes Cicero’s praise of the memoirs’ plainness, and Asinius Pollio’s judgement that they were put together somewhat carelessly and without strict regard for truth. Hannibal’s record, in the Hannibal and Scipio volume, was written by the winners’ friends. Here the loser’s side rewrote the record after the war, and for a century its version was the one most readers met. None of the three records is neutral; the difference is whose interest shaped it, and when.",
        evidence: "interpretation",
        refs: [{ source: 13, locator: "56.1–4" }],
        commanderSlug: "julius-caesar",
        battleSlugs: [],
      },
      cost: {
        text: "The people the Confederacy fought to keep enslaved appear in the commanders’ record mostly as property. Wesley Norris, his sister Mary and his cousin George Parks ran from Arlington in 1859 believing that George Washington Parke Custis’s will had freed them; they were caught in Maryland and returned. In 1866 Norris told how they were taken to the barn, how the overseer refused to whip them and a county constable did, and how their backs were then washed with brine. Lee privately denied it; the Park Service sets the denial beside the testimony. Lee executed the deed freeing the people enslaved on the Custis estates on 29 December 1862, within the five years Custis’s will allowed.",
        evidence: "fact",
        refs: [{ source: 10 }, { source: 14 }],
      },
      transfer: {
        holdsWhen: [
          "The losing side of a contest writes its history after the event, and its version becomes the one most people meet.",
          "Documents from the time survive and can be dated, so that later explanations can be checked against them.",
        ],
        failsWhen: [
          "A record written at the time is taken as neutral; Lee’s reports were written for his own government and Grant’s memoirs answered his critics.",
          "The later account is dismissed only because it is later; some recollections, such as Norris’s, can be checked and hold.",
        ],
        questions: [
          "Who wrote the accepted story of your organisation’s last failure, and what did they need it to say?",
          "Which saying attributed to a leader you admire have you checked to its first printing?",
          "Whose account of events in your organisation was dismissed as hostile, and has anyone tested it since?",
        ],
      },
      bearsOn:
        "The fourth answer to the volume’s question, the record, is the condition of all the others. Persistence is described in Grant’s own words; the Union’s resources were the explanation the Lost Cause preferred, because it left Lee unbeaten in generalship; Lee’s own choices were for a century blamed on Longstreet. The record does not settle the question, but it decides which evidence the other answers can use.",
      questions: [
        {
          prompt:
            "What does Piston say Lee wrote about Longstreet in his wartime reports and private papers?",
          choices: [
            "That Longstreet had lost the battle of Gettysburg.",
            "That Longstreet should be removed from command.",
            "Nothing critical; the charge against Longstreet was made by Early and others after Lee’s death.",
          ],
          answer: 2,
          explanation:
            "Lee’s report notes only that Longstreet’s dispositions on 3 July were not completed as early as expected; Early’s campaign began in 1872.",
        },
        {
          prompt:
            "What is the origin of the famous sentence, attributed to Lee, that calls duty the sublimest word in the language?",
          choices: [
            "A forged letter, as Heuston shows; Lee never wrote it.",
            "Lee’s report of the Gettysburg campaign.",
            "Fremantle’s diary of 1863.",
          ],
          answer: 0,
          explanation:
            "Heuston’s article explains that the letter is a forgery, probably made at Arlington during the war.",
        },
        {
          prompt:
            "Which of these is the strongest evidence for what Lee said after the repulse at Gettysburg?",
          choices: [
            "A saying printed in a biography long after the war.",
            "The diary of Arthur Fremantle, who was present and published it in 1864.",
            "A speech by Jubal Early in 1872.",
          ],
          answer: 1,
          explanation:
            "Fremantle was there and wrote within months, though his own preface shows how much he admired the South.",
        },
      ],
      sourceCheck: {
        question: "What caused the secession of the Southern states?",
        witnesses: [
          {
            label: "Mississippi declaration, 1861",
            claim:
              "Our position is thoroughly identified with the institution of slavery, the greatest material interest of the world.",
          },
          {
            label: "Texas declaration, 1861",
            claim:
              "Texas joined the Union as a commonwealth holding negro slavery, which her people intended should exist in all future time.",
          },
          {
            label: "Grant, Personal Memoirs, ch. LXVII",
            claim:
              "The Confederate cause was one of the worst for which a people ever fought.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Treat the cause as a matter of opinion, since Grant was an enemy of the Confederacy.",
            feedback:
              "Grant’s sentence is a judgement, but the declarations are the seceding states’ own statements of their reasons.",
          },
          {
            text: "Take the declarations as the evidence of why the states seceded, and Grant’s sentence as his judgement of that cause.",
            feedback:
              "The states said in their own words that slavery was the reason; Grant’s view is one witness’s verdict on it.",
            best: true,
          },
          {
            text: "Set the declarations aside, because later writers explained the war differently.",
            feedback:
              "Later explanations, such as those of the Lost Cause, have to be tested against the documents of the time, not the other way round.",
          },
        ],
      },
      seminar: {
        prompt:
          "Lee wrote no memoir. Argue how his reputation would stand if he had written one, from three positions: a soldier of the Army of Northern Virginia, a person formerly enslaved at Arlington, and a modern historian.",
        guidance:
          "Use Lee’s Gettysburg report, Fremantle’s diary, Early’s charge against Longstreet and Norris’s testimony. In each case say what was written at the time and what was written later, and by whom.",
      },
      sources: [
        s.ebGrant,
        s.grant25,
        s.grant67,
        s.longstreet,
        s.leeReport,
        s.heuston,
        s.cooke,
        s.fremantle,
        s.mississippi,
        s.declarations,
        s.unpleasantLegacy,
        s.pryor,
        s.ebLee,
        s.suetonius,
        s.leeSlavery,
      ],
    },
    {
      slug: "the-third-day",
      title: "The third day: the offensive the army could not afford",
      part: "Lee in Virginia",
      themes: ["judgement", "restraint"],
      claim:
        "When a commander’s side cannot replace its losses, every offensive has to be weighed against the army it spends, and the weighing is hardest after a run of victories, when one more success seems within reach.",
      inBrief: {
        strength:
          "Lee carried the war north after Chancellorsville, and after the repulse he took the blame on himself in front of his men.",
        shadow:
          "He renewed the attack on 3 July with an army he knew could not be replaced, and after his death others were blamed for it.",
      },
      moment: {
        text: "After the repulse of the attack on 3 July, Arthur Fremantle found Lee riding alone in front of the wood, rallying the broken troops with a few words to every soldier he met. When General Wilcox came up, almost crying, to report the state of his brigade, Lee shook his hand and said, as Fremantle printed it the next year: “Never mind, General, all this has been my fault — it is I that have lost this fight, and you must help me out of it in the best way you can.” Fremantle, who admired the Confederacy, called Lee’s conduct perfectly sublime. Five days later Lee wrote to Jefferson Davis that the enemy had been much shattered, but could easily be reinforced, while no addition could be made to his own numbers.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 267–269" }, { source: 1 }],
      },
      episodes: [
        {
          title: "Into Pennsylvania",
          text: "After Chancellorsville, the Park Service writes, Lee decided to invade the North to revive Confederate morale and relieve the pressure on Vicksburg. In his report he says that he had not intended to fight a general battle so far from his base unless attacked, but that, coming unexpectedly on the whole Federal army, withdrawing through the mountains with his long trains would have been difficult and dangerous. A battle had become in a measure unavoidable, he writes, and the success of the first day gave hope of a favourable issue.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }],
          battleSlugs: ["gettysburg"],
          campaignSlugs: ["gettysburg-campaign"],
        },
        {
          title: "The second day",
          text: "On 2 July Lee ordered attacks on both Union flanks. Longstreet’s attack on the Union left fought through the Wheatfield and the Peach Orchard to the base of Little Round Top; Ewell’s evening attack on Cemetery Hill and Culp’s Hill gained ground it could not hold. Lee’s report explains what he concluded: the result of the day’s operations induced the belief that, with proper concert of action and with the support the artillery could now give from the positions gained, the army would ultimately succeed, and it was determined to continue the attack.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }],
          battleSlugs: ["gettysburg"],
        },
        {
          title: "The third day",
          text: "On 3 July the Confederate artillery opened a long bombardment of Cemetery Ridge, which the Park Service says did little to soften the position, and then Pickett’s division and Heth’s, under Pettigrew, advanced across open fields against the Union centre. Lee writes that his batteries had nearly exhausted their ammunition in the cannonade and could not support the infantry, a fact unknown to him when the assault took place; the left gave way under fire from the ridge and Cemetery Hill, and the right, after entering the Union works, was struck in front and on both flanks and driven back. The severe loss and the reduction of ammunition, he writes, made another attempt inadvisable.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }],
          battleSlugs: ["gettysburg"],
        },
      ],
      witnesses: [
        {
          who: "Robert E. Lee, in his report",
          stake:
            "The commander explaining a defeat to his own government six months later, in a report that blames no subordinate by name.",
          says: "A battle had become unavoidable, the second day promised success with better concert, and the artillery’s exhaustion was unknown to him.",
          refs: [{ source: 3 }],
        },
        {
          who: "Arthur Fremantle",
          stake:
            "A British officer with the army, an admirer of the South, writing a diary published in 1864.",
          says: "Lee took the whole weight of the repulse upon his own shoulders.",
          refs: [{ source: 0, locator: "pp. 268–269" }],
        },
        {
          who: "Jubal Early, as Piston describes him",
          stake:
            "A division commander at Gettysburg who, after Lee’s death, led the effort to make Lee blameless.",
          says: "Longstreet’s lateness on the second day cost the battle and the war.",
          refs: [{ source: 4 }],
        },
        {
          who: "Elizabeth Brown Pryor",
          stake:
            "A modern biographer of Lee, writing for Encyclopedia Virginia.",
          says: "Lee fought large and costly battles hoping to destroy the enemy’s army or break the North’s will, a style of war less effective against an enemy who could reinforce by railroad.",
          refs: [{ source: 5 }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Lee knew on the evening of 2 July, the decision to attack again had reasons. His report says the day’s fighting had gained positions from which his artillery could support a renewed assault, and that better coordination would bring success. He did not know that his guns would run short of ammunition before the infantry went in. What he did know, and wrote to Davis five days later, was the arithmetic of the war: the enemy could be reinforced and his own army could not. The renewed attack was a wager that one more success would be worth the men it cost, made by a commander who, in Pryor’s words, had turned a vulnerable position at Chancellorsville into a brilliant offensive through surprise and daring.",
          evidence: "interpretation",
          refs: [{ source: 3 }, { source: 1 }, { source: 5 }],
        },
        {
          text: "Pryor places the decision in a pattern. Lee risked his scarce resources in large battles, she writes, because he hoped to destroy the enemy’s army or so discourage Northerners that they would demand an end to the war, and much of the Southern public, buoyed by victories such as Chancellorsville, wanted a quick victory. She quotes the Confederate Edmund Ruffin complaining that such great and bloody battles led to no important results except to weaken both sides, and records that historians have asked whether a war of attrition would have served the Confederacy better. Wellington’s volume asks the same question from the other side, in its lesson on preserving an army that cannot be replaced.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "It is tempting to explain the third day by overconfidence after a run of victories, but no study was read that could test such a claim about Lee, and his report gives specific reasons that can be examined directly. The lesson rests on what Lee wrote and what he did not know.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; any account of Lee’s state of mind would be speculation.",
        },
      ],
      shadow: {
        text: "The defeat was rewritten after Lee’s death. Piston writes that Early’s charge against Longstreet offered southerners a temptingly simple explanation for defeat, and that some of its most specific accusations were disproved by Lee’s own report and the testimony of his staff. Lee’s report records the delay of 3 July without blaming anyone; Fremantle heard him take the fault on himself. The later story turned his own decision into a subordinate’s failure, and the lesson of Gettysburg that Southern readers received for decades was the wrong one.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 3 }, { source: 0, locator: "p. 269" }],
      },
      counterCase: {
        text: "Ludendorff in 1918 shows the same wager on a larger scale, and why it was hard to refuse. Watson writes that with America training a huge army, Ludendorff had one final, brief chance to win in the west before overwhelming American forces arrived, and took it. The offensives won ground and prisoners but captured nothing of value, and Ludendorff, repeatedly reinforcing tactical successes, lost his grip on the operations. By the summer the German army had no reserves to replace its losses; its fittest troops had disproportionately died, and the Allies’ losses were covered by arriving Americans. As with Lee, the case for attacking rested on time running against his side, and the cost fell on an army that could not be rebuilt.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        commanderSlug: "erich-ludendorff",
        battleSlugs: ["operation-michael"],
      },
      cost: {
        text: "The Park Service describes what the armies left behind: a town in shambles, wounded and dying men crowded into nearly every building, churches, public buildings and private homes turned into hospitals, and farm fields and gardens that had become graveyards, with many of the dead in shallow graves or not buried at all. A general hospital was set up east of the town to care for the wounded of both armies until the last patients left in January 1864.",
        evidence: "fact",
        refs: [{ source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "A side cannot replace what it spends, so that each offensive draws on a stock that will not be refilled.",
          "Recent successes make the next attack look likely to succeed, and the people at home expect victory.",
        ],
        failsWhen: [
          "Time is running against the weaker side, so that refusing to attack also loses, as Ludendorff and Lee both believed.",
          "The leader’s reasons are judged only by the outcome; Lee did not know his artillery was short of ammunition.",
        ],
        questions: [
          "What in your organisation cannot be replaced, and which of your plans draw on it?",
          "After a run of successes, who tells you what the next attempt will cost?",
          "When a failure is explained, is the explanation one the leader gave at the time, or one written later by people who needed a culprit?",
        ],
      },
      bearsOn:
        "The third day is the strongest case for the third answer, Lee’s own choices. Lee knew, and wrote to Davis, that his army could not be replaced, and he renewed an attack that spent it. But the record answer is here too: for decades the defeat was blamed on Longstreet, which kept Lee’s choices out of view and left the Union’s numbers as the only acceptable explanation.",
      questions: [
        {
          prompt:
            "According to Lee’s report, why did he continue the attack on 3 July?",
          choices: [
            "Because Longstreet urged it.",
            "Because Davis ordered him to.",
            "Because the second day’s results led him to believe that better coordination and artillery support from the positions gained would bring success.",
          ],
          answer: 2,
          explanation:
            "The report says the day’s operations induced the belief that, with proper concert of action, the army would ultimately succeed.",
        },
        {
          prompt:
            "What did Lee write to Jefferson Davis on 8 July 1863 about the two armies?",
          choices: [
            "That the enemy could easily be reinforced while no addition could be made to his own numbers.",
            "That his army had been destroyed.",
            "That the Union army was about to retreat to Washington.",
          ],
          answer: 0,
          explanation:
            "He also wrote that his army’s condition was good and its confidence unimpaired.",
        },
        {
          prompt: "Who blamed Longstreet for the defeat, and when?",
          choices: [
            "Lee, in his report of January 1864.",
            "Jubal Early and his allies, after Lee’s death in 1870, beginning with a speech in 1872.",
            "Fremantle, in his diary.",
          ],
          answer: 1,
          explanation:
            "Piston writes that Lee never criticised Longstreet in his reports or private papers.",
        },
      ],
      sourceCheck: {
        question: "Who was responsible for the failure of 3 July?",
        witnesses: [
          {
            label: "Fremantle, 1864",
            claim:
              "Lee told Wilcox that all this had been his fault and that it was he who had lost the fight.",
          },
          {
            label: "Lee’s report, January 1864",
            claim:
              "Longstreet’s dispositions were not completed as early as expected, and the artillery’s exhausted ammunition was unknown to Lee when the assault took place.",
          },
          {
            label: "Early, from 1872, as Piston reports",
            claim:
              "Longstreet’s lateness on 2 July lost the battle and the war.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Early’s view, because he was a general at the battle.",
            feedback:
              "Early wrote after Lee’s death with a purpose; Piston notes that Lee’s report and his staff disproved some of his charges.",
          },
          {
            text: "Accept Lee’s words to Wilcox as the whole answer.",
            feedback:
              "They are strong evidence of what Lee said, from a witness, but words of encouragement to a broken brigade are not an analysis of the battle.",
          },
          {
            text: "Read Lee’s report and Fremantle’s diary as evidence from the time, and treat Early’s charge as a later argument to be tested against them.",
            feedback:
              "Both early sources put the decision with Lee; the later charge has to be checked against them.",
            best: true,
          },
        ],
        battleSlug: "gettysburg",
      },
      seminar: {
        prompt:
          "On the evening of 2 July Lee decided to attack again. Argue the decision from three positions: Lee with what he knew that night, a Confederate soldier who would cross the field the next day, and Jefferson Davis reading Lee’s letter of 8 July.",
        guidance:
          "Use Lee’s report, his letter to Davis, Fremantle’s account and Pryor’s view of Lee’s strategy. Say what Lee could not have known, and what he did know about replacing his army.",
      },
      sources: [
        s.fremantle,
        s.leeToDavis,
        s.gettysburgNps,
        s.leeReport,
        s.longstreet,
        s.pryor,
        s.watson,
      ],
    },
    {
      slug: "fight-it-out-on-this-line",
      title: "Fight it out on this line: persistence and its price",
      part: "Grant against Lee",
      themes: ["judgement", "adaptation", "ethics"],
      claim:
        "When an enemy cannot replace his losses, a commander who keeps attacking after costly battles can wear him down, but only while each attack serves a plan and the government and people will bear the cost; once it does not, persistence becomes the price of the last battle paid again.",
      inBrief: {
        strength:
          "After the Wilderness Grant marched south instead of back, and kept Lee’s army fighting until it could no longer move.",
        shadow:
          "Some attacks served no plan, and at Cold Harbor the wounded lay between the lines while the generals exchanged letters.",
      },
      moment: {
        text: "On the night of 7 May 1864, after two days of fighting in the Wilderness, the Army of the Potomac marched out of its lines. Its soldiers had seen earlier commanders retreat after such battles. Grant writes that as the columns turned south, towards Spotsylvania, the men cheered so lustily that the enemy must have taken it for a night attack; Mertz writes that the troops wildly and spontaneously cheered him. Four days later, from Spotsylvania, Grant wrote to Halleck that he was sending his wagons back for fresh supplies and purposed to fight it out on that line if it took all summer.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. LI" },
          { source: 1 },
          { source: 2, locator: "ch. LII" },
        ],
      },
      episodes: [
        {
          title: "Not going back",
          text: "The Wilderness ended with both armies in their entrenchments. Mertz calls it a Confederate tactical victory; the 1911 Britannica writes that to Grant it was an indecisive victory that had given him a moral superiority he did not intend to forfeit. Grant gives his reasons for moving south: to keep Lee from reaching Richmond in time to crush Butler, and to get between Lee’s army and its capital or, failing that, to draw it into the open. Mertz quotes Grant telling an officer who feared what Lee would do next to go back to his command and think about what they were going to do themselves.",
          evidence: "fact",
          refs: [
            { source: 1 },
            { source: 3, locator: "Wilderness" },
            { source: 0, locator: "ch. LI" },
          ],
          battleSlugs: ["wilderness"],
          campaignSlugs: ["overland-campaign"],
        },
        {
          title: "The letter from Spotsylvania",
          text: "At Spotsylvania the attacks went on. On 10 May a column under Emory Upton broke into the Confederate works but could not be supported; Grant promoted Upton on the spot. On the 11th he wrote to Halleck. On the 12th Hancock’s corps overran the salient at dawn, and the fighting at the Bloody Angle lasted into the night while Lee built a new line behind it. The 1911 Britannica calls the letter Grant’s famous message, and calls the 12th the fifth battle since the evening of 4 May, when the army crossed the Rapidan.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "ch. LII" },
            { source: 3, locator: "Wilderness" },
          ],
          battleSlugs: ["spotsylvania"],
        },
        {
          title: "Cold Harbor and the regret",
          text: "On 3 June the Union army attacked Lee’s entrenchments at Cold Harbor. Grant writes that the assault cost heavily and probably without benefit to compensate, and that he then ordered all offensive action to stop after his corps commanders judged further attacks hopeless. Twenty years later he wrote: “I have always regretted that the last assault at Cold Harbor was ever made,” adding that no advantage whatever was gained to compensate for the heavy loss and that the advantages, other than those of relative losses, were on the Confederate side.",
          evidence: "fact",
          refs: [{ source: 4, locator: "ch. LV" }],
          battleSlugs: [],
          campaignSlugs: ["overland-campaign"],
        },
        {
          title: "Across the James",
          text: "Grant did not attack again at Cold Harbor. He moved the army across the Chickahominy and the James to Petersburg, a move he calls hazardous because Lee had the shorter lines. Pryor writes that Lee knew his resources were too limited to force Grant back and had not expected the Union army to push on after its losses; Greene writes that when the campaign ended at Cold Harbor, Lee’s army still blocked the way to Richmond. Persistence had not destroyed Lee’s army in the field, but it had kept it fighting from its trenches until it could be besieged.",
          evidence: "fact",
          refs: [
            { source: 5, locator: "ch. LVI" },
            { source: 6 },
            { source: 7 },
          ],
          battleSlugs: ["petersburg"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The commander, writing his memoirs twenty years later, who prints his own dispatches and admits one regret.",
          says: "He moved south to get between Lee and Richmond, and he always regretted the last assault at Cold Harbor.",
          refs: [
            { source: 0, locator: "ch. LI" },
            { source: 4, locator: "ch. LV" },
          ],
        },
        {
          who: "Greg Mertz",
          stake:
            "A modern historian writing the Encyclopedia Virginia articles on the Wilderness and Spotsylvania.",
          says: "Grant turned a tactical defeat into a strategic victory by refusing to retreat, and was later catcalled a butcher.",
          refs: [{ source: 1 }],
        },
        {
          who: "Elizabeth Brown Pryor",
          stake: "A modern biographer of Lee.",
          says: "Lee had not expected the Union army to push on after its losses, and his personal leadership helped him frustrate Grant for so long.",
          refs: [{ source: 6 }],
        },
        {
          who: "Phillip Greenwalt",
          stake:
            "A writer for the American Battlefield Trust’s magazine, arguing against the butcher label.",
          says: "One charge on one day at Cold Harbor is used to sum up Grant’s whole career, while Pickett’s charge is remembered romantically.",
          refs: [{ source: 8 }],
        },
      ],
      strategist: [
        {
          text: "Persistence served a plan when each move put Lee in a worse position. Grant’s stated aims after the Wilderness were concrete: protect Butler, get between Lee and Richmond, or draw him into the open. Lee, as he had written to Davis after Gettysburg, could not replace his losses, and Pryor writes that he knew his resources were too limited to force Grant back. Each movement by the left flank took the armies closer to Richmond, and when the last of them crossed the James it ended at Petersburg, where Lee had to defend a city and its railroads rather than manoeuvre. Measured that way, the campaign was one plan pursued through several battles.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. LI" },
            { source: 6 },
            { source: 5, locator: "ch. LVI" },
          ],
        },
        {
          text: "Persistence served no plan when it became a frontal attack on works that could not be carried. Grant’s own words on Cold Harbor say so, and he names one other assault he regretted, at Vicksburg on 22 May 1863. The government’s patience mattered too: Mertz writes that Lincoln, fearing defeat in the autumn election without a victory, had told Grant to seek out and destroy Lee, and Greene that Lincoln’s re-election in November relieved the pressure on Grant to show progress. Persistence needed political cover, and the cover was not unlimited. The Hannibal and Scipio volume’s lesson on Fabius shows the opposite method, refusing battle, under the same condition that the state could bear the cost.",
          evidence: "interpretation",
          refs: [
            { source: 4, locator: "ch. LV" },
            { source: 1 },
            { source: 7 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "The sunk-cost effect in decisions to continue",
          base: "meta-analysis",
          text: "A meta-analytic review of the sunk-cost effect in economic decisions found clear evidence that people continue to invest because of what they have already spent, and that the size of the effect and its moderators depend on the kind of decision, distinguishing what it calls progress decisions from decisions about using what has been bought. The finding names the risk in persistence: that the cost of the last attack becomes a reason for the next one. It cannot say whether Grant fell into it. His move across the James, rather than another assault at Cold Harbor, is the kind of decision the research describes as hard.",
          evidence: "interpretation",
          refs: [{ source: 9 }, { source: 5, locator: "ch. LVI" }],
          limit:
            "Only the abstract was read. The studies concern monetary costs in economic decisions, not lives in war, and cannot show what Grant or Lee thought.",
        },
      ],
      shadow: {
        text: "The price was paid by soldiers of both armies. Grant writes that in the Wilderness the woods caught fire and wounded men who could not move were suffocated or burned to death. Mertz writes that the march south led to Spotsylvania, the North Anna and Cold Harbor, when Northern morale would be most sorely tested and Grant would be catcalled a butcher; Greenwalt ties the name to the Cold Harbor assault. Who first used the word is not known from the sources read here, and this volume gives no casualty comparison. The label is evidence of what the campaign cost in public confidence, not a measure of it.",
        evidence: "fact",
        refs: [{ source: 10, locator: "ch. L" }, { source: 1 }, { source: 8 }],
        battleSlugs: ["wilderness"],
      },
      counterCase: {
        text: "Haig on the Somme in 1916 shows persistence that did not serve a plan for much of its length. Philpott writes that Haig’s operational goals were overly ambitious, that after the first phase the British were contained on the plateau and flung units against village bastions in localised and generally ineffective attacks that wore down both sides, and that the final phase in the autumn rains degenerated into intermittent attacks on strong points. Philpott also argues that the battle shifted the war of attrition in the Allies’ favour. The Western Front volume’s lesson on the ledger of learning weighs which of those costs bought anything. Grant’s campaign differs in one respect the record shows clearly: after Cold Harbor he changed direction rather than attack again.",
        evidence: "interpretation",
        refs: [{ source: 11 }, { source: 4, locator: "ch. LV" }],
        commanderSlug: "douglas-haig",
        battleSlugs: ["somme"],
      },
      cost: {
        text: "After the assault of 3 June, wounded men of both armies lay between the lines. Grant prints the letters he exchanged with Lee: Grant proposed that unarmed parties be allowed to collect the wounded; Lee preferred a formal flag of truce; Grant asked for a suspension of hostilities. Delays in passing the correspondence brought it to 7 June, two days after it began, before parties went out, and in the meantime, Grant writes, almost all the wounded had died.",
        evidence: "fact",
        refs: [{ source: 4, locator: "ch. LV" }],
      },
      transfer: {
        holdsWhen: [
          "The opponent cannot replace what he loses, and each effort leaves him in a worse position.",
          "Those who pay for the effort, and those who must approve it, will bear the cost long enough.",
        ],
        failsWhen: [
          "The next attempt is chosen because of what the last one cost, not because of what it can achieve.",
          "Persistence is judged by the final outcome alone; Grant himself regretted Cold Harbor.",
        ],
        questions: [
          "Which of your current efforts continues because of what has already been spent on it?",
          "What would tell you that the next attempt serves the plan, rather than the last attempt?",
          "Who is paying for your persistence, and have they been asked?",
        ],
      },
      bearsOn:
        "This lesson tests the first answer, persistence, against its own evidence. Persistence won where it served a plan against an enemy who could not replace his losses, which ties it to the second answer, the Union’s resources: Grant could afford to keep attacking because his side could replace its men. Where it served no plan, as at Cold Harbor, Grant’s own memoirs condemn it. And the record shaped how it was seen: the butcher label and its later use by the Lost Cause made Grant’s persistence look like nothing but the spending of lives.",
      questions: [
        {
          prompt:
            "What did Grant write to Halleck from Spotsylvania on 11 May 1864?",
          choices: [
            "That he would withdraw to the Rapidan.",
            "That he purposed to fight it out on that line if it took all summer.",
            "That he had destroyed Lee’s army.",
          ],
          answer: 1,
          explanation:
            "The letter is printed in chapter LII of his memoirs; the word is “purpose”, not “propose”.",
        },
        {
          prompt: "Which assault did Grant say he always regretted?",
          choices: [
            "The last assault at Cold Harbor.",
            "The attack at the Wilderness on 5 May.",
            "Hancock’s attack on the salient at Spotsylvania.",
          ],
          answer: 0,
          explanation:
            "He also names the assault at Vicksburg on 22 May 1863, for which he says there was more justification.",
        },
        {
          prompt:
            "What does the meta-analysis of the sunk-cost effect suggest about persistence?",
          choices: [
            "That persistence always pays.",
            "That people never continue because of past costs.",
            "That people tend to continue because of what they have already spent, a risk that grows when the next attempt is chosen because of the last.",
          ],
          answer: 2,
          explanation:
            "The review found clear evidence of the effect, with its size depending on the decision; it concerns economic decisions, not war.",
        },
      ],
      sourceCheck: {
        question: "Was Grant a butcher?",
        witnesses: [
          {
            label: "Mertz",
            claim:
              "During the Overland Campaign Grant would be catcalled a butcher.",
          },
          {
            label: "Greenwalt",
            claim:
              "One charge on one day at Cold Harbor is used to sum up his whole career.",
          },
          {
            label: "Grant, ch. LV",
            claim:
              "He always regretted the last assault at Cold Harbor; no advantage was gained to compensate for the loss.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the label, because Grant himself admitted a regret.",
            feedback:
              "Grant regretted one assault and condemned it; that is evidence against attacking without a plan, not a verdict on the whole campaign.",
          },
          {
            text: "Reject the label, because Grant won the war.",
            feedback:
              "Winning does not answer whether particular attacks served a purpose; Grant’s own memoirs say one did not.",
          },
          {
            text: "Treat the label as a judgement made during and after the campaign, test it against what each attack was meant to achieve, and note that its origin is not established in the sources read.",
            feedback:
              "The label is evidence of what people thought; whether it fits has to be judged attack by attack.",
            best: true,
          },
        ],
        campaignSlug: "overland-campaign",
      },
      seminar: {
        prompt:
          "After Cold Harbor, Grant could attack again, wait, or move across the James. Argue the choice from three positions: Grant on 4 June, a soldier of the Army of the Potomac who had fought since the Rapidan, and Lincoln five months before the election.",
        guidance:
          "Use Grant’s chapters on Spotsylvania, Cold Harbor and the James, Mertz on the move south, Greene on Lincoln’s re-election and the sunk-cost review. Say what each attack was meant to achieve, and who paid for it.",
      },
      sources: [
        s.grant51,
        s.mertzWilderness,
        s.grant52,
        s.ebWilderness,
        s.grant55,
        s.grant56,
        s.pryor,
        s.greene,
        s.greenwalt,
        s.roth,
        s.grant50,
        s.philpott,
      ],
    },
  ],
  inProgress:
    "This volume is being written. Lessons 0, 5 and 7 are published; the rest are added in reviewed batches.",
};
