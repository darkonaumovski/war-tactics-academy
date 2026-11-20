import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 6, written in reviewed batches (batch C1, the pilot, is lessons 0,
// the record, 3, defeats explained, and 5, the army bound to him);
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
const arrian = (chapter: string, label: string): Source => ({
  title: `Arrian, Anabasis of Alexander ${label} (trans. E. J. Chinnock, 1884)`,
  url: `https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_VII/Chapter_${chapter}`,
  publisher: "Wikisource",
});
const s = {
  gw1B: edwards("1B", "1.30–54"),
  gw2: edwards("2", "book 2"),
  gw4: edwards("4", "book 4"),
  gw5B: edwards("5B", "5.26–58"),
  gw7D: edwards("7D", "7.34–52"),
  gw7E: edwards("7E", "7.53–62"),
  hirtius: thayer(
    "Caesar/Gallic_War/8A",
    "Aulus Hirtius, The Gallic War 8, preface and 1–48, trans. H. J. Edwards (Loeb Classical Library, 1917)",
  ),
  cw1B: peskett("1B", "1.30–58"),
  cw3C: peskett("3C", "3.56–81"),
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
  a7_8: arrian("VIII", "7.8"),
  a7_11: arrian("XI", "7.11"),
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
