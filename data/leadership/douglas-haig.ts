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
  britHindenburg: {
    title: "Paul von Hindenburg (Andreas Dorpalen)",
    url: "https://www.britannica.com/biography/Paul-von-Hindenburg",
    publisher: britannica,
  },
  ducoulombier: {
    title:
      "Romain Ducoulombier, Une nouvelle histoire des mutineries de 1917 (2010), a review of André Loez, 14-18. Les refus de la guerre, in French",
    url: "https://laviedesidees.fr/Une-nouvelle-histoire-des",
    publisher: "La Vie des idées",
  },
  pardons: {
    title:
      "Armed Forces Act 2006, section 359: Pardons for servicemen executed for disciplinary offences: recognition as victims of First World War",
    url: "https://www.legislation.gov.uk/ukpga/2006/52/section/359",
    publisher: "legislation.gov.uk",
  },
  britPershing: {
    title: "John J. Pershing",
    url: "https://www.britannica.com/biography/John-J-Pershing",
    publisher: britannica,
  },
  britAmiens: {
    title: "Battle of Amiens (Brereton Greenhous and Jon Tattrie)",
    url: "https://www.britannica.com/event/Battle-of-Amiens",
    publisher: britannica,
  },
  awmMonash: {
    title: "1918: Australians in France – General Sir John Monash",
    url: "https://www.awm.gov.au/visit/exhibitions/1918/people/genmonash",
    publisher: "Australian War Memorial",
  },
  pedersen: {
    title: "Peter Pedersen, The inner Monash, Wartime, issue 82",
    url: "https://www.awm.gov.au/wartime/82/article-two",
    publisher: "Australian War Memorial",
  },
  detertBurris: {
    title:
      "James R. Detert and Ethan R. Burris, Leadership behavior and employee voice: is the door really open? (2007), abstract",
    url: "https://doi.org/10.5465/amj.2007.26279183",
    publisher: "Academy of Management Journal",
  },
  leeWillisTian: {
    title:
      "Allan Lee, Sara Willis and Amy Wei Tian, Empowering leadership: a meta-analytic examination of incremental contribution, mediation, and moderation (2018), abstract",
    url: "https://doi.org/10.1002/job.2220",
    publisher: "Journal of Organizational Behavior",
  },
  crook: {
    title:
      "Peter Crook, Should the Third Battle of Ypres have been called off in October 1917? (27 May 2008)",
    url: "https://www.westernfrontassociation.com/world-war-i-articles/2008/may/should-the-third-battle-of-ypres-have-been-called-off-in-october-1917/",
    publisher: "Western Front Association",
  },
  principles: {
    title:
      "Ferdinand Foch, The Principles of War, trans. Hilaire Belloc (1920), from lectures at the French Staff College first published in 1903",
    url: "https://archive.org/details/principlesofwar00foch",
    publisher:
      "Henry Holt and Company (Internet Archive, Boston Library Consortium copy)",
  },
  britJoffre: {
    title: "Joseph-Jacques-Césaire Joffre",
    url: "https://www.britannica.com/biography/Joseph-Jacques-Cesaire-Joffre",
    publisher: britannica,
  },
  britFalkenhayn: {
    title: "Erich von Falkenhayn",
    url: "https://www.britannica.com/biography/Erich-von-Falkenhayn",
    publisher: britannica,
  },
  britCambrai: {
    title: "Battle of Cambrai",
    url: "https://www.britannica.com/event/Battle-of-Cambrai-1917",
    publisher: britannica,
  },
  iwmCambrai: {
    title: "The Fighting Tactics Of The Battle Of Cambrai",
    url: "https://www.iwm.org.uk/history/first-world-war/western-front/cambrai",
    publisher: "Imperial War Museums",
  },
  awmHamel: {
    title: "Battle of Hamel",
    url: "https://www.awm.gov.au/commemoration/anniversaries/hamel",
    publisher: "Australian War Memorial",
  },
  sleesman: {
    title:
      "Dustin J. Sleesman and others, Cleaning up the big muddy: a meta-analytic review of the determinants of escalation of commitment (2012), abstract",
    url: "https://doi.org/10.5465/amj.2010.0696",
    publisher: "Academy of Management Journal",
  },
  bialek: {
    title:
      "Michał Białek, Michał Węgrzyn and Ethan Meyers, Escalation of commitment is independent of numeracy and cognitive reflection: failed replication and extension of Staw (1976) (2021), abstract",
    url: "https://journals.ue.poznan.pl/ebr/article/view/428",
    publisher: "Economics and Business Review",
  },
  nickerson: {
    title:
      "Raymond S. Nickerson, Confirmation bias: a ubiquitous phenomenon in many guises (1998), abstract",
    url: "https://doi.org/10.1037/1089-2680.2.2.175",
    publisher: "Review of General Psychology",
  },
  keiserArthur: {
    title:
      "Nathanael L. Keiser and Winfred Arthur Jr., A meta-analysis of the effectiveness of the after-action review (or debrief) and factors that influence its effectiveness (2021), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/32852990/",
    publisher: "Journal of Applied Psychology",
  },
  tannenbaumCerasoli: {
    title:
      "Scott I. Tannenbaum and Christopher P. Cerasoli, Do team and individual debriefs enhance performance? A meta-analysis (2013), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/23516804/",
    publisher: "Human Factors",
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
      slug: "the-doctrine-before-the-war",
      title: "The will to conquer: doctrine before the war",
      part: "Learning under fire, 1914–1916",
      themes: ["judgement", "adaptation"],
      claim:
        "When a doctrine formed in peacetime meets a war it did not foresee, its worth depends less on whether it was right than on how quickly the people who hold it notice where it is wrong.",
      inBrief: {
        strength:
          "A shared creed of offensive will, taught to a generation of officers, that held armies together under shock.",
        shadow:
          "It taught that better weapons favoured the attacker, and the first battles of the war disproved it.",
      },
      moment: {
        text: "In the 1890s Ferdinand Foch lectured on tactics at the French Staff College; his lectures appeared as a book in 1903. Britannica calls thought and will the key words of his teaching, and the book bears it out. War, he writes, is the domain of moral force; victory is moral superiority in the victors and moral depression in the vanquished; battle is a struggle between two wills. The will to conquer is victory’s first condition and every soldier’s first duty, and the commander must, if need be, impart it to the soldier’s soul. Of all faults, he adds, only one is ignominious: inaction.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 283–287" }, { source: 2 }],
      },
      episodes: [
        {
          title: "Better weapons, stronger attack",
          text: "Foch takes on the argument that each improvement in armament forces armies back to the defensive. History, he answers, suggests the contrary: any improvement of firearms is ultimately bound to add strength to the offensive, because an attacker who concentrates more rifles and guns on one spot will now concentrate better ones, and he offers an arithmetical demonstration. He was not blind to fire: he describes how, in a battle of uniform pressure along the whole front, the defender’s shelter and fire-power make his resistance more efficient than the attack, and concludes that the answer is the battle of manoeuvre, a concentrated blow at one point. The lesson he drew from fire was to concentrate, not to wait.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 32, 297–298" }],
          battleSlugs: [],
        },
        {
          title: "The doctrine at the Marne",
          text: "In September 1914 Foch commanded the Ninth Army, newly formed to fill a gap in the centre of the French line; Britannica writes that his tenacity made Joffre’s victory on the Marne possible. His memoir describes a day when the XI Corps on his right was attacked along its whole front and was, he writes, on the verge of giving way, at the moment when the German right was yielding further west. It seemed to him that the only chance of stopping the enemy was to attack, and he ordered the corps to do so. The corps could not carry out the attack, and held on along a line in the woods behind. The doctrine prescribed attack; the battle allowed only endurance, and the army held.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 76–78" }, { source: 2 }],
          battleSlugs: ["marne-1914"],
        },
        {
          title: "Haig’s preparation",
          text: "Haig’s pre-war work was organisation. As director of military training at the War Office from 1906 to 1909, Britannica writes, he helped the war minister Haldane establish a general staff, form the Territorial Army as a reserve and organise an expeditionary force for a war in Europe; the National Army Museum calls him a recognised authority on cavalry warfare. His doctrine is visible in his final despatch of 1919, where it appears unchanged by the war: decisive success can be gained only by a vigorous offensive; the idea that a war can be won by standing on the defensive is a dangerous fallacy, born of the desire to evade the price of victory; and the decision to keep the cavalry corps had been completely justified.",
          evidence: "fact",
          refs: [
            { source: 3 },
            { source: 4 },
            { source: 5, locator: "pp. 325–328" },
          ],
          battleSlugs: [],
        },
        {
          title: "A dissenting teacher",
          text: "The same Staff College had a dissenter. Philippe Pétain, Georges Blond writes in Britannica, was promoted slowly before 1914, and was a general only at fifty-eight, because as a professor at the War College he had taught tactics opposed to those of the high command. While they favoured the offensive at all costs, he held that a well-organised defensive was sometimes called for, and that before any attack the commander must be sure of the superiority of his fire-power. In 1916 he was sent to hold Verdun.",
          evidence: "fact",
          refs: [{ source: 6 }],
          battleSlugs: ["verdun"],
        },
      ],
      witnesses: [
        {
          who: "Ferdinand Foch, The Principles of War",
          stake:
            "A lecturer writing for young officers in peacetime, reissued in translation after his victory.",
          says: "War is the domain of moral force; better firearms ultimately strengthen the attack.",
          refs: [{ source: 0, locator: "pp. 32, 287" }],
        },
        {
          who: "Ferdinand Foch, Memoirs",
          stake:
            "The same man in the 1920s, describing how his army met the doctrine’s first test.",
          says: "With a corps about to give way, the only chance seemed to be to attack; the attack could not be made, and the line held.",
          refs: [{ source: 1, locator: "pp. 76–78" }],
        },
        {
          who: "Georges Blond, in Britannica",
          stake: "An admiring biographer of Pétain.",
          says: "Pétain’s career was held back because he taught that the defensive was sometimes called for and that fire superiority must come before attack.",
          refs: [{ source: 6 }],
        },
        {
          who: "William Philpott",
          stake:
            "A historian who argues that the French thought harder about the war than the British debate admits.",
          says: "Before the Somme, Foch was writing of deep and prolonged battle; in 1918 he directed what Philpott calls the first truly modern operational offensive.",
          refs: [{ source: 8 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the doctrine was not absurd. The wars Foch’s generation had studied were decided quickly by the side that attacked with superior preparation, and Haig’s own final despatch cites 1866 and 1870 as proof that the better-prepared side gains a rapid success. What failed was the arithmetic of fire. Foch had seen that the defender’s fire-power made frontal pressure inefficient, and prescribed concentration; he had not seen that machine-guns, wire and artillery would make even concentrated attacks fail when the whole front was entrenched and had no flank to turn.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 32, 297–298" },
            { source: 5, locator: "p. 322" },
          ],
        },
        {
          text: "A doctrine is also an instrument of command. It gives officers a shared language and a default when orders do not come, and Foch’s emphasis on will may help explain why the French centre held at the Marne when its attack orders could not be carried out. The question for this volume is how its holders revised it. Philpott credits Foch with thinking, before the Somme, of a deep and prolonged battle, which is far from the decisive blow of his lectures. Haig’s 1919 despatch, by contrast, restates the offensive as an axiom.",
          evidence: "interpretation",
          refs: [{ source: 8 }, { source: 5, locator: "p. 325" }],
        },
      ],
      psychologist: [
        {
          mechanism: "No reliable mechanism offered",
          base: "none",
          text: "It is tempting to explain the doctrine of the offensive by some bias of military minds, but no source read here tests how professional doctrines are revised under fire, and the record is better read as evidence of what officers were taught than of how they thought. The lesson relies on the history.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological claim is made. The research on expertise and belief revision exists, but none of it was read for this lesson.",
        },
      ],
      shadow: {
        text: "The doctrine’s cost came in the first two years. Britannica writes that through 1915 the French armies under Joffre tried to burst through the German positions at ruinous cost and failed, and that Foch, commanding the Northern Army Group, vainly tried to break through in Artois and on the Somme, unable to make up for the lack of equipment and supplies. A creed that kept men attacking held armies together in 1914 and spent them in 1915.",
        evidence: "interpretation",
        refs: [{ source: 7 }, { source: 2 }],
      },
      counterCase: {
        text: "Joffre carried the doctrine into the war and found a way out of it. Britannica holds him responsible for the calamitous French plan of 1914, which called for mass attacks across the frontier and was caught unawares by the German movement through Belgium. Once convinced of the threat to his left, he shifted his forces, created a new army under his own authority and, after a long retreat, launched the counterstroke of 6 September; in that moment, Britannica writes, his imperturbability, force of character and courage saved the situation. A commander can adapt operationally while the doctrine underneath stays the same, which is what the attacks of 1915 then showed.",
        evidence: "interpretation",
        refs: [{ source: 7 }],
        commanderSlug: "joseph-joffre",
        battleSlugs: ["marne-1914"],
      },
      cost: {
        text: "The doctrine asked the infantry to supply the will that fire-power denied them. In Foch’s own account of the Marne the men of the XI Corps were ordered to attack while they were on the verge of giving way; in 1915, Britannica writes, the French attempts to break through were made at ruinous cost.",
        evidence: "fact",
        refs: [{ source: 1, locator: "pp. 76–78" }, { source: 7 }],
      },
      transfer: {
        holdsWhen: [
          "Your organisation shares a doctrine that was formed before the conditions it now faces.",
          "The first evidence against the doctrine is arriving, and those who hold it are explaining it away.",
        ],
        failsWhen: [
          "The doctrine is sound and the early failures come from poor execution, not wrong ideas.",
          "There is no time to revise anything, and a shared creed is the only thing holding people together.",
        ],
        questions: [
          "Which beliefs in your organisation date from a period when conditions were different?",
          "Who in your organisation taught the opposite, and what happened to their career?",
          "What evidence would make you change the doctrine you rely on, and are you collecting it?",
        ],
      },
      bearsOn:
        "Both commanders began the war with a creed of the offensive. Foch’s lectures called a battle of uniform pressure along the whole front inferior; in 1918 he directed a general battle along the whole front, and Philpott traces his thinking about deep and prolonged battle back to before the Somme. Haig’s final despatch of 1919 still called the offensive an axiom and the cavalry justified. If learning means revising a doctrine, the evidence so far points to more of it in Foch than in Haig; if it means getting better at applying one, the later lessons complicate the picture.",
      questions: [
        {
          prompt:
            "What did Foch’s lectures argue about improvements in firearms?",
          choices: [
            "That they would force armies onto the defensive.",
            "That they would ultimately add strength to the offensive.",
            "That they made cavalry useless.",
          ],
          answer: 1,
          explanation:
            "He argued that an attacker concentrating better weapons on one point gains more than the defender; the trenches of 1915 disproved it.",
        },
        {
          prompt:
            "Why, according to Blond, was Pétain promoted slowly before 1914?",
          choices: [
            "Because he had refused to teach at the War College.",
            "Because he taught that a well-organised defensive was sometimes called for, against the high command’s offensive at all costs.",
            "Because he had served in the colonies.",
          ],
          answer: 1,
          explanation:
            "A dissenter inside the same school was penalised before the war and sent to hold Verdun in 1916.",
        },
        {
          prompt:
            "What does Haig’s final despatch of 1919 say about the defensive?",
          choices: [
            "That it should have been adopted in 1916.",
            "That the idea of winning a war by standing on the defensive is a dangerous fallacy.",
            "That it was the main lesson of the war.",
          ],
          answer: 1,
          explanation:
            "His account restates the pre-war creed; whether the army’s practice had changed more than his doctrine is a question for the later lessons.",
        },
      ],
      seminar: {
        prompt:
          "Foch wrote in 1903 that better weapons strengthen the attack, and in 1918 directed a general offensive along the whole front. Was that a revision of his doctrine or an application of it to new means?",
        guidance:
          "Compare what the lectures say about the parallel battle and the battle of manoeuvre with what Philpott says of 1918. Ask what had changed in the means available, and what in the idea.",
      },
      sources: [
        s.principles,
        s.fochMemoirs,
        s.britFoch,
        s.britHaig,
        s.namHaig,
        s.despatches,
        s.britPetain,
        s.britJoffre,
        s.philpott,
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
      slug: "why-the-somme-went-on",
      title: "Why the Somme went on, July to November 1916",
      part: "Learning under fire, 1914–1916",
      themes: ["restraint", "judgement"],
      claim:
        "When an offensive fails on its first day but an ally still needs it, continuing can be right, but only while the reason for continuing is tested again as the battle changes, rather than renamed after it.",
      inBrief: {
        strength:
          "He kept the pressure on while Verdun hung in the balance, and the new armies learned to attack in the process.",
        shadow:
          "The battle went on into the November mud, and its purpose was redefined as it went.",
      },
      moment: {
        text: "Haig closed his despatch on the Somme, dated 23 December 1916, with a verdict. The enemy’s power had not yet been broken, he wrote, but the battle had placed beyond doubt the Allies’ ability to gain the objects for which they were fighting; a full half of the German army had suffered defeat on the Somme that year, and neither victors nor vanquished would forget it. The new British armies had entered the battle determined to win and had proved that their confidence was justified. In the fierce struggle, he added, they had learned many valuable lessons which would help them in the future.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 17, 58–59" }],
      },
      episodes: [
        {
          title: "Not an option to stop",
          text: "With the French still under pressure at Verdun, the National Army Museum writes, calling off the offensive after 1 July was not an option. Britannica records what changed: the setback removed the chance of a rapid penetration, and Haig adopted the attrition method of limited advances aimed at wearing down German strength. He rejected Joffre’s wish that he again throw his troops frontally at the Thiepval defences, and resumed the attack on the southern flank. The capture of the German second line on 14 July offered a chance for exploitation, Britannica adds, which was not taken; from then on a methodical but costly advance gained little ground.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 2 }],
          battleSlugs: ["somme", "verdun"],
        },
        {
          title: "Tanks before they were ready",
          text: "On 15 September, Haig’s despatch records, the new heavily armoured cars known as tanks were brought into action for the first time, co-operated successfully with the infantry and came as a surprise to the enemy. The National Army Museum says they advanced about a mile and a half at Flers-Courcelette without a breakthrough. Britannica judges their early use, before large numbers were ready, a mistake that forfeited the chance of a great strategic surprise; their success was limited, and some senior officers urged that they be abandoned, while more discerning eyes saw a key that, properly used, would unlock the trench barrier.",
          evidence: "fact",
          refs: [{ source: 0, locator: "p. 42" }, { source: 1 }, { source: 2 }],
          battleSlugs: ["somme"],
        },
        {
          title: "Into the mud",
          text: "Haig halted the offensive on 18 November as the weather worsened, the National Army Museum writes, after an advance of about seven miles and no breakthrough. His despatch sets out what had been achieved: Verdun had been relieved, the main German forces had been held in the west, and the enemy’s strength had been very considerably worn down. Any one of these, it says, was sufficient to justify the battle. It also concedes that the extent of the wearing down must depend in some degree on estimates, and that the autumn rains had prevented full advantage being taken of a situation in which there were good grounds for hoping to achieve yet more important successes.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 0, locator: "pp. 51–52" }],
          battleSlugs: ["somme"],
        },
      ],
      witnesses: [
        {
          who: "Haig’s despatch",
          stake:
            "His public account, published within weeks of the battle’s end.",
          says: "All three objects were achieved; German morale deteriorated; the new armies learned valuable lessons.",
          refs: [{ source: 0, locator: "pp. 51–52, 59" }],
        },
        {
          who: "The National Army Museum",
          stake: "A national museum presenting both sides of the debate.",
          says: "Many see futile slaughter and incompetence; others point out Haig had no real alternative to fighting on, and the battle produced a more professional army.",
          refs: [{ source: 1 }],
        },
        {
          who: "An unnamed German officer, quoted by the National Army Museum",
          stake: "A witness from the receiving side, unidentified.",
          says: "The Somme was the muddy grave of the German field army.",
          refs: [{ source: 1 }],
        },
        {
          who: "Britannica",
          stake:
            "An unsigned article that draws on the British official history.",
          says: "The chance of 14 July was not taken, and the tanks were used before enough were ready.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "In July and August the case for continuing was strong and visible. The Germans were still attacking at Verdun; the Russians were advancing in the east, and Showalter writes that Brusilov’s offensive forced the Germans to withdraw divisions from the Western Front, where they could ill be spared from Verdun and the Somme. Breaking off would have freed German reserves against both allies at once. Haig’s despatch claims, plausibly, that the Somme kept German forces in the west that would otherwise have gone east.",
          evidence: "interpretation",
          refs: [{ source: 7 }, { source: 0, locator: "p. 52" }],
        },
        {
          text: "The test came later. By the autumn the German offensive at Verdun had been abandoned and the chief of staff who ordered it dismissed, so the first object was met. What remained was the third, wearing down the enemy, whose extent Haig himself said could be judged only by estimates. A reason that can be measured had been replaced by one that could not, and the battle continued into November on the strength of it. That is the point at which a commander needs a test he would accept as a reason to stop, and the despatch gives none.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 51–52" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Escalation of commitment",
          base: "contested",
          text: "Escalation of commitment, the tendency to keep investing in a failing course one is responsible for, has been studied for decades, and Sleesman and his colleagues reviewed its many proposed determinants and theories by meta-analysis. The classic finding is less secure than its fame: Białek and his colleagues, repeating the original experiment with 365 participants, found no escalation at all, only that people invested more in more promising projects. If that is the better reading, the question at the Somme is not a bias but what made the project look promising, and the answer the despatch gives is the reports of German morale.",
          evidence: "interpretation",
          refs: [{ source: 4 }, { source: 5 }],
          limit:
            "Only the abstracts were read. Both concern individuals deciding in experiments or organisations, not a commander answerable to a coalition, and the meta-analysis abstract does not say which determinants it found strongest.",
        },
      ],
      shadow: {
        text: "The pattern returned in 1917. Britannica records that at Passchendaele Haig went on into October and November as the ground turned to mud, telling the government that German resistance might break at any moment, and called a halt only after the ridge was taken. The Somme had shown that a battle continued for an ally’s sake could be justified at its end by objects that had not been its purpose; at Passchendaele the justification was again assembled afterwards.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        battleSlugs: ["passchendaele"],
      },
      counterCase: {
        text: "Falkenhayn chose attrition from the start. Britannica writes that he believed the war had to be won in France by exhausting Germany’s enemies, and concentrated resources for an attack on Verdun that he believed would wear out the French army. On 29 August 1916, after a long and unsuccessful assault, the emperor dismissed him in favour of Hindenburg; Showalter adds that the miscarriage of his programme for the year led to his replacement. A commander who named wearing down as his aim before the battle, rather than after it, was no more able to measure it, and paid for its failure with his post.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 7 }],
        commanderSlug: "erich-von-falkenhayn",
        battleSlugs: ["verdun"],
      },
      cost: {
        text: "Both sides, Britannica writes, lost vast numbers of men who could never be replaced, and the German losses were swollen by an order that every yard of lost trench must be retaken by counter-attack. A German soldier quoted by the National Army Museum lamented that the best soldiers, the stoutest-hearted men, were lost.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 1 }],
      },
      transfer: {
        holdsWhen: [
          "A costly effort is continued because a partner still depends on it.",
          "The measurable reason for continuing has been met, and the remaining reason rests on estimates.",
        ],
        failsWhen: [
          "Stopping would hand the initiative to an opponent who is waiting for exactly that.",
          "The estimates are sound, and the effort is close to paying off.",
        ],
        questions: [
          "What would you accept, in advance, as a reason to stop the effort you are leading?",
          "Has the reason for continuing changed since you started, and has anyone said so?",
          "Which of your measures of progress are estimates, and who produces them?",
        ],
      },
      bearsOn:
        "The Somme is the volume’s first evidence of learning and its first evidence of the price. Haig claimed the lessons in December 1916, the National Army Museum credits the battle with producing a more professional army and the methods of 1918, and the tanks first appeared there. But the reason for going on changed during the battle from relieving an ally to wearing down an enemy, which only estimates could measure. Whether the learning was worth its price depends partly on whether the last two months of the battle taught anything the first four had not.",
      questions: [
        {
          prompt:
            "According to the National Army Museum, why was calling off the Somme after 1 July not an option?",
          choices: [
            "Because the cavalry was about to break through.",
            "Because the French were still under pressure at Verdun.",
            "Because the government had ordered Haig to continue.",
          ],
          answer: 1,
          explanation:
            "Relieving Verdun was the first of the offensive’s stated objects, and it was a real constraint in July.",
        },
        {
          prompt:
            "What does Haig’s despatch concede about the third object, wearing down the enemy?",
          choices: [
            "That it had failed.",
            "That any statement of how far it was attained must depend in some degree on estimates.",
            "That it was never an object.",
          ],
          answer: 1,
          explanation:
            "Once Verdun was relieved, the battle continued on the strength of a measure that could only be estimated.",
        },
        {
          prompt:
            "What did Białek and his colleagues find when they repeated the classic escalation experiment?",
          choices: [
            "A stronger effect than the original.",
            "No escalation; participants invested more in more promising projects.",
            "That only experts escalate.",
          ],
          answer: 1,
          explanation:
            "If the effect is fragile, the lesson’s question shifts from bias to the information that made the project look promising.",
        },
      ],
      seminar: {
        prompt:
          "Write the test that Haig could have set himself in August 1916: what evidence, by what date, would have told him to stop the Somme? Then decide whether the battle would have passed it.",
        guidance:
          "Use what was known at the time: the state of Verdun, the Russian offensive, the condition of the new armies and the weather. Separate the objects he could measure from those he had to estimate.",
      },
      sources: [
        s.despatches,
        s.namSomme,
        s.britSomme,
        s.britFalkenhayn,
        s.sleesman,
        s.bialek,
        s.britPasschendaele,
        s.britEast1916,
      ],
    },
    {
      slug: "what-reaches-the-top",
      title: "What reaches the top: Passchendaele, 1917",
      part: "The cost of persistence, 1917",
      themes: ["judgement", "communication"],
      claim:
        "When a leader’s confidence shapes what subordinates report, the information that reaches the top tends to confirm the plan, and doubts travel sideways instead of up.",
      inBrief: {
        strength:
          "He held to a strategy through months of setbacks, and his army won limited victories in September and October.",
        shadow:
          "The weather records, his staff’s doubts and his army commanders’ hesitations did not change his course; the cabinet heard of German exhaustion.",
      },
      moment: {
        text: "At a conference on 28 September 1917, Britannica records, Haig said he believed the enemy was on the point of collapse and that tanks and cavalry could be pushed through. Ten days later he told the government that the breakdown of German resistance might come at any moment. On 5 October his head of intelligence, John Charteris, wrote in a note: ‘Unless we get fine weather for all this month, there is no chance of clearing the coast….Most of those at the conference would welcome a stop.’ The commander’s belief went up to London; his staff’s doubts went into a private note.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "What the cabinet was told",
          text: "General headquarters had information that the Ypres area, being reclaimed marshland, would revert to swamp if prolonged bombardment destroyed its drainage, and its intelligence staff had found in more than eighty years of records that the weather in Flanders broke early each August. Britannica writes that none of this was disclosed by Haig to the war cabinet when he sought approval in late June; he dwelt on the exhaustion of the German army and its declining morale. The cabinet hesitated until Admiral Jellicoe argued that without the Belgian submarine bases Britain might be unable to go on with the war for lack of shipping. Charteris was dismayed to learn that Haig had gone beyond his staff’s figures and told the cabinet that six more months of fighting at that intensity would exhaust Germany’s manpower.",
          evidence: "fact",
          refs: [{ source: 0 }],
          battleSlugs: ["passchendaele"],
        },
        {
          title: "Doubts that stayed sideways",
          text: "After the failures of August, Britannica writes, Gough suggested that the attack should be abandoned, and Haig remained confident. Sir William Robertson, the chief of the Imperial General Staff and the cabinet’s official military adviser, began to doubt but did not tell the cabinet; to Haig he wrote that he stuck to the plan more because his instinct prompted him to than because of any good argument. Rawlinson submitted an appreciation that the command had relied too much on a belief that a breakdown of German morale was within sight. Crook notes a later account by Edmonds of a meeting on 7 October at which Plumer and Gough said they would welcome a closing down, and that there is no real documentary evidence for it.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 2 }],
          battleSlugs: ["passchendaele"],
        },
        {
          title: "Limited strokes, unlimited hopes",
          text: "In late September the weather improved, and on 20 and 26 September and 4 October Plumer’s Second Army made strictly limited attacks, the deepest objective less than a mile, behind a creeping barrage with one gun to every five yards of front. Britannica calls them successful, and says the effect proved too intoxicating behind the front. Haig’s despatch gives his reasoning for going on after 4 October: the ground made movement inconceivably difficult and it was doubtful whether the rest of the ridge could be taken before winter, but there was no reason to anticipate an abnormally wet October, the enemy had suffered severely, and captured documents showed that the German command had recognised the failure of its new methods of defence. The attack of 12 October, with deeper objectives, failed.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1, locator: "p. 126" }],
          battleSlugs: ["passchendaele"],
        },
      ],
      witnesses: [
        {
          who: "John Charteris",
          stake:
            "Haig’s head of intelligence, recording doubts in private notes that Britannica quotes.",
          says: "Most of those at the conference would welcome a stop.",
          refs: [{ source: 0 }],
        },
        {
          who: "Sir William Robertson",
          stake:
            "The cabinet’s chief military adviser, writing privately to Haig.",
          says: "He stuck to the plan more from instinct than from any good argument.",
          refs: [{ source: 0 }],
        },
        {
          who: "Haig’s despatch",
          stake: "His public account, written after the battle.",
          says: "There was no reason to anticipate an abnormally wet October, and the enemy showed symptoms of confusion and discouragement.",
          refs: [{ source: 1, locator: "p. 126" }],
        },
        {
          who: "C. E. W. Bean, as Crook quotes him",
          stake:
            "The Australian official historian, whose countrymen fought there.",
          says: "The attack at Poelcappelle was a great bloody experiment, a huge gamble and no more than that.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Haig had real reasons to fight in Flanders and to go on: the French army was recovering from the mutinies, Russia was failing, the Admiralty feared for shipping, and Plumer’s limited attacks of September worked. The decision that is hardest to defend without hindsight is the one after 4 October, to aim deeper as the weather broke, because the information against it was already in hand: the weather records, the state of the ground described in his own despatch, and the doubts of his army commanders. Crook notes that the French, attacking in Champagne in late October, advanced more than six kilometres in four days, which weakens the argument that the British alone had to keep the enemy busy.",
          evidence: "interpretation",
          refs: [
            { source: 0 },
            { source: 1, locator: "p. 126" },
            { source: 2 },
          ],
        },
        {
          text: "The organisational failure was in the channels. The cabinet’s adviser kept his doubts private; the army commanders announced success in public and postponed in private, and Crook writes that after Poelcappelle they carried out orders with more caution and less conviction. Britannica’s summary is that Haig’s assistants, with military loyalty, tried to make their thoughts become the children of his wishes. A commander who wants accurate reports has to make it safe to send bad ones, and nothing in the record shows Haig doing so.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 2 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Confirmation bias",
          base: "review",
          text: "Nickerson defines confirmation bias as seeking or interpreting evidence in ways that are partial to existing beliefs, expectations or a hypothesis in hand, and reviews it in many guises and practical settings. Haig’s reading of the autumn fits the description: captured documents and prisoners were read as signs of collapse, while the weather records and the state of the ground were read as obstacles to be waited out.",
          evidence: "interpretation",
          refs: [{ source: 3 }],
          limit:
            "Only the abstract was read. A review of a general tendency cannot show that it operated in one man, and some of Haig’s evidence of German strain was real.",
        },
        {
          mechanism: "Voice and silence",
          base: "review",
          text: "Morrison’s review describes silence as withholding concerns or information from those higher up, which deprives an organisation of what it could have used. The record of 1917 shows doubts expressed to peers, in diaries and in private letters, while the formal channel to the cabinet carried confidence.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
          limit:
            "Only the abstract was read. The research concerns modern employees; the motives of Robertson, Charteris and the army commanders cannot be recovered from it.",
        },
      ],
      shadow: {
        text: "The same confidence failed again within weeks. At Cambrai, after the first success, Haig’s despatch records early warnings of a German counter-attack in the last days of November, and his confidence that the defence could be considered secure. Britannica writes that the counterstroke of 30 November broke through in the south, and that by 5 December the British had been driven back almost to their starting positions.",
        evidence: "interpretation",
        refs: [{ source: 1, locator: "pp. 162–163" }, { source: 5 }],
        battleSlugs: ["cambrai-1917"],
      },
      counterCase: {
        text: "Arthur Currie, commanding the Canadian Corps, showed what a subordinate could do. Ordered in the summer to attack Lens, Britannica writes, he surveyed the German defences and chose instead to seize the high ground at Hill 70, and succeeded. Ordered in October to take the Passchendaele ridge, he objected to what he considered a reckless attack and predicted its cost; the final figure was almost exactly what he had forecast. He then built and repaired roads and tramlines, improved the gun positions and gave his troops time to prepare before attacking on 26 October. Currie voiced his doubt upward, lost the argument, and limited the damage; the corps took what was left of the village on 6 November.",
        evidence: "interpretation",
        refs: [{ source: 0 }],
        commanderSlug: "arthur-currie",
        battleSlugs: ["passchendaele"],
      },
      cost: {
        text: "Britannica describes the ground: craters deep enough to drown a man, churned-up graves, mud that swallowed sleeping soldiers and slowed stretcher-bearers to a crawl through waist-deep muck. Australians, New Zealanders and Canadians were sent in after the British assault divisions were worn out. In 1918 all the ground gained was given up in the face of the German offensive.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "Your own confidence is known to everyone who reports to you.",
          "Doubts are being expressed in private conversations and diaries, but not in the reports that reach you.",
        ],
        failsWhen: [
          "The confidence is warranted by evidence that the doubters have not seen.",
          "Every report is pessimistic by habit, and the leader’s optimism is the corrective.",
        ],
        questions: [
          "What would someone who reports to you have to risk to tell you the plan is failing?",
          "Which information that you already hold have you treated as an obstacle rather than as evidence?",
          "Who is your Robertson, and when did they last disagree with you?",
        ],
      },
      bearsOn:
        "Passchendaele is where the case that the generals did not learn is strongest, and the evidence is more precise than the legend. The army learned: Plumer’s limited attacks were a method the Somme had not had. What did not change was the judgement at the top about when the enemy would break, and the channels that should have corrected it. If the learning happened below and the price was set above, the question becomes whose learning the volume is measuring.",
      questions: [
        {
          prompt:
            "What information, according to Britannica, did Haig not disclose to the war cabinet in June 1917?",
          choices: [
            "The number of tanks available.",
            "That the area would revert to swamp under bombardment and that the weather usually broke early in August.",
            "That the French had refused to help.",
          ],
          answer: 1,
          explanation:
            "He dwelt instead on German exhaustion and declining morale.",
        },
        {
          prompt: "What did Robertson write to Haig about the plan?",
          choices: [
            "That it would certainly succeed.",
            "That he stuck to it more from instinct than from any good argument.",
            "That he had told the cabinet of his doubts.",
          ],
          answer: 1,
          explanation:
            "The cabinet’s adviser kept his doubts private, so the channel meant to test the plan carried confidence instead.",
        },
        {
          prompt:
            "What does Crook say about the reported meeting of 7 October at which Plumer and Gough would have welcomed a stop?",
          choices: [
            "That it is recorded in Haig’s diary.",
            "That there is no real documentary evidence for it.",
            "That Plumer denied it in 1918.",
          ],
          answer: 1,
          explanation:
            "A convenient story about doubts expressed in time needs the same scrutiny as the commander’s own account.",
        },
      ],
      sourceCheck: {
        question:
          "Should the Third Battle of Ypres have been stopped in early October 1917?",
        witnesses: [
          {
            label: "Haig’s despatch",
            claim:
              "There was no reason to expect an abnormally wet October; the enemy had suffered severely and his methods were failing.",
          },
          {
            label: "Charteris’s note, quoted by Britannica",
            claim:
              "Without fine weather all month there was no chance of clearing the coast; most at the conference would welcome a stop.",
          },
          {
            label: "Crook",
            claim:
              "The French advanced more than six kilometres in Champagne in late October, and attrition seems to have worked the wrong way.",
          },
        ],
        prompt: "How should a reader weigh these witnesses?",
        options: [
          {
            text: "Accept Charteris, because he was Haig’s own intelligence chief.",
            feedback:
              "His note is strong evidence of doubt at headquarters, written at the time; it is one note, and he too had a record to protect.",
          },
          {
            text: "Accept the despatch, because Haig knew more than anyone.",
            feedback:
              "He did, and the despatch was written after the event; it also concedes how bad the ground was.",
          },
          {
            text: "Set the reasons Haig gave against what was already known on 4 October: the weather records, the ground and his commanders’ doubts.",
            feedback:
              "That is the strategist’s test, and it is the one the decision fails most clearly.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "You are Robertson in September 1917, privately unconvinced by Haig’s plan and the cabinet’s official adviser. What do you owe the cabinet, and what do you owe Haig?",
        guidance:
          "Consider what Robertson knew and what the cabinet could have done with his doubts. Compare Currie’s protest, which lost the argument but changed how the attack was prepared.",
      },
      sources: [
        s.britPasschendaele,
        s.despatches,
        s.crook,
        s.nickerson,
        s.morrison,
        s.britCambrai,
      ],
    },
    {
      slug: "where-the-learning-happened",
      title: "Where the learning happened: Messines, Cambrai and Hamel",
      part: "The cost of persistence, 1917",
      themes: ["adaptation", "organisation"],
      claim:
        "When an organisation learns under pressure, the new methods often come from below and from the side, and they spread only if the top makes room for them without stretching them beyond their means.",
      inBrief: {
        strength:
          "Limited attacks, massed tanks, unregistered artillery fire and all-arms planning were developed and spread through the army.",
        shadow:
          "The high command more than once enlarged a small, well-prepared idea into an offensive it could not sustain.",
      },
      moment: {
        text: "After the Flanders swamps, Britannica writes, the officers of the British Tank Corps went looking for ground where their machines could do something. Their chief staff officer, Colonel J. F. C. Fuller, drew up a plan for a large raid on the rolling downland south-west of Cambrai: a swarm of tanks released without any preparatory bombardment, so that the enemy had no warning. The high command adopted the idea and, keeping Fuller’s core, turned the raid into a full offensive with far-reaching aims, the capture of Cambrai itself and a thrust towards Valenciennes, for which, after Passchendaele, it did not have the resources.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "Messines and the limited stroke",
          text: "On 7 June 1917 Plumer’s Second Army attacked the Messines ridge. Britannica describes a strictly limited attack, made with true siege-war methods on preparations begun a year before, that proved an almost complete success within its limits, helped by the surprise of nineteen great mines fired at once. It then judges that the success inspired the high command with too much confidence in the greater effort to follow, whose methods would be essentially different. In September and October Plumer applied the same approach east of Ypres: shallow objectives, a creeping barrage that won the ground, infantry that occupied it.",
          evidence: "fact",
          refs: [{ source: 2 }],
          battleSlugs: ["passchendaele"],
        },
        {
          title: "Cambrai: surprise returns",
          text: "At dawn on 20 November 1917 the Third Army attacked with the largest number of tanks yet assembled and an artillery barrage that had not been registered beforehand, so that surprise returned to the battlefield. The Imperial War Museums call these methods ones that were to become common in 1918. The first day gained about five miles, though more than half the tanks were out of action by evening. Haig’s despatch says the object was a local success by surprise, with a force kept small because secrecy demanded it, using divisions that had fought for months and drafts still far from fully trained. The cavalry could not exploit the gap, Britannica adds, and infantry reinforcements were not available in time.",
          evidence: "fact",
          refs: [
            { source: 1 },
            { source: 5, locator: "pp. 151–152" },
            { source: 0 },
          ],
          battleSlugs: ["cambrai-1917"],
        },
        {
          title: "Hamel: ninety-three minutes",
          text: "On 4 July 1918 the Australian Corps under John Monash attacked at Le Hamel. The Australian War Memorial writes that Monash planned the battle in detail to last ninety minutes, and that it took ninety-three; its historian Aaron Pegram calls it the first time infantry, artillery, tanks and aircraft were closely integrated in combat. Australian soldiers, by then highly skilled, trained the less experienced Americans who fought beside them. The National Army Museum writes that under Haig the army perfected the all-arms method of tanks, artillery, infantry, cavalry and air power that led the Allied advance of 1918.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }],
          battleSlugs: [],
        },
        {
          title: "What the commander-in-chief said about machines",
          text: "Haig’s final despatch credits the machines and keeps them in their place. Heavy artillery, trench mortars, machine-guns, aircraft, tanks and gas had given war greater driving power, and the Allies’ superiority in them contributed powerfully to the victory. But such weapons, it insists, are incapable of effective independent action; tanks need close artillery support and infantry to hold what they take, and to imagine that tanks and aircraft could replace infantry and artillery would be a disservice to them. In early 1918, an earlier despatch says, the lessons of the defensive fighting of 1916 and 1917 had to be assimilated rapidly and thoroughly by all ranks.",
          evidence: "fact",
          refs: [{ source: 5, locator: "pp. 179, 329–330" }],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Britannica on Cambrai",
          stake: "An unsigned encyclopedia article.",
          says: "The Tank Corps devised the raid; the high command enlarged it beyond its resources; the battle showed that armour was the key to a decision.",
          refs: [{ source: 0 }],
        },
        {
          who: "The Imperial War Museums",
          stake: "A national museum describing tactics for the public.",
          says: "Cambrai’s methods became common in 1918; the German counter-attack used infiltrating storm troops.",
          refs: [{ source: 1 }],
        },
        {
          who: "The Australian War Memorial",
          stake:
            "Australia’s national memorial, commemorating one of its corps’ most celebrated actions.",
          says: "Hamel was planned to the minute and was the first close integration of infantry, artillery, tanks and aircraft.",
          refs: [{ source: 3 }],
        },
        {
          who: "William Philpott",
          stake: "A historian who distrusts the British learning-curve story.",
          says: "The change was a transformation shared with allies and enemies, uneven rather than a steady curve.",
          refs: [{ source: 6 }],
        },
      ],
      strategist: [
        {
          text: "Each of these methods worked within limits: Messines, Plumer’s September attacks, the first day at Cambrai and Hamel were limited, carefully prepared and, where possible, surprising. The failures came when headquarters enlarged them. Britannica blames Messines for the overconfidence behind the next offensive, whose methods were essentially different, and Cambrai’s raid was turned into an offensive with aims its resources could not reach. The commander’s contribution to learning was to adopt what worked; his danger was to expect more of it than it could give.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 0 }],
        },
        {
          text: "The learning was competitive. At Cambrai the German counter-offensive used intensive artillery and infiltrating storm troops, the Imperial War Museums write, and in that respect both sides were rehearsing 1918. Philpott’s objection to the learning curve applies here: the British were improving against an enemy who was improving too, alongside an ally whose methods they sometimes borrowed, so that no army’s progress can be measured on its own.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Structured reviews of performance",
          base: "meta-analysis",
          text: "Two meta-analyses find that structured reviews of what happened improve later performance. Keiser and Arthur, combining 61 studies, found a large average improvement, and that in military settings highly structured reviews worked better than loose ones; Tannenbaum and Cerasoli, combining 46 samples, found that debriefs improved effectiveness by about a quarter. An army that improved its methods between 1916 and 1918 must have reviewed its battles somehow, and Haig’s instruction that lessons be assimilated by all ranks points to such a process.",
          evidence: "interpretation",
          refs: [{ source: 7 }, { source: 8 }],
          limit:
            "Only the abstracts were read. Both concern training and work teams, not an army of millions learning under fire, and no source read for this lesson describes how the British army actually reviewed its battles.",
        },
      ],
      shadow: {
        text: "Cambrai shows the limit. Having enlarged the raid into a battle, the British could not exploit it, and the attack was halted after an advance of about six miles. On 30 November the German Second Army struck the flanks of the new salient; Britannica writes that it broke through in the south, that disaster was averted only by the counter-attacks of the Guards Division and a tank brigade, and that by 5 December the British were almost back where they had started.",
        evidence: "interpretation",
        refs: [{ source: 0 }],
        battleSlugs: ["cambrai-1917"],
      },
      counterCase: {
        text: "The German army learned too, and showed what tactical learning without a strategic aim could do. Its counter-attack at Cambrai used infiltrating storm troops, and on 21 March 1918 Ludendorff opened a general offensive to smash the Anglo-French armies before the Americans arrived in force. Görlitz writes in Britannica that Ludendorff had overestimated the strength of the German armies and that the offensive failed; Laffargue writes that by July he had decided to gamble everything he had before the Americans joined the battle. Better methods won ground in the spring of 1918 and lost the war by the autumn.",
        evidence: "interpretation",
        refs: [{ source: 1 }, { source: 9 }, { source: 10 }],
        commanderSlug: "erich-ludendorff",
        battleSlugs: ["operation-michael"],
      },
      cost: {
        text: "The men who tested the new methods were often the most tired. Haig’s despatch says the divisions available for Cambrai had been fighting for months, only part of their losses had been replaced, and many recently arrived drafts were still far from fully trained; it was, he wrote, a serious matter to make a further heavy call on them at the end of such a strenuous year.",
        evidence: "fact",
        refs: [{ source: 5, locator: "p. 152" }],
      },
      transfer: {
        holdsWhen: [
          "Useful new methods are being developed by specialists or units some distance from the top.",
          "A small success tempts the leadership to scale it up before the means exist.",
        ],
        failsWhen: [
          "The new method has already been proved at scale, and enlarging it is the right next step.",
          "The organisation has no way of reviewing what happened, so nothing learned below reaches anyone else.",
        ],
        questions: [
          "Where in your organisation are better methods being invented without anyone at the top asking for them?",
          "When did you last enlarge a small success faster than the resources behind it?",
          "How does your organisation review what happened, and who reads the results?",
        ],
      },
      bearsOn:
        "This lesson gives the clearest answer to the first half of the volume’s question. The army learned: limited attacks, unregistered fire, massed tanks and all-arms planning spread between Messines in 1917 and Hamel in 1918. Most of that learning came from below and beside the commander-in-chief: Plumer’s army, the Tank Corps staff, Monash’s corps, and the enemy. Haig’s part was to adopt it, and twice to enlarge it beyond what it could bear. Whether the price was worth it depends on how much of the learning required the battles in which it was paid for.",
      questions: [
        {
          prompt:
            "Who first proposed the attack at Cambrai, according to Britannica?",
          choices: [
            "Haig’s operations staff.",
            "The Tank Corps, through its chief staff officer J. F. C. Fuller, as a large raid.",
            "The French high command.",
          ],
          answer: 1,
          explanation:
            "The high command adopted the idea and enlarged it into an offensive it could not sustain.",
        },
        {
          prompt:
            "What does the Australian War Memorial’s historian say was new at Hamel?",
          choices: [
            "The first use of tanks.",
            "The first close integration of infantry, artillery, tanks and aircraft.",
            "The first attack without artillery.",
          ],
          answer: 1,
          explanation:
            "Planned to the minute, it was a model of the all-arms method that the National Army Museum credits to the army of 1918.",
        },
        {
          prompt:
            "What did Keiser and Arthur find about after-action reviews in military settings?",
          choices: [
            "That they have no effect.",
            "That highly structured reviews worked better than less structured ones.",
            "That they work only for individuals.",
          ],
          answer: 1,
          explanation:
            "The finding suggests how learning spreads, but no source read describes how the British army reviewed its battles.",
        },
      ],
      seminar: {
        prompt:
          "Choose one method the British army used in 1918 and trace it back. Who invented it, where was it first tried, and who at the top decided to adopt it?",
        guidance:
          "Use Messines, Cambrai and Hamel as starting points. Ask what each method needed to work, and when headquarters asked more of it than it could give.",
      },
      sources: [
        s.britCambrai,
        s.iwmCambrai,
        s.britPasschendaele,
        s.awmHamel,
        s.namHaig,
        s.despatches,
        s.philpott,
        s.keiserArthur,
        s.tannenbaumCerasoli,
        s.britLudendorff,
        s.britFoch,
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
    {
      slug: "coordination-by-persuasion",
      title: "Coordination by persuasion: Ypres, 1914, to Beauvais, 1918",
      part: "Sharing command, 1918",
      themes: ["organisation", "communication"],
      claim:
        "When a leader’s authority over allies rests on their agreement, influence depends on putting the argument in a form they can adopt as their own, and on each partner keeping the right to refuse.",
      inBrief: {
        strength:
          "Foch moved armies he did not command by argument, written notes and timely help, from Ypres in 1914 to the general offensive of 1918.",
        shadow:
          "Persuasion took time and left each partner a veto, and when he stripped one front to help another, the enemy struck where he had weakened.",
      },
      moment: {
        text: "On the afternoon of 31 October 1914 Sir John French, the British commander-in-chief, found Foch in the town hall at Vlamertinghe. Foch had no authority over the British; Joffre had sent him to coordinate the Allied armies in the north. French described Haig’s I Corps in full retreat and said that if it were asked to go on fighting, there was nothing left for him but to go up and be killed with it. Foch argued that any withdrawal would bring a converging flood of attacks they could not stop, and promised a French attack to relieve the corps. To fix his own ideas and give them precise form, he wrote them on a sheet of paper and handed it over: it is absolutely essential not to retreat. French wrote on the back that he agreed entirely and sent it to Haig, and the retreat was countermanded.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 177–178" }, { source: 2 }],
      },
      episodes: [
        {
          title: "From a note to a mandate",
          text: "In 1914, Britannica writes, Joffre sent Foch to coordinate the efforts of the British, French and Belgians at the Yser and Ypres. In March 1918, Foch writes, Milner recorded that Foch wanted the same position again, with a more distinct and higher authority, that of both Allied governments; the Doullens agreement gave it to him. Within days he judged its powers plainly inadequate. The role of coordinator gave far too little play to the officer who filled it, he writes, if he was to react rapidly to a defensive battle or organise an offensive. At Beauvais on 3 April the British, French and American governments entrusted him with the strategic direction of operations, left the commanders-in-chief full control of the tactical employment of their forces, and gave each the right to appeal to his government if he thought the safety of his army compromised by Foch’s orders.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 0, locator: "pp. 296, 311–314" }],
          battleSlugs: ["first-ypres", "operation-michael"],
        },
        {
          title: "Help asked and given",
          text: "In April the German offensive fell on the British in Flanders. Haig’s despatch records that he represented the state of his exhausted divisions to Foch and asked for relief, and that Foch complied without delay, moving French forces north behind the British front. Britannica writes that to support the British, who were being pushed back towards the sea, Foch withdrew troops from the French front, and that Ludendorff took advantage: on 27 May he broke through that front and his troops reached the Marne. On 9 June a new gap opened at the Oise, and Foch stopped it again.",
          evidence: "fact",
          refs: [{ source: 1, locator: "p. 239" }, { source: 2 }],
          battleSlugs: ["operation-michael"],
        },
        {
          title: "Negotiating with Pershing",
          text: "At the end of August Foch asked Pershing to cut back the American attack on the Saint-Mihiel salient so that the Americans could join a larger offensive west of the Meuse. Pershing answered with observations of his own in a letter of 31 August. Foch’s reply set out what the general battle required and told him that, if he could not make the Saint-Mihiel attack before or alongside the other, it should be abandoned; at a meeting on 2 September Pershing agreed that both could be done in rapid succession. Saint-Mihiel was taken on 12 September. Britannica adds that at Foch’s request Pershing then regrouped quickly for the Meuse-Argonne offensive, despite his own plans to advance towards Metz.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 462–465" }, { source: 3 }],
          battleSlugs: ["meuse-argonne"],
        },
      ],
      witnesses: [
        {
          who: "Ferdinand Foch, Memoirs",
          stake:
            "The coordinator himself, writing in the 1920s and careful to show his allies’ good sense.",
          says: "The Doullens powers were plainly inadequate; the role of coordinator had to become one of direction.",
          refs: [{ source: 0, locator: "pp. 312–313" }],
        },
        {
          who: "Haig’s despatch",
          stake: "The British commander-in-chief’s public report.",
          says: "When he asked Foch for relief in April, Foch complied without delay.",
          refs: [{ source: 1, locator: "p. 239" }],
        },
        {
          who: "Britannica on Foch",
          stake: "An admiring account by Charles-André Laffargue.",
          says: "Foch’s help to the British in April weakened the French front, and Ludendorff broke through it in May.",
          refs: [{ source: 2 }],
        },
        {
          who: "Britannica on Pershing",
          stake:
            "An unsigned article that sets out Pershing’s case for an independent army.",
          says: "Pershing insisted on keeping the American army intact against Allied pressure for amalgamation, but placed his resources at Foch’s disposal when Paris was threatened.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "The Beauvais agreement made persuasion structural. Foch could direct strategy, but every commander-in-chief kept his tactics and the right to appeal to his government, so an order that a partner thought dangerous would come back as a political question. In practice Foch’s instructions had to be arguments that each partner could accept as his own. The next lesson shows the arrangement working in reverse, when Haig argued Foch out of an order and Foch conceded.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 313–314, 445–446" }],
        },
        {
          text: "Coordination also has a dilemma that no argument removes: reserves sent to the threatened point weaken somewhere else. Judged without hindsight, sending French divisions north in April was sound, since the British were being pushed back towards the sea and the coalition could not survive their defeat. The cost fell on the Aisne in May. A coordinator who helps one partner at another’s expense has to be trusted by both, and Foch went on to direct the summer’s offensives after a breakthrough on his own country’s front.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "p. 239" }, { source: 2 }],
        },
      ],
      psychologist: [
        {
          mechanism: "No reliable mechanism offered",
          base: "none",
          text: "Research on influence without formal authority exists, but none of it was read for this lesson, and the record is unusually direct: written notes, letters and agreements in which Foch’s arguments and his allies’ answers survive. The lesson relies on them.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological claim is made. Foch’s memoir is the main witness to his own persuasiveness, and should be read as such.",
        },
      ],
      shadow: {
        text: "Persuasion has a price in time and in exposure. The Doullens agreement had to be rewritten within a week because coordination could not act fast enough, and Foch’s help to the British in April left the French front thin enough for the German breakthrough of 27 May, which Britannica says carried the enemy to the Marne. A coordinator who must move reserves by agreement will sometimes move them too late, or move them away from the next blow.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "pp. 312–313" }, { source: 2 }],
      },
      counterCase: {
        text: "Pershing met the coalition from the opposite position: a partner with fresh troops and the right to say no. Britannica writes that he insisted from the start on preserving the integrity of the American army, resisted Allied pressure to feed American units into French and British formations, and opposed diverting troops to secondary theatres; his stance strained the exhausted Allies, and the disasters of early 1918 seemed to show the risk. When the German offensives threatened Paris he placed all his resources at Foch’s disposal, then reverted to his policy when the pressure passed. His independent army took Saint-Mihiel, and its inexperience and incomplete preparations slowed the Meuse-Argonne. A partner who keeps his veto can strengthen a coalition, or make it wait.",
        evidence: "interpretation",
        refs: [{ source: 3 }],
        commanderSlug: "john-j-pershing",
        battleSlugs: ["meuse-argonne"],
      },
      cost: {
        text: "The breakthrough of 27 May fell on French divisions holding a front Foch had thinned to help the British; Britannica records that it carried the Germans to the Marne. In the autumn, Britannica writes of the Meuse-Argonne, incomplete preparations and inexperience slowed the American operations that Pershing had regrouped for at Foch’s request.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "You must move people or resources you do not control, and each owner can refuse.",
          "The arrangement has to work at speed, and every partner has a reason to protect their own first.",
        ],
        failsWhen: [
          "One partner’s refusal would destroy the whole, and someone must be able to overrule it.",
          "Persuasion becomes endless negotiation, and the moment for action passes.",
        ],
        questions: [
          "Whom do you depend on that you cannot order, and how do you put your requests to them?",
          "What right of refusal does each partner in your work hold, and is it written down?",
          "When you help one part of your organisation, which other part pays?",
        ],
      },
      bearsOn:
        "Coordination is where the coalition visibly learned. In 1914 it worked by a note on a sheet of paper; in 1916 Haig wrote that goodwill was enough; in 1918 it became a written mandate that combined Foch’s strategic direction with the partners’ tactical control and rights of appeal. That was learning at the level of the alliance, bought by the crisis of March. Its price included the French front thinned in April and broken in May.",
      questions: [
        {
          prompt:
            "What did Foch hand to Sir John French at Vlamertinghe on 31 October 1914?",
          choices: [
            "An order from Joffre.",
            "A written note of his argument that it was essential not to retreat.",
            "A request for British reinforcements.",
          ],
          answer: 1,
          explanation:
            "French endorsed it in his own hand and sent it to Haig, and the I Corps retreat was countermanded.",
        },
        {
          prompt:
            "What did the Beauvais agreement leave to each commander-in-chief?",
          choices: [
            "Nothing; Foch commanded everything.",
            "Full control of the tactical employment of his forces, and the right to appeal to his government.",
            "The right to choose the strategy of the war.",
          ],
          answer: 1,
          explanation:
            "Foch gained strategic direction, and each partner kept a means of refusal.",
        },
        {
          prompt:
            "Why did Pershing resist amalgamation, according to Britannica?",
          choices: [
            "Because he distrusted the French artillery.",
            "Because he wanted to keep the American army intact as an independent force.",
            "Because his government had forbidden any cooperation.",
          ],
          answer: 1,
          explanation:
            "He also placed his resources at Foch’s disposal when Paris was threatened, which shows the veto being used flexibly.",
        },
      ],
      seminar: {
        prompt:
          "Foch’s note at Ypres worked because Sir John French could sign it as his own. Draft the note you would need to send to a partner you cannot order, about a decision they would rather not make.",
        guidance:
          "Look at what Foch’s note contains: the danger, the reason, a concrete instruction, and an offer of help. Compare his later letter to Pershing, which gave him a choice between two ways of doing what Foch wanted.",
      },
      sources: [s.fochMemoirs, s.despatches, s.britFoch, s.britPershing],
    },
    {
      slug: "knowing-when-to-switch",
      title: "Knowing when to switch: Amiens, August 1918",
      part: "Sharing command, 1918",
      themes: ["restraint", "judgement"],
      claim:
        "When an attack has lost the surprise that made it succeed, breaking it off and striking elsewhere can achieve more than pressing on, but only if the commander sees the change for himself and a superior can be persuaded.",
      inBrief: {
        strength:
          "Haig broke off a stalled attack after four days, switched the blow north, and persuaded Foch to agree.",
        shadow:
          "The judgement that served him in August 1918 had failed him in 1916 and 1917, and his despatch leaves out the argument with Foch.",
      },
      moment: {
        text: "On the afternoon of 14 August 1918 Foch was driving to see Pétain when an English officer overtook him by aeroplane with a letter from Haig. German artillery fire had increased, Haig wrote, the old Chaulnes–Roye line was solidly held, and he had decided to postpone the attack planned for the 16th until an adequate preparation made it possible in the best conditions. Foch replied at once that he could see no reason to wait, and that evening wrote again that any postponement would have the most serious consequences. The Allied commander-in-chief had ordered an attack, and the British commander-in-chief had declined to make it on the day.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 444–445" }],
      },
      episodes: [
        {
          title: "Surprise on 8 August",
          text: "The battle had begun as a model of the new methods. Britannica writes that the Allies made a show of weakening their front, moved troops forward at night and used bogus radio traffic to deceive the Germans, and attacked without a preliminary bombardment to keep surprise. The German defenders, outnumbered and unprepared, gave way, and Ludendorff called 8 August the black day of the German army. Haig’s despatch records that within five days Amiens and its railway had been disengaged and the line pushed forward about twelve miles in a vital sector.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 1, locator: "p. 263" }],
          battleSlugs: ["amiens-1918"],
        },
        {
          title: "The old battlefield",
          text: "By the night of 12 August, Haig’s despatch says, the advance had reached the old Roye–Chaulnes defences: a derelict battle area of old trench lines, shell holes and tangled wire, overgrown by two years of vegetation, which offered unrivalled opportunities for machine-gun defence. Attacks proved the strength of these positions and showed that the enemy, heavily reinforced, was ready to fight for them. ‘I therefore determined to break off the battle on this front,’ the despatch says, and to transfer the attack north of the Somme, where the Third Army could strike where it was not expected, on ground not greatly damaged by shellfire. A footnote adds that on 10 August Haig had visited a division at the front and personally satisfied himself that the enemy’s opposition had stiffened. Britannica writes that the battle ended as the Canadian commander Arthur Currie urged the Allied leadership to consolidate its gains.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 262–264" }, { source: 2 }],
          battleSlugs: ["amiens-1918"],
        },
        {
          title: "Persuading the generalissimo",
          text: "On 15 August, Foch writes, General Debeney told him the attack on Roye would be difficult and that his army would be too weak to sustain it. That afternoon Haig repeated his reasons: the attack south of the Somme would be hard and its success doubtful, even at the price of considerable losses, and the same result could be obtained more surely by the Third Army attacking north of the Ancre and turning the line of the Somme. Foch writes that he definitely came round to Haig’s opinion and changed his orders, on condition that the Third Army’s attack was strong enough to restart the drive south of the river. Haig’s despatch mentions none of this; it says only that he decided to break off, and that the French First Army ceased to be under his command.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "pp. 445–446" },
            { source: 1, locator: "p. 263" },
          ],
          battleSlugs: ["amiens-1918"],
        },
      ],
      witnesses: [
        {
          who: "Ferdinand Foch, Memoirs",
          stake:
            "The superior who was overruled, writing in the 1920s with nothing to gain from admitting it.",
          says: "Haig’s reasons were sound, and he came round to them, with a condition.",
          refs: [{ source: 0, locator: "pp. 445–446" }],
        },
        {
          who: "Haig’s despatch",
          stake:
            "Haig’s public account, which omits the disagreement with Foch.",
          says: "The enemy was ready to fight for the old positions, so he broke off and struck elsewhere.",
          refs: [{ source: 1, locator: "p. 263" }],
        },
        {
          who: "Britannica on Amiens",
          stake:
            "An article first published by The Canadian Encyclopedia, attentive to the Canadian Corps.",
          says: "The battle ended as Currie urged the Allied leadership to consolidate its gains.",
          refs: [{ source: 2 }],
        },
        {
          who: "Erich Ludendorff, as Britannica and the despatch quote him",
          stake: "The defeated commander, in his memoirs.",
          says: "8 August was the black day of the German army in the war.",
          refs: [{ source: 2 }, { source: 1, locator: "p. 263" }],
        },
      ],
      strategist: [
        {
          text: "Set beside 1916 and 1917, the decision stands out. On the Somme and at Passchendaele attacks went on for months after surprise was gone; here Haig broke off after four days. The difference is partly circumstance: the ground ahead was the old Somme battlefield, ideal for defence, and an alternative existed in a sector the enemy did not expect. It is also method. The despatch says he went forward on 10 August and saw the resistance stiffen for himself, where in 1917 he had judged German collapse from headquarters and reports.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "pp. 262–264" }, { source: 6 }],
        },
        {
          text: "The command structure helped. Under the Beauvais agreement Foch directed strategy and Haig controlled his armies’ tactics, with a right of appeal behind him, so the disagreement was settled by argument within days. Foch conceded but attached a condition that kept his aim, a renewed drive south of the river. Neither man gave up his responsibility, and the result was better than either had first proposed.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 313, 445–446" }],
        },
      ],
      psychologist: [
        {
          mechanism: "A superior’s openness to voice",
          base: "single study",
          text: "Detert and Burris studied 3,149 employees and 223 managers in a restaurant chain and found that managerial openness was more consistently related to subordinates’ improvement-oriented voice than transformational leadership was, through subordinates’ sense of psychological safety, and that leaders’ behaviour mattered most for the best performers. In August 1918 the superior was open: Foch heard Haig’s case, consulted a French army commander, and changed his orders. The contrast with Passchendaele, where doubts stayed in diaries, is a contrast in the channel as much as in the man.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
          limit:
            "Only the abstract was read. Restaurant employees speaking to managers are not commanders-in-chief with a right of appeal to their governments, and the study cannot explain Foch’s motives.",
        },
      ],
      shadow: {
        text: "The same judgement had failed him before. In October 1917, Britannica writes, Haig ordered deeper attacks at Passchendaele as the ground turned to mud, telling the government that German resistance might break at any moment. The ability to break off a battle that has lost its purpose was not a fixed trait; it appeared when surprise, ground, an alternative and first-hand knowledge all pointed the same way.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        battleSlugs: ["passchendaele"],
      },
      counterCase: {
        text: "Ludendorff did the opposite through the spring and summer of 1918. Laffargue writes in Britannica that, holding the initiative and superior numbers, Ludendorff redoubled his attacks after being stopped in Picardy and Flanders, broke through the French front in May, opened a new gap at the Oise in June, and on 15 July gambled everything he had in Champagne and was stopped within two days. Görlitz writes that he had overestimated the strength of the German armies. Each offensive was pressed after its surprise was spent, and no switch to a defensive posture came until the army that would have needed it was worn out.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 5 }],
        commanderSlug: "erich-ludendorff",
        battleSlugs: ["operation-michael"],
      },
      cost: {
        text: "Even four successful days were paid for, on both sides; Britannica gives figures that the lesson does not repeat. Haig’s despatch says that in the months that followed, suffering, danger and losses were alike forgotten in the troops’ desire to beat the enemy. It is a commander’s sentence about men whose losses it does not count.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 1, locator: "p. 264" }],
      },
      transfer: {
        holdsWhen: [
          "An effort that worked because of surprise or novelty is now meeting prepared resistance.",
          "There is another place to apply the same effort where it is not expected.",
        ],
        failsWhen: [
          "Breaking off would give the opponent time to recover from a blow that is close to decisive.",
          "Switching becomes a habit, and no effort is ever pressed to its result.",
        ],
        questions: [
          "Which of your current efforts succeeded at first because it was unexpected, and is it still?",
          "When did you last see the resistance for yourself rather than in a report?",
          "Who above you could be persuaded to change an order, and how would you put the case?",
        ],
      },
      bearsOn:
        "Amiens is the clearest evidence in the volume that Haig learned something about stopping. In 1916 and 1917 attacks continued long after surprise was gone; in August 1918 he broke one off within days, went to see for himself, argued with his superior and switched the blow. The coalition’s structure made the argument possible. If learning is measured by what changed in the commander, this is where the evidence is strongest, and it came after the price had already been paid.",
      questions: [
        {
          prompt:
            "Why did Haig break off the Amiens attack, according to his despatch?",
          choices: [
            "Because Foch ordered him to stop.",
            "Because the old Roye–Chaulnes defences were strongly held by a reinforced enemy, and an unexpected sector lay to the north.",
            "Because his tanks had run out of fuel.",
          ],
          answer: 1,
          explanation:
            "The despatch adds that he had seen the stiffening resistance for himself on 10 August.",
        },
        {
          prompt: "How did Foch respond to Haig’s arguments on 15 August?",
          choices: [
            "He dismissed Haig.",
            "He came round to Haig’s opinion and changed his orders, on condition that the drive south of the Somme was resumed.",
            "He appealed to the British government.",
          ],
          answer: 1,
          explanation:
            "The superior was persuaded, and kept his aim through a condition.",
        },
        {
          prompt:
            "What did Detert and Burris find most consistently related to employees speaking up?",
          choices: [
            "The manager’s charisma.",
            "The manager’s openness, through employees’ sense of psychological safety.",
            "The employees’ pay.",
          ],
          answer: 1,
          explanation:
            "Foch’s openness in August 1918 is the coalition-level version of the same thing.",
        },
      ],
      sourceCheck: {
        question: "Who decided to break off the Amiens attack in August 1918?",
        witnesses: [
          {
            label: "Haig’s despatch",
            claim:
              "Haig determined to break off the battle and transfer the attack north.",
          },
          {
            label: "Foch’s Memoirs",
            claim:
              "Haig postponed the attack and argued for the switch; Foch came round to his opinion and changed his orders.",
          },
          {
            label: "Britannica on Amiens",
            claim:
              "The battle ended as Currie urged the Allied leadership to consolidate its gains.",
          },
        ],
        prompt: "How should a reader combine these accounts?",
        options: [
          {
            text: "Credit Haig alone, as his despatch does.",
            feedback:
              "His despatch omits Foch’s orders and objections; it is the account of the man who won the argument.",
          },
          {
            text: "Credit Currie, because the Canadian account says so.",
            feedback:
              "Currie’s advice is recorded, from a Canadian source; it was one voice among several, and Haig made the decision.",
          },
          {
            text: "See a decision made by argument: Currie and Debeney advised, Haig decided and persuaded, and Foch agreed with a condition.",
            feedback:
              "Each witness shows the part that its author or tradition cared about; together they show how the coalition decided.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Compare Haig’s decision to break off at Amiens on 15 August 1918 with his decision to continue at Passchendaele after 4 October 1917. List what was different in each case: the ground, the alternatives, the information and the command arrangement.",
        guidance:
          "Use the despatch for both decisions and Foch’s memoir for 1918. Ask which differences were in Haig and which were in the situation.",
      },
      sources: [
        s.fochMemoirs,
        s.despatches,
        s.britAmiens,
        s.britFoch,
        s.detertBurris,
        s.britLudendorff,
        s.britPasschendaele,
      ],
    },
    {
      slug: "the-general-battle",
      title: "The general battle: the Hundred Days, 1918",
      part: "Sharing command, 1918",
      themes: ["organisation", "judgement"],
      claim:
        "When an enemy is weakening along a whole front, many converging blows under one direction can achieve what no single decisive attack could, but only if the commanders below are trusted with their part, and the pace is paid for by troops who get no rest.",
      inBrief: {
        strength:
          "Foch’s general battle and the British armies’ succession of attacks broke the German army in a hundred days.",
        shadow:
          "No respite for the enemy meant none for the Allied troops; corps were driven until they were worn out.",
      },
      moment: {
        text: "On 1 September 1918, in a letter to Pershing, Foch defined what he was organising. His note of the previous day, he wrote, had contemplated organising immediately a general battle of the Allied armies: in a predetermined direction, with the maximum of Allied forces, in the shortest possible time, and under the best conditions of supply. The next day the commanders-in-chief met at his headquarters, and on 3 September he sent them a general instruction. The battle he had in mind, he had written days before, required bringing all the Allied armies into it.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 462–465" }],
      },
      episodes: [
        {
          title: "Converging blows",
          text: "Haig’s despatch describes the design. The French and American armies were to press attacks in a converging direction towards Mézières, while the British, attacking towards St Quentin and Cambrai, struck directly at the lateral railways through Maubeuge on which the German armies in Champagne depended; to protect them the enemy relied on the fortified zone of the Hindenburg Line. Foch, introducing the despatches, calls the British part a series of violent and repeated attacks linked with the French, American and Belgian blows in a converging assault from the North Sea to the Moselle, an unbroken offensive of 116 days. Philpott calls Foch’s general battle the first truly modern operational offensive.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. xi–xiii, 257" }, { source: 2 }],
          battleSlugs: ["amiens-1918", "meuse-argonne"],
        },
        {
          title: "The corps that did the work",
          text: "The battle was fought by corps and armies that planned their own attacks. John Monash took command of the Australian Corps in May 1918; the Australian War Memorial describes his conferences with officers to generate ideas and make sure everyone knew the plan, his preference for many weapons working together so that the whole was greater than the sum of its parts, and his use of gas and smoke shells together for days before an attack, then smoke alone, to confuse the defenders. Peter Pedersen writes that Monash aimed to use artillery, tanks and aircraft to spare the infantry the obligation to fight its way forward, and that Haig called him a most thorough and capable commander who left nothing to chance.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 5 }],
          battleSlugs: ["amiens-1918"],
        },
        {
          title: "No respite",
          text: "Haig’s final despatch states the principle: when the enemy weakens, the greatest possible pressure must be kept up against his whole front, and at the crisis every man, horse and gun is required. Britannica writes that Foch intensified the offensive from August, giving no respite to the enemy nor to his own troops, until the German army, exhausted, dwindling, threatened by revolution at home and abandoned by its allies, was forced to ask for an armistice. The American part was harder than planned: Pershing regrouped quickly for the Meuse-Argonne at Foch’s request, and Britannica writes that incomplete preparations and inexperience slowed the operations.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "p. 320" },
            { source: 3 },
            { source: 7 },
          ],
          battleSlugs: ["meuse-argonne"],
        },
      ],
      witnesses: [
        {
          who: "Ferdinand Foch",
          stake:
            "The director of the general battle, in his memoir and in his introduction to Haig’s despatches.",
          says: "The battle needed a set direction, the most forces, the least time and sound supply; the British part was a series of violent, repeated attacks in a converging assault.",
          refs: [
            { source: 0, locator: "pp. 463–464" },
            { source: 1, locator: "p. xii" },
          ],
        },
        {
          who: "Haig’s final despatch",
          stake: "The British commander-in-chief, writing after the victory.",
          says: "At the crisis the greatest possible pressure must be maintained against the whole front.",
          refs: [{ source: 1, locator: "p. 320" }],
        },
        {
          who: "William Philpott",
          stake:
            "A historian who credits the French more than the British debate does.",
          says: "Foch’s general battle was the first truly modern operational offensive.",
          refs: [{ source: 2 }],
        },
        {
          who: "Peter Pedersen",
          stake:
            "A former acting assistant director of the Australian War Memorial and historian of Monash.",
          says: "Monash planned exhaustively to spare his infantry, and could also be ruthless about losses.",
          refs: [{ source: 5 }],
        },
      ],
      strategist: [
        {
          text: "Foch’s lectures had called a battle of uniform pressure along the whole front inferior, because the defender’s fire made his resistance more efficient than the attack. The general battle of 1918 was not uniform. Its blows converged on chosen directions against the enemy’s railways, followed each other quickly enough to deny him time to move his reserves, and were made by armies whose methods had changed since 1916. Concentration came in time and direction rather than at a single point.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "p. 257" },
            { source: 0, locator: "p. 463" },
          ],
        },
        {
          text: "A general battle cannot be run from one headquarters. Foch set the directions and the timetable; Haig chose where to strike within the British sector, switching between armies; corps commanders like Monash planned the attacks in detail. The direction was centralised and the execution devolved, which is close to what the Beauvais agreement had written down in April.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 313, 463–465" },
            { source: 1, locator: "p. 263" },
            { source: 4 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Empowering leadership",
          base: "meta-analysis",
          text: "Lee and colleagues combined data from 105 samples and found that empowering leadership, which shares authority and autonomy with those led, had positive effects on performance, on helpful behaviour beyond the job, and on creativity, for individuals and for teams, partly through trust in the leader and a sense of empowerment. The Hundred Days fit the pattern at the top of the chain: Foch left tactics to the commanders-in-chief, and Monash’s conferences shared the planning with his officers.",
          evidence: "interpretation",
          refs: [{ source: 6 }],
          limit:
            "Only the abstract was read. The samples are modern organisations, not armies at war, and the same corps commanders who shared planning also ordered attacks regardless of losses, which the research does not describe.",
        },
      ],
      shadow: {
        text: "No respite for the enemy meant none for the attackers. Britannica says Foch gave no respite to his own troops either, and Haig’s principle required every man, horse and gun at the crisis. Pedersen writes that when the Australian Corps left the line in October it was badly depleted and totally exhausted, and that Monash had brushed aside pleas from Hobbs and others that their men were worn out. A general battle wins by wearing the enemy out faster than one’s own army; it does not spare one’s own army.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 1, locator: "p. 320" }, { source: 5 }],
      },
      counterCase: {
        text: "Monash shows the general battle from inside one corps. The Australian War Memorial quotes Montgomery’s later judgement that he was the best general on the Western Front; Pedersen describes the method behind it, exhaustive planning, all arms working together, and attacks designed so that machines rather than men did the fighting forward. Pedersen also records the other side: Monash told his officers to hypnotise themselves into complete indifference over losses, ordered one objective taken regardless of casualties, and drove his corps until it was spent. The corps commander who did most to spare his infantry in each attack still spent them across the campaign.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 5 }],
        commanderSlug: "john-monash",
        battleSlugs: ["amiens-1918"],
      },
      cost: {
        text: "The Australian Corps, Pedersen writes, came out of the line in October 1918 badly depleted and totally exhausted. The Americans in the Meuse-Argonne, Britannica writes, fought with incomplete preparations and inexperience. The general battle ended the war in a hundred days, and its price was paid daily by the divisions kept in action through them.",
        evidence: "fact",
        refs: [{ source: 5 }, { source: 7 }],
      },
      transfer: {
        holdsWhen: [
          "A competitor or problem is weakening across a broad front, and no single effort will finish it.",
          "Those carrying out each part can be trusted to plan it themselves within a common direction.",
        ],
        failsWhen: [
          "The opponent is not yet weakening, and simultaneous efforts only spread your resources thin.",
          "The people doing the work are already exhausted, and the pace consumes what it is meant to win.",
        ],
        questions: [
          "Which parts of your effort could move at the same time under a shared direction, and who would plan each?",
          "What would you need to know to judge that your opponent or problem is weakening everywhere at once?",
          "Who is paying for the pace you have set, and have you asked them?",
        ],
      },
      bearsOn:
        "The Hundred Days are the strongest evidence that the generals learned. Foch directed a general battle that his lectures would not have recognised; Haig’s armies attacked with methods developed since 1916; corps commanders like Monash planned with a thoroughness the first day of the Somme had lacked. Haig’s final despatch claims this victory depended on the two years before it. The methods did: tanks, artillery and all-arms planning were developed in those years. Whether the attrition of 1916 and 1917 was also required is the question the last lesson takes up.",
      questions: [
        {
          prompt:
            "What four conditions did Foch set for the general battle in his letter to Pershing?",
          choices: [
            "Surprise, cavalry, aircraft and gas.",
            "A predetermined direction, the maximum of Allied forces, the shortest possible time, and the best conditions of supply.",
            "A single point of attack, a long bombardment, a reserve and a pursuit.",
          ],
          answer: 1,
          explanation:
            "Concentration came in direction and time, with every army taking part.",
        },
        {
          prompt:
            "How did Monash aim to spare his infantry, according to Pedersen?",
          choices: [
            "By refusing to attack.",
            "By using artillery, tanks and aircraft to relieve the infantry of fighting its way forward.",
            "By attacking only at night.",
          ],
          answer: 1,
          explanation:
            "The same commander drove his corps to exhaustion across the campaign.",
        },
        {
          prompt:
            "What does Britannica say about Foch’s offensive from August 1918?",
          choices: [
            "That it paused every few weeks to rest the troops.",
            "That it gave no respite to the enemy nor to his own troops.",
            "That it was fought only by the French.",
          ],
          answer: 1,
          explanation:
            "The pace that broke the German army also wore out the Allied divisions.",
        },
      ],
      seminar: {
        prompt:
          "Haig’s final despatch argues that the victories of 1918 depended on the battles of 1916 and 1917. Separate the claim into two parts, the methods and the attrition, and judge each on the evidence of this volume.",
        guidance:
          "Use the lessons on the Somme, Passchendaele and where the learning happened for the methods. For attrition, ask what evidence exists that the German army of 1918 was weaker because of 1916 and 1917, and who supplies it.",
      },
      sources: [
        s.fochMemoirs,
        s.despatches,
        s.philpott,
        s.britFoch,
        s.awmMonash,
        s.pedersen,
        s.leeWillisTian,
        s.britPershing,
      ],
    },
    {
      slug: "how-to-end-it",
      title: "How to end it: the armistice terms, October and November 1918",
      part: "Ending and accounting",
      themes: ["judgement", "restraint"],
      claim:
        "When a beaten enemy asks for terms, the commander’s judgement of how beaten it is shapes the peace as much as the battles did, and both moderation and severity carry risks the victor cannot fully see.",
      inBrief: {
        strength:
          "Haig argued for terms the enemy would accept; Foch secured terms that left Germany unable to resume the war, and warned against demands that would cost lives for little gain.",
        shadow:
          "Haig underestimated how far the German army had collapsed, and the armistice ended the fighting without ending the claim that the German army had not been beaten.",
      },
      moment: {
        text: "On the afternoon of 25 October 1918 Foch called the commanders-in-chief to his headquarters at Senlis and asked each in turn what the armistice conditions should be. Haig spoke first. In his opinion, Foch writes, the German army as a whole was not so broken that it could not still offer serious resistance; it could retire to the German frontier and defend it against equal or even superior forces. The British army was under strength, the French army exhausted and the American army incompletely organised. The conditions should therefore be moderate: the evacuation of Belgium and occupied France and of Alsace-Lorraine, with Metz and Strasbourg delivered to the Allies, and the return of rolling stock and civilians.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 535–537" }],
      },
      episodes: [
        {
          title: "Four answers at Senlis",
          text: "Pétain proposed that the Allies occupy the left bank of the Rhine, with bridgeheads on the right bank, and that Germany surrender locomotives and railway trucks. Pershing judged the military situation most favourable and proposed severe conditions, among them withdrawal to the right bank of the Rhine and the surrender of all submarines. Foch found Haig’s reasons not well founded. In a few months, he writes, the German army had lost an enormous amount of ground, prisoners and material; it was a beaten army and must be badly shaken. Victorious forces are never fresh, he answered, and the victor often loses as heavily as the vanquished, but that did not mean the Germans were anything but thoroughly disorganised. The draft conditions included the evacuation of the left bank of the Rhine and Allied bridgeheads across it.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 537–538" }],
          battleSlugs: [],
        },
        {
          title: "The Rhine and the naval clauses",
          text: "On 1 November the heads of the Allied governments examined the terms, and Haig repeated his view of 25 October, which, Foch writes, evidently expressed the opinion of Lloyd George and his colleagues. Foch argued that halting the Allied armies at the frontiers, with the Rhine in front of them, would leave Germany free to re-form its armies while peace was negotiated and to resume the fighting if it rejected the terms; his thesis was accepted. When the naval clauses grew so heavy that Germany might refuse the whole armistice, he warned the governments of the responsibility they would bear if more men had to be killed to win naval material of no value to the land operations. He was told to insert the clauses anyway. The Germans accepted everything.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 540–542" }],
          battleSlugs: [],
        },
        {
          title: "The end in the field",
          text: "At 11 a.m. on 11 November, Haig’s despatch records, hostilities were suspended on the instructions of the Allied commander-in-chief. By then, it says, the enemy was capable neither of accepting nor refusing battle, and a continuance of hostilities could only have meant disaster for the German armies. A footnote gives the reasons for not fighting on: supply difficulties would have greatly delayed the advance, widespread damage and further casualties would have followed, and the armistice in effect amounted to complete surrender. The final despatch adds that an advance against opposition would have caused immense loss of property and incalculable suffering to the inhabitants of Belgium, France and Luxembourg. Britannica writes that Foch dictated the conditions at Rethondes and returned to Metz on 26 November.",
          evidence: "fact",
          refs: [{ source: 1, locator: "pp. 298, 315–316" }, { source: 2 }],
          battleSlugs: ["meuse-argonne"],
        },
      ],
      witnesses: [
        {
          who: "Ferdinand Foch, Memoirs",
          stake: "The author of the terms, writing in the 1920s.",
          says: "Haig’s reasons for moderation were not well founded; the German army was beaten and disorganised, and the Rhine had to be held.",
          refs: [{ source: 0, locator: "pp. 537, 541–542" }],
        },
        {
          who: "Haig’s despatch",
          stake:
            "The British commander-in-chief, writing after the war was won.",
          says: "By 11 November the enemy could neither accept nor refuse battle; the armistice amounted to complete surrender, gained more quickly and at less cost than by fighting.",
          refs: [{ source: 1, locator: "p. 298" }],
        },
        {
          who: "Walter Görlitz, in Britannica",
          stake: "The author of Britannica’s article on Ludendorff.",
          says: "Ludendorff demanded an armistice, then wanted the war carried on when he saw its terms, and afterwards blamed a stab in the back.",
          refs: [{ source: 4 }],
        },
        {
          who: "Andreas Dorpalen, in Britannica",
          stake: "The author of Britannica’s article on Hindenburg.",
          says: "When the high command conceded defeat, Hindenburg let Ludendorff take the blame.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "On 25 October Haig could see an army of his own that was under strength, an ally he thought exhausted, and an American army that was still learning in the Meuse-Argonne. He weighed the risk that harsh terms would be refused and the fighting go on into 1919. Foch weighed the opposite risk, that moderate terms would let Germany re-form behind the Rhine. Both risks were real, and only one could be tested: Germany accepted everything. The despatch Haig wrote afterwards describes an enemy that could neither accept nor refuse battle, which is not the army he had described at Senlis.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 536–537, 541" },
            { source: 1, locator: "p. 298" },
            { source: 6 },
          ],
        },
        {
          text: "Ending a war also means deciding what the enemy will be able to tell itself about it. Görlitz writes that Ludendorff, having demanded immediate negotiations, insisted on fighting on once he saw how severe the terms were, and afterwards spread the legend that the army, undefeated in the field, had been betrayed at home. No source read here says whether different terms, or an advance into Germany, would have prevented that legend; Haig’s despatch counts the cost such an advance would have had for the people of the invaded countries.",
          evidence: "interpretation",
          refs: [{ source: 4 }, { source: 1, locator: "pp. 315–316" }],
        },
      ],
      psychologist: [
        {
          mechanism: "No reliable mechanism offered",
          base: "none",
          text: "It would be easy to explain Haig’s caution or Foch’s firmness by a trait of character, and no source read here supports either. The minutes of Senlis, as Foch reports them, show four commanders reasoning from different information and different national interests; the lesson relies on that record.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological claim is made. Foch’s account of the meeting is the only one read, and he was a party to it.",
        },
      ],
      shadow: {
        text: "A judgement of the enemy’s strength can fail in either direction, and Haig’s did both. At Passchendaele in October 1917, Britannica writes, he told the government that German resistance might break at any moment, and it did not. At Senlis in October 1918 he said the German army could still defend its frontier, and within days, by his own despatch, it could neither accept nor refuse battle. The estimate that matters most at the end of a war is the hardest to make, because the evidence of collapse arrives last.",
        evidence: "interpretation",
        refs: [
          { source: 5 },
          { source: 0, locator: "p. 536" },
          { source: 1, locator: "p. 298" },
        ],
      },
      counterCase: {
        text: "Hindenburg ended the war from the losing side, and how he did it outlasted the armistice. Dorpalen writes in Britannica that when the high command conceded defeat, Hindenburg let Ludendorff take the blame; he then directed the withdrawal of the German forces from France and Belgium, had his staff suppress left-radical risings at home, preserved the old officer corps and retired in 1919 to cultivate his image as a nonpartisan national hero. Görlitz adds that the emperor ordered Hindenburg to remain at his post when Ludendorff resigned. A commander who does not own a defeat leaves the account of it to others, and in Germany the account that prevailed was the legend Ludendorff spread.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 4 }],
        commanderSlug: "paul-von-hindenburg",
        battleSlugs: ["operation-michael"],
      },
      cost: {
        text: "The last weeks were paid for by troops at the end of failing supply lines. Haig’s final despatch records that leading divisions were denied for long periods anything beyond bare necessities, and that on more than one occasion the only food was the day’s ration carried on the man; the British army also fed nearly 800,000 civilians in the liberated districts of France alone. An advance into Germany, the despatch says, would have added immense loss and incalculable suffering for the inhabitants of the invaded countries.",
        evidence: "fact",
        refs: [{ source: 1, locator: "pp. 315–316" }],
      },
      transfer: {
        holdsWhen: [
          "An opponent or rival has asked for terms, and you must judge how weak they really are.",
          "Your own side is tired, and the temptation is either to settle cheaply or to demand everything.",
        ],
        failsWhen: [
          "The opponent is not really beaten and is using talks to recover.",
          "The terms are set by others, and the commander’s view is only one input among many.",
        ],
        questions: [
          "When you last settled a conflict, how did you judge how much the other side could still do?",
          "Which of your demands would cost more to win than it is worth?",
          "What will the other side be able to tell itself about how the conflict ended?",
        ],
      },
      bearsOn:
        "The armistice tests learning in an unexpected direction. Haig, so often charged with overestimating the enemy’s weakness, now underestimated it and argued for moderation; Foch, the teacher of will, argued for terms that made renewal impossible and warned against demands that would cost lives for little gain. Both reasoned from 1918, and both counted the cost of going on. Whether the generals learned is answered here by how they stopped as much as by how they fought.",
      questions: [
        {
          prompt:
            "What did Haig argue at Senlis on 25 October 1918, according to Foch?",
          choices: [
            "That Germany should be invaded and occupied.",
            "That the German army could still offer serious resistance, so the terms should be moderate.",
            "That the war should continue until 1919 whatever happened.",
          ],
          answer: 1,
          explanation:
            "He also pointed to the state of the Allied armies; Foch found his reasons not well founded.",
        },
        {
          prompt: "Why did Foch insist on the Rhine?",
          choices: [
            "To annex the Rhineland to France.",
            "Because halting at the frontiers would let Germany re-form its armies behind the river and resume the war if it rejected the peace.",
            "Because the British government demanded it.",
          ],
          answer: 1,
          explanation:
            "His aim was a military guarantee for the negotiations, and the governments accepted it.",
        },
        {
          prompt:
            "What reasons does Haig’s despatch give for not fighting on after the armistice?",
          choices: [
            "That the troops had mutinied.",
            "Supply difficulties, damage to the countries crossed, further casualties, and the fact that the armistice amounted to complete surrender.",
            "That the Americans refused to advance.",
          ],
          answer: 1,
          explanation:
            "The despatch counts the cost of going on for soldiers and for the civilians of the invaded countries.",
        },
      ],
      seminar: {
        prompt:
          "At Senlis four commanders gave four answers to the same question. Choose the one you would have backed on 25 October 1918, using only what was known that day, and say what would have had to be true for it to be the right choice.",
        guidance:
          "Weigh the state of each army, the risk of refusal and the risk of renewal. Remember that Foch’s account is the only one read here, and that he was arguing for the terms he got.",
      },
      sources: [
        s.fochMemoirs,
        s.despatches,
        s.britFoch,
        s.britHindenburg,
        s.britLudendorff,
        s.britPasschendaele,
        s.britPershing,
      ],
    },
    {
      slug: "the-ledger-of-learning",
      title: "The ledger of learning: what it cost, and who paid",
      part: "Ending and accounting",
      themes: ["ethics", "judgement"],
      claim:
        "When a leader says the price of learning was unavoidable, the account has to separate the costs that bought the learning from those that bought nothing, and count those who paid without having a say.",
      inBrief: {
        strength:
          "An army transformed, a coalition welded under one direction, and a war ended in 1918.",
        shadow:
          "A price paid by soldiers of many nations, part of it for lessons an ally already knew and part for nothing; the executed were pardoned in 2006 with their convictions left standing.",
      },
      moment: {
        text: "Haig’s final despatch ends its account of the war with a verdict. The rapid collapse of Germany’s military power in the second half of 1918, it says, was the logical outcome of the fighting of the previous two years, and would not have taken place but for that period of ceaseless attrition, which used up the German reserves while the blockade sapped the strength of the German people. It is in the great battles of 1916 and 1917, he wrote, that we have to seek for the secret of our victory in 1918. In the wearing-out stage, he had written a few pages earlier, the price of victory is paid, and there is no way of avoiding it.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 320, 325–326" }],
      },
      episodes: [
        {
          title: "The commander’s account",
          text: "Haig’s despatch claims more than attrition. The battles of 1916 and 1917, it says, gave British soldiers a moral superiority over the German soldier that lasted to the end, even through March and April 1918. It also draws lessons that sit uneasily beside the rest of the record: the decision to keep the cavalry corps had been completely justified, and the idea that a war can be won by standing on the defensive is a dangerous fallacy. Britannica judges that Third Ypres, though it failed to reach the Belgian coast, weakened the Germans and helped prepare their defeat in 1918; the National Army Museum says a more professional and effective army emerged from the Somme and Passchendaele.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "pp. 325–327" },
            { source: 2 },
            { source: 1 },
          ],
          battleSlugs: ["somme", "passchendaele"],
        },
        {
          title: "The army that refused",
          text: "The French army reached a limit the British never did. Ducoulombier’s review of André Loez’s history of the 1917 mutinies describes them as a social movement in wartime, not a passing fit of fatigue, carried out mostly by young and relatively educated soldiers rather than habitual troublemakers. The wave of collective disobedience, he writes, imposed a halt to French offensives until the autumn, against Pétain’s wishes. Haig’s despatches register the same fact from outside: a footnote of 1919 lists, among the reasons for continuing Third Ypres, that the fighting capacity of the French armies was seriously diminished by grave internal troubles.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 0, locator: "p. 126" }],
          battleSlugs: [],
        },
        {
          title: "The executed and the pardoned",
          text: "The British army executed soldiers convicted of disciplinary offences during the war. In 2006 Parliament passed a section of the Armed Forces Act headed as pardons for servicemen executed for disciplinary offences, and recognising them as victims of the First World War. It covers anyone executed for offences committed between August 1914 and the armistice, among them cowardice, desertion, mutiny, disobedience and a sentry sleeping at his post. Each is taken to be pardoned. The section also states that the pardon does not affect any conviction or sentence, and gives rise to no right or entitlement.",
          evidence: "fact",
          refs: [{ source: 5 }],
          battleSlugs: [],
        },
        {
          title: "Those who paid from outside",
          text: "The price was not paid by the British alone. At Passchendaele, Britannica writes, Australian and New Zealand divisions were sent in beside the worn-out British, and the Canadians after them; Currie had predicted their cost almost exactly. Pedersen writes that the Australian Corps came out of the line in October 1918 badly depleted and totally exhausted. In the liberated districts of France, Haig’s final despatch records, the British army fed nearly 800,000 civilians, and it counts the incalculable suffering that a fighting advance would have brought to the inhabitants of the invaded countries.",
          evidence: "fact",
          refs: [
            { source: 6 },
            { source: 7 },
            { source: 0, locator: "pp. 315–316" },
          ],
          battleSlugs: ["passchendaele"],
        },
      ],
      witnesses: [
        {
          who: "Haig’s final despatch",
          stake: "The commander whose decisions it judges, writing in 1919.",
          says: "The victories of 1918 depended on the attrition of 1916 and 1917; the price could not be avoided.",
          refs: [{ source: 0, locator: "pp. 320, 326" }],
        },
        {
          who: "The National Army Museum",
          stake: "A national museum summarising a contested reputation.",
          says: "A more professional army emerged; Haig’s part in founding the British Legion showed concern for ex-servicemen; the popular view is still of an incompetent commander.",
          refs: [{ source: 1 }],
        },
        {
          who: "William Philpott",
          stake:
            "A historian who has re-assessed Haig and criticised the learning curve.",
          says: "The war’s armies were citizens led by soldiers, not lions led by donkeys.",
          refs: [{ source: 3 }],
        },
        {
          who: "Romain Ducoulombier, reviewing André Loez",
          stake:
            "A French historian reviewing the history of the mutineers rather than the generals.",
          says: "The soldiers’ refusal, not the commander’s wisdom, stopped the French offensives in 1917.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The volume’s evidence lets the price be divided. Part of it bought the learning: the first day of the Somme taught methods, and the tanks and the creeping barrage were developed in battle. Part of it was paid for lessons already available: the French sector south of the Somme on 1 July, and Plumer’s limited methods, worked before the British high command adopted them. Part of it bought very little: the last weeks of the Somme, and the deeper attacks at Passchendaele after 4 October 1917, for ground given up in 1918. Haig’s claim that attrition made 1918 possible cannot be tested from the sources read; Britannica partly supports it.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "p. 326" },
            { source: 6 },
            { source: 3 },
            { source: 2 },
          ],
        },
        {
          text: "The learning was uneven in who did it. Plumer’s army, the Tank Corps staff, Currie and Monash developed the methods; the coalition learned to unite its command in March and April 1918; Foch moved from the decisive blow of his lectures to the general battle; Haig learned, at Amiens, to break off a battle that had lost its purpose. His final despatch shows less change in what he believed: the offensive remained an axiom and the cavalry was vindicated.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "pp. 325–328" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Outcome bias in the ledger",
          base: "single study",
          text: "Baron and Hershey found that people rate a decision as better thought out when they know its outcome was good, even when they agree that outcomes should not count. The ledger is where that matters most. Victory in 1918 makes the battles of 1916 and 1917 look necessary, which is Haig’s argument; the horror of the first day of the Somme makes everything after it look futile, which is the popular view. A fair account judges each decision by what could be known when it was made.",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "Only the abstract was read. The participants were undergraduates judging medical and gambling decisions; the study warns about method and cannot weigh lives against lessons.",
        },
      ],
      shadow: {
        text: "The lessons the commander drew were not always the lessons the army had learned. Haig’s final despatch credits machines with greater driving power but insists that they cannot act independently, calls the cavalry indispensable, and restates the offensive as an axiom. Philpott argues that the real change was a transformation of methods, command and cooperation with allies, much of it worked out below the commander-in-chief. An account written to show that the price was necessary has little room for what was learned too late, or by others.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "pp. 325–330" }, { source: 3 }],
      },
      counterCase: {
        text: "Pétain is remembered as the commander who healed a mutinous army. Georges Blond writes in Britannica that he restored discipline with a minimum of repression, by explaining his intentions to the soldiers and improving their conditions. Ducoulombier’s review of Loez tells it differently: Pétain was named commander-in-chief on 15 May 1917, days before the government learned of the mutinies; the soldiers’ refusals forced the offensives to stop against his wishes; in early June he restored special courts-martial, and executions followed; and repression was held back by the political authorities more than by his moderation. In the French army the soldiers themselves set a limit to the price, and the record gave the credit to the general.",
        evidence: "interpretation",
        refs: [{ source: 9 }, { source: 4 }],
        commanderSlug: "philippe-petain",
        battleSlugs: [],
      },
      cost: {
        text: "Among those who paid were the soldiers the British army executed for disciplinary offences, pardoned by statute in 2006 with their convictions and sentences left in place, and the French mutineers condemned by the special courts-martial of 1917. The National Army Museum sees in Haig’s part in founding the British Legion a deep concern for the suffering of ex-servicemen, and Britannica records that he organised the Legion and travelled the empire raising money for those in need.",
        evidence: "fact",
        refs: [{ source: 5 }, { source: 4 }, { source: 1 }, { source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "Your organisation’s success was bought with heavy losses, and the people who led it are writing the account.",
          "Some of those who paid had no say in the decisions that cost them.",
        ],
        failsWhen: [
          "Every cost is treated as avoidable in hindsight, when nobody at the time could have known better.",
          "The account counts only your own losses, and not the allies, enemies or civilians who also paid.",
        ],
        questions: [
          "Which costs of your organisation’s hardest period bought something, and which bought nothing?",
          "Who paid part of that price without having a say?",
          "If your organisation learned something the hard way, who had already learned it, and why did you not listen?",
        ],
      },
      bearsOn:
        "This lesson answers the volume’s question. The generals did learn, unevenly and late, and much of the learning was done below them, beside them and by their enemies: the methods by armies and corps, the unity of command by a coalition in crisis, and the habit of stopping by Haig himself at Amiens. Was it worth its price? Part of the price bought the learning, part paid for lessons an ally already knew, and part bought very little, and Haig’s claim that all of it was unavoidable does not survive the evidence of 1918, when he showed that a battle could be broken off. Napoleon’s volume concluded that the problem got harder and he made it harder; Alexander’s, that the problem changed and his aims outran his men’s; the Serbian volume, that the commanders kept endurance from being wasted. The Western Front’s answer is that the generals learned, and that the soldiers paid both for the learning and for its slowness.",
      questions: [
        {
          prompt:
            "Where does Haig’s final despatch say the secret of the 1918 victory is to be found?",
          choices: [
            "In the arrival of the Americans.",
            "In the great battles of 1916 and 1917.",
            "In the tanks.",
          ],
          answer: 1,
          explanation:
            "His account makes the attrition of those years the condition of victory, and its price unavoidable.",
        },
        {
          prompt:
            "What does the 2006 pardon for executed soldiers leave unchanged?",
          choices: [
            "Nothing; it quashes every conviction.",
            "Their convictions and sentences.",
            "Their regiments’ names.",
          ],
          answer: 1,
          explanation:
            "The section recognises them as victims of the war and pardons them, without affecting any conviction or sentence.",
        },
        {
          prompt:
            "What does Ducoulombier’s review of Loez say stopped the French offensives in 1917?",
          choices: [
            "Pétain’s decision to rest the army.",
            "The wave of collective disobedience, against Pétain’s wishes.",
            "An order from the British.",
          ],
          answer: 1,
          explanation:
            "The soldiers set the limit, and the record gave the credit to the general.",
        },
      ],
      sourceCheck: {
        question: "Was the price of the British army’s learning unavoidable?",
        witnesses: [
          {
            label: "Haig’s final despatch",
            claim:
              "Yes: in a war of equal forces the wearing-out stage is where the price of victory is paid, and there is no way of avoiding it.",
          },
          {
            label: "William Philpott",
            claim:
              "The change was an uneven transformation shared with allies and enemies; on 1 July the French had already shown what enough well-controlled guns could do.",
          },
          {
            label: "The National Army Museum",
            claim:
              "Critics say Haig continued Passchendaele long after it was clear to many that men were dying for little gain; some historians blame the losses more on trench warfare and the army’s shortcomings than on individual commanders.",
          },
        ],
        prompt: "How should a reader weigh these answers?",
        options: [
          {
            text: "Accept Haig’s answer, because the war was won.",
            feedback:
              "That is the outcome bias the lesson warns against; victory does not show that every cost was needed.",
          },
          {
            text: "Reject it, because the losses were so great.",
            feedback:
              "The scale of the loss does not show which decisions could have been different; that needs the evidence of each one.",
          },
          {
            text: "Divide the price: some bought learning, some paid for lessons already known, some bought little, and judge each part by what could be known at the time.",
            feedback:
              "That is the strategist’s test applied to the ledger, and it gives a different answer for different years.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "This lesson concludes that the generals learned and that the soldiers paid both for the learning and for its slowness. Make the strongest case for the opposite: that the price could not have been much lower, given what anyone knew.",
        guidance:
          "Use Haig’s final despatch, the constraints described in the lessons on the Somme and Passchendaele, and the German army’s own learning. Then test your case against the French sector on 1 July 1916 and against Amiens.",
      },
      sources: [
        s.despatches,
        s.namHaig,
        s.britHaig,
        s.philpott,
        s.ducoulombier,
        s.pardons,
        s.britPasschendaele,
        s.pedersen,
        s.baronHershey,
        s.britPetain,
      ],
    },
  ],
};
