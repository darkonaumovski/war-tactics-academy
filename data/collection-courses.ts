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

const livCynoscephalae: Source = {
  title: "Cynoscephalae (197 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/cynoscephalae-197-bce/",
};
const polybius18: Source = {
  title: "Polybius, Histories 18.18–32 (Loeb translation)",
  publisher: "LacusCurtius, University of Chicago",
  url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/18%2A.html",
};
const livPydna: Source = {
  title: "Pydna (168 BCE), with Livy 44.40–42 (trans. Canon Roberts)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/pydna-168-bce/",
};
const polybius15: Source = {
  title: "Polybius, Histories 15.1–16 (Loeb translation)",
  publisher: "LacusCurtius, University of Chicago",
  url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/15%2A.html",
};
const livMassinissa: Source = {
  title: "Massinissa",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/person/massinissa/",
};
const livPharsalus: Source = {
  title:
    "Pharsalus (48 BCE), with Caesar, Civil War 3.88–99 (trans. McDevitte and Bohn)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/pharsalus-48-bce/",
};
const livActium: Source = {
  title: "Actium (31 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/actium-31-bce/",
};
const livCarrhae: Source = {
  title: "Carrhae (53 BCE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/carrhae-53-bce/",
};
const livTeutoburg: Source = {
  title: "Teutoburg Forest (9 CE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/teutoburg-forest-9-ce/",
};
const warwickBoudica: Source = {
  title: "Boudica's Defeat",
  publisher: "Warwick Classics Network, University of Warwick",
  url: "https://warwick.ac.uk/fac/arts/classics/warwickclassicsnetwork/romancoventry/resources/boudica/defeat",
};
const livJerusalem: Source = {
  title: "Titus' Siege of Jerusalem",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/concept/roman-jewish-wars/roman-jewish-wars-4/",
};
const livMaxentius: Source = {
  title: "Maxentius",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/person/maxentius/",
};
const livAdrianople: Source = {
  title: "Adrianople (378 CE)",
  publisher: "Livius.org (Jona Lendering)",
  url: "https://www.livius.org/articles/battle/adrianople/",
};
const dahmCatalaunian: Source = {
  title: "The battle of the Catalaunian Plains",
  publisher: "Osprey Publishing (Murray Dahm)",
  url: "https://www.ospreypublishing.com/uk/osprey-blog/2022/the-battle-of-catalaunians-plains",
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
  {
    slug: "rome-at-war",
    title: "Rome at War, 197 BCE–451 CE",
    level: "Intermediate",
    description:
      "Follow Roman armies from the Macedonian wars to the Huns: legion against phalanx, civil war, frontier defeats and revolts, and the late empire, read against sources that often served the victors.",
    lessons: [
      unit(
        "legion-against-phalanx",
        "Legion against phalanx: Cynoscephalae and Pydna",
        [
          "Explain why the Macedonian phalanx lost two battles it was built to win.",
          "Test Polybius's general verdict against the particular battles behind it.",
        ],
        [
          "At Cynoscephalae in 197 BCE neither commander chose the field. In fog, a Macedonian covering force met Roman cavalry and light infantry by chance, and each side fed in troops until both armies were committed. Philip V's right charged downhill and drove back the Roman left, but his left was still arriving on the ridge when Flamininus sent elephants and legions against it. A tribune, unnamed by Polybius, then took maniples from the pursuit and struck the victorious phalanx from behind.",
          "At Pydna in 168 Perseus sought level ground, after Aemilius Paullus had turned his line at the foot of Mount Olympus. A skirmish at the river drew in more and more troops, and the phalanx at first pushed the Romans back. As it lost its alignment, Aemilius broke the battle into many separate fights, sending units into the gaps, where the long pikes were useless at close quarters. Macedonia surrendered within days, and on the Senate's orders the army plundered Epirus and enslaved its people.",
          "Polybius concludes that the phalanx was almost irresistible from the front on level ground but could not adapt to rough terrain, attacks from several directions or a reserve. The studies treat this as an argument, not a law: it generalizes from an encounter in fog on broken ground, Plutarch credits Flamininus rather than a tribune with the decisive attack, and the accounts of Pydna differ on how the battle began.",
        ],
        ["cynoscephalae", "pydna"],
        [livCynoscephalae, polybius18, livPydna],
        [
          "Ground",
          "Cohesion of the phalanx",
          "Gaps and flanks",
          "Initiative of subordinates",
        ],
        "What, according to Polybius, could the phalanx not do?",
        [
          "Win a frontal fight on level ground",
          "Adapt to rough ground or to attacks from several directions",
          "Advance against infantry at all",
        ],
        1,
        "Polybius argues that the phalanx was formidable from the front on level ground but could not adapt to broken terrain, to attacks from several sides or to a reserve.",
        {
          prompt:
            "Is Polybius's verdict on the phalanx a lesson, or a generalization from two unusual battles?",
          guidance:
            "Separate what the narratives of Cynoscephalae and Pydna show from the general claim Polybius builds on them. Ask what part chance, fog and uneven ground played, and who made the decisive move at Cynoscephalae.",
        },
      ),
      unit(
        "cannae-to-zama",
        "From Cannae to Zama",
        [
          "Explain how Rome reversed the conditions of its defeat at Cannae.",
          "Distinguish what the sources show about Zama from what later readers infer.",
        ],
        [
          "At Cannae in 216 BCE a concentrated Roman attack on the Carthaginian centre left the flanks exposed: victorious Carthaginian cavalry returned against the Roman rear while infantry closed from the sides. Rome did not surrender. Livy's epitome records emergency recruitment and the refusal to ransom prisoners, and the war went on in other theatres.",
          "By 202 the cavalry balance had changed. The Numidian prince Massinissa, promised Roman support for his claim to the throne, had come over to Scipio, and Numidian horsemen who had served Carthage now rode with Rome. At Zama Scipio placed his maniples one behind another, leaving lanes for Hannibal's elephants, and the charge failed. Laelius and Massinissa drove the Carthaginian cavalry from the field; Scipio re-formed his lines before meeting Hannibal's veterans, and the infantry fought evenly until the Roman horse returned and struck from the rear.",
          "The Zama study concludes that Rome won by changing what had lost it Cannae: an alliance reversed the cavalry balance, and a formation was adapted to a specific threat. Livius reads Hannibal as trying to repeat Cannae and failing, a reading Polybius's narrative does not make explicit. The peace of 201 cost Carthage its fleet and a large indemnity; Massinissa's later encroachments led to the war that ended with the sack of Carthage in 146.",
        ],
        ["cannae", "zama"],
        [polybius15, livMassinissa],
        [
          "Defeat absorbed",
          "Allies change sides",
          "Formation adapted",
          "Cavalry returns",
        ],
        "What reversed the cavalry balance between Cannae and Zama?",
        [
          "A reform of the Roman citizen cavalry",
          "Hannibal's decision to leave his horsemen in Italy",
          "Massinissa's Numidians coming over to Rome",
        ],
        2,
        "Massinissa changed sides in return for Roman support for his claim, so Numidian horsemen who had served Carthage rode with Scipio at Zama.",
        {
          prompt:
            "Did Scipio learn from Cannae, or had the circumstances simply changed?",
          guidance:
            "Use Polybius's account of the lanes and the re-formed lines, and weigh it against the political bargain with Massinissa. Treat Livius's comparison with Cannae as an interpretation the narrative does not state.",
        },
      ),
      unit(
        "civil-war-land-and-sea",
        "Civil war on land and sea: Pharsalus and Actium",
        [
          "Explain how a reserve and a blockade decided two battles of the civil wars.",
          "Read a victor's account and a victor's propaganda critically.",
        ],
        [
          "In 48 BCE Caesar, short of supplies after his defeat at Dyrrhachium, needed a battle; Pompey's best course was delay, but Plutarch says his followers mocked his caution. At Pharsalus Pompey massed his cavalry, archers and slingers on his left. Caesar took one cohort from each legion of his third line and formed a fourth line behind his right. When Pompey's cavalry drove back Caesar's horse, the fourth line charged and routed it, cut down the archers and slingers, and wheeled onto the Pompeian left from behind.",
          "At Actium in 31 BCE the decision came before the fleets met. Agrippa's seizure of bases in the western Peloponnese cut Antony's supply lines; hunger wore down his army and allies deserted. Octavian refused battle while the blockade did its work. Antony chose to break out by sea rather than retreat overland; his centre broke through, Cleopatra's ships sailed through the gap and Antony followed, and his army went over to Octavian a week later.",
          "Both battles reach us through the winners. Caesar's account is that of a participant defending his cause: Plutarch gives far lower Pompeian losses and Dio describes a long, even fight without a reserve. Whether Antony's escape was a planned breakout or a flight is debated, and Augustan propaganda cast the civil war as a war against a foreign queen. Livius calls Pharsalus the end of the Roman Republic.",
        ],
        ["pharsalus", "actium"],
        [livPharsalus, livActium],
        [
          "Political pressure",
          "Supply and blockade",
          "Reserve against the main effort",
          "The victor's narrative",
        ],
        "What did Caesar's fourth line do at Pharsalus, in his own account?",
        [
          "It routed Pompey's cavalry and then struck his left from behind",
          "It stormed Pompey's camp before the battle began",
          "It held the river bank on Caesar's left",
        ],
        0,
        "Caesar read Pompey's main effort and posted a reserve against it; its rout of the cavalry exposed the Pompeian left to attack from the flank and rear.",
        {
          prompt:
            "How far can a history rely on Caesar's account of his own victory?",
          guidance:
            "Compare Caesar with Plutarch, who speaks of six reserve cohorts and places Pompey differently, and with Dio, who describes no reserve. Then ask how Augustan propaganda shaped the story of Actium.",
        },
      ),
      unit(
        "frontiers-and-revolts",
        "Frontiers and revolts: Carrhae, the Teutoburg Forest, Watling Street, Jerusalem",
        [
          "Explain how political choices made before the fighting shaped four battles on Rome's frontiers.",
          "Include the human cost of conquest and repression in a military explanation.",
        ],
        [
          "Two defeats show the limits of Roman power. At Carrhae in 53 BCE Surena's camel train of arrows kept his archers supplied, which Livius judges settled the battle, and an army without effective cavalry and missile troops of its own could not close with them. In 9 CE Varus, on Arminius's report, marched a column laden with baggage into hostile country; at Kalkriese it could not form ranks among its wagons and was attacked from a fortified slope. Three legions were destroyed, though Livius argues that the decision not to hold Germania predated the defeat.",
          "Boudica's revolt began with misgovernment: Tacitus says the Icenian kingdom was plundered, Boudica flogged and her daughters raped. Paulinus abandoned Londinium to preserve his army and accepted battle only on ground that narrowed the British front; once the attack was spent, the Roman wedge drove into a crowd whose wagons blocked its retreat, and Tacitus says no quarter was given. Famine followed, and a procurator's call for a milder policy led to Paulinus's replacement.",
          "At Jerusalem in 70 CE rival factions held the city. Titus turned from assault to blockade so that famine would do what the rams could not; people caught outside the walls were crucified in great numbers, and the city and its Temple were destroyed. Who decided the Temple's fate is disputed: Josephus, in Titus's service, blames a soldier, while Sulpicius Severus has Titus order it.",
        ],
        ["carrhae", "teutoburg", "watling-street", "jerusalem-70"],
        [livCarrhae, livTeutoburg, warwickBoudica, livJerusalem],
        [
          "Political cause",
          "Intelligence and route",
          "Ground and supply",
          "Cost to civilians",
        ],
        "According to Livius, what settled the battle at Carrhae?",
        [
          "The treachery of Crassus's guide",
          "Surena's camel train of arrows, which kept his archers supplied",
          "A Parthian night attack on the Roman camp",
        ],
        1,
        "Missile fire decides a battle only if it can be sustained; Livius treats the stories of treachery and the desert as later excuses.",
        {
          prompt:
            "In which of these four cases was the outcome shaped most by politics before any fighting began?",
          guidance:
            "Consider Crassus's ambitions, Varus's demands for tribute, the treatment of the Iceni and the factions in Jerusalem. Note that Tacitus and Velleius write from a Roman perspective and that Shahbazi doubts the story of treachery at Carrhae.",
        },
      ),
      unit(
        "the-late-empire",
        "The late empire: Milvian Bridge, Adrianople, the Catalaunian Plains",
        [
          "Explain how lines of retreat, intelligence and concentration decided three late Roman battles.",
          "Assess claims that a single battle was a turning point.",
        ],
        [
          "In 312 Maxentius left the walls of Rome to fight Constantine with the Tiber at his back. Lactantius attributes the choice to unrest in the city and an oracle; Eusebius describes the bridge of boats as a trap Maxentius had set. When his army broke, its only retreat was the bridge, which collapsed under the fugitives, and Maxentius drowned. Both Christian writers describe a sign Constantine adopted before the battle, though their versions differ.",
          "At Adrianople in 378 Valens attacked the Goths without waiting for Gratian's army, on a faulty scouting report and after a long march in the heat. Fritigern's negotiations, in Ammianus's view, bought time for the Gothic cavalry, whose return against a Roman army only partly deployed decided the battle. Valens was killed. Ammianus compared the disaster with Cannae; Livius notes that many later writers followed his view of it as a turning point, which is not necessarily correct.",
          "In 451 Aetius led a coalition with the Visigothic king Theodoric against Attila in Gaul. Dahm describes the fighting as mainly a cavalry struggle for a ridge, which the coalition took first; Attila was forced back behind his wagons. The allies then besieged the laager rather than storm it, and Jordanes says quarrels between Romans and Goths let Attila escape. He invaded Italy the following year.",
        ],
        ["milvian-bridge", "adrianople", "catalaunian-plains"],
        [livMaxentius, livAdrianople, dahmCatalaunian],
        [
          "Concentration",
          "Intelligence",
          "Line of retreat",
          "Coalition limits",
        ],
        "What made Maxentius's defeat at the Milvian Bridge so complete?",
        [
          "A second army cut him off from Rome",
          "Constantine stormed the walls of Rome first",
          "His army fought with a river behind it and a single fragile line of retreat",
        ],
        2,
        "Giving up a fortified position to fight with a river behind turned defeat into annihilation when the bridge collapsed.",
        {
          prompt: "Was Adrianople, or the Catalaunian Plains, a turning point?",
          guidance:
            "Compare Ammianus's verdict with Livius's caution and Britannica's view of a victory of horsemen over infantry, and Dahm's doubt that the Catalaunian Plains was decisive while Attila remained a threat. Remember that Jordanes wrote a century later from a Gothic perspective.",
        },
      ),
    ],
  },
];
