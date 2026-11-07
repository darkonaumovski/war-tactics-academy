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

// Napoleon, 1793–1809 (batch K2).
const rose: Source = {
  title:
    "J. Holland Rose, The Life of Napoleon I, 2 vols (London: G. Bell, 1910 reprint of the 1907 fourth edition)",
  url: "https://archive.org/details/thelifeofnapoleo14300gut",
  publisher: "Internet Archive (Project Gutenberg text)",
};
const ebRevolutionary: Source = {
  title:
    "“French Revolutionary Wars” — Charles Francis Atkinson and David Hannay, Encyclopædia Britannica, 11th ed., vol. 11 (1911)",
  url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/French_Revolutionary_Wars",
  publisher: "Wikisource",
};
const ebNapoleonic: Source = {
  title:
    "“Napoleonic Campaigns” — Frederic Natusch Maude and David Hannay, Encyclopædia Britannica, 11th ed., vol. 19 (1911)",
  url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Napoleonic_Campaigns",
  publisher: "Wikisource",
};
// Napoleon, 1812–1815 (batch K3).
const ebWaterloo: Source = {
  title:
    "“Waterloo Campaign, 1815” — Archibald Frank Becke, Encyclopædia Britannica, 11th ed., vol. 28 (1911)",
  url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Waterloo_Campaign,_1815",
  publisher: "Wikisource",
};
const wilson: Source = {
  title:
    "Sir Robert Wilson, Narrative of Events during the Invasion of Russia by Napoleon Bonaparte, ed. H. Randolph, 2nd ed. (London: John Murray, 1860)",
  url: "https://archive.org/details/narrativeofevent00wils",
  publisher: "Internet Archive",
};
const ndb = (sfz: string, title: string): Source => ({
  title,
  url: `https://www.deutsche-biographie.de/sfz${sfz}.html`,
  publisher: "Deutsche Biographie",
});
const blucher = ndb(
  "35354",
  "Blücher von Wahlstatt, Gebhard Leberecht Fürst — Hans Haussherr (Neue Deutsche Biographie 2, 1955)",
);
const gneisenau = ndb(
  "69918",
  "Gneisenau, August Wilhelm Anton Graf Neidhardt von — Hermann Teske (Neue Deutsche Biographie 6, 1964)",
);

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
  "siege-of-toulon": {
    summary:
      "The recapture of Toulon from the French royalists and their British and Spanish allies, August to December 1793: the siege in which Bonaparte first commanded artillery against a fortress.",
    narrative: [
      {
        title: "The revolt in the south",
        text: "On 2 June 1793 the Mountain, backed by the Paris crowd, overthrew the Girondins, and most departments of France took up arms against the new government. In July Toulon joined the other towns of the south in declaring against it, and on 28 August its royalists admitted British and Spanish squadrons to hold the port for Louis XVII. Rose sets this among a run of disasters for the Republic: Lyons had raised the white flag, the Vendéans were beating the National Guards, Spaniards were crossing the eastern Pyrenees and Piedmontese threatened Grenoble. The 1911 Britannica counts the counter-revolution in the south, with the sieges of Lyons and Toulon, as more serious than the fighting on the Spanish and Italian frontiers, and notes that it made a French offensive in the Alps impossible that year.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "ch. 3" },
          { source: 1, locator: "1793" },
        ],
      },
      {
        title: "Guns for the besiegers",
        text: "Bonaparte, then on administrative duty in Provence, reached the republican camp near Ollioules in mid-September. Carteaux, a painter turned general, held the hills west of Toulon with about 8,000 men and Lapoype watched the east side with 3,000. The artillery commander had been wounded, and the representative Salicetti had Bonaparte take his place on 16 September. Rose describes him collecting cannon from the coast forts and the Army of Italy, setting up an arsenal at Ollioules and requisitioning horses and gabions across Provence; he was soon promoted chef de bataillon. The defenders were too few for the ring of forts the town depended on, and General Grey told Pitt that 50,000 men were needed. Lyons fell to the republicans on 9 October, and Austria never sent the 5,000 regulars it had promised.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0, locator: "ch. 3" }],
      },
      {
        title: "The Little Gibraltar",
        text: "The key was Fort Mulgrave, the redoubt the British called Little Gibraltar on the heights above L’Eguillette: whoever held it could fire on the allied ships in the roads. On 15 November an outpost fight near the fort grew into an attack, which Doppet, Carteaux’s successor, called off; Dugommier then took command, the besiegers grew to 37,000 men, and the British commander O’Hara was captured in a sortie. On the night of 16–17 December, in a storm, the redoubt fell to the reserve column after two waves had been thrown back. The Neapolitans abandoned the neighbouring forts and the allied fleet prepared to leave. Before it sailed, a small British party fired the French warships in the dockyard that could not be taken away and the Spaniards blew up two powder ships. Crowds of royalists fought for places in the boats; Rose cites the representative Fréron boasting a fortnight later that two hundred royalists were dying every day.",
        evidence: "fact",
        studies: ["toulon"],
        refs: [{ source: 0, locator: "ch. 3" }],
      },
      {
        title: "Whose plan?",
        text: "Napoleon’s admirers credited him with the plan of attacking the heights to drive away the fleet; Barras, in his memoirs, made him a mere subordinate. Rose rejects both. A letter of the Convention’s representatives dated 13 September, three days before Bonaparte arrived, already proposed burning the enemy fleet with red-hot shot instead of besieging the town, and Hood and Mulgrave had begun fortifying the heights early that month: every experienced officer on both sides saw where the defence was weak. What Rose does credit to Bonaparte is the artillery that made the attack possible and his leadership in the batteries and in the final assault.",
        evidence: "uncertainty",
        studies: ["toulon"],
        refs: [{ source: 0, locator: "ch. 3" }],
      },
      {
        title: "Did Britain mean to keep Toulon?",
        text: "French writers charged the Pitt ministry with planning to keep Toulon. Rose, working from the British official records, argues that it did not: Britain sent only about 2,200 soldiers alongside 6,900 Spaniards, 4,900 Neapolitans, 1,600 Piedmontese and 1,600 French royalists, pressed Austria for 5,000 more, and kept the Comte de Provence away because a regency would have divided the royalists. The despatches speak of an indemnity elsewhere, such as Corsica or a French West Indian island, not of Toulon itself. Rose writes as a British historian, and the case rests on what the despatches do not say.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0, locator: "ch. 3" }],
      },
      {
        title: "After Toulon",
        text: "With the southern revolt crushed, the government turned to the Italian frontier in 1794. The Britannica notes that the troops sent against the rebels had stripped the lower Rhône of food, so that the Army of Italy depended on supplies from the Genoese Riviera, exposed to the corsairs of Oneglia and the British fleet. Bonaparte was made general commanding the artillery of the Army of Italy in February 1794 and served on its staff in the spring offensive that took Oneglia and the Col di Tenda.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "The War in Italy" },
          { source: 0, locator: "ch. 4" },
        ],
      },
    ],
    sources: [rose, ebRevolutionary],
  },
  "paris-insurrection-of-1795": {
    summary:
      "The rising of the Paris sections against the National Convention in October 1795, put down on 13 Vendémiaire with cannon commanded by Bonaparte.",
    narrative: [
      {
        title: "The decree of the two-thirds",
        text: "In the summer of 1795 the reaction against the Terror was running strong. Rose notes that an émigré landing in Brittany had been crushed by Hoche and that the boy called Louis XVII had died in the Temple, leaving royalist hopes with the unpopular Comte de Provence. The Convention drafted the Constitution of the Year III: two councils, the Ancients and the Five Hundred, a third of whose members would retire each year, and an executive Directory of five. It was proclaimed on 22 September 1795, 1 Vendémiaire Year IV. A further decree required two-thirds of the new councils to be drawn from the Convention itself. Thiébault records that the armies and departments accepted the constitution by large majorities, but in Paris the sections, led by Le Peletier, rejected the decrees, and young men in the streets shouted “Down with the two-thirds!”",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "ch. 4" },
          { source: 1, locator: "ch. 15" },
        ],
      },
      {
        title: "The sections take up arms",
        text: "Rose judges the movement more generally malcontent than royalist, fed by dearth and the failure of the Revolution to bring cheap bread, though royalists tried to steer it. On 10 Vendémiaire, Thiébault writes, the section Le Peletier set up a committee of government with thirty-two sections adhering; on the 12th sixteen sections declared themselves in rebellion and named General Danican their commander. The Convention armed about 1,500 “patriots” expelled from the sections, over the objection of General Menou. That evening Menou, ordered to disarm Le Peletier, crowded his column into a single street, parleyed, and let the section’s battalion keep its arms. The Convention replaced him with Barras.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "ch. 4" },
          { source: 1, locator: "ch. 15" },
        ],
      },
      {
        title: "13 Vendémiaire",
        text: "Thiébault, a staff officer on the Convention’s side, gives the sections 30,000 National Guards against 8,000 defenders: 5,000 troops of the line, 1,500 patriots and 1,500 gendarmes, police and pensioners. The defenders held a compact position around the Tuileries; the sections were split by the Seine. Bonaparte sent Murat with 300 horsemen to bring the guns from the camp at Les Sablons, and they arrived just ahead of a battalion the sections had sent for them. The sections occupied the Rue Saint-Honoré and the steps of Saint-Roch and then waited while Danican parleyed. Firing began in the late afternoon of 5 October. Grapeshot swept the steps of Saint-Roch and the streets north of the Tuileries, and a column coming from the left bank along the Quai Voltaire was caught by batteries on both quays. Thiébault says an hour and a half sufficed; the next morning the last posts of the sections were taken.",
        evidence: "fact",
        studies: ["vendemiaire"],
        refs: [
          { source: 1, locator: "ch. 15" },
          { source: 0, locator: "ch. 4" },
        ],
      },
      {
        title: "From Vendémiaire to Italy",
        text: "Rose notes that the Convention was lenient in victory: only two rebel leaders were executed, and Bonaparte helped to free Menou when he was charged with treachery. Bonaparte became second in command of the Army of the Interior and then its commander when Barras resigned. He married Josephine, and a fortnight before the wedding he was appointed to command the Army of Italy. The 1911 Britannica, writing of that army’s campaign, lists the “whiff of grapeshot”, the marriage and the appointment in one breath; Rose rejects the story that the command was Barras’s wedding gift, since the five Directors, Carnot among them, decided it together.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "ch. 4" },
          { source: 2, locator: "The War in Italy" },
        ],
      },
      {
        title: "Where the accounts differ",
        text: "Rose cites the Convention’s decree naming Barras commander with Bonaparte as one of seven officers under him, against Napoleon’s later claim to have commanded and his admirers’ claim that he was second in command. Thiébault heard on the morning of the 13th that Barras commanded with Bonaparte second, and says the Convention confirmed that arrangement the next day. Thiébault says the firing began when Adjutant-General Solignac’s patriots quarrelled with sectionaries at Venua’s restaurant; Rose has the first shots fired from houses near Saint-Roch. Thiébault writes that the fighting at Saint-Roch, in which he took part, was directed by Bonaparte in person, while Rose says Bonaparte was engaged in streets further east and that the church was never stormed but surrendered the next morning. Rose doubts the usual figure of about two hundred dead on each side.",
        evidence: "uncertainty",
        studies: ["vendemiaire"],
        refs: [
          { source: 0, locator: "ch. 4" },
          { source: 1, locator: "ch. 15" },
        ],
      },
      {
        title: "Two verdicts from the winning side",
        text: "Both accounts used here condemn the sections. Thiébault calls the rising a conspiracy encouraged by the enemy, in which men who hated the Terror drew up new lists of suspects. Rose holds that the grapeshot crushed a movement that could only have led to anarchy or a vengeful royalism. Neither speaks for the sections; the study of the day adds the royalist journalist Mallet du Pan.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 15" },
          { source: 0, locator: "ch. 4" },
        ],
      },
    ],
    sources: [
      rose,
      {
        title:
          "The Memoirs of Baron Thiébault, trans. A. J. Butler, vol. 1 (London: Smith, Elder, 1896)",
        url: "https://archive.org/details/memoirsofbaronth01thiuoft",
        publisher: "Internet Archive",
      },
      ebRevolutionary,
    ],
  },
  "italian-campaign-of-1796-1797": {
    summary:
      "Bonaparte’s first campaign in command, April 1796 to April 1797: Piedmont forced out of the war, Lombardy occupied, four Austrian attempts to relieve Mantua defeated and the march on Vienna that ended at Leoben.",
    narrative: [
      {
        title: "The Army of Italy on the Riviera",
        text: "Since 1794 the Army of Italy had been strung along the Genoese Riviera, fed from Genoa by sea under the guns of British frigates. The 1911 Britannica traces Bonaparte’s ideas through these years: as a staff officer in 1794 he urged a concentrated blow through the Apennines instead of the Alps, and in a series of memoranda written in Paris in 1795 he set out the plan he would follow: separate the Austrians from the Piedmontese, force Sardinia into peace, then drive the Austrians from Lombardy. Schérer and Masséna won at Loano in November 1795 but went no further. When Bonaparte took command in March 1796 the army was ragged and hungry; he raised about 40,000 men for the field against some 25,000 Sardinians and auxiliaries under Colli and 27,000 Austrians under Beaulieu.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0, locator: "The War in Italy" }],
      },
      {
        title: "Piedmont knocked out",
        text: "Beaulieu moved first, against the French detachment at Voltri, to cut the army off from Genoa. On 12 April Bonaparte concentrated against the Austrian column at Montenotte, then stormed Dego, lost it to a surprise counter-attack while his troops plundered the town, and took it again. He turned on Colli, who fell back from one position to the next. At San Michele the attack stalled when Sérurier reported that without bread the soldiers would not march; once supplies were brought up, Colli was overtaken and beaten near Mondovì. Turin asked for terms, and the armistice of Cherasco at the end of April was followed by preliminaries of peace in which Sardinia gave up Savoy and Nice and left the Austrian alliance.",
        evidence: "fact",
        studies: ["montenotte"],
        refs: [
          { source: 0, locator: "The War in Italy" },
          { source: 1, locator: "ch. 5" },
        ],
      },
      {
        title: "Lodi and the price of Lombardy",
        text: "To cross the Po without a bridge train, Bonaparte drew Beaulieu toward Valenza and crossed at Piacenza on 7 May. On 10 May he forced the bridge at Lodi against what proved to be the Austrian rearguard, and the army entered Milan. When the Directory ordered him to hand northern Italy to Kellermann, he offered his resignation and prevailed. Rose details the cost to the Lombards: a contribution of twenty million francs, of which Bonaparte told the Directors several millions were surplus to the army’s needs, the removal of works of art, and heavy payments from Parma and Modena. Pavia and the villages around Milan rose; Binasco was burned and Pavia given over to pillage. After the action at Borghetto on 30 May Beaulieu left a strong garrison in Mantua and retired into the Tyrol.",
        evidence: "fact",
        studies: ["lodi"],
        refs: [
          { source: 0, locator: "The War in Italy" },
          { source: 1, locator: "ch. 5" },
        ],
      },
      {
        title: "The first relief of Mantua",
        text: "The siege trenches before Mantua were opened in mid-July, just as Wurmser came down from Trent with about 55,000 men in three columns, one of them west of Lake Garda against the French line of supply. On 30 July Bonaparte wrote that the enemy had broken his line in three places. He gave up the siege, spiked some 140 siege guns, and used his divisions between the separated Austrian columns: Quasdanovich was driven back around Lonato and Salò, and on 5 August Wurmser was beaten at Castiglione and withdrew into the Tyrol, having relieved the fortress. The Britannica stresses the marching that made this possible; Augereau’s division covered nearly fifty miles in about thirty-six hours.",
        evidence: "fact",
        studies: ["castiglione"],
        refs: [{ source: 0, locator: "The War in Italy" }],
      },
      {
        title: "Bassano and Arcole",
        text: "In September the French advanced up the Adige to Trent, but Wurmser had already turned down the Val Sugana toward Mantua. Bonaparte followed, beat him at Bassano on 8 September, and failed to cut him off: Wurmser reached Mantua on 12 September, raising the garrison to about 28,000. In November Alvinczi advanced from Friuli while Davidovich came down from the Tyrol. Bonaparte was beaten at Caldiero on 12 November and wrote on the 15th that he was perhaps on the eve of losing Italy. He crossed the Adige behind the Austrians and fought for three days along the dikes at Arcole until Alvinczi withdrew; Vaubois had meanwhile been driven from Rivoli, and Davidovich was pushed back to Trent only afterwards.",
        evidence: "fact",
        studies: ["arcole"],
        refs: [
          { source: 0, locator: "The War in Italy" },
          { source: 1, locator: "ch. 6" },
        ],
      },
      {
        title: "Rivoli and the fall of Mantua",
        text: "In January 1797 Alvinczi made his main effort from the Tyrol against Joubert’s position at Rivoli, with secondary columns from Padua and Bassano. Bonaparte rode to Rivoli on the night of the 13th; on 14 January, with about 10,000 men against 26,000 attacking in several separated columns, he held the plateau until Masséna and then Rey arrived, and the Austrians broke. Provera’s column reached Mantua and was forced to lay down its arms. Mantua surrendered on 2 February 1797. Bonaparte then turned on the Papal States; by the Treaty of Tolentino on 19 February, Rose notes, Pius VI paid thirty million francs and gave up a hundred works of art.",
        evidence: "fact",
        studies: ["rivoli"],
        refs: [
          { source: 0, locator: "The War in Italy" },
          { source: 1, locator: "ch. 6" },
        ],
      },
      {
        title: "To Leoben and Campo Formio",
        text: "In the spring of 1797 the army marched through Carinthia and Carniola toward the Semmering. The Archduke Charles, brought from the Rhine, could fight only rearguard actions; his NDB biographer notes that he led the army back into Styria and opened the contacts that led to Leoben. On 18 April Bonaparte signed preliminaries of peace on his own authority, although, Rose points out, he was empowered only to conclude an armistice. Secret articles gave Austria the Venetian mainland east of the Oglio in exchange for Belgium and Lombardy. The Treaty of Campo Formio on 17 October gave Austria Venice, Istria and Dalmatia, and France Belgium and the Ionian Islands, and Austria recognized the Cisalpine Republic.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "The War in Italy" },
          { source: 1, locator: "ch. 7" },
          { source: 2 },
        ],
      },
      {
        title: "Why Austria kept coming",
        text: "The Britannica defends the Austrian strategy against the usual condemnation. Vienna’s object was to save Mantua, which barred the road to Austria, and in that limited aim Wurmser’s first advance succeeded; the fault was to spend four armies on it. It also qualifies the later theory of “interior lines”: Bonaparte’s position between his enemies was dangerous, and it was the speed of his marches and his judgement of what each enemy could do that won. Rose stresses another side: the plunder that sometimes reduced regiments to companies, and Bonaparte’s growing habit of acting as a diplomat without the Directory’s leave.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 0, locator: "The War in Italy" },
          { source: 1, locator: "ch. 5, ch. 7" },
        ],
      },
    ],
    sources: [
      ebRevolutionary,
      rose,
      ndb(
        "57317",
        "Karl, Erzherzog von Österreich — Johann Christoph Allmayer-Beck (Neue Deutsche Biographie 11, 1977)",
      ),
    ],
  },
  "egyptian-and-syrian-campaign": {
    summary:
      "The French expedition to Egypt and Syria, 1798–1799: the conquest of Lower Egypt, the loss of the fleet, the failed siege of Acre and Bonaparte’s return to France.",
    narrative: [
      {
        title: "The expedition",
        text: "In February 1798 Bonaparte judged an invasion of England too hazardous without command of the sea. A secret decree of 12 April charged him with taking Egypt, excluding the British from the East, cutting through the isthmus of Suez, improving the condition of the Egyptians and keeping good relations with the Ottoman sultan; another authorized him to seize Malta. The fleet left Toulon on 19 May, evaded Nelson, took Malta on the way and reached Egypt on 1 July. Alexandria was stormed the next day. Rose notes that Bonaparte justified the invasion of an Ottoman province by the Mamluk beys’ favour to English trade, and told the Porte it was a friendly act against rulers who had reduced its authority to a shadow.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "ch. 8" },
          { source: 1, locator: "Napoleon in Egypt" },
        ],
      },
      {
        title: "The road to Cairo",
        text: "The army marched across the desert to Damanhur, where thirst and Bedouin raiders tried it hard, and up the Nile to Embabeh opposite Cairo. On 21 July it beat the Mamluks there in squares. Al-Jabarti, a Cairo scholar who stayed in the city, writes that the beys had sent out neither spies nor scouts, that Murad Bey waited on the west bank and Ibrahim Bey on the east, and that the entrenchments fell in about three quarters of an hour while the wind blew sand into the defenders’ eyes. That night much of Cairo fled, and the fugitives were robbed by Bedouin. The sheikhs of al-Azhar sent to ask the French general’s intentions; he called for a council of notables, and the French entered the city. Desaix pursued Murad into Upper Egypt and Ibrahim withdrew to Syria.",
        evidence: "fact",
        studies: ["pyramids"],
        refs: [
          { source: 2 },
          { source: 0, locator: "ch. 8" },
          { source: 1, locator: "Napoleon in Egypt" },
        ],
      },
      {
        title: "A prisoner in his conquest",
        text: "On 1–2 August Nelson found the French fleet in Aboukir Bay and destroyed it; Rose writes that only two ships of the line and two frigates escaped. The army was cut off. Bonaparte governed through a divan of sheikhs in Cairo and councils in the provinces, reorganized taxes and set his scholars to work. On 21 October Cairo rose. Al-Jabarti, hostile to the occupiers, describes French troops tethering their horses in al-Azhar, the houses around it plundered, sheikhs arrested and many prisoners beheaded and thrown into the Nile; Rose records the rising and its repression, and the forts the French then built in Cairo and along the Nile.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0, locator: "ch. 8" }, { source: 2 }],
      },
      {
        title: "Syria and Acre",
        text: "The Ottoman Empire declared war and prepared two armies, one through Syria and one by sea from Rhodes. Bonaparte struck first, in February 1799, with about 12,000 men. He took El Arish and stormed Jaffa on 7 March; there two to three thousand prisoners who had surrendered on a promise of quarter were shot, after three days’ delay, because the army could neither feed, guard nor release them. Plague broke out. Before Acre, held by Jezzar Pasha, Sir Sidney Smith captured the French siege train at sea off Mount Carmel, and the émigré engineer Phélippeaux strengthened the walls. A relieving Ottoman army was routed near Mount Tabor in April, but repeated assaults on Acre failed, and on 20 May Bonaparte raised the siege. Rose puts his losses at Acre near 5,000 killed, wounded and sick; he told the Directory the whole expedition had cost 1,500.",
        evidence: "fact",
        studies: ["acre"],
        refs: [
          { source: 0, locator: "ch. 9" },
          { source: 1, locator: "Napoleon in Egypt" },
        ],
      },
      {
        title: "Aboukir and departure",
        text: "In July an Ottoman army landed at Aboukir. Al-Jabarti records the letters from Alexandria announcing the fleet, the news that Mustafa Pasha had taken the fort, the joy it caused in Cairo and the French arrests of the sheikhs of the city’s quarters. On 25 July Bonaparte, with Murat and Lannes leading, drove the landing force into the sea; the Britannica gives him 6,000 men against 18,000. Newspapers sent across by Sidney Smith told him of the new coalition and French defeats in Italy and Germany. On the night of 22–23 August he sailed for France, leaving Kléber in command; Kléber later agreed at El Arish, in January 1800, to evacuate the army.",
        evidence: "fact",
        studies: ["aboukir-1799"],
        refs: [
          { source: 2 },
          { source: 0, locator: "ch. 9" },
          { source: 1, locator: "Napoleon in Egypt" },
        ],
      },
      {
        title: "A political rather than a military success",
        text: "The Britannica judges the expedition more important for its political and personal consequences than for the history of war. Rose sees in Acre the loss of Bonaparte’s reputation for invincibility and in the Syrian march a dangerous dispersal of his small army, and he notes that the rank and file regarded the departure of August 1799 as something close to desertion. Bonaparte himself later said that he had missed his destiny at Acre.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 1, locator: "Napoleon in Egypt" },
          { source: 0, locator: "ch. 9" },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "Rose gives the expedition 35,000 troops and nearly 300 transports; the Britannica 40,000 in 400 transports. Rose dates the battle near Mount Tabor to 15 April, the Britannica to 16 April. The Britannica’s 60,000 Mamluks at Embabeh is not credible and is not used here. Rose defends the shooting of the Jaffa prisoners on military grounds, citing a letter in the British Admiralty records that the same troops had broken their parole from El Arish. Al-Jabarti is quoted from Cardin’s French translation of 1838, whose preface identifies the work as “The deliverance of Egypt by the departure of the French nation”, rendered into Turkish for Sultan Selim III; Cardin himself warns that it often distorts the facts, and its harsher passages are attributed to him here.",
        evidence: "uncertainty",
        studies: [],
        refs: [
          { source: 0, locator: "ch. 8, ch. 9" },
          { source: 1, locator: "Napoleon in Egypt" },
          { source: 2 },
        ],
      },
    ],
    sources: [
      rose,
      ebRevolutionary,
      {
        title:
          "Journal d’Abdurrahman Gabarti pendant l’occupation française en Égypte, trans. Alexandre Cardin (Paris, 1838)",
        url: "https://archive.org/details/journaldabdurra00cardgoog",
        publisher: "Internet Archive",
      },
    ],
  },
  "marengo-campaign": {
    summary:
      "The First Consul’s campaign of 1800: the Army of Reserve crossed the Great St Bernard into the Austrian rear in Italy, and Marengo, with Moreau’s victory at Hohenlinden, ended the War of the Second Coalition.",
    narrative: [
      {
        title: "The Austrian offensive",
        text: "In the spring of 1800 the Austrians were winning in Italy. Melas, in his NDB biographer’s account, planned to take Genoa and push on to the Var; Rose adds the hope of a British landing and a royalist rising in Provence. In April the Austrians split the small French Army of Italy, shutting Masséna in Genoa and driving Suchet back toward Nice. Meanwhile, from 25 January, Bonaparte had been assembling an Army of Reserve around Dijon from veterans of the Vendée, young conscripts and new units, many of them armed only on the march. His first plan was to cross into Lombardy by the Splügen while Moreau’s Army of the Rhine pushed the Austrians back in Germany; Moreau insisted on crossing the Rhine further west, and the news from Genoa turned the Army of Reserve toward the western passes.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 2 },
          { source: 1, locator: "ch. 11" },
          { source: 0, locator: "Marengo and Hohenlinden" },
        ],
      },
      {
        title: "Over the Great St Bernard",
        text: "From 15 May the army crossed the Great St Bernard, dragging its guns on sledges, and entered Aosta on the 16th. The small fort of Bard then blocked the valley: the infantry found a mountain track round it after three days, but the artillery was held up for a fortnight, and Bard surrendered only on 2 June. Ivrea was taken on 22 May. Rose says Melas learned of the crossing on 21 May, left 18,000 men facing Suchet and hurried back to Turin.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "Marengo and Hohenlinden" },
          { source: 1, locator: "ch. 11" },
        ],
      },
      {
        title: "Milan, not Genoa",
        text: "Instead of marching to relieve Genoa, Bonaparte turned east to Milan, which Murat entered on 2 June, gaining the Austrian depots and a junction with Moncey’s corps from the Rhine by the St Gotthard. In Genoa the garrison was starving, and on 4 June Masséna capitulated. The French then crossed the Po to bar the Austrians’ line of retreat: Murat took Piacenza, and Lannes beat an Austrian column at San Cipriano on 6 June and then fought at Montebello. Melas gave up his western enterprises and concentrated at Alessandria.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "Marengo and Hohenlinden" },
          { source: 2 },
          { source: 1, locator: "ch. 11" },
        ],
      },
      {
        title: "Marengo",
        text: "Bonaparte did not know whether Melas would break out east, cross the Po to the north or retire on Genoa. On 13 June he sent Desaix, newly arrived from Egypt, south toward Rivalta and Novi, and on the morning of the 14th another division back across the Po. That morning Melas came out of Alessandria across the Bormida into the plain of Marengo. By early afternoon the French were in retreat, and Melas, his biographer says, left the field confident of victory. Desaix’s division returned and counter-attacked, Kellermann’s cavalry charged, and the Austrians broke. Desaix was killed. The next day Melas agreed to withdraw behind the Mincio and give up the fortresses of Piedmont and Lombardy, Genoa among them.",
        evidence: "fact",
        studies: ["marengo"],
        refs: [
          { source: 0, locator: "Marengo and Hohenlinden" },
          { source: 2 },
          { source: 1, locator: "ch. 11" },
        ],
      },
      {
        title: "Hohenlinden and Lunéville",
        text: "Marengo did not end the war on its own. Moreau had beaten Kray at Stockach and pushed him back past Ulm to the Inn, where an armistice halted operations. When the talks failed, the Archduke John took the offensive, and on 3 December 1800 Moreau destroyed his army in the forests at Hohenlinden. The armistice of Steyr followed on 25 December and the Treaty of Lunéville on 9 February 1801, which, Rose notes, made the Adige Austria’s boundary in Italy and otherwise largely repeated Campo Formio.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "Marengo and Hohenlinden" },
          { source: 1, locator: "ch. 11" },
        ],
      },
      {
        title: "Judging the campaign",
        text: "The 1911 Britannica calls the march on Milan one of the most criticized decisions of Napoleon’s career and finds his own later defence of it unconvincing; it judges his dispositions before the battle, with only 20,000 of 50,000 men at the decisive point, inferior to his method in 1806. Rose defends the decision not to march on Genoa, which Masséna and Thiébault called desertion: such a march would have exposed the army’s flank to Melas and could at most have rescued a starving garrison. Rose also finds Bonaparte’s conduct in the first part of the battle below his reputation and credits the victory to Desaix and to Kellermann’s charge, made on his own initiative.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 0, locator: "Marengo and Hohenlinden" },
          { source: 1, locator: "ch. 11" },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "The numbers at Marengo differ widely. The Britannica has Melas attack with more than 40,000 men against 21,000 that Bonaparte had in hand; the NDB gives the Austrians 35,000 and the French about 30,000, counting the divisions that came back. Rose puts the losses at about a third of those engaged on each side, and says Melas had fewer than 20,000 effectives at Alessandria after the battle. On 7 June, the Britannica notes, Bonaparte still did not know whether Genoa had fallen.",
        evidence: "uncertainty",
        studies: ["marengo"],
        refs: [
          { source: 0, locator: "Marengo and Hohenlinden" },
          { source: 2 },
          { source: 1, locator: "ch. 11" },
        ],
      },
    ],
    sources: [
      ebRevolutionary,
      rose,
      ndb(
        "61357",
        "Melas, Michael Freiherr von — Peter Broucek (Neue Deutsche Biographie 17, 1994)",
      ),
    ],
  },
  "war-of-the-third-coalition": {
    summary:
      "The war of 1805 between Napoleon and Austria and Russia: the Grande Armée marched from the Channel to the Danube, encircled Mack at Ulm, took Vienna and won at Austerlitz.",
    narrative: [
      {
        title: "The coalition",
        text: "Rose traces the Third Coalition to Russia and Britain, with Sweden, rather than to British subsidies, and to Napoleon’s provocations in 1805: the Italian crown and the annexation of Genoa. Austria joined secretly on 9 August, though it had told the allies in July that its army would not be ready for four months. Its NDB biographer shows how Karl Mack, whose memorandum on a war beside Russia had pleased the Emperor Francis, became the instrument of the war party: the vice-chancellor Cobenzl had promised Russia military commitments that the Archduke Charles, then reforming the army, called impossible. The plan sent the main army, about 92,000 men under Charles, into Italy, and a smaller one into Bavaria to await the Russians.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1, locator: "ch. 22" }, { source: 2 }],
      },
      {
        title: "From the Channel to the Danube",
        text: "On 25 August Napoleon learned that Villeneuve had failed to win command of the Channel and turned the army assembled for the invasion of England toward the Rhine. The Austrians entered Bavaria on 8 September, without waiting for the Russians, to take its resources and, they hoped, its army; the Elector slipped away with his troops. Mack took up a position at Ulm and on the Iller, facing the Black Forest. The French crossed the Rhine on 25–27 September and wheeled north of him, reaching the Danube between Donauwörth and Ingolstadt by 7 October. Bernadotte’s corps marched through Prussia’s territory of Ansbach, which nearly brought Prussia into the war.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§§ 2–5" },
          { source: 2 },
          { source: 1, locator: "ch. 22" },
        ],
      },
      {
        title: "Ulm",
        text: "Behind the Austrians, the French found the country stripped and went hungry; Berthier answered the marshals’ appeals for supplies by reminding them that they had been told to carry four days’ provisions. On 8 October an Austrian division was routed at Wertingen. On the 11th Mack fell on Dupont’s isolated division at Albeck but could not follow up on the flooded roads, and on the 14th Ney forced the bridge at Elchingen. Werneck’s column broke out to the north and surrendered near Heidenheim; the Archduke Ferdinand escaped with some cavalry. Mack, surrounded and still expecting the Russians, agreed to lay down his arms if not relieved, then capitulated with about 23,000 men.",
        evidence: "fact",
        studies: ["ulm"],
        refs: [
          { source: 0, locator: "§§ 6–9" },
          { source: 1, locator: "ch. 22" },
          { source: 2 },
        ],
      },
      {
        title: "Vienna and Moravia",
        text: "Kutuzov’s Russians, too few to stand alone, retreated down the Danube, crossed at Krems and fought rearguard actions at Dürrenstein on 11 November and Hollabrunn on the 16th. On 14 November Murat and Lannes seized the great Danube bridge at Vienna by persuading its defenders that an armistice was about to be signed. The Archduke Charles, held in Italy by Masséna, was recalled. On 3 November, by the Treaty of Potsdam, Prussia had promised armed mediation and war if Napoleon refused it. Rose describes Napoleon’s position in Moravia as critical: a stronger allied army in front, the archdukes on his flanks and Prussia possibly in his rear. The Britannica says he brought only 55,000 men to Brünn.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§§ 10–11" },
          { source: 1, locator: "ch. 23" },
        ],
      },
      {
        title: "Austerlitz",
        text: "The Tsar, impatient with Kutuzov’s advice to retreat, accepted the Austrian Weyrother’s plan to turn the French right and cut Napoleon off from Vienna. Napoleon drew his lines back from Austerlitz to the Goldbach, encouraging the attack, and on 2 December, as the allied left marched against his right, struck the allied centre on the Pratzen heights. The allies were routed. Francis asked for an armistice, signed on 6 December on condition that the Russians left Austrian territory, and Alexander withdrew his army.",
        evidence: "fact",
        studies: ["austerlitz"],
        refs: [
          { source: 1, locator: "ch. 23" },
          { source: 0, locator: "§ 11" },
        ],
      },
      {
        title: "Pressburg and Schönbrunn",
        text: "Prussia’s envoy Haugwitz, sent to deliver its mediation, was instead made to sign the Treaty of Schönbrunn on 15 December, taking Hanover in exchange for Ansbach, Cleves and Neuchâtel. By the Treaty of Pressburg on 26 December Austria ceded its Venetian lands, Istria and Dalmatia, recognized the new kings of Bavaria and Württemberg, and gave Tyrol and Vorarlberg to Bavaria and its Swabian lands to the south German states, receiving Salzburg. Mack was court-martialled in 1806 and sentenced to eight years’ imprisonment, reduced by the Emperor to two; in 1819 a new inquiry restored his rank.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1, locator: "ch. 23" }, { source: 2 }],
      },
      {
        title: "Judging Mack and the peace",
        text: "Rose sees the root of the disaster in Mack’s habit of reading his own notions into the news. The 1911 Britannica is more sympathetic: Mack was made the scapegoat, held limited powers, faced an army more than twice as strong, and meant to hold Ulm as an anvil for the Russians to strike on. His NDB biographer places the fault earlier, in Mack’s preference for holding strategic points over destroying the enemy army, and in the court politics that let him overrule the more able Archduke Charles. Rose judges that Pressburg, by humiliating Austria instead of winning it as an ally, made it an irreconcilable enemy.",
        evidence: "interpretation",
        studies: ["ulm"],
        refs: [
          { source: 1, locator: "ch. 22, ch. 23" },
          { source: 0, locator: "§§ 3–4" },
          { source: 2 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "Rose and the NDB date Mack’s capitulation to 20 October; the Britannica has the remnant of his army lay down its arms on the 22nd, the day after Trafalgar. All give about 23,000 men, and the Britannica notes some 30,000 more unaccounted for, most probably escaped with help from the inhabitants. Rose gives Mack 59,000 men in Bavaria, the Britannica 80,000. Rose says the Elector of Bavaria escaped to Würzburg, the Britannica that the Bavarian army went to Bamberg. The Britannica gives the allies over 86,000 men before Austerlitz, Rose about 80,000.",
        evidence: "uncertainty",
        studies: [],
        refs: [
          { source: 0, locator: "§§ 3–11" },
          { source: 1, locator: "ch. 22, ch. 23" },
          { source: 2 },
        ],
      },
    ],
    sources: [
      ebNapoleonic,
      rose,
      ndb(
        "55447",
        "Mack Freiherr von Leiberich, Karl — Peter Broucek (Neue Deutsche Biographie 15, 1987)",
      ),
    ],
  },
  "war-of-the-fourth-coalition": {
    summary:
      "Napoleon’s war against Prussia and Russia, 1806–1807: the destruction of the Prussian army at Jena and Auerstedt, the winter campaign in Poland, Eylau, Friedland and the Treaties of Tilsit.",
    narrative: [
      {
        title: "Prussia goes to war",
        text: "Prussia had taken Hanover from Napoleon’s hand after Austerlitz; in the summer of 1806 it learned that he had offered Hanover back to Britain in peace talks. The execution of the Nuremberg bookseller Palm in August for selling a patriotic pamphlet roused German feeling. Prussia demanded that the French evacuate Germany; Napoleon would not do so until Prussia demobilized. The 1911 Britannica says he had meant since Austerlitz to force a quarrel on Prussia and had left his army cantoned in southern Germany within a few marches of the Thuringian Forest. It describes a Prussian army of about 110,000 Prussians and Saxons still living on Frederick the Great’s reputation, with most of its men on long furlough, old muskets, and laws that forbade requisitions even in war.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 25" },
          { source: 0, locator: "§§ 12–13" },
        ],
      },
      {
        title: "The battalion square",
        text: "In early October some 200,000 French crossed the Thuringian Forest in three columns close enough to support one another, which Napoleon called a battalion square, aiming to threaten Berlin and force the Prussians to fight. The Prussian command was divided. Prince Hohenlohe, commanding the right wing of the army in Saxony, proposed an advance to the Main while the Duke of Brunswick counselled defence; his NDB biographer blames Hohenlohe’s adviser Massenbach for operations that contradicted Brunswick’s strategy. On 10 October Prince Louis Ferdinand, covering Hohenlohe’s flank, was beaten and killed at Saalfeld.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§ 14" },
          { source: 1, locator: "ch. 25" },
          { source: 2 },
        ],
      },
      {
        title: "Jena and Auerstedt",
        text: "On 13 October the Prussian main army began to withdraw north toward the Unstrut, leaving Hohenlohe and Rüchel as a rearguard. Napoleon, seeing Hohenlohe’s camps from the Landgrafenberg above Jena, believed the whole army was in front of him and concentrated there; on the 14th he defeated Hohenlohe, who had abandoned the height, in the fog. The same day Davout’s single corps, ordered round by Kösen, met the Prussian main army at Auerstedt and held it until it retreated: Brunswick was mortally wounded and the reserve under Kalckreuth was not committed. Bernadotte, between the two fields at Dornburg, joined neither battle.",
        evidence: "fact",
        studies: ["jena-auerstedt"],
        refs: [
          { source: 0, locator: "§§ 16–18" },
          { source: 2 },
          { source: 1, locator: "ch. 25" },
        ],
      },
      {
        title: "The collapse of Prussia",
        text: "Pursuit turned defeat into collapse. Erfurt surrendered with 16,000 men on 16 October, and Davout entered Berlin. On 28 October Murat caught Hohenlohe at Prenzlau and persuaded him that he was surrounded; on Massenbach’s advice Hohenlohe surrendered with about 12,000 men, and his NDB biographer notes that this set off further capitulations. Spandau, Stettin, Küstrin, Magdeburg and Hameln opened their gates, and Blücher surrendered at Lübeck on 7 November. On 21 November Napoleon issued the Berlin Decree declaring the British Isles blockaded, the foundation of the Continental System.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 25, ch. 26" },
          { source: 2 },
          { source: 0, locator: "§ 19" },
        ],
      },
      {
        title: "Poland and Eylau",
        text: "Frederick William refused Napoleon’s terms and fought on with Russia. Davout entered Warsaw on 30 November, and the Russians came west. The Britannica stresses that Polish roads, really tracks, and the shortage of transport defeated French methods: the December operations around Pultusk let the Russians escape, and the army went into winter quarters. In January Bennigsen moved west toward Danzig; Napoleon moved to cut him off from Russia, but Cossacks captured his orders. Bennigsen stood at Eylau, and on 7–8 February 1807 fought what Rose calls the bloodiest battle in Europe since Malplaquet. Augereau’s corps, attacking in a snowstorm, was wrecked. Bennigsen withdrew when Ney arrived, and the French were too exhausted to pursue.",
        evidence: "fact",
        studies: ["eylau"],
        refs: [
          { source: 1, locator: "ch. 26" },
          { source: 0, locator: "§§ 20–24" },
        ],
      },
      {
        title: "Friedland and Tilsit",
        text: "In the spring Napoleon rebuilt his army while Danzig was besieged and surrendered. In June Bennigsen attacked Ney, then fell back to an entrenched camp at Heilsberg, where he beat off the French with heavy loss before retreating again. Trying to get between Napoleon and Königsberg, he crossed the Alle at Friedland, and on 14 June, the anniversary of Marengo, his army was trapped against the river and destroyed. Königsberg fell the next day. At Tilsit on 7 July Russia made peace and a secret alliance with France. Prussia’s Polish lands became the Duchy of Warsaw under the King of Saxony, Danzig became a free city with a French garrison, and Prussia kept only Silesia and its old lands between the Elbe and the Niemen.",
        evidence: "fact",
        studies: ["friedland"],
        refs: [
          { source: 1, locator: "ch. 26, ch. 27" },
          { source: 0, locator: "§§ 24–25" },
        ],
      },
      {
        title: "Why Prussia fell",
        text: "The Britannica blames the Prussian generals for letting their army be beaten piecemeal, though its men fought well, and finds a deeper cause in the divorce of the army from the nation: Prussian troops starved among civilians the law protected, and townspeople welcomed the French pursuers. Rose writes that Prussia was overthrown before the first shot was fired. Hohenlohe’s NDB biographer credits his personal courage but finds no clear strategic idea. In Poland the same Britannica article shows the limits of the French system, when Napoleon found for the first time that he had asked more than his men could give.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 0, locator: "§§ 12, 17, 19, 23" },
          { source: 1, locator: "ch. 25" },
          { source: 2 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "Rose dates Davout’s entry into Berlin to 25 October, the Britannica to the 26th. The Britannica dates the fall of Danzig to 5 May and the attack at Heilsberg to 11 June; Rose gives 24 May and 10 June. Pultusk was claimed by the Russians as a drawn fight in their favour while Napoleon’s bulletin announced a brilliant victory. At Eylau each side minimized its own losses and magnified the enemy’s; Rose estimates about 25,000 out of action on each side from some 75,000 each.",
        evidence: "uncertainty",
        studies: ["eylau"],
        refs: [
          { source: 1, locator: "ch. 25, ch. 26" },
          { source: 0, locator: "§§ 19, 23–25" },
        ],
      },
    ],
    sources: [
      ebNapoleonic,
      rose,
      ndb(
        "33338",
        "Hohenlohe-Ingelfingen, Friedrich Ludwig Fürst zu — Günter Richter (Neue Deutsche Biographie 9, 1972)",
      ),
    ],
  },
  "war-of-the-fifth-coalition": {
    summary:
      "Austria’s war of 1809: an offensive into Bavaria turned back around Eckmühl, Vienna taken, Napoleon’s first defeat at Aspern-Essling and the Austrian defeat at Wagram, ending in the Treaty of Schönbrunn.",
    narrative: [
      {
        title: "Austria rearms",
        text: "After Austerlitz, Rose writes, Napoleon had neither won Austria nor crushed it. Under the minister Stadion and with the Archduke Charles’s army reforms, Austria prepared to strike while Napoleon’s best troops were in Spain. Its NDB biographer says Charles, who had favoured a long peace and even an alliance with France, yielded unwillingly to the war party. The 1911 Britannica notes that the Austrians had adopted French skirmishers and columns but that their corps commanders still lacked independence and their orders moved slowly. Napoleon called up the conscripts of 1810 early and ordered his army to concentrate between Regensburg, Landshut, Augsburg and Donauwörth by 15 April, sending Berthier ahead to command until he arrived.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 30" },
          { source: 2 },
          { source: 0, locator: "§§ 26–27" },
        ],
      },
      {
        title: "Berthier’s gap",
        text: "On 9 April the Austrian main army crossed the Inn, and two more corps advanced from Bohemia on Regensburg; on 6 April Charles had proclaimed that the freedom of Europe had taken refuge under Austria’s banners. Berthier misread his instructions and held Davout at Regensburg while sending Lefebvre back toward Landshut, opening a gap of seventy-six miles between the French wings. Napoleon reached Donauwörth early on 17 April, reprimanded Berthier and began drawing the army together on Ingolstadt. The Austrians, slow and uncertain where the French were, moved toward Regensburg to unite with their Bohemian corps instead of striking either wing.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§§ 28–29" },
          { source: 1, locator: "ch. 30" },
        ],
      },
      {
        title: "Eckmühl and the road to Vienna",
        text: "In five days of fighting the French drove the Austrian left wing south toward Landshut and then, on 22 April, turned north and beat Charles at Eckmühl; the Britannica notes that the French marched seventeen to nineteen miles that day against the Austrians’ ten. Napoleon halted the pursuit when his corps commanders protested their men’s fatigue, and Charles crossed to the north bank of the Danube. Regensburg was stormed on the 23rd, Napoleon being slightly wounded. Charles retreated through Bohemia while Hiller, on the south bank, checked the French at Ebelsberg at a cost to them of 4,000 men. Vienna fell in mid-May.",
        evidence: "fact",
        studies: ["eckmuhl"],
        refs: [
          { source: 0, locator: "§§ 29–31" },
          { source: 1, locator: "ch. 30" },
        ],
      },
      {
        title: "Aspern-Essling",
        text: "Charles gathered his army on the far bank opposite Vienna and let the French cross by the island of Lobau. On 21–22 May he defeated them at Aspern and Essling, a defeat the Britannica calls the first ever inflicted on Napoleon; the bridges behind the French were broken by the flooded river, and Lannes was mortally wounded. More than 100,000 men and at least 20,000 wounded crowded onto Lobau. Napoleon’s generals advised retreat; he decided to stay and renew the attack. Rose thinks a more ruthless Austrian commander might have driven the French into the river.",
        evidence: "fact",
        studies: ["aspern-essling"],
        refs: [
          { source: 0, locator: "§ 32" },
          { source: 1, locator: "ch. 30" },
          { source: 2 },
        ],
      },
      {
        title: "Wagram",
        text: "For six weeks Napoleon turned Lobau into a fortress and brought up every available corps, among them Eugène’s army from Italy, which had beaten the Archduke John at Raab. On the stormy night of 4 July his bridges were thrown across on the east side of the island while a cannonade held attention on the north, outflanking the Austrian earthworks. At Wagram on 5–6 July Charles’s right drove back Masséna, but Macdonald broke into his centre and Davout took Neusiedel on the left. The Archduke John, ordered up from Pressburg, arrived too late. The Austrians retreated, leaving few unwounded prisoners and only nine guns. An armistice was agreed at Znaim, after a last action there on 11 July.",
        evidence: "fact",
        studies: ["wagram"],
        refs: [
          { source: 1, locator: "ch. 30" },
          { source: 0, locator: "§ 32" },
          { source: 2 },
        ],
      },
      {
        title: "The Peace of Schönbrunn",
        text: "Charles gave up his command on 23 July. Britain’s expedition to Walcheren failed, and the risings in Germany led by Schill and the Duke of Brunswick were crushed. By the Treaty of Schönbrunn on 14 October Austria recognized Joseph Bonaparte as King of Spain, gave Salzburg and the Innviertel for Bavaria and ceded lands in Friuli, Carinthia and Carniola to France. The Tyrolese, who had risen for the Emperor Francis, were abandoned; Hofer was taken and shot at Mantua on Napoleon’s order. Metternich replaced Stadion and, Rose writes, chose a policy of tacking and flattering; the marriage of Napoleon to the Archduchess Marie Louise followed in 1810.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 1, locator: "ch. 30" }],
      },
      {
        title: "A costlier kind of victory",
        text: "Rose judges that Austria was both too late and too soon: too late to catch the French leaderless, too soon to profit from its reforms. He calls Wagram one of the greatest battles in the number of men engaged and one of the least decisive, and sees in the panic of French conscripts at its close a decline in the Grande Armée. The Britannica says the campaign shook the marshals’ faith in Napoleon’s judgement and deepened French opposition to conscription. Charles’s NDB biographer portrays a commander who met Napoleon mainly on the defensive and lived under the overwhelming impression of his opponent.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 30" },
          { source: 0, locator: "§ 33" },
          { source: 2 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "The Britannica has Murat enter Vienna on 12 May; Rose dates its surrender to the 13th. The Britannica puts 200,000 French within call by the end of June, Rose 180,000 at Wagram. The older ADB article on the same page as the NDB entry dates the armistice of Znaim to 12 July, after the action of the 11th. Rose says Charles sent Napoleon a request for peace after his defeats in Bavaria; neither German biography mentions it.",
        evidence: "uncertainty",
        studies: [],
        refs: [
          { source: 0, locator: "§§ 31–32" },
          { source: 1, locator: "ch. 30" },
          { source: 2 },
        ],
      },
    ],
    sources: [
      ebNapoleonic,
      rose,
      ndb(
        "57317",
        "Karl, Erzherzog von Österreich — Johann Christoph Allmayer-Beck (Neue Deutsche Biographie 11, 1977), with Adam Wolf’s ADB article (1882)",
      ),
    ],
  },
  "russian-campaign-of-1812": {
    summary:
      "Napoleon’s invasion of Russia in 1812: the long Russian retreat, Smolensk and Borodino, the occupation and burning of Moscow, and the retreat that destroyed the Grande Armée.",
    narrative: [
      {
        title: "The road to war",
        text: "Rose traces the break between Napoleon and Alexander through the years after Tilsit: Russia’s imperfect observance of the Continental System, the enlargement of the Duchy of Warsaw in 1809 and Napoleon’s ambiguity about Poland, and the Tsar’s refusal of his sister’s hand. In 1812 Napoleon gathered an enormous army drawn from France, the Confederation of the Rhine, Italy, Poland and smaller states, with Austrian and Prussian contingents on its flanks. The Russians planned to give ground. Barclay de Tolly, the war minister commanding the First Army, argued for avoiding a decisive battle and drawing the enemy into the country, a policy that, his NDB biographer notes, exposed him as a foreigner to court intrigue; Rose adds that Scharnhorst had advised the Tsar on the same lines.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 32" },
          { source: 3 },
          { source: 0, locator: "§ 34" },
        ],
      },
      {
        title: "Into Lithuania",
        text: "The Grande Armée crossed the Niemen near Kovno at the end of June and took Vilna. The 1911 Britannica describes the damage done in the first days: green fodder gave the horses colic and cost the mounted arms a third of their strength in ten days, men died of sunstroke and straggling began. Supplies from Danzig were lost to British cruisers or used up by the transport horses, and the troops lived by marauding. Jerome, slow at Grodno, let Bagration’s Second Army escape and gave up his command. Barclay fell back to the camp at Drissa and then to Vitebsk, refusing battle each time the French closed. The Britannica reckons that in five weeks the army had lost at least a third of its strength.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§ 35" },
          { source: 1, locator: "ch. 32" },
        ],
      },
      {
        title: "Smolensk and Borodino",
        text: "The two Russian armies united near Smolensk. The French attacked the city on 16 August; the Russians held its old walls and withdrew on the night of the 17th, having cost the French, by Rose’s count, 12,000 killed or wounded. Napoleon had told Metternich he would not go beyond Smolensk that year, but the hope of a decisive battle drew him on. Wilson, the British commissioner with the Russian army, describes the discontent at the abandonment of city after city, until on 29 August Kutuzov superseded Barclay. Kutuzov stood at Borodino, and on 7 September Napoleon attacked the Russian centre and left head-on. The Russians were driven back but not broken, and Napoleon did not commit his Guard. Bagration was mortally wounded.",
        evidence: "fact",
        studies: ["smolensk-1812", "borodino"],
        refs: [
          { source: 0, locator: "§§ 36–37" },
          { source: 1, locator: "ch. 32" },
          { source: 2 },
        ],
      },
      {
        title: "Moscow",
        text: "Kutuzov reported to the Tsar that the enemy had not gained an inch of ground and was made a field marshal; Wilson calls the despatch uncandid, since the army was already retreating. At a council at Fili on 13 September, Wilson writes, Barclay spoke for retreat and Bennigsen for a battle, and Kutuzov decided to give up Moscow without fighting. Napoleon entered on 14 September. Rose notes that the people and stores were gone and that the governor, Rostopchin, had released the prisoners and removed the fire engines; fires broke out and burned for days. Napoleon sent overtures to the Tsar, and General Lauriston to Kutuzov’s camp on 4 October, but Alexander kept his vow not to treat while a French soldier stood on Russian soil.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 2 },
          { source: 1, locator: "ch. 32" },
          { source: 0, locator: "§ 38" },
        ],
      },
      {
        title: "Maloyaroslavets",
        text: "On 18 October the Russians surprised Murat’s advanced guard at Tarutino. Napoleon had already decided to leave; he marched out on the 19th, south-west toward Kaluga and the unravaged country. At Maloyaroslavets on 24 October Eugène’s corps fought its way into the town against Dokhturov. Wilson says Kutuzov, with over 80,000 men in position, announced that he would finish the war there, but in the night ordered a withdrawal and on the 26th fell back fifteen miles toward Kaluga, leaving the way open. Napoleon, for his part, turned north to the Smolensk road, through the country the armies had already stripped on the way to Moscow.",
        evidence: "fact",
        studies: ["maloyaroslavets"],
        refs: [
          { source: 2 },
          { source: 0, locator: "§ 38" },
          { source: 1, locator: "ch. 32" },
        ],
      },
      {
        title: "Retreat to the Berezina",
        text: "Kutuzov followed on a parallel road, leaving the Cossacks and his advanced guards to harass the columns, and winter weather set in during the first week of November. The army reached Smolensk with, the Britannica says, not more than 50,000 men, rested from 9 to 14 November, and fought its way past the Russians at Krasnoi, where Ney’s rearguard was cut off and rejoined with 800 of its 6,000 men. Chichagov’s army from the south then seized the bridge at Borisov on the Berezina and burned it. A ford was found upstream at Studianka; Eblé’s pontonniers built bridges, finished on the afternoon of 26 November, and Oudinot, Victor and Ney held off attacks on both banks until the last organized troops crossed on the 28th. Thousands of stragglers were left behind.",
        evidence: "fact",
        studies: ["berezina"],
        refs: [
          { source: 0, locator: "§§ 39–40" },
          { source: 1, locator: "ch. 32" },
        ],
      },
      {
        title: "The end of the Grande Armée",
        text: "On 5 December, at Smorgoni, Napoleon handed the command to Murat and left for Paris to raise a new army. The cold now set in hard; Vilna was abandoned in panic. Rose says that of the army that had crossed the Niemen only some 20,000 men recrossed it in the middle of December, while the Austrian and Prussian contingents fell back almost intact. On 30 December the Prussian corps under Yorck signed the Convention of Tauroggen with the Russians. Wilson records that Kutuzov’s main army followed at an average of about ten miles a day and reached the Berezina only on 1 December.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 32" },
          { source: 0, locator: "§ 41" },
          { source: 2 },
        ],
      },
      {
        title: "Weather, discipline and Kutuzov",
        text: "The 1911 Britannica argues that the disaster came from the army’s lack of march discipline more than from the weather: the frost came late, and the Berezina was not frozen when the army crossed it. Rose sees the root in Napoleon’s belief that Moscow was the heart of Russia, and in his refusal to halt at Smolensk. Wilson blames Kutuzov for letting the French escape after Maloyaroslavets and on the Dnieper, and Rose agrees that at Vyazma and Krasnoi a more pugnacious pursuit might have destroyed the army. The Britannica credits the Russian retreats of the summer, so unpopular at the time, with wearing the invaders down.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 0, locator: "§ 39" },
          { source: 1, locator: "ch. 32" },
          { source: 2 },
          { source: 3 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "Rose counts some 600,000 men in the invading host, including reserves and flank contingents; the Britannica gives 450,000 along the Niemen in June. The crossing is dated to 23 June by Rose and 24 June by the Britannica. At Borodino the Britannica has 128,000 French against 110,000 Russians, and losses of 25,000 French and 38,000 Russians; Rose has about 125,000 French and puts the Russian loss near 40,000, with the French nearly as heavy. Rose dates the first winter storm to 6 November, the Britannica the first frost to 27 October and sharp cold to 8 November. Wilson, a British officer who pressed for a more aggressive war, is openly hostile to Kutuzov, and his judgements are given as his.",
        evidence: "uncertainty",
        studies: ["borodino"],
        refs: [
          { source: 1, locator: "ch. 32" },
          { source: 0, locator: "§§ 34–39" },
          { source: 2 },
        ],
      },
    ],
    sources: [
      ebNapoleonic,
      rose,
      wilson,
      ndb(
        "7305",
        "Barclay de Tolly, Michael Andreas Fürst von — Georg von Rauch (Neue Deutsche Biographie 1, 1953)",
      ),
    ],
  },
  "german-campaign-of-1813": {
    summary:
      "The War of Liberation in Germany, 1813: Napoleon’s new army won at Lützen, Bautzen and Dresden, but Austria joined the coalition and the allies closed on him at Leipzig.",
    narrative: [
      {
        title: "Prussia changes sides",
        text: "The Convention of Tauroggen became, in the 1911 Britannica’s words, the starting point of Prussia’s regeneration. Rose describes the chancellor Hardenberg deceiving the French and taking the king to Breslau, where Frederick William found himself carried along by national feeling; Prussia allied with Russia and declared war. On 28 February Blücher was given command of the field troops in Silesia, with Scharnhorst as chief of staff and Gneisenau as quartermaster-general, and the Landwehr was raised. Austria, Napoleon’s ally by marriage, declared itself neutral and offered to mediate.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§ 42" },
          { source: 1, locator: "ch. 33" },
          { source: 2 },
          { source: 3 },
        ],
      },
      {
        title: "A new army",
        text: "In less than half a year, Rose writes, Napoleon raised an army nearly as large as the one lost in Russia, though most of it was young and untrained and its cavalry was weak. The Britannica notes that he had so far drawn relatively lightly on France, used the National Guard cohorts as a reservoir, and levied heavily in the Rhine Confederation and Italy; by the end of March more than 200,000 men were moving toward the Elbe. Eugène, with the remnant of the Grande Armée, had fallen back from Posen to the Elbe, leaving French garrisons isolated in Danzig and the fortresses of the Oder.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 33" },
          { source: 0, locator: "§§ 42–43" },
        ],
      },
      {
        title: "Lützen and Bautzen",
        text: "On 2 May the Russian and Prussian armies under Wittgenstein attacked what they took to be Napoleon’s advanced guard near Lützen and found his main army. He let his leading troops absorb the attack while he formed a reserve, then broke the allied line with massed artillery; for lack of cavalry there was no pursuit. Scharnhorst was mortally wounded. The allies gave up Dresden and took a fortified position at Bautzen, where on 20–21 May they were driven out but retreated in good order, leaving no trophies. On 26 May Blücher’s cavalry ambushed a French division at Haynau.",
        evidence: "fact",
        studies: ["lutzen-1813", "bautzen"],
        refs: [
          { source: 0, locator: "§§ 44–46" },
          { source: 1, locator: "ch. 33" },
          { source: 3 },
        ],
      },
      {
        title: "The armistice and Austria",
        text: "Napoleon then agreed to a suspension of arms, which the Britannica calls perhaps the gravest military error of his career and Rose his own death warrant. The allies used the summer well. News of Wellington’s victory at Vitoria arrived; at Dresden on 26 June Napoleon lost his temper with Metternich; and at Trachenberg on 12 July the allies agreed a common plan with an army of 200,000 in Bohemia. Gneisenau, governor-general of Silesia during the truce, organized the Landwehr and Landsturm. When the peace congress at Prague expired without agreement on 10 August, Austria joined the coalition. Rose gives the allies close to half a million men.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§ 46" },
          { source: 1, locator: "ch. 33, ch. 34" },
          { source: 3 },
        ],
      },
      {
        title: "Dresden and the defeats around it",
        text: "Napoleon held the line of the Elbe and sent Oudinot against Berlin. He advanced on Blücher, who drew back, then hurried back when Schwarzenberg’s army came down on Dresden; the Britannica says his main body marched ninety miles in seventy-two hours. On 26–27 August he won his last great victory there, crushing the Austrian left in pouring rain. His lieutenants were beaten everywhere else. Bülow defeated Oudinot’s army at Grossbeeren on 23 August, Blücher routed Macdonald on the Katzbach on the 26th, Vandamme’s corps was destroyed at Kulm at the end of the month, and Ney was beaten at Dennewitz on 6 September. Rose counts five battles lost by the marshals in a fortnight.",
        evidence: "fact",
        studies: ["dresden"],
        refs: [
          { source: 0, locator: "§§ 47–49" },
          { source: 1, locator: "ch. 35" },
          { source: 2 },
        ],
      },
      {
        title: "Closing on Leipzig",
        text: "Napoleon spent September moving between Dresden and the passes without bringing on a battle. Early in October Blücher marched north and crossed the Elbe at Wartenburg on the 3rd, joining Bernadotte’s Army of the North, while Schwarzenberg came round from Bohemia. Bavaria made terms with Austria; Rose notes that Napoleon had already decided on his move to Leipzig before he heard of it. After days of irresolution at Düben, the Britannica says, he concentrated around Leipzig.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 2 },
          { source: 1, locator: "ch. 35" },
          { source: 0, locator: "§§ 50–51" },
        ],
      },
      {
        title: "Leipzig and Hanau",
        text: "On 16 October Napoleon attacked Schwarzenberg south of Leipzig but could not break through, while Blücher took Möckern to the north. On the 18th the allies, now around 300,000 strong by Rose’s count, attacked from all sides; Bernadotte closed the gap to the north-east, and in the afternoon Saxon troops went over to the allies. The French retreated through the city on the 19th, and the bridge over the Elster was blown too early, trapping the rearguard: Rose counts thirty generals, 33,000 men and 260 guns taken. On the road to the Rhine, the Bavarian general Wrede tried to bar the way at Hanau on 30–31 October and was swept aside. The army crossed the Rhine at Mainz early in November, leaving some 190,000 men in German fortresses.",
        evidence: "fact",
        studies: ["leipzig", "hanau"],
        refs: [
          { source: 0, locator: "§§ 52–53" },
          { source: 1, locator: "ch. 35" },
        ],
      },
      {
        title: "Out-generalled",
        text: "Rose writes that Napoleon was out-generalled: he staked everything on the Elbe, a river line that could be turned as Mack’s Iller had been in 1805, while the allies aimed from the start at his communications through Leipzig. He gives the credit for the execution to Blücher and Gneisenau. Gneisenau’s NDB biographer describes Blücher’s headquarters as a political force in its own right, pressing against diplomatic caution for the complete defeat of Napoleon. The Britannica stresses Napoleon’s lack of cavalry and his strange irresolution after Dresden.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 35" },
          { source: 3 },
          { source: 0, locator: "§§ 46–51" },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "The Britannica says the French, still more than 100,000 strong, soon outdistanced the pursuit after Leipzig; Rose says 40,000 armed men, with a larger crowd of unarmed stragglers, crossed at Mainz. The Britannica gives Wrede 50,000 men at Hanau and calls the French artillery’s work there practically the destruction of his force. Rose rejects the claim by some admirers that only Bavaria’s defection stopped Napoleon marching north. Blücher’s NDB biographer counts Lützen and Bautzen as honourable defeats for the Prussians.",
        evidence: "uncertainty",
        studies: ["hanau"],
        refs: [
          { source: 0, locator: "§ 53" },
          { source: 1, locator: "ch. 35" },
          { source: 2 },
        ],
      },
    ],
    sources: [ebNapoleonic, rose, blucher, gneisenau],
  },
  "campaign-in-france-1814": {
    summary:
      "The defence of France in early 1814: Napoleon’s victories over divided allied armies between the Marne and the Seine, the defeats at Laon and Arcis-sur-Aube, the fall of Paris and the first abdication.",
    narrative: [
      {
        title: "Across the Rhine",
        text: "On 1 December 1813 the allies declared that they made war on Napoleon’s domination, not on France; at Frankfurt they had suggested peace on the Rhine and the Alps. After a long halt, the party of Blücher and the fighting generals prevailed, and in the night of 1 January the Army of Silesia crossed the Rhine at Kaub, while Schwarzenberg’s much larger army came through Switzerland and Bernadotte’s army followed through the Netherlands. The Britannica says Napoleon could collect fewer than 80,000 men for the eastern frontier, with over 100,000 held by Wellington in the south. Rose describes him raising National Guards and conscripts and spending 55 million francs from his private treasure; Murat joined Austria on 11 January.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 36" },
          { source: 0, locator: "§ 54" },
          { source: 2 },
        ],
      },
      {
        title: "Brienne and La Rothière",
        text: "Napoleon attacked Blücher at Brienne on 29 January to keep him from joining Schwarzenberg, and drove him from the town. Blücher fell back toward Bar-sur-Aube, was joined by the Austrian advanced guard and turned on Napoleon at La Rothière. In snow and mud the French artillery was of little use, and at nightfall Napoleon withdrew to Troyes. Rose describes him entering Troyes to almost no cheers, with his army cast down by defeat and hunger.",
        evidence: "fact",
        studies: ["la-rothiere"],
        refs: [
          { source: 1, locator: "ch. 36" },
          { source: 0, locator: "§ 54" },
          { source: 2 },
        ],
      },
      {
        title: "The Six Days",
        text: "Blücher then moved down the Marne toward Paris with his corps widely separated for food and shelter, while Schwarzenberg advanced slowly along the Seine. From behind the Seine Napoleon struck north with fewer than 30,000 men into the gaps between Blücher’s corps and beat them in turn between 10 and 14 February, at Champaubert, Montmirail, Château-Thierry and Vauchamps. Rose says the Army of Silesia lost some 15,000 men in four days, and compares the strokes with Lonato and Castiglione. Blücher’s NDB biographer notes that he and Gneisenau then prevented the general retreat already being considered at allied headquarters.",
        evidence: "fact",
        studies: ["six-days-campaign"],
        refs: [
          { source: 0, locator: "§ 55" },
          { source: 1, locator: "ch. 36" },
          { source: 2 },
        ],
      },
      {
        title: "Montereau and Châtillon",
        text: "Schwarzenberg’s columns had meanwhile crossed the Seine at Bray and pushed toward Fontainebleau. Napoleon turned south, beat them at Mormant on 17 February and at Montereau on the 18th, where Pajol’s cavalry took the bridge, and the allied main army fell back to Bar-sur-Aube. At the Congress of Châtillon, opened on 5 February, the allies demanded the frontiers of 1791; Napoleon, encouraged by his victories, would not give up Belgium and the Rhine. By the Treaty of Chaumont, dated 1 March, Britain, Russia, Austria and Prussia bound themselves not to make a separate peace, to keep 150,000 men each in the field and, in Britain’s case, to pay £5 million in subsidies. The congress ended on 19 March.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 36, ch. 37" },
          { source: 0, locator: "§ 55" },
        ],
      },
      {
        title: "Laon",
        text: "Blücher took the offensive again toward Paris and, when Napoleon came after him, withdrew north across the Marne. Soissons surrendered to the allies on 3 March, letting him cross the Aisne and join the northern army. On 7 March Napoleon drove back the Russians on the plateau of Craonne at a cost of about 7,000 men to each side, and on 9–10 March he attacked the united army, now over 100,000 strong, at Laon and was defeated. Blücher fell ill with an eye infection and depression, and there was no pursuit; Napoleon retired to Reims.",
        evidence: "fact",
        studies: ["laon"],
        refs: [
          { source: 0, locator: "§ 56" },
          { source: 1, locator: "ch. 37" },
          { source: 2 },
        ],
      },
      {
        title: "Arcis-sur-Aube",
        text: "Schwarzenberg had begun to advance again, and fell back when Napoleon moved against his flank. Learning that Napoleon had crossed the Aube at Plancy with fewer than 20,000 men, Rose writes, he turned on him with about 100,000. On 20–21 March Napoleon fought at Arcis-sur-Aube, exposing himself freely, and on the 21st drew off.",
        evidence: "fact",
        studies: ["arcis-sur-aube"],
        refs: [
          { source: 1, locator: "ch. 37" },
          { source: 0, locator: "§ 56" },
        ],
      },
      {
        title: "Paris and the abdication",
        text: "Napoleon now marched east toward St Dizier to rally the garrisons of Lorraine, raise the country and fall on the allied communications. His plans fell into allied hands, together with letters describing the discontent in Paris, and the allies decided to ignore him and march on the capital. Marmont and Mortier were beaten at La Fère-Champenoise on the 25th, and after a day’s fighting on the heights north-east of Paris on 30 March, Marmont asked for terms and the city surrendered. Blücher, ill, gave up his command on 2 April. The Senate set up a provisional government under Talleyrand; on the night of 4–5 April Marmont’s corps was led into the allied lines, and Napoleon abdicated and accepted Elba.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 0, locator: "§ 57" },
          { source: 1, locator: "ch. 37" },
          { source: 2 },
        ],
      },
      {
        title: "A brilliant defence",
        text: "Rose calls the 1814 campaign the most glorious of Napoleon’s career, an example of a small undivided force striking at the separated parts of a larger one. The Britannica, writing of his generalship as a whole, says that in 1814 and 1815 he rose to each occasion in the presence of the enemy and lapsed between them. On the allied side, Blücher’s and Gneisenau’s biographers credit their headquarters with holding the coalition to the march on Paris against Austrian caution, and Rose gives Castlereagh the credit for the Treaty of Chaumont that kept the alliance together.",
        evidence: "interpretation",
        studies: [],
        refs: [
          { source: 1, locator: "ch. 36, ch. 37" },
          { source: 0, locator: "Military Character of Napoleon" },
          { source: 3 },
          { source: 2 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "The Britannica dates the battle of La Rothière to 2 February; Rose places it three days after Brienne and Blücher’s NDB biographer on 1 February, calling it a brilliant victory, while the Britannica describes fighting that simply ceased at nightfall. The Britannica attributes the Six Days’ victories to Montmirail against Sacken, Champaubert against Yorck and Étoges against Blücher; Rose describes Montmirail, Château-Thierry and Vauchamps. The Britannica has Paris give way on 31 March, Rose on the evening of the 30th.",
        evidence: "uncertainty",
        studies: ["la-rothiere"],
        refs: [
          { source: 0, locator: "§§ 54–57" },
          { source: 1, locator: "ch. 36, ch. 37" },
          { source: 2 },
        ],
      },
    ],
    sources: [ebNapoleonic, rose, blucher, gneisenau],
  },
  "waterloo-campaign": {
    summary:
      "The campaign of the Hundred Days in Belgium, June 1815: Napoleon struck between Wellington and Blücher, beat the Prussians at Ligny and was defeated at Waterloo by the two allied armies together.",
    narrative: [
      {
        title: "The Hundred Days",
        text: "Napoleon sailed from Elba with about a thousand men and landed near Cannes on 1 March 1815. At Laffrey, Rose writes, the first royal battalion sent against him refused to fire, and the army went over; Ney, who had promised to bring him back in an iron cage, declared for him on 14 March, and the Bourbons fled Paris. The allies resolved on 13 March to destroy him and bound themselves to put 150,000 men each in the field. The 1911 Britannica says he had by June raised 360,000 men for the defence of France, half of them fit for field service, but faced Austrian and Russian armies gathering on the Rhine and a revolt in the Vendée.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1, locator: "ch. 38" }],
      },
      {
        title: "A blow at the hinge",
        text: "The allies meant Wellington’s and Blücher’s armies to wait in Belgium until the Austrians and Russians reached the Rhine about 1 July. Wellington’s army of about 93,000, of many nationalities, was spread west of the Brussels–Charleroi road with its base at Ostend; Blücher’s Prussians, about 90,000 by Rose’s figure, lay east of it around Namur. Napoleon decided to strike at Charleroi, the hinge between them, before the other armies came up, and by 14 June he had concentrated 124,000 men close to the frontier without the allies noticing. The Britannica faults him for leaving 56,500 men in secondary theatres, and for choosing Soult as chief of staff and Ney and Grouchy as wing commanders.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1, locator: "ch. 39" }],
      },
      {
        title: "Across the Sambre",
        text: "On 15 June the French crossed the Sambre at Charleroi and Marchienne. Zieten’s Prussian corps fell back fighting toward Fleurus, buying a day for Blücher to concentrate; Bülow’s corps did not arrive in time because Gneisenau’s orders to it were too vague to convey the urgency. Wellington learned of the French advance only in the afternoon and, fearing a move round his right, concentrated slowly. At Quatre Bras a Dutch-Belgian brigade under Prince Bernhard stayed at the crossroads on its own initiative and held off Ney’s advance guard. The Britannica also tells how a report from Wellington’s intelligence officer in France was held back at the outposts and reached him only on the 18th.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1, locator: "ch. 39" }],
      },
      {
        title: "Ligny and Quatre Bras",
        text: "On 16 June Blücher stood at Ligny with about 83,000 men against Napoleon’s 71,000, counting on Wellington’s conditional promise of help. Napoleon meant Ney to hold Wellington at Quatre Bras and send part of his wing against the Prussian flank. D’Erlon’s corps, called away by an aide, marched toward Ligny, was recalled by Ney and fought in neither battle. After hours of fighting for the villages Napoleon broke the Prussian centre in the evening; Blücher was pinned under his fallen horse. The Britannica gives the Prussian loss as about 12,000 men and 21 guns and the French as 8,500. At Quatre Bras Wellington, reinforced through the afternoon, held the crossroads and by nightfall had pushed Ney back to his start line.",
        evidence: "fact",
        studies: ["ligny"],
        refs: [{ source: 0 }, { source: 1, locator: "ch. 39" }, { source: 3 }],
      },
      {
        title: "To Wavre and Mont-Saint-Jean",
        text: "That night Gneisenau, standing in for Blücher, ordered the Prussian retreat north toward Tilly and Wavre instead of east toward their base, keeping the two allied armies within reach of each other. On the 17th Napoleon, believing the Prussians beaten and retreating toward Namur, sent Grouchy with 33,000 men and 110 guns to follow them, and Grouchy marched slowly to Gembloux. Ney did nothing to hold Wellington, who withdrew in a thunderstorm to a ridge at Mont-Saint-Jean, south of Waterloo, and in the early hours of the 18th received Blücher’s promise to march to his aid.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }, { source: 1, locator: "ch. 39" }],
      },
      {
        title: "Waterloo",
        text: "On 18 June Wellington held the ridge with about 67,600 men and 156 guns, with garrisons in Hougoumont and La Haye Sainte, having left 17,000 more at Hal and Tubize to guard his right. Napoleon, with 74,000 men and 246 guns, waited until late morning for the ground to dry. The attack on Hougoumont, D’Erlon’s assault on the centre broken by the British heavy cavalry, and the massed cavalry charges against the squares all failed. Bülow’s Prussian corps, sighted early in the afternoon, attacked the French right at Plancenoit from about half past four, drawing in Lobau and the Young Guard. La Haye Sainte fell after six, but Zieten’s corps arrived on Wellington’s left, and about eight the Guard’s attack was repulsed. The French army broke, and Gneisenau led the Prussian pursuit through the night.",
        evidence: "fact",
        studies: ["waterloo"],
        refs: [
          { source: 0 },
          { source: 1, locator: "ch. 40" },
          { source: 2 },
          { source: 3 },
        ],
      },
      {
        title: "Wavre and the end",
        text: "Grouchy, urged by Gérard to march to the sound of the guns, kept on to Wavre, where Thielmann’s corps held him all day; Napoleon’s order to come west arrived too late. Hearing of Waterloo, Grouchy retreated skilfully to Namur and Paris. The Britannica puts the French loss on the 18th at over 40,000 men and almost all their artillery, Wellington’s at over 15,000 and the Prussians’ at 7,000. Napoleon abdicated again and in July surrendered to the British, who sent him to St Helena. The Prussians entered Paris in early July.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }, { source: 3 }],
      },
      {
        title: "Why Napoleon lost",
        text: "The Britannica lists the causes: an army too small for its task, a Napoleon physically less than he had been, Ney’s failure to hold Wellington on the 17th, Grouchy’s failure to keep the Prussians away, Blücher’s loyalty to his ally and Wellington’s firmness. Rose stresses the lack of pursuit on the 17th, Napoleon’s contempt for Wellington, his underestimate of the Prussians and his vague orders to Grouchy. Gneisenau’s NDB biographer calls him the real conqueror of Napoleon for his insistence on destroying the enemy army.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1, locator: "ch. 40" }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "The retreat to Wavre is the chief dispute. The Britannica thinks Gneisenau chose Wavre to restore his communications rather than to help Wellington, and credits Blücher and Grolmann with bringing the army to Waterloo. Rose thinks Gneisenau first aimed to reunite the Prussian wings but soon saw the chance of joining Wellington. Gneisenau’s NDB biographer says recent research shows he acted entirely in Blücher’s sense. The Britannica says Napoleon’s physical strength was impaired; Rose finds no trustworthy evidence of decline during the campaign. Rose, citing Houssaye, calls Napoleon’s claim that his cavalry drew Wellington’s 17,000 men to Hal a fabrication. Blücher’s biographer has him occupy Paris on 3 July, Gneisenau’s the Prussians enter it on 7 July.",
        evidence: "uncertainty",
        studies: ["waterloo"],
        refs: [
          { source: 0 },
          { source: 1, locator: "ch. 39, ch. 40" },
          { source: 2 },
          { source: 3 },
        ],
      },
    ],
    sources: [ebWaterloo, rose, gneisenau, blucher],
  },
};
