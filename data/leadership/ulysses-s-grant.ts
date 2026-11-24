import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 8, shared by Grant and Lee, written in reviewed batches (batch G1,
// the pilot, is lessons 0, the record, 5, Lee's third day, and 7, Grant's
// persistence; batch G2 is lessons 1 to 3, Grant in the West; batch G3 is
// lessons 4 and 6, the divided army and the general-in-chief; batch
// G4 is lessons 8 to 10, Petersburg, the exchange and emancipation; batch G5
// is lessons 11 and 12, Appomattox and the ledger, which complete the volume); docs/LEADERSHIP_EVIDENCE_GRANT_LEE.md records which sources
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
  grant21: grant("XXI", "Movement on Fort Henry—Capture of Fort Henry"),
  grant22: grant("XXII", "Investment of Fort Donelson"),
  grant23: grant("XXIII", "Relieved of the Command—Restored to the Command"),
  grant24: grant("XXIV", "The Army at Pittsburg Landing"),
  grant30: grant(
    "XXX",
    "Van Dorn Captures Holly Springs—Collecting Forage and Food",
  ),
  grant32: grant(
    "XXXII",
    "Criticisms of the Northern Press—Running the Batteries",
  ),
  grant34: grant("XXXIV", "Capture of Port Gibson"),
  grant35: grant("XXXV", "Movement against Jackson—Fall of Jackson"),
  grant36: grant("XXXVI", "Battle of Black River Bridge"),
  grant39: grant("XXXIX", "Retrospect of the Campaign"),
  ebCivilWar: eb1911("American_Civil_War", "American Civil War"),
  cooling: {
    title: "Fort Donelson (B. Franklin Cooling)",
    url: "https://tennesseeencyclopedia.net/entries/fort-donelson/",
    publisher: "Tennessee Encyclopedia, Tennessee Historical Society",
  },
  mcdonough: {
    title: "Shiloh, Battle of (James L. McDonough)",
    url: "https://tennesseeencyclopedia.net/entries/battle-of-shiloh/",
    publisher: "Tennessee Encyclopedia, Tennessee Historical Society",
  },
  tasic: {
    title: "Warfare 1914-1918 (South East Europe) (Dmitar Tasić)",
    url: "https://encyclopedia.1914-1918-online.net/article/warfare-1914-1918-south-east-europe/",
    publisher:
      "1914-1918-online. International Encyclopedia of the First World War",
  },
  iwm: {
    title: "German response to D-Day",
    url: "https://www.iwm.org.uk/history/second-world-war/d-day/the-german-response-to-d-day",
    publisher: "Imperial War Museums",
  },
  ballard: {
    title: "Civil War (Michael B. Ballard)",
    url: "https://mississippiencyclopedia.org/overviews/civil-war/",
    publisher: "Mississippi Encyclopedia, Center for Study of Southern Culture",
  },
  vicksburgSiege: {
    title: "Vicksburg Siege",
    url: "https://www.nps.gov/vick/learn/historyculture/vicksburgsiege.htm",
    publisher: "National Park Service, Vicksburg National Military Park",
  },
  caveLife: {
    title: "Cave life",
    url: "https://www.nps.gov/vick/learn/historyculture/cave-life.htm",
    publisher: "National Park Service, Vicksburg National Military Park",
  },
  britRussia: {
    title:
      "Napoleonic Wars: France and northern Europe, 1809–12, and the Russian campaign (Britannica Editors)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/France-and-northern-Europe-1809-12",
    publisher: "Encyclopædia Britannica",
  },
  grant46: grant(
    "XLVI",
    "Commissioned Lieutenant-General—Commanding the Armies of the United States",
  ),
  grant47: grant("XLVII", "The Military Situation—Plans for the Campaign"),
  ebHooker: eb1911("Hooker,_Joseph", "Hooker, Joseph"),
  ebPetersburg: eb1911("Petersburg", "Petersburg"),
  jackson: virginia(
    "jackson-thomas-j-stonewall-1824-1863",
    "Thomas J. “Stonewall” Jackson (1824–1863) (William Garrett Piston)",
  ),
  mertzSpotsylvania: virginia(
    "spotsylvania-court-house-battle-of",
    "Spotsylvania Court House, Battle of (Greg Mertz)",
  ),
  atlantaAbt: {
    title: "The Atlanta Campaign",
    url: "https://www.battlefields.org/learn/articles/atlanta-campaign",
    publisher: "American Battlefield Trust",
  },
  namWaterloo: {
    title: "Battle of Waterloo",
    url: "https://www.nam.ac.uk/explore/battle-waterloo",
    publisher: "National Army Museum",
  },
  blucherWaterloo: {
    title: "Blücher and the Waterloo campaign",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/close-up/a-close-up-on-blucher-and-the-waterloo-campaign",
    publisher: "Fondation Napoléon",
  },
  britAutumn1813: {
    title:
      "Napoleonic Wars: Dispositions for the autumn campaign (of 1813) (Britannica Editors)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Dispositions-for-the-autumn-campaign",
    publisher: "Encyclopædia Britannica",
  },
  grant57: grant(
    "LVII",
    "Mining the Works before Petersburg—Explosion of the Mine before Petersburg",
  ),
  grant64: grant("LXIV", "Battle of Five Forks"),
  leeBarksdale: virginia(
    "letter-from-robert-e-lee-to-ethelbert-barksdale-february-18-1865",
    "Letter from Robert E. Lee to Ethelbert Barksdale (February 18, 1865)",
  ),
  usct: virginia(
    "united-states-colored-troops-the",
    "The United States Colored Troops (Andre Fleche)",
  ),
  blackConfederates: virginia(
    "black-confederates",
    "Black Confederates (Jaime Amanda Martinez)",
  ),
  exchangeMyth: {
    title:
      "Myth: General Ulysses S. Grant stopped the prisoner exchange, and is thus responsible for all of the suffering in Civil War prisons on both sides",
    url: "https://home.nps.gov/ande/learn/historyculture/grant-and-the-prisoner-exchange.htm",
    publisher: "National Park Service, Andersonville National Historic Site",
  },
  andersonvilleAfricanAmericans: {
    title: "African Americans at Andersonville",
    url: "https://www.nps.gov/ande/learn/african_americans.htm",
    publisher: "National Park Service, Andersonville National Historic Site",
  },
  exchangeHalted: {
    title: "Prisoner Exchanges Halted – April 17, 1864",
    url: "https://www.nps.gov/rich/learn/historyculture/prisoner-exchanges-halted-april-17-1864.htm",
    publisher: "National Park Service, Richmond National Battlefield Park",
  },
  armingEnslaved: {
    title: "Arming the Enslaved? March 13, 1865",
    url: "https://www.nps.gov/rich/arming-the-enslaved.htm",
    publisher: "National Park Service, Richmond National Battlefield Park",
  },
  britIwoJima: {
    title: "Battle of Iwo Jima (Myles Hudson)",
    url: "https://www.britannica.com/event/Battle-of-Iwo-Jima",
    publisher: "Encyclopædia Britannica",
  },
  beha: {
    title: "Behâ ed-Dîn, The Life of Saladin",
    url: "https://archive.org/details/lifesaladin00condgoog",
    publisher: "Internet Archive",
  },
  chamberlain: {
    title:
      "Joshua L. Chamberlain, The Passing of the Armies (New York: Putnam, 1915)",
    url: "https://archive.org/details/cu31924026471569",
    publisher: "Internet Archive (Cornell University Library)",
  },
  ebHannibal: eb1911("Hannibal_(general)", "Hannibal (general)"),
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
      people: ["james-longstreet"],
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
      slug: "unconditional-surrender",
      title: "Unconditional surrender: taking the initiative",
      part: "Grant in the West",
      themes: ["judgement", "adaptation"],
      claim:
        "When a commander moves before his superiors or his enemy expect, he can win more than his orders asked, but only if he can hold what he takes when the enemy strikes back, and keep the confidence of the superiors he has outrun.",
      inBrief: {
        strength:
          "Grant pressed to be allowed to take Fort Henry, marched on Donelson at once, and turned a breakout into a surrender.",
        shadow:
          "He had counted on his opponents’ weakness, and within three weeks his own superior had taken his command away.",
      },
      moment: {
        text: "Before daylight on 16 February 1862, General Smith brought Grant a letter from Simon Bolivar Buckner, now commanding Fort Donelson, proposing commissioners to agree on terms of capitulation and an armistice until noon. Grant prints his reply: “No terms except an unconditional and immediate surrender can be accepted. I propose to move immediately upon your works.” Buckner answered that the distribution of his forces, after an unexpected change of commanders, and the overwhelming force against him compelled him to accept what he called the ungenerous and unchivalrous terms proposed. Ten days earlier Grant had not been sure he would be allowed to begin the campaign at all.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XXII" }],
      },
      episodes: [
        {
          title: "Asking to be let go",
          text: "Grant writes that he had long thought the true line of operations was up the Tennessee and Cumberland rivers, where Fort Henry and Fort Donelson stood eleven miles apart. When he went to St. Louis to lay the plan before Halleck, he was cut short as if the plan were preposterous and returned crestfallen. With Flag-Officer Foote, who agreed with him, he renewed the proposal by telegraph on 28 January 1862; on 1 February he received orders to move, and on the 6th Foote’s gunboats took Fort Henry, most of whose garrison had already been sent towards Donelson.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. XXI" }],
          battleSlugs: [],
          campaignSlugs: ["western-campaign-of-1862"],
        },
        {
          title: "Before the enemy could reinforce",
          text: "Grant writes that he was impatient to reach Donelson because he knew its importance and expected it to be reinforced quickly, judging that a smaller force on 8 February would do more than a much larger one a month later. Halleck said nothing for or against the move; an order to fortify Fort Henry instead reached Grant when he was already in front of Donelson. He had reconnoitred the roads, and he writes that he had known Pillow in Mexico and judged that he could march up to within gunshot of any works Pillow held. He invested the fort without entrenching, with raw troops in midwinter.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XXII" }],
          battleSlugs: ["fort-donelson"],
        },
        {
          title: "The counterstroke",
          text: "On the morning of 15 February, while Grant was on board Foote’s flagship after the gunboats’ repulse, the garrison came out and drove back McClernand’s division, whose men had run out of ammunition. Grant found men standing in knots with no officer giving directions. He reasoned that an enemy who had attacked and then fallen back must be more demoralised than his own men, had them told to refill their cartridge boxes, and ordered Smith to assault on the left, which carried the outer works by night. Cooling sets Grant’s flexibility in crisis, and the reinforcements under Lew Wallace that checked the Confederate drive, against the indecision of the Confederate council that night.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XXII" }, { source: 2 }],
          battleSlugs: ["fort-donelson"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The victor, writing more than twenty years later, with his own letters to print and a grievance against Halleck.",
          says: "He saw the line of operations, pressed for it, and won because he attacked first after the breakout.",
          refs: [
            { source: 1, locator: "ch. XXI" },
            { source: 0, locator: "ch. XXII" },
          ],
        },
        {
          who: "B. Franklin Cooling",
          stake:
            "A modern historian of the river forts, writing for the Tennessee Encyclopedia.",
          says: "The Confederate council at Dover, where no general could decide, is the key to understanding Fort Donelson.",
          refs: [{ source: 2 }],
        },
        {
          who: "Simon Bolivar Buckner, as Grant prints and reports him",
          stake:
            "The Confederate general left to surrender after his superiors fled, whom Grant had known at West Point and in the old army.",
          says: "Had he been in command, Grant would not have reached Donelson so easily.",
          refs: [{ source: 0, locator: "ch. XXII" }],
        },
        {
          who: "The 1911 Britannica",
          stake: "A general history of the war written half a century later.",
          says: "Grant’s raw troops had no decisive superiority in numbers; the Confederate commanders proved unequal to the crisis.",
          refs: [{ source: 3, locator: "§ 7" }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Grant knew, the march on Donelson was a calculated risk about people as much as places. He knew the ground from his reconnaissance, knew that Halleck had not forbidden the move, and believed that Pillow and Floyd would not stop him. He said as much to Buckner afterwards: he would not have tried the same approach against Buckner, and he had relied very much on their commander to let him come up to the works. The initiative rested on a reading of the enemy commander that happened to be right.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. XXII" }],
        },
        {
          text: "Holding what he took depended on the morning of the 15th. The breakout opened the road south, and Cooling writes that for much of the fighting the Confederates had the upper hand. What turned it was a quick decision by Grant, the reinforcement from Fort Henry and the paralysis of the Confederate command. Grant later argued that the initiative was wasted afterwards: one general willing to take responsibility in the West, he writes, could have marched on Chattanooga, Corinth, Memphis and Vicksburg with the troops then available. That is his claim, made with hindsight, about a chance that no one tested.",
          evidence: "interpretation",
          refs: [
            { source: 2 },
            { source: 0, locator: "ch. XXII" },
            { source: 4, locator: "ch. XXIII" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research was read that could say why Grant pressed his superior where others waited, and the documents show his reasons directly: a line of operations he believed in, a reading of his opponents, and the judgement that time mattered more than numbers. The lesson relies on them.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; Grant’s reasons are his own account.",
        },
      ],
      shadow: {
        text: "The initiative outran the superior. Grant writes that Halleck’s dispatches did not reach him, partly because a telegraph operator, later found to be a rebel, failed to forward them; that he went to Nashville, within his undefined command, without asking; and that Halleck then reported to Washington that Grant would not report his strength and that his army was more demoralised by victory than the army at Bull Run had been by defeat. McClellan ordered him relieved and authorised his arrest. In less than three weeks after the victory, Grant writes, he was virtually in arrest and without a command, until he was restored on 13 March.",
        evidence: "fact",
        refs: [{ source: 4, locator: "ch. XXIII" }],
      },
      counterCase: {
        text: "Oskar Potiorek’s invasions of Serbia in 1914 show initiative that could not hold what it took. Tasić writes that Austro-Hungarian officers expected a punitive campaign, a brief autumn stroll, and that after the defeat at Cer and the deadlock on the Drina, Potiorek’s third offensive in November forced the Serbian army back and Belgrade to be evacuated. The withdrawal let the Serbs regroup and replenish their ammunition, and on 3 December they struck the exhausted and undermanned Austro-Hungarian troops, whose supply lines had been over-stretched, and drove them out of Serbia. Potiorek won ground faster than he could hold it; Grant took less, and held it when the garrison struck back.",
        evidence: "interpretation",
        refs: [{ source: 5 }],
        commanderSlug: "oskar-potiorek",
        battleSlugs: ["kolubara"],
      },
      cost: {
        text: "The soldiers paid in the cold. Grant writes that during the siege there was rain and snow, freezing and thawing; camp fires were allowed only far down the hill out of the enemy’s sight; many men had thrown away their blankets and overcoats on the march; and after McClernand’s failed assault the houses near the lines were overcrowded with wounded. When the fort fell, Cooling writes, Nashvillians rioted and fled before the advancing Union troops.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XXII" }, { source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "Speed matters more than strength, because the other side will reinforce if given time.",
          "The leader can answer the first counterstroke quickly, with people ready to act on a short order.",
        ],
        failsWhen: [
          "The move depends on the opponent’s weakness, and the opponent turns out to be stronger than expected, as Grant admitted to Buckner.",
          "The leader outruns the superiors whose confidence he needs, so that success itself becomes a complaint against him.",
        ],
        questions: [
          "What would you have to hold if the other side struck back the day after your success?",
          "Whose permission did your last bold move assume, and did they know it?",
          "How much of your plan depends on a particular opponent making mistakes?",
        ],
      },
      bearsOn:
        "Fort Donelson is early evidence for the first answer, persistence, in the form of initiative, and against the second: the 1911 Britannica writes that Grant’s raw troops had no decisive superiority in numbers. It also shows the record at work. The demand for unconditional surrender made Grant famous, and the quarrel with Halleck that followed is known chiefly from Grant’s side.",
      questions: [
        {
          prompt:
            "What did Grant reply to Buckner’s proposal of commissioners?",
          choices: [
            "That he would accept an armistice until noon.",
            "That no terms except an unconditional and immediate surrender could be accepted.",
            "That he would let the garrison march out with its arms.",
          ],
          answer: 1,
          explanation:
            "He added that he proposed to move immediately upon the works; Buckner accepted what he called ungenerous and unchivalrous terms.",
        },
        {
          prompt:
            "How did Grant explain his decision to attack on the left after the breakout?",
          choices: [
            "An enemy who had attacked and fallen back must be more demoralised than his own men, so the side that attacked first would win.",
            "Foote ordered him to attack.",
            "The garrison had already surrendered.",
          ],
          answer: 0,
          explanation:
            "He had the men refill their cartridge boxes and sent Smith against the works, expecting a thin line.",
        },
        {
          prompt: "What happened to Grant within three weeks of the victory?",
          choices: [
            "He was promoted to command all Union armies.",
            "He was sent to the East.",
            "He was relieved of his command and virtually in arrest after Halleck’s complaints, before being restored on 13 March.",
          ],
          answer: 2,
          explanation:
            "Grant writes that Halleck’s reports to Washington caused the trouble, and that Halleck did not tell him so.",
        },
      ],
      sourceCheck: {
        question: "Why did Fort Donelson fall?",
        witnesses: [
          {
            label: "Grant, ch. XXII",
            claim:
              "After the breakout fell back, he attacked first, on the left, where the line was thin.",
          },
          {
            label: "Cooling",
            claim:
              "The Confederate council could not decide; Floyd and Pillow fled and Buckner was left to surrender.",
          },
          {
            label: "1911 Britannica, § 7",
            claim:
              "The breakout failed when almost successful, and the Confederate commanders proved unequal to the crisis.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Credit Grant alone, since he writes from the inside.",
            feedback:
              "Grant’s account explains his own decision but has every reason to make it decisive.",
          },
          {
            text: "Credit the Confederate failure alone, since the council fled.",
            feedback:
              "The council met only after Smith’s assault had carried the outer works; Grant’s counterattack shaped the choice it faced.",
          },
          {
            text: "Read the fall as the meeting of a quick Union decision and a paralysed Confederate command, as Cooling does.",
            feedback:
              "Both sides of the line decided the outcome; neither account alone explains it.",
            best: true,
          },
        ],
        battleSlug: "fort-donelson",
      },
      seminar: {
        prompt:
          "Grant went to Fort Henry and Fort Donelson with his superior’s grudging consent and to Nashville without asking. Argue his conduct from three positions: Grant in February 1862, Halleck reading the reports in St. Louis, and a soldier who had thrown away his overcoat on the march.",
        guidance:
          "Use Grant’s chapters XXI to XXIII and Cooling. Say what each could know, and whose account of the quarrel survives.",
      },
      sources: [
        s.grant22,
        s.grant21,
        s.cooling,
        s.ebCivilWar,
        s.grant23,
        s.tasic,
      ],
    },
    {
      slug: "surprised-at-shiloh",
      title: "Surprised at Shiloh: caught unprepared and holding on",
      part: "Grant in the West",
      themes: ["judgement", "motivation"],
      claim:
        "When a commander is surprised in the field, he can recover if he keeps his army fighting and his reinforcements arrive in time, but the recovery does not excuse the surprise, and his superiors and the public may judge him by the first day.",
      inBrief: {
        strength:
          "On the first night at Shiloh, before reinforcements reached the field, Grant ordered every division to attack at dawn.",
        shadow:
          "His camps were unentrenched and his army was caught at breakfast, and he spent twenty years denying it.",
      },
      moment: {
        text: "On the night of 6 April 1862 rain fell in torrents on the army at Pittsburg Landing, which had been driven back a mile or more during the day. Grant writes that his ankle, badly injured when his horse fell on him two nights before, was so swollen that he could not rest; he moved to a log house under the bank, found it was a hospital where wounded men were having arms and legs amputated, and went back to his tree in the rain, finding the sight more unendurable than the enemy’s fire. Before the firing ceased that evening, and before any of Buell’s troops had reached the field, he had visited each division commander and ordered them to push forward at first light and engage the enemy as soon as found.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XXIV" }],
      },
      episodes: [
        {
          title: "An army that expected to attack",
          text: "Grant writes that he regarded the campaign as an offensive one and had no idea the enemy would leave strong entrenchments at Corinth to attack him. His engineer, McPherson, had reported that a defensive line would have to run behind the camps and away from water, and Grant judged that his newly raised regiments needed drill and discipline more than practice with the pick and spade. He kept his headquarters at Savannah, nine miles away, to meet Buell. On the Confederate side, Johnston’s march from Corinth was slowed by rain and inexperience, and Grant notes that Beauregard argued against attacking and that the generals were still debating on the morning of the 6th.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XXIV" },
            { source: 1, locator: "ch. XXV" },
            { source: 2 },
          ],
          battleSlugs: ["shiloh"],
        },
        {
          title: "The first day",
          text: "McDonough writes that the first shots came at about five in the morning, that many Union soldiers were going about their Sunday routines, and that Confederate lines poured out of the woods into some of the camps. Three of Grant’s five divisions engaged were entirely raw, he writes, and some regiments broke at the first fire; thousands of stragglers sheltered under the river bluff. The line fell back again and again but did not break, Prentiss’s division held the position the Confederates called the Hornets’ Nest until it was surrounded, Johnston bled to death in the afternoon, and by evening a last line of artillery on the bluffs, with two gunboats, stopped the final attacks. Lew Wallace’s division, ordered up in the morning, took a longer road and arrived after dark.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 0, locator: "ch. XXIV" }],
          battleSlugs: ["shiloh"],
        },
        {
          title: "The second day and after",
          text: "On 7 April, with Wallace and three of Buell’s divisions on the field, the Union armies attacked along the whole line, and by evening the Confederates were retreating to Corinth. A few days later Halleck moved his headquarters to Pittsburg Landing and took command in the field. Grant writes that although he was nominally second in command he was ignored, was never shown Buell’s reports, and so made no full report of the battle; public opinion, he says, had been most erroneously formed before correct accounts were published.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XXIV" },
            { source: 1, locator: "ch. XXV" },
            { source: 3, locator: "§ 9" },
          ],
          battleSlugs: ["shiloh"],
          campaignSlugs: ["western-campaign-of-1862"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The commander blamed for the surprise, answering his critics in the 1880s.",
          says: "There was no surprise; the line held all day; victory was assured once Wallace arrived.",
          refs: [
            { source: 0, locator: "ch. XXIV" },
            { source: 1, locator: "ch. XXV" },
          ],
        },
        {
          who: "James L. McDonough",
          stake:
            "A modern historian of the battle, writing for the Tennessee Encyclopedia.",
          says: "Neither Grant nor Sherman expected an attack; the Hornets’ Nest cost the Confederates time and men and gave Grant his chance.",
          refs: [{ source: 2 }],
        },
        {
          who: "The 1911 Britannica",
          stake: "A general history of the war, half a century later.",
          says: "Johnston and Beauregard completely surprised Grant’s camps; the battle was a savage scuffle between two half-disciplined hosts.",
          refs: [{ source: 3, locator: "§ 9" }],
        },
        {
          who: "Lew Wallace, as Grant reports him",
          stake:
            "The division commander whose march on 6 April became a lifelong dispute.",
          says: "His order was to join the right of the army, by the road he took; Grant softened his own verdict in 1885 after reading a letter Wallace wrote before the battle.",
          refs: [{ source: 0, locator: "ch. XXIV" }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Grant knew before the battle, his dispositions had reasons: an offensive campaign, an enemy he expected to stay behind its works, a defensive line that would have left the creeks to the enemy, and a fear for the stores at Crump’s Landing. Confederate cavalry had grown bold, and skirmishing had gone on since 3 April; the warning signs were there and were read as raids. The strategist can accept his reasoning about entrenchment and still note that an army preparing to attack can be attacked, and that his headquarters were nine miles from it when it was.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XXIV" },
            { source: 1, locator: "ch. XXV" },
          ],
        },
        {
          text: "The recovery had two parts. The first was the army’s: a line that bent back all day without breaking, the Hornets’ Nest, and the last line at the landing. The second was Grant’s order for the morning, given before he could know how much of Buell’s army would be across the river in time, and justified, he wrote, by the lesson of Donelson that the side that attacks first after a repulse wins. McDonough adds the Confederate side: Beauregard, in command after Johnston’s death, chose not to attack the landing that evening. Surprise is recovered from when the surprised side keeps fighting and the surprising side stops.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. XXIV" }, { source: 2 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "It is tempting to explain the surprise by commanders seeing what they expected, but no research was read that could test such a claim about Grant and Sherman, and Grant’s own account gives his expectation in plain words. The lesson relies on what he wrote he expected and what happened.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; what the commanders expected is known only from their own later accounts.",
        },
      ],
      shadow: {
        text: "The recovery does not excuse the surprise, and Grant spent much of a chapter arguing there was none. He insists that the Confederates were still in council when the battle began, which, he says, settles the question; McDonough and the 1911 Britannica say the camps were surprised. The men who fled were raw, Grant writes, and many later proved as gallant as any; the cost of the surprise fell on them and on the divisions overrun in their camps. Halleck’s taking the field and the newspapers’ verdict were the price Grant paid; the soldiers paid more.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "ch. XXV" },
          { source: 2 },
          { source: 3, locator: "§ 9" },
          { source: 0, locator: "ch. XXIV" },
        ],
      },
      counterCase: {
        text: "Gerd von Rundstedt in Normandy shows a surprise that could not be recovered. The Imperial War Museums write that the German reaction to the landings of 6 June 1944 was slow and confused: bad weather had put the defenders off guard, Rommel was in Germany and many senior commanders were away from their posts, and the Allied deception plan convinced Hitler that the main landing would come in the Pas de Calais. Rundstedt, commander-in-chief in the West, had no direct control over the armoured reserve; he had to secure Hitler’s permission to release it, and its divisions arrived piecemeal, delayed by air attack and sabotage. By 1 July he had been told to retire. Grant’s reinforcements came under his own orders and arrived overnight; Rundstedt’s did not.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "gerd-von-rundstedt",
        battleSlugs: ["normandy"],
      },
      cost: {
        text: "Grant describes an open field, held by his army on the second day, over which the Confederates had charged repeatedly the day before, so covered with dead that a man could have walked across it in any direction stepping on bodies; in a patch of thicket, not one bush was left standing unpierced by bullets. McDonough calls Shiloh the bloodiest battle of the war up to that time.",
        evidence: "fact",
        refs: [{ source: 1, locator: "ch. XXV" }, { source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "The surprised side keeps its organisation, even while giving ground, and has reserves on the way that its leader controls.",
          "The leader can act on the first night, before the reinforcements arrive, rather than wait for them.",
        ],
        failsWhen: [
          "The reserves belong to someone else, as Rundstedt’s armour belonged to Hitler.",
          "The recovery is used to argue that the surprise never happened.",
        ],
        questions: [
          "What warning signs in your organisation are being read as routine?",
          "If you were caught unprepared tomorrow, whose reserves could you use without asking?",
          "When you recovered from your last setback, did you also admit what caused it?",
        ],
      },
      bearsOn:
        "Shiloh is the hardest early test of persistence. Grant’s order on the first night is persistence in its plainest form, and it worked because his reinforcements arrived and his enemy stopped. But the record answer is strong here too: Grant’s chapter is an argument with the newspapers and Halleck, and the surprise he denied is the part the historians keep.",
      questions: [
        {
          prompt:
            "Why does Grant say he did not entrench the camps at Pittsburg Landing?",
          choices: [
            "Because Halleck forbade it.",
            "Because he regarded the campaign as offensive, his engineer’s line would have been behind the camps and away from water, and his raw troops needed drill more than digging.",
            "Because the ground was too hard.",
          ],
          answer: 1,
          explanation: "He gives these reasons in chapters XXIV and XXV.",
        },
        {
          prompt: "What did Grant order on the evening of 6 April?",
          choices: [
            "A retreat across the river.",
            "That the divisions entrench and wait for Buell.",
            "That every division push forward at first light and engage the enemy, before any of Buell’s troops had reached the field.",
          ],
          answer: 2,
          explanation:
            "He told Sherman that the tactics of Donelson would win at Shiloh.",
        },
        {
          prompt:
            "Why could Rundstedt not recover from the surprise in Normandy, according to the Imperial War Museums?",
          choices: [
            "He did not control the armoured reserve and needed Hitler’s permission to release it, and it arrived piecemeal under air attack.",
            "He had no reserves at all.",
            "He chose to retreat at once.",
          ],
          answer: 0,
          explanation:
            "Bad weather, absent commanders and the Allied deception plan added to the delay.",
        },
      ],
      sourceCheck: {
        question: "Was Grant’s army surprised at Shiloh?",
        witnesses: [
          {
            label: "Grant, ch. XXV",
            claim:
              "The Confederate generals were still debating the attack when it began, which settles whether there was a surprise.",
          },
          {
            label: "McDonough",
            claim:
              "Neither Grant nor Sherman expected an attack, and many soldiers were at their Sunday routines.",
          },
          {
            label: "1911 Britannica, § 9",
            claim: "Johnston and Beauregard completely surprised the camps.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Grant, because he commanded the army.",
            feedback:
              "Grant’s argument is about the Confederates’ hesitation, not about what his own camps expected; he had every reason to deny the charge.",
          },
          {
            text: "Accept that the camps were surprised, as the historians say, and read Grant’s argument as evidence of how much the charge hurt him.",
            feedback:
              "The Confederate debate shows the attack was not certain, not that the Union army expected it.",
            best: true,
          },
          {
            text: "Conclude that no one can know.",
            feedback:
              "The accounts agree on what happened at dawn; they differ on what to call it and on who was to blame.",
          },
        ],
        battleSlug: "shiloh",
      },
      seminar: {
        prompt:
          "On the evening of 6 April Grant could retreat across the river, hold and wait, or attack in the morning. Argue the choice from three positions: Grant at nightfall, a soldier sheltering under the bluff, and Halleck reading the newspapers in St. Louis.",
        guidance:
          "Use Grant’s chapters XXIV and XXV, McDonough and the 1911 Britannica. Say what Grant knew of Buell’s and Wallace’s arrival when he gave his order.",
      },
      sources: [s.grant24, s.grant25, s.mcdonough, s.ebCivilWar, s.iwm],
    },
    {
      slug: "cutting-loose",
      title: "Cutting loose: operating without a line of supply",
      part: "Grant in the West",
      themes: ["adaptation", "organisation"],
      claim:
        "When a commander abandons his line of supply, he can move faster than his enemy expects, but only where the country can feed his army, the campaign is short, and what the country cannot supply, above all ammunition, can still be carried.",
      inBrief: {
        strength:
          "Below Vicksburg Grant gave up his base, lived off the country for three weeks and beat the Confederate forces before they could combine.",
        shadow:
          "The country that fed his army was other people’s, and the siege that followed fell on the civilians of Vicksburg.",
      },
      moment: {
        text: "At Grand Gulf, early in May 1863, Grant received a letter from Nathaniel Banks saying he could not reach Port Hudson before 10 May, and then with fewer men than expected. Grant’s plan had been to make Grand Gulf a base and join Banks first. He writes: “I therefore determined to move independently of Banks, cut loose from my base, destroy the rebel force in rear of Vicksburg and invest or capture the city.” He knew, he adds, that Halleck’s caution would make him disapprove, but that a reply from Washington would take so long that the plan would be proved or disproved before anyone could interfere.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XXXIV" }],
      },
      episodes: [
        {
          title: "The lesson of Holly Springs",
          text: "In December 1862, Grant writes, he had not believed that a moving column could be supplied from an enemy’s country. Then Van Dorn captured his depot at Holly Springs and destroyed its stores, while Forrest cut the railroad behind him; it was more than two weeks before rations could be issued in the regular way. The episode, he writes, demonstrated the impossibility of maintaining so long a line in an enemy’s country. It also showed what the country around the army could provide while the depot was gone.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. XXX" }],
          battleSlugs: [],
          campaignSlugs: ["vicksburg-campaign"],
        },
        {
          title: "Below the city",
          text: "After months of failed approaches through the flooded bayous, Grant ran the gunboats and transports past the Vicksburg batteries and crossed the Mississippi below the city, finding himself, he writes, in the enemy’s country with a vast river and the stronghold between him and his base. Sherman wrote to warn him that the army could not be supplied over a single road. Grant replied that he did not expect to supply full rations from Grand Gulf, only what hard bread, coffee and salt he could get up, and would make the country furnish the balance. Ammunition was the exception: he had every vehicle and draught animal in the area collected and loaded with it.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "ch. XXXII" },
            { source: 0, locator: "ch. XXXIV" },
          ],
          battleSlugs: ["vicksburg"],
        },
        {
          title: "Moving fast",
          text: "Moving east against Jackson would uncover his communications, Grant writes, so he decided to have none and to move his whole force eastward. He took Jackson, cutting Vicksburg off from the railroad, and turned on Pemberton at Champion’s Hill and the Big Black. At the Big Black an officer delivered Halleck’s order of 11 May to go back to Grand Gulf and join Banks; Grant told him the order came too late. Most of the army, he writes, had by then been three weeks with only five days’ rations issued by the commissary, and abundance had been found in the country; by 21 May a new base on the Yazoo gave the troops full rations.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "ch. XXXV" },
            { source: 4, locator: "ch. XXXVI" },
            { source: 0, locator: "ch. XXXIV" },
          ],
          battleSlugs: ["vicksburg"],
          campaignSlugs: ["vicksburg-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The commander, writing two decades later about the campaign that made his name.",
          says: "Time was worth more than reinforcements; cutting loose was the only course with any chance of success.",
          refs: [
            { source: 0, locator: "ch. XXXIV" },
            { source: 5, locator: "ch. XXXIX" },
          ],
        },
        {
          who: "William T. Sherman, as Grant quotes his letter",
          stake:
            "Grant’s closest subordinate, who later marched through Georgia on the same principle.",
          says: "The army could not be supplied over a single road; stop until it had wagons.",
          refs: [{ source: 0, locator: "ch. XXXIV" }],
        },
        {
          who: "Michael B. Ballard",
          stake:
            "A modern historian of Mississippi in the war, writing for the Mississippi Encyclopedia.",
          says: "Historians debate Vicksburg’s military significance, but Davis and Lincoln both thought it vital; the civilians, towns and farmland suffered greatly.",
          refs: [{ source: 6 }],
        },
        {
          who: "The National Park Service",
          stake:
            "The custodian of the battlefield, describing the siege and the civilians’ caves.",
          says: "Pemberton had over a year to fortify; the citizens took to caves dug into the hills.",
          refs: [{ source: 7 }, { source: 8 }],
        },
      ],
      strategist: [
        {
          text: "The conditions in the claim held at Vicksburg, and Grant’s account shows him checking them. The country could feed the army: beef, mutton, poultry and forage were found in abundance, though bread and coffee were short. The campaign was short: about three weeks from the crossing to the siege lines. Ammunition was carried in every vehicle the army could find. The enemy was divided between Vicksburg and Jackson, and the navy held the river behind the army; Grant writes that without the navy the campaign could not have been made at all.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XXXIV" },
            { source: 5, locator: "ch. XXXIX" },
          ],
        },
        {
          text: "The political condition mattered as much. Grant writes that the elections of 1862 had gone against the war, that voluntary enlistment had nearly ceased and the draft was resisted, and that a defeat or a backward movement would have made the draft impossible to enforce; a forward movement to a decisive victory was necessary. Cutting loose was a way of moving forward without waiting, and the slowness of communication with Washington, which Grant counted on, gave him the time to prove it. The Hannibal and Scipio volume’s lesson on crossing the Alps asks what happens when an army that lives off a country stays in it.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "ch. XXXIX" },
            { source: 0, locator: "ch. XXXIV" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research was read that bears on a commander’s decision to give up his supply line, and Grant’s own account sets out the conditions he weighed. The lesson rests on those conditions and on whether they held.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no study is cited.",
        },
      ],
      shadow: {
        text: "Living off the country meant taking from the people in it. Ballard writes that Mississippi’s civilians, towns and farmland suffered greatly, and that white civilians were terrorised by Union soldiers who robbed gardens, stole valuables and cut up furniture and bedding, though officers often tried to control their men. Grant writes that rations were issued to families left destitute in Jackson and that medicine and food were sent to Raymond. Nor did speed take the city: after cutting it off, Grant assaulted the works and failed, and in his memoirs he names the assault of 22 May at Vicksburg as one he regretted, with more justification than the last at Cold Harbor.",
        evidence: "fact",
        refs: [
          { source: 6 },
          { source: 5, locator: "ch. XXXIX" },
          { source: 7 },
          { source: 9, locator: "ch. LV" },
        ],
      },
      counterCase: {
        text: "Napoleon in Russia in 1812 shows the same method where the conditions failed. Britannica writes that his unprecedented efforts to assemble supplies and transport were quite insufficient for an advance so far into Russia; the transport columns failed to supply the marching troops, forage was lacking for the horses, and disease and overwork killed them. He reached Moscow, which was burned, and the Russians refused to make peace. On the retreat Smolensk, ravaged in August, was virtually destitute of supplies, and most of his losses came before the first snowfall. The country could not feed the army and the campaign was not short; Grant’s were both.",
        evidence: "interpretation",
        refs: [{ source: 10 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["borodino"],
      },
      cost: {
        text: "The siege fell on the people of Vicksburg. The Park Service writes that Porter’s mortar boats shelled the town regularly and that its citizens dug caves into the hills, so many that one resident said the streets looked like avenues in a cemetery; Mary Loughborough’s memoir describes life underground, and an old resident told Mark Twain that the caves were sometimes so crowded there was no turning room. Freedpeople had come to the army in their thousands the winter before; Grant writes that government orders forbade expelling them, that humanity forbade letting them starve, and that he set them to harvesting abandoned plantations for wages under Chaplain John Eaton.",
        evidence: "fact",
        refs: [{ source: 8 }, { source: 1, locator: "ch. XXX" }],
      },
      transfer: {
        holdsWhen: [
          "The surroundings can supply most of what the effort consumes, and the effort is short.",
          "What cannot be found locally can still be carried, and someone has made sure of it.",
        ],
        failsWhen: [
          "The effort lasts longer than the surroundings can sustain it, as in Russia in 1812.",
          "The people whose resources are taken are left out of the account.",
        ],
        questions: [
          "Which of your plans depend on supplies that nobody has promised to deliver?",
          "What is the one thing your team cannot find on the way and must carry?",
          "Who pays when your team lives off the land, and do they appear in your plan?",
        ],
      },
      bearsOn:
        "Vicksburg tests the first two answers together. Cutting loose was persistence as method, taking risks to keep moving, and Grant’s reasons were political as much as military. But it worked because the Union had the navy, the river and an army large enough to be divided from its base and still win: the second answer, the Union’s resources, is in every condition Grant names.",
      questions: [
        {
          prompt:
            "What did Grant decide after hearing from Banks at Grand Gulf?",
          choices: [
            "To wait a month for Banks.",
            "To return to Memphis.",
            "To move independently of Banks, cut loose from his base and destroy the Confederate force behind Vicksburg.",
          ],
          answer: 2,
          explanation:
            "He expected Halleck to disapprove, and counted on the slowness of communication with Washington.",
        },
        {
          prompt:
            "What did Grant make sure his army carried, even while living off the country?",
          choices: [
            "Ammunition, loaded on every vehicle and draught animal collected in the area.",
            "Tents for every company.",
            "Full rations for a month.",
          ],
          answer: 0,
          explanation:
            "He writes that provisions could be taken from the country, but ammunition carried on the person is soon exhausted.",
        },
        {
          prompt:
            "Why does the lesson treat Napoleon’s Russian campaign as the counter-case?",
          choices: [
            "Because Napoleon refused to live off the country.",
            "Because the country could not feed his army and the campaign was not short, the conditions that held for Grant.",
            "Because Napoleon had no supply columns at all.",
          ],
          answer: 1,
          explanation:
            "Britannica writes that his supplies and transport were insufficient and that forage was lacking for the horses.",
        },
      ],
      sourceCheck: {
        question: "Why did Grant cut loose from his base?",
        witnesses: [
          {
            label: "Grant, ch. XXXIV",
            claim:
              "Waiting for Banks would have cost a month while the enemy reinforced.",
          },
          {
            label: "Grant, ch. XXXIX",
            claim:
              "After the elections of 1862 a backward movement would have made the draft impossible to enforce.",
          },
          {
            label: "Sherman, as Grant quotes him",
            claim:
              "The army could not be supplied over a single road and should stop until it had wagons.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Take the military reason alone; the political one was added later.",
            feedback:
              "Grant gives both in his memoirs; the retrospect in chapter XXXIX is written later, but the pressure of 1862 is a matter of record.",
          },
          {
            text: "Read the decision as a military judgement about time, made under political pressure, which Sherman, on the spot, thought too risky.",
            feedback:
              "Sherman’s letter is evidence that the risk was real at the time, not obvious only in hindsight.",
            best: true,
          },
          {
            text: "Conclude that Grant was simply lucky.",
            feedback:
              "Grant’s account shows him checking the conditions: food in the country, ammunition carried, a short campaign.",
          },
        ],
        campaignSlug: "vicksburg-campaign",
      },
      seminar: {
        prompt:
          "At Grand Gulf Grant could wait for Banks, return north, or cut loose. Argue the choice from three positions: Grant in May 1863, Sherman writing from Hankinson’s ferry, and a family on a Mississippi farm in the army’s path.",
        guidance:
          "Use Grant’s chapters XXX to XXXIX, Ballard and the Park Service. Say what the country could supply, who supplied it, and what the army could not do without.",
      },
      sources: [
        s.grant34,
        s.grant30,
        s.grant32,
        s.grant35,
        s.grant36,
        s.grant39,
        s.ballard,
        s.vicksburgSiege,
        s.caveLife,
        s.grant55,
        s.britRussia,
      ],
    },
    {
      slug: "the-divided-army",
      title: "The divided army: boldness against a larger enemy",
      part: "Lee in Virginia",
      themes: ["judgement", "organisation"],
      people: ["thomas-j-jackson"],
      claim:
        "When a commander faces a larger army, he can win by dividing his own and striking where the enemy does not expect, but only while the enemy commander is slow to read it, and the subordinate who carries out the stroke may be lost with it.",
      inBrief: {
        strength:
          "At Chancellorsville Lee divided an army half the size of Hooker’s, twice, and drove it back across the river.",
        shadow:
          "The victory cost him Jackson, and it encouraged the invasion that ended at Gettysburg.",
      },
      moment: {
        text: "In the first days of May 1863 Joseph Hooker had what Lee lacked: the larger army, already across the Rappahannock and the Rapidan on Lee’s flank. The 1911 Britannica’s article on him calls the flanking movement well planned and well executed, and writes that at the decisive moment he checked the advance of his troops. His army cleared and entrenched a position in the forest, inviting attack from the east or south. Lee, the Britannica’s account of the battle continues, discovered a route by which the Federals could be attacked from the north and west instead, and Jackson was instructed to make the turning movement. Lee had already left Early’s division to watch Sedgwick at Fredericksburg; now he divided again, keeping only two divisions in front of Hooker.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1, locator: "Chancellorsville" }],
      },
      episodes: [
        {
          title: "Hooker’s plan",
          text: "Hooker inherited an army whose discipline had suffered from a run of failures and reorganised it, a task in which the 1911 Britannica writes he was excelled by few. After the repulse at Fredericksburg, he resolved to turn Lee’s flank rather than attack his front, sending his cavalry and Sedgwick’s corps to demonstrate while the rest of the army marched upriver. Pryor writes that Hooker believed he could trap Lee by attacking from several directions at once, and the 1911 Civil War article that Lee was outmanoeuvred and threatened in flank and rear.",
          evidence: "fact",
          refs: [
            { source: 0 },
            { source: 1, locator: "Chancellorsville" },
            { source: 2 },
            { source: 3, locator: "§ 21" },
          ],
          battleSlugs: ["chancellorsville"],
          campaignSlugs: ["chancellorsville-campaign"],
        },
        {
          title: "Dividing twice",
          text: "Pryor writes that, facing a force double his size at Chancellorsville, Lee again precariously divided his army. The 1911 Britannica describes what that meant on 2 May: while Jackson took his corps on a long march round the Union right, Anderson and McLaws, with only a fraction of the army, demonstrated in front of Hooker and kept most of his men idle behind their earthworks, one cavalry brigade held off Hooker’s cavalry, and Early contained Sedgwick. Piston writes that the plan was Lee’s entirely, though Jackson’s partisans later claimed it for him, and that Lee gave Jackson much discretion in carrying it out.",
          evidence: "fact",
          refs: [
            { source: 2 },
            { source: 1, locator: "Chancellorsville" },
            { source: 4 },
          ],
          battleSlugs: ["chancellorsville"],
        },
        {
          title: "The stroke and its price",
          text: "Piston writes that the march through the tangled woods did not stay secret, but that Union officers ignored the evidence; when Jackson attacked late in the afternoon he rolled up the Union flank, and his units became jumbled in the terrain. Riding forward after sunset to direct the pursuit, Jackson was wounded by his own men. Stuart took over his corps, renewed the attack the next day with Anderson, and Lee turned on Sedgwick at Fredericksburg and drove him over the river. Hooker’s army recrossed and marched back to its old camps.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 1, locator: "Chancellorsville" }],
          battleSlugs: ["chancellorsville"],
        },
      ],
      witnesses: [
        {
          who: "William Garrett Piston",
          stake:
            "A modern historian writing Encyclopedia Virginia’s articles on Jackson and Longstreet.",
          says: "The plan was Lee’s; Jackson’s staff later claimed it for him; Union officers ignored the evidence of the march.",
          refs: [{ source: 4 }],
        },
        {
          who: "Elizabeth Brown Pryor",
          stake: "A modern biographer of Lee.",
          says: "Through surprise and daring Lee turned a vulnerable defensive position into a brilliant tactical offence.",
          refs: [{ source: 2 }],
        },
        {
          who: "The 1911 Britannica, on Hooker",
          stake:
            "A biographical article written within living memory of the war, generous to Hooker as a fighting general.",
          says: "Hooker’s grave defects as a commander-in-chief showed when he checked his advance at the decisive moment.",
          refs: [{ source: 0 }],
        },
        {
          who: "Jackson’s partisans, as Piston reports them",
          stake:
            "Members of Jackson’s staff and admirers writing after his death, with a reputation to build.",
          says: "The flank march was Jackson’s idea.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Lee knew, the division was a reading of Hooker as much as of the ground. Stuart’s cavalry had reported the Union movements; Hooker had halted and dug in; the forest hid a long march. If Hooker had attacked the thin line in front of him, the two divisions there could hardly have held, and Lee’s army might have been beaten in detail. The risk was acceptable only because the enemy commander had stopped. The Hannibal and Scipio volume’s lesson on reading the consul makes the same point about Hannibal and his opponents: the move depends on the man opposite.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "Chancellorsville" }, { source: 0 }],
        },
        {
          text: "The stroke also depended on the subordinate who made it. Lee gave Jackson the larger part of the army and much discretion, Piston writes, and Jackson used it. That confidence was earned and could not be transferred: after Jackson’s death Lee reorganised the army into three corps under Longstreet, Ewell and A. P. Hill, and Piston judges that neither of the last two could match Jackson. A method that relies on one executor is only as durable as he is.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "It would be easy to say Hooker lost his nerve, but no research was read that could support a claim about his state of mind, and the 1911 Britannica’s phrase, an excessive sense of responsibility, is a verdict, not evidence. The lesson rests on what Hooker did: he stopped, and entrenched.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; Hooker’s reasons are not documented in the sources read.",
        },
      ],
      shadow: {
        text: "The price came after the victory. Jackson’s left arm was amputated, and he died of pneumonia on 10 May; Piston writes that his death left a vacancy at corps level that was never filled and that Chancellorsville was the last decisive victory of the Army of Northern Virginia. The 1911 Britannica’s Civil War article records that a month later Lee began his second invasion of the North. A victory won by dividing in the face of a larger enemy encouraged the next offensive, and the next one was Gettysburg.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 3, locator: "§ 21" }],
        battleSlugs: ["gettysburg"],
      },
      counterCase: {
        text: "Napoleon in June 1815 divided his army against two enemies who together outnumbered him, and the detached wing did not return. The National Army Museum writes that his best chance was to keep Wellington and Blücher apart; after beating the Prussians at Ligny he detached a large force under Grouchy to follow them. Unknown to the French, the Prussians were still in good shape, kept in contact with Wellington, and were reorganised by their staff and brought to Waterloo within two days. The Fondation Napoléon notes that Grouchy beat the Prussian rearguard at Wavre the day after Waterloo, a useless victory, and that his failure to return was generally held to be the real reason Napoleon lost. Lee’s enemy stood still; Napoleon’s moved faster than he believed it could.",
        evidence: "interpretation",
        refs: [{ source: 5 }, { source: 6 }],
        commanderSlug: "emmanuel-de-grouchy",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "The 1911 Britannica writes that Jackson’s attack surprised the Federals, who fled in panic at nightfall, and that Sedgwick’s corps, about to break through at Fredericksburg, was assailed by three Confederate divisions and driven over the river. Its author gives the losses of both armies from a published register; this volume gives none. Pryor notes that the fighting included another Union charge up Marye’s Heights at Fredericksburg, where Burnside’s army had been repulsed in December.",
        evidence: "fact",
        refs: [{ source: 1, locator: "Chancellorsville" }, { source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "The larger side has stopped to wait, so that a smaller force in front can hold it while the rest moves.",
          "The person sent to make the stroke can be trusted with discretion and has the means to use it.",
        ],
        failsWhen: [
          "The other side reads the division and moves, as the Prussians did in 1815.",
          "The success depends on one executor who cannot be replaced, or encourages a bolder attempt next time.",
        ],
        questions: [
          "When your team is outnumbered, what is the larger side doing that leaves it open?",
          "If your best person were lost in the next effort, what would the method still be worth?",
          "Which of your successes made the next risk look smaller than it was?",
        ],
      },
      bearsOn:
        "Chancellorsville is the strongest evidence that Lee could beat the Union’s resources by generalship: a larger army driven back by a divided smaller one. It is also where the third answer, Lee’s own choices, begins: the victory encouraged the invasion of Pennsylvania, and it cost the subordinate who had made his boldest strokes possible. The record answer appears in the quarrel over who devised the flank march.",
      questions: [
        {
          prompt:
            "According to the 1911 Britannica’s article on Hooker, what did he do at the decisive moment?",
          choices: [
            "He attacked Lee’s front with his whole army.",
            "He checked the advance of his troops, after a well-planned flanking movement.",
            "He retreated across the Rappahannock at once.",
          ],
          answer: 1,
          explanation:
            "His army then cleared and entrenched a position in the forest, inviting attack from the east or south.",
        },
        {
          prompt: "Who devised the flank march, according to Piston?",
          choices: [
            "Lee, who gave Jackson much discretion in carrying it out; Jackson’s partisans later claimed it for him.",
            "Stuart, alone.",
            "Longstreet, who was present at the battle.",
          ],
          answer: 0,
          explanation:
            "Longstreet’s divisions were detached elsewhere; Stuart reported the Union movements and later commanded Jackson’s corps.",
        },
        {
          prompt:
            "Why does the lesson use Napoleon’s detachment of Grouchy in 1815 as its counter-case?",
          choices: [
            "Because Napoleon never divided his army.",
            "Because Grouchy disobeyed orders to attack Wellington.",
            "Because the enemy Napoleon thought beaten kept in contact with its ally and joined it, so the detached wing was in the wrong place.",
          ],
          answer: 2,
          explanation:
            "The National Army Museum writes that the Prussians were still in good shape and reached Waterloo within two days.",
        },
      ],
      sourceCheck: {
        question: "Who should be credited with the plan of Chancellorsville?",
        witnesses: [
          {
            label: "Piston",
            claim:
              "The plan was Lee’s entirely; Lee gave Jackson much discretion in executing it.",
          },
          {
            label: "Jackson’s partisans, as Piston reports",
            claim: "The plan originated with Jackson.",
          },
          {
            label: "1911 Britannica, Wilderness",
            claim:
              "Lee discovered the route, and Jackson was instructed to execute the turning movement.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Credit Jackson, because his staff were there.",
            feedback:
              "His staff wrote after his death with a reputation to build, and the other accounts give the plan to Lee.",
          },
          {
            text: "Credit Lee with the plan and Jackson with its execution, and treat the competing claim as part of the postwar making of reputations.",
            feedback:
              "Both modern and older accounts give Lee the plan; the discretion he allowed Jackson is part of what made it work.",
            best: true,
          },
          {
            text: "Conclude that the question does not matter.",
            feedback:
              "It matters to the lesson: the method depended on a commander willing to divide and a subordinate able to act alone.",
          },
        ],
        battleSlug: "chancellorsville",
      },
      seminar: {
        prompt:
          "In early May 1863 Lee could fall back, attack Hooker’s entrenched front, or divide again. Argue the choice from three positions: Lee before Jackson marched, Anderson’s men left in front of Hooker’s army, and Hooker in his entrenchments.",
        guidance:
          "Use the 1911 Britannica’s accounts of the battle and of Hooker, Piston on Jackson and Pryor on Lee. Say what each side knew of the other, and what would have happened if Hooker had attacked.",
      },
      sources: [
        s.ebHooker,
        s.ebWilderness,
        s.pryor,
        s.ebCivilWar,
        s.jackson,
        s.namWaterloo,
        s.blucherWaterloo,
      ],
    },
    {
      slug: "the-third-day",
      title: "The third day: the offensive the army could not afford",
      part: "Lee in Virginia",
      themes: ["judgement", "restraint"],
      people: ["james-longstreet"],
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
      slug: "general-in-chief",
      title: "General-in-chief: directing every army at once",
      part: "Grant against Lee",
      themes: ["organisation", "communication"],
      people: ["william-t-sherman", "george-g-meade", "philip-h-sheridan"],
      claim:
        "When a commander is given the whole of a larger side’s forces, he can win by making them press the enemy together, but only if he can work with the political leadership and with generals he did not choose, and only as far as each of them carries out his part.",
      inBrief: {
        strength:
          "Grant gave seventeen separate commands one plan, a simultaneous advance against the two Confederate field armies.",
        shadow:
          "Several of the parts failed, and he had to direct Meade’s army through a commander he had not chosen.",
      },
      moment: {
        text: "On 9 March 1864 Lincoln handed Grant his commission as lieutenant-general at the Executive Mansion, reading from a paper he had written so that Grant, who disliked speaking in public, could prepare a reply. Grant writes that he had meant to stay in the West even with the new rank, but that once in Washington he saw that it was the place for the commanding general: no one else, probably, could resist the pressure that would be brought on him to give up his own plans for others. He put Sherman in his old western command and went back east.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XLVI" }],
      },
      episodes: [
        {
          title: "One plan for seventeen commands",
          text: "Grant writes that the Union armies were divided into many departments with separate commanders, and that until then they had acted independently, so that the enemy could take troops from a quiet front to reinforce a threatened one. He determined to stop it. His plan was to concentrate everything possible against the two Confederate armies in the field and to move all along the line at once: Meade against Lee, Sherman from Chattanooga against Johnston’s army and Atlanta, Butler up the James towards Richmond and Petersburg, Sigel in the Shenandoah Valley, Crook in West Virginia and Banks against Mobile. Troops who guarded captured territory, he explained to Lincoln, could do it as well by advancing as by standing still; Grant reports Lincoln’s answer that if a man can’t skin, he must hold a leg while somebody else does.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. XLVII" }],
          battleSlugs: ["wilderness", "atlanta-campaign"],
          campaignSlugs: ["overland-campaign", "atlanta-campaign"],
        },
        {
          title: "Working through Meade",
          text: "When Grant first visited the Army of the Potomac, Meade offered to step aside if Grant wanted someone from the West, such as Sherman. Grant kept him and writes that the offer raised his opinion of Meade even more than Gettysburg had. But Meade’s position, he adds, proved embarrassing: Grant travelled with Meade’s army and tried to make Meade’s position what it would have been if Grant were elsewhere, giving all orders for its movements through him. Mertz writes that Grant left the army’s organisation largely as he found it, and that in the Wilderness, angry at delays in carrying out his orders, he began to harbour doubts about its command. At Spotsylvania, Mertz writes, Grant let Sheridan take the cavalry away after a quarrel with Meade, which left Meade feeling humiliated and strained their relations.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XLVI" },
            { source: 2 },
            { source: 3 },
          ],
          battleSlugs: ["wilderness", "spotsylvania"],
        },
        {
          title: "The parts that failed and the parts that held",
          text: "Not every part moved as planned. Banks’s expedition up the Red River, which Grant writes he had opposed and which was ordered from Washington before his appointment, did not return in time to move on Mobile. The 1911 Britannica writes that Butler’s Army of the James was checked at Bermuda Hundred by a small force under Beauregard, and that in July Grant had to send a corps to Washington when Early, having driven back the Union force in the Valley, came within a day’s march of the capital. In Georgia the plan held: the American Battlefield Trust describes Sherman manoeuvring Johnston back to Atlanta, and Atlanta fell in September. Greene writes that Lincoln’s re-election in November relieved the pressure on Grant to show progress in Virginia.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "ch. XLVII" },
            { source: 4, locator: "Petersburg Campaign" },
            { source: 5 },
            { source: 6 },
          ],
          battleSlugs: ["atlanta-campaign", "petersburg"],
          campaignSlugs: ["petersburg-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The general-in-chief, describing in his memoirs a plan he had made twenty years before and its execution by others.",
          says: "The armies had acted separately; he made them move together, and the commanding general had to be where he could resist pressure from Washington.",
          refs: [
            { source: 0, locator: "ch. XLVI" },
            { source: 1, locator: "ch. XLVII" },
          ],
        },
        {
          who: "Abraham Lincoln, as Grant reports him",
          stake:
            "The president who appointed Grant and needed a victory before the autumn election.",
          says: "If a man can’t skin, he must hold a leg while somebody else does; and Grant could have anybody he wanted.",
          refs: [{ source: 1, locator: "ch. XLVII" }],
        },
        {
          who: "Greg Mertz",
          stake:
            "A modern historian writing Encyclopedia Virginia’s articles on the Wilderness and Spotsylvania.",
          says: "Grant’s presence with the Army of the Potomac strained its command, and his decision to release Sheridan cost the army its screen.",
          refs: [{ source: 2 }, { source: 3 }],
        },
        {
          who: "The American Battlefield Trust",
          stake:
            "A preservation organisation’s account of the Atlanta campaign.",
          says: "Sherman did not use his numbers in blunt frontal attacks as Grant was doing in Virginia, but manoeuvred round Johnston’s flank.",
          refs: [{ source: 5 }],
        },
      ],
      strategist: [
        {
          text: "The design addressed a specific weakness. Separate Union armies had let the Confederacy move troops between threatened points; a simultaneous advance, even by weak forces, made every Confederate commander keep his men where they were. Grant’s explanation to Lincoln puts it plainly: troops that had to guard territory anyway could do it better by advancing. The plan did not require every part to succeed, only that each part hold enemy troops in place, which is why Lincoln’s frontier saying fits it.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "ch. XLVII" }],
        },
        {
          text: "It also depended on people Grant had not chosen. Butler and Sigel already held their commands when Grant took over, Banks’s Red River expedition had been ordered from Washington before his appointment, and Meade commanded the army Grant travelled with. What Grant could choose, he did: Sherman in the West, and Sheridan for the cavalry after Lincoln told him he could have anybody he wanted. The 1911 Britannica calls Lincoln Grant’s most unwavering supporter, and Mertz writes that Lincoln, fearing defeat in the election without a victory, had told Grant to seek out and destroy Lee. The plan held where the general was Grant’s choice and the political support was firm.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "ch. XLVII" },
            { source: 7 },
            { source: 2 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on coordinating large organisations exists, but none was read for this volume, and the documents show the problem directly: a plan that worked where the commander was chosen and supported, and stalled where he was not. The lesson rests on that comparison.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no study is cited.",
        },
      ],
      shadow: {
        text: "The arrangement had costs. Grant travelling with Meade’s army made him, in practice, its commander, and Mertz describes the friction this caused: delays Grant blamed on the army, Meade humiliated over Sheridan, the cavalry away when the army needed its screen. The American Battlefield Trust contrasts Sherman’s manoeuvres with the blunt frontal attacks Grant was making against Lee in the same months; directing every army at once did not make Grant a different general in Virginia.",
        evidence: "interpretation",
        refs: [{ source: 2 }, { source: 3 }, { source: 5 }],
      },
      counterCase: {
        text: "Napoleon’s autumn campaign of 1813 shows the same problem from the losing side, and the allies’ solution. Britannica writes that the allies divided their forces into three armies and agreed to avoid battle with Napoleon himself and attack his subordinates. Napoleon beat the main allied army at Dresden, but in the same week Oudinot was defeated at Grossbeeren, Macdonald routed on the Katzbach and Vandamme surrounded at Kulm, and Britannica calls the campaign the worst conceived and most disastrous of his career. A commander directing several armies at once can win only where he is present unless his subordinates can win without him; the allies built their plan on that, as Grant later built his.",
        evidence: "interpretation",
        refs: [{ source: 8 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["dresden", "leipzig"],
      },
      cost: {
        text: "While the armies were concentrating in April 1864, Forrest’s cavalry attacked Fort Pillow on the Mississippi, held by a regiment of Black troops and a detachment of Tennessee cavalry. Grant writes that the garrison fought bravely but was overpowered, and quotes Forrest’s own dispatch boasting that the river was dyed with the blood of the slaughtered and that the facts would show Northerners that Black soldiers could not cope with Southerners; Forrest’s later report, Grant adds, left out the part which shocks humanity to read.",
        evidence: "fact",
        refs: [{ source: 1, locator: "ch. XLVII" }],
      },
      transfer: {
        holdsWhen: [
          "Separate parts of an organisation have been letting a competitor deal with them one at a time.",
          "The leader can choose the key subordinates, or at least keep the political support to replace those who fail.",
        ],
        failsWhen: [
          "The parts are led by people chosen for other reasons, who cannot carry out their share.",
          "The leader directs one part in person and the arrangement leaves its own commander without authority.",
        ],
        questions: [
          "Which parts of your organisation still act as if the others did not exist?",
          "Who leads the parts of your plan, and who chose them?",
          "Where you work alongside a manager whose team you direct, who is actually in charge?",
        ],
      },
      bearsOn:
        "This lesson is the strongest case for the second answer, the Union’s resources, used together. Grant’s plan turned the North’s larger forces into simultaneous pressure that the Confederacy could not meet everywhere. But resources alone had not done it before 1864, and the plan’s success in Georgia and failures elsewhere suggest that the answer depended on who led each part and on Lincoln’s support: resources, persistence and politics together.",
      questions: [
        {
          prompt:
            "What problem did Grant say his simultaneous advance was meant to stop?",
          choices: [
            "The Union armies acting separately, which let the enemy reinforce one threatened front from a quiet one.",
            "The shortage of Union troops.",
            "The Confederate navy’s attacks on supply lines.",
          ],
          answer: 0,
          explanation:
            "He writes that the armies had acted separately and independently, and that he determined to stop it.",
        },
        {
          prompt:
            "How did Grant handle the Army of the Potomac, which he travelled with?",
          choices: [
            "He replaced Meade with Sherman.",
            "He gave all orders for its movements through Meade, a position Grant admits proved embarrassing.",
            "He left it entirely to Meade and stayed in Washington.",
          ],
          answer: 1,
          explanation:
            "Meade had offered to step aside; Grant kept him, and Mertz describes the friction that followed.",
        },
        {
          prompt:
            "What did the allies agree in the autumn of 1813, according to Britannica?",
          choices: [
            "To seek battle with Napoleon at once.",
            "To make peace on the Rhine.",
            "To divide into three armies, avoid battle with Napoleon himself and attack his subordinates.",
          ],
          answer: 2,
          explanation:
            "Napoleon won at Dresden while his subordinates were beaten at Grossbeeren, the Katzbach and Kulm.",
        },
      ],
      sourceCheck: {
        question: "Did Grant’s plan of simultaneous advances work?",
        witnesses: [
          {
            label: "Grant, ch. XLVII",
            claim:
              "Banks did not get back in time to take part in the programme as laid down.",
          },
          {
            label: "1911 Britannica, Petersburg",
            claim:
              "Butler was checked at Bermuda Hundred, and Early’s raid forced Grant to send a corps to Washington.",
          },
          {
            label: "American Battlefield Trust",
            claim:
              "Sherman manoeuvred Johnston back to Atlanta, which fell in September.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Judge the plan a failure, since several parts failed.",
            feedback:
              "The plan was designed so that weak parts would still hold enemy troops in place; the decisive parts were in Virginia and Georgia.",
          },
          {
            text: "Judge the plan a success, since the war was won.",
            feedback:
              "Victory does not show which parts mattered; Banks and Butler contributed little, and Early’s raid drew troops away.",
          },
          {
            text: "Judge it part by part: the design held where the commander was Grant’s choice and the pressure was sustained, and stalled where it was not.",
            feedback:
              "This separates the design from its execution, which is the lesson’s point.",
            best: true,
          },
        ],
        campaignSlug: "atlanta-campaign",
      },
      seminar: {
        prompt:
          "In March 1864 Grant could command from Washington, stay in the West, or travel with the Army of the Potomac. Argue the choice from three positions: Grant after receiving his commission, Meade, and Lincoln seven months before the election.",
        guidance:
          "Use Grant’s chapters XLVI and XLVII, Mertz on the Wilderness and Spotsylvania, and the 1911 Britannica on the Petersburg campaign. Say what each arrangement would have gained and cost.",
      },
      sources: [
        s.grant46,
        s.grant47,
        s.mertzWilderness,
        s.mertzSpotsylvania,
        s.ebPetersburg,
        s.atlantaAbt,
        s.greene,
        s.ebGrant,
        s.britAutumn1813,
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
    {
      slug: "the-army-that-could-not-be-replaced",
      title:
        "The army that could not be replaced: defending a cause by entrenchment",
      part: "Grant against Lee",
      themes: ["judgement", "organisation", "restraint"],
      people: ["philip-h-sheridan"],
      claim:
        "When a commander’s army cannot be replaced, he can hold a stronger enemy for a long time from fortified lines, but only while his supply lines hold and his men will stay, and the lines that protect his army also fix it in place.",
      inBrief: {
        strength:
          "From the trenches of Petersburg Lee held Grant for most of a year with an army that could not be rebuilt.",
        shadow:
          "The lines tied him to two cities and their railroads, and hunger and desertion emptied them from inside.",
      },
      moment: {
        text: "In the winter of 1864–65 the two armies faced each other across trenches that in places, Greene writes, were less than four hundred yards apart. On the Union side a military railroad brought supplies from the base at City Point to the front, delivering bread still warm from the ovens. The Confederates had no such facilities: firewood was short, rations and warm clothing failed to meet the army’s needs, and Lee faced a rising tide of desertion as veterans gave way to hunger, pessimism and the pleas of their suffering families. The 1911 Britannica adds that his army had no coffee, tea or sugar and lived chiefly on corn-bread, and that the trench work and outpost duty of a severe winter overtaxed its patriotism.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1, locator: "Petersburg Campaign" }],
      },
      episodes: [
        {
          title: "Behind the earthworks",
          text: "When Grant crossed the James in June 1864, the 1911 Britannica writes, Lee for four days refused to believe the reports, and Beauregard held Petersburg with a small force until Lee’s army arrived on the 18th. From then on, Greene writes, the campaign saw the peak of field fortification in the war: each side built elaborate, almost impregnable earthworks, which forced Grant to look for ways round the Confederate defences and allowed Lee to remain defiant at a two-to-one numerical disadvantage. Pryor adds that Lee, always a reluctant politician, could not wrest critical supplies from the Confederate authorities.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "Petersburg Campaign" },
            { source: 0 },
            { source: 2 },
          ],
          battleSlugs: ["petersburg"],
          campaignSlugs: ["petersburg-campaign"],
        },
        {
          title: "The railroads",
          text: "Once Grant gave up hope of taking the city by assault, Greene writes, he set out to strangle it and Lee’s army by cutting each supply line from the south and west, and Lee answered each Union thrust with a counter-attack meant to limit its gains. The 1911 Britannica describes the three routes to victory open to Grant, a decisive battle, a successful assault or the destruction of the railroads, and calls the last the surest but necessarily slow. In August Union troops took the Weldon Railroad, which had brought the cargoes of blockade runners up from Wilmington; after that, Greene writes, Lee depended on the South Side Railroad and the Boydton Plank Road.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1, locator: "Petersburg Campaign" }],
          battleSlugs: ["petersburg"],
        },
        {
          title: "Breaking away",
          text: "By March 1865, the 1911 Britannica writes, Lee had resolved to abandon his lines and join Joseph E. Johnston in North Carolina, but the roads were not yet fit for artillery and wagons, and he attacked Fort Stedman to gain time; the attack failed. Grant was preparing his own move round Lee’s right and writes that he gave Sheridan orders, if needed, to cut loose and join Sherman. Sheridan broke Lee’s right at Five Forks on 1 April; on the 2nd the Union army broke through the lines, and Lee told Davis that Petersburg and Richmond must be abandoned that night.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "Petersburg Campaign" },
            { source: 3, locator: "ch. LXIV" },
            { source: 0 },
          ],
          battleSlugs: ["petersburg"],
          campaignSlugs: ["petersburg-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Robert E. Lee, writing to Ethelbert Barksdale in February 1865",
          stake:
            "The Confederacy’s general-in-chief, urging a measure on the Confederate Congress in the last months of the war.",
          says: "The white population cannot supply the necessities of a long war without overtaxing its capacity; the South must provide for a protracted struggle.",
          refs: [{ source: 4 }],
        },
        {
          who: "A. Wilson Greene",
          stake:
            "A modern historian of the Petersburg campaign, writing for Encyclopedia Virginia.",
          says: "The earthworks let Lee stay defiant against two-to-one odds, while Grant strangled him by cutting his supply lines.",
          refs: [{ source: 0 }],
        },
        {
          who: "The 1911 Britannica, on Petersburg",
          stake: "A military history written half a century later.",
          says: "Destroying the railroads was the surest way to defeat Lee, but necessarily slow.",
          refs: [{ source: 1, locator: "Petersburg Campaign" }],
        },
        {
          who: "Lee, as Pryor reports him after the war",
          stake:
            "The defeated commander, speaking to a confidant about his own war.",
          says: "He fought the enemy at every step and got out of his army all that any men could do.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Entrenchment bought time, and the question is what the time was for. Lee’s earlier hope, Pryor writes, had been to destroy the enemy’s army or discourage Northerners so deeply that they would demand an end to the war. Greene writes that Lincoln’s re-election in November relieved the pressure on Grant to show progress; after that, time served the side that could replace its men. Lee’s own letter of February 1865 states the arithmetic: the Confederacy’s white population could not supply a long war. The lines preserved the army without changing that arithmetic.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 0 }, { source: 4 }],
        },
        {
          text: "The lines also fixed the army in place. The 1911 Britannica writes that Davis’s policy was to use Lee’s army to protect the capital, and that Richmond and Petersburg formed one fortress fed by its railroads; each railroad Grant cut made the lines longer to hold and harder to supply. When Lee decided to break away, the weather and Grant’s movement round his right gave him no time. Wellington’s volume asks when preserving an irreplaceable army is the decisive act; the Serbian volume shows an army that chose to retreat rather than be destroyed in place. Lee kept his army in its lines until the lines could no longer keep it.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "Petersburg Campaign" }, { source: 0 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Desertion in the last winter can be described from the sources, which name hunger, pessimism and the pleas of families as causes, but no research was read that could add a reliable mechanism to them. The lesson rests on what the sources record.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no study is cited.",
        },
      ],
      shadow: {
        text: "The siege fell on the town as well as the armies. Greene writes that the Union army waged a limited and random war against the citizens of Petersburg: once the original Confederate works east of the city were taken, Union artillery could reach its factories, public buildings and homes; hundreds of buildings were damaged by shellfire, most of the eastern half of the town became uninhabitable, and its people became refugees driven from their homes by the prospect of sudden death. Inside the Confederate lines, the families whose pleas drew soldiers home were part of the same cost.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      counterCase: {
        text: "Tadamichi Kuribayashi on Iwo Jima in 1945 held fortified ground with no hope of relief and no way to break away. Britannica writes that, despite the apparent futility of resistance, he resolved to make the United States bleed for its victory: he had a network of tunnels built, kept his men in caves until the Americans advanced inland, and forbade the suicidal charges of earlier defences. The garrison held for weeks and was killed virtually to the last man; by some accounts Kuribayashi himself preferred death to capture. Lee’s lines held longer, but they held while railroads still fed them, and when they broke he tried to march his army away, and a week later surrendered it.",
        evidence: "interpretation",
        refs: [{ source: 5 }],
        commanderSlug: "tadamichi-kuribayashi",
        battleSlugs: ["iwo-jima"],
      },
      transfer: {
        holdsWhen: [
          "Holding a position buys time that something else, outside the position, can use.",
          "The position’s supplies and the people holding it can last longer than the opponent’s patience.",
        ],
        failsWhen: [
          "The time bought serves only to delay, while the opponent cuts what feeds the position.",
          "The people inside are drawn away by hunger or by their families before the lines are ever broken.",
        ],
        questions: [
          "What is your organisation defending, and what does it gain from holding it longer?",
          "Which of the lines that protect you also keep you from moving?",
          "What would make your people leave before any competitor broke through?",
        ],
      },
      bearsOn:
        "Petersburg joins the second and third answers. The Union’s resources showed in the warm bread at City Point and in the patience to cut one railroad after another; Lee’s choices showed in the decision to defend the capital from lines he could not leave in time. Persistence was on both sides: Grant’s in the long siege, Lee’s in holding it. The record answer appears in Lee’s own postwar verdict that his army had done all that any men could do.",
      questions: [
        {
          prompt:
            "How did Grant set out to defeat Lee once Petersburg could not be taken by assault, according to Greene?",
          choices: [
            "By cutting each supply line into the city from the south and west.",
            "By waiting for Lee to attack.",
            "By moving the whole army back to Washington.",
          ],
          answer: 0,
          explanation:
            "The 1911 Britannica calls the destruction of the railroads the surest method, but necessarily slow.",
        },
        {
          prompt:
            "Why did Lee attack Fort Stedman in March 1865, according to the 1911 Britannica?",
          choices: [
            "To capture Grant’s headquarters.",
            "To relieve Richmond from the north.",
            "To gain time, because he meant to abandon his lines and join Johnston but the roads were not yet fit to move.",
          ],
          answer: 2,
          explanation:
            "The attack failed, and Grant’s move round Lee’s right began days later.",
        },
        {
          prompt:
            "What did Kuribayashi forbid his men to do on Iwo Jima, according to Britannica?",
          choices: [
            "To dig tunnels.",
            "To make the suicidal charges of earlier Japanese defences.",
            "To fire on the landing beaches.",
          ],
          answer: 1,
          explanation:
            "He kept them in caves and tunnels so as to make the United States bleed for its victory.",
        },
      ],
      sourceCheck: {
        question: "Why did Lee’s army finally leave the Petersburg lines?",
        witnesses: [
          {
            label: "Greene",
            claim:
              "Hunger, pessimism and the pleas of families drove veterans to desert through the winter.",
          },
          {
            label: "1911 Britannica, Petersburg",
            claim:
              "Lee had resolved to abandon the lines and join Johnston, but the roads were not yet fit to move.",
          },
          {
            label: "Grant, ch. LXIV",
            claim:
              "His move round Lee’s right aimed at the railroads that Lee needed to stay or to retreat.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Credit Grant’s final offensive alone.",
            feedback:
              "The offensive broke the lines, but Lee had already decided to leave them and his army was shrinking from inside.",
          },
          {
            text: "Read the end as the meeting of three pressures: an army wasting from hunger and desertion, a commander already planning to leave, and an enemy moving to cut his last railroads.",
            feedback:
              "The sources describe different parts of one collapse; none alone explains its timing.",
            best: true,
          },
          {
            text: "Conclude that the army simply ran out of ammunition.",
            feedback: "None of the sources read says so.",
          },
        ],
        campaignSlug: "petersburg-campaign",
      },
      seminar: {
        prompt:
          "In the autumn of 1864 Lee could hold the Petersburg lines, abandon Richmond and manoeuvre, or seek a battle. Argue the choice from three positions: Lee after Lincoln’s re-election, Jefferson Davis, and a soldier in the trenches whose family has written asking him to come home.",
        guidance:
          "Use Greene, the 1911 Britannica’s account of the campaign, Pryor, and Lee’s letter to Barksdale. Say what the lines protected and what they cost.",
      },
      sources: [
        s.greene,
        s.ebPetersburg,
        s.pryor,
        s.grant64,
        s.leeBarksdale,
        s.britIwoJima,
      ],
    },
    {
      slug: "the-exchange-that-stopped",
      title:
        "The exchange that stopped: prisoners and the arithmetic of attrition",
      part: "Grant against Lee",
      themes: ["ethics", "judgement"],
      claim:
        "When a commander refuses an exchange of prisoners that his own men’s families beg for, the refusal can be defended only if he is clear which reason he is acting on, a principle or an arithmetic of attrition, and the cost falls on prisoners who have no voice in the decision.",
      inBrief: {
        strength:
          "Grant refused to exchange prisoners on terms that excluded Black soldiers, and told Lee why in writing.",
        shadow:
          "He also gave a colder reason, that released prisoners would fight again, and Union prisoners died waiting.",
      },
      moment: {
        text: "On 18 August 1864, as the Park Service prints it, Grant answered Benjamin Butler, the Union commissioner of exchange, about a Confederate offer to resume the exchange of prisoners: “It is hard on our men held in Southern prisons not to exchange them, but it is humanity to those left in the ranks to fight our battles. Every man we hold, when released on parole or otherwise, becomes an active soldier against us at once either directly or indirectly.” He added that releasing all Confederate prisoners at that moment would ensure Sherman’s defeat. The Park Service notes that the sentence was later engraved on the Wirz Monument in the town of Andersonville, as evidence that Grant had stopped the exchanges for callous reasons; it argues that the record is more complicated.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "Why the exchange stopped",
          text: "The Park Service sets out the sequence. The Dix-Hill Cartel of July 1862 provided for equal exchanges and the parole of the balance. In December 1862 Jefferson Davis proclaimed that captured Black soldiers and their white officers would not be exchanged, and in May 1863 the Confederate Congress formalised it. In July 1863 men of the 54th Massachusetts captured at Fort Wagner were not exchanged with the white soldiers taken in the same assault, and on 30 July Lincoln suspended the cartel until Black and white prisoners were treated alike. Large-scale exchanges stopped by August 1863, when Grant was still an army commander in the West.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1 }],
          battleSlugs: [],
        },
        {
          title: "Grant’s order of April 1864",
          text: "In April 1864, as general-in-chief, Grant continued the policy. The Park Service at Richmond writes that he said the killing of surrendering Black soldiers at Fort Pillow on 12 April moved him to make a formal demand: on 17 April he wrote to Butler that no distinction whatever would be made in exchange between white and colored prisoners, and that non-acquiescence by the Confederate authorities would be regarded as a refusal to exchange. The Confederate secretary of war, James Seddon, refused, doubting whether the exchange of Black men for Confederate soldiers would be tolerated at all.",
          evidence: "fact",
          refs: [{ source: 2 }],
          battleSlugs: [],
        },
        {
          title: "Lee and Grant, October 1864",
          text: "During the siege of Petersburg, Lee wrote to Grant proposing an exchange of soldiers of whatever color, but adding that Negroes belonging to Confederate citizens were not considered subjects of exchange and could not be returned. Grant answered that the government was bound to secure to all persons received into its armies the rights due to soldiers, and that denying those rights to men who had escaped from Southern masters led him to decline the exchange Lee asked. Both Park Service pages quote the exchange of letters.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 1 }],
          battleSlugs: ["petersburg"],
        },
        {
          title: "The arithmetic",
          text: "The August letter, the Park Service at Andersonville writes, answered a narrower question. Confederate officials had approached Butler about resuming the full cartel, including Black prisoners. Grant approved an equal exchange, soldier for soldier, but not the cartel’s parole of the balance, because by then Confederate prisoners far outnumbered Union prisoners, released Confederates were likely to rejoin their units, and many Union prisoners had served out their enlistments and would go home. An agreement to resume exchanges was not reached until the winter of 1864–65.",
          evidence: "fact",
          refs: [{ source: 0 }],
          battleSlugs: ["petersburg"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant, in his letters of 1864",
          stake:
            "The general-in-chief, writing to Butler and Lee in the middle of the campaign.",
          says: "No distinction between white and Black prisoners; and releasing prisoners would put soldiers back in the enemy’s ranks.",
          refs: [{ source: 2 }, { source: 0 }],
        },
        {
          who: "Robert E. Lee, writing to Grant on 3 October 1864",
          stake:
            "The Confederate commander, bound by his government’s policy and his own view of formerly enslaved men.",
          says: "Negroes belonging to Confederate citizens are not subjects of exchange and cannot be returned.",
          refs: [{ source: 2 }, { source: 1 }],
        },
        {
          who: "James Seddon, Confederate secretary of war",
          stake:
            "The minister responsible for Confederate policy on prisoners.",
          says: "The exchange of Black men for Confederate soldiers would hardly be tolerated.",
          refs: [{ source: 2 }],
        },
        {
          who: "The National Park Service at Andersonville",
          stake:
            "The custodian of the prison site, correcting a story told on a monument in the town.",
          says: "Grant did not stop the exchanges; politicians on both sides who would not compromise did.",
          refs: [{ source: 0 }],
        },
      ],
      strategist: [
        {
          text: "Grant gave two reasons in 1864, and they are different kinds of reason. The April order rests on a principle, that soldiers of the United States must be treated alike whatever their color, and the October letter to Lee repeats it. The August letter rests on arithmetic: the side that could replace its losses gained by holding prisoners, because the other side could not. Judged by what Grant knew, both reasons were real, and the Confederate refusal to treat Black soldiers as prisoners of war made the principle impossible to satisfy without abandoning them.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 0 }],
        },
        {
          text: "The arithmetic belongs with the persistence of the Overland Campaign: in both, the Union could bear losses the Confederacy could not, and Grant used the difference. That is the strategist’s case for it. The ethical case is weaker, because the cost fell on men who had no say: the Park Service notes that when Grant wrote in August the prison at Andersonville already held tens of thousands, and that its photographs were taken a few days earlier. The principle protected Black soldiers; the arithmetic spent white and Black prisoners alike.",
          evidence: "interpretation",
          refs: [{ source: 0 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on moral judgement could frame the choice between a principle and an outcome, but none was read for this volume, and the letters themselves show which reason Grant gave and when. The lesson rests on the letters.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no study is cited.",
        },
      ],
      shadow: {
        text: "The prisoners paid. When the exchange broke down in 1863, the Park Service writes, prison populations rose sharply on both sides, and the Confederacy moved its Union prisoners from Richmond to a new stockade at Andersonville, Camp Sumter, opened in February 1864. Prisoners of both sides waited in camps whose populations kept growing. Grant’s August sentence later served as proof of Northern callousness, engraved on the Wirz Monument in the town of Andersonville; it is part of the record, and so is the Confederate policy it answered.",
        evidence: "fact",
        refs: [{ source: 1 }, { source: 0 }],
      },
      counterCase: {
        text: "Richard I at Acre in 1191 shows prisoners spent when an exchange failed. Bahā’ al-Dīn, Saladin’s companion and biographer, writes that when Saladin delayed fulfilling the terms agreed for the surrender of Acre, Richard broke his promises to the Muslim garrison, led them out tied together with ropes, and had them killed in sight of Saladin’s advanced guard, sparing only men of note and those strong enough to work. He reports two explanations, revenge for Christians killed during the siege, or Richard’s unwillingness to leave so many prisoners behind when he marched on Ascalon, and adds that God knows the real reason. Saladin then had Frankish prisoners brought to him put to death. Grant held his prisoners rather than kill them; both men treated captives as a reckoning between armies.",
        evidence: "interpretation",
        refs: [{ source: 3, locator: "ch. CXVI and pp. 278–280" }],
        commanderSlug: "richard-i",
        battleSlugs: ["arsuf"],
      },
      cost: {
        text: "The first prisoners refused exchange were Black soldiers. The Park Service writes that after the Union began enlisting Black soldiers the Confederacy insisted that captured Black men be treated as runaway slaves and returned to their owners, and that men of the 54th Massachusetts taken at Fort Wagner were held back when their white comrades were exchanged. Lee’s letter of October 1864 kept the same line for men who had escaped from Southern masters.",
        evidence: "fact",
        refs: [{ source: 1 }, { source: 0 }, { source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "The leader states the reason for a hard refusal, and the reason is one the people affected could recognise.",
          "A principle is at stake that the other side refuses to accept, so that agreement would mean abandoning some of one’s own.",
        ],
        failsWhen: [
          "A principle and an arithmetic are mixed, so that the cold reason later stands for the whole decision.",
          "Those who bear the cost have no voice and no account in the decision.",
        ],
        questions: [
          "When you refuse something your own people want, which reason are you acting on, and have you said so?",
          "Whose welfare is being counted as a resource in your plans?",
          "Which of your decisions would look callous if one sentence from it were carved in stone?",
        ],
      },
      bearsOn:
        "The exchange is the plainest case of the Union’s resources turned into policy: holding prisoners hurt the side that could not replace men. It also bears on the record. A single sentence of Grant’s, cut from its context, became Lost Cause evidence, while the Confederate refusal to exchange Black soldiers, which began the breakdown, dropped out of the story.",
      questions: [
        {
          prompt:
            "When did large-scale prisoner exchanges stop, according to the Park Service?",
          choices: [
            "In August 1863, after the Confederacy refused to exchange Black soldiers and Lincoln suspended the cartel; Grant was then in the West.",
            "In August 1864, when Grant wrote to Butler.",
            "In April 1865, at Appomattox.",
          ],
          answer: 0,
          explanation:
            "The Park Service calls the claim that Grant stopped the exchange a myth.",
        },
        {
          prompt: "What did Grant demand on 17 April 1864?",
          choices: [
            "That all prisoners be released at once.",
            "That exchanges be ended forever.",
            "That no distinction whatever be made in exchange between white and colored prisoners.",
          ],
          answer: 2,
          explanation:
            "He wrote that non-acquiescence would be regarded as a refusal to exchange; Seddon refused.",
        },
        {
          prompt:
            "How did Grant answer Lee’s statement that formerly enslaved soldiers were not subjects of exchange?",
          choices: [
            "He accepted it.",
            "He replied that the government was bound to secure to all persons in its armies the rights due to soldiers, and declined the exchange.",
            "He referred the question to Lincoln.",
          ],
          answer: 1,
          explanation:
            "Both Park Service pages quote the letters of October 1864.",
        },
      ],
      sourceCheck: {
        question: "Did Grant stop the exchange of prisoners?",
        witnesses: [
          {
            label: "Grant to Butler, 18 August 1864",
            claim:
              "It is hard on our men in Southern prisons, but humanity to those in the ranks; every man released becomes a soldier against us.",
          },
          {
            label: "Park Service, Andersonville",
            claim:
              "Exchanges stopped in the summer of 1863, over the Confederacy’s refusal to exchange Black soldiers, before Grant held overall command.",
          },
          {
            label: "Park Service, Richmond",
            claim:
              "Grant’s order of April 1864 demanded equal treatment of Black and white prisoners after Fort Pillow.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Take the August letter as the whole story: Grant stopped exchanges to win by attrition.",
            feedback:
              "The letter is real, but it came a year after exchanges stopped and answered a narrower question about the cartel.",
          },
          {
            text: "Dismiss the August letter as irrelevant.",
            feedback:
              "It shows that Grant also weighed the arithmetic of attrition; that is part of the record.",
          },
          {
            text: "Read the breakdown as caused by the Confederate refusal to exchange Black soldiers, and Grant’s two reasons, principle and arithmetic, as both his.",
            feedback:
              "The sequence of documents supports this; the monument quotes only one of them.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "In August 1864 Butler asks Grant whether to resume the full exchange of prisoners. Argue the answer from three positions: Grant, a Union soldier in Andersonville, and a Black soldier of the United States Colored Troops facing capture at Petersburg.",
        guidance:
          "Use the Park Service pages on the exchange, the letters of April, August and October 1864, and Bahā’ al-Dīn on Acre. Say which reason each position would accept, and who would pay.",
      },
      sources: [
        s.exchangeMyth,
        s.andersonvilleAfricanAmericans,
        s.exchangeHalted,
        s.beha,
      ],
    },
    {
      slug: "whose-war",
      title: "Whose war: the army of emancipation",
      part: "Grant against Lee",
      themes: ["ethics", "adaptation", "motivation"],
      claim:
        "When a war fought for one aim becomes a war for another, the side that adapts to the new aim may gain strength the old aim could not give, but those who fight for the new aim may pay most, and a side that adapts too late gains nothing from it.",
      inBrief: {
        strength:
          "The Union turned men who had freed themselves into soldiers, and by the end of the war they were a substantial part of its army.",
        shadow:
          "Black soldiers were paid less, led only by white officers, killed after surrendering and refused exchange.",
      },
      moment: {
        text: "On 18 February 1865 Robert E. Lee answered a Mississippi congressman, Ethelbert Barksdale, who had asked his opinion of employing Black men as Confederate soldiers. “I think the measure not only expedient, but necessary,” Lee wrote. The enemy would certainly use them if he could reach them; the white population could not supply the needs of a long war; under good officers, Lee thought, they would make efficient soldiers, and those who served should be freed: it would be neither just nor wise to require them to serve as slaves. Four years earlier the Confederacy’s founding states had declared that slavery was the cause for which they left the Union.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1 }],
      },
      episodes: [
        {
          title: "From refugees to soldiers",
          text: "Fleche writes that when the war began, Union recruiters refused Black volunteers, and that Lincoln feared Black soldiers would alienate conservative Northerners and the slaveholding border states. Enslaved people forced the question by escaping to Union lines; Grant writes that by the winter of 1862 so many had gathered around his army at Grand Junction that it could not advance, and that he set them to harvesting abandoned plantations for wages. The Park Service at Andersonville writes that the Emancipation Proclamation of January 1863 added the abolition of slavery to the Union’s war aims and declared that freed men would be received into the armed service; the United States Colored Troops recruited free Black men and men who had been enslaved, mostly under white officers. At Milliken’s Bend, during the Vicksburg siege, untested Black troops met a Confederate attack on a Union depot.",
          evidence: "fact",
          refs: [
            { source: 2 },
            { source: 3, locator: "ch. XXX" },
            { source: 4 },
            { source: 5 },
          ],
          battleSlugs: ["vicksburg"],
          campaignSlugs: ["vicksburg-campaign"],
        },
        {
          title: "Fort Pillow and the Crater",
          text: "In April 1864 Forrest’s cavalry overpowered Fort Pillow’s garrison, a regiment of Black troops and some Tennessee cavalry; Grant quotes Forrest’s own dispatch boasting of the slaughter and notes that Forrest’s later report left that part out. At Petersburg, Burnside chose his Black division to lead the assault after the mine was exploded on 30 July; Grant writes that Meade interfered, and Greene that Meade doubted the division’s combat prowess and feared the political consequences if it failed and suffered. The white division sent instead failed. Fleche writes that Black soldiers took part in the fighting at the Crater and were subject to a massacre in its wake. Two months later a Black division captured the Confederate works at New Market Heights, and Fleche writes that Black soldiers there and at Fort Gilmer earned most of the Medals of Honor awarded to Black soldiers in the war.",
          evidence: "fact",
          refs: [
            { source: 6, locator: "ch. XLVII" },
            { source: 7, locator: "ch. LVII" },
            { source: 8 },
            { source: 2 },
          ],
          battleSlugs: ["petersburg"],
          campaignSlugs: ["petersburg-campaign"],
        },
        {
          title: "The Confederacy’s last vote",
          text: "Martinez writes that through most of the war the Confederate government treated Black men as laborers, impressed for work on fortifications, not as soldiers. When Patrick Cleburne proposed emancipating and enlisting enslaved men in January 1864, the Davis administration declined to send the proposal to Congress and ordered the discussion stopped. A year later, with Lee’s support, the Confederate House narrowly passed a bill; the Senate passed an amended version by one vote, and Davis signed it on 13 March 1865. The Park Service at Richmond writes that the act did not promise freedom, leaving the relation of enslaved soldiers to their owners unchanged unless the owners and the states consented; Davis ordered manumission by military order ten days later. Two companies were mustered in Richmond before the city fell.",
          evidence: "fact",
          refs: [{ source: 9 }, { source: 10 }],
          battleSlugs: ["petersburg"],
        },
      ],
      witnesses: [
        {
          who: "Robert E. Lee, to Barksdale",
          stake:
            "The Confederacy’s general-in-chief, short of men in the last winter of the war.",
          says: "Arming Black men is necessary, and those who serve should be freed.",
          refs: [{ source: 0 }],
        },
        {
          who: "Andre Fleche",
          stake:
            "A modern historian writing Encyclopedia Virginia’s article on the United States Colored Troops.",
          says: "Black soldiers were recruited reluctantly, paid unequally and led by white officers, and fought at Petersburg, the Crater and New Market Heights.",
          refs: [{ source: 2 }],
        },
        {
          who: "Jaime Amanda Martinez",
          stake:
            "A modern historian writing Encyclopedia Virginia’s article on Black Confederates.",
          says: "Confederate leaders treated Black men as laborers, not soldiers; the Black Confederate of later commemoration is a myth.",
          refs: [{ source: 9 }],
        },
        {
          who: "Ulysses S. Grant",
          stake:
            "The general-in-chief whose armies included the United States Colored Troops, writing twenty years later.",
          says: "The garrison of Fort Pillow fought bravely and was overpowered; Meade interfered with Burnside’s choice of the Black division at the Crater.",
          refs: [
            { source: 6, locator: "ch. XLVII" },
            { source: 7, locator: "ch. LVII" },
          ],
        },
      ],
      strategist: [
        {
          text: "For the Union the change of aim added strength. The Park Service writes that the Proclamation both made abolition a war aim and opened the army to Black men, and that by the end of the war a substantial share of the Union’s forces were Black soldiers, most of whom had been enslaved when the war began. Each one was also a man the Confederacy could no longer use as labour. The change carried political risk, as Fleche notes of Lincoln’s fears for the border states, and it was made by a government that had first refused Black volunteers. Grant’s letter to Lee in October 1864, refusing any exchange that excluded men who had escaped from slavery, shows the army treating the new aim as binding.",
          evidence: "interpretation",
          refs: [{ source: 4 }, { source: 2 }, { source: 11 }],
        },
        {
          text: "For the Confederacy the same move came too late and without its premise. Lee’s letter states the arithmetic of the army that could not be replaced, and his view that soldiers must be freed; but the act Congress passed withheld freedom, and Davis had to supply it by order. A war begun to keep slavery could not easily ask enslaved men to fight for it. The Park Service notes that Northern papers reported the Confederates losing more men to desertion each day than the new companies raised.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 10 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on why people fight for a cause could bear on the soldiers of the United States Colored Troops, but none was read, and the sources give their own reasons in what they did: men who escaped slavery, enlisted, refused unequal pay, and fought. The lesson rests on that record and does not speak for them.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; few of the soldiers’ own words were read for this volume.",
        },
      ],
      shadow: {
        text: "Those who fought for the new aim paid most. Fleche writes that Congress set Black soldiers’ pay at the rate for military labourers, that they were often denied the bounties and aid for families given to white soldiers, and that regiments refused any pay until it was equalised, which Congress did in stages in 1864 and 1865. Commissions stayed almost entirely with white men. Black prisoners were refused exchange, and at Fort Pillow and after the Crater Black soldiers were killed after the fighting. The Union’s change of aim was real, and it was carried out by an army that did not treat the men who embodied it as equals.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 11 }],
        battleSlugs: ["petersburg"],
      },
      counterCase: {
        text: "The Confederacy’s own attempt shows the same move failing. Martinez writes that the Davis administration suppressed Cleburne’s proposal in January 1864 and passed a law only in March 1865, by one vote in the Senate. The Park Service at Richmond writes that the experiment produced two companies, recruited largely from men already conscripted as hospital attendants, and that the city was evacuated three weeks after they began mustering. Martinez adds that after the war the Lost Cause made a myth of the loyal Black Confederate soldier, though the men who appeared in Confederate uniform at reunions had most likely served as body servants. A cause that changes its means without changing its aim gains nothing from the change.",
        evidence: "interpretation",
        refs: [{ source: 9 }, { source: 10 }],
        battleSlugs: ["petersburg"],
      },
      cost: {
        text: "Before Black men were allowed to fight for either side, they were made to work for both. Martinez writes that Confederate states and the Confederate Congress passed laws to impress free and enslaved Black men for labour on fortifications, and that routine impressment calls forced thousands into service. Grant writes that the freedpeople who reached his lines in 1862 had no authority for their feeding unless they were employed by the army, and only able-bodied young men were suitable for that work.",
        evidence: "fact",
        refs: [{ source: 9 }, { source: 3, locator: "ch. XXX" }],
      },
      transfer: {
        holdsWhen: [
          "A new aim gives people a reason to join that the old aim never offered them.",
          "The organisation is willing to treat those who embody the new aim as full members.",
        ],
        failsWhen: [
          "The new aim is adopted only as a means, without accepting what it implies, as in the Confederacy’s last law.",
          "The people the new aim depends on are asked to carry more of the cost and receive less of the reward.",
        ],
        questions: [
          "Who joined your organisation because its purpose changed, and are they treated as equals?",
          "Which change of aim are you making only as a means?",
          "Who is paying most for your organisation’s new direction?",
        ],
      },
      bearsOn:
        "Emancipation complicates the second answer. Part of the Union’s growing resources were men who had freed themselves; resources were not simply the North’s population and industry but a change of aim that turned the Confederacy’s labour force into Union soldiers. The record answer appears in the Lost Cause’s Black Confederate, a story that replaced the Confederacy’s refusal to arm Black men until the last weeks of the war.",
      questions: [
        {
          prompt:
            "What did Lee write to Barksdale in February 1865 about arming Black men?",
          choices: [
            "That it would be useless.",
            "That it was not only expedient but necessary, and that those who served should be freed.",
            "That they should serve as laborers only.",
          ],
          answer: 1,
          explanation:
            "He argued that the white population could not supply the needs of a long war.",
        },
        {
          prompt:
            "What happened before the assault after the mine at Petersburg?",
          choices: [
            "Meade replaced the Black division Burnside had chosen to lead it; the white division sent instead failed.",
            "The Black division refused to attack.",
            "Grant cancelled the assault.",
          ],
          answer: 0,
          explanation:
            "Grant writes that Meade interfered; Greene gives Meade’s reasons, doubt and fear of political consequences.",
        },
        {
          prompt:
            "What did the Confederate law of 13 March 1865 say about freedom for enslaved soldiers, according to the Park Service?",
          choices: [
            "It freed all enslaved people in the Confederacy.",
            "It freed every soldier and his family.",
            "It did not change their relation to their owners unless owners and states consented; Davis ordered manumission separately.",
          ],
          answer: 2,
          explanation:
            "Lee had argued that soldiers should be freed; Congress did not write it into the law.",
        },
      ],
      sourceCheck: {
        question: "Did Black soldiers fight for the Confederacy?",
        witnesses: [
          {
            label: "Martinez",
            claim:
              "Confederate leaders treated Black men as laborers; the law allowing Black soldiers passed only in March 1865.",
          },
          {
            label: "Park Service, Richmond",
            claim:
              "Before 13 March 1865 Confederate law allowed only white men to serve as soldiers; two companies were mustered in the last weeks.",
          },
          {
            label: "Later reunions, as Martinez describes them",
            claim:
              "Black men appeared in Confederate uniform at veterans’ reunions.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Take the reunion photographs as proof of Black Confederate soldiers.",
            feedback:
              "Martinez writes that those men had most likely served as body servants; the law forbade Black soldiers until March 1865.",
          },
          {
            text: "Read the law and the government’s policy as the evidence: Black men were impressed as labourers, and only a handful were enlisted as soldiers in the last weeks.",
            feedback:
              "The documents of the time settle what later commemoration obscured.",
            best: true,
          },
          {
            text: "Conclude that the question cannot be answered.",
            feedback:
              "The law, the policy and the muster in Richmond answer it.",
          },
        ],
        battleSlug: "petersburg",
      },
      seminar: {
        prompt:
          "In 1863 the Union decided to enlist Black soldiers, and in 1865 the Confederacy did too. Argue each decision from three positions: a man who had escaped slavery to Union lines, a white officer of the United States Colored Troops, and Lee writing to Barksdale.",
        guidance:
          "Use Fleche, Martinez, the Park Service pages, Lee’s letter and Grant’s chapters on Fort Pillow and the Crater. Say what each decision offered the men it asked to fight, and what it withheld.",
      },
      sources: [
        s.leeBarksdale,
        s.mississippi,
        s.usct,
        s.grant30,
        s.andersonvilleAfricanAmericans,
        s.vicksburgSiege,
        s.grant47,
        s.grant57,
        s.greene,
        s.blackConfederates,
        s.armingEnslaved,
        s.exchangeHalted,
      ],
    },
    {
      slug: "appomattox",
      title: "Appomattox: terms the defeated could accept",
      part: "The end and after",
      themes: ["restraint", "ethics", "communication"],
      claim:
        "When a victor offers generous terms, he can end a war faster and make the peace easier to keep, but only on conditions the defeated cannot later turn against the victory, and generosity to a beaten army settles nothing about what the war was fought over.",
      inBrief: {
        strength:
          "Grant let Lee’s men go home on parole with their horses, fed them, and stopped his own army’s celebration.",
        shadow:
          "The generosity of the surrender became, in later telling, part of a story of honourable defeat that left out the cause.",
      },
      moment: {
        text: "On the afternoon of 9 April 1865, in McLean’s house at Appomattox Court House, Grant met Lee. Grant writes that he had no sword, as he usually had none on horseback in the field, and wore a soldier’s blouse with his shoulder straps; Lee wore a new full uniform and a sword of considerable value. Grant had been jubilant on receiving Lee’s letter; now, he writes, his feelings were sad and depressed. He felt like anything rather than rejoicing at the downfall of a foe who had fought so long and valiantly and suffered so much for a cause, though that cause was, he believed, one of the worst for which a people ever fought, and one for which there was the least excuse.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. LXVII" }],
      },
      episodes: [
        {
          title: "The terms",
          text: "Grant writes the terms as a letter: rolls of all officers and men; officers to give their individual paroles not to take up arms against the United States until properly exchanged; arms and public property to be handed over, but not the officers’ side arms, horses or baggage; and each man allowed to return home, not to be disturbed by United States authority so long as he observed his parole and the laws where he lived. Lee, Grant writes, remarked with some feeling that the provision for the officers would have a happy effect on his army, and then asked whether the cavalrymen and artillerists, who owned their own horses, might keep them. Grant answered that as written the terms would not allow it, but that the country had been so raided by both armies that the men might not otherwise put in a crop, and he would instruct his officers to let every man who claimed a horse or mule take it home. Lee wrote a letter accepting the terms.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. LXVII" }],
          battleSlugs: ["petersburg"],
          campaignSlugs: ["petersburg-campaign"],
        },
        {
          title: "Rations, and the salute stopped",
          text: "Before leaving, Lee said his men had lived for some days on parched corn alone and asked for rations; Grant told him to send his commissary to Appomattox Station for all the provisions he wanted from the captured trains. When news of the surrender reached the Union lines, Grant writes, the troops began firing a salute of a hundred guns; he had it stopped, because the Confederates were now prisoners and he did not want to exult over their downfall. The next morning the two men talked between the lines. Lee said that the South was a big country and that the Union army might have to march over it three or four times; Grant suggested that Lee advise the surrender of all the Confederate armies, and Lee answered that he could not do so without consulting the president.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. LXVII" }],
          battleSlugs: [],
          campaignSlugs: ["petersburg-campaign"],
        },
        {
          title: "The salute at the surrender of arms",
          text: "The Confederate infantry then marched in to lay down their arms. Joshua Chamberlain, a Union general whose men were drawn up in line to receive them, wrote in a book published in 1915, fifty years later and after his death, that as each Confederate division came opposite his line his men shifted from order arms to carry, the marching salute; that John B. Gordon, at the head of the column, wheeled his horse, dropped the point of his sword in answer and had his brigades return the salute; and that there was no cheer or word of vain-glory on the Union side. Chamberlain asked whether such manhood was not to be welcomed back into a Union so tested. His is a recollection, given with its witness and its date, and Grant’s memoirs do not mention it.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 260–261" },
            { source: 0, locator: "ch. LXVII" },
          ],
          battleSlugs: [],
          campaignSlugs: ["petersburg-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The victor, writing twenty years later, who also corrects the stories that had grown up about the surrender.",
          says: "He wrote the terms himself, added the horses for the men, stopped the salute, and calls the story of Lee’s sword the purest romance.",
          refs: [{ source: 0, locator: "ch. LXVII" }],
        },
        {
          who: "Robert E. Lee, as Grant reports him",
          stake: "The defeated commander, asking what he could for his men.",
          says: "The terms would have a happy effect on his army; his men needed food; he could not advise the other armies to surrender without the president.",
          refs: [{ source: 0, locator: "ch. LXVII" }],
        },
        {
          who: "Joshua L. Chamberlain",
          stake:
            "A Union general at the surrender of arms, writing half a century later in a spirit of reconciliation between white veterans.",
          says: "Honour answered honour as the two armies saluted.",
          refs: [{ source: 1, locator: "pp. 260–261" }],
        },
        {
          who: "A. Wilson Greene",
          stake: "A modern historian of the Petersburg campaign.",
          says: "Appomattox hastened the surrender of the other Confederate forces.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "The terms were designed to end the fighting, not to punish. They sent the men home under parole with the means to farm, which Grant justified by the raiding the country had suffered; they protected the men from arrest so long as they kept their paroles; and they fed an army that had been living on parched corn. Lee’s fear, that the Union might have to march over the South three or four times, did not come true: Greene writes that Appomattox hastened the surrender of the other Confederate forces and so made the Petersburg campaign the proximate cause of the end of the war.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. LXVII" }, { source: 2 }],
        },
        {
          text: "The terms were also limited by what Grant could settle. They were written for an army, by its opponent; they said nothing of the cause that Grant, in the same chapter, called one of the worst a people ever fought for, nothing of the enslaved, and nothing of the Black soldiers in Grant’s own armies. Lee himself declined to advise the other armies to surrender without his president. A general can make a surrender; he cannot make the peace that follows it. Caesar’s volume and the Western Front volume’s lesson on ending a war both ask the same question about the limits of what a commander can settle.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. LXVII" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on reconciliation after conflict could bear on Appomattox, but none was read for this volume, and the documents show the gestures directly: the horses, the rations, the stopped salute. The lesson rests on them and on what was later made of them.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no study is cited.",
        },
      ],
      shadow: {
        text: "The generosity of the surrender was turned to other uses. Chamberlain’s account of honour answering honour, published half a century later, welcomes the defeated soldiers back without a word about why they had fought. Piston writes that after Lee’s death the Lost Cause made him the Confederacy’s stainless hero, beaten by numbers and never outgeneralled, and Martinez that it invented the loyal Black Confederate. The surrender’s courtesy became evidence for a story in which the war was a contest of honourable men, and the cause that Grant named at Appomattox dropped out of it.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "pp. 260–261" },
          { source: 4 },
          { source: 5 },
        ],
      },
      counterCase: {
        text: "Caesar’s clemency in the civil war, the subject of a lesson in his volume, shows generosity that did not secure the peace. Suetonius writes that Caesar showed admirable self-restraint and mercy in the war and in victory, that he spared Pompeians, allowed all those he had not yet pardoned to return to Italy and hold magistracies and commands, and preferred to quash plots against him rather than punish them. More than sixty men, led by Gaius Cassius and Marcus and Decimus Brutus, then conspired to kill him, and Suetonius records the view that he had abused his power and was justly slain. Clemency to defeated enemies did not settle what the war had been about, and it left them free to fight again by other means.",
        evidence: "interpretation",
        refs: [{ source: 6, locator: "75, 76.1, 80.4" }],
        commanderSlug: "julius-caesar",
        battleSlugs: ["pharsalus"],
      },
      cost: {
        text: "By the end the Army of Northern Virginia was starving. Lee told Grant that his men had lived for some days on parched corn alone and had no forage for their animals, and Grant writes that his own army had depended on the country for forage as well. Pryor writes that the defeat at Sailor’s Creek three days before had left the Confederates desperately short of men and supplies.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. LXVII" }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "The terms let the defeated return to ordinary life, so that ending the contest is better for them than continuing it.",
          "The victor forbids celebration over the defeated, so that the end does not become a new grievance.",
        ],
        failsWhen: [
          "The terms are taken for a settlement of the dispute itself, which they do not address.",
          "The courtesy of the ending is later used to rewrite why the contest was fought.",
        ],
        questions: [
          "When you last ended a conflict, what did you give the other side that made ending better than continuing?",
          "What did your terms leave unsettled, and who will settle it?",
          "How might the courtesy you show now be retold, and by whom?",
        ],
      },
      bearsOn:
        "Appomattox adds to the record answer more than to the others. The surrender was ended by Grant’s terms and Lee’s acceptance, and it hastened the end of the war; but the way it was remembered, as honour answering honour, became one of the foundations of the story that made Lee’s defeat a matter of numbers rather than of choices or of cause.",
      questions: [
        {
          prompt:
            "What did Grant allow Confederate soldiers who owned horses to do?",
          choices: [
            "Nothing; all horses were confiscated.",
            "Take their horses or mules home, so that they could put in a crop.",
            "Sell their horses to the Union army.",
          ],
          answer: 1,
          explanation:
            "The written terms covered only the officers; Grant extended the privilege to the men after Lee asked.",
        },
        {
          prompt: "Why did Grant stop the salute of a hundred guns?",
          choices: [
            "Because the Confederates were now prisoners and he did not want to exult over their downfall.",
            "Because ammunition was short.",
            "Because Lee asked him to.",
          ],
          answer: 0,
          explanation: "He writes so in chapter LXVII.",
        },
        {
          prompt:
            "How should Chamberlain’s account of the salute at the surrender of arms be read?",
          choices: [
            "As an official report written that day.",
            "As Grant’s account.",
            "As a recollection published in 1915, fifty years later, by a witness writing in a spirit of reconciliation.",
          ],
          answer: 2,
          explanation:
            "It is evidence of what Chamberlain remembered and wished to say; Grant does not mention the salute.",
        },
      ],
      sourceCheck: {
        question: "Did Lee surrender his sword to Grant?",
        witnesses: [
          {
            label: "Popular story",
            claim: "Lee offered his sword and Grant returned it.",
          },
          {
            label: "Grant, ch. LXVII",
            claim:
              "The story is the purest romance; the word sword was not mentioned until he wrote it into the terms.",
          },
          {
            label: "Grant, ch. LXVII",
            claim: "The terms exempted the officers’ side arms from surrender.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Keep the story, because it is widely told.",
            feedback:
              "Repetition is not evidence; the only participant who wrote about it says it did not happen.",
          },
          {
            text: "Follow Grant: the terms let officers keep their side arms, so no sword was offered or returned.",
            feedback:
              "Grant was there, and the written terms support his account.",
            best: true,
          },
          {
            text: "Conclude that both versions are equally likely.",
            feedback:
              "The terms themselves, which Lee accepted in writing, make the story unnecessary.",
          },
        ],
        campaignSlug: "petersburg-campaign",
      },
      seminar: {
        prompt:
          "On 9 April 1865 Grant could demand harsh terms, offer the terms he did, or try to settle more than the surrender of an army. Argue the choice from three positions: Grant at McLean’s house, a Confederate private with a horse and a farm, and a Black soldier of the United States Colored Troops.",
        guidance:
          "Use Grant’s chapter LXVII, Chamberlain’s recollection, Greene and Pryor. Say what the terms settled and what they left to others.",
      },
      sources: [
        s.grant67,
        s.chamberlain,
        s.greene,
        s.pryor,
        s.longstreet,
        s.blackConfederates,
        s.suetonius,
      ],
    },
    {
      slug: "the-ledger",
      title: "The ledger: why Grant won, and who paid",
      part: "The end and after",
      themes: ["judgement", "ethics"],
      claim:
        "When a commander’s side wins a war of attrition, the victory can be credited to his persistence only where his choices, and not his side’s resources alone, turned those resources into victory, and any verdict must count who paid and who told the story.",
      inBrief: {
        strength:
          "The volume can answer its question: the Union’s resources made victory possible, and Grant’s persistence and coordination made it happen.",
        shadow:
          "The answer depends on a record shaped for a century by the losers, and the cost fell on people the commanders’ records barely name.",
      },
      moment: {
        text: "Each commander left a verdict on his own war. Grant, at Appomattox, felt like anything rather than rejoicing at the downfall of a foe who had fought so long and valiantly, and judged the cause one of the worst for which a people ever fought. Lee, Pryor writes, told a confidant after the war that he had fought the enemy at every step and believed he had got out of his army all that any men could do. Neither verdict answers the question this volume has asked from its first lesson: why did Grant win?",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. LXVII" }, { source: 1 }],
      },
      episodes: [
        {
          title: "Persistence",
          text: "The volume’s evidence for persistence is strong but conditional. At Shiloh Grant ordered an attack for the morning of the second day before his reinforcements had reached the field; after the Wilderness he marched south instead of back, and the 1911 Britannica writes that he would have followed other unsuccessful generals into retirement had he not shown iron determination. But at Cold Harbor he attacked works that could not be carried, and he wrote that he always regretted it. Persistence served as strategy when each move put Lee in a worse position, and failed when it became the repetition of an attack.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "ch. XXIV" },
            { source: 3 },
            { source: 4, locator: "ch. LV" },
          ],
          battleSlugs: ["shiloh", "wilderness"],
        },
        {
          title: "The Union’s resources",
          text: "The Union had more men, railroads, a navy and the means to supply its armies, and Lee knew it: in July 1863 he wrote to Davis that the enemy could easily be reinforced while no addition could be made to his own numbers, and in February 1865 that the white population of the South could not supply a long war. But resources had not won the war in the East before 1864. Grant writes that until then the Union armies had acted separately, letting the Confederacy shift troops between them; what changed in 1864 was their use together, and Greene describes the military railroad that carried warm bread to the trenches at Petersburg.",
          evidence: "interpretation",
          refs: [
            { source: 5 },
            { source: 6 },
            { source: 7, locator: "ch. XLVII" },
            { source: 8 },
          ],
          battleSlugs: ["petersburg", "atlanta-campaign"],
        },
        {
          title: "Lee’s own choices",
          text: "Lee beat larger armies: at Chancellorsville, Pryor writes, he turned a vulnerable position into a brilliant offensive against a force double his size. But she also writes that he risked his scarce resources in large and costly battles in the hope of destroying the enemy’s army or breaking the North’s will, and that historians have asked whether a war of attrition would have served the Confederacy better. The victory at Chancellorsville encouraged the invasion that ended on the third day at Gettysburg, an offensive spent from an army that could not be replaced; at Petersburg he defended a capital from lines that fixed his army in place.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 9 }],
          battleSlugs: ["chancellorsville", "gettysburg"],
        },
        {
          title: "The record",
          text: "For a century the losers wrote most of what readers met. Piston writes that Early and his allies blamed Longstreet for Gettysburg, and that Lee emerged as the Confederacy’s stainless hero, defeated by superior numbers but never outgeneralled. That story made the Union’s resources the only acceptable explanation, because it kept Lee’s choices out of view. Martinez describes the invented loyal Black Confederate; the Park Service at Andersonville, Grant’s sentence on prisoners carved on a monument without its context. The record does not decide which answer is true, but it decided for a long time which answers could be seen.",
          evidence: "interpretation",
          refs: [{ source: 10 }, { source: 11 }, { source: 12 }],
          battleSlugs: ["gettysburg"],
        },
      ],
      witnesses: [
        {
          who: "Ulysses S. Grant",
          stake:
            "The victor, writing his memoirs while dying, to answer his critics and provide for his family.",
          says: "The armies had to act together, persistence had a price he sometimes regretted, and the cause he defeated was among the worst ever fought for.",
          refs: [
            { source: 7, locator: "ch. XLVII" },
            { source: 4, locator: "ch. LV" },
            { source: 0, locator: "ch. LXVII" },
          ],
        },
        {
          who: "Robert E. Lee, in his letters",
          stake:
            "The defeated commander, who wrote no memoir; his letters were written for his government during the war.",
          says: "The enemy could be reinforced and his own army could not; the South could not supply a long war.",
          refs: [{ source: 5 }, { source: 6 }],
        },
        {
          who: "Elizabeth Brown Pryor",
          stake:
            "A modern biographer of Lee, writing for Encyclopedia Virginia.",
          says: "Lee’s leadership frustrated Grant for a long time, but his costly offensives may not have been the right strategy.",
          refs: [{ source: 1 }],
        },
        {
          who: "William Garrett Piston",
          stake: "A modern historian of Longstreet and of the Lost Cause.",
          says: "The Lost Cause transferred Lee’s defeat to Longstreet and made Lee a hero beaten only by numbers.",
          refs: [{ source: 10 }],
        },
      ],
      strategist: [
        {
          text: "The volume’s answer, offered for the reader to contest, ranks the four. First, the Union’s resources, which made victory possible and were the precondition of every Union success. Second, Grant’s use of them: the coordination of 1864 and a persistence that, at its best, was a strategy of keeping Lee’s army fighting until it could be besieged, and at its worst was a repeated assault. Third, Lee’s own choices, which won battles and spent an army that could not be replaced. Over all of them, the record: the Lost Cause put the first answer forward to hide the third, and Grant’s memoirs put the second forward in his own words.",
          evidence: "interpretation",
          refs: [
            { source: 7, locator: "ch. XLVII" },
            { source: 1 },
            { source: 10 },
          ],
        },
        {
          text: "The premise that persistence was a strategy holds only in part. Grant’s own descriptions of his reasons, to get between Lee and Richmond, to keep Lee from reinforcing elsewhere, to cut the railroads, are strategic, and they are partly confirmed by what happened. But they were written twenty years later by the man whose reputation depended on them, and Cold Harbor shows him continuing an attack past its purpose. A reader who argues the opposite, that the North would have won under any competent general once it learned to use its strength together, has the Union’s numbers on their side, and must explain why it had not happened before Grant came east.",
          evidence: "interpretation",
          refs: [
            { source: 4, locator: "ch. LV" },
            { source: 7, locator: "ch. XLVII" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The volume’s one psychological reading, on the sunk-cost effect in lesson 7, is a caution about persistence, not an explanation of victory. No research could weigh the four answers against each other; the ledger rests on the evidence of the lessons.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no study is cited.",
        },
      ],
      shadow: {
        text: "The ledger has entries the commanders barely wrote. The Confederacy fought to keep people enslaved, as its own declarations say; Wesley Norris, whipped at Arlington in 1859, is one of the few of them whose words reached the commanders’ record. Black soldiers were refused exchange and killed after surrendering at Fort Pillow. Prisoners on both sides waited in camps that the breakdown of exchange filled. The people of Vicksburg lived in caves and those of Petersburg under shellfire. Grant writes that after Shiloh his armies consumed everything that could supply the enemy’s armies, and the 1911 Britannica that Sheridan destroyed railways across Virginia and made the James Canal useless. The soldiers of both armies paid most of all, and this volume gives no totals for them.",
        evidence: "fact",
        refs: [
          { source: 13 },
          { source: 14 },
          { source: 12 },
          { source: 7, locator: "ch. XLVII" },
          { source: 15 },
          { source: 8 },
          { source: 16, locator: "ch. XXV" },
          { source: 17, locator: "Petersburg Campaign" },
        ],
      },
      counterCase: {
        text: "Hannibal, whose volume ends with its own ledger, won the great battles of his war and lost it. The 1911 Britannica writes that he failed at first to win a following among the Italians, that without siege engines he could not take Rome, that his lieutenants were generally unable to hold their own when detached, and that neither his government nor his ally made good his losses, so that his chance of conquering Rome grew ever more remote. Like Lee, he was the better tactician on the side that could not replace its army; unlike Lee, his record was written by his enemies’ friends, not rewritten by his own side.",
        evidence: "interpretation",
        refs: [{ source: 18 }],
        commanderSlug: "hannibal-barca",
        battleSlugs: ["cannae", "zama"],
      },
      transfer: {
        holdsWhen: [
          "A contest was won by the side with more resources, and the question is what its leaders added.",
          "The accounts of the contest can be traced to their authors, so that each answer can be tested against who told it.",
        ],
        failsWhen: [
          "Success is credited to a leader’s persistence without asking whether the persistence served a plan.",
          "The cost is left out because the people who paid it left few records.",
        ],
        questions: [
          "When your organisation last won, how much was its resources and how much its leaders?",
          "Which story of that victory do you tell, and who first told it?",
          "Who paid for it, and are they in the account?",
        ],
      },
      bearsOn:
        "This lesson answers the volume’s question. Grant won because the Union’s resources were finally used together, under a commander who kept pressing when earlier commanders had stopped; Lee’s own offensives spent an army the Confederacy could not replace; and the record, rewritten for a century by the losers, decided which of these answers most readers were allowed to see. The reader is invited to argue the opposite.",
      questions: [
        {
          prompt:
            "What did Lee write to Davis in July 1863 that bears on the second answer, the Union’s resources?",
          choices: [
            "That the Union army was exhausted.",
            "That the enemy could easily be reinforced while no addition could be made to his own numbers.",
            "That the war would soon end.",
          ],
          answer: 1,
          explanation:
            "He made the same point in February 1865 about the white population of the South.",
        },
        {
          prompt:
            "Why does the volume rank the record over the other three answers?",
          choices: [
            "Because the record proves that Lee was the better general.",
            "Because the record is always false.",
            "Because for a century the Lost Cause decided which answers readers saw, putting the Union’s numbers forward to hide Lee’s choices.",
          ],
          answer: 2,
          explanation:
            "The record does not settle the question; it shaped which evidence the other answers could use.",
        },
        {
          prompt:
            "What must a reader who argues that any competent Union general would have won explain?",
          choices: [
            "Why the Union’s resources had not won the war in the East before 1864, when Grant made the armies act together.",
            "Why Grant wrote memoirs.",
            "Why the Confederacy seceded.",
          ],
          answer: 0,
          explanation:
            "Grant writes that before 1864 the armies acted separately, letting the Confederacy shift troops between them.",
        },
      ],
      sourceCheck: {
        question: "Why did Grant win?",
        witnesses: [
          {
            label: "1911 Britannica, Grant",
            claim:
              "He showed the iron determination that Lincoln and the North wanted, whatever his mistakes.",
          },
          {
            label: "Lee to Davis, July 1863",
            claim:
              "The enemy could easily be reinforced; no addition could be made to Lee’s numbers.",
          },
          {
            label: "Piston, on the Lost Cause",
            claim:
              "Lee emerged as a hero defeated by superior numbers but never outgeneralled.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the Lost Cause answer: numbers alone beat Lee.",
            feedback:
              "Numbers mattered, but the story was built to keep Lee’s own choices out of view, and the Union’s numbers had not won in the East before 1864.",
          },
          {
            text: "Accept the Britannica’s answer: Grant’s determination alone won.",
            feedback:
              "Determination without resources would not have survived Cold Harbor; the Britannica itself concedes his mistakes.",
          },
          {
            text: "Weigh all three: resources made victory possible, Grant’s use of them made it happen, and the Lost Cause shaped how the answer was told.",
            feedback:
              "The volume’s answer, offered for argument; each witness supplies part of it.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Answer the volume’s question for yourself: why did Grant win? Argue from three positions: a Union veteran in 1885 reading Grant’s memoirs, a former Confederate officer in 1872 hearing Early’s speech, and a historian today with the declarations of secession and Wesley Norris’s testimony in front of them.",
        guidance:
          "Use the lessons of the volume. Rank the four answers, say what evidence each position would choose, and say who paid for the victory you describe.",
      },
      sources: [
        s.grant67,
        s.pryor,
        s.grant24,
        s.ebGrant,
        s.grant55,
        s.leeToDavis,
        s.leeBarksdale,
        s.grant47,
        s.greene,
        s.leeReport,
        s.longstreet,
        s.blackConfederates,
        s.exchangeMyth,
        s.mississippi,
        s.unpleasantLegacy,
        s.caveLife,
        s.grant25,
        s.ebPetersburg,
        s.ebHannibal,
      ],
    },
  ],
};
