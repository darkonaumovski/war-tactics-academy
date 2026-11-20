import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 6, written in reviewed batches (batch C1, the pilot, is lessons 0,
// the record, 3, defeats explained, and 5, the army bound to him; batch C2 is
// lessons 1, speed, 2, the front rank, and 4, siege lines on two fronts);
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
  gw7D: edwards("7D", "7.34–52"),
  gw7E: edwards("7E", "7.53–62"),
  gw7F: edwards("7F", "7.63–74"),
  gw7G: edwards("7G", "7.75–90"),
  hirtius: thayer(
    "Caesar/Gallic_War/8A",
    "Aulus Hirtius, The Gallic War 8, preface and 1–48, trans. H. J. Edwards (Loeb Classical Library, 1917)",
  ),
  cw1B: peskett("1B", "1.30–58"),
  cw3A: peskett("3A", "3.1–30"),
  cw3B: peskett("3B", "3.31–55"),
  cw3C: peskett("3C", "3.56–81"),
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
  ],
  inProgress:
    "This volume is being written. Its first lessons are published; the rest are added in reviewed batches.",
};
