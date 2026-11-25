import type { LeadershipProblem } from "../../lib/types";
// Problems that recur across the volumes, for /leadership/compare/ (batches T1
// to T8). Each note is an interpretation drawn only from the lessons it links,
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
      { volume: "arthur-wellesley", slugs: ["how-to-read-wellington"] },
      { volume: "julius-caesar", slugs: ["how-to-read-caesar"] },
      { volume: "hannibal-barca", slugs: ["how-to-read-the-hannibalic-war"] },
      { volume: "ulysses-s-grant", slugs: ["how-to-read-grant-and-lee"] },
      { volume: "william-slim", slugs: ["how-to-read-slim"] },
    ],
    note: "Each volume opens on the same problem in a different form. Napoleon wrote much of his own record and edited it while he still held power. Alexander’s was written by companions and a court historian whose books are lost, and survives in authors writing centuries later. The Serbian command’s became a nation’s memory, revised by each state that inherited it. On the Western Front the commanders wrote the official account after the victory: Haig’s despatches, edited by his private secretary, with cuts marked, reasons added in 1919, and an introduction in which Foch completed their account. Wellington wrote a great deal and chose its form: dispatches for readers who could check them, printed in his lifetime in an edition that left names blank, and no memoir, so that his conversation reached print through friends who wrote it down, some of it decades later. Caesar wrote the main account of his own wars while he fought them, year by year and in the third person, for readers in Rome who would judge him; its plain style was praised by readers it was written to persuade, Pollio, who served with him, doubted its accuracy, and for most of the Gallic War no other contemporary account survives. Hannibal and Scipio’s war was written by the winners’ friends: Polybius questioned men who had been there, crossed the Alps himself and read Hannibal’s own list of his forces, but he wrote among Romans as the friend of Scipio’s adoptive grandson and drew on Scipio’s friend Laelius; Livy wrote two centuries later; and Hannibal’s own historians survive only where his enemies chose to quote them, his city’s record having gone down with Carthage. Grant and Lee’s war was rewritten by the losers: Grant wrote his memoirs twenty years later, in places as an answer to his critics, and finished them four days before he died; Lee wrote none, and after his death Early and his allies blamed Longstreet for Gettysburg and made Lee the Confederacy’s stainless hero, while the 1911 Britannica’s article on Lee never mentions slavery. Slim’s war is told above all by its victor’s memoir, written a decade later and admired for the faults it admits; in copyright, it reaches its volume only through those who quote it, beside official histories whose authors had full access to the records, a record of the same battles compiled by former officers of the defeated Japanese army for the occupation authorities, and a press conference that named the “Forgotten Army” while describing an army largely Indian and African as white men. All nine orientation lessons give the same remedy, evidence from outside the record’s makers, and the same two warnings: a witness with a stake can still be right, and where only one account survives, the honest course is to say what cannot be known. What differs is where the outside evidence lies: in independent contemporaries, in a second family of ancient sources, in the enemy’s files, in the plans made before the outcome was known, in the distance between a letter written at the time and a remark recorded decades later, in late or hostile witnesses in what a persuasive record leaves out, such as the view of the conquered, in the chain by which each story reached the historian who told it, and in documents of the time, such as the seceding states’ declarations and Lee’s own report, against which the losers’ later explanations can be checked, and in the defeated army’s own account of the same battle, set beside the victor’s admired memoir.",
  },
  {
    slug: "taking-over",
    title: "Taking over an organisation",
    question:
      "What did the leader inherit, and what did taking it over cost those who built it?",
    lessons: [
      { volume: "napoleon-bonaparte", slugs: ["inherit-before-you-invent"] },
      { volume: "alexander-the-great", slugs: ["a-borrowed-army"] },
      { volume: "hannibal-barca", slugs: ["the-young-commander"] },
      { volume: "ulysses-s-grant", slugs: ["general-in-chief"] },
      {
        volume: "william-slim",
        slugs: ["sidelined", "the-army-that-expected-to-lose"],
      },
    ],
    note: "Five volumes begin a command with an inheritance and ask the reader to look at it before crediting the leader. Napoleon inherited divisions, guns and ideas from the old army and the Revolution and organised them into a new kind of campaign; the legend that he made it all is partly his own work. Alexander inherited his father’s army and generals and told the Macedonians that the king had changed only in name. The difference lies in what the inheritance cost. Napoleon’s lesson is about credit: some of what looks like later decline may be inherited capital running out. Alexander’s is about loyalty: the inheritance was secured by killing a rival, its senior men served at the price of their independence, and two of them later died at his order or by his hand. Scipio’s is about a newcomer’s freedom: elected by an assembly to a beaten army in Spain when no one else would stand, he had no method of his own to defend, spent his freedom on preparation and gave the army a success at New Carthage, and the doubts about his youth stayed quiet only while he kept winning. Grant’s is about working with what he did not choose: made general-in-chief in 1864, he inherited separate commands that had acted independently and generals already in place, Butler and Sigel among them, with Banks’s expedition ordered from Washington before his appointment. He kept Meade, who had offered to step aside, left the army’s organisation largely as he found it, chose where he could, Sherman in the West and Sheridan for the cavalry, and gave the whole one plan; the cost of the arrangement fell on Meade, whose position Grant himself called embarrassing once Grant travelled with his army, and who was humiliated when Grant let Sheridan take the cavalry away. Slim’s is about whose work a rebuilding was: given command in Arakan in April 1943 only when the offensive had failed, he took over units whose morale had been lowered by repeated failure, and could not restore those left too long without relief; in the same months that he took command of the new Fourteenth Army, Auchinleck ordered from India the training, intelligence, health and malaria measures that the official history credits with restoring the army, and its first success depended on aircraft Slim did not control. The other four volumes have no lesson on this problem.",
  },
  {
    slug: "rebuilding",
    title: "Rebuilding after defeat",
    question:
      "What turns a beaten organisation into one that expects to succeed, and how much of the change is its leader’s?",
    lessons: [
      { volume: "radomir-putnik", slugs: ["the-retreat-that-kept-an-army"] },
      { volume: "douglas-haig", slugs: ["where-the-learning-happened"] },
      { volume: "julius-caesar", slugs: ["the-reverse-explained"] },
      {
        volume: "hannibal-barca",
        slugs: ["the-young-commander", "learning-from-the-enemy"],
      },
      {
        volume: "william-slim",
        slugs: [
          "the-first-defeat",
          "the-army-that-expected-to-lose",
          "stand-and-be-supplied",
        ],
      },
    ],
    note: "Five volumes meet an army after defeat and ask what made it fight again. The Serbian army that crossed the mountains in 1915 survived as an army, with its old king and its chief of staff on the road beside it, but presence could not feed, clothe or heal it; Allied ships and Corfu did that, and many did not live to reach them. On the Western Front the British army learned while it went on attacking: limited attacks, massed tanks, unregistered artillery fire and all-arms planning came mostly from below and beside the commander-in-chief, whose part was to adopt them and twice to enlarge them beyond what they could bear. Caesar spoke to his army at once after each reverse and kept its confidence, and after Dyrrhachium an army that had fled asked to be punished and fought again within weeks; but his explanations placed the fault in the soldiers, a lieutenant or fortune, never in his own plan. Scipio, elected to command a beaten army in Spain when no one else would stand, studied why his father and uncle had been destroyed and what the enemy did by habit, spent his freedom on preparation and gave the army a success at New Carthage. Slim began with defeats of his own, and his later account blamed himself for Gallabat where the official accounts blamed tanks, aircraft and a plan made above him; the rebuilding of his army after the Arakan was ordered partly from India by Auchinleck, his own part was presence among the soldiers and the enforcement of health, and the first success the army could believe in, at the Admin Box, came from an order to stand fast prepared months in advance and kept by transport aircraft he did not command. Read together, the lessons suggest that a beaten army recovers when someone supplies what it lacks, when the lessons of defeat change its training and not only its speeches, and when its first test is one it can win; that the leader’s share of the recovery is usually smaller than the record gives it; and that the explanation that restores an army’s confidence and the explanation that improves its next plan are not always the same. The Napoleon, Alexander, Wellington, and Grant and Lee volumes have no lesson on this problem.",
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
      { volume: "julius-caesar", slugs: ["the-sabis"] },
    ],
    note: "All four volumes find that shared risk binds followers, and all four find where it stops. Napoleon’s presence at Lodi, Arcole and Jaffa built authority because his soldiers read the risk as theirs, which is also why it was worth staging. Alexander fought in the front rank, and at the Malli town the bond and the single point of failure were the same thing. The old Serbian king and the chief of staff crossed the mountains with the army, and it survived as an army, but presence could not feed, clothe or heal it; Allied ships and Corfu did that. At the Sabis Caesar took a soldier’s shield and went into the front line of a wing that had lost its centurions, but by his own account the army had already formed itself and its legates had acted without orders; at Munda, told only by others, he said he had fought for the first time for his life. Read together, the lessons set the conditions: the risk has to be of the same kind as the followers’, someone has to be able to take over if the leader falls, and presence is no substitute for supplies, rescue or training already done. The Western Front, Wellington, Hannibal and Scipio, Grant and Lee, and Slim volumes have no lesson on this problem.",
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
      { volume: "arthur-wellesley", slugs: ["the-afternoon-at-salamanca"] },
      { volume: "julius-caesar", slugs: ["a-rival-who-knew-him"] },
      {
        volume: "hannibal-barca",
        slugs: [
          "reading-the-consul",
          "learning-from-the-enemy",
          "the-meeting-at-zama",
        ],
      },
      {
        volume: "ulysses-s-grant",
        slugs: [
          "unconditional-surrender",
          "surprised-at-shiloh",
          "the-divided-army",
        ],
      },
      {
        volume: "william-slim",
        slugs: [
          "fighting-at-the-end-of-his-line",
          "the-enemys-gamble",
          "the-changed-plan",
        ],
      },
    ],
    note: "The nine volumes watch the same contest from different sides. Napoleon’s method beat every army it met, and his opponents learned it faster than he renewed it. Alexander kept diagnosing each new enemy, horse archers, a walled pass, a guarded river, and found a different answer each time; his shadow came in the Gedrosian desert, where the problem was terrain, not an enemy. The Serbian command could not know where the blow would fall in 1914, waited until it showed itself and sent the Second Army west to Cer; it had expected the blow from the north, and waiting worked against an enemy that had divided itself. On the Western Front the method had to be relearned during the war: Foch had taught that better weapons favoured the attacker, the first battles disproved it, and the new methods of limited attacks, massed tanks and all-arms planning came largely from below and beside the commanders-in-chief, while the enemy learned too. At Salamanca Wellington read an opponent who was reading him: Marmont expected him to retreat, stretched his line to threaten the road, and was struck that afternoon by an army kept hidden and close, with a retreat already drafted in case the mistake never came. At Pharsalus two rivals knew each other’s habits: Pompey had read Caesar rightly at Dyrrhachium and meant to wear him down by want, but his followers pressed him into battle, while Caesar read the cavalry plan from Pompey’s dispositions and posted a fourth line against it. Hannibal read the Roman consuls, Sempronius eager to fight before his colleague recovered and Flaminius provoked by his burning fields, and won while Rome kept sending commanders under pressure to fight; Fabius gave him nothing to read, and the portraits of the rash consuls come from their political enemies. Scipio studied his father’s defeat and his enemy’s routine and turned the routine against Hasdrubal at Ilipa, and at Zama the two commanders met knowing each other’s methods: Scipio left lanes for the elephants, and he had the cavalry that Hannibal’s method needed. At Fort Donelson Grant marched up to the works because he had known Pillow in Mexico and judged that Pillow would not stop him, and told Buckner afterwards that he would not have tried the same approach against him: the initiative rested on a reading of the enemy commander that happened to be right. Two months later at Shiloh he expected an enemy behind its works at Corinth to stay there, the warning signs were read as raids, and his army, preparing to attack, was attacked in its camps. At Chancellorsville Lee divided an army half the size of Hooker’s, twice, because Hooker had halted and dug in; the risk was acceptable only because the enemy commander had stopped, and Napoleon’s detached wing in 1815, sent after an enemy that moved faster than he believed it could, shows the same reading failing. At Imphal Slim read the shape of Mutaguchi’s gamble, an army crossing mountains with three weeks’ food that must win quickly or starve, and fought where its supply would fail first, though he misjudged the force sent against Kohima; on the Japanese side the air division, the army staff and a divisional commander saw the danger and were overruled, and Arakawa writes that Mutaguchi took no interest in the change in his enemy. In December 1944 Slim read the opposite case, an enemy declining the battle his plan was built for, scrapped the plan within days and struck at Meiktila, where a Japanese conference had judged any thrust would be no bigger than a raid. Read together, the lessons suggest that a method travels only as far as the reading of the opponent behind it, and that each way of reading has its own blind spot: the confidence that comes from winning, habits built for opponents turned on terrain, dependence on seeing the threat in time, a doctrine formed before the war it had to fight, a plan that pays only if the enemy errs, a correct reading that the leader’s own followers will not let him act on, a reading of a reputation or a routine that the enemy can change, or use to teach you, a plan of attack that reads the enemy’s warnings as something smaller, a bet on an opponent who has stopped moving, a plan built on the enemy behaving as he did the year before, and a reading of the enemy’s next move confined to the scale one expects.",
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
      { volume: "arthur-wellesley", slugs: ["the-government-at-home"] },
      { volume: "julius-caesar", slugs: ["lieutenants", "my-soldiers"] },
      {
        volume: "hannibal-barca",
        slugs: ["taking-the-war-to-africa", "both-rejected"],
      },
      { volume: "william-slim", slugs: ["sidelined", "the-enemys-gamble"] },
    ],
    note: "Each volume asks who could say no, and each finds the answer shaped by power. Napoleon had people who could still tell him no, but their objections had no effect unless he chose, and the price of ignoring correct advice grew once his margin had gone. Alexander heard Parmenion’s objections and often answered them with reasons, and when the Macedonians objected to prostration he let the proposal drop for them; yet men who spoke frankly near him were killed, and the record that shows Parmenion always wrong was written after Alexander had him killed. In the Serbian case, the trial at Salonika, which Britannica calls dubious, removed a rival centre of power with death sentences that a Belgrade court overturned in 1953, and showed everyone who remained what opposition could cost. The Western Front record shows less the cost of objecting than how quickly objection stopped: Rawlinson argued for a shorter advance on the Somme, was overruled, and carried out a plan he privately doubted, and at Passchendaele the cabinet’s chief military adviser kept his doubts from the cabinet while Haig’s staff tried to make their thoughts the children of his wishes. Wellington wanted the doubts of his senior officers kept to themselves and his own reports to be the only ones the Portuguese government published; the regency’s resistance, which a Portuguese historian reads as a struggle over the tutelage Wellington sought, was a no he could not silence. Caesar’s lieutenants could refuse where his orders left room: in 54 he told Labienus to come if he could do so without damage to the public service, and Labienus stayed, explained the danger and was not blamed; when Labienus went over to Pompey in 49, the only reason given in what was read comes from Dio, two centuries later, who says Caesar’s favour had cooled. His soldiers’ refusals were answered in other ways: at Vesontio he rebuked the centurions for thinking it their business to ask where they were led, and the mutiny of 47 ended, in four accounts that disagree, with the mutineers called citizens, the worst punished in booty and land and, in Dio, the most turbulent taken to Africa to be used up. In 205 Fabius told the young consul Scipio no in the senate, and the tribunes ruled that the senate’s decision on Africa would bind; Scipio stepped back from appealing to the people, accepted less than he asked and won the argument by results, though after an inquiry he kept in command the legate who had plundered Locri. Late in life, called to account, he would not plead, tore up the account he was asked to render, and withdrew to Liternum; Livy reports both the charge that Rome was ungrateful and the answer that no citizen should be above the law. In Arakan in 1943 advice went up the chain and was set aside at every level: Wavell refused Irwin’s recommendation to stand on the defensive, Irwin overruled Lloyd and countermanded his withdrawal, and Slim’s warning that the tanks sent for Donbaik were too few was not accepted; the biography adds that Irwin tried to have Slim relieved and was relieved himself, which the official history does not mention. Across the hills in 1944, the Japanese officers who warned that the Imphal offensive would end in tragedy were overruled or bypassed, and in Tokyo a report that it stood little chance was cut short. Read together, the lessons point to the same condition: dissent lasts where it has a route that does not depend on the leader’s choice, a route is no use if those who hold it stay silent, a refusal the leader’s own order allows costs least, the record of dissent is often kept by the side that won the argument, and a leader who once accepted a no may later refuse to give an account, and that a no which travels up a chain can be overruled at every level until the failure itself decides. The Grant and Lee volume has no lesson on this problem.",
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
      {
        volume: "arthur-wellesley",
        slugs: ["ground-chosen-in-advance", "the-breach"],
      },
      { volume: "julius-caesar", slugs: ["celeritas", "two-fronts"] },
      { volume: "hannibal-barca", slugs: ["the-delayer"] },
      {
        volume: "ulysses-s-grant",
        slugs: ["the-third-day", "fight-it-out-on-this-line"],
      },
      {
        volume: "william-slim",
        slugs: ["fighting-at-the-end-of-his-line", "the-enemys-gamble"],
      },
    ],
    note: "All nine volumes meet the moment when going on and stopping both cost something, and none settles it by temperament. Napoleon broke off at Acre and stayed in Moscow, and his lesson places the difficulty in what was staked on the outcome and whether anyone could release him from it, while leaving open whether he had also changed. Alexander stayed at Tyre while the siege served the strategy, went on at Gaza, where the reason given was reputation, and learned his army’s limit at the Hyphasis only by reaching it. The Serbian command gave up Belgrade to keep its army and, in November 1915, waited on help that did not come before taking the army out of the country. Haig shows both answers in one career: the Somme went on into November after its first reason was met, on a measure he admitted was an estimate, and Passchendaele went on as the weather broke, but at Amiens in 1918 he broke off within days, having seen the resistance for himself, and persuaded Foch to agree. Wellington chose both ways in one war: before the Lines in 1810 he let a chance against Junot pass and left hunger to finish the French, and at Badajoz in 1812, with a relieving army on the road, he stormed after a single day’s wait for a third breach, and called off the failing assault on the breaches only once the escalades had got in. Caesar’s habit was not to wait: in 48 he crossed to Epirus with the part of his army the ships could carry and spent months short of men and corn by a sea his enemy held, and his lesson warns that speed made into a signature makes waiting feel like failure. At Alesia he stayed, building lines against the town and against the army coming to relieve it, because he had the time and the labour to finish them; at Dyrrhachium the same method left an unfinished stretch, and Pompey broke through it. Fabius, after Trasimene, refused battle with a better field commander and bore his own side’s contempt; his lesson finds delay a method while Rome could bear its cost and the allies kept paying, and a habit by 205, when it opposed the stroke that ended the war. Lee and Grant met the moment from opposite sides of the same arithmetic. On the evening of 2 July 1863, after a run of victories, Lee judged that the day’s gains and better coordination would bring success and renewed the attack, knowing, as he wrote to Davis five days later, that the enemy could be reinforced and his own army could not. In 1864 Grant marched south after the Wilderness instead of back, purposed to fight it out on that line, and kept Lee’s army fighting until it could be besieged; at Cold Harbor he attacked works that could not be carried, ordered offensive action stopped after his corps commanders judged further attacks hopeless, and wrote twenty years later that he had always regretted the last assault. At Imphal Slim agreed that his forward divisions should withdraw only when a major offensive was certain, and the official history writes that the proviso left the 17th Division’s withdrawal until too late; across the hills Mutaguchi could not bring himself to halt an offensive that his own staff and commanders judged lost, and it was suspended only in July, after he had himself reported that withdrawal was necessary. Read together, the lessons point to the same conditions: whether the original reason still holds, whether anyone can release the leader from a commitment, whether a point to stop waiting was set in advance, whether the leader has seen the change rather than been told of it, whether the means to go on can be finished, or can follow, in time, whether time or people is the scarcer thing, whether a run of success has made the next attempt look surer than it is, whether each new attempt still serves a plan or only answers what the last one cost, whether those who pay for the wait will go on paying, and whether the condition set for moving can be known before it is too late.",
  },
  {
    slug: "irreplaceable",
    title: "What cannot be replaced",
    question:
      "When one thing cannot be replaced, what is it right to give up to keep it?",
    lessons: [
      {
        volume: "radomir-putnik",
        slugs: ["the-capital-or-the-army", "the-retreat-that-kept-an-army"],
      },
      { volume: "arthur-wellesley", slugs: ["the-only-army"] },
      { volume: "hannibal-barca", slugs: ["an-army-of-many-peoples"] },
      {
        volume: "ulysses-s-grant",
        slugs: ["the-third-day", "the-army-that-could-not-be-replaced"],
      },
      { volume: "william-slim", slugs: ["the-long-retreat"] },
    ],
    note: "Five volumes meet commanders who held something that could not be replaced and chose what to give up to keep it. The Serbian command gave up Belgrade in 1914 to keep the army and struck once the enemy had overreached, and in 1915 took the army out through the mountains rather than surrender it; it survived as an army because Allied ships and Corfu supplied what presence could not. Wellington, with Britain’s one field army, reasoned in objects, means and risks: after Talavera he refused further operations with the Spanish armies, and in 1810 he would not risk a battle in the plains to relieve Ciudad Rodrigo, whose garrison and town paid for the refusal and whose governor said so. His counter-case, Barclay de Tolly, made the same choice in 1812 and lost his command before it could show its purpose. Hannibal held an army of many peoples together in Italy for years with no state that would replace it, by placement, pay, victory and his own presence; it held through defeat and want, but the army he led at Zama was mostly new to him and broke apart along its lines of language and pay. Lee knew his army could not be replaced, and wrote so to Davis after Gettysburg, and the volume shows him treating it both ways: on the third day he spent it in an attack renewed in hope of one more success, and from the trenches of Petersburg he kept it for most of a year against a stronger enemy, until the lines that protected it had fixed it in place, each railroad Grant cut made them harder to supply, and hunger and desertion emptied them from inside. In 1942 Slim’s Burma Corps kept its cohesion through what the official history calls the longest retreat a British army had made, and reached India as formations into which an army could be rebuilt, by giving up its guns, tanks and nearly all its vehicles at the Chindwin; Kirby credits the supply services and the armoured brigade more than any commander, and the cost fell hardest on the wounded and the refugees who walked beside it. Read together, the lessons suggest that keeping what cannot be replaced is a strategy only while it serves a purpose that those who can recall the leader accept, that what is given up to keep it, a capital, a fortress, an ally’s trust, is paid for by others, that it works best when someone else can supply what the leader cannot, that an instrument built over years is not replaced by one raised in haste, that the lines built to keep it can also hold it in place while what feeds it is cut, and that an army can be kept in being by giving up almost everything it owns except its formations.",
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
      { volume: "arthur-wellesley", slugs: ["a-short-leash"] },
    ],
    note: "Four volumes meet authority that rests on people rather than rules. Napoleon built institutions, from the Civil Code to the prefects, that outlasted him, while his dynasty depended on his own success and his army failed wherever he was absent. Alexander’s personal authority held an empire together while he lived; he named no heir, and his half-brother, his mother, his wife and his sons were all killed in the wars that followed. The Serbian command was shared from the start: when Putnik was relieved, command passed to Bojović and later Mišić, men who had led armies since 1914, and the army fought on, though the record often cannot say who decided. Wellington held his generals close and seldom gave his reasons, so the army depended on his presence; on the eve of Waterloo, in a late story told without its source, the man who would have succeeded him did not know his plan, while on the Prussian side Gneisenau could order the retreat when Blücher fell, because he had made the plans with him. Read together, the lessons suggest that what outlasts a leader is what was built not to need them, and that a shared command trades a single point of failure for responsibility that is hard to locate. The Western Front, Caesar, Hannibal and Scipio, Grant and Lee, and Slim volumes have no lesson on this problem.",
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
      { volume: "arthur-wellesley", slugs: ["allies-he-could-not-command"] },
      { volume: "julius-caesar", slugs: ["gaul-divided"] },
      {
        volume: "hannibal-barca",
        slugs: ["the-allies-who-stayed", "allies-made-and-kept"],
      },
      { volume: "william-slim", slugs: ["last-in-line"] },
    ],
    note: "Two volumes see the same coalition from opposite ends, a third sees an earlier one, a fourth sees a conqueror who made allies of a divided enemy, a fifth sees a war fought for allies on both sides, and a sixth sees a commander last in line for a coalition’s means. The Serbian command was a junior partner: after Cer it agreed, under allied pressure, to an offensive across the Sava that it doubted, and in 1915 the same allies vetoed the attack on Bulgaria it wanted; its plan to break the front at Dobro Pole waited two years for conditions it could not create, and the credit went largely to others. On the Western Front the coalition learned to unite. Foch coordinated by argument at Ypres in 1914; Haig wrote in 1916 that goodwill had proved as effective as unity of command; in March 1918, with the British and French armies about to separate, he asked for a single direction. At Beauvais it became a mandate that gave Foch strategic direction and left each partner its tactics and a right of appeal, and the general battle of the Hundred Days followed. Wellington was a partner who could not command and then one who commanded on conditions: after Cuesta left Talavera with the British wounded behind, he would not operate with that army again; he put the Portuguese brigades inside his own divisions and came to rely on them; he took the Spanish command only with powers over appointments and resources, and protested when the regency broke them, while Masséna told the Portuguese that Britain risked nothing and sheltered behind their battalions. Caesar entered Gaul as the ally of the Aedui against the Arverni and kept Gallic peoples on his side even in 52, but the Aedui found that the help they had asked for made them subjects: a faction among them held back the corn they had promised and told the enemy what happened in the Roman camp, and in 52 they rose against him and then lost the leadership of the revolt to an Arvernian. Hannibal freed Rome’s allied prisoners and offered the peoples of Italy their liberty, and after Cannae won Capua, Tarentum and much of the south; but the terms that won them owed him no service, he could not protect them when Rome returned, and most of Rome’s allies, its colonies above all, held. In Spain Scipio returned the hostages Carthage had taken and freed Spanish prisoners, and the princes came over to him; once Carthage had gone and he seemed gone too, they rose, because the bond had been with him. Slim fought at the end of a coalition’s priorities: in December 1944 transport aircraft were taken from his army to China by a decision made for another theatre, Stilwell was at once chief of staff to Chiang Kai-shek, commander of an American theatre and, in his own words, serving under Slim, and the landing craft went to Europe; his army improvised river craft and airfields, and his plan outran its means and succeeded because others found them in time. Read together, the lessons suggest that a coalition works when each partner’s limits are stated and heard and its right to refuse is kept, that partners rely on what they can see and shape, that the junior partner pays first when they are not, that a partner who asks a stronger power for help against a rival may find that it rules both, that an ally weighs what the side it leaves will do when it returns, and that a partner last in line can have its means taken away mid-campaign by a decision made for another front. The Napoleon, Alexander, and Grant and Lee volumes have no lesson on this problem.",
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
      { volume: "julius-caesar", slugs: ["clemency", "the-rubicon"] },
      { volume: "hannibal-barca", slugs: ["the-meeting-at-zama"] },
      { volume: "ulysses-s-grant", slugs: ["appomattox"] },
      { volume: "william-slim", slugs: ["after-rangoon"] },
    ],
    note: "Seven volumes reach the point where battle stops being the problem. Napoleon kept winning, and his lesson finds that success concealed the absence of a political end his defeated enemies would accept: a peace that depended on one Tsar, and a people in Spain who would not be bound by what their king signed. After Gaugamela Alexander’s work changed from beating an army to ruling an empire; Babylon and Susa opened their gates, and then he burned the palace at Persepolis. In 1918 the Allied commanders argued over the terms: Haig for moderation, judging the German army not yet broken, Foch for the Rhine, so that Germany could not resume the war, and the governments decided. The armistice ended the fighting without ending the claim that the German army had not been beaten. Caesar’s clemency made surrender safe for Romans: at Corfinium and Ilerda he let his enemies go and their soldiers came over to him, but the Gauls were not offered the same terms, and men he had pardoned, Brutus and Cassius among them, killed him. The Rubicon lesson finds the deeper limit: an army turned against the authority that gave it could win the war but not the legitimacy that would let Rome accept the result, and he was killed within a year of the war’s end. After Zama Hannibal told the Carthaginian senate that the war, not a battle, was lost, and in Polybius’s report pulled from the platform a senator who opposed the terms; the peace left Carthage its laws and its African lands and took its warships, its elephants and its right to make war beyond Africa, and the general who had lost was the one who urged Carthage to take it. At Appomattox Grant let Lee’s men go home on parole with their horses, fed them from the captured trains and stopped his own army’s salute, and the surrender hastened that of the other Confederate forces; but the terms were written for an army by its opponent and said nothing of the cause Grant called one of the worst for which a people ever fought, Lee would not advise the other armies to surrender without his president, and the courtesy of the surrender later became evidence for a story of honourable defeat from which the cause dropped out. After Rangoon the victory’s meaning in Burma was not the army’s to decide: the War Cabinet would not have the Burma National Army’s leaders treated as liberators, Slim told Aung San that he and his army had no legal status, and within two years an agreement provided for Burma’s independence; the victorious commander himself was nearly replaced by his superior in the week Rangoon fell. Read together, the lessons suggest that a settlement depends on what the defeated can accept and what they can later tell themselves, that the commanders who win the battles do not always decide it, that a victory won against the authority that would have to accept it leaves no one able to grant it, that a defeated state may hear the case for terms best from the commander who lost the war, and that generous terms to a beaten army end the fighting without settling what the war was fought over, and can later be retold to hide it, and that a victory won for an empire may be settled, within a few years, by the people it was fought over. The Serbian and Wellington volumes have no lesson on this problem.",
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
      {
        volume: "arthur-wellesley",
        slugs: ["the-ledger", "the-empty-country"],
      },
      { volume: "julius-caesar", slugs: ["the-ledger", "two-fronts"] },
      { volume: "hannibal-barca", slugs: ["the-ledger", "over-the-alps"] },
      {
        volume: "ulysses-s-grant",
        slugs: [
          "the-ledger",
          "cutting-loose",
          "the-exchange-that-stopped",
          "whose-war",
        ],
      },
      {
        volume: "william-slim",
        slugs: ["the-ledger", "the-long-retreat", "whose-army"],
      },
    ],
    note: "Each volume ends with a ledger, and each finds that effective is not the same as good. Napoleon’s sets lasting achievements, the Code above all, beside a cost in lives, liberty and slavery. Alexander’s sets an empire from Greece to the Indus beside Thebes, Tyre, Persepolis and the other places that paid for it, and a Persian priestly memory of him as “the accursed”. The Serbian volume’s sets survival itself beside epidemic, occupation, reprisal and exile. The Western Front’s sets an army transformed and a war ended beside a price paid by soldiers of many nations, part of it, the lesson argues, for lessons an ally already knew; soldiers executed for disciplinary offences were pardoned in 2006 with their convictions left standing. Wellington’s sets a war won without losing the one army beside an empire extended in India, Spanish towns sacked by his soldiers, and a Portuguese population ordered from its homes in 1810. Caesar’s sets a decade of conquest and a civil war won beside the peoples of Gaul killed, enslaved and made subject, Romans dead on both sides and a Republic that did not survive; Pliny, who ranked him first of all men for vigour of mind, would not count the killing as glory. Hannibal and Scipio’s sets the great victories and Rome’s endurance beside Italy laid waste by both armies, the allies punished when Rome returned, New Carthage, the Africans sold after Baecula, the Italian soldiers who would not sail with Hannibal, and Carthage razed half a century later. Grant and Lee’s sets a war won by the side that could replace its men, under a commander who kept pressing, beside the people the Confederacy fought to keep enslaved, few of whose words reached the commanders’ record, the soldiers of both armies, for whom it gives no totals, and the people of Vicksburg in their caves and of Petersburg under shellfire. Slim’s sets a beaten army rebuilt and the Japanese armies in Burma destroyed beside the refugees of 1942, many thousands of whom died on the way, a famine in Bengal at the army’s base, the Naga people of the Kohima hills, the prisoners and the far larger number of Asian labourers who died building the Burma–Siam railway, and Japanese soldiers starving in the swamps of the Sittang; within three years the empire the army served had left India and Burma. The paired lessons show the same pattern at a smaller scale: speed paid for by the men who marched, the Gedrosian desert by the sick, the stragglers and the families who could not leave, the Toplica rising by civilians the army could not protect, the empty country of 1810 by peasants told to leave everything or be treated as traitors, the siege of Alesia by the Mandubii, driven out of their own town and kept out of the Roman lines, the invasion of Italy by the Taurini, the first people to refuse it, and by the country both armies lived on, the march below Vicksburg by the people of Mississippi whose country fed the army, the halted exchange of prisoners by the men who waited in the camps it filled, and the Union’s new aim by the Black soldiers who carried it, paid less, refused exchange and killed after surrendering at Fort Pillow, the retreat of 1942 by the wounded and the refugees who walked beside the army, and the Fourteenth Army’s war by soldiers of many peoples whose own reasons survive in a few recollections recorded decades later. In all nine, many of those who paid had no say in the choice.",
  },
];
// The problems a lesson is compared under.
export const problemsForLesson = (volume: string, lesson: string) =>
  leadershipProblems.filter((p) =>
    p.lessons.some((x) => x.volume === volume && x.slugs.includes(lesson)),
  );
