import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 6, written in reviewed batches (batch C1, the pilot, is lessons 0,
// the record, 3, defeats explained, and 5, the army bound to him; batch C2 is
// lessons 1, speed, 2, the front rank, and 4, siege lines on two fronts;
// batch C3 is lessons 6, lieutenants, 7, Gaul divided, and 8, clemency;
// batch C4 is lessons 9, the rival, 10, the Rubicon, and 11, the ledger);
// docs/LEADERSHIP_EVIDENCE_CAESAR.md records which sources can carry each
// lesson, and docs/SOURCE_AUDIT.md how each was read. Classical texts are the
// Loeb translations on LacusCurtius; locators are book and chapter, or
// chapter alone for the Lives.
const lacus = "LacusCurtius, University of Chicago";
const thayer = (path: string, title: string): Source => ({
  title,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/${path}%2A.html`,
  publisher: lacus,
});
const edwards = (path: string, chapters: string): Source =>
  thayer(
    `Caesar/Gallic_War/${path}`,
    `Caesar, The Gallic War ${chapters}, trans. H. J. Edwards (Loeb Classical Library, 1917)`,
  );
const peskett = (path: string, chapters: string): Source =>
  thayer(
    `Caesar/Civil_Wars/${path}`,
    `Caesar, The Civil Wars ${chapters}, trans. A. G. Peskett (Loeb Classical Library, 1914)`,
  );
const arrian = (book: string, chapter: string, label: string): Source => ({
  title: `Arrian, Anabasis of Alexander ${label} (trans. E. J. Chinnock, 1884)`,
  url: `https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_${book}/Chapter_${chapter}`,
  publisher: "Wikisource",
});
const s = {
  gw1A: edwards("1A", "1.1–29"),
  gw1B: edwards("1B", "1.30–54"),
  gw2: edwards("2", "book 2"),
  gw4: edwards("4", "book 4"),
  gw5B: edwards("5B", "5.26–58"),
  gw7B: edwards("7B", "7.8–14"),
  gw7C: edwards("7C", "7.15–33"),
  gw7D: edwards("7D", "7.34–52"),
  gw7E: edwards("7E", "7.53–62"),
  gw7F: edwards("7F", "7.63–74"),
  gw7G: edwards("7G", "7.75–90"),
  hirtius: thayer(
    "Caesar/Gallic_War/8A",
    "Aulus Hirtius, The Gallic War 8, preface and 1–48, trans. H. J. Edwards (Loeb Classical Library, 1917)",
  ),
  cw1A: peskett("1A", "1.1–29"),
  cw1B: peskett("1B", "1.30–58"),
  cw1C: peskett("1C", "1.59–87"),
  cw3A: peskett("3A", "3.1–30"),
  cw3B: peskett("3B", "3.31–55"),
  cw3C: peskett("3C", "3.56–81"),
  cw3D: peskett("3D", "3.82–112"),
  spanish: thayer(
    "Caesar/Spanish_War/text",
    "The Spanish War, by an unknown author, trans. A. G. Way (Loeb Classical Library, 1955)",
  ),
  way: thayer(
    "Caesar/Spanish_War/Introduction",
    "A. G. Way, introduction to The Spanish War (Loeb Classical Library, 1955)",
  ),
  suetonius: thayer(
    "Suetonius/12Caesars/Julius",
    "Suetonius, The Deified Julius, trans. J. C. Rolfe (Loeb Classical Library, 1913)",
  ),
  suetoniusAugustus: thayer(
    "Suetonius/12Caesars/Augustus",
    "Suetonius, The Deified Augustus, trans. J. C. Rolfe (Loeb Classical Library, 1913)",
  ),
  resGestae: thayer(
    "Augustus/Res_Gestae/1",
    "Augustus, Res Gestae Divi Augusti 1–7, trans. F. W. Shipley (Loeb Classical Library, 1924)",
  ),
  resGestae6: thayer(
    "Augustus/Res_Gestae/6",
    "Augustus, Res Gestae Divi Augusti 32–35, trans. F. W. Shipley (Loeb Classical Library, 1924)",
  ),
  plutarchCaesar: thayer(
    "Plutarch/Lives/Caesar",
    "Plutarch, Life of Caesar (Loeb Classical Library, 1919)",
  ),
  plutarchPompey: thayer(
    "Plutarch/Lives/Pompey",
    "Plutarch, Life of Pompey (Loeb Classical Library)",
  ),
  appian: thayer(
    "Appian/Civil_Wars/2",
    "Appian, The Civil Wars, book 2 (Loeb Classical Library, 1913)",
  ),
  dio40: thayer(
    "Cassius_Dio/40",
    "Cassius Dio, Roman History, book 40 (Loeb Classical Library)",
  ),
  dio43: thayer(
    "Cassius_Dio/43",
    "Cassius Dio, Roman History, book 43 (Loeb Classical Library)",
  ),
  dio41: thayer(
    "Cassius_Dio/41",
    "Cassius Dio, Roman History, book 41 (Loeb Classical Library)",
  ),
  dio42: thayer(
    "Cassius_Dio/42",
    "Cassius Dio, Roman History, book 42 (Loeb Classical Library, 1916)",
  ),
  pliny: {
    title:
      "Pliny the Elder, Natural History, book 7, trans. H. Rackham (Loeb Classical Library)",
    url: "https://en.wikisource.org/wiki/Natural_History_(Rackham,_Jones,_%26_Eichholz)/Book_7",
    publisher: "Wikisource",
  },
  precis: {
    title:
      "Napoléon, Précis des guerres de César, written by Marchand at Saint Helena at the Emperor’s dictation (Paris, 1836), in French",
    url: "https://archive.org/details/prcisdesguerres00marcgoog",
    publisher: "Internet Archive (Google scan)",
  },
  gurwoodXII: {
    title:
      "The Dispatches of Field Marshal the Duke of Wellington, comp. John Gurwood, vol. XII (London: John Murray, 1838)",
    url: "https://archive.org/details/dispatchesoffiel12welluoft",
    publisher: "Internet Archive (University of Toronto)",
  },
  eb1911: {
    title: "“Caesar, Gaius Julius”, Encyclopædia Britannica, 11th ed. (1911)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Caesar,_Gaius_Julius",
    publisher: "Wikisource",
  },
  tyler: {
    title:
      "Tom R. Tyler, Psychological perspectives on legitimacy and legitimation (2006), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/16318600/",
    publisher: "Annual Review of Psychology",
  },
  gurwoodVI: {
    title:
      "The Dispatches of Field Marshal the Duke of Wellington, comp. John Gurwood, vol. VI (London: John Murray, 1836)",
    url: "https://archive.org/details/dispatchesoffiel06welluoft",
    publisher: "Internet Archive (University of Toronto)",
  },
  kross: {
    title:
      "Ethan Kross and others, Self-talk as a regulatory mechanism: how you do it matters (2014), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/24467424/",
    publisher: "Journal of Personality and Social Psychology",
  },
  mezulis: {
    title:
      "Amy Mezulis, Lyn Abramson, Janet Hyde and Benjamin Hankin, Is there a universal positivity bias in attributions? A meta-analytic review of individual, developmental, and cultural differences in the self-serving attributional bias (2004), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/15367078/",
    publisher: "Psychological Bulletin",
  },
  ndbGneisenau: {
    title:
      "Gneisenau, August Wilhelm Anton Graf Neidhardt von (Hermann Teske, Neue Deutsche Biographie 6, in German)",
    url: "https://www.deutsche-biographie.de/sfz69918.html",
    publisher: "Deutsche Biographie",
  },
  ndbArminius: {
    title: "Arminius (Johannes Bühler, Neue Deutsche Biographie 1, in German)",
    url: "https://www.deutsche-biographie.de/118504037.html",
    publisher: "Deutsche Biographie",
  },
  liviusTeutoburg: {
    title: "Teutoburg Forest (9 CE) (Jona Lendering)",
    url: "https://www.livius.org/articles/battle/teutoburg-forest-9-ce/",
    publisher: "Livius.org",
  },
  liviusHannibal: {
    title: "Hannibal Barca (Jona Lendering)",
    url: "https://www.livius.org/articles/person/hannibal-3-barca/",
    publisher: "Livius.org",
  },
  eb1911Gustavus: {
    title:
      "“Gustavus II. Adolphus” (R. N. Bain), Encyclopædia Britannica, 11th ed. (1911)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Gustavus_II._Adolphus",
    publisher: "Wikisource",
  },
  omanVI: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. VI: September 1812–August 1813 (Oxford: Clarendon Press, 1922)",
    url: "https://archive.org/details/historyofpeninsu06oman",
    publisher: "Internet Archive (University of Toronto)",
  },
  a6_12: arrian("VI", "XII", "6.12"),
  a6_13: arrian("VI", "XIII", "6.13"),
  a7_8: arrian("VII", "VIII", "7.8"),
  a7_11: arrian("VII", "XI", "7.11"),
} satisfies Record<string, Source>;

export const caesarVolume: LeadershipVolume = {
  commanderSlug: "julius-caesar",
  title: "Leadership Lessons from Julius Caesar",
  summary:
    "What a person who leads others can take from Caesar’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Gaius Julius Caesar commanded in Gaul from 58 to 50 BCE and fought the civil war against Pompey and the Senate from 49 to 45. He won most of the battles he chose to fight, was beaten at Gergovia and Dyrrhachium, and wrote the main account of the Gallic War and of the civil war to 48 himself, year by year and in the third person, for readers in Rome who would decide his future. The writers who tell the story differently, Plutarch, Suetonius, Appian and Cassius Dio, wrote one to three centuries after him, and the Gallic side survives almost only through Roman authors and archaeology. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. The costs stay in view: the peoples of Gaul, killed and enslaved in a war of conquest, the soldiers of both sides in a civil war, and a Republic that did not survive his victory. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "What won Caesar his wars: his speed, his soldiers, his enemies’ divisions, or his own account of them?",
  parts: [
    "Orientation",
    "Speed and risk",
    "An army bound to him",
    "Enemies and allies",
    "Beyond the battlefield",
  ],
  lessons: [
    {
      slug: "how-to-read-caesar",
      title: "A commander who wrote his own war: how to read Caesar",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a leader writes the main account of his own campaigns while they are still being fought, for readers who will judge him, a lesson drawn from it is only as sound as the reader’s ability to separate what he reports from what he argues.",
      inBrief: {
        strength:
          "A plain, year-by-year record of his wars, written while he fought them.",
        shadow:
          "The record was his case for the defence, and for most of his campaigns no other contemporary account survives.",
      },
      moment: {
        text: "The day after his legions were driven down from the walls of Gergovia in 52 BCE, Caesar called a parade. By his own account he reprimanded the soldiers for deciding for themselves where to advance and what to do, for not halting when the signal to retire was given, and for ignoring their tribunes and legates. He reminded them that at Avaricum he had given up a certain victory rather than suffer even slight loss on unfavourable ground, praised a courage that no camp, mountain or wall had been able to check, and blamed as greatly their presumption in thinking they knew better than their commander how to win. He required of his soldiers, he said, discipline and self-restraint no less than valour. The speech survives because Caesar wrote it into the seventh book of his Gallic War, in the third person, as the commander’s account of a defeat in an assault he had ordered.",
        evidence: "fact",
        refs: [{ source: 0, locator: "7.52" }],
      },
      episodes: [
        {
          title: "Who wrote which book",
          text: "Suetonius, writing about a century and a half later, says that Caesar left memoirs of the Gallic War and of the civil war with Pompey, and that the author of the Alexandrian, African and Spanish Wars was unknown: some thought Oppius, others Hirtius, who also supplied the last book of the Gallic War, which Caesar left unwritten. Aulus Hirtius’s own preface to that eighth book, addressed to Balbus, says he undertook the supplement unwillingly, that he had completed Caesar’s unfinished work from Alexandria to the end of Caesar’s life, and that he had not been present in the Alexandrian or African campaigns, knowing them from Caesar’s conversation. The modern Loeb editor of the Spanish War, A. G. Way, calls its author unknown: an honest man struggling with an unfamiliar task, whose grammar is uncertain and whose habit of changing the subject without warning causes serious ambiguities. Caesar’s own record ends in 48 BCE.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "56.1" },
            { source: 2, locator: "preface" },
            { source: 3 },
          ],
          battleSlugs: ["munda"],
        },
        {
          title: "Praise and doubt",
          text: "Suetonius quotes two admirers and one doubter. Cicero, in his Brutus, praised the memoirs as ‘naked in their simplicity, straightforward yet graceful, stripped of all rhetorical adornment’, written to give others material for history, but so good that men of sense would not touch the subject. Hirtius said they had robbed historians of an opportunity, and that those close to Caesar knew how easily and rapidly he wrote them. Asinius Pollio, as Suetonius reports him, thought they were put together ‘somewhat carelessly and without strict regard for truth’: Caesar believed too readily what others told him of their actions, and gave a perverted account of his own, either on purpose or from forgetfulness, and Pollio thought he meant to revise them. Pollio was no outsider. Plutarch puts him among the friends with whom Caesar talked through the consequences at the Rubicon, and Suetonius cites him as the witness of Caesar’s words on the field of Pharsalus.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "56.2–4, 30.4" },
            { source: 4, locator: "32" },
          ],
          battleSlugs: ["pharsalus"],
        },
        {
          title: "Counting a defeat",
          text: "Caesar’s account of Gergovia says the attack was meant as a surprise, not a battle, and that he had told his legates to keep the men in hand; the Tenth, with him, halted at the trumpet, but the other legions, beyond a valley, did not hear it and pressed on to the walls. Suetonius, listing the times Caesar met adverse fortune in Gaul, counts three, one of them the rout of a legion at Gergovia. Napoleon, dictating his summary of Caesar’s wars on Saint Helena, says Caesar was beaten three times in thirteen campaigns, at Dyrrhachium, at Alexandria and in Africa, and his list does not include Gergovia. The same event is a reverse in one reader, a lesson about discipline in Caesar’s own pages, and absent from a professional soldier’s reckoning.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "7.45, 7.47" },
            { source: 1, locator: "25.2" },
            { source: 5, locator: "ch. 1, p. 28" },
          ],
          battleSlugs: ["gergovia"],
        },
        {
          title: "A conduct he coloured",
          text: "In 55 BCE the Usipetes and Tencteri, Germans who had crossed the Rhine, were treating with Caesar under a truce when their horsemen attacked his. In his account the next morning their chiefs came to his quarters, ‘as treacherous and hypocritical as ever’, and he had them detained, then marched on their leaderless camp and drove its people, women and children among them, to the Rhine. Plutarch, citing the historian Tanusius, says that when the Senate voted thanksgivings Cato proposed handing Caesar over to the barbarians to purge the city of the broken truce. Napoleon judged the conduct contrary to the law of nations and wrote that Caesar tried in vain to colour its injustice in his memoirs, adding that Cato had reproached him openly.",
          evidence: "fact",
          refs: [
            { source: 6, locator: "4.13–15" },
            { source: 4, locator: "22" },
            { source: 5, locator: "ch. 4, p. 60" },
          ],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-conquest-of-gaul-58-53-bce"],
        },
      ],
      witnesses: [
        {
          who: "Caesar’s Commentaries",
          stake:
            "Yearly reports written by the commander in the third person, while the wars went on, for readers in Rome who would decide his future.",
          says: "What he did and why, and whom to blame when things went wrong.",
          refs: [{ source: 0, locator: "7.52" }],
        },
        {
          who: "Asinius Pollio, as Suetonius reports him",
          stake:
            "An officer who was with Caesar at the Rubicon and at Pharsalus, as Plutarch and Suetonius place him, known here only through a sentence of Suetonius.",
          says: "The memoirs were careless and not strictly truthful about others’ actions or Caesar’s own.",
          refs: [{ source: 1, locator: "56.4" }],
        },
        {
          who: "Aulus Hirtius",
          stake:
            "Caesar’s officer, who wrote the last book of the Gallic War after Caesar’s death and admired the books he continued.",
          says: "No one could match the Commentaries, and Caesar wrote them easily and fast.",
          refs: [{ source: 2, locator: "preface" }],
        },
        {
          who: "Napoleon, in the Précis des guerres de César",
          stake:
            "A deposed emperor dictating on Saint Helena, reading another commander’s record as a professional while shaping his own.",
          says: "Caesar’s treatment of the Usipetes broke the law of nations, and his memoirs could not hide it.",
          refs: [{ source: 5, locator: "ch. 4, p. 60" }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge a decision by what the commander could know when he made it. For most of the Gallic War the only witness to what Caesar knew is Caesar. A judgement of his decisions there is therefore a judgement of his story, and the method has to change: test the account against itself, and against later writers who had other sources. Read that way, the Commentaries often give their author away. At Gergovia Caesar describes the valley that kept the legions from hearing the recall, which is evidence against the plan as well as against the men. Of the Usipetes he records that their chiefs had come to his quarters to excuse the previous day’s fighting and to ask about the truce when he had them detained. The plain style that Cicero praised leaves these details in.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "7.45–47" },
            { source: 6, locator: "4.13" },
          ],
        },
        {
          text: "The third person is part of the method. The narrator occasionally says ‘as I related’, but the commander is always Caesar, whose decisions seem to follow from circumstances while other people’s follow from character: the Usipetes are treacherous, the legions at Gergovia over-eager. Each book was written for readers who would decide on his command and his consulship, and a reader who wants the strategy has to set aside the verdicts and keep the facts the verdicts are built from.",
          evidence: "interpretation",
          refs: [
            { source: 10, locator: "2.24" },
            { source: 0, locator: "7.52" },
            { source: 6, locator: "4.13" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on referring to oneself in the third person exists, but it does not fit this case. Kross and colleagues found that people who used their own name or non-first-person pronouns while privately thinking over a stressful event distanced themselves from it and handled the stress better. Caesar’s third person was a public literary form, chosen for readers, and no study read for this volume tests what such writing does to its author or its readers. The lesson relies instead on the documents: who wrote each book, when, and for whom.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "No mechanism is offered. The only study read concerns private introspection under stress, not public narrative, and only its abstract was read.",
        },
      ],
      shadow: {
        text: "A record this persuasive crowds out the others. Cicero, as Suetonius quotes him, thought it kept men of sense from writing the subject at all, and Hirtius that it robbed historians of an opportunity. For most of the Gallic War no other contemporary account survives; the Gallic side speaks only through Roman authors and archaeology, and Pollio’s doubts reach us in a sentence of a later biographer. Even Napoleon, reading with a soldier’s suspicion, followed Caesar’s campaigns year by year in his chapters and left Gergovia out of his list of Caesar’s defeats.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "56.2–4" },
          { source: 2, locator: "preface" },
          { source: 5, locator: "ch. 1, p. 28" },
        ],
        battleSlugs: ["gergovia"],
      },
      counterCase: {
        text: "Wellington chose the opposite form, and the Wellington volume’s orientation shows how to read it. Asked in August 1815 to help with a history of Waterloo, he answered that the object was very difficult and, if attained, not a little invidious. The history of a battle, he wrote, was not unlike the history of a ball: people remembered the little events but not their order or exact moment, which made all the difference to their value, and a true history would have to include the faults and misbehaviour of some of those engaged; it was better for the general interest to leave those parts untold. He offered his help all the same. Caesar told the story himself, year by year, and named whom he blamed; Wellington left parts of it untold and others told them. Both shaped what later readers could know.",
        evidence: "interpretation",
        refs: [{ source: 8, locator: "p. 590" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "The record’s silences fall hardest on the conquered. Of the Usipetes and Tencteri Caesar writes that when his troops broke into their camp a crowd of women and children fled in all directions and he sent the cavalry after them, and that those who reached the meeting of the Meuse and the Rhine threw themselves into the river. No German account survives. More than a century later the elder Pliny, admiring Caesar’s speed of mind, refused to count the killing in his battles to his glory, called it a great wrong done to mankind, and observed that Caesar himself had admitted as much by not publishing the slaughter of the civil wars.",
        evidence: "fact",
        refs: [
          { source: 6, locator: "4.14–15" },
          { source: 7, locator: "7.91–92" },
        ],
      },
      transfer: {
        holdsWhen: [
          "A leader’s own report is the main or only record of what happened, and it was written for people who would judge the leader.",
          "Other witnesses, even late or hostile ones, survive to set beside it.",
        ],
        failsWhen: [
          "A report is read as neutral because its style is plain; Caesar’s plainness was praised by the readers it was written to persuade.",
          "Silence is read as absence, so that what the report leaves out, such as the view of the conquered, is treated as not having happened.",
        ],
        questions: [
          "Which of your organisation’s records were written by the people whose decisions they describe, and for whom?",
          "When your own report of a failure names someone to blame, what does it leave out about the plan?",
          "Whose account of your last success does not exist, and why?",
        ],
      },
      bearsOn:
        "The four answers to the volume’s question are not equal witnesses. The Commentaries are the main evidence for the first two, speed and soldiers; they show the third, the enemy’s divisions, mostly as the enemy’s weakness; and they are themselves the fourth. Two ancient readers frame the test from opposite ends: Pliny, who ranked Caesar first for a vigour and speed of mind winged as if with fire and still would not call his killing glory, and Pollio, who served him and doubted his accuracy. The lessons that follow test each answer against the record and against what the record leaves out.",
      questions: [
        {
          prompt:
            "Which parts of the ‘Commentaries’ did Caesar himself write, according to Suetonius and Hirtius?",
          choices: [
            "All the books on the Gallic, Alexandrian, African and Spanish wars.",
            "The Gallic War to 52 BCE and the civil war to 48; Hirtius added the eighth book of the Gallic War, and the author of the later war books was unknown.",
            "Only the civil war; the Gallic War was written by his officers.",
          ],
          answer: 1,
          explanation:
            "Suetonius says the author of the Alexandrian, African and Spanish Wars was unknown, perhaps Oppius or Hirtius; Hirtius’s preface says he supplemented the Gallic War and finished Caesar’s unfinished work.",
        },
        {
          prompt: "What was Asinius Pollio’s judgement of the Commentaries?",
          choices: [
            "That they were the finest history ever written.",
            "That they were put together somewhat carelessly and without strict regard for truth, about others’ actions and Caesar’s own.",
            "That they had been written by Hirtius.",
          ],
          answer: 1,
          explanation:
            "Suetonius reports it, with Pollio’s reasons and his belief that Caesar meant to revise them. Pollio served with Caesar.",
        },
        {
          prompt:
            "Why does a strategist reading the Gallic War have to change method?",
          choices: [
            "Because Caesar gives no details of his decisions.",
            "Because for most of it Caesar is the only witness to what he knew, so judging his decisions means testing his story against itself and later writers.",
            "Because the Gallic War was written centuries later.",
          ],
          answer: 1,
          explanation:
            "Without hindsight means judging by what the commander knew, and here only the commander says what he knew.",
        },
      ],
      sourceCheck: {
        question: "Was Gergovia a defeat of Caesar’s?",
        witnesses: [
          {
            label: "Caesar, Gallic War 7.45–52",
            claim:
              "A limited surprise that succeeded until legions out of earshot of the recall pressed on against orders; he blamed their indiscipline and the ground.",
          },
          {
            label: "Suetonius, Julius 25",
            claim:
              "One of only three times Caesar met adverse fortune in Gaul: a legion was routed at Gergovia.",
          },
          {
            label: "Napoleon, Précis, chapter 1",
            claim:
              "Caesar was beaten three times in thirteen campaigns, at Dyrrhachium, Alexandria and in Africa; Gergovia is not among them.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Follow Caesar, because he was there.",
            feedback:
              "He was there and he ordered the assault; his account is evidence of what happened and an argument about who was to blame.",
          },
          {
            text: "Follow Napoleon, because he was a professional soldier.",
            feedback:
              "His list repeats the frame Caesar wrote, in which a reverse caused by others’ disobedience does not count as Caesar’s defeat.",
          },
          {
            text: "Take the facts from Caesar’s own narrative, which records the failed assault and the siege raised, and treat the verdicts as each writer’s argument.",
            feedback:
              "Caesar’s details establish a repulse and a withdrawal; whether to call it his defeat is the question each later reader answered differently.",
            best: true,
          },
        ],
        battleSlug: "gergovia",
      },
      seminar: {
        prompt:
          "Caesar wrote his own history of his wars while fighting them. Argue whether that makes the Commentaries more or less useful to someone trying to learn from his decisions, from three positions: a Roman senator in 51 BCE, a Gallic survivor, and a modern historian.",
        guidance:
          "Use the Gergovia speech, the Usipetes and Pollio’s judgement. Say in each case what the reader could check, and what only Caesar could tell them.",
      },
      sources: [
        s.gw7D,
        s.suetonius,
        s.hirtius,
        s.way,
        s.plutarchCaesar,
        s.precis,
        s.gw4,
        s.pliny,
        s.gurwoodXII,
        s.kross,
        s.gw2,
      ],
    },
    {
      slug: "celeritas",
      title: "Speed as a habit",
      part: "Speed and risk",
      themes: ["judgement", "adaptation"],
      claim:
        "When a commander moves before the enemy expects, he can decide a campaign before it is fought, but only while his army can sustain the pace and he knows enough of what lies ahead to land on solid ground.",
      inBrief: {
        strength:
          "He arrived before his enemies, and often before his own messengers, expected him.",
        shadow:
          "In 48 he crossed to Epirus with part of his army and spent months short of men and corn by a sea his enemy held.",
      },
      moment: {
        text: "In the winter of 52 BCE, with Gaul rising behind him and his legions in their winter quarters far to the north, Caesar was in the Roman Province, cut off from his army. To bring the legions south would mean a battle without him; to ride north through peoples in revolt would mean trusting his life to tribes he could not trust. He did neither at first. By his own account he secured the Province, then led the forces he had into the Cevennes, the range between the Helvii and the Arverni, in the severest season of the year, cleared snow six feet deep and came down on the Arverni, who had thought the mountains a wall no traveller crossed in winter. When Vercingetorix turned back to defend them, Caesar left the force under young Brutus, rode by forced marches to Vienne before his own army expected him, and pressed on day and night to the legions in the country of the Lingones, concentrating them before the Arverni heard he had come.",
        evidence: "fact",
        refs: [{ source: 0, locator: "7.6–9" }],
      },
      episodes: [
        {
          title: "The first campaign",
          text: "Plutarch says Caesar reached the Rhone in seven days on his first journey from Rome to Gaul, and that he slept in carriages and litters to make rest serve movement. Caesar’s own account of 58 shows the same habit in command: hearing that the Helvetii meant to march through the Province, he hurried from Rome to Geneva and broke the bridge; later, when three-quarters of them had crossed the Saône, he left camp in the third watch, destroyed the canton still on the near bank, and bridged the river in a single day, a crossing the migrants had taken twenty days to make. Their envoys came to him in alarm at the speed of his approach.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "17" },
            { source: 2, locator: "1.7, 1.12–13" },
          ],
          battleSlugs: ["bibracte"],
        },
        {
          title: "The crossing to Epirus",
          text: "In January 48 Caesar came to Brundisium, where he had ordered his legions and cavalry to meet him, and found ships for only part of them. That, he writes, was the only thing that kept him from finishing the war quickly. He told the men to leave their slaves and baggage behind so that more could be crammed aboard, sailed on 4 January, and landed on the coast of Epirus before Pompey’s admiral Bibulus could come out; Bibulus had his fleet disorganised and his rowers dispersed. But the ships sent back that night started late, and Bibulus caught a number of them empty and burned them with their crews. The rest of the army was left in Italy for months. Suetonius says that when it was slow to follow, Caesar tried to cross back alone by night in a small boat, his head muffled, and would not let the helmsman turn back in the gale until the waves nearly swamped them.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "3.2, 3.6–8" },
            { source: 4, locator: "58" },
          ],
          battleSlugs: ["dyrrhachium"],
        },
        {
          title: "Speed as the message",
          text: "Speed was also what Caesar chose to show. Suetonius says that in his Pontic triumph, after Zela, he carried an inscription of three words, ‘I came, I saw, I conquered’, which did not record the events of the war, as the others did, but the speed with which it was finished; Plutarch says he wrote the same three words to a friend in Rome. Suetonius describes the habit behind the boast: a hundred miles a day in a hired carriage, rivers swum or crossed on inflated skins, and arrival, very often, before the messengers sent to announce him. The elder Pliny, a century later, ranked him first of all men for vigour of mind, and named its quality as a quickness winged as if with fire.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "37.2, 57" },
            { source: 1, locator: "50" },
            { source: 5, locator: "7.91" },
          ],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War and Civil War",
          stake:
            "The commander, for whom speed was both a method and a reputation worth cultivating with readers in Rome.",
          says: "He moved before his enemies expected, and only a lack of ships slowed him in 48.",
          refs: [
            { source: 0, locator: "7.8–9" },
            { source: 3, locator: "3.2" },
          ],
        },
        {
          who: "Suetonius",
          stake:
            "A biographer collecting stories of the man, admiring and gossiping by turns.",
          says: "He outran his own messengers, and once risked his life in a small boat rather than wait.",
          refs: [{ source: 4, locator: "57–58" }],
        },
        {
          who: "Pliny the Elder",
          stake:
            "A Roman encyclopaedist of the next century, ranking human gifts; he admired Caesar’s mind and condemned his killing.",
          says: "No one surpassed him in quickness of mind.",
          refs: [{ source: 5, locator: "7.91" }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, the march over the Cevennes was a calculated gamble with a known exit. Caesar describes the dilemma himself: legions that might fight without him, or a ride through doubtful country. He solved it by making the enemy move first. The blow in the Cevennes threatened the Arverni’s own land, drew Vercingetorix back to defend it, and gave Caesar the days he needed to ride north and concentrate; the speed worked because it was aimed at what the enemy would have to protect. The Napoleon volume’s lesson on tempo and the decisive point makes the general argument; this case adds that speed was here a way of buying time, not of seeking battle.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "7.6–9" }],
        },
        {
          text: "The crossing to Epirus shows the condition that failed. In 58 and 52 the ground was a Roman province or a Gallic hinterland Caesar could feed from; in 48 the sea between his two halves belonged to Pompey’s fleets. Moving with the part of the army that fitted the ships surprised Bibulus, but it also left Caesar in Epirus with too few men for months, and the corn of a coast his enemy could supply by sea and he could not. Speed bought the landing and lost the campaign’s first phase, and Plutarch’s Caesar, after Dyrrhachium, blamed himself for posting his army beside a sea his enemies controlled.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "3.2, 3.8" },
            { source: 6, locator: "3.47" },
            { source: 1, locator: "39" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research on speed of decision is read for this lesson, and the Napoleon volume’s tempo lesson already carries the argument about moving faster than an opponent can respond. The evidence here is behavioural and comes with its own advertising: Caesar’s pages and his triumph presented speed as his signature, and the later writers repeated the picture. The lesson tests what the speed achieved, not what drove it.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Accounts of his speed come from his own record, from a triumph designed to display it, and from admirers writing a century or more later.",
        },
      ],
      shadow: {
        text: "The habit that won the winter of 52 stranded him in 48. Caesar writes that the ships alone kept him from ending the war quickly, but it was his choice to go with the part of the army they could carry, into a theatre his enemy held by sea. In the months that followed his men lived on barley, meat and bread made from roots, while Pompey drew corn from Asia and every province he controlled, and the attempt to enclose Pompey at Dyrrhachium ended in defeat. Suetonius’s story of the small boat in the gale shows the same impatience at its most personal: a commander risking himself, and his whole cause, rather than wait for his army.",
        evidence: "interpretation",
        refs: [
          { source: 3, locator: "3.2" },
          { source: 6, locator: "3.42, 3.47–48" },
          { source: 4, locator: "58" },
        ],
        battleSlugs: ["dyrrhachium"],
      },
      counterCase: {
        text: "Hannibal made the boldest march of his century and did not win the war. As Jona Lendering tells it, he set out from Iberia to win by invading Italy before the Romans were ready, crossed the Alps in autumn snow, and destroyed Roman armies at the Trebia, Trasimene and Cannae. He expected Rome’s allies to leave her; most of central Italy did not. His attempts to take ports through which reinforcements could reach him failed, his government sent him hardly any troops, and his brother’s relief army was destroyed at the Metaurus before it could join him. Speed had put him in Italy; it could not supply him there, and in the end Carthage recalled him to be beaten at Zama. Caesar’s marches succeeded where they landed on ground he could feed from and hold, and Hannibal’s failed for the same reason Caesar’s crossing nearly did.",
        evidence: "interpretation",
        refs: [{ source: 7 }],
        commanderSlug: "hannibal-barca",
        battleSlugs: ["cannae", "zama"],
      },
      cost: {
        text: "Speed was paid for by the men who made it. In the Cevennes the soldiers dug through snow six feet deep; at Brundisium Caesar records that the legions embarked below strength, worn down by the Gallic wars, the long march from Spain and an unhealthy autumn in Apulia. The crews of the ships Bibulus caught on their way back were burned with them.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "7.8" },
          { source: 3, locator: "3.2, 3.8" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Moving first forces the other side to respond to a threat it must take seriously, buying time or position.",
          "The ground the move lands on can be supplied and held without the rest of the organisation.",
        ],
        failsWhen: [
          "The move carries only part of the organisation into territory an opponent controls, and the rest cannot follow.",
          "Speed becomes the leader’s signature, and waiting comes to feel like failure even when it is the better course.",
        ],
        questions: [
          "What is your last fast move buying you, time, position or a decision?",
          "Who controls the ground between you and the rest of your organisation after you move?",
          "When did you last wait on purpose, and what did it cost you to be seen waiting?",
        ],
      },
      bearsOn:
        "Speed is the answer the Commentaries argue for most openly, and the evidence supports it where it was aimed at something the enemy had to defend: the winter of 52 is its best case. But the crossing of 48 shows speed carrying Caesar into his worst position of the civil war, and he was rescued from it less by speed than by his soldiers’ endurance and Pompey’s caution. Speed won campaigns when the ground and supply allowed it, and the triumph that advertised it was itself part of his account.",
      questions: [
        {
          prompt:
            "How did Caesar solve the problem of reaching his legions in the winter of 52, by his own account?",
          choices: [
            "He ordered the legions south to meet him in the Province.",
            "He struck over the Cevennes at the Arverni, drew Vercingetorix back to defend them, then rode north to concentrate the legions.",
            "He waited for spring.",
          ],
          answer: 1,
          explanation:
            "The march through the snow threatened what the enemy had to protect and gave him time to reach his army.",
        },
        {
          prompt: "What did Caesar say alone delayed the end of the war in 48?",
          choices: [
            "The loyalty of Pompey’s soldiers.",
            "The shortage of ships at Brundisium, which carried only part of his army.",
            "The winter storms.",
          ],
          answer: 1,
          explanation:
            "He crossed with part of the army; the rest stayed in Italy for months after Bibulus burned the returning ships.",
        },
        {
          prompt:
            "According to Suetonius, what did the inscription ‘I came, I saw, I conquered’ in the Pontic triumph signify?",
          choices: [
            "The events of the war.",
            "The speed with which the war was finished.",
            "Caesar’s modesty.",
          ],
          answer: 1,
          explanation:
            "Suetonius contrasts it with the other inscriptions, which recorded events; Plutarch has the same words in a letter.",
        },
      ],
      seminar: {
        prompt:
          "Caesar moved faster than his enemies expected, and sometimes faster than his own army could follow. Argue whether speed was his method or his temperament, from the positions of a legate left behind at Brundisium, Vercingetorix in the winter of 52, and a historian reading the Pontic triumph.",
        guidance:
          "Use the Cevennes, the crossing to Epirus and Suetonius’s small boat. Distinguish a move aimed at what the enemy must defend from a move that only arrives first, and say what each cost the soldiers.",
      },
      sources: [
        s.gw7B,
        s.plutarchCaesar,
        s.gw1A,
        s.cw3A,
        s.suetonius,
        s.pliny,
        s.cw3B,
        s.liviusHannibal,
      ],
    },
    {
      slug: "the-sabis",
      title: "Surprise, and the front rank",
      part: "Speed and risk",
      themes: ["motivation", "organisation"],
      people: ["alexander-the-great"],
      claim:
        "When a leader goes to the point of danger, his presence can steady an organisation in crisis, but only if its own officers and training have already done most of the work, and only at the risk of losing the one person it depends on.",
      inBrief: {
        strength:
          "At the Sabis and Munda he went into the line when the battle hung on it.",
        shadow:
          "At the Sabis his army had already formed itself; at Munda he fought, he said, for his life.",
      },
      moment: {
        text: "On the slope above the Sabis in 57 BCE, the Nervii came out of the woods so fast that Caesar’s legions, busy fortifying their camp, had no time to form. When Caesar reached the right wing, he found the Twelfth Legion crowded around its standards, the centurions of one cohort all dead and the standard lost, the senior centurion so wounded he could not stand, and men at the back drifting out of range. There was no reserve to send. By his own account he took a shield from a soldier in the rearmost rank, having come without one, went forward into the front line, called on the centurions by name, encouraged the men, and ordered them to advance and open their ranks so that they could use their swords. His arrival, he writes, gave the soldiers hope; each man, with the commander watching, wanted to do his utmost.",
        evidence: "fact",
        refs: [{ source: 0, locator: "2.25" }],
      },
      episodes: [
        {
          title: "What had already been done",
          text: "Caesar’s own account of the Sabis gives two reasons why the army survived before he reached the right wing at all. First, the soldiers’ knowledge and experience: trained in earlier battles, they could decide for themselves what had to be done without waiting for orders. Second, his standing order that every legate stay with his legion until the camp was fortified, so that the legates, with the enemy close and moving fast, did what seemed best on their own initiative. He gave, he says, only the essential orders. The soldiers fell in under whatever standard they first saw, and the left and centre won their own fights before the crisis on the right.",
          evidence: "fact",
          refs: [{ source: 0, locator: "2.20–23" }],
          battleSlugs: ["sabis"],
        },
        {
          title: "The cloak at Alesia",
          text: "At Alesia, when the relieving army struck the camp on the northern hill that Caesar’s lines had not been able to enclose, he watched from a point where he could see every quarter and sent supports where they were needed. Then he went himself. His coming, he writes, was known by the colour of the cloak he habitually wore in action, and the enemy, seeing him and the cavalry and cohorts behind him, joined battle; a shout went up along the whole of the works, his cavalry appeared in the Gauls’ rear, and they broke. Here presence was a signal to both sides, sent at the moment he chose, after the reserves had been committed.",
          evidence: "fact",
          refs: [{ source: 1, locator: "7.85–88" }],
          battleSlugs: ["alesia"],
        },
        {
          title: "Munda",
          text: "At Munda in 45 the anonymous author of the Spanish War admits that the shouting and the volleys were so fierce that Caesar’s men nearly lost confidence. Plutarch says Caesar ran through the ranks asking in a loud voice whether they felt no shame to hand him over to boys, meaning Pompey’s young sons, and that after the battle he told his friends he had often fought for victory but now, for the first time, for his life. Suetonius says that, believing the battle lost, he thought of suicide. Cassius Dio has both commanders, unable to bear watching an even fight, leap from their horses and join it, and says their presence made both armies fight harder without giving either an advantage.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "31" },
            { source: 3, locator: "56" },
            { source: 4, locator: "36" },
            { source: 5, locator: "43.37–38" },
          ],
          battleSlugs: ["munda"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War",
          stake:
            "The commander’s record of himself, written for readers in Rome who valued courage in a general.",
          says: "His presence steadied the right wing, after his soldiers’ training and his legates had held the rest.",
          refs: [{ source: 0, locator: "2.20–25" }],
        },
        {
          who: "Plutarch",
          stake:
            "A Greek biographer writing a century and a half later, drawn to the dramatic moment.",
          says: "Had Caesar not snatched a shield, and had the Tenth not come down, not a Roman would have survived at the Sabis; at Munda he fought for his life.",
          refs: [{ source: 3, locator: "20, 56" }],
        },
        {
          who: "Cassius Dio",
          stake:
            "A senator of the third century who wrote set pieces on the emotions of commanders.",
          says: "At Munda both leaders joined the fight, and it changed nothing.",
          refs: [{ source: 5, locator: "43.37–38" }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Caesar could know, going to the right wing at the Sabis was the only reserve he had left. His own account says no support could be sent; the left and centre were across the river, the camp was lost, and the rear legions had not yet appeared. A commander who stays where he can see the whole field is right when there is something left to send; when there is nothing, he is the reserve. But the decisive acts came before and after him: the order that kept the legates with their legions, and Labienus’s decision to send the Tenth back from the captured Nervian camp. The front rank bought time for those to work.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "2.20, 2.25–26" }],
        },
        {
          text: "Alesia shows a different use of presence: chosen, timed, and visible. Caesar first watched and fed reserves into the crisis, then went himself when the moment had come to finish it, and his cloak told both armies he was there. At Munda, by the later accounts, the order was reversed: the fight was even, the reserves had nothing to add, and he went in because the battle might be lost. The Alexander volume’s lesson on the king in the front rank shows how much an army can come to depend on its leader’s body; Caesar’s three cases show presence used as a last reserve, as a signal, and as a gamble.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "7.85–88" },
            { source: 3, locator: "56" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Alexander volume’s lesson on the front rank already reads the theory of leading by example as a signal, and this lesson does not repeat it. Caesar offers his own psychology in passing: with the commander looking on, he writes, each man wanted to do his utmost, and at Alesia that what is out of sight disturbs men more than what they see. These are a commander’s observations, written for readers, and no study read for this volume tests them.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "2.25" },
            { source: 1, locator: "7.84" },
          ],
          limit:
            "No mechanism is offered. Caesar’s remarks about his soldiers’ minds are his own and serve his account.",
        },
      ],
      shadow: {
        text: "A commander whose presence is the margin is a single point of failure. At Munda, by Plutarch’s and Suetonius’s accounts, Caesar came close to losing the battle and thought of losing his life. Alexander’s army, as Arrian tells it, learned what that meant at the Malli town: when the king was carried off wounded, the camp heard he was dead and despaired of finding a leader or a way home, and his friends reproached him afterwards for doing a soldier’s work instead of a general’s. Caesar’s own record shows him choosing the moment more often than Alexander did, but the later writers record at least one battle where the choice was made for him.",
        evidence: "interpretation",
        refs: [
          { source: 3, locator: "56" },
          { source: 4, locator: "36" },
          { source: 6, locator: "6.12" },
          { source: 8, locator: "6.13" },
        ],
        battleSlugs: ["munda", "malli-town-325-bce"],
      },
      counterCase: {
        text: "Gustavus Adolphus won at Breitenfeld in 1631 and died leading from the front the next year. At Lützen, in the 1911 Britannica’s account, he drove the enemy from their trenches on the Swedish right and took their guns; then a thick mist turned the battle into a mêlée whose details cannot be known, and in it, it seems, he lost his way while leading the Småland horse to help his infantry and was killed as he lay wounded by an enemy horseman. The Swedish army fought on; the king who had led it did not. Caesar went forward at the Sabis with legates who had been trained to act without him and at Alesia with reserves already committed. Gustavus’s death shows the risk Caesar ran each time, whatever the training behind him.",
        evidence: "interpretation",
        refs: [{ source: 7 }],
        commanderSlug: "gustavus-adolphus",
        battleSlugs: ["breitenfeld"],
      },
      cost: {
        text: "Caesar names the men who paid before he arrived. On the right wing at the Sabis all the centurions of the Twelfth’s fourth cohort had been killed and its standard lost, and Publius Sextius Baculus, the senior centurion, bravest of the brave, was so badly wounded he could no longer stand. The Nervii, he writes, fought on from the bodies of their dead until their name and nation were almost destroyed.",
        evidence: "fact",
        refs: [{ source: 0, locator: "2.25, 2.27–28" }],
      },
      transfer: {
        holdsWhen: [
          "The people already know what to do without orders, and the leader’s arrival adds confidence rather than direction.",
          "There is no other reserve to commit, or the leader’s visible arrival is timed to finish what the reserves began.",
        ],
        failsWhen: [
          "The organisation cannot act without the leader, so the leader’s presence covers for training that was never done.",
          "Going to the front leaves no one watching the whole, or puts at risk the one person the organisation cannot replace.",
        ],
        questions: [
          "What would your team do in the first hour of a crisis if you could not be reached?",
          "When you last went to the point of danger yourself, was it because nothing else was left to send?",
          "Who in your organisation could take over if you were lost at the moment you were most needed?",
        ],
      },
      bearsOn:
        "The Sabis is usually told as evidence of Caesar’s courage, and his account invites that reading. Read closely, it is evidence for his soldiers: the army formed itself, the legates acted without orders, and the Tenth came back on Labienus’s decision. Presence was the margin, not the cause. Munda, told only by others, shows the margin at its narrowest. This lesson strengthens the second answer to the volume’s question and qualifies the first: speed brought him into battle unready at the Sabis, and his soldiers made up the difference.",
      questions: [
        {
          prompt:
            "What two things does Caesar say saved the army at the Sabis before he reached the right wing?",
          choices: [
            "The cavalry and the river.",
            "The soldiers’ training and experience, and his order that the legates stay with their legions.",
            "The arrival of the Aedui.",
          ],
          answer: 1,
          explanation:
            "His account credits the soldiers’ ability to act without orders and the legates’ initiative before his own intervention.",
        },
        {
          prompt:
            "How did the army know Caesar had come at the climax of Alesia?",
          choices: [
            "A trumpet signal.",
            "The colour of the cloak he habitually wore in action.",
            "A messenger from Labienus.",
          ],
          answer: 1,
          explanation:
            "Caesar records the cloak; his coming was a signal to both armies, timed after the reserves had been committed.",
        },
        {
          prompt: "What do the later writers report about Caesar at Munda?",
          choices: [
            "That he directed the battle from his camp.",
            "That he went into the ranks, said afterwards he had fought for his life, and, in Suetonius, thought of suicide.",
            "That he was absent.",
          ],
          answer: 1,
          explanation:
            "Plutarch, Suetonius and Dio tell versions of a commander who went in because the battle might be lost.",
        },
      ],
      seminar: {
        prompt:
          "Should a leader go to the point of greatest danger? Argue from the positions of a centurion of the Twelfth at the Sabis, a legate who had held his own legion without orders, and a Swedish officer at Lützen.",
        guidance:
          "Use Caesar’s account of the Sabis, his cloak at Alesia, the later accounts of Munda and Gustavus’s death. Say in each case what the leader’s presence added, what had already been done without him, and what was risked.",
      },
      sources: [
        s.gw2,
        s.gw7G,
        s.spanish,
        s.plutarchCaesar,
        s.suetonius,
        s.dio43,
        s.a6_12,
        s.eb1911Gustavus,
        s.a6_13,
      ],
    },
    {
      slug: "the-reverse-explained",
      title: "Defeat in his own words",
      part: "Speed and risk",
      themes: ["communication", "adaptation"],
      claim:
        "When a leader explains a defeat to the people who suffered it, the explanation can restore their confidence, but it teaches the organisation less if it places the fault everywhere except in the leader’s own plan.",
      inBrief: {
        strength:
          "After each reverse he spoke to the army at once and kept its confidence.",
        shadow:
          "He blamed the soldiers at Gergovia, a lieutenant at Aduatuca and fortune at Dyrrhachium, never his own plan.",
      },
      moment: {
        text: "In the summer of 48 BCE, after Pompey had broken out of the siege lines at Dyrrhachium and Caesar’s counterattack had ended in panic, Caesar gave up the siege and called his army together. As he reports his own speech, he told the soldiers not to take what had happened to heart, nor to set one reverse, and that a slight one, against many successful battles. They should be grateful to fortune for Italy, for the two Spains and for their safe crossings through the enemy’s fleets; if everything had not fallen out well, they must assist fortune by their own energy. The loss, he said, should be attributed to the fault of anyone rather than himself: he had given them a favourable position and the enemy’s camp, and whether their own nervousness, some blunder or chance had interrupted a victory already won, they must repair the damage by their valour, as had happened at Gergovia. Then he disgraced some of the standard-bearers.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.73–74" }],
      },
      episodes: [
        {
          title: "Gergovia: the soldiers’ fault",
          text: "At Gergovia in 52 Caesar planned, by his own account, a limited surprise: a feint drew the Gauls to the far side of the town, he told his legates to keep the men in hand, and he explained that the unfavourable ground could be overcome only by speed. The legions took three camps. When he sounded the retreat, the Tenth, with him, halted, but the legions beyond a valley did not hear and pressed on to the walls, where they were driven down. The next day he reprimanded the army for its recklessness and presumption, then offered battle twice on level ground to restore its spirit before marching away. In Caesar’s telling, the plan was sound and the soldiers were at fault.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "7.45–47, 7.52" },
            { source: 2, locator: "7.53" },
          ],
          battleSlugs: ["gergovia"],
        },
        {
          title: "Aduatuca: a general’s fault",
          text: "In the winter of 54 the legates Sabinus and Cotta held a council in their winter quarters among the Eburones. The Eburonian chief Ambiorix, whose people had just attacked their camp, had told two Roman envoys at a parley that all Gaul had risen, that Germans hired from across the Rhine were coming, and that they should leave. Cotta and the senior centurions held that they should not leave without Caesar’s order; Sabinus argued for marching to the nearest legion and, as Caesar tells it, raised his voice so that the soldiers could hear and said they would hold Cotta to account if disaster came. They marched. Sabinus was killed at a parley with Ambiorix, Cotta fell fighting, and the men who regained the camp killed one another in the night rather than be taken. When Caesar had relieved Quintus Cicero’s besieged camp, he told the army to bear with the greater equanimity a loss incurred through the fault and foolhardiness of a general, made good by the gods and their own valour. The 1911 Britannica notes that he had distributed his legions over a somewhat wide extent of territory that winter; Caesar’s account does not ask whether that set the trap.",
          evidence: "fact",
          refs: [{ source: 3, locator: "5.26–30, 5.37, 5.52" }, { source: 4 }],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-conquest-of-gaul-58-53-bce"],
        },
        {
          title: "Dyrrhachium: what he said in private",
          text: "Plutarch, writing a century and a half later, tells a different story of the night after Dyrrhachium. Caesar, he says, went alone to his tent and spent that most distressing night convinced that he had shown bad generalship: with fertile Macedonia and Thessaly before him he had posted himself by the sea, which his enemies controlled with their fleets, and was being besieged by want rather than besieging. In the morning he broke camp for Macedonia. The army’s response is told twice. Suetonius says the soldiers insisted on being punished and their commander had rather to console them than chastise them; Appian, that they demanded decimation, which he refused, punishing only a few.",
          evidence: "fact",
          refs: [
            { source: 5, locator: "39" },
            { source: 6, locator: "68.3" },
            { source: 7, locator: "2.63" },
          ],
          battleSlugs: ["dyrrhachium"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War and Civil War",
          stake:
            "The commander, explaining his defeats first to the army and then, in his books, to Rome.",
          says: "Gergovia was the soldiers’ indiscipline, Aduatuca a legate’s folly, Dyrrhachium fortune and anyone rather than himself.",
          refs: [
            { source: 1, locator: "7.52" },
            { source: 3, locator: "5.52" },
            { source: 0, locator: "3.73" },
          ],
        },
        {
          who: "Plutarch",
          stake:
            "A Greek biographer writing over a century later, who does not name his source for Caesar’s night after Dyrrhachium.",
          says: "Alone, Caesar blamed his own choice of where to fight.",
          refs: [{ source: 5, locator: "39" }],
        },
        {
          who: "Suetonius",
          stake:
            "A Roman biographer collecting reports, who counts Caesar’s reverses rather than explaining them.",
          says: "Gergovia was one of three reverses in Gaul, and after Dyrrhachium the soldiers asked to be punished.",
          refs: [{ source: 6, locator: "25.2, 68.3" }],
        },
        {
          who: "Napoleon, in the Précis des guerres de César",
          stake:
            "A commander who had written his own bulletins, reading Caesar’s defeats on Saint Helena.",
          says: "Caesar was beaten three times, without effect on the outcome, and repaired his lieutenants’ defeats by his presence.",
          refs: [{ source: 8, locator: "ch. 1, p. 28" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, each plan was defensible and each carried the flaw that broke it. At Gergovia a feint and a limited attack covered by reserves was a reasonable way to end a siege he could no longer sustain while the Aedui wavered, but the halt depended on a trumpet call across a valley that, by his own description, divided the assaulting legions. At Dyrrhachium he chose to enclose a larger army with fewer men beside a sea the enemy controlled; his own speech concedes nothing of that choice, while Plutarch’s account of the night makes it the whole problem. At Aduatuca the scattered winter quarters were his decision and the march was Sabinus’s. In every case the explanation he gave the army named the nearest failure, not the root.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "7.45–47" },
            { source: 0, locator: "3.73" },
            { source: 5, locator: "39" },
            { source: 4 },
          ],
        },
        {
          text: "The explanations did their immediate work. After Gergovia he offered battle on level ground until he judged the army’s spirit restored; after Dyrrhachium an army that had fled in disorder asked to be punished and, within weeks, won at Pharsalus. The explanation that restored morale and the explanation that would have improved the next plan were different explanations, and Caesar gave the army the first. Whether he also gave himself the second can be read only in Plutarch, and in what he did next: he gave up the lines and took the war inland, away from the sea.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "7.53" },
            { source: 6, locator: "68.3" },
            { source: 5, locator: "39" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Self-serving attribution",
          base: "meta-analysis",
          text: "Mezulis and colleagues, combining 266 studies, found that people generally credit their successes to themselves and their failures to other causes, a bias large on average and present in nearly all samples, though smaller in Asian samples than in American or other Western ones and varying with age. Caesar’s pattern fits the description: his victories are his plans, his defeats the work of soldiers, a lieutenant or fortune. But the research measures what people believe about everyday events, and Caesar’s explanations were public speeches and books written to persuade. The pattern may describe his belief, his rhetoric, or both; Plutarch’s account of a night of self-reproach, if true, suggests the public explanation was not the whole of what he thought.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "Only the abstract was read. The studies concern modern people’s attributions for ordinary events, not leaders’ public reports, and they cannot tell belief from persuasion.",
        },
      ],
      shadow: {
        text: "An explanation that protects the commander can mislead whoever comes next. Caesar’s account of Aduatuca names Sabinus’s folly; it does not ask why two legates with a divided command were left to decide alone, far from support, in a winter he had spread his legions widely. The army learned from his speeches that it must obey the recall and trust its general, and that may have been the right lesson for that army. It did not learn, from him, anything about the dispositions he had made.",
        evidence: "interpretation",
        refs: [{ source: 3, locator: "5.28–30, 5.52" }, { source: 4 }],
      },
      counterCase: {
        text: "Napoleon, who had written his own bulletins, read Caesar’s defeats on Saint Helena and wrote his own explanation of them. In thirteen campaigns, the Précis says, Caesar was beaten three times, at Dyrrhachium, at Alexandria and in Africa, and these checks had no effect on the outcome of his wars; his lieutenants suffered great defeats, which he repaired by his presence. The list leaves out Gergovia, which Suetonius counted among only three reverses in Gaul, and it repeats Caesar’s own division between his defeats and his lieutenants’. One commander reading another accepted the frame the other had written. The Napoleon volume’s orientation shows the same habit in Napoleon’s own record.",
        evidence: "interpretation",
        refs: [
          { source: 8, locator: "ch. 1, p. 28" },
          { source: 6, locator: "25.2" },
        ],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["gergovia", "dyrrhachium"],
      },
      cost: {
        text: "The defeats he explained had names in his own pages. At Gergovia the centurion Marcus Petronius, cutting at a gate with his men behind him, told them he had led them into danger in his eagerness for glory and fought on alone so that they could get back to the legion; he was killed. At Dyrrhachium, Caesar writes, most of those who died perished at the ditches and ramparts in the panic of their comrades, without a wound, and Labienus had the captured soldiers paraded, mocked them as veterans who ran away, and killed them in front of the army.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "7.50" },
          { source: 0, locator: "3.71" },
        ],
      },
      transfer: {
        holdsWhen: [
          "A defeat has shaken the people who must fight again soon, and the leader can speak to them at once.",
          "The explanation names a real failure that the people can correct, such as ignoring a recall.",
        ],
        failsWhen: [
          "The explanation is the only review of the defeat, so the plan, the dispositions and the leader’s own choices are never examined.",
          "The same leader explains every defeat by others’ faults and every success by his own plans.",
        ],
        questions: [
          "After your last failure, what did you tell the team, and what did you tell yourself?",
          "Which of your explanations of failure named a cause in your own plan?",
          "Who reviews your defeats besides you?",
        ],
      },
      bearsOn:
        "This lesson adds to two of the volume’s answers. The soldiers: an army that had fled at Dyrrhachium asked to be punished and fought again within weeks, which is evidence of a bond his speeches could use. His account: each defeat was explained at once, to the army and then to Rome in his books, in a way that kept the commander’s plan out of question. If his account won wars, it did so partly by winning the next battle’s morale, and partly at the cost of what his army and later readers could learn.",
      questions: [
        {
          prompt:
            "Whom did Caesar blame for the reverse at Gergovia, by his own account?",
          choices: [
            "The Aedui, who had turned against him.",
            "His soldiers, who pressed on beyond the recall against the orders of their tribunes and legates.",
            "Himself, for attacking uphill.",
          ],
          answer: 1,
          explanation:
            "His speech the next day reprimanded the troops for indiscipline and presumption, though he also describes the valley that kept them from hearing the trumpet.",
        },
        {
          prompt:
            "What, as Plutarch tells it, did Caesar conclude alone on the night after Dyrrhachium?",
          choices: [
            "That his soldiers had failed him.",
            "That he had shown bad generalship by fighting beside a sea his enemies controlled instead of carrying the war into Macedonia and Thessaly.",
            "That Pompey would not follow up his victory.",
          ],
          answer: 1,
          explanation:
            "Plutarch’s account contrasts with Caesar’s public speech, which attributed the loss to anyone rather than himself.",
        },
        {
          prompt:
            "What does the meta-analysis of self-serving attribution allow the lesson to say about Caesar?",
          choices: [
            "That he suffered from a disorder of self-regard.",
            "That his pattern of explanations is common in people generally, without telling whether he believed it or used it to persuade.",
            "That leaders always lie about their failures.",
          ],
          answer: 1,
          explanation:
            "The research describes ordinary attributions; it cannot separate private belief from public persuasion, and diagnosing the dead is excluded.",
        },
      ],
      seminar: {
        prompt:
          "Caesar’s speeches after Gergovia and Dyrrhachium restored his army’s confidence. Was that the right thing for a commander to say at that moment? Argue for and against, from the position of a centurion who would fight again, of a staff officer planning the next operation, and of a historian.",
        guidance:
          "Use the three explanations side by side, Plutarch’s night after Dyrrhachium, and what the army did next. Distinguish the explanation that restores morale from the review that improves the plan, and say who in Caesar’s army could have given the second.",
      },
      sources: [
        s.cw3C,
        s.gw7D,
        s.gw7E,
        s.gw5B,
        s.eb1911,
        s.plutarchCaesar,
        s.suetonius,
        s.appian,
        s.precis,
        s.mezulis,
      ],
    },
    {
      slug: "two-fronts",
      title: "Two fronts: engineering under pressure",
      part: "Speed and risk",
      themes: ["organisation", "judgement"],
      claim:
        "When a besieger fortifies against both the besieged and an army coming to relieve them, he can hold a position that should be untenable, but only if the work can be finished faster than the enemy can gather, and only if the lines can be held everywhere at once.",
      inBrief: {
        strength:
          "At Alesia he built lines facing inward and outward, and held both.",
        shadow:
          "At Dyrrhachium the same method left an unfinished stretch, and Pompey broke through it.",
      },
      moment: {
        text: "In 52 BCE, with Vercingetorix shut in Alesia, deserters and prisoners told Caesar that the Gallic cavalry had slipped out through a gap in his unfinished works to raise all Gaul, and that the town had corn for about thirty days. By his own account Caesar then decided on a system of works that his Gallic War describes in measured detail: a deep trench well forward to keep sudden rushes and missiles off the men at work, two more trenches behind it, the inner one flooded from the river, a rampart and palisade with turrets along it, and in front of everything rows of sharpened branches, concealed pits with fire-hardened stakes, and spiked logs scattered across the ground, to which the soldiers gave names of their own. Then he built the same works again facing outward, on the best ground he could find, against the army that was coming, and ordered every man to gather corn and forage for thirty days so that no one would have to go out.",
        evidence: "fact",
        refs: [{ source: 0, locator: "7.71–74" }],
      },
      episodes: [
        {
          title: "Holding both lines",
          text: "When the relieving army came, it attacked the outer lines while Vercingetorix attacked the inner. The Gauls learned from men who knew the ground that one camp, on a hill to the north too large to be enclosed, stood on a downward slope that put its defenders at a disadvantage, and they sent picked troops there at midday. Caesar writes that the shouting behind the fighting line frightened his men, because what is out of sight disturbs men more than what they see. He watched from a point where he could see every quarter and sent supports where they were needed: Labienus with cohorts to the northern camp, then Brutus and Fabius against the sortie from the town, then himself. Cavalry sent round the outer works took the attackers in the rear, and the relieving army broke.",
          evidence: "fact",
          refs: [{ source: 1, locator: "7.83–88" }],
          battleSlugs: ["alesia"],
        },
        {
          title: "Enclosing a larger army",
          text: "Four years later at Dyrrhachium Caesar tried the method against Pompey, and his own account calls it a new and unprecedented kind of warfare: a ring of forts on the hills around an army larger than his own, fresh and well supplied, with the sea at its back. Pompey built a line of redoubts inside the ring and, with more men and a shorter circuit to complete, outstripped the besiegers in the work. Caesar had built a double rampart at the southern end, by the sea, against an attack from both sides, but the magnitude of the works and the daily toil had not allowed him to finish the cross-wall joining them along the shore. Deserters told Pompey so; his men landed between the ramparts and took the defenders in the rear.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "3.43–47" },
            { source: 3, locator: "3.61–63" },
          ],
          battleSlugs: ["dyrrhachium"],
        },
        {
          title: "A soldier’s arithmetic",
          text: "Napoleon, dictating his observations on Alesia at Saint Helena, doubted Caesar’s figures and argued with the Gallic commander. He asked whether Vercingetorix could really have shut so large a force inside a town of moderate size with corn for thirty days, and why, when he sent out his cavalry, he did not send out most of his infantry too and keep the rest of his army in the field to harass the besiegers. Caesar’s works, he noted, had forty days to be built, and the Gauls’ weapons were powerless against such obstacles. He ended with a question: could an army today blockade a fortress with lines of contravallation and keep itself safe behind its circumvallation against an army as large as itself?",
          evidence: "fact",
          refs: [{ source: 5, locator: "ch. 7, pp. 109–111" }],
          battleSlugs: ["alesia"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War and Civil War",
          stake:
            "The engineer of the works, describing them for readers in Rome and explaining the one that failed.",
          says: "Alesia’s double lines held; at Dyrrhachium the toil of so great a work had left one stretch unfinished.",
          refs: [
            { source: 0, locator: "7.72–74" },
            { source: 3, locator: "3.63" },
          ],
        },
        {
          who: "Cassius Dio",
          stake:
            "A historian of the third century whose account of Alesia differs from Caesar’s in places.",
          says: "The people Vercingetorix drove out of Alesia died between the town and the Roman camp, because neither side would take them in.",
          refs: [{ source: 4, locator: "40.40" }],
        },
        {
          who: "Napoleon, in the Précis des guerres de César",
          stake:
            "A commander who had besieged and been besieged, reading Alesia as a professional problem.",
          says: "Caesar’s figures are doubtful, Vercingetorix should not have shut his army in, and the works had time to be built.",
          refs: [{ source: 5, locator: "ch. 7, pp. 109–111" }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, Caesar’s choice at Alesia was between lifting the siege as a relieving army gathered and staying to fight it from behind works. He knew from deserters how long the town’s corn would last, and he knew that raising a Gallic army would take time; the outer lines were a bet that he could finish them first and feed his army inside them. Napoleon’s observation that the works had forty days to be built names the condition on which the bet rested. The works did not win alone: they made the Gauls attack where the Romans could see them coming, and let Caesar move a small reserve to whichever stretch was threatened. The exercise ‘Two fronts at Alesia’ puts the reader at that choice.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "7.71, 7.74" },
            { source: 5, locator: "ch. 7, p. 111" },
          ],
        },
        {
          text: "Dyrrhachium failed on exactly those conditions. The enemy inside was larger than the besiegers, not weaker, and was supplied by sea, so the lines starved no one quickly. Pompey could build his inner line faster than Caesar could close the outer ring, so the race that Caesar won at Alesia he lost here. And the lines were too long to hold everywhere: the unfinished stretch was where the attack came, as the northern camp had been at Alesia. The same method that held a starving town against a relieving army could not enclose a fed army with a fleet.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "3.44, 3.47" },
            { source: 3, locator: "3.63" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Caesar records one psychological observation of his own at Alesia: men fighting at the lines were more frightened by the shouting behind them, which they could not see, than by the enemy in front. It is a commander’s remark, plausible and untested, and no study read for this volume supports or contradicts it. The lesson relies on the engineering and the arithmetic the sources describe.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "7.84" }],
          limit:
            "No mechanism is offered. The observation is Caesar’s, made in a narrative written to explain how his lines held.",
        },
      ],
      shadow: {
        text: "The cost of the siege fell first on those inside the walls who could not fight. In Caesar’s account the Gauls in Alesia decided that those useless for war by health or age should leave the town, and the Mandubii, whose town it was, were driven out with their wives and children; at the Roman lines they begged with tears to be taken as slaves and fed, and Caesar posted guards on the rampart to keep them out. Dio says he forced them back, short of food himself and expecting the town to take them in again, and that they died miserably between the town and the camp because neither side would receive them. The lines that held the relieving army out also held these people in the open.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "7.78" },
          { source: 4, locator: "40.40" },
        ],
        battleSlugs: ["alesia"],
      },
      counterCase: {
        text: "Wellington’s siege of Burgos in 1812 failed for want of what Caesar had at Alesia. Oman writes that the castle’s guns would have been inadequate against a besieger with a proper battering train, and that Wellington had none: had he brought the siege train he used against Badajoz, the place must have fallen in ten days. Instead the siege dragged on while the French armies of Souham and Caffarelli gathered in front of him and Soult and King Joseph threatened Madrid behind, and on 21 October he ordered the siege raised and retreated. Caesar at Alesia had the time and the labour to build against both the town and its relief; Wellington at Burgos had neither the guns to finish quickly nor lines to hold off a relief, and chose to save his army. The Wellington volume’s lesson on the breach reads the same siege for its cost.",
        evidence: "interpretation",
        refs: [{ source: 6, locator: "pp. 22–24, 66" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["burgos-1812"],
      },
      cost: {
        text: "When Vercingetorix surrendered, Caesar kept back the Aedui and the Arverni, hoping to win back their peoples through them, and gave the rest of the prisoners to his army, one to each man, as plunder.",
        evidence: "fact",
        refs: [{ source: 1, locator: "7.89" }],
      },
      transfer: {
        holdsWhen: [
          "The organisation has the time and the labour to build its defences before the threat arrives, and knows roughly when it will.",
          "The defences channel the opponent into attacks that can be seen coming, and a reserve can reach any threatened point.",
        ],
        failsWhen: [
          "The position to be held is too large to finish, so an unfinished stretch becomes the point of attack.",
          "The opponent inside is stronger and better supplied than the one doing the enclosing, so time works against the besieger.",
        ],
        questions: [
          "Which of your defences could you finish before the threat you are preparing for arrives?",
          "Where is the unfinished stretch in what you are building, and who outside knows it?",
          "Who pays for your plan if both sides refuse to take them in?",
        ],
      },
      bearsOn:
        "Alesia is the strongest case for an answer the volume’s question leaves out: the soldiers’ labour. The works were dug, timbered and manned by legionaries, in forty days, and Caesar’s account is the record of their engineering as much as of his plan. Dyrrhachium shows that the method was not a formula; it depended on time, supply and an enemy weaker than the besieger. The account he wrote of both makes the first his masterpiece and the second an accident of an unfinished wall.",
      questions: [
        {
          prompt:
            "Why did Caesar build a second set of works facing outward at Alesia?",
          choices: [
            "To keep his own soldiers from deserting.",
            "To protect the besieging army from the Gallic army coming to relieve the town.",
            "To mark the boundary of the Roman province.",
          ],
          answer: 1,
          explanation:
            "He learned that the Gallic cavalry had gone to raise all Gaul, and fortified against the relief as well as the town.",
        },
        {
          prompt:
            "What, by Caesar’s own account, let Pompey break out at Dyrrhachium?",
          choices: [
            "Treachery among Caesar’s legates.",
            "An unfinished cross-wall at the sea end of the lines, which deserters told Pompey about.",
            "A storm that destroyed the works.",
          ],
          answer: 1,
          explanation:
            "The magnitude of the works had not allowed him to finish it; Pompey’s men landed between the two ramparts.",
        },
        {
          prompt:
            "What condition did Napoleon identify behind the success of the works at Alesia?",
          choices: [
            "Caesar’s superior numbers.",
            "Forty days in which to build them, against Gallic weapons powerless to destroy them.",
            "The help of the Aedui.",
          ],
          answer: 1,
          explanation:
            "He also doubted Caesar’s figures and asked whether such lines could hold in his own day.",
        },
      ],
      seminar: {
        prompt:
          "Caesar’s works at Alesia held and his works at Dyrrhachium failed. Argue what made the difference, from the positions of a legionary digging the trenches, Vercingetorix inside the town, and Pompey inside the ring.",
        guidance:
          "Use Caesar’s descriptions of both sets of works, Napoleon’s observations and the fate of the Mandubii. Say in each case who had time on their side, who was fed, and where the lines could not be held.",
      },
      sources: [s.gw7F, s.gw7G, s.cw3B, s.cw3C, s.dio40, s.precis, s.omanVI],
    },
    {
      slug: "my-soldiers",
      title: "My soldiers: an army bound to its general",
      part: "An army bound to him",
      themes: ["motivation", "organisation", "ethics"],
      claim:
        "When an army is bound to its commander by pay, plunder, recognition and shared danger more than by its oath to an institution, it will follow him further than the institution could ask, including against that institution.",
      inBrief: {
        strength:
          "His soldiers followed him across the Rubicon and asked to be punished when they failed him.",
        shadow:
          "An army that belonged to its general could be turned against the Republic, and had to be paid for with conquest.",
      },
      moment: {
        text: "Near Vesontio in 58 BCE, before the march against the German king Ariovistus, a panic ran through Caesar’s army. Gauls and traders spoke of the Germans’ size and fierceness; the young men who had followed Caesar from Rome for his friendship asked leave to go, wills were signed throughout the camp, and some told Caesar that when he gave the order to march the soldiers would not obey. By his own account he called a council of all the centurions and rebuked them for thinking it their business to ask where or why they were being led. He set out his reasons for confidence, and then said he would break camp that very night, in the fourth watch, to see whether honour or cowardice prevailed: if no one else followed, he would march with the Tenth Legion alone, of whose loyalty he had no doubt, and it would be his bodyguard. The Tenth thanked him through its tribunes; the other legions sent their tribunes and senior centurions to say that they had never doubted, and the army marched.",
        evidence: "fact",
        refs: [{ source: 0, locator: "1.39–41" }],
      },
      episodes: [
        {
          title: "The Rubicon",
          text: "Early in 49, as Suetonius tells it, Caesar overtook his cohorts at the Rubicon, the boundary of his province, and paused, saying that they might still draw back but that once across the little bridge the whole issue would be with the sword. After a sign, a figure who seized a trumpet and sounded the war note on the far bank, he said, in Rolfe’s translation of Suetonius, ‘The die is cast.’ Plutarch says he called out a Greek proverb, ‘Let the die be cast’. Across the river he harangued the soldiers with tears, tearing his robe from his breast, and begged for their faithful service; Suetonius adds that a rumour that he had promised every man a knight’s estate came from those at the back, who saw him point to the ring on his finger. Suetonius also reports Asinius Pollio’s account that at Pharsalus, looking at the Pompeian dead, Caesar said that they would have it so, and that he would have been condemned had he not turned to his army for help.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "31–33, 30.4" },
            { source: 2, locator: "32" },
            { source: 3, locator: "60" },
          ],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
        {
          title: "How he held them",
          text: "Suetonius says Caesar valued soldiers for their prowess alone, held them to strict discipline only in the presence of the enemy, and relaxed it after victories; he called them ‘comrades’ rather than ‘soldiers’ in assembly and gave them arms inlaid with silver and gold, both for show and so that they would hold on to them in battle for fear of the loss. Plutarch says he showed by his rewards that he was keeping the wealth of his wars as a common prize for valour, and by willingly sharing every danger and refusing no toil. Before Ilerda, Caesar records that he borrowed money from his tribunes and centurions and gave it to the soldiers, binding the officers by the debt and the men by the gift. Suetonius adds that there was no mutiny in ten years of the Gallic war, and that throughout the civil war not one man deserted; Caesar’s own Civil War records two Allobrogian officers of his cavalry who went over to Pompey at Dyrrhachium, and says no one had done so before.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "65, 67, 68.1, 69" },
            { source: 2, locator: "17" },
            { source: 4, locator: "1.39" },
            { source: 5, locator: "3.59–61" },
          ],
          battleSlugs: ["ilerda", "dyrrhachium"],
        },
        {
          title: "‘Citizens’: the mutiny of 47",
          text: "In 47, with the African war ahead and the promises of Pharsalus unpaid, the legions in Italy mutinied and marched on Rome. Four writers tell how it ended, and they do not agree. Suetonius: Caesar faced the Tenth against his friends’ advice, and with a single word, calling them ‘citizens’ instead of ‘soldiers’, brought them round, though he punished the worst by withholding part of their booty and land. Plutarch: after the mutineers had killed two men of praetorian rank, he censured them only by calling them citizens, and then rewarded them. Appian: he told them ‘I discharge you’, promised to pay them when he triumphed with other soldiers, then addressed them as citizens; they begged to serve, and he forgave all but the Tenth before relenting. Dio: he called them Quirites, disbanded them, settled them on land far apart, and took the most turbulent to Africa, where he was glad to use them up.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "70" },
            { source: 2, locator: "51" },
            { source: 6, locator: "2.92–94" },
            { source: 7, locator: "42.52–55" },
          ],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War and Civil War",
          stake:
            "The commander, reporting his own speeches and his army’s loyalty to readers in Rome who feared that loyalty.",
          says: "His soldiers followed where he led and the Tenth would follow him alone.",
          refs: [{ source: 0, locator: "1.40–41" }],
        },
        {
          who: "Suetonius",
          stake:
            "A biographer of the emperors, writing about a century and a half later, collecting reports and sayings.",
          says: "One word, ‘citizens’, ended the mutiny; no soldier deserted him in the civil war.",
          refs: [{ source: 1, locator: "68.1, 70" }],
        },
        {
          who: "Appian",
          stake:
            "A Greek historian of the second century writing a narrative of the civil wars.",
          says: "Caesar ended the mutiny with a discharge he did not mean and a show of reluctance.",
          refs: [{ source: 6, locator: "2.93–94" }],
        },
        {
          who: "Cassius Dio",
          stake:
            "A senator of the third century, writing a history of Rome with little sympathy for unruly soldiers.",
          says: "Caesar hated mutineers and got rid of the boldest in Africa.",
          refs: [{ source: 7, locator: "42.55" }],
        },
      ],
      strategist: [
        {
          text: "At Vesontio the decision has to be judged by what Caesar knew: an army that might refuse to march, an enemy he had not yet met, and a corn supply he says was secure. To march with the Tenth alone was a threat he could make because he had favoured that legion for years and was sure of it; it cost little if it worked, and it turned the question from fear of the Germans to the honour of the other legions. It worked because the bond had been built before it was needed. The same reasoning lies under the Rubicon. An army that would cross into Italy against the Senate’s decree was an asset no opponent possessed, and Pollio’s report of Caesar’s words at Pharsalus makes the army the reason he was not condemned.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "1.40" },
            { source: 1, locator: "30.4" },
          ],
        },
        {
          text: "The bond had a price, and the mutiny of 47 is the bill. Appian says the soldiers had been held beyond their term and given indefinite promises at Pharsalus; the remedy in every version was to make them fear losing their place in his army, which works only while the army values belonging more than it values the money. Caesar paid in land, booty and promises, and the promises had to be met by further victories. A commander who binds an army by rewards has to keep winning to keep paying.",
          evidence: "interpretation",
          refs: [
            { source: 6, locator: "2.92–94" },
            { source: 7, locator: "42.54" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Alexander volume’s lesson on Opis and the Napoleon volume have already read research on leaders whom followers see as embodying their group, and this lesson does not repeat it. What the sources show is a commander who called his men comrades and could unmake the bond with a single word. Whether ‘citizens’ stung because it put them outside the army they belonged to, or because it threatened their pay and land, cannot be read from four later versions that disagree about what was said.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. The versions of the mutiny were written one to three centuries later and differ on the words, the order of events and the rewards.",
        },
      ],
      shadow: {
        text: "The bond that made the Rubicon possible made the Republic’s armies the property of their generals. Suetonius says the soldiers mutinied now and then in the civil wars, and that Caesar discharged the whole Ninth Legion in disgrace at Placentia while Pompey was still in the field. Dio, writing as a senator two centuries later, says Caesar took the most turbulent of the mutineers of 47 to Africa so that they could not raise an insurrection in Italy, and was glad to use them up there. Caesar’s own reported words at Pharsalus, as Pollio gave them, say plainly what the army was for: without it he would have been condemned by the laws of the state it served.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "69, 30.4" },
          { source: 7, locator: "42.55" },
        ],
      },
      counterCase: {
        text: "Alexander met the same test at Opis and the Alexander volume’s lesson there reads it in full. When he announced that he would send home the old and maimed with rich rewards, the Macedonians, as Arrian tells it, took it as a sign they were despised, and shouted that he should dismiss them all. He had the ringleaders arrested and led away to execution, then gave the commands of his brigades to Persians; the Macedonians came to the palace gates, threw down their weapons and begged to be let in, and he forgave them and called them all his kinsmen. Both commanders turned the threat of dismissal back on an army that had used it against them. Alexander replaced his men with Persians; Caesar, in Appian, threatened to triumph with other soldiers. Both relied on an army that wanted to belong more than it wanted to go home.",
        evidence: "interpretation",
        refs: [
          { source: 8, locator: "7.8" },
          { source: 9, locator: "7.11" },
          { source: 6, locator: "2.93" },
        ],
        commanderSlug: "alexander-the-great",
        battleSlugs: [],
      },
      cost: {
        text: "The rewards came from somewhere. Plutarch says Caesar kept the wealth of his wars as a common prize for his soldiers, and the wealth of the Gallic wars was taken from Gaul. The mutiny of 47 cost lives in Italy: Plutarch says the mutineers killed two men of praetorian rank, and Dio that they killed others they met on their way to Rome. Appian has Caesar promise land to his veterans that would not be taken from its holders, as Sulla’s had been, but from public land and his own.",
        evidence: "fact",
        refs: [
          { source: 2, locator: "17, 51" },
          { source: 7, locator: "42.52" },
          { source: 6, locator: "2.94" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The leader has built a bond with the people over years, through shared risk, recognition and reward, before asking them for something hard.",
          "The people value belonging to the leader’s organisation more than any single reward it pays.",
        ],
        failsWhen: [
          "The rewards promised outrun what the organisation can pay, and the people stop believing the promises.",
          "Loyalty to the leader replaces loyalty to the purpose the organisation was created for, and the leader turns it against that purpose.",
        ],
        questions: [
          "If you asked your team tonight to follow you somewhere the organisation had not sanctioned, who would come, and why?",
          "Which of the promises you have made to your people depend on successes you have not yet had?",
          "What would your people lose if they were told they were no longer part of your team, and is that what keeps them?",
        ],
      },
      bearsOn:
        "This lesson is the strongest evidence for the second answer to the volume’s question: an army that would follow him alone at Vesontio, across the Rubicon and back to Africa after a mutiny. But the evidence for the bond comes mostly from Caesar’s own pages and from biographers a century and more later, and the bond was paid for with what conquest provided. If his soldiers won his wars, they did so partly because his speed and his enemies’ divisions kept the victories, and the rewards, coming.",
      questions: [
        {
          prompt:
            "How did Caesar end the panic at Vesontio, by his own account?",
          choices: [
            "He promised every soldier a share of the German king’s treasure.",
            "He rebuked the centurions and said he would march that night with the Tenth Legion alone if no one else followed.",
            "He waited until the panic passed.",
          ],
          answer: 1,
          explanation:
            "The Tenth thanked him and the other legions said they had never doubted; the army marched in the fourth watch.",
        },
        {
          prompt:
            "What do Suetonius and Plutarch report Caesar said at the Rubicon?",
          choices: [
            "Suetonius has ‘The die is cast’; Plutarch has a Greek proverb, ‘Let the die be cast’.",
            "Both give the same Latin phrase in the same words.",
            "Neither reports any words.",
          ],
          answer: 0,
          explanation:
            "The words reach us in different languages and settings from writers a century and more later; neither is a record made at the river.",
        },
        {
          prompt:
            "Which statement about the mutiny of 47 is supported by the four accounts read?",
          choices: [
            "All agree on the single word ‘citizens’ and nothing else.",
            "They agree that Caesar shamed the mutineers by treating them as no longer his soldiers, and disagree about how, and about what he paid and punished.",
            "Only Caesar describes it.",
          ],
          answer: 1,
          explanation:
            "Suetonius and Plutarch tell of a word; Appian of a discharge and a show of reluctance; Dio of disbandment and the troublemakers used up in Africa. Caesar’s own Civil War had ended before 47.",
        },
      ],
      sourceCheck: {
        question: "How did Caesar end the mutiny of 47?",
        witnesses: [
          {
            label: "Suetonius, Julius 70",
            claim:
              "With a single word, calling the Tenth ‘citizens’; he still punished the worst.",
          },
          {
            label: "Appian, Civil Wars 2.93–94",
            claim:
              "By saying ‘I discharge you’, then addressing them as citizens and pretending to hesitate until they begged to serve.",
          },
          {
            label: "Dio, 42.53–55",
            claim:
              "By calling them Quirites and disbanding them, then using the boldest up in Africa.",
          },
        ],
        prompt: "What can a reader safely say?",
        options: [
          {
            text: "That one word ended the mutiny, because that is the famous version.",
            feedback:
              "Fame is not evidence; Appian and Dio describe a longer piece of theatre and a calculated disbandment.",
          },
          {
            text: "That nothing can be known, because the accounts disagree.",
            feedback:
              "They agree on the core: he treated the mutineers as no longer his soldiers, and they asked to serve again.",
          },
          {
            text: "That he shamed them by treating them as no longer his soldiers, and that the writers differ on the words, the punishments and the motives.",
            feedback:
              "That keeps what all the witnesses share and says where they part, with each reporter named.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "An army that would follow Caesar alone was his greatest asset and the Republic’s greatest danger. Argue whether a leader can build that kind of loyalty without making it dangerous, from the positions of a centurion of the Tenth, a senator in 49, and a citizen of a Gallic town whose wealth paid for it.",
        guidance:
          "Use Vesontio, the Rubicon and the four versions of the mutiny. Say what bound the soldiers in each case, what it cost and who paid.",
      },
      sources: [
        s.gw1B,
        s.suetonius,
        s.plutarchCaesar,
        s.plutarchPompey,
        s.cw1B,
        s.cw3C,
        s.appian,
        s.dio42,
        s.a7_8,
        s.a7_11,
      ],
    },
    {
      slug: "lieutenants",
      title: "Lieutenants: delegation and its failures",
      part: "An army bound to him",
      themes: ["organisation", "judgement"],
      people: ["titus-labienus"],
      claim:
        "When a commander delegates command to trusted lieutenants, he extends his reach beyond what he can see, but only while they share his purpose and know when to decide for themselves, and the most capable of them may one day leave him.",
      inBrief: {
        strength:
          "Quintus Cicero held his camp and Labienus judged rightly when to stay put.",
        shadow:
          "Two legates who could not agree marched their men to destruction, and his best lieutenant went over to Pompey.",
      },
      moment: {
        text: "In the winter of 54 BCE Caesar spread his legions across northern Gaul in separate winter quarters. When the Nervii and their allies besieged Quintus Cicero’s camp, the chiefs who had friends inside asked for a parley and told him what Ambiorix had told Sabinus: all Gaul was in arms, the Germans had crossed the Rhine, Caesar’s other camps were under attack, Sabinus was dead, and Cicero and his men might leave in safety wherever they pleased. By Caesar’s account Cicero made one reply: it was not the practice of Rome to accept terms from an enemy in arms; if they laid down their arms they could send envoys to Caesar, whose justice he hoped they would find. The legion built towers overnight from the timber it had gathered, held the rampart for days with most of its men wounded, and sent messenger after messenger until a Nervian refugee’s slave carried a dispatch through on a javelin.",
        evidence: "fact",
        refs: [{ source: 0, locator: "5.39–45" }],
      },
      episodes: [
        {
          title: "Two legates, one camp",
          text: "Sabinus and Cotta had shared a camp among the Eburones. When Ambiorix urged them at a parley to leave before the Germans came, Cotta and the senior centurions held that they should not move without Caesar’s order; Sabinus argued for marching to the nearest legion and, by Caesar’s account, raised his voice so the soldiers could hear. Neither could command the other. They marched, were attacked on the way, and in the emergency ordered the baggage abandoned and a square formed, which Caesar judges understandable but disheartening to their own men and encouraging to the enemy. He writes that Sabinus, taken by surprise, lost his judgement, while Cotta did his duty as a commander in encouraging the troops and as a soldier in the fight. Sabinus was killed at a second parley; Cotta fell fighting.",
          evidence: "fact",
          refs: [{ source: 0, locator: "5.26–37" }],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-conquest-of-gaul-58-53-bce"],
        },
        {
          title: "An order with discretion",
          text: "When Cicero’s message reached him, Caesar sent for Crassus’s and Fabius’s legions and wrote to Labienus to bring his legion to the borders of the Nervii if he could do so without damage to the public service. Labienus, with the whole force of the Treveri camped a few miles from him, judged that leaving his camp would look like flight and invite disaster, and sent back a dispatch explaining the danger. Caesar marched with what he had, relieved Cicero, praised him and his legion according to their deserts and addressed by name the centurions and tribunes whose valour Cicero reported. Then he told the army that the loss at Aduatuca was owed to the fault and foolhardiness of a general.",
          evidence: "fact",
          refs: [{ source: 0, locator: "5.46–52" }],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-conquest-of-gaul-58-53-bce"],
        },
        {
          title: "Labienus",
          text: "Titus Labienus was the lieutenant Caesar trusted most in Gaul. Cassius Dio says he commanded all the legions beyond the Alps whenever Caesar was in Italy. In 49 he left Caesar for Pompey. Plutarch calls him one of Caesar’s greatest friends, who had fought most zealously with him in all his Gallic wars, and says Caesar sent his money and baggage after him. Dio, writing two centuries later, gives a reason: grown rich and famous, Labienus began to behave above his station, Caesar grew less fond of him, and Labienus, unable to bear the change and afraid of harm, went over and told Pompey all Caesar’s secrets. He fought Caesar at Dyrrhachium and died at Munda.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "41.4" },
            { source: 2, locator: "34" },
            { source: 3, locator: "3.71" },
            { source: 4, locator: "31" },
          ],
          battleSlugs: ["dyrrhachium", "munda"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War",
          stake:
            "The commander who placed the winter quarters, judging the legates who held them for readers in Rome.",
          says: "Cicero did his duty, Labienus judged rightly, Cotta fought well, and Sabinus’s folly lost a legion.",
          refs: [{ source: 0, locator: "5.33, 5.47, 5.52" }],
        },
        {
          who: "Cassius Dio",
          stake:
            "A senator of the third century, inclined to explain defections by character.",
          says: "Labienus left because his pride outgrew his rank and Caesar’s favour cooled.",
          refs: [{ source: 1, locator: "41.4" }],
        },
        {
          who: "Plutarch",
          stake:
            "A biographer who liked to show Caesar’s generosity in small acts.",
          says: "Caesar sent Labienus’s money and baggage after him.",
          refs: [{ source: 2, locator: "34" }],
        },
        {
          who: "Suetonius",
          stake: "A biographer collecting signs of Caesar’s bond with his men.",
          says: "When he heard of the disaster to Titurius Sabinus, Caesar let his hair and beard grow until he had taken vengeance.",
          refs: [{ source: 5, locator: "67.2" }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, dispersing the legions in the winter of 54 made every legate a commander, far from Caesar and from one another. The system worked where a legate shared Caesar’s purpose and knew when to decide alone: Cicero refused terms and held; Labienus, given an order that left him discretion, used it and explained himself, and Caesar accepted his judgement. It failed where the command itself was divided. Sabinus and Cotta were equals in one camp, with no one above them nearer than Caesar, and the dispute was settled by the louder voice in front of the soldiers. The fault Caesar names was Sabinus’s; the arrangement that let one legate overrule another was his own.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "5.28–30, 5.41, 5.46–47" }],
        },
        {
          text: "A commander who builds his command on personal trust cannot keep it when trust fails. Labienus had Caesar’s full confidence in Gaul and every reason to know his plans; in 49 the same knowledge went to Pompey. The Wellington volume’s lesson on a short leash shows a commander who kept his subordinates close and shared little with them; Caesar shared a great deal, and one of the people he shared it with crossed over. Dio’s explanation of why is a later writer’s inference, and Caesar’s own pages say nothing of it.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "41.4" },
            { source: 0, locator: "5.46" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research on delegation or defection is read for this lesson. Earlier volumes read research on empowering leadership and shared command; this case adds only what the sources show. Caesar praised by name the officers who held and blamed by name the one who failed, and the ancient explanations of Labienus’s departure, pride, cooled favour and fear, are Dio’s guesses about a man whose own account is lost.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Labienus left no record of his reasons, and the only explanation read was written two centuries later.",
        },
      ],
      shadow: {
        text: "A lieutenant who knows the army knows how to hurt it. Dio says Labienus told Pompey all Caesar’s secrets. At Dyrrhachium, in Caesar’s account, he had the captured Caesarian soldiers brought out, called them comrades, asked them insolently whether veterans were in the habit of running away, and killed them in front of the army, to increase, Caesar writes, his own credit as a traitor. The commander’s best officer in Gaul became the enemy’s cruellest in the civil war.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "41.4" },
          { source: 3, locator: "3.71" },
        ],
        battleSlugs: ["dyrrhachium"],
      },
      counterCase: {
        text: "August von Gneisenau was the capable subordinate who stayed. As Hermann Teske’s article in the Neue Deutsche Biographie tells it, he succeeded Scharnhorst in 1813 as quartermaster-general, in effect chief of staff, of Blücher’s army and had a large share in the campaigns that took the allies to Paris; in 1815, through the King’s suspicion and the intrigues of the court against a reforming general, he was denied a command of his own and given again his old post as Blücher’s assistant, to his bitter disappointment. After the defeat at Ligny, with Blücher injured by a fall from his horse, he gave the order to retreat north to Wavre, acting, Teske writes, entirely in Blücher’s sense, so that the Prussian army could join the battle at Waterloo. Labienus left a chief whose favour had cooled; Gneisenau, slighted by his king, kept faith with his commander’s purpose.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        commanderSlug: "august-von-gneisenau",
        battleSlugs: ["ligny", "waterloo"],
      },
      cost: {
        text: "At Aduatuca, Caesar writes, the standard-bearer Lucius Petrosidius flung his eagle inside the rampart and was cut down before the camp, and the men who had regained it held off the enemy until nightfall and then, despairing of rescue, killed one another to a man. When Caesar reached Quintus Cicero’s camp he found few of the soldiers unwounded.",
        evidence: "fact",
        refs: [{ source: 0, locator: "5.37, 5.52" }],
      },
      transfer: {
        holdsWhen: [
          "Each delegated command has one clear head who shares the leader’s purpose and knows when to act without orders.",
          "Orders leave room for judgement, and a subordinate who uses it and explains why is backed.",
        ],
        failsWhen: [
          "Two equals share one command with no one to decide between them, and the dispute is settled in front of the people who will pay for it.",
          "The command rests on personal trust alone, so a capable subordinate whose standing grows has no place to go but out.",
        ],
        questions: [
          "Which of your delegated responsibilities has two people in charge and no one to decide between them?",
          "When did a subordinate last refuse an order of yours with good reasons, and what did you do?",
          "What would your most capable deputy take with them if they left, and where would they go?",
        ],
      },
      bearsOn:
        "Caesar’s soldiers are the second answer to the volume’s question, but an army is also its officers, and this lesson shows them at both ends. Cicero and Labienus in 54 extended Caesar’s reach exactly as delegation should; Sabinus and Cotta show the cost of a divided command; and Labienus in 49 shows that an army bound to one man could lose its best officer when the bond frayed. His account praises the first, blames the second and, in what was read, says nothing about why the third went.",
      questions: [
        {
          prompt:
            "What did Quintus Cicero reply when the Nervii offered him safe departure from his winter quarters?",
          choices: [
            "That he would leave if they gave hostages.",
            "That it was not the practice of Rome to accept terms from an enemy in arms.",
            "That he would wait for Caesar’s answer.",
          ],
          answer: 1,
          explanation:
            "Caesar records the single reply; Sabinus had accepted the same arguments from Ambiorix and marched out.",
        },
        {
          prompt:
            "How did Labienus respond to Caesar’s order to bring his legion to the Nervii?",
          choices: [
            "He marched at once and was ambushed.",
            "He judged that leaving camp in the face of the Treveri would invite disaster, and wrote to explain, as the order allowed.",
            "He ignored it.",
          ],
          answer: 1,
          explanation:
            "Caesar’s order said to come if he could do so without damage to the public service; Labienus used that discretion.",
        },
        {
          prompt:
            "What explanation does Cassius Dio give for Labienus’s defection in 49?",
          choices: [
            "He was bribed by Pompey.",
            "He grew proud beyond his rank, Caesar’s favour cooled, and he feared harm.",
            "Caesar dismissed him.",
          ],
          answer: 1,
          explanation:
            "It is Dio’s inference, two centuries later; Labienus’s own reasons are not recorded.",
        },
      ],
      seminar: {
        prompt:
          "Caesar praised Cicero, accepted Labienus’s refusal and blamed Sabinus. Argue who was responsible for Aduatuca, from the positions of Cotta, a centurion who heard Sabinus shout, and Caesar.",
        guidance:
          "Use the council at Aduatuca, Cicero’s reply, Labienus’s dispatch and Caesar’s speech after the relief. Distinguish the decision that lost the legion from the arrangement that allowed it to be made.",
      },
      sources: [
        s.gw5B,
        s.dio41,
        s.plutarchCaesar,
        s.cw3C,
        s.spanish,
        s.suetonius,
        s.ndbGneisenau,
      ],
    },
    {
      slug: "gaul-divided",
      title: "Gaul divided: using an enemy’s divisions",
      part: "Enemies and allies",
      themes: ["judgement", "ethics"],
      people: ["vercingetorix"],
      claim:
        "When a commander can play an enemy’s factions against each other, he can conquer more than his army alone could, until the enemy unites against him, and only so long as the allies he makes believe they gain more from him than from their own kin.",
      inBrief: {
        strength:
          "He entered Gaul as the ally of one faction against another and kept Gallic peoples on his side even in 52.",
        shadow:
          "The Aedui, who invited him, lost the primacy they sought and rose against him.",
      },
      moment: {
        text: "In 58 BCE, after the Helvetii had been sent home, the chiefs of the Gallic states asked Caesar to hear them in private. By his own account they threw themselves at his feet in tears, as anxious that their words should not be published as to obtain what they wanted, because publication would expose them to cruel vengeance. The Aeduan Diviciacus spoke for them. All Gaul, he said, was divided into two parties, one led by the Aedui and the other by the Arverni, who had long fought for dominion; the Arverni and the Sequani had hired Germans from across the Rhine, the Germans had liked the land and stayed, and now their king Ariovistus held the Sequani in a cruel tyranny and the Aedui were broken. He alone of the Aedui had refused to swear never to ask Rome for help, and he had gone to the Senate to ask it.",
        evidence: "fact",
        refs: [{ source: 0, locator: "1.31" }],
      },
      episodes: [
        {
          title: "An ally divided against itself",
          text: "Earlier that summer, with the corn the Aedui had promised still not delivered, Caesar pressed their chiefs, and Liscus, their chief magistrate, told him that men of more influence with the common people than the magistrates themselves were stirring the people against delivering it. If the Aedui could not hold the primacy of Gaul, these men argued, it was better to obey Gauls than Romans, who would take the liberty of the Aedui along with the rest. They also told the enemy everything that happened in the Roman camp. Caesar saw that Liscus meant Dumnorix, the brother of his friend Diviciacus, who had grown powerful by buying up the Aeduan taxes and kept a body of horse at his own expense.",
          evidence: "fact",
          refs: [{ source: 1, locator: "1.16–18" }],
          battleSlugs: ["bibracte"],
        },
        {
          title: "The Aedui turn",
          text: "In 52, during the siege of Gergovia, the Aeduan magistrate Convictolitavis, whom Caesar had confirmed in office, took an Arvernian bribe and persuaded young nobles that the Aedui alone stood between Gaul and victory. Litaviccus turned the Aeduan force marching to Caesar with a false story of a massacre; Caesar recovered it without bloodshed, but at home Aeduan crowds killed and robbed Roman traders. When Caesar let Eporedorix and Viridomarus go home, he reminded them of what he had done for the Aedui: found them crowded into their towns, stripped of their lands, paying tribute and giving hostages, and raised them above anything in their history. Dio says that after the defeat at Gergovia those who had caused the first rising feared Roman vengeance and rebelled.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "7.37–43, 7.54" },
            { source: 4, locator: "40.37–38" },
          ],
          battleSlugs: ["gergovia"],
        },
        {
          title: "All Gaul at Bibracte",
          text: "With the Aedui in revolt, a council of all Gaul met at Bibracte. The Aedui asked for the supreme command; the assembly, by Caesar’s account, voted to a man for Vercingetorix, and the Aedui, resenting the loss of their primacy and of Caesar’s favour, obeyed unwillingly. The Remi and the Lingones stayed away out of friendship for Rome, and the Treveri, hard pressed by the Germans, sent no help to either side. Vercingetorix told the Gauls to burn their own corn and buildings to starve the Romans. After Alesia, Caesar kept back the Aeduan and Arvernian prisoners, hoping to win back their peoples through them, and gave the rest to his soldiers.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "7.63–64" },
            { source: 5, locator: "7.89" },
          ],
          battleSlugs: ["alesia"],
          campaignSlugs: ["gallic-revolt-of-52-bce"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Gallic War",
          stake:
            "The conqueror, writing the Gauls’ speeches himself and explaining his interventions as answers to their requests.",
          says: "The Gauls asked for his help against each other and the Germans, and broke faith when he had served them.",
          refs: [
            { source: 0, locator: "1.31" },
            { source: 2, locator: "7.54" },
          ],
        },
        {
          who: "Diviciacus, as Caesar reports him",
          stake:
            "An Aeduan noble whose faction needed Roman help, speaking in a speech Caesar composed for him.",
          says: "Gaul was split between the Aedui and the Arverni, and Rome was the Aedui’s only hope against the Germans.",
          refs: [{ source: 0, locator: "1.31" }],
        },
        {
          who: "Cassius Dio",
          stake:
            "A later historian telling the revolt of 52 from a Roman point of view, sometimes differently from Caesar.",
          says: "The Aedui rose twice, the second time from fear of punishment after Gergovia.",
          refs: [{ source: 4, locator: "40.37–38" }],
        },
      ],
      strategist: [
        {
          text: "Caesar entered Gaul by invitation. The Aedui wanted Roman help against the Arverni, the Sequani and the Germans they had hired, and his pages show him using what the alliance gave: Aeduan corn, Aeduan cavalry, Aeduan hostages and intelligence. He also learned to use the Aedui’s own divisions, between Diviciacus who needed him and Dumnorix who feared him; on the march against Ariovistus it was Diviciacus, the one man, Caesar writes, in whom he had absolute confidence, who found the army its route through open country. Without hindsight, this was the cheapest way for a proconsul with a few legions to act across a country he did not know: every intervention on behalf of one people was also a foothold over its rivals.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "1.31, 1.41" },
            { source: 1, locator: "1.16–18" },
          ],
        },
        {
          text: "The method worked until 52, when it produced the thing it had prevented. Vercingetorix united most of Gaul, and even the Aedui joined him. Yet the divisions did not disappear: the Remi and Lingones stayed loyal, the Treveri stayed out, and the Aedui resented serving under an Arvernian. After Alesia Caesar returned at once to the old method, keeping back the Aeduan and Arvernian prisoners as tools for winning back their peoples. The lesson is not that divisions can be exploited for ever, but that a conqueror who has exploited them will reach for them again the moment the union breaks.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "7.63" },
            { source: 5, locator: "7.89" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research on alliances or intergroup rivalry is read for this lesson. Every Gallic voice in it, Diviciacus, Liscus, Convictolitavis, is a speech or a report in Caesar’s or Dio’s text, so the motives the lesson can see are the motives a Roman author gave the Gauls. Archaeology shows their towns, not their deliberations.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. The Gallic side survives only through Roman authors, and no Gallic account of these choices exists.",
        },
      ],
      shadow: {
        text: "Allies made by Rome were ruined by Rome. The Aedui invited Caesar to restore their primacy against the Arverni; by 52 they were offered, in his own reminder, a dignity greater than any in their history, and by the council at Bibracte they had lost the leadership of Gaul to an Arvernian and resented losing Caesar’s favour too. Diviciacus had begged that his words not be published for fear of vengeance; Caesar published them in his book. The faction that bound itself to Rome found that it had bound itself to a power that would rule both factions.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "1.31" },
          { source: 2, locator: "7.54" },
          { source: 3, locator: "7.63" },
        ],
      },
      counterCase: {
        text: "Arminius did what Vercingetorix did, and was undone by the same divisions. As the Neue Deutsche Biographie tells it, he commanded the Cheruscan auxiliaries in the Roman army, and in 9 CE led a coalition of Germanic peoples that drew Varus and his legions into an ambush and destroyed them; the Livius article adds that Germania was never included in the empire afterwards. But the Cherusci were divided too. Segestes, a Cheruscan prince and a keen friend of Rome, was his father-in-law against his will; when Arminius besieged him he called in Germanicus, and Arminius’s wife, Segestes’s daughter, was carried into captivity in Italy with the son she was carrying. Arminius fought Rome to a standstill and then fought the Marcomannic king Marbod, and in 21 CE he was murdered by his own kin, allegedly because he sought to be king. Union defeated Rome in Germany once; division ended the man who had built it.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 7 }],
        commanderSlug: "arminius",
        battleSlugs: ["teutoburg"],
      },
      cost: {
        text: "The divisions were paid for in Gaul. When the Aedui rose in 52 they took the hostages Caesar had lodged with them and tried to terrify waverers by executing them; their crowds robbed, killed or enslaved Roman traders; Vercingetorix ordered the Gauls to burn their own corn and buildings. After Alesia the prisoners who were not useful for winning back the Aedui and the Arverni were given to the soldiers.",
        evidence: "fact",
        refs: [
          { source: 3, locator: "7.63–64" },
          { source: 2, locator: "7.42" },
          { source: 5, locator: "7.89" },
        ],
      },
      transfer: {
        holdsWhen: [
          "An opponent is split into rivals who fear each other more than they fear the outsider, and one of them asks for help.",
          "The allies believe they gain more from the outsider than they would lose to him.",
        ],
        failsWhen: [
          "The outsider’s success makes him the greater threat, and the rivals unite against him.",
          "The allies discover that the help they asked for has made them subjects, and change sides at the worst moment.",
        ],
        questions: [
          "Which of your partners is working with you mainly because it fears a rival more than it fears you?",
          "What would make your opponents set aside their differences, and are you doing it?",
          "What did your last ally gain from you, and do they still think so?",
        ],
      },
      bearsOn:
        "This is the answer the Commentaries say least about directly, and show most often. Caesar’s Gaul is a country of rival peoples and rival factions within them, and nearly every campaign begins with one of them asking for his help. The divisions let a few legions conquer a country; when they closed in 52 they nearly undid him; and even then they were not closed enough. His account presents them as the Gauls’ weakness and his help as an answer to requests, which is the fourth answer, his record, at work on the third.",
      questions: [
        {
          prompt:
            "According to Diviciacus, as Caesar reports him, how was Gaul divided in 58?",
          choices: [
            "Between the coast and the interior.",
            "Into two parties led by the Aedui and the Arverni, the latter having hired Germans from across the Rhine.",
            "Between Gauls and Belgae only.",
          ],
          answer: 1,
          explanation:
            "The speech is Caesar’s composition, but it explains the invitation through which he intervened.",
        },
        {
          prompt: "What did Liscus reveal to Caesar about the Aedui?",
          choices: [
            "That they were short of corn.",
            "That powerful men among them were turning the people against Rome and informing the enemy.",
            "That they had elected Vercingetorix.",
          ],
          answer: 1,
          explanation:
            "Caesar identified Dumnorix, his ally Diviciacus’s brother, as the leader of that faction.",
        },
        {
          prompt:
            "Which Gallic peoples stayed away from the council at Bibracte in 52, according to Caesar?",
          choices: [
            "The Arverni and the Aedui.",
            "The Remi and the Lingones, out of friendship for Rome, and the Treveri, pressed by the Germans.",
            "None; all Gaul attended.",
          ],
          answer: 1,
          explanation:
            "Even the great rising was not complete, and the Aedui resented the command going to an Arvernian.",
        },
      ],
      seminar: {
        prompt:
          "The Aedui invited Caesar into Gaul. Argue whether they were right to do so, from the positions of Diviciacus in 58, Dumnorix, and an Aeduan noble at the council of Bibracte in 52.",
        guidance:
          "Use Diviciacus’s speech, Liscus’s report, Caesar’s reminder to Eporedorix and Viridomarus, and the council at Bibracte. Remember that every Gallic voice here was written by a Roman.",
      },
      sources: [
        s.gw1B,
        s.gw1A,
        s.gw7D,
        s.gw7F,
        s.dio40,
        s.gw7G,
        s.ndbArminius,
        s.liviusTeutoburg,
      ],
    },
    {
      slug: "clemency",
      title: "Clemency: mercy as policy",
      part: "Enemies and allies",
      themes: ["ethics", "restraint"],
      claim:
        "When a leader shows mercy to defeated enemies, it can win a war by making surrender safe, but only when the mercy is credible and the enemy believes it will be honoured, and only for as long as those spared accept being in his debt.",
      inBrief: {
        strength:
          "He let Roman enemies go at Corfinium and Ilerda, and their soldiers came over to him.",
        shadow:
          "The Gauls were not offered the same terms, and men he had pardoned killed him.",
      },
      moment: {
        text: "Early in 49 BCE, soon after the Rubicon, the garrison of Corfinium handed over its commander, Lucius Domitius, whom Suetonius calls Caesar’s irregularly named successor in Gaul. At dawn, by Caesar’s own account, the senators and their sons, the military tribunes and the Roman knights in the town were brought before him: Domitius, Lentulus Spinther, the quaestor and others, with many young men and the municipal notables Domitius had summoned. Caesar protected them from the jeers of his soldiers, complained in a few words that they had shown no gratitude for his kindnesses, and let them all go unharmed. The money Domitius had brought into the town for Pompey’s soldiers he returned to Domitius, so as not to seem more restrained with men’s lives than with their property. Domitius’s soldiers he made swear allegiance to himself, and marched on the same day. Plutarch adds that Domitius, despairing, had asked his physician for poison and drunk it, and then, hearing of the wonderful clemency Caesar was showing his prisoners, lamented his haste.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "1.20–23" },
          { source: 2, locator: "34.1" },
          { source: 7, locator: "34" },
        ],
      },
      episodes: [
        {
          title: "Mercy to citizens",
          text: "At Ilerda in 49 Caesar refused to fight an army he had cut off from water, saying in his own account that he was moved by compassion for fellow citizens; when it surrendered he disbanded it and forced no one to swear to him. Dio says he did not put to death a single man captured in that war, and that his reputation and cause profited from it. Suetonius adds that while Pompey declared that he would treat as enemies those who did not take up arms for the government, Caesar said that those who stayed neutral would be counted his friends; that at Pharsalus he called out to spare fellow citizens and let each of his men save one man of the other side; and that no Pompeian died except in battle save three, and not even those, it was believed, by his wish.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "1.72, 1.85–87" },
            { source: 2, locator: "75" },
            { source: 3, locator: "41.23" },
          ],
          battleSlugs: ["ilerda", "pharsalus"],
        },
        {
          title: "No such terms in Gaul",
          text: "In Gaul the same commander chose severity, and wrote it down. In 55 he detained the chiefs of the Usipetes and Tencteri who had come to his quarters and attacked their leaderless camp, sending his cavalry after the women and children who fled. At Avaricum in 52, he writes, his soldiers, maddened by the massacre of Romans at Cenabum and the toil of the siege, spared neither the old, nor women, nor children. At Uxellodunum in 51 Hirtius explains the reasoning: Caesar’s clemency was known to all, so he did not fear that severity would be thought cruelty in him, and since he saw no end to the war if more peoples rebelled, he granted the defenders their lives and cut off the hands of all who had borne arms, as a warning.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "4.13–15" },
            { source: 5, locator: "7.28" },
            { source: 6, locator: "8.44" },
          ],
          battleSlugs: [],
          campaignSlugs: [
            "caesar-s-conquest-of-gaul-58-53-bce",
            "gallic-revolt-of-52-bce",
          ],
        },
        {
          title: "Those who would not be pardoned",
          text: "Plutarch says that after the civil wars a temple of Clemency was decreed in thanks for Caesar’s mildness; he pardoned many who had fought him and gave some honours and offices, among them Brutus and Cassius, both made praetors. He refused a bodyguard, saying it was better to die once than always to expect death. Suetonius adds that he let all those he had not yet pardoned return to Italy and hold office, and answered plots and slanders with warnings rather than punishments. Cato would not be pardoned. When Caesar learned that Cato had killed himself at Utica, Plutarch reports him saying that he begrudged Cato his death, as Cato had begrudged him the saving of his life. The elder Pliny counted another act as the true sign of a great spirit: when Pompey’s dispatch cases were taken at Pharsalus, and Scipio’s at Thapsus, Caesar burned them unread.",
          evidence: "fact",
          refs: [
            { source: 7, locator: "54, 57" },
            { source: 2, locator: "75.4–5" },
            { source: 8, locator: "7.94" },
          ],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Civil War",
          stake:
            "The commander, presenting his civil war as a defence of his honour and his mercy as proof of it.",
          says: "He spared senators at Corfinium and an army at Ilerda, from compassion for fellow citizens.",
          refs: [
            { source: 0, locator: "1.23" },
            { source: 1, locator: "1.72" },
          ],
        },
        {
          who: "Aulus Hirtius",
          stake:
            "Caesar’s officer and continuator, explaining the punishment at Uxellodunum.",
          says: "Because his clemency was known, severity could be used without being taken for cruelty.",
          refs: [{ source: 6, locator: "8.44" }],
        },
        {
          who: "Pliny the Elder",
          stake:
            "A Roman of the next century, condemning Caesar’s killing in war and praising his mercy.",
          says: "He surpassed everyone in clemency, even to the point of regretting it, and burned his enemies’ letters unread.",
          refs: [{ source: 8, locator: "7.93–94" }],
        },
        {
          who: "Suetonius",
          stake: "A biographer listing the evidence for Caesar’s mercy.",
          says: "No Pompeian died outside battle by his wish, and he treated plots with warnings.",
          refs: [{ source: 2, locator: "75" }],
        },
      ],
      strategist: [
        {
          text: "In a civil war, mercy is a weapon. Every enemy soldier is a citizen who may be needed afterwards, and every garrison deciding whether to hold out is weighing what surrender will cost. Caesar’s mercy at Corfinium was public and immediate, and the garrison’s soldiers swore to him the same day; at Ilerda it ended a campaign without a battle. Repeated, it became credible, and credibility was the point: Pompey’s threat to treat neutrals as enemies made Caesar’s promise to count them as friends the better offer. Dio’s judgement that his cause profited from it states the calculation plainly.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "1.23" },
            { source: 2, locator: "75.1" },
            { source: 3, locator: "41.23" },
          ],
        },
        {
          text: "In Gaul the calculation ran the other way, and Hirtius says so. Clemency and severity were not two temperaments but two instruments of one policy: mercy where surrender had to be made safe, terror where revolt had to be made too costly to repeat. The reputation for mercy even licensed the terror, by Hirtius’s account, because no one would mistake it for cruelty. A reader should hold both in view rather than choose the Caesar of Corfinium or the Caesar of Uxellodunum.",
          evidence: "interpretation",
          refs: [{ source: 6, locator: "8.44" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research on forgiveness or reconciliation between enemies is read for this lesson. Cato’s refusal points to what such research might ask: to accept a pardon was to accept that the pardoner had the right to give it. Caesar’s reported words at Utica suggest he understood that, and the sources do not say what the men he pardoned felt about their debt.",
          evidence: "interpretation",
          refs: [{ source: 7, locator: "54" }],
          limit:
            "No mechanism is offered. Cato’s motives and Caesar’s reported words come from Plutarch, writing a century and a half later.",
        },
      ],
      shadow: {
        text: "Mercy left its recipients alive and in debt, and some refused to stay there. Plutarch names Brutus and Cassius among the pardoned whom Caesar made praetors; both were among the men who killed him. Dio says many of the soldiers who fought him to the end at Munda had been captured with Afranius and Varro and spared, and fought desperately because they expected no second pardon. Cato, rather than owe Caesar his life, ended it. A mercy that could only be given, never refused or repaid, was itself a sign of how far above the Republic he stood.",
        evidence: "interpretation",
        refs: [
          { source: 7, locator: "54, 57" },
          { source: 9, locator: "43.36" },
        ],
        battleSlugs: ["munda"],
      },
      counterCase: {
        text: "Caesar’s heir took the opposite course and wrote the opposite record. Suetonius says that as a triumvir Octavian at first opposed a proscription of his enemies, but once it began carried it through more severely than his colleagues, insisting that no one be spared and adding his own guardian to the list; when Lepidus held out hope of leniency afterwards, he declared he had agreed to end the proscription only if he kept a free hand for the future. In the Res Gestae, his own account of his deeds, Augustus wrote that when victorious he had spared all citizens who asked for pardon. He died in his bed after ruling for decades; the men Caesar spared killed him.",
        evidence: "interpretation",
        refs: [
          { source: 10, locator: "27" },
          { source: 11, locator: "3" },
        ],
        commanderSlug: "augustus",
        battleSlugs: ["actium"],
      },
      cost: {
        text: "The policy’s cost fell on those it excluded. At Uxellodunum the men who had borne arms lost their hands; at Avaricum, by Caesar’s account, the old, the women and the children were not spared; the Usipetes and Tencteri died in their camp and in the Rhine. The elder Pliny, who praised Caesar’s clemency, refused in the same passage to count the killing in his foreign wars to his glory.",
        evidence: "fact",
        refs: [
          { source: 6, locator: "8.44" },
          { source: 5, locator: "7.28" },
          { source: 4, locator: "4.14–15" },
          { source: 8, locator: "7.92–93" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The opponents are people the leader will need afterwards, and surrender is a choice they are still weighing.",
          "The mercy is public and repeated, so that people believe it before they test it.",
        ],
        failsWhen: [
          "Mercy is offered to some and refused to others in ways the excluded can see, so it reads as calculation rather than principle.",
          "Those spared resent the debt more than they value their lives, and use the freedom they were given.",
        ],
        questions: [
          "Whom will you need after this conflict, and what are you doing now to make surrender safe for them?",
          "Who is outside your generosity, and what do they conclude from it?",
          "What does accepting your forgiveness cost the people who accept it?",
        ],
      },
      bearsOn:
        "Clemency won Caesar Italy and Spain with little fighting, and his account makes it proof of his cause: the defender of his honour who would not shed citizens’ blood. That is the fourth answer, his record, joined to the second, an army that swelled with the soldiers of every garrison he spared. The Gauls saw the other face of the same policy, and the men he pardoned in Rome found the debt unbearable. Mercy was a strategy, and like his speed it worked where its conditions held.",
      questions: [
        {
          prompt:
            "What did Caesar do with the senators and knights captured at Corfinium, by his own account?",
          choices: [
            "He executed the leaders.",
            "He protected them from his soldiers, reproached them for ingratitude and let them all go unharmed, returning Domitius’s money.",
            "He sent them to Rome in chains.",
          ],
          answer: 1,
          explanation:
            "Their soldiers swore allegiance to him, and he marched on the same day.",
        },
        {
          prompt: "How does Hirtius explain the punishment at Uxellodunum?",
          choices: [
            "As revenge for Roman losses.",
            "Caesar’s clemency was known, so severity would not be taken for cruelty, and he wanted to deter further revolts.",
            "As a mistake by a subordinate.",
          ],
          answer: 1,
          explanation:
            "Hirtius presents clemency and severity as two tools of one policy.",
        },
        {
          prompt:
            "What does the Res Gestae claim about Augustus’s treatment of defeated citizens, and what does Suetonius report?",
          choices: [
            "Both say he proscribed his enemies.",
            "The Res Gestae says he spared all who asked for pardon; Suetonius says he pressed the proscription harder than his colleagues.",
            "Both say he pardoned everyone.",
          ],
          answer: 1,
          explanation:
            "The commander’s own record and a later biographer disagree, as they often do for Caesar.",
        },
      ],
      seminar: {
        prompt:
          "Was Caesar’s clemency a virtue or a policy? Argue from the positions of Domitius at Corfinium, a defender of Uxellodunum, and Cato at Utica.",
        guidance:
          "Use Corfinium, Ilerda, Hirtius on Uxellodunum, Plutarch on Cato and the pardoned assassins, and Augustus’s two records. Say who received mercy, who did not, and what accepting it meant.",
      },
      sources: [
        s.cw1A,
        s.cw1C,
        s.suetonius,
        s.dio41,
        s.gw4,
        s.gw7C,
        s.hirtius,
        s.plutarchCaesar,
        s.pliny,
        s.dio43,
        s.suetoniusAugustus,
        s.resGestae,
      ],
    },
    {
      slug: "a-rival-who-knew-him",
      title: "A rival who knew him: Pompey",
      part: "Enemies and allies",
      themes: ["adaptation", "judgement"],
      people: ["titus-labienus"],
      claim:
        "When two leaders know each other’s habits, the advantage goes to the one who can act on that knowledge and change his own, but only if his followers let him, and only while the knowledge is still true.",
      inBrief: {
        strength:
          "At Pharsalus he read Pompey’s plan from his dispositions and built a line against it.",
        shadow:
          "Victory over a fellow Roman settled the war, not the question of how Rome would be ruled.",
      },
      moment: {
        text: "Before Pharsalus in 48 BCE, Pompey told his council of war, as Caesar later recorded it, that Caesar’s army would be routed before the lines met. He knew it sounded incredible, he said, but his cavalry had promised to ride round Caesar’s open right flank and drive his army from behind before a weapon was thrown, so that the war would be ended without risking the legions. Labienus spoke next. Do not suppose, he told Pompey, that this is the army that conquered Gaul and Germany; he had been at all its battles, most of it had perished or gone home, and the flower of what was left had fallen at Dyrrhachium. He swore not to return to camp except as a victor, Pompey swore the same, and the council broke up in high expectation. Caesar’s account of this council was written by the man it was about.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.86–87" }],
      },
      episodes: [
        {
          title: "Dyrrhachium: Pompey reads Caesar",
          text: "At Dyrrhachium Pompey did what Caesar could not make him undo. He refused a pitched battle, built an inner line of redoubts faster than Caesar could close the outer ring, and waited while Caesar’s men lived on roots. When two Allobrogian deserters told him where Caesar’s lines were unfinished, he struck there by land and sea and broke out. Then, with Caesar’s counterattack collapsing, he did not press the pursuit. Caesar thought he feared an ambush; Appian says Labienus persuaded him to chase the fugitives instead of taking Caesar’s camp, and that Pompey hesitated; Suetonius has Caesar say afterwards that Pompey did not know how to use a victory.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "3.44, 3.48" },
            { source: 5, locator: "3.61–63, 3.70" },
            { source: 4, locator: "2.62" },
            { source: 3, locator: "36" },
          ],
          battleSlugs: ["dyrrhachium"],
        },
        {
          title: "Two camps",
          text: "In Thessaly, Caesar writes, Pompey’s camp behaved as though the war were won: men quarrelled over Caesar’s priesthood, apportioned consulships for years ahead, and argued over how to punish those who had stayed neutral. Plutarch, from the other side, says Pompey meant to avoid battle and wear Caesar down by want, but was denounced for prolonging the war to keep his command, called Agamemnon and King of Kings, and forced from his purpose by followers he was loath to disappoint. Caesar, meanwhile, offered battle daily, trained picked young infantrymen to fight among his outnumbered cavalry, and was on the point of marching away when Pompey’s line came further from its rampart than usual. He turned the army round and said this was the chance they had always asked for.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.82–85" },
            { source: 2, locator: "66–67" },
          ],
          battleSlugs: ["pharsalus"],
        },
        {
          title: "The fourth line",
          text: "Seeing Pompey’s cavalry massed against his right, Caesar drew single cohorts from his third line into a fourth, posted it facing the horsemen, told those men that the day depended on them, and ordered the third line not to engage until he gave the signal. Pompey ordered his infantry to stand and receive the charge, which Caesar calls irrational; Caesar’s veterans, seeing the enemy not advancing, halted of their own accord halfway to recover their breath, then charged. When Pompey’s cavalry drove back Caesar’s horse and began to ride round the flank, the fourth line attacked them so fiercely that they fled for the hills, the archers and slingers behind them were cut down, and the cohorts wheeled onto the Pompeian rear. The exercise ‘Pompey’s cavalry’ puts the reader at that choice.",
          evidence: "fact",
          refs: [{ source: 0, locator: "3.84, 3.89, 3.92–94" }],
          battleSlugs: ["pharsalus"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Civil War",
          stake:
            "The victor, writing his rival’s council of war and his own reading of it.",
          says: "Pompey’s plan was legible, his camp was quarrelling over spoils, and his order to stand was a mistake.",
          refs: [{ source: 0, locator: "3.83, 3.86, 3.92" }],
        },
        {
          who: "Plutarch, Life of Pompey",
          stake:
            "A biographer sympathetic to Pompey, writing a century and a half later.",
          says: "Pompey knew delay was his best course and was shamed out of it by his own side.",
          refs: [{ source: 2, locator: "67" }],
        },
        {
          who: "Suetonius",
          stake: "A biographer recording Caesar’s sayings.",
          says: "Caesar said Pompey did not know how to use a victory.",
          refs: [{ source: 3, locator: "36" }],
        },
        {
          who: "Appian",
          stake:
            "A Greek historian of the second century, inclined to see fate and folly in Pompey’s choices.",
          says: "Labienus led Pompey away from taking Caesar’s camp after Dyrrhachium.",
          refs: [{ source: 4, locator: "2.62" }],
        },
      ],
      strategist: [
        {
          text: "Each commander knew the other, and each knew something different. Pompey’s knowledge was strategic: Caesar’s army was short of supplies and could be worn down by delay, and Plutarch says he judged Caesar’s veterans invincible in battle but ill fitted by age for marches and digging. Caesar’s knowledge was tactical: he could read Pompey’s plan from the way his cavalry was massed, and he had already trained infantry to fight among his own horse. Without hindsight, Pompey’s plan for the battle was sound on paper and his plan for the campaign was better. He could not hold his camp to the second, and Caesar met the first with a line he had prepared for.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "66–67" },
            { source: 0, locator: "3.84, 3.89" },
          ],
        },
        {
          text: "Knowledge of a rival is a snapshot. Labienus knew the army of Gaul better than anyone in Pompey’s camp, and told the council that it was gone; the veterans who halted halfway through their charge without orders, because they had learned from earlier battles, showed what he had missed. The Napoleon volume’s lesson on rivals who learn makes the general point; this case adds that the man with the most intimate knowledge of the enemy can be the most confidently wrong, because he knows what the enemy used to be.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "3.87, 3.93" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "No research on rivalry or on group pressure in decisions is read for this lesson, and the Napoleon volume already carries the argument about opponents who learn. The sources show a pressure that research might name: a commander with a sound plan argued out of it by followers who mocked his caution and divided the spoils in advance. Plutarch’s explanation, that Pompey was a slave to reputation, is a biographer’s judgement of character, not a finding.",
          evidence: "interpretation",
          refs: [{ source: 2, locator: "67" }],
          limit:
            "No mechanism is offered. Pompey’s motives come from Plutarch and from Caesar, his enemy; his own account does not survive.",
        },
      ],
      shadow: {
        text: "Victory over a fellow Roman settled the campaign, not the Republic. Pompey fled to Egypt, where the young king’s advisers lured him into a small boat and had him killed by Achillas and Septimius, a man who had served under him as a centurion; Lentulus was killed in prison. The war went on in Africa and in Spain against Pompey’s sons, and ended, as the 1911 Britannica judges it, with Caesar holding powers little different from those of the later Principate.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "3.103–104" }, { source: 6 }],
      },
      counterCase: {
        text: "Pompey is the counter-case to his own victory at Dyrrhachium. He had read Caesar correctly: his best course, Plutarch writes, was to follow him, avoid battle and starve him, and he knew it. He also feared, Plutarch says, a saying current among his cavalry that once they had routed Caesar they must put down Pompey too, and, some said, he kept Cato away from the army in case Cato forced him to lay down his command after victory. Mocked by the senators and kings in his camp, he gave way. The rival who knew Caesar best could not act on that knowledge because his followers did not share it, while Caesar’s soldiers, in Suetonius’s account, asked to be punished for Dyrrhachium and fought at Pharsalus weeks later.",
        evidence: "interpretation",
        refs: [
          { source: 2, locator: "67" },
          { source: 3, locator: "68.3" },
        ],
        commanderSlug: "pompey",
        battleSlugs: ["dyrrhachium", "pharsalus"],
      },
      cost: {
        text: "Asinius Pollio, as Suetonius reports him, saw Caesar at Pharsalus look at his enemies slain or in flight and say, word for word, ‘They would have it so’: even he, after so many great deeds, would have been condemned if he had not turned to his army. The dead on that field were Roman citizens on both sides.",
        evidence: "fact",
        refs: [{ source: 3, locator: "30.4" }],
      },
      transfer: {
        holdsWhen: [
          "You know how a rival thinks, and you can prepare a specific answer to what they are likely to do.",
          "Your own people trust your judgement enough to let you act on what you know, even when it looks like caution.",
        ],
        failsWhen: [
          "Your knowledge of the rival is old, and they have learned since you last saw them work.",
          "Your followers do not share your reading and press you into the action the rival wants.",
        ],
        questions: [
          "What do you know about your main competitor that is more than a year old?",
          "Who in your organisation could talk you out of a plan you know is right, and how?",
          "What would your rival say about you today, and is it still true?",
        ],
      },
      bearsOn:
        "Pharsalus is often told as Caesar’s genius and Pompey’s blunder. The evidence makes it the meeting of two of the volume’s answers: Caesar’s soldiers, who halted mid-charge without orders and broke the cavalry, and his enemies’ divisions, here not Gallic factions but a Pompeian camp that could not agree to wait. The account of Pompey’s council, the quarrels over spoils and Labienus’s boast comes from Caesar, the fourth answer, and it makes his enemies’ folly the explanation of his victory.",
      questions: [
        {
          prompt:
            "What did Pompey promise his council before Pharsalus, as Caesar records it?",
          choices: [
            "That he would wait until Caesar starved.",
            "That his cavalry would rout Caesar’s army from the flank before the lines met.",
            "That he would negotiate.",
          ],
          answer: 1,
          explanation:
            "Labienus added that Caesar’s army was no longer the army of Gaul; both swore to return only as victors.",
        },
        {
          prompt: "How did Caesar meet Pompey’s cavalry at Pharsalus?",
          choices: [
            "With his own larger cavalry.",
            "With a fourth line of cohorts drawn from his third, posted against the cavalry and told the day depended on them.",
            "By retreating to his camp.",
          ],
          answer: 1,
          explanation:
            "He had also trained young infantry to fight among his outnumbered horse in the days before.",
        },
        {
          prompt:
            "According to Plutarch, why did Pompey fight at Pharsalus at all?",
          choices: [
            "Because he expected an easy victory.",
            "Because his followers mocked his caution and forced him from his plan of wearing Caesar down.",
            "Because his supplies had run out.",
          ],
          answer: 1,
          explanation:
            "Plutarch says Pompey knew delay was his best course and gave way to his camp.",
        },
      ],
      seminar: {
        prompt:
          "Pompey knew how to beat Caesar and fought him anyway. Argue who was responsible for Pharsalus, from the positions of Pompey, Labienus and a senator in Pompey’s camp.",
        guidance:
          "Use Pompey’s council as Caesar records it, Plutarch on the pressure to fight, and the fourth line. Say what each man knew about Caesar’s army, and how old that knowledge was.",
      },
      sources: [
        s.cw3D,
        s.cw3B,
        s.plutarchPompey,
        s.suetonius,
        s.appian,
        s.cw3C,
        s.eb1911,
      ],
    },
    {
      slug: "the-rubicon",
      title: "The Rubicon: command and legitimacy",
      part: "Beyond the battlefield",
      themes: ["ethics", "succession"],
      claim:
        "When a commander turns his army against the authority that gave it to him, he may win the war, but he loses the legitimacy that would let his victory be accepted, and the more power he then gathers, the less of it he can rule by consent.",
      inBrief: {
        strength:
          "His army followed him across the Rubicon and won him Italy in weeks.",
        shadow:
          "He won the war and was killed within a year of its end by men who called it liberty.",
      },
      moment: {
        text: "Early in 49 BCE, as Suetonius tells it, Caesar slipped away from a dinner at Ravenna after dark, lost his way in the night, and at dawn overtook his cohorts at the Rubicon, the boundary of his province. He paused, and, realising what he was doing, said to those about him that they could still draw back, but once across the little bridge the whole issue would be with the sword. Then a figure of wondrous stature appeared, seized a trumpet from one of his trumpeters, sounded the war note and strode to the other bank. Caesar said they should go where the signs of the gods and the injustice of their enemies called: in Rolfe’s translation of Suetonius, ‘The die is cast.’ Plutarch says he used a Greek proverb, ‘Let the die be cast’, after talking over with his friends, Asinius Pollio among them, the evils that would follow for all mankind.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "31–32" },
          { source: 1, locator: "32" },
        ],
      },
      episodes: [
        {
          title: "The law and the vetoes",
          text: "The 1911 Britannica explains the trap. Caesar’s command in Gaul had been extended so that he would hold office, and with it immunity from prosecution, until he could be elected consul again; in 52 Pompey passed a law that made it possible to name his successor before then, which would leave him for some months a private citizen, liable to be called to account. When the Senate proclaimed martial law in January 49, the tribunes Antony and Cassius fled to him. Suetonius gives the motives others saw: Pompey said Caesar wanted turmoil because he could not pay for all he had promised; Cato swore to impeach him the moment he gave up his army; and Pollio reported that at Pharsalus Caesar said he would have been condemned had he not turned to his army.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 0, locator: "30" }],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
        {
          title: "His own case",
          text: "Caesar’s Civil War gives his answer, spoken to a captured enemy at Corfinium: he had not left his province with any evil intent, but to defend himself from the insults of his enemies, to restore the tribunes who had been expelled, and to assert the freedom of himself and the Roman people, oppressed by a small faction. Across the Rubicon, Suetonius says, he harangued the soldiers with tears, tearing his robe from his breast, and begged for their faithful service. Plutarch says the news filled Rome with a fear beyond compare, and the senators ran to Pompey, who could point only to the soldiers who had come from Caesar and to troops still to be gathered.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "1.22" },
            { source: 0, locator: "33" },
            { source: 4, locator: "60" },
          ],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
        {
          title: "Dictator for life",
          text: "Victory brought power, and the power had no republican name. The 1911 Britannica traces the dictatorships, the third for ten years and, before February 44, one for life, which it calls a contradiction in terms that suspended the guarantees of Roman liberty. Suetonius lists the honours Caesar accepted, from the perpetual dictatorship to temples and a priest of his own, and says they were thought too great for a mortal; Titus Ampius, a hostile witness, recorded him saying that the Republic was nothing, a mere name without body or form. Suetonius says the conspiracies came together because even the populace now cried out for defenders of their liberty. On the Ides of March he was stabbed in the Senate, uttering, Suetonius says, not a word but a groan.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 0, locator: "76–77, 80, 82" }],
          battleSlugs: [],
          campaignSlugs: ["caesar-s-civil-war"],
        },
      ],
      witnesses: [
        {
          who: "Caesar, Civil War",
          stake:
            "The man who crossed, making his case to readers who would judge whether he had a right to.",
          says: "He came to defend his honour, restore the tribunes and free the Roman people from a faction.",
          refs: [{ source: 3, locator: "1.22" }],
        },
        {
          who: "Suetonius",
          stake:
            "A biographer writing under the emperors, collecting both Caesar’s defenders and his accusers.",
          says: "It was thought he abused his power and was justly slain.",
          refs: [{ source: 0, locator: "76.1" }],
        },
        {
          who: "Asinius Pollio, as Suetonius reports him",
          stake:
            "An officer who was with Caesar at the Rubicon and at Pharsalus.",
          says: "Caesar said that without his army he would have been condemned.",
          refs: [{ source: 0, locator: "30.4" }],
        },
        {
          who: "The 1911 Britannica",
          stake: "A modern constitutional reading of the dictatorship.",
          says: "His powers differed little from Augustus’s Principate; his reach for kingship and divinity explains his murder.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, Caesar’s choice in January 49 was between giving up his army and facing the courts, as Cato promised, or keeping it and fighting. Suetonius’s witnesses differ on why he chose, but agree on what he weighed. He moved before his enemies were ready, with what he had, and Pompey abandoned Italy; as a campaign it was the volume’s first answer, speed, at its most effective. As a political act it had a price the campaign could not pay: every later victory was a victory over Romans, won by an army the state had not authorised, and needed a name the Republic did not have.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "30.3–4" },
            { source: 4, locator: "60" },
          ],
        },
        {
          text: "His answer was to gather powers and offices until no rival could match them. The 1911 Britannica judges that this cumulation differed little from what Augustus later held, and that the perpetual dictatorship alone would not explain his murder; what did, it suggests, were signs in his last months of reaching for kingship and divinity. The strategist’s conclusion is narrower: a commander who has taken power by force has to convert it into authority people accept, and Caesar, by the evidence of his honours and his reported words, did not find the form that would do it.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 0, locator: "76–77" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Legitimacy",
          base: "review",
          text: "Tyler’s review describes legitimacy as the property of an authority that makes people believe it proper and just, so that they defer out of obligation rather than fear or reward, and argues that power alone makes influence difficult to sustain. The Alexander volume used it for a conqueror seeking acceptance from a foreign people; here the question is different: a commander who, in the Senate’s eyes, had broken the authority that made his command legitimate. Caesar commanded his soldiers’ obedience and Rome’s submission; the conspiracy and the cry for liberty that Suetonius reports suggest he never commanded the obligation Tyler describes.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
          limit:
            "Only the abstract was read. Tyler reviews research on modern institutions, and what Romans felt about Caesar’s authority reaches us through hostile and admiring writers a century and more later.",
        },
      ],
      shadow: {
        text: "The Republic did not survive his victory, and neither did he. The 1911 Britannica quotes Seneca’s remark that more of Caesar’s friends than his enemies were among his murderers, and accounts for it by the growing absolutism of his rule. The men he had pardoned and promoted, Brutus and Cassius among them, killed him in the name of the liberty he said he had crossed the Rubicon to defend.",
        evidence: "interpretation",
        refs: [
          { source: 2 },
          { source: 0, locator: "80" },
          { source: 1, locator: "57" },
        ],
      },
      counterCase: {
        text: "Wellington served governments he distrusted and stayed within their orders, and the Wellington volume’s lesson on the government at home reads his case in full. Writing to Lord Liverpool from Viseu on 2 April 1810, he accepted responsibility for evacuating Portugal under the instructions he had been given, and insisted that, whatever people said, he was not as eager to fight desperate battles as they imagined; he had kept the army in its positions for six months against the wishes of his own officers and the allies, looking to the great result of keeping a foothold in the Peninsula. He argued with ministers in letters, not with an army. His victories were accepted at home because they were won within the authority that sent him.",
        evidence: "interpretation",
        refs: [{ source: 6, locator: "pp. 5–9" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["bussaco-torres-vedras-1810"],
      },
      cost: {
        text: "The crossing put Rome itself at risk. Plutarch says that when the news came the city was filled with tumult, consternation and a fear beyond compare, and the senators went in haste to Pompey; within weeks the consuls and many senators had left Italy. The war that followed was fought by Romans against Romans in Italy, Spain, Greece, Egypt and Africa.",
        evidence: "fact",
        refs: [
          { source: 4, locator: "60" },
          { source: 1, locator: "34–35" },
          { source: 2 },
        ],
      },
      transfer: {
        holdsWhen: [
          "A leader’s authority depends on an institution, and acting against it would leave power without a name people accept.",
          "There is still a lawful way to fight, even if it is slower and riskier for the leader personally.",
        ],
        failsWhen: [
          "The leader treats the loyalty of his own people as a substitute for the consent of everyone else.",
          "Power taken by force is held by accumulating offices rather than by finding a form others can accept.",
        ],
        questions: [
          "If your team followed you against the organisation that employs it, what would you be left leading afterwards?",
          "Which of your powers would survive a change of leader at the top, and which depend on you alone?",
          "Whose consent do you need beyond the people who work for you?",
        ],
      },
      bearsOn:
        "The Rubicon tests every answer to the volume’s question at once. Speed took Italy in weeks; his soldiers made it possible; his enemies’ divisions, a Senate that could not agree with Pompey, let him win; and his account, the defence of his honour and the tribunes, gave him a case. What none of them could win him was the legitimacy that would let Rome accept the result. The wars were won; the peace was lost on the Ides of March.",
      questions: [
        {
          prompt:
            "What did the 1911 Britannica identify as the trap that faced Caesar in 49?",
          choices: [
            "A Gallic revolt behind him.",
            "Pompey’s law of 52, which could leave him a private citizen liable to prosecution before he could become consul again.",
            "The loss of his army’s loyalty.",
          ],
          answer: 1,
          explanation:
            "Suetonius adds Cato’s oath to impeach him and Pollio’s report of his words at Pharsalus.",
        },
        {
          prompt:
            "How did Caesar justify leaving his province, in his own Civil War?",
          choices: [
            "As a campaign against Pompey’s ambition only.",
            "As defending himself from his enemies’ insults, restoring the expelled tribunes and freeing himself and the Roman people from a faction.",
            "As a response to a German invasion.",
          ],
          answer: 1,
          explanation:
            "He said it to Lentulus Spinther at Corfinium; it is his case to his readers.",
        },
        {
          prompt: "According to the 1911 Britannica, why was Caesar murdered?",
          choices: [
            "For the perpetual dictatorship alone.",
            "Less for the dictatorship than for signs in his last months that he sought kingship and divinity.",
            "For his conduct in Gaul.",
          ],
          answer: 1,
          explanation:
            "It judges his powers little different from Augustus’s; Seneca’s remark about his murderers is quoted there.",
        },
      ],
      seminar: {
        prompt:
          "Was Caesar right to cross the Rubicon? Argue from the positions of a tribune who fled to him, a senator who stayed in Rome, and a soldier of the Thirteenth who crossed with him.",
        guidance:
          "Use the law of 52, Caesar’s own case at Corfinium, the motives Suetonius reports and the honours that followed. Say what each gained and lost, and what Wellington’s letter of 1810 suggests about the alternative.",
      },
      sources: [
        s.suetonius,
        s.plutarchCaesar,
        s.eb1911,
        s.cw1A,
        s.plutarchPompey,
        s.tyler,
        s.gurwoodVI,
      ],
    },
    {
      slug: "the-ledger",
      title: "The ledger: what won Caesar his wars?",
      part: "Beyond the battlefield",
      themes: ["judgement", "ethics"],
      claim:
        "When a leader’s record is weighed by the results he chose to report, his gifts look decisive; once the costs, the conditions and the record itself are entered beside them, the verdict depends on what the reader counts, and that choice should be made openly.",
      inBrief: {
        strength:
          "He won a decade of wars in Gaul and four years of civil war, and wrote their history himself.",
        shadow:
          "Gaul paid for the conquest, Romans for the civil war, and the Republic did not survive.",
      },
      moment: {
        text: "More than a century after Caesar’s death the elder Pliny, writing an encyclopedia of the natural world, came to the gifts of the human mind and put Caesar first for vigour, not for courage or constancy, he wrote, but for a quickness winged as it were with fire: he could read or write and dictate or listen at once, and dictate four letters on important affairs to his secretaries at the same time. In the next sentence Pliny counted Caesar’s pitched battles, then refused to count to his glory the number of people he had killed in them, besides conquering his fellow citizens, calling it a prodigious, even if unavoidable, wrong inflicted on the human race, which Caesar himself confessed by not publishing the casualties of the civil wars. Then he praised Caesar’s clemency, in which he surpassed all men, even to the point of later regret. The volume ends where Pliny’s chapter does: with the gifts and the costs on the same page.",
        evidence: "fact",
        refs: [{ source: 0, locator: "7.91–93" }],
      },
      episodes: [
        {
          title: "Speed and soldiers",
          text: "The first two answers have the strongest evidence. Suetonius records the speed: distances covered in a hired carriage faster than his messengers, and a triumph that displayed three words about how quickly a war was won. He records the soldiers too: no mutiny in ten years of the Gallic war, an army that offered to serve without pay at the start of the civil war, and men who asked to be punished after their only defeat at Dyrrhachium. The lessons on speed and on the army bound to him show both at their best and at their limits: the speed that stranded him in Epirus, and the bond that had to be paid for with conquest and nearly broke in the mutiny of 47.",
          evidence: "fact",
          refs: [{ source: 1, locator: "37.2, 57, 68–70" }],
          battleSlugs: ["dyrrhachium", "pharsalus"],
        },
        {
          title: "His enemies’ divisions",
          text: "The third answer runs through his own pages without being named. Plutarch, comparing Caesar with Rome’s great generals, says he surpassed one in the savage manners and treacherous dispositions of the peoples he won over; Caesar’s narrative shows how: he entered Gaul as the ally of the Aedui and, after Alesia, kept back the Aeduan and Arvernian prisoners to win their peoples back. In the civil war, as the lesson on Pompey shows, his account makes a quarrelling Pompeian camp part of the explanation of Pharsalus. The divisions were real; they were also the explanation that most flattered the man who exploited them.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "15" },
            { source: 3, locator: "7.89" },
          ],
          battleSlugs: ["alesia"],
        },
        {
          title: "His account",
          text: "The fourth answer is the hardest to weigh because it is the source of most of the evidence for the others. Cicero, as Suetonius quotes him, thought the Commentaries so good that men of sense would not try to write the subject again; Pollio, who served with Caesar, thought them careless and not strictly truthful. Their power can be measured in a later reader. Napoleon, dictating his own reading of Caesar’s wars on Saint Helena, counted three defeats in thirteen campaigns, at Dyrrhachium, Alexandria and in Africa, and left out Gergovia, which Caesar had explained as his soldiers’ indiscipline and Suetonius had counted as a reverse. Nineteen centuries later, the most professional reader of all was still reading inside Caesar’s frame.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "25.2, 56.2–4" },
            { source: 4, locator: "ch. 1, p. 28" },
          ],
          battleSlugs: ["gergovia"],
        },
      ],
      witnesses: [
        {
          who: "Pliny the Elder",
          stake:
            "An encyclopaedist of the next century, admiring Caesar’s mind and condemning his killing in one passage.",
          says: "No one surpassed his speed of mind or his clemency; his killing was a wrong to mankind.",
          refs: [{ source: 0, locator: "7.91–93" }],
        },
        {
          who: "Plutarch",
          stake:
            "A Greek biographer setting Caesar beside Rome’s greatest generals.",
          says: "He surpassed them all in his achievements.",
          refs: [{ source: 2, locator: "15" }],
        },
        {
          who: "Napoleon, in the Précis des guerres de César",
          stake: "A deposed emperor reading another commander on Saint Helena.",
          says: "Caesar was beaten three times, and the defeats did not affect the outcome.",
          refs: [{ source: 4, locator: "ch. 1, p. 28" }],
        },
        {
          who: "The 1911 Britannica",
          stake: "A modern constitutional historian’s summary.",
          says: "His powers prefigured the Principate; his reach for kingship explains his end.",
          refs: [{ source: 5 }],
        },
      ],
      strategist: [
        {
          text: "Weighed against each other, the four answers are not rivals but conditions. Speed won where it was aimed at what the enemy had to defend and where the ground could feed the army, and failed in Epirus. The soldiers carried him through both his defeats, but were bound by rewards that conquest had to keep paying for. His enemies’ divisions let a few legions act across Gaul and let Pompey be argued out of his plan, and closed against him once, in 52. His account did not win battles, but it chose which battles counted and why, and it is the reason most of these judgements can be made at all.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "57, 68" },
            { source: 3, locator: "7.89" },
          ],
        },
        {
          text: "If one answer must be put first, the evidence of this volume favours the soldiers, because they appear in every success and both recoveries: they formed without orders at the Sabis, dug the lines at Alesia, asked to be punished after Dyrrhachium, and halted mid-charge at Pharsalus. But that is a verdict built largely on Caesar’s own pages, which praise his men in order to praise their general. A reader who distrusts the account will put the divisions first; a reader who trusts it, the speed. The honest answer is that the record cannot settle the question it was written to settle.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "68" },
            { source: 1, locator: "56.4" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The ledger offers no new mechanism. The volume used research where it had a sound base: on self-serving explanations of defeat, and, with a link to the Alexander volume, on legitimacy. Elsewhere it relied on the documents and said so. A single career cannot show which of Caesar’s qualities caused his victories, and the qualities themselves reach us chiefly through his own description of them.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Any psychological verdict on Caesar would rest on his self-portrait and on admirers and enemies writing long after him.",
        },
      ],
      shadow: {
        text: "The costs belong on the same page as the victories. In Gaul, by Caesar’s own account, the Usipetes and Tencteri died in their camp and in the Rhine, the old, the women and the children of Avaricum were not spared, and after Alesia the prisoners were given to his soldiers as plunder; Pliny would not count the killing as glory. The civil war killed Romans on both sides. The Republic ended in a dictatorship for life, which the 1911 Britannica calls a contradiction in terms, and in the murder of the dictator by men he had pardoned.",
        evidence: "interpretation",
        refs: [
          { source: 6, locator: "4.14–15" },
          { source: 10, locator: "7.28" },
          { source: 3, locator: "7.89" },
          { source: 0, locator: "7.92" },
          { source: 5 },
        ],
        battleSlugs: ["alesia"],
      },
      counterCase: {
        text: "Augustus, Caesar’s heir, finished the work by other means and wrote a different record. In the Res Gestae he says that when victorious he spared all citizens who asked for pardon, and that after extinguishing the civil wars he transferred the republic from his own control to the Senate and people, receiving the name Augustus and a golden shield for his valour, clemency, justice and piety; afterwards, he wrote, he took precedence of all in rank, but possessed no more power than his colleagues in any magistracy. Suetonius records the proscriptions he pressed harder than his fellow triumvirs. The 1911 Britannica judges Caesar’s powers little different from Augustus’s Principate; what differed was the form. Augustus kept the republican names and ruled for decades; Caesar took a dictatorship for life and was killed within a year.",
        evidence: "interpretation",
        refs: [
          { source: 7, locator: "34" },
          { source: 8, locator: "3" },
          { source: 9, locator: "27" },
          { source: 5 },
        ],
        commanderSlug: "augustus",
        battleSlugs: ["actium"],
      },
      cost: {
        text: "The ledger’s debit side, without the numbers the ancient writers gave: the peoples of Gaul, killed, enslaved and made subject; the Helvetii, the Usipetes and Tencteri, Avaricum, the defenders of Uxellodunum; the soldiers of both armies at Dyrrhachium, Pharsalus and Munda; Rome’s citizens, who lived through civil war and a dictatorship; and Caesar himself, killed in the Senate.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "7.92" },
          { source: 6, locator: "4.14–15" },
          { source: 5 },
        ],
      },
      transfer: {
        holdsWhen: [
          "A leader’s record is weighed with the costs and conditions entered beside the results.",
          "The reader can say which witness supplies each part of the verdict, and what that witness wanted.",
        ],
        failsWhen: [
          "The leader’s own account sets the terms, so that what it leaves out is never counted.",
          "Success is credited to the leader’s gifts while the conditions that made it possible are forgotten.",
        ],
        questions: [
          "Which costs of your organisation’s greatest success appear in no report?",
          "Which of your achievements would you still claim if you had to write down who paid for them?",
          "Who will write the account of your career, and what will they leave out?",
        ],
      },
      bearsOn:
        "What won Caesar his wars? This volume’s answer is his soldiers, made formidable by years of shared danger and reward, set to work by a commander who moved faster than his enemies expected, against enemies divided enough to be beaten one at a time, and explained to Rome, and to us, by the commander himself. Argue the opposite: that the account is the true answer, because without it we would know too little of the soldiers to credit them, and that a Gaul which had written its own history might tell a story in which the divisions, not the legions, decided everything.",
      questions: [
        {
          prompt: "What two verdicts on Caesar does Pliny place side by side?",
          choices: [
            "His wealth and his debts.",
            "His unmatched quickness of mind, and his killing in battle, which Pliny would not count to his glory.",
            "His victories and his defeats.",
          ],
          answer: 1,
          explanation:
            "Pliny also praises his clemency in the same passage; the volume gives no number for the killing.",
        },
        {
          prompt:
            "Why does the ledger say the fourth answer, his account, is the hardest to weigh?",
          choices: [
            "Because the Commentaries are lost.",
            "Because his account is the main source of the evidence for the other three answers.",
            "Because no one has read it.",
          ],
          answer: 1,
          explanation:
            "Even Napoleon’s reading of the defeats followed Caesar’s frame and left out Gergovia.",
        },
        {
          prompt:
            "How does the 1911 Britannica compare Caesar’s powers with Augustus’s?",
          choices: [
            "As entirely different.",
            "As little different in substance; the difference lay in the form and in Caesar’s reach for kingship and divinity.",
            "As much greater.",
          ],
          answer: 1,
          explanation:
            "Augustus kept republican names and claimed in the Res Gestae to have restored the republic.",
        },
      ],
      seminar: {
        prompt:
          "Answer the volume’s question, then argue the opposite: what won Caesar his wars, his speed, his soldiers, his enemies’ divisions, or his own account of them?",
        guidance:
          "Use at least one lesson for each answer, and Pliny’s double verdict. Say which witnesses supply your evidence and what each wanted, and enter the costs beside the victories.",
      },
      sources: [
        s.pliny,
        s.suetonius,
        s.plutarchCaesar,
        s.gw7G,
        s.precis,
        s.eb1911,
        s.gw4,
        s.resGestae6,
        s.resGestae,
        s.suetoniusAugustus,
        s.gw7C,
      ],
    },
  ],
};
