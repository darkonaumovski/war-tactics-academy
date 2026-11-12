import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 4, a shared volume, written in reviewed batches (W1 is the pilot);
// docs/LEADERSHIP_EVIDENCE_WESTERN_FRONT.md records which sources can carry
// each lesson, and docs/SOURCE_AUDIT.md how each was read. The despatches and
// Foch's memoir were read as full texts from the Internet Archive; page
// locators follow the printed pages of those editions.
const britannica = "Encyclopaedia Britannica";
const nam = "National Army Museum, London";
const s = {
  despatches: {
    title:
      "Sir Douglas Haig’s Despatches (December 1915–April 1919), ed. J. H. Boraston, with an introduction by Marshal Foch (1919)",
    url: "https://archive.org/details/sirdouglashaigsd00haiguoft",
    publisher:
      "J. M. Dent and Sons (Internet Archive, University of Toronto copy)",
  },
  fochMemoirs: {
    title: "The Memoirs of Marshal Foch, trans. T. Bentley Mott (1931)",
    url: "https://archive.org/details/in.ernet.dli.2015.66355",
    publisher: "Heinemann (Internet Archive, Digital Library of India copy)",
  },
  britHaig: {
    title: "Douglas Haig, 1st Earl Haig",
    url: "https://www.britannica.com/biography/Douglas-Haig-1st-Earl-Haig",
    publisher: britannica,
  },
  britFoch: {
    title: "Ferdinand Foch (Charles-André Laffargue)",
    url: "https://www.britannica.com/biography/Ferdinand-Foch",
    publisher: britannica,
  },
  britPetain: {
    title: "Philippe Pétain (Georges Blond)",
    url: "https://www.britannica.com/biography/Philippe-Petain",
    publisher: britannica,
  },
  britLudendorff: {
    title: "Erich Ludendorff (Walter Görlitz)",
    url: "https://www.britannica.com/biography/Erich-Ludendorff",
    publisher: britannica,
  },
  britSomme: {
    title: "First Battle of the Somme",
    url: "https://www.britannica.com/event/First-Battle-of-the-Somme",
    publisher: britannica,
  },
  britPasschendaele: {
    title: "Battle of Passchendaele (R. H. Roy and Richard Foot)",
    url: "https://www.britannica.com/event/Battle-of-Passchendaele",
    publisher: britannica,
  },
  britEast1916: {
    title: "World War I: The Eastern Front, 1916 (Dennis E. Showalter)",
    url: "https://www.britannica.com/event/World-War-I/The-Eastern-Front-1916",
    publisher: britannica,
  },
  namHaig: {
    title: "Douglas Haig: The chief",
    url: "https://www.nam.ac.uk/explore/douglas-haig",
    publisher: nam,
  },
  namSomme: {
    title: "Battle of the Somme",
    url: "https://www.nam.ac.uk/explore/battle-somme",
    publisher: nam,
  },
  philpott: {
    title:
      "William Philpott, Beyond the ‘Learning Curve’: The British Army’s Military Transformation in the First World War (10 November 2009)",
    url: "https://rusi.org/explore-our-research/publications/commentary/beyond-learning-curve-british-armys-military-transformation-first-world-war",
    publisher: "Royal United Services Institute",
  },
  baronHershey: {
    title:
      "Jonathan Baron and John C. Hershey, Outcome bias in decision evaluation (1988), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/3367280/",
    publisher: "Journal of Personality and Social Psychology",
  },
  morrison: {
    title:
      "Elizabeth Wolfe Morrison, Employee voice and silence (2014), abstract",
    url: "https://doi.org/10.1146/annurev-orgpsych-031413-091328",
    publisher:
      "Annual Review of Organizational Psychology and Organizational Behavior",
  },
  garretsen: {
    title:
      "Harry Garretsen, Janka I. Stoker, Dimitrios Soudis and Hein Wendt, The pandemic that shocked managers across the world: the impact of the COVID-19 crisis on leadership behavior (2022), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/35719269/",
    publisher: "The Leadership Quarterly",
  },
} satisfies Record<string, Source>;

export const westernFrontVolume: LeadershipVolume = {
  commanderSlug: "douglas-haig",
  alsoCommanderSlugs: ["ferdinand-foch"],
  title: "Leadership Lessons from Foch and Haig: the Western Front, 1914–1918",
  summary:
    "What a person who leads others can take from Douglas Haig and Ferdinand Foch on the Western Front, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "For four years the armies on the Western Front attacked fortified lines with no flanks to turn. Douglas Haig commanded the British armies in France from December 1915 to the end. Ferdinand Foch commanded French armies and army groups, was removed after the Somme, and in 1918 was given the task of coordinating the Allied armies, then their strategic direction. The British army that attacked on the Somme in 1916 was not the army that broke the German lines in 1918, and historians still argue about how much of the change was learning, who did the learning, and whether its price could have been lower. Each lesson tests one claim about leading people against that record. One record cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did the generals learn, and was the learning worth its price?",
  parts: [
    "Orientation",
    "Learning under fire, 1914–1916",
    "The cost of persistence, 1917",
    "Sharing command, 1918",
    "Ending and accounting",
  ],
  lessons: [
    {
      slug: "how-to-read-the-western-front",
      title: "Despatches, donkeys and the price of victory",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When the leaders of a costly war write its official account after the outcome is known, a lesson drawn from it is worth only as much as the plans made before the event and the witnesses who wrote against it.",
      inBrief: {
        strength:
          "A coherent public account: despatches that explained every battle as a stage of one victory.",
        shadow:
          "Edited, cut and justified after the event, it made every loss look necessary, and the public came to believe the opposite.",
      },
      moment: {
        text: "In 1919 Haig’s despatches were published as a book, edited by his private secretary, J. H. Boraston, with an introduction that Foch had written for the French edition. Foch praises the British armies at length. Then he asks whether it was not Haig’s own insight that led him to intervene with his government on 24 March 1918, and with the Allied governments at Doullens two days later, so that the French and British armies could be placed under a single command, even though his personal position should thereby suffer. On this point, Foch writes, the despatches contain gaps that keep the reader from grasping all the reasons for the victory, and truth compelled him to complete their account. A commander’s public record arrived with its editor, and with an ally correcting it.",
        evidence: "fact",
        refs: [{ source: 0, locator: "introduction, pp. xi–xiii" }],
      },
      episodes: [
        {
          title: "A record with its seams showing",
          text: "The despatches were official reports, published at the time in the London Gazette; the book reprints them with rows of asterisks where passages were cut, as in the account of the defensive preparations of early 1918, where the lessons of 1916 and 1917 had to be assimilated rapidly and thoroughly by all ranks. Footnotes added for the book supply what the despatches had not said. On the decision to continue the Third Battle of Ypres in October 1917, a note summarises a speech in the House of Commons of 6 August 1919 by Major-General Sir John Davidson: Russia had ceased to be a fighting force, the French armies were weakened by grave internal troubles, the Italian armies had suffered a great reverse, and America could not yet help on land.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 17, 126, 179" }],
          battleSlugs: ["passchendaele"],
        },
        {
          title: "The plan and the account",
          text: "Haig’s despatch of December 1916 gives the Somme offensive a threefold object: to relieve the pressure on Verdun, to stop further transfers of German troops from the Western Front to other theatres, and to wear down the forces opposed to the British. All three, it says, had been achieved, and any one of them was in itself sufficient to justify the battle. The National Army Museum describes the plan differently: Haig was optimistic about a breakthrough, and the Reserve Army, with cavalry, was to exploit any gap. The British official history, as Britannica quotes it, says the cavalry was to ride through to Bapaume on the first morning. The account names objects the battle achieved; the plan had aimed at one it did not.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "pp. 20, 51" },
            { source: 2 },
            { source: 3 },
          ],
          battleSlugs: ["somme"],
        },
        {
          title: "One great battle",
          text: "Haig’s final despatch, of 1919, asks that the battles from the Somme in 1916 to the Sambre in November 1918 be viewed as one great and continuous engagement, and warns that to look for the explanation of victory in any single phase is to risk unsound doctrines about modern war. In such a battle, it argues, there is a wearing-out stage in which the price of victory is paid, and between forces of roughly equal strength there is no way of avoiding payment of the price. The victories of 1918 were directly dependent on the two years of stubborn fighting that preceded them. This is both Haig’s defence of his own decisions and a historian’s thesis about attrition, and it was written by the man whose reputation it protected.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 319–321" }],
          battleSlugs: ["somme", "amiens-1918"],
        },
        {
          title: "Two verdicts on one general",
          text: "The case against Haig was also written by interested parties. The National Army Museum notes that Lloyd George, prime minister from December 1916, called him in 1935 a second-rate commander in unparalleled and unforeseen circumstances, and that Liddell Hart and Lloyd George attacked his reputation in the 1930s; Alan Clark’s The Donkeys of 1961, the musical Oh! What a Lovely War and Blackadder Goes Forth made him the archetypal bungling general. Historians such as John Terraine, Gary Sheffield and William Philpott re-assessed him, but the museum says the popular view is still of an incompetent commander. Philpott writes that the idea of a British learning curve from the Somme to 1918 is said to have begun among Sandhurst historians in the 1980s, and that it is too amorphous and too Anglo-centric to capture what changed.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 4 }],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Haig’s despatches",
          stake:
            "His public reports, edited for the book by his private secretary after the victory.",
          says: "The Somme achieved all three of its objects, and the war from 1916 was one continuous battle whose price could not be avoided.",
          refs: [{ source: 0, locator: "pp. 51, 320" }],
        },
        {
          who: "Ferdinand Foch",
          stake:
            "The Allied commander-in-chief of 1918, introducing the French edition of the despatches of the British commander he had directed.",
          says: "The despatches leave gaps; Haig’s own interventions in March 1918 made the single command possible.",
          refs: [{ source: 0, locator: "p. xiii" }],
        },
        {
          who: "David Lloyd George",
          stake:
            "Prime minister from December 1916, who attacked Haig’s reputation in the 1930s.",
          says: "Haig was a second-rate commander in unparalleled and unforeseen circumstances.",
          refs: [{ source: 1 }],
        },
        {
          who: "William Philpott",
          stake:
            "A historian named by the National Army Museum among Haig’s re-assessors, who criticises the learning-curve idea his school is associated with.",
          says: "What happened was an uneven transformation shared with allies and enemies, not a steady curve; citizens led by soldiers, not lions led by donkeys.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge a decision by what the commander could know when he made it. The despatches make that harder, because each was written after the event and the book after the victory. The footnote on Third Ypres shows how. One of the reasons it gives for continuing, the Italian reverse at Caporetto on 24 October, could have weighed only in the last weeks of the campaign, not in the decision Haig describes taking after the battle of 4 October. Reasons assembled in 1919 are evidence of how a decision was defended, not of how it was made.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "p. 126" }, { source: 6 }],
        },
        {
          text: "Two commanders also complicate the question of who learned. Until March 1918 Haig answered to his own government and coordinated with French commanders by agreement; from then on Foch directed and Haig commanded. A lesson about learning has to say whose learning it means: the commander’s, his staff’s, the army’s or the coalition’s. Philpott argues that the change was not a steady curve but a transformation of technology, tactics, logistics and command, in competition with the enemy and in cooperation with allies.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Outcome bias",
          base: "single study",
          text: "Baron and Hershey gave students descriptions of decisions made under uncertainty, with their outcomes, and told them they had all the information the decision maker had had. Across five studies the students rated the thinking as better and the decision maker as more competent when the outcome was favourable, even though they said outcomes should not count. The Western Front invites the error in both directions: 1918 can make 1916 look like a necessary stage, as Haig’s final despatch argues, and the first day of the Somme can make every later decision look like folly.",
          evidence: "interpretation",
          refs: [{ source: 7 }],
          limit:
            "Only the abstract was read. The participants were undergraduates judging medical and gambling decisions, not historians judging generals; the finding warns about method and says nothing about whether Haig decided well.",
        },
      ],
      shadow: {
        text: "Haig’s public record was coherent: every battle a stage in one victory, every loss a price that could not be avoided. That coherence was its weakness. The National Army Museum notes that the popular view of him is still of an incompetent commander, despite a generation of re-assessment; an account that admits so little error invites its readers to supply it. The asterisks and footnotes in his despatches show that the record was shaped. They do not show what was taken out.",
        evidence: "interpretation",
        refs: [{ source: 1 }, { source: 0, locator: "p. 179" }],
      },
      counterCase: {
        text: "Ludendorff shaped his record further, and with worse effect. Görlitz writes in Britannica that although Prussian staff officers were expected to keep their anonymity and share responsibility for every decision, Ludendorff claimed after the war to have been the sole real commander, and asserted that the German army, undefeated in the field, had been sabotaged by the home front. That legend, Görlitz writes, did a great deal to poison public life in the Weimar Republic. Haig’s account defended the price of victory; Ludendorff’s denied the defeat. A record shaped by its subject is not always self-serving in the same way, or with the same consequences.",
        evidence: "interpretation",
        refs: [{ source: 5 }],
        commanderSlug: "erich-ludendorff",
        battleSlugs: ["operation-michael"],
      },
      cost: {
        text: "The final despatch speaks of the dead in the language of an account. It attributes the loss of many thousands of brave men to the country’s general unpreparedness, and says that, given the military situation of August 1914, the total losses were no larger than were to be expected. The men it describes had no part in writing it.",
        evidence: "fact",
        refs: [{ source: 0, locator: "p. 323" }],
      },
      transfer: {
        holdsWhen: [
          "The account of a hard period was written by the people who led it, after the outcome was known.",
          "Other records survive: the plans made beforehand, critics’ accounts, and allies’ and opponents’ reports.",
        ],
        failsWhen: [
          "Every official account is treated as a cover-up. Haig’s despatches are also a detailed record of what happened.",
          "The critics’ version is taken as neutral. Lloyd George and the later critics had their own reasons.",
        ],
        questions: [
          "Which account of your organisation’s hardest period was written by the people who led it, and when?",
          "Where could you find what was planned before the outcome was known?",
          "Which of your own judgements about a past decision would change if the outcome had been different?",
        ],
      },
      bearsOn:
        "The volume’s question is itself contested ground. Haig answered it in 1919: the army learned, and the price was the unavoidable cost of a wearing-out battle. His critics answered that the generals learned too slowly and spent too many lives doing it; the historians the National Army Museum calls re-assessors, that a more professional army did emerge; Philpott, that a learning curve is too narrow a frame for what changed. Each lesson that follows separates what the commanders planned from what they later said they had planned, and asks whose learning it was.",
      questions: [
        {
          prompt:
            "What did Haig’s despatch of December 1916 give as the objects of the Somme offensive?",
          choices: [
            "A breakthrough to Bapaume and beyond.",
            "To relieve Verdun, to stop German transfers to other fronts, and to wear down the German forces.",
            "To capture the Belgian coast.",
          ],
          answer: 1,
          explanation:
            "The National Army Museum and the official history describe a plan that hoped for a breakthrough; the despatch names objects the battle achieved.",
        },
        {
          prompt:
            "Why should the footnotes added to the despatches in 1919 be read with care?",
          choices: [
            "Because they were written by German officers.",
            "Because they add reasons assembled after the war, one of which came after the decision it is used to explain.",
            "Because Foch disagreed with all of them.",
          ],
          answer: 1,
          explanation:
            "The Italian reverse of 24 October could not have weighed in the decision Haig describes taking after 4 October.",
        },
        {
          prompt: "What did Baron and Hershey find?",
          choices: [
            "That people ignore outcomes once told they should.",
            "That people rated decisions as better thought out when the outcome was favourable, even when they said outcomes should not count.",
            "That experts are immune to outcome information.",
          ],
          answer: 1,
          explanation:
            "Knowing how the war ended colours every judgement of how it was fought, in both directions.",
        },
      ],
      sourceCheck: {
        question: "What was the Somme offensive meant to achieve?",
        witnesses: [
          {
            label: "Haig’s despatch, December 1916",
            claim:
              "Three objects: relieve Verdun, hold German forces in the west, wear down the enemy. All three were achieved.",
          },
          {
            label: "National Army Museum",
            claim:
              "Haig was optimistic about a breakthrough; the Reserve Army, with cavalry, was to exploit any gap.",
          },
          {
            label: "British official history, quoted by Britannica",
            claim:
              "False confidence encouraged Haig to gamble on a breakthrough, with cavalry to ride through to Bapaume on the first morning.",
          },
        ],
        prompt: "How should a reader use these three accounts?",
        options: [
          {
            text: "Prefer the despatch, because Haig knew his own aims.",
            feedback:
              "He did, but the despatch was written after the battle for publication, when the breakthrough had not come.",
          },
          {
            text: "Prefer the official history, because it is official.",
            feedback:
              "It drew on the records, and it too was written long afterwards, with judgements of its own.",
          },
          {
            text: "Distinguish the plan from the account: Haig hoped for a breakthrough, and later justified the battle by the objects it did achieve.",
            feedback:
              "Both can be true at once, and the difference between them is the evidence.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Haig’s final despatch argues that the battles of 1916 and 1917 must be seen as stages of one victory. Make the strongest case for that view and the strongest case against it, using only evidence available before 1918.",
        guidance:
          "Separate what was planned from what was later claimed, and be explicit about outcome knowledge. The despatches, the official history and the critics each have a stake; name it before using them.",
      },
      sources: [
        s.despatches,
        s.namHaig,
        s.namSomme,
        s.britSomme,
        s.philpott,
        s.britLudendorff,
        s.britPasschendaele,
        s.baronHershey,
      ],
    },
    {
      slug: "the-plan-that-was-neither",
      title: "The plan that was neither: the Somme, 1916",
      part: "Learning under fire, 1914–1916",
      themes: ["judgement", "communication"],
      claim:
        "When a commander’s ambition and a subordinate’s method are merged into one plan without anyone choosing between them, the compromise can serve neither, and a subordinate’s loyalty can hide the doubt that would have tested it.",
      inBrief: {
        strength:
          "An attack prepared on an unprecedented scale by a new army, against a fortified enemy, under pressure from an ally.",
        shadow:
          "A compromise between breakthrough and siege, carried out loyally by a subordinate who doubted it, on the worst day in the British army’s history.",
      },
      moment: {
        text: "Before the battle, Sir Henry Rawlinson, whose Fourth Army was to make the main British attack on the Somme, assured Haig that he would loyally carry out ‘these instructions’. The British official history, as Britannica quotes it, adds that privately he was convinced they were based on false premises and on too great optimism. On the eve of the attack Haig wrote that he felt every step in his plan had been taken with divine help. The battle’s outcome, Britannica concludes, was to show the danger of this kind of loyalty.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "Two ideas of one battle",
          text: "The National Army Museum describes the disagreement plainly. Haig was optimistic about a breakthrough; Rawlinson preferred modest bite-and-hold attacks and expected limited gains. Haig’s plan was for the Fourth Army to break through in the centre, with diversionary attacks on either side, and for the Reserve Army, including cavalry, to exploit any gap. The official history, quoted by Britannica, says Rawlinson wanted a long bombardment and a short advance; he was allowed the first and overborne on the second, being told to take both German positions on his left in a single stroke. Haig’s own artillery adviser warned him that he was stretching his available guns too far. The result, in the official history’s judgement, was a compromise suited neither to a swift penetration nor to a siege attack.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 0 }],
          battleSlugs: ["somme"],
        },
        {
          title: "A safeguard that disappeared",
          text: "In the early discussions, the official history records, Haig said that corps were not to attack until their commanders were satisfied that the enemy’s defences had been sufficiently destroyed; the condition seems to have been dropped as time passed. Rawlinson joined Haig in assuring subordinates that the bombardment would swamp all resistance and the infantry would only have to walk over. The National Army Museum describes the bombardment: a week long, but with the guns spread too thinly, many shells defective, shrapnel largely useless against concrete dugouts, and much of the wire uncut. Behind the front, Britannica adds, commanders reported captures of prisoners but not the heavy casualties.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1 }],
          battleSlugs: ["somme"],
        },
        {
          title: "The constraints that set the date",
          text: "Haig’s despatch explains the timing. The Allies had agreed on a summer offensive, and he and Joffre had chosen the front together. He wanted to postpone the attack as long as possible, because the British armies were growing, munitions were increasing, and a very large proportion of his officers and men were still far from fully trained. But the Germans were pressing at Verdun and the Austrians in Italy, and the strain might become too great unless action was taken; it was agreed that the attack should not be postponed beyond the end of June. His final despatch adds that the artillery situation became even approximately adequate only by midsummer 1916, and that throughout the battle ammunition had to be watched with the greatest care.",
          evidence: "fact",
          refs: [{ source: 2, locator: "pp. 17–20, 321" }],
          battleSlugs: ["somme", "verdun"],
        },
        {
          title: "What the French did south of the river",
          text: "The French attacked at the same time, mainly south of the Somme, where the German defences were less developed. Britannica records that they had more than 900 heavy guns, the British barely half that number for a wider front; the French met slighter opposition, were less expected, and advanced deeper. Philpott writes that General Fayolle’s Sixth Army won impressive tactical victories on 1 July with sufficient, well-controlled guns.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 3 }],
          battleSlugs: ["somme"],
        },
      ],
      witnesses: [
        {
          who: "The British official history, as Britannica quotes it",
          stake:
            "The army’s own history, written after the war from the records, quoted at length by an unsigned encyclopedia article.",
          says: "The problem of storming a fortress was not appreciated at General Headquarters, and false confidence encouraged Haig to gamble on a breakthrough.",
          refs: [{ source: 0 }],
        },
        {
          who: "The National Army Museum",
          stake: "A national museum summarising the debate for the public.",
          says: "Haig hoped for a breakthrough and Rawlinson for limited gains; some see futile slaughter, others point out Haig had no real alternative to fighting on.",
          refs: [{ source: 1 }],
        },
        {
          who: "Haig’s despatch",
          stake: "His own public account, written after the battle.",
          says: "The preparations, except at Gommecourt, were carried out under Rawlinson’s orders, and Verdun ruled out further delay.",
          refs: [{ source: 2, locator: "pp. 20, 58" }],
        },
        {
          who: "William Philpott",
          stake:
            "A historian who has re-assessed Haig, writing for a defence think tank.",
          says: "On 1 July it was not so much that the thinking was wrong as that it had not yet become second nature, and the resources were lacking.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, Haig’s choice was not between a breakthrough and a safe siege attack. The date was set by Verdun and the coalition, many of his men were far from fully trained by his own account, and the guns were too few for the front. A plan with limited objectives would have made the most of what he had; a plan for a breakthrough would have mattered most if it worked. The official history’s charge is that he took neither path but both at once: Rawlinson’s long bombardment, which gave away surprise, and Haig’s deep objectives, which stretched the guns.",
          evidence: "interpretation",
          refs: [{ source: 2, locator: "pp. 17–20" }, { source: 0 }],
        },
        {
          text: "The French sector shows that another method was available that morning, against the same enemy: shorter objectives, denser artillery, less warning. Philpott’s reading is that the British army had the ideas but not yet the habits and the guns to apply them. If he is right, part of what the British learned between 1916 and 1918 was what their ally was already doing south of the river.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Voice and silence",
          base: "review",
          text: "Morrison defines upward voice as employees voluntarily communicating suggestions, concerns or information about problems to someone higher in the organisation, and silence as withholding them, which deprives the organisation of potentially useful information. Her review sets out the factors and motives that decide which people choose. Rawlinson did voice his preference and was overruled. What followed looks like the second kind of silence: he carried out a plan he privately doubted, and joined in assuring his subordinates that it would work.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
          limit:
            "Only the abstract was read. The research concerns employees in modern organisations; it cannot recover what Rawlinson felt, and the evidence for his private doubts comes from an official history written later.",
        },
      ],
      shadow: {
        text: "The same habit returned in 1917. As the weather and the mud worsened at Passchendaele, Britannica records, Haig’s assistants grew more doubtful of his optimistic assurances but, with military loyalty, tried to make their thoughts become the children of his wishes; his intelligence chief noted that most of those at one conference would welcome a stop. A command that rewards loyal execution more than stated doubt can repeat its first mistake with different men.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        battleSlugs: ["passchendaele"],
      },
      counterCase: {
        text: "Four weeks before the Somme, Aleksei Brusilov’s south-western army group was authorised to make what was meant to be a diversionary attack on the Eastern Front. Showalter writes in Britannica that Brusilov struck on a very wide front, took the Austrians wholly by surprise near Lutsk, and turned the diversion into by far the most important operation of the Russian offensive. His success then depended on others: the neighbouring commanders found excuses not to attack as agreed, poor lateral communications delayed the reserves, and German reinforcements arrived first. The offensive also drained Russia’s armies and undermined its morale. A different method can work where a compromise fails, and still be wasted if the rest of the command does not follow.",
        evidence: "interpretation",
        refs: [{ source: 5 }],
        commanderSlug: "aleksei-brusilov",
        battleSlugs: ["brusilov-offensive"],
      },
      cost: {
        text: "The first day of the Somme was, in Britannica’s words, the heaviest day’s loss that a British army had ever suffered. The men crossed in close waves at a steady pace, many carrying loads that often amounted to more than half their own body weight, which made it impossible to move much faster than a slow walk.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "A leader’s ambition and a subordinate’s method have been combined into one plan without anyone choosing between them.",
          "A condition meant to protect the people doing the work has quietly dropped out of the plan.",
        ],
        failsWhen: [
          "The subordinate’s caution is itself mistaken, and the ambitious plan would have worked with the resources available.",
          "There is no time to reopen the plan, and carrying out an imperfect one is better than none.",
        ],
        questions: [
          "In your current plan, whose idea of success is it built around, and was anyone asked to choose between competing ideas?",
          "Which safeguards were in the first version of the plan, and are they still in it?",
          "If someone below you privately doubted the plan, how would you know?",
        ],
      },
      bearsOn:
        "The first day of the Somme is the baseline for the volume’s question. On one reading, what the generals had to learn was method: Philpott’s view that the ideas existed but had not become habit, and that the guns were lacking. On another, it was a belief: the official history’s charge that headquarters had not grasped that it faced a fortress. Both readings agree that 1 July taught at a terrible price; they disagree on whether a commander could have known better that morning. The French advance south of the river suggests that some did.",
      questions: [
        {
          prompt: "What did Rawlinson want for the Somme attack?",
          choices: [
            "A short bombardment and a deep advance.",
            "A long bombardment and a short advance.",
            "No attack at all.",
          ],
          answer: 1,
          explanation:
            "He was allowed the long bombardment and overruled on the depth of the advance.",
        },
        {
          prompt:
            "Which safeguard does the official history say was dropped before 1 July?",
          choices: [
            "That the cavalry would be held back.",
            "That corps would not attack until their commanders were satisfied the enemy’s defences had been destroyed.",
            "That the French would attack first.",
          ],
          answer: 1,
          explanation:
            "The condition, set in the early discussions, seems to have been dropped as time passed.",
        },
        {
          prompt: "What does Morrison’s review mean by silence?",
          choices: [
            "Withholding suggestions, concerns or information from people higher in the organisation.",
            "Refusing to obey orders.",
            "Criticising colleagues in public.",
          ],
          answer: 0,
          explanation:
            "Silence deprives an organisation of information it could have used, which is how loyalty can hide a flaw.",
        },
      ],
      sourceCheck: {
        question: "Who was responsible for the plan of 1 July 1916?",
        witnesses: [
          {
            label: "The official history, quoted by Britannica",
            claim:
              "Haig overbore Rawlinson on the depth of the advance; Rawlinson loyally complied while privately doubting the plan.",
          },
          {
            label: "Haig’s despatch",
            claim:
              "The preparations, except at Gommecourt, were carried out under Rawlinson’s orders.",
          },
          {
            label: "William Philpott",
            claim:
              "The thinking was not so much wrong as not yet second nature, and the resources were lacking.",
          },
        ],
        prompt: "How should a reader use these accounts?",
        options: [
          {
            text: "Blame Haig, because he set the objectives.",
            feedback:
              "He did, and the official history says so; Philpott’s point about habits and guns is a different question that blame does not answer.",
          },
          {
            text: "Blame Rawlinson, because he prepared the attack.",
            feedback:
              "The despatch says so, but it was written by his commander after the battle, and the official history records that Rawlinson had argued for less.",
          },
          {
            text: "Note that they answer different questions: who set the objectives, who prepared the attack, and whether the method was wrong or merely unpractised.",
            feedback:
              "Each witness is answering a different question; the lesson needs all three.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Imagine you are Rawlinson in June 1916, privately convinced that your instructions rest on false premises. What could you have done besides comply, and what would each course have cost you and your men?",
        guidance:
          "Use only what was known before 1 July: Haig’s authority, Verdun, the shrinking French contribution, the state of the guns. Consider what Rawlinson could have put in writing, to whom, and what the official history says he did instead.",
      },
      sources: [
        s.britSomme,
        s.namSomme,
        s.despatches,
        s.philpott,
        s.morrison,
        s.britEast1916,
        s.britPasschendaele,
      ],
    },
    {
      slug: "the-day-the-front-broke",
      title: "The day the front broke: Doullens, 26 March 1918",
      part: "Sharing command, 1918",
      themes: ["organisation", "judgement"],
      claim:
        "When separate commands are about to fail separately at the point between them, accepting a single direction can save the whole, but only if it is asked for rather than imposed, and the accounts of who asked will be written by people with reasons of their own.",
      inBrief: {
        strength:
          "Haig asked for a single Allied direction when the British and French armies were about to separate.",
        shadow:
          "He had argued in 1916 that goodwill was enough; the lesson was learned only after his Fifth Army had paid for it.",
      },
      moment: {
        text: "Foch reached Doullens on the morning of 26 March 1918 while Haig was still hearing his army commanders’ reports in the town hall. With time to spare, Foch writes, he walked to the little schoolhouse where his staff had set up in October 1914, during the manoeuvre northward that led to the battles of the Yser and Ypres. He compared the Allies’ numbers and supplies then with what they had now, and could not admit that, so much stronger, they could be beaten in 1918 when they had held in 1914. After the conference, at lunch, Clemenceau turned to him: well, you have got the job you so much wanted. Foch answered that to take over a battle largely lost over seven days could hardly be anyone’s wish. It was, he writes, an act of duty.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 297–300" }],
      },
      episodes: [
        {
          title: "Two armies pulling apart",
          text: "The German offensive of 21 March broke the British front in Picardy. At Compiègne on 25 March, Foch writes, Pétain described the Fifth Army’s disorganisation and the fifteen French divisions he had sent, and said he could do no more for the present because he had to defend the road to Paris. Foch argued that the danger lay at Amiens, where the British and French armies were being separated. The day before, he writes, Haig, when he could no longer have any doubt as to the intentions of the French High Command, had telegraphed the Chief of the Imperial General Staff to come to France so that a Supreme Command for the whole front could be created. Britannica’s article on Foch puts it more sharply: by 24 March Haig was thinking about his embarkation ports and Pétain about Paris.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 294–296" }, { source: 3 }],
          battleSlugs: ["operation-michael"],
        },
        {
          title: "Doullens, 26 March",
          text: "At Abbeville on 25 March, Foch writes, Haig proposed to Wilson that Foch be named commander-in-chief. Foch quotes Lord Milner’s memorandum that Foch did not wish to command anything, but wanted the position he had held at Ypres in 1914, when Joffre sent him to bring the British and French closer together, with higher authority. At Doullens the next day all agreed that Amiens had to be saved. Pétain offered twenty-four divisions instead of fifteen, but could not guarantee to extend his front to the Somme, and the move would be slow. Milner proposed privately to Clemenceau that Foch be entrusted with the conduct of operations, and Clemenceau drafted a text charging Foch with coordinating operations around Amiens. Haig, Foch writes, saw at once that this was too narrow and asked that it cover the British and French forces in France and Belgium; the final text charged Foch with coordinating the action of the Allied armies on the Western Front, by coming to an understanding with the commanders-in-chief.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 296–299" }],
          battleSlugs: ["operation-michael"],
        },
        {
          title: "What Haig had written in 1916",
          text: "In his despatch on the Somme, Haig wrote that where the French and British advances depended on each other, unity of command is usually essential, but that the cordial good feeling between the Allied armies had proved equally effective and removed all difficulties. From December 1916 to May 1917, Britannica writes, he was the unwilling subordinate of the French general Robert Nivelle; under Foch, by contrast, he exercised full tactical command of the British armies. His despatch on the spring of 1918 records only that on 26 March the French and British governments decided to place the supreme control of operations in Foch’s hands; a footnote adds that the appointment was made imperative by the immediate danger of the two armies separating.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 40, 208" }, { source: 2 }],
          battleSlugs: ["somme", "operation-michael"],
        },
      ],
      witnesses: [
        {
          who: "Ferdinand Foch, Memoirs",
          stake:
            "The man appointed, writing a decade later, with every reason to show the appointment as necessary and his own part as duty.",
          says: "Haig asked for a Supreme Command on 24 March and proposed Foch on 25 March; Milner proposed the coordinating role at Doullens, and Haig asked that it cover all the British and French forces.",
          refs: [{ source: 0, locator: "pp. 294–299" }],
        },
        {
          who: "Foch’s introduction to the despatches",
          stake:
            "Written for the French edition of his ally’s despatches, after the victory.",
          says: "Haig’s interventions of 24 and 26 March brought the single command, even though his own position should thereby suffer.",
          refs: [{ source: 1, locator: "p. xiii" }],
        },
        {
          who: "Lord Milner, as Foch quotes him",
          stake:
            "The British cabinet member who signed the agreement, quoted by the man it appointed.",
          says: "Foch did not wish to command anything; he wanted the position he had held at Ypres, with higher authority.",
          refs: [{ source: 0, locator: "p. 296" }],
        },
        {
          who: "Britannica on Foch",
          stake:
            "An admiring account by Charles-André Laffargue, which describes Foch as generally considered the leader most responsible for the victory.",
          says: "By 24 March Haig was thinking about his embarkation ports and Pétain about Paris; Lloyd George and Clemenceau saw that Foch alone could fill the void.",
          refs: [{ source: 3 }],
        },
        {
          who: "Haig’s despatch",
          stake: "His own public report, which claims nothing.",
          says: "The two governments decided to place the supreme control in Foch’s hands.",
          refs: [{ source: 1, locator: "p. 208" }],
        },
      ],
      strategist: [
        {
          text: "What could each commander know on 24 and 25 March? Haig knew his Fifth Army was falling back and, in the French account, was thinking of his ports; Pétain had to cover Paris, which he believed threatened from the Oise and perhaps from Champagne. Each was doing his duty to his own army and government, and the gap at Amiens was nobody’s duty. The Doullens text did not give Foch command: it obliged him to come to an understanding with the commanders-in-chief. Within days, Foch writes, it proved plainly inadequate, and the next lesson follows the wider powers agreed at Beauvais.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 294–299, 311–313" }],
        },
        {
          text: "For Haig the choice had a known price. He had served under a French commander-in-chief once, in the first months of 1917, unwillingly and without full control of his own armies’ tactics, and his 1916 despatch had argued that goodwill would do. In Foch’s account, what moved him in March 1918 was the evidence of the French High Command’s intentions. Foch had argued for a single command in 1917, Britannica writes, and Lloyd George and Clemenceau had refused to listen.",
          evidence: "interpretation",
          refs: [
            { source: 2 },
            { source: 0, locator: "p. 294" },
            { source: 3 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Threat and centralised control",
          base: "single study",
          text: "Garretsen and his colleagues tested the threat-rigidity hypothesis, that an external shock pushes organisations towards directive, centralised control. Using monthly data on almost 27,000 managers in 48 countries, they found that directive leadership rose significantly during the first lockdown of 2020, more so where the crisis was larger. Doullens fits the pattern at the level of a coalition: in five days the shock of March 1918 produced the single direction that Foch’s arguments of 1917 had not.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
          limit:
            "Only the abstract was read. It is one study of managers in a pandemic; it shows that crises tend to centralise control, not that centralising is wise, and the same hypothesis predicts the narrowing of information that other lessons in this volume describe.",
        },
      ],
      shadow: {
        text: "A single command had already failed once. From December 1916 to May 1917 Haig was the unwilling subordinate of Nivelle, and Georges Blond writes in Britannica that serious mutinies broke out in the French army after Nivelle’s ill-considered offensives. Unity of command imposed over a doubting partner, for an offensive that partner did not believe in, produced neither unity nor success. Doullens worked partly because it was asked for, and because Haig kept the full tactical command of his armies that he had not had under Nivelle.",
        evidence: "interpretation",
        refs: [{ source: 2 }, { source: 4 }],
      },
      counterCase: {
        text: "Pétain met the same crisis with the logic of a national commander. At Compiègne on 25 March, Foch writes, he said he could do no more for the present because he had to defend the road to Paris; at Doullens the next day he offered more divisions, but slowly and without guarantee. Blond’s admiring Britannica portrait explains the habits behind this: Pétain held that a well-organised defensive was sometimes called for, and had restored the French army after the mutinies with a minimum of repression. He was protecting an army he had just nursed back, and the capital. That was a sound duty for France and a danger for the coalition, and Foch’s appointment placed a direction above both commanders.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "pp. 295, 298" }, { source: 4 }],
        commanderSlug: "philippe-petain",
        battleSlugs: ["operation-michael"],
      },
      cost: {
        text: "While the conferences met, the Fifth Army fought on. Haig’s despatch describes its divisions holding south of the Somme on 27 March despite the weakness of their numbers and the tremendous strain through which they had already gone; on the afternoon of the 26th, while the conference sat at Doullens, a local commander, treating the line as only a stage in a further retirement, had carried part of the front north of the river further back than the higher command intended.",
        evidence: "fact",
        refs: [{ source: 1, locator: "pp. 208–209" }],
      },
      transfer: {
        holdsWhen: [
          "Separate units, each doing its duty, are about to fail separately at the point between them.",
          "One person can be given an authority that all sides accept, without humiliating any of them.",
        ],
        failsWhen: [
          "The single direction is imposed over a partner who does not believe in it.",
          "Centralising becomes a reflex in every crisis, and the people closest to the problem lose the room to act.",
        ],
        questions: [
          "Where in your organisation does a problem fall between two units, each of which is doing its own job?",
          "Who could be given authority over that gap, and what would each side need to keep?",
          "Which arrangement do you defend now as good enough that a crisis might show to be inadequate?",
        ],
      },
      bearsOn:
        "Doullens is the volume’s clearest case of learning at the top. In 1916 Haig wrote that goodwill between allies had proved as effective as unity of command; in March 1918 he asked for a single direction and, in Foch’s account, widened it himself. Whether that was learning or the reflex of a crisis is open: the threat-rigidity reading says crises centralise control, wisely or not. The price of the lesson was paid by the Fifth Army in the days before it was learned.",
      questions: [
        {
          prompt: "What did the Doullens agreement charge Foch with?",
          choices: [
            "Command of all the Allied armies.",
            "Coordinating the action of the Allied armies on the Western Front, by coming to an understanding with the commanders-in-chief.",
            "Defending Amiens and nothing else.",
          ],
          answer: 1,
          explanation:
            "The first draft limited him to operations around Amiens; at Haig’s request it was widened. Command came later.",
        },
        {
          prompt:
            "What had Haig written about unity of command in December 1916?",
          choices: [
            "That it was never necessary between allies.",
            "That it is usually essential, but that on the Somme goodwill between the allied armies had proved equally effective.",
            "That a French commander-in-chief should be appointed at once.",
          ],
          answer: 1,
          explanation:
            "His request in March 1918 reversed the view he had published fifteen months earlier.",
        },
        {
          prompt:
            "Why, according to Foch, did Pétain say at Compiègne that he could do no more?",
          choices: [
            "Because his army had mutinied again.",
            "Because he had to defend the road to Paris.",
            "Because the British had refused his help.",
          ],
          answer: 1,
          explanation:
            "Covering Paris was Pétain’s duty to his government; the gap at Amiens was no single commander’s duty.",
        },
      ],
      sourceCheck: {
        question:
          "Who proposed placing Foch above the British and French armies?",
        witnesses: [
          {
            label: "Foch’s Memoirs",
            claim:
              "Haig asked for a Supreme Command on 24 March and proposed Foch on 25 March; at Doullens, Milner proposed the coordinating role and Haig asked for it to be widened.",
          },
          {
            label: "Foch’s introduction to the despatches",
            claim:
              "Haig’s interventions on 24 and 26 March brought the single command.",
          },
          {
            label: "Britannica on Haig",
            claim: "In March 1918 Haig secured the appointment of Foch.",
          },
        ],
        prompt: "How do these accounts relate to each other?",
        options: [
          {
            text: "They contradict each other, so none can be trusted.",
            feedback:
              "Read closely, they do not contradict: they stress different moments of the same three days.",
          },
          {
            text: "Foch’s Memoirs are decisive, because he was there.",
            feedback:
              "He was, and he had reasons of his own; the memoir is still the fullest account of the sequence.",
          },
          {
            text: "They fit together: Haig asked on 24 and 25 March, Milner put forward the text on the 26th, and Haig widened it; each writer stresses the part that suits his purpose.",
            feedback:
              "The disagreement is about emphasis and credit, which is what writers with stakes contest.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Haig accepted a French coordinator in March 1918 after arguing in 1916 that goodwill between allies was enough. What would have had to be true for him to accept it a year earlier, and what had the months under Nivelle taught that made 1918 different?",
        guidance:
          "Separate what Haig could have known in each year from what the crisis forced. Compare the Doullens text with the powers Nivelle had held, and ask what each commander-in-chief kept.",
      },
      sources: [
        s.fochMemoirs,
        s.despatches,
        s.britHaig,
        s.britFoch,
        s.britPetain,
        s.garretsen,
      ],
    },
  ],
  inProgress:
    "This volume is being written. Its first three lessons are published; the others are added in reviewed batches.",
};
