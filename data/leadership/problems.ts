import type { LeadershipProblem } from "../../lib/types";
// Problems that recur across the volumes, for /leadership/compare/ (batches T1
// to T3). Each note is an interpretation drawn only from the lessons it links,
// which carry the sources; it compares conditions and does not rank commanders.
export const leadershipProblems: LeadershipProblem[] = [
  {
    slug: "reading-the-record",
    title: "Reading the record",
    question:
      "Who made the record you are learning from, and what can you set against it?",
    lessons: [
      { volume: "napoleon-bonaparte", slugs: ["how-to-read-napoleon"] },
      { volume: "alexander-the-great", slugs: ["how-to-read-alexander"] },
      { volume: "radomir-putnik", slugs: ["how-to-read-the-serbian-front"] },
      { volume: "douglas-haig", slugs: ["how-to-read-the-western-front"] },
    ],
    note: "Each volume opens on the same problem in a different form. Napoleon wrote much of his own record and edited it while he still held power. Alexander’s was written by companions and a court historian whose books are lost, and survives in authors writing centuries later. The Serbian command’s became a nation’s memory, revised by each state that inherited it. On the Western Front the commanders wrote the official account after the victory: Haig’s despatches, edited by his private secretary, with cuts marked, reasons added in 1919, and an introduction in which Foch completed their account. All four orientation lessons give the same remedy, evidence from outside the record’s makers, and the same two warnings: a witness with a stake can still be right, and where only one account survives, the honest course is to say what cannot be known. What differs is where the outside evidence lies: in independent contemporaries, in a second family of ancient sources, in the enemy’s files, in the plans made before the outcome was known.",
  },
  {
    slug: "taking-over",
    title: "Taking over an organisation",
    question:
      "What did the leader inherit, and what did taking it over cost those who built it?",
    lessons: [
      { volume: "napoleon-bonaparte", slugs: ["inherit-before-you-invent"] },
      { volume: "alexander-the-great", slugs: ["a-borrowed-army"] },
    ],
    note: "Both volumes begin with an inheritance and ask the reader to look at it before crediting the leader. Napoleon inherited divisions, guns and ideas from the old army and the Revolution and organised them into a new kind of campaign; the legend that he made it all is partly his own work. Alexander inherited his father’s army and generals and told the Macedonians that the king had changed only in name. The difference lies in what the inheritance cost. Napoleon’s lesson is about credit: some of what looks like later decline may be inherited capital running out. Alexander’s is about loyalty: the inheritance was secured by killing a rival, its senior men served at the price of their independence, and two of them later died at his order or by his hand. The Serbian and Western Front volumes have no lesson on this problem.",
  },
  {
    slug: "presence",
    title: "Presence and shared risk",
    question:
      "What does a leader gain by sharing the risks and hardships of those they lead, and what is staked on it?",
    lessons: [
      { volume: "napoleon-bonaparte", slugs: ["be-seen-where-it-is-hardest"] },
      { volume: "alexander-the-great", slugs: ["the-king-in-the-front-rank"] },
      { volume: "radomir-putnik", slugs: ["the-retreat-that-kept-an-army"] },
    ],
    note: "All three volumes find that shared risk binds followers, and all three find where it stops. Napoleon’s presence at Lodi, Arcole and Jaffa built authority because his soldiers read the risk as theirs, which is also why it was worth staging. Alexander fought in the front rank, and at the Malli town the bond and the single point of failure were the same thing. The old Serbian king and the chief of staff crossed the mountains with the army, and it survived as an army, but presence could not feed, clothe or heal it; Allied ships and Corfu did that. Read together, the lessons set the conditions: the risk has to be of the same kind as the followers’, someone has to be able to take over if the leader falls, and presence is no substitute for supplies or rescue. The Western Front volume has no lesson on this problem.",
  },
  {
    slug: "adapting",
    title: "Reading the enemy",
    question:
      "How do you read an opponent you cannot fully see, and keep reading them after your method has worked?",
    lessons: [
      { volume: "napoleon-bonaparte", slugs: ["your-rivals-are-learning"] },
      { volume: "alexander-the-great", slugs: ["a-new-enemy-every-year"] },
      { volume: "radomir-putnik", slugs: ["where-will-the-blow-fall"] },
      {
        volume: "douglas-haig",
        slugs: ["the-doctrine-before-the-war", "where-the-learning-happened"],
      },
    ],
    note: "The four volumes watch the same contest from different sides. Napoleon’s method beat every army it met, and his opponents learned it faster than he renewed it. Alexander kept diagnosing each new enemy, horse archers, a walled pass, a guarded river, and found a different answer each time; his shadow came in the Gedrosian desert, where the problem was terrain, not an enemy. The Serbian command could not know where the blow would fall in 1914, waited until it showed itself and sent the Second Army west to Cer; it had expected the blow from the north, and waiting worked against an enemy that had divided itself. On the Western Front the method had to be relearned during the war: Foch had taught that better weapons favoured the attacker, the first battles disproved it, and the new methods of limited attacks, massed tanks and all-arms planning came largely from below and beside the commanders-in-chief, while the enemy learned too. Read together, the lessons suggest that a method travels only as far as the reading of the opponent behind it, and that each way of reading has its own blind spot: the confidence that comes from winning, habits built for opponents turned on terrain, dependence on seeing the threat in time, and a doctrine formed before the war it had to fight.",
  },
  {
    slug: "dissent",
    title: "Who can tell you no",
    question: "Who could tell the leader no, and what did it cost them?",
    lessons: [
      { volume: "napoleon-bonaparte", slugs: ["who-can-tell-you-no"] },
      {
        volume: "alexander-the-great",
        slugs: ["parmenions-advice", "the-cost-of-frankness"],
      },
      { volume: "radomir-putnik", slugs: ["after-the-chief"] },
      {
        volume: "douglas-haig",
        slugs: ["the-plan-that-was-neither", "what-reaches-the-top"],
      },
    ],
    note: "Each volume asks who could say no, and each finds the answer shaped by power. Napoleon had people who could still tell him no, but their objections had no effect unless he chose, and the price of ignoring correct advice grew once his margin had gone. Alexander heard Parmenion’s objections and often answered them with reasons, and when the Macedonians objected to prostration he let the proposal drop for them; yet men who spoke frankly near him were killed, and the record that shows Parmenion always wrong was written after Alexander had him killed. In the Serbian case, the trial at Salonika, which Britannica calls dubious, removed a rival centre of power with death sentences that a Belgrade court overturned in 1953, and showed everyone who remained what opposition could cost. The Western Front record shows less the cost of objecting than how quickly objection stopped: Rawlinson argued for a shorter advance on the Somme, was overruled, and carried out a plan he privately doubted, and at Passchendaele the cabinet’s chief military adviser kept his doubts from the cabinet while Haig’s staff tried to make their thoughts the children of his wishes. Read together, the lessons point to the same condition: dissent lasts where it has a route that does not depend on the leader’s choice, a route is no use if those who hold it stay silent, and the record of dissent is often kept by the side that won the argument.",
  },
  {
    slug: "stopping",
    title: "When to stop, when to persist",
    question:
      "When going on and stopping both cost something, what decides between them?",
    lessons: [
      {
        volume: "napoleon-bonaparte",
        slugs: ["knowing-when-to-stop", "the-last-reserve"],
      },
      {
        volume: "alexander-the-great",
        slugs: ["staying-at-tyre", "the-river-they-would-not-cross"],
      },
      {
        volume: "radomir-putnik",
        slugs: ["the-capital-or-the-army", "november-1915"],
      },
      {
        volume: "douglas-haig",
        slugs: [
          "why-the-somme-went-on",
          "what-reaches-the-top",
          "knowing-when-to-switch",
        ],
      },
    ],
    note: "All four volumes meet the moment when going on and stopping both cost something, and none settles it by temperament. Napoleon broke off at Acre and stayed in Moscow, and his lesson places the difficulty in what was staked on the outcome and whether anyone could release him from it, while leaving open whether he had also changed. Alexander stayed at Tyre while the siege served the strategy, went on at Gaza, where the reason given was reputation, and learned his army’s limit at the Hyphasis only by reaching it. The Serbian command gave up Belgrade to keep its army and, in November 1915, waited on help that did not come before taking the army out of the country. Haig shows both answers in one career: the Somme went on into November after its first reason was met, on a measure he admitted was an estimate, and Passchendaele went on as the weather broke, but at Amiens in 1918 he broke off within days, having seen the resistance for himself, and persuaded Foch to agree. Read together, the lessons point to the same conditions: whether the original reason still holds, whether anyone can release the leader from a commitment, whether a point to stop waiting was set in advance, and whether the leader has seen the change rather than been told of it.",
  },
  {
    slug: "succession",
    title: "Succession",
    question:
      "What happens to the organisation when the person at its centre is gone?",
    lessons: [
      {
        volume: "napoleon-bonaparte",
        slugs: ["what-outlasts-you", "the-bottleneck"],
      },
      { volume: "alexander-the-great", slugs: ["to-the-strongest"] },
      { volume: "radomir-putnik", slugs: ["who-decided", "after-the-chief"] },
    ],
    note: "All three volumes meet authority that rests on people rather than rules. Napoleon built institutions, from the Civil Code to the prefects, that outlasted him, while his dynasty depended on his own success and his army failed wherever he was absent. Alexander’s personal authority held an empire together while he lived; he named no heir, and his half-brother, his mother, his wife and his sons were all killed in the wars that followed. The Serbian command was shared from the start: when Putnik was relieved, command passed to Bojović and later Mišić, men who had led armies since 1914, and the army fought on, though the record often cannot say who decided. Read together, the lessons suggest that what outlasts a leader is what was built not to need them, and that a shared command trades a single point of failure for responsibility that is hard to locate. The Western Front volume has no lesson on this problem.",
  },
  {
    slug: "allies",
    title: "Allies and coalitions",
    question: "What does a partner owe an alliance, and what can it refuse?",
    lessons: [
      {
        volume: "radomir-putnik",
        slugs: ["when-allies-ask-you-to-attack", "where-to-break-the-front"],
      },
      {
        volume: "douglas-haig",
        slugs: [
          "the-day-the-front-broke",
          "coordination-by-persuasion",
          "the-general-battle",
        ],
      },
    ],
    note: "Two volumes see the same coalition from opposite ends. The Serbian command was a junior partner: after Cer it agreed, under allied pressure, to an offensive across the Sava that it doubted, and in 1915 the same allies vetoed the attack on Bulgaria it wanted; its plan to break the front at Dobro Pole waited two years for conditions it could not create, and the credit went largely to others. On the Western Front the coalition learned to unite. Foch coordinated by argument at Ypres in 1914; Haig wrote in 1916 that goodwill had proved as effective as unity of command; in March 1918, with the British and French armies about to separate, he asked for a single direction. At Beauvais it became a mandate that gave Foch strategic direction and left each partner its tactics and a right of appeal, and the general battle of the Hundred Days followed. Read together, the lessons suggest that a coalition works when each partner’s limits are stated and heard and its right to refuse is kept, and that the junior partner pays first when they are not.",
  },
  {
    slug: "settlement",
    title: "Victory and settlement",
    question:
      "When the battles are won, what turns victory into an end the defeated will accept?",
    lessons: [
      {
        volume: "napoleon-bonaparte",
        slugs: ["winning-battles-is-not-ending-wars"],
      },
      { volume: "alexander-the-great", slugs: ["after-gaugamela"] },
      { volume: "douglas-haig", slugs: ["how-to-end-it"] },
    ],
    note: "Three volumes reach the point where battle stops being the problem. Napoleon kept winning, and his lesson finds that success concealed the absence of a political end his defeated enemies would accept: a peace that depended on one Tsar, and a people in Spain who would not be bound by what their king signed. After Gaugamela Alexander’s work changed from beating an army to ruling an empire; Babylon and Susa opened their gates, and then he burned the palace at Persepolis. In 1918 the Allied commanders argued over the terms: Haig for moderation, judging the German army not yet broken, Foch for the Rhine, so that Germany could not resume the war, and the governments decided. The armistice ended the fighting without ending the claim that the German army had not been beaten. Read together, the lessons suggest that a settlement depends on what the defeated can accept and what they can later tell themselves, and that the commanders who win the battles do not always decide it. The Serbian volume has no lesson on this problem.",
  },
  {
    slug: "who-pays",
    title: "Who pays",
    question: "When a leader is measured, who is counted in the cost?",
    lessons: [
      {
        volume: "napoleon-bonaparte",
        slugs: ["the-ledger", "tempo-and-the-decisive-point"],
      },
      {
        volume: "alexander-the-great",
        slugs: ["the-ledger-of-conquest", "the-desert-road"],
      },
      {
        volume: "radomir-putnik",
        slugs: ["the-ledger-of-survival", "the-people-left-behind"],
      },
      { volume: "douglas-haig", slugs: ["the-ledger-of-learning"] },
    ],
    note: "Each volume ends with a ledger, and each finds that effective is not the same as good. Napoleon’s sets lasting achievements, the Code above all, beside a cost in lives, liberty and slavery. Alexander’s sets an empire from Greece to the Indus beside Thebes, Tyre, Persepolis and the other places that paid for it, and a Persian priestly memory of him as “the accursed”. The Serbian volume’s sets survival itself beside epidemic, occupation, reprisal and exile. The Western Front’s sets an army transformed and a war ended beside a price paid by soldiers of many nations, part of it, the lesson argues, for lessons an ally already knew; soldiers executed for disciplinary offences were pardoned in 2006 with their convictions left standing. The paired lessons show the same pattern at a smaller scale: speed paid for by the men who marched, the Gedrosian desert by the sick, the stragglers and the families who could not leave, the Toplica rising by civilians the army could not protect. In all four, many of those who paid had no say in the choice.",
  },
];
// The problems a lesson is compared under.
export const problemsForLesson = (volume: string, lesson: string) =>
  leadershipProblems.filter((p) =>
    p.lessons.some((x) => x.volume === volume && x.slugs.includes(lesson)),
  );
