import type { Course, Source } from "../lib/types";
import { unit } from "./additional-courses";

// Readings reuse the exact sources of the linked studies, already read and audited.
const livGranicus: Source = {
  title: "Granicus (334 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/granicus/",
};
const livIssus: Source = {
  title: "Issus (333 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/issus/",
};
const livTyre: Source = {
  title:
    "The siege of Tyre (332 BCE), with Curtius Rufus 4.4.10–21 (trans. J. Yardley)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/tyre-332-bce/",
};
const livLevant: Source = {
  title: "Alexander 2.7",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/person/alexander-the-great/alexander-2.7/",
};
const livGaugamela: Source = {
  title: "Gaugamela (331 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/gaugamela-331-bce/",
};
const diaries: Source = {
  title: "Astronomical Diaries",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/concept/astronomical-diaries/",
};
const livPersianGate: Source = {
  title: "Persian Gate (330 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/persian-gate-330-bce/",
};
const livSogdiana: Source = {
  title: "Alexander 2.12",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/person/alexander-the-great/alexander-2.12/",
};
const livHydaspes: Source = {
  title: "Hydaspes (326 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/hydaspes/",
};
const livPorus: Source = {
  title: "Porus",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/person/porus/",
};
const arrianHydaspes: Source = {
  title: "Arrian, Anabasis of Alexander 5.9–19 (trans. E. J. Chinnock)",
  publisher: "Wikisource",
  url: "https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_V/Chapter_IX",
};

export const collectionCourses: Course[] = [
  {
    slug: "alexanders-campaigns",
    title: "Alexander's Campaigns, 334–325 BCE",
    level: "Intermediate",
    description:
      "Follow Alexander's army from the Granicus to the Hydaspes through pitched battles, sieges, mountain warfare and a river crossing, and test what the ancient narratives can support.",
    lessons: [
      unit(
        "granicus-and-issus",
        "Combined arms at the Granicus and Issus",
        [
          "Explain how the arms of an ancient army had to support each other in defence and attack.",
          "Separate what the sources agree on from the sequence they dispute.",
        ],
        [
          "No royal army met the invasion in 334 BCE. At the Granicus the satraps, who according to Diodorus had rejected Memnon's advice to avoid battle, lined the bank with cavalry and kept their Greek mercenary infantry behind on higher ground. Alexander led the Companions on the right, Parmenion the left, and the phalanx held the centre. The study's conclusion is that cavalry posted on a bank to stop a crossing could not be supported by infantry held far behind it.",
          "At Issus in 333 Darius left the open plain for the narrow coast between the Amanus and the sea and came down behind Alexander. On the Pinarus Alexander moved the Thessalians to his left unseen and cleared the foothills on his right with Agrianians and archers. His charge broke the Persian left while Darius's mercenaries attacked a gap in the disordered phalanx; the victorious right then wheeled against their flank.",
          "The outline of both battles is secure, but not the sequence. Arrian and Plutarch describe a direct assault at the Granicus late in the day; Diodorus a crossing at dawn, which Livius prefers. Polybius showed that Callisthenes's figures for Issus could not fit the ground. Diagrams of combined action are reconstructions from narratives that disagree.",
        ],
        ["granicus", "issus"],
        [livGranicus, livIssus],
        [
          "Choose the ground",
          "Arms in support",
          "Charge at the key point",
          "Turn on the flank",
        ],
        "What weakness does the study see in the Persian position at the Granicus?",
        [
          "Cavalry on the bank could not be supported by infantry held far behind it",
          "The Persians had brought no cavalry",
          "The river was too deep for either army to cross",
        ],
        0,
        "The satraps put their cavalry on the bank and their mercenary infantry on higher ground behind, so the two arms could not fight together.",
        {
          prompt:
            "Which version of the Granicus would you teach, and what changes if Diodorus is right?",
          guidance:
            "Compare Arrian's late-day assault with Diodorus's dawn crossing, and weigh Livius's argument from the steep banks and the Persian order of battle. Say which details survive in both versions.",
        },
      ),
      unit(
        "tyre-and-gaza",
        "Taking the coast: Tyre and Gaza",
        [
          "Explain why the Phoenician ports mattered to a war against a fleet.",
          "Weigh strategic, religious and personal motives for a siege.",
        ],
        [
          "After Issus Alexander did not pursue Darius but moved down the Levantine coast. The Persian fleet still controlled the Aegean, and its crews came largely from the Phoenician cities. Arrian gives Alexander a speech arguing that Egypt and Babylon could not safely be attempted while Persia held the sea. Livius regards the siege of Tyre as strategically unnecessary and its cause as religious: the city refused Alexander the right to sacrifice to its god Melqart.",
          "Tyre stood on an island. A mole was begun from the mainland, but a Tyrian fireship burned its towers, and Alexander accepted that the city could not be taken from the land alone. When Aradus, Byblos and Sidon submitted, their ships left the Persian fleet, and the kings of Cyprus followed. With both harbours blockaded, engines on ships broke the wall facing Egypt in July 332. A navy could be defeated from the land by taking its ports, yet an island fortress could not be taken without ships.",
          "At Gaza Alexander's engineers judged the wall impossible to storm; Arrian says he insisted because failure would discredit him. A mound, mining and a fourth assault took the city. Both sieges ended in killing and enslavement, and Curtius reports crucifixions at Tyre and the dragging of Gaza's governor Batis behind a chariot, which Arrian does not mention.",
        ],
        ["tyre", "gaza-332-bce"],
        [livTyre, livLevant],
        [
          "Fleet bases",
          "Engineering",
          "Squadrons change sides",
          "Cost to the besieged",
        ],
        "What gave Alexander command of the sea at Tyre?",
        [
          "A new fleet built in Macedonia",
          "A victory over the Persian fleet in the Aegean",
          "Phoenician and Cypriot squadrons that changed sides",
        ],
        2,
        "The ships of Aradus, Byblos and Sidon left the Persian fleet when their cities submitted, and the kings of Cyprus followed.",
        {
          prompt:
            "Was the siege of Tyre a strategic necessity, or a matter of religion and prestige?",
          guidance:
            "Treat the speech Arrian gives Alexander as Arrian's argument rather than a record, and set it against Livius's reading of the refused sacrifice. Gaza, where Arrian names reputation openly, is a useful comparison.",
        },
      ),
      unit(
        "gaugamela",
        "Gaugamela: fighting on the enemy's chosen ground",
        [
          "Explain how Alexander prepared to fight on ground chosen and prepared by his enemy.",
          "Distinguish an opportunity that arose in battle from a fixed plan.",
        ],
        [
          "Darius had been persuaded that the narrow field at Issus had cost him, and in 331 BCE he sought open ground where his numbers, cavalry and scythed chariots could be used. Arrian reports that the Persians had levelled the plain near Gaugamela, north-west of Arbela. Alexander needed to defeat the king's army in the field to make good his claim to rule Asia.",
          "Alexander placed a second line behind the first, with orders to face about if the army were surrounded, and set angled flank guards on both wings. He rejected Parmenion's advice to attack at night, while Darius kept his army under arms through the night. On 1 October Alexander edged to the right, Persian cavalry rode around his flank and the chariots were neutralized. As Persian cavalry was drawn into that fight a gap opened, and Alexander drove a wedge toward Darius.",
          "Darius fled and his army dispersed; Alexander turned back to help Parmenion's hard-pressed wing before pursuing to Arbela. Dust hid much of the fighting. Arrian says Darius fled first, but a contemporary Babylonian astronomical diary says his troops deserted him, and Livius prefers the diary, which also dates the eclipse and the battle independently.",
        ],
        ["gaugamela"],
        [livGaugamela, diaries],
        [
          "Prepared ground",
          "Second line",
          "Drift to the right",
          "Gap in the centre",
        ],
        "Where did the gap that Alexander charged into come from, according to the study?",
        [
          "Darius left it open to lure Alexander in",
          "Persian cavalry was drawn into the fight on Alexander's right",
          "A night attack had disordered the Persian line",
        ],
        1,
        "The opportunity arose from the Persians' own outflanking effort rather than from a fixed plan.",
        {
          prompt:
            "Whose account of Darius's flight should a history follow, Arrian's or the Babylonian diary's?",
          guidance:
            "Consider Livius's warning that Greek accounts may carry Macedonian propaganda, and what a contemporary Babylonian record could and could not know about the battlefield.",
        },
      ),
      unit(
        "mountains-and-steppe",
        "Mountains and steppe: Persian Gate, Jaxartes, Sogdian Rock",
        [
          "Explain how Alexander's army adapted to a defended pass, mounted archers and a mountain fortress.",
          "Relate tactical success to the war of repression in Sogdiana.",
        ],
        [
          "In the winter of 331/330 BCE Alexander took his infantry, the Companions and the light troops through the Zagros toward Persepolis, while Parmenion followed the Royal Road. At the Persian Gate, in about January 330, the army entered the valley apparently without effective reconnaissance and was caught where it narrowed. Alexander then left Craterus at the camp, with orders to attack the wall when trumpets sounded behind it, and marched by night along another route to the Persian rear. A frontal attack on the defile had been costly; turning it was decisive.",
          "On the Jaxartes in 329 the enemy were nomad horse archers on open ground that, Livius notes, suited neither the phalanx nor the Companions. Engines drove the riders from the bank and archers and slingers screened the landing. A forward detachment was surrounded; Alexander then mixed light infantry with his cavalry so that the horsemen could not wheel away. Livius's reading of that detachment as bait is a modern reconstruction.",
          "Neither victory ended the war. Spitamenes destroyed a relief force at the Polytimetus, and the fighting went on into 327, with forts stormed, their men killed and women sold. At the Sogdian Rock volunteers climbed the steepest face by night, some falling to their deaths, and the defenders surrendered. Alexander married Roxane, daughter of Oxyartes, which Livius reads as a political necessity; by the end, he says, the population had been reduced to serfdom under strong garrisons.",
        ],
        ["persian-gate", "jaxartes", "sogdian-rock"],
        [livPersianGate, livSogdiana],
        [
          "Ambush in the defile",
          "Turning march",
          "Mixed arms against mobility",
          "Coercion and settlement",
        ],
        "Why did the victory on the Jaxartes not end the war in Sogdiana?",
        [
          "A tactical victory over the nomads could not settle the revolt behind the lines",
          "Alexander was defeated on the river",
          "The nomads went on to invade Macedonia",
        ],
        0,
        "While Alexander fought the nomads, Spitamenes besieged Maracanda and then destroyed the relief force; the revolt lasted into 327 BCE.",
        {
          prompt:
            "Should a history of these years read as a series of clever solutions, or as a war of repression?",
          guidance:
            "Set the turning march, the Jaxartes and the climb against Livius's account of forts stormed, populations resettled and countryside ravaged. Remember his warning that Arrian's narrative of these years is fragmented.",
        },
      ),
      unit(
        "hydaspes-and-limits",
        "The Hydaspes and the limits of conquest",
        [
          "Explain how deception and precise orders made an opposed river crossing possible.",
          "Read Arrian's narrative critically, with attention to his own authorities.",
        ],
        [
          "In 326 BCE Porus held the far bank of the Hydaspes, swollen by monsoon rain and meltwater, where his elephants would make horses unwilling to land. Arrian says Alexander openly gathered grain to suggest he would wait for the river to fall, and night after night his cavalry made noise along the bank as if to cross, until Porus stopped moving his elephants to meet them. In a stormy night a picked force crossed upstream, landed on what proved to be an island and forded a deep channel to the far bank.",
          "Alexander had divided his army. Craterus was to cross only if Porus took all his elephants against Alexander or was beaten. On the field Alexander declined to attack the elephant line and sent Coenus toward the Indian right; when the Indian cavalry turned to meet Coenus, Alexander charged it while it was turning. The phalanx fought the elephants, which, hemmed in and wounded, trampled both sides. Alexander restored the captured Porus to his kingdom and added territory.",
          "Soon afterwards the army refused to advance beyond the Hyphasis, and Alexander turned back. Arrian names his authorities, Ptolemy and Aristobulus, reports three versions of the force under Porus's son and prefers Ptolemy's; how far a companion's account shapes the story is uncertain. Livius calls the battle in fact a skirmish fought with part of Alexander's army, and calls Porus the long-term winner.",
        ],
        ["hydaspes"],
        [livHydaspes, livPorus, arrianHydaspes],
        [
          "Repeated feints",
          "Hidden crossing",
          "Precise orders",
          "Limits of the advance",
        ],
        "What did the repeated night-time feints achieve, according to Arrian?",
        [
          "They drew Porus into crossing the river to attack",
          "They forced Porus to abandon the bank",
          "Porus stopped moving his elephants to meet them",
        ],
        2,
        "Repeated feints conditioned Porus to ignore a real threat, so the crossing upstream was not opposed in force at the bank.",
        {
          prompt: "Who won the Hydaspes in the long run?",
          guidance:
            "Weigh Arrian's battle narrative, drawn from Ptolemy, against Livius's view of Porus, who kept his role as a client ruler on the eastern border until he was murdered in 317 BCE, and against the army's refusal at the Hyphasis.",
        },
      ),
    ],
  },
];
