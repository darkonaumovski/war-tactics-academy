import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 5, written in reviewed batches (batch V1, the pilot, is lessons 0,
// the record, 2, preparation, and 4, Salamanca);
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
      slug: "the-afternoon-at-salamanca",
      title: "The afternoon at Salamanca: striking when the enemy errs",
      part: "Caution and daring",
      themes: ["judgement", "adaptation"],
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
  ],
  inProgress:
    "This volume is being written. Its pilot lessons are published, and the rest are added in reviewed batches.",
};
