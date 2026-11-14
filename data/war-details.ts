import type { Chronology, WarDetails } from "../lib/types";

const t = (...rows: [string, string][]): Chronology =>
  rows.map(([date, event]) => ({ date, event }));

// Editorial orientation for each war: principal participants, geographic scope and
// a short chronology of well-established events. Dates of contested events say so.
export const warDetails: Record<string, WarDetails> = {
  "greco-persian": {
    participants: [
      "Athens",
      "Sparta",
      "Other Greek poleis",
      "Ionian Greek cities",
      "Achaemenid Persian Empire",
    ],
    geography:
      "Western Anatolia, the Aegean islands, mainland Greece and the sea lanes between them.",
    developments: t(
      ["499 BCE", "Ionian cities revolt against Persian rule"],
      ["490 BCE", "Persian expedition; Eretria sacked; battle of Marathon"],
      ["480 BCE", "Xerxes invades; Thermopylae and Salamis"],
      ["479 BCE", "Greek victories at Plataea and Mycale"],
      ["478/477 BCE", "Delian League formed under Athenian leadership"],
      ["c. 449 BCE", "Reported Peace of Callias (its historicity is debated)"],
    ),
  },
  alexander: {
    participants: [
      "Macedon",
      "Greek allies of the League of Corinth",
      "Achaemenid Empire",
      "Local rulers and communities from Anatolia to the Indus",
    ],
    geography:
      "Anatolia, the Levant, Egypt, Mesopotamia, the Iranian plateau, Central Asia and the Indus basin.",
    developments: t(
      ["335 BCE", "Thebes revolts and is destroyed"],
      [
        "334 BCE",
        "Crossing into Asia; battle at the Granicus; siege of Halicarnassus",
      ],
      ["333 BCE", "Battle of Issus"],
      ["332 BCE", "Sieges of Tyre and Gaza; Egypt occupied"],
      ["331 BCE", "Battle of Gaugamela"],
      ["330 BCE", "Persepolis burned; Darius III killed by his own officers"],
      ["326 BCE", "Battle at the Hydaspes; the army refuses to go farther"],
      ["325 BCE", "Alexander gravely wounded at a Mallian town"],
      ["323 BCE", "Alexander dies at Babylon"],
    ),
    bibliography: [
      {
        title:
          "Arrian, The Anabasis of Alexander, trans. E. J. Chinnock (1884)",
        url: "https://en.wikisource.org/wiki/The_Anabasis_of_Alexander",
        publisher: "Wikisource",
        note: "The fullest surviving campaign narrative, in seven books from Alexander’s accession to his death. Arrian wrote in the second century CE and chose the eyewitness accounts of Ptolemy and Aristobulus as his main sources; Ptolemy enlarged his own role, and Aristobulus usually gave the version kinder to Alexander. The Wikisource transcription is incomplete.",
      },
      {
        title:
          "Diodorus Siculus, Library of History, Book 17 (Loeb Classical Library, vol. VIII, 1963)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diodorus_Siculus/17A%2A.html",
        publisher: "LacusCurtius, University of Chicago",
        note: "A narrative of the whole reign written in the first century BCE, in six web parts from the accession to Alexander’s death. It belongs to the “vulgate” tradition descended from Cleitarchus, whose history mixed eyewitness detail with romance and errors. Read alongside Arrian, it represents the other main tradition.",
      },
      {
        title: "Plutarch, Life of Alexander, trans. B. Perrin (Loeb, 1919)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Alexander%2A/home.html",
        publisher: "LacusCurtius, University of Chicago",
        note: "A biography rather than a campaign history. The LacusCurtius edition divides it into pages matched to the books of Curtius Rufus.",
      },
      {
        title: "Alexander the Great — Pierre Briant",
        url: "https://www.iranicaonline.org/articles/alexander-the-great-356-23-bc/",
        publisher: "Encyclopaedia Iranica",
        note: "The conquest seen from the Achaemenid side: the resistance that continued after each victory, the continuity of Achaemenid administration and Alexander’s use of royal ideology. Published in 1985 and updated in 2018; it cites ancient passages and modern studies for its points.",
      },
      {
        title: "Alexander the Great (multi-part biography)",
        url: "https://www.livius.org/articles/person/alexander-the-great/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A dated narrative of the campaigns in short parts, with discussion of where the ancient accounts differ. The campaign narratives on this site draw on its parts 2.3 to 2.14.",
      },
      {
        title: "Alexander 3.2: The Vulgate",
        url: "https://www.livius.org/articles/person/alexander-the-great/alexander-3.2-the-vulgate/",
        publisher: "Livius.org (Jona Lendering)",
        note: "How the lost history of Cleitarchus shaped Diodorus and Curtius Rufus, and why modern criticism of Diodorus has been overdone.",
      },
      {
        title: "Alexander 3.3: Arrian’s sources",
        url: "https://www.livius.org/articles/person/alexander-the-great/alexander-3.3-arrians-sources/",
        publisher: "Livius.org (Jona Lendering)",
        note: "Arrian’s life and his reliance on Ptolemy and Aristobulus, with the biases of each.",
      },
      {
        title: "Astronomical Diaries",
        url: "https://www.livius.org/articles/concept/astronomical-diaries/",
        publisher: "Livius.org (Jona Lendering)",
        note: "Babylonian records of observations and events. Lendering calls the entry for Gaugamela the only contemporary account of the battle; it says Darius’s army was deserting on its eve, against the Greek picture of a king who abandoned his men.",
      },
    ],
  },
  punic: {
    participants: [
      "Roman Republic and its Italian allies",
      "Carthage",
      "Numidian kingdoms",
      "Iberian and Celtic communities",
      "Macedon (allied with Carthage from 215 BCE)",
    ],
    geography: "Iberia, southern Gaul, Italy, Sicily and North Africa.",
    developments: t(
      ["219 BCE", "Hannibal takes Saguntum"],
      ["218 BCE", "Hannibal crosses the Alps; battle of the Trebia"],
      ["217 BCE", "Battle of Lake Trasimene"],
      ["216 BCE", "Battle of Cannae"],
      ["212–211 BCE", "Rome takes Syracuse and recovers Capua"],
      ["207 BCE", "Hasdrubal defeated at the Metaurus"],
      ["206 BCE", "Scipio's victory at Ilipa"],
      ["202 BCE", "Battle of Zama; peace follows in 201 BCE"],
    ),
    bibliography: [
      {
        title: "Polybius, Histories, Book 3 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/3%2A.html",
        publisher: "LacusCurtius",
        note: "The fullest narrative of the Hannibalic War to Cannae, by a historian who criticizes his predecessors, argues about the causes of the war and takes Hannibal’s troop figures from his inscription at the Lacinian promontory.",
      },
      {
        title: "Polybius, Histories, Book 15 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/15%2A.html",
        publisher: "LacusCurtius",
        note: "The account of Zama and the peace with Carthage, with a judgement of Hannibal’s conduct of the battle; it survives among the fragmentary later books.",
      },
      {
        title: "Livy, The History of Rome, Books 9–26 (trans. Cyrus Edmonds)",
        url: "https://www.gutenberg.org/ebooks/10907",
        publisher: "Project Gutenberg",
        note: "The continuous Roman narrative of the war’s first years, valuable for the politics at Rome and for the variant figures it reports, though it draws in part on unreliable annalists.",
      },
      {
        title: "“Punic Wars”, Encyclopædia Britannica, 11th ed. (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Punic_Wars",
        publisher: "Wikisource",
        note: "A compact military history of all three wars, with a section explaining Hannibal’s failure by Roman tenacity and the cohesion of the Italian confederacy, and a useful guide to the older scholarship.",
      },
    ],
  },
  "macedonian-wars": {
    participants: [
      "Roman Republic",
      "Antigonid Macedon",
      "Aetolian League",
      "Achaean League and other Greek states",
      "Pergamon and Rhodes",
    ],
    geography:
      "Macedonia, Thessaly and mainland Greece, with the Adriatic and Aegean coasts.",
    developments: t(
      ["214–205 BCE", "First Macedonian War, fought while Rome faced Hannibal"],
      ["197 BCE", "Battle of Cynoscephalae"],
      ["196 BCE", "Flamininus proclaims the freedom of the Greeks"],
      [
        "168 BCE",
        "Battle of Pydna; the Antigonid monarchy ends and Macedonia is divided into four republics",
      ],
      ["148 BCE", "Macedonia annexed as a Roman province"],
    ),
    bibliography: [
      {
        title: "Polybius, Histories, Book 18 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/18%2A.html",
        publisher: "LacusCurtius",
        note: "The account of Cynoscephalae, the famous comparison of legion and phalanx, and the terms of peace and proclamation of Greek freedom in 196 BCE.",
      },
      {
        title: "Livy, The History of Rome, Books 27–36 (trans. Cyrus Edmonds)",
        url: "https://www.gutenberg.org/ebooks/12582",
        publisher: "Project Gutenberg",
        note: "Livy’s narrative of the Second Macedonian War, notable for naming and criticizing the inflated casualty figures of Valerius Antias and Claudius.",
      },
      {
        title:
          "Livy, The History of Rome, Books 37 to the End (trans. W. A. McDevitte)",
        url: "https://www.gutenberg.org/ebooks/44318",
        publisher: "Project Gutenberg",
        note: "The main surviving narrative of the war against Perseus and of the settlement that divided Macedonia into four districts.",
      },
      {
        title: "Plutarch, Life of Aemilius Paulus (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Aemilius%2A.html",
        publisher: "LacusCurtius",
        note: "A biography of the victor of Pydna that preserves conflicting testimony from Polybius, Poseidonius and Nasica’s own letter, and dwells on the sack of Epirus and the triumph.",
      },
      {
        title: "Macedonia (8)",
        url: "https://www.livius.org/articles/place/macedonia/macedonia-8/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A brief modern overview of Macedonia’s wars with Rome from the treaty with Hannibal to annexation in 148 BCE.",
      },
    ],
  },
  gallic: {
    participants: [
      "Roman Republic",
      "Gallic peoples and confederations, including the Helvetii, Belgae and Arverni",
      "Germanic groups east of the Rhine",
      "Britons",
    ],
    geography:
      "Gaul (modern France, Belgium and adjoining regions), with crossings of the Rhine and expeditions to Britain.",
    developments: t(
      ["58 BCE", "Campaigns against the Helvetii and Ariovistus"],
      ["57 BCE", "Campaign against the Belgae"],
      ["55–54 BCE", "Rhine bridge; expeditions to Britain"],
      ["52 BCE", "Revolt under Vercingetorix; Gergovia; siege of Alesia"],
      ["51 BCE", "Last major resistance ends at Uxellodunum"],
    ),
    bibliography: [
      {
        title: "Caesar, The Gallic War, Book 7 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Caesar/Gallic_War/7A%2A.html",
        publisher: "LacusCurtius",
        note: "The commander’s own narrative of the revolt of 52 BCE, the only contemporary account of Avaricum, Gergovia and Alesia, and necessarily the victor’s version.",
      },
      {
        title:
          "“Caesar, Gaius Julius”, Encyclopædia Britannica, 11th ed. (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Caesar,_Gaius_Julius",
        publisher: "Wikisource",
        note: "A modern outline of Caesar’s career that sets the Gallic revolt in the context of his conquest of Gaul and the coming civil war.",
      },
      {
        title: "Cassius Dio, Roman History, Book 40 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/40%2A.html",
        publisher: "LacusCurtius",
        note: "A later Greek narrative of the revolt that adds its own account of Vercingetorix’s surrender and reasons for it.",
      },
    ],
  },
  "roman-parthian": {
    participants: [
      "Roman Republic, then the Roman Empire",
      "Parthian (Arsacid) Empire",
      "Armenia and client kingdoms of the frontier",
    ],
    geography:
      "Upper Mesopotamia, Armenia and Syria along the Euphrates frontier.",
    developments: t(
      ["53 BCE", "Crassus defeated at Carrhae"],
      ["36 BCE", "Mark Antony's invasion ends in a costly retreat"],
      [
        "20 BCE",
        "Peace negotiated through Tiberius; the standards lost at Carrhae are returned",
      ],
      [
        "116–117 CE",
        "Trajan takes Ctesiphon; Hadrian gives up the new provinces",
      ],
      ["165 and 198 CE", "Roman armies take Ctesiphon again"],
      [
        "224–226 CE",
        "Ardashir overthrows the Arsacids and founds the Sasanian dynasty",
      ],
    ),
    bibliography: [
      {
        title: "Plutarch, Life of Crassus (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Crassus%2A.html",
        publisher: "LacusCurtius",
        note: "The most detailed surviving story of the Carrhae campaign, strongly moralizing about Crassus’s greed and rashness.",
      },
      {
        title: "Cassius Dio, Roman History, Book 40 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/40%2A.html",
        publisher: "LacusCurtius",
        note: "A second narrative of the expedition and its aftermath, which names Abgarus of Osroëne as the traitor and follows the Parthian raids into Syria.",
      },
      {
        title: "Carrhae (53 BCE)",
        url: "https://www.livius.org/articles/battle/carrhae-53-bce/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A short modern article on the battle that rejects the ancient explanations of treachery and hostile terrain in favour of Parthian numbers, quality and supply.",
      },
    ],
  },
  "roman-civil-wars": {
    participants: [
      "Caesar and his supporters",
      "Pompey and the senatorial cause",
      "Brutus, Cassius and the other assassins of Caesar",
      "Octavian",
      "Mark Antony and Cleopatra VII of Egypt",
    ],
    geography:
      "Italy, Spain, Greece, Egypt, North Africa and the eastern Mediterranean.",
    developments: t(
      ["49 BCE", "Caesar crosses the Rubicon"],
      ["48 BCE", "Battle of Pharsalus; Pompey killed in Egypt"],
      ["44 BCE", "Caesar assassinated"],
      ["42 BCE", "Battles of Philippi"],
      ["31 BCE", "Battle of Actium"],
      [
        "30 BCE",
        "Octavian takes Alexandria; Antony and Cleopatra kill themselves",
      ],
    ),
    bibliography: [
      {
        title: "Caesar, The Civil Wars, Book 3 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Caesar/Civil_Wars/3A%2A.html",
        publisher: "LacusCurtius",
        note: "Caesar’s account of Dyrrhachium and Pharsalus, with detailed dispositions and casualty figures that other sources contradict.",
      },
      {
        title: "Appian, The Civil Wars, Book 2 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Appian/Civil_Wars/2%2A.html",
        publisher: "LacusCurtius",
        note: "A Greek narrative of the war between Caesar and Pompey that preserves the lower Pharsalus casualty figure of Asinius Pollio.",
      },
      {
        title: "Plutarch, Life of Antony (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Antony%2A.html",
        publisher: "LacusCurtius",
        note: "The principal biography of Antony, with figures for his forces at Actium and a vivid picture of Cleopatra’s influence on his decisions.",
      },
      {
        title: "Cassius Dio, Roman History, Book 50 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/50%2A.html",
        publisher: "LacusCurtius",
        note: "The fullest continuous account of the Actium campaign, including Agrippa’s operations against Antony’s communications.",
      },
      {
        title: "Actium (31 BCE)",
        url: "https://www.livius.org/articles/battle/actium-31-bce/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A modern reconstruction that reads Cleopatra’s and Antony’s escape as a planned break-out and notes the battle’s place in Augustan propaganda.",
      },
    ],
  },
  "roman-germanic": {
    participants: [
      "Roman Empire",
      "Cherusci",
      "Chatti, Bructeri, Marsi and other Germanic peoples",
    ],
    geography:
      "The Rhine frontier and the lands between the Rhine, Weser and Elbe.",
    developments: t(
      ["12–9 BCE", "Drusus campaigns east of the Rhine, reaching the Elbe"],
      ["4–5 CE", "Tiberius renews the conquest and advances to the Elbe"],
      ["9 CE", "Varus's three legions destroyed in the Teutoburg Forest"],
      ["14–16 CE", "Germanicus campaigns east of the Rhine"],
      ["16 CE", "Battle of Idistaviso; Germanicus recalled soon after"],
    ),
    bibliography: [
      {
        title: "Cassius Dio, Roman History, Book 56 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/56%2A.html",
        publisher: "LacusCurtius",
        note: "The only ancient overview of the fighting in the Teutoburg Forest, though its forests and ravines owe much to literary convention.",
      },
      {
        title:
          "Velleius Paterculus on the Battle in the Teutoburg Forest (2.117–120, trans. F. W. Shipley)",
        url: "https://www.livius.org/sources/content/paterculus-on-the-battle-in-the-teutoburg-forest/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A short and sharply critical account of Varus, useful on the conspiracy, Segestes’s warning and the conduct of the officers.",
      },
      {
        title: "Tacitus, Annals 1.55–71 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Annals/1D%2A.html",
        publisher: "LacusCurtius",
        note: "Describes Germanicus’s visit to the battlefield with its bones and camps, without narrating the battle itself.",
      },
      {
        title: "Teutoburg Forest (5)",
        url: "https://www.livius.org/articles/battle/teutoburg-forest-9-ce/teutoburg-forest-5/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A modern step-by-step reconstruction that weighs Dio, Velleius, Florus and Tacitus against the archaeology.",
      },
      {
        title: "Kalkriese",
        url: "https://www.livius.org/articles/battle/teutoburg-forest-9-ce/kalkriese/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A short description of the excavated battle site north of Osnabrück and of the narrows that gave the battle its name.",
      },
    ],
  },
  "roman-britain": {
    participants: [
      "Roman Empire",
      "Catuvellauni and other southern British peoples",
      "Iceni and Trinovantes",
      "Peoples of Wales and the north, including the Caledonians",
    ],
    geography:
      "Lowland Britain, Wales and northern Britain as far as the Scottish Highlands.",
    developments: t(
      ["43", "Claudian invasion"],
      ["Late 40s–50s", "Campaigns in Wales and against the Brigantes"],
      [
        "60 or 61",
        "Boudica's revolt destroys Camulodunum, Londinium and Verulamium before Roman victory",
      ],
      ["78", "Agricola brings northern England under Roman control"],
      ["78–84", "Agricola campaigns in the Scottish Highlands"],
    ),
    bibliography: [
      {
        title: "Tacitus, Annals 14.29–39 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Annals/14B%2A.html",
        publisher: "LacusCurtius",
        note: "The main narrative of the Boudican revolt, with the causes, the sack of the towns, the final battle and useful editorial notes on the likely route.",
      },
      {
        title: "Cassius Dio, Roman History, Book 62 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/62%2A.html",
        publisher: "LacusCurtius",
        note: "A later and more rhetorical account that adds Seneca’s loans and a speech for Boudica, and differs from Tacitus on her death.",
      },
      {
        title: "“Boadicea”, Encyclopædia Britannica, 11th ed. (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Boadicea",
        publisher: "Wikisource",
        note: "A short modern synthesis by F. J. Haverfield that combines Tacitus and Dio and places the rising in the context of Roman taxation and annexation.",
      },
    ],
  },
  "jewish-roman": {
    participants: [
      "Roman Empire",
      "Judaean rebel factions",
      "Agrippa II and other client rulers allied with Rome",
    ],
    geography:
      "Judaea, Galilee and Jerusalem, with the fortress of Masada in the Judaean desert.",
    developments: t(
      ["66", "Revolt breaks out; Legion XII Fulminata defeated"],
      ["67", "Vespasian campaigns in Galilee; Jotapata falls"],
      ["69", "Vespasian proclaimed emperor"],
      ["70", "Titus besieges and takes Jerusalem; the Temple is destroyed"],
      ["73 or 74", "Masada falls"],
    ),
    bibliography: [
      {
        title:
          "Flavius Josephus, The Wars of the Jews (trans. William Whiston)",
        url: "https://www.gutenberg.org/ebooks/2850",
        publisher: "Project Gutenberg",
        note: "The indispensable narrative by a Jewish commander who went over to the Romans; detailed but partisan, favourable to Titus and hostile to the rebel leaders.",
      },
      {
        title: "Tacitus, Histories 5.1–13 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Histories/5A%2A.html",
        publisher: "LacusCurtius",
        note: "A short and hostile Roman account of the Jews and of the opening of the siege of Jerusalem, with the Roman figure for the besieged.",
      },
      {
        title: "Jewish War (66–70)",
        url: "https://www.livius.org/articles/concept/roman-jewish-wars/roman-jewish-wars-3/",
        publisher: "Livius.org (Jona Lendering)",
        note: "A modern narrative of the outbreak and the campaign in Galilee, which stresses the economic causes of the revolt and its divisions.",
      },
    ],
  },
  han: {
    participants: [
      "Han court",
      "Yellow Turban rebels",
      "Regional warlords including Cao Cao, Sun Quan and Liu Bei",
    ],
    geography: "The North China Plain, the Yangtze valley and Sichuan.",
    developments: t(
      ["184", "Yellow Turban rebellion"],
      ["189–190", "Court crisis; Dong Zhuo seizes control of the capital"],
      ["200", "Cao Cao defeats Yuan Shao at Guandu"],
      ["208–209", "Battle of Red Cliffs"],
      ["220", "End of the Han; Cao Pi proclaims the Wei dynasty"],
    ),
  },
  "tetrarchy-civil-wars": {
    participants: [
      "Constantine",
      "Maxentius",
      "Licinius",
      "Maximinus Daia",
      "Galerius and Severus in the early phase",
    ],
    geography: "Italy, Gaul, the Balkans and Asia Minor.",
    developments: t(
      ["306", "Constantine proclaimed at York; Maxentius seizes power in Rome"],
      ["312", "Battle of the Milvian Bridge"],
      ["313", "Edict of Milan; Licinius takes Maximinus Daia's lands"],
      ["314 and 316", "Constantine invades Licinius's territory"],
      ["324", "Constantine defeats Licinius and rules the whole empire"],
    ),
    bibliography: [
      {
        title:
          "Lactantius, Of the Manner in Which the Persecutors Died (trans. William Fletcher)",
        url: "https://www.newadvent.org/fathers/0705.htm",
        publisher: "New Advent",
        note: "A near-contemporary Christian polemic and the earliest account read here of Constantine’s dream before the Milvian Bridge.",
      },
      {
        title:
          "Eusebius, Life of Constantine, Book 1 (trans. Ernest C. Richardson)",
        url: "https://www.newadvent.org/fathers/25021.htm",
        publisher: "New Advent",
        note: "The source of the story of the vision of the cross, written after the emperor’s death and openly panegyric.",
      },
      {
        title:
          "Zosimus, New History, Book 2 (anonymous translation, London, 1814)",
        url: "https://www.tertullian.org/fathers/zosimus02_book2.htm",
        publisher: "The Tertullian Project",
        note: "A later history that gives troop numbers for both sides and the story of Maxentius’s trap bridge, with no Christian miracle.",
      },
      {
        title: "“Constantine”, Encyclopædia Britannica, 11th ed. (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Constantine_(emperors)",
        publisher: "Wikisource",
        note: "A modern account of the campaign of 312 that compares the sources for the vision and discusses the size of Constantine’s army.",
      },
    ],
  },
  "gothic-war": {
    participants: [
      "Eastern Roman Empire",
      "Western Roman Empire",
      "Tervingi and Greuthungi Goths",
      "Alan and Hunnic allies of the Goths",
    ],
    geography: "Thrace and the lower Danube frontier.",
    developments: t(
      ["376", "Goths cross the Danube into the empire and revolt"],
      ["9 August 378", "Battle of Adrianople; Valens killed"],
      ["382", "Peace with the Goths under Valens's successor Theodosius"],
    ),
    bibliography: [
      {
        title:
          "Ammianus Marcellinus, Roman History, Book 31 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ammian/31%2A.html",
        publisher: "LacusCurtius",
        note: "The essential narrative of the Gothic crossing and the battle of Adrianople, ending with the battle and its immediate aftermath.",
      },
      {
        title:
          "Jordanes, The Origin and Deeds of the Goths (trans. Charles C. Mierow)",
        url: "https://www.gutenberg.org/ebooks/14809",
        publisher: "Project Gutenberg",
        note: "A history of the Goths that gives the Gothic version of the abuses of 376 and the later agreements with Rome.",
      },
      {
        title: "“Goths”, Encyclopædia Britannica, 11th ed. (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Goths",
        publisher: "Wikisource",
        note: "A general modern history of the Goths that sets the war of 376–382 in the longer story of their movements and settlement.",
      },
      {
        title:
          "Zosimus, New History, Book 4 (anonymous translation, London, 1814)",
        url: "https://www.tertullian.org/fathers/zosimus04_book4.htm",
        publisher: "The Tertullian Project",
        note: "A later account, useful for Sebastianus’s advice to Valens before Adrianople.",
      },
    ],
  },
  "hunnic-invasions": {
    participants: [
      "Hunnic empire and subject peoples, including Ostrogoths and Gepids",
      "Eastern Roman Empire",
      "Western Roman Empire",
      "Visigoths and other federates in Gaul",
    ],
    geography: "The Danube basin, the Balkans, Gaul and northern Italy.",
    developments: t(
      ["440", "Huns begin raiding the Balkans"],
      [
        "447",
        "Attila invades the Balkans; the eastern empire raises its payments",
      ],
      ["451", "Invasion of Gaul; siege of Orléans; Catalaunian Plains"],
      ["452", "Invasion of northern Italy; Aquileia sacked"],
      ["453", "Attila dies"],
      ["454", "Aetius assassinated"],
    ),
    bibliography: [
      {
        title:
          "J. B. Bury, History of the Later Roman Empire (1923), ch. IX: The Empire of Attila",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/secondary/BURLAT/9%2A.html",
        publisher: "LacusCurtius",
        note: "A classic modern account of Attila’s invasions that argues the campaign was decided at Orléans and that the battle near Troyes has been much overrated.",
      },
      {
        title:
          "Jordanes, The Origin and Deeds of the Goths (trans. Charles C. Mierow)",
        url: "https://www.gutenberg.org/ebooks/14809",
        publisher: "Project Gutenberg",
        note: "The fullest narrative of the battle of the Catalaunian Plains, written long afterward by a historian of the Goths.",
      },
      {
        title: "“Attila”, Encyclopædia Britannica, 11th ed. (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Attila",
        publisher: "Wikisource",
        note: "A short modern biography that treats the Gallic campaign as a rescue of Europe, a view Bury’s later account directly challenges.",
      },
    ],
  },
  "byzantine-sasanian-527": {
    participants: [
      "Eastern Roman (Byzantine) Empire under Justinian I",
      "Sasanian Iran under Kavad I and Khosrow I",
      "Herul and Massagetae contingents in Roman service",
    ],
    geography: "Lazica, Armenia, northern Mesopotamia and Syria.",
    developments: t(
      [
        "527",
        "Justinian becomes sole emperor; Belisarius commands the troops at Dara",
      ],
      [
        "After 527",
        "Persians stop the Roman fort at Mindouos, defeat its defenders and raze it",
      ],
      ["530", "Battle of Dara"],
      [
        "531",
        "Belisarius defeated at Sura (Callinicum); Khosrow I succeeds Kavad",
      ],
      ["532", "Unlimited peace between Khosrow I and Justinian"],
    ),
  },
  "byzantine-arab": {
    participants: [
      "Eastern Roman (Byzantine) Empire",
      "Rashidun, later Umayyad, Caliphate",
      "Ghassanid and other Arab allies of Byzantium",
    ],
    geography:
      "Syria, Palestine, Egypt, Anatolia and the eastern Mediterranean.",
    developments: t(
      ["634", "Battle of Ajnadayn (traditional date)"],
      ["636", "Battle of the Yarmuk"],
      ["637/638", "Jerusalem capitulates"],
      ["640–642", "Conquest of Egypt"],
      [
        "674–678",
        "Umayyad attacks on Constantinople (dating and scale are debated)",
      ],
      ["717–718", "Umayyad siege of Constantinople fails"],
    ),
  },
  norman: {
    participants: [
      "Duchy of Normandy and its allies",
      "Kingdom of England under Harold II",
      "Norwegian army of Harald Hardrada",
    ],
    geography: "Northern and southern England and the Channel crossing.",
    developments: t(
      ["January 1066", "Edward the Confessor dies; Harold is crowned"],
      [
        "25 September 1066",
        "Harold defeats the Norwegian invasion at Stamford Bridge",
      ],
      ["28 September 1066", "William lands at Pevensey"],
      ["14 October 1066", "Battle of Hastings"],
      ["25 December 1066", "William crowned at Westminster"],
      ["1069–1070", "Harrying of the North"],
      ["1071", "Resistance at Ely ends"],
    ),
  },
  crusades: {
    participants: [
      "Latin crusader states and Western crusaders",
      "Military orders",
      "Fatimid, Seljuk, Zengid, Ayyubid and Mamluk powers",
      "Byzantine Empire",
    ],
    geography: "The Levant, Egypt, Anatolia and the eastern Mediterranean.",
    developments: t(
      ["1099", "Crusaders take Jerusalem and massacre many of its inhabitants"],
      ["1144", "Zengi takes Edessa"],
      ["1187", "Battle of Hattin; Saladin takes Jerusalem"],
      ["1191", "Third Crusade takes Acre"],
      ["7 September 1191", "Battle of Arsuf"],
      ["1204", "Fourth Crusade sacks Constantinople"],
      ["1291", "Mamluks take Acre, the last major crusader stronghold"],
    ),
  },
  "mongol-jin": {
    participants: [
      "Mongol Empire under Chinggis Khan",
      "Jin dynasty (Jurchen) of northern China",
      "Qara Kitat (Khitan) and Jurchen troops in Jin service",
    ],
    geography:
      "The Jin frontier, the passes north of Zhongdu and the north China plain.",
    developments: t(
      [
        "Before 1211",
        "Mongol campaign against the Tangut kingdom of Xixia secures the western flank",
      ],
      ["1211", "Mongol vanguard surprises the Jin at Wushabu"],
      [
        "8th month, 1211",
        "Jin defeat at Yehuling and Huihechuan; Mongol raiders enter the Juyong Pass",
      ],
      ["1214", "The Jin ruler buys peace with a princess and gifts"],
      ["1215", "Zhongdu (Beijing) taken"],
    ),
  },
  "mongol-europe": {
    participants: [
      "Mongol Empire under Batu",
      "Volga Bulghars and Cumans",
      "Rus' principalities",
      "Duchy of Silesia",
      "Kingdom of Hungary",
    ],
    geography:
      "The middle Volga, the Rus' principalities, Poland and the Hungarian plain.",
    developments: t(
      ["Autumn 1237", "Mongols take Bulghar on the Volga"],
      [
        "21 December 1237",
        "Ryazan falls, followed by Vladimir, Suzdal and Moscow",
      ],
      ["Easter 1239", "Béla IV receives the Cuman leader Koten into Hungary"],
      ["6 December 1240", "Kiev falls after a nine-day siege"],
      [
        "9 April 1241",
        "Mongol victory over Henry II of Silesia at Liegnitz (Legnica)",
      ],
      ["10–11 April 1241", "Battle of Mohi on the Sajó"],
      ["11 December 1241", "Death of the Great Khan Ögedei"],
      ["May 1242", "Mongol withdrawal from Hungary completed"],
    ),
  },
  mongol: {
    participants: [
      "Mamluk Sultanate",
      "Mongol Ilkhanate",
      "Armenian Cilicia and other occasional allies of the Mongols",
    ],
    geography: "Syria, Palestine and the Euphrates frontier.",
    developments: t(
      ["1258", "Mongols sack Baghdad"],
      ["1260", "Aleppo and Damascus fall; Mamluk victory at Ain Jalut"],
      ["1281", "Mamluk victory at the Second Battle of Homs"],
      ["1299", "Ilkhanid victory at Wadi al-Khazandar"],
      ["1303", "Mamluk victory at Marj al-Saffar"],
      ["1323", "Treaty of Aleppo ends the conflict"],
    ),
  },
  "hundred-years": {
    participants: [
      "Kingdom of England",
      "Kingdom of France",
      "Burgundy",
      "Brittany, Scotland and other allies",
    ],
    geography: "France, the Low Countries and the Channel.",
    developments: t(
      [
        "1337",
        "War begins over Gascony and Edward III's claim to the French throne",
      ],
      ["1346", "Battle of Crécy"],
      ["1356", "Battle of Poitiers"],
      ["1415", "Battle of Agincourt"],
      ["1420", "Treaty of Troyes"],
      ["1429", "Siege of Orléans lifted"],
      ["1453", "Battle of Castillon; English hold only Calais"],
    ),
  },
  ottoman: {
    participants: [
      "Ottoman state",
      "Byzantine Empire",
      "Serbia, Hungary and other Balkan powers",
      "Venice and Genoa",
      "Anatolian beyliks and the Timurids",
    ],
    geography:
      "Anatolia, the Balkans and the coasts of the Aegean and Black Sea.",
    developments: t(
      ["1354", "Ottomans occupy Gallipoli"],
      ["1389", "Battle of Kosovo"],
      ["1396", "Crusade defeated at Nicopolis"],
      ["1402", "Timur defeats Bayezid I at Ankara"],
      ["1444", "Battle of Varna"],
      ["1453", "Fall of Constantinople"],
      ["1526", "Battle of Mohács"],
    ),
  },
  mughal: {
    participants: [
      "Babur's Timurid army",
      "Lodi sultanate of Delhi",
      "Rajput confederacy under Rana Sanga",
      "Afghan rulers in the east",
    ],
    geography: "The Punjab, the Ganges–Yamuna Doab and Rajputana.",
    developments: t(
      ["21 April 1526", "First Battle of Panipat"],
      ["1527", "Battle of Khanwa against Rana Sanga"],
      ["1528", "Siege of Chanderi"],
      ["1529", "Battle of the Ghaghra against Afghan forces"],
      ["1530", "Babur dies; Humayun succeeds"],
    ),
  },
  sengoku: {
    participants: [
      "Rival daimyō houses",
      "Ashikaga shogunate",
      "Oda, Toyotomi and Tokugawa coalitions",
      "Ikkō-ikki religious leagues",
    ],
    geography: "Honshu, Kyushu and Shikoku; from 1592 also Korea.",
    developments: t(
      ["1467", "Ōnin War begins"],
      ["1543", "Portuguese firearms reach Tanegashima"],
      ["1560", "Battle of Okehazama"],
      ["1575", "Battle of Nagashino"],
      ["1582", "Oda Nobunaga dies at Honnōji"],
      ["1590", "Toyotomi Hideyoshi completes unification"],
      ["1592–1598", "Invasions of Korea"],
      ["1600", "Battle of Sekigahara"],
      ["1615", "Fall of Osaka castle"],
    ),
  },
  imjin: {
    participants: ["Joseon Korea", "Toyotomi Japan", "Ming China"],
    geography: "The Korean peninsula and the waters off its southern coast.",
    developments: t(
      ["24 May 1592", "Japanese forces take Busan; the invasion begins"],
      ["1592", "Joseon naval victories at Okpo, Dangpo, Danghangpo and Yulpo"],
      ["7th lunar month 1592", "Battle of Hansan Island, followed by Angolpo"],
      ["10th lunar month 1592", "Defence of Jinju"],
      ["2nd lunar month 1593", "Victory at Haengju"],
      ["1593", "Yi Sun-sin given command of the entire Korean fleet"],
      [
        "1597",
        "Second invasion; the Korean navy is almost destroyed and Yi reinstated",
      ],
      [
        "16 December 1598",
        "Yi Sun-sin killed off Noryang in the final campaign",
      ],
    ),
  },
  "thirty-years": {
    participants: [
      "Holy Roman Emperor and the Catholic League",
      "Bohemian estates and Protestant princes",
      "Denmark",
      "Sweden",
      "France",
      "Spain",
      "Dutch Republic",
    ],
    geography:
      "Central Europe, above all the Holy Roman Empire, with connected fighting in the Low Countries.",
    developments: t(
      ["1618", "Defenestration of Prague"],
      ["1620", "Battle of the White Mountain"],
      ["1625–1629", "Danish intervention"],
      ["1630", "Swedish landing in Pomerania"],
      ["1631", "Sack of Magdeburg; battle of Breitenfeld"],
      ["1635", "France enters the war openly"],
      ["1648", "Peace of Westphalia"],
    ),
  },
  "maratha-bijapur": {
    participants: [
      "Shivaji's Maratha forces",
      "Adil Shahi Sultanate of Bijapur",
      "Maval deshmukhs on both sides",
    ],
    geography: "The Western Ghats, the Konkan and the Kolhapur country.",
    developments: t(
      ["c. 1655", "Shivaji begins seizing Bijapur outposts"],
      ["1659", "Afzal Khan marches from Bijapur to Wai"],
      ["10 November 1659", "Afzal Khan killed at Pratapgad; his army routed"],
      [
        "December 1659 – February 1660",
        "Marathas take Panhala and overrun South Konkan and the Kolhapur country",
      ],
      ["2 March 1660", "Siddi Jauhar besieges Shivaji in Panhala"],
    ),
  },
  "spanish-succession": {
    participants: [
      "Grand Alliance: England (from 1707 Britain), the Dutch Republic, Habsburg Austria and others",
      "France",
      "Bourbon Spain",
      "Bavaria",
    ],
    geography:
      "The Low Countries, the Rhine and Danube, Italy, Spain and overseas colonies.",
    developments: t(
      ["1701", "War begins over the Spanish succession"],
      ["1704", "Battle of Blenheim; Gibraltar taken"],
      ["1706", "Battles of Ramillies and Turin"],
      ["1707", "Battle of Almansa"],
      ["1709", "Battle of Malplaquet"],
      ["1713–1714", "Treaties of Utrecht and Rastatt"],
    ),
  },
  "nader-india": {
    participants: [
      "Afsharid Iran under Nader Shah",
      "Mughal Empire under Muhammad Shah",
      "Afghan contingents in Nader's army",
    ],
    geography:
      "Qandahar, the Mughal north-west frontier and the plain north of Delhi.",
    developments: t(
      [
        "1738",
        "Nader destroys Qandahar and pursues Afghan fugitives across the Mughal frontier",
      ],
      ["24 February 1739", "Battle of Karnal"],
      [
        "1739",
        "Delhi occupied; after attacks on Persian troops, Nader permits plunder and massacre",
      ],
      [
        "1739",
        "Treaty restores Muhammad Shah as Nader's vassal; the Peacock Throne and the Koh-i-Noor go to Iran",
      ],
      ["On the return", "Nader campaigns against Khwarazm and Bukhara"],
    ),
  },
  "seven-years": {
    participants: [
      "Prussia",
      "Great Britain and Hanover",
      "Austria",
      "France",
      "Russia",
      "Sweden",
      "Saxony and the Army of the Reich",
    ],
    geography:
      "Central Europe, with colonial theatres in North America and India.",
    developments: t(
      ["29 August 1756", "Frederick II invades Saxony"],
      ["6 May 1757", "Prussian victory at Prague"],
      ["18 June 1757", "Austrian victory at Kolín"],
      ["30 August 1757", "Russian victory at Gross-Jägerndorf"],
      ["5 November 1757", "Prussian victory at Rossbach"],
      ["5 December 1757", "Battle of Leuthen"],
      ["10 February 1763", "Treaty of Paris between Britain, France and Spain"],
      [
        "15 February 1763",
        "Treaty of Hubertusburg between Austria, Prussia and Saxony",
      ],
    ),
  },
  "american-revolution": {
    participants: [
      "Thirteen Colonies / United States",
      "Great Britain",
      "Loyalists",
      "France (from 1778)",
      "Spain (from 1779)",
      "Native nations allied with each side",
    ],
    geography: "North America, the Caribbean and the wider Atlantic.",
    developments: t(
      ["1775", "Fighting at Lexington and Concord"],
      ["1776", "Declaration of Independence"],
      ["1777", "British surrender at Saratoga"],
      ["1778", "Franco-American alliance"],
      ["1781", "British surrender at Yorktown"],
      ["1783", "Treaty of Paris"],
    ),
  },
  "russo-turkish-1787": {
    participants: [
      "Russian Empire",
      "Habsburg Monarchy (from 1788)",
      "Ottoman Empire",
    ],
    geography:
      "The northern Black Sea coast, Moldavia, Wallachia and the lower Danube.",
    developments: t(
      ["16 August 1787", "Ottoman Empire declares war on Russia"],
      ["9 February 1788", "Austria announces that it will join Russia"],
      ["September 1788", "Iași and Khotyn fall; Moldavia is occupied"],
      ["17 December 1788", "Russians take Ochakov (Özü)"],
      ["7 April 1789", "Selim III becomes sultan"],
      ["1 August 1789", "Allied victory at Focșani"],
      ["22 September 1789", "Battle of Rymnik"],
      ["27 July 1790", "Reichenbach Convention pushes Austria toward peace"],
    ),
  },
  "french-revolutionary": {
    participants: [
      "Revolutionary France and allied sister republics",
      "Austria",
      "Prussia (until 1795)",
      "Britain",
      "Spain, Piedmont-Sardinia, Russia, the Ottoman Empire and other coalition members",
    ],
    geography:
      "The Low Countries, the Rhine, northern Italy, Egypt and Syria, and the seas around Europe.",
    developments: t(
      ["April 1792", "France declares war on Austria"],
      [
        "1793",
        "Royalists hand Toulon to an Anglo-Spanish fleet; siege of Toulon",
      ],
      ["October 1795", "Royalist rising in Paris crushed (13 Vendémiaire)"],
      ["1796–1797", "Bonaparte's Italian campaign; Mantua surrenders"],
      ["1798–1799", "Expedition to Egypt and Syria"],
      ["November 1799", "Bonaparte seizes power in the coup of 18 Brumaire"],
      ["June 1800", "Battle of Marengo"],
      ["March 1802", "Peace of Amiens"],
    ),
    bibliography: [
      {
        title:
          "“French Revolutionary Wars” — Charles Francis Atkinson and David Hannay, Encyclopædia Britannica, 11th ed., vol. 11 (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/French_Revolutionary_Wars",
        publisher: "Wikisource",
        note: "A long military history of the war from 1792 to 1801, strongest on the Italian campaign of 1796–1797 and the Marengo campaign, which it follows day by day with figures for each side. It argues with the conventional verdicts, defending Wurmser’s aims and criticizing Bonaparte’s march on Milan in 1800, but treats Toulon, Vendémiaire and Egypt only in passing.",
      },
      {
        title:
          "J. Holland Rose, The Life of Napoleon I, 2 vols (London: G. Bell, 1910 reprint of the 1907 fourth edition)",
        url: "https://archive.org/details/thelifeofnapoleo14300gut",
        publisher: "Internet Archive (Project Gutenberg text)",
        note: "A political and military biography by a Cambridge historian who used the British Foreign Office and Admiralty records. Its chapters on Toulon, Vendémiaire, the Italian campaign, Egypt, Syria and Marengo weigh Napoleon’s later claims against the documents, and it is especially useful on British policy; it writes from a British point of view.",
      },
      {
        title:
          "The Memoirs of Baron Thiébault, trans. A. J. Butler, vol. 1 (London: Smith, Elder, 1896)",
        url: "https://archive.org/details/memoirsofbaronth01thiuoft",
        publisher: "Internet Archive",
        note: "An abridged English translation of a French general’s memoirs. Thiébault served on the Convention’s side on 13 Vendémiaire and gives a street-by-street account of the day, including the forces engaged; his memory sometimes differs from the documents Rose cites.",
      },
      {
        title:
          "Journal d’Abdurrahman Gabarti pendant l’occupation française en Égypte, trans. Alexandre Cardin (Paris, 1838)",
        url: "https://archive.org/details/journaldabdurra00cardgoog",
        publisher: "Internet Archive",
        note: "A French translation of the Cairo scholar al-Jabarti’s account of the occupation, with a summary of the Lebanese Christian Niqula al-Turki’s narrative. It shows the invasion as Cairo experienced it, from the flight after Embabeh to the revolt of October 1798. The translator warns that it often distorts the facts; it is hostile to the French and should be read alongside the French accounts.",
      },
      {
        title:
          "Melas, Michael Freiherr von — Peter Broucek (Neue Deutsche Biographie 17, 1994)",
        url: "https://www.deutsche-biographie.de/sfz61357.html",
        publisher: "Deutsche Biographie",
        note: "A short Austrian biography of the commander in Italy in 1799–1800, giving the Austrian view of the Marengo campaign: the plan against Genoa and the Var, the fall of Genoa on 4 June and the Austrian strength at Marengo.",
      },
      {
        title:
          "Karl, Erzherzog von Österreich — Johann Christoph Allmayer-Beck (Neue Deutsche Biographie 11, 1977)",
        url: "https://www.deutsche-biographie.de/sfz57317.html",
        publisher: "Deutsche Biographie",
        note: "A biography of the Austrian commander, covering his campaigns on the Rhine, his retreat before Bonaparte into Styria and the contacts that led to Leoben in 1797, and his long conflict with the Vienna court. The page also carries Adam Wolf’s older ADB article of 1882.",
      },
    ],
  },
  napoleonic: {
    participants: [
      "France and its allies and client states",
      "Britain",
      "Austria",
      "Russia",
      "Prussia",
      "Spain and Portugal",
      "Sweden and other coalition members",
    ],
    geography:
      "Europe from Iberia to Russia, with naval and colonial theaters.",
    developments: t(
      ["1805", "Trafalgar; Ulm; Austerlitz"],
      ["1806", "Jena–Auerstedt"],
      ["1807", "Eylau and Friedland; Treaties of Tilsit"],
      ["1808", "Peninsular War begins"],
      [
        "1809",
        "Eckmühl, Aspern-Essling and Wagram; Peace of Vienna (Schönbrunn)",
      ],
      [
        "1812",
        "Invasion of Russia; Smolensk and Borodino; retreat and the Berezina",
      ],
      ["1813", "Lützen, Bautzen and Dresden; Battle of Leipzig"],
      ["1814", "Campaign in France; Paris capitulates; Napoleon abdicates"],
      ["1815", "Hundred Days; Ligny and Waterloo"],
    ),
    bibliography: [
      {
        title:
          "“Napoleonic Campaigns” — Frederic Natusch Maude and David Hannay, Encyclopædia Britannica, 11th ed., vol. 19 (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Napoleonic_Campaigns",
        publisher: "Wikisource",
        note: "A military history of Napoleon’s campaigns from 1805 to 1814 in numbered sections, whose bibliography rests on the French and German general staff histories. It is strongest on movements and the working of armies, defends Mack, blames the retreat from Moscow on march discipline more than weather, and ends with an essay on Napoleon’s generalship. The Peninsular War and Waterloo have their own articles.",
      },
      {
        title:
          "“Waterloo Campaign, 1815” — Archibald Frank Becke, Encyclopædia Britannica, 11th ed., vol. 28 (1911)",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Waterloo_Campaign,_1815",
        publisher: "Wikisource",
        note: "A detailed account of the Hundred Days in Belgium, from the concentration of the Army of the North to Grouchy’s retreat, with strengths and losses for each battle. Becke is sharply critical of Ney, Grouchy and Gneisenau, and gives full weight to Blücher’s march to Waterloo.",
      },
      {
        title:
          "J. Holland Rose, The Life of Napoleon I, 2 vols (London: G. Bell, 1910 reprint of the 1907 fourth edition)",
        url: "https://archive.org/details/thelifeofnapoleo14300gut",
        publisher: "Internet Archive (Project Gutenberg text)",
        note: "A political and military biography using the British official records, with a chapter for each campaign from Ulm to Waterloo and close attention to the diplomacy that made and broke the coalitions. It argues with Napoleon’s St Helena accounts and with Thiers, and writes from a British point of view.",
      },
      {
        title:
          "Sir Robert Wilson, Narrative of Events during the Invasion of Russia by Napoleon Bonaparte, ed. H. Randolph, 2nd ed. (London: John Murray, 1860)",
        url: "https://archive.org/details/narrativeofevent00wils",
        publisher: "Internet Archive",
        note: "The account of the British commissioner at Russian headquarters in 1812, edited by his nephew and published in 1860. It gives the Russian side of the campaign day by day, including the councils of war, and is bitterly critical of Kutuzov.",
      },
      {
        title:
          "Mack Freiherr von Leiberich, Karl — Peter Broucek (Neue Deutsche Biographie 15, 1987)",
        url: "https://www.deutsche-biographie.de/sfz55447.html",
        publisher: "Deutsche Biographie",
        note: "A short Austrian biography of the commander who surrendered at Ulm, explaining the court politics that put him in charge in 1805 and his court martial.",
      },
      {
        title:
          "Hohenlohe-Ingelfingen, Friedrich Ludwig Fürst zu — Günter Richter (Neue Deutsche Biographie 9, 1972)",
        url: "https://www.deutsche-biographie.de/sfz33338.html",
        publisher: "Deutsche Biographie",
        note: "The Prussian commander beaten at Jena and the surrender at Prenzlau, from the Prussian side.",
      },
      {
        title:
          "Karl, Erzherzog von Österreich — Johann Christoph Allmayer-Beck (Neue Deutsche Biographie 11, 1977)",
        url: "https://www.deutsche-biographie.de/sfz57317.html",
        publisher: "Deutsche Biographie",
        note: "Austria’s commander in 1809, his reluctance to go to war, his army reforms and his conflicts with the court. The page also carries Adam Wolf’s ADB article of 1882.",
      },
      {
        title:
          "Barclay de Tolly, Michael Andreas Fürst von — Georg von Rauch (Neue Deutsche Biographie 1, 1953)",
        url: "https://www.deutsche-biographie.de/sfz7305.html",
        publisher: "Deutsche Biographie",
        note: "A brief article on the Russian commander of 1812, whose strategy of retreat made him unpopular as a foreigner and who commanded the Russo-Prussian forces in 1813–1814.",
      },
      {
        title:
          "Blücher von Wahlstatt, Gebhard Leberecht Fürst — Hans Haussherr (Neue Deutsche Biographie 2, 1955)",
        url: "https://www.deutsche-biographie.de/sfz35354.html",
        publisher: "Deutsche Biographie",
        note: "The Prussian field commander of 1813–1815, from Auerstedt and Lübeck to Leipzig, the campaign of 1814, Ligny and Waterloo, with the dates of his battles from the Prussian side.",
      },
      {
        title:
          "Gneisenau, August Wilhelm Anton Graf Neidhardt von — Hermann Teske (Neue Deutsche Biographie 6, 1964)",
        url: "https://www.deutsche-biographie.de/sfz69918.html",
        publisher: "Deutsche Biographie",
        note: "Blücher’s chief of staff and the Prussian army reformer, including his order to retreat on Wavre after Ligny, which the article defends against older criticism, and his part in the pursuit after Waterloo.",
      },
    ],
  },
  "civil-war": {
    participants: [
      "United States (the Union)",
      "Confederate States",
      "Formerly enslaved people who served in the Union army",
      "Native nations in the western theater",
    ],
    geography:
      "Eastern, western and trans-Mississippi theaters, with a naval blockade of Confederate coasts.",
    developments: t(
      ["April 1861", "Confederate attack on Fort Sumter"],
      ["September 1862", "Battle of Antietam"],
      ["January 1863", "Emancipation Proclamation takes effect"],
      ["July 1863", "Gettysburg; Vicksburg surrenders"],
      ["1864", "Atlanta falls; March to the Sea"],
      ["April 1865", "Lee surrenders at Appomattox"],
      ["December 1865", "Thirteenth Amendment abolishes slavery"],
    ),
  },
  "franco-prussian": {
    participants: [
      "Prussia and the North German Confederation",
      "Bavaria, Württemberg and Baden",
      "Second French Empire, then the Government of National Defense",
    ],
    geography:
      "Alsace, Lorraine and northern France, including the siege of Paris.",
    developments: t(
      ["19 July 1870", "France declares war"],
      ["August 1870", "Battles of Wörth, Spicheren and Gravelotte–St Privat"],
      ["1 September 1870", "Battle of Sedan; Napoleon III captured"],
      ["September 1870", "Siege of Paris begins"],
      ["October 1870", "Metz capitulates"],
      ["18 January 1871", "German Empire proclaimed at Versailles"],
      [
        "May 1871",
        "Treaty of Frankfurt; France cedes Alsace and part of Lorraine",
      ],
    ),
  },
  "italo-ethiopian-1895": {
    participants: [
      "Ethiopian Empire under Menelik II",
      "Kingdom of Italy",
      "African askari in Italian service",
    ],
    geography: "Eritrea and Tigray in northern Ethiopia.",
    developments: t(
      ["2 May 1889", "Treaty of Wichale (Ucciali)"],
      ["September 1893", "Menelik repudiates the treaty"],
      [
        "13–15 January 1895",
        "Italian victories over Ras Mangasha at Coatit and Senafe",
      ],
      ["March 1895", "Italians occupy Adigrat, Mekele, Adwa and Axum"],
      ["December 1895", "Italian force destroyed at Amba Alagi"],
      [
        "20 January 1896",
        "The besieged Italian fort at Mekele ends its resistance",
      ],
      ["1 March 1896", "Battle of Adwa"],
      ["October 1896", "Treaty of Addis Ababa"],
    ),
  },
  "russo-japanese": {
    participants: [
      "Empire of Japan",
      "Russian Empire",
      "Korea and Manchuria as contested territory",
    ],
    geography: "Manchuria, Korea, the Yellow Sea and the Sea of Japan.",
    developments: t(
      ["February 1904", "Japanese attack on Port Arthur"],
      ["August 1904", "Battles of the Yellow Sea and Liaoyang"],
      ["January 1905", "Port Arthur surrenders"],
      ["February–March 1905", "Battle of Mukden"],
      ["May 1905", "Battle of Tsushima"],
      ["September 1905", "Treaty of Portsmouth"],
    ),
  },
  ww1: {
    participants: [
      "Allied Powers, including Serbia, Montenegro, France, the British Empire, Russia, Italy and the United States",
      "Central Powers: Germany, Austria-Hungary, the Ottoman Empire and Bulgaria",
    ],
    geography:
      "Western and Eastern Fronts, Italy, the Balkans including Serbia and the Macedonian front, the Middle East, Africa and the oceans.",
    developments: t(
      [
        "28 July 1914",
        "Austria-Hungary declares war on Serbia; Belgrade is bombarded that evening",
      ],
      ["August 1914", "Serbian victory at Cer; battle of Tannenberg"],
      ["September 1914", "First Battle of the Marne"],
      [
        "October–November 1914",
        "First Battle of Ypres; trench warfare sets in on the Western Front",
      ],
      [
        "December 1914",
        "Serbian counter-offensive on the Kolubara drives the Austro-Hungarian army out of Serbia",
      ],
      [
        "February 1915 – January 1916",
        "Gallipoli campaign, ending in the Allied evacuation of the peninsula",
      ],
      [
        "April 1915",
        "First large-scale German chlorine attack opens the Second Battle of Ypres",
      ],
      [
        "October–November 1915",
        "German, Austro-Hungarian and Bulgarian invasion of Serbia; the Serbian army retreats through Montenegro and Albania",
      ],
      ["February–December 1916", "Battle of Verdun"],
      [
        "31 May – 1 June 1916",
        "Battle of Jutland, the only clash of the British and German battle fleets",
      ],
      [
        "June 1916",
        "Brusilov offensive breaks the Austro-Hungarian front in the east",
      ],
      ["1 July – 18 November 1916", "Battle of the Somme"],
      ["1917", "United States enters the war; revolutions in Russia"],
      ["31 July – 10 November 1917", "Third Battle of Ypres (Passchendaele)"],
      [
        "24 October 1917",
        "Austro-German breakthrough at Caporetto; the Italian army retreats to the Piave",
      ],
      ["20 November 1917", "British attack with massed tanks at Cambrai"],
      ["21 March 1918", "Operation Michael opens the German spring offensives"],
      [
        "26 March 1918",
        "Foch appointed to coordinate the Allied armies on the Western Front",
      ],
      [
        "18 July 1918",
        "French-led counter-attack on the Marne takes the initiative",
      ],
      ["8 August 1918", "Battle of Amiens opens the Allied Hundred Days"],
      [
        "September 1918",
        "Allied breakthrough at Dobro Pole; Bulgaria signs an armistice",
      ],
      [
        "19 September 1918",
        "Battle of Megiddo destroys the Ottoman armies in Palestine",
      ],
      [
        "26 September 1918",
        "American First Army opens the Meuse-Argonne offensive",
      ],
      ["30 October 1918", "Armistice of Mudros ends the Ottoman Empire's war"],
      ["By 1 November 1918", "All of pre-war Serbia is liberated"],
      ["11 November 1918", "Armistice"],
    ),
    bibliography: [
      {
        title:
          "Western Front — Jonathan Krause (1914-1918-online. International Encyclopedia of the First World War, 2015)",
        url: "https://encyclopedia.1914-1918-online.net/article/western-front/",
        publisher: "1914-1918-online",
        note: "A year-by-year account of the war in France and Belgium from the Schlieffen Plan to the Hundred Days, with casualty figures and a clear argument: the stalemate came from rapid innovation, not conservatism, and the front was finally won by Foch’s series of short attacks. It gives particular attention to the French army and to British command decisions.",
      },
      {
        title:
          "Eastern Front — Timothy C. Dowling (1914-1918-online. International Encyclopedia of the First World War, 2014)",
        url: "https://encyclopedia.1914-1918-online.net/article/eastern-front/",
        publisher: "1914-1918-online",
        note: "The war between Russia and the Central Powers from Tannenberg and Galicia to the Brusilov offensive and the Russian collapse, with detail on plans, tactics and losses. A few dates in the 1916 section are misprinted.",
      },
      {
        title:
          "Warfare 1914-1918 (South East Europe) — Dmitar Tasić (1914-1918-online. International Encyclopedia of the First World War, 2014)",
        url: "https://encyclopedia.1914-1918-online.net/article/warfare-1914-1918-south-east-europe/",
        publisher: "1914-1918-online",
        note: "A survey of the Balkan fronts, from the Austro-Hungarian invasions of 1914 to Dobro Pole, including Gallipoli, Romania and the irregular warfare and uprisings under occupation. It cites Austro-Hungarian General Staff figures for the losses of 1914.",
      },
      {
        title:
          "Serbia — Mile Bjelajac (1914-1918-online. International Encyclopedia of the First World War, 2015)",
        url: "https://encyclopedia.1914-1918-online.net/article/serbia/",
        publisher: "1914-1918-online",
        note: "Serbia’s war from the July crisis to liberation, with the state of the army in 1914, the retreat of 1915, the army in exile and the occupation and the Toplica uprising. Written from the Serbian side, it argues that Serbia neither wanted nor was ready for war.",
      },
      {
        title:
          "War in the Balkans — Richard C. Hall (1914-1918-online. International Encyclopedia of the First World War, 2018)",
        url: "https://encyclopedia.1914-1918-online.net/article/war-in-the-balkans-1-1/",
        publisher: "1914-1918-online",
        note: "An account of the whole Balkan war, from the Balkan Wars to Yugoslavia, giving due weight to Bulgaria, Greece, Romania and Albania; his companion article on Bulgaria explains the Bulgarian side of the Macedonian front.",
      },
      {
        title:
          "Italian Front — Vanda Wilcox (1914-1918-online. International Encyclopedia of the First World War, 2014)",
        url: "https://encyclopedia.1914-1918-online.net/article/italian-front/",
        publisher: "1914-1918-online",
        note: "A detailed narrative of Italy’s war by land and in the Adriatic, from the Isonzo battles to Vittorio Veneto, with casualty figures for each phase and a critical treatment of Cadorna and of the blame laid on the soldiers after Caporetto.",
      },
      {
        title:
          "Naval Warfare — Eric W. Osborne (1914-1918-online. International Encyclopedia of the First World War, 2014)",
        url: "https://encyclopedia.1914-1918-online.net/article/naval-warfare/",
        publisher: "1914-1918-online",
        note: "The surface and submarine war at sea, explaining why the pre-war strategies of both navies made a decisive battle unlikely, with the actions in the North Sea, Jutland and the end of the High Seas Fleet.",
      },
      {
        title:
          "Warfare 1914-1918 (Ottoman Empire/Middle East) — Mehmet Fatih Baş (1914-1918-online. International Encyclopedia of the First World War, 2019)",
        url: "https://encyclopedia.1914-1918-online.net/article/warfare-1914-1918-ottoman-empiremiddle-east/",
        publisher: "1914-1918-online",
        note: "A survey of the Ottoman army’s campaigns in the Caucasus, Mesopotamia, Palestine and at Gallipoli, giving Ottoman casualty figures and the Ottoman view of the main battles.",
      },
      {
        title:
          "Erich von Falkenhayn, General Headquarters, 1914–1916, and Its Critical Decisions (London: Hutchinson, 1919)",
        url: "https://archive.org/details/generalheadquart00falk",
        publisher: "Internet Archive",
        note: "The memoirs of the German chief of the General Staff from September 1914 to August 1916, reproducing his memorandum on the attack at Verdun and explaining his decisions on the Serbian campaign, Salonika and the Brusilov offensive. A self-justifying account; his claims about the losses at Verdun are not borne out by later figures.",
      },
      {
        title:
          "Erich Ludendorff, My War Memories, 1914–1918, vol. 1 (London: Hutchinson, 1919)",
        url: "https://archive.org/details/mywarmemories19101lude",
        publisher: "Internet Archive",
        note: "The first volume of the German quartermaster-general’s memoirs, covering Tannenberg and the Eastern Front to 1916, written soon after the defeat.",
      },
      {
        title:
          "Erich Ludendorff, My War Memories, 1914–1918, vol. 2 (London: Hutchinson, 1919)",
        url: "https://archive.org/details/mywarmemories19102lude",
        publisher: "Internet Archive",
        note: "Ludendorff’s account of 1917–1918, including the planning of Caporetto and the spring offensives and his description of 8 August as the black day of the German army. He blames defeat partly on the home front.",
      },
      {
        title:
          "Sir Douglas Haig’s Despatches (December 1915–April 1919), ed. J. H. Boraston (London: Dent, 1919)",
        url: "https://archive.org/details/sirdouglashaigsd00haiguoft",
        publisher: "Internet Archive",
        note: "The British commander-in-chief’s official despatches on the Somme, Arras, Messines, Ypres, Cambrai and 1918, giving his stated objectives and the forces engaged. They present his operations in the best light and claim enemy losses well above those given in the encyclopedia articles used here.",
      },
      {
        title:
          "Reinhard Scheer, Germany’s High Sea Fleet in the World War (London, 1920)",
        url: "https://archive.org/details/germanyshighseaf00sche",
        publisher: "Internet Archive",
        note: "The German fleet commander’s account of the North Sea war and Jutland, including his conclusion after the battle that only submarine warfare could defeat Britain.",
      },
      {
        title:
          "Otto Liman von Sanders, Five Years in Turkey, trans. Carl Reichmann (Annapolis: United States Naval Institute, 1927)",
        url: "https://archive.org/details/in.ernet.dli.2015.24341",
        publisher: "Internet Archive",
        note: "The memoirs of the head of the German military mission, who commanded at Gallipoli and in Palestine in 1918. Valuable on the Ottoman side of both campaigns, including the August landings and the collapse at Megiddo, but written to defend his command.",
      },
      {
        title:
          "Ian Hamilton, Gallipoli Diary, vol. 1 (New York: George H. Doran, 1920)",
        url: "https://archive.org/details/gallipolidiaryvo19317gut",
        publisher: "Internet Archive (Project Gutenberg text)",
        note: "The British commander’s diary of the Dardanelles campaign, published after the war, including his order on the night of the landing that the Anzacs dig in and hold on.",
      },
    ],
  },
  ww2: {
    participants: [
      "Allied powers, including the United Kingdom, the Soviet Union, the United States, China and France",
      "Axis powers, including Germany, Japan and Italy",
    ],
    geography: "Europe, North Africa, the Atlantic, Asia and the Pacific.",
    developments: t(
      ["1 September 1939", "Germany invades Poland"],
      ["17 September 1939", "The Soviet Union invades Poland from the east"],
      [
        "10 May – 25 June 1940",
        "Germany conquers the Netherlands, Belgium and France",
      ],
      [
        "July – October 1940",
        "Battle of Britain; the invasion of Britain is postponed",
      ],
      ["22 June 1941", "Germany invades the Soviet Union"],
      ["5–6 December 1941", "Soviet counteroffensive before Moscow"],
      [
        "1941–1945",
        "Holocaust: Nazi Germany and its collaborators murder six million Jews",
      ],
      ["7–8 December 1941", "Japan attacks Pearl Harbor and invades Malaya"],
      ["15 February 1942", "Singapore surrenders"],
      [
        "4–8 May 1942",
        "Battle of the Coral Sea turns back the invasion of Port Moresby",
      ],
      ["June 1942", "Battle of Midway"],
      [
        "August 1942 – February 1943",
        "Guadalcanal campaign ends in Japanese evacuation",
      ],
      ["November 1942–February 1943", "Stalingrad encirclement and surrender"],
      [
        "May 1943",
        "U-boats withdrawn from the North Atlantic after heavy losses",
      ],
      ["March – July 1944", "Japanese offensive defeated at Imphal and Kohima"],
      ["June 1944", "Normandy landings"],
      [
        "22 June – 19 August 1944",
        "Operation Bagration destroys Army Group Centre",
      ],
      ["17–25 September 1944", "Operation Market Garden fails at Arnhem"],
      [
        "23–26 October 1944",
        "Battle of Leyte Gulf cripples the Japanese fleet",
      ],
      [
        "16 December 1944",
        "German offensive in the Ardennes opens the Battle of the Bulge",
      ],
      ["19 February – 26 March 1945", "Battle of Iwo Jima"],
      ["1 April – 21 June 1945", "Battle of Okinawa"],
      [
        "16 April – 2 May 1945",
        "Battle of Berlin; Hitler kills himself on 30 April",
      ],
      ["May 1945", "Germany surrenders"],
      ["August–September 1945", "Atomic bombings; Japan surrenders"],
    ),
    bibliography: [
      {
        title:
          "Earl F. Ziemke and Magna E. Bauer, Moscow to Stalingrad: Decision in the East (Washington: Center of Military History, 1987)",
        url: "https://www.ibiblio.org/hyperwar/USA/USA-EF-Decision/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The U.S. Army’s history of the German-Soviet war from Barbarossa to the encirclement at Stalingrad, built on captured German records and the Soviet official histories, which it quotes and argues with. Its conclusion weighs the battles of Moscow and Stalingrad as the turning points of the war in the East.",
      },
      {
        title:
          "Earl F. Ziemke, Stalingrad to Berlin: The German Defeat in the East (Washington: Center of Military History, 1987)",
        url: "https://www.ibiblio.org/hyperwar/USA/USA-EF-Defeat/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The sequel, from Stalingrad through Kursk, the collapse of Army Group Center and the fall of Berlin, seen largely from the German side. Its closing chapter sets out the scale and cost of the Eastern Front and Hitler’s responsibility for the German defeat.",
      },
      {
        title:
          "George E. Blau, The German Campaign in Russia: Planning and Operations (1940–1942) (Department of the Army Pamphlet 20-261a, 1955)",
        url: "https://archive.org/details/PAM20-261A",
        publisher: "Internet Archive",
        note: "An early Army study of German planning and operations in Russia to the high tide of 1942, drawing on German records and the postwar writings of Halder and other German generals, whose case against Hitler’s decisions it largely adopts.",
      },
      {
        title:
          "The Campaign in Poland, 1939 (West Point: Department of Military Art and Engineering, United States Military Academy, 1945)",
        url: "https://archive.org/details/CampaignInPoland1939",
        publisher: "Internet Archive",
        note: "A short account written for cadets from wartime intelligence material, when the Polish plans were still largely unknown; it follows the German armies day by day and closes with comments on why Poland fell and what the Allies failed to learn.",
      },
      {
        title:
          "L. F. Ellis, The War in France and Flanders, 1939–1940 (London: HMSO, 1954)",
        url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-NWE-Flanders/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The British official history of the British Expeditionary Force from the first winter to Dunkirk and the evacuations south of the Somme. Its final chapter judges Gamelin, Georges, Weygand and Gort and traces the defeat to pre-war British policy.",
      },
      {
        title:
          "Basil Collier, The Defence of the United Kingdom (London: HMSO, 1957)",
        url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-Defence-UK/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The British official history of home defence, from rearmament through the invasion threat of 1940, the Battle of Britain, the Blitz and the flying bombs and rockets. It sets out the German plans for Operation Sealion and closes with a summing-up of the air defences and radar.",
      },
      {
        title:
          "Denis Richards, Royal Air Force 1939–1945, vol. I: The Fight at Odds (London: HMSO, 1953)",
        url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-RAF-I/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The first volume of the RAF’s official history, to the end of 1941, with a full chapter on the Battle of Britain that compares wartime claims with German records and weighs the controversy over Dowding and Park.",
      },
      {
        title:
          "Hilary St. George Saunders, Royal Air Force 1939–1945, vol. III: The Fight Is Won (London: HMSO, 1954)",
        url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-RAF-III/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The final volume of the RAF history, covering 1943–1945 in Europe and Burma; its Burma chapters describe the air supply that sustained the defence of the Admin Box, Kohima and Imphal and the Chindit operations.",
      },
      {
        title:
          "S. W. Roskill, The War at Sea 1939–1945, vol. II: The Period of Balance (London: HMSO, 1956)",
        url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-RN-II/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The British official naval history for 1942 to May 1943, including the U-boat campaign off the American coast and the convoy battles that ended in the defeat of the U-boats in May 1943. It is outspoken about American slowness to adopt convoy.",
      },
      {
        title:
          "United States Strategic Bombing Survey (Pacific), The Campaigns of the Pacific War",
        url: "https://www.ibiblio.org/hyperwar/AAF/USSBS/PTO-Campaigns/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "A postwar naval analysis of the Pacific campaigns from Japanese planning and Pearl Harbor to Iwo Jima, based partly on interrogations of Japanese officers. It predates the release of the codebreaking story, and some of its chapters are not online.",
      },
      {
        title:
          "American Military History (Army Historical Series, Center of Military History)",
        url: "https://www.ibiblio.org/hyperwar/AMH/AMH/index.html",
        publisher: "HyperWar (ibiblio)",
        note: "The U.S. Army’s general history; its Second World War chapters give a compact overview of the defensive phase, the war against Germany and Italy and the war against Japan, with American strategy and its debates at the centre.",
      },
      {
        title:
          "Invasion of Poland, Fall 1939 (Holocaust Encyclopedia, United States Holocaust Memorial Museum)",
        url: "https://encyclopedia.ushmm.org/content/en/article/invasion-of-poland-fall-1939",
        publisher: "United States Holocaust Memorial Museum",
        note: "A short encyclopedia article on the diplomacy, the German and Soviet invasions and the partition and occupation of Poland, placing the campaign at the start of the Nazi occupation regime.",
      },
    ],
  },
  indochina: {
    participants: [
      "France and the State of Vietnam",
      "Viet Minh and the Democratic Republic of Vietnam",
      "People's Republic of China (aid to the Viet Minh)",
      "United States (aid to France)",
    ],
    geography:
      "Tonkin, Annam and Cochinchina, with fighting in Laos and Cambodia.",
    developments: t(
      ["September 1945", "Democratic Republic of Vietnam proclaimed"],
      ["December 1946", "War begins in Hanoi"],
      ["1950", "Border campaign; French posts on the Chinese frontier lost"],
      ["1951", "Viet Minh assaults in the Red River Delta repulsed"],
      ["March–May 1954", "Siege of Điện Biên Phủ"],
      ["July 1954", "Geneva agreements"],
    ),
  },
};
