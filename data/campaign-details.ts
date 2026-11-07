import type { CampaignDetails, Source } from "../lib/types";

// Campaign narratives, keyed by campaign slug. Only sources that were opened
// and read for the narrative are cited; see docs/SOURCE_AUDIT.md.

const livius = "Livius.org (Jona Lendering)";
const lendering = (part: string, title: string): Source => ({
  title: `Alexander ${part}: ${title}`,
  url: `https://www.livius.org/articles/person/alexander-the-great/alexander-${part}/`,
  publisher: livius,
});
const arrian = (book: string, chapter: string, label: string): Source => ({
  title: `Arrian, Anabasis of Alexander ${label} (trans. E. J. Chinnock)`,
  url: `https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_${book}/Chapter_${chapter}`,
  publisher: "Wikisource",
});
const briant: Source = {
  title: "Alexander the Great — Pierre Briant",
  url: "https://www.iranicaonline.org/articles/alexander-the-great-356-23-bc/",
  publisher: "Encyclopaedia Iranica",
};

export const campaignDetails: Record<string, CampaignDetails> = {
  "macedonian-invasion-of-persia": {
    summary:
      "Alexander’s war against Darius III from the crossing into Asia in 334 BCE to Darius’s death in 330: three pitched battles, a long contest for the coast and the surrender of the Achaemenid capitals.",
    narrative: [
      {
        title: "Into Asia Minor",
        text: "The main Macedonian army crossed the Hellespont in 334 BCE, where a force sent in 336 still held Abydos. Briant notes that Darius had not yet fully mobilized the royal army. The satraps of western Asia Minor chose to fight at the Granicus, against Memnon of Rhodes’s advice to lay waste the country, and were beaten. Sardis surrendered. At Miletus, Alexander’s admiral Nicanor seized the island of Lade with 160 ships before the Persian fleet arrived, so the fleet could not relieve the city, and it fell to the siege engines. In the Greek cities Alexander set up democracies, but he also appointed Macedonian satraps and levied “contributions”, which Lendering reads as tribute.",
        evidence: "fact",
        studies: ["granicus"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "A war for the coast",
        text: "Arrian says Alexander disbanded his fleet, partly for lack of money and partly because it was no match for the Persian one, reasoning that if he took the coastal cities the Persian navy would have nowhere to recruit crews or land. Briant calls this the strategy planned at Miletus in the summer of 334: to capture the whole Aegean front of the empire. Darius made Memnon supreme commander in the west. Memnon held Halicarnassus, whose new walls were exceptionally strong, and withdrew the garrison by sea when he chose; Lendering counts it a costly siege that the ancient sources call a victory. While the army moved through Lycia, Pamphylia and Phrygia to meet Parmenion at Gordion in April 333, Memnon took the war into the Aegean and threatened the Hellespont. Alexander ordered Antipater to raise a new fleet. Memnon died in August 333, and Pharnabazus continued his offensive.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 9, locator: "1.20" },
          { source: 0 },
          { source: 2 },
          { source: 3 },
        ],
      },
      {
        title: "Darius takes the field",
        text: "In late July 333 the army followed the Royal Road through Cappadocia and turned south. A night attack carried the poorly defended Cilician Gate, and Tarsus was Alexander’s base from August to October. Darius left Babylon in July with the royal army, crossed the Amanus mountains and took Issus, behind the Macedonians, cutting their supply line. Alexander turned back and defeated him in November 333. Darius’s mother, wife and children were captured, and Parmenion seized the royal treasure at Damascus. Briant notes that Darius’s first offers conceded wide powers but no legal sovereignty over territory; Lendering records a later offer of everything west of the Euphrates. Alexander refused, and both authors read the refusals as a claim to rule the whole empire.",
        evidence: "fact",
        studies: ["issus"],
        refs: [{ source: 3 }, { source: 4 }, { source: 0 }],
      },
      {
        title: "The Levant and Egypt",
        text: "After Issus Alexander could march to the Euphrates or to the Nile. Briant says he chose the Nile, at the cost of giving Darius time to raise a new army, because it completed the capture of the Aegean front. The Phoenician cities surrendered and recalled their ships from the Persian fleet. Tyre refused to let Alexander sacrifice in the temple of Melqart and was besieged from January to July 332; when its fleet was destroyed, the Persian offensive in the Aegean came to an end. Gaza fell in the autumn. In December 332 Egypt surrendered at Pelusium without a fight. Alexander founded Alexandria, visited the oracle of Ammon at Siwa, and left in the spring of 331 when Samaria revolted.",
        evidence: "fact",
        studies: ["tyre", "gaza-332-bce"],
        refs: [{ source: 0 }, { source: 5 }, { source: 6 }, { source: 7 }],
      },
      {
        title: "Gaugamela and the capitals",
        text: "At the end of July 331 the army crossed the Euphrates at Thapsacus. Mazaeus, the satrap of Babylonia, stripped the country in front of it, and Alexander turned north rather than follow the river to Babylon. He crossed the Tigris on 18 September, and on 1 October he met Darius at Gaugamela, on ground the king had chosen and levelled for his chariots. Darius was defeated but escaped. Mazaeus surrendered Babylon, which Alexander entered in October; he made Mazaeus its satrap, the first of several Persians to hold high office under him. Susa and its treasure followed in December. Briant links the easy surrender of Babylon to the hostility of the Babylonian priesthood towards the last Achaemenid kings.",
        evidence: "fact",
        studies: ["gaugamela"],
        refs: [{ source: 7 }, { source: 0 }],
      },
      {
        title: "Persepolis and the death of Darius",
        text: "The road to Persepolis was harder. In mid-winter the Uxians and Ariobarzanes, the satrap of Persis, resisted; at the Persian Gate a frontal attack failed with heavy losses before the position was turned. Persepolis was entered in January 330 and looted, except for the palace, and Alexander stayed over four months. The palace was then burned: Ptolemy, through Arrian, calls it revenge for Athens, while Cleitarchus’s tradition blames a drunken party, and Lendering reads the archaeology as a planned fire. Alexander marched on Ecbatana, where Darius had wintered, but the king had gone. In July 330 Bessus, the satrap of Bactria, and his fellow conspirators arrested him; Arrian says Nabarzanes and Barsaentes wounded him and that he died before Alexander saw him.",
        evidence: "fact",
        studies: ["persian-gate"],
        refs: [{ source: 0 }, { source: 8 }, { source: 10, locator: "3.21" }],
      },
      {
        title: "Victories were not yet conquest",
        text: "Briant warns that overemphasizing the Granicus, Issus and Gaugamela underestimates the resistance organized by the Achaemenid authorities. Halicarnassus, Tyre and Gaza held out for long periods; Issus did not bring the empire’s structures down, and Persian counter-attacks struck Alexander’s rear in Anatolia in 332. After Gaugamela Darius was still alive and raising another army, and Lendering stresses that Alexander had failed to kill or capture him. On this reading the campaign was won as much by sieges, the surrender of satraps who expected to be reappointed and the collapse of the Persian fleet as by the three pitched battles.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 7 }],
      },
      {
        title: "Where the sources disagree",
        text: "Briant dates the Granicus to May 334 and Lendering to June. Briant says Tyre held out for seven months and Gaza for several weeks; Lendering gives Tyre from January to July and Gaza a four-month siege ending in October 332. The order and content of Darius’s peace offers are unclear. The motive for burning the palace at Persepolis is disputed, and Briant places the fire in the spring of 330 without a firmer date.",
        evidence: "uncertainty",
        studies: [],
        refs: [
          { source: 0 },
          { source: 1 },
          { source: 5 },
          { source: 4 },
          { source: 8 },
        ],
      },
    ],
    sources: [
      briant,
      lendering("2.3", "Asia Minor"),
      lendering("2.4", "Halicarnassus"),
      lendering("2.5", "Anatolia"),
      lendering("2.6", "Issus"),
      lendering("2.7", "The Levant"),
      lendering("2.8", "Egypt"),
      lendering("2.9", "Gaugamela"),
      lendering("2.10", "Persia"),
      arrian("I", "XX", "1.20"),
      arrian("III", "XXI", "3.21"),
    ],
  },
  "campaigns-in-bactria-and-sogdiana": {
    summary:
      "Three years of fighting in eastern Iran and Central Asia, 330–327 BCE: the pursuit of Bessus, the Sogdian revolt under Spitamenes and the garrisons and marriages that ended it.",
    narrative: [
      {
        title: "After Darius",
        text: "Darius’s death did not end the war. Bessus proclaimed himself king as Artaxerxes, which, Briant notes, let Alexander present himself as the avenger of Darius. The army invaded Hyrcania, and when Satibarzanes, the satrap of Areia and one of Darius’s killers, turned on a Macedonian detachment, Alexander took his capital and refounded it as an Alexandria. In Drangiana in October 330 Philotas, the commander of the Companion cavalry, was tried and executed for failing to report a plot, and his father Parmenion was killed at Ecbatana in December. Through Arachosia and snow-covered roads the army reached the Kabul valley in April 329 and refounded a town there as Alexandria in the Caucasus, a base for the north.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Across the Hindu Kush",
        text: "In May 329 the army crossed the Hindu Kush through snow and over glaciers, so short of food that the soldiers ate their pack animals, and took Drapsaca and Bactra. Bessus’s men deserted him and he fled north of the Oxus, burning the boats. The army crossed a waterless desert and then the river on rafts of hides stuffed with hay. Spitamenes and Datames handed Bessus over to Ptolemy; he was mutilated and sent to be executed. Alexander went on through Maracanda to the Jaxartes, where in July 329 he founded Alexandria Eschate, “the furthest Alexandria”, as a garrison against the Sacae.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "The Sogdian revolt",
        text: "The Sogdians then rose under Spitamenes, the man who had betrayed Bessus. His cavalry besieged the garrison of Maracanda while Alexander stormed seven Sogdian forts and the Sacae threatened from beyond the river. A relief force of mercenaries sent to Maracanda was destroyed. Alexander crossed the Jaxartes, defeated the Sacae and rode to relieve Maracanda, but Spitamenes escaped. Briant explains the strength of the revolt: the Bactrian and Sogdian nobles were defending the privileged position they had held under the Achaemenids, they had military and financial resources, and both Bessus and Spitamenes could count on long-standing alliances with the Sacae chiefs beyond the Syr Darya.",
        evidence: "fact",
        studies: ["jaxartes"],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "Dividing the army",
        text: "In 328 Alexander divided his forces: columns under Artabazus and Coenus in the north, Hephaestion among the garrison towns, Craterus in Margiana, and Alexander himself with Ptolemy and Perdiccas in the mountains. Spitamenes kept up a guerrilla war and came close to Bactra. The army wintered at Nautaca and Maracanda, and neighbouring peoples such as the Chorasmians sent envoys to make treaties. In December 328 Spitamenes’s allies deserted him, and his head was sent to Nautaca. That winter Alexander killed Cleitus at a dinner.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "The rocks and the settlement",
        text: "In 327 Alexander took the Sogdian Rock and then the rock of Sisimithres, and married Roxane, the daughter of a Sogdian leader captured on the Rock. Before leaving he ordered a levy of 30,000 young Iranians, who served, as Briant puts it, both as soldiers and as hostages. Briant also describes the settlement of thousands of Greco-Macedonian colonists in garrisons, citadels and new towns, which ended the dominance of the Sogdo-Bactrian nobility; Lendering counts at least 11,000 men left as garrison. At court the same year, the attempt to introduce the Persian greeting of proskynesis met Macedonian and Greek refusal, and a conspiracy of the royal pages ended in executions, including that of Callisthenes.",
        evidence: "fact",
        studies: ["sogdian-rock"],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "A different kind of war",
        text: "Lendering calls this a completely new phase of the war, fought in steppe country unsuited to the phalanx, against guerrillas and mounted archers; Alexander reorganized his cavalry and enlisted Iranian horsemen, and the army was never smaller than in the last months of 329. Briant attributes the three years of heavy fighting to a virtual parity of forces, and notes that Alexander changed his tactics and logistics and used indiscriminate terror to make the nobles change sides. The same years saw open resentment among the Macedonian nobles at Alexander’s adoption of Persian court ways: Philotas and Parmenion in 330, Cleitus in 328–327 and the dispute over proskynesis in 327.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }],
      },
    ],
    sources: [
      briant,
      lendering("2.11", "King of Asia"),
      lendering("2.12", "Sogdia"),
    ],
  },
  "indian-campaign": {
    summary:
      "Alexander’s invasion of the Indus lands, 327–325 BCE: the Hydaspes, the army’s refusal at the Hyphasis, the voyage down the Indus and the march through the Gedrosian desert.",
    narrative: [
      {
        title: "Into Gandara",
        text: "Briant notes that the Indian lands Darius I had conquered were by then practically out of Achaemenid control and divided among independent kingdoms. Lendering calls the invasion unnecessary; one Indian prince at Alexander’s court, Omphis (Ambhi) of Taxila, wanted help against his rival Porus. Early in 326 two armies entered Gandara: Perdiccas and Hephaestion took the main road by the Khyber Pass to bridge the Indus, while Alexander fought the hill peoples to the north. The campaign was brutal; the mercenaries of Massaga were killed after they had surrendered, and the mountain refuge of Aornus was taken. The armies met in April 326, crossed the Indus and were welcomed at Taxila.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The Hydaspes",
        text: "Porus, king of the Pauravas, refused to submit and held the line of the Hydaspes. In the spring of 326 Alexander crossed the river in a thunderstorm and defeated him. Porus, wounded, surrendered only when his army had been destroyed, and was restored as ruler of his kingdom. Alexander founded Nicaea and Bucephala at the battlefield.",
        evidence: "fact",
        studies: ["hydaspes"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "The Hyphasis",
        text: "The army crossed the Acesines and the Hydraotes and took Sangala. At the end of July 326, on the Hyphasis (Beas), it refused to go on. Lendering notes that the men were being asked to fight in distant Magadha during the monsoon. Arrian describes their flagging spirit and a council at which Alexander failed to persuade his officers; annoyed, he still sacrificed for the crossing, and when the omens were unfavourable he announced that he would march back. He set up twelve altars, extended Porus’s kingdom to the Hyphasis and returned to the Hydaspes, where Nicaea and Bucephala were repaired and a fleet was built.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1 },
          { source: 3, locator: "5.25" },
          { source: 4, locator: "5.28" },
          { source: 5, locator: "5.29" },
          { source: 2 },
        ],
      },
      {
        title: "Down the Indus",
        text: "In November 326 the fleet under Nearchus set out down the rivers, with armies under Craterus and Hephaestion on the banks. The Mallians and Oxydracae resisted, and at the siege of one of their towns Alexander was shot through the lung and nearly killed. Further south, Musicanus submitted and then rose with the Brahmans, who were hanged; Musicanus was crucified. Craterus took about a third of the army and the elephants west by an inland route, and the rest reached the Ocean and founded a base at Patala.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "Gedrosia and the fleet",
        text: "Briant says Nearchus was to sail along the coast to the Persian Gulf, following Darius I’s fleet of 518, surveying the coast and landing supplies for the army crossing Gedrosia. Arrian gives two reasons for Alexander’s route: a wish to outdo Cyrus and Semiramis, whose crossings of that desert were remembered as disasters, and, on Nearchus’s account, the need to supply the fleet. In August 325 Alexander and most of the army left Patala. Arrian says heat and thirst destroyed a great part of the army and most of the baggage animals. After about sixty days in the desert the survivors reached Pura in early December, and at the end of 325 they met Craterus in Carmania.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 6, locator: "6.24" }, { source: 2 }],
      },
      {
        title: "Costs and limits",
        text: "Lendering judges the war against the Mallians merciless, the desert march a disaster that may not have been foreseen, and Alexander’s hold on the eastern satrapies weak; Seleucus later gave them up. He also notes the new towns and dockyards of the Indus valley as signs of a plan to develop it. Briant sets the fleet in a longer design: to open sea communication between the Persian Gulf and the Red Sea and Mediterranean, as Darius I had attempted.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Lendering has Alexander meet Nearchus in Carmania and fix Susa as their next meeting place; Briant says the fleet and army linked up in Lower Mesopotamia in January 324. Arrian’s two motives for the Gedrosian route come from different authorities, and how far Alexander foresaw its cost is a matter of judgement.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }, { source: 6, locator: "6.24" }],
      },
    ],
    sources: [
      briant,
      lendering("2.13", "The Punjab"),
      lendering("2.14", "The Indus valley"),
      arrian("V", "XXV", "5.25"),
      arrian("V", "XXVIII", "5.28"),
      arrian("V", "XXIX", "5.29"),
      arrian("VI", "XXIV", "6.24"),
    ],
  },
};
