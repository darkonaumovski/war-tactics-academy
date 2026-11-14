import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 2. Lessons are added in reviewed batches; docs/LEADERSHIP_EVIDENCE_ALEXANDER.md
// records which sources can carry each one, and docs/SOURCE_AUDIT.md how each
// was read (batch A1 is the pilot).
const arrian = (book: string, chapter: string, label: string): Source => ({
  title: `Arrian, Anabasis of Alexander ${label} (trans. E. J. Chinnock, 1884)`,
  url: `https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_${book}/Chapter_${chapter}`,
  publisher: "Wikisource",
});
const lacus = "LacusCurtius, University of Chicago";
const plutarch = (part: string, label: string): Source => ({
  title: `Plutarch, Life of Alexander ${label} (trans. Bernadotte Perrin, Loeb, 1919)`,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Alexander%2A/${part}.html`,
  publisher: lacus,
});
const diodorus = (part: string, label: string): Source => ({
  title: `Diodorus Siculus, Library of History ${label} (Loeb, vol. VIII, 1963)`,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diodorus_Siculus/${part}%2A.html`,
  publisher: lacus,
});
const livius = "Livius.org (Jona Lendering)";
const s = {
  a1_13: arrian("I", "XIII", "1.13"),
  a1_15: arrian("I", "XV", "1.15"),
  a2_3: arrian("II", "III", "2.3"),
  a2_17: arrian("II", "XVII", "2.17"),
  a4_18: arrian("IV", "XVIII", "4.18"),
  a4_19: arrian("IV", "XIX", "4.19"),
  a5_25: arrian("V", "XXV", "5.25"),
  a5_26: arrian("V", "XXVI", "5.26"),
  a5_27: arrian("V", "XXVII", "5.27"),
  a5_28: arrian("V", "XXVIII", "5.28"),
  a5_29: arrian("V", "XXIX", "5.29"),
  a6_9: arrian("VI", "IX", "6.9"),
  a6_10: arrian("VI", "X", "6.10"),
  a6_11: arrian("VI", "XI", "6.11"),
  a6_12: arrian("VI", "XII", "6.12"),
  a6_13: arrian("VI", "XIII", "6.13"),
  a6_24: arrian("VI", "XXIV", "6.24"),
  a7_9: arrian("VII", "IX", "7.9"),
  a7_29: arrian("VII", "XXIX", "7.29"),
  a1_1: arrian("I", "I", "1.1"),
  a1_7: arrian("I", "VII", "1.7"),
  a1_8: arrian("I", "VIII", "1.8"),
  a1_9: arrian("I", "IX", "1.9"),
  a1_11: arrian("I", "XI", "1.11"),
  a1_18: arrian("I", "XVIII", "1.18"),
  a2_16: arrian("II", "XVI", "2.16"),
  a2_18: arrian("II", "XVIII", "2.18"),
  a2_20: arrian("II", "XX", "2.20"),
  a2_24: arrian("II", "XXIV", "2.24"),
  a2_25: arrian("II", "XXV", "2.25"),
  a2_26: arrian("II", "XXVI", "2.26"),
  a2_27: arrian("II", "XXVII", "2.27"),
  a3_10: arrian("III", "X", "3.10"),
  a3_18: arrian("III", "XVIII", "3.18"),
  a3_26: arrian("III", "XXVI", "3.26"),
  a4_4: arrian("IV", "IV", "4.4"),
  a4_8: arrian("IV", "VIII", "4.8"),
  a5_9: arrian("V", "IX", "5.9"),
  a5_10: arrian("V", "X", "5.10"),
  a5_11: arrian("V", "XI", "5.11"),
  a5_18: arrian("V", "XVIII", "5.18"),
  a5_19: arrian("V", "XIX", "5.19"),
  a6_25: arrian("VI", "XXV", "6.25"),
  plu3: plutarch("3", "1–24.3"),
  plu4: plutarch("4", "24.4–33"),
  plu9: plutarch("9", "62–65"),
  dio17a: diodorus("17A", "17.1–16"),
  dio17b: diodorus("17B", "17.17–39"),
  dio17c: diodorus("17C", "17.40–63"),
  dio17e: diodorus("17E", "17.84–103"),
  livy: {
    title:
      "Livy, The History of Rome, books 9–26 (trans. Cyrus R. Edmonds and D. Spillan)",
    url: "https://www.gutenberg.org/ebooks/10907",
    publisher: "Project Gutenberg",
  },
  polybius2: {
    title: "Polybius, The Histories, book 2 (Loeb, vol. I, 1922)",
    url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/2%2A.html",
    publisher: lacus,
  },
  briant: {
    title: "Pierre Briant, “Alexander the Great” (1985, updated 2018)",
    url: "https://www.iranicaonline.org/articles/alexander-the-great-356-23-bc/",
    publisher: "Encyclopaedia Iranica",
  },
  acre: {
    title: "Siege of Acre (1799) (Adrian Gilbert)",
    url: "https://www.britannica.com/event/Siege-of-Acre-1799",
    publisher: "Encyclopaedia Britannica",
  },
  a3_16: arrian("III", "XVI", "3.16"),
  a3_22: arrian("III", "XXII", "3.22"),
  a3_25: arrian("III", "XXV", "3.25"),
  a4_7: arrian("IV", "VII", "4.7"),
  a4_9: arrian("IV", "IX", "4.9"),
  a4_10: arrian("IV", "X", "4.10"),
  a4_11: arrian("IV", "XI", "4.11"),
  a4_12: arrian("IV", "XII", "4.12"),
  a4_14: arrian("IV", "XIV", "4.14"),
  a7_4: arrian("VII", "IV", "7.4"),
  a7_6: arrian("VII", "VI", "7.6"),
  a7_8: arrian("VII", "VIII", "7.8"),
  a7_10: arrian("VII", "X", "7.10"),
  a7_11: arrian("VII", "XI", "7.11"),
  a7_12: arrian("VII", "XII", "7.12"),
  plu5: plutarch("5", "34–43"),
  plu67: plutarch("6-7", "44–48"),
  plu8: plutarch("8", "49–61"),
  plu10: plutarch("10", "66–77"),
  dio17d: diodorus("17D", "17.64–83"),
  dio17f: diodorus("17F", "17.104–118"),
  polybius11: {
    title: "Polybius, The Histories, book 11 (Loeb, vol. IV, 1925)",
    url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/11%2A.html",
    publisher: lacus,
  },
  majidi: {
    title:
      "Seyed Zein al-Abedin Majidi and Roozbeh Zarrinkoob, Tarn’s Alexander and the Dream of a United World (2021), abstract",
    url: "https://jhss.ut.ac.ir/article_85659_en.html",
    publisher: "Historical Sciences Studies, University of Tehran",
  },
  hogg: {
    title:
      "Michael A. Hogg, Daan van Knippenberg and David E. Rast, The social identity theory of leadership: theoretical origins, research findings, and conceptual developments (2012), abstract",
    url: "https://doi.org/10.1080/10463283.2012.741134",
    publisher: "European Review of Social Psychology",
  },
  park: {
    title:
      "Sun Hyun Park, James D. Westphal and Ithai Stern, Set up for a fall: the insidious effects of flattery and opinion conformity toward corporate leaders (2011), abstract",
    url: "https://doi.org/10.1177/0001839211429102",
    publisher: "Administrative Science Quarterly",
  },
  tyler: {
    title:
      "Tom R. Tyler, Psychological perspectives on legitimacy and legitimation (2006), abstract",
    url: "https://doi.org/10.1146/annurev.psych.57.102904.190038",
    publisher: "Annual Review of Psychology",
  },
  augustus: {
    title: "Augustus (Michael Grant)",
    url: "https://www.britannica.com/biography/Augustus-Roman-emperor",
    publisher: "Encyclopaedia Britannica",
  },
  a6_22: arrian("VI", "XXII", "6.22"),
  a6_23: arrian("VI", "XXIII", "6.23"),
  a6_26: arrian("VI", "XXVI", "6.26"),
  a7_26: arrian("VII", "XXVI", "7.26"),
  a7_27: arrian("VII", "XXVII", "7.27"),
  a7_30: arrian("VII", "XXX", "7.30"),
  dio18a: diodorus("18A", "18.1–25"),
  dio19b: diodorus("19B", "19.10–48"),
  dio19c: diodorus("19C", "19.49–65"),
  dio19f: diodorus("19F", "19.102–110"),
  diary323: {
    title:
      "A contemporary account of the death of Alexander (Babylonian Astronomical Diary for 323 BCE)",
    url: "https://www.livius.org/sources/content/oriental-varia/a-contemporary-account-of-the-death-of-alexander/",
    publisher: livius,
  },
  sherman: {
    title: "Memoirs of General William T. Sherman (1875)",
    url: "https://www.gutenberg.org/ebooks/4361",
    publisher: "Project Gutenberg",
  },
  ieyasu: {
    title: "Tokugawa Ieyasu (Conrad D. Totman)",
    url: "https://www.britannica.com/biography/Tokugawa-Ieyasu",
    publisher: "Encyclopaedia Britannica",
  },
  buehler: {
    title:
      "Roger Buehler, Dale Griffin and Michael Ross, Exploring the “planning fallacy”: why people underestimate their task completion times (1994), abstract",
    url: "https://doi.org/10.1037/0022-3514.67.3.366",
    publisher: "Journal of Personality and Social Psychology",
  },
  zoroastrian: {
    title:
      "Philip G. Kreyenbroek and Firoze M. P. Kotwal, “Alexander the Great ii. In Zoroastrian tradition” (2006)",
    url: "https://www.iranicaonline.org/articles/alexander-the-great-ii/",
    publisher: "Encyclopaedia Iranica",
  },
  eskandarNama: {
    title: "William L. Hanaway, “Eskandar-nāma” (1998)",
    url: "https://www.iranicaonline.org/articles/eskandar-nama/",
    publisher: "Encyclopaedia Iranica",
  },
  parke: {
    title:
      "H. W. Parke, The Massacre of the Branchidae (1985), abstract extract",
    url: "https://www.cambridge.org/core/journals/journal-of-hellenic-studies/article/abs/massacre-of-the-branchidae/73F7B2FF7A3FB16E148F12940820E597",
    publisher: "The Journal of Hellenic Studies",
  },
  nemeth: {
    title:
      "Charlan Jeanne Nemeth, Keith Brown and John Rogers, Devil’s advocate versus authentic dissent: stimulating quantity and quality (2001), abstract",
    url: "https://doi.org/10.1002/ejsp.58",
    publisher: "European Journal of Social Psychology",
  },
  vulgate: {
    title: "Alexander the Great: the vulgate",
    url: "https://www.livius.org/articles/person/alexander-the-great/alexander-3.2-the-vulgate/",
    publisher: livius,
  },
  arrianSources: {
    title: "Alexander the Great: Arrian’s sources",
    url: "https://www.livius.org/articles/person/alexander-the-great/alexander-3.3-arrians-sources/",
    publisher: livius,
  },
  diary: {
    title:
      "A contemporary account of the battle of Gaugamela (Babylonian Astronomical Diary for 331 BCE)",
    url: "https://www.livius.org/sources/content/oriental-varia/a-contemporary-account-of-the-battle-of-gaugamela/",
    publisher: livius,
  },
  badianDarius: {
    title: "Ernst Badian, “Darius v. Darius III” (1994)",
    url: "https://www.iranicaonline.org/articles/darius-v/",
    publisher: "Encyclopaedia Iranica",
  },
  houdecek: {
    title:
      "Bulletins de la Grande Armée commandés par Napoléon (François Houdecek, 2019)",
    url: "https://www.napoleon.org/histoire-des-2-empires/objets/bulletin-de-la-grande-armee",
    publisher: "Fondation Napoléon",
  },
  ducoulombier: {
    title:
      "Romain Ducoulombier, Une nouvelle histoire des mutineries de 1917 (2010), a review of André Loez, 14-18. Les refus de la guerre, in French",
    url: "https://laviedesidees.fr/Une-nouvelle-histoire-des",
    publisher: "La Vie des idées",
  },
  schynsBligh: {
    title:
      "Birgit Schyns and Michelle C. Bligh, Introduction to the special issue on the romance of leadership (2007), abstract",
    url: "https://doi.org/10.1111/j.1464-0597.2007.00301.x",
    publisher: "Applied Psychology",
  },
  hammond: {
    title:
      "Michelle M. Hammond, Birgit Schyns, Gretchen Vogelgesang Lester and Rachel Clapp-Smith, The romance of leadership: rekindling the fire through replication of Meindl and Ehrlich (2021), abstract",
    url: "https://doi.org/10.1016/j.leaqua.2021.101538",
    publisher: "The Leadership Quarterly",
  },
  hermalin: {
    title:
      "Benjamin E. Hermalin, Toward an economic theory of leadership: leading by example (working paper, 1996), abstract",
    url: "https://ideas.repec.org/p/wop/calbha/_006.html",
    publisher: "RePEc IDEAS",
  },
  morrison: {
    title:
      "Elizabeth Wolfe Morrison, Employee voice and silence (2014), abstract",
    url: "https://doi.org/10.1146/annurev-orgpsych-031413-091328",
    publisher:
      "Annual Review of Organizational Psychology and Organizational Behavior",
  },
} satisfies Record<string, Source>;

export const alexanderVolume: LeadershipVolume = {
  commanderSlug: "alexander-the-great",
  title: "Leadership Lessons from Alexander the Great",
  summary:
    "What a person who leads others can take from Alexander’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Alexander led his father’s army from the Hellespont into India, and there it refused to go further. Two years later, at Opis, it mutinied again. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. Almost nothing written in his lifetime survives beyond a few inscriptions and Babylonian records; the narratives were written centuries later from accounts now lost, so every lesson begins with who is speaking. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did his army stop following him, or did he stop leading it?",
  parts: [
    "Orientation",
    "The instrument",
    "The consent of the army",
    "Winning and ruling",
    "What remains",
  ],
  lessons: [
    {
      slug: "how-to-read-alexander",
      title: "Learning from a man whose record is lost",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a leader’s record was written long afterwards from accounts now lost, a lesson drawn from it is worth only as much as the chain of witnesses behind each episode.",
      inBrief: {
        strength:
          "Companions and a court historian wrote up his campaigns, and every later account depends on them.",
        shadow:
          "Their books are lost; what survives was written centuries later by authors with lessons of their own to teach.",
      },
      moment: {
        text: "At Gordium in 333 BCE Alexander went up to the citadel to see an old wagon whose yoke was tied with a cord of cornel bark. Whoever loosened it, the story ran, would rule Asia. Arrian, writing more than four centuries later, gives two versions. Some say Alexander could find no way to loosen the cord and cut it through with his sword. Aristobulus, who served on the campaign, says he pulled out the wooden pin that held the cord to the wagon-pole and drew the yoke away. Arrian then says plainly: “How Alexander performed the feat in connection with this cord, I cannot affirm with confidence.” Plutarch knows the same two versions and says most writers prefer the sword. The cut knot became the version everyone knows. The one ancient historian who weighed it would not vouch for it.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "2.3" },
          { source: 1, locator: "Alexander 18" },
        ],
      },
      episodes: [
        {
          title: "Two crossings of the Granicus",
          text: "In Arrian, Parmenion advises Alexander to camp on the bank of the Granicus in 334 and cross at daybreak: the river is deep in places, the far bank steep, and the Persian cavalry will catch the army as it climbs out in broken order. Alexander answers that after crossing the Hellespont so easily it would be a disgrace if this brook barred his way, and attacks at once. Plutarch tells the same story and adds that he seemed to be acting like a frenzied and foolish commander rather than a wise one. Diodorus tells a different one. Alexander camps opposite the enemy, the Persians make no move, and at dawn he brings the army across before they can stop him. Even the duel that followed differs: the Loeb editors of Diodorus note that Arrian, Plutarch and Diodorus disagree about which Persian struck Alexander and which one Cleitus cut down.",
          evidence: "uncertainty",
          refs: [
            { source: 2, locator: "1.13" },
            { source: 1, locator: "Alexander 16" },
            { source: 3, locator: "17.19–20 and note 19" },
          ],
          battleSlugs: ["granicus"],
        },
        {
          title: "A Babylonian witness to Gaugamela",
          text: "One account of Gaugamela was written in the weeks that followed by someone with no interest in Greek glory: a Babylonian astronomer keeping the diary of omens, prices and events at the Esagila temple. It records a total eclipse of the moon, then panic in the camp before the king, then a heavy defeat on the day of battle. It says the king’s troops deserted him and fled. It records Alexander’s message to Babylon, “Into your houses I shall not enter”, and his entry into the city as “king of the world”. The Greek writers say Darius fled from his army. The diary, as Livius translates it, has the army leave the king. The note on the page says this has embarrassed classicists, and that of the Greek authors only Diodorus describes Darius as a fighter.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: ["gaugamela"],
        },
        {
          title: "Two families of writers",
          text: "The narratives that survive were written centuries after Alexander’s death: Diodorus in the first century BCE, Curtius in the first century CE, Arrian in the second. Lendering sorts them into two families. The vulgate goes back to Cleitarchus, who wrote in Alexandria a generation later: vivid, entertaining, often wrong, with a dark portrait of the king, and preserved in Diodorus and Curtius. Arrian, a Greek in Roman service in the second century CE, followed Ptolemy and Aristobulus, who had both served on the campaign. Ptolemy later ruled Egypt as king, exaggerated his own part, and ignored his rival Antigonus. Arrian trusted him because, he said, it is more disgraceful for a king to lie, a reason Lendering says few modern scholars will find impressive. Lendering still calls the vulgate certainly not a bad source: some details, such as the crucifixions at Tyre, are known only from it.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 6 }],
          battleSlugs: [],
          campaignSlugs: ["macedonian-invasion-of-persia"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, in the second century CE",
          stake:
            "An admirer, writing under Rome from the memoirs of two companions, one of whom became a king.",
          says: "He names his sources, sets versions side by side and admits doubt. He also explains away faults: Alexander’s anger and Persian manners were no wonder given “his youth and his uninterrupted career of good fortune”.",
          refs: [
            { source: 0, locator: "2.3" },
            { source: 7, locator: "7.29" },
          ],
        },
        {
          who: "Ptolemy, as Arrian reports him",
          stake:
            "A companion who later ruled Egypt and had reasons to shape his own role.",
          says: "Some writers had Ptolemy save Alexander’s life in India and earn the name Soter for it. Ptolemy himself, Arrian notes, recorded that he was not even present, which Arrian calls the greatest error in the histories of Alexander.",
          refs: [{ source: 8, locator: "6.11" }, { source: 6 }],
        },
        {
          who: "Plutarch, around 100 CE",
          stake:
            "A moral biographer looking for character, not a historian of campaigns.",
          says: "“It is not Histories that I am writing, but Lives”: a phrase or a jest, he says, can reveal more of a man than battles.",
          refs: [{ source: 1, locator: "Alexander 1" }],
        },
        {
          who: "Diodorus, in the first century BCE",
          stake:
            "A universal historian following Cleitarchus, the vulgate’s source.",
          says: "At the Granicus the army camps first and crosses at dawn before the Persians can stop it.",
          refs: [{ source: 3, locator: "17.19" }, { source: 5 }],
        },
        {
          who: "A Babylonian astronomer in 331 BCE",
          stake:
            "Kept a temple record of the sky, prices and events, and had no part in the Greek argument.",
          says: "The king’s troops deserted him; Alexander entered Babylon as “king of the world”.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge a decision by what could be known at the time. That rule needs an agreed decision to judge. At the Granicus, Parmenion’s case as Arrian gives it is a sound one: a deep river, steep banks and enemy cavalry waiting to strike a column as it climbs out. If Arrian is right, Alexander chose speed and moral effect against that risk. If Diodorus is right, the famous choice never happened and the army crossed unopposed at dawn. Before asking whether a decision was wise, ask whether the sources agree that it was made.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "1.13" },
            { source: 3, locator: "17.19" },
          ],
        },
        {
          text: "The speeches need the same caution. Arrian gives Alexander and his officers long speeches in direct words: before the siege of Tyre, at the Hyphasis and at Opis. Ancient historians composed such speeches to show what they thought the speaker would have said. They are evidence of how a second-century writer understood the situation, and the later lessons treat them that way: never as Alexander’s words.",
          evidence: "interpretation",
          refs: [
            { source: 13, locator: "2.17" },
            { source: 9, locator: "5.25" },
            { source: 14, locator: "7.9" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "The romance of leadership, now contested",
          base: "contested",
          text: "The Napoleon volume used the romance of leadership, the tendency Schyns and Bligh describe as attributing responsibility for an organisation’s performance to its leaders while disregarding other factors. A history written to show one man’s character would be expected to do exactly that. The finding is less secure than it looked. Hammond, Schyns, Lester and Clapp-Smith ran four studies replicating Meindl and Ehrlich’s early experiment, and report that together they do not support the finding that organisations are viewed more favourably when outcomes are attributed to leadership. So this volume does not lean on a bias in readers. It leans on something visible in the texts: Arrian and Plutarch tell us they are writing about a man, and they choose their stories for what those stories say about him.",
          evidence: "interpretation",
          refs: [{ source: 10 }, { source: 11 }],
          limit:
            "Only the abstracts were read. The studies concern modern evaluators of companies, and cannot say how ancient writers or readers attributed success.",
        },
      ],
      shadow: {
        text: "The tradition that made Alexander famous also supplies the verdict against him, and it arrives ready-made. Ancient moralists liked the story of a man corrupted by success. Arrian excuses Alexander’s anger by his youth and his uninterrupted good fortune; others make the same pattern a charge. When later lessons ask whether Alexander changed, they have to remember that change was what these authors expected to find. A frame the sources bring with them is not evidence that it fits.",
        evidence: "interpretation",
        refs: [{ source: 7, locator: "7.29" }, { source: 5 }],
      },
      counterCase: {
        text: "Napoleon’s record poses the opposite problem, and the first lesson of his volume deals with it. He dictated his bulletins, staff officers worked them up, and they magnified successes and played down setbacks and losses. In 1811 he ordered the collected bulletins reprinted with the things recognised as false taken out, to leave an official record, as had been done for Marengo. The army gave the bulletins a saying, “menteur comme un bulletin”. Having the leader’s own words in abundance did not make the record more reliable. For both men the reader ends in the same place, weighing witnesses who each had a stake.",
        evidence: "interpretation",
        refs: [{ source: 12 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["marengo"],
      },
      cost: {
        text: "The way the record counts the dead is itself a warning. After the Granicus, Plutarch reports a vast Persian toll and, citing Aristobulus, a tiny number of Macedonian dead. Numbers that served a victor’s story are not used in these lessons, but the habit they show stays in view: the people who paid for a battle could vanish from its account.",
        evidence: "interpretation",
        refs: [{ source: 1, locator: "Alexander 16" }],
      },
      transfer: {
        holdsWhen: [
          "The account of a success was written after the fact by people who served the person it praises.",
          "Two independent accounts of the same event survive and can be compared.",
        ],
        failsWhen: [
          "Every source is dismissed for having a stake. Arrian names his doubts, and that makes him more useful, not less.",
          "Only one account survives. Then the honest course is to say what cannot be known.",
        ],
        questions: [
          "Which story about your organisation’s founding is told most often, and who first told it?",
          "Where two people remember the same decision differently, what would settle it?",
          "Which of the speeches you remember were written afterwards?",
        ],
      },
      bearsOn:
        "Both answers to the volume’s question come to us through these authors. Arrian puts the army’s case in a speech he wrote for Coenus, and the charge that Alexander changed suits a moral pattern the ancient writers liked. Each lesson that follows asks which family of sources an episode comes from before it counts it as evidence for either side.",
      questions: [
        {
          prompt:
            "What does Arrian say about whether Alexander cut the Gordian knot?",
          choices: [
            "That he cut it, as all writers agree.",
            "That Aristobulus says he pulled out the pin, and that he himself cannot affirm with confidence how it was done.",
            "That the story was invented by Plutarch.",
          ],
          answer: 1,
          explanation:
            "Arrian gives both versions and declines to choose. The sword became famous anyway.",
        },
        {
          prompt:
            "On what point does the Babylonian Astronomical Diary differ from the Greek accounts of Gaugamela?",
          choices: [
            "It says the king’s troops deserted him, where the Greek writers have Darius flee his army.",
            "It places the battle in a different year.",
            "It says Alexander was defeated.",
          ],
          answer: 0,
          explanation:
            "The diary, as Livius translates it, has the troops leave the king. Livius notes that only Diodorus among the Greek authors shows Darius as a fighter.",
        },
        {
          prompt:
            "Why should a speech in Arrian not be quoted as Alexander’s words?",
          choices: [
            "Because Arrian wrote in Latin.",
            "Because ancient historians composed speeches to show what they thought a speaker would have said.",
            "Because Alexander never addressed his officers.",
          ],
          answer: 1,
          explanation:
            "A speech is evidence of what the historian found plausible, centuries later.",
        },
      ],
      sourceCheck: {
        question: "How did Alexander’s army cross the Granicus in 334 BCE?",
        witnesses: [
          {
            label: "Arrian, from Ptolemy and Aristobulus",
            claim:
              "Parmenion urged him to wait for daybreak; Alexander refused and attacked across the river at once.",
          },
          {
            label: "Diodorus, from Cleitarchus",
            claim:
              "Alexander camped opposite the Persians and crossed at dawn before they could stop him.",
          },
        ],
        prompt: "How should a historian use these two accounts?",
        options: [
          {
            text: "Prefer Arrian, because modern historians usually follow him.",
            feedback:
              "His sources were on the campaign, which counts. But Ptolemy shaped his own role, and Plutarch’s agreement may reflect a shared tradition rather than independent proof.",
          },
          {
            text: "Prefer Diodorus, because the dawn crossing is the more prudent plan.",
            feedback:
              "Choosing the version that seems more sensible is a way of writing the history we would prefer.",
          },
          {
            text: "Record the disagreement, and avoid building a lesson about boldness on an episode whose course is disputed.",
            feedback:
              "The disagreement is real and old. A lesson can use it to teach how the record works, but not as proof of a trait.",
            best: true,
          },
        ],
        battleSlug: "granicus",
      },
      seminar: {
        prompt:
          "Pick one story about Alexander you knew before this lesson. Which family of sources does it come from, and who first told it?",
        guidance:
          "Ask whether it is in Arrian, the vulgate or Plutarch, whether any source names its witness, and what the teller wanted the story to show. The Gordian knot is the model.",
      },
      sources: [
        s.a2_3,
        s.plu3,
        s.a1_13,
        s.dio17b,
        s.diary,
        s.vulgate,
        s.arrianSources,
        s.a7_29,
        s.a6_11,
        s.a5_25,
        s.schynsBligh,
        s.hammond,
        s.houdecek,
        s.a2_17,
        s.a7_9,
      ],
    },
    {
      slug: "a-borrowed-army",
      title: "A borrowed army: taking over his father’s men",
      part: "The instrument",
      themes: ["organisation", "succession"],
      claim:
        "When a young leader takes over a proven organisation, the first test is whether its senior people will serve, and the price of their service is often their independence.",
      inBrief: {
        strength:
          "He kept Philip’s army and its generals, and told the Macedonians the king had changed only in name.",
        shadow:
          "The inheritance was secured by killing a rival, and two of Philip’s men who served him would later die at his order or by his hand.",
      },
      moment: {
        text: "Philip II was murdered in 336 BCE, on the eve of his war against Persia. Diodorus says his son, about twenty and for that reason not uniformly respected, established his authority far more firmly than anyone thought possible. He punished the murderers and buried his father. Then he won over the Macedonians with tactful statements: the king, he told them, was changed only in name, and the state would be run on principles no less effective than his father’s. He kept the soldiers busy with weapons training and drill. And he decided to kill Attalus, who shared the command of the advance force in Asia with Parmenion and had made himself popular with the troops.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "1.1 and note" },
          { source: 0, locator: "17.2" },
        ],
      },
      episodes: [
        {
          title: "Securing the inheritance",
          text: "Arrian’s first chapter has Alexander march into the Peloponnese as soon as he held power and ask the Greeks for the supreme command against Persia that they had already given his father; all but the Spartans agreed. In Asia, Diodorus says, Attalus first agreed with the Athenians to act against Alexander, then changed his mind and sent Alexander a letter from Demosthenes to prove his loyalty. Alexander’s agent Hecataeus, following his orders literally, had him killed by treachery. After that, Diodorus writes, the Macedonian forces in Asia were free from any incitement to revolt, Attalus being dead and Parmenion completely devoted to Alexander.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "1.1" },
            { source: 0, locator: "17.5" },
          ],
          battleSlugs: [],
        },
        {
          title: "Thebes, and who gave the order",
          text: "In 335 Thebes revolted on a rumour that Alexander had been killed in Illyria. He reached Boeotia so fast that the rebels insisted it must be another Alexander. Arrian says he camped outside the city to give the Thebans time to repent. Then, on Ptolemy’s account, Perdiccas attacked the Theban stockade without waiting for the signal, Amyntas followed him, and Alexander committed the rest of the army so that they would not be cut off. Diodorus has Alexander order the decisive move himself, sending Perdiccas to seize an unguarded gate. Chinnock’s note of 1884 suggests that Ptolemy, Arrian’s source, wished to clear Alexander of the city’s destruction. In Arrian the allies, not the king, voted to raze Thebes.",
          evidence: "uncertainty",
          refs: [
            { source: 11, locator: "1.7" },
            { source: 2, locator: "1.8 and note" },
            { source: 3, locator: "1.9" },
            { source: 0, locator: "17.12" },
          ],
          battleSlugs: ["thebes-335-bce"],
        },
        {
          title: "Philip’s generals in Asia",
          text: "Before the crossing, Diodorus says, Antipater and Parmenion advised Alexander to produce an heir before so great an enterprise. He refused: it would be a disgrace, he said, for one appointed by Greece to lead the war, who had inherited his father’s invincible forces, to sit at home awaiting children. In 334 he left Antipater in charge of Macedonia and Greece and gave Parmenion the task of ferrying the cavalry and most of the infantry across the Hellespont. At Issus, Badian writes, Parmenion, the most experienced Macedonian commander, held back the Persian attack on the left while Alexander routed the king. Arrian says Parmenion was held in very great respect by Alexander and by the whole army.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "17.16" },
            { source: 5, locator: "1.11" },
            { source: 6 },
            { source: 7, locator: "3.26" },
          ],
          battleSlugs: ["issus"],
        },
      ],
      witnesses: [
        {
          who: "Diodorus, from the vulgate",
          stake:
            "Writes three centuries later, following Cleitarchus, and admires the young king’s firmness.",
          says: "Alexander established his authority far more firmly than anyone supposed possible, and afterwards Parmenion was completely devoted to him.",
          refs: [{ source: 0, locator: "17.2, 17.5" }],
        },
        {
          who: "Ptolemy, as Arrian reports him",
          stake:
            "Served under Alexander and published his memoirs decades later, after he had made himself king in Egypt.",
          says: "At Thebes Perdiccas attacked without waiting for the signal, and Alexander followed to save him.",
          refs: [{ source: 2, locator: "1.8" }, { source: 12 }],
        },
        {
          who: "E. J. Chinnock, translating Arrian in 1884",
          stake: "A Victorian editor comparing the ancient accounts.",
          says: "It is probable that Ptolemy wished to exonerate Alexander from the guilt of destroying Thebes.",
          refs: [{ source: 2, locator: "note to 1.8" }],
        },
        {
          who: "Plutarch",
          stake: "A moral biographer interested in remorse.",
          says: "In later times the calamity of the Thebans often gave Alexander remorse and made him milder towards many people.",
          refs: [{ source: 4, locator: "Alexander 13" }],
        },
      ],
      strategist: [
        {
          text: "The order of business is the strategist’s first evidence. Diodorus has Alexander secure the army before anything else, with words of continuity and with drill, then remove the one commander who might rally it against him, then turn to the Greeks and the frontier. Arrian has him campaign in Thrace and Illyria before crossing to Asia, so as not to leave restless neighbours behind him. A new ruler of a working organisation had to settle who it obeyed before he could choose what to do with it.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "17.2–3" },
            { source: 1, locator: "1.1" },
          ],
        },
        {
          text: "Antipater and Parmenion’s advice deserves to be judged as it stood in 334. A king with no heir who intends to lead every battle himself is a risk to everything he rules, and two men who had served his father said so. Alexander answered with honour and momentum. The strategist need not decide who was right to see that the generals were pointing at the weakness the volume returns to at the Malli town and at Babylon in 323.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "17.16" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Napoleon volume’s lesson on inheritance used research on how observers credit leaders for systems they inherited. That finding is now contested, as the orientation lesson of this volume explains, and no research on how senior staff respond to a young successor was read for this lesson. The behaviour described here, loyalty secured by continuity, by reward and by removing a rival, is left as history.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological source is offered, and the lesson draws no psychological conclusion.",
        },
      ],
      shadow: {
        text: "The inheritance was cleared by violence before the army left Macedonia, and the cost of serving the new king was learned over time. Ptolemy’s Thebes shows a quieter cost: when an officer acts on his own, the record can later give him the blame. The two men closest to Philip’s army in this lesson’s story met harder ends. Parmenion was put to death after his son Philotas was convicted of concealing a plot, and Cleitus, who saved Alexander’s life at the Granicus, was killed by the king himself at a banquet. Later lessons take up both.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "17.5" },
          { source: 2, locator: "1.8" },
          { source: 7, locator: "3.26" },
          { source: 10, locator: "4.8" },
        ],
      },
      counterCase: {
        text: "Hannibal took over his father’s army in Spain by a different road. Livy says Hasdrubal sent for him as a youth, and that the veterans imagined Hamilcar was restored to them in his looks; Hannibal then made sure his father counted for less and less in winning their esteem, and served three years under Hasdrubal before the army hailed him as general. Polybius says only that the Carthaginians appointed him, young as he was, for the shrewdness and courage he had shown. Livy is a hostile witness who sets Hannibal’s virtues against “inhuman cruelty” and “Punic perfidy”, yet even he shows an apprenticeship that Alexander, crowned in a crisis, never had.",
        evidence: "interpretation",
        refs: [
          { source: 8, locator: "21.3–4" },
          { source: 9, locator: "2.36" },
        ],
        commanderSlug: "hannibal-barca",
        battleSlugs: [],
      },
      cost: {
        text: "Thebes paid for the new king’s first test. Arrian says the city was razed and its territory divided, and its women and children, with the men who survived, were sold into slavery; only priests, guest-friends of the Macedonian kings and the house of the poet Pindar were spared. Diodorus describes boys and girls dragged into captivity calling for their mothers.",
        evidence: "fact",
        refs: [
          { source: 3, locator: "1.9" },
          { source: 0, locator: "17.13" },
        ],
      },
      transfer: {
        holdsWhen: [
          "You inherit people who were loyal to someone else and who know the work better than you.",
          "Continuity can be promised honestly while you learn the organisation.",
        ],
        failsWhen: [
          "Loyalty is secured by removing anyone who might be a rival, so the rest learn that disagreement is dangerous.",
          "The record of a hard first decision is written by those who need it to look like someone else’s.",
        ],
        questions: [
          "Who in your organisation served your predecessor, and what would they need from you to serve you?",
          "What did you promise would not change, and was it true?",
          "When a first decision went badly, whose name did the account attach to it?",
        ],
      },
      bearsOn:
        "In 334 the army was Philip’s, its senior commanders were Philip’s men, and the new king had promised that only the name had changed. Any answer to whether the army stopped following Alexander has to start from what it had agreed to follow. Plutarch adds that Alexander later blamed the Macedonians’ refusal in India on the anger of Dionysus, which was a way of not blaming himself.",
      questions: [
        {
          prompt:
            "According to Diodorus, what did Alexander tell the Macedonians on his accession?",
          choices: [
            "That he would lead them at once into Asia.",
            "That the king was changed only in name.",
            "That Parmenion would rule beside him.",
          ],
          answer: 1,
          explanation:
            "Continuity was the first message to an army that had been Philip’s.",
        },
        {
          prompt:
            "On Ptolemy’s account in Arrian, how did the assault on Thebes begin?",
          choices: [
            "Perdiccas attacked without waiting for the signal, and Alexander followed to support him.",
            "Alexander ordered an immediate storm on arrival.",
            "The Thebans opened their gates.",
          ],
          answer: 0,
          explanation:
            "Diodorus has Alexander order it. Chinnock suspected Ptolemy of shielding the king.",
        },
        {
          prompt:
            "What advice did Antipater and Parmenion give before the crossing to Asia, according to Diodorus?",
          choices: [
            "To wait for the Persian fleet to disperse.",
            "To produce an heir before so great an enterprise.",
            "To leave Parmenion in command of Macedonia.",
          ],
          answer: 1,
          explanation:
            "Alexander refused, saying it would be a disgrace to wait for children with his father’s army ready.",
        },
      ],
      sourceCheck: {
        question: "Who began the assault that destroyed Thebes in 335 BCE?",
        witnesses: [
          {
            label: "Arrian, citing Ptolemy",
            claim:
              "Perdiccas attacked the stockade without waiting for Alexander’s signal; Alexander then committed the army to support him.",
          },
          {
            label: "Diodorus",
            claim:
              "Seeing his Macedonians tiring, Alexander sent in his reserve and then sent Perdiccas to seize a gate the guards had left.",
          },
        ],
        prompt: "How should a historian weigh these accounts?",
        options: [
          {
            text: "Trust Ptolemy, because he was there.",
            feedback:
              "Being there gives him knowledge; being Alexander’s companion and later a king gives him a reason to move the decision away from his master.",
          },
          {
            text: "Note that Ptolemy’s version shifts responsibility from Alexander to an officer, and that the two accounts cannot both be right about who gave the order.",
            feedback:
              "Neither can be proved. The direction of each account’s convenience is itself evidence.",
            best: true,
          },
          {
            text: "Dismiss both, since neither author was neutral.",
            feedback:
              "They agree on the outcome and on Perdiccas’s part. They differ on whose decision it was.",
          },
        ],
      },
      seminar: {
        prompt:
          "Alexander told the army that only the name of the king had changed. When is promising continuity the right first move for a successor, and when does it store up trouble?",
        guidance:
          "Compare his accession with Hannibal’s years under Hasdrubal, and look ahead to Opis, where the veterans complained that the king they followed had become someone else.",
      },
      sources: [
        s.dio17a,
        s.a1_1,
        s.a1_8,
        s.a1_9,
        s.plu3,
        s.a1_11,
        s.badianDarius,
        s.a3_26,
        s.livy,
        s.polybius2,
        s.a4_8,
        s.a1_7,
        s.arrianSources,
      ],
    },
    {
      slug: "the-king-in-the-front-rank",
      title: "The king in the front rank",
      part: "The instrument",
      themes: ["motivation", "judgement"],
      claim:
        "When followers see a leader share the risks they run, the bond can carry them far, and the more that bond rests on one life, the more the whole enterprise is staked on it.",
      inBrief: {
        strength:
          "He fought in the front rank and led assaults himself, and his army saw it.",
        shadow:
          "At the Malli town the bond and the single point of failure were the same thing.",
      },
      moment: {
        text: "In 325 BCE, attacking a town of the Malli in India, Alexander thought the men with the ladders too slow. In Arrian’s account he snatched a ladder, climbed it under his shield, cleared the battlement and stood on the wall alone, a target for the towers on either side. His guards, anxious for him, crowded onto the same ladder and broke it. Arrian gives his reasoning: if he stayed on the wall he would be in danger without achieving anything; if he leapt down inside he might terrify the defenders, and if not, he would at least die not ignobly, after deeds worth remembering. He leapt down into the citadel.",
        evidence: "fact",
        refs: [{ source: 0, locator: "6.9" }],
      },
      episodes: [
        {
          title: "The Granicus",
          text: "Plutarch says Alexander was conspicuous by his shield and the great white plumes of his helmet, and that many rushed at him. In Arrian’s account Alexander unhorsed Darius’s son-in-law with a borrowed spear; Rhoesaces broke off part of his helmet with a scimitar; and as Spithridates raised his scimitar from behind, Cleitus, son of Dropidas, cut off his arm. Diodorus has a slight scalp wound, and the names and order of the attackers differ in each account. All three agree on the essentials: the king fought in the thick of the cavalry battle and owed his life to a companion.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "1.15" },
            { source: 2, locator: "Alexander 16" },
            { source: 3, locator: "17.20" },
          ],
          battleSlugs: ["granicus"],
        },
        {
          title: "The winged men",
          text: "In 327 the defenders of the Sogdian Rock laughed at the offer of terms and told Alexander to find winged soldiers, since they feared no other men. He proclaimed rewards for the first men to reach the summit, from twelve talents down to three hundred darics. The men who had practised scaling rocks in sieges climbed at night with tent pegs and ropes. Some fell, and their bodies were never found in the snow. At dawn the rest waved linen flags from the top, a herald shouted that the winged men had been found, and the defenders surrendered. Here the king did not climb. He proclaimed a prize, and others ran the risk.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "4.18" },
            { source: 5, locator: "4.19" },
          ],
          battleSlugs: ["sogdian-rock"],
        },
        {
          title: "The camp that thought him dead",
          text: "Inside the Malli citadel an arrow went through Alexander’s breastplate into his chest; Ptolemy, Arrian says, reports that air came out of the wound with the blood. Peucestas held the shield brought from Troy over him until the Macedonians broke in. The first news to reach the main camp was that he had died. Arrian describes lament, then despair. Many officers seemed equal in rank and merit, so no one knew who would lead; the army was surrounded by warlike peoples and impassable rivers. When word came that he lived, most did not believe it, and they suspected his letter was forged by his bodyguards and generals. Diodorus adds that Greek settlers in Bactria and Sogdiana, hearing he was dead, rose against the Macedonians. Only when Alexander had himself carried downriver, held up his hand from the ship and then mounted his horse did the army cheer.",
          evidence: "fact",
          refs: [
            { source: 6, locator: "6.10" },
            { source: 7, locator: "6.12" },
            { source: 8, locator: "6.13" },
            { source: 9, locator: "17.99" },
          ],
          battleSlugs: ["malli-town-325-bce"],
          campaignSlugs: ["indian-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, citing Ptolemy for the wound",
          stake:
            "An admirer who still judges, writing from memoirs of men who served beside the king.",
          says: "Alexander lacked the self-control to keep away from danger, “through his impetuosity in battle and his passion for glory”, like men mastered by any other pleasure.",
          refs: [{ source: 8, locator: "6.13" }],
        },
        {
          who: "Nearchus, as Arrian reports him",
          stake:
            "Alexander’s admiral and friend, writing his own memoir after the campaign.",
          says: "Friends reproached the king for exposing himself in front of the army, saying that was the duty of a private soldier, not of the general. Alexander was offended. Arrian thinks he knew they were right.",
          refs: [{ source: 8, locator: "6.13" }],
        },
        {
          who: "Plutarch",
          stake:
            "A moral biographer who admires courage and looks for its excess.",
          says: "Charging across the Granicus, Alexander seemed to be acting like a frenzied and foolish commander rather than a wise one.",
          refs: [{ source: 2, locator: "Alexander 16" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "Follows a tradition that enjoyed the dramatic scene.",
          says: "At the Malli town Alexander thought it out of keeping with his record of success to climb down without achieving anything, and leapt inside.",
          refs: [{ source: 9, locator: "17.99" }],
        },
        {
          who: "Ernst Badian, in the Encyclopaedia Iranica",
          stake:
            "A modern historian reading the Greek sources against themselves, from the Persian side.",
          says: "The Greek historians were quick to charge Darius with cowardice, though bravery was his best-attested quality.",
          refs: [{ source: 10 }],
        },
      ],
      strategist: [
        {
          text: "Personal risk bought real things. A king in the first wave at the Granicus could see the decisive point, act at once, and draw men after him across a river that Parmenion thought too dangerous. The cost was also knowable before the battle. The army had no settled second in command: when the camp later thought him dead, many officers seemed equal in rank, and no one could say who would lead. A commander who stakes himself in every assault is staking the expedition too, and the arrangement depends on his luck holding.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "1.15" },
            { source: 7, locator: "6.12" },
          ],
        },
        {
          text: "At the Malli town the example worked against itself. The guards broke the ladders because they rushed to follow him, and the wall he took was a minor objective. Arrian’s account of his reasoning, to terrify the defenders or die after deeds worth remembering, is Arrian’s reconstruction, but even in Arrian the calculation is about glory more than about the campaign. The Sogdian Rock shows another way to the same end: a public prize, specialists who had practised climbing, and a plan to make the defenders believe the climbers were more numerous than they were.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "6.9" },
            { source: 6, locator: "6.10" },
            { source: 5, locator: "4.19" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Leading by example as a signal",
          base: "theory",
          text: "Hermalin’s economic theory begins from a distinction: leadership is not authority, because following a leader is voluntary rather than coerced. His working paper asks how a leader brings rational followers to follow when the leader may have reasons to mislead them; its title names the answer it explores, leading by example. Read that way, a leader’s own risk is a signal that cannot be faked cheaply: words about the danger being worth it cost nothing, but standing in the front rank does. The Napoleon volume read presence through social identity. This reading adds that example persuades because it is costly, which also explains why it cannot be delegated.",
          evidence: "interpretation",
          refs: [{ source: 11 }],
          limit:
            "Only the abstract was read, and it is a formal model of rational followers in organisations. It cannot measure what Macedonian soldiers felt.",
        },
      ],
      shadow: {
        text: "The Malli town shows the bond and its weakness as one thing. Because the army followed the man, the report of his death left it without a leader it could agree on, afraid of the peoples around it, and unwilling to believe even his own letter. Settlers far away took the same report as a signal to rebel. His friends told him, in Nearchus’s account, that he was doing a private soldier’s duty. Arrian’s verdict is that Alexander knew they were right and could not stop.",
        evidence: "interpretation",
        refs: [
          { source: 7, locator: "6.12" },
          { source: 8, locator: "6.13" },
          { source: 9, locator: "17.99" },
        ],
      },
      counterCase: {
        text: "Darius III left the field at Issus and again at Gaugamela, and the Greek tradition made him a coward. Badian argues that this misreads him. Bravery, he writes, was Darius’s best-attested quality; at Issus he more probably understood that the only chance of saving the kingdom lay in saving himself, because if he died there was no plausible successor who could command allegiance and lead resistance. The Babylonian diary even has his troops desert him at Gaugamela, not the reverse. The same weakness sat inside both armies: everything depended on one man. Alexander risked himself to hold his army; Darius preserved himself to hold an empire, and lost it anyway.",
        evidence: "interpretation",
        refs: [{ source: 10 }, { source: 12 }],
        commanderSlug: "darius-iii",
        battleSlugs: ["issus", "gaugamela"],
      },
      cost: {
        text: "The bond had a cost for others too. When the Macedonians broke into the Malli citadel and saw their king lying on the ground, Arrian says they killed every Indian there, sparing not even a woman or child. Diodorus says they were in a fury at the injury to their king and filled the city with corpses.",
        evidence: "fact",
        refs: [
          { source: 13, locator: "6.11" },
          { source: 9, locator: "17.99" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people you lead can see the risks you take, and the risks are of the same kind as theirs.",
          "Someone else could take over at once if you were lost.",
        ],
        failsWhen: [
          "The organisation cannot work without you, so your risk is everyone’s.",
          "Taking the risk yourself is about your reputation more than about the task.",
        ],
        questions: [
          "Which risks do you share with the people you lead, and which do you only ask of them?",
          "If you were unavailable tomorrow, would people know who decides?",
          "When did your own example last cost you something?",
        ],
      },
      bearsOn:
        "The Malli town came after the refusal at the Hyphasis. Men still broke ladders rushing to follow Alexander, wept when they saw him alive and pressed to touch his hands and clothes. Whatever stopped at the Hyphasis, it was not the army’s attachment to the man. That favours the answer that his aims outran theirs over the answer that they stopped following him.",
      questions: [
        {
          prompt:
            "According to Nearchus, as Arrian reports him, what did Alexander’s friends reproach him for after the Malli town?",
          choices: [
            "For exposing himself in front of the army, which they called a private soldier’s duty, not the general’s.",
            "For turning back at the Hyphasis.",
            "For trusting Ptolemy.",
          ],
          answer: 0,
          explanation:
            "Arrian adds that Alexander was offended because he knew the criticism was correct.",
        },
        {
          prompt:
            "Why, in Arrian’s account, did the army disbelieve the first news that Alexander was alive?",
          choices: [
            "Because the messenger was a Persian.",
            "Because in their fear they suspected the letter was forged by his bodyguards and generals.",
            "Because the news came from Diodorus.",
          ],
          answer: 1,
          explanation:
            "Only seeing him, on the ship and then on horseback, convinced them.",
        },
        {
          prompt: "What is Badian’s reading of Darius’s flight at Issus?",
          choices: [
            "Proof of cowardice, as the Greek historians say.",
            "A planned feint.",
            "A probable judgement that saving himself was the only way to save the kingdom, since no plausible successor existed.",
          ],
          answer: 2,
          explanation:
            "Badian notes that bravery was Darius’s best-attested quality, and reads the flight as a political calculation.",
        },
      ],
      sourceCheck: {
        question:
          "Who protected Alexander when he fell inside the Malli citadel?",
        witnesses: [
          {
            label: "Arrian",
            claim:
              "All agree that Peucestas covered him; accounts differ on Leonnatus and Abreas; writers who say Ptolemy was there are wrong, as Ptolemy himself says he was elsewhere.",
          },
          {
            label: "Plutarch",
            claim:
              "Peucestas and Limnaeus defended him; Limnaeus was killed and Peucestas held out.",
          },
        ],
        prompt: "What can a historian safely say?",
        options: [
          {
            text: "That Ptolemy saved the king and was called Soter for it.",
            feedback:
              "Arrian calls this the greatest error in the histories of Alexander, on Ptolemy’s own testimony that he was not there.",
          },
          {
            text: "That Peucestas covered him, and that the other names are disputed.",
            feedback:
              "Arrian says all agree on Peucestas, and Plutarch names him too. Beyond that the record divides.",
            best: true,
          },
          {
            text: "Nothing at all, since the accounts conflict.",
            feedback:
              "Disagreement on details does not erase the point on which every account agrees.",
          },
        ],
      },
      seminar: {
        prompt:
          "Alexander risked himself; Darius preserved himself. Under what conditions would each choice have been the right one?",
        guidance:
          "Consider who could have replaced each man, what each army needed to see, and whether the Greek picture of Darius can be trusted. Badian and the Babylonian diary are the starting points.",
      },
      sources: [
        s.a6_9,
        s.a1_15,
        s.plu3,
        s.dio17b,
        s.a4_18,
        s.a4_19,
        s.a6_10,
        s.a6_12,
        s.a6_13,
        s.dio17e,
        s.badianDarius,
        s.hermalin,
        s.diary,
        s.a6_11,
      ],
    },
    {
      slug: "a-new-enemy-every-year",
      title: "A new enemy every year: adapting the method",
      part: "The instrument",
      themes: ["adaptation", "judgement"],
      claim:
        "When a method has already won, it travels only if the leader keeps diagnosing each new enemy instead of repeating the last victory.",
      inBrief: {
        strength:
          "Against horse archers, a walled pass and a guarded river, he found a different answer each time.",
        shadow:
          "In the Gedrosian desert the problem was terrain, not an enemy, and the army paid for it.",
      },
      moment: {
        text: "In the spring of 326 BCE Alexander reached the Hydaspes and found Porus on the far bank with his whole army and a large troop of elephants, and guards posted at every place that could easily be forded. Arrian sets out the problem as Alexander saw it. A crossing where Porus stood was impossible: his army was drawn up to strike men as they came out of the water, and the horses would not land facing elephants, or even stay on the floats once they saw them, but would panic and leap into the river. The cavalry that had won at the Granicus could not simply be repeated.",
        evidence: "fact",
        refs: [
          { source: 3, locator: "5.9" },
          { source: 4, locator: "5.10" },
          { source: 7, locator: "5.19" },
        ],
      },
      episodes: [
        {
          title: "Horse archers on the Jaxartes",
          text: "Scythian horsemen rode along the far bank of the Jaxartes, shooting into the river and taunting Alexander. Twice the sacrifices for a crossing were unfavourable, and the seer Aristander refused to read them otherwise. Alexander crossed anyway. Catapults on the bank drove the Scythians back from the water; archers and slingers went over first to cover the landing. The first cavalry he sent against them was ridden round in circles and shot at, as horse archers fought. He then mixed archers, Agrianians and other light infantry in among his cavalry, so that the Scythians could no longer wheel round them safely, and charged. They fled.",
          evidence: "fact",
          refs: [{ source: 0, locator: "4.4" }],
          battleSlugs: ["jaxartes"],
        },
        {
          title: "The wall across the Persian Gate",
          text: "On the road to Persepolis Ariobarzanes, satrap of Persis, built a wall across the pass on the road to Persepolis. Alexander led his army straight at it. On the rugged ground, under missiles from engines on higher ground, many of his men were wounded, and he fell back to his camp. Prisoners told him of another route round. He left Craterus to attack the wall when trumpets sounded, marched by night along a rough, narrow track, fell on the Persian camp at dawn and broke the position from two sides. Badian calls the first repulse the only defeat Alexander is attested to have suffered at Persian hands.",
          evidence: "fact",
          refs: [{ source: 1, locator: "3.18" }, { source: 2 }],
          battleSlugs: ["persian-gate"],
        },
        {
          title: "Teaching Porus a habit",
          text: "At the Hydaspes Alexander split his army and moved detachments up and down the bank. He gathered corn into his camp so that Porus would think he meant to wait until the river fell in winter. At night his cavalry raised war cries along the bank as if about to cross, and Porus marched his elephants to meet each noise. When nothing came of it, Porus concluded his fear was groundless, stayed in his camp, and left scouts to watch. Alexander then crossed at a wooded headland and island some distance from his camp, leaving Craterus in the main camp with orders that turned on one question: where Porus sent his elephants. In Arrian’s words, it was the elephants alone that made it impossible for the horses to land.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "5.9" },
            { source: 4, locator: "5.10" },
            { source: 5, locator: "5.11" },
          ],
          battleSlugs: ["hydaspes"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, from Ptolemy and Aristobulus",
          stake:
            "An admirer of the commander, writing from the memoirs of two of his officers.",
          says: "After the Jaxartes Alexander fell ill from bad water; otherwise, Arrian thinks, all the Scythians would have perished in the flight.",
          refs: [{ source: 0, locator: "4.4" }],
        },
        {
          who: "Aristander the seer, as Arrian reports him",
          stake:
            "The king’s diviner, whose readings could license or forbid an action.",
          says: "He refused to explain the will of the gods contrary to the signs simply because Alexander wished to hear something else.",
          refs: [{ source: 0, locator: "4.4" }],
        },
        {
          who: "Ernst Badian, in the Encyclopaedia Iranica",
          stake: "A modern historian writing the Persian side of the war.",
          says: "At the Persian Gate Ariobarzanes caught Alexander in a trap and inflicted the only defeat he is attested to have suffered at Persian hands.",
          refs: [{ source: 2 }],
        },
        {
          who: "Arrian on Porus",
          stake: "Uses the Indian king’s courage to make a point about Darius.",
          says: "Porus fought on while any body of his men held together, and did not leave the field, Arrian writes, as Darius the Great King did, setting an example of flight to his men.",
          refs: [{ source: 6, locator: "5.18" }],
        },
      ],
      strategist: [
        {
          text: "The common thread is diagnosis before action. Each answer began from the enemy’s particular strength, the horse archers’ wheeling, a wall commanding a pass, elephants that would panic horses, and set out to deny that strength rather than meet it head on. At the Hydaspes the choice was taken without hindsight, with the rivers in flood: wait months for the water to fall, or steal a crossing. Alexander did both at once, letting Porus believe he would wait while he looked for a place to cross.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "4.4" },
            { source: 4, locator: "5.10" },
          ],
        },
        {
          text: "The Persian Gate shows that the method included failing first. His first move there was the frontal one, and it cost him men. What followed was quick: he took information from prisoners, accepted a rough route, and divided his force with simple signals. Adapting did not mean being right the first time. It meant changing the plan once the ground had answered.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "3.18" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research distinguishes experts who apply a familiar routine from those who adapt to new problems, and the planned reading for this lesson rested on it. No source on that distinction could be read: the review found returned no abstract. The Napoleon volume’s lesson on rivals who learn used research on organisational learning and the traps of success, and this lesson does not repeat it.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological source is offered, and the lesson draws no psychological conclusion.",
        },
      ],
      shadow: {
        text: "The method was built for enemies. In Gedrosia the enemy was the land. Arrian says most of Alexander’s historians thought nothing in Asia compared with the hardships of that march, and gives only Nearchus’s account of why he chose it: he had heard that no army had come safely through that desert except those of Semiramis and Cyrus, with a handful of survivors each, and wished to outdo them. On the march the soldiers killed and ate the pack animals and pretended they had died of thirst; the sick and the stragglers were left behind in the sand. A commander who diagnosed every army he met did not, on this account, diagnose a desert.",
        evidence: "interpretation",
        refs: [
          { source: 8, locator: "6.24" },
          { source: 9, locator: "6.25" },
        ],
      },
      counterCase: {
        text: "Porus adapted too, and his adaptation was the trap. He guarded the fords, met every threat at first, and then, when the night alarms came to nothing, learned to ignore them and keep his army in camp: a reasonable lesson drawn from experience that his opponent had arranged for him. When the real crossing came he was still facing the wrong place. He fought on bravely when the battle went against him, and Alexander, Arrian says, restored his kingdom and added more land to it. A leader who adapts to the pattern an opponent shows can be taught by that opponent.",
        evidence: "interpretation",
        refs: [
          { source: 4, locator: "5.10" },
          { source: 6, locator: "5.18" },
          { source: 7, locator: "5.19" },
        ],
        commanderSlug: "porus",
        battleSlugs: ["hydaspes"],
      },
      cost: {
        text: "Arrian counts the enemy dead in these battles in thousands and Alexander’s in tens and hundreds; those figures served a victor’s story and are not used here. At the Persian Gate, he says, many of Ariobarzanes’s men died hurling themselves over the precipices in flight. At the Hydaspes two of Porus’s sons were among the dead. In Gedrosia a flash flood in the night destroyed most of the wives and children of the men who followed the army.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "3.18" },
          { source: 6, locator: "5.18" },
          { source: 9, locator: "6.25" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Each new problem is studied for what makes it different before a familiar answer is applied.",
          "Failure on a first attempt is treated as information and acted on quickly.",
        ],
        failsWhen: [
          "The problem is not an opponent at all, and the habits built for opponents do not fit it.",
          "You learn a pattern that someone else is showing you on purpose.",
        ],
        questions: [
          "What made your last success work, and would it work against the next problem?",
          "When did a first attempt last fail, and how quickly did you change the plan?",
          "Which of your habits could a competitor be teaching you?",
        ],
      },
      bearsOn:
        "Between 329 and 326 Alexander’s military judgement shows no decline: the Hydaspes, fought months before the refusal, is among his most careful battles. Whatever stopped the army at the Hyphasis, it was not a failing commander in the field. That weakens the claim that he changed, at least as a soldier, and leaves aims and exhaustion as the stronger answers.",
      questions: [
        {
          prompt:
            "How did Alexander deal with the Scythian horse archers at the Jaxartes?",
          choices: [
            "He sent his heaviest cavalry against them alone.",
            "He mixed light infantry and archers among his cavalry so the Scythians could not wheel round them.",
            "He waited for them to attack his camp.",
          ],
          answer: 1,
          explanation:
            "His first cavalry attack was circled and shot at. Mixing light troops into the cavalry took away the horse archers’ advantage.",
        },
        {
          prompt:
            "What happened at Alexander’s first attack on the Persian Gate?",
          choices: [
            "The wall fell at once.",
            "The Persians fled before the battle.",
            "He was repulsed with many wounded, and turned the position by another route that prisoners showed him.",
          ],
          answer: 2,
          explanation:
            "Badian calls the repulse the only defeat Alexander is attested to have suffered at Persian hands.",
        },
        {
          prompt:
            "Why did Porus stop moving his army to meet the noises on the river bank at night?",
          choices: [
            "Because his scouts reported the crossing.",
            "Because his elephants were exhausted.",
            "Because repeated alarms came to nothing, and he concluded his fear was groundless.",
          ],
          answer: 2,
          explanation:
            "Alexander had trained him to ignore the alarms, then crossed elsewhere.",
        },
      ],
      seminar: {
        prompt:
          "Porus learned from experience and was beaten by it. How would you tell a lesson learned from a lesson taught to you by an opponent?",
        guidance:
          "Ask who benefits from the pattern you are seeing, and what it would cost to keep responding to it. Compare the Hydaspes with the Persian Gate, where Alexander was the one who had to learn.",
      },
      sources: [
        s.a4_4,
        s.a3_18,
        s.badianDarius,
        s.a5_9,
        s.a5_10,
        s.a5_11,
        s.a5_18,
        s.a5_19,
        s.a6_24,
        s.a6_25,
      ],
    },
    {
      slug: "staying-at-tyre",
      title: "Staying at Tyre: when persistence is the strategy",
      part: "The instrument",
      themes: ["judgement", "restraint"],
      claim:
        "When leaving an objective would undo the strategy, spending months on it can be right, and the same persistence becomes a liability once the reason has gone.",
      inBrief: {
        strength:
          "He stayed at Tyre until it fell, and the Persian fleet lost its Phoenician bases.",
        shadow:
          "At Gaza the reason given was reputation: the harder the city looked, the more he wanted it.",
      },
      moment: {
        text: "After Issus, Alexander asked to sacrifice to Heracles in the island city of Tyre. Arrian says the Tyrians voted to obey any other command but to admit no Persian or Macedonian into the city, thinking it the safest answer while the war’s outcome was uncertain. Diodorus adds their hopes: to please Darius, to draw Alexander into a long and difficult siege while Darius rebuilt his army, and to receive help from their colonists in Carthage. They trusted their walls and their island. Alexander sent the envoys back in a rage and called his officers to council.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "2.16" },
          { source: 2, locator: "17.40" },
        ],
      },
      episodes: [
        {
          title: "Two reasons for the same siege",
          text: "Arrian gives Alexander a speech to his officers. Egypt cannot safely be invaded while Persia holds the sea, nor can he march after Darius with Tyre doubtful behind him and Greece restless. Take Tyre and Phoenicia falls, and with it the best part of the Persian fleet; Cyprus will follow, and with it command of the sea. The speech is Arrian’s composition, but the argument is a strategist’s. Diodorus gives a different reason: Alexander determined to run every risk to save the Macedonian army from being held in contempt by a single undistinguished city. One is a reason of strategy, the other of reputation, and the same siege could serve both.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "2.17" },
            { source: 2, locator: "17.40" },
          ],
          battleSlugs: ["tyre"],
        },
        {
          title: "The mole, the storm and the fleet",
          text: "Alexander began a mole across the strait. Arrian says the work went fast in the shallows and slowly in deep water under missiles from the walls and attacks by Tyrian ships, and that Alexander himself led it, rousing the men with speeches and money. Diodorus says a gale wrecked much of the mole, that Alexander thought of giving up the siege, but driven by ambition had whole trees brought from the mountains to break the waves, and rebuilt. Then the sea changed hands. Hearing that their cities were Alexander’s, the kings of Aradus and Byblus brought their ships over, with the Sidonian triremes, and the kings of Cyprus followed. The Tyrians, Arrian says, were astonished at the size of the fleet that sailed against them. Plutarch and Diodorus put the siege at seven months; Badian writes that Tyre held out for nearly a year.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "2.18" },
            { source: 2, locator: "17.42, 17.46" },
            { source: 4, locator: "2.20" },
            { source: 6, locator: "Alexander 24" },
            { source: 7 },
          ],
          battleSlugs: ["tyre"],
        },
        {
          title: "Gaza",
          text: "Gaza, held by the eunuch Batis with Arab mercenaries, refused to admit Alexander on his way to Egypt. Arrian says the engineers judged its wall impossible to take by force because of the height of its mound. The more impracticable it seemed, he writes, the more resolutely Alexander determined that it must be captured, because success against expectation would alarm his enemies, while failure would be a disgrace before the Greeks and Darius. He built a mound round the city, was wounded through shield and breastplate, brought the engines from Tyre by sea, and took the city at the fourth assault. Diodorus gives the siege two months.",
          evidence: "fact",
          refs: [
            { source: 13, locator: "2.25" },
            { source: 9, locator: "2.26" },
            { source: 10, locator: "2.27" },
            { source: 2, locator: "17.48" },
          ],
          battleSlugs: ["gaza-332-bce"],
        },
      ],
      witnesses: [
        {
          who: "Alexander, in the speech Arrian wrote for him",
          stake:
            "A composition by a second-century historian, giving the king the strongest strategic case.",
          says: "Take Tyre, and the Phoenician fleet, the best part of the Persian navy, will have no reason to fight for others; with it will come the sea, and Egypt.",
          refs: [{ source: 1, locator: "2.17" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "A tradition that liked to show the king’s passions at work.",
          says: "After the storm Alexander thought of abandoning the siege, but was driven on by ambition.",
          refs: [{ source: 2, locator: "17.42" }],
        },
        {
          who: "The Tyrians, as Diodorus reports them",
          stake:
            "Defenders reasoning about a war whose outcome they could not know.",
          says: "They would please Darius, buy him time by a long siege, and look to Carthage for help.",
          refs: [{ source: 2, locator: "17.40" }],
        },
        {
          who: "Ernst Badian, in the Encyclopaedia Iranica",
          stake:
            "Writes from the Persian side about what Darius did meanwhile.",
          says: "While Persia’s allies waited for Darius to counter-attack, with Tyre holding out for nearly a year, the king began negotiating for a settlement.",
          refs: [{ source: 7 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, the case for staying was real. The Persian fleet was still at sea, Greece was unsettled, and Tyre was a fleet base on Alexander’s line to Egypt. Yet the siege achieved its strategic aim partly before the city fell: the Phoenician and Cyprian squadrons came over once their own cities were in Alexander’s hands, and that, more than the mole, gave him the sea. From that point the reason in Arrian’s speech was largely met. The reason in Diodorus, not to be defied by one city, was not, and the siege went on to the end.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "2.17" },
            { source: 4, locator: "2.20" },
            { source: 2, locator: "17.40" },
          ],
        },
        {
          text: "Napoleon left Acre after about two months; Alexander stayed at Tyre. The Napoleon volume asks whether that was judgement or outcome. Here the difference lies in the sea. At Acre the defenders were resupplied by sea under British command, and half of Napoleon’s siege guns had been captured on the way. At Tyre the sea passed to the besieger. A decision to persist is only as good as the condition that makes persistence pay, and that condition can change in either direction while the siege goes on.",
          evidence: "interpretation",
          refs: [{ source: 11 }, { source: 4, locator: "2.20" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Napoleon volume’s lesson on knowing when to stop examined escalation of commitment, the tendency to keep investing in a failing course, and found the research contested. Tyre did not fail, so the concept would fit it badly in any case. Diodorus’s word for what kept Alexander going after the storm is ambition, and the lesson leaves it as his word.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological source is offered, and the lesson draws no psychological conclusion.",
        },
      ],
      shadow: {
        text: "At Gaza the strategic reason had thinned and the reason given was reputation: the engineers’ verdict that the wall could not be taken became, in Arrian’s telling, the reason to take it. The same persistence later held the army in Bactria and Sogdiana. Briant describes the advance halted between 330 and 327 by organised resistance under Spitamenes and a general revolt, answered by military colonies and a levy of young men who served as soldiers and hostages. Persistence there had reasons, since the rear could not be left in revolt, but it cost years of the soldiers’ labour.",
        evidence: "interpretation",
        refs: [{ source: 9, locator: "2.26" }, { source: 8 }],
      },
      counterCase: {
        text: "At Acre in 1799 Napoleon besieged an Ottoman city from 18 March to 20 May. Britannica’s account records the British capture of a flotilla carrying half his siege guns, defences improved by Sidney Smith and a French émigré officer, an Ottoman relief army beaten at Mount Tabor, and assaults in May that broke through the walls only to find new defences behind them. Acre was resupplied by sea while disease spread in the French camp and the wounded could not be evacuated past the blockade. Napoleon accepted defeat reluctantly and marched back to Egypt. The same will to persist met a city that could not be cut off.",
        evidence: "fact",
        refs: [{ source: 11 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["acre"],
      },
      cost: {
        text: "Arrian says the Macedonians entered Tyre enraged by the length of the siege and by the Tyrians’ killing of captured Macedonians on the wall in sight of the camp, and the slaughter was great. Those who took refuge in the temple of Heracles, among them the king and Carthaginian envoys, were spared; the rest were sold into slavery. Diodorus says the men of military age were crucified, a detail Lendering notes is known only from the vulgate; many non-combatants had been sent to Carthage before the city was cut off. At Gaza the defenders died at their posts, and Alexander sold their wives and children into slavery.",
        evidence: "fact",
        refs: [
          { source: 5, locator: "2.24" },
          { source: 2, locator: "17.41, 17.46" },
          { source: 12 },
          { source: 10, locator: "2.27" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Leaving the objective would undo the purpose it serves.",
          "The conditions that make persistence pay are within reach, and you are watching whether they still hold.",
        ],
        failsWhen: [
          "The original reason has been met by other means, and the effort continues for its own sake.",
          "The difficulty itself becomes the reason to go on.",
        ],
        questions: [
          "What would have to be true for your current long effort to pay off, and is it still true?",
          "If the goal were already met another way, would you notice?",
          "Which of your reasons for continuing would you give in public, and which would you not?",
        ],
      },
      bearsOn:
        "Tyre shows the army following through months of heavy labour, with the king at the work himself, and that labour was part of what Arrian, at the Hyphasis, calls the king raising one labour after another. The cost of persistence fell first on Tyre and Gaza. It also accumulated in the soldiers, which supports exhaustion as an answer and shows how it was earned.",
      questions: [
        {
          prompt:
            "What reason does Diodorus give for Alexander’s determination to take Tyre?",
          choices: [
            "To capture the treasury of Darius.",
            "To save the Macedonian army from being held in contempt by a single undistinguished city.",
            "To free Greek prisoners held there.",
          ],
          answer: 1,
          explanation:
            "Arrian’s speech gives a strategic reason; Diodorus a reason of reputation.",
        },
        {
          prompt:
            "What changed the naval balance during the siege, according to Arrian?",
          choices: [
            "The Phoenician and Cyprian squadrons came over to Alexander once their own cities were his.",
            "A Macedonian fleet arrived from Greece.",
            "The Tyrian fleet was destroyed by a storm.",
          ],
          answer: 0,
          explanation:
            "The defection achieved much of the siege’s strategic purpose before the city fell.",
        },
        {
          prompt: "Why does the lesson compare Tyre with Napoleon at Acre?",
          choices: [
            "Because both sieges lasted exactly as long.",
            "Because at Acre the defenders were supplied by sea, while at Tyre the sea passed to the besieger.",
            "Because both commanders were wounded.",
          ],
          answer: 1,
          explanation:
            "Persistence pays only while the condition that makes it pay holds.",
        },
      ],
      sourceCheck: {
        question: "Why did Alexander besiege Tyre?",
        witnesses: [
          {
            label: "Arrian, in a speech he composed",
            claim:
              "To deny the Persian fleet its bases, win the Phoenician navy and secure the sea before invading Egypt.",
          },
          {
            label: "Diodorus",
            claim:
              "To save the army from being held in contempt by one undistinguished city; after the storm he went on, driven by ambition.",
          },
        ],
        prompt: "What can the historian conclude?",
        options: [
          {
            text: "That the strategic reason is the true one, because it is more intelligent.",
            feedback:
              "It is the more impressive reason, which is why a historian composing a speech would choose it. That does not make it the motive.",
          },
          {
            text: "That both reasons may have been at work, and that the strategic one was largely met when the fleets defected, while the siege continued.",
            feedback:
              "The sequence of events lets you test each reason against what happened next.",
            best: true,
          },
          {
            text: "That Diodorus is wrong, because the vulgate is unreliable.",
            feedback:
              "Lendering calls the vulgate certainly not a bad source. A dramatising tradition can still report a real motive.",
          },
        ],
        battleSlug: "tyre",
      },
      seminar: {
        prompt:
          "Alexander stayed at Tyre and won; Napoleon left Acre and lost Syria. Was either decision right, and how would you know before the outcome?",
        guidance:
          "List what each could know about the sea, his siege train and the relieving forces at the moment of decision. Then ask what would have had to change for the other choice to be right.",
      },
      sources: [
        s.a2_16,
        s.a2_17,
        s.dio17c,
        s.a2_18,
        s.a2_20,
        s.a2_24,
        s.plu4,
        s.badianDarius,
        s.briant,
        s.a2_26,
        s.a2_27,
        s.acre,
        s.vulgate,
        s.a2_25,
      ],
    },
    {
      slug: "parmenions-advice",
      title:
        "Parmenion’s advice: when the record makes the adviser always wrong",
      part: "The consent of the army",
      themes: ["judgement", "communication"],
      claim:
        "When a record shows one adviser always wrong and the leader always right, suspect the record before the adviser, and ask who needed it that way.",
      inBrief: {
        strength:
          "He heard his senior general’s objections, and often answered them with reasons.",
        shadow:
          "The record that preserves Parmenion’s advice was written after Alexander had him killed.",
      },
      moment: {
        text: "Philotas, Parmenion’s son, was convicted before the Macedonians of having heard of a plot against Alexander and said nothing, and was killed with javelins. A Companion, Polydamas, was sent to Media with letters to the generals serving under Parmenion, and they put him to death. Arrian gives two possible reasons: Alexander thought it incredible that the son would plot without the father, or thought that the father would be dangerous if he survived his son’s execution. Arrian adds that Parmenion was held in very great respect by Alexander and by the whole army, Macedonians and Greek allies alike. Most of what survives about his advice was written by men who served the king who ordered his death.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.26" }],
      },
      episodes: [
        {
          title: "Four times wrong",
          text: "In Arrian, Parmenion advises waiting for dawn at the Granicus, and Alexander attacks at once and wins. At Miletus he urges a sea battle, reading an eagle on the shore as a good omen and offering to sail himself; Alexander answers that a small, unpractised fleet should not fight a larger, skilled one, and reads the eagle on land as a sign he will beat the Persian fleet from the land. When Darius offers territory, money and his daughter, Parmenion is said to have told Alexander he would accept if he were Alexander, and Alexander is said to have answered that so would he, if he were Parmenion. Before Gaugamela it is said that Parmenion urged a night attack, and Alexander answered in others’ hearing that it would be mean to steal a victory. Plutarch tells the Granicus, the offer and the night attack in the same way.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "1.13" },
            { source: 3, locator: "1.18" },
            { source: 4, locator: "2.25" },
            { source: 5, locator: "3.10" },
            { source: 12, locator: "Alexander 16" },
            { source: 6, locator: "Alexander 29, 31" },
          ],
          battleSlugs: ["granicus", "gaugamela"],
        },
        {
          title: "Once right, and once followed",
          text: "The pattern is not complete even in Arrian. At Persepolis Parmenion advised Alexander to spare the Persian palace, because it was now his own property and because the peoples of Asia would think he meant only to conquer and leave. Alexander burned it in revenge for Xerxes’s invasion of Greece, and Arrian, who usually defends him, says he did not act with prudence. And in Diodorus’s account of the Granicus the army camps opposite the Persians and crosses at dawn before they can stop it: the plan Arrian gives to Parmenion, carried out by Alexander without comment.",
          evidence: "fact",
          refs: [
            { source: 7, locator: "3.18" },
            { source: 2, locator: "17.19" },
          ],
          battleSlugs: ["persian-gate"],
          campaignSlugs: ["macedonian-invasion-of-persia"],
        },
        {
          title: "Sluggish at Gaugamela?",
          text: "Plutarch says Parmenion twice sent riders during Gaugamela asking Alexander for help, once fearing for the camp and baggage, and that there is a general complaint that in that battle he was sluggish and inefficient: either old age was sapping his courage, or he was envious and resentful of what Callisthenes called the arrogance and pomp of Alexander’s power. Badian’s account of the battle has the Persian cavalry fight successfully, as planned, against Alexander’s left, which Parmenion commanded, while Alexander broke the Persian centre. A wing under heavy pressure that asks for help is not obviously a sluggish one.",
          evidence: "interpretation",
          refs: [{ source: 6, locator: "Alexander 32–33" }, { source: 8 }],
          battleSlugs: ["gaugamela"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, from Ptolemy and Aristobulus",
          stake:
            "His sources were Alexander’s officers; Ptolemy published his memoirs, Lendering suggests, between about 310 and 301, long after Parmenion’s death.",
          says: "Parmenion is said to have given the advice; Alexander’s answers come with reasons, and Arrian commends most of them.",
          refs: [
            { source: 4, locator: "2.25" },
            { source: 5, locator: "3.10" },
            { source: 9 },
          ],
        },
        {
          who: "Plutarch, quoting Callisthenes",
          stake:
            "Plutarch reports a complaint without naming its authors, and borrows only a phrase from Callisthenes.",
          says: "There was a general complaint that Parmenion was sluggish at Gaugamela, from age or envy of the arrogance and pomp of Alexander’s power.",
          refs: [{ source: 6, locator: "Alexander 33" }],
        },
        {
          who: "Ernst Badian, in the Encyclopaedia Iranica",
          stake:
            "A modern historian sceptical of the documents in the Greek sources.",
          says: "The documents quoted in the Greek sources are as usual fictitious; it is said that Parmenion advised accepting Darius’s offer, but Alexander could not easily do so.",
          refs: [{ source: 8 }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake:
            "A different tradition from Arrian’s, with no stake in Parmenion either way.",
          says: "At the Granicus the army camped and crossed at dawn.",
          refs: [{ source: 2, locator: "17.19" }],
        },
      ],
      strategist: [
        {
          text: "Judged on the arguments as Arrian gives them, the advice was often sound and Alexander’s answers were often better. At Miletus his reasons against a sea battle are strong. On Darius’s offer Badian explains why Alexander could not easily accept: with the hostages returned and peace made, he would have had to go home and guard a long frontier while Darius chose his moment. On the night attack Arrian commends Alexander’s reasons, while Badian judges that a night attack would have overwhelmed the Persians, who stood to arms all night. The advice is mixed. It is the record that is uniform.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "1.18" },
            { source: 8 },
            { source: 5, locator: "3.10" },
          ],
        },
        {
          text: "A leader loses something when an adviser becomes a foil. A senior general who has commanded under the leader’s father, and who is respected by the whole army, is the person most able to say what others will not. In the record his role is to be answered. Whether that was how Alexander used him in life, or how later writers shaped the story after his execution, the strategist cannot tell. The point stands either way: a record built from the leader’s side will make the leader’s choices look like the only good ones.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "3.26" }, { source: 9 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Authentic dissent and the devil’s advocate",
          base: "single study",
          text: "Nemeth, Brown and Rogers compared groups given an authentic dissenter with groups given a devil’s advocate playing a role, and found the authentic minority superior to every form of devil’s advocate in the quantity and quality of solutions; an earlier study had found that the devil’s advocate mainly led people to bolster their first view. Parmenion, as the sources describe him, was an authentic dissenter: he meant what he said and offered to share the risk. The record turns him into something closer to a role, a voice whose purpose is to be refuted. If the research is right, a leader gains most from dissent that is genuine and taken seriously, whether or not the dissenter turns out to be right.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "Only the abstract was read. It reports experiments with small groups solving problems, not a king and his generals, and Parmenion’s advice may itself be the historians’ construction.",
        },
      ],
      shadow: {
        text: "Parmenion’s death removed the one man the army respected as much as the king. Arrian’s second possible reason, that the father would be dangerous once the son had been executed, describes a court in which a general’s standing could become a threat to him. Who advised Alexander after that, and what frankness cost, is the subject of the lesson on Philotas, Cleitus and Callisthenes.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "3.26" }],
      },
      counterCase: {
        text: "After Cannae, Livy says, Hannibal’s officers urged him to rest his exhausted army, but Maharbal, his cavalry commander, told him to follow at once: in five days he would feast on the Capitol. Hannibal praised his zeal and said he needed time to weigh it. Maharbal answered that the gods had not given everything to one man: Hannibal knew how to win a victory but not how to use it. That day’s delay, Livy writes, is firmly believed to have saved the city and the empire. Here the adviser is remembered as right, and the leader as the one who failed. The record was written by Romans, for whom Hannibal’s hesitation was part of how Rome survived.",
        evidence: "interpretation",
        refs: [{ source: 11, locator: "22.51" }],
        commanderSlug: "hannibal-barca",
        battleSlugs: ["cannae"],
      },
      cost: {
        text: "Philotas and those convicted with him were killed by the Macedonians with javelins, and Parmenion by officers he had commanded, on the king’s letters. At Persepolis, where Arrian thought Parmenion right, the palace of the Persian kings was burned.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "3.26" },
          { source: 7, locator: "3.18" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The account of past decisions comes from the decision-maker’s side.",
          "One adviser appears in every story as the person who was wrong.",
        ],
        failsWhen: [
          "Independent accounts confirm the pattern. Some advisers are often wrong.",
          "Suspicion of the record becomes an excuse to rehabilitate anyone who lost.",
        ],
        questions: [
          "Whose objections in your organisation are remembered only as the views that were overruled?",
          "Do the people who disagree with you mean it, or are they playing a role you have given them?",
          "If your senior adviser wrote the history of your decisions, how would it differ?",
        ],
      },
      bearsOn:
        "Parmenion was the old army’s senior voice. His killing, after the conviction of his son, is the first sign in this volume of a court where frankness costs, which supports the answer that Alexander changed. But the stories that show his advice ignored were written by the winners after his death, so the evidence for that answer is partly the record’s own shape.",
      questions: [
        {
          prompt:
            "Where does Arrian himself say that Alexander was wrong to reject Parmenion’s advice?",
          choices: [
            "At the Granicus.",
            "At Persepolis, where Parmenion advised sparing the palace.",
            "Before Gaugamela.",
          ],
          answer: 1,
          explanation:
            "Arrian says Alexander did not act with prudence in burning the palace.",
        },
        {
          prompt:
            "How does Arrian introduce Parmenion’s advice on Darius’s offer and on the night attack?",
          choices: [
            "As quotations from Parmenion’s own letters.",
            "With “it is said”, as reports he does not vouch for.",
            "As things he saw himself.",
          ],
          answer: 1,
          explanation:
            "Both famous exchanges are marked as traditions, not as facts from his main sources.",
        },
        {
          prompt:
            "What did Nemeth, Brown and Rogers find about authentic dissent?",
          choices: [
            "That a devil’s advocate works as well as a real dissenter.",
            "That an authentic minority produced better solutions than every form of devil’s advocate.",
            "That dissent always lowers a group’s performance.",
          ],
          answer: 1,
          explanation:
            "Role-played dissent tended to make people bolster their first view.",
        },
      ],
      sourceCheck: {
        question: "Was Parmenion sluggish at Gaugamela?",
        witnesses: [
          {
            label: "Plutarch",
            claim:
              "There was a general complaint that he was sluggish and inefficient, from age or from envy of Alexander’s arrogance and pomp, in Callisthenes’s words.",
          },
          {
            label: "Ernst Badian",
            claim:
              "The Persian cavalry fought successfully, as planned, against the Macedonian left under Parmenion, while Alexander broke the centre.",
          },
        ],
        prompt: "How should the historian read Plutarch’s report?",
        options: [
          {
            text: "As established fact, since Plutarch calls the complaint general.",
            feedback:
              "A general complaint has authors, and Plutarch names only Callisthenes, and only for a phrase.",
          },
          {
            text: "As a complaint from Alexander’s side that may reflect Parmenion’s later fall, set against an account in which his wing was under the heaviest pressure.",
            feedback:
              "The complaint is evidence of what was said about him. Badian’s account suggests another explanation for his calls for help.",
            best: true,
          },
          {
            text: "As proof that Parmenion was disloyal.",
            feedback:
              "Neither source says so. Envy is offered as one explanation among two, by people with reasons to offer it.",
          },
        ],
        battleSlug: "gaugamela",
      },
      seminar: {
        prompt:
          "Parmenion is remembered as wrong and Maharbal as right. What would each record look like if the other side had written it?",
        guidance:
          "Ask who wrote each account, when, and what they needed the adviser to be. Then ask what Alexander and Hannibal could actually know when they decided.",
      },
      sources: [
        s.a3_26,
        s.a1_13,
        s.dio17b,
        s.a1_18,
        s.a2_25,
        s.a3_10,
        s.plu4,
        s.a3_18,
        s.badianDarius,
        s.arrianSources,
        s.nemeth,
        s.livy,
        s.plu3,
      ],
    },
    {
      slug: "the-river-they-would-not-cross",
      title: "The river they would not cross: the Hyphasis, 326 BCE",
      part: "The consent of the army",
      themes: ["motivation", "communication", "restraint"],
      claim:
        "When followers have been asked for more than they will give, a leader may learn the limit only by reaching it, and the way he turns back decides what remains of the bond.",
      inBrief: {
        strength:
          "When the army refused, he did not force it, and found a way to turn back that both sides could accept.",
        shadow:
          "He learned the limit only by reaching it, after years of asking for one more effort.",
      },
      moment: {
        text: "At the Hyphasis, the easternmost river of his campaign, Alexander called his officers together a second time, in anger. In Arrian’s account he told them he would go on with those who chose to follow, and that the rest could go home and tell their families they had deserted their king among his enemies. Then he went into his tent and admitted none of his Companions for three days, waiting for the mood of the camp to change. It did not. There was profound silence, and the soldiers were plainly annoyed at his anger without being changed by it. Ptolemy, Arrian says, records that he then sacrificed for the crossing and the omens were unfavourable. Alexander called the oldest of the Companions and announced that the army would turn back.",
        evidence: "fact",
        refs: [{ source: 0, locator: "5.28" }],
      },
      episodes: [
        {
          title: "After the Hydaspes",
          text: "Plutarch says the struggle with Porus blunted the Macedonians’ courage and stayed their advance into India; they had heard of vast armies and elephants beyond the next river. Arrian reports that the land beyond the Hyphasis was said to be fertile, well governed and rich in elephants. These reports excited in Alexander an ardent desire to go on, but the spirit of the Macedonians began to flag, he writes, when they saw the king raising one labour after another and incurring one danger after another. Meetings were held throughout the camp. The most moderate men lamented their lot; others said they would not follow him any farther, even if he led the way.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "Alexander 62" },
            { source: 2, locator: "5.25" },
          ],
          battleSlugs: ["hydaspes"],
        },
        {
          title: "The council and Coenus",
          text: "Diodorus says Alexander saw that his men were exhausted after almost eight years of toil and danger. Horses’ hooves were worn thin, armour was failing, Greek clothing had given way to recut Indian garments, and the rains had lasted seventy days. He let them plunder the country and gave rations to their wives and bounties to their children, then made a careful speech; they did not accept it. In Arrian the speech is long, and when it ends there is a long silence: the officers neither dared to oppose the king nor wished to agree. At last Coenus speaks for the bulk of the army. Few of those who set out are left, most lost to disease; the rest are worn in body and more in spirit, and long for parents, wives, children and home. Do not lead us against our will, he says, for without free will the men will not be the same in danger.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "17.94" },
            { source: 4, locator: "5.26" },
            { source: 5, locator: "5.27" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
        {
          title: "Three accounts of the turning",
          text: "The sources agree that the army turned back and disagree on how. In Arrian the omens give the reason, and the soldiers shout and weep for joy and pray for blessings on Alexander, “because by them alone he suffered himself to be conquered”. Twelve altars as tall as towers mark the limit. Plutarch places the refusal at the Ganges. Alexander shuts himself in his tent in anger, counting retreat a confession of defeat, until his friends console him and the soldiers crowd at his door, pleading and wailing. He then leaves behind oversized armour, high mangers and heavy bits, which Plutarch calls deceitful devices for the enhancement of his fame. Diodorus has altars to the twelve gods and a camp three times the normal size, to leave the natives evidence of men of huge stature.",
          evidence: "uncertainty",
          refs: [
            { source: 6, locator: "5.29" },
            { source: 1, locator: "Alexander 62" },
            { source: 3, locator: "17.95" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, citing Ptolemy for the sacrifices",
          stake:
            "Follows a companion who became king, and who had reason to show the turning as the gods’ decision.",
          says: "The king waited three days for the soldiers to change their minds; when they did not, the omens forbade the crossing and he announced the return.",
          refs: [{ source: 0, locator: "5.28" }],
        },
        {
          who: "Coenus, in the speech Arrian wrote for him",
          stake:
            "A senior officer, honoured and rewarded, speaking for men below him: and a composition by a historian four centuries later.",
          says: "He will speak not to please the men but for what is safest for the king, and the men will not be the same in danger if they are led against their will.",
          refs: [{ source: 5, locator: "5.27" }],
        },
        {
          who: "Plutarch",
          stake: "A moralist alert to vanity in great men.",
          says: "Alexander counted retreat a confession of defeat, relented only to his soldiers’ wailing, and covered his withdrawal with deceitful devices for his fame.",
          refs: [{ source: 1, locator: "Alexander 62" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "Interested in the scene and in the king’s generosity.",
          says: "Alexander tried gratitude first, with plunder for the men and pay for their families; the Macedonians still refused his speech.",
          refs: [{ source: 3, locator: "17.94" }],
        },
      ],
      strategist: [
        {
          text: "The refusal was foreseeable. Arrian has open meetings throughout the camp, and Diodorus has Alexander reading his army’s exhaustion and trying to buy its goodwill before he spoke. His alternatives were few. He could not force an army that held the only power that mattered, its willingness to fight. He could go on with volunteers, which he threatened and did not do. Or he could turn back. Once persuasion and gifts had failed, the strategic question was no longer whether to stop but how to stop without breaking his authority.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "5.25" },
            { source: 3, locator: "17.94" },
          ],
        },
        {
          text: "The sacrifices answered that question. They let the turning be the gods’ decision rather than the army’s victory over its king. The army seems to have understood it differently, if Arrian is right: the soldiers thanked him for letting himself be conquered by them alone. Both readings could hold at once, and that is the point of a face-saving device. The altars and the oversized camp did the same work for posterity. The army was intact for the voyage down the Indus. It did not end the risk: the Malli town and the march through the Gedrosian desert still lay ahead, the desert chosen, in the one account Arrian gives of the motive, from Nearchus, to outdo Semiramis and Cyrus.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "5.28" },
            { source: 6, locator: "5.29" },
            { source: 7, locator: "6.24" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Upward voice and silence",
          base: "review",
          text: "Morrison defines upward voice as people voluntarily raising suggestions, concerns or problems with someone above them, and silence as withholding that input, which deprives the organisation of useful information. Her review traces the factors and motives that decide which people choose. Arrian’s council fits the description closely: a long silence because the officers neither dared to oppose the king nor wished to agree, broken by one senior man who justifies speaking by his age, his honours and his record of courage. In Arrian’s telling, voice came late, from the person safest to give it, and only after the soldiers had already decided among themselves.",
          evidence: "interpretation",
          refs: [{ source: 8 }, { source: 5, locator: "5.27" }],
          limit:
            "The review concerns employees in modern organisations, and only its abstract was read. Coenus’s speech is Arrian’s composition, so this reading tests a second-century writer’s picture of voice, not the event.",
        },
      ],
      shadow: {
        text: "He learned the limit only by reaching it. Coenus’s reasons, the losses, the disease, the longing for home, were not new in 326. The first response Arrian records is anger: Alexander broke up the meeting, annoyed at Coenus’s freedom of speech, then threatened to go on without them and shut himself away. Plutarch’s Alexander counts retreat as defeat. A leader who treats every limit as a test of will learns where the limit is at the moment it holds, in front of everyone.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "5.28" },
          { source: 1, locator: "Alexander 62" },
        ],
      },
      counterCase: {
        text: "In the spring of 1917 French soldiers refused orders in a wave of collective protests. The usual story, which this site’s profile of Philippe Pétain follows, has Pétain answer the mutinies by halting offensives. Ducoulombier’s review of André Loez’s history of the mutineers sets out a different account. Pétain was appointed commander-in-chief on 15 May, before the government learned of the mutinies, so he was not called in to restore order. The wave of collective refusals forced offensives to stop until the autumn against his wishes. Early in June he restored the special courts-martial, and the review argues that repression was held in check by the political authorities rather than by his leniency. In both cases the army set the limit, and the record gave the turning to the commander: the gods’ omens in one, a general’s wisdom in the other.",
        evidence: "interpretation",
        refs: [{ source: 9 }],
        commanderSlug: "philippe-petain",
        battleSlugs: [],
      },
      cost: {
        text: "Coenus’s speech counts the cost in the men who were no longer there: killed in battle, invalided by wounds, left behind in garrisons and colonies, and above all lost to disease. Diodorus shows the soldiers’ wives and children travelling with the army. The Indian peoples already conquered, and those beyond the river who were spared, appear in these accounts only as reports of wealth and elephants.",
        evidence: "fact",
        refs: [
          { source: 5, locator: "5.27" },
          { source: 3, locator: "17.94" },
        ],
      },
      transfer: {
        holdsWhen: [
          "People have given a great deal and are being asked for more without an end in sight.",
          "The leader can find a way to stop that lets both sides keep their standing.",
        ],
        failsWhen: [
          "The limit is treated as a test of will, so the leader learns it only in public.",
          "The face-saving story becomes the official account and the reasons for the refusal are forgotten.",
        ],
        questions: [
          "What signs would tell you that the people you lead have reached their limit before they say so?",
          "Who in your team would speak if everyone else stayed silent, and why them?",
          "If you had to turn back, what story would you tell, and would it be true?",
        ],
      },
      bearsOn:
        "This is the volume’s first strong evidence. Arrian, Plutarch and Diodorus all locate the cause of the refusal in the army’s exhaustion and longing for home, not in a change in Alexander. Arrian also sets the reports of new lands that excited the king beside the flagging spirit of his men. At the Hyphasis, the sources point to aims that had outrun the men’s, and to men who still cheered the king who let them go.",
      questions: [
        {
          prompt:
            "According to Ptolemy, as Arrian reports him, what happened after Alexander’s three days in his tent?",
          choices: [
            "The army agreed to cross.",
            "He sacrificed for the crossing, the omens were unfavourable, and he announced the return.",
            "Coenus was arrested.",
          ],
          answer: 1,
          explanation:
            "The omens let the turning be the gods’ decision. Arrian names Ptolemy as his source for them.",
        },
        {
          prompt:
            "What, in Arrian’s account, did Alexander’s officers do when he finished speaking?",
          choices: [
            "They cheered.",
            "They kept a long silence, neither daring to oppose him nor wishing to agree, until Coenus spoke.",
            "They voted to go on.",
          ],
          answer: 1,
          explanation:
            "The silence is the most telling detail in the scene, and it fits what research calls withholding voice.",
        },
        {
          prompt:
            "What does Ducoulombier’s review of Loez say about Pétain and the halt to French offensives in 1917?",
          choices: [
            "That the refusals forced the halt against Pétain’s wishes.",
            "That Pétain was appointed after the mutinies to end them.",
            "That no soldiers were punished.",
          ],
          answer: 0,
          explanation:
            "Pétain was appointed before the mutinies were known, and he restored special courts-martial in June.",
        },
      ],
      sourceCheck: {
        question: "How did Alexander come to turn back at the Hyphasis?",
        witnesses: [
          {
            label: "Arrian, citing Ptolemy",
            claim:
              "After three days of silence the sacrifices for the crossing were unfavourable, and he announced the return.",
          },
          {
            label: "Plutarch",
            claim:
              "He lay in his tent in anger until his friends consoled him and his soldiers wailed at his door; then he relented.",
          },
          {
            label: "Diodorus",
            claim:
              "The Macedonians did not accept his speech, and he gave up the undertaking.",
          },
        ],
        prompt: "What do the three accounts allow a historian to conclude?",
        options: [
          {
            text: "That the gods forbade the crossing, as the most detailed source says.",
            feedback:
              "Ptolemy reports the omens, but omens that arrive exactly when needed are also a way of presenting a decision.",
          },
          {
            text: "That the army’s refusal decided the matter, and that the sources differ on how the king presented it.",
            feedback:
              "All three agree the army would not go on. They differ on the face the turning was given: omens, tears or a failed speech.",
            best: true,
          },
          {
            text: "That Alexander never intended to cross.",
            feedback:
              "Every account has him wanting to go on, and Plutarch has him count retreat as a defeat.",
          },
        ],
        campaignSlug: "indian-campaign",
      },
      seminar: {
        prompt:
          "Coenus says the men will not be the same in danger if they are led against their will. Is consent a condition of an army’s effectiveness, or only of its comfort?",
        guidance:
          "Compare the Hyphasis with the French army in 1917. Ask in each case who set the limit, how the commander answered, and who received credit for respecting it.",
      },
      sources: [
        s.a5_28,
        s.plu9,
        s.a5_25,
        s.dio17e,
        s.a5_26,
        s.a5_27,
        s.a5_29,
        s.a6_24,
        s.morrison,
        s.ducoulombier,
      ],
    },
    {
      slug: "the-cost-of-frankness",
      title: "The cost of frankness: Philotas, Cleitus and Callisthenes",
      part: "The consent of the army",
      themes: ["communication", "ethics"],
      claim:
        "When a leader’s power becomes absolute, the price of frankness rises for everyone near them, and the record of that price is kept by writers with reasons of their own.",
      inBrief: {
        strength:
          "When the Macedonians objected to prostration, he let the proposal drop for them.",
        shadow:
          "Men who spoke frankly near him were killed, by his order or by his own hand.",
      },
      moment: {
        text: "At a drinking party, Arrian says, some of the guests flattered Alexander by ranking him above Castor and Pollux and even Heracles. Cleitus, who had long resented the king’s foreign manners and his flatterers, would not have it: Alexander’s deeds, he said, were not so great, and were mostly the work of the Macedonians. When others belittled Philip, Cleitus put Philip first, and reminded Alexander that he had saved his life at the Granicus: “This hand, Alexander, preserved thee on that occasion.” Alexander called for his guards and none obeyed; he said he was now in the same position as Darius under arrest by Bessus, a king in name only. Then he seized a weapon and killed him. Aristobulus, Arrian adds, blames Cleitus alone: Ptolemy had led him out of the hall, and he came back in, calling “Alexander, here is Clitus!”",
        evidence: "fact",
        refs: [{ source: 0, locator: "4.8" }],
      },
      episodes: [
        {
          title: "Philotas and Parmenion",
          text: "In Ptolemy’s account, as Arrian gives it, Philotas was tried before the Macedonians and convicted chiefly because he admitted hearing of a plot against the king and had said nothing, though he visited the royal tent twice a day; he and others were killed with javelins, and Parmenion was then put to death in Media. Arrian mentions no torture. Plutarch says Philotas was tortured while Alexander listened behind a tapestry, and that these acts made Alexander an object of fear to many of his friends, above all Antipater, who sent secretly to make an alliance with the Aetolians. Diodorus adds that Alexander formed a separate unit, the Disciplinary Company, for soldiers who criticised him or mourned Parmenion.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "3.26" },
            { source: 2, locator: "Alexander 49" },
            { source: 3, locator: "17.79–80" },
          ],
          battleSlugs: [],
          campaignSlugs: ["campaigns-in-bactria-and-sogdiana"],
        },
        {
          title: "Prostration",
          text: "In the most received account, Arrian says, Alexander arranged with his sophists and the leading Persians and Medes that prostration would be proposed at a drinking party. Anaxarchus argued that Alexander deserved divine honours more than Dionysus or Heracles. Those in the plan applauded; most of the Macedonians were vexed and kept silence. Callisthenes then spoke against it, in a speech Arrian composes for him, and in doing so spoke the exact sentiments of the Macedonians. Alexander sent word that the Macedonians should make no further mention of the ceremony; the leading Persians prostrated themselves. In another version Callisthenes, refused a kiss for not prostrating, said: “I am going away only with the loss of a kiss.” Plutarch says he said in public what all the oldest and best of the Macedonians cherished in secret, and destroyed himself because he seemed to use force rather than persuasion with the king.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "4.10" },
            { source: 5, locator: "4.11" },
            { source: 6, locator: "4.12" },
            { source: 2, locator: "Alexander 54" },
          ],
          battleSlugs: [],
          campaignSlugs: ["campaigns-in-bactria-and-sogdiana"],
        },
        {
          title: "Two deaths for Callisthenes",
          text: "When the royal pages plotted to kill Alexander, Aristobulus and Ptolemy both say the youths named Callisthenes as their instigator. Most writers, Arrian notes, say instead that Alexander readily believed the worst of him because he already hated him. Some authors give the leading page, Hermolaus, a speech listing the king’s acts: the illegal execution of Philotas and Parmenion, the killing of Cleitus, the Median dress, prostration, the drinking. Callisthenes’s end is told in incompatible ways. Aristobulus says he was carried about in fetters and died a natural death; Ptolemy says he was racked and hanged. Plutarch adds that some say he was hanged, others that he died of sickness in chains, and gives Chares’s version as well. Arrian’s comment is the lesson of the episode: even these trustworthy authors, who were close to Alexander at the time, do not agree on events so well known.",
          evidence: "uncertainty",
          refs: [
            { source: 7, locator: "4.14" },
            { source: 2, locator: "Alexander 55" },
          ],
          battleSlugs: [],
          campaignSlugs: ["campaigns-in-bactria-and-sogdiana"],
        },
      ],
      witnesses: [
        {
          who: "Arrian",
          stake:
            "An admirer who judges both sides and frames the scene as a moral about flatterers.",
          says: "Flatterers “have always corrupted the character of kings”; Cleitus deserved censure for his insolence, and Alexander pity for being the slave of anger and drunkenness, and praise for owning the deed.",
          refs: [
            { source: 0, locator: "4.8" },
            { source: 8, locator: "4.9" },
          ],
        },
        {
          who: "Aristobulus, as Arrian reports him",
          stake:
            "A companion whose memoir, Lendering says, usually gives the kinder version.",
          says: "The fault at the banquet was entirely Cleitus’s, and Callisthenes died a natural death in fetters.",
          refs: [
            { source: 0, locator: "4.8" },
            { source: 7, locator: "4.14" },
            { source: 9 },
          ],
        },
        {
          who: "Plutarch",
          stake:
            "A moralist who admires Callisthenes’s stand and distrusts Anaxarchus.",
          says: "Anaxarchus’s consolation, that whatever the master of the world does is lawful and just, made Alexander in many ways more vainglorious and lawless.",
          refs: [{ source: 2, locator: "Alexander 52" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "A tradition that kept the darker details.",
          says: "Philotas was tortured and confessed; soldiers who criticised the king or mourned Parmenion were put in a unit of their own.",
          refs: [{ source: 3, locator: "17.80" }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s concern is information. Philotas was convicted not of acting but of keeping silent, and his father was killed because he might be dangerous. After that, everyone near the king faced a plain calculation: speaking up carried risk, staying silent carried risk, and agreeing carried none. Plutarch’s note that even Antipater, the regent at home, secretly sought allies shows the calculation reaching the top. A commander campaigning in hostile country depended on what his officers told him.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "3.26" },
            { source: 2, locator: "Alexander 49" },
          ],
        },
        {
          text: "The prostration affair shows the other side. Alexander was pursuing a real political aim, one court for Persians and Macedonians, and when the Macedonians’ silence and Callisthenes’s speech showed the cost, he withdrew the demand for them while keeping it for the Persians. Judged at the time, that was a leader reading opposition and adjusting. The price was paid afterwards, by the man who had been right too openly. Arrian’s advice, that Callisthenes should have given his opinion discreetly while praising the king, describes what frankness had become.",
          evidence: "interpretation",
          refs: [
            { source: 6, locator: "4.12" },
            { source: 2, locator: "Alexander 54" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Flattery and opinion conformity",
          base: "single study",
          text: "The Napoleon volume’s lesson on dissent drew on research about how power changes the person who holds it. Park, Westphal and Stern looked at the other side of the relationship: what happens to leaders who receive high levels of flattery and opinion conformity from those around them. In survey data on American chief executives, they found that such ingratiation increased leaders’ overconfidence in their own judgement and reduced the likelihood that they would make needed changes when performance was poor. Arrian’s banquet begins with flatterers, and Anaxarchus offers a doctrine that whatever a king does is just. The research suggests why a court that rewards agreement and punishes frankness harms the person at its centre as well as those around him.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "Only the abstract was read. It concerns modern chief executives and boards, not a king at war, and Arrian’s flatterers are also a moral device of his own: he says such men have always corrupted kings.",
        },
      ],
      shadow: {
        text: "The deeper cost was a doctrine. Anaxarchus, Arrian says, told the grieving king that Justice sits beside Zeus so that whatever a king does is just. Arrian calls this a greater injury than the killing itself. Alexander mourned Cleitus for three days, called himself the murderer of his friends and then, Arrian says, was not unwilling to attribute the deed to the anger of Dionysus rather than to his own fault. A leader who can always find another cause for his worst act has removed the price of it for himself, while those near him still pay theirs.",
        evidence: "interpretation",
        refs: [{ source: 8, locator: "4.9" }],
      },
      counterCase: {
        text: "Darius shows what happens to a court without power over its own nobles. Badian writes that after Gaugamela Bessus, the satrap of Bactria, and other nobles bound the king in golden fetters and, fearing capture, stabbed him and left him to die. Alexander saw the parallel himself: at the banquet, when his guards would not obey, he said he was reduced to the position of Darius led about under arrest by Bessus. A king whose followers fear him can be told nothing; a king whose followers do not fear him can lose everything. Neither court had found a way for frankness to be safe.",
        evidence: "interpretation",
        refs: [{ source: 11 }, { source: 0, locator: "4.8" }],
        commanderSlug: "darius-iii",
        battleSlugs: [],
      },
      cost: {
        text: "Philotas and those convicted with him died by javelins, Parmenion by his own officers’ hands, Cleitus by the king’s. Some authors say Hermolaus and the pages arrested with him were stoned to death by those present. Arrian recalls Cleitus’s sister Lanice, Alexander’s nurse, who lived to see her sons die fighting for him and her brother killed by him.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "3.26" },
          { source: 7, locator: "4.14" },
          { source: 8, locator: "4.9" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people around you depend on you for their positions, and you control what disagreement costs.",
          "Silence is punished as well as speech, so no choice is safe except agreement.",
        ],
        failsWhen: [
          "Frankness is offered as performance, to win an argument in public rather than to change a decision.",
          "The record of a leader’s violence comes only from those who opposed him, or only from those who served him.",
        ],
        questions: [
          "When did someone last tell you something you did not want to hear, and what happened to them?",
          "Who around you gains from agreeing with you?",
          "When you make a mistake, what other cause do you reach for first?",
        ],
      },
      bearsOn:
        "All of these episodes came before the Indian campaign and the Hyphasis. By the time the army refused to cross, the court had learned that frankness could be fatal, which helps explain why the officers kept a long silence before Coenus spoke. The list of grievances that some authors give Hermolaus is the answer that Alexander changed, in an ancient voice. It is also an ancient author’s composition, and Aristobulus’s kinder versions show that the companions themselves remembered differently.",
      questions: [
        {
          prompt:
            "Of what was Philotas chiefly convicted, in Ptolemy’s account?",
          choices: [
            "Of attacking the king.",
            "Of hearing of a plot against the king and saying nothing.",
            "Of deserting to the Persians.",
          ],
          answer: 1,
          explanation:
            "He visited the royal tent twice a day and did not report what he had heard.",
        },
        {
          prompt:
            "What did Alexander do when the Macedonians’ opposition to prostration became clear?",
          choices: [
            "He executed Anaxarchus.",
            "He sent word that the Macedonians should make no further mention of it, while the Persians performed it.",
            "He made it compulsory for everyone.",
          ],
          answer: 1,
          explanation:
            "He adjusted. The price fell later on Callisthenes, who had opposed him openly.",
        },
        {
          prompt:
            "What do Park, Westphal and Stern report about flattery directed at leaders?",
          choices: [
            "That it makes leaders more open to change.",
            "That it has no measurable effect.",
            "That it increases overconfidence and reduces needed strategic change.",
          ],
          answer: 2,
          explanation:
            "Their survey of chief executives links ingratiation to overconfidence and persistence.",
        },
      ],
      sourceCheck: {
        question: "How did Callisthenes die?",
        witnesses: [
          {
            label: "Aristobulus, in Arrian",
            claim:
              "He was carried about with the army in fetters and died a natural death.",
          },
          {
            label: "Ptolemy, in Arrian",
            claim: "He was racked and then hanged.",
          },
          {
            label: "Plutarch",
            claim:
              "Some say he was hanged, others that he died of sickness in chains; Chares gives another account again.",
          },
        ],
        prompt: "What should a historian conclude?",
        options: [
          {
            text: "Follow Ptolemy, because Arrian trusted him most.",
            feedback:
              "Arrian himself declines to choose, noting that his two best sources contradict each other.",
          },
          {
            text: "That he died in Alexander’s custody, and that the manner of his death cannot be settled from these sources.",
            feedback:
              "Every account has him a prisoner. Beyond that, two eyewitness memoirs disagree, and Arrian says so.",
            best: true,
          },
          {
            text: "That he was released, since one source says he died naturally.",
            feedback: "Aristobulus has him die in fetters, still a prisoner.",
          },
        ],
        campaignSlug: "campaigns-in-bactria-and-sogdiana",
      },
      seminar: {
        prompt:
          "Arrian says Callisthenes should have given his opinion discreetly while praising the king. Was that wise advice, or a description of a court where frankness had already died?",
        guidance:
          "Compare Callisthenes with Coenus at the Hyphasis, who spoke frankly and lived. Ask what was different about the subject, the audience and the moment.",
      },
      sources: [
        s.a4_8,
        s.a3_26,
        s.plu8,
        s.dio17d,
        s.a4_10,
        s.a4_11,
        s.a4_12,
        s.a4_14,
        s.a4_9,
        s.arrianSources,
        s.park,
        s.badianDarius,
      ],
    },
    {
      slug: "opis",
      title: "Opis: changing who counts as one of us",
      part: "The consent of the army",
      themes: ["organisation", "motivation"],
      claim:
        "When a leader widens the circle of insiders, the original core reads it as betrayal unless it keeps a place it recognises as its own.",
      inBrief: {
        strength:
          "At the reconciliation banquet the Macedonians sat nearest the king, with the Persians next to them.",
        shadow:
          "He had armed thirty thousand Asian youths in Macedonian style, and the veterans read it as a plan to do without them.",
      },
      moment: {
        text: "At Opis, Alexander told the assembled Macedonians that he would discharge those too old or maimed to serve and send them home with rewards. Arrian says he meant it to please them, and that they took it, not without reason, as a sign they were now despised and useless. They shouted that he should dismiss them all and make war with his father, mocking his claim to be the son of Ammon. Alexander, Arrian writes, was by then more hasty in temper than before and no longer indulgent to the Macedonians. He had the most conspicuous agitators seized and led away to execution, and the rest fell silent.",
        evidence: "fact",
        refs: [{ source: 0, locator: "7.8" }],
      },
      episodes: [
        {
          title: "What the veterans saw",
          text: "Arrian lists the grievances. Thirty thousand youths from the new cities and conquered lands, whom Alexander called the Epigoni, arrived armed and drilled in Macedonian fashion, and the Macedonians thought he was contriving to free himself from his need of them. His Median dress offended them; the weddings at Susa in the Persian manner displeased most of them, even some of the bridegrooms; Peucestas, satrap of Persis, was resented for adopting Persian dress and speech; Iranian horsemen were enrolled in the Companion cavalry and Iranian nobles in the guard. Plutarch says the youths were taught Greek and Macedonian arms so that Alexander could secure his authority while far away, by mixing customs rather than by force. Diodorus says he formed them as a counterweight to the Macedonian phalanx, because the Macedonians had been unruly.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "7.6" },
            { source: 2, locator: "7.4" },
            { source: 3, locator: "Alexander 47" },
            { source: 4, locator: "17.108" },
          ],
          battleSlugs: [],
        },
        {
          title: "Kinsmen",
          text: "After the speech Arrian composes for him, Alexander shut himself in the palace for two days. On the third he gave the brigade commands to Persians, and Persian units began to take Macedonian names. The Macedonians ran to the palace, threw their weapons down before the gates and refused to leave. When Alexander came out, weeping, a senior cavalry officer, Callines, told him what hurt: Persians had been made the king’s kinsmen and allowed to kiss him, and no Macedonian had. “But all of you without exception I consider my kinsmen,” Alexander answered, and they kissed him. At the banquet that followed, Arrian says, the Macedonians sat around the king, the Persians next to them, and the other peoples after; Alexander prayed for harmony and community of rule between Macedonians and Persians. Plutarch adds that the discharged veterans were to have the front seats and wear garlands at every public contest and theatre at home.",
          evidence: "fact",
          refs: [
            { source: 11, locator: "7.10" },
            { source: 5, locator: "7.11" },
            { source: 6, locator: "Alexander 71" },
          ],
          battleSlugs: [],
        },
        {
          title: "Allies made from enemies",
          text: "The widening had begun long before Opis. At the Sogdian Rock Alexander married Roxane, the daughter of the Bactrian noble Oxyartes, rather than treat her as a captive, which Arrian praises. After the Hydaspes he restored Porus to his kingdom and added more land to it, and found him faithful. Briant describes the adoption of Achaemenid court ceremony from 330 as part of a broad strategy for securing the collaboration of the Iranian upper classes, a policy that provoked strong opposition among the Macedonian nobles. He warns against calling it a policy of fusion: no Macedonian noblewomen were married to Iranians, the number of Iranian satraps fell steadily until 324–323, and Alexander needed Iranian cadres without planning a new integrated ruling class, which the Macedonian nobles would never have accepted.",
          evidence: "interpretation",
          refs: [
            { source: 7, locator: "4.19" },
            { source: 8, locator: "5.19" },
            { source: 9 },
          ],
          battleSlugs: ["sogdian-rock", "hydaspes"],
        },
      ],
      witnesses: [
        {
          who: "Arrian",
          stake:
            "An admirer who defends Alexander’s Persian dress while disapproving of much else.",
          says: "The dress was a political device, so that the king would not seem wholly foreign to the Persians, and so that the Macedonians would see he had a refuge from their rashness and insolence.",
          refs: [{ source: 10, locator: "7.29" }],
        },
        {
          who: "Plutarch",
          stake:
            "A moral biographer who explains the king’s motives generously.",
          says: "He adopted a dress midway between Persian and Median, either to win the natives by shared custom or to accustom the Macedonians gradually to prostration; the Macedonians tolerated it because they admired his other qualities.",
          refs: [{ source: 3, locator: "Alexander 45" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "A tradition alert to the king’s suspicion of his own men.",
          says: "The Persian youths were raised as a counterweight to the phalanx, because the Macedonians mocked Ammon and were unruly in assembly.",
          refs: [{ source: 4, locator: "17.108" }],
        },
        {
          who: "Majidi and Zarrinkoob, historians of the debate",
          stake:
            "Write about how modern historians have read the prayer, not about the event.",
          says: "Tarn read the prayer at Opis as a declaration of the unity of mankind, which he called Homonoia; Badian rejected the idea in 1958; Tarn’s ideal reflected the conditions of his own time.",
          refs: [{ source: 12 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the problem had changed. A king who meant to rule the Persian empire, with a Macedonian army far from home and shrinking, needed Persian soldiers, governors and courtiers. Briant puts it plainly: he urgently needed Iranian civilian and military cadres. The strategic question was not whether to widen the circle but how to do it without telling the original core that it had become disposable. Training a rival army in Macedonian arms, and then announcing a discharge, answered that question in the worst possible way.",
          evidence: "interpretation",
          refs: [{ source: 9 }, { source: 1, locator: "7.6" }],
        },
        {
          text: "The crisis was ended by symbols of place, not by reversing policy. The Persians kept their commands; what changed was that the Macedonians were named kinsmen, sat nearest the king, and went home with gifts, honours in the theatres and Craterus, the man Alexander valued as himself, as their escort. Even then the line was redrawn: the departing veterans had to leave behind their children by Asian wives, so as not to carry discord into Macedonia. Widening the circle at the top did not mean dissolving it at home.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "7.11" },
            { source: 13, locator: "7.12" },
            { source: 6, locator: "Alexander 71" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Leader prototypicality",
          base: "review",
          text: "The social identity theory of leadership holds, in Hogg, van Knippenberg and Rast’s summary, that leaders who are prototypical of their group are better supported, more trusted and seen as more effective, especially when membership is central to members’ identity and they identify strongly with the group. Read that way, the veterans’ complaints are about prototypicality: the king dressed as a Persian, claimed a foreign god as his father, and gave the kiss of kinship to Persians. The remedy at Opis restored the in-group’s visible place without undoing the policy. The Napoleon volume used Steffens and colleagues’ meta-analysis of prototypicality to read a commander’s presence in battle; Opis shows the reverse case, a leader whose task required him to look less like his followers.",
          evidence: "interpretation",
          refs: [{ source: 14 }],
          limit:
            "Only the abstract was read. The research concerns modern groups, and its authors are summarising their own theory’s support.",
        },
      ],
      shadow: {
        text: "Opis was settled by emotion and symbol, but its causes stayed. Arrian has Alexander more hasty in temper than before, executing the agitators before he spoke. The departing veterans lost their children by Asian wives, kept back under promises that Arrian calls uncertain and obscure. And the widening itself was partial: on Briant’s account the number of Iranian satraps fell, and no Macedonian woman was given to an Iranian. Both sides of the new circle had reason to doubt its terms.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "7.8" },
          { source: 13, locator: "7.12" },
          { source: 9 },
        ],
      },
      counterCase: {
        text: "Polybius admires Hannibal for keeping a large army free from sedition, towards him or among themselves, through sixteen years in Italy, though it was made of Africans, Spaniards, Ligurians, Celts, Phoenicians, Italians and Greeks who had nothing in common in laws, customs or language. He credits the commander’s ability. One difference stands out: Hannibal’s army never had a single founding people whose standing a new intake could threaten. Alexander’s had, and it had been promised at his accession that only the king’s name had changed.",
        evidence: "interpretation",
        refs: [{ source: 15, locator: "11.19" }],
        commanderSlug: "hannibal-barca",
        battleSlugs: [],
      },
      cost: {
        text: "The agitators seized at Opis were led away to execution. The veterans who went home had to leave behind their children by Asian wives. The Persian and Median noblewomen married at Susa were given in marriage by the king, as part of alliances he arranged.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "7.8" },
          { source: 13, locator: "7.12" },
          { source: 2, locator: "7.4" },
        ],
      },
      transfer: {
        holdsWhen: [
          "An organisation must bring in people unlike its founders in order to do what it now has to do.",
          "The original members can be given a place that is visibly theirs without blocking the newcomers.",
        ],
        failsWhen: [
          "Newcomers are trained as replacements for the core, and the core is told at the same moment that it is no longer needed.",
          "The symbols of belonging are restored while the reasons for the grievance are left untouched.",
        ],
        questions: [
          "Who were the first members of your team, and what tells them now that they still belong?",
          "When you bring people in, what do the existing members hear?",
          "Which of your gestures of inclusion cost someone else their place?",
        ],
      },
      bearsOn:
        "Opis is the volume’s strongest evidence that the problem changed. The veterans’ grievances were not about exhaustion or a new campaign but about a circle widened to include the people they had conquered. Arrian also says Alexander had grown more hasty in temper, so the answer that he changed is present too. Both answers meet here: a leader whose task now required him to look less Macedonian, and who handled the Macedonians less patiently than before.",
      questions: [
        {
          prompt:
            "What did the Macedonians fear the Epigoni meant, according to Arrian?",
          choices: [
            "That Alexander would invade Macedonia.",
            "That Alexander was contriving to free himself from his need of them.",
            "That they would be sent to India again.",
          ],
          answer: 1,
          explanation:
            "Thirty thousand Asian youths drilled in Macedonian arms looked like replacements.",
        },
        {
          prompt: "What did Callines say grieved the Macedonians at Opis?",
          choices: [
            "That Persians were made the king’s kinsmen and allowed to kiss him, and no Macedonian had been.",
            "That they had not been paid.",
            "That Alexander had refused to cross the Hyphasis.",
          ],
          answer: 0,
          explanation:
            "Alexander answered that he considered all of them his kinsmen.",
        },
        {
          prompt:
            "What does Briant warn against in describing Alexander’s Iranian policy?",
          choices: [
            "Calling it a policy of fusion, since no Macedonian noblewomen married Iranians and the number of Iranian satraps fell.",
            "Treating Persian dress as political.",
            "Using Arrian as a source.",
          ],
          answer: 0,
          explanation:
            "Briant sees responses to the needs of the hour, not a plan for an integrated ruling class.",
        },
      ],
      sourceCheck: {
        question: "What did Alexander’s prayer at the Opis banquet mean?",
        witnesses: [
          {
            label: "Arrian",
            claim:
              "He prayed especially that there might be harmony and community of rule between Macedonians and Persians.",
          },
          {
            label: "Tarn, as Majidi and Zarrinkoob summarise him",
            claim:
              "The prayer was a declaration of the unity of mankind, Homonoia.",
          },
          {
            label: "Briant",
            claim:
              "There was no plan for an integrated ruling class; the measures answered the needs of the hour.",
          },
        ],
        prompt: "What does the evidence support?",
        options: [
          {
            text: "Tarn’s reading, since the prayer speaks of harmony.",
            feedback:
              "The prayer as reported names two peoples, Macedonians and Persians, not mankind, and Tarn’s reading was rejected by Badian in 1958.",
          },
          {
            text: "A prayer for partnership between two ruling peoples, at a banquet where the Macedonians still sat first.",
            feedback:
              "That fits Arrian’s wording, the seating he describes and Briant’s view of policy driven by need.",
            best: true,
          },
          {
            text: "Nothing, since Arrian invented the banquet.",
            feedback:
              "Arrian composes speeches, but the banquet, the seating and the prayer are given as narrative, with a figure he calls the common account.",
          },
        ],
      },
      seminar: {
        prompt:
          "At Opis the Macedonians were won back by being called kinsmen and seated first. Was that leadership, or the management of a grievance that should have been addressed?",
        guidance:
          "Set the symbols beside what did not change: the Persian commands, the Epigoni, the children left behind. Then compare Hannibal’s army, which had no founding people to placate.",
      },
      sources: [
        s.a7_8,
        s.a7_6,
        s.a7_4,
        s.plu67,
        s.dio17f,
        s.a7_11,
        s.plu10,
        s.a4_19,
        s.a5_19,
        s.briant,
        s.a7_29,
        s.a7_10,
        s.majidi,
        s.a7_12,
        s.hogg,
        s.polybius11,
      ],
    },
    {
      slug: "after-gaugamela",
      title: "After Gaugamela: victory is not rule",
      part: "Winning and ruling",
      themes: ["judgement", "ethics"],
      claim:
        "When a victory removes an enemy army but not the reasons for resistance, the hardest work begins after the battle.",
      inBrief: {
        strength:
          "Babylon and Susa opened their gates; he honoured Babylon’s gods and kept Persians as governors.",
        shadow:
          "At Persepolis he burned the palace, and with it, Briant argues, his claim to succeed the Great King.",
      },
      moment: {
        text: "In the weeks after Gaugamela a Babylonian astronomer recorded two things about the victor. From Sippar Alexander sent a message to Babylon: “Into your houses I shall not enter.” Then, the diary says, “Alexander, king of the world, came into Babylon.” Arrian describes the Babylonians coming out in a body with their priests and rulers, bringing gifts and surrendering the city, its citadel and its treasure. Alexander ordered the temples Xerxes had destroyed to be rebuilt, sacrificed to Bel as the Chaldaeans directed, and appointed Mazaeus governor of the Babylonians.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1, locator: "3.16" }],
      },
      episodes: [
        {
          title: "Babylon and Susa",
          text: "Briant says the two great administrative and strategic centres of Babylon and Susa surrendered without a struggle, partly because the last Achaemenid kings had bitterly antagonised the Babylonian priesthood, and that Alexander took the immense Achaemenid treasures. At Susa, Arrian says, he left a Persian, Abulites, as governor, with a Macedonian commanding the citadel and another as general. He sent back to Athens the statues of the tyrant-slayers that Xerxes had carried off. A victor who meant to keep what he had won was working with local elites and local gods.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 1, locator: "3.16" }],
          battleSlugs: ["gaugamela"],
        },
        {
          title: "The fire at Persepolis",
          text: "The sources give three readings of the burning of the palace at Persepolis. In Arrian it is policy: revenge on the Persians for Xerxes’s invasion of Greece, against Parmenion’s warning that the peoples of Asia would think Alexander meant only to conquer and leave; Arrian thinks it imprudent. In Plutarch and Diodorus it is a drunken revel, with the Athenian Thaïs urging the king to burn the house of Xerxes; Plutarch says some called it premeditated, that the Macedonians hoped it meant he was thinking of home, and that Alexander quickly repented. Diodorus adds that the city itself was given to the soldiers to plunder and its men slaughtered. Badian sees a timed political act: the lower city destroyed in January, the terrace and royal buildings burned in May, after Alexander had waited in vain for news of the war in Greece.",
          evidence: "uncertainty",
          refs: [
            { source: 3, locator: "3.18" },
            { source: 4, locator: "Alexander 38" },
            { source: 5, locator: "17.70, 17.72" },
            { source: 6 },
          ],
          battleSlugs: ["persian-gate"],
        },
        {
          title: "The war after the war",
          text: "Darius was still alive. Badian writes that Bessus and other nobles took him prisoner and, fearing capture, stabbed him, and suggests that Alexander’s haste to reach him alive may mean Darius was ready to recognise him as superior, which might have spared years of war. Alexander gave Darius a royal burial, Arrian says. Bessus took the royal tiara and the name Artaxerxes; Briant writes that this let Alexander present himself as the avenger of Darius. When Bessus was captured, Alexander had his nose and ears cut off before sending him to be executed by the Medes and Persians, which Arrian condemns as barbaric. In Bactria and Sogdiana, Briant says, the resistance continued under Spitamenes and broadened into a general revolt.",
          evidence: "fact",
          refs: [
            { source: 6 },
            { source: 7, locator: "3.22" },
            { source: 8, locator: "3.25" },
            { source: 2 },
            { source: 9, locator: "4.7" },
          ],
          battleSlugs: [],
          campaignSlugs: ["campaigns-in-bactria-and-sogdiana"],
        },
      ],
      witnesses: [
        {
          who: "A Babylonian astronomer",
          stake:
            "A temple scribe recording omens and events, with no part in the Greek story.",
          says: "Alexander promised not to enter the houses of Babylon, and entered the city as “king of the world”.",
          refs: [{ source: 0 }],
        },
        {
          who: "Arrian",
          stake:
            "Admires Alexander but disapproves of his Persian turn after Darius’s death.",
          says: "Darius fled disgracefully among the first at Arbela; Bessus’s mutilation was a barbaric custom, and Alexander’s Median dress was not to be commended.",
          refs: [
            { source: 7, locator: "3.22" },
            { source: 9, locator: "4.7" },
          ],
        },
        {
          who: "Plutarch",
          stake: "Interested in the mood of the army as much as the king’s.",
          says: "The Macedonians ran to the burning palace with torches, hoping it meant the king had fixed his thoughts on home.",
          refs: [{ source: 4, locator: "Alexander 38" }],
        },
        {
          who: "Pierre Briant, in the Encyclopaedia Iranica",
          stake: "A historian of the Persian empire and its continuities.",
          says: "The burning of the palace and the firm opposition of the entire Persian people made it impossible for Alexander to pass himself off as the Great King’s legitimate successor.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, Gaugamela solved one problem and exposed another. The Persian royal army was gone, the capitals and the treasure were in reach, and Darius was a fugitive. What remained was the question every conqueror of a great empire faces: whether its people would accept him. Keeping Mazaeus and Abulites, rebuilding Babylon’s temples and returning the tyrant-slayers to Athens were answers that cost little and bought cooperation. Taking a capital gave him the means to rule. It did not give him the right, and he could not take that.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "3.16" }, { source: 2 }],
        },
        {
          text: "Persepolis set two aims against each other. Revenge for Xerxes served the Greek war Alexander had been appointed to lead and pleased an army that hoped to go home; Parmenion’s objection, in Arrian, was that the peoples of Asia would read it as a conqueror passing through. Briant and Badian both judge that the fire damaged his claim to legitimacy, and that only Darius’s recognition might have repaired it. The Napoleon volume’s lesson on victories that do not end wars was about making peace with rivals; this one is about the harder task of being accepted by the conquered.",
          evidence: "interpretation",
          refs: [{ source: 3, locator: "3.18" }, { source: 2 }, { source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Legitimacy",
          base: "review",
          text: "Tyler describes legitimacy as a property of an authority that leads those under it to believe it appropriate, proper and just, so that they defer voluntarily, out of obligation rather than fear of punishment or hope of reward. Because power alone makes influence difficult, he writes, legitimacy matters most in times of scarcity, crisis and conflict. The years after Gaugamela show both forms of rule at work: Babylon’s priests and Persian governors cooperating with a king who honoured their gods, and Bactrian and Sogdian nobles who would not, against whom only force served.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "Only the abstract was read. Tyler reviews research on modern institutions, and the ancient sources rarely record what the conquered believed.",
        },
      ],
      shadow: {
        text: "The fire at Persepolis destroyed more than a palace. Badian writes that it largely undid the effect of Alexander’s striving for legitimacy, and Briant that, with the firm opposition of the entire Persian people, it made his claim to be the Great King’s successor impossible. The war that followed in Bactria and Sogdiana lasted years. The army that had won at Gaugamela spent them fighting a resistance that no single battle could end.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 2 }],
      },
      counterCase: {
        text: "Augustus turned his victory at Actium into a settlement. After Antony and Cleopatra died, Britannica’s account says, he executed Cleopatra’s son Caesarion, annexed Egypt, and used Cleopatra’s treasure to pay off his veterans. Then, by a long and gradual series of tentative, patient measures, he built the principate: absolute control in essentials, exercised as princeps at the head of outwardly revived republican institutions that made his autocracy palatable. He reduced his legions, organised a fleet to police the Mediterranean, and held a census. Where Alexander destroyed the symbol of the old monarchy, Augustus put on the old republic’s forms.",
        evidence: "interpretation",
        refs: [{ source: 11 }],
        commanderSlug: "augustus",
        battleSlugs: ["actium"],
      },
      cost: {
        text: "Diodorus says Persepolis was given to the soldiers to plunder, all but the palaces, and that they killed the men they met and fought among themselves over the spoils before the palace was burned. Darius died at the hands of his own nobles. Bessus was mutilated before his execution, by a punishment Arrian calls barbaric.",
        evidence: "fact",
        refs: [
          { source: 5, locator: "17.70" },
          { source: 6 },
          { source: 9, locator: "4.7" },
        ],
      },
      transfer: {
        holdsWhen: [
          "A decisive win removes the opposing force but leaves the people whose cooperation you need.",
          "Cheap gestures toward local leaders and customs are available and sincere.",
        ],
        failsWhen: [
          "A gesture meant for one audience, such as revenge for your own side, is read as contempt by the people you must now govern.",
          "The victory is treated as the end of the task rather than the start of a harder one.",
        ],
        questions: [
          "After your last success, whose cooperation did you still need?",
          "Which of your acts were aimed at your own side and seen by the other?",
          "What would the people you now lead need to see to accept you?",
        ],
      },
      bearsOn:
        "After Gaugamela the work changed from beating an army to ruling an empire, and the years in Bactria and Sogdiana that wore the army down came from that change. Plutarch’s detail that the Macedonians hoped the fire meant going home shows that by 330 the army’s aims and the king’s were already apart. That supports both the problem-changed answer and the aims-outran-the-men answer.",
      questions: [
        {
          prompt:
            "What did Alexander promise Babylon, according to the Astronomical Diary?",
          choices: [
            "Freedom from taxes.",
            "“Into your houses I shall not enter.”",
            "A new king of its own.",
          ],
          answer: 1,
          explanation:
            "He then entered the city, which the diary calls him king of the world.",
        },
        {
          prompt:
            "What reason does Arrian give Parmenion for sparing the palace at Persepolis?",
          choices: [
            "That it held the royal treasure.",
            "That it was now Alexander’s property, and that the peoples of Asia would think he meant only to conquer and leave.",
            "That the gods forbade it.",
          ],
          answer: 1,
          explanation:
            "Arrian agrees with Parmenion here and calls the burning imprudent.",
        },
        {
          prompt:
            "How did Augustus rule after Actium, on Britannica’s account?",
          choices: [
            "As an openly declared king.",
            "Through outwardly revived republican institutions, built by gradual, patient measures.",
            "By dividing the empire among his generals.",
          ],
          answer: 1,
          explanation:
            "The forms of the old order made the new power acceptable.",
        },
      ],
      sourceCheck: {
        question: "Why did the palace at Persepolis burn?",
        witnesses: [
          {
            label: "Arrian",
            claim:
              "Alexander burned it in revenge for Xerxes’s invasion of Greece, against Parmenion’s advice.",
          },
          {
            label: "Plutarch and Diodorus",
            claim:
              "At a drinking party Thaïs urged the burning of Xerxes’s house, and the king led the revellers with a torch; some said it was premeditated.",
          },
          {
            label: "Ernst Badian",
            claim:
              "The royal buildings were destroyed in May as a symbolic gesture of revenge, after Alexander had waited months for news from Greece.",
          },
        ],
        prompt: "What can the historian conclude?",
        options: [
          {
            text: "That it was an accident of a drinking party.",
            feedback:
              "That is one tradition, and Plutarch himself says others called it premeditated.",
          },
          {
            text: "That it was deliberate revenge, and that a party may have been its occasion; the sources disagree on how planned it was.",
            feedback:
              "Arrian and Badian see policy; the vulgate tells the revel. Both can be true, and the consequence for legitimacy was the same.",
            best: true,
          },
          {
            text: "That Parmenion ordered it.",
            feedback: "Arrian has Parmenion advise against it.",
          },
        ],
        battleSlug: "persian-gate",
      },
      seminar: {
        prompt:
          "Augustus put on the old republic’s forms; Alexander burned the old monarchy’s palace and then adopted its ceremony. Which approach to the defeated was wiser, and for whom?",
        guidance:
          "Ask who each gesture was aimed at: the victor’s own soldiers, the defeated elite, or posterity. Then ask which audience the ruler most needed.",
      },
      sources: [
        s.diary,
        s.a3_16,
        s.briant,
        s.a3_18,
        s.plu5,
        s.dio17d,
        s.badianDarius,
        s.a3_22,
        s.a3_25,
        s.a4_7,
        s.tyler,
        s.augustus,
      ],
    },
    {
      slug: "the-desert-road",
      title: "The desert road: logistics and who pays for daring",
      part: "Winning and ruling",
      themes: ["judgement", "ethics"],
      claim:
        "When a plan depends on one supply arrangement in hostile country, the leader’s boldness is paid for by those who cannot leave.",
      inBrief: {
        strength:
          "He saw that the fleet needed the land and the army needed the coast, and tried to supply both.",
        shadow:
          "In Gedrosia the arrangement failed, and the sick, the stragglers and the families following the army paid for it.",
      },
      moment: {
        text: "Marching through the land of the Gadrosians, Arrian says, the army found a route with no water and no supplies, and marched mostly by night, far from the sea. Alexander wanted to reach the coast, to see what harbours there were and to prepare for the fleet by digging wells or arranging a market and an anchorage. The coast was desert. A scout found only fishermen living in huts of shells and fish bones, scraping brackish water from the gravel. Where corn was more plentiful, Alexander sealed it with his own seal and sent it towards the sea for the fleet. On the way the guards broke the seals and shared it with those most pinched by hunger, choosing, Arrian writes, the destruction in front of their eyes over the king’s distant anger. Alexander, learning why, pardoned them.",
        evidence: "fact",
        refs: [{ source: 0, locator: "6.23" }],
      },
      episodes: [
        {
          title: "Why that road",
          text: "Arrian says most of Alexander’s historians thought nothing in Asia compared with this march. Only Nearchus, who commanded the fleet, gives a reason for choosing it: Alexander had heard that no army had come safely through the desert except those of Semiramis and Cyrus, with a handful of survivors each, and wished to outdo them. Briant gives the practical purpose in the plan: Nearchus was ordered to survey the coast and land supplies of food and water so that the army could cross Gedrosia, and the two forces met in Lower Mesopotamia in January 324. The march and the voyage were one operation, each depending on the other.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "6.24" }, { source: 2 }],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
        {
          title: "The march",
          text: "When food ran short, Arrian says, the soldiers secretly killed and ate the horses and mules and said they had died of thirst; Alexander chose to seem not to know. With the animals gone and the sand deep, wagons were broken up, and the sick and the stragglers could not be carried. Most of those left behind perished in the sand, he writes, like men shipwrecked at sea. A flash flood in the night swept away most of the wives and children of the men who followed the army. When the guides lost the way in the drifting sand, Alexander rode ahead with five men, found the sea, and dug fresh water from the shingle. Plutarch says the crossing took about sixty days and that the army suffered disease, bad food, heat and famine; Diodorus that many died of hunger.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "6.25" },
            { source: 4, locator: "6.26" },
            { source: 5, locator: "Alexander 66" },
            { source: 6, locator: "17.105" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
        {
          title: "When supply had served him",
          text: "Earlier, logistics had been part of his method. The case Arrian gives him at Tyre turns on denying the Persian fleet its coastal bases before marching inland. At the Hydaspes he gathered corn into his camp from the whole country on his side of the river, both to feed the army and to make Porus believe he would wait for winter. In each case the supply arrangement was within reach of his army and under its control. In Gedrosia it depended on a coast that could not be reconnoitred in advance and a fleet that could not be seen.",
          evidence: "interpretation",
          refs: [
            { source: 7, locator: "2.17" },
            { source: 8, locator: "5.9" },
            { source: 0, locator: "6.23" },
          ],
          battleSlugs: ["tyre", "hydaspes"],
        },
      ],
      witnesses: [
        {
          who: "Nearchus, as Arrian reports him",
          stake:
            "The fleet’s commander, whose own voyage was the other half of the plan.",
          says: "Alexander chose the route knowing its dangers, because no army had come through it safely except Semiramis’s and Cyrus’s, and he wished to outdo them.",
          refs: [{ source: 1, locator: "6.24" }],
        },
        {
          who: "Arrian",
          stake: "An admirer who still records what the march cost.",
          says: "Pouring the helmet of water onto the sand was evidence of Alexander’s endurance and self-control, as well as of his skill in managing an army.",
          refs: [{ source: 4, locator: "6.26" }],
        },
        {
          who: "Plutarch",
          stake:
            "A moralist who sets the march beside the revelry that followed.",
          says: "The army suffered disease, bad food, heat and famine through some sixty days, and was relieved only on reaching settled country.",
          refs: [{ source: 5, locator: "Alexander 66" }],
        },
        {
          who: "Pierre Briant, in the Encyclopaedia Iranica",
          stake: "A modern historian reading the operation as a whole.",
          says: "Nearchus’s short-term task was to survey the coast and land food and water for the army crossing Gedrosia.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, the plan had a logic. A fleet sailing an unknown desert coast needed water and food from the land, and an army crossing the desert near that coast could supply it and be supplied in turn. What made it fragile was that the arrangement depended on knowledge nobody had: what the coast held, where the fleet would be, how long the crossing would take. Arrian gives no account of other routes considered. The one motive he reports, from Nearchus, is the wish to outdo two earlier armies that had barely survived.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "6.23" },
            { source: 1, locator: "6.24" },
          ],
        },
        {
          text: "Once the plan failed, Alexander’s handling of it was sound. He pretended not to see the slaughter of the pack animals, pardoned the guards who ate the fleet’s corn, camped away from water so that men would not kill themselves drinking, and walked with the army, refusing water he could not share. These are the acts of a commander who understood his men. They were responses to a crisis his own choice of route had created.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "6.25" },
            { source: 0, locator: "6.23" },
            { source: 4, locator: "6.26" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "The planning fallacy",
          base: "single study",
          text: "Buehler, Griffin and Ross found that people underestimated how long their own tasks would take, though not others’, because they focused on scenarios built from the plan rather than on relevant past experience, and explained away their past failures; the bias vanished when they were asked to connect past experiences to the prediction. In Gedrosia the relevant past experience existed, in the stories of Semiramis and Cyrus coming out of the desert with a handful of survivors. On Nearchus’s account Alexander heard it and treated it as a challenge rather than as a forecast.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "Only the abstract was read. The studies asked students to predict the completion of academic and everyday tasks, a long way from an army in the desert, and the motive comes from one witness.",
        },
      ],
      shadow: {
        text: "The people who paid for the plan were those who could not leave it. The soldiers could break a seal or kill a mule; the sick and the stragglers could only be left behind. The women and children who followed the army had no part in the decision and no means of escaping the flood. No source read for this volume presents the route as a punishment for the refusal at the Hyphasis; the only motive Arrian reports is emulation.",
        evidence: "interpretation",
        refs: [
          { source: 3, locator: "6.25" },
          { source: 1, locator: "6.24" },
        ],
      },
      counterCase: {
        text: "In July 1864, Sherman writes in his memoirs, his armies before Atlanta were two hundred and fifty miles beyond their base, “dependent on a single line of railroad for our daily food.” When he later cut loose for the sea, he did it by order and through country that could feed his men. Special Field Orders No. 120 abolished the general supply train, told the army to forage liberally on the country through organised foraging parties, forbade soldiers to enter dwellings, asked that each family be left a reasonable portion, and allowed corps commanders to order devastation where the inhabitants showed hostility. His order says plainly that the first duty is to those who bear arms. The arrangement was planned rather than hoped for, and its cost fell, by design, on Georgia’s inhabitants rather than on his army. The memoir is Sherman’s own account of his own campaign.",
        evidence: "interpretation",
        refs: [{ source: 10, locator: "chs. 18, 21" }],
        commanderSlug: "william-t-sherman",
        battleSlugs: ["atlanta-campaign"],
      },
      cost: {
        text: "Arrian describes the sick and the exhausted left to die in the sand, men who drank themselves to death on reaching water, and a flood that destroyed most of the wives and children of the army’s followers along with the royal baggage. The fishermen of the coast, whose huts were made of shells, had little water to spare for an army.",
        evidence: "fact",
        refs: [
          { source: 3, locator: "6.25" },
          { source: 0, locator: "6.23" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Success depends on one arrangement, a supplier, a route or a partner, that you cannot see or control in advance.",
          "The people who bear the risk have no way to leave the plan.",
        ],
        failsWhen: [
          "The warnings from earlier attempts are treated as a challenge rather than as evidence.",
          "The plan’s cost is shifted onto people outside it and called planning.",
        ],
        questions: [
          "Which single arrangement does your current plan depend on, and how would you know if it failed?",
          "Who in your plan cannot walk away from it?",
          "What does the record of earlier attempts at this say, and are you treating it as data or as a dare?",
        ],
      },
      bearsOn:
        "The desert came after the refusal at the Hyphasis. The army followed Alexander into it and through it, and he led on foot and refused water he could not share. That he still led in the old way is clear. Where he led them, on the only motive any source records, was a route chosen to surpass Semiramis and Cyrus. That is evidence for aims that had outrun his men, not for an army that had stopped following.",
      questions: [
        {
          prompt:
            "What did Alexander do when the guards broke his seal on the corn meant for the fleet?",
          choices: [
            "He had them executed.",
            "He pardoned them, learning that hunger had driven them to it.",
            "He sent them home.",
          ],
          answer: 1,
          explanation:
            "Arrian says they chose the destruction in front of them over the king’s distant anger.",
        },
        {
          prompt:
            "What reason for the route does Arrian report, and from whom?",
          choices: [
            "To punish the army for the Hyphasis, from Ptolemy.",
            "To outdo Semiramis and Cyrus, from Nearchus alone.",
            "To find a shorter road, from Aristobulus.",
          ],
          answer: 1,
          explanation:
            "No source read for this volume supports the punishment theory.",
        },
        {
          prompt:
            "What did Sherman’s Special Field Orders No. 120 do about supply?",
          choices: [
            "Abolished the general supply train and ordered organised foraging on the country.",
            "Doubled the railroad guard.",
            "Forbade any taking of food from civilians.",
          ],
          answer: 0,
          explanation:
            "He planned to live off rich country, and the cost fell on its inhabitants.",
        },
      ],
      seminar: {
        prompt:
          "Alexander’s men paid for Gedrosia; Georgia’s inhabitants paid for Sherman’s march. Is shifting the cost of daring onto others ever good leadership?",
        guidance:
          "Ask who chose the risk, who bore it, and whether they could refuse. Then ask whether the plan would have been made at all if its maker had borne the cost.",
      },
      sources: [
        s.a6_23,
        s.a6_24,
        s.briant,
        s.a6_25,
        s.a6_26,
        s.plu10,
        s.dio17f,
        s.a2_17,
        s.a5_9,
        s.buehler,
        s.sherman,
      ],
    },
    {
      slug: "to-the-strongest",
      title: "To the strongest: no heir and no plan",
      part: "What remains",
      themes: ["succession", "organisation"],
      claim:
        "When a leader’s authority is wholly personal and no successor is prepared, the organisation survives them only by breaking apart.",
      inBrief: {
        strength:
          "His personal authority held a vast empire and a mixed army together while he lived.",
        shadow:
          "He named no heir, and his half-brother, his mother, his wife and his sons were all killed in the wars that followed.",
      },
      moment: {
        text: "In Babylon in June 323 BCE Alexander lay dying. The Royal Diary, as Arrian reports it, says the soldiers forced their way in, some to see him alive once more, others suspecting his death was being hidden; he could no longer speak, but greeted each of them with his right hand and a sign of the eyes. A Babylonian astronomer wrote under the twenty-ninth day of the month: “The king died. Clouds.” Some authors, Arrian adds, say his Companions asked him to whom he left his kingdom, and he answered: “To the best.” Diodorus has him hand his ring to Perdiccas and answer: “To the strongest.”",
        evidence: "fact",
        refs: [
          { source: 0, locator: "7.26" },
          { source: 1 },
          { source: 2, locator: "17.117" },
        ],
      },
      episodes: [
        {
          title: "Warnings in good time",
          text: "The problem was not new in 323. Before the crossing to Asia, Diodorus says, Antipater and Parmenion advised Alexander to produce an heir first, and he refused. At the Malli town in 325, when the army believed him dead, Arrian says the soldiers did not know who would lead them, because many of the officers seemed equal in rank and merit in the eyes of Alexander and the Macedonians. At his death he had no adult heir: Roxane was pregnant, and Philip’s other son, Arrhidaeus, became the infantry’s candidate.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "17.16" },
            { source: 4, locator: "6.12" },
            { source: 11, locator: "Alexander 77" },
            { source: 5, locator: "18.2" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
        {
          title: "Babylon, 323",
          text: "Diodorus says the throne was vacant because Alexander had died without issue, and a great contention arose. The infantry of the phalanx supported Arrhidaeus. The leading Friends and bodyguards, with the Companion cavalry, prepared to fight them, and the envoy they sent, Meleager, went over to the infantry instead. Those inclined to compromise then brought the parties to terms: Arrhidaeus became king under the name Philip, Perdiccas, who held the ring, became regent, and the great satrapies were shared among the leading officers. Ptolemy received Egypt.",
          evidence: "fact",
          refs: [{ source: 5, locator: "18.2–3" }],
          battleSlugs: [],
        },
        {
          title: "A kingdom won by the spear",
          text: "The family did not survive the generals. Diodorus records that Olympias, Alexander’s mother, was restored to Macedonia with his son when the Macedonian soldiers changed sides out of respect for her and memory of Alexander’s benefits, and that King Philip and his wife Eurydice were captured and murdered. Cassander besieged Olympias in Pydna and, when his soldiers drew back from killing her, relatives of her own victims did it. Years later, fearing that men in Macedonia were saying the boy should have his father’s kingdom, Cassander ordered his guard to murder Roxane and the young king and hide their bodies. With no one left to inherit, Diodorus writes, each ruler held his territory as if it were a kingdom won by the spear. Chinnock notes that Alexander’s other son, by Barsine, was put to death with his mother.",
          evidence: "fact",
          refs: [
            { source: 6, locator: "19.11, 19.35" },
            { source: 7, locator: "19.51" },
            { source: 8, locator: "19.105" },
            { source: 9, locator: "note to 4.19" },
          ],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "The Royal Diary, as Arrian reports it",
          stake:
            "An official court record, whose authenticity Arrian does not question; Aristobulus and Ptolemy, he says, differ little from it.",
          says: "The dying king greeted each soldier with his right hand; nothing is said of an heir.",
          refs: [{ source: 0, locator: "7.26" }],
        },
        {
          who: "“Some authors”, in Arrian",
          stake:
            "Unnamed writers whom Arrian reports without vouching for them.",
          says: "Asked to whom he left his kingdom, he said “To the best”, and foresaw great funeral games.",
          refs: [{ source: 0, locator: "7.26" }],
        },
        {
          who: "Diodorus, with the Loeb editor",
          stake:
            "Follows the vulgate; his editor notes that the Greek word can mean both best and strongest.",
          says: "He gave his ring to Perdiccas and said “To the strongest”, adding that his leading Friends would hold a vast contest at his funeral.",
          refs: [{ source: 2, locator: "17.117 and note" }],
        },
        {
          who: "Arrian, on the poison stories",
          stake: "A historian separating report from belief.",
          says: "He records the stories that Antipater’s sons poisoned the king so as not to seem ignorant of them, not because he thinks them worthy of credence.",
          refs: [{ source: 10, locator: "7.27" }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge what was knowable, and the succession problem was knowable for eleven years. A king who led every assault in person, who had been nearly killed at the Granicus and at the Malli town, and whose army could not name a second in command, was running a risk his own generals had named in 334. He had no adult son. Whatever the reasons, no successor was prepared, and the arrangement made at Babylon was the improvisation of men who already commanded armies.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "17.16" },
            { source: 4, locator: "6.12" },
            { source: 5, locator: "18.2" },
          ],
        },
        {
          text: "The dynasty was still an asset after his death. The infantry at Babylon rallied to Philip’s son, and years later soldiers changed sides out of memory of Alexander. The generals could have ruled through that loyalty; instead they killed its objects one by one, because each living Argead was a claim on territory they meant to keep. Personal authority did not pass to an institution, because none had been built to receive it.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "18.2" },
            { source: 6, locator: "19.11" },
            { source: 8, locator: "19.105" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Napoleon volume’s lesson on what outlasts a leader drew on Weber’s account of charismatic authority and its routinisation, and this lesson does not restate it. No psychological research on succession was read for this volume, and the lesson leaves the question to the historian and the strategist.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological source is offered, and the lesson draws no psychological conclusion.",
        },
      ],
      shadow: {
        text: "The bonds Alexander built were personal, and they died with him. Plutarch says Roxane, jealous and pregnant, lured Darius’s daughter Stateira and her sister to her, killed them and threw their bodies into a well, with Perdiccas’s knowledge. Diodorus says Porus, whom Alexander had restored and found faithful, was treacherously killed after Alexander’s death by Eudamus, who took his elephants. Even the cause of Alexander’s death became a weapon: the poison stories Arrian rejects named Antipater’s sons.",
        evidence: "fact",
        refs: [
          { source: 11, locator: "Alexander 77" },
          { source: 6, locator: "19.14" },
          { source: 10, locator: "7.27" },
        ],
      },
      counterCase: {
        text: "Tokugawa Ieyasu used his own lifetime to settle the succession. Britannica’s account says the imperial court appointed him shogun in 1603, and two years later he formally retired to Sumpu and had the title given to his son Hidetada, intending to establish it as a hereditary Tokugawa prerogative, while he kept responsibility for foreign affairs as retired shogun. Military might, he knew, had to become political right. The surviving son of the man he had served, Toyotomi Hideyori, remained a rival at Ōsaka; when enough of Hideyori’s powerful supporters had died, Ieyasu reduced the castle and destroyed those within it. The heir of a ruler who had not secured his succession was destroyed by one who did.",
        evidence: "interpretation",
        refs: [{ source: 12 }],
        commanderSlug: "tokugawa-ieyasu",
        battleSlugs: ["sekigahara"],
      },
      cost: {
        text: "The wars of the successors lasted decades and were fought with Alexander’s armies. At Pydna, Diodorus says, Cassander’s blockade brought such famine that the besieged fed sawdust to the elephants and slaughtered the pack animals and horses for food. A boy king and his mother were killed in secret, their bodies hidden.",
        evidence: "fact",
        refs: [
          { source: 7, locator: "19.49" },
          { source: 8, locator: "19.105" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The organisation’s cohesion rests on loyalty to one person rather than on rules others accept.",
          "No one has been prepared, publicly and in time, to take over.",
        ],
        failsWhen: [
          "Succession is treated as a sign of weakness, so it is never discussed.",
          "The leader assumes that loyalty to them will transfer to whoever holds their ring.",
        ],
        questions: [
          "If you left tomorrow, who would decide, and would the others accept it?",
          "What part of your organisation’s loyalty is to you rather than to its purpose?",
          "When were you last told to plan your succession, and what did you do?",
        ],
      },
      bearsOn:
        "To the end the army followed the man: soldiers forced their way in to see him dying, the infantry rallied to his half-brother, and years later troops changed sides out of memory of him. The army had not stopped following Alexander. What he never built was a way for that loyalty to outlive him, and the generals who had served him destroyed the family it might have attached to.",
      questions: [
        {
          prompt:
            "What answer does Arrian’s report give to the question of who should inherit the kingdom?",
          choices: [
            "“To my son.”",
            "“To the best”, reported by some authors.",
            "“To Perdiccas.”",
          ],
          answer: 1,
          explanation:
            "Diodorus has “To the strongest”; his editor notes the Greek word can mean either.",
        },
        {
          prompt:
            "How was the throne settled at Babylon, according to Diodorus?",
          choices: [
            "Roxane ruled as queen.",
            "Arrhidaeus became king as Philip, with Perdiccas as regent and the satrapies shared among the officers.",
            "The army elected Ptolemy.",
          ],
          answer: 1,
          explanation:
            "It was a compromise after the infantry and the cavalry nearly fought.",
        },
        {
          prompt:
            "Why did Tokugawa Ieyasu retire in favour of his son, according to Britannica?",
          choices: [
            "Because of illness.",
            "To establish the shogunal title as a hereditary Tokugawa prerogative in his own lifetime.",
            "Because the emperor demanded it.",
          ],
          answer: 1,
          explanation:
            "He kept real responsibilities as retired shogun while the succession was made visible.",
        },
      ],
      sourceCheck: {
        question: "What did the dying Alexander say about his successor?",
        witnesses: [
          {
            label: "Arrian",
            claim:
              "Some authors say he answered “To the best”; the Royal Diary records no such words.",
          },
          {
            label: "Diodorus",
            claim:
              "He gave his ring to Perdiccas and answered “To the strongest”.",
          },
        ],
        prompt: "What should a historian conclude?",
        options: [
          {
            text: "That he left the empire to Perdiccas, since he gave him the ring.",
            feedback:
              "The ring made Perdiccas regent in practice, but Diodorus’s own account of Babylon shows that no one treated it as a bequest of the kingdom.",
          },
          {
            text: "That the saying is reported, not attested, and that the Greek word behind it can mean best or strongest; either way, no heir was named.",
            feedback:
              "Arrian’s court diary says nothing of it, and the words survive through later writers. The absence of an heir is the firm fact.",
            best: true,
          },
          {
            text: "That he named Alexander IV, his unborn son.",
            feedback: "No source read for this lesson says so.",
          },
        ],
      },
      seminar: {
        prompt:
          "Antipater and Parmenion told Alexander to produce an heir before crossing to Asia. Was his refusal a mistake, or would an heir have changed nothing?",
        guidance:
          "Ask what happened to the heirs who did exist, a half-brother and a son, and compare Ieyasu, who handed over the title while he could still enforce it.",
      },
      sources: [
        s.a7_26,
        s.diary323,
        s.dio17f,
        s.dio17a,
        s.a6_12,
        s.dio18a,
        s.dio19b,
        s.dio19c,
        s.dio19f,
        s.a4_19,
        s.a7_27,
        s.plu10,
        s.ieyasu,
      ],
    },
    {
      slug: "the-ledger-of-conquest",
      title: "The ledger of conquest: effective is not the same as good, again",
      part: "What remains",
      themes: ["ethics"],
      claim:
        "When a conqueror is measured, the measure must include who paid, and whose memory kept the account.",
      inBrief: {
        strength:
          "He ruled from Greece to the Indus, founded cities, and kept much of the Persian empire’s structure working.",
        shadow:
          "Thebes, Tyre, Gaza, Massaga, Persepolis and the Malli town; in Persian priestly memory he is “the accursed”.",
      },
      moment: {
        text: "Arrian ends his history with a challenge to the reader. Whoever reproaches Alexander as a bad man, he writes, should first gather all his deeds into one view, then consider who he himself is, and what that man achieved. He admits he has been compelled to censure some of Alexander’s actions, “but I am not ashamed to admire Alexander himself.” This lesson takes up his challenge and turns it round: gather all the deeds into one view, including the ones paid for by others, and ask who kept the record.",
        evidence: "fact",
        refs: [{ source: 0, locator: "7.30" }],
      },
      episodes: [
        {
          title: "The cities that paid",
          text: "Thebes was razed in 335, and its women and children and surviving men sold into slavery. At Tyre the Macedonians, enraged by the long siege, made a great slaughter, and those not sheltering in the temple were enslaved; Diodorus says the men of military age were crucified. At Gaza the defenders died at their posts and their wives and children were sold. In an Indian city whose mercenaries had been allowed to leave under truce, Alexander attacked them on the march; Diodorus has him say he had granted them the right to leave, not friendship, and Plutarch calls the act a stain on his military career. Diodorus says Persepolis was given to the soldiers, who killed the men they met. At the Malli town the army killed every inhabitant, sparing neither women nor children.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "1.9" },
            { source: 2, locator: "2.24" },
            { source: 3, locator: "17.46" },
            { source: 4, locator: "2.27" },
            { source: 5, locator: "17.84" },
            { source: 6, locator: "Alexander 59" },
            { source: 7, locator: "17.70" },
            { source: 8, locator: "6.11" },
          ],
          battleSlugs: [
            "thebes-335-bce",
            "tyre",
            "gaza-332-bce",
            "malli-town-325-bce",
          ],
        },
        {
          title: "What was built",
          text: "Alexander founded cities: one on the Jaxartes, settled with Greek mercenaries, local volunteers and Macedonians unfit for service; Nicaea and Bucephala on the Hydaspes. Coenus, in Arrian’s speech, says the Greek colonists remained in those cities not all of their own free will. Briant argues that the elements of continuity deserve far more emphasis than the classical picture of a violent break: the Achaemenid system of satrapies was kept, new cities often used old sites, and at Ay Khanom the irrigation network was Bactrian rather than Greek engineering. In many ways, he writes, Alexander acted as the last of the Achaemenids.",
          evidence: "interpretation",
          refs: [
            { source: 9, locator: "4.4" },
            { source: 10, locator: "5.19" },
            { source: 11, locator: "5.27" },
            { source: 12 },
          ],
          battleSlugs: ["jaxartes", "hydaspes"],
        },
        {
          title: "Two Persian memories",
          text: "In Persia Alexander was remembered twice. Works reflecting the Sasanian court and priesthood called him the accursed wrecker of the Zoroastrian tradition, who killed the ruler of Iran, burned the sacred texts and killed the priests; most scholars, Kreyenbroek and Kotwal write, are sceptical of the details, and the account looks like a tradition formulated and circulated with specific aims rather than living memory. The other tradition, descended from the Greek romance, made him a world hero and sometimes a sage; in Ferdowsi and many Persian versions he is the son of a Persian king, and he was identified with Dhu’l-Qarnayn of the Qur’an. The same man was claimed as Iran’s enemy and as Iran’s own.",
          evidence: "interpretation",
          refs: [{ source: 13 }, { source: 14 }],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Arrian",
          stake:
            "An admirer who censures particular acts and asks the reader to judge the whole.",
          says: "Let the critic gather all of Alexander’s deeds into one view before reproaching him; “I am not ashamed to admire Alexander himself.”",
          refs: [{ source: 0, locator: "7.30" }],
        },
        {
          who: "Plutarch",
          stake: "A moralist who admires and judges by turns.",
          says: "The attack on the departing mercenaries clings to Alexander’s military career like a stain.",
          refs: [{ source: 6, locator: "Alexander 59" }],
        },
        {
          who: "W. W. Tarn, as later historians describe him",
          stake:
            "A twentieth-century admirer whose Alexander, Majidi and Zarrinkoob argue, reflected his own time.",
          says: "Alexander dreamed of the unity of mankind; and the massacre of the Branchidae, Parke reports, Tarn argued was entirely fictitious.",
          refs: [{ source: 15 }, { source: 16 }],
        },
        {
          who: "H. W. Parke",
          stake: "A historian of Greek oracles weighing the evidence.",
          says: "The massacre of the Branchidae is the most extreme instance behind adverse judgements of Alexander; later writers simply omit it, though the evidence may go back to Callisthenes, an eyewitness if it happened.",
          refs: [{ source: 16 }],
        },
        {
          who: "The Sasanian priestly tradition",
          stake:
            "A court and priesthood restoring a religion and a dynasty, with reasons to cast a destroyer.",
          says: "The accursed Alexander killed the ruler of Iran, burned the Avesta and killed the priests.",
          refs: [{ source: 13 }],
        },
      ],
      strategist: [
        {
          text: "Many of these acts had a purpose the strategist can name. Thebes struck the rest of Greece, Arrian says, with consternation. Tyre fell after a long siege in which the defenders had killed captured Macedonians in sight of the camp. Others had no such purpose: the attack on mercenaries leaving under truce served no end that a truce kept would not have served. The strategist’s measure, whether an act worked, cannot settle whether it was right, and Plutarch’s word for the mercenaries is a moral one.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "1.9" },
            { source: 2, locator: "2.24" },
            { source: 6, locator: "Alexander 59" },
          ],
        },
        {
          text: "Even judged as effective, the conquest has an odd ledger. The empire did not survive its maker as one state. What lasted, on Briant’s account, was much of what Alexander had taken over: the satrapies, the sites, the irrigation. The admiring tradition credits him with founding a new world; the evidence Briant presents credits him more with keeping an old one running under new masters.",
          evidence: "interpretation",
          refs: [{ source: 12 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Napoleon volume’s ledger drew on research on how people disengage from the moral consequences of their acts. This lesson leaves psychology out, because its question is not how Alexander justified himself, for which the record is too thin, but how others kept his account, which is a question for the historian.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological source is offered, and the lesson draws no psychological conclusion.",
        },
      ],
      shadow: {
        text: "The ledger itself is incomplete. Thebes, Tyre and Gaza are known through Greek and Roman writers who counted the victims to show the victor’s power or his anger, in figures this volume does not use. The peoples of the Sogdian towns and the Indian cities appear briefly or not at all. The Persian side survives mostly as a priestly tradition written centuries later with aims of its own. A full account of who paid cannot be drawn up from these sources, and saying so is part of the account.",
        evidence: "interpretation",
        refs: [{ source: 13 }, { source: 3, locator: "17.46" }],
      },
      counterCase: {
        text: "Darius III is the conqueror’s ledger seen from the other side. Arrian, following Alexander’s companions, calls him effeminate, lacking in self-reliance in war, and says he fled disgracefully among the first. Badian, reading the same sources against themselves, says bravery was his best-attested quality and that his reign is known almost entirely from historians who depicted it as a contrast to Alexander’s first years. His death, Badian writes, was a misfortune for both sides but a disaster for Persia. Whoever keeps the record keeps both ledgers: the victor’s credit and the loser’s debit.",
        evidence: "interpretation",
        refs: [{ source: 17, locator: "3.22" }, { source: 18 }],
        commanderSlug: "darius-iii",
        battleSlugs: ["issus", "gaugamela"],
      },
      cost: {
        text: "The account includes the Macedonians too. Coenus, in Arrian’s speech, says most of those who set out with Alexander had died, chiefly of disease, and the rest were worn in body and spirit. The wives and children who followed the army died in Gedrosia’s flood. The enslaved of Thebes, Tyre and Gaza are not counted here, because the sources that count them served other purposes; they are not forgotten.",
        evidence: "interpretation",
        refs: [
          { source: 11, locator: "5.27" },
          { source: 1, locator: "1.9" },
        ],
      },
      transfer: {
        holdsWhen: [
          "A leader’s record is judged by what they built and won.",
          "The people who paid are absent from the account, or present only as numbers.",
        ],
        failsWhen: [
          "The ledger is drawn up by one side only, admirers or accusers.",
          "Moral judgement is replaced by the question of whether it worked.",
        ],
        questions: [
          "Whose costs are missing from the account of your organisation’s greatest success?",
          "Who keeps the record of what you have done, and what do they need it to say?",
          "If the people who paid wrote your history, what would it contain?",
        ],
      },
      bearsOn:
        "This lesson answers the volume’s question. The army did not, on the evidence here, simply stop following Alexander: it followed him through the desert, broke ladders to reach him at the Malli town, forced its way in to see him die, and rallied to his family after. Nor did he simply stop leading: he still fought in the front rank and refused water his men could not have. What failed was the agreement between them. The army had followed a Macedonian king on a Macedonian war; the task became ruling Asia, his aims ran beyond theirs at the Hyphasis, the circle he widened threatened them at Opis, and the court that killed Philotas and Cleitus made it dangerous to tell him so. The ancient writers’ favourite answer, that success corrupted him, has some support in Arrian’s hastier king but is also the frame they brought with them. Napoleon’s volume concluded that the problem got harder and he made it harder. Alexander’s concludes that the problem changed, his aims outran his men’s, and he never built a way for their loyalty to survive the change, or him.",
      questions: [
        {
          prompt:
            "What does Arrian ask of anyone who would reproach Alexander?",
          choices: [
            "To read only Ptolemy.",
            "To gather all his deeds into one view first, and consider who they themselves are.",
            "To visit his tomb.",
          ],
          answer: 1,
          explanation:
            "Arrian admits censuring some acts but says he is not ashamed to admire the man.",
        },
        {
          prompt:
            "What does Briant argue about the effect of Alexander’s conquest?",
          choices: [
            "That it was a complete break with the Persian past.",
            "That continuity deserves more emphasis: satrapies, sites and systems were kept, so that he acted as the last of the Achaemenids.",
            "That it left Asia stagnant.",
          ],
          answer: 1,
          explanation:
            "Briant traces the break thesis to Plutarch and to nineteenth- and twentieth-century European historiography.",
        },
        {
          prompt: "How was Alexander remembered in Persia?",
          choices: [
            "Only as a hero.",
            "Only as a destroyer.",
            "Both: as the accursed destroyer in the Sasanian priestly tradition, and as a world hero, even a Persian prince, in the romance tradition.",
          ],
          answer: 2,
          explanation:
            "Iranica shows two contradictory traditions transmitted side by side.",
        },
      ],
      sourceCheck: {
        question: "Did Alexander massacre the Branchidae?",
        witnesses: [
          {
            label: "W. W. Tarn, as Parke reports him",
            claim: "The event was entirely fictitious.",
          },
          {
            label: "H. W. Parke",
            claim:
              "Later writers usually omit it; but the evidence may go back to Callisthenes, who would have been an eyewitness if it occurred.",
          },
        ],
        prompt: "What is the honest position?",
        options: [
          {
            text: "That it happened, because it is the worst story told of him.",
            feedback:
              "The worst story is not the best attested. Arrian does not tell it.",
          },
          {
            text: "That it is contested, and must be kept separate from atrocities that every tradition reports, such as Thebes and Tyre.",
            feedback:
              "Thebes, Tyre and Gaza are in Arrian; the Branchidae are not. A ledger should mark the difference.",
            best: true,
          },
          {
            text: "That it never happened, as Tarn argued.",
            feedback:
              "Tarn’s admiration shaped his Alexander, as later historians note; Parke points to an early witness.",
          },
        ],
      },
      seminar: {
        prompt:
          "The volume’s answer is that the problem changed, his aims outran his men’s, and he built nothing to outlast him. Argue the opposite: that he did change, as the ancient writers say, and that the change explains the rest.",
        guidance:
          "Use Philotas, Cleitus, the prostration affair and Arrian’s note that he had grown hastier in temper. Then ask how much of that evidence comes from writers who expected success to corrupt.",
      },
      sources: [
        s.a7_30,
        s.a1_9,
        s.a2_24,
        s.dio17c,
        s.a2_27,
        s.dio17e,
        s.plu8,
        s.dio17d,
        s.a6_11,
        s.a4_4,
        s.a5_19,
        s.a5_27,
        s.briant,
        s.zoroastrian,
        s.eskandarNama,
        s.majidi,
        s.parke,
        s.a3_22,
        s.badianDarius,
      ],
    },
  ],
};
