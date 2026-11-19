import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 5, written in reviewed batches (batch V1, the pilot, is lessons 0,
// the record, 2, preparation, and 4, Salamanca; batch V2 is lessons 1, the
// only army, 3, supply, and 5, the breach; batch V3 is lessons 6, subordinates,
// 7, the soldiers, and 8, allies; batch V4 is lessons 9, the government at
// home, 10, the empty country, and 11, the ledger);
// docs/LEADERSHIP_EVIDENCE_WELLINGTON.md records which sources can carry each
// lesson, and docs/SOURCE_AUDIT.md how each was read. Gurwood's dispatches,
// the recorded conversations and Oman were read as full texts from the
// Internet Archive; locators follow the printed pages of those editions, and
// each Gurwood volume is identified by its title page, not its catalogue entry.
const toronto = "Internet Archive (University of Toronto)";
const gurwood = (volume: string, year: number, id: string): Source => ({
  title: `The Dispatches of Field Marshal the Duke of Wellington, comp. John Gurwood, vol. ${volume} (London: John Murray, ${year})`,
  url: `https://archive.org/details/${id}`,
  publisher: toronto,
});
const s = {
  gurwoodII: {
    title:
      "The Dispatches of Field Marshal the Duke of Wellington, comp. John Gurwood, new ed., vol. II (London: John Murray, 1837)",
    url: "https://archive.org/details/in.ernet.dli.2015.76894",
    publisher: "Internet Archive (Digital Library of India)",
  },
  gurwoodV: gurwood("V", 1836, "dispatchesoffie05welluoft"),
  gurwoodVI: gurwood("VI", 1836, "dispatchesoffiel06welluoft"),
  gurwoodIX: gurwood("IX", 1837, "dispatchesoffie09welluoft"),
  gurwoodX: gurwood("X", 1838, "dispatchesoffiel10welluoft"),
  gurwoodXI: gurwood("XI", 1838, "dispatchesoffiel11welluoft"),
  gurwoodXII: gurwood("XII", 1838, "dispatchesoffiel12welluoft"),
  creevey: {
    title:
      "The Creevey Papers, ed. Sir Herbert Maxwell, vol. I, 2nd ed. (London: John Murray, 1904)",
    url: "https://archive.org/details/creeveypaperssel01creeuoft",
    publisher: toronto,
  },
  croker: {
    title:
      "The Croker Papers, ed. Louis J. Jennings, vol. III, 2nd ed. (London: John Murray, 1885)",
    url: "https://archive.org/details/crokerpaperscorr03crokuoft",
    publisher: toronto,
  },
  stanhope: {
    title:
      "Philip Henry Stanhope, Notes of Conversations with the Duke of Wellington, 1831–1851 (London: John Murray, 1888)",
    url: "https://archive.org/details/notesofconversat00stanuoft",
    publisher: toronto,
  },
  montalembert: {
    title:
      "Charles de Montalembert, The Political Future of England (London: John Murray, 1856)",
    url: "https://archive.org/details/politicalfutureo00montuoft",
    publisher: toronto,
  },
  omanIII: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. III: September 1809–December 1810 (Oxford: Clarendon Press, 1908)",
    url: "https://archive.org/details/historyofpeninsu03oman",
    publisher: toronto,
  },
  omanV: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. V: October 1811–August 1812 (Oxford: Clarendon Press, 1914)",
    url: "https://archive.org/details/historyofpeninsu05oman",
    publisher: toronto,
  },
  omanVI: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. VI: September 1812–August 1813 (Oxford: Clarendon Press, 1922)",
    url: "https://archive.org/details/historyofpeninsu06oman",
    publisher: toronto,
  },
  omanVII: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. VII: August 1813–April 14, 1814 (Oxford: Clarendon Press, 1930)",
    url: "https://archive.org/details/historyofpeninsu07oman",
    publisher: toronto,
  },
  corsican: {
    title:
      "The Corsican: A Diary of Napoleon’s Life in His Own Words, ed. R. M. Johnston (Boston: Houghton Mifflin, 1910)",
    url: "https://archive.org/details/corsicandiary00napouoft",
    publisher: toronto,
  },
  fondationBarclay: {
    title: "Barclay de Tolly, Michael Andreas, Prince",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/biographies/barclay-de-tolly-michael-andreas-prince/",
    publisher: "Fondation Napoléon",
  },
  eb1911Barclay: {
    title:
      "Barclay de Tolly, Michael Andreas, Encyclopædia Britannica, 11th ed., vol. 3 (1910)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Barclay_de_Tolly,_Michael_Andreas",
    publisher: "Wikisource",
  },
  fondationRussia: {
    title: "Napoleon’s Russian campaign: From the Niemen to Moscow (timeline)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/timelines/napoleons-russian-campaign-from-the-niemen-to-moscow/",
    publisher: "Fondation Napoléon",
  },
  ganiere: {
    title:
      "Paul Ganière, “La retraite de Russie”, Revue du Souvenir Napoléonien 354, in French",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/la-retraite-de-russie/",
    publisher: "Fondation Napoléon",
  },
  lernerTetlock: {
    title:
      "Jennifer S. Lerner and Philip E. Tetlock, Accounting for the effects of accountability (1999), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/10087938/",
    publisher: "Psychological Bulletin",
  },
  mcnatt: {
    title:
      "D. Brian McNatt, Ancient Pygmalion joins contemporary management: a meta-analysis of the result (2000), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/10783547/",
    publisher: "Journal of Applied Psychology",
  },
  jussimHarber: {
    title:
      "Lee Jussim and Kent D. Harber, Teacher expectations and self-fulfilling prophecies: knowns and unknowns, resolved and unresolved controversies (2005), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/15869379/",
    publisher: "Personality and Social Psychology Review",
  },
  fraser: {
    title:
      "Sir William Fraser, Words on Wellington: The Duke, Waterloo, the Ball (London: George Routledge, n.d.)",
    url: "https://archive.org/details/wordsonwellingto00frasuoft",
    publisher: toronto,
  },
  ndbGneisenau: {
    title:
      "Gneisenau, August Wilhelm Anton Graf Neidhardt von (Hermann Teske, Neue Deutsche Biographie 6, in German)",
    url: "https://www.deutsche-biographie.de/sfz69918.html",
    publisher: "Deutsche Biographie",
  },
  ndbBlucher: {
    title:
      "Blücher von Wahlstatt, Gebhard Leberecht Fürst (Hans Haussherr, Neue Deutsche Biographie 2, in German)",
    url: "https://www.deutsche-biographie.de/sfz35354.html",
    publisher: "Deutsche Biographie",
  },
  fondationSchwarzenberg: {
    title: "Schwarzenberg, Karl Philip von",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/biographies/schwarzenberg-karl-philip-von/",
    publisher: "Fondation Napoléon",
  },
  eb1911Schwarzenberg: {
    title:
      "Schwarzenberg, Karl Philipp, Prince zu, Encyclopædia Britannica, 11th ed., vol. 24 (1911)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Schwarzenberg,_Karl_Philipp,_Prince_zu",
    publisher: "Wikisource",
  },
  gurwoodIVnew: {
    title:
      "The Dispatches of Field Marshal the Duke of Wellington, comp. John Gurwood, new ed., vol. IV (London: John Murray, 1837)",
    url: "https://archive.org/details/dukedispatches04welluoft",
    publisher: toronto,
  },
  omanIV: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. IV: December 1810–December 1811 (Oxford: Clarendon Press, 1911)",
    url: "https://archive.org/details/historyofpeninsu04oman",
    publisher: toronto,
  },
  doresCosta: {
    title:
      "Fernando Dores Costa, “A invasão de Masséna em 1810 e as linhas de Torres Vedras: uma paradoxal confluência de objectivos?”, Ler História 58 (2010), pp. 115–135, in Portuguese",
    url: "https://journals.openedition.org/lerhistoria/1195",
    publisher: "OpenEdition Journals",
  },
  lopes: {
    title:
      "Leonídio Paulo Ferreira, “Nunca mais a população portuguesa voltou a sofrer tanto como na terceira invasão francesa”, interview with the historian Maria Antónia Lopes, Diário de Notícias, 3 May 2021, in Portuguese",
    url: "https://www.dn.pt/sociedade/-nunca-mais-a-populacao-portuguesa-voltou-a-sofrer-tanto-como-na-terceira-invasao-francesa--13680540.html",
    publisher: "Diário de Notícias",
  },
  fondationKutuzov: {
    title: "KUTUZOV, Mikhail Illarionovich Golenishchev (biography)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/biographies/kutuzov-mikhail-illarionovich-golenishchev/",
    publisher: "Fondation Napoléon",
  },
  sardesai: {
    title:
      "Govind Sakharam Sardesai, New History of the Marathas, vol. III: Sunset over Maharashtra, 1772–1848 (Bombay: Phoenix Publications, 1948)",
    url: "https://archive.org/details/dli.ernet.236034",
    publisher: "Internet Archive (Digital Library of India)",
  },
  eb1911Wellington: {
    title:
      "Wellington, Arthur Wellesley, 1st Duke of, Encyclopædia Britannica, 11th ed., vol. 28 (1911)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Wellington,_Arthur_Wellesley,_1st_Duke_of",
    publisher: "Wikisource",
  },
  namMarlborough: {
    title: "The Duke of Marlborough: Corporal John",
    url: "https://www.nam.ac.uk/explore/marlborough",
    publisher: "National Army Museum",
  },
  eb1911Waterloo: {
    title:
      "Waterloo Campaign, 1815, Encyclopædia Britannica, 11th ed., vol. 28 (1911)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Waterloo_Campaign,_1815",
    publisher: "Wikisource",
  },
} satisfies Record<string, Source>;

export const wellingtonVolume: LeadershipVolume = {
  commanderSlug: "arthur-wellesley",
  title: "Leadership Lessons from Wellington",
  summary:
    "What a person who leads others can take from Wellington’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Arthur Wellesley won his first great battle in India in 1803, commanded the British and Portuguese army in Portugal and Spain from 1809 to 1814, and in 1815 the allied army at Waterloo. He was called a defensive general by enemies who had not yet fought him; he spent a year building a fortified line before it was needed, and won at Salamanca by attacking in an afternoon. Ministers at home feared he would fight a desperate battle to no purpose, and left him responsible for bringing the army away safely if it failed. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. He wrote dispatches, refused to write memoirs and left others to record his conversation, so every lesson begins with who is speaking. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Can caution be a form of daring?",
  parts: [
    "Orientation",
    "An army that could not be replaced",
    "Caution and daring",
    "People",
    "Beyond the battlefield",
  ],
  lessons: [
    {
      slug: "how-to-read-wellington",
      title: "Dispatches, not memoirs: how to read Wellington",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a leader’s record is made of letters written for people who could check them and of conversation written down by others years later, a lesson drawn from it is only as sound as the reader’s knowledge of who wrote each line, when, and for whom.",
      inBrief: {
        strength:
          "Letters written at the time, for readers who could check them, in place of a memoir written for posterity.",
        shadow:
          "He chose what was printed and what stayed untold, and others filled the silence with stories he had to correct.",
      },
      moment: {
        text: "On 8 August 1815, in Paris, Wellington answered a man who had written to him about a history of the battle of Waterloo. The object, he replied, was very difficult to attain and, if attained, not a little invidious. ‘The history of a battle is not unlike the history of a ball.’ Some people might remember all the little events, but nobody could remember the order in which they happened or the exact moment, which made all the difference to their value. A true history would also have to include the faults and misbehaviour of some of those engaged, and he thought it better for the general interests to leave those parts of the story untold than to tell the whole truth. He offered to help all the same. When the letter was printed in his lifetime, in the edition of his dispatches compiled by John Gurwood, the correspondent’s name was left out.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 590–591" }],
      },
      episodes: [
        {
          title: "The edition he allowed",
          text: "Gurwood’s volumes, compiled according to their title pages from official and authentic documents, appeared from John Murray in the 1830s, while their subject was alive and in public life. They show the compiler’s hand. The Waterloo letter is headed only to an unnamed esquire. The proclamation Wellington issued to the Portuguese on 4 August 1810 is printed in English with a footnote saying it is a translation, not the original draft. His memorandum of October 1809 for his commanding engineer, on the defence that became the Lines of Torres Vedras, carries a note that the plan was altered afterwards, but that the memorandum was the foundation on which the whole work was begun and completed, written after a detailed reconnaissance and a personal visit to every part of the ground. The notes explain and vouch for the letters; they also decide what the reader is told about them.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "p. 590" },
            { source: 1, locator: "p. 308" },
            { source: 2, locator: "p. 230" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "The morning after Waterloo",
          text: "The Napoleon volume reads Wellington’s Waterloo dispatch; this lesson reads what was written around it. Thomas Creevey, an English politician living in Brussels with his family, describes going to the Duke’s house the next morning. Wellington, writing his dispatch, beckoned him up and spoke, Creevey writes, with the greatest gravity and no sign of triumph: it had been a damned serious business, ‘a damned nice thing — the nearest run thing you ever saw in your life’. He praised the Guards who had held Hougoumont and said the French had fought no better than he had always seen them fight since Vimeiro. Then he said that he did not think it would have done if he had not been there. Creevey says he wrote to England by the same courier that carried the dispatch, and left that remark out as unfair to the Duke. His editor adds that Lady Salisbury’s journal of 1836 records Wellington’s own memory of meeting Creevey that morning, at the door rather than the window, and with different words.",
          evidence: "fact",
          refs: [{ source: 3, locator: "vol. I, pp. 236–237" }],
          battleSlugs: ["waterloo"],
        },
        {
          title: "Sayings and their recorders",
          text: "Philip Henry Stanhope began writing down Wellington’s conversation in 1831, under dated headings, and published it in 1888, long after the Duke’s death in 1852. John Wilson Croker, secretary to the Admiralty for two decades and a friend of many years, wrote notes of their last meetings in September 1852. Croker teased him about guessing what was on the other side of the hill, a game they had played on a journey by road some thirty years before, and recorded the Duke’s answer that all the business of war and life was to find out what you don’t know by what you do. Earlier that year Croker had asked him, through a friend, whether he had shouted the battle cry the public attributed to him at Waterloo. The undated reply says that what he must have said, and possibly did say, was ‘Stand up, Guards!’, before ordering the commanding officers to attack. In 1856 the French writer Charles de Montalembert told how the Duke, revisiting Eton in old age, had exclaimed that Waterloo was won there. He names no witness and gives no date.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "pp. 276–277, 282–283" },
            { source: 5, locator: "p. 145" },
            { source: 6, locator: "pp. 13–14" },
          ],
          battleSlugs: ["waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s letters, in Gurwood’s edition",
          stake:
            "Reports and private letters written at the time to ministers, allies and officers who could check them, printed in his lifetime with names left out.",
          says: "What he knew and chose to report then; and that a battle’s true history cannot be written, and some of it is better untold.",
          refs: [{ source: 0, locator: "p. 590" }],
        },
        {
          who: "Thomas Creevey",
          stake:
            "An English politician in Brussels who wrote up the conversation afterwards; his papers were published by an editor in 1903.",
          says: "Wellington called Waterloo the nearest run thing and said it would not have been won without him.",
          refs: [{ source: 3, locator: "vol. I, pp. 236–237" }],
        },
        {
          who: "John Wilson Croker",
          stake:
            "A friend of decades, writing notes of their last meetings days before Wellington’s death.",
          says: "The Duke spent his life guessing what was on the other side of the hill, and denied the battle cry the public gave him.",
          refs: [{ source: 4, locator: "pp. 276–277, 282–283" }],
        },
        {
          who: "Charles de Montalembert",
          stake:
            "A French admirer of English schools and liberties, writing four years after Wellington died.",
          says: "The Duke said at Eton that Waterloo had been won there.",
          refs: [{ source: 5, locator: "p. 145" }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge a decision by what the commander could know when he made it, and Wellington’s record is unusually good for that, if it is read in layers. A plan written before the event, such as the memorandum of 1809, shows what he intended. A report written days after, such as a dispatch, shows what he chose to tell a minister who could compare it with other reports. A remark recorded by a friend in the 1830s or in 1852 shows what an old man remembered, or wished to be remembered. The same man appears in all three, and the further a piece is from the event, the less it can carry.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "p. 230" },
            { source: 4, locator: "pp. 276–277" },
          ],
        },
        {
          text: "The ball letter is also a statement of method. A commander who believes that the value of an event depends on its moment will distrust any account that reorders events to tell a clean story, including accounts that flatter him. His reluctance to see Waterloo written up can be read as modesty, as protection of officers whose faults would have to be named, or as protection of his own account. The letter supports all three readings, and a reader should hold them together rather than choose the kindest.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 590–591" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The ball letter makes a claim about memory, that people keep the events of a crowded day but lose their order and timing, which research on memory could test. None was read for this volume, and the Alexander volume has already shown that the romance of leadership, the tendency to credit leaders with outcomes, is less secure than it looked; this lesson does not lean on it. It relies instead on what can be seen in the documents: who wrote, when, for whom, and what an editor added.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Wellington’s view of memory is his own, stated in a letter discouraging a history he did not want written.",
        },
      ],
      shadow: {
        text: "A commander who writes no memoir and prefers some parts of the story untold does not end the story; he leaves it to others. Within his lifetime Croker had to ask him about a battle cry that had become famous, and he could answer only what he must have said and possibly did say. Four years after his death Montalembert gave him a saying about Eton without a witness. The faults the ball letter wished to leave untold were told by others, with their own national and personal claims, and the silence he chose is part of why the Waterloo story is still contested.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "p. 591" },
          { source: 4, locator: "pp. 282–283" },
          { source: 5, locator: "p. 145" },
        ],
      },
      counterCase: {
        text: "Napoleon shaped his record by saying too much, and the Napoleon volume’s orientation shows how to read him. Wellington, as Stanhope records it in November 1831, thought him unreliable as a witness to his own career: the famous habit of calling soldiers out by name at reviews came, he said, from a list prepared by one of his generals, and in all Napoleon had written you never found a thing related precisely as it happened. That is one rival’s verdict on another, recorded by a friend who wrote down his talk, and it should be weighed as such. But it marks the contrast this volume depends on: one commander told his story at length after defeat, the other let his letters and his friends speak for him, and both shaped what posterity would believe.",
        evidence: "interpretation",
        refs: [{ source: 6, locator: "p. 24" }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "The record of that morning begins with a death. In Lady Salisbury’s journal of 1836, as Creevey’s editor quotes it, Wellington recalled being called at about three in the morning to see Gordon, his aide-de-camp, lying in the same inn at Waterloo, who was dead before he got there; then he had tea and toast, wrote his dispatch and rode into Brussels. The dispatch and the guarded talk with Creevey were written and spoken in the hours after.",
        evidence: "fact",
        refs: [{ source: 3, locator: "vol. I, p. 236" }],
      },
      transfer: {
        holdsWhen: [
          "A leader’s record consists of letters written at the time to readers who could check them, and of conversation written down by others later.",
          "Each piece can be dated and its writer named, and an editor’s notes can be told apart from the text.",
        ],
        failsWhen: [
          "Letters are read as candid because they were not written for publication; many were written to persuade a minister or an ally.",
          "Recorded conversation is treated as the leader’s own words rather than a friend’s memory of them.",
        ],
        questions: [
          "Which parts of your organisation’s record were written at the time, and which were written down later by someone else?",
          "Whose faults have been left out of the account of your last success, and who decided?",
          "Which saying attributed to a leader you admire can you trace to a named witness and a date?",
        ],
      },
      bearsOn:
        "The volume’s question arrives with two inherited pictures, the steady defensive general of British tradition and the overcautious one of French memoirs, and both are partly stories each side told. Wellington gave his own answer in 1852, replying to Croker: his common practice in a defensive position was to attack the enemy at the very moment the enemy was about to attack. It is the best single statement of caution as a form of daring, and it was written thirty-seven years after Waterloo by a man defending his record. The lessons that follow test it against what he wrote at the time.",
      questions: [
        {
          prompt:
            "Why did Wellington think a true history of Waterloo could not be written?",
          choices: [
            "Because the French had destroyed the records.",
            "Because no one could recall the order and exact moment of events, and a true history would have to name the faults of some of those engaged.",
            "Because he intended to write it himself.",
          ],
          answer: 1,
          explanation:
            "His letter of 8 August 1815 compares a battle to a ball, and prefers some parts of the story untold to the whole truth.",
        },
        {
          prompt:
            "Asked in 1852 about the famous battle cry attributed to him at Waterloo, what did Wellington reply?",
          choices: [
            "That he had said it exactly as reported.",
            "That what he must have said, and possibly did say, was ‘Stand up, Guards!’, before ordering the attack.",
            "That he had been elsewhere on the field.",
          ],
          answer: 1,
          explanation:
            "His undated reply to Croker corrects the legend and admits he was not certain of his own words.",
        },
        {
          prompt:
            "Whose words are ‘the nearest run thing you ever saw in your life’?",
          choices: [
            "Wellington’s, written in his dispatch.",
            "Wellington’s, as Thomas Creevey wrote up their conversation the morning after the battle.",
            "Blücher’s, in a letter to the King of Prussia.",
          ],
          answer: 1,
          explanation:
            "They are Creevey’s record of speech; he says he left out of his letter home the Duke’s remark that the battle would not have been won without him.",
        },
      ],
      sourceCheck: {
        question:
          "What did Wellington call out to the Guards at the climax of Waterloo?",
        witnesses: [
          {
            label: "Croker to a friend, March 1852",
            claim:
              "Asks whether the Duke really shouted the battle cry the public attributes to him, which Croker finds very unlike his usual style.",
          },
          {
            label: "Wellington to Croker, undated reply",
            claim:
              "What he must have said, and possibly did say, was ‘Stand up, Guards!’, before giving the commanding officers the order to attack.",
          },
          {
            label: "The public tradition",
            claim:
              "A short, stirring cry, repeated widely enough by 1852 that his oldest friends asked him about it.",
          },
        ],
        prompt: "How should a reader settle the question?",
        options: [
          {
            text: "Keep the tradition, because so many people repeated it.",
            feedback:
              "Repetition is not testimony; none of the repeaters is named as a witness.",
          },
          {
            text: "Accept Wellington’s reply as certain, because he was there.",
            feedback:
              "He was, but he writes ‘must have’ and ‘possibly’, thirty-seven years later: he did not remember either.",
          },
          {
            text: "Prefer his reply to the tradition, and quote it with its hedges and its date.",
            feedback:
              "His late account is the best evidence available, and its uncertainty is part of the evidence.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington wrote that some parts of a battle’s story are better left untold than the whole truth told. Argue for and against that view from three positions: the commander, a soldier whose conduct would be named, and the historian.",
        guidance:
          "Use the ball letter, Creevey’s decision to leave out a remark he thought unfair, and the battle cry Wellington had to correct. Say in each case who decided what was left out, and what the silence cost.",
      },
      sources: [
        s.gurwoodXII,
        s.gurwoodVI,
        s.gurwoodV,
        s.creevey,
        s.croker,
        s.montalembert,
        s.stanhope,
      ],
    },
    {
      slug: "the-only-army",
      title: "The only army: caution as arithmetic",
      part: "An army that could not be replaced",
      themes: ["restraint", "judgement"],
      claim:
        "When a leader commands something that cannot be replaced, preserving it can be the decisive act, but only while preserving it serves a purpose beyond survival, and only if the people who depend on the leader can see what that purpose is.",
      inBrief: {
        strength:
          "He kept Britain’s one field army in being through 1810, refusing every battle that could not change the war.",
        shadow:
          "Allies left to fight alone, like the garrison of Ciudad Rodrigo, read his arithmetic as bad faith.",
      },
      moment: {
        text: "On 2 April 1810, at Viseu, Wellington answered a letter from Lord Liverpool, the Secretary of State for War. Everything was ready, he wrote, for embarking the army and all that belonged to it. He would embark when he found that a military necessity existed, delay it as long as he could, and fight a battle to save Portugal if the French came with a force he did not think so superior as to oblige him to go. He knew what was said of him at home. ‘Depend upon it, whatever people may tell you, I am not so desirous as they imagine of fighting desperate battles; if I was, I might fight one any day I please.’ For six months he had kept the army in two positions, against its own wish and that of the allies, and let pass openings in some of which a single stroke would certainly have succeeded, because he looked to the great result of keeping a footing in the Peninsula. And if in the end the army had to leave, he wanted it to go like gentlemen, out of the hall door, and not by the back door or the area.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 5–9" }],
      },
      episodes: [
        {
          title: "After Talavera: objects, means and risks",
          text: "A month after Talavera, on 24 August 1809, Wellington wrote from Mérida to his brother the Marquis Wellesley, who dealt on Britain’s behalf with the Spanish government at Seville, a government astonished and alarmed that he had withdrawn. He set out his reasoning like a sum. While the two armies were joined there had been an implied engagement not to separate; now there was none, in the treaty or from him. The King had never ordered, ‘but has only permitted me to carry on such operations in Spain as I might think proper, upon my own responsibility, and as were consistent with the safety of Portugal’. He weighed the objects of co-operation, the means of attaining them, and the risks of losing his army and losing sight of Portugal, for whose defence it had been sent. He judged that everything would have to be done by the British alone, and that the Spanish troops could not be relied on to hold a pass. ‘Upon every ground, therefore, of objects, means, and risks’, he concluded, he ought to avoid any further co-operation with the Spanish armies.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 76–82" }],
          battleSlugs: ["talavera-1809"],
        },
        {
          title: "Orders that left him the risk",
          text: "The arithmetic was not his alone; it was written into his orders. In the memorandum of October 1809 for the works that became the Lines, the embarkation of the British troops in case of reverse stands beside the defence of Lisbon as a connected object. On 2 April 1810 he told General Hill that his instructions agreed with opinion at home in forbidding any risk or any unnecessary loss. On 21 April he wrote to Charles Stuart at Lisbon that ministers were as much alarmed as the public, and seemed to think him inclined ‘to fight a desperate battle which is to answer no purpose’. Their private letters, he complained, were at variance with their public instructions. The instructions were clear, though they threw on him the whole responsibility of bringing the army away safely; but private hints which, if followed, would contradict them, and if ignored would multiply that danger, would not answer. In the same letter he gave up an attempt on the French magazine at Salamanca as not worth moving out of the strong country into the plains.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "p. 230" },
            { source: 0, locator: "pp. 3–4, 48–50" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "Ciudad Rodrigo, 1810",
          text: "In June 1810 Marshal Ney besieged Ciudad Rodrigo, a Spanish fortress just across the frontier, held by the veteran General Andrés Herrasti. Wellington’s outposts were close enough to watch. On 11 June he wrote to his brother Henry that the French had been obliged to collect an army to attack the worst fortified place in the world, and that he might have prevented the siege altogether ‘if the Government possessed any strength or desired to have any thing done but what is safe and cheap’. With an army inferior in cavalry and full of newly formed troops, he thought he ought not to risk a general action in the plains to relieve it. On 20 June he asked himself the question again: ‘Is it right, under these circumstances, to risk a general action to relieve or to raise the siege of Ciudad Rodrigo? I should think not.’ Yet if the garrison held out like men, he added, they were worth saving, and he would incur a risk to save them. The circumstances he hoped for never came. Herrasti capitulated on 10 July, after the French had battered the walls into one broad breach.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "pp. 180–181, 206" },
            { source: 2, locator: "pp. 241–253" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s letters to ministers and his brothers",
          stake:
            "Written to people who could recall him, or who had to explain him to allies, by a commander who would be blamed for any loss.",
          says: "He would not risk the army for objects it could not secure; the government wanted what was safe and cheap.",
          refs: [
            { source: 1, locator: "pp. 76–82" },
            { source: 0, locator: "pp. 5–9, 180–181" },
          ],
        },
        {
          who: "Thomas Picton, in a letter to a friend, as Oman quotes it",
          stake:
            "One of Wellington’s divisional generals, writing privately while the siege went on.",
          says: "If the army tried to relieve the place the French would drive it out of Portugal; if they took it, they would lose time, which mattered more to them.",
          refs: [{ source: 2, locator: "p. 245" }],
        },
        {
          who: "General Herrasti, as Oman reports his dispatch",
          stake:
            "The governor of Ciudad Rodrigo, reporting his surrender to the Spanish government after a defence Oman calls highly honourable.",
          says: "Wellington had made no effort to relieve the place.",
          refs: [{ source: 2, locator: "p. 253" }],
        },
        {
          who: "Charles Oman",
          stake:
            "The British historian of the war, writing in 1908 with Wellington’s papers and French siege records in hand.",
          says: "Weak in cavalry and with many untried troops, Wellington would have been mad to march to the relief; he chose rightly, and not without regret.",
          refs: [{ source: 2, locator: "pp. 244–245" }],
        },
      ],
      strategist: [
        {
          text: "The Mérida letter is the clearest statement in his papers of caution as calculation. It names the terms: objects, means, risks. In 1810 the same terms produced the same answer at Ciudad Rodrigo. Oman sets out the imbalance: success would only have raised the siege until the French corps behind Ney came up, while failure might lose Portugal. Picton, in a private letter Oman quotes, put the other half of the sum: the siege cost the French time, which they needed more than the town. What makes this arithmetic rather than timidity is that the preservation served an end Wellington had stated. As long as the army remained active in Portugal, he told Liverpool, the war must go on in Spain, and the French could drive it out only by gathering a force that would expose everything else they held there.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "pp. 77–81" },
            { source: 2, locator: "pp. 244–245" },
            { source: 0, locator: "pp. 5–6" },
          ],
        },
        {
          text: "Judged by what he knew, the refusal at Ciudad Rodrigo was sound: Oman finds his estimates of the French close to the truth, and Napoleon himself had told Masséna that it was practically impossible that Wellington would offer battle in the plains. But the same letters show that the arithmetic was not wholly his own. ‘Safe and cheap’ was the government’s rule as he understood it, and the instructions that left him responsible for bringing the army away made every risk personal. A reader cannot cleanly separate the commander who judged the odds from the subordinate who knew he would carry the blame. Wellington himself saw the difficulty, and asked for one thing in return: that if he was to be responsible, he should be left to his own judgement, with the fair confidence of the government.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "pp. 242–244" },
            { source: 0, locator: "pp. 9, 48–49, 181" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Accountability and its ground rules",
          base: "review",
          text: "Lerner and Tetlock’s review of accountability research, read here in its abstract, asks what different ground rules of accountability do to judgement and choice, under what conditions accountability reduces, leaves unchanged or amplifies biases, and whether it changes how people think or only what they say they think. Wellington’s ground rules were unusually explicit and unusually mixed: public instructions that made him answerable for bringing the army away, private letters that pulled another way, and a public that thought him rash. His demand that ministers explain themselves can be read as an attempt to fix the rules he was judged by. The review’s own questions also cut against a flattering reading. If accountability can amplify bias as well as reduce it, his caution may have been better judgement, or the self-protection of a man who knew he would be blamed, or both.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
          limit:
            "Abstract only. The review covers laboratory and organisational research, not commanders in war, and cannot say which of the readings fits Wellington; it only shows why the question is worth asking.",
        },
      ],
      shadow: {
        text: "Arithmetic done in private looks like indifference to those left out of the sum. In 1809 the Spanish government at Seville was alarmed that he had gone. In 1810 Herrasti, who had been told that the British would do anything feasible for his relief and warned that it might be impossible, still hoped, as Oman writes Spanish and some English officers did, that Wellington could not bear to watch the town fall with his outposts a few miles away. After the surrender Herrasti spoke bitterly to the Spanish government of the absence of any attempt, and Martín de la Carrera, whose Spanish division had stood near the town, marched off to Estremadura in anger. Oman calls Herrasti’s feeling natural. The calculation that preserved the British army was paid for by an allied garrison and its town, and the trust it cost had to be rebuilt later.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "p. 76" },
          { source: 2, locator: "pp. 244–245, 253" },
        ],
        battleSlugs: ["bussaco-torres-vedras-1810"],
      },
      counterCase: {
        text: "Barclay de Tolly shows the same arithmetic with a different ending. The Fondation Napoléon credits him with conceiving and carrying out the Russian policy of retreat in the first months of 1812, against the bitter opposition of most Russian officers, Bagration above all, and of the public; he was also disliked, it says, for his supposed German origins, and the Tsar replaced him with Kutuzov in August. The 1911 Britannica adds that there was keen opposition to a foreigner as commander-in-chief, and that after Smolensk the outcry against him forced him to give up the command and serve under Kutuzov. He commanded the right at Borodino, the Fondation notes, with great valour. The Napoleon volume reads that retreat from the French side. Here it shows what Wellington’s letters were for: preservation is defensible only while those who can recall the commander accept its purpose, and Barclay lost them before his retreat had time to show what it was for.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 4 }],
        commanderSlug: "barclay-de-tolly",
        battleSlugs: ["smolensk-1812", "borodino"],
      },
      cost: {
        text: "Ciudad Rodrigo surrendered with much of the town roofless or in ruins, and its garrison was marched into captivity in France. Oman records that Masséna sent the civilian members of the town’s junta to France as prisoners and imposed a heavy fine on the ruined town, of which he extracted half from a homeless and starving population.",
        evidence: "fact",
        refs: [{ source: 2, locator: "pp. 253–254" }],
      },
      transfer: {
        holdsWhen: [
          "What the leader preserves cannot be replaced within the contest, and keeping it in being forces the opponent to spend heavily elsewhere.",
          "Those who can recall the leader have stated the limits of risk, and the leader can show them what the caution is for.",
        ],
        failsWhen: [
          "Preservation becomes the purpose, and the leader refuses every risk, including the ones that would change the outcome.",
          "Allies and dependants bear what the leader declines to risk, and are told too little to understand why.",
        ],
        questions: [
          "What in your organisation cannot be replaced this year, and what would you refuse to risk it for?",
          "Who set the rules you will be judged by, and have they told you the same thing in public and in private?",
          "Which ally is waiting for help you have already decided not to send, and what have you told them?",
        ],
      },
      bearsOn:
        "This is the strongest case for caution as arithmetic, and it is made in his own hand: objects, means and risks, set down for a brother and a minister. It also shows the limits of that answer. Some of the arithmetic was imposed by a government that wanted what was safe and cheap, and some of it was paid by allies who were not consulted. If there was daring here, it lay less in any battle than in staying at all, when ministers half expected him to embark, and in telling them plainly that he would go only when he judged it necessary.",
      questions: [
        {
          prompt:
            "Why did Wellington decide in August 1809 against further co-operation with the Spanish armies?",
          choices: [
            "Because he had been ordered home by the government.",
            "Because, weighing objects, means and risks, he judged that everything would fall on an army he was only permitted, not ordered, to risk in Spain.",
            "Because the French had already left Spain.",
          ],
          answer: 1,
          explanation:
            "His letter from Mérida of 24 August sets out the reasoning, and says the King had permitted operations in Spain only on his own responsibility.",
        },
        {
          prompt:
            "What did Wellington say the government’s instructions of 1810 placed on him?",
          choices: [
            "The duty to fight a decisive battle on the frontier.",
            "The whole responsibility of bringing the army away in safety, if it had to leave.",
            "Command of the Spanish armies.",
          ],
          answer: 1,
          explanation:
            "He told Charles Stuart so on 21 April 1810, and complained that ministers’ private letters pulled against their public instructions.",
        },
        {
          prompt:
            "How did the governor of Ciudad Rodrigo respond after his surrender in July 1810?",
          choices: [
            "He thanked Wellington for not risking the British army.",
            "He spoke bitterly, in his report to the Spanish government, of Wellington’s failure to attempt a relief.",
            "He joined the French.",
          ],
          answer: 1,
          explanation:
            "Oman reports Herrasti’s dispatch and calls his feeling natural; a Spanish divisional commander nearby left in anger.",
        },
      ],
      sourceCheck: {
        question: "Was Wellington right not to relieve Ciudad Rodrigo in 1810?",
        witnesses: [
          {
            label: "Wellington to his brother Henry, 20 June 1810",
            claim:
              "A relief meant leaving the mountains and crossing the plains and two rivers with many troops of doubtful quality: it was not right to risk a general action for it.",
          },
          {
            label: "Picton to a friend, as Oman quotes him",
            claim:
              "A relief would get the army driven out of Portugal; the siege cost the French time, which mattered more to them than the town.",
          },
          {
            label: "Herrasti’s dispatch, as Oman reports it",
            claim:
              "Wellington made no effort to relieve the place, though his outposts were close by.",
          },
        ],
        prompt: "Which reading uses all three witnesses best?",
        options: [
          {
            text: "Wellington and Picton agree, so Herrasti’s complaint can be set aside.",
            feedback:
              "Both were British officers in the same army; agreement between them does not answer the ally’s charge, which concerns what he was led to expect.",
          },
          {
            text: "Herrasti was there and they were not, so his judgement settles it.",
            feedback:
              "He saw the siege, not the odds of a battle in the plains, which the British letters set out in detail.",
          },
          {
            text: "The refusal can be sound on the arithmetic and still have cost trust with an ally who had hoped for more; each witness speaks to a different part of the question.",
            feedback:
              "The British letters judge the risk; Herrasti’s dispatch records what the refusal meant to the people who paid for it.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington wrote that the government wanted nothing done but what was safe and cheap. Argue whether his caution in 1809 and 1810 was his own judgement, a rule imposed on him, or both, and what difference it makes to the lesson.",
        guidance:
          "Use the Mérida letter, the letters of April 1810 to Liverpool, Hill and Stuart, and the letter of 11 June. Then set Barclay de Tolly beside him, and ask what Wellington had that Barclay lacked.",
      },
      sources: [
        s.gurwoodVI,
        s.gurwoodV,
        s.omanIII,
        s.fondationBarclay,
        s.eb1911Barclay,
        s.lernerTetlock,
      ],
    },
    {
      slug: "ground-chosen-in-advance",
      title: "Ground chosen in advance: preparation as command",
      part: "An army that could not be replaced",
      themes: ["judgement", "organisation"],
      claim:
        "When a leader prepares ground before the opponent arrives, the preparation can decide the contest, but only if the opponent chooses to fight there, and only while the leader keeps the will to act once it has worked.",
      inBrief: {
        strength:
          "Works planned a year ahead and a ridge chosen in advance stopped an invasion without a decisive battle.",
        shadow:
          "The ridge could be turned, the Lines invited waiting, and the empty country around them was paid for by its people.",
      },
      moment: {
        text: "On 20 October 1809, in Lisbon, Wellington wrote a memorandum for Lieutenant-Colonel Fletcher, his chief engineer. The French, he began, did not seem to have it in their power to attack Portugal yet; they must wait for reinforcements, and it remained to decide how the country should be defended when they came. The great object was the possession of Lisbon and the Tagus. Connected with it was another, the embarkation of the British troops in case of reverse. There followed twenty-one numbered tasks: dam the rivers, entrench posts at Torres Vedras and on the heights behind Sobral, build a redoubt at the windmill there, choose sites for signal posts, and, the nineteenth, make an accurate plan of the ground. Eleven days later he asked the commissary general to prepare palisades and fascines at Torres Vedras and Sobral. Masséna’s army would not arrive in front of those hills for another year.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 230–235, 258–259" }],
      },
      episodes: [
        {
          title: "A year before it was needed",
          text: "Gurwood’s note on the memorandum says the plan was altered after it was written, when the plain at Castanheira proved impossible to hold and the right was thrown back on Alhandra, but that the memorandum remained the foundation of the whole work, written after Wellington had reconnoitred and visited every part of the ground himself. The same memorandum planned the empty country that went with the line: the allied corps were to stand in each position long enough for the people to evacuate their towns and villages, carrying off or destroying all provisions and carts the army did not need. The French did not learn of the Lines in time. Oman writes that Masséna, following Wellington south after Bussaco in 1810, was still ignorant of their existence and learned of them only some days after leaving Coimbra.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "pp. 230–231" },
            { source: 2, locator: "p. 405" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "The ridge, and the road round it",
          text: "On 25 September 1810 the rearguard retired, in Wellington’s words, ‘to the position which I had fixed upon for the army on the top of the Serra de Busaco’. Oman writes that the line was so well hidden that Marshal Ney, reconnoitring the next morning, formed an entirely erroneous idea of what lay in front of him and thought he faced a rearguard. On the 27th the French attacked the ridge at two points and were driven down. The dispatch also records the limit of the position: the French found a road over the mountains to the north, the militia sent to block it arrived too late, and Wellington withdrew rather than be cut off from Coimbra. He feared, he told Lord Liverpool, that he would not achieve the object he had had in view, but he did not repent the stand: it had shown the enemy what his army was, and brought the Portuguese levies into action for the first time in an advantageous situation.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 444–449" },
            { source: 2, locator: "p. 365" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "Before the Lines",
          text: "Masséna’s senior aide-de-camp, Pelet, as Oman quotes him, describes the French arriving at Sobral in October 1810 expecting undulating, accessible plateaux and finding steep mountains, deep ravines and walls of rock crowned with field fortifications and artillery, so that it was plainly demonstrated to them that they could not attack. Wellington could not see that judgement being made. On 21 October he wrote to his brother Henry that he had no idea what the French would, or rather what they could, do; he thought it certain they could do him no harm, and that they would lose most of their army if they attacked, and would starve if they stayed much longer. On 1 November he told Charles Stuart that the people near Lisbon had fled and left their food and mills behind, so that if the provisions the French had found should last, ‘of which I can have no knowledge’, they might stay until the whole French army in Spain joined them.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "p. 444" },
            { source: 1, locator: "pp. 502, 544–545" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "The habit behind the choice",
          text: "Asked about Waterloo in 1852, Wellington described the habit behind all of this. He had at all times, he wrote to Croker, covered as much as possible the troops exposed to cannon fire: he placed them behind the top of the rising ground and made them sit or lie down. Then, when the enemy advanced or a favourable moment came, he attacked. The Napoleon volume’s lessons read Waterloo from the other side of the ridge, and this lesson does not retell it. What the reply adds is that choosing ground was not an occasional expedient but a practice, stated by the man himself near the end of his life.",
          evidence: "fact",
          refs: [{ source: 3, locator: "pp. 282–283" }],
          battleSlugs: ["waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s memorandum of 20 October 1809",
          stake:
            "A working order to his engineer, written a year before the invasion, for no audience but the people who would build the line.",
          says: "Hold Lisbon and the Tagus, and prepare to embark the British troops if the defence fails.",
          refs: [{ source: 0, locator: "p. 230" }],
        },
        {
          who: "John Gurwood, the compiler",
          stake:
            "Editing the memorandum for publication in the 1830s, when the Lines were already famous.",
          says: "The plan was altered, but the memorandum was the foundation of the whole work, made after a personal visit to every part of the ground.",
          refs: [{ source: 0, locator: "p. 230" }],
        },
        {
          who: "Pelet, Masséna’s senior aide-de-camp",
          stake:
            "The French commander’s closest confidant, explaining a campaign that ended in retreat.",
          says: "The Lines were nothing like what the French had been told to expect, and could not be attacked.",
          refs: [{ source: 2, locator: "p. 444" }],
        },
        {
          who: "Charles Oman",
          stake:
            "The British historian of the war, writing in 1908 from British and French accounts.",
          says: "Masséna would not attack after mid-October; and in November Wellington let a real chance to strike at Junot pass.",
          refs: [{ source: 2, locator: "pp. 445–446, 453–454" }],
        },
      ],
      strategist: [
        {
          text: "The memorandum shows the logic of the preparation. Wellington judged that the French could not attack until reinforced, so he had time, and he spent it on works that served two ends at once: a line that might hold Lisbon, and a covered retreat to the ships if it did not. The investment paid off whether he won or lost. That is preparation as insurance for an army that could not be replaced, and it is why the Lines belong in a volume about caution as much as about engineering. The Napoleon volume’s lesson on plans that survive error argues that an organisation built to absorb a wrong assumption is worth more than a correct prediction; the memorandum is that idea in earthworks, and this lesson adds its cost in labour, time and land, paid a year ahead.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 230–235" }],
        },
        {
          text: "Prepared ground still depends on the enemy. At Bussaco the ridge worked because Masséna attacked it, and failed as a barrier when the French found the road round it. Before the Lines the enemy did not attack, and the preparation turned into a contest of hunger whose length Wellington admitted he could not know. Oman argues that at the turn of October and November, with Junot’s corps pushed forward near Sobral and its supports hours away, he had a great opportunity to crush it and refused it, because a second-class victory would not end the campaign and any accident, fog, rain or a subordinate’s rashness, might spoil the stroke. Whether that was prudence or a missed chance is the question the rest of this volume keeps asking.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "pp. 448–449, 544–545" },
            { source: 2, locator: "pp. 453–454" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Preparation is a practice, not a psychological mechanism, and no research on planning was read for this lesson. It would be easy to describe Wellington’s habit of choosing ground as a trait of temperament, but the documents show it as work: reconnaissance, numbered tasks, orders for timber. The lesson relies on them.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Nothing here supports a claim about Wellington’s character beyond what he did and wrote.",
        },
      ],
      shadow: {
        text: "A prepared position is worth nothing if the enemy will not fight on it, and preparation that has worked argues for waiting. Wellington spent weeks behind his Lines while hunger did the fighting, and declined the chance Oman thinks he had. The same memorandum that planned the line planned the emptying of the country in front of it, and by his own account in November the measure had worked where orders were obeyed in time and failed near Lisbon, where people fled late and left their food behind. The preparation that saved the army was paid for by the people who lived on the ground he had chosen.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "p. 231" },
          { source: 1, locator: "pp. 544–545" },
          { source: 2, locator: "pp. 453–454" },
        ],
        battleSlugs: ["bussaco-torres-vedras-1810"],
      },
      counterCase: {
        text: "Masséna shows the other side of the same ground. Oman writes that he did not come forward to see the Bussaco ridge himself, staying at Mortagoa on the 25th although he must have heard the guns, and attacked a position his own marshal had misread. A month later, faced with the Lines, he refused to attack, and Oman judges that the lesson of Bussaco had not been lost. Refusing was probably right. What he did next is harder to defend: he stayed, in a country emptied in advance, while his numbers shrank, Oman writes, every day. Declining to fight on an enemy’s prepared ground is wisdom only if it leads somewhere other than waiting for the enemy’s preparation to finish its work.",
        evidence: "interpretation",
        refs: [{ source: 2, locator: "pp. 365, 445–446, 454" }],
        commanderSlug: "andre-massena",
        battleSlugs: ["bussaco-torres-vedras-1810"],
      },
      cost: {
        text: "The memorandum of 1809 ordered that the people should evacuate their towns and villages ahead of the enemy, carrying off or destroying their food and carts. In November 1810 Wellington wrote that in Upper Beira not a soul had remained and the mills on the Coa and Mondego had been made useless, and that the people near Lisbon had fled leaving everything behind. A later lesson in this volume asks who paid for the strategy.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "p. 231" },
          { source: 1, locator: "p. 544" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The leader has time before the opponent can act, and spends it on preparations that are useful whether the contest goes well or badly.",
          "The opponent must come to the prepared ground to get what it wants.",
        ],
        failsWhen: [
          "The opponent can go round the prepared position, as the French did at Bussaco.",
          "Preparation becomes a reason to wait after it has done its work, or its costs fall on people who were never asked.",
        ],
        questions: [
          "What are you preparing now that will be useful whether your plan succeeds or fails?",
          "Where is the road round your prepared position, and who is watching it?",
          "Who bears the cost of the ground you have chosen to stand on?",
        ],
      },
      bearsOn:
        "Preparation is the clearest case for caution as method. It made the stand at Bussaco possible, and made it affordable to refuse battle before the Lines. The daring lay a year earlier, in a decision to spend labour and timber on works that might never be used, and to plan the way out as carefully as the defence. But the lesson also shows caution’s cost: once the preparation had worked, it argued for waiting, and Oman thinks Wellington waited past a real chance. Caution here was daring in its timing, and caution again once the moment came.",
      questions: [
        {
          prompt:
            "What two objects did Wellington give the defence of Portugal in October 1809?",
          choices: [
            "To invade Spain and take Madrid.",
            "To hold Lisbon and the Tagus, and to be able to embark the British troops in case of reverse.",
            "To destroy the French army on the frontier.",
          ],
          answer: 1,
          explanation:
            "The memorandum for Fletcher names both, which is why the Lines served whether the defence held or failed.",
        },
        {
          prompt: "Why did Wellington withdraw from the Bussaco ridge?",
          choices: [
            "Because the French broke through on the 27th.",
            "Because the French found a road round it to the north, and he risked being cut off from Coimbra.",
            "Because his Portuguese troops refused to fight.",
          ],
          answer: 1,
          explanation:
            "The militia sent to block the road arrived too late; he wrote that he did not repent the stand even so.",
        },
        {
          prompt:
            "What did Wellington admit he could not know in November 1810?",
          choices: [
            "Where the Lines ran.",
            "How long the food the French had found would last, and so how long they could stay.",
            "Whether his own government supported him.",
          ],
          answer: 1,
          explanation:
            "The preparation had stopped the French; how long hunger would take was outside his knowledge.",
        },
      ],
      sourceCheck: {
        question: "Why did Masséna not attack the Lines of Torres Vedras?",
        witnesses: [
          {
            label: "Pelet, Masséna’s aide-de-camp, as Oman quotes him",
            claim:
              "The ground was nothing like what they had been told: steep mountains and ravines crowned with fortifications. They could not attack.",
          },
          {
            label: "Wellington to his brother, 21 October 1810",
            claim:
              "He had no idea what the French could do; if they attacked they would lose most of their army.",
          },
          {
            label: "Oman, 1908",
            claim:
              "After mid-October Masséna never meant to attack; the lesson of Bussaco had not been lost.",
          },
        ],
        prompt: "Which reading best uses these witnesses?",
        options: [
          {
            text: "Masséna lacked courage, as Wellington’s letter implies.",
            feedback:
              "The letter judges what an attack would cost, not Masséna’s courage, and Wellington says he could not know French intentions.",
          },
          {
            text: "The Lines alone explain it; Bussaco is irrelevant.",
            feedback:
              "Oman links the refusal to the experience of the ridge a month before, and Pelet to the surprise of the ground.",
          },
          {
            text: "The preparation and the experience of Bussaco together made attack look hopeless, and both sides judged the same way without knowing it.",
            feedback:
              "Pelet and Wellington reach the same judgement from opposite sides of the line; the preparation worked by changing the enemy’s calculation.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "At the turn of October and November 1810 Wellington could have attacked part of the French army before the Lines, and chose to let hunger work. Make the case for the attack and the case for waiting, using only what he could know at the time.",
        guidance:
          "Start from his letters of 21 October and 1 November, which say what he knew and did not know, and from Oman’s reasons. Name what each choice risked for an army that could not be replaced, and who else paid for the waiting.",
      },
      sources: [s.gurwoodV, s.gurwoodVI, s.omanIII, s.croker],
    },
    {
      slug: "the-commissariat",
      title: "The commissariat: supply as strategy",
      part: "An army that could not be replaced",
      themes: ["organisation", "judgement"],
      people: ["andre-massena"],
      claim:
        "When an army can be fed where its enemy cannot, it gains time, and time can do what battles cannot, but only while its own supply holds, and an army that depends on someone else to feed it has handed that person its strategy.",
      inBrief: {
        strength:
          "Supply by sea and by money kept his army in Portugal while Masséna’s hunted for food before the Lines.",
        shadow:
          "When his supply failed, as after Talavera, his own soldiers plundered, and every hungry army fed on the people around it.",
      },
      moment: {
        text: "On 8 August 1809, at Deleytosa in Estremadura, eleven days after the victory at Talavera, Wellington wrote two letters to his brother the Marquis Wellesley. The public one said that the army had had almost no bread for days, that it would be useless in Spain and entirely lost if this treatment continued, and that the cause was not the British minister but the poverty and exhausted state of the country, the inactivity of the magistrates and people, and the want of power in the Spanish government. The private one said what that meant. He believed it almost impossible to remain in Spain, though he saw all the consequences of withdrawing. ‘But a starving army is actually worse than none. The soldiers lose their discipline and their spirit. They plunder even in the presence of their officers.’ The officers were discontented and almost as bad as the men, and with the army that had beaten the French a fortnight before he would now hesitate, he wrote, to meet a French corps half its strength.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 13–15" }],
      },
      episodes: [
        {
          title: "Talavera: an army fed by an ally",
          text: "The campaign of 1809 depended on Spanish transport and food, and Wellington had warned since mid-July that without them he could not advance and must leave Spain. On the same day as the letters to his brother, he told John Villiers in Lisbon that all was now safe and he should feel no anxiety ‘if we had provisions: but we are almost starving’. Three days later he answered a complaint from General Cuesta, the Spanish commander, about the conduct of British troops. When troops were starving, he replied, it was not astonishing that they went to the villages and even the mountains to look for food; and in that very village he had seen Spanish soldiers take the doors off locked houses to plunder them. He denied that his commissaries had stopped any convoy for the Spanish army, said he had let loaded mule trains pass through his own hungry army untouched, and asked Cuesta to say plainly whether the Spanish army was to have not only all the country could give but everything sent from Seville as well.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 10, 24–25, 75" }],
          battleSlugs: ["talavera-1809"],
        },
        {
          title: "Before the Lines: hunger as a weapon",
          text: "A year later the position was reversed. Oman writes that Wellington, having refused a chance to attack Junot near Sobral, chose to lie still in the Lines and let the weapon of starvation play on the French. He misjudged by about a fortnight how long they could stay. By early November, in the report from Junot’s corps that Oman translates, General Clausel observed that most of his men were away on raids to the rear in search of maize and cattle, that the last detachment had been gone nine days, that the troops had lived for eight days on boiled maize flour at half ration, and that if the corps had to retreat it would have to abandon its sick and wounded for want of carts. On 10 November Masséna ordered a withdrawal, not to Spain but to the plain around Santarém, where he hoped to feed his army for weeks more on country that had been less stripped. The previous lesson read the Lines as preparation; this one reads them as a contest of stores.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 453–454, 462–464" }],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "1813: the base moves to the sea",
          text: "In June 1813, as the army marched north-east across Spain towards Vitoria, Wellington moved its base with it. On 10 June he asked that the ships lying at Corunna with biscuit, flour, a heavy siege train and ammunition be taken under naval convoy to Santander, to wait off the port if the French still held it. On 24 June, three days after the battle, he wrote to Lord Bathurst that ammunition had been held at Lisbon for want of convoy and had not yet reached Santander, so that he was using captured French cartridges, of a smaller calibre than British muskets. The army could not stay in that part of the country without magazines, and these must come by sea or be bought with ready money. ‘For the first time I believe it has happened to any British army, that its communication by sea is insecure; and certainly we have not money to purchase in the country all we want.’ Even its money had to come by sea from Lisbon once a fortnight.",
          evidence: "fact",
          refs: [{ source: 2, locator: "pp. 429, 458–459" }],
          battleSlugs: ["vitoria-1813"],
        },
      ],
      witnesses: [
        {
          who: "Wellington to his brother, 8 August 1809",
          stake:
            "A private letter to the man who had to persuade the Spanish government, written to justify a withdrawal he had already half decided.",
          says: "A starving army is worse than none: it loses discipline and plunders in front of its officers.",
          refs: [{ source: 0, locator: "p. 15" }],
        },
        {
          who: "Wellington to General Cuesta, 11 August 1809",
          stake:
            "An answer to an allied commander’s complaint, written in anger and meant to put the blame back on the Spanish authorities.",
          says: "His men took food from the villages because they were starving, and Spanish soldiers plundered too.",
          refs: [{ source: 0, locator: "pp. 24–25" }],
        },
        {
          who: "General Clausel, in the report of Junot’s corps that Oman translates",
          stake:
            "A French corps commander describing his men’s condition to Masséna, in support of a withdrawal.",
          says: "His troops were scattered in search of maize and cattle, on half rations, and could not carry their sick if they moved.",
          refs: [{ source: 1, locator: "p. 463" }],
        },
        {
          who: "Charles Oman",
          stake:
            "The British historian of the war, reconstructing both armies’ supply from their papers.",
          says: "Wellington chose starvation over attack before the Lines, and misjudged by a fortnight how long it would take.",
          refs: [{ source: 1, locator: "pp. 454, 462–463" }],
        },
      ],
      strategist: [
        {
          text: "Supply set the limits of every plan in these letters. In 1809 Wellington advanced into Spain on an ally’s promise to feed him, and when it failed he had no choice left: whatever Talavera had won, the army had to go back to Portugal or dissolve. In 1810 he fought on ground where he controlled the food, and the enemy did not. Behind the Lines his army could be supplied from Lisbon and the sea; in front of them the French had to find what the Portuguese had hidden. Time, which the arithmetic of the previous lesson told him to buy rather than spend in battle, became a weapon only because one side could eat and the other could not. The strategist should note what he could not know: Oman shows him wrong by a fortnight about how long hunger would take, and the stroke he declined against Junot might have shortened it.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 13–15" },
            { source: 1, locator: "pp. 454, 462–463" },
          ],
        },
        {
          text: "The letters of 1813 show the same method at a larger scale and its new limits. The sea was his road and his bank, and both depended on things outside his command: naval convoys, the Treasury and the security of a coast where ships were being taken. His complaint to Bathurst is a supply officer’s letter written three days after a great victory, and it makes the point of this lesson better than any maxim. Battles decided where the army could go; magazines decided whether it could stay.",
          evidence: "interpretation",
          refs: [{ source: 2, locator: "pp. 429, 458–459" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Wellington’s description of what hunger does to an army, discipline lost, spirit gone, plunder in front of officers, is a commander’s observation, and so is Clausel’s. No research on deprivation and group behaviour was read for this lesson, and it would add little to what both armies’ letters already show. The lesson relies on those letters.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. The behaviour described is reported by commanders with reasons of their own to stress it.",
        },
      ],
      shadow: {
        text: "Supply as strategy has a price that falls outside the army. When his own commissariat failed in 1809, his men did exactly what he said starving soldiers do, and the villages of Estremadura paid, as they paid the Spanish soldiers he saw breaking into houses. In 1810 the hunger he turned on the French was felt first by the Portuguese whose hidden granaries the French foragers searched for, and near Lisbon, by his own account, the people had fled late and left their food behind for the enemy. A strategy of starving the enemy is also a strategy of emptying a country, and a later lesson in this volume asks who paid for it.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "pp. 15, 24–25" },
          { source: 1, locator: "p. 463" },
          { source: 5, locator: "pp. 544–545" },
        ],
        battleSlugs: ["talavera-1809", "bussaco-torres-vedras-1810"],
      },
      counterCase: {
        text: "Napoleon’s army in Russia in 1812 met the problem Wellington had set Masséna, on a vastly larger scale. The Fondation Napoléon’s timeline records the Russians destroying their depots at Vilna and burning the magazines of the camp at Drissa as they fell back, and partisans harrying French transport columns during the month in Moscow, where a great deal of food had been left but little coordinated effort was made to prepare winter supplies. Kutuzov, meanwhile, could draw supplies at Tarutino from the fertile lands to the south. On the retreat, Paul Ganière writes, the French had hoped to live off the road, but it crossed a desolate region; the magazines Napoleon had ordered filled at Smolensk held little, many depots had been burned or plundered by marauders, and the horses were fed on bark and rotten straw. The Napoleon volume reads Moscow as a failure to stop; here it is a failure of supply, and it mirrors the Lines: the side that could be fed where it stood gained the time, and the side that had to forage lost its army.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 4 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["smolensk-1812", "berezina"],
      },
      cost: {
        text: "In the village where he wrote to Cuesta, Wellington recorded the complaints of the inhabitants against British soldiers looking for food, and saw Spanish soldiers take the doors off locked houses, plunder them and burn the doors. Before the Lines in November 1810, Clausel reported that his corps could not carry its sick and wounded if it had to retreat.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "p. 24" },
          { source: 1, locator: "p. 463" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The leader controls the means of sustaining the organisation where the opponent must live on what it finds.",
          "Time favours the side that can be supplied, and the leader is willing to let it work.",
        ],
        failsWhen: [
          "Supply depends on an ally’s promise or an outside service the leader cannot command.",
          "The cost of the opponent’s hunger falls on third parties, and the leader treats it as someone else’s concern.",
        ],
        questions: [
          "Who feeds your organisation, in the widest sense, and what happens to your strategy if they stop?",
          "Which of your plans would survive the loss of the one supply line you take for granted?",
          "When you starve a competitor of what it needs, who else goes hungry?",
        ],
      },
      bearsOn:
        "Supply turns caution into a method with a clock. The Lines worked as a cautious position because one side could eat behind them and the other could not; waiting was a weapon only on those terms. Talavera shows the reverse: a bold advance on borrowed supply ended in a retreat that no victory could prevent. Whatever daring Wellington showed in his campaigns was bought in advance by convoys, money and magazines, and his letters admit how often those failed.",
      questions: [
        {
          prompt:
            "What did Wellington tell his brother a starving army does, in August 1809?",
          choices: [
            "It fights harder because it has nothing to lose.",
            "It loses its discipline and spirit, and plunders even in front of its officers.",
            "It deserts to the enemy at once.",
          ],
          answer: 1,
          explanation:
            "His private letter of 8 August says a starving army is actually worse than none.",
        },
        {
          prompt:
            "What did Clausel report about his corps in front of the Lines in November 1810?",
          choices: [
            "That it was well supplied and ready to attack.",
            "That most of his men were away foraging for maize and cattle, on half rations, and the sick could not be carried if the corps retreated.",
            "That the Portuguese had sold them all the food they needed.",
          ],
          answer: 1,
          explanation:
            "Oman translates the report; Masséna ordered a withdrawal to Santarém days later.",
        },
        {
          prompt:
            "What did Wellington complain of to Bathurst three days after Vitoria?",
          choices: [
            "That he had too many prisoners to feed.",
            "That his supplies came by a sea route that was no longer secure, and he had no money to buy in the country what he needed.",
            "That Santander had refused to receive his ships.",
          ],
          answer: 1,
          explanation:
            "The army could not stay without magazines brought by sea or bought with ready money, and the sea was insecure.",
        },
      ],
      sourceCheck: {
        question: "Why was Wellington’s army hungry in August 1809?",
        witnesses: [
          {
            label: "Wellington to Cuesta, 11 August",
            claim:
              "The Spanish authorities had formed no magazines for the British, while convoys for the Spanish army passed through untouched.",
          },
          {
            label:
              "Wellington to the Marquis Wellesley, public letter of 8 August",
            claim:
              "The poverty and exhaustion of the country, the inactivity of magistrates and people, and the weakness of the Spanish government.",
          },
          {
            label: "Cuesta’s complaint, as Wellington’s reply describes it",
            claim:
              "British troops were taking food from the villages and stopping provisions meant for the Spanish army.",
          },
        ],
        prompt: "How should a reader use these?",
        options: [
          {
            text: "Accept Wellington’s account, since he wrote two letters that agree.",
            feedback:
              "They do not quite agree: one blames an ally’s officers, the other the state of the country. And both are his.",
          },
          {
            text: "Notice that Cuesta reaches us only through Wellington’s reply, and that Wellington’s own letters give two explanations, one accusing an ally and one blaming conditions no one could quickly change.",
            feedback:
              "The record is one-sided, and even that side varies with its reader; the hunger is certain, the blame is not.",
            best: true,
          },
          {
            text: "Conclude that the Spanish deliberately starved their ally.",
            feedback:
              "Wellington’s own public letter puts much of it down to an exhausted country and a weak government, not intent.",
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington retreated from Spain in 1809 after a victory, and Masséna retreated from the Lines in 1810 without a battle. Compare the two, and argue whether supply or command decided each.",
        guidance:
          "Use the Deleytosa letters and the reply to Cuesta for 1809, and Oman’s account of the French before the Lines for 1810. Say in each case who controlled the food, and who paid when it ran out.",
      },
      sources: [
        s.gurwoodV,
        s.omanIII,
        s.gurwoodX,
        s.fondationRussia,
        s.ganiere,
        s.gurwoodVI,
      ],
    },
    {
      slug: "the-afternoon-at-salamanca",
      title: "The afternoon at Salamanca: striking when the enemy errs",
      part: "Caution and daring",
      themes: ["judgement", "adaptation"],
      people: ["auguste-de-marmont"],
      claim:
        "When a leader known for avoiding battle keeps the army hidden, ready and close, an opponent who trusts that reputation may offer an opening, but the strike pays only if the leader has already decided what to do if the opening never comes.",
      inBrief: {
        strength:
          "Days of refusing battle, then an attack the moment Marmont stretched his line too far.",
        shadow:
          "Waiting for an enemy’s mistake works only if the enemy makes one; the retreat was already drafted.",
      },
      moment: {
        text: "On the afternoon of 22 July 1812, south of Salamanca, Marshal Marmont’s army began to extend its left along a long plateau facing Wellington’s position, as if to cut his road back to Portugal. Two days later, writing to Lord Bathurst from the pursuit, Wellington said that the extension of the French line ‘gave me an opportunity of attacking him, for which I had long been anxious’. He sent Pakenham’s division to turn the French left on the heights while the divisions behind the village of Arapiles attacked in front. Oman prints in a footnote two versions of the moment the decision was taken, one with Wellington munching in a farmyard and one with him eating cold beef while an aide held his telescope, each with different words. The dispatch records the decision; the anecdotes record how officers liked to remember it.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "pp. 302–303" },
          { source: 1, locator: "pp. 429, 434–435" },
        ],
      },
      episodes: [
        {
          title: "The attack that was not made at noon",
          text: "The dispatch says nothing of what happened earlier that day. Oman quotes the diary of William Tomkinson, a cavalry officer: about twelve o’clock the troops were ordered to attack, then counter-ordered after they had begun to move, Marshal Beresford being, Tomkinson thought, the cause. The diarist added that ‘the Peer’ was a little nervous, as it was the first time he had ever attacked. Marmont’s memoirs, as Oman reports them, bear this out: meeting Wellington years later, Marmont asked about it and was told that an attack had been planned and put off on Beresford’s advice. Wellington then had his acting adjutant-general draft a full scheme of retreat, and the baggage was already moving off towards Ciudad Rodrigo. The dispatch confirms the condition he had set himself: if he could not attack on the 22nd he would march for Ciudad Rodrigo without further loss of time, because French cavalry reinforcements were a day or two away.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 425–428" },
            { source: 0, locator: "pp. 301–302" },
          ],
          battleSlugs: ["salamanca-1812"],
        },
        {
          title: "What Marmont believed",
          text: "Marmont’s dispatch to Berthier, written to explain his defeat, says he was convinced that Wellington would retire the moment his flank was threatened, and that everything led him to believe the enemy meant to fall back to the next position behind him. Oman writes that Marmont read the shifting of British reserves behind the crest as a general retreat, when Wellington was still hoping the French would commit themselves to some unwise and premature movement, with every man in hand. Jourdan, a severe critic of his colleague, wrote that Marmont had extended his left much too far to threaten the allies’ line of retreat. Napoleon, reading Marmont’s dispatch in a bivouac in Russia, said, as Oman reports, that its explanations had as much complicated stuffing as the inside of a clock.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 421, 427–428, 431" }],
          battleSlugs: ["salamanca-1812"],
        },
        {
          title: "Assaye, before the reputation",
          text: "Tomkinson’s first time was not the first. In September 1803, in the Deccan, Arthur Wellesley had planned with Colonel Stevenson to attack the armies of Sindia and the Raja of Berar together on the 24th. His memorandum on the battle, written afterwards, explains why he attacked alone on the 23rd. His information, he writes, was very imperfect, gathered by hired local informants because the enemy’s great bodies of horse kept him from seeing their positions himself; he found himself within a few miles of their camp, was told they were leaving, and marched to attack. When the report proved false and he saw their whole army in a strong position, he deliberated whether to withdraw and attack next morning as planned. He judged that their cavalry would harass a withdrawal and threaten his baggage, and that they would slip away in the night if they heard Stevenson was coming. So he attacked, by a ford beyond their left which, he wrote, luckily they had not occupied.",
          evidence: "fact",
          refs: [{ source: 2, locator: "pp. 323–324, 329–331" }],
          battleSlugs: ["assaye-1803"],
        },
        {
          title: "The reputation, revised by an enemy",
          text: "Six days after Salamanca the French general Maximilien Foy wrote in his diary, as Oman translates it, that the battle was the most masterly in its management of all the victories the English had won in these latter days, and raised Lord Wellington almost to the level of Marlborough. Until then, Foy wrote, the French had known his prudence, his eye for choosing a position and his skill in using it; at Salamanca he had shown himself a great and able master of manoeuvre. He had kept his dispositions hidden almost all day, waited until the French were committed to their movement before developing his own, and played a safe game. Foy added that the French had had no definite intention of bringing on a battle and found themselves drawn into one without preparation.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 472–473" }],
          battleSlugs: ["salamanca-1812"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s Salamanca dispatch",
          stake:
            "His official account to the Secretary of State, written in the pursuit two days later.",
          says: "Marmont’s extension gave him the opportunity he had long wanted; it does not mention the noon attack or the retreat plan.",
          refs: [{ source: 0, locator: "pp. 301–304" }],
        },
        {
          who: "William Tomkinson, as Oman quotes his diary",
          stake:
            "A cavalry officer writing at the time, seeing part of the field and guessing at headquarters.",
          says: "An attack was ordered at noon and countermanded; the commander was a little nervous.",
          refs: [{ source: 1, locator: "pp. 426–427" }],
        },
        {
          who: "Marshal Marmont, as Oman quotes him",
          stake:
            "The beaten commander, explaining his defeat to the emperor’s chief of staff and later in his memoirs.",
          says: "He was convinced Wellington would retreat; years later Wellington told him of the attack put off at noon.",
          refs: [{ source: 1, locator: "pp. 421, 427" }],
        },
        {
          who: "Maximilien Foy, as Oman translates his diary",
          stake:
            "A French divisional general in the defeated army, writing privately six days after.",
          says: "The French had known Wellington’s prudence; at Salamanca he showed himself a master of manoeuvre.",
          refs: [{ source: 1, locator: "pp. 472–473" }],
        },
      ],
      strategist: [
        {
          text: "The afternoon was not an inspiration out of nowhere. The dispatch shows a decision taken in advance with a deadline: attack on the 22nd if the French gave an opening, otherwise march for Ciudad Rodrigo before their cavalry arrived. The retreat was drafted and the baggage on the road. Meanwhile the army was kept where it could strike: Pakenham’s division waited in a dip screened by trees, Oman writes, where it could barely be seen even from the British position. Wellington’s 1852 statement to Croker, that his common practice in a defensive position was to attack at the moment the enemy was about to attack, describes this exactly, though it was written forty years later.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 301–302" },
            { source: 1, locator: "pp. 426–428" },
            { source: 3, locator: "p. 283" },
          ],
        },
        {
          text: "Judged by what was knowable, neither the noon decision nor the afternoon one was certain. Oman thinks a noon attack might have succeeded but that the later blow was far more effective, which is a judgement made with the outcome in hand. At Assaye Wellesley attacked on information he admits was false in its essentials, gave his reasons for not waiting, and credits luck with the ford. His own account of that day is a model of a commander explaining a risk after it came off, and it should be read as such; it is also evidence that the readiness to attack against expectation existed long before anyone called him cautious.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "p. 427" },
            { source: 2, locator: "pp. 329–331" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Napoleon volume’s lesson on the coup d’œil read quick battlefield judgement as stored experience, and this lesson does not repeat it. The only window here into Wellington’s state of mind is Tomkinson’s remark that he was a little nervous, one officer’s inference about his commander written at the time, and it will not bear a psychological reading. What can be seen is behaviour: a decision with a deadline, a retreat prepared, an army kept hidden and close.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. A diarist’s impression of his commander’s nerves is evidence of what officers thought, not of what Wellington felt.",
        },
      ],
      shadow: {
        text: "Waiting for an enemy’s mistake is a strategy only if the enemy makes one. Had Marmont kept his army together, Oman writes, the retreat Wellington had drafted would have meant abandoning Salamanca, whose people had welcomed the allied army. They saw the baggage moving off that morning, and some complained that the English were retreating without a battle after betraying their friends. The reputation that tempted Marmont was also believed by the people who depended on Wellington, and it cost them something every time he was right to be cautious.",
        evidence: "interpretation",
        refs: [{ source: 1, locator: "pp. 425–426, 428" }],
        battleSlugs: ["salamanca-1812"],
      },
      counterCase: {
        text: "At Waterloo Napoleon waited too, for a different reason. The 1911 Britannica says the wet ground and the scattered French bivouacs prevented the attack at six in the morning that he had wanted; it was put off to nine and then to half past eleven, so that the ground could dry enough for cavalry and guns and the army could close up. Meanwhile the Prussians were marching to join Wellington. The Napoleon volume’s lesson on the last reserve reads that day from Napoleon’s side, and this lesson does not retell it. The contrast is in what each was waiting for: Wellington at Salamanca waited for the enemy to err, with a retreat ready if he did not; Napoleon waited for conditions to suit his own attack, and the delay gave his enemies time.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "Speed was not cheapness. The dispatch names Major-General Le Marchant, killed at the head of his brigade, and Beresford, Cole and Leith wounded. After Assaye Wellesley wrote to Major Shawe that the fire from the enemy’s guns had been the hottest known in India for some time and that his loss in officers and men was very great; he added that Sindia’s infantry had behaved remarkably well and stood to their guns to the last.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "p. 304" },
          { source: 2, locator: "pp. 328–329" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The opponent believes the leader will avoid a fight, and acts on that belief in ways that can be seen.",
          "The leader has decided in advance what to do if no opening comes, and keeps the means to strike hidden and close.",
        ],
        failsWhen: [
          "The opponent makes no mistake, and waiting becomes retreat under another name.",
          "The people who depend on the leader read the caution as abandonment and act on it.",
        ],
        questions: [
          "What does your opponent expect you to do, and what would they do differently if they are wrong?",
          "What will you do if the opening you are waiting for never comes, and by when will you do it?",
          "Who else believes your reputation for caution, and what does it cost them?",
        ],
      },
      bearsOn:
        "Salamanca is the case British tradition cites for caution as method, and Foy’s diary shows the French picture of a prudent general changing in an afternoon. But the morning shows caution as an alternative, not a disguise: Wellington had a retreat drafted, and the attack he made was one he had set himself a deadline to find. Assaye shows that the readiness to attack against expectation came first, nine years before the reputation. Whether caution here was a form of daring depends on what one credits, the hidden army and the deadline, or Marmont’s error.",
      questions: [
        {
          prompt:
            "What had Wellington decided to do if he could not attack on 22 July 1812?",
          choices: [
            "Stay in position and wait for reinforcements.",
            "March towards Ciudad Rodrigo at once, before French cavalry reinforcements arrived.",
            "Attack the next day whatever the French did.",
          ],
          answer: 1,
          explanation:
            "His dispatch states the condition, and Oman describes the retreat scheme he had drafted that day.",
        },
        {
          prompt: "What did Marmont believe Wellington would do?",
          choices: [
            "Attack his centre at noon.",
            "Retire the moment his flank was threatened.",
            "Wait for the Spanish army to arrive.",
          ],
          answer: 1,
          explanation:
            "Marmont’s own dispatch says so, and his extension to the left followed from it.",
        },
        {
          prompt:
            "What does Wellesley’s memorandum on Assaye say about his information before the battle?",
          choices: [
            "That it was complete and accurate.",
            "That it was very imperfect, and that the plan concerted with Stevenson failed because of it.",
            "That he had seen the enemy camp himself the day before.",
          ],
          answer: 1,
          explanation:
            "He attacked against a reported withdrawal that proved false, after weighing whether to pull back.",
        },
      ],
      sourceCheck: {
        question: "Did Wellington plan to attack at noon on 22 July 1812?",
        witnesses: [
          {
            label: "Wellington’s dispatch, 24 July",
            claim:
              "Silent on any noon attack; says the French extension in the afternoon gave the opportunity he had long wanted.",
          },
          {
            label: "Tomkinson’s diary, as Oman quotes it",
            claim:
              "Troops were ordered to attack about noon and then counter-ordered, on Beresford’s advice.",
          },
          {
            label: "Marmont’s memoirs, as Oman reports them",
            claim:
              "Years later Wellington told Marmont an attack had been planned and put off on Beresford’s advice.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Trust the dispatch: if there had been a noon attack, Wellington would have mentioned it.",
            feedback:
              "A dispatch reports what its writer chooses; an attack ordered and recalled was not something a victor needed to mention.",
          },
          {
            text: "Accept the noon attack: a diarist at the time and Wellington’s own later admission, reported by his opponent, agree.",
            feedback:
              "Two independent witnesses, one British and one French, point the same way, and the dispatch’s silence is consistent with them.",
            best: true,
          },
          {
            text: "Dismiss Marmont as a beaten general making excuses.",
            feedback:
              "On this point Marmont reports something that does not excuse him, and it matches a British diary.",
          },
        ],
      },
      seminar: {
        prompt:
          "Was Salamanca won by Wellington’s caution or by Marmont’s mistake? Argue both, using only what each commander could see that day.",
        guidance:
          "Use the dispatch’s deadline, the noon attack and the drafted retreat on one side, Marmont’s dispatch and Foy’s diary on the other. Then bring in Assaye, and ask whether the same commander was cautious or daring before anyone had a reputation to believe.",
      },
      sources: [s.gurwoodIX, s.omanV, s.gurwoodII, s.croker, s.eb1911Waterloo],
    },
    {
      slug: "the-breach",
      title: "The breach: the costly risk",
      part: "Caution and daring",
      themes: ["ethics", "judgement"],
      claim:
        "When a commander known for sparing his army pays heavily for time by storming a fortress, the price includes what the army does once it is inside, and that part is paid by people who had no say in the decision.",
      inBrief: {
        strength:
          "He took Badajoz in a race against relief, ordering the storm while Soult was still days away and keeping more than one way in.",
        shadow:
          "The breaches failed, an allied town was sacked, and at Burgos the same haste failed outright.",
      },
      moment: {
        text: "At ten o’clock on the night of 6 April 1812 the allied army stormed Badajoz. Wellington’s dispatch, written the next day, tells it plainly. Two breaches had been practicable since the evening of the 5th, but the French had entrenched behind them, so he waited a day to batter a third. Then the 4th and Light Divisions went down into the ditch and up the breaches, and could not get in: officers and men were killed by explosions at the top, and those who followed found the obstacles impossible to pass. The attempts went on until after midnight, when he ordered the two divisions back to where they had formed. By then Picton’s 3rd Division had taken the castle by escalade, as had been planned, and on the far side of the town Major-General Walker’s brigade, sent in a false attack that was to become real if circumstances allowed, had climbed the bastion of San Vicente. With British troops in the castle and the town, resistance ceased. At daylight the French governor, General Philippon, surrendered.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 40–43" }],
      },
      episodes: [
        {
          title: "A race against relief",
          text: "The storm was a decision about time. Oman writes that Wellington resolved to strike while Marshal Soult, marching up from Andalusia to relieve the place, was still four or five marches away, and that he put the storm off a day only because his engineer, Colonel Fletcher, reported the obstacles being heaped up behind the breaches. Oman calls the assault a business Wellington knew would be costly and not certain of success. The escalade of the castle that decided it was made on Picton’s own petition. The dispatch closes with the clock still running: Soult was at Llerena, Marmont had appeared on the northern frontier, and because the Spanish authorities had failed to provision Ciudad Rodrigo, Wellington would have to return there within a short time. His orders for the assault had also looked past it. The last article asked every officer to keep the men together and formed as a military body after the storm and through the night, for the success of the operation, the honour of the army and their own safety.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 243–245" },
            { source: 0, locator: "pp. 40, 46–47" },
          ],
          battleSlugs: ["badajoz-1812"],
        },
        {
          title: "What his letters say about the price",
          text: "On the same day as the dispatch he wrote privately to Colonel Torrens, the Commander-in-Chief’s military secretary, that the loss had been very great, and that he was sending a letter to Lord Liverpool which accounted for it. ‘The truth is, that, equipped as we are, the British army are not capable of carrying on a regular siege.’ Gurwood’s footnote adds that the letter to Liverpool could not be found; its summary in the index for 1812 showed that it recommended forming a corps of sappers and miners, whose absence had been the chief cause of the great loss in the sieges. Eight years later, writing to Canning about another matter, Wellington gave a harder explanation, which Oman quotes. It had always been understood, he wrote, that defenders of a stormed fortress had no claim to quarter, and the French rule that a breach must stand at least one assault had cost him the flower of his army at Ciudad Rodrigo and Badajoz; he would have thought himself justified in putting both garrisons to the sword. Oman adds that comparatively few of either garrison were shot down, and those in hot blood as the walls were carried.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "p. 49" },
            { source: 1, locator: "pp. 259–260" },
          ],
          battleSlugs: ["badajoz-1812"],
        },
        {
          title: "Burgos: the method without the means",
          text: "In the autumn of 1812 he tried the same method at Burgos and failed. On 23 November he explained to Liverpool that the public would be disappointed with a campaign he thought the most successful a British army had fought for a century, and that Burgos was where it had gone wrong. ‘The Government had nothing to say to the siege. It was entirely my own act.’ The means, he wrote, had been ample at Madrid and Santander; what was lacking was transport to bring guns and stores to the place, and his own fault was to have taken inexperienced troops rather than his best, whose first escalade failed when its commanding officer ignored his orders. Oman, writing a century later, accepts the admission and rejects the explanation. By Wellington’s own fault, he writes, the army lacked the artillery to subdue a third-class fortress; Sir Home Popham and officers at Madrid had pressed him to take more heavy guns; and when Madrid was later evacuated, transport was found to remove a great part of its stores.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "pp. 565–567" },
            { source: 2, locator: "pp. 176–177" },
          ],
          battleSlugs: ["burgos-1812"],
        },
        {
          title: "San Sebastián: whose account",
          text: "The last of the storms, at San Sebastián on the Basque coast on 31 August 1813, was followed by fire and plunder, and by a quarrel over who was to blame. Spanish authorities and newspapers charged that the British had burned the town; Wellington answered the magistrates in November that it had been in great part burned, and on fire in several places, before his troops entered it, and that the libels made it delicate for him to interfere. He was very desirous, he wrote, not to be applied to again. Oman, who read the British officers’ letters and the reports Wellington called for, finds much drunkenness and plunder, and some rape, but no eyewitness trace of the wholesale murder the local junta’s manifesto alleged, and he calls the charge that Wellington wanted the town destroyed absurd. He quotes Wellington’s own concession: that he had never seen or heard of a town so taken, by troops of any nation, that was not plundered. No Spanish account was read for this lesson.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "pp. 246–247" },
            { source: 4, locator: "pp. 31–35" },
          ],
          battleSlugs: [],
          campaignSlugs: ["peninsular-war"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s Badajoz dispatch",
          stake:
            "His official report to the Secretary of State, written the day after, naming officers for promotion and the dead.",
          says: "The breaches could not be carried; the castle and San Vicente were taken by escalade; the gallantry of all was beyond expression.",
          refs: [{ source: 0, locator: "pp. 40–47" }],
        },
        {
          who: "Wellington to Colonel Torrens, 7 April 1812",
          stake:
            "A private letter to the Commander-in-Chief’s secretary, about promotions and the reasons for the loss.",
          says: "The British army, as it was equipped, could not carry on a regular siege.",
          refs: [{ source: 0, locator: "p. 49" }],
        },
        {
          who: "Wellington to Canning, 1820, as Oman quotes it",
          stake:
            "A retrospective letter on another subject, written by a man defending the practice of war he had led.",
          says: "Stormed garrisons had no claim to quarter, and the French rule of standing an assault had cost him the flower of his army.",
          refs: [{ source: 1, locator: "p. 260" }],
        },
        {
          who: "Charles Oman",
          stake:
            "The British historian of the war, admiring of Wellington but critical of him at Burgos, and sceptical of Spanish charges at San Sebastián.",
          says: "Burgos failed by Wellington’s own fault; the sacks were real, and the worst stories of San Sebastián come from writers who were not there.",
          refs: [
            { source: 2, locator: "pp. 176–177" },
            { source: 4, locator: "pp. 32–35" },
          ],
        },
      ],
      strategist: [
        {
          text: "Judged by what he knew, the storm of Badajoz was a sound gamble against the clock. A relieving army was coming, a second French army was on the other frontier, and Ciudad Rodrigo, behind him, was unprovisioned. Within that, he weighed the cost: he delayed a day for a third breach when his engineer warned him, and he ordered the breaches abandoned once the castle was held. The plan also had more than one way in. The castle escalade was a subordinate’s proposal he allowed, and Walker’s false attack was licensed to become a real one. The breaches, where the plan put its weight, failed; the attacks it treated as secondary succeeded. A plan that leaves room for its own failure is a theme of the preparation lesson, and here it decided the night.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 40–47" },
            { source: 1, locator: "pp. 243–245" },
          ],
        },
        {
          text: "Why did a commander so careful of his army in the field pay so heavily at the walls? The letter to Torrens gives the structural answer: without trained sappers and miners, and with a short siege train, the army could not make the slow approaches a regular siege needed, so it bought time with assaults. The arithmetic of the earlier lessons still applies, but the scarce quantity has changed. In the field he could wait and the French could not; before a fortress with a relieving army on the road, time was what he could not spare, and men were what he spent. Burgos shows the method failing when the means were short by his own choice, and his letter to Liverpool shows him taking the blame in a sentence and spreading it in a paragraph.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 49, 565–567" },
            { source: 2, locator: "pp. 176–177" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Oman’s witnesses explain the sacks themselves: exhaustion, thirst, drink, and a belief shared across armies that a town taken by storm belonged to its takers. Those are soldiers’ and historians’ explanations, and no research on crowd violence or on combat and atrocity was read for this lesson. It would be easy to borrow a mechanism that made the sacks seem inevitable; the documents show instead orders given, ignored, and enforced late.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. The explanations in the lesson are those of witnesses who were there, or who wrote about their own side.",
        },
      ],
      shadow: {
        text: "Badajoz was a Spanish town, an ally’s, and Oman notes that this adds a special shame to what followed. The sack went on through 7 April. Late that day Wellington issued an order, which Oman quotes from the Supplementary Despatches: ‘It is now full time that the plunder of Badajoz should cease.’ A Portuguese brigade was sent in to clear the streets and a gallows was put up in the cathedral square; Oman finds the evidence divided on whether it was used, and quotes Napier that the tumult rather subsided than was quelled. The orders asking officers to keep their men together after the storm had not held. After Burgos it happened again in retreat. On 28 November Wellington told his divisional commanders that from the moment the army left Burgos and Madrid the officers had lost all command over their men, and outrages of every description were committed with impunity; he put it down to the habitual inattention of regimental officers to their duty.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "pp. 261–264" },
          { source: 0, locator: "pp. 40, 574–575" },
        ],
        battleSlugs: ["badajoz-1812", "burgos-1812"],
      },
      counterCase: {
        text: "At Acre in 1799 Bonaparte faced the choice Wellington took at Badajoz and chose the other way. The Napoleon volume’s lesson on knowing when to stop reads his note of 9 May, setting out what he would do if the last assault failed. The next day’s entry, in R. M. Johnston’s arrangement of his words as a diary (which, its preface warns, abbreviates his words and transposes words and dates), records what happened: the attackers carried the principal parts of the wall and found a second wall behind it, so that taking the town would mean sapping through it, opening trenches before every house, and losing more lives than he was willing to lose. He did not go on. Instead he planted a battery to raze the pasha’s palace and the principal buildings, and left the town crushed under shellfire. The contrast is not between a careful commander and a careless one. Bonaparte stopped at the inner defence and spent shells on the town; Wellington pressed on, got in by the escalades, and the town paid in a different way.",
        evidence: "interpretation",
        refs: [{ source: 5, locator: "pp. 98–99, preface" }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["acre"],
      },
      cost: {
        text: "The Badajoz dispatch names among the dead Lieutenant-Colonel Macleod of the 43rd and Major O’Hare of the 95th, killed in the breach, and Lieutenant-Colonel Ridge of the 5th, killed in the assault of the castle. Of San Sebastián, an officer of the 5th Division wrote in his diary four days after the storm, as Oman quotes it, that apart from a handful of buildings nothing was left but blackened walls, and that men of all ranks had worked to save the wounded, French and English, from the flames.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "pp. 44–45" },
          { source: 4, locator: "p. 32" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Time is scarcer than any other resource, and the leader can show why waiting would cost more than the attempt.",
          "The plan keeps more than one way to succeed, and the leader is willing to abandon the main effort when a secondary one works.",
        ],
        failsWhen: [
          "The means are short by the leader’s own choice, and speed is asked to make up for preparation that was not done.",
          "No one has the authority, or the will, to control what the organisation does once the risk has paid off.",
        ],
        questions: [
          "What are you buying with speed, and what are you paying for it in people?",
          "If your main effort fails tonight, which secondary effort have you licensed to become the real one?",
          "Who will control what your people do in the hour after success, and are they still standing?",
        ],
      },
      bearsOn:
        "The breach shows that Wellington’s caution was a calculation and not a temperament. When time cost more than men, he spent men, quickly and heavily, and his letters say so. It complicates the volume’s question from the other side: the same commander who would not risk a battle in the plains for Ciudad Rodrigo stormed Badajoz against the clock. Daring here was real, and so was its price, which fell on his soldiers, on the defenders, and on Spanish towns whose people had no say.",
      questions: [
        {
          prompt:
            "How was Badajoz finally taken on the night of 6–7 April 1812?",
          choices: [
            "Through the main breaches, at the first rush.",
            "The breaches could not be carried; the castle and the bastion of San Vicente were taken by escalade, and the garrison then gave up.",
            "By a negotiated surrender before any assault.",
          ],
          answer: 1,
          explanation:
            "Wellington’s dispatch says so: the attacks the plan treated as secondary decided it.",
        },
        {
          prompt: "What did Wellington tell Torrens explained the heavy loss?",
          choices: [
            "The cowardice of the Portuguese troops.",
            "That the British army, equipped as it was, could not carry on a regular siege.",
            "That the French had been reinforced during the night.",
          ],
          answer: 1,
          explanation:
            "Gurwood notes that the fuller letter to Liverpool, recommending a corps of sappers and miners, could not be found.",
        },
        {
          prompt:
            "What did Oman make of Wellington’s explanation of the failure at Burgos?",
          choices: [
            "He accepted it entirely.",
            "He accepted that it was Wellington’s own act but found his account of the means unconvincing, since heavy guns had been pressed on him.",
            "He blamed the government in London.",
          ],
          answer: 1,
          explanation:
            "Oman writes that the army lacked artillery by Wellington’s own fault, and that transport was found later when Madrid was evacuated.",
        },
      ],
      sourceCheck: {
        question:
          "What happened to San Sebastián after the storm of 31 August 1813?",
        witnesses: [
          {
            label: "Wellington to the magistrates, 2 November 1813",
            claim:
              "The town was in great part burned, and on fire in several places, before his troops entered it; the charges against them are libels.",
          },
          {
            label: "A 5th Division officer’s diary, as Oman quotes it",
            claim:
              "The fire was probably started by the enemy; much was plundered, but officers and men also helped the townspeople and saved the wounded.",
          },
          {
            label: "The local junta’s manifesto, as Oman describes it",
            claim:
              "The atrocities were the worst of the war, and the town was destroyed on purpose. (Not read for this lesson.)",
          },
        ],
        prompt: "What can a reader of this lesson conclude?",
        options: [
          {
            text: "The junta exaggerated, so nothing serious happened.",
            feedback:
              "Wellington himself conceded that the town was plundered, and Oman finds drunkenness, plunder and some rape in British accounts.",
          },
          {
            text: "There was plunder by the army’s own admission; the worst charges rest on a Spanish account this lesson has only seen through a British historian, so they stay open.",
            feedback:
              "Every witness read here is British. The concession is solid; the rest needs the Spanish side read directly.",
            best: true,
          },
          {
            text: "The junta was there and Oman was not, so its account should be preferred.",
            feedback:
              "Oman read eyewitness letters and reports; but neither he nor this lesson can settle the question without the junta’s own text.",
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington refused to risk a battle for Ciudad Rodrigo in 1810 and stormed Badajoz at heavy cost in 1812. Was this the same calculation or two different men? Argue it from the commander’s position and then from that of a citizen of Badajoz.",
        guidance:
          "Use the dispatch and the orders for the storm, the letter to Torrens and the letter to Canning, Oman on the sack, and the order of 7 April. Then set Bonaparte at Acre beside him, and ask who paid in each case for the decision to go on or to stop.",
      },
      sources: [
        s.gurwoodIX,
        s.omanV,
        s.omanVI,
        s.gurwoodXI,
        s.omanVII,
        s.corsican,
      ],
    },
    {
      slug: "a-short-leash",
      title: "A short leash: subordinates he did not trust",
      part: "People",
      themes: ["organisation", "communication"],
      claim:
        "When a leader keeps close control over subordinates of uneven ability, errors of initiative become rarer, but only while the leader is there to decide, and subordinates who are given orders without reasons cannot act well when events outrun the orders.",
      inBrief: {
        strength:
          "Detailed orders and personal supervision kept an uneven set of generals from wrecking his campaigns.",
        shadow:
          "Generals who did not know his reasons waited in the mud or stood still, and on the eve of Waterloo his second in command did not know his plans.",
      },
      moment: {
        text: "On 18 November 1812, during the retreat from Burgos, three of Wellington’s divisional generals looked at the route he had ordered for them, which took their columns over fords in flooded fields, and judged it hopeless. Oman writes that they consulted together and turned off towards a bridge, which they found blocked by the Spanish army of Galicia. Wellington, not finding them on the road he had prescribed, rode out to look for them and came upon them waiting miserably in the mud. He is said, in the story Oman takes from Napier, to have given them no more rebuke than a sarcastic remark that he knew his own business best, and to have let them cross after the Spaniards, many hours late. Oman calls their insubordination inexcusable. He adds that it would not have been beneath Wellington’s dignity to have explained in the order that the main road was kept for the Spanish divisions, but that this was not his style: he was not prone to give subordinates his reasons, even when his orders looked inexplicable to them.",
        evidence: "fact",
        refs: [{ source: 3, locator: "pp. 151–152" }],
      },
      episodes: [
        {
          title: "Obey, and wait",
          text: "The habit was there from the start of his Peninsular command. On 13 August 1809, a fortnight after Talavera, he wrote a memorandum about an officer whose name Gurwood’s edition leaves blank, who had given orders on his own authority about depots, marches and troops from Lisbon. The orders of the day before, Wellington wrote, contained a detailed plan for the defence of Portugal, founded on the supposition that each corps would be where it had been ordered, with provisions waiting for it. Now all of that was in doubt. The officer would see how important it was to obey strictly the orders he received, ‘and having obeyed them, that he should patiently wait for further orders’. He could not suppose that he was forgotten, or that headquarters had overlooked what he had taken upon himself to arrange; and he had involved himself in a very serious responsibility.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 36–37" }],
          battleSlugs: ["talavera-1809"],
        },
        {
          title: "The Coa, July 1810",
          text: "Not every subordinate was held so close. General Craufurd, commanding the Light Division on the frontier, received suggestions rather than orders. On 22 July 1810, as Oman quotes the note, Wellington wrote that he was not desirous of an affair beyond the river Coa, and asked whether it would not be better to bring the infantry across it. Oman reads the tentative form as a mark of the confidence Wellington placed in Craufurd’s judgement, and says that this time it was misplaced: Craufurd stayed two more days outside Almeida with the river and its single bridge behind him, and on the 24th Ney’s whole corps attacked him. The division fought its way back across the bridge with heavy loss. Wellington’s dispatch to Lord Liverpool said that it had been desirable to keep open the communication with Almeida, but not intended to risk an affair or any loss for it, and that the enemy had approached too near before the retreat was made. It named no one and praised the regiments. To his relative Pole, Oman writes, he was franker: he had positively forbidden such affairs, and would not accuse a man who had meant well, if he was to be hanged for it, because the error was one of judgement, not of intention.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "pp. 258–259, 266" },
            { source: 1, locator: "pp. 279–280" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "Vitoria: the column that waited",
          text: "At Vitoria on 21 June 1813 Wellington gave the column that was to cross the middle of the river Zadorra to Lord Dalhousie, who outranked the experienced Picton. Oman calls it an extraordinary choice: Dalhousie had been only a few months in the Peninsula and had no experience of the higher responsibilities. His orders told him to regulate his movements by what was happening on his right and to move when it became evidently necessary to help the columns there. With two of his brigades held up on a mountain road, he used that discretion to wait for formal orders. Picton, an eyewitness recalled, rode up and down asking every aide-de-camp for orders and saying that Lord Wellington must have forgotten them. When an aide arrived with orders for Dalhousie instead, Picton told him that the 3rd Division would take the bridge in front of him in ten minutes, and led it across without waiting. Oman notes that neither Wellington’s nor Dalhousie’s dispatch hints at disapproval: complete success justified it.",
          evidence: "fact",
          refs: [{ source: 3, locator: "pp. 408–411" }],
          battleSlugs: ["vitoria-1813"],
        },
        {
          title: "The plans no one else knew",
          text: "Sir William Fraser, in his Words on Wellington, tells a story of 17 June 1815 without saying where he heard it. Lord Uxbridge, commanding the cavalry and next in line to command if Wellington fell, told one of his brigadiers that he had no idea of the Duke’s plans and dared not ask. With the Spanish general Álava as go-between he went to Wellington, who heard him out and asked who would attack first the next day, he or Bonaparte. Bonaparte, said Uxbridge. Then, said Wellington, since Bonaparte had not told him his plans, and his own depended on them, how could Uxbridge expect him to say what his were? He ended by touching Uxbridge on the shoulder and saying that whatever happened, they would both do their duty. Fraser thinks the Duke’s careful mind must surely have provided for the case of his death, and repeats a rumour heard years before that a commission was found on Picton’s body. He gives no evidence for either.",
          evidence: "fact",
          refs: [{ source: 5, locator: "pp. 1–3" }],
          battleSlugs: ["waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s memorandum of 13 August 1809",
          stake:
            "A rebuke written to protect a plan that depended on everyone being where they were ordered; Gurwood printed it with the officer’s name left out.",
          says: "Obey orders strictly, and having obeyed them, wait patiently for more.",
          refs: [{ source: 0, locator: "pp. 36–37" }],
        },
        {
          who: "Wellington to William Pole, July 1810, as Oman quotes it",
          stake:
            "A private letter to a relative, written while the public dispatch shielded the officer concerned.",
          says: "He had forbidden Craufurd’s affairs, but would not accuse a man whose error was of judgement, not intention.",
          refs: [{ source: 2, locator: "p. 266" }],
        },
        {
          who: "Charles Oman",
          stake:
            "The British historian of the war, admiring of Wellington and of Craufurd, writing from both armies’ papers.",
          says: "Wellington seldom gave his reasons; his generals’ disobedience in the retreat was inexcusable, but an explanation would have prevented it.",
          refs: [{ source: 3, locator: "p. 152" }],
        },
        {
          who: "Sir William Fraser",
          stake:
            "A Victorian collector of Wellington anecdotes, writing long after the Duke’s death, without naming his informant.",
          says: "On the eve of Waterloo Wellington refused to tell Uxbridge his plans.",
          refs: [{ source: 5, locator: "pp. 1–2" }],
        },
      ],
      strategist: [
        {
          text: "These cases are not a simple story of control against trust. Where Wellington held his generals close, as in 1809 and in the retreat of 1812, the trouble came from orders given without reasons: the officers could not tell which parts of the order mattered, so they either did nothing unbidden or improvised in the wrong direction. Where he trusted, as with Craufurd, the trouble came from the opposite side, a capable subordinate reading tentative advice as permission. What would have helped in both cases was the same thing, the intent behind the order. The Napoleon volume’s lesson on delegating the fight argues that delegation works when subordinates know that intent; this lesson shows a commander who could manage without sharing it most of the time, because he was nearly always there.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 36–37" },
            { source: 3, locator: "p. 152" },
            { source: 2, locator: "pp. 258–259" },
          ],
        },
        {
          text: "Judged by what he knew, close control was a reasonable answer to the generals he had. Dalhousie and the other newcomers had little experience, and the army’s rules of seniority gave them commands over men who had more. But the method had a limit he could not avoid: it made the army depend on his presence. At Vitoria the column he had given to the wrong man was saved by a subordinate who disobeyed the letter of his orders. In 1815, if Fraser’s story is true, the officer who would have succeeded him did not know his plan. A system that works because one man is everywhere fails at the one moment he is not.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "pp. 408–411" },
            { source: 5, locator: "pp. 1–3" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Wellington’s reluctance to explain himself invites readings of temperament, secrecy or distrust, and the documents cannot decide between them. His answer to Uxbridge, if Fraser reports it accurately, gives a practical reason: his plans depended on the enemy’s. No research on delegation or on the effect of explained orders was read for this lesson, and it offers no mechanism.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Statements about why he withheld his reasons are interpretations by Oman and Fraser, not his own.",
        },
      ],
      shadow: {
        text: "Generals who are told only what to do learn to wait to be told. In 1809 Wellington had warned an officer that he could not suppose he was forgotten; at Vitoria Picton said exactly that, that Lord Wellington must have forgotten them. Blame followed the same line. In the letter of November 1812 explaining Burgos to Lord Liverpool, Wellington put the failure of the first escalade on the field officer who led it, who had paid no attention to orders read and explained to him twice and had fallen with many of his men; Gurwood printed the letter with the officer’s name left blank. The choice of inexperienced troops was Wellington’s, by his own admission in the same letter, and so, in Oman’s judgement, was the lack of guns.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "p. 36" },
          { source: 3, locator: "p. 410" },
          { source: 4, locator: "p. 566" },
        ],
        battleSlugs: ["vitoria-1813", "burgos-1812"],
      },
      counterCase: {
        text: "Blücher’s headquarters in 1813–1815 worked the other way. Hans Haussherr, in the Neue Deutsche Biographie, writes that Blücher used to choose the boldest of the plans his chief of staff Gneisenau worked out for him and take responsibility for carrying it out, and that the shares of the commander and the chief of staff in the operations can never be clearly separated. The arrangement was tested at Ligny on 16 June 1815, when Blücher fell under his horse. Hermann Teske writes that Gneisenau, standing in for the injured Blücher, gave the order to retreat northwards on Wavre, acting, according to more recent research, entirely in Blücher’s sense. The Napoleon volume reads that partnership in its lesson on delegation. Here it is the contrast: a headquarters in which a second man knew the plan because he had largely made it could act when its commander fell, as Wellington’s, if Fraser is right, could not have done the next day.",
        evidence: "interpretation",
        refs: [{ source: 7 }, { source: 6 }],
        commanderSlug: "gebhard-leberecht-von-blucher",
        battleSlugs: ["ligny"],
      },
      cost: {
        text: "Wellington’s dispatch on the Coa reports that the Light Division suffered considerable loss, and names Lieutenant-Colonel Hull, one of its commanding officers, among the dead. In the retreat from Burgos, the days around the generals’ detour, Oman writes, many men dropped to the rear and died of fatigue and hunger.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "p. 280" },
          { source: 3, locator: "p. 151" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Subordinates are new or uneven, and the leader can be present at the points that matter.",
          "Orders carry their reasons, so that a subordinate who meets the unexpected knows what the order was for.",
        ],
        failsWhen: [
          "The leader is absent, injured or killed, and no one else knows the plan.",
          "Subordinates learn that initiative will be rebuked and failure blamed on them, and stop offering either.",
        ],
        questions: [
          "If you were unavailable tomorrow, who would know what your current plan is for?",
          "Which of your instructions would make sense to someone who did not know your reasons?",
          "When a subordinate last disobeyed you and was right, what did you say about it?",
        ],
      },
      bearsOn:
        "Close control is caution applied to people. It protected the army from generals Wellington did not trust and made his own judgement the army’s judgement, which is part of why his campaigns could be both careful and sudden: no subordinate committed him to a fight he had not chosen. The price was a command that worked only while he was there, and officers who seldom learned his reasons. Caution here bought safety from subordinates’ mistakes at the cost of their initiative.",
      questions: [
        {
          prompt:
            "What did Wellington’s memorandum of 13 August 1809 require of the officer who had acted on his own?",
          choices: [
            "To use his own judgement when orders seemed wrong.",
            "To obey strictly the orders he received, and then wait patiently for further orders.",
            "To report directly to the government in London.",
          ],
          answer: 1,
          explanation:
            "The plan for the defence of Portugal depended on every corps being where it had been ordered.",
        },
        {
          prompt:
            "How did Wellington report the combat on the Coa to Lord Liverpool?",
          choices: [
            "He blamed Craufurd by name.",
            "He said no affair had been intended, that the enemy came too near before the retreat, and praised the regiments without naming anyone at fault.",
            "He did not report it.",
          ],
          answer: 1,
          explanation:
            "Privately, as Oman quotes him, he said he had forbidden such affairs but would not accuse a man whose error was one of judgement.",
        },
        {
          prompt:
            "Why, in Oman’s view, did three divisional generals leave their ordered route in November 1812?",
          choices: [
            "They had been bribed by the French.",
            "They judged the route over flooded fords hopeless, and Wellington had not told them the main road was kept for the Spanish.",
            "They were following Spanish orders.",
          ],
          answer: 1,
          explanation:
            "Oman calls the disobedience inexcusable, but notes that Wellington seldom gave his reasons.",
        },
      ],
      sourceCheck: {
        question: "Who was to blame for the combat on the Coa on 24 July 1810?",
        witnesses: [
          {
            label: "Wellington’s dispatch to Liverpool, 25 July",
            claim:
              "No affair was intended; the enemy came too near before the retreat across the river. Names no one at fault.",
          },
          {
            label: "Wellington to Pole, as Oman quotes it",
            claim:
              "He had positively forbidden such affairs, but would not accuse Craufurd, whose error was one of judgement.",
          },
          {
            label: "Oman, 1908",
            claim:
              "Wellington’s advice was tentative, a mark of his confidence; Craufurd misused it, and Wellington was justly displeased.",
          },
        ],
        prompt: "What do the three together show?",
        options: [
          {
            text: "That the dispatch is false and should be ignored.",
            feedback:
              "It says nothing untrue; it leaves out the blame, which is a choice about what to report, not a falsehood.",
          },
          {
            text: "That Wellington blamed Craufurd in private and protected him in public, and that his own tentative advice was part of the story.",
            feedback:
              "Public report and private letter differ in purpose, and Oman shows that the form of the order mattered too.",
            best: true,
          },
          {
            text: "That Craufurd was wholly to blame, since he disobeyed a clear order.",
            feedback:
              "Oman stresses that the note of 22 July was a suggestion rather than an order.",
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington seldom gave his subordinates his reasons. Argue for and against that habit from three positions: Wellington, a divisional general such as Dalhousie, and a capable subordinate such as Craufurd or Picton.",
        guidance:
          "Use the memorandum of 1809, the Coa, the generals in the mud in 1812 and Vitoria. Then set Blücher and Gneisenau beside them, and ask what each system would have done if its commander had fallen.",
      },
      sources: [
        s.gurwoodV,
        s.gurwoodVI,
        s.omanIII,
        s.omanVI,
        s.gurwoodIX,
        s.fraser,
        s.ndbGneisenau,
        s.ndbBlucher,
      ],
    },
    {
      slug: "the-scum-of-the-earth",
      title: "The scum of the earth: contempt and care",
      part: "People",
      themes: ["motivation", "ethics"],
      claim:
        "When a leader despises followers in words and still looks after them in practice, the care may keep them fighting, but the words are part of the record of how they were treated, and expectations held by those who command them may shape what they become.",
      inBrief: {
        strength:
          "He fed, carried and doctored his army with close attention, and said the whole business depended on the private soldier.",
        shadow:
          "He called his soldiers the scum of the earth, kept flogging in reserve, and blamed their plunder on a system too soft to restrain them.",
      },
      moment: {
        text: "On 2 July 1813, eleven days after Vitoria, Wellington sent Lord Bathurst a letter from the governor of Vitoria describing what British soldiers were doing in the neighbourhood. They were detachments sent back under officers the day after the battle to collect the wounded and their arms, and they were plundering. ‘It is quite impossible for me or any other man to command a British army under the existing system. We have in the service the scum of the earth as common soldiers; and of late years we have been doing every thing in our power, both by law and by publications, to relax the discipline by which alone such men can be kept in order.’ The officers of the lower ranks, he went on, would not do the duty needed to keep their men in order, and it was next to impossible to punish them; the non-commissioned officers were as bad as the men, and too near them in pay and situation. He had ordered a hospital set up on the march to receive the stragglers, and very few were in it: the others were plundering the country.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 495–496" }],
      },
      episodes: [
        {
          title: "The phrase, eighteen years later",
          text: "Philip Henry Stanhope heard the phrase again in November 1831, when he asked the Duke about the difference between British and French soldiers. The French conscription, Wellington said, brought together a fair sample of all classes; the British army was composed of the scum of the earth, the mere scum of the earth. ‘It is only wonderful that we should be able to make so much out of them afterwards.’ The English soldiers had all enlisted for drink; that was the plain fact. In another conversation that Stanhope noted the same year he repeated it at greater length: some men enlisted because they had fathered children outside marriage, some for minor offences, many more for drink, and it was wonderful that they had been made the fine fellows they were. In the same talk he spoke strongly, Stanhope writes, for keeping a strong military punishment in reserve, if only to give force to the milder ones. Stanhope thought he meant flogging.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 13–14, 18" }],
          battleSlugs: [],
          campaignSlugs: ["peninsular-war"],
        },
        {
          title: "Carts for the wounded",
          text: "Care shows in the letters as logistics. After Talavera, when General Cuesta left the town and the British hospital behind, Wellington reported that a large part of his wounded had been brought away and the rest could not be moved under any circumstances, or consistently with humanity. He expected the French to treat them well, because of the treatment some of his own wounded had received from them and because he had always taken care of theirs; he could only lament that events beyond his control had obliged him to leave any behind. A few days later he told the Marquis Wellesley that if the army had to move it would have to leave behind most of its little ammunition, because he had given all the Portuguese carts that carried it to move the wounded, and could find no other transport in the country.",
          evidence: "fact",
          refs: [{ source: 2, locator: "pp. 6–8, 36" }],
          battleSlugs: ["talavera-1809"],
        },
        {
          title: "‘That article’",
          text: "A few weeks before Waterloo, Thomas Creevey met Wellington walking in the park at Brussels and asked him what he thought he would make of the coming campaign. ‘By God! I think Blucher and myself can do the thing,’ Creevey reports him saying. He expected no desertions from Napoleon’s army and wanted no help from the French king’s troops. Then, seeing a British infantryman come into the park and gape at the statues, he pointed at him. ‘There, it all depends upon that article whether we do the business or not. Give me enough of it, and I am sure.’ A week or so later, Creevey adds, watching three Hanoverian regiments pass in review, he called them very good troops, or troops that would be so once he had good officers in them.",
          evidence: "fact",
          refs: [{ source: 3, locator: "vol. I, pp. 228–229" }],
          battleSlugs: ["waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Wellington to Bathurst, 2 July 1813",
          stake:
            "A letter to the Secretary of State arguing against the relaxing of military discipline, written in anger after the plunder that followed Vitoria.",
          says: "The common soldiers are the scum of the earth, and only discipline, which the law is weakening, can keep them in order.",
          refs: [{ source: 0, locator: "pp. 495–496" }],
        },
        {
          who: "Philip Henry Stanhope",
          stake:
            "A young friend writing down the Duke’s conversation in 1831, published long after both were dead.",
          says: "The Duke repeated the phrase, and added that it was wonderful what had been made of such men.",
          refs: [{ source: 1, locator: "pp. 13–14, 18" }],
        },
        {
          who: "Thomas Creevey",
          stake:
            "An English politician in Brussels, writing up a conversation of 1815 for his own record.",
          says: "Wellington said that the outcome depended on the private soldier.",
          refs: [{ source: 3, locator: "vol. I, p. 228" }],
        },
      ],
      strategist: [
        {
          text: "Read in context, the letter of 1813 is less a description of soldiers than an argument about a system. Its targets are the law and the press that were softening punishment, the junior officers who would not supervise their men, and the regulations that put sergeants too close to privates. Its occasion is plunder after a victory, by men sent to collect the wounded. The phrase that became famous is one clause in a minister’s brief. Stanhope’s versions of 1831 make the same argument in conversation and add what the letter leaves out: that the army had turned such recruits into fine soldiers, which is a claim about the officers and the system as much as about the men.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 495–496" },
            { source: 1, locator: "pp. 13–14, 18" },
          ],
        },
        {
          text: "The care has the same logic. The supply lesson read his view that a starving army plunders and loses its spirit, and the carts given to the wounded after Talavera, at the cost of most of his ammunition, show him paying for his men’s survival with his army’s fighting power. Neither the contempt nor the care was sentimental. Both treated the soldier as the instrument on which everything depended, ‘that article’ in Creevey’s report, to be kept fed, carried, supervised and, if need be, punished. Whether soldiers felt that care as care cannot be read from his letters; it would need their own memoirs, which this lesson has not read.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "pp. 8, 36" },
            { source: 3, locator: "vol. I, p. 228" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Expectation effects",
          base: "contested",
          text: "Research on expectation effects asks whether what leaders expect of people changes how they perform. McNatt’s meta-analysis of studies in management settings, read here in its abstract, found effects that could be fairly strong but varied widely, and were stronger in the military, among men, and for people of whom little was expected at first. Jussim and Harber’s review of classroom research, also read in its abstract, found such effects typically small, not accumulating over time, and found that expectations often predict outcomes because they are accurate rather than because they fulfil themselves. Wellington’s case fits neither neatly. His low expectations were stated in private, to ministers and friends, not to his soldiers; the people who might have carried them to the men were the officers, whom he also expected little of. The research suggests a question, what the officers expected of their men, that his letters do not answer.",
          evidence: "interpretation",
          refs: [{ source: 4 }, { source: 5 }],
          limit:
            "Abstracts only. The studies mostly test interventions that raise expectations, not contempt expressed in private, and the field disagrees about how large and lasting the effects are. Nothing here shows that Wellington’s words affected any soldier.",
        },
      ],
      shadow: {
        text: "The words are part of the record of how these men were treated, and the record is harsh. He argued for a strong punishment kept in reserve, which Stanhope took to mean flogging, called his soldiers the scum of the earth to a minister and to his friends, and blamed their plunder on the men, their officers and the law, never on any decision of his own. The lesson on the breach showed discipline breaking after every storm and retreat, and Wellington’s own letters putting the fault on regimental officers. Care and contempt existed side by side. The phrase has outlived both, usually without the letter it came from or Stanhope’s next sentence.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "pp. 495–496" },
          { source: 1, locator: "pp. 14, 18" },
        ],
        battleSlugs: ["vitoria-1813"],
      },
      counterCase: {
        text: "Napoleon spoke to his soldiers in the opposite register. The Napoleon volume’s lesson on recognition reads his proclamations, decorations and public praise; at Acre, in Johnston’s arrangement of his words, he ordered a medal in honour of Junot’s small force after its stand at Nazareth. Wellington was unimpressed. Asked by Stanhope whether British and French soldiers differed in how speeches and proclamations moved them, he said very little: the French proclamations were seen far more in the newspapers than by the soldiers, and were meant for Paris, and no speech could be heard by more than a small crowd. Giving an eagle was much the same as giving colours; one always said something then. The contrast is not that one leader valued soldiers and the other did not. Napoleon praised in public and spent his armies freely; Wellington disparaged in private and husbanded his. Neither the words nor the care alone tells the reader how soldiers were treated.",
        evidence: "interpretation",
        refs: [
          { source: 6, locator: "p. 96" },
          { source: 1, locator: "pp. 13–14" },
        ],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["acre"],
      },
      cost: {
        text: "After Talavera, Wellington reported, the wounded who could not be moved were left in the town when the Spanish army marched away, to be cared for by the French. After Vitoria, he wrote, the men who had left the ranks to plunder far outnumbered those who came into the hospital he set up for stragglers.",
        evidence: "fact",
        refs: [
          { source: 2, locator: "p. 8" },
          { source: 0, locator: "p. 496" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Care is practical and visible to the people it serves: food, transport, medical attention.",
          "The leader’s view of followers is stated where it cannot reach them, and the people who do command them expect more.",
        ],
        failsWhen: [
          "Contempt reaches the followers through their immediate superiors, or becomes the excuse for failures of the system.",
          "Care is offered only because it keeps the instrument working, and stops when it no longer does.",
        ],
        questions: [
          "What do you say about the people you lead when they cannot hear you, and who repeats it?",
          "Which of your failures have you blamed on the quality of your people rather than on the system they work in?",
          "What does your care for your people cost you, and when would you stop paying it?",
        ],
      },
      bearsOn:
        "Contempt and care were both forms of caution. He expected the worst of his soldiers, and so took no risks with their food, their discipline or their supervision; and because the army could not be replaced, he paid for its survival in carts and hospitals. The volume’s question gets a darker answer here. A commander who believed his men would plunder at the first chance built a system to restrain them, and the system failed at exactly the moments of victory when it was needed most.",
      questions: [
        {
          prompt:
            "What was the occasion of Wellington’s letter of 2 July 1813 calling his soldiers the scum of the earth?",
          choices: [
            "A mutiny in the Guards.",
            "Plunder by soldiers sent back after Vitoria to collect the wounded, and his argument that discipline was being relaxed by law and the press.",
            "A defeat in the Pyrenees.",
          ],
          answer: 1,
          explanation:
            "The phrase is one clause in an argument to the Secretary of State about the system of discipline.",
        },
        {
          prompt:
            "What did Wellington add to the phrase when Stanhope recorded it in 1831?",
          choices: [
            "That the men could never be made into soldiers.",
            "That it was wonderful the army had made such men into the fine fellows they were.",
            "That he regretted ever saying it.",
          ],
          answer: 1,
          explanation:
            "Stanhope records the phrase twice, each time with the claim that much had been made of the men.",
        },
        {
          prompt:
            "What did Wellington give up to move his wounded after Talavera?",
          choices: [
            "His cavalry horses.",
            "The Portuguese carts that carried his ammunition, so that most of it would have to be left if the army moved.",
            "His own headquarters baggage.",
          ],
          answer: 1,
          explanation:
            "He told the Marquis Wellesley so, adding that no other transport could be found in the country.",
        },
      ],
      sourceCheck: {
        question: "What did Wellington think of his soldiers?",
        witnesses: [
          {
            label: "To Bathurst, 2 July 1813",
            claim:
              "The scum of the earth, kept in order only by a discipline that the law and the press are weakening.",
          },
          {
            label: "Stanhope’s record, November 1831",
            claim:
              "The scum of the earth, enlisted for drink; and it is wonderful what has been made of them.",
          },
          {
            label: "Creevey’s record, Brussels 1815",
            claim:
              "Everything depends on the private soldier: give him enough of them and he is sure of success.",
          },
        ],
        prompt: "Which reading uses all three best?",
        options: [
          {
            text: "He despised them; the phrase settles it.",
            feedback:
              "The phrase is real, but both the letter and Stanhope’s record set it inside an argument about discipline and what training had made of the men.",
          },
          {
            text: "He admired them; Creevey shows his real view.",
            feedback:
              "Creevey records dependence and confidence, not admiration, and the other two witnesses are not cancelled by it.",
          },
          {
            text: "He thought poorly of the men who enlisted, depended entirely on what the army made of them, and believed only hard discipline held them; the witnesses agree more than the phrase suggests.",
            feedback:
              "Each source adds a part, and none of them is the soldiers’ own view, which needs other evidence.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Can a leader be judged by what they say about their followers in private, if what they do for them is good? Argue it from the position of Wellington, of a soldier who later read the letter of 1813, and of the people of the Spanish villages the stragglers plundered.",
        guidance:
          "Use the letter to Bathurst, Stanhope’s two records, the carts given to the wounded after Talavera and Creevey’s ‘that article’. Then bring in Napoleon’s opposite style, and the expectation research with its limits.",
      },
      sources: [
        s.gurwoodX,
        s.stanhope,
        s.gurwoodV,
        s.creevey,
        s.mcnatt,
        s.jussimHarber,
        s.corsican,
      ],
    },
    {
      slug: "allies-he-could-not-command",
      title: "Allies he could not command: coalition without authority",
      part: "People",
      themes: ["communication", "judgement"],
      people: ["august-von-gneisenau"],
      claim:
        "When a leader must fight beside allies he cannot command, cooperation depends less on promises than on what each side can see the other doing, and a grant of authority from an allied government is worth only as much as that government will honour.",
      inBrief: {
        strength:
          "He made the Portuguese army part of his own, and in 1815 the alliance with the Prussians held through a lost battle.",
        shadow:
          "He trusted Cuesta once and never again, blamed Spanish troops for failures that were partly his, and lost Castilian goodwill when he left Ciudad Rodrigo to fall.",
      },
      moment: {
        text: "On the evening of 3 August 1809, a week after Talavera, Wellington was marching west to meet a French corps coming down on his line of retreat when he learned that General Cuesta meant to leave Talavera that night with the Spanish army. Cuesta would leave behind the British hospital, except the men he could move with the means he had, because he feared the British were not strong enough for the French coming from Plasencia and that the enemy was on his own flank. Wellington wrote that these reasons did not seem sufficient for giving up so important a post, exposing both armies to attack front and rear, and abandoning his hospital; the letter arrived after Cuesta had marched. In a private letter to Lord Castlereagh he hoped his public dispatch would clear him of all blame in ministers’ eyes, ‘excepting that of having trusted the Spanish General in any thing’.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 6–8" }],
      },
      episodes: [
        {
          title: "An allied army inside his own",
          text: "The Portuguese army was the alliance he could shape. Oman writes that in the spring of 1810 Wellington brought five Portuguese brigades up to the frontier and placed two of them inside British divisions, a system he afterwards extended to nearly all the Portuguese units. At Bussaco that September, he told Lord Liverpool, the stand on the ridge had brought the Portuguese levies into action for the first time in an advantageous position, and they had proved worthy of fighting in the same ranks as British troops. The French offered the Portuguese another reading. Masséna’s proclamation, which Gurwood printed after Wellington’s own, told them that Britain risked nothing, used their battalions as a rampart as if their blood counted for nothing, and would abandon them when it suited her; had the British fired a single shot to help Ciudad Rodrigo? On the day he sent the Bussaco dispatch, Wellington told Charles Stuart that if the Portuguese troops had to be embarked, they must go in the same kind of ships as the British army, and in nothing less.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "p. 243" },
            { source: 1, locator: "pp. 309–311, 449, 451–452" },
          ],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "Command on conditions",
          text: "In 1812 the Spanish government and Cortes gave Wellington the command of the Spanish armies. On 25 December, at Cadiz, he told the Minister of War, Don J. de Carvajal, that he could not do the duties it imposed without powers, and that if the government would not trust him with them he would give the command up. He named four: promotions and appointments to command only on his recommendation; the power to dismiss officers; the application of the state’s military resources as he recommended; and a chief of staff at his headquarters through whom all reports and orders would pass. Whatever they decided, he added, he would go on helping whoever commanded the Spanish forces. The engagements were made and, he wrote six months later, broken. On 2 July 1813 he protested to Juan O’Donojú, who had sent him the Regency’s decisions, that the Regency had recalled General Castaños and removed General Girón without trial or cause, in breach of the engagements that alone had induced him to accept the command; this was not the first time, and he felt himself most unworthily treated, even as a gentleman.",
          evidence: "fact",
          refs: [{ source: 2, locator: "pp. 1–4, 492–494" }],
          battleSlugs: ["vitoria-1813"],
        },
        {
          title: "1815: an alliance that held after a defeat",
          text: "In 1815 the two allied armies in Belgium answered to different commanders. Haussherr writes that Blücher accepted battle at Ligny on 16 June trusting in Wellington’s promised support, and was beaten. Creevey learned in Brussels the next night that communication between the two armies had been cut and that Wellington had fallen back. What decided the next day was a choice made in the Prussian headquarters. Teske writes that Gneisenau, standing in for the injured Blücher, ordered the retreat northwards on Wavre, not back towards Prussia’s own communications. Hardinge, a British officer who had lost an arm at Ligny and lay that night in Blücher’s anteroom, told Stanhope in 1837 that he had heard there was a great argument, in which Blücher and Grolmann carried the day for keeping in touch with the British, while Gneisenau doubted, fearing that if the British were beaten the Prussians would be destroyed. Wellington, for his part, told Stanhope that his first act on the 17th was to send an officer with cavalry to find out what had become of the Prussians. The Waterloo study and the Napoleon volume read the battle that followed.",
          evidence: "fact",
          refs: [
            { source: 7 },
            { source: 4, locator: "vol. I, p. 231" },
            { source: 6 },
            { source: 5, locator: "pp. 109–110" },
          ],
          battleSlugs: ["ligny", "waterloo"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s letters to ministers and allies",
          stake:
            "Written by a commander justifying a withdrawal, demanding powers or protesting a breach, to readers who could check some of it.",
          says: "Allies he could not command failed him, and an allied command was worth having only with the powers to exercise it.",
          refs: [
            { source: 0, locator: "pp. 6–8" },
            { source: 2, locator: "pp. 1–4, 492–494" },
          ],
        },
        {
          who: "Marshal Masséna’s proclamation to the Portuguese, 1810",
          stake:
            "Enemy propaganda, printed by Gurwood in its original French beside Wellington’s proclamation.",
          says: "Britain risks nothing, shelters behind Portuguese battalions and will abandon them.",
          refs: [{ source: 1, locator: "pp. 309–311" }],
        },
        {
          who: "Hardinge, as Stanhope records him in 1837",
          stake:
            "A British officer wounded at Ligny and lying at Prussian headquarters that night, recalling twenty-two years later what he had been told there.",
          says: "Blücher and Grolmann overruled Gneisenau’s doubts and kept the Prussian army in touch with the British.",
          refs: [{ source: 5, locator: "pp. 109–110" }],
        },
        {
          who: "Hermann Teske, Neue Deutsche Biographie",
          stake:
            "A German historian writing Gneisenau’s entry in the national biography in 1964.",
          says: "Gneisenau gave the order to retreat on Wavre, acting entirely in Blücher’s sense.",
          refs: [{ source: 6 }],
        },
      ],
      strategist: [
        {
          text: "The record suggests a rule of thumb that Wellington followed without stating it: rely on what you can see and shape. Cuesta’s army he could neither see into nor direct, and after Talavera he refused to operate with it again. The Portuguese army he could train, inspect and place inside his own divisions, and he came to rely on it. The Spanish armies he accepted to command only with the powers to appoint, dismiss and pay; when the Regency removed generals behind his back, his protest was about exactly that loss of sight and control. The judgement about Cuesta should be held with care. His reasons for leaving Talavera reach us only through Wellington’s letter, and they were not absurd: a French corps was on the British line of retreat.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 6–8" },
            { source: 3, locator: "p. 243" },
            { source: 2, locator: "pp. 1–4" },
          ],
        },
        {
          text: "In 1815 the alliance held for the opposite reason: neither commander could see the other, and both acted to restore contact. Wellington sent cavalry to find the Prussians; the Prussian headquarters chose a line of retreat that kept them within reach of the British. The accounts of who in that headquarters made the choice differ, Hardinge giving the credit to Blücher and Grolmann over Gneisenau’s doubts, Teske to Gneisenau acting in Blücher’s spirit, and neither was written by someone in the room for the whole night. What they agree on is the decision. The comparison page sets this beside the coalitions of the other volumes, under the problem of allies and coalitions.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "pp. 109–110" },
            { source: 6 },
            { source: 7 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Coalitions invite explanations from research on trust, on in-groups and out-groups, and on cooperation without enforcement. None was read for this lesson. The documents show behaviour that needs no mechanism to describe: commitments made in writing, broken or kept, and armies sending officers to find out what their allies were doing.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Statements about what Wellington or his allies felt are drawn from their own letters and from recorders with interests of their own.",
        },
      ],
      shadow: {
        text: "Wellington’s letters are hard on his allies and easy on himself. In August 1809 he wrote of the constant and shameful misbehaviour of the Spanish troops; the earlier lesson on the only army showed him leaving Ciudad Rodrigo to fall in 1810, and on 25 July of that year he told Liverpool that the people of Castile were not satisfied with the British nation because no effort had been made to raise the siege, and had stopped sending intelligence. Masséna’s proclamation to the Portuguese turned the same fact into propaganda. No Spanish account of Talavera, of Cuesta or of the command of 1812–1813 was read for this lesson, so the Spanish side of these quarrels appears only in Wellington’s summaries of it, and in a French enemy’s.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "p. 80" },
          { source: 1, locator: "pp. 282, 310–311" },
        ],
        battleSlugs: ["talavera-1809", "bussaco-torres-vedras-1810"],
      },
      counterCase: {
        text: "Schwarzenberg held the formal command Wellington lacked at Talavera and lost in Spain. The Fondation Napoléon writes that he was named commander-in-chief of the allied armies in 1813, and that the number of troops and generals and their frequent inability to work together made his task extremely difficult; his tactics stayed cautious, and he wore Napoleon down before meeting him at Leipzig. The 1911 Britannica adds that critics called him timid beside the fiery Blücher, and answers that his army was nearly all the force Austria could put into the field, so that his caution served Vienna’s policy as much as any strategy. That was the charge Masséna made against Britain in 1810: an ally whose caution protected its own army at its partners’ expense. A coalition commander’s caution is always open to that reading, whether he holds the title of command or not.",
        evidence: "interpretation",
        refs: [{ source: 8 }, { source: 9 }],
        commanderSlug: "karl-philipp-schwarzenberg",
        battleSlugs: ["leipzig"],
      },
      cost: {
        text: "When Cuesta left Talavera, the British wounded who could not be moved were left in the town for the French. At Ligny, Haussherr writes, Blücher himself fell under his horse in the defeat that preceded Waterloo.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 6–8" }, { source: 7 }],
      },
      transfer: {
        holdsWhen: [
          "Each partner can see what the other is doing, and takes the trouble to find out when it cannot.",
          "Authority granted by an ally comes with powers set down in writing, and the leader is ready to give it up if they are withdrawn.",
        ],
        failsWhen: [
          "One partner’s caution protects its own resources at the others’ expense, and they can see it.",
          "The record of the partnership is kept by one side only, and its failures are always the other side’s.",
        ],
        questions: [
          "Which of your partners can you actually see at work, and which do you know only from their promises?",
          "What powers would you need before accepting responsibility for someone else’s people?",
          "How would your partners tell the story of your last joint failure?",
        ],
      },
      bearsOn:
        "Caution towards allies was the hardest kind to tell from bad faith. Refusing to fight beside Cuesta again, leaving Ciudad Rodrigo, demanding powers before commanding the Spanish: each was defensible, and each looked to the people on the other side like Britain protecting its one army at their expense, as Masséna said aloud. Where he could see and shape an ally, as with the Portuguese, his caution became investment. In 1815, when two allied commanders could not see each other, the bold choice was made by the Prussians, and it was the one that made Waterloo possible.",
      questions: [
        {
          prompt:
            "What did Wellington say, in his private letter to Castlereagh, was the only thing he could be blamed for after Talavera?",
          choices: [
            "Fighting the battle at all.",
            "Having trusted the Spanish general in anything.",
            "Leaving his own wounded behind on purpose.",
          ],
          answer: 1,
          explanation:
            "Cuesta had left Talavera and the British hospital on his own judgement.",
        },
        {
          prompt:
            "What did Wellington require before keeping the command of the Spanish armies in December 1812?",
          choices: [
            "A Spanish title and estates.",
            "Powers over promotions and dismissals, the use of military resources, and a chief of staff through whom all reports passed.",
            "The right to choose Spain’s Regency.",
          ],
          answer: 1,
          explanation:
            "His letter to Carvajal lists four conditions and offers to resign the command if they are refused.",
        },
        {
          prompt:
            "What did Masséna’s proclamation of 1810 tell the Portuguese about their British allies?",
          choices: [
            "That the British would fight to the last man for Portugal.",
            "That Britain risked nothing, sheltered behind Portuguese battalions and would abandon them when it suited her.",
            "That the British had already left.",
          ],
          answer: 1,
          explanation:
            "Gurwood printed it after Wellington’s proclamation; it cites Ciudad Rodrigo as proof.",
        },
      ],
      sourceCheck: {
        question:
          "Who decided that the Prussian army would retreat towards Wavre after Ligny?",
        witnesses: [
          {
            label: "Hermann Teske, Neue Deutsche Biographie",
            claim:
              "Gneisenau gave the order, standing in for the injured Blücher, and acted in Blücher’s sense.",
          },
          {
            label: "Hardinge, as Stanhope records him in 1837",
            claim:
              "There was a great argument that night; Blücher and Grolmann carried the day for keeping in touch with the British, against Gneisenau’s doubts.",
          },
          {
            label: "Hans Haussherr, Neue Deutsche Biographie",
            claim:
              "Gneisenau gave the famous order not to retreat towards the Rhine, and so Blücher could intervene at Waterloo in time.",
          },
        ],
        prompt: "How should a reader handle the disagreement?",
        options: [
          {
            text: "Prefer Hardinge, because he was there.",
            feedback:
              "He was in the anteroom, wounded, and says he was told of the argument; he recalled it twenty-two years later to a third person.",
          },
          {
            text: "Prefer the German historians, because they had the archives.",
            feedback:
              "Teske himself rests on more recent research, and none of the three accounts was written by someone present at the whole discussion.",
          },
          {
            text: "Separate the order, which all agree Gneisenau issued towards Wavre, from the argument behind it, on which the witnesses differ.",
            feedback:
              "The decision is secure; who argued for it and how hard is not, and the lesson should say so.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington refused to operate with Cuesta after Talavera, integrated the Portuguese into his army, and demanded powers before commanding the Spanish. Argue whether this was sound coalition practice or a habit of trusting only what he controlled.",
        guidance:
          "Use the letters on Talavera, the Bussaco dispatch and the letter to Stuart on the Portuguese, the letters to Carvajal and O’Donojú, and Masséna’s proclamation as the enemy’s reading. Then set 1815 and Schwarzenberg beside them.",
      },
      sources: [
        s.gurwoodV,
        s.gurwoodVI,
        s.gurwoodX,
        s.omanIII,
        s.creevey,
        s.stanhope,
        s.ndbGneisenau,
        s.ndbBlucher,
        s.fondationSchwarzenberg,
        s.eb1911Schwarzenberg,
      ],
    },
    {
      slug: "the-government-at-home",
      title: "The government at home: managing those who can recall you",
      part: "Beyond the battlefield",
      themes: ["communication", "judgement"],
      claim:
        "When a commander far from home depends on a government that can recall him, he wins time by controlling what is reported and how, but only while his reports stay accurate enough to be trusted, and the control he needs can turn into a claim that no one else may speak.",
      inBrief: {
        strength:
          "Considered reports, one channel of news and plain answers kept ministers and the Portuguese regency behind a strategy they half doubted.",
        shadow:
          "He disowned the details of a convention he had signed, and demanded that his own report be the only one published.",
      },
      moment: {
        text: "On 11 September 1810, at Gouveia, with Masséna’s army about to march into Portugal, Wellington wrote to Charles Stuart, who dealt with the Portuguese government at Lisbon, about reports. The Portuguese government had been publishing Marshal Beresford’s daily accounts of events beside his own, and the Portuguese papers were canvassing small differences between them, which the English papers would copy with all the comment malevolence could suggest. A daily report, he wrote, could never be as accurate as one written after events had been considered and inquired into. If he had written to Stuart the day before, he would have said that a large French column had marched on Guarda; he now knew it had been a reconnaissance that had already fallen back. ‘There is no harm in Government being informed of these events as they come to our knowledge; but where is the use of keeping the public in a state of fever by the publication of them?’ It came to this: if the Portuguese government published any report of military transactions except his, he would make them no report.",
        evidence: "fact",
        refs: [{ source: 1, locator: "pp. 401–403" }],
      },
      episodes: [
        {
          title: "Cintra: answering for a paper he signed",
          text: "His first lesson in this came in 1808. After his victory at Vimeiro, two senior generals arrived and superseded him within a day, and an armistice and then a convention allowed the defeated French to evacuate Portugal. Newspaper attacks at home were followed by a Court of Inquiry at Chelsea in November. Wellington opened by complaining that newspapers had printed accounts claiming his authority; he had never said, nor let anyone say, that he was ordered or compelled to sign the armistice. He had signed it at the desire of the commander-in-chief, from his wish always to carry out the orders of those placed over him however he differed from them, and he had agreed with its principle, that the French should be allowed to evacuate Portugal, while differing on its details. He submitted his dispatches as the record of his motives at the time. The Board declared that zeal and firmness had been shown by all three generals and that no further military proceeding was necessary. The King accepted that, while disapproving the articles that touched the interests of the Spanish and Portuguese nations. Gurwood printed only the parts of the proceedings in which Wellington spoke.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 163–168, 253–257" }],
          battleSlugs: [],
          campaignSlugs: ["peninsular-war"],
        },
        {
          title: "News for the enemy",
          text: "In the summer of 1810 he found that the French were reading the English newspapers. On 3 July he sent Lord Liverpool a translation of an intercepted letter from Berthier to Masséna giving the strength of the allied armies, taken from the English press, and asked the government again to notice how intelligence of this kind was published at home: very recently every paper had given not only the numbers but the positions of his army. In August he told General Graham at Cadiz about orders he had issued that day on officers’ private letters. He had been astonished to read in the English papers an exact account of the batteries being built at Cadiz, with their guns and distances, which must have come from an officer’s letter. If officers wished to give their friends such information, he wrote, they should ask them not to publish it.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 232–233, 324–325" }],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "Croakers and governors",
          text: "The letter of 11 September went on to the army itself. For the first time, Wellington wrote, he lacked the confidence of his officers: whether from the opposition in England, or because the business was too much for their nerves, or because he was wrong and they were right, there was a system of croaking in the army that would put an end to them unless he put an end to it. Officers of high rank should keep their opinions to themselves or leave the army. If anyone else, knowing what he knew, had commanded, the army would already be at Lisbon, if not in its ships. The Portuguese regency, he added, would end by forcing him to leave them, and would then find that he alone kept things as they were. Fernando Dores Costa, writing from the Portuguese side, reads the long quarrel with the regency, and especially with Principal Sousa, as a struggle over Wellington’s demand for political tutelage over Portugal, to remove the obstacles to his military choices.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 403–404" }, { source: 3 }],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
      ],
      witnesses: [
        {
          who: "Wellington before the Court of Inquiry, 1808",
          stake:
            "A young general defending his part in an unpopular convention before a board of senior officers, with his career at stake.",
          says: "He signed at his superior’s desire, agreed with the principle and differed on the details, and never claimed to have been forced.",
          refs: [{ source: 0, locator: "pp. 167–168" }],
        },
        {
          who: "Wellington to Charles Stuart, 11 September 1810",
          stake:
            "A private letter to the British minister who dealt with the Portuguese regency, written on the eve of the invasion.",
          says: "Considered reports are better than daily ones; only his should be published; his officers’ croaking must stop.",
          refs: [{ source: 1, locator: "pp. 401–404" }],
        },
        {
          who: "Fernando Dores Costa",
          stake:
            "A Portuguese historian writing in 2010, reading the campaign through the regency’s quarrels with Wellington.",
          says: "The conflict with Principal Sousa expressed a demand for political tutelage over Portugal.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "Wellington’s method with those who could recall him is consistent across these letters. Report late rather than early, so that what is reported is true. Send the same account to every authority, so that no difference between reports can be exploited. Keep information that helps the enemy out of the papers. Answer charges in person and on the record, as at Chelsea, with the documents written at the time. Each rule served the arithmetic of the earlier lessons: a government that panicked at a false report might recall the one army it had, and a public in a fever would push it to. The method also bought him the time the Lines needed. The strategist should judge it by what it was for, and it worked: through the winter of 1810 the army stayed, and the government held.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "pp. 232–233, 401–404" },
            { source: 0, locator: "pp. 167–168" },
          ],
        },
        {
          text: "The same rules could protect the commander as well as the army. The Chelsea statement separates his agreement with the principle of the convention from his disagreement with its details, which is true and also convenient. The demand that only his report be published removes a check on him as well as a source of confusion. Dores Costa’s reading, that the quarrel with the regency was about tutelage, makes the point from the other side: a foreign commander who insists on being the sole voice in an allied country is asking for a kind of authority that country has not given him. Which reading is right depends on whose risk one counts.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 167–168" },
            { source: 1, locator: "p. 403" },
            { source: 3 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Accountability to several audiences",
          base: "review",
          text: "The lesson on the only army used Lerner and Tetlock’s review to ask how the rules of accountability shaped Wellington’s caution. This lesson takes up another of the questions the abstract names: what goals accountable decision makers seek to achieve. Wellington answered to several audiences at once, ministers, the Portuguese regency, the British public through its newspapers, his own officers, and he worked to reduce them to one channel he controlled. The review’s question whether accountability changes how people think or only what they say fits his distinction between a report for the government and a report for the public. It cannot say which goal ruled him at any moment, the army’s safety or his own standing.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
          limit:
            "Abstract only, from laboratory and organisational research. It frames questions about audiences and goals; it does not explain any decision of Wellington’s.",
        },
      ],
      shadow: {
        text: "Control of the record shades into control of judgement. Wellington’s officers had a right, he conceded, to form their own opinions; he wanted the senior ones silent or gone. The Portuguese government, whose country was being emptied on his advice, was to publish nothing military but his reports. The convention of 1808, whose principle he defended, contained articles that his own King found offensive to the Spanish and Portuguese, and the inquiry heard from British generals only. Earlier lessons in this volume showed the same habit after failure: the letter on Burgos took the blame in one sentence and spread it in the next.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "pp. 403–404" },
          { source: 0, locator: "pp. 256–257" },
        ],
      },
      counterCase: {
        text: "Masséna in front of the Lines shows a commander cut off from the authority that could recall him. Oman writes that from September to the end of 1810 not a single dispatch reached him, and his own messengers were caught by the Portuguese Ordenança and militia, except Foy, who forced his way out with a whole battalion as escort. Foy saw Napoleon in Paris in late November; the orders that followed were not sent until December. Oman’s judgement is that the Emperor insisted on directing all his armies in Spain from Paris, on information a month old, with orders that arrived a month later still, and afterwards lectured Soult on what he should have done. Masséna’s problem was the reverse of Wellington’s. He had no channel to manage, and his master acted on reports that were already history.",
        evidence: "interpretation",
        refs: [{ source: 2, locator: "pp. 9–10, 26–28" }],
        commanderSlug: "andre-massena",
        battleSlugs: ["bussaco-torres-vedras-1810"],
      },
      cost: {
        text: "The King’s decision of January 1809 records his disapproval of the articles of the convention that made stipulations directly affecting the interests and feelings of the Spanish and Portuguese nations; neither nation had a voice at the inquiry. In 1810, by his own account, the newspapers at home had printed the numbers and positions of his army where the French could read them.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "p. 256" },
          { source: 1, locator: "pp. 232–233" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Reports are written late enough to be accurate, and the same account goes to everyone entitled to it.",
          "The leader answers criticism on the record, with documents written at the time.",
        ],
        failsWhen: [
          "Control of the channel becomes a way to silence disagreement, inside the organisation or among partners.",
          "Those affected by a decision are absent from the inquiry into it.",
        ],
        questions: [
          "Do your first reports of events turn out to be right, and who acts on them before you know?",
          "Is there one account of your work that every stakeholder receives, or several that can be compared?",
          "When you ask for a single channel, are you protecting the work or yourself?",
        ],
      },
      bearsOn:
        "Caution in reporting was the political side of caution in the field. A government that received considered reports and a public kept out of a fever were less likely to recall the army, and that bought the time on which his strategy depended. The daring lay in staking his career on a plan most of his officers doubted, and saying so. The cost was a habit of making his voice the only one, which his officers, his Portuguese allies and later historians had reason to resist.",
      questions: [
        {
          prompt:
            "Why did Wellington object in 1810 to the Portuguese government publishing Beresford’s daily reports?",
          choices: [
            "Because Beresford’s reports were false.",
            "Because daily reports were less accurate than considered ones, and differences between two accounts would be exploited by the newspapers.",
            "Because he wanted the credit for every action.",
          ],
          answer: 1,
          explanation:
            "His letter to Stuart of 11 September gives the example of a French column on Guarda that proved to be a reconnaissance.",
        },
        {
          prompt:
            "What did Wellington tell the Court of Inquiry in 1808 about the armistice he had signed?",
          choices: [
            "That he had been ordered to sign it against his will.",
            "That he signed at his superior’s desire, agreed with its principle and differed on details, and had never claimed to be compelled.",
            "That he had not signed it.",
          ],
          answer: 1,
          explanation:
            "His opening address answers newspaper stories that claimed his authority.",
        },
        {
          prompt:
            "What, according to Oman, was wrong with how Napoleon directed Masséna in the winter of 1810?",
          choices: [
            "He gave Masséna too much freedom.",
            "He directed the war in Spain from Paris on information a month old, with orders that arrived a month later.",
            "He visited the army too often.",
          ],
          answer: 1,
          explanation:
            "Foy’s journey to Paris and back shows the delay; no dispatch had reached Masséna for months.",
        },
      ],
      sourceCheck: {
        question:
          "Why did Wellington want his own reports to be the only ones published in Portugal?",
        witnesses: [
          {
            label: "Wellington to Stuart, 11 September 1810",
            claim:
              "Considered reports are accurate and daily ones are not; differences between accounts feed the newspapers and the public’s fever.",
          },
          {
            label: "The same letter, later",
            claim:
              "His officers’ croaking must stop, and the regency would find that he alone kept things as they were.",
          },
          {
            label: "Fernando Dores Costa, 2010",
            claim:
              "The quarrel with the regency expressed a demand for political tutelage over Portugal.",
          },
        ],
        prompt: "Which reading uses all three?",
        options: [
          {
            text: "It was only about accuracy, as his first reason says.",
            feedback:
              "The same letter moves from accuracy to silencing critics and to his own indispensability.",
          },
          {
            text: "It was only about power, as the Portuguese historian argues.",
            feedback:
              "The example of the Guarda column is real; his worry about accuracy cannot simply be dismissed.",
          },
          {
            text: "Both: a sound rule about reporting and a claim to be the only voice, which a Portuguese reader sees more clearly than a British one.",
            feedback:
              "The letter contains both, and the historian from the other side shows what the second meant for the ally.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Wellington asked that only his reports be published, that his senior officers keep their doubts to themselves, and that he be judged on documents written at the time. Was this good management of those who could recall him, or a refusal to be checked? Argue it from the positions of Wellington, a doubting officer, and the Portuguese regency.",
        guidance:
          "Use the Chelsea statement, the letters on newspapers, the letter of 11 September 1810 and Dores Costa’s reading. Then set Masséna beside him, a commander whose government heard nothing for months.",
      },
      sources: [
        s.gurwoodIVnew,
        s.gurwoodVI,
        s.omanIV,
        s.doresCosta,
        s.lernerTetlock,
      ],
    },
    {
      slug: "the-empty-country",
      title: "The empty country: who pays for a strategy",
      part: "Beyond the battlefield",
      themes: ["ethics", "judgement"],
      claim:
        "When a strategy works by emptying a country in front of the enemy, it can be right and its cost still unjust, because the people who pay are rarely the people who decide, and a strategy judged only by those who decided it will leave the payment out.",
      inBrief: {
        strength:
          "Emptying the country before the Lines starved the French army out of Portugal without a decisive battle.",
        shadow:
          "The people of Beira and Estremadura were ordered from their homes under threat of hanging, and paid in hunger, disease and the violence of both armies.",
      },
      moment: {
        text: "At two in the afternoon of 4 August 1810, at Celorico, Wellington wrote a note of three lines to Sir Stapleton Cotton, commanding his cavalry: ‘Send round to the people that they must retire from the villages, and let the magistrates know that if any of them stay, or if any of the inhabitants have any communication with the enemy, they shall be hanged.’ On the same day he signed a proclamation to the people of Portugal, which Gurwood printed in English with a note that it was a translation, not the original draft. It declared that magistrates and persons in authority who stayed in their towns and villages after a military officer had ordered them to leave, and anyone who aided the enemy in any way, would be considered traitors to the state and tried and punished as such. Days later he told Cotton that the people of one village might stay or not as they pleased, but that any man who communicated with the enemy would be hanged.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 303, 308–309, 330" }],
      },
      episodes: [
        {
          title: "Coimbra",
          text: "Coimbra was a university city, and Oman writes that the sacrifice demanded of its citizens was far more bitter than that asked of peasants with flimsy cottages. The Portuguese government had published the proclamations but taken no great pains to enforce them, and after Bussaco most of the inhabitants were still at home, hoping the victory meant they could stay. Then came Wellington’s message that the army was falling back, that the French would arrive within days, and that force would be used if necessary to expel those who stayed. For two days the population streamed south on the roads or down the river to take ship for Lisbon, carrying what they could, since the richer families had taken most of the carts and others had been requisitioned for the allied wounded. The Portuguese historian Maria Antónia Lopes, interviewed in 2021, says the French found the city deserted, evacuated by Wellesley’s order, and sacked it for three days; only the university partly escaped.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 400–402" }, { source: 4 }],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "What an empty country does to its people",
          text: "The order was not fully obeyed. Oman writes that the Portuguese government had told the peasants to destroy all food they could not carry, but that most could not bring themselves to burn good grain, and hid it instead. The French, starving before the Lines, became food-hunters. Oman draws on French diarists for what followed: villages pulled down in the search for hiding places, peasants who had stayed hunted at night and offered the choice between revealing their stores and being shot, torture by hanging when threats failed, and, in one officer’s diary, village girls carried off and sold. Masséna and his generals forbade it and executed some offenders, without effect, since officers who depended on their men’s foraging did not ask how the food was found. Lopes adds that the French officers’ memoirs she knows pass over killings, torture and rape that happened on a mass scale, and that the allied soldiers plundered too: whatever escaped the enemy, as one witness from Arganil put it, our own troops cleaned up.",
          evidence: "fact",
          refs: [{ source: 2, locator: "pp. 10–13" }, { source: 4 }],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
        {
          title: "The Portuguese side of the decision",
          text: "Fernando Dores Costa begins his study of 1810 by judging the end of that year and the start of the next, measured by the direct effects of war on the population, as certainly the most dramatic period in Portuguese history. Part of the population of the invaded regions moved to Lisbon, and disease, he writes, killed more of the desperate inhabitants than the armies did. The devastation was contested inside the Portuguese government. Two of the governors, Principal Sousa above all, opposed the destruction of every resource that might sustain the enemy, and Wellington held that their position justified the failure to carry out his orders and was the only reason the French had been able to stay so long. From Rio de Janeiro, the Count of Linhares, defending his brother Sousa, wrote that no good Portuguese could see without horror a plan that had almost annihilated the two greatest provinces of the kingdom, Beira and Estremadura.",
          evidence: "fact",
          refs: [{ source: 3 }],
          battleSlugs: ["bussaco-torres-vedras-1810"],
        },
      ],
      witnesses: [
        {
          who: "Wellington’s order and proclamation of 4 August 1810",
          stake:
            "The commander’s instructions, one private and blunt, one public and printed in translation by Gurwood.",
          says: "The people must leave; those who stay or help the enemy will be hanged, or tried as traitors.",
          refs: [{ source: 0, locator: "pp. 303, 308–309" }],
        },
        {
          who: "Charles Oman, from French diarists",
          stake:
            "The British historian of the war, using French witnesses for French crimes and British ones for the evacuation.",
          says: "Coimbra was emptied by threat; the peasants hid their food; French foragers hunted and tortured them.",
          refs: [
            { source: 1, locator: "pp. 400–402" },
            { source: 2, locator: "pp. 10–13" },
          ],
        },
        {
          who: "Fernando Dores Costa",
          stake:
            "A Portuguese historian reading the campaign through the regency and its quarrels with Wellington.",
          says: "It was the most dramatic period in Portuguese history for civilians, and the regency was divided over the devastation.",
          refs: [{ source: 3 }],
        },
        {
          who: "Maria Antónia Lopes, interviewed in 2021",
          stake:
            "A Portuguese historian of the invasions, speaking to a national newspaper from local and church records.",
          says: "Never again did the Portuguese population suffer so; the scorched earth was ordered by the English, and both armies plundered.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "Judged as strategy, the devastation worked. The lessons on preparation and supply showed Masséna halted before the Lines and starved out of them, and Oman, on the French side, shows how close to collapse his army came. Wellington’s own complaint, that the regency’s reluctance let the French stay months longer than he expected, is an argument that more devastation would have ended it sooner. Dores Costa grants that Wellington’s tactical choice proved a success, while calling the Lines the illustration of his supposed genius. A strategist can also note what Wellington could know: he ordered the evacuation knowing it would fall on people who had not chosen it, and he expected the French to be starved out within weeks, which Oman shows was wrong by about two months.",
          evidence: "interpretation",
          refs: [{ source: 2, locator: "pp. 10–13" }, { source: 3 }],
        },
        {
          text: "The decision was taken by a British general and accepted, with reluctance and division, by a regency in Lisbon. It was paid for in Beira and Estremadura by people who were offered a choice between leaving everything and being hanged as traitors, and who then met an army hunting their hidden food and an allied army that plundered what was left. A strategy can be correct and its distribution of costs unjust, and the two judgements are separate. The comparison page’s problem ‘Who pays’ sets this case beside the others in the series.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 303, 308–309" },
            { source: 3 },
            { source: 4 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "It would be possible to read Wellington’s note to Cotton through research on distance, abstraction or moral disengagement, and no such research was read for this lesson. The note itself is evidence enough of how the decision looked from headquarters: three lines, an afternoon hour, and a threat of hanging. What it felt like in the villages is recorded by Portuguese historians from petitions, church records and local witnesses, not by psychology.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Nothing in the documents tells us what Wellington felt in giving the order.",
        },
      ],
      shadow: {
        text: "The cost to Wellington’s reputation was small, and the cost to Portugal was not. British tradition remembers the Lines as a feat of engineering and patience; Lopes says the scale of the tragedy in central Portugal has not been properly emphasised by historians, and Dores Costa calls Wellington’s genius supposed. Even Wellington’s complaint against the regency treats Portuguese reluctance to destroy their own food as an obstacle. Until this lesson the volume, like its main sources, told the story of 1810 from British and French papers; the Portuguese accounts read here are modern, and the voices of the peasants themselves reach it only through what those historians report.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 3 }],
        battleSlugs: ["bussaco-torres-vedras-1810"],
      },
      counterCase: {
        text: "Kutuzov met Napoleon’s invasion of Russia in 1812 with a scorched country of his own. The Fondation Napoléon’s biography says that after taking command in late August he executed the scorched-earth retreat policy and abandoned Moscow; its timeline records the Russians destroying depots and burning magazines as they fell back, while Kutuzov himself could be supplied at Tarutino from the fertile lands to the south. The supply lesson read that campaign as a failure of French supply. Here the point is what the sources read leave out: they say nothing about what the policy cost Russian peasants. That silence is the same one this lesson set out to correct for Portugal, and it is a reminder that a scorched-earth strategy is usually recorded by those who ordered it and those who suffered from it as an army, not by those who lived on the ground.",
        evidence: "interpretation",
        refs: [{ source: 5 }, { source: 6 }],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino"],
      },
      cost: {
        text: "Oman notes that the authorities of Coimbra published in 1812 a table of the damage done by the French army in 1810–1811, recording for each rural deanery of the bishopric the houses burned and the people killed. Dores Costa writes that disease, more than the armies, killed the inhabitants of the invaded regions who had fled in desperation.",
        evidence: "fact",
        refs: [{ source: 1, locator: "p. 398" }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "The strategy is judged on its results and, separately, on who bore its costs and whether they had any say.",
          "Those who will pay are told the truth about what is asked of them, and the cost is recorded rather than left out of the account.",
        ],
        failsWhen: [
          "The cost falls on people who cannot refuse, under threat, and is treated as an obstacle when they resist.",
          "The story of success is told only by those who decided it.",
        ],
        questions: [
          "Who will bear the cost of your next strategic decision, and were they asked?",
          "When those who pay resist, do you treat it as information or as obstruction?",
          "Whose account of your last success has never been heard?",
        ],
      },
      bearsOn:
        "This is the darkest answer to the volume’s question. Caution as arithmetic preserved the British army by spending Portugal: the country was emptied so that the army would not have to fight a battle it might lose. If that was daring, the daring was Wellington’s and the risk was the Portuguese peasants’. A complete answer to whether caution can be a form of daring must ask whose caution and whose risk, and the ledger that follows begins from that.",
      questions: [
        {
          prompt:
            "What did Wellington’s note to Cotton of 4 August 1810 threaten?",
          choices: [
            "Fines for villages that did not supply the army.",
            "Hanging for magistrates who stayed, or for inhabitants who communicated with the enemy.",
            "Conscription into the militia.",
          ],
          answer: 1,
          explanation:
            "The proclamation of the same day threatened trial as traitors; days later he allowed one village to stay, but kept the threat for contact with the enemy.",
        },
        {
          prompt:
            "Why, according to Oman, were the French able to stay so long before the Lines?",
          choices: [
            "Because the British supplied them by mistake.",
            "Because many peasants hid their food instead of destroying it, and French foragers found it by searching and by force.",
            "Because Napoleon sent them a large convoy.",
          ],
          answer: 1,
          explanation:
            "Oman, drawing on French diarists, describes the search and the violence that came with it.",
        },
        {
          prompt:
            "Who in the Portuguese government opposed the destruction of resources in 1810?",
          choices: [
            "No one; the regency was unanimous.",
            "Two of the governors, above all Principal Sousa, according to Dores Costa.",
            "Marshal Beresford.",
          ],
          answer: 1,
          explanation:
            "Wellington blamed their opposition for the length of the French stay; Sousa’s brother called the plan a near annihilation of Beira and Estremadura.",
        },
      ],
      sourceCheck: {
        question:
          "Who was responsible for the suffering of central Portugal in 1810–1811?",
        witnesses: [
          {
            label: "Wellington, 1810",
            claim:
              "The regency’s failure to enforce the destruction of food let the French stay; the enemy wantonly destroyed what they took.",
          },
          {
            label: "Oman, from French diarists",
            claim:
              "French foragers hunted, tortured and killed peasants for hidden food, despite their commanders’ orders.",
          },
          {
            label: "Maria Antónia Lopes, 2021",
            claim:
              "The scorched earth was ordered by the English; the French committed mass atrocities; the allied troops plundered too.",
          },
        ],
        prompt: "Which reading is best supported?",
        options: [
          {
            text: "The French alone, since they committed the atrocities.",
            feedback:
              "They did, by their own diarists’ account; but the evacuation and the destruction of food were ordered by the allies, and allied soldiers plundered.",
          },
          {
            text: "Wellington alone, since he ordered the devastation.",
            feedback:
              "He ordered the evacuation; he did not order the French to torture peasants, and the regency shared the decision.",
          },
          {
            text: "Responsibility was shared and unequal: the French for their crimes, Wellington and the regency for a strategy that put the population in their path, both armies for plunder.",
            feedback:
              "Each witness sees part of it, and the Portuguese historian is the only one who puts all three together.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Can a strategy be right and its cost unjust? Argue it from the positions of Wellington, Principal Sousa in the regency, and a family from Coimbra on the road to Lisbon in October 1810.",
        guidance:
          "Use the note to Cotton and the proclamation, Oman on Coimbra and on the French foragers, Dores Costa on the regency and Lopes on the population. Then set Kutuzov beside them, and ask why his sources say nothing about Russian peasants.",
      },
      sources: [
        s.gurwoodVI,
        s.omanIII,
        s.omanIV,
        s.doresCosta,
        s.lopes,
        s.fondationKutuzov,
        s.fondationRussia,
      ],
    },
    {
      slug: "the-ledger",
      title: "The ledger: can caution be a form of daring?",
      part: "Beyond the battlefield",
      themes: ["judgement", "ethics"],
      claim:
        "When a leader’s career is weighed whole, caution can prove to have been a form of daring if it kept open the chance to strike and was used when the chance came, but the account is complete only if it includes who paid for the caution and for the strikes.",
      inBrief: {
        strength:
          "Caution as arithmetic and method, preparation that made sudden attacks possible, and a war won without losing the one army.",
        shadow:
          "An empire extended in India, a Portuguese population and Spanish towns that paid, soldiers held by the lash, and a victory at Waterloo shared with the Prussians.",
      },
      moment: {
        text: "On 15 November 1852, as Wellington’s funeral was being prepared, Lord Hardinge wrote to John Wilson Croker that he had chosen twenty-four of the Duke’s most celebrated victories to be inscribed in bronze letters on the car that would carry his body, three on each of its eight panels. The car, he wrote, was of bronze, of beautiful workmanship, and, like his fame, would endure for ever. On the same page of Croker’s papers stands the Duke’s own last statement of his method, written that year in reply to Croker: his common practice in a defensive position was to attack the enemy at the very moment the enemy was about to attack. One ledger was being cast in bronze, a list of victories chosen by a friend; the other was a sentence from a man defending his record. This lesson tries to keep a third, with the costs entered beside the victories.",
        evidence: "fact",
        refs: [{ source: 7, locator: "pp. 282–283" }],
      },
      episodes: [
        {
          title: "The empire in the account",
          text: "His career as a commander began in India, in a war whose object, the Maratha historian Govind Sakharam Sardesai wrote in 1948, was to destroy the sovereign power of the Marathas. Sardesai’s account of 1803 is not the British one. He notes that Arthur Wellesley told Colonel Close, at the Peshwa’s court, that an accurate knowledge of the Peshwa’s court could not be had without paying for it; that the European officer commanding Sindia’s fort at Ahmadnagar had been bribed and went over; and that the Peshwa’s flag was hoisted on the captured fort, concealing a foreign conquest. The Marathas, he writes, gave a creditable account of themselves, and Assaye was won at a cost so great that pursuit was impossible. He also credits the general with sound advice: Wellesley urged the Peshwa to pardon and conciliation rather than revenge, and did what he could between a hopeless prince and an imperious brother. The 1911 Britannica, writing in the voice of the empire, praises his good faith and his judgement of Orientals.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 409–421" }, { source: 1 }],
          battleSlugs: ["assaye-1803"],
        },
        {
          title: "A shared victory",
          text: "Waterloo was not his alone, and he knew it. Creevey records him saying the morning after that the battle would not have been won had he not been there, and then explaining why he left that remark out of his letter home: it was not vanity, he thought, but meant that the fight was so equal that only the army’s confidence in its general had carried it through. The Prussian account gives the other half. Hans Haussherr writes that Blücher, beaten at Ligny, was able to intervene at Waterloo in time and contributed decisively to the final victory by his attack on the French right. The Napoleon volume and the Waterloo study read the day itself. For the ledger, it is enough that the most famous victory on the bronze car was won by two armies, and that each nation’s memory has tended to enlarge its own share.",
          evidence: "fact",
          refs: [{ source: 2, locator: "vol. I, p. 237" }, { source: 3 }],
          battleSlugs: ["waterloo", "ligny"],
        },
        {
          title: "What he left",
          text: "The 1911 Britannica’s verdict on the man is cooler than its verdict on the general. He disciplined his army and won it victories, it says, but he was cold and punctilious and never won the affection of officers and men as Marlborough and Napoleon had; he inspired few disciples outside his own staff, and his harsh condemnation of the army’s conduct in the retreat from Burgos was bitterly resented. Of all generals, it adds, he was the last to waste a single trained man. The legend grew anyway. Four years after his death the French writer Montalembert had him exclaim, on a visit to Eton in old age, that Waterloo had been won there; the first lesson of this volume showed that the story has no witness and no date. The ledger of his reputation was written largely by others, as he had foreseen when he compared the history of a battle to the history of a ball.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 4, locator: "p. 145" }],
          battleSlugs: [],
          campaignSlugs: ["peninsular-war"],
        },
      ],
      witnesses: [
        {
          who: "Govind Sakharam Sardesai",
          stake:
            "A Maratha historian writing in 1948, after the end of British rule, on the fall of the Maratha states.",
          says: "The war of 1803 was meant to destroy Maratha sovereignty; Wellesley used bribes and advised conciliation.",
          refs: [{ source: 0, locator: "pp. 409–421" }],
        },
        {
          who: "The 1911 Encyclopædia Britannica",
          stake:
            "An imperial reference work, admiring of the general and frank about the man.",
          says: "Cold, punctilious, careful of every trained man, with few disciples; wise and honourable in India.",
          refs: [{ source: 1 }],
        },
        {
          who: "Maximilien Foy, as Oman translates his diary",
          stake:
            "A French general writing after Salamanca, in the army Wellington had just beaten.",
          says: "Salamanca raised Wellington almost to the level of Marlborough.",
          refs: [{ source: 5, locator: "pp. 472–473" }],
        },
        {
          who: "Wellington to Croker, 1852",
          stake:
            "An old man’s account of his own method, written in the last year of his life.",
          says: "His common practice in a defensive position was to attack at the moment the enemy was about to attack.",
          refs: [{ source: 7, locator: "p. 283" }],
        },
      ],
      strategist: [
        {
          text: "The volume set four answers to its question. Caution as arithmetic is the best supported: the letters of 1809 and 1810 reason in objects, means and risks, and the army that could not be replaced was never lost. Caution as method is close behind: the Lines, the hidden ridge, the supply by sea and the drafted retreat at Salamanca made sudden attacks possible and affordable. Caution as reputation is real but narrower than the legend: Marmont and Foy believed it, and Salamanca exploited it, but the evidence read here rests mainly on one afternoon. Caution as temperament is the weakest: Assaye, Badajoz and Burgos show a commander quite willing to attack against expectation, and to pay heavily for time. The verdict this volume reaches is that his caution was a calculation, and that it was a form of daring when the calculation kept the means to strike and he used them, as at Salamanca, and only a form of waiting when it did not, as before the Lines in November 1810.",
          evidence: "interpretation",
          refs: [
            { source: 7, locator: "p. 283" },
            { source: 5, locator: "pp. 472–473" },
          ],
        },
        {
          text: "The reader should argue the opposite. Every success in this volume can be told as luck in his enemies: Marmont overextended, Masséna waited, the Portuguese proved willing to be trained as Cuesta’s army had not been his to train, and the Prussians came at Waterloo. A commander whose method depended on enemies making mistakes was cautious in the ordinary sense, and lucky. The volume’s own evidence cuts both ways: the drafted retreat at Salamanca shows he was ready if Marmont made no mistake, and the refusal before the Lines shows him waiting past an opening. Which reading one prefers depends on whether one credits the preparation that made the luck usable, or the luck that made the preparation pay.",
          evidence: "interpretation",
          refs: [{ source: 3 }, { source: 2, locator: "vol. I, p. 237" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "A closing lesson invites a verdict on character, and this one declines it. The volume has used research where it could ask a fair question, on accountability and on expectations, and has said each time what that research could not show. Whether Wellington was by temperament cautious or bold is not a question psychology can answer about a man dead for over a century and a half; the documents show what he did and what he said about it, and those are what the ledger weighs.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. The verdicts in this lesson are historical and strategic judgements, not psychological ones.",
        },
      ],
      shadow: {
        text: "Enter the costs beside the victories, and the ledger changes. The Maratha states lost their independence in a war he helped win with bribes as well as battles. The people of Beira and Estremadura were emptied from their homes on his orders and paid in hunger, disease and the violence of two armies. Badajoz and San Sebastián were sacked by his soldiers. His men were held to discipline by the lash, called the scum of the earth, and blamed for the plunder his system could not stop. Waterloo was shared. None of this cancels the strategy, and none of it was on the bronze car.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "pp. 409–411" }, { source: 8 }],
        battleSlugs: ["assaye-1803", "badajoz-1812"],
      },
      counterCase: {
        text: "Marlborough, the earlier British coalition commander to whom Foy compared Wellington, offers the contrast the comparison invites. The National Army Museum writes that he commanded an allied army to which the Dutch supplied the largest share and most of the supplies, and that his cooperation with allies, above all Prince Eugene, was central to his success. He was not cautious: some contemporaries thought him reckless, and at Blenheim he attacked outnumbered against a strong position. He was always concerned for his soldiers’ welfare, it says, and won their trust; a corporal wrote in 1708 that his attention and care was over all of them. And he was dismissed in 1711 when a new government wanted peace. Both men led coalitions and depended on politics at home. The 1911 Britannica’s judgement that Wellington never won the affection Marlborough did marks the difference: Marlborough’s daring was open and his care was felt; Wellington’s daring was hidden inside his caution, and his care was given without warmth.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 5, locator: "p. 472" }, { source: 1 }],
        commanderSlug: "john-churchill",
        battleSlugs: [],
      },
      cost: {
        text: "Sardesai writes that Assaye was won at so great a cost in men that the British could not pursue. Dores Costa judges the winter of 1810–1811, for the people of central Portugal, the most dramatic period in their country’s history.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 410–411" }, { source: 8 }],
      },
      transfer: {
        holdsWhen: [
          "Caution is a calculation that keeps the means to act, and the leader uses them when the opening comes.",
          "The account of the leader’s record includes those who paid, and is not written only by friends.",
        ],
        failsWhen: [
          "Caution becomes waiting for luck, and preparation becomes a reason not to act.",
          "The ledger lists victories and leaves out costs, as monuments do.",
        ],
        questions: [
          "Which of your cautious decisions kept an option open that you later used, and which only postponed a choice?",
          "If you wrote your own ledger, whose costs would you be tempted to leave out?",
          "Who will choose the victories inscribed on your record, and who will be missing from it?",
        ],
      },
      bearsOn:
        "Can caution be a form of daring? On the evidence of this volume: yes, when caution was arithmetic that kept the one army in being and method that prepared the ground for a sudden blow, and when he struck, as at Salamanca and Assaye. No, when it was waiting for an enemy’s mistake that did not come, as before the Lines. And always at a price paid by others: Portuguese peasants, Spanish townspeople, Maratha states, his own soldiers. The reader who disagrees should start from the luck in his enemies and the shared victory at Waterloo, and argue that the caution was ordinary and the daring belonged to others.",
      questions: [
        {
          prompt:
            "According to Sardesai, what was the object of the war of 1803 in which Wellesley fought at Assaye?",
          choices: [
            "To defend the Peshwa against the French.",
            "To destroy the sovereign power of the Marathas.",
            "To open trade with Persia.",
          ],
          answer: 1,
          explanation:
            "He also notes Wellesley’s use of bribes for intelligence and his advice to the Peshwa to conciliate rather than take revenge.",
        },
        {
          prompt:
            "What did the 1911 Britannica say Wellington lacked that Marlborough and Napoleon had?",
          choices: [
            "Skill in sieges.",
            "The affection of his officers and men.",
            "Political influence at home.",
          ],
          answer: 1,
          explanation:
            "It calls him cold and punctilious, with few disciples outside his own staff, and the last of generals to waste a trained man.",
        },
        {
          prompt:
            "Which of the volume’s four answers is least supported by the evidence read?",
          choices: [
            "Caution as arithmetic.",
            "Caution as method.",
            "Caution as temperament.",
          ],
          answer: 2,
          explanation:
            "Assaye, Badajoz and Burgos show him willing to attack against expectation and to pay heavily for time.",
        },
      ],
      sourceCheck: {
        question: "Who won the battle of Waterloo?",
        witnesses: [
          {
            label: "Wellington, as Creevey records him",
            claim:
              "It would not have been won had he not been there, which Creevey took to mean the army’s confidence in him carried it through.",
          },
          {
            label: "Hans Haussherr, Neue Deutsche Biographie",
            claim:
              "Blücher intervened in time and contributed decisively to the final victory by his attack on the French right.",
          },
          {
            label: "Lord Hardinge’s choice for the funeral car, 1852",
            claim:
              "Waterloo among the twenty-four victories of the Duke, inscribed in bronze.",
          },
        ],
        prompt: "How should the ledger record it?",
        options: [
          {
            text: "As Wellington’s victory, as the bronze car does.",
            feedback:
              "The car is a monument chosen by a friend, not a witness; and Wellington himself spoke of how close it was.",
          },
          {
            text: "As a Prussian victory, since Blücher’s attack was decisive.",
            feedback:
              "Haussherr says decisive contribution, not sole cause; the allied army had held all day.",
          },
          {
            text: "As a shared victory, each nation’s account enlarging its own part, with Wellington’s remark read as Creevey explains it.",
            feedback:
              "The witnesses agree on more than they seem to, once the monument is set aside.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Write the opposite verdict to this volume’s: that Wellington’s caution was ordinary prudence, that his successes came from his enemies’ mistakes and his allies’ efforts, and that the daring belonged to others. Then answer it.",
        guidance:
          "Use Salamanca, the Lines, Badajoz and Waterloo from the earlier lessons, Sardesai on India, and the costs entered in the lesson on the empty country. Set Marlborough beside him, and decide what a fair ledger of either man must include.",
      },
      sources: [
        s.sardesai,
        s.eb1911Wellington,
        s.creevey,
        s.ndbBlucher,
        s.montalembert,
        s.omanV,
        s.namMarlborough,
        s.croker,
        s.doresCosta,
      ],
    },
  ],
};
