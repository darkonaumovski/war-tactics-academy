import type { Course, Lesson, Scenario } from "../lib/types";
import { additionalCourses } from "./additional-courses";
import { collectionCourses } from "./collection-courses";
import { lessonExercises } from "./lesson-exercises";
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
const orderedCourses: Course[] = [
  initialCourses[0],
  additionalCourses[0],
  collectionCourses[0],
  collectionCourses[1],
  initialCourses[1],
  collectionCourses[2],
  additionalCourses[1],
  collectionCourses[3],
  collectionCourses[4],
  additionalCourses[2],
];
const withExercises = (course: Course): Course => ({
  ...course,
  lessons: course.lessons.map((lesson) => {
    const extra = lessonExercises[`${course.slug}/${lesson.slug}`];
    return extra
      ? {
          ...lesson,
          questions: [...lesson.questions, ...extra.questions],
          sourceCheck: extra.sourceCheck,
        }
      : lesson;
  }),
});
export const courses: Course[] = orderedCourses.map(withExercises);
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
    slug: "cross-the-hydaspes",
    title: "Crossing a guarded river",
    battleSlug: "hydaspes",
    commander: "Alexander III of Macedon",
    situation:
      "Spring 326 BCE, in the Punjab. Porus holds the far bank of the Hydaspes with infantry, cavalry, chariots and war elephants. The river is swollen by monsoon rain and meltwater, and Ambhi of Taxila is your ally.",
    known:
      "Horses will not land facing elephants. Upstream, a wooded headland at a bend of the river faces a wooded island.",
    unknown:
      "Whether Porus will see through a deception, whether the far bank can be reached where you land, and how the elephants will fight.",
    historical:
      "Alexander staged nightly feints until Porus stopped reacting, left Craterus at the camp with precise orders and crossed upstream in a stormy night with a picked force. He defeated Porus's son and then Porus, winning on the flanks with cavalry while the phalanx fought the elephants.",
    options: [
      {
        text: "Wait for the river to fall in winter, then cross in strength opposite Porus.",
        feedback:
          "Alexander openly gathered grain to suggest exactly this. Waiting in earnest would give Porus months to strengthen the bank; it is an interpretive alternative whose result cannot be known.",
        historical: false,
      },
      {
        text: "Stage repeated feints, leave a holding force at the camp and cross upstream by night.",
        feedback:
          "This matches the historical decision. It divided the army in the face of the enemy and depended on precise orders for Craterus, a stormy night and a landing that proved to be on an island.",
        historical: true,
      },
      {
        text: "Force a crossing opposite Porus's camp under cover of bolt-shooting engines.",
        feedback:
          "Engines had cleared a far bank on the Jaxartes, but here the cavalry would land facing elephants. It is not a documented plan, and the outcome cannot be known.",
        historical: false,
      },
    ],
  },
  {
    slug: "pompeys-cavalry",
    title: "Against the massed cavalry",
    battleSlug: "pharsalus",
    commander: "Gaius Julius Caesar",
    situation:
      "9 August 48 BCE, near Pharsalus in Thessaly. After your defeat at Dyrrhachium your army is short of supplies. Pompey has at last offered battle, his right covered by a river with steep banks.",
    known:
      "Pompey has massed his cavalry, archers and slingers on his left under Labienus, opposite your right, and his cavalry is stronger than yours. Your veteran legions stand in three lines.",
    unknown:
      "When and how the cavalry will strike, and whether your legions can hold a larger infantry army in the centre.",
    historical:
      "In Caesar's account, he took one cohort from each legion of his third line and formed a fourth line behind his right. When Pompey's cavalry drove back his horse, the fourth line routed it and wheeled onto the Pompeian left from behind. Dio describes a long, even fight without a reserve.",
    options: [
      {
        text: "Extend your line to the right to match Pompey's front and his cavalry.",
        feedback:
          "A longer line would reduce the overlap but thin every part of it, leaving nothing in hand if the cavalry broke through. An interpretive alternative; the result cannot be known.",
        historical: false,
      },
      {
        text: "Decline battle and march away to find supplies elsewhere.",
        feedback:
          "Delay was Pompey's best course, not yours: your army was short of supplies after Dyrrhachium. It is not a documented plan.",
        historical: false,
      },
      {
        text: "Take cohorts from your third line and post them as a fourth line behind your right.",
        feedback:
          "This matches Caesar's account. It met Pompey's main effort with a reserve, at the cost of a weaker third line, and depended on reading correctly where the cavalry would strike.",
        historical: true,
      },
    ],
  },
  {
    slug: "stand-at-auerstedt",
    title: "One corps against an army",
    battleSlug: "jena-auerstedt",
    commander: "Louis-Nicolas Davout",
    situation:
      "Morning, 14 October 1806, at Hassenhausen near Auerstedt. You command the 3rd Corps, sent north to cut the Prussian line of retreat while Napoleon attacks at Jena. On the road you have met a much larger Prussian force.",
    known:
      "Your corps is alone, far from the main army. The Prussian army has no divisional system and slow supply trains. Bernadotte's corps has been summoned, but you cannot count on it.",
    unknown:
      "How strong the force in front of you is, and whether Bernadotte or Napoleon will come to your support.",
    historical:
      "Davout stood his ground at Hassenhausen for six hours. Brunswick attacked piecemeal and was mortally wounded; Davout then brought up his artillery and counterattacked, and by about 4 p.m. the main Prussian army had disintegrated. Bernadotte did not intervene.",
    options: [
      {
        text: "Stand and fight at Hassenhausen, then counterattack when the Prussian attacks slacken.",
        feedback:
          "This matches the historical decision. One corps fought the main Prussian army alone; it depended on the Prussians attacking piecemeal, and it cost the corps dearly when Bernadotte did not come.",
        historical: true,
      },
      {
        text: "Fall back south toward Napoleon and the main army.",
        feedback:
          "Rejoining the main army would protect your corps but leave open the Prussian line of retreat you were sent to cut. An interpretive alternative; the outcome cannot be known.",
        historical: false,
      },
      {
        text: "Screen the road with a rearguard and wait for Bernadotte before engaging.",
        feedback:
          "Waiting would add a corps if it came, but Bernadotte, though summoned more than once, did not intervene. It is not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "deploy-the-grand-fleet",
    title: "Which way to deploy?",
    battleSlug: "jutland",
    commander: "John Jellicoe",
    situation:
      "Evening, 31 May 1916, in the North Sea off Jutland. Beatty's battlecruisers, after losing two ships, are drawing the German fleet north toward you. Visibility is worsening in mist and smoke.",
    known:
      "Contrary to the report you received, the High Seas Fleet is at sea and Beatty is in contact with it. The Grand Fleet is considerably larger, and the German minefields off Horns Reef offer the enemy a way home.",
    unknown:
      "Exactly where the German battle line is and on what course, and whether torpedo boats and submarines lie in wait.",
    historical:
      "Seconds after he learned where the German fleet was, Jellicoe deployed his fleet across its line of advance at about 6.15 p.m. Scheer turned away twice; at the second turn Jellicoe turned away from a massed torpedo attack, and in the night the German fleet slipped past to Horns Reef.",
    options: [
      {
        text: "Keep closing in cruising order and deploy only when the enemy is in sight.",
        feedback:
          "Closing first might bring the fleets into action sooner, but deploying later, nearer the enemy and in failing light, carries risks of its own. An interpretive alternative; the outcome cannot be known.",
        historical: false,
      },
      {
        text: "Deploy at once into line across the German line of advance.",
        feedback:
          "This matches the historical decision, which Britannica calls the most vital of the battle. It put the Grand Fleet across the German path, but Scheer escaped by turning away.",
        historical: true,
      },
      {
        text: "Hold back the battle fleet until clearer reports arrive.",
        feedback:
          "Caution would guard against torpedoes and mines, but with the light failing it risked losing contact altogether. It is not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "halsey-goes-north",
    title: "Carriers in the north",
    battleSlug: "leyte-gulf",
    commander: "William F. Halsey Jr.",
    situation:
      "Evening, 24 October 1944, east of the Philippines. Your Third Fleet's aircraft have sunk the battleship Musashi in the Sibuyan Sea, and Kurita's force has turned west. Now Japanese carriers have been sighted far to the north.",
    known:
      "Your orders are to protect the Leyte landing and to destroy the major part of the Japanese fleet if the chance arises. Kinkaid's Seventh Fleet, which supports the landing, does not report to you; no single commander controls both fleets.",
    unknown:
      "Whether Kurita has really retreated, how many aircraft the northern carriers carry, and whether the San Bernardino Strait will stay empty.",
    historical:
      "Halsey took the whole Third Fleet north after Ozawa's carriers, leaving no force to guard the San Bernardino Strait. Kurita came through at dawn and met the escort carriers of Taffy 3 off Samar, which fought back until he withdrew. Off Cape Engaño Halsey's aircraft sank all four of Ozawa's carriers, which had been a decoy with few aircraft.",
    options: [
      {
        text: "Stay off the San Bernardino Strait and let the northern carriers go.",
        feedback:
          "Guarding the strait would protect the landing against Kurita, but leave a carrier force free to act. An interpretive alternative; the outcome cannot be known.",
        historical: false,
      },
      {
        text: "Leave battleships to guard the strait and send the carriers north.",
        feedback:
          "This would cover the landing while still pursuing the carriers, at the cost of weakening both halves of the fleet. It is not what happened, and its result cannot be known.",
        historical: false,
      },
      {
        text: "Take the whole Third Fleet north to destroy the Japanese carriers.",
        feedback:
          "This matches Halsey's decision. It sank all four carriers, but they were a decoy, and it left the landing area exposed to Kurita's battleships off Samar.",
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
          "The Supreme Command tried this first: from 19 November its divisions attacked towards the Kačanik gorge and Skopje, and by 21 November they had been thrown back. Only then was the retreat ordered.",
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
  {
    slug: "believe-the-report",
    title: "Believe the report?",
    battleSlug: "teutoburg",
    commander: "Publius Quinctilius Varus",
    situation:
      "9 CE, in Germania between the Lower Rhine and the Lower Elbe, which you govern for Augustus with the aim of making it a regular province. Arminius, a Cheruscan noble with Roman equestrian rank and one of your trusted companions, reports a rising among distant peoples.",
    known:
      "Segestes warns you that Arminius is plotting against you. Your troops have been dispersed among the communities, and your army marches with a heavy train of wagons, animals and families. Your demands for tribute have been resented.",
    unknown:
      "Whether the report or the warning is true, and what the country on the way to the reported rising holds.",
    historical:
      "Varus refused to believe the warning and marched the army, with its baggage, toward the reported rising. The conspirators killed the Roman detachments in their communities and attacked the column on the march; at Kalkriese, between hill and bog, it could not form ranks and was cut in two. In Dio's account, on the fourth day Varus killed himself, and the three legions were destroyed.",
    options: [
      {
        text: "Hold Arminius and the other leaders while the report is tested, and keep the army near its bases.",
        feedback:
          "This would have taken the warning seriously, which, according to Velleius and Dio, Varus did not. Whether holding the leaders would have stopped a rising or provoked one cannot be known. An interpretive alternative.",
        historical: false,
      },
      {
        text: "March at once toward the reported rising with the whole army, as the column stands.",
        feedback:
          "This matches the historical decision as the sources tell it: Varus ignored the warning and marched a baggage-laden column into hostile country on Arminius's report. Unable to fight in formation in the narrows, the army was destroyed.",
        historical: true,
      },
      {
        text: "Send a light force to investigate while the main army returns to the Rhine.",
        feedback:
          "A smaller force would risk less of the army, but could itself be ambushed, and the main column would still have to cross the same country. It is not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "commit-the-guard",
    title: "Commit the Guard?",
    battleSlug: "borodino",
    commander: "Napoleon Bonaparte",
    situation:
      "7 September 1812, at Borodino on the road to Moscow. Since dawn your troops have attacked the Russian fortifications head-on. Ney holds the flèches, but the central redoubt has been taken and lost again, and the Russian line has not broken. Your marshals urge you to send in the Imperial Guard.",
    known:
      "You rejected Davout's plan for a wide flanking march. Murat, Davout and Ney want the Guard committed; Berthier, Duroc and Bessières are against it. Your army is worn down by long marches and supply failures, far from its bases, and you still need the decisive victory that might bring Alexander to terms.",
    unknown:
      "Whether Kutuzov has reserves left. Far from the smoke-covered field, you cannot be sure how the battle stands.",
    historical:
      "Napoleon refused to commit the Guard. By afternoon both armies were exhausted and the battle subsided into a cannonade. Kutuzov, who had committed every available man, withdrew in the night with his army badly mauled but intact, and at a council on 13 September decided to give up Moscow to save it.",
    options: [
      {
        text: "Keep the Guard in reserve.",
        feedback:
          "This matches the historical decision. The Guard stayed intact, far from home, but the Russian army survived. Britannica judges that the refusal forfeited the chance of a decisive rather than a narrow victory; the Fondation Napoléon notes that historians still debate what committing the Guard would have achieved.",
        historical: true,
      },
      {
        text: "Send the Guard against the Russian centre.",
        feedback:
          "Murat, Davout and Ney urged this, and Britannica's judgment, that Kutuzov had nothing left in reserve, suggests it might have turned a narrow victory into a decisive one. What it would have cost and achieved remains debated. A counterfactual.",
        historical: false,
      },
      {
        text: "Send fresh troops on a flanking march round the Russian left.",
        feedback:
          "Davout had proposed a wide flanking march before the battle, and Napoleon judged it too risky. In mid-battle, with the army exhausted, it would have been harder still. It is not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "turn-and-attack",
    title: "Turn and attack?",
    battleSlug: "marne-1914",
    commander: "Joseph Joffre",
    situation:
      "4 September 1914. Your armies and the British have fallen back for weeks from the frontiers toward the Marne, and the government has left Paris. Gallieni, the capital's military governor, reports that Kluck's First Army has wheeled inward east of Paris, carrying its flank across the face of the Paris defences, and proposes to strike it with Maunoury's new Sixth Army.",
    known:
      "Kluck's flank is exposed, and the Sixth Army is forming near Paris. Plan XVII has failed, but you have moved troops by rail to your left. The British Expeditionary Force is a partner you can persuade but not command.",
    unknown:
      "Whether the British will join an attack, and whether armies that have retreated for weeks can turn and fight.",
    historical:
      "Joffre approved Gallieni's proposal and ordered the whole left wing to turn and attack on 6 September, telling units that could not advance to hold their ground; on the 5th he persuaded Sir John French to take part. Kluck drew his army west against Maunoury, opening a gap between the German First and Second Armies, and on 9 September the German right wing began to retreat.",
    options: [
      {
        text: "Continue the retreat to gain time and rebuild the armies.",
        feedback:
          "Further retreat would have spared the armies another battle for now, but given up more ground and left Paris to its defenders. It is not what Joffre decided. An interpretive alternative.",
        historical: false,
      },
      {
        text: "Let the Sixth Army strike from Paris alone while the other armies hold.",
        feedback:
          "A local blow would risk less, but Kluck could turn his whole army on it, as he did against Maunoury, without a general offensive to exploit the gap that opened. It is not a documented plan.",
        historical: false,
      },
      {
        text: "Order the whole left wing to turn and attack, with the Sixth Army striking Kluck's flank.",
        feedback:
          "This matches the historical decision. It ended German hopes of a quick victory in the west, though the Allies could not exploit the gap fast enough to destroy the German armies. Who first saw the opportunity, Gallieni or Joffre, is disputed.",
        historical: true,
      },
    ],
  },
  {
    slug: "how-far-from-the-bridge",
    title: "How far from the bridge?",
    battleSlug: "market-garden",
    commander: "The Allied airborne planners",
    situation:
      "September 1944. Montgomery has persuaded Eisenhower to back one bold stroke through the Netherlands: airborne divisions will seize the bridges on the road to Arnhem while XXX Corps drives up a single road to relieve them. The British 1st Airborne Division must take the bridge over the Rhine at Arnhem.",
    known:
      "There are too few transport aircraft to fly all the airborne troops in at once, so they must land in lifts, one a day. Intelligence describes the area as lightly defended. Relief is expected within two days.",
    unknown:
      "How strong the German forces near Arnhem are and where their armour is.",
    historical:
      "The planners accepted landing zones about 10 kilometres west of the bridge, a lift spread over three days and an intelligence picture of a lightly defended area. Only one battalion reached the bridge, and it was overrun before XXX Corps could arrive; the rest of the division was pressed into a pocket at Oosterbeek, and its survivors were ferried back across the Rhine.",
    options: [
      {
        text: "Land as close to the bridge as possible to seize it in strength on the first day.",
        feedback:
          "Taking the bridge in strength on the first day was what the operation needed, and its failure decided the outcome; but the sources read do not say what landing nearer the bridge would have risked. A counterfactual.",
        historical: false,
      },
      {
        text: "Land about 10 kilometres west of the bridge, with the division arriving over three days.",
        feedback:
          "This matches the plan the planners accepted. The landings succeeded, but most battalions never reached the bridge. Britannica calls the operation a failure of military intelligence redeemed to some extent by the soldiers' heroism.",
        historical: true,
      },
      {
        text: "Postpone the operation until the whole division can land in a single lift.",
        feedback:
          "Waiting would avoid spreading the division over three days, but would give up the speed on which Montgomery's case for one bold stroke rested. The sources read do not discuss it. An interpretive alternative.",
        historical: false,
      },
    ],
  },
  {
    slug: "raise-the-siege",
    title: "Raise the siege of Mantua?",
    battleSlug: "castiglione",
    commander: "Napoleon Bonaparte",
    situation:
      "30 July 1796, before Mantua. Wurmser, the veteran Austrian marshal, is coming down the Adige east of Lake Garda to relieve the fortress, while Quasdanovich comes down the western side of the lake. Their columns have driven in your posts at La Corona and Monte Baldo and taken Brescia, threatening your communications. Much of your army is tied to the cordon round Mantua.",
    known:
      "Lake Garda separates the two Austrian columns, so they cannot yet support each other. You have written that the situation is decidedly critical. Your siege equipment is in the lines before the fortress.",
    unknown:
      "How soon the two columns can unite, and whether the siege equipment could be got away in time if you wait.",
    historical:
      "Bonaparte lifted the siege on 30 July, abandoning the siege equipment, and turned on Quasdanovich, whose columns were beaten around Lonato, Salò and Brescia. On 5 August he attacked Wurmser at Castiglione and drove him back toward Trent. The siege was resumed on 7 August without its equipment, and Mantua held out until early 1797.",
    options: [
      {
        text: "Hold the siege lines and meet the Austrians with the troops you can spare.",
        feedback:
          "This keeps the siege, but with much of the army in cordon posts you would face two converging columns with part of your force. Wurmser's biography says he believed the siege would keep Bonaparte pinned, which is what this choice would do. A counterfactual.",
        historical: false,
      },
      {
        text: "Withdraw the siege equipment first, then march against the Austrian columns.",
        feedback:
          "Gouvion Saint-Cyr later argued that the equipment could have been withdrawn in time, and that its loss tied the army to Mantua for months. The Fondation Napoléon judges the decision Bonaparte took consistent with his principles. Whether the time existed is not settled by the sources. A counterfactual.",
        historical: false,
      },
      {
        text: "Lift the siege at once, abandon the equipment, and strike each column before they unite.",
        feedback:
          "This matches the historical decision. Concentrating between the columns let Bonaparte beat Quasdanovich and then Wurmser separately, but the siege equipment was lost, and whether that price was necessary is still debated.",
        historical: true,
      },
    ],
  },
  {
    slug: "stop-at-smolensk",
    title: "Stop at Smolensk?",
    battleSlug: "smolensk-1812",
    commander: "Napoleon Bonaparte",
    situation:
      "August 1812, in the ruins of Smolensk. Your army took the city, but the Russians withdrew across the Dnieper by night, burning the bridges, and their main army escaped again after the fight at Valutina. You have halted in the city to organise supplies and hospitals.",
    known:
      "You expected the campaign to be over within thirty days. Long marches and supply failures, more than combat, have worn down your army, above all its horses. At Vitebsk you spoke of digging in, resting the troops and raising Poland before choosing between Moscow and St Petersburg. Before the war Alexander said he would not accept a dictated peace.",
    unknown:
      "Whether the Russians will stand and fight before Moscow, or go on trading ground for time.",
    historical:
      "Napoleon left Smolensk on 25 August and continued east. Barclay was replaced by Kutuzov, who fought at Borodino on 7 September and then gave up Moscow. The Russians refused to come to terms, and in October the army began its retreat.",
    options: [
      {
        text: "Winter at Smolensk, organise the rear and resume the campaign in spring.",
        feedback:
          "Napoleon had proposed a halt of this kind at Vitebsk, and Caulaincourt applauded it. It gives up the hope of a quick decision and leaves the Tsar time; whether Alexander would then negotiate is unknown. A counterfactual.",
        historical: false,
      },
      {
        text: "March on toward Moscow in search of the decisive battle.",
        feedback:
          "This matches the historical decision. Kutuzov gave him the battle at Borodino, but the Russian army survived it, and Moscow brought no peace. Each step east lengthened the road back.",
        historical: true,
      },
      {
        text: "Offer peace to Alexander from Smolensk and wait for his answer.",
        feedback:
          "Alexander had told Caulaincourt before the war that he would withdraw to Kamchatka sooner than sign a treaty in his own capital that would be no more than a truce. Waiting would cost the same time as wintering without its preparations. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "which-road-home",
    title: "Which road home?",
    battleSlug: "maloyaroslavets",
    commander: "Napoleon Bonaparte",
    situation:
      "Evening of 25 October 1812, near Maloyaroslavets. The town is in French hands after changing hands repeatedly, but Kutuzov's army stands behind it across the road to Kaluga. This morning Cossacks nearly captured you while you inspected the Russian positions. Your marshals are with you.",
    known:
      "The army left Moscow on 19 October in a long column slowed by poorly clad men, weak horses and wagons of loot. You meant to reach Smolensk by way of Kaluga, through fertile country untouched by the war. Most of the marshals advise against another battle. Davout argues for the southern route; Murat favours going back by Mozhaisk.",
    unknown:
      "Whether Kutuzov would fight again or fall back, and how much more the army can bear so far from its depots.",
    historical:
      "On 26 October the army turned back toward Borovsk and the Mozhaisk road, the way it had come, through country already stripped bare. Ganière presents the decision as the start of the disaster.",
    options: [
      {
        text: "Turn back to the Mozhaisk road, the way the army came.",
        feedback:
          "This matches the historical decision, which Murat favoured. It took the army out of Kutuzov's reach, but along a road that had become a desert, and Ganière presents it as the start of the disaster.",
        historical: true,
      },
      {
        text: "Attack Kutuzov again and force the road to Kaluga.",
        feedback:
          "This would keep to the original plan through intact country, but it means another battle with an army already slowed and short of horses, and most of the marshals advised against it. A counterfactual.",
        historical: false,
      },
      {
        text: "Take the southern road to Smolensk, as Davout urges.",
        feedback:
          "Davout argued that it was shorter and ran through intact country. It would also have kept the army closer to Kutuzov, which Ganière says Napoleon had resolved to avoid. Whether it would have saved the army cannot be known. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "one-bridge-out",
    title: "One bridge out of Leipzig",
    battleSlug: "leipzig",
    commander: "Napoleon Bonaparte",
    situation:
      "Evening of 18 October 1813. After nine hours of assaults from north and south, your army has been pushed back into the suburbs of Leipzig. Two Saxon divisions and the Württemberg cavalry changed sides during the day. Bennigsen and Bernadotte arrived during yesterday's lull, so the Allied armies are now together.",
    known:
      "Ammunition is running short. Bavaria has joined the Allies, and the Confederation of the Rhine is breaking up behind you. The road west crosses the Elster by a single bridge.",
    unknown:
      "How long a rearguard can hold the city, and how hard the Allies will press once the retreat begins.",
    historical:
      "At 2 a.m. on 19 October Napoleon began the retreat west over the Elster bridge. At 1 p.m. a corporal blew it up while it was still crowded with French troops, trapping the rearguard and the wounded in Leipzig; Poniatowski died trying to cross the river on horseback. The sources disagree over whether the bridge was under fire at the time.",
    options: [
      {
        text: "Fight on around the city for another day.",
        feedback:
          "With ammunition short, allies changing sides during the battle and the Allied armies now united, the sources give little reason to expect a better result than on the 18th. A counterfactual.",
        historical: false,
      },
      {
        text: "Delay the retreat until more crossings over the Elster are ready.",
        feedback:
          "More crossings would have reduced the dependence on one bridge, but they would have cost time the Allies were using to close in, and the sources read do not say whether it could have been done. A counterfactual.",
        historical: false,
      },
      {
        text: "Retreat west by night over the Elster bridge, with a rearguard holding the city.",
        feedback:
          "This matches the historical decision. It brought much of the army away, but everything depended on one bridge, and its early destruction turned a defeat into a disaster.",
        historical: true,
      },
    ],
  },
  {
    slug: "press-on-at-roye",
    title: "Press on at Roye, or switch?",
    battleSlug: "amiens-1918",
    commander: "Douglas Haig",
    situation:
      "Night of 14 August 1918, British headquarters. Since 8 August the Fourth Army, with the Canadian and Australian Corps and the French First Army on its right, has advanced about twelve miles east of Amiens. Foch, the Allied commander-in-chief, has ordered a renewed attack on the Chaulnes–Roye line for 16 August.",
    known:
      "The advance has reached the old Roye–Chaulnes defences: a derelict battle area of old trenches, shell holes and tangled wire, ideal for machine-gun defence. German artillery fire has increased over the last two days, and the enemy has been heavily reinforced. On 10 August you visited a division at the front and saw the resistance stiffen for yourself. North of the Somme, the ground facing the Third Army is little damaged by shellfire, and an attack there seems unexpected. The Canadian commander, Arthur Currie, urges consolidating the gains.",
    unknown:
      "How strong the German reserves are, whether an attack on the 16th would break through or only add to the losses, and whether Foch will accept a change to his orders.",
    historical:
      "Haig postponed the attack of the 16th and argued for an attack by the Third Army north of the Ancre, to turn the old Somme defences from the north. On 15 August Foch came round to his view, on condition that the drive south of the Somme be resumed. The Third Army attacked on 21 August, the first of the British attacks that continued to the armistice.",
    options: [
      {
        text: "Attack the Chaulnes–Roye line on the 16th, as Foch has ordered.",
        feedback:
          "It keeps faith with the Allied commander-in-chief and keeps the pressure on a shaken enemy, but against prepared positions on ground made for machine guns; Haig judged success doubtful even at the price of considerable losses. A counterfactual.",
        historical: false,
      },
      {
        text: "Halt and consolidate the gains east of Amiens until the artillery is ready.",
        feedback:
          "This is close to what Currie urged, and it would spare losses, but it would give the German army time to recover from 8 August. Haig chose to strike elsewhere rather than wait. A counterfactual.",
        historical: false,
      },
      {
        text: "Postpone the attack, and press Foch to let the Third Army strike north of the Ancre instead.",
        feedback:
          "This matches the historical decision. Haig broke off where the enemy was ready and struck where it was not, and Foch agreed after a French army commander also doubted the attack on Roye. It is what Haig had not done on the Somme or at Passchendaele.",
        historical: true,
      },
    ],
  },
  {
    slug: "terms-for-an-armistice",
    title: "Terms for an armistice",
    battleSlug: "meuse-argonne",
    commander: "Ferdinand Foch",
    situation:
      "Afternoon of 25 October 1918, at your headquarters at Senlis. Germany has asked for an armistice, and the Allied governments have asked you to draft its military conditions. You have called the British, American and French commanders-in-chief to give their views.",
    known:
      "In a few months the German army has lost an enormous amount of ground, prisoners and material. Haig says it is not so broken that it cannot retire to its frontier and defend it, that the British army is under strength, the French exhausted and the Americans incompletely organised, and asks for moderate terms: the evacuation of Belgium, occupied France and Alsace-Lorraine, and the return of rolling stock and civilians. Pétain wants the left bank of the Rhine occupied, with bridgeheads. Pershing wants severe terms, including withdrawal to the right bank and the surrender of submarines.",
    unknown:
      "Whether Germany will accept harsh terms or fight on into 1919, and whether moderate terms would let it re-form its armies behind the Rhine while peace is negotiated.",
    historical:
      "Foch judged Haig’s reasons not well founded and drafted conditions that included the evacuation of the left bank of the Rhine and Allied bridgeheads across it. On 1 November the governments accepted his argument for the Rhine; he warned them against naval clauses heavy enough to make Germany refuse, but was told to include them. Germany accepted everything, and hostilities ended at 11 a.m. on 11 November.",
    options: [
      {
        text: "Recommend Haig’s moderate terms, so that Germany is sure to accept.",
        feedback:
          "It would end the fighting quickly, but it would halt the Allies at the frontiers with the Rhine in front of them, leaving Germany free, Foch argued, to re-form its armies and resume the war if it rejected the peace. A counterfactual.",
        historical: false,
      },
      {
        text: "Require the evacuation of the left bank of the Rhine and Allied bridgeheads across it.",
        feedback:
          "This matches Foch’s draft. It made a renewal of the war impossible while peace was negotiated, and Germany accepted. It also ended the fighting before any advance into Germany, which left room for the later claim that the German army had not been beaten.",
        historical: true,
      },
      {
        text: "Demand terms close to surrender, and be ready to fight on into Germany if they are refused.",
        feedback:
          "Pershing proposed the severest terms at Senlis. Haig’s despatch counts the cost of an advance against opposition: supply lines already stretched, further casualties, and incalculable suffering for the inhabitants of the countries crossed. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "besiege-tyre",
    title: "Besiege Tyre, or march on?",
    battleSlug: "tyre",
    commander: "Alexander III of Macedon",
    situation:
      "Early 332 BCE, on the Phoenician coast, some months after Issus. Byblus and Sidon have opened their gates. Envoys from Tyre met you on the march and promised to do whatever you commanded, but when you asked to enter the city and sacrifice to Heracles, the Tyrians voted to admit no Persian or Macedonian. You have sent their envoys back and called your Companions and officers to council.",
    known:
      "Tyre is an island city, fortified all round with lofty walls. The strait is shallow and muddy near the mainland and about three fathoms deep under the walls. The Persians still command the sea, the Tyrians have many ships of their own, and their king is at sea with the Persian fleet, whose best and largest part is Phoenician. Darius escaped from Issus and is free to raise a new army. In Greece, Sparta is openly at war with you and Athens is held back by fear rather than goodwill. Egypt and Cyprus are still in Persian hands.",
    unknown:
      "How long a siege would take with no fleet to match the Tyrians’, whether the Phoenician squadrons serving Persia would change sides once their own cities were yours, whether Carthage would send Tyre help, and what Darius would do with the time.",
    historical:
      "Alexander persuaded his officers to besiege Tyre and began a mole across the strait, leading the work himself. When the kings of Aradus and Byblus learned that their cities were his, they brought their ships over with the Sidonian triremes, and the kings of Cyprus followed, giving him the sea. Darius offered territory, money and his daughter while the siege went on. Tyre fell in midsummer 332, after seven months by Plutarch’s and Diodorus’s count. The slaughter in the city was great, and except for those who had taken refuge in the temple of Heracles, the survivors were sold into slavery.",
    options: [
      {
        text: "Besiege Tyre, however long it takes, to win the Phoenician fleet and the sea before going on to Egypt.",
        feedback:
          "This matches the historical decision. The strategic case Arrian gives Alexander was largely met when the Phoenician and Cyprian squadrons came over, before the city fell. Diodorus gives another reason, not to be held in contempt by one city, and the siege went on to the end at a heavy cost to the Tyrians.",
        historical: true,
      },
      {
        text: "Leave a force on the mainland to watch Tyre and march on to Egypt.",
        feedback:
          "It saves months, but in the argument Arrian gives Alexander it leaves a Persian fleet base behind you while Persia holds the sea, and gives the Phoenician crews no reason to change sides. Whether Tyre would still have mattered once Egypt was taken cannot be known. A counterfactual.",
        historical: false,
      },
      {
        text: "Turn inland and pursue Darius before he can raise a new army.",
        feedback:
          "It strikes at the king while he is weak, but Arrian’s speech names exactly this danger: with the coast unsecured, the Persians could retake the maritime provinces and carry the war into Greece, where Sparta was already fighting. An interpretive alternative whose result cannot be known.",
        historical: false,
      },
    ],
  },
  {
    slug: "a-night-attack",
    title: "Attack by night?",
    battleSlug: "gaugamela",
    commander: "Alexander III of Macedon",
    situation:
      "331 BCE, the evening before the battle at Gaugamela. Your army has halted on the hills about thirty stades from the Persian line. On Parmenion’s advice you have camped and reconnoitred the ground with the light infantry and the Companion cavalry; you have briefed your officers and ordered the men to dine and rest. Now Parmenion comes to your tent and urges you to attack tonight.",
    known:
      "Darius has chosen a level plain and had the uneven ground levelled for his chariots and cavalry, persuaded that he lost at Issus because the field was too narrow. Captured scouts describe an army far larger than yours, with scythe-bearing chariots and some fifteen elephants. Parmenion argues that at night the Persians would be caught unprepared and confused, and more liable to panic in the dark. You do not know the country; the enemy does, the people around are friendly to them, and you hold many prisoners in your camp.",
    unknown:
      "Whether the Persians expect an attack tonight, how a night battle on unfamiliar ground would go, and whether a victory won in the dark would settle anything with Darius.",
    historical:
      "In Arrian’s account, which introduces the story with “it is said”, Alexander answered in others’ hearing that it would be mean to steal a victory, and the army rested. Arrian commends his reasons: accidents at night can overturn the stronger side, a defeat would be fatal in hostile country, and a victory by night would let Darius avoid admitting that he was the inferior general. Fearing a night attack, the Persians stood in their ranks all night, which Arrian says wore them down. Alexander won the battle the next day.",
    options: [
      {
        text: "Attack tonight, as Parmenion urges.",
        feedback:
          "Badian judges that a night attack would have overwhelmed the Persians, who stood to arms all night. Arrian lists what could go wrong: confusion that hands victory to the weaker side, a rout in country where everyone was hostile, and prisoners ready to join an attack on the camp. A counterfactual.",
        historical: false,
      },
      {
        text: "Hold your position on the hills, and wait for Darius to leave his levelled plain.",
        feedback:
          "It would deny Darius the ground he prepared, but nothing in the sources suggests he would leave it, and an army deep in enemy country gains little by waiting. An interpretive alternative, not a documented plan.",
        historical: false,
      },
      {
        text: "Rest the army tonight and fight in daylight, on the ground you have reconnoitred.",
        feedback:
          "This matches the historical decision, and Arrian commends it, while Badian thinks the night attack would have succeeded. The exchange comes from a record written on the king’s side after Parmenion’s death, a record in which Parmenion is always the one who is answered.",
        historical: true,
      },
    ],
  },
  {
    slug: "turn-back-at-the-hyphasis",
    title: "Go on, or turn back?",
    battleSlug: "hydaspes",
    commander: "Alexander III of Macedon",
    situation:
      "326 BCE, on the bank of the Hyphasis, the easternmost river of the campaign, some months after the victory over Porus at the Hydaspes. You have made a long speech urging your officers to go on. A long silence followed, until Coenus spoke for the army: few of those who set out are left, the rest are worn out and long for home, and men led against their will will not be the same in danger. The officers applauded him, and many wept.",
    known:
      "The land beyond the river is said to be fertile, well governed and rich in elephants. Meetings have been held throughout the camp; some soldiers say they will not follow you farther even if you lead the way. In Diodorus’s account the rains have lasted seventy days, horses’ hooves are worn thin and armour is failing, and you have already let the men plunder the country and given rations to their wives and bounties to their children. Coenus proposes that you go home and start a new expedition later with fresh men.",
    unknown:
      "Whether the army would come round if you stood firm, how many would follow you as volunteers, and what really lies beyond the river.",
    historical:
      "Alexander broke up the meeting, annoyed at Coenus’s frankness. The next day he said he would go on with those who chose to follow, and shut himself in his tent for three days, but the camp stayed silent and unmoved. Ptolemy, as Arrian reports him, says the sacrifices for the crossing were then unfavourable, and Alexander announced the return. The soldiers wept for joy and blessed him for letting himself be conquered by them alone, and twelve altars marked the limit. Plutarch and Diodorus tell the turning differently, but all three agree that the army would not go on.",
    options: [
      {
        text: "Announce that you will cross with volunteers only, and let the rest go home.",
        feedback:
          "Alexander threatened this and waited three days for the camp to change its mind; it did not. A king who crossed with part of his army into country he did not know would risk the army and his authority together. Carried out, it is a counterfactual.",
        historical: false,
      },
      {
        text: "Give way, and find a form for the return that lets king and army both keep their standing.",
        feedback:
          "This matches the historical outcome. In Ptolemy’s account the omens made the turning the gods’ decision; in Arrian’s the soldiers thanked the king for letting them conquer him. Both readings could hold at once. Alexander learned the army’s limit only by reaching it, in front of everyone.",
        historical: true,
      },
      {
        text: "Order the crossing, and make an example of the officers who spoke against it.",
        feedback:
          "Coenus warned that men led against their will will not be the same in danger, and the army held the one power that mattered, its willingness to fight. None of the three accounts has Alexander try force here. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "cross-into-syrmia",
    title: "Cross the Sava?",
    battleSlug: "syrmia-1914",
    commander: "Serbian Supreme Command",
    situation:
      "Early September 1914. In the second half of August your armies drove the first Austro-Hungarian invasion back across the Drina at Cer, the first Allied victory of the war. Now your allies, above all Russia, fighting in Galicia, firmly insist that you attack across your own borders.",
    known:
      "The army is still waiting for the promised 120,000 rifles, artillery ammunition, horses, tents and enough pontoons for floating bridges. The losses at Cer were smaller than the enemy’s but cannot be replaced. Your own war plan with Montenegro was to stand on the defensive while drawing as many Austro-Hungarian forces as possible away from Russia. The Montenegrin army is ready to advance with you into eastern Bosnia, towards Sarajevo.",
    unknown:
      "How many enemy troops an offensive would draw away from the Russians, whether the river crossings can be made with the bridging you have, and whether the Austro-Hungarian armies beaten at Cer will attack again across the Drina while yours are north of the Sava.",
    historical:
      "Reluctantly, Serbia agreed. On the night of 5 to 6 September the First Army and part of the Second began crossing the Sava into Syrmia, and the Užice Army crossed the upper Drina with the Montenegrins towards Sarajevo. At Šašinci the poorly prepared crossing of the Timok Division ended with the bridge collapsing and the men cut off on the far bank surrendering. The offensive into Syrmia was broken off when Austria-Hungary attacked again across the Drina, and the advance on Sarajevo ended in withdrawal in the autumn.",
    options: [
      {
        text: "Decline for now: tell your allies what the army lacks, and hold the Drina against the next invasion.",
        feedback:
          "It keeps the army where the danger proved to be, but it refuses the allies while Russia is fighting for both of you, and it departs from your own plan of drawing Habsburg forces away. The sources read record Serbia’s reluctance, not what it told its allies about its limits. A counterfactual.",
        historical: false,
      },
      {
        text: "Agree, and cross the Sava into Syrmia and the upper Drina towards Sarajevo.",
        feedback:
          "This matches the historical decision, taken reluctantly. It kept faith with the alliance and served the war plan, but the crossings lacked reconnaissance and bridging, and the second invasion caught the First Army on the wrong side of the Sava.",
        historical: true,
      },
      {
        text: "Agree in principle, but send only raids across the Sava and keep the main armies facing the Drina.",
        feedback:
          "A limited effort would protect the home front, but it might draw too few enemy troops to matter to the Russians, and it would not satisfy allies who were insisting on an offensive. It is not a documented plan.",
        historical: false,
      },
    ],
  },
  {
    slug: "strike-bulgaria-first",
    title: "Strike Bulgaria first?",
    battleSlug: "invasion-of-serbia-1915",
    commander: "Serbian Supreme Command",
    situation:
      "September 1915. Bulgaria, courted by both coalitions for a year, has joined the Central Powers, and its army is mobilising and concentrating on your eastern border. You can propose to your allies a strike at Bulgaria before its mobilisation and concentration are complete.",
    known:
      "The army is short of ammunition and other supplies, and cholera and typhus have ravaged soldiers and civilians alike. Bulgaria wanted Macedonia, your prize from the Balkan Wars, which you would not concede: the Entente could offer it only part of Macedonia after the war, the Central Powers all of it at once. British and French help has been promised, and the only way it can reach you is through the Greek port of Salonika and up the Vardar. In June your government sent troops into Albania despite your allies’ advice and even threats.",
    unknown:
      "Whether Bulgaria will attack at once, when and in what strength Austria-Hungary and Germany will strike from the north, and how quickly Allied troops can come up from Salonika.",
    historical:
      "Serbia proposed the strike, and the western Allies strongly opposed it; it was not made. Austro-Hungarian and German armies crossed the Danube on 6 October, and two Bulgarian armies attacked from the east a week later. British and French troops had begun landing at Salonika on 5 October, too slowly to help. Cut off from the south by the Bulgarians, the Serbian army retreated in November and December across the Albanian mountains to the Adriatic.",
    options: [
      {
        text: "Hold back, as the western Allies insist, and rely on their promised help through Salonika.",
        feedback:
          "This matches what happened: Serbia proposed the strike and gave way when the Allies opposed it. Restraint left Bulgaria free to finish mobilising, and the help from Salonika came too slowly. With hindsight it looks the worse choice; at the time it followed from a policy that Serbia’s own refusal to concede Macedonia had made hard to carry out.",
        historical: true,
      },
      {
        text: "Strike Bulgaria now, before its mobilisation is complete, whatever the Allies say.",
        feedback:
          "Serbia had defied its allies once that year, in Albania. A strike might have disrupted the Bulgarian concentration, but it would be made against the Allies’ wishes, by an army short of ammunition, with an invasion still to come from the north. A counterfactual.",
        historical: false,
      },
      {
        text: "Offer Bulgaria the part of Macedonia it wants, now, to keep it out of the war.",
        feedback:
          "Hall writes that Serbia would not concede Macedonia, and that the Central Powers could offer all of it at once while the Entente could promise only part of it after the war. By September Bulgaria had already chosen. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "stay-with-cuesta",
    title: "Stay in Spain, or go back to Portugal?",
    battleSlug: "talavera-1809",
    commander: "Arthur Wellesley",
    situation:
      "24 August 1809, at Mérida in Estremadura, four weeks after the victory at Talavera. Your army has fallen back across the Tagus and is now separated from the Spanish army of General Cuesta. Your brother, who represents Britain to the Spanish government at Seville, has asked whether you will help the Spanish defend the line of the Guadiana.",
    known:
      "Since early August the army has been almost starving; for days it had no bread, and you have told the Spanish authorities repeatedly that without food and transport you could not advance and must leave Spain. You gave the Portuguese carts that carried your ammunition to move the wounded, and those who could not be moved were left at Talavera when Cuesta marched away. You have seen Spanish troops run at Talavera and at the bridge of Arzobispo. The King's government has never ordered you to operate in Spain, only permitted it on your own responsibility, so long as Portugal is safe. The Spanish government is alarmed at your withdrawal.",
    unknown:
      "Whether food and transport will now come from Spain, where the French corps that came down on your rear will go next, and what a withdrawal will cost you with the Spanish government and people.",
    historical:
      "Weighing, in his words, objects, means and risks, Wellesley told his brother that he ought to avoid any further co-operation with the Spanish armies and that no hope should be held out that he would remain in Spain to co-operate with them. He was in no hurry, and would rest the army near the frontier first, but he withdrew to his base in Portugal, where the Lines of Torres Vedras were begun that autumn. The Spanish army was left to hold the Guadiana without him.",
    options: [
      {
        text: "Join the Spanish army on the Guadiana, as the Spanish government asks.",
        feedback:
          "It would answer the charge that Britain abandons its allies, but Wellesley judged that the Guadiana could not be defended by a weaker army against a stronger, that everything would fall on his own troops, and that his army was in no state to fight. A counterfactual.",
        historical: false,
      },
      {
        text: "Withdraw towards Portugal, refuse further joint operations, and keep the freedom to decide later.",
        feedback:
          "This matches the historical decision. It preserved the army and the base it was sent to defend, and it left Wellesley free to choose when, how and on what conditions to act with the Spanish again. It also confirmed, to many in Spain, that the British would not stay.",
        historical: true,
      },
      {
        text: "Advance again towards Madrid once the Spanish promise supplies.",
        feedback:
          "The offensive after Talavera had failed for want of exactly those supplies and of an ally who would hold the passes behind him; Wellesley saw no chance of resuming it. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "relieve-ciudad-rodrigo",
    title: "Relieve Ciudad Rodrigo?",
    battleSlug: "bussaco-torres-vedras-1810",
    commander: "Viscount Wellington",
    situation:
      "20 June 1810, at Celorico in Portugal. Across the frontier Marshal Ney's corps is besieging the Spanish fortress of Ciudad Rodrigo, held by General Herrasti, a veteran determined to fight. Your Light Division's outposts are a few miles from the town, and the governor is hoping for your help.",
    known:
      "To raise the siege you must leave the mountains and cross the plains and two rivers. The French are stronger than you in cavalry, and nearly half your force is Portuguese and Spanish troops newly formed and never tested under fire. A second French corps can join Ney within a day or two. Your instructions forbid any unnecessary risk and leave you responsible for bringing the army away safely if it must go; you believe the government wants nothing done but what is safe and cheap. The Spanish, and some of your own officers, expect you not to stand by. One of your divisional generals writes that a relief would get the army driven out of Portugal, while every week of siege costs the French time.",
    unknown:
      "Whether Ney could be caught alone before his reinforcements arrive, how long the garrison can hold, and what refusing will cost you with the Spanish.",
    historical:
      "Wellington refused to risk a general action in the plains. He had already warned Herrasti that relief might be impossible, though he would act if the circumstances changed; they never did. Ciudad Rodrigo fell on 10 July, after the French had battered its walls into one broad breach. Herrasti spoke bitterly to the Spanish government of the absence of any attempt to relieve him, a Spanish divisional commander nearby marched off in anger, and within weeks Wellington reported that the people of Castile had stopped sending him intelligence. Masséna's proclamation to the Portuguese used the fall of the town against him.",
    options: [
      {
        text: "Strike at Ney's corps before its reinforcements arrive.",
        feedback:
          "A staff officer, D'Urban, suggested a surprise attack. Oman thinks it most improbable that Ney, with a strong cavalry screen, could have been caught alone, and a battle in the open with untested troops risked the one army Britain had. A counterfactual.",
        historical: false,
      },
      {
        text: "Send a strong detachment to break into the town with men and supplies.",
        feedback:
          "The garrison had food for weeks and ammunition, so supplies were not what it lacked; a detachment cut off in the plain might have been lost with the town. A counterfactual.",
        historical: false,
      },
      {
        text: "Refuse to risk a general action in the plains, stay in the hills, and tell the governor plainly that relief may be impossible.",
        feedback:
          "This matches the historical decision. Oman judges it right: success would only have raised the siege until the French reinforcements came, while defeat might have lost Portugal. The price was paid by the garrison and the town, and in Spanish trust.",
        historical: true,
      },
    ],
  },
  {
    slug: "attack-at-noon",
    title: "Attack at noon, or wait?",
    battleSlug: "salamanca-1812",
    commander: "Earl of Wellington",
    situation:
      "Noon on 22 July 1812, south of Salamanca. For days your army and Marshal Marmont's have marched side by side without a battle. The two armies now face each other south of the town, you have just ordered an attack, and Marshal Beresford urges you to call it off.",
    known:
      "You have decided that if you cannot attack today you will march for Ciudad Rodrigo without further delay, because French cavalry reinforcements are a day or two away. A plan of retreat is drafted and the baggage is already moving off, watched by the people of Salamanca, who welcomed your army and fear being abandoned. Your divisions are hidden behind the crest and in the folds of the ground, and one division waits screened by trees where the French can hardly see it.",
    unknown:
      "Whether an attack now would break the French or stall against them, and whether Marmont, who may think you are about to retreat, will make the mistake you have been waiting for before the day is out.",
    historical:
      "Wellington called off the noon attack on Beresford's advice, kept the army hidden and the retreat ready, and waited. In the afternoon Marmont extended his left along the plateau to threaten the road to Portugal, and Wellington wrote that this gave him the opportunity of attacking for which he had long been anxious. Pakenham's division turned the French left while the divisions behind the village of Arapiles attacked in front, and the battle was won that evening.",
    options: [
      {
        text: "Call off the noon attack, keep the army hidden with the retreat ready, and strike only if Marmont overreaches.",
        feedback:
          "This matches the historical decision. It kept both possibilities open until the deadline: a retreat drafted in case no opening came, and an army close enough to strike within the hour when one did. It paid only because Marmont made the mistake.",
        historical: true,
      },
      {
        text: "Attack at noon as ordered.",
        feedback:
          "Oman thinks a noon attack might have succeeded, but that the later blow, delivered against an enemy strung out on the march, was far more effective. With the outcome unknown, it meant attacking an enemy still in hand. A counterfactual.",
        historical: false,
      },
      {
        text: "March for Ciudad Rodrigo now, before the French cavalry arrive.",
        feedback:
          "It would save the army from any risk, but abandon Salamanca and its people, who were already complaining that the English were leaving without a battle, and confirm the reputation Marmont was relying on. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "leave-gergovia",
    title: "Leave Gergovia now, or strike first?",
    battleSlug: "gergovia",
    commander: "Gaius Julius Caesar",
    situation:
      "52 BCE, before Gergovia, the hill town of the Arverni. You have despaired of taking it by storm, and you hold a hill below it and two camps joined by a double ditch. Behind you the Aedui, your allies, have risen: their crowds have plundered and killed Roman citizens, and while their deputies protest their innocence, their states are sounding out others for war.",
    known:
      "You expect a greater rising and fear being surrounded by all the states of Gaul; you have begun to plan how to withdraw and concentrate the whole army without letting a departure caused by fear of the revolt look like flight. Deserters and your scouts tell you that a hill the enemy had crowded is now empty, because Vercingetorix has called every man to fortify a wooded ridge on the far side of the town, which the Gauls fear to lose. The ascent to the town wall is long, and a wall of large stones crosses it halfway up.",
    unknown:
      "Whether the legions can be held to a limited stroke once they are among the enemy's camps, whether the Aeduan contingent with you will be taken for friends in a fight, and what a withdrawal with nothing to show will do to your standing in Gaul.",
    historical:
      "Caesar tried a limited surprise first. Muleteers in helmets riding like cavalry, and a legion hidden in the woods, drew the Gauls to the far ridge, and he told his legates to keep the men in hand: it was a question of surprise, not of battle. The legions took three Gallic camps; he sounded the recall and halted the Tenth, but the legions beyond a valley did not hear it, pressed on to the town wall and were driven down with heavy loss. The next day he reprimanded the army, offered battle twice on level ground, and marched away into the country of the Aedui.",
    options: [
      {
        text: "Withdraw at once and concentrate the army before the revolt spreads.",
        feedback:
          "It was the course Caesar was already planning, and it would have kept the legions intact; but a retreat with no success to show risked looking like the flight he wanted to avoid, while the Aedui were wavering. A counterfactual.",
        historical: false,
      },
      {
        text: "Stay and press the siege of Gergovia with the whole army.",
        feedback:
          "Caesar had already despaired of taking the town by storm and had put off a blockade until his corn supply was secure; with the Aedui in revolt behind him, he feared being surrounded by all the states. A counterfactual.",
        historical: false,
      },
      {
        text: "Use the empty hill for a limited surprise, take the Gallic camps below the wall, then withdraw.",
        feedback:
          "This matches the historical decision. The feint worked and the camps were taken, but the plan depended on stopping victorious legions on command, and the legions out of earshot of the recall did not stop. The withdrawal came after a defeat, which Caesar's own account blames on the soldiers rather than on the plan.",
        historical: true,
      },
    ],
  },
  {
    slug: "after-dyrrhachium",
    title: "Fight again, or leave the coast?",
    battleSlug: "dyrrhachium",
    commander: "Gaius Julius Caesar",
    situation:
      "48 BCE, on the Adriatic coast near Dyrrhachium. Pompey has broken out through an unfinished stretch of your siege lines, and your counterattack on a Pompeian camp has ended in panic: men fled past you even when you seized their standards and ordered them to halt. You have lost standards, centurions and men, and Pompey's soldiers have hailed him as Imperator.",
    known:
      "The army is ashamed and eager to repair the disgrace, and some officers of rank think you should stay where you are and stake everything on a pitched battle. You do not trust troops who have just panicked, and if you give up your lines you fear for your corn: Pompey holds the sea and draws supplies from every province he controls, while your men have lived for months on barley, meat and bread made from roots. Your lieutenant Domitius is camped inland facing the Pompeian Scipio, and could be caught alone if Pompey marched on him.",
    unknown:
      "Whether Pompey will follow you inland or cross to Italy, whether your troops would stand in a battle now, and whether the report of your defeat, which the Pompeians are spreading in dispatches, will turn the towns against you.",
    historical:
      "Caesar abandoned the siege, called the army together and told it to set one reverse against many victories; he disgraced some standard-bearers, then sent the baggage off at nightfall and marched before dawn, outpacing Pompey's pursuit. After leaving his wounded at Apollonia he marched inland to join Domitius, reasoning that if Pompey followed he would be drawn from the sea and the stores at Dyrrhachium and made to fight on equal terms. Plutarch says Caesar spent the night after the defeat convinced he had shown bad generalship by posting himself by a sea his enemies controlled. Weeks later the armies met at Pharsalus.",
    options: [
      {
        text: "Abandon the siege, give the army time to recover, and march inland to join Domitius, drawing Pompey away from the sea.",
        feedback:
          "This matches the historical decision. It gave up the position and admitted the failure, but it saved a lieutenant, moved the war to ground where Pompey's fleet and stores could not help him, and gave a shaken army time. It paid because Pompey chose to follow.",
        historical: true,
      },
      {
        text: "Stay and offer a pitched battle at once, while the army burns to repair the disgrace.",
        feedback:
          "Some officers urged it, and the army's eagerness was real. Caesar judged that troops who had just panicked could not yet be trusted, and a second defeat on the coast would have left the army without corn or a line of retreat. A counterfactual.",
        historical: false,
      },
      {
        text: "Hold the lines and renew the siege, waiting for Pompey to tire.",
        feedback:
          "The enclosure had already failed: Pompey had the larger army, the shorter line to fortify and the sea behind him, and Caesar's men were hungrier than his. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "starve-them-out-at-ilerda",
    title: "Attack the Pompeians, or starve them out?",
    battleSlug: "ilerda",
    commander: "Gaius Julius Caesar",
    situation:
      "49 BCE, in Spain, a few months after you crossed the Rubicon. Pompey's legates Afranius and Petreius have tried to march the Pompeian army of Spain away towards the Ebro. Your army reached the passes first and stands across their road, and your cavalry has just cut down four of their light cohorts in sight of both armies.",
    known:
      "The enemy army is halted on a hill without water, its standards crowded together, its men keeping neither to their ranks nor to their colours and scarcely holding off your cavalry; it must come down sooner or later. Your legates, centurions and tribunes beg you not to hesitate: the men are as keen as they can be, and the enemy is shaken. You have cut the enemy off from food and can close every route to the Ebro. The men on the other side are Roman citizens.",
    unknown:
      "How long the enemy can hold out without water, whether its generals will try to break out or stop their men from going over to you, and whether your own soldiers, already complaining, will follow you if you refuse to fight.",
    historical:
      "Caesar refused battle. He had hoped, he writes, to finish the business without bloodshed by cutting the enemy off from food: why lose men even in a successful battle, why make trial of fortune, when a commander should win by policy as much as by the sword, and why kill fellow citizens? His soldiers said openly that if this chance was let slip they would not fight when he wished it. He drew back a little, closed every route to the Ebro and entrenched beside the enemy camp. The two armies began to fraternise until Petreius had the Caesarians he could catch killed; but, cut off from water and forage, the Pompeians asked for terms within days, and Caesar disbanded their army without forcing any man to swear allegiance to him.",
    options: [
      {
        text: "Attack now, while the enemy is shaken and in the open.",
        feedback:
          "Caesar admits the chance was real: a demoralised army, surrounded by cavalry on level ground. A battle might have ended the Spanish campaign that day, at the price of Roman lives on both sides and of soldiers Caesar hoped to win over. A counterfactual.",
        historical: false,
      },
      {
        text: "Refuse battle, close every route to the Ebro and to water, and let thirst and hunger do the work.",
        feedback:
          "This matches the historical decision. It cost Caesar his soldiers' anger and gave Afranius and Petreius time, but it ended with the enemy army surrendering intact and disbanded, and with a reputation for leniency that, by Caesar's account, won the approval of all.",
        historical: true,
      },
      {
        text: "Let the Pompeians go on towards the Ebro and follow them, waiting for a better field.",
        feedback:
          "It would throw away the position the army had just raced to win; Caesar writes that the whole contest had turned on which side reached the passes first. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "after-trasimene",
    title: "March on Rome, or turn away?",
    battleSlug: "lake-trasimene",
    commander: "Hannibal Barca",
    situation:
      "217 BCE, in Etruria, days after Lake Trasimene. Your army has destroyed the consul Flaminius’s army on the march along the lake, and your cavalry has caught the horsemen the other consul sent ahead to join him. You have sent the allied prisoners home without ransom, telling them you came to fight Rome for the freedom of Italy.",
    known:
      "No Roman field army stands between you and the city; the other consul is on the Adriatic side. You have no siege engines, and Rome is a walled city. Your men and horses are worn out by the winter in the open, the marshes and the battle, and many are sick. Not one Italian city has yet come over to you, and you have not been able to send word to Carthage since you crossed the Alps.",
    unknown:
      "Whether Rome would treat if you came to its walls, whether its allies will change sides once they see that Rome cannot defend their land, and how quickly Rome can raise new armies.",
    historical:
      "Polybius says Hannibal put aside, for the present, the idea of approaching Rome. He marched to the Adriatic, plundering the country and killing the adults his men met on the road, rested his men and horses in a rich land, rearmed his Africans with captured Roman weapons and sent the news to Carthage by sea for the first time. Then he moved south into Apulia. Rome appointed Fabius dictator, and Fabius shadowed him without giving battle. The 1911 Britannica judges that without siege engines he could not hope to take the capital and chose instead to rouse the south; no Italian city went over to him until after Cannae, a year later.",
    options: [
      {
        text: "March on Rome at once, while the city is still in shock.",
        feedback:
          "The road was open, but an army without engines could not storm the walls, and a siege would have let Rome gather new forces round a worn army. A failure under the walls would also have shown Rome’s allies that it could hold. A counterfactual.",
        historical: false,
      },
      {
        text: "Turn east to the Adriatic, rest and rearm the army in rich country, reach Carthage by sea, and then move south among Rome’s allies.",
        feedback:
          "This matches the historical decision. It restored the army and kept the strategy of turning Rome’s allies, but it gave Rome time to appoint Fabius, and for a year no Italian city came over.",
        historical: true,
      },
      {
        text: "Stay in Etruria and wait for reinforcements from Carthage and the Gauls.",
        feedback:
          "Etruria had already been laid waste by your own army, the Gauls wanted war on Roman land for its plunder rather than a halt, and Carthage could not yet be reached. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "nero-before-the-metaurus",
    title: "Hold your front, or march to your colleague?",
    battleSlug: "metaurus",
    commander: "Gaius Claudius Nero",
    situation:
      "207 BCE, in southern Italy. You are consul, facing Hannibal with your army; your colleague Marcus Livius is in the north facing Hasdrubal, Hannibal’s brother, who has crossed the Alps with a second Carthaginian army. Your foragers have caught Hasdrubal’s messengers on their way to Hannibal, and the despatches say the brothers are to meet in Umbria.",
    known:
      "Hannibal has not received the letters and does not know his brother’s plan. The rule that each consul keeps to the province, army and enemy the senate gave him would leave you watching Hannibal while Livius faces Hasdrubal alone. You could take the best of your infantry and cavalry north along the Adriatic, if the towns on the road have food and transport ready, and leave your camp under your second in command.",
    unknown:
      "Whether Hannibal will learn that you have gone and attack your weakened camp or follow you north, whether you can reach Livius before Hasdrubal moves, and how Rome will judge you for leaving your province if the march fails.",
    historical:
      "Livy says Nero sent the despatches to the senate with advice to cover the road at Narnia, sent couriers ahead to have food and carts ready on his route, and gave out that he was marching on a town in Lucania. He then took a picked force north by night, leaving his camp in place, and joined Livius in secret, entering his camp by night. Rome, Livy says, could not decide whether to praise or condemn him and waited for the result. Hasdrubal’s army was destroyed on the Metaurus; Nero returned to his camp in six days and had Hasdrubal’s head thrown in front of Hannibal’s outposts. Hannibal withdrew into Bruttium.",
    options: [
      {
        text: "Keep your camp in place, give out a march into Lucania, and take a picked force north in secret to join Livius.",
        feedback:
          "This matches the historical decision. It broke the rule of provinces and left a weakened camp in front of Hannibal on the bet that he would not find out, and it decided the war away from him before the brothers could meet.",
        historical: true,
      },
      {
        text: "Hold your front and send the letters to the senate, leaving the north to Livius and whatever forces Rome can raise.",
        feedback:
          "It was the lawful course, and Nero did send the letters with advice for the defence of the city; but it would have left one consul to face an army that Rome’s citizens feared as a second Hannibal, with the brothers marching to meet. A counterfactual.",
        historical: false,
      },
      {
        text: "Attack Hannibal at once, while he waits for news of his brother.",
        feedback:
          "Hannibal had beaten every Roman army that fought him on his own terms, and a defeat in the south would have opened the road for the brothers to join. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "africa-in-205",
    title: "Carry the war to Africa, or finish Hannibal in Italy?",
    battleSlug: "zama",
    commander: "Publius Cornelius Scipio",
    situation:
      "205 BCE, in Rome. You are consul, elected with enthusiasm after driving Carthage out of Spain. Hannibal is still in Italy, in Bruttium. You want Africa as your province; the leaders of the senate do not, and Fabius has challenged you in the senate to say whether you will abide by its decision or take the question to the people.",
    known:
      "Carthage’s armies are mostly hired, and its African allies are kings who have changed sides before: King Syphax has received your envoy, and Masinissa has promised to serve Rome in Africa. Fabius argues that Africa has no harbour, city or friendly king to receive a Roman army, that Regulus was destroyed there in the last war, and that Hannibal is still in Italy. The tribunes have ruled that if you submit the question to the senate its decision will bind you, and if you do not they will support any senator who refuses to vote. Your colleague is pontifex maximus and cannot leave Italy.",
    unknown:
      "Whether Carthage would recall Hannibal if Africa were invaded, whether the Numidian kings will keep faith, and whether the senate will give you the men and money you need.",
    historical:
      "Livy says Scipio asked for a day to consult his colleague and then submitted to the senate, which gave him Sicily with leave to cross to Africa if he thought it in the state’s interest. Refused a levy, he enlisted volunteers and accepted timber, iron, sailcloth, grain and arms from the towns of Etruria and other allies; Plutarch says Fabius blocked public money and had his forces limited. After the scandal at Locri a senate commission inspected his army and told him to sail. He landed in 204, burned the Carthaginian and Numidian camps in 203, Syphax having taken Carthage’s side, and Carthage recalled Hannibal, whom Scipio beat at Zama in 202.",
    options: [
      {
        text: "Take the question to the people’s assembly if the senate refuses you Africa.",
        feedback:
          "It was lawful in form and the people were with you, but the tribunes had said they would back senators who refused to vote, and it would have made you the consul Fabius described, carrying armies where you pleased like a king. A counterfactual.",
        historical: false,
      },
      {
        text: "Accept the war against Hannibal in Bruttium, as Fabius urges, and finish him in Italy first.",
        feedback:
          "Hannibal was still dangerous and the case was a serious one, but it meant fighting him on ground he knew while Carthage kept Africa untouched, in a war already in its fourteenth year. A counterfactual.",
        historical: false,
      },
      {
        text: "Submit to the senate, accept Sicily with leave to cross, and raise the rest from volunteers and allies.",
        feedback:
          "This matches the historical decision. It gave Scipio less than he asked and left him open to Fabius’s attacks and to the scandal at Locri, but it kept the state behind him, and the invasion drew Hannibal out of Italy.",
        historical: true,
      },
    ],
  },
  {
    slug: "after-the-first-day-at-shiloh",
    title: "Cross the river, or attack in the morning?",
    battleSlug: "shiloh",
    commander: "Ulysses S. Grant",
    situation:
      "The evening of 6 April 1862, at Pittsburg Landing on the Tennessee River. At dawn your army was attacked in its unentrenched camps, many of your men still at their Sunday routines, and all day it has been driven back. A last line of artillery on the bluffs above the landing, with two gunboats, has stopped the final Confederate attacks. Rain is falling in torrents, and thousands of stragglers are sheltering under the river bluff.",
    known:
      "Three of your five divisions engaged were raw, and some regiments broke at the first fire; Prentiss’s division held its ground until it was surrounded. The line bent back all day but never broke. Lew Wallace’s division, ordered up in the morning, took a longer road and is only now arriving, and Buell’s Army of the Ohio is coming up to cross the river, though you cannot know how much of his army will be across by morning. At Fort Donelson two months ago you saw an enemy who had attacked and then fallen back prove more demoralised than your own men.",
    unknown:
      "Whether the Confederates will attack the landing again tonight or in the morning, and how disordered their own army is after a day of attacking through woods; that their commander, Albert Sidney Johnston, bled to death in the afternoon; and how your superiors and the newspapers will judge a day on which your camps were surprised.",
    historical:
      "Before the firing ceased, and before any of Buell’s troops had reached the field, Grant visited each division commander and ordered them to push forward at first light and engage the enemy as soon as found. Beauregard, in command after Johnston’s death, had chosen not to attack the landing that evening. On 7 April, with Wallace’s division and three of Buell’s on the field, the Union armies attacked along the whole line, and by evening the Confederates were retreating to Corinth. The recovery did not restore Grant’s standing: a few days later Halleck took command in the field, and Grant, nominally second in command, was ignored. His memoirs spend much of a chapter denying that his army was surprised; McDonough and the 1911 Britannica say it was.",
    options: [
      {
        text: "Take the army back across the Tennessee under cover of night and the gunboats, and rebuild it on the far bank.",
        feedback:
          "A night crossing by a beaten army, in torrential rain, with thousands of stragglers under the bluff, would have given the Confederates the field, the camps and the initiative, and confirmed the verdict that the army had been routed. The bluffs and the gunboats made the last line strong enough to hold where it stood. A counterfactual.",
        historical: false,
      },
      {
        text: "Hold the line at the landing and wait until Buell’s whole army is across before deciding what to do.",
        feedback:
          "The position was strong, but waiting would have left the next move to the Confederates and given them time to reorganise after a day that had disordered them too. Grant gave his order before he could know how much of Buell’s army would arrive in time; waiting for that certainty would have meant no attack on the 7th. A counterfactual.",
        historical: false,
      },
      {
        text: "Order every division to push forward at first light and attack wherever the enemy is found, with Wallace and whatever of Buell’s army has crossed.",
        feedback:
          "This matches the historical decision. It worked because the reinforcements were under Union orders and arrived overnight, and because the Confederates had stopped. It did not excuse the surprise: the cost of that fell on the raw regiments overrun in their camps, and Grant’s own price was Halleck’s arrival in the field.",
        historical: true,
      },
    ],
  },
  {
    slug: "lee-on-the-evening-of-2-july",
    title: "Attack again, or manoeuvre?",
    battleSlug: "gettysburg",
    commander: "Robert E. Lee",
    situation:
      "The evening of 2 July 1863, at Gettysburg in Pennsylvania. After Chancellorsville you carried the war north, to revive Confederate morale and relieve the pressure on Vicksburg. You had not meant to fight a general battle so far from your base unless attacked, but coming unexpectedly on the whole Union army you judged that withdrawing through the mountains with your long trains would be difficult and dangerous. Yesterday your army drove the Union troops back through the town. Today you attacked both their flanks: Longstreet’s corps fought through the Wheatfield and the Peach Orchard to the base of Little Round Top, and Ewell’s evening attack on Cemetery Hill and Culp’s Hill gained ground it could not hold.",
    known:
      "The Union army holds the high ground south of the town in a curved line, strengthened with entrenchments, that lets it move troops quickly to its weaker sections. Today’s fighting has won positions from which your artillery could support a renewed assault, and you believe that better coordination would bring success. Your cavalry under Stuart has been away on an expedition, with your approval, and you have been short of reliable information. Longstreet, your senior corps commander, urged after the first day that the army disengage, and he wants to move round the Union left. You know that the enemy can be reinforced and that your own army cannot, and that much of the Southern public, buoyed by Chancellorsville, expects a quick victory.",
    unknown:
      "That your batteries will nearly exhaust their ammunition in a preliminary cannonade and be unable to support the infantry when it advances; how little a bombardment will do to the Union position; and whether one more success would destroy the Union army or only drive it back.",
    historical:
      "Lee wrote in his report that the result of the day’s operations induced the belief that, with proper concert of action and with the support the artillery could now give from the positions gained, the army would ultimately succeed, and it was determined to continue the attack. On 3 July, after the Confederates nearly took Culp’s Hill, he overruled Longstreet’s efforts to move round the Union left and ordered an assault on the Union centre. After a long bombardment that did little to soften the position, Pickett’s division and Heth’s, under Pettigrew, advanced across open fields and were driven back. Arthur Fremantle heard Lee tell General Wilcox that all this had been his fault. The next day the army began its retreat to Virginia, and five days later Lee wrote to Davis that the enemy could easily be reinforced while no addition could be made to his own numbers.",
    options: [
      {
        text: "Renew the attack in the morning, this time against the Union centre, with the artillery massed to prepare the way.",
        feedback:
          "This matches the historical decision. It rested on a reasonable reading of the day’s gains and on the hope of one more success, made by a commander whose boldness had beaten larger armies; it also rested on what Lee did not know, that his guns would be short of ammunition. The assault failed and spent men his army could not replace. After his death others blamed Longstreet for the defeat; Lee’s own report blamed no one.",
        historical: true,
      },
      {
        text: "Move the army round the Union left, towards Washington, and make the enemy attack you on ground of your choosing.",
        feedback:
          "Longstreet urged a move of this kind. It would have used the strength of the defensive and kept the army’s numbers, but it meant marching an army that lived off enemy country, with long trains and little information about the enemy, across the front of a Union army that could follow, entrench again or decline to attack. A counterfactual.",
        historical: false,
      },
      {
        text: "Break off the battle and withdraw through the mountains to Virginia while the army is still whole.",
        feedback:
          "It would have preserved the army that could not be replaced, but it gave up the invasion’s aims after two days of heavy fighting without a result, and Lee had already judged a withdrawal with long trains through the mountains difficult and dangerous. He made the same retreat after the third day, with an army weakened by the assault. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "after-the-wilderness",
    title: "Withdraw, or move south?",
    battleSlug: "wilderness",
    commander: "Ulysses S. Grant",
    situation:
      "7 May 1864, in the Wilderness in Virginia. You are general-in-chief of all the Union armies, travelling with Meade’s Army of the Potomac. On 4 May the army crossed the Rapidan into the tangled woods near the old Chancellorsville battlefield, and for two days it has fought Lee’s army there. Both armies now lie in their entrenchments. The woods caught fire during the fighting, and wounded men who could not move were suffocated or burned to death. This army’s soldiers have seen earlier commanders retreat after battles like this one.",
    known:
      "Your plan is for every Union army to advance at once, so that the Confederacy cannot move troops from a quiet front to a threatened one: Butler’s Army of the James is moving up the James towards Richmond and Petersburg, and Sherman is moving against Johnston’s army in Georgia. Lee’s army is outnumbered and cannot replace its losses as yours can. Lincoln, who fears defeat in the November election without a victory, has told you to seek out and destroy Lee’s army. Some of your officers fear what Lee will do next.",
    unknown:
      "Whether Lee will reach Richmond in time to turn on Butler; how many more battles it will take to bring Lee’s army to a position it cannot leave; and how long the government and the Northern public will bear the losses.",
    historical:
      "On the night of 7 May the army marched out of its lines and turned south, towards Spotsylvania Court House; Grant writes that the men cheered so loudly as the columns turned that the enemy must have taken it for a night attack. He told an officer who feared what Lee would do to go back to his command and think about what they were going to do themselves. His stated aims were to keep Lee from reaching Richmond in time to crush Butler, and to get between Lee’s army and its capital or draw it into the open. Four days later, from Spotsylvania, he wrote to Halleck that he purposed to fight it out on that line if it took all summer. The fighting went on at Spotsylvania, the North Anna and Cold Harbor, where Grant made an assault he later regretted and was called a butcher, and the campaign ended at Petersburg, where Lee had to defend a city and its railroads instead of manoeuvring.",
    options: [
      {
        text: "Withdraw north across the Rapidan to refit the army, as earlier commanders did after such battles.",
        feedback:
          "It would have spared the army an immediate battle, but it would have given Lee the initiative to turn on Butler, eased the pressure the simultaneous advance was meant to keep on every Confederate army, and told the government and the soldiers that the new general-in-chief was one more commander who went back. A counterfactual.",
        historical: false,
      },
      {
        text: "March south by the left flank towards Spotsylvania Court House, to get between Lee and Richmond or draw him into the open.",
        feedback:
          "This matches the historical decision. Each movement south put Lee in a worse position and kept his army fighting until it could be besieged at Petersburg, which is the case for persistence as a strategy. But the battles on the way also showed persistence turning into frontal attacks on works that could not be carried, and Grant himself regretted the last assault at Cold Harbor.",
        historical: true,
      },
      {
        text: "Stay in the Wilderness and renew the attacks on Lee’s entrenchments until his line breaks.",
        feedback:
          "Lee could not replace his losses, but two days in woods that hid the enemy and caught fire had shown how much the ground favoured the defender, and attacks on entrenchments here would have spent men without moving the army towards anything. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "slim-before-imphal",
    title: "Hold forward, or fall back to the plain?",
    battleSlug: "imphal-kohima",
    commander: "William Slim",
    situation:
      "7 March 1944, at IV Corps headquarters at Imphal. For weeks the evidence of a Japanese offensive across the Chindwin has been growing: rafts and country boats gathering on the river, power craft appearing, a pall of dust spreading over the jungle tracks from movement by night, a fresh regiment identified and heavy artillery reported at Kalemyo. IV Corps holds the Imphal plain, the base for the whole front, with two divisions far forward: the 17th Indian Division at Tiddim and the 20th near Tamu. You have come to discuss with its commander, Scoones, how to meet the blow.",
    known:
      "Scoones proposes to withdraw the forward divisions to the plain, hold its vital points with the fewest troops and assemble a reserve to destroy the Japanese on ground of his own choosing. Left forward, the two divisions could be cut off, imperilling the defence of the plain; near it, the attacker would have a long line of communication over mountains and you a short one. Scoones’s appreciation expects a detachment of up to four battalions to move against the road from Kohima to Imphal. A move of the 5th Indian Division from Arakan, where a Japanese offensive has just been beaten, is planned, but how fast it can come depends on transport aircraft you do not control.",
    unknown:
      "Exactly when the offensive will begin and how fast it will move; that the Japanese plan allows about three weeks for the attack, with three weeks’ rations, and depends on surprise and a quick success; and that a whole division, not a detachment, is marching on Kohima.",
    historical:
      "Slim agreed to Scoones’s plan, provided that permission to withdraw was given to the divisional commanders by Scoones personally, and only when he was satisfied beyond all reasonable doubt that a major offensive had begun. Kirby writes that the proviso led to the 17th Division’s withdrawal being left until too late: it began only when the Japanese were already across its road, and Scoones had to use his reserves to extricate it. When the division’s communications were cut, Slim asked urgently for aircraft, and Mountbatten diverted them from the airlift to China without waiting for approval; the 5th Division began to fly in on 19 March. The battle on the plain destroyed the Japanese offensive, but Kirby also calls the hurried withdrawal of a brigade from Kohima, which Slim upheld, a mistake.",
    options: [
      {
        text: "Keep both divisions forward at Tiddim and Tamu and meet the Japanese as they come out of the mountains.",
        feedback:
          "Giffard explained why this was rejected: left forward, the divisions gave the Japanese excellent chances to cut them off and imperil the plain, which was Slim’s first task, and fighting forward would have given the attacker a short line of supply and you a long one. A counterfactual.",
        historical: false,
      },
      {
        text: "Agree to withdraw to the plain, but only on Scoones’s own order once he is certain that a major offensive has begun.",
        feedback:
          "This matches the historical decision. The plan was sound: an attacker carrying three weeks’ food across mountains must win quickly, and a defender near his base can wait. The proviso made the timing depend on certainty, and certainty came late; the 17th Division fought its way back, the reserves were used to save it, and the aircraft that replaced them came from a superior’s risk.",
        historical: true,
      },
      {
        text: "Withdraw both divisions to the plain at once, before the Japanese move.",
        feedback:
          "An early withdrawal would have avoided the 17th Division’s fighting retreat, but it would have given up the forward positions and roads before the offensive was certain, perhaps on a false alarm, and the sources read do not say how the Japanese would have answered it. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "slim-in-december-1944",
    title: "Keep the plan, or change it?",
    battleSlug: "meiktila-mandalay",
    commander: "William Slim",
    situation:
      "Mid-December 1944, at Fourteenth Army headquarters. Your plan for the dry season, CAPITAL, is to bring the Japanese armies to battle between the Chindwin and the Irrawaddy, on the Shwebo plain north of Mandalay, and destroy them there. Your army has crossed the Chindwin at three points and is advancing. Now the evidence is changing.",
    known:
      "The Japanese 15th Division seems to have pulled back, the 53rd has broken contact and fallen back across the Irrawaddy, the 33rd is weakening, and there is no sign of more than delaying positions north of Mandalay; the 19th Division meets little opposition. Captured documents, reports from the inhabitants of liberated Burmese villages and air reconnaissance of troops and supplies moving south across the Irrawaddy all point to a withdrawal behind the river. Three combat cargo squadrons are being moved to China, and no formation can be moved by air. A good route runs down the Myittha valley to the Irrawaddy near Pakokku; south of the river lie Meiktila and Thazi, the key points on the road and railway to Rangoon and the main Japanese administrative area in central Burma.",
    unknown:
      "Whether the Japanese mean to make their main stand on the Irrawaddy or only to delay you; whether the extra aircraft, engineers and transport a new plan would need will be provided; and how quickly the Japanese would see a thrust towards Meiktila for what it was.",
    historical:
      "On 16 December Slim’s chief of staff telegraphed that CAPITAL was being scrapped, and on 17 and 20 December Slim sent Leese a new plan, EXTENDED CAPITAL: XXXIII Corps would close up to the Irrawaddy and encircle Mandalay while IV Corps moved down the Myittha valley, crossed near Pakokku and seized Meiktila. His appreciation asked for more aircraft, engineers and transport, and said that without them operations would be limited to the line Meiktila–Yenangyaung. Deception fixed the Japanese on Mandalay, and a Japanese conference judged that any thrust from Nyaungu would be no bigger than a Chindit raid. Meiktila fell on 3 March 1945, and by the end of March, Kirby writes, the Burma Area Army had virtually ceased to exist as a fighting force. The aircraft were made up and increased from late January, but Slim calculated that their removal in December had delayed his army by at least two weeks.",
    options: [
      {
        text: "Scrap CAPITAL: hold the Japanese at Mandalay with one corps, send the other in secret down the Myittha valley to cross near Pakokku and seize Meiktila, ask for the aircraft it needs and name a fallback.",
        feedback:
          "This matches the historical decision. It answered either Japanese choice, since a force at Meiktila would cut off an army standing at Mandalay or bar the road of one withdrawing. It depended on speed made by engineers and air supply, on deception, on aircraft others had to find, and on the enemy’s misreading of the threat.",
        historical: true,
      },
      {
        text: "Keep CAPITAL and press straight on to Mandalay and the Irrawaddy crossings with the whole army.",
        feedback:
          "If the Japanese had withdrawn behind the river, this would have meant a frontal crossing of a great river against a prepared enemy, with the army’s supply growing longer as Kimura’s grew shorter, which is what Kimura’s own plan counted on. A counterfactual.",
        historical: false,
      },
      {
        text: "Halt on the Shwebo plain until the aircraft taken to China are returned and the enemy’s intentions are clear.",
        feedback:
          "Waiting would have given the Japanese time to recover. Slim wrote to Leese that if the enemy were given time, considerably greater forces would be needed after the monsoon to achieve the same object, and the monsoon set a deadline for any advance on a port. A counterfactual.",
        historical: false,
      },
    ],
  },
  {
    slug: "sato-at-kohima",
    title: "Obey, or withdraw?",
    battleSlug: "imphal-kohima",
    commander: "Kotoku Sato",
    situation:
      "The last days of May 1944, on the ridges around Kohima. Your 31st Division was sent across the mountains in March to take Kohima and block the road from Dimapur to Imphal, carrying about three weeks’ supplies. In April it pressed the garrison into a shrinking perimeter, but British reinforcements broke through to it, and through May your division has been attacked from every side as the monsoon sets in.",
    known:
      "Your division is extremely short of food and ammunition, and the Fifteenth Army has sent it neither since the operation began. From the middle of May you have urged the army to let you withdraw to a position where the division can be supplied; Mutaguchi has refused, saying that the fall of Imphal is imminent, and has ordered you to hold Kohima at all costs. In April you kept a regimental group at Kohima rather than send it to Imphal as ordered, judging that you could not otherwise hold the ridge.",
    unknown:
      "Whether Imphal is in fact about to fall; whether supplies will ever reach you; and how the army will judge a division that retires without orders.",
    historical:
      "By the end of May, Kirby writes, Sato realised that his division faced imminent destruction; on 31 May he organised a rearguard under Miyazaki to delay any advance along the Imphal road and ordered the rest of his division to withdraw across country. The Japanese monograph says that he arbitrarily abandoned Kohima against orders. Mutaguchi, unaware of the division’s state, sanctioned the withdrawal after the event and ordered it to prepare an attack elsewhere; in June, ordered to stop and rejoin the battle, Sato retorted that the army’s failure to send him supplies or ammunition made it impossible to comply and freed him from any obligation to obey. Mutaguchi asked for him to be disciplined and replaced, and he was relieved on 27 June. Kirby writes that by then the division’s morale had cracked. The offensive was suspended in early July.",
    options: [
      {
        text: "Hold Kohima at all costs, as ordered, in the hope that Imphal falls and the road opens behind you.",
        feedback:
          "Imphal did not fall, and Kirby writes that by the end of May the division faced imminent destruction. Holding would have spent the division on an order resting on the army’s belief that victory was near, which its own staff and commanders had begun to doubt. A counterfactual.",
        historical: false,
      },
      {
        text: "Send your strongest regiment south to join the attack on Imphal, as the army wanted, and hold Kohima with the rest.",
        feedback:
          "Kirby writes that Sato’s fears of what would happen if he parted with a regimental group were in fact well founded: the regiment kept at Kohima in April was what stopped a British envelopment from reaching the road behind his division. Weakening the division further at the end of May would have risked losing both Kohima and the regiment. A counterfactual.",
        historical: false,
      },
      {
        text: "Organise a rearguard and withdraw the division towards where it can be supplied, without waiting for permission.",
        feedback:
          "This matches the historical decision. The monograph condemns it as arbitrary; Kirby shows that Sato asked to withdraw first and was refused. It saved part of the division from destruction at Kohima, but it ended the army’s last hope of taking Imphal, and the men who withdrew, without supplies, had to make their way back through the monsoon.",
        historical: true,
      },
    ],
  },
];
