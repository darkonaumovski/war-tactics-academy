import type { Course, Lesson, Source } from "../lib/types";

const greek: Source = {
  title: "Warfare in Ancient Greece",
  publisher: "The Metropolitan Museum of Art",
  url: "https://www.metmuseum.org/essays/warfare-in-ancient-greece",
};
const polybius: Source = {
  title: "Polybius, Histories 6.19–42: the Roman military system",
  publisher: "University of Chicago, LacusCurtius",
  url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/6%2A.html",
};
const legion: Source = {
  title: "Legion: life in the Roman army",
  publisher: "British Museum",
  url: "https://www.britishmuseum.org/exhibitions/legion-life-roman-army",
};
const weapons: Source = {
  title: "Weapons of the Western Front",
  publisher: "National Army Museum",
  url: "https://www.nam.ac.uk/explore/weapons-western-front",
};
const trenches: Source = {
  title: "Trench Warfare",
  publisher: "National WWI Museum and Memorial",
  url: "https://www.theworldwar.org/learn/about-wwi/trench-warfare",
};
const tanks: Source = {
  title: "Tanks and Armoured Vehicles",
  publisher: "Canadian War Museum",
  url: "https://www.warmuseum.ca/firstworldwar/history/battles-and-fighting/weapons-on-land/chars-et-vehicules-blindes/",
};
const atlantic: Source = {
  title: "Battle of the Atlantic: An Overview",
  publisher: "US Naval History and Heritage Command",
  url: "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1942/atlantic/overview.html",
};
const planning: Source = {
  title: "Planning D-Day",
  publisher: "The Royal Parks",
  url: "https://www.royalparks.org.uk/read-watch-listen/operation-bushy-park-plotting-d-day-royal-park/planning-d-day",
};

const serbia1914: Source = {
  title: "Serbia 1914: exhibition catalogue",
  publisher: "Historical Museum of Serbia and Military Museum, Belgrade",
  url: "https://imus.org.rs/wp-content/uploads/2020/03/Srbija-1914-Katalog.pdf",
};
const serbiaArticle: Source = {
  title: "Serbia (Mile Bjelajac)",
  publisher:
    "1914-1918-online. International Encyclopedia of the First World War",
  url: "https://encyclopedia.1914-1918-online.net/article/serbia/",
};
const southEastWarfare: Source = {
  title: "Warfare 1914-1918 (South East Europe) (Dmitar Tasić)",
  publisher:
    "1914-1918-online. International Encyclopedia of the First World War",
  url: "https://encyclopedia.1914-1918-online.net/article/warfare-1914-1918-south-east-europe/",
};
const balkanWar: Source = {
  title: "War in the Balkans (Richard C. Hall)",
  publisher:
    "1914-1918-online. International Encyclopedia of the First World War",
  url: "https://encyclopedia.1914-1918-online.net/article/war-in-the-balkans-1-1/",
};
const seeckt: Source = {
  title: "Seeckt, Hans von (Dennis Showalter)",
  publisher:
    "1914-1918-online. International Encyclopedia of the First World War",
  url: "https://encyclopedia.1914-1918-online.net/article/seeckt-hans-von/",
};
const occupation: Source = {
  title:
    "Occupation during and after the War (South East Europe) (Milan Ristović)",
  publisher:
    "1914-1918-online. International Encyclopedia of the First World War",
  url: "https://encyclopedia.1914-1918-online.net/article/occupation-during-and-after-the-war-south-east-europe/",
};
const habsburgWar: Source = {
  title:
    "The First World War and the End of the Habsburg Monarchy, 1914–1918 (Manfried Rauchensteiner)",
  publisher: "Böhlau Verlag, Austria-Forum web edition",
  url: "https://austria-forum.org/web-books/firstworldwar01en2014isds/000178",
};
const balkanFront1918: Source = {
  title: "World War I: The Balkan front, 1918",
  publisher: "Encyclopaedia Britannica",
  url: "https://www.britannica.com/event/World-War-I/The-Balkan-front-1918",
};

function unit(
  slug: string,
  title: string,
  objectives: string[],
  paragraphs: string[],
  battleSlugs: string[],
  sources: Source[],
  diagram: string[],
  prompt: string,
  choices: string[],
  answer: number,
  explanation: string,
  seminar: Lesson["seminar"],
): Lesson {
  return {
    slug,
    title,
    objectives,
    paragraphs,
    battleSlugs,
    sources,
    diagram,
    questions: [{ prompt, choices, answer, explanation }],
    seminar,
  };
}

export const additionalCourses: Course[] = [
  {
    slug: "classical-warfare",
    title: "Classical Warfare",
    level: "Intermediate",
    description:
      "Read ancient armies through formations, institutions, siege narratives and the limits of surviving evidence.",
    lessons: [
      unit(
        "infantry-formations",
        "Ancient infantry formations",
        [
          "Explain why cohesion mattered to hoplite fighting.",
          "Separate a useful formation model from an exact reconstruction.",
        ],
        [
          "Greek hoplites fought in close formations supported by other troops. Equipment and service reflected social resources: maintaining a horse required wealth, while naval service drew on different groups. The phalanx belongs to that social history as well as the history of weapons.",
          "At Marathon, Herodotus describes a weaker Greek center and stronger wings. His narrative helps explain the relationship between cohesion and the battle's course; it does not supply surveyed coordinates or a complete account of every unit.",
          "Compare the literary account with material evidence. Armor can reveal protection and weight, but an object alone cannot establish how a whole formation moved. Draw a relationship diagram, then label the claims it cannot prove.",
        ],
        ["marathon"],
        [greek],
        ["Social resources", "Equipment", "Cohesion", "Evidence limits"],
        "What does a formation diagram establish by itself?",
        [
          "Exact troop coordinates",
          "A model of relationships requiring evidence",
          "A commander's private intentions",
        ],
        1,
        "A diagram explains a model. Historical claims about deployment still need independent evidence.",
        {
          prompt:
            "How would your account change if the only surviving evidence were armor and pottery?",
          guidance:
            "Separate evidence for equipment from evidence for timing, formation depth and decisions. Explain what must remain uncertain.",
        },
      ),
      unit(
        "cavalry-and-combined-forces",
        "Cavalry and combined forces",
        [
          "Relate cavalry action to infantry rather than treating arms separately.",
          "Identify the limits of transferring one battle's explanation to another.",
        ],
        [
          "Ancient armies combined troops whose mobility, equipment and social origins differed. The presence of cavalry did not guarantee coordinated action: terrain, communication and the enemy's response could prevent cooperation.",
          "The Cannae study follows Roman infantry pressing Hannibal's center while cavalry and African infantry changed the fight around it. The explanation depends on the sequence and interaction of those actions, not an isolated claim that one arm was universally superior.",
          "Use the replay to compare the center and the wings. Its arrows are editorial explanations of the surviving narrative. They cannot tell us each rider's route or prove that every stage unfolded exactly as planned.",
        ],
        ["cannae"],
        [greek],
        [
          "Different arms",
          "Coordination",
          "Enemy response",
          "Uncertain sequence",
        ],
        "Which explanation best fits combined action at Cannae?",
        [
          "Cavalry alone explains the war's outcome",
          "Every action followed a perfectly known timetable",
          "Infantry and cavalry actions interacted",
        ],
        2,
        "The historical explanation connects actions across the battlefield while allowing uncertainty about coordination.",
        {
          prompt: "Is an encirclement proof of an entirely predetermined plan?",
          guidance:
            "Distinguish intention, adaptation and hindsight. Use the source narratives to support the sequence while qualifying claims about foreknowledge.",
        },
      ),
      unit(
        "roman-organization",
        "Roman military organization",
        [
          "Distinguish Republican organization from the later imperial army.",
          "Explain why recruitment and citizenship belong in military history.",
        ],
        [
          "Polybius describes Republican recruitment, tribunes, age-based infantry categories, allied contingents and camp responsibilities. His account is a structured explanation from a particular period; it should not be projected onto every century of Roman history.",
          "The imperial army later supported long military careers and communities around forts. Letters and objects illuminate soldiers' families and daily lives. Service could create opportunities for citizenship, while occupation also exposed civilians to coercion and abuse.",
          "Compare Cannae with Alesia without assuming their armies were organizationally identical. Ask who supplied soldiers, who had authority and how that authority was maintained. Institutions explain endurance and mobilization beyond an individual commander's reputation.",
        ],
        ["cannae", "alesia"],
        [polybius, legion],
        ["Recruitment", "Command", "Camp & supply", "State power"],
        "Why distinguish Republican and imperial armies?",
        [
          "Recruitment and institutions changed over time",
          "Roman armies never used allies",
          "All Roman forces were identical",
        ],
        0,
        "Period-specific evidence avoids projecting later careers and institutions backward.",
        {
          prompt:
            "What might a soldier's letter reveal that a commander's narrative omits?",
          guidance:
            "Consider family, pay, supplies and daily coercion. Neither source is automatically representative of everyone.",
        },
      ),
      unit(
        "siege-warfare",
        "Historical siege warfare",
        [
          "Explain the competing demands of blockade and relief.",
          "Evaluate a victorious commander's account critically.",
        ],
        [
          "A siege creates pressures on people inside a defended place, on the besieging army and on any relief force. Food, labor, engineering and time matter alongside assaults. The experiences of civilians must not disappear behind the language of military achievement.",
          "At Alesia, Caesar describes Roman works facing the enclosed settlement and the approaching relief force. The Romans therefore confronted threats from two directions. The schematic distinguishes those relationships without pretending to reproduce the surveyed earthworks.",
          "Caesar was both a participant and an advocate for his own reputation. Read his description for useful detail, then ask what his political position encourages him to emphasize or omit. Treat reported enemy totals and explanations of enemy motives cautiously.",
        ],
        ["alesia"],
        [],
        ["Enclosure", "Sustainment", "Relief attempt", "Human consequences"],
        "Why did the relief force complicate Caesar's position?",
        [
          "It removed the need for supplies",
          "Roman forces faced pressure from inside and outside",
          "It made civilian suffering irrelevant",
        ],
        1,
        "The double-front problem linked fortification, reserves and supply; victory did not remove its human costs.",
        {
          prompt: "How can a partisan account still be historically useful?",
          guidance:
            "Assess specific claims, corroboration and incentives. Bias is a reason for critical reading, not automatic acceptance or rejection of every detail.",
        },
      ),
      unit(
        "classical-case-studies",
        "Comparing classical battles",
        [
          "Compare Marathon, Cannae and Alesia without collapsing their differences.",
          "Build an explanation that separates outcome from consequence.",
        ],
        [
          "Marathon, Cannae and Alesia concern different political struggles and different kinds of engagement. A field battle against an expedition, a destructive army defeat and an extended siege cannot be evaluated through a single measure of command quality.",
          "Compare each commander's immediate purpose with what followed. Rome continued the war after Cannae; Alesia strengthened Roman domination in Gaul. Battlefield success and a durable political settlement are related questions, not interchangeable outcomes.",
          "Write a short comparison using one claim about geography, one about institutions and one about evidence for each case. State which parts are documented and which are your interpretation. A responsible comparison should make its limits visible.",
        ],
        ["marathon", "cannae", "alesia"],
        [],
        ["Context", "Evidence", "Comparison", "Qualified conclusion"],
        "What makes a historical comparison defensible?",
        [
          "Ranking generals without context",
          "Assuming all victories end wars",
          "Comparing explicit questions and evidence limits",
        ],
        2,
        "A shared question is useful only when differences in purpose, sources and circumstances remain visible.",
        {
          prompt:
            "Which case most challenges the claim that tactical victory decides a war?",
          guidance:
            "Cannae provides a strong example, but explain continued Roman mobilization rather than treating survival as inevitable.",
        },
      ),
    ],
  },
  {
    slug: "industrial-world-wars",
    title: "Industrial and World Wars",
    level: "Advanced",
    description:
      "Examine technology, coalition command and industrial resources through evidence-based comparisons of the world wars.",
    lessons: [
      unit(
        "military-technology",
        "Changes in military technology",
        [
          "Distinguish invention from effective institutional adoption.",
          "Explain why equipment alone does not establish causation.",
        ],
        [
          "On the Western Front, artillery, machine guns, aircraft and tanks altered the conditions of fighting. Aircraft initially contributed reconnaissance and artillery observation; their roles expanded as equipment and organization changed.",
          "A new weapon could create new possibilities without removing uncertainty. Early tanks suffered breakdowns and difficult ground. Their significance depended on training, maintenance and cooperation with other forces, rather than their mere presence.",
          "Compare this with Midway: aircraft mattered through scouting, contact reports and decisions made with incomplete information. When explaining technological change, identify the institution that used the equipment and the problem it was trying to solve.",
        ],
        ["midway"],
        [weapons],
        [
          "Invention",
          "Training & maintenance",
          "Integration",
          "Historical effects",
        ],
        "Which claim avoids technological determinism?",
        [
          "The newest equipment always wins",
          "Equipment works through organization and circumstances",
          "Technology never affects warfare",
        ],
        1,
        "Technology changes possibilities, but institutions and conditions shape its effects.",
        {
          prompt:
            "What evidence would distinguish a technical failure from an organizational one?",
          guidance:
            "Compare maintenance records, orders, training and circumstances. Several causes may operate together.",
        },
      ),
      unit(
        "command-coordination",
        "Command coordination",
        [
          "Distinguish coalition agreement from operational execution.",
          "Identify evidence needed to explain a coordinated operation.",
        ],
        [
          "Planning the Normandy invasion required staffs and commanders to coordinate across national and service boundaries. Eisenhower's headquarters at Bushy Park formed part of that preparation. Shared purpose had to become workable arrangements for movement, communication and support.",
          "Compare this command problem with the separate coalition armies at Waterloo. Both required cooperation, but the scale, communications and available institutions differed. Similar vocabulary should not erase those differences.",
          "A critical analysis follows an order through its interpretation and execution. A successful result does not prove every command relationship worked smoothly. Identify uncertainty, contingency and the contributions of subordinate organizations.",
        ],
        ["waterloo"],
        [planning],
        ["Shared purpose", "Staff planning", "Execution", "Adaptation"],
        "What should a study of coordination trace?",
        [
          "Orders and their execution under real constraints",
          "Only the senior commander's biography",
          "An assumption that plans were followed exactly",
        ],
        0,
        "Coordination becomes visible when plans are compared with what organizations could actually do.",
        {
          prompt:
            "What makes a Waterloo–Normandy comparison useful and what makes it misleading?",
          guidance:
            "Compare coalition responsibilities, then distinguish communications, scale and command institutions. Do not treat analogy as proof.",
        },
      ),
      unit(
        "trench-warfare",
        "Trench warfare",
        [
          "Explain the relationship between protection, firepower and stalemate.",
          "Include soldiers' living conditions in operational history.",
        ],
        [
          "After the early campaigns of 1914, trench systems became central to the Western Front. They offered protection against lethal fire but created severe problems for attackers trying to cross defended ground.",
          "Mud, water, disease and exposure affected daily life. A trench should therefore be understood as a precarious living environment as well as a defensive position. Accounts of endurance require attention to ordinary soldiers and the resources needed to sustain them.",
          "Compare prolonged fighting with the urban struggle at Stalingrad without calling them identical. In both, protection and reinforcement mattered; their geography, technology and strategic setting differed. Ask how a local success could be supplied and maintained afterward.",
        ],
        ["stalingrad"],
        [trenches],
        ["Protection", "Obstacles", "Sustainment", "Human endurance"],
        "Why is a captured position not sufficient evidence of lasting success?",
        [
          "Ground never matters",
          "All defenders surrender immediately",
          "It must also be held, reinforced and supplied",
        ],
        2,
        "Local advances have consequences only within the wider struggle to sustain forces.",
        {
          prompt:
            "How can an account avoid reducing trench warfare to either futility or technical progress?",
          guidance:
            "Connect operational aims and adaptation with evidence of suffering and the limits of success.",
        },
      ),
      unit(
        "mechanized-warfare",
        "Historical mechanized warfare",
        [
          "Explain the historical problem early tanks were intended to address.",
          "Separate a breakthrough from its exploitation.",
        ],
        [
          "The Canadian War Museum describes tanks emerging as one response to wire, trenches and defensive fire. Combining armor with tracked movement offered a way to cross obstacles that had stopped infantry attacks.",
          "Mechanization introduced dependencies as well as possibilities. Fuel, spare parts, recovery and trained crews all mattered. Breaching a defended area did not automatically deliver a durable advance: support still had to move and the defender could respond.",
          "Use Stalingrad's wider campaign to examine the distance between operational movement and sustainable success. Avoid a single-machine explanation. A historical account should connect mobility with geography, available supplies and the other forces involved.",
        ],
        ["stalingrad"],
        [tanks],
        ["Mobility", "Maintenance", "Supporting forces", "Sustainment"],
        "What distinguishes exploitation from an initial breach?",
        [
          "Turning an opening into a sustainable wider advance",
          "Counting vehicles alone",
          "Ignoring the defender's reaction",
        ],
        0,
        "A breach creates an opportunity whose use depends on support, movement and an opponent's response.",
        {
          prompt: "Why can greater mobility increase logistical demands?",
          guidance:
            "Consider fuel, repair and distance. Avoid deriving numerical consumption from a schematic or assuming all armies faced identical conditions.",
        },
      ),
      unit(
        "air-and-naval-operations",
        "Air and naval operations",
        [
          "Relate reconnaissance and air power to maritime operations.",
          "Compare a fleet engagement with a prolonged shipping campaign.",
        ],
        [
          "Midway was shaped by searches, incomplete reports and carrier aircraft. The battle's changing picture shows why knowing an enemy's broad intention differs from locating a moving force at a useful moment.",
          "The Atlantic struggle concerned the continued movement of supplies as well as the destruction of warships. Allied navies had to protect shipping against submarines and aircraft across great distances. Its duration and purpose differed from a concentrated fleet engagement.",
          "Compare evidence appropriate to each question: contact reports and strike sequences for a battle; shipping, losses and deliveries over time for a campaign. One dramatic event cannot by itself describe the entire maritime war.",
        ],
        ["midway"],
        [atlantic],
        ["Search", "Contact reports", "Decisions", "Maritime supply"],
        "Which distinction matters when comparing Midway and the Atlantic?",
        [
          "Both can be explained by one day's ship losses",
          "A fleet engagement and a supply campaign require different measures",
          "Reconnaissance has no connection to decisions",
        ],
        1,
        "Their purposes and timescales differ, so a comparison must select evidence accordingly.",
        {
          prompt:
            "What does an accurate intelligence assessment still leave uncertain?",
          guidance:
            "Discuss timeliness, location, interpretation and delivery to decision-makers. Avoid treating intelligence as perfect knowledge.",
        },
      ),
      unit(
        "strategic-resources",
        "Strategic resources and civilian costs",
        [
          "Distinguish production totals from resources delivered and used.",
          "Evaluate a multi-cause explanation of industrial war.",
        ],
        [
          "Britain depended on imported food and materials, while the Soviet Union sought equipment and supplies after the German invasion. Atlantic shipping also supported Allied operations in North Africa, Italy and western Europe. Production and transport were inseparable parts of the war effort.",
          "Industry relied on human labor and political choices. Civilian suffering, occupation and coercion cannot be treated as incidental to a military balance sheet. Assess what a resource statistic measures, whose work it conceals and whether the material reached its destination.",
          "Build a concluding argument connecting resources with command, geography and uncertainty. Stalingrad and Midway provide different cases for testing that argument. State what the evidence supports, what remains disputed and what would weaken your interpretation.",
        ],
        ["stalingrad", "midway"],
        [atlantic],
        ["Production", "Transport", "Delivery", "Human consequences"],
        "Which measure best connects resources with an actual campaign?",
        [
          "Factory output without transport information",
          "A commander's reputation",
          "Material delivered, maintained and available in context",
        ],
        2,
        "Production becomes useful capacity through transport, maintenance, people and organization.",
        {
          prompt:
            "Write a multi-cause explanation of one case, including a competing interpretation.",
          guidance:
            "Use at least two named sources, distinguish immediate and structural causes, and identify evidence that could challenge your conclusion.",
        },
      ),
    ],
  },
  {
    slug: "serbian-front",
    title: "The Serbian Front, 1914–1918",
    level: "Intermediate",
    description:
      "Follow a small army through invasion, retreat, exile and return, using the source-backed studies of the Serbian Front.",
    lessons: [
      unit(
        "waiting-for-the-blow",
        "Waiting for the main blow: Cer, 1914",
        [
          "Explain why the Serbian plan waited for the direction of the invasion.",
          "Analyse how the Second Army's move west turned a defensive plan into a counterattack.",
        ],
        [
          "In August 1914 the Serbian Supreme Command under Radomir Putnik expected the main Austro-Hungarian attack from the north, across the Sava and the Danube. Its plan was to stay on the defensive until the direction of the invasion was clear. When the Fifth Army crossed the Drina from Bosnia instead, the Serbian armies had to shift west.",
          "Stepa Stepanović's Second Army marched to support the Third Army and met the invaders on the Cer ridge on the night of 15–16 August. A flank attack nearly broke one of its divisions until reinforcements, and Stepanović himself, reached the front. By 20 August the Fifth Army was back across the Drina; Britannica and Tasić call Cer the first Allied victory of the war.",
          "Cer also shows the limits of a victory. Pressed by its allies, Serbia followed it with an offensive into Syrmia that was repulsed at Šašinci and broken off when a second invasion began on the Drina. Ammunition, equipment and allied expectations shaped what a small army could attempt after winning.",
        ],
        ["cer", "syrmia-1914"],
        [serbia1914, habsburgWar],
        [
          "Wait for the main blow",
          "Shift to the threatened flank",
          "Counterattack",
          "Limits of exploitation",
        ],
        "Why did the Serbian armies have to redeploy in August 1914?",
        [
          "The invasion came from Bosnia rather than from the north",
          "Montenegro withdrew its troops from the joint plan",
          "Russia asked Serbia to attack Hungary at once",
        ],
        0,
        "Putnik had expected the main attack from the north; the Fifth Army crossed the Drina from Bosnia instead.",
        {
          prompt:
            "How much of the outcome at Cer came from the Serbian plan, and how much from Austro-Hungarian decisions?",
          guidance:
            "Compare the Serbian redeployment with Potiorek's choice to invade after the Second Army was sent to Russia. Treat Rauchensteiner's judgment of Potiorek's motives as an interpretation to test against the narrative.",
        },
      ),
      unit(
        "ground-for-time",
        "Giving up ground: the Kolubara, 1914",
        [
          "Explain why the Serbian command shortened its front and abandoned Belgrade.",
          "Identify the conditions that made the December counteroffensive possible.",
        ],
        [
          "After weeks of entrenched fighting on the Drina, the Serbian army was short of artillery ammunition. When the third Austro-Hungarian offensive began on 6 November, it fell back toward Ub and Valjevo, and on 20 November the Sixth Army drove the First Army back to Mount Suvobor.",
          "The Supreme Command chose to shorten its over-extended front and give up Belgrade. The Austro-Hungarian armies regrouped, sending the Fifth Army into the capital. On 3 December all three Serbian armies attacked; Živojin Mišić's First Army broke through from Suvobor and took Valjevo on 8 December, and the Serbs re-entered Belgrade on 15 December.",
          "Trading ground for time can turn defeat into victory only if the army survives the withdrawal and the enemy over-extends. The cost came afterwards: in early 1915 an epidemic killed many soldiers, civilians and prisoners, and the army was exhausted.",
        ],
        ["drina-1914", "kolubara"],
        [serbia1914, serbiaArticle],
        [
          "Exhaustion",
          "Shortened front",
          "Enemy over-extends",
          "Counteroffensive",
        ],
        "What did the Serbian command give up to shorten its front in November 1914?",
        ["Valjevo", "Belgrade", "Niš"],
        1,
        "The Supreme Command abandoned Belgrade and moved its defenders to Mount Kosmaj before counterattacking on 3 December.",
        {
          prompt:
            "Was abandoning the capital a military decision, a political risk, or both?",
          guidance:
            "Consider how the withdrawal changed the Austro-Hungarian dispositions, and note that the museum catalogue's verdict on the counteroffensive reflects a national narrative.",
        },
      ),
      unit(
        "invaded-from-two-sides",
        "Invaded from two sides: the choice of 1915",
        [
          "Explain how the Bulgarian attack changed the Serbian army's options.",
          "Weigh the alternatives the Supreme Command faced in November 1915.",
        ],
        [
          "In October 1915 Mackensen's German and Austro-Hungarian armies crossed the Danube and the Sava while Bulgaria attacked from the east. His chief of staff, Hans von Seeckt, organised heavy artillery, aircraft and bridging; Showalter calls the campaign an overlooked proto-blitzkrieg. Belgrade fell on 9 October.",
          "The Serbian armies slowed the northern advance, but the Bulgarian capture of Skopje on 22 October cut the road to the Allies at Salonika. The army withdrew into Kosovo, followed by refugees. On 25 November the Supreme Command judged it unfit for a counteroffensive and capitulation worse, and ordered a retreat through Montenegro and Albania.",
          "The winter retreat killed thousands of soldiers, civilians and prisoners, but the Montenegrin stand at Mojkovac and the Allied evacuation from the coast saved the army as a fighting force. The choice between losing the country and losing the army is a recurring dilemma of coalition war.",
        ],
        ["invasion-of-serbia-1915", "serbian-retreat-1915", "mojkovac"],
        [serbiaArticle, southEastWarfare, seeckt],
        [
          "Attack from the north",
          "Attack from the east",
          "Escape route cut",
          "Retreat to fight on",
        ],
        "Which event cut the Serbian army off from the Allies at Salonika?",
        [
          "The fall of Belgrade",
          "The fall of Niš",
          "The Bulgarian capture of Skopje",
        ],
        2,
        "Skopje fell to the Bulgarian Second Army on 22 October, closing the Vardar route south.",
        {
          prompt:
            "Could the Serbian army have done anything other than retreat in November 1915?",
          guidance:
            "Use Bjelajac's account of the Supreme Command's reasoning and Hall's brief mention of a stand on the old Kosovo battlefield. Distinguish documented reasoning from reconstruction.",
        },
      ),
      unit(
        "exile-and-occupation",
        "Exile and occupation, 1916–1917",
        [
          "Describe how the Serbian army was rebuilt after the retreat.",
          "Explain why the Toplica Uprising broke out and how it was suppressed.",
        ],
        [
          "A French-led mission evacuated the survivors from the Albanian coast to Corfu, Bizerte and Italy. On Corfu the army recovered and the Serbian state kept functioning; in 1916 the rebuilt army was shipped to the Salonika front and given the centre of the Allied line.",
          "In August 1916 a Bulgarian offensive struck south of Monastir. The Serbian army halted it and from 12 September fought for the summit of Kajmakčalan, which the First Army took on 30 September. In November the Allies entered Monastir (Bitola), the first Serbian town to be liberated.",
          "Behind the lines Serbia was divided between Austro-Hungarian and Bulgarian occupation. Bulgarian conscription and denationalisation drove men into the woods, and in February 1917 an uprising broke out in Toplica, before the Allied breakthrough its organisers had been told to wait for. It was crushed within weeks, with reprisals against civilians.",
        ],
        [
          "serbian-retreat-1915",
          "kajmakcalan",
          "monastir-1916",
          "toplica-uprising",
        ],
        [serbiaArticle, southEastWarfare, occupation],
        [
          "Evacuation",
          "Rebuilding in exile",
          "Return to the front",
          "Resistance under occupation",
        ],
        "Why did the Toplica Uprising come too early for the Serbian command's plan?",
        [
          "It broke out before the Allied breakthrough it was meant to support",
          "It began only after the war had ended",
          "It was ordered by the Allied command at Salonika",
        ],
        0,
        "Kosta Pećanac had been sent to prepare a rising for the moment of an Allied breakthrough; local leaders insisted on acting at once.",
        {
          prompt:
            "How should a history weigh a rising that failed militarily but cost many civilian lives?",
          guidance:
            "Compare Tasić's and Ristović's accounts with the testimonies gathered by the Historical Archives of Niš, and note that no Bulgarian-perspective source was read for these studies.",
        },
      ),
      unit(
        "breaking-the-front",
        "Breaking a mountain front: Dobro Pole, 1918",
        [
          "Explain why a narrow mountain sector was chosen for the 1918 breakthrough.",
          "Trace how the collapse of one front spread through the Central Powers' alliance.",
        ],
        [
          "By 1918 the Bulgarian army was hungry, poorly clothed and losing morale; a Greek and French attack on Skra di Legen in June showed it. Hall notes that the idea of attacking at Dobro Pole came from a Serbian staff officer in 1916, because flatter ground behind the ridge led to the Vardar valley.",
          "Under Franchet d'Espèrey, six Serbian and two French divisions attacked a front held by one Bulgarian division on 15 September, after a night bombardment. A British and Greek attack at Lake Doiran pinned Bulgarian reserves. Within a week the front west of the Vardar collapsed, and Bulgaria signed an armistice on 29 September.",
          "The pursuit kept moving. The Serbian First Army and French cavalry reached Niš in October and Belgrade by 1 November, before German and Austro-Hungarian commanders could form a new front. Hall argues that hunger, poor equipment and strained alliances were as decisive as the attack itself.",
        ],
        ["dobro-pole", "liberation-of-serbia-1918"],
        [balkanWar, balkanFront1918, serbiaArticle],
        [
          "Weak point",
          "Concentrated assault",
          "Pinning attack",
          "Relentless pursuit",
        ],
        "What role did the attack at Lake Doiran play in September 1918?",
        [
          "It was the main breakthrough",
          "It pinned Bulgarian reserves away from Dobro Pole",
          "It brought Romania back into the war",
        ],
        1,
        "The British and Greek attack failed locally but kept Bulgarian troops from moving west against the breach.",
        {
          prompt:
            "Was Dobro Pole won by the attack or by the state of the Bulgarian army?",
          guidance:
            "Weigh Hall's emphasis on hunger, morale and alliance strains against Serbian commemorations that present the breakthrough above all as a Serbian victory.",
        },
      ),
    ],
  },
];
