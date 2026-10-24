import type { Course, Lesson, Scenario } from "../lib/types";
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
export const courses: Course[] = [
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
];
