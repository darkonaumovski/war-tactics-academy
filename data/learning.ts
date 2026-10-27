import type { Course, Lesson, Scenario } from "../lib/types";
import { additionalCourses } from "./additional-courses";
const lesson = (
  slug: string,
  title: string,
  objectives: string[],
  paragraphs: string[],
  battleSlugs: string[],
  prompt: string,
  choices: string[],
  answer: number,
  explanation: string,
): Lesson => ({
  slug,
  title,
  objectives,
  paragraphs,
  battleSlugs,
  questions: [{ prompt, choices, answer, explanation }],
});
const initialCourses: Course[] = [
  {
    slug: "foundations",
    title: "Foundations of Military History",
    level: "Beginner",
    description:
      "Learn to read a battle as a problem of purpose, information and human limits.",
    lessons: [
      lesson(
        "strategy-and-tactics",
        "Strategy versus tactics",
        [
          "Distinguish a battlefield objective from a political purpose.",
          "Explain why a tactical victory may not settle a war.",
        ],
        [
          "Tactics concerns how forces act in an engagement. Strategy connects military action to the broader purposes of a war. The distinction is a useful analytical tool, although historical actors did not always use these words in the modern sense.",
          "Cannae offers a sharp example. Hannibal destroyed much of a Roman field army, but Rome continued to mobilize and retained crucial allies. Winning an engagement did not by itself create the political settlement Carthage needed. The later course of the war depended on resources, alliances and campaigns beyond Italy.",
          "When reading a battle account, ask three separate questions: what was the immediate objective, what larger outcome was intended, and what actually changed? Avoid treating the eventual result as something commanders could know in advance.",
        ],
        ["cannae"],
        "Why did victory at Cannae not automatically end the war?",
        [
          "Tactical victory and political settlement are different problems.",
          "The battle had no military effects.",
          "All wars end only with a capital’s capture.",
        ],
        0,
        "Rome retained political cohesion, allies and the capacity to raise armies. A battlefield result does not automatically produce strategic success.",
      ),
      lesson(
        "command-structures",
        "Historical command structures",
        [
          "Identify the difference between authority and coordination.",
          "Consider coalition command without assuming a unified hierarchy.",
        ],
        [
          "A command structure defines who can issue orders, but effective cooperation also depends on communication, trust and shared purpose. Rank alone does not explain whether an army can react to change.",
          "At Waterloo, Wellington and Blücher led separate armies. Their cooperation rested on decisions to remain in contact and support each other, not on a single commander controlling both forces. Prussian arrival changed the demands on Napoleon’s army during the battle.",
          "Coalitions can pool resources while multiplying coordination problems. Evaluate what leaders promised, how messages traveled, and what obstacles could interrupt execution. A plan on paper is not the same as a force arriving on time.",
        ],
        ["waterloo"],
        "What made Waterloo a coalition command problem?",
        [
          "Every soldier belonged to the same national army.",
          "Separate armies needed to coordinate their actions.",
          "Commanders could communicate instantly.",
        ],
        1,
        "Wellington and Blücher commanded distinct armies whose cooperation had to survive separate movements and uncertain information.",
      ),
      lesson(
        "terrain",
        "Geography and terrain",
        [
          "Relate terrain to historically available transport and weapons.",
          "Distinguish a schematic from a surveyed map.",
        ],
        [
          "Terrain changes what is visible, how movement is possible and where forces can remain supplied. Its effects depend on weather, transport, weapons and the organization of the armies involved. A ridge is not an advantage in every circumstance.",
          "At Hastings, the English position and its cohesion mattered to the battle’s development. At Waterloo, ridges and defended buildings shaped the fighting. These similarities do not make the engagements interchangeable: the forces, weapons and political situations were different.",
          "A schematic clarifies a relationship, such as a center facing two wings. It cannot establish an exact unit position. The academy’s battle diagrams are interpretive teaching aids; atlas markers indicate approximate historical places.",
        ],
        ["hastings", "waterloo"],
        "What can a clearly labeled schematic reliably communicate?",
        [
          "The exact location of every soldier.",
          "A conceptual relationship between forces.",
          "A verified modern boundary.",
        ],
        1,
        "Schematics support explanation, but they are not evidence for precise historical coordinates.",
      ),
      lesson(
        "logistics",
        "Logistics and supply",
        [
          "Explain how sustainment limits choices.",
          "Separate resource totals from usable delivery capacity.",
        ],
        [
          "An army’s nominal strength says little about how long it can act. Food, ammunition, animals, transport, maintenance and medical care influence its usable strength. Supply systems also depend on civilians, who often bear coercion, requisition and displacement.",
          "During the Stalingrad encirclement, the existence of transport aircraft did not mean that the trapped army could receive all the supplies it required. Weather, losses, airfields and carrying capacity limited delivery. Operational ambitions collided with sustainment.",
          "Use logistics to test historical claims. Ask what had to arrive, by which route, and under whose control. Do not assume a proposed maneuver was feasible simply because a line can be drawn on a map.",
        ],
        ["stalingrad"],
        "Why is the number of transport aircraft alone an incomplete supply measure?",
        [
          "Aircraft numbers never matter.",
          "Delivery also depends on capacity, weather, losses and access.",
          "Supplies always reach their destination.",
        ],
        1,
        "Possession of transport is different from a reliable flow of sufficient supplies.",
      ),
      lesson(
        "uncertainty",
        "Intelligence and uncertainty",
        [
          "Distinguish information from certainty.",
          "Recognize hindsight in historical explanations.",
        ],
        [
          "Intelligence is evidence interpreted under pressure. It can narrow uncertainty without removing it. Commanders act with incomplete reports, uneven reconnaissance and delays; historians often know outcomes those commanders did not.",
          "Before Midway, US intelligence helped identify the Japanese objective. That advantage still had to be translated into deployment and reconnaissance. Carrier movements, timing and the location of enemy forces remained uncertain during the battle.",
          "A fair assessment separates the quality of a decision from the luck of its outcome. Ask whether a choice was reasonable given the information available, then examine how later events affected it. Alternative outcomes remain counterfactual claims, not historical facts.",
        ],
        ["midway"],
        "What did intelligence provide before Midway?",
        [
          "Useful warning without complete certainty.",
          "Perfect knowledge of every future event.",
          "A guarantee that no losses would occur.",
        ],
        0,
        "Intelligence informed the US deployment, but reconnaissance, execution and uncertainty still shaped the battle.",
      ),
    ],
  },
  {
    slug: "napoleonic-warfare",
    title: "Napoleonic Warfare",
    level: "Intermediate",
    description:
      "Follow corps, coalitions and command decisions from Austerlitz to Waterloo.",
    lessons: [
      lesson(
        "corps-organization",
        "Corps organization",
        [
          "Describe why armies divided into corps.",
          "Recognize the limits of independent action.",
        ],
        [
          "Napoleonic corps combined several arms under a commander and could operate apart from the main army for a limited period. They supported dispersed movement and later concentration. Their composition and independence varied; the corps was not a self-sufficient miniature state.",
          "Dispersal could reduce pressure on roads and local supplies, but it also exposed formations to defeat before support arrived. Coordination depended on staff work, marching capacity and imperfect information. The Waterloo campaign shows why the location and timely arrival of separate bodies mattered.",
          "Read organizational innovation in context. A corps label does not establish equal training, strength or efficiency across armies or years.",
        ],
        ["waterloo"],
        "What was one trade-off of moving corps separately?",
        [
          "Less road congestion but greater coordination risk.",
          "No further need for supplies.",
          "Instant concentration at any location.",
        ],
        0,
        "Separate routes could ease movement while creating a danger that support would arrive too late.",
      ),
      lesson(
        "campaign-maneuver",
        "Campaign maneuver",
        [
          "Connect marching and concentration to battle.",
          "Avoid reducing a campaign to its final engagement.",
        ],
        [
          "Campaign maneuver concerns the movement and positioning of forces across a sequence of operations. The armies that meet on a battlefield bring with them the consequences of earlier marches, detachments and logistical choices.",
          "Austerlitz followed the Ulm campaign, French occupation of Vienna and continuing allied movement. The battle cannot be understood merely as a geometric trick on the Pratzen Heights. The allies’ political and military situation shaped their willingness to attack.",
          "When interpreting a campaign, construct a sequence of constraints before explaining a decisive day. Distances, tired troops and uncertain cooperation limit the options that a retrospective map seems to offer.",
        ],
        ["austerlitz"],
        "Why study operations before a decisive battle?",
        [
          "They shaped the forces and choices available.",
          "Earlier movements have no consequences.",
          "They prove the outcome was inevitable.",
        ],
        0,
        "A battle inherits the constraints created by the preceding campaign.",
      ),
      lesson(
        "artillery",
        "Artillery in historical context",
        [
          "Relate artillery effects to ground and coordination.",
          "Avoid technology-only explanations.",
        ],
        [
          "Artillery could disrupt formations and support attacks, but its effectiveness depended on ammunition, crew performance, range, visibility and terrain. Moving and supplying guns required considerable effort.",
          "At Waterloo, ground conditions and Wellington’s use of the reverse slope complicated French fire. This does not mean artillery was ineffective; it means that the relationship between weapons and position must be examined rather than assumed.",
          "Technology acts through people and organization. A historical explanation should connect the weapon, its employment and the enemy’s response, instead of treating one equipment advantage as a universal cause of victory.",
        ],
        ["waterloo"],
        "Which explanation best accounts for artillery effects?",
        [
          "Gun numbers alone determine every result.",
          "Equipment, terrain, ammunition and employment interact.",
          "Terrain has no relevance to artillery.",
        ],
        1,
        "Weapons operate within environmental and organizational constraints.",
      ),
      lesson(
        "coalition-warfare",
        "Coalition warfare",
        [
          "Compare coalition aims with operational coordination.",
          "Explain why alliance politics affects campaigns.",
        ],
        [
          "Coalition partners may share an enemy while disagreeing over objectives, risk and the distribution of forces. Their armies can have different languages, staff procedures and supply arrangements.",
          "At Austerlitz the allied plan exposed a vulnerable center as forces moved against Napoleon’s right. At Waterloo cooperation between Wellington and Blücher contributed to victory. These cases support investigation of particular decisions; they do not prove coalitions are inherently weak or strong.",
          "Compare the process of coordination: what was agreed, what information was available, and whether the partners could act in time. Keep national stereotypes out of the analysis.",
        ],
        ["austerlitz", "waterloo"],
        "What is the most useful way to compare coalitions?",
        [
          "Assign a permanent rating to each nationality.",
          "Examine shared aims, communication and execution.",
          "Assume allies always have identical interests.",
        ],
        1,
        "Coalition performance depends on historical institutions and decisions, not timeless national characteristics.",
      ),
      lesson(
        "two-battles",
        "Austerlitz and Waterloo",
        [
          "Compare two contexts without hindsight.",
          "Use source criticism when assessing reputation.",
        ],
        [
          "Austerlitz and Waterloo are often used as shorthand for Napoleon’s brilliance and decline. That narrative can obscure the particular conditions of each campaign. The opposing armies, coalition relationships and opportunities differed.",
          "At Austerlitz the French attack on the allied center contributed to a decisive victory. At Waterloo successive French attacks failed to break Wellington’s position before coalition pressure became overwhelming. Neither outcome should be turned into a numerical score for a commander.",
          "Read memoirs and national narratives critically. Retrospective accounts can defend reputations, shift blame or simplify contingency. Compare their claims with other evidence and make the limits of reconstruction explicit.",
        ],
        ["austerlitz", "waterloo"],
        "Why should memoirs be read critically?",
        [
          "All firsthand accounts are worthless.",
          "Authors may shape explanations to defend reputations.",
          "An eyewitness cannot misunderstand an event.",
        ],
        1,
        "Memoirs can preserve valuable evidence while also reflecting partial knowledge and retrospective self-justification.",
      ),
    ],
  },
];
export const courses: Course[] = [
  initialCourses[0],
  additionalCourses[0],
  initialCourses[1],
  additionalCourses[1],
  additionalCourses[2],
];
export const scenarios: Scenario[] = [
  {
    slug: "hold-the-ridge",
    title: "Hold the ridge",
    battleSlug: "waterloo",
    commander: "Wellington",
    situation:
      "18 June 1815. You command an allied army south of Brussels. French attacks threaten your position; Prussian support is expected but its timing is uncertain.",
    known:
      "Your defensive ground includes a ridge and strongpoints. Continued cooperation with the Prussians is central to the coalition plan.",
    unknown:
      "You cannot know precisely when all supporting formations will arrive or which French attack will become decisive.",
    historical:
      "Wellington maintained the defensive position while the Prussians approached and entered the battle. A later allied advance followed the failure of the final French attacks.",
    options: [
      {
        text: "Maintain the defensive position and preserve coalition contact.",
        feedback:
          "This resembles the historical choice. It offered a way to hold until support arrived, but it required the army to absorb repeated attacks and depended on uncertain timing.",
        historical: true,
      },
      {
        text: "Withdraw early to preserve the army.",
        feedback:
          "A withdrawal might conserve forces but could disrupt coalition cooperation and expose troops during disengagement. Its success cannot be established from the historical outcome.",
        historical: false,
      },
      {
        text: "Launch an early general offensive.",
        feedback:
          "An attack might seek initiative but would sacrifice defensive advantages before the coalition had fully concentrated. The result is unknowable, not a simulated victory or defeat.",
        historical: false,
      },
    ],
  },
  {
    slug: "after-cannae",
    title: "After the encirclement",
    battleSlug: "cannae",
    commander: "Roman leadership",
    situation:
      "216 BCE. Reports of catastrophic losses at Cannae reach Rome. The Republic must choose how to continue a war against an army that has repeatedly defeated it.",
    known:
      "Rome still has institutions, allied communities and resources beyond the defeated field army. Hannibal’s victory creates grave pressure on the alliance system.",
    unknown:
      "The future loyalty of every ally and the outcome of further campaigns cannot be known.",
    historical:
      "Rome continued the war, mobilized further forces and fought across multiple theaters. The later victory in the war was not inevitable after Cannae.",
    options: [
      {
        text: "Seek an immediate settlement on whatever terms are offered.",
        feedback:
          "Peace could limit further losses but would require accepting uncertain terms and consequences. We cannot know which agreement would have been possible.",
        historical: false,
      },
      {
        text: "Continue mobilization and protect the alliance system.",
        feedback:
          "This matches Rome’s broad historical response. It drew on institutional resilience and resources, while imposing further heavy costs on people and allies.",
        historical: true,
      },
      {
        text: "Commit all remaining resources to one immediate field battle.",
        feedback:
          "Concentration might promise a rapid reversal, but it risks repeating a disastrous exposure of the state’s forces. This is an interpretive alternative, not a documented Roman order.",
        historical: false,
      },
    ],
  },
  {
    slug: "midway-intelligence",
    title: "Act on imperfect intelligence",
    battleSlug: "midway",
    commander: "Chester W. Nimitz",
    situation:
      "Late May 1942. Intelligence points to an attack on Midway. You must decide how to position scarce carriers before knowing the exact course of the enemy operation.",
    known:
      "Codebreaking and other intelligence indicate Midway as an objective. Carrier availability is constrained following earlier operations.",
    unknown:
      "Enemy locations, timing and battle execution remain uncertain; intelligence does not reveal the future.",
    historical:
      "Nimitz positioned US carriers to contest the operation near Midway. Intelligence contributed to the opportunity, but reconnaissance, air operations and contingency shaped the outcome.",
    options: [
      {
        text: "Concentrate available carriers to contest the expected operation.",
        feedback:
          "This reflects the historical deployment. It risked scarce assets in order to exploit an intelligence advantage, without any guarantee of the result.",
        historical: true,
      },
      {
        text: "Keep carriers farther away until all reports are confirmed.",
        feedback:
          "Greater caution might protect assets but could lose the opportunity to intervene. Complete confirmation might arrive too late; a different result cannot be asserted.",
        historical: false,
      },
      {
        text: "Disperse the carriers across several possible objectives.",
        feedback:
          "Dispersal could hedge against a mistaken forecast but weaken concentration at the actual point of contact. This is a counterfactual trade-off rather than an established outcome.",
        historical: false,
      },
    ],
  },
  {
    slug: "strike-the-plateau",
    title: "When to strike the plateau",
    battleSlug: "austerlitz",
    commander: "Napoleon Bonaparte",
    situation:
      "Morning, 2 December 1805, near Brünn in Moravia. Allied columns hold the Pratzen Heights and are moving against your right. Your army is far from France and needs a decision.",
    known:
      "You have left the plateau to the Allies and expect an attack in the south. Soult's corps is concealed below the heights, ready to advance.",
    unknown:
      "How much of the Allied army has left the plateau, and whether your southern sector can hold until the center is won.",
    historical:
      "Napoleon launched Soult's corps against the Pratzen Heights once Allied columns had moved south, around 8–8:30 a.m. in the sources. Control of the center split the Allied army and the French won decisively.",
    options: [
      {
        text: "Attack the heights now, while Allied columns are still moving south.",
        feedback:
          "This matches the historical decision. Striking during the Allied movement aimed at a weakened center, but it relied on the southern sector holding and on accurate judgment of timing.",
        historical: true,
      },
      {
        text: "Wait until the Allied attack in the south is fully committed.",
        feedback:
          "Waiting might expose an even weaker center, but it would leave your right under pressure longer and give the Allies time to notice the danger. The result cannot be known.",
        historical: false,
      },
      {
        text: "Reinforce the southern sector and fight a defensive battle.",
        feedback:
          "Defense would reduce the risk to your right but give up the chance of a decisive result, which the strategic situation demanded. This is an interpretive alternative, not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "two-fronts-at-alesia",
    title: "Besieger and besieged",
    battleSlug: "alesia",
    commander: "Julius Caesar",
    situation:
      "52 BCE. Vercingetorix's army is shut inside Alesia, but his cavalry has escaped to raise a relief army across Gaul. Your legions may soon face attack from two directions.",
    known:
      "The defenders' food is limited. A large relief force is being gathered, though its strength and timing are uncertain; Caesar's own figures for it are not reliable.",
    unknown:
      "When the relief army will arrive, where it will strike, and whether your supplies will last as long as the defenders'.",
    historical:
      "Caesar built an inner line facing Alesia and an outer line facing the relief army, gathered supplies, and used reserves and cavalry to defeat the final combined assaults. Vercingetorix then surrendered. The account is Caesar's own.",
    options: [
      {
        text: "Lift the siege and fight the relief army in the open.",
        feedback:
          "Meeting the relief force away from the town could avoid fighting on two fronts, but it would release the besieged army. A different outcome is speculation, not history.",
        historical: false,
      },
      {
        text: "Fortify against both the town and the relief army, and stay.",
        feedback:
          "This reflects Caesar's historical course. It kept the siege intact but stretched the legions along long lines and depended on supplies and reserves holding out.",
        historical: true,
      },
      {
        text: "Withdraw toward the Roman province to regroup.",
        feedback:
          "Withdrawal would preserve the army but abandon the campaign at a moment of Gallic unity. Its political and military consequences cannot be established.",
        historical: false,
      },
    ],
  },
  {
    slug: "march-south",
    title: "Fight now or gather strength",
    battleSlug: "hastings",
    commander: "Harold II",
    situation:
      "Early October 1066. You have defeated a Norwegian invasion at Stamford Bridge in Yorkshire. William of Normandy has landed at Pevensey in Sussex.",
    known:
      "Your army has fought one battle and marched far. William's force is established near the coast and depends on its ships and foraging.",
    unknown:
      "How many more troops would join you if you waited, and what William would do to the surrounding country in the meantime.",
    historical:
      "Harold marched south quickly and gave battle near Hastings on 14 October. His army held a ridge through a long day of assaults before he was killed and it broke. Historians debate whether he intended to fight at once.",
    options: [
      {
        text: "Wait near London to gather a larger army.",
        feedback:
          "More troops might have joined, but William would have had time to strengthen his position and ravage the region. Whether waiting would have changed the result is unknowable.",
        historical: false,
      },
      {
        text: "Blockade William's base and avoid pitched battle.",
        feedback:
          "Containment could strain an invader dependent on foraging, but it required time, supplies and a way to hold the army together. This is a counterfactual, not a documented option.",
        historical: false,
      },
      {
        text: "March south quickly and confront William near the coast.",
        feedback:
          "This resembles the historical course. Speed could contain the invasion and protect the south, but it meant fighting before all available forces had gathered.",
        historical: true,
      },
    ],
  },
  {
    slug: "where-the-blow-falls",
    title: "Where will the blow fall?",
    battleSlug: "cer",
    commander: "Radomir Putnik",
    situation:
      "Mid-August 1914. Austria-Hungary has declared war and shelled Belgrade. Your armies were concentrated for an invasion you expected from the north, across the Sava and the Danube.",
    known:
      "Austro-Hungarian corps have crossed the Drina from Bosnia and are pressing your Third Army in the Jadar valley. Šabac has been taken.",
    unknown:
      "Whether the Drina crossing is the main attack, and whether more troops will cross the Sava behind your armies.",
    historical:
      "The Supreme Command sent Stepanović's Second Army west to support the Third. It met the invaders on the Cer ridge on 15–16 August, and by 20 August the Austro-Hungarian Fifth Army was back across the Drina.",
    options: [
      {
        text: "Keep the main force in the north and hold the Sava and the Danube.",
        feedback:
          "This guards against a second invasion from the north, but leaves the Third Army to face the Drina attack alone. An interpretive alternative; the outcome cannot be known.",
        historical: false,
      },
      {
        text: "Split the reserve evenly between the north and the Drina.",
        feedback:
          "This hedges against both threats but risks being too weak everywhere. It is not a documented plan.",
        historical: false,
      },
      {
        text: "Send the Second Army west to strike the invaders on the Drina front.",
        feedback:
          "This matches the historical decision. Concentrating against the main attack won at Cer, but it accepted the risk of an attack from the north.",
        historical: true,
      },
    ],
  },
  {
    slug: "give-up-the-capital",
    title: "Give up the capital?",
    battleSlug: "kolubara",
    commander: "Serbian Supreme Command",
    situation:
      "Late November 1914. After weeks of fighting the army is short of artillery ammunition. The Austro-Hungarian Sixth Army has pushed your First Army back across the Ljig to Mount Suvobor, and your front is over-extended.",
    known:
      "The Austro-Hungarian armies are attacking along the whole line. Belgrade is held by troops that could strengthen the front elsewhere.",
    unknown:
      "Whether the enemy will over-extend in turn, and how losing the capital will affect morale and your allies.",
    historical:
      "The Supreme Command shortened the front and abandoned Belgrade. The Austro-Hungarian armies regrouped, and on 3 December all three Serbian armies counterattacked; Belgrade was retaken on 15 December.",
    options: [
      {
        text: "Hold every line, including Belgrade, at any cost.",
        feedback:
          "Holding everything would keep the capital but stretch an exhausted army further. An interpretive alternative; the outcome cannot be known.",
        historical: false,
      },
      {
        text: "Shorten the front, give up Belgrade and prepare to counterattack.",
        feedback:
          "This matches the historical decision. Giving up the capital bought a shorter front and time, and the counteroffensive caught the enemy regrouping.",
        historical: true,
      },
      {
        text: "Fall back far to the south to rebuild the army before fighting again.",
        feedback:
          "A deeper retreat would gain more time but give up much more of the country. It is not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "november-1915",
    title: "November 1915",
    battleSlug: "invasion-of-serbia-1915",
    commander: "Serbian Supreme Command",
    situation:
      "November 1915. German and Austro-Hungarian armies advance from the north; Bulgarian armies have taken Skopje and cut the road to the Allies at Salonika. Your army has withdrawn into Kosovo, followed by refugees.",
    known:
      "The army is not fit for a counteroffensive, and the Allied force at Salonika is small and far away.",
    unknown:
      "Whether the mountains of Montenegro and Albania can be crossed in winter, and whether Allied ships will come to the coast.",
    historical:
      "On 25 November the Supreme Command ordered a retreat through Montenegro and Albania. Thousands died on the way, but Allied ships carried the survivors to Corfu, and the rebuilt army returned to fight in 1916.",
    options: [
      {
        text: "Retreat across the mountains to the Adriatic and fight on beside the Allies.",
        feedback:
          "This matches the historical decision. It saved the army as a fighting force, at a terrible cost to soldiers, civilians and prisoners.",
        historical: true,
      },
      {
        text: "Make a final stand on the Kosovo plain.",
        feedback:
          "A stand would defend the last Serbian ground but risk encirclement and capitulation, which the Supreme Command judged worse than retreat.",
        historical: false,
      },
      {
        text: "Break south through the Bulgarian line toward Salonika.",
        feedback:
          "Reaching the Allies would keep the army in the war, but it would have to attack an enemy it was no longer fit to attack. An interpretive alternative.",
        historical: false,
      },
    ],
  },
  {
    slug: "where-to-break-the-front",
    title: "Where to break the front?",
    battleSlug: "dobro-pole",
    commander: "Louis Franchet d'Espèrey",
    situation:
      "Summer 1918. You command the Allied armies in Macedonia. The front has stood almost still for nearly two years, from the Albanian coast to the Aegean.",
    known:
      "Bulgarian morale is falling; the attack on Skra di Legen in June showed it. Serbian staff officers have long argued for an attack at Dobro Pole, where flatter ground lies behind the ridge.",
    unknown:
      "Whether a breach in the mountains can be widened before reserves arrive, and how the Bulgarian army will react.",
    historical:
      "Franchet d'Espèrey attacked at Dobro Pole on 15 September with six Serbian and two French divisions, supported by an attack at Doiran. The front collapsed and Bulgaria signed an armistice on 29 September.",
    options: [
      {
        text: "Attack along the whole front to stretch the Bulgarian reserves.",
        feedback:
          "A broad attack would test the whole line but spread your own strength thin. It is not a documented plan.",
        historical: false,
      },
      {
        text: "Make the main effort at Lake Doiran, on the easier ground near the Vardar.",
        feedback:
          "Doiran was attacked as a supporting operation, and the Bulgarians held there. An interpretive alternative; the outcome cannot be known.",
        historical: false,
      },
      {
        text: "Concentrate on the narrow mountain sector at Dobro Pole, with a supporting attack at Doiran.",
        feedback:
          "This matches the historical decision. The breach at Dobro Pole could not be sealed, and the Bulgarian front collapsed within days.",
        historical: true,
      },
    ],
  },
];
