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
// First World War and the Serbian Front (batch K4).
const ie = (
  slug: string,
  title: string,
  author: string,
  year: number,
): Source => ({
  title: `${title} — ${author} (1914-1918-online. International Encyclopedia of the First World War, ${year})`,
  url: `https://encyclopedia.1914-1918-online.net/article/${slug}/`,
  publisher: "1914-1918-online",
});
const bjelajac = ie("serbia", "Serbia", "Mile Bjelajac", 2015);
const tasic = ie(
  "warfare-1914-1918-south-east-europe",
  "Warfare 1914-1918 (South East Europe)",
  "Dmitar Tasić",
  2014,
);
const hallBalkans = ie(
  "war-in-the-balkans-1-1",
  "War in the Balkans",
  "Richard C. Hall",
  2018,
);
const hallBulgaria = ie("bulgaria", "Bulgaria", "Richard C. Hall", 2016);
const raspopovic = ie("montenegro", "Montenegro", "Radoslav Raspopović", 2014);
const ristovic = ie(
  "occupation-during-and-after-the-war-south-east-europe",
  "Occupation during and after the War (South East Europe)",
  "Milan Ristović",
  2014,
);
const krause = ie("western-front", "Western Front", "Jonathan Krause", 2015);
const dowling = ie(
  "eastern-front",
  "Eastern Front",
  "Timothy C. Dowling",
  2014,
);
const steinberg = ie(
  "warfare-1914-1918-russian-empire",
  "Warfare 1914-1918 (Russian Empire)",
  "John W. Steinberg",
  2015,
);
const leGall = ie(
  "marne-battles-of-the-1-1",
  "Marne, Battles of the",
  "Erwan Le Gall",
  2023,
);
const philpott = ie(
  "somme-battles-of",
  "Somme, Battles of",
  "William Philpott",
  2014,
);
const wilcox = ie("italian-front", "Italian Front", "Vanda Wilcox", 2014);
const salvador = ie(
  "isonzo-battles-of",
  "Isonzo, Battles of",
  "Alessandro Salvador",
  2016,
);
const osborne = ie("naval-warfare", "Naval Warfare", "Eric W. Osborne", 2014);
const epkenhans = ie(
  "jutland-battle-of",
  "Jutland, Battle of",
  "Michael Epkenhans",
  2016,
);
const skinner = ie(
  "gallipoli-campaign-and-battle-of",
  "Gallipoli, Campaign and Battle of",
  "Harold Allen Skinner Jr.",
  2023,
);
const bas = ie(
  "warfare-1914-1918-ottoman-empiremiddle-east",
  "Warfare 1914-1918 (Ottoman Empire/Middle East)",
  "Mehmet Fatih Baş",
  2019,
);
const kitchen = ie(
  "egyptian-expeditionary-force",
  "Egyptian Expeditionary Force",
  "James E. Kitchen",
  2017,
);
const lloyd = ie(
  "hundred-days-offensive",
  "Hundred Days Offensive",
  "Nicholas Lloyd",
  2014,
);
const watson = ie(
  "german-spring-offensives-1918",
  "German Spring Offensives 1918",
  "Alexander Watson",
  2016,
);
const falkenhayn: Source = {
  title:
    "Erich von Falkenhayn, General Headquarters, 1914–1916, and Its Critical Decisions (London: Hutchinson, 1919)",
  url: "https://archive.org/details/generalheadquart00falk",
  publisher: "Internet Archive",
};
const ludendorff1: Source = {
  title:
    "Erich Ludendorff, My War Memories, 1914–1918, vol. 1 (London: Hutchinson, 1919)",
  url: "https://archive.org/details/mywarmemories19101lude",
  publisher: "Internet Archive",
};
const ludendorff2: Source = {
  title:
    "Erich Ludendorff, My War Memories, 1914–1918, vol. 2 (London: Hutchinson, 1919)",
  url: "https://archive.org/details/mywarmemories19102lude",
  publisher: "Internet Archive",
};
const haigDespatches: Source = {
  title:
    "Sir Douglas Haig’s Despatches (December 1915–April 1919), ed. J. H. Boraston (London: Dent, 1919)",
  url: "https://archive.org/details/sirdouglashaigsd00haiguoft",
  publisher: "Internet Archive",
};
const scheer: Source = {
  title:
    "Reinhard Scheer, Germany’s High Sea Fleet in the World War (London, 1920)",
  url: "https://archive.org/details/germanyshighseaf00sche",
  publisher: "Internet Archive",
};
const liman: Source = {
  title:
    "Otto Liman von Sanders, Five Years in Turkey, trans. Carl Reichmann (Annapolis: United States Naval Institute, 1927)",
  url: "https://archive.org/details/in.ernet.dli.2015.24341",
  publisher: "Internet Archive",
};
const hamilton: Source = {
  title:
    "Ian Hamilton, Gallipoli Diary, vol. 1 (New York: George H. Doran, 1920)",
  url: "https://archive.org/details/gallipolidiaryvo19317gut",
  publisher: "Internet Archive (Project Gutenberg text)",
};
const blucher = ndb(
  "35354",
  "Blücher von Wahlstatt, Gebhard Leberecht Fürst — Hans Haussherr (Neue Deutsche Biographie 2, 1955)",
);
const gneisenau = ndb(
  "69918",
  "Gneisenau, August Wilhelm Anton Graf Neidhardt von — Hermann Teske (Neue Deutsche Biographie 6, 1964)",
);

// Second World War (batch K5).
const hyperwar = "HyperWar (ibiblio)";
const ukOfficial = (path: string, title: string): Source => ({
  title: `${title} (History of the Second World War, United Kingdom Military Series)`,
  url: `https://www.ibiblio.org/hyperwar/UN/UK/${path}.html`,
  publisher: hyperwar,
});
const ellis = ukOfficial(
  "UK-NWE-Flanders/UK-NWE-Flanders-23",
  "L. F. Ellis, The War in France and Flanders, 1939–1940 (London: HMSO, 1954), ch. XXIII: Conduct and Consequences of the Campaign",
);
const collierSealion = ukOfficial(
  "UK-Defence-UK/UK-DefenseOfUK-11",
  "Basil Collier, The Defence of the United Kingdom (London: HMSO, 1957), ch. XI: Operation ‘Sealion’",
);
const collierLastPhase = ukOfficial(
  "UK-Defence-UK/UK-DefenseOfUK-15",
  "Basil Collier, The Defence of the United Kingdom (London: HMSO, 1957), ch. XV: The Battle of Britain: The Last Phase",
);
const collierSumming = ukOfficial(
  "UK-Defence-UK/UK-DefenseOfUK-26",
  "Basil Collier, The Defence of the United Kingdom (London: HMSO, 1957), ch. XXVI: A Summing-Up",
);
const richardsBritain = ukOfficial(
  "UK-RAF-I/UK-RAF-I-6",
  "Denis Richards, Royal Air Force 1939–1945, vol. I: The Fight at Odds (London: HMSO, 1953), ch. VI: The Battle of Britain",
);
const richardsSingapore = ukOfficial(
  "UK-RAF-II/UK-RAF-II-2",
  "Denis Richards and Hilary St. George Saunders, Royal Air Force 1939–1945, vol. II: The Fight Avails (London: HMSO, 1954), ch. II: The Fall of Singapore",
);
const richardsAlamein = ukOfficial(
  "UK-RAF-II/UK-RAF-II-11",
  "Denis Richards and Hilary St. George Saunders, Royal Air Force 1939–1945, vol. II: The Fight Avails (London: HMSO, 1954), ch. XI: ‘Middle East’: The Alamein Line and Decisive Victory",
);
const saundersImphal = ukOfficial(
  "UK-RAF-III/UK-RAF-III-15",
  "Hilary St. George Saunders, Royal Air Force 1939–1945, vol. III: The Fight Is Won (London: HMSO, 1954), ch. XV: Arakan, Kohima, and Imphal",
);
const roskillAmerica = ukOfficial(
  "UK-RN-II/UK-RN-II-4",
  "S. W. Roskill, The War at Sea 1939–1945, vol. II: The Period of Balance (London: HMSO, 1956), ch. IV: The Battle of the Atlantic: The Campaign in American Waters",
);
const roskillEscorts = ukOfficial(
  "UK-RN-II/UK-RN-II-14",
  "S. W. Roskill, The War at Sea 1939–1945, vol. II: The Period of Balance (London: HMSO, 1956), ch. XIV: The Battle of the Atlantic: The Triumph of the Escorts",
);
const amh = (chapter: number, title: string): Source => ({
  title: `American Military History (Army Historical Series, Center of Military History), ch. ${chapter}: ${title}`,
  url: `https://www.ibiblio.org/hyperwar/AMH/AMH/AMH-${chapter}.html`,
  publisher: hyperwar,
});
const amhDefensive = amh(20, "World War II: The Defensive Phase");
const amhGermany = amh(22, "World War II: The War Against Germany and Italy");
const amhJapan = amh(23, "World War II: The War Against Japan");
const ussbs = (chapter: number, title: string): Source => ({
  title: `United States Strategic Bombing Survey (Pacific), The Campaigns of the Pacific War, ch. ${chapter}: ${title}`,
  url: `https://www.ibiblio.org/hyperwar/AAF/USSBS/PTO-Campaigns/USSBS-PTO-${chapter}.html`,
  publisher: hyperwar,
});
const ussbsPlanning = ussbs(1, "Japanese Naval Planning");
const ussbsPearl = ussbs(
  2,
  "The Japanese Attack on Pearl Harbor, Planning and Execution",
);
const ussbsSouth = ussbs(
  3,
  "The Japanese Invasion of the Philippines, the Dutch East Indies, and Southeast Asia",
);
const ussbsCoral = ussbs(4, "The Battle of the Coral Sea");
const ussbsMidway = ussbs(5, "The Battle of Midway");
const ussbsSolomons = ussbs(7, "The Solomons Campaign");
const ussbsIwo = ussbs(13, "The Iwo Jima Campaign");
const ziemkeBauer = (chapter: number, title: string): Source => ({
  title: `Earl F. Ziemke and Magna E. Bauer, Moscow to Stalingrad: Decision in the East (Washington: Center of Military History, 1987), ch. ${title}`,
  url: `https://www.ibiblio.org/hyperwar/USA/USA-EF-Decision/USA-EF-Decision-${chapter}.html`,
  publisher: hyperwar,
});
const zbBarbarossa = ziemkeBauer(2, "II: The Blitzkrieg");
const zbMoscow = ziemkeBauer(3, "III: To Moscow");
const zbCounter = ziemkeBauer(4, "IV: The Counteroffensive: First Phase");
const zbFinale = ziemkeBauer(23, "XXIII: Stalingrad, Finale");
const zbConclusion = ziemkeBauer(24, "XXIV: Conclusion");
const ziemke = (chapter: number, title: string): Source => ({
  title: `Earl F. Ziemke, Stalingrad to Berlin: The German Defeat in the East (Washington: Center of Military History, 1987), ch. ${title}`,
  url: `https://www.ibiblio.org/hyperwar/USA/USA-EF-Defeat/USA-EF-Defeat-${chapter}.html`,
  publisher: hyperwar,
});
const zZitadelle = ziemke(7, "VII: Operation ZITADELLE");
const zSummer = ziemke(8, "VIII: The First Soviet Summer Offensive");
const zCenter = ziemke(15, "XV: The Collapse of the Center");
const zBerlin = ziemke(21, "XXI: Berlin");
const zConclusion = ziemke(22, "XXII: Conclusion");
const archive = (id: string, title: string): Source => ({
  title,
  url: `https://archive.org/details/${id}`,
  publisher: "Internet Archive",
});
const pamPoland = archive(
  "PAM20-255",
  "Robert M. Kennedy, The German Campaign in Poland (1939) (Department of the Army Pamphlet 20-255, 1956)",
);
const westPoint = archive(
  "CampaignInPoland1939",
  "The Campaign in Poland, 1939 (West Point: Department of Military Art and Engineering, United States Military Academy, 1945)",
);
const pamRussia = archive(
  "PAM20-261A",
  "George E. Blau, The German Campaign in Russia: Planning and Operations (1940–1942) (Department of the Army Pamphlet 20-261a, 1955)",
);
const cmh = (id: string, title: string, author: string, year: number) =>
  archive(
    id,
    `${title}: The U.S. Army Campaigns of World War II — ${author} (Center of Military History, ${year})`,
  );
const cmhPapua = cmh("Papua", "Papua", "Center of Military History", 1992);
const cmhGuadalcanal = cmh(
  "Guadalcanal",
  "Guadalcanal",
  "Charles R. Anderson",
  1993,
);
const cmhEgypt = cmh("Egypt-Libya", "Egypt-Libya", "Clayton R. Newell", 1993);
const cmhIndiaBurma = cmh("IndiaBurma", "India-Burma", "David W. Hogan", 1992);
const cmhCentralBurma = cmh(
  "CentralBurma",
  "Central Burma",
  "George L. MacGarrigle",
  1996,
);
const cmhNormandy = cmh(
  "NormandyCmh72-18",
  "Normandy",
  "William M. Hammond",
  1994,
);
const cmhNorthernFrance = cmh(
  "NorthernFrance",
  "Northern France",
  "David W. Hogan",
  1995,
);
const cmhRhineland = cmh("RhinelandCmh72-25", "Rhineland", "Ted Ballard", 1995);
const cmhArdennes = cmh(
  "Ardennes-Alsace",
  "Ardennes-Alsace",
  "Roger Cirillo",
  1995,
);
const cmhLeyte = cmh("Leyte", "Leyte", "Charles R. Anderson", 1994);
const cmhRyukyus = cmh("Ryukus", "Ryukyus", "Arnold G. Fisch", 2004);
const cmhWesternPacific = cmh(
  "WesternPacific",
  "Western Pacific",
  "Charles R. Anderson",
  1994,
);
const ushmmPoland: Source = {
  title:
    "Invasion of Poland, Fall 1939 (Holocaust Encyclopedia, United States Holocaust Memorial Museum)",
  url: "https://encyclopedia.ushmm.org/content/en/article/invasion-of-poland-fall-1939",
  publisher: "United States Holocaust Memorial Museum",
};
const rundstedt = ndb(
  "109048",
  "Rundstedt, Karl Rudolf Gerd von — Sönke Neitzel (Neue Deutsche Biographie 22, 2005)",
);
const manstein = ndb(
  "57890",
  "Manstein, Erich von Lewinski genannt von — Ernst Klink (Neue Deutsche Biographie 16, 1990)",
);
const guderian = ndb(
  "69951",
  "Guderian, Heinz Wilhelm — Thilo Vogelsang (Neue Deutsche Biographie 7, 1966)",
);
const raeder = ndb(
  "104204",
  "Raeder, Erich — Michael Salewski (Neue Deutsche Biographie 21, 2003)",
);
const paulus = ndb(
  "94261",
  "Paulus, Friedrich Wilhelm Ernst — Manfred Kehrig (Neue Deutsche Biographie 20, 2001)",
);
const rommel = ndb(
  "107896",
  "Rommel, Eugen Johannes Erwin — Sönke Neitzel (Neue Deutsche Biographie 22, 2005)",
);
const model = ndb(
  "63801",
  "Model, Walter — Dermot Bradley (Neue Deutsche Biographie 17, 1994)",
);

// Rome (batch K6).
const thayer = (path: string, title: string): Source => ({
  title,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/${path}%2A.html`,
  publisher: "LacusCurtius",
});
const eb1911 = (page: string, title: string): Source => ({
  title: `“${title}”, Encyclopædia Britannica, 11th ed. (1911)`,
  url: `https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/${page}`,
  publisher: "Wikisource",
});
const liviusRome = (path: string, title: string): Source => ({
  title,
  url: `https://www.livius.org/articles/${path}/`,
  publisher: livius,
});
const gutenberg = (id: number, title: string): Source => ({
  title,
  url: `https://www.gutenberg.org/ebooks/${id}`,
  publisher: "Project Gutenberg",
});
const polybius3 = thayer(
  "Polybius/3",
  "Polybius, Histories, Book 3 (Loeb translation)",
);
const polybius14 = thayer(
  "Polybius/14",
  "Polybius, Histories, Book 14 (Loeb translation)",
);
const polybius15 = thayer(
  "Polybius/15",
  "Polybius, Histories, Book 15 (Loeb translation)",
);
const polybius18 = thayer(
  "Polybius/18",
  "Polybius, Histories, Book 18 (Loeb translation)",
);
const livy926 = gutenberg(
  10907,
  "Livy, The History of Rome, Books 9–26 (trans. Cyrus Edmonds)",
);
const livy2736 = gutenberg(
  12582,
  "Livy, The History of Rome, Books 27–36 (trans. Cyrus Edmonds)",
);
const livy3745 = gutenberg(
  44318,
  "Livy, The History of Rome, Books 37 to the End (trans. W. A. McDevitte)",
);
const ebPunic = eb1911("Punic_Wars", "Punic Wars");
const ebJulius = eb1911("Caesar,_Gaius_Julius", "Caesar, Gaius Julius");
const ebBoadicea = eb1911("Boadicea", "Boadicea");
const ebConstantine = eb1911("Constantine_(emperors)", "Constantine");
const ebGoths = eb1911("Goths", "Goths");
const ebAttila = eb1911("Attila", "Attila");
const plutarchFlamininus = thayer(
  "Plutarch/Lives/Flamininus",
  "Plutarch, Life of Flamininus (Loeb translation)",
);
const plutarchAemilius = thayer(
  "Plutarch/Lives/Aemilius",
  "Plutarch, Life of Aemilius Paulus (Loeb translation)",
);
const plutarchCrassus = thayer(
  "Plutarch/Lives/Crassus",
  "Plutarch, Life of Crassus (Loeb translation)",
);
const plutarchCaesar = thayer(
  "Plutarch/Lives/Caesar",
  "Plutarch, Life of Caesar (Loeb translation)",
);
const plutarchAntony = thayer(
  "Plutarch/Lives/Antony",
  "Plutarch, Life of Antony (Loeb translation)",
);
const dio40 = thayer(
  "Cassius_Dio/40",
  "Cassius Dio, Roman History, Book 40 (Loeb translation)",
);
const dio50 = thayer(
  "Cassius_Dio/50",
  "Cassius Dio, Roman History, Book 50 (Loeb translation)",
);
const dio51 = thayer(
  "Cassius_Dio/51",
  "Cassius Dio, Roman History, Book 51 (Loeb translation)",
);
const dio56 = thayer(
  "Cassius_Dio/56",
  "Cassius Dio, Roman History, Book 56 (Loeb translation)",
);
const dio62 = thayer(
  "Cassius_Dio/62",
  "Cassius Dio, Roman History, Book 62 (Loeb translation)",
);
const caesarGallic7 = thayer(
  "Caesar/Gallic_War/7A",
  "Caesar, The Gallic War, Book 7 (Loeb translation)",
);
const caesarCivil1 = thayer(
  "Caesar/Civil_Wars/1A",
  "Caesar, The Civil Wars, Book 1 (Loeb translation)",
);
const caesarCivil3 = thayer(
  "Caesar/Civil_Wars/3A",
  "Caesar, The Civil Wars, Book 3 (Loeb translation)",
);
const appianCivil2 = thayer(
  "Appian/Civil_Wars/2",
  "Appian, The Civil Wars, Book 2 (Loeb translation)",
);
const tacitusAnnals1 = thayer(
  "Tacitus/Annals/1D",
  "Tacitus, Annals 1.55–71 (Loeb translation)",
);
const tacitusAnnals14 = thayer(
  "Tacitus/Annals/14B",
  "Tacitus, Annals 14.29–39 (Loeb translation)",
);
const tacitusHistories5 = thayer(
  "Tacitus/Histories/5A",
  "Tacitus, Histories 5.1–13 (Loeb translation)",
);
const tacitusFragments = thayer(
  "Tacitus/Histories/Fragments",
  "Tacitus, Histories, fragments (Loeb translation)",
);
const ammianus31 = thayer(
  "Ammian/31",
  "Ammianus Marcellinus, Roman History, Book 31 (Loeb translation)",
);
const buryAttila = thayer(
  "secondary/BURLAT/9",
  "J. B. Bury, History of the Later Roman Empire (1923), ch. IX: The Empire of Attila",
);
const velleius: Source = {
  title:
    "Velleius Paterculus on the Battle in the Teutoburg Forest (2.117–120, trans. F. W. Shipley)",
  url: "https://www.livius.org/sources/content/paterculus-on-the-battle-in-the-teutoburg-forest/",
  publisher: livius,
};
const josephus = gutenberg(
  2850,
  "Flavius Josephus, The Wars of the Jews (trans. William Whiston)",
);
const lactantius: Source = {
  title:
    "Lactantius, Of the Manner in Which the Persecutors Died (trans. William Fletcher)",
  url: "https://www.newadvent.org/fathers/0705.htm",
  publisher: "New Advent",
};
const eusebiusLife: Source = {
  title: "Eusebius, Life of Constantine, Book 1 (trans. Ernest C. Richardson)",
  url: "https://www.newadvent.org/fathers/25021.htm",
  publisher: "New Advent",
};
const zosimus2: Source = {
  title: "Zosimus, New History, Book 2 (anonymous translation, London, 1814)",
  url: "https://www.tertullian.org/fathers/zosimus02_book2.htm",
  publisher: "The Tertullian Project",
};
const zosimus4: Source = {
  title: "Zosimus, New History, Book 4 (anonymous translation, London, 1814)",
  url: "https://www.tertullian.org/fathers/zosimus04_book4.htm",
  publisher: "The Tertullian Project",
};
const jordanes = gutenberg(
  14809,
  "Jordanes, The Origin and Deeds of the Goths (trans. Charles C. Mierow)",
);
const liviusMacedonia = liviusRome(
  "place/macedonia/macedonia-8",
  "Macedonia (8)",
);
const liviusCarrhae = liviusRome("battle/carrhae-53-bce", "Carrhae (53 BCE)");
const liviusActium = liviusRome("battle/actium-31-bce", "Actium (31 BCE)");
const liviusTeutoburg = liviusRome(
  "battle/teutoburg-forest-9-ce/teutoburg-forest-5",
  "Teutoburg Forest (5)",
);
const liviusKalkriese = liviusRome(
  "battle/teutoburg-forest-9-ce/kalkriese",
  "Kalkriese",
);
const liviusJewishWar = liviusRome(
  "concept/roman-jewish-wars/roman-jewish-wars-3",
  "Jewish War (66–70)",
);
const liviusJerusalem = liviusRome(
  "concept/roman-jewish-wars/roman-jewish-wars-4",
  "Titus’ Siege of Jerusalem",
);
const liviusJewishChronology = liviusRome(
  "concept/roman-jewish-wars/roman-jewish-wars-5",
  "Chronology of the Jewish War, 66–70",
);
const liviusAdrianople = liviusRome("battle/adrianople", "Adrianople (378 CE)");

// Short contexts for the one-engagement campaigns (batch K7).
const site =
  (publisher: string) =>
  (url: string, title: string): Source => ({
    title,
    url,
    publisher,
  });
const britannica = (path: string, title: string): Source => ({
  title: `${title} (Encyclopaedia Britannica)`,
  url: `https://www.britannica.com/${path}`,
  publisher: "Encyclopaedia Britannica",
});
const wikisourceZh = site("Wikisource (Chinese)");
const fordham = site("Internet History Sourcebooks (Fordham University)");
const deRe = site("De Re Militari");
const worldHistory = site("World History Encyclopedia");
const ebsco = site("EBSCO Research Starters");
const nps = site("U.S. National Park Service");
const battlefields = site("American Battlefield Trust");
const stateDept = site("U.S. Department of State, Office of the Historian");
const herodotus = gutenberg(
  2456,
  "Herodotus, The History of Herodotus, vol. 2 (trans. G. C. Macaulay)",
);
const ebMarathon = eb1911("Marathon", "Marathon");
const ebAgincourt = eb1911("Agincourt", "Agincourt");
const ebBreitenfeld = eb1911("Breitenfeld", "Breitenfeld");
const ebThirtyYears = eb1911("Thirty_Years%27_War", "Thirty Years’ War");
const ebBlenheim = eb1911("Blenheim", "Blenheim");
const ebCrusades = eb1911("Crusades", "Crusades");
const redCliffsWh = worldHistory(
  "https://www.worldhistory.org/Battle_of_Red_Cliffs/",
  "Battle of Red Cliffs — Joshua J. Mark",
);
const sanguozhi1 = wikisourceZh(
  "https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701",
  "Chen Shou, Records of the Three Kingdoms (Sanguozhi) 1, Annals of Emperor Wu, in Chinese",
);
const sanguozhi54 = wikisourceZh(
  "https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B754",
  "Chen Shou, Records of the Three Kingdoms (Sanguozhi) 54, Biography of Zhou Yu, in Chinese",
);
const procopius = gutenberg(
  16764,
  "Procopius, History of the Wars, Books I and II (trans. H. B. Dewing)",
);
const baladhuri = fordham(
  "https://sourcebooks.web.fordham.edu/source/yarmuk.asp",
  "Al-Baladhuri: The Battle of the Yarmuk (636) and After",
);
const yarmoukWh = worldHistory(
  "https://www.worldhistory.org/article/1563/battle-of-yarmouk/",
  "Battle of Yarmouk — Syed Muhammad Khan",
);
const englishHeritage: Source = {
  title: "History of Battle Abbey and Battlefield",
  url: "https://www.english-heritage.org.uk/visit/places/1066-battle-of-hastings-abbey-and-battlefield/history-and-stories/history/",
  publisher: "English Heritage",
};
const bayeuxMuseum: Source = {
  title: "What is the Bayeux Tapestry about? The story of the Tapestry",
  url: "https://www.bayeuxmuseum.com/en/the-bayeux-tapestry/discover-the-bayeux-tapestry/what-is-the-bayeux-tapestry-about/",
  publisher: "Bayeux Museum",
};
const malmesbury = fordham(
  "https://sourcebooks.fordham.edu/source/1066malmesbury.asp",
  "William of Malmesbury: The Battle of Hastings, 1066",
);
const hattinFordham = fordham(
  "https://sourcebooks.web.fordham.edu/source/1187hattin.asp",
  "De Expugnatione Terrae Sanctae per Saladinum: The Battle of Hattin, 1187",
);
const hattinDeRe = deRe(
  "https://www.deremilitari.org/RESOURCES/SOURCES/ctit2.htm",
  "The Battle of Hattin (1187): three accounts (trans. Peter W. Edbury)",
);
const arsufEbsco = ebsco(
  "https://www.ebsco.com/research-starters/military-history-and-science/battle-arsuf",
  "Battle of Arsuf",
);
const yuanshi119 = wikisourceZh(
  "https://zh.wikisource.org/wiki/%E5%85%83%E5%8F%B2/%E5%8D%B7119",
  "Yuan Shi 119, biography of Muqali, in Chinese",
);
const jinshi93 = wikisourceZh(
  "https://zh.wikisource.org/wiki/%E9%87%91%E5%8F%B2/%E5%8D%B793",
  "Jin Shi 93, biographies including Wanyan Chengyu, in Chinese",
);
const sinor = deRe(
  "https://deremilitari.org/2014/07/the-mongols-in-the-west/",
  "Denis Sinor, The Mongols in the West",
);
const powLaszlovszky: Source = {
  title:
    "Stephen Pow and József Laszlovszky, “Finding Batu’s Hill at Muhi” (Hungarian Historical Review)",
  url: "https://hunghist.org/83-articles/564-2019-2-laszlovszky",
  publisher: "Hungarian Historical Review",
};
const rashid = deRe(
  "https://deremilitari.org/2013/03/jumiut-tawarikh-the-battle-of-ayn-jalut-september-8-1260/",
  "Rashid al-Din, Jamiʿ al-Tawarikh: the battle of ʿAyn Jalut (trans. W. M. Thackston)",
);
const southampton: Source = {
  title: "The truth about Agincourt (University of Southampton)",
  url: "https://www.southampton.ac.uk/news/2016/05/the-truth-about-agincourt.page",
  publisher: "University of Southampton",
};
const monstrelet: Source = {
  title:
    "The Chronicles of Enguerrand de Monstrelet, vol. 4 (trans. Thomas Johnes)",
  url: "https://www.gutenberg.org/cache/epub/52889/pg52889-images.html",
  publisher: "Project Gutenberg",
};
const constantinopleBr = britannica(
  "event/Fall-of-Constantinople-1453",
  "Fall of Constantinople — Myles Hudson",
);
const kritovoulos = deRe(
  "https://deremilitari.org/2016/08/the-siege-of-constantinople-in-1453-according-to-kritovoulos/",
  "The Siege of Constantinople in 1453, according to Kritovoulos",
);
const barbaro = deRe(
  "https://deremilitari.org/2016/08/the-siege-of-constantinople-in-1453-according-to-nicolo-barbaro/",
  "The Siege of Constantinople in 1453, according to Nicolo Barbaro",
);
const panipatBr = britannica(
  "event/First-Battle-of-Panipat-1526",
  "First Battle of Panipat — Tamanna Nangia",
);
const nagashinoBr = britannica(
  "event/Battle-of-Nagashino",
  "Battle of Nagashino — Stephen Turnbull",
);
const nagashinoScreen: Source = {
  title:
    "戦国時代屈指の戦いを描いた「長篠合戦図屏風」 (The Nagashino battle screen), in Japanese",
  url: "https://www.nippon.com/ja/articles/-/3243",
  publisher: "nippon.com",
};
const yiBr = britannica("biography/Yi-Sun-shin", "Yi Sun-shin");
const hansanEk: Source = {
  title: "한산도대첩 (The great victory at Hansan Island), in Korean",
  url: "https://encykorea.aks.ac.kr/Article/E0061676",
  publisher: "Encyclopedia of Korean Culture",
};
const sekigaharaBr = britannica(
  "event/Battle-of-Sekigahara",
  "Battle of Sekigahara — Myles Hudson",
);
const sekigaharaOsprey: Source = {
  title: "The battle of Sekigahara – what went right?",
  url: "https://www.ospreypublishing.com/uk/osprey-blog/2019/the-battle-of-sekigahara-what-went-right",
  publisher: "Osprey Publishing",
};
const sekigaharaNps = nps(
  "https://www.nps.gov/gett/learn/historyculture/sekigahara-campaign.htm",
  "Sekigahara Campaign",
);
const breitenfeldHw: Source = {
  title: "Battle of Breitenfeld, 17 September 1631",
  url: "https://www.historyofwar.org/articles/battles_breitenfeld.html",
  publisher: "History of War",
};
const shivajiBr = britannica(
  "biography/Shivaji",
  "Shivaji — Ranjit Ramchandra Desai",
);
const sabhasad: Source = {
  title:
    "Krishnaji Anant Sabhasad, Sabhasad Bakhar, in Siva Chhatrapati (trans. Surendranath Sen)",
  url: "https://archive.org/details/sivachhatrapatib00sensuoft",
  publisher: "Internet Archive",
};
const blenheimNam: Source = {
  title: "The Battle of Blenheim, 13 August 1704",
  url: "https://www.nam.ac.uk/explore/battle-blenheim-13-august-1704",
  publisher: "National Army Museum",
};
const karnalBr = britannica(
  "event/Battle-of-Karnal",
  "Battle of Karnal — Jacob F. Field",
);
const sarkarNadir: Source = {
  title: "Jadunath Sarkar, Nadir Shah in India (1925; 1973 reprint)",
  url: "https://archive.org/details/in.ernet.dli.2015.107791",
  publisher: "Internet Archive",
};
const sevenYearsBr = britannica(
  "event/Seven-Years-War/The-course-of-the-Seven-Years-War",
  "Seven Years’ War: The course of the Seven Years’ War",
);
const karlLothringen = ndb(
  "70325",
  "Karl (Karl Alexander), Prinz von Lothringen (Deutsche Biographie)",
);
const saratogaAbt = battlefields(
  "https://www.battlefields.org/learn/articles/saratoga-campaign",
  "The Saratoga Campaign",
);
const frenchAlliance = stateDept(
  "https://history.state.gov/milestones/1776-1783/french-alliance",
  "French Alliance, French Assistance, and European Diplomacy during the American Revolution",
);
const coburg = ndb(
  "17465",
  "Friedrich Josias, Prinz von Sachsen-Coburg-Saalfeld (Deutsche Biographie)",
);
const yusufPasa: Source = {
  title: "Yûsuf Paşa, Koca (TDV İslâm Ansiklopedisi), in Turkish",
  url: "https://islamansiklopedisi.org.tr/yusuf-pasa-koca",
  publisher: "TDV İslâm Ansiklopedisi",
};
const vicksburgNps = nps(
  "https://www.nps.gov/vick/learn/historyculture/vicksburgsiege.htm",
  "Vicksburg Siege",
);
const mississippiCivilWar: Source = {
  title: "Civil War — Michael B. Ballard (Mississippi Encyclopedia)",
  url: "https://mississippiencyclopedia.org/overviews/civil-war/",
  publisher: "Mississippi Encyclopedia",
};
const gettysburgNps = nps(
  "https://www.nps.gov/gett/learn/historyculture/gettysburg-overview.htm",
  "Gettysburg Overview",
);
const leeReport: Source = {
  title: "Robert E. Lee’s Report of the Gettysburg Campaign, January 20, 1864",
  url: "https://explorepahistory.com/odocument.php?docId=1-4-F4",
  publisher: "ExplorePAhistory.com",
};
const atlantaAbt = battlefields(
  "https://www.battlefields.org/learn/articles/atlanta-campaign",
  "The Atlanta Campaign",
);
const sedanBr = britannica(
  "event/Battle-of-Sedan",
  "Battle of Sedan — John Swift",
);
const sedanNapoleon: Source = {
  title: "The Battle of Sedan",
  url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/the-battle-of-sedan/",
  publisher: "Fondation Napoléon",
};
const adwaBr = britannica("event/Battle-of-Adwa", "Battle of Adwa");
const baratieri: Source = {
  title: "Baratieri, Oreste (Dizionario Biografico degli Italiani), in Italian",
  url: "https://www.treccani.it/enciclopedia/oreste-baratieri_(Dizionario-Biografico)/",
  publisher: "Treccani",
};
const tsushimaBr = britannica("event/Battle-of-Tsushima", "Battle of Tsushima");
const jacarTsushima: Source = {
  title:
    "The “Skirmishing” Ahead of the Battle of Tsushima: The Efforts by Diplomatic Officials",
  url: "https://www.jacar.go.jp/wp/newsletter_en/newsletter_047e/newsletter_etc1_047e/",
  publisher: "Japan Center for Asian Historical Records",
};
const dbpState = stateDept(
  "https://history.state.gov/milestones/1953-1960/dien-bien-phu",
  "Dien Bien Phu & the Fall of French Indochina, 1954",
);
const dbpDefense: Source = {
  title: "Indochine 1954, in French",
  url: "https://www.defense.gouv.fr/chemins-memoire/histoire-memoires/ressources-historiques/guerre-dindochine/indochine-1954",
  publisher: "Ministère des Armées (Chemins de mémoire)",
};
const frederickLeuthen: Source = {
  title:
    "Frederick II (“the Great”) on the Eve of the Battle of Leuthen (November 1757)",
  url: "https://germanhistorydocs.org/en/the-holy-roman-empire-1648-1815/ghdi:document-3585",
  publisher: "German History in Documents and Images",
};

export const campaignDetails: Record<string, CampaignDetails> = {
  "balkan-and-greek-campaign-of-335": {
    summary:
      "Alexander’s first campaigns as king, in 335 BCE: the march to the Danube and into Illyria, the revolt and destruction of Thebes, and the settlement with Athens before the crossing to Asia.",
    narrative: [
      {
        title: "A new king",
        text: "When Philip II was murdered in 336 BCE, Diodorus says, the Aetolians, the Ambraciots and the Thebans moved against Macedonian control, the Thebans voting to drive out the garrison in their citadel, and Argos, Elis and Sparta sought their independence. Plutarch says Alexander’s Macedonian counsellors urged him to give up the Greek states and win back the tribes by mild measures, and that he chose boldness instead, judging that any sign of weakness would bring all his enemies upon him. A rapid march into Boeotia brought Athens to send envoys asking forgiveness.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 2, locator: "17.3–4" },
          { source: 3, locator: "11" },
        ],
      },
      {
        title: "The northern campaign",
        text: "In the spring of 335 Alexander marched north against the Thracians, the Triballians and the Illyrians, to show them, Lendering says, that the kingdom was still strong under a young king. Arrian follows the army through the Haemus to the Triballians, across the Danube against the Getae, and back west to Pelium, which the Illyrian Cleitus had seized while Glaucias of the Taulantians came to his aid.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 4 }, { source: 0, locator: "1.1–6" }],
      },
      {
        title: "Thebes",
        text: "While he was in Illyria, Theban exiles returned, killed two officers of the garrison and persuaded the city to revolt, claiming that Alexander was dead. He reached Boeotia before the Thebans knew he had passed Thermopylae, waited outside the city for envoys who did not come, and took it in a single day’s fighting. The allies who had fought with him voted to raze Thebes and sell its people into slavery.",
        evidence: "fact",
        studies: ["thebes-335-bce"],
        refs: [
          { source: 1, locator: "1.7–9" },
          { source: 2, locator: "17.8–14" },
          { source: 4 },
        ],
      },
      {
        title: "Athens and the crossing",
        text: "The other Greek states hurried to make their peace. Arrian says the Athenians congratulated Alexander on his return and his punishment of Thebes; he demanded the surrender of Demosthenes, Lycurgus and other leaders and then relented, either from respect for Athens or from eagerness to begin the expedition into Asia, banishing only Charidemus, who went to Darius. Plutarch says he even told Athens to look to its affairs, since it would rule Greece if anything happened to him. Lendering says the League of Corinth ratified his acts.",
        evidence: "fact",
        studies: [],
        refs: [
          { source: 1, locator: "1.10" },
          { source: 3, locator: "13" },
          { source: 4 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "The narratives disagree over who decided what at Thebes. Arrian, following Ptolemy, has Perdiccas begin the assault without orders and leaves the sentence to the allies; Diodorus has Alexander decide to destroy the city and order the attack; Plutarch says he did it to terrify the Greeks and to satisfy the Phocians and Plataeans.",
        evidence: "uncertainty",
        studies: [],
        refs: [
          { source: 1, locator: "1.8–9" },
          { source: 2, locator: "17.9, 17.12" },
          { source: 3, locator: "11" },
        ],
      },
    ],
    sources: [
      arrian("I", "I", "1.1–6"),
      arrian("I", "VII", "1.7–10"),
      {
        title:
          "Diodorus Siculus, Library of History 17.3–4, 17.8–14 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diodorus_Siculus/17A%2A.html",
        publisher: "LacusCurtius, University of Chicago",
      },
      {
        title: "Plutarch, Life of Alexander 11–13 (Loeb translation)",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Alexander%2A/3.html",
        publisher: "LacusCurtius, University of Chicago",
      },
      {
        title: "Alexander 2.2",
        url: "https://www.livius.org/articles/person/alexander-the-great/alexander-2.2/",
        publisher: livius,
      },
    ],
  },
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
        studies: ["halicarnassus-334-bce"],
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
        studies: ["malli-town-325-bce"],
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
  "serbian-campaign-of-1914": {
    summary:
      "Austria-Hungary’s three invasions of Serbia in 1914, beaten back on Cer, the Drina and the Kolubara, with the Serbian and Montenegrin advances into Syrmia and Bosnia between them.",
    narrative: [
      {
        title: "War on an exhausted Serbia",
        text: "Austria-Hungary declared war on Serbia on 28 July 1914, a month after the assassination in Sarajevo, and Montenegro joined the Serbs. Bjelajac describes a Serbian army caught unprepared after the two Balkan Wars, short of rifles, artillery, ammunition, uniforms and horses, which Prime Minister Pašić reckoned needed three years to rearm. Mobilization was declared on the evening of 25 July and completed in three days; Tasić puts the force raised at about 400,000 men, with some 40,000 in Montenegro’s militia-like army. The Habsburg command expected a quick punitive campaign that would free its troops for Russia, but one of its three armies had to be sent north against the Russians. The Serbian plan was to stay on the defensive and hold down as many Austro-Hungarian troops as possible.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }, { source: 2 }],
      },
      {
        title: "Cer",
        text: "Field Marshal Putnik expected the attack from the north, across the Sava and Danube, but General Potiorek’s armies came from Bosnia, as Conrad von Hötzendorf had long wanted, forcing the Serbs to shift west. Bjelajac dates the invasion toward Loznica and Šabac to 12 August. On the slopes of Cer Mountain the Serbian Second Army threw the invaders back across the border, with heavy losses among the Austro-Hungarian officers and NCOs; Tasić calls it the first Allied victory of the war. During the advance Austro-Hungarian troops killed civilians in Šabac and the Mačva region, against a background of anti-Serbian propaganda and fear of irregulars who looked like civilians.",
        evidence: "fact",
        studies: ["cer"],
        refs: [{ source: 0 }, { source: 1 }, { source: 3 }],
      },
      {
        title: "Into Syrmia and Bosnia",
        text: "The Allies, Bjelajac writes, overestimated the Serbian army and insisted on an offensive across the border, and the Serbs reluctantly sent their First Army and part of the Second over the Sava into Syrmia. Further south the Užice Army, with the Montenegrins, crossed the upper Drina toward Sarajevo. Tasić records the capture of Pljevlja and Višegrad and then of Pale near Sarajevo, until a Habsburg counter-offensive in mid-October, after the battle of Glasinac, forced the Serbs and Montenegrins back over the Drina.",
        evidence: "fact",
        studies: ["syrmia-1914", "romanija-1914"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "The Drina",
        text: "Potiorek’s second offensive came across the Drina in September. Tasić describes a series of clashes with heavy losses on both sides that ended in stalemate and a short period of trench warfare in October; Bjelajac speaks of fifty-five days of entrenched fighting during which the Serbian artillery ran out of ammunition.",
        evidence: "fact",
        studies: ["drina-1914"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The Kolubara",
        text: "The third offensive began on 6 November. Outnumbered and short of shells, the Serbs fell back fifty to sixty kilometres and gave up Belgrade, which the Austro-Hungarians entered on 2 December; Ristović notes that General Sarkotić had already been named governor-general for the coming occupation. The retreat let the Serbian army regroup and receive ammunition, and on 3 December it struck the overstretched invaders, General Mišić’s First Army breaking through first. Within about two weeks the Austro-Hungarians had been driven from Serbia, leaving many prisoners, and Belgrade was retaken in mid-December.",
        evidence: "fact",
        studies: ["kolubara"],
        refs: [{ source: 0 }, { source: 2 }, { source: 3 }, { source: 1 }],
      },
      {
        title: "The price of victory",
        text: "Tasić cites the Austro-Hungarian General Staff’s figures: of 450,000 men and 12,000 officers engaged against Serbia in 1914, some 275,000 were lost, killed, wounded, missing, captured or sick, among them 7,600 officers. Serbian losses were about 163,000 officers and men. Neither side could attack again, and from January to October 1915 the front was quiet while typhus and cholera ravaged soldiers, civilians and prisoners alike. Hall notes that the victories raised Serbian hopes of gaining Bosnia, Dalmatia and Vojvodina after the war.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Why the invasions failed",
        text: "Tasić blames Austro-Hungarian planning that underestimated the Serbs and chose the Bosnian approach for political reasons, and he notes that Habsburg reports credited Serbian irregulars with disrupting supply lines, a fear that fed reprisals against civilians. Bjelajac stresses Serbian endurance in spite of material shortages, and the pressure from allies who expected more than the army could give. Ristović treats the atrocities in Mačva as the first stage of the occupation policy that followed in 1915.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "Tasić dates the battle of Cer to 17–19 August, Bjelajac to 16–20 August and Hall to 16–25 August. Hall has the Austro-Hungarians expelled by 15 December; Ristović has Belgrade liberated on the 16th. Bjelajac counts the Habsburg losses of 1914 at 273,813 against Tasić’s 275,000, and distinguishes the 400,000 men mobilized from the roughly 250,000 combatants of the operational army.",
        evidence: "uncertainty",
        studies: ["cer"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }, { source: 3 }],
      },
    ],
    sources: [tasic, bjelajac, hallBalkans, ristovic],
  },
  "east-prussian-campaign": {
    summary:
      "The Russian invasion of East Prussia in August–September 1914, destroyed at Tannenberg and driven out after the Masurian Lakes.",
    narrative: [
      {
        title: "Russia keeps its promise",
        text: "Bound by treaty to help France, Russia attacked Germany long before the six weeks German planners had allowed for its mobilization; Steinberg notes that it invaded East Prussia fifteen days after mobilizing. Dowling describes the plan: two armies, twenty-nine infantry divisions, against East Prussia, and four armies against Austria-Hungary, while Germany left a single army, the Eighth, to defend the province.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Gumbinnen",
        text: "General Zhilinsky sent Rennenkampf’s First Army toward Königsberg and Samsonov’s Second Army around the Masurian Lakes to the south, to trap the Germans between them. The two armies marched some ninety kilometres apart and communicated by courier. Rennenkampf beat the Germans at Stallupönen on 17 August and Gumbinnen on 20 August, and the German commander Prittwitz ordered a retreat behind the Vistula; Moltke replaced him with Hindenburg, with Ludendorff as chief of staff. Ludendorff writes that when they reached Marienburg on 23 August the staff, led by Grünert and Lieutenant-Colonel Hoffmann, had already given up the retreat.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "Tannenberg",
        text: "Rennenkampf halted after Gumbinnen, while Zhilinsky urged Samsonov forward. The Germans moved almost their whole army south against the Second Army, leaving a cavalry screen facing Rennenkampf. Ludendorff writes that the plan took shape between 24 and 26 August and depended entirely on Rennenkampf’s slowness. From 26 August German corps turned both of Samsonov’s flanks; the centre was destroyed and Samsonov killed himself on 30 August. Dowling puts the Russian loss at nearly 125,000 men and over 500 guns against German casualties of 10,000 to 15,000. Ludendorff counts over 90,000 prisoners, calls the story of Russians drowned in the marshes a myth, and says the battle was named Tannenberg at his suggestion.",
        evidence: "fact",
        studies: ["tannenberg"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The Masurian Lakes",
        text: "Reinforced by two corps from the west, the Eighth Army turned on Rennenkampf, pinning his front on 7 September and striking his flanks on the 9th. Rennenkampf saw the danger, counter-attacked on 11 September and escaped; his army was back on Russian soil by the 13th. Dowling estimates that it inflicted nearly 70,000 casualties and lost about 100,000; Ludendorff, who took 45,000 prisoners this time, thought Rennenkampf had never meant to make a serious stand.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Victory in the north, defeat in the south",
        text: "In Galicia the Russians did far better against Austria-Hungary, taking Lemberg on 3 September and inflicting losses of over 300,000 men on the Habsburg army. Dowling concludes that the German successes in East Prussia offset the Habsburg collapse and stabilized the Eastern Front for the Central Powers; Steinberg adds that they bought Germany time in France and made Hindenburg and Ludendorff national heroes.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Command failures",
        text: "Steinberg rejects the old charge that Rennenkampf left Samsonov to his fate out of personal animosity: he had outrun his supplies, and it was Zhilinsky who lost control and failed to tell Samsonov where the First Army was. He sees in this failure of commanders to support one another a pattern that marked the Russian army for the rest of the war. Dowling adds the Germans’ aerial reconnaissance and the Russians’ unencrypted radio messages. Ludendorff insists that the battle was not fought to a prepared plan but decided as the situation unfolded.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Dowling credits the plan of concentrating against Samsonov to Hoffmann, drafted before Hindenburg and Ludendorff arrived; Ludendorff describes it taking shape under his direction from 24 to 26 August. Dowling’s Russian loss of nearly 125,000 at Tannenberg includes killed and wounded as well as the 90,000-odd prisoners Ludendorff counts.",
        evidence: "uncertainty",
        studies: ["tannenberg"],
        refs: [{ source: 0 }, { source: 2 }],
      },
    ],
    sources: [dowling, steinberg, ludendorff1],
  },
  "western-front-in-1914": {
    summary:
      "The war of movement in France and Belgium in 1914: the German sweep through Belgium, the Allied counter-stroke on the Marne, the race to the sea and the first battle of Ypres.",
    narrative: [
      {
        title: "Through Belgium",
        text: "Krause explains Germany’s plan as the answer to a two-front war: overwhelm France quickly through Belgium, then turn on slower-mobilizing Russia. On 3 August 1914 German armies entered Belgium and Luxembourg, and Britain declared war the next day. The forts of Liège and Namur fell within days to heavy German and Austrian howitzers.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The frontiers and the retreat",
        text: "France attacked into Alsace and Lorraine and met disaster: Krause describes poorly led formations advancing without reconnaissance, and France lost over 300,000 dead in 1914. The French armies and the British Expeditionary Force then retreated for weeks before the German right wing. Le Gall notes that the French infantry learned fast, digging and using trenches by September.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The Marne",
        text: "Covering so wide an arc, the German First and Second Armies drifted apart, and British aircraft spotted the gap. On 5 September Joffre persuaded Sir John French to join a counter-attack, and French and British troops drove into the gap along a front of some 300 kilometres; some French reinforcements were carried in Paris taxis. With the French government moved to Bordeaux and German troops some seventy kilometres from Paris, the Germans, exhausted and short of supplies, fell back to a line behind Soissons and Reims.",
        evidence: "fact",
        studies: ["marne-1914"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Race to the sea and Ypres",
        text: "Each side then tried to turn the other’s northern flank until the front reached the North Sea. At Ypres in October and November the Germans made the last attempts to break through before winter; Krause calls them costly failures against even the fragmentary trenches of that autumn, and a French attack in Artois in December fared no better. Falkenhayn, who had replaced Moltke as chief of the General Staff, writes that the Allied offensive in Flanders was broken and a continuous German front established from the Swiss frontier to the sea, but that Belgian inundations stopped his right wing and his hastily trained young reserve corps, led largely by older officers, could not force a decision.",
        evidence: "fact",
        studies: ["first-ypres"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "How the stalemate came",
        text: "Krause argues that the deadlock was the product of rapid innovation rather than stodgy conservatism: trench systems could not be broken by hasty attacks but had to be methodically destroyed by heavy artillery, and the armies spent four years devising ever more complex attacks against ever deeper defences. Falkenhayn believed that perseverance at Ypres might have brought complete success; Le Gall stresses the logistical exhaustion of armies advancing far from their railheads.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Krause dates the Allied attack into the German gap from 5 September; Le Gall gives the battle of the Marne as 6 to 11 September. Falkenhayn’s view that a breakthrough at Ypres was within reach is not shared by Krause, who writes that the attacking infantry had no chance of success with the artillery support available.",
        evidence: "uncertainty",
        studies: ["marne-1914"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [krause, leGall, falkenhayn],
  },
  "dardanelles-campaign": {
    summary:
      "The Allied attempt of 1915 to force the Dardanelles and take Constantinople, first by sea and then by landings on the Gallipoli peninsula, ending in evacuation in January 1916.",
    narrative: [
      {
        title: "The straits",
        text: "The Ottoman Empire, its army being rebuilt by a German mission under General Liman von Sanders, entered the war after its fleet raided Russian Black Sea ports on 29 October 1914. Skinner writes that a British bombardment of the Dardanelles forts on 3 November only spurred the defenders, and that Churchill then won Kitchener’s support for a combined operation to force the straits and seize Constantinople. Baş adds that the Ottoman mobilization had been badly planned and that the high command relied almost entirely on German planners.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The naval attack",
        text: "By March 1915 the Ottoman fortified area had some 230 mobile guns and howitzers alongside 82 fixed guns, with dense minefields in the straits. An Allied squadron began shelling the forts on 19 February, and on 18 March Admiral de Robeck tried to force the narrows. Mines and gunfire sank three Allied warships, and the attempt was given up; Baş puts the Turkish casualties of the day at 79 dead and wounded. Hamilton, who watched the repulse, then prepared an amphibious assault.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The landings",
        text: "On 25 April 1915 the British 29th Division landed at Cape Helles and the Australian and New Zealand Army Corps north of Gaba Tepe, at what became Anzac Cove, with French and naval feints elsewhere. At Helles the defenders held the attackers to shallow beachheads. Above Anzac, Lieutenant-Colonel Mustafa Kemal led his 19th Division into a counter-attack on his own initiative, as Liman confirms, and held the ridges. That night Birdwood reported his troops demoralized and raised re-embarkation; Hamilton’s diary records his reply that they must dig themselves in and stick it out.",
        evidence: "fact",
        studies: ["gallipoli"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }, { source: 3 }],
      },
      {
        title: "Stalemate",
        text: "Attacks on Krithia on 28 April, 6–8 May and 4 June failed to expand the Helles beachhead, and Ottoman night attacks failed to destroy it. An Ottoman assault on Anzac on 19–20 May cost about 10,000 casualties among 50,000 men and led to a truce on 24 May to bury the dead. Ottoman mines and torpedoes sank more Allied battleships, and the surviving capital ships withdrew to safer waters.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Suvla",
        text: "On 6–7 August Hamilton tried to break out at Helles and Anzac while a fresh corps landed at Suvla Bay. Skinner credits the German Major Willmer’s small force with delaying the inexperienced British until reinforcements arrived, and faults Hamilton for leaving the slow corps commander, Stopford, unsupervised. Liman writes that he gave Kemal command of all the troops in the Anafarta sector and that Kemal attacked on 9 August; Baş dates his main counter-attack to dawn on the 10th. Liman calls the landing the political-military summit of the campaign: success would have opened the straits, linked the Allies with Russia and probably kept Bulgaria neutral.",
        evidence: "fact",
        studies: ["gallipoli"],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
      {
        title: "Evacuation",
        text: "Bulgaria’s mobilization in September drew Allied troops from Gallipoli to Salonika. Hamilton was relieved in October after rejecting proposals to withdraw, and his successor Monro urged evacuation; Serbia’s collapse and the arrival of German heavy guns decided the British government. The withdrawals of December 1915 and January 1916, carried out under Birdwood, were well planned and successfully carried out, and the last troops left by 9 January.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "A divided verdict",
        text: "Skinner writes that historians still disagree about the strategic merits of the campaign, but that the Allied conduct of it suffered from poor leadership and cooperation while German and Ottoman commanders were generally quicker to seize their chances. The straits stayed closed, which he counts as a key factor in the breakdown of the Russian war effort. Baş calls it the only one of the Ottoman army’s four major campaigns that it won.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Skinner estimates the casualties at 205,000 British and Commonwealth, 47,000 French and between 251,000 and 289,000 Ottoman, with 56,643 Ottoman dead and 11,176 missing; Baş gives up to 250,000 Ottoman casualties, at least 55,000 of them killed. Hamilton’s diary and Liman’s memoir were written by the opposing commanders after the event and defend their decisions.",
        evidence: "uncertainty",
        studies: ["gallipoli"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }, { source: 3 }],
      },
    ],
    sources: [skinner, bas, liman, hamilton],
  },
  "western-front-in-1915": {
    summary:
      "The first year of trench warfare in France and Flanders: costly Allied offensives in Champagne, Artois and at Loos, and the German gas attack at Ypres.",
    narrative: [
      {
        title: "The Allied offensives",
        text: "Krause describes 1915 as a year of many battles. The French opened the first battle of Champagne on 16 February and spent a month hammering at the German line: some 200,000 French soldiers were killed or wounded for an advance of no more than three kilometres, against 80,000 German casualties. France lost 349,000 dead in 1915, its deadliest year of the war. The British, still few, made their one independent attack at Neuve Chapelle on 10–13 March, which broke in but could not exploit its first success.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Germany looks east",
        text: "The German army’s main effort in 1915 was in the east, where it broke through at Gorlice-Tarnów and drove the Russians far back. In the west it stood on the defensive. Falkenhayn wrote at the end of the year that he had been forced to give up hope of an offensive in the west and to be satisfied with holding the line, a defence he called brilliantly successful.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Gas at Ypres",
        text: "The one German offensive in the west was the second battle of Ypres, 22 April to 25 May, largely a test of chlorine gas released from cylinders in the front line. Where the gas was thickest the Allied line dissolved and French colonial troops fell back in panic, while Canadian troops on their flank held for days. The Germans, unconvinced the gas would work, had no plan to exploit the breach, and the battle ended in a small gain for tens of thousands of casualties.",
        evidence: "fact",
        studies: ["second-ypres"],
        refs: [{ source: 0 }],
      },
      {
        title: "Artois, Champagne and Loos",
        text: "In the second battle of Artois, from 9 May to 18 June, French divisions advanced several kilometres on the first day and took Notre-Dame-de-Lorette, but Vimy Ridge stayed in German hands until April 1917. On 25 September the French attacked in Champagne and Artois together while the British attacked at Loos, using chlorine gas themselves. There were initial gains, especially by Pétain’s Second Army in Champagne, but the offensives fell far short of their aims.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Breaking in, not through",
        text: "Krause sees 1915 as the year that showed the central problem of trench warfare: a well-supplied attacker could break into the enemy line, but exploiting the break was another matter. The repeated failures and the scale of French losses, he argues, shaped German strategy for 1916; Falkenhayn’s own account of the year ends with his decision to attack France.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [krause, falkenhayn],
  },
  "serbian-campaign-of-1915": {
    summary:
      "The Central Powers’ conquest of Serbia in October–November 1915, the Serbian army’s retreat through Montenegro and Albania to the Adriatic, and the fall of Montenegro.",
    narrative: [
      {
        title: "Bulgaria chooses a side",
        text: "Both coalitions courted Bulgaria in 1915, and Hall explains why the Central Powers won: the Entente could not promise Macedonia, Serbia’s prize from the Balkan Wars, while Germany and Austria-Hungary could offer it at once. With the Allies failing at Gallipoli and the Russians retreating after Gorlice-Tarnów, Bulgaria signed with the Central Powers on 6 September 1915, gaining the lower Maritsa valley from the Ottomans as well, and mobilized on the 15th. Tasić writes that Serbia proposed to strike before Bulgarian mobilization was complete, but the western Allies refused.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 3 }, { source: 0 }],
      },
      {
        title: "Mackensen’s offensive",
        text: "Under Field Marshal von Mackensen, an Austro-Hungarian and a German army crossed the Danube and Sava on 6 October and took Belgrade; two Bulgarian armies attacked from the east about a week later. Tasić notes that the Germans avoided the mistakes of 1914, attacking along the Morava valley with heavy artillery the Serbs could not answer. Bjelajac writes that stubborn Serbian resistance held the advance to thirty kilometres in two weeks, forcing the Germans to bring in their Alpine Corps from France. Falkenhayn records that the Austro-Hungarian army made slower progress than the German one and that Vienna refused to reinforce it from the Isonzo. The Bulgarian First Army took Niš on 5 November.",
        evidence: "fact",
        studies: ["belgrade-1915", "invasion-of-serbia-1915"],
        refs: [{ source: 1 }, { source: 0 }, { source: 5 }, { source: 3 }],
      },
      {
        title: "The Salonika expedition",
        text: "Greek Prime Minister Venizelos invited Allied troops to Salonika and resigned on 5 October, and British and French forces landed in a neutral Greece. They advanced up the Vardar, but the Bulgarian Second Army had already taken Skopje on 22 October, cutting the Serbs off from the south, and in December the Bulgarians drove the Allied columns back across the Greek frontier. Falkenhayn writes that at German request the Bulgarians did not pursue into Greece, for fear of turning Greek opinion against the Central Powers and of the demands his allies would make; Hall describes the Bulgarian commander Zhekov pleading in vain for an all-out attack on Salonika.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 1 }, { source: 5 }, { source: 3 }],
      },
      {
        title: "The retreat",
        text: "The Serbian army fell back into Kosovo with a mass of refugees, escaping several attempts to encircle it, and a last stand on the old Kosovo battlefield failed. On 25 November the high command, judging capitulation worse than any alternative, ordered a retreat through Montenegro and Albania to reach the Allies on the coast. In winter, across snowbound mountains, without food or medical supplies and sometimes through hostile Albanian villages, thousands of soldiers, civilians and the Austro-Hungarian prisoners who marched with them died. Allied ships, led by a French mission, took the survivors to Corfu and Bizerte.",
        evidence: "fact",
        studies: ["serbian-retreat-1915"],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
      {
        title: "Mojkovac and the fall of Montenegro",
        text: "The Montenegrin army under General Vukotić covered the retreat, beating off the Austro-Hungarians at Mojkovac on 6–7 January 1916. Austro-Hungarian forces from the Bay of Kotor, supported by naval gunfire, then broke through on Mount Lovćen; Cetinje fell, King Nikola went into exile and the army surrendered. Raspopović describes how the question of whether Montenegro should retreat with the Serbs or negotiate with Austria-Hungary divided the two allies, with a Serbian delegate’s report urging peace talks and Montenegrin contacts with Vienna already under way.",
        evidence: "fact",
        studies: ["mojkovac"],
        refs: [{ source: 0 }, { source: 2 }, { source: 4 }],
      },
      {
        title: "A secondary theatre",
        text: "Bjelajac names the offensive’s aims as a direct link with Bulgaria and the Ottoman Empire and the closing of the Allied supply route through Salonika. Falkenhayn refused to let it draw his allies on toward Salonika, which in his view could serve only Austro-Hungarian or Bulgarian aims, not the general aims of the war. Hall sees that refusal as the decisive moment of Bulgaria’s war, since it left an Allied army on its southern frontier for three years. Tasić credits the Serbian army with an orderly retreat that preserved it to fight again.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 5 }, { source: 3 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Tasić dates the Bulgarian offensive to 14 October, Hall to about a week after 6 October, and Bjelajac has Bulgaria join the fighting on the 12th. Hall’s two articles date the first Allied landing at Salonika to 5 and to 7 October. Tasić has Montenegro’s army surrender on 16 January 1916 and Hall on the 17th, after Cetinje fell on the 11th. Whether Montenegro’s surrender was a betrayal of Serbia remains disputed, and Raspopović leaves the motives of its leaders open.",
        evidence: "uncertainty",
        studies: ["mojkovac"],
        refs: [
          { source: 0 },
          { source: 2 },
          { source: 3 },
          { source: 1 },
          { source: 4 },
        ],
      },
    ],
    sources: [
      tasic,
      bjelajac,
      hallBalkans,
      hallBulgaria,
      raspopovic,
      falkenhayn,
    ],
  },
  "western-front-in-1916": {
    summary:
      "The year of attrition on the Western Front: the German offensive at Verdun and the Anglo-French offensive on the Somme.",
    narrative: [
      {
        title: "Falkenhayn’s choice",
        text: "Falkenhayn, Krause writes, believed Germany could not win a long war on two fronts and had to force one enemy to make peace. Having ruled out Russia, he chose France. In the memorandum reproduced in his memoirs he argued that France was near breaking point, and that an attack on objectives the French would defend with every man they had would make the forces of France bleed to death whether or not the Germans reached their goal. Between Belfort and Verdun he preferred Verdun, whose lines lay barely twelve miles from the German railways.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Verdun",
        text: "The attack began on 21 February 1916, and the battle lasted ten months, the longest of the war. Pétain took charge on 26 February and rotated French divisions quickly through the salient, while German units were often left in the line for weeks, which Krause says sapped their morale. Some 300,000 men of each army were killed or wounded. Falkenhayn writes that the Verdun operations had to be scaled down from July as his reserves shrank; in October the French under Nivelle retook Fort Douaumont.",
        evidence: "fact",
        studies: ["verdun"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Planning the Somme",
        text: "The Somme offensive had been agreed at Chantilly in December 1915, before Verdun, as a French-led attack with British support; by the time it began, the French share had shrunk from forty divisions to twelve and the British, under Haig, had become the senior partner. Haig gives its objects as threefold: to relieve the pressure on Verdun, to stop the transfer of German troops to other fronts, and to wear down the forces opposed. Krause describes the tension between Haig, who wanted distant objectives, and Rawlinson, commanding the Fourth Army, who wanted to limit each attack.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 3 }, { source: 1 }],
      },
      {
        title: "The Somme",
        text: "After a week-long bombardment by 1,537 guns, spread too thinly and firing many defective shells, the infantry attacked on 1 July. South of the river, and on the southern British sector, the attackers took their objectives; to the north British units were cut down by machine guns and pre-registered artillery. The British lost about 57,000 men that day, the French around 1,600. Philpott traces four phases after it: a July advance and a night attack on 14 July, a grinding summer struggle for the woods and villages of the ridge, a renewed offensive under Foch’s coordination in September in which tanks were first used at Flers-Courcelette and Thiepval fell, and a final phase of mud-bound attacks that ended with the capture of Beaumont-Hamel in November.",
        evidence: "fact",
        studies: ["somme"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Who was worn down?",
        text: "Falkenhayn claimed that some ninety French divisions, two-thirds of the French army, had passed through Verdun at the cost of German losses only about a third of the French, and that the aim of bleeding France white had been sound. Krause finds the losses roughly equal and French morale unbroken, the French going on to send more men to the Somme than Britain over the course of that battle. Haig judged that the Somme relieved Verdun, held German forces that would have gone east and cost the enemy more than the Allies; Krause counts some 600,000 casualties on each side there. Both Falkenhayn and Joffre lost their posts by the end of the year.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "The ratio of losses at Verdun is the main dispute: Falkenhayn’s claim that German losses were about a third of the French is not borne out by the roughly equal figures Krause gives. Krause gives the British loss on 1 July 1916 as 56,882, including 19,240 dead, and the French as 1,590; Philpott rounds these to some 57,000 and 1,600. Krause notes that the idea of Verdun as a national symbol the French had to defend at any price has become contentious among historians.",
        evidence: "uncertainty",
        studies: ["verdun"],
        refs: [{ source: 2 }, { source: 0 }, { source: 1 }],
      },
    ],
    sources: [krause, philpott, falkenhayn, haigDespatches],
  },
  "war-in-the-north-sea": {
    summary:
      "The naval war between the British Grand Fleet and the German High Seas Fleet, 1914–1918: blockade, raids and the one clash of the battle fleets at Jutland.",
    narrative: [
      {
        title: "Blockade and waiting",
        text: "Both navies expected a decisive battle. Osborne explains why it did not come: Britain chose a distant blockade, closing the exits from the North Sea between Scotland and Norway, while German strategy rested on wearing down a British fleet that was expected to come close to the German coast. With the Grand Fleet at Scapa Flow and the High Seas Fleet in its bases, the war in the North Sea became one of light forces, mines and submarines.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Heligoland, the raids and Dogger Bank",
        text: "A British raid into the Heligoland Bight on 28 August 1914 sank three German light cruisers and a destroyer, and the Kaiser then required his consent before the fleet risked battle. By the end of 1914 German ships were raiding the English coast at Scarborough, Hartlepool and Whitby. The British, reading captured German codes, intercepted Hipper’s battlecruisers at the Dogger Bank in January 1915 and sank the armoured cruiser Blücher; the German commander, Ingenohl, was replaced by the more cautious Pohl.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Scheer’s plan",
        text: "Vice-Admiral Scheer, who took command in January 1916, wanted to lure out and destroy part of the Grand Fleet and so even the odds. After raids on Lowestoft and Yarmouth in April, the High Seas Fleet sailed on 31 May with Hipper’s battlecruisers ahead as bait. The British, reading the German signals, were already at sea with 151 ships, including twenty-eight battleships and nine battlecruisers, against Scheer’s 101, including sixteen battleships and six pre-dreadnoughts.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Jutland",
        text: "In the opening battlecruiser action Indefatigable and Queen Mary blew up, and Beatty turned north, drawing the Germans toward Jellicoe’s battleships; Invincible was lost in the second clash. Jellicoe deployed across the head of the German line, and Scheer escaped by turning his whole fleet about, ran into the British again, and turned away a second time behind a torpedo-boat attack. Jellicoe avoided a night action, and in confused fighting during the night Scheer slipped away and reached Wilhelmshaven.",
        evidence: "fact",
        studies: ["jutland"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "After Jutland",
        text: "The High Seas Fleet put to sea again in August and October 1916 but never again sought battle. Scheer writes that the British clearly meant to rely on economic pressure and keep their fleet in the north, that only U-boats could get past it to strike at British trade, and that Germany had to resort to submarine war. The surface fleet stayed largely in harbour; its morale decayed, and when it was ordered out for a last battle at the end of October 1918 the crews mutinied. It surrendered in November and was interned at Scapa Flow, where its crews scuttled it in June 1919.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Who won?",
        text: "The Germans claimed Jutland as a victory, and in ships and men lost they had the better of it; Epkenhans allows that it may be called a German tactical victory but finds that it did not change the strategic situation, while Osborne calls it a strategic defeat for Germany, since the British kept command of the sea and the blockade. In Germany the battle became a national myth, in Britain a missed opportunity, and Jellicoe was replaced by Beatty in December 1916.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Both encyclopedia articles give the British loss at Jutland as 6,094 men, three battlecruisers, three armoured cruisers and eight destroyers. For the Germans Epkenhans gives 2,551 men lost and Osborne 3,058 casualties, for one battlecruiser, one pre-dreadnought, four light cruisers and five torpedo boats. Scheer’s account is the German commander’s own.",
        evidence: "uncertainty",
        studies: ["jutland"],
        refs: [{ source: 1 }, { source: 0 }, { source: 2 }],
      },
    ],
    sources: [osborne, epkenhans, scheer],
  },
  "eastern-front-in-1916": {
    summary:
      "The Russian army’s recovery and its offensive of 1916 in Galicia under Brusilov, which shattered the Austro-Hungarian army but exhausted Russia.",
    narrative: [
      {
        title: "Russia rebuilt",
        text: "After the defeats of 1915 the Eastern Front was quiet through the winter. Conrad moved his best divisions to the Italian front and left raw recruits in hardened positions in Galicia, believing Russia incapable of attack. Dowling describes the work of the new war minister, Polivanov, who brought industrialists into supply, improved communications and training, and opened officer and NCO ranks to merit. Steinberg notes that the Germans and Austrians underestimated the revived army.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Lake Naroch",
        text: "Responding to French appeals for help at Verdun, the Russians attacked at Lake Naroch in March 1916 with some 350,000 men against 75,000 Germans. Dowling describes an unregistered bombardment that did little harm, a thaw that turned the ground to mud, and German artillery that silenced the Russian guns; about 70,000 Russian casualties were suffered against 30,000 German.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Brusilov’s method",
        text: "When Italy asked for relief from the Austro-Hungarian offensive in the Trentino, only General Brusilov, newly in command of the Southwestern Front, offered to attack. Steinberg writes that Alekseev, the chief of staff, opposed offensives without heavy artillery, and that Brusilov chose surprise. Dowling describes the preparation along his whole front from Kovel to the Romanian border: assault trenches sapped to within sixty metres of the enemy, troops rehearsing on replicas of the Austrian positions built from aerial photographs, dummy trenches and batteries to mislead observers, and several attack sectors instead of one.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "The breakthrough",
        text: "On 4 June short bombardments were followed by infantry attacks on four army fronts. Falkenhayn writes that the Russians simply rose from their trenches after a short preparation in what he took for a large-scale reconnaissance, and that east of Lutsk a gap thirty miles wide opened in less than two days as the Austro-Hungarian Fourth Army melted away. Dowling describes Austrian commanders feeding their reserves in piecemeal, and by 10 June Kaledin’s Eighth Army had taken Lutsk, an advance of some seventy-five kilometres, while Lechitski’s Ninth Army overran Czernowitz.",
        evidence: "fact",
        studies: ["brusilov-offensive"],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "Kovel and the end",
        text: "The fronts to the north did not attack in support, and German divisions arrived from mid-June to stiffen the line. When Brusilov tried to renew the offensive in July, his commanders fell back on older tactics; the Guards Army lost more than 30,000 men trying to reach the rail junction of Kovel between 27 July and 4 August, and the offensive petered out in mid-August.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Consequences",
        text: "Dowling counts Austro-Hungarian losses of more than 700,000 men and 9,000 officers. Conrad had to call divisions back from Italy, and Hindenburg and Ludendorff took command of the whole Eastern Front, with German officers controlling Habsburg units. Romania entered the war on 27 August and was quickly defeated, stretching the Russian front further south. Russia itself lost nearly two million men that summer, and by December 1916 regiments were mutinying. Falkenhayn, writing afterwards, held that Russia was no longer dangerous once he saw it shifting troops south.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Russia’s best offensive",
        text: "Dowling treats the offensive as the high point of the Russian army’s war, which regained nearly all the ground lost in Galicia in 1915 and virtually ended the Habsburg army as an independent force, but at a cost that broke the army that won it. Steinberg emphasises Brusilov’s willingness to attack without the munitions his superiors thought necessary. Falkenhayn’s description of a reconnaissance that succeeded only because of Austro-Hungarian weakness reflects the German view of the time.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Steinberg and Falkenhayn date the start of the offensive to 4 June; Dowling’s article gives 4 May for the opening bombardment and May 1915 for the Trentino offensive, apparent misprints for 4 June and May 1916. Losses on both sides are estimates; Dowling’s figure of nearly two million Russian casualties for the summer includes the later fighting at Kovel and in Romania.",
        evidence: "uncertainty",
        studies: ["brusilov-offensive"],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
    ],
    sources: [dowling, steinberg, falkenhayn],
  },
  "macedonian-front": {
    summary:
      "The front in northern Greece and Macedonia, 1915–1918, where the reconstituted Serbian army fought with the Allied Army of the Orient until the breakthrough at Dobro Pole forced Bulgaria out of the war.",
    narrative: [
      {
        title: "A front in neutral Greece",
        text: "After the Bulgarians stopped at the Greek frontier in December 1915, the Allies fortified a camp around Salonika and built up an army there: British, French and French colonial troops, Italians, Russians and, from the summer of 1916, the Serbian army reconstituted on Corfu. Against them stood Bulgarian, German and Austro-Hungarian troops and for a time an Ottoman corps; Tasić calls it perhaps the most diverse front of the war. Greece was divided between King Constantine and the followers of Venizelos, who set up a rival government in Salonika in August 1916; the king abdicated in June 1917 and Greece entered the war on the Allied side.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }, { source: 1 }],
      },
      {
        title: "Florina, Kajmakčalan and Monastir",
        text: "In August 1916, with Romania about to enter the war, the Germans let the Bulgarians attack into Greece. They occupied Drama, Serres and Kavala in the east and Florina in the west, catching the Serbian army on the march. Bjelajac writes that the Serbs halted the offensive and took the dominant peaks; Tasić describes the fighting at Gorničevo, Kajmakčalan and in the Crna valley from 17 August to 20 November, which pushed the Central Powers some forty kilometres north. Monastir (Bitola) was taken that autumn, the first Serbian town to be freed.",
        evidence: "fact",
        studies: ["kajmakcalan", "monastir-1916"],
        refs: [{ source: 1 }, { source: 3 }, { source: 0 }],
      },
      {
        title: "Stalemate",
        text: "For nearly two years the front stood still in trench warfare. Tasić describes discontent and mutinies on both sides, the withdrawal of the Russian contingent after the revolution and fraternization between Bulgarian and Serbian soldiers. Greek divisions arrived after June 1917. On Corfu in July 1917 the Serbian government and the Yugoslav Committee agreed to found a common South Slav state, while Colonel Dimitrijević was tried and executed.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 3 }, { source: 1 }],
      },
      {
        title: "Bulgaria’s exhaustion",
        text: "Hall describes Bulgaria’s strength draining away. The Germans withdrew most of their troops for the 1918 offensives in France, supplies stopped, the soldiers went hungry and ragged, and quarrels with Austria-Hungary and the Ottoman Empire over the spoils embittered them. In late spring 1918 Greek and French troops took the fortified ridge of Skra di Legen, and Bulgarian commanders reported desertion and men who would not attack. In June General Franchet d’Espèrey took command of the Allied armies.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Dobro Pole",
        text: "The idea of attacking the mountain ridge of Dobro Pole came, Hall writes, from a Serbian staff officer in 1916. On 14 September 1918 French and Serbian troops attacked; Bjelajac describes the Serbian Second Army, with two French divisions in its first line, breaking through. After the second day the Bulgarians fell back in disorder, though at Lake Doiran they beat off a British and Greek attack. Mutinous soldiers marched on Sofia and proclaimed a republic at Radomir, and Bulgaria signed an armistice at Salonika at the end of September. Ludendorff wrote that the events on the Bulgarian front from 15 September sealed the fate of the Central Powers’ alliance.",
        evidence: "fact",
        studies: ["dobro-pole"],
        refs: [{ source: 1 }, { source: 3 }, { source: 0 }, { source: 4 }],
      },
      {
        title: "The road home",
        text: "Serbian troops entered Veles and Štip on 26 September and French cavalry took Skopje on the 29th. With the fall of Niš in October the Central Powers’ land link to the Ottoman Empire was cut, and the Germans and Austro-Hungarians could not find enough troops to rebuild a front. Belgrade was freed at the end of October, and by 1 November the whole of pre-war Serbia had been liberated. Tsar Ferdinand of Bulgaria abdicated on 3 October, and on 1 December the Kingdom of Serbs, Croats and Slovenes was proclaimed in Belgrade.",
        evidence: "fact",
        studies: ["liberation-of-serbia-1918"],
        refs: [{ source: 0 }, { source: 3 }, { source: 1 }],
      },
      {
        title: "A forgotten front vindicated",
        text: "Bjelajac writes that the breakthrough proved the advocates of a Balkan front right, recalling that the Serbs had urged the same idea in vain in 1915. Tasić sees the offensive as carefully prepared and decisive, contributing to the dissolution of Austria-Hungary. Hall concludes that years of bad food, shoddy materiel and strained relations with its allies defeated the Bulgarian army as surely as Serbian infantry and French artillery.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 3 }, { source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Hall dates the Bulgarian armistice to 29 September and Tasić to 30 September; Hall has Niš taken on 10 October and Tasić on 12 October. Tasić puts the forces on the eve of the breakthrough at 600,000 on the Central Powers’ side against 619,000 Allied troops. His article dates the capture of Skopje to 29 September 1916, an evident slip for 1918.",
        evidence: "uncertainty",
        studies: ["dobro-pole"],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [tasic, hallBalkans, hallBulgaria, bjelajac, ludendorff2],
  },
  "occupation-of-serbia": {
    summary:
      "The Austro-Hungarian and Bulgarian occupation of Serbia, 1915–1918, and the Toplica uprising of 1917 against it.",
    narrative: [
      {
        title: "Partition",
        text: "Ristović describes the occupiers’ plans: Conrad wanted Serbia annexed as punishment for causing the war, the Hungarian premier Tisza a reduced dependent rump, and Bulgaria had been promised 59 percent of Serbia’s territory. Austria-Hungary set up a Military General Government in Belgrade over less than half the country, divided into twelve districts and held by some 70,000 troops; the first governor, Salis-Seewis, was replaced in July 1916 after Hungarian complaints. Bulgaria took the east and south, Germany controlled the railways and mines in its zone, and Bulgarian advances into Kosovo and Albania led to a German-brokered compromise in April 1916.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Austro-Hungarian rule",
        text: "In the Austro-Hungarian zone courts, police, schools and taxes passed to the occupiers. Ristović describes hangings, collective punishments, forced labour, requisitions of food, livestock, metals and forests, and a population brought to the edge of starvation. Serbian institutions were abolished, Belgrade University was closed, the Cyrillic script was banned and school curricula purged. Between 150,000 and 200,000 Serbian civilians were deported to internment camps in Austria-Hungary and Bulgaria. Bjelajac adds that teachers and clergy were sent to camps or shot.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Bulgarian rule",
        text: "Bulgaria declared its zone Bulgarian national territory and set out to make it so. Ristović quotes an Austro-Hungarian report of 1916 describing the destruction of the educated classes and the forcible introduction of the Bulgarian language; Serbian laws were suspended without Bulgarian law replacing them, priests and notables were deported or killed, and men were sent to labour companies or the Bulgarian army. Tasić lists the bans on Serbian names, costume and script and the internment of teachers and priests.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The Toplica uprising",
        text: "Soldiers who had stayed at home and men hiding from the occupiers formed armed bands in both zones. In September 1916 the Serbian high command flew in Kosta Pećanac to prepare a rising for the expected Allied offensive. Bjelajac writes that the guerrilla leader Kosta Vojinović called for a rising in October 1916; Tasić that Bulgarian attempts to conscript Serbian youths sparked open revolt at the end of February 1917 in the Toplica region and the south of the Austro-Hungarian zone. The insurgents freed several towns before Bulgarian troops under Colonel Protogerov, with IMRO bands, and Austro-Hungarian battalions crushed the rising by the end of March with great brutality against civilians.",
        evidence: "fact",
        studies: ["toplica-uprising"],
        refs: [{ source: 2 }, { source: 1 }, { source: 0 }],
      },
      {
        title: "Resistance until liberation",
        text: "Many insurgents kept up a guerrilla war, which Tasić judges of real value when the Allied offensive broke through in September 1918. Deportations, which had grown when Romania entered the war, increased again after the rising, and disease, hunger and deportation left the occupied territories severely depopulated.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "A civilizing mission?",
        text: "Ristović notes that Austro-Hungarian officials described their rule as a civilizing mission, while the army was obsessed with the danger of guerrillas, which it attributed to a Balkan mentality to be suppressed by force. Tasić traces both the resistance and the reprisals to the harshness of the two occupation regimes and to a tradition of irregular warfare going back to Ottoman rule.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Tasić puts the number of civilians killed in suppressing the Toplica uprising at some 20,000; Ristović cites an international commission’s figure of around 25,000. Bjelajac counts some 13,000 insurgents and 26,000 troops used against them. The sources also differ on when the rising began, from Vojinović’s call in October 1916 to the open revolt of late February 1917.",
        evidence: "uncertainty",
        studies: ["toplica-uprising"],
        refs: [{ source: 2 }, { source: 0 }, { source: 1 }],
      },
    ],
    sources: [ristovic, bjelajac, tasic],
  },
  "western-front-in-1917": {
    summary:
      "The Western Front in 1917: the German retreat to the Hindenburg Line, the failed Nivelle offensive and the French mutinies, and the British offensives at Messines, Ypres and Cambrai.",
    narrative: [
      {
        title: "The Hindenburg Line",
        text: "Hindenburg and Ludendorff, who had replaced Falkenhayn, needed men for the war in the east. In early 1917 they withdrew to a new, shorter line of concrete defences behind the Somme battlefield, the Siegfriedstellung, which the British called the Hindenburg Line and which Krause describes as economical of manpower and hard to break.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Nivelle and the mutinies",
        text: "General Nivelle, Joffre’s successor, promised a breakthrough within forty-eight hours on the Chemin des Dames and spoke openly of his plans. When the attack came on 16 April, a week after the British opened their spring offensive on 9 April, the Germans had pulled back to stronger positions and reinforced the sector. The offensive lasted nine days and cost 134,000 French casualties. Within days soldiers began refusing orders; the unrest touched 121 infantry regiments. Krause compares it to a strike: the men would defend their lines but not attack in badly planned offensives. Pétain replaced Nivelle by mid-May and restored order with better food and leave and the punishment of ringleaders.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Messines",
        text: "With the French army recovering, the British took the lead. At Messines on 7 June they fired nineteen mines dug under the German positions and took the ridge quickly with moderate losses, a tactical success without strategic result.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Third Ypres",
        text: "Haig had long wanted an offensive in Flanders to clear the Channel coast. The third battle of Ypres, better known as Passchendaele, ran from 31 July to 10 November. Krause criticizes the plan of Haig and Gough for distant objectives, which thinned the artillery support, where Plumer had advised a shorter advance; the battle bogged down in rain and mud. Haig’s despatch explains his decision to go on into October by the weather and the need to support a French attack, and a note in the published despatches adds the reasons later given in Parliament: Russia’s collapse, the French army’s troubles, the Italian defeat, the absence of American troops and the danger of giving the Germans the initiative.",
        evidence: "fact",
        studies: ["passchendaele"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Cambrai",
        text: "Haig describes the Cambrai attack as a search for local success by surprise against a sector weakened by the fighting elsewhere, on ground suited to tanks; the capture of Cambrai itself was secondary to taking Bourlon and a flank position. On 20 November 437 tanks broke through the German line and advanced up to eight kilometres, but 180 were lost on the first day, Bourlon Ridge was not taken, and German counter-attacks from 30 November regained much of the ground.",
        evidence: "fact",
        studies: ["cambrai-1917"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "A better army without a victory",
        text: "Krause sees in 1917 a much more effective British army, with better casualty ratios than on the Somme, but no strategic victory, in contrast to German successes at Riga, Caporetto and in Russia; Third Ypres at least kept the Germans from attacking the French while they recovered. Ludendorff wrote that after Flanders the Allied strategy for 1917 had failed and that a quiet period, which German exhaustion made imperative, at last came in the west.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Haig claims that 131 German divisions were engaged and defeated by fewer than half as many British, and counts 57,696 prisoners taken between April and the end of the Flanders offensive; Krause finds British and German losses at Third Ypres more or less even. The fullest statement of why Haig persisted at Ypres comes not from his despatch but from a staff officer’s speech of 1919 quoted in its notes.",
        evidence: "uncertainty",
        studies: ["passchendaele"],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [krause, haigDespatches, ludendorff2],
  },
  "italian-front": {
    summary:
      "Italy’s war against Austria-Hungary, 1915–1918: eleven battles on the Isonzo, the disaster of Caporetto, the defence of the Piave and the final offensive at Vittorio Veneto.",
    narrative: [
      {
        title: "Italy goes to war",
        text: "Italy entered the war in May 1915 to win Trento, the South Tyrol, Trieste and parts of Dalmatia. Wilcox explains that geography left one promising line of attack, along the Isonzo toward Gorizia and the Carso plateau, while the Alpine frontier favoured the defender. Cadorna, the chief of staff, planned an offensive toward Ljubljana and Trieste and believed the deadlock of the Western Front would not apply to his. Conrad expected the attack on the lower Isonzo and dug in.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The Isonzo, 1915",
        text: "The first battle of the Isonzo began on 23 June, a month after the declaration of war, giving the Austrians time to dig in; the second followed on 18 July, the third and fourth in the autumn. Salvador describes an Italian artillery of about 2,200 mostly light guns, short of ammunition, and deserters who gave away Italian plans. In the autumn battles the Italians lost 116,000 men against 67,000 Austrians, and by the end of the year their army on the Isonzo was near collapse. In the high Alps the “White War” settled into a stalemate of its own.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "1916: the Strafexpedition and Gorizia",
        text: "On 15 May 1916 Conrad launched his “punishment expedition” from the Trentino onto the Asiago plateau, advancing some twelve miles before it stalled and was called off when the Brusilov offensive drew troops east. Italian casualties, 76,000, were more than double the Austrian, and the government of Salandra fell. In August the sixth battle of the Isonzo took Gorizia, the first real Italian success, followed by costly attritional battles through the autumn. Italy declared war on Germany on 27 August 1916.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "1917: the Bainsizza",
        text: "The tenth battle of the Isonzo in May 1917 failed with Italian losses Wilcox puts at over 128,000. In August the eleventh battle, led by Capello’s Second Army, took the Bainsizza plateau but cost 160,000 Italian casualties against 85,000 Austrian. Salvador writes that the Austrian lines were then near breaking, forcing Vienna to ask Germany for help. At home food riots broke out in Turin, and Wilcox finds both army and country close to breaking point.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Caporetto",
        text: "Ludendorff writes that Austria-Hungary was exhausted and that Germany could spare only six to eight divisions, so the attack had to fall where the Italians were weak and not expecting it, between Flitsch and Canale. The Austro-German Fourteenth Army under Otto von Below attacked on 24 October after a short bombardment with high explosive and gas; German infiltration tactics carried the mountains, and the 12th Division drove through Caporetto. Wilcox writes that the Italian command had warning of the attack but that Capello thought defensive preparations unnecessary. The Second Army disintegrated; the army fell back to the Tagliamento and then the Piave, where it held from early November with British and French reinforcements. Diaz replaced Cadorna.",
        evidence: "fact",
        studies: ["caporetto"],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "The Piave and Vittorio Veneto",
        text: "In June 1918 Austria-Hungary attacked once more, splitting its forces between the Piave and the Asiago plateau; forewarned by deserters and intelligence, the Italians with their British and French allies defeated the offensive. Diaz attacked only on 24 October, at Vittorio Veneto, when the Habsburg army was already falling apart: after a few days of hard fighting the Austrians were in full retreat by the 29th. An armistice was signed on 3 November and came into force the next day.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Cadorna’s war",
        text: "Salvador judges that Cadorna’s mass frontal assaults gained five to twenty-five kilometres in eleven battles, with Gorizia a political rather than strategic prize, but that his command was no worse than that of Joffre or Haig. Wilcox rejects Cadorna’s bulletin blaming Caporetto on cowardly units of the Second Army: the defeat came chiefly from the attackers’ planning and tactics and from poor Italian leadership and staff work. She also calls Vittorio Veneto in part a fiction, a few days of real combat followed by an advance against an army that had collapsed.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Wilcox dates the tenth battle of the Isonzo to 12 May 1917 with over 128,000 Italian losses; Salvador dates the attack to 19 May and gives 164,000. For Caporetto Wilcox counts over 280,000 Italian prisoners, 350,000 men who absconded and some 3,000 guns lost; Ludendorff adds 60,000 prisoners taken east of the Tagliamento alone. Diaz’s victory bulletin claimed 300,000 prisoners at Vittorio Veneto.",
        evidence: "uncertainty",
        studies: ["caporetto"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [wilcox, salvador, ludendorff2],
  },
  "western-front-in-1918": {
    summary:
      "The last year on the Western Front: the German spring offensives, the Allied counter-stroke on the Marne, and the Hundred Days that ended in the Armistice.",
    narrative: [
      {
        title: "Ludendorff’s gamble",
        text: "With Russia out of the war, Watson writes, Germany could move forty-eight divisions west and briefly outnumber the Allies, 191 divisions to 178, before the Americans arrived in strength. Ludendorff chose to attack the British between Arras and La Fère. He explains that he weighed Flanders, the Somme front and Verdun and chose the centre because the enemy was weakest there and the ground passable in any season, adding that tactics had to come before purely strategic objects; Watson counts his refusal to set firm objectives, such as the rail hubs of Amiens and Hazebrouck, a gross error.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "Operation Michael",
        text: "On 21 March 1918, after a five-hour bombardment by 6,473 guns and 3,532 mortars, German assault divisions trained in infiltration tactics broke into the British line. Haig counts at least sixty-four German divisions in the first day’s attack, more than the whole British army in France. By 5 April the Germans had taken 3,100 square kilometres and 90,000 prisoners, but Ludendorff had dispersed his effort in several directions and taken nothing of strategic value. Krause describes Pétain’s pessimism; at Doullens on 26 March the Allies gave Foch the task of coordinating their armies.",
        evidence: "fact",
        studies: ["operation-michael"],
        refs: [{ source: 1 }, { source: 4 }, { source: 0 }, { source: 5 }],
      },
      {
        title: "Georgette, Blücher and the Marne",
        text: "Further German offensives repeated the pattern: in Flanders from 9 April toward Hazebrouck, on the Chemin des Dames from 27 May, where the Germans came within ninety kilometres of Paris, and on the Matz in June. Each created a salient without a decisive result. Foch foresaw the next attack near Reims, and when it came on 15 July the Allies met it with Mangin’s Tenth Army ready to strike its flank; Krause writes that Foch countermanded Pétain’s attempt to cancel the counter-attack, which on 18 July took the initiative from the Germans for good.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Amiens",
        text: "On 8 August British, Australian, Canadian and French troops attacked east of Amiens in fog with large numbers of tanks and drove up to eight miles into the German lines. Ludendorff called it the black day of the German army: divisions allowed themselves to be overwhelmed, staffs were surprised by tanks, and he concluded that the war must be ended. Lloyd describes Foch’s plans growing more ambitious after the success.",
        evidence: "fact",
        studies: ["amiens-1918"],
        refs: [{ source: 3 }, { source: 2 }, { source: 0 }],
      },
      {
        title: "The Hundred Days",
        text: "The Allies now attacked in quick succession along the front, so that German reserves could not arrive before each battle was over. The Americans pinched out the St-Mihiel salient on 12 September, and Foch launched a series of offensives from 26 September: the Americans in the Meuse-Argonne, the British toward Cambrai, an attack in Flanders, and the assault on the Hindenburg Line at the St-Quentin canal. On 28 September Ludendorff told Hindenburg that Germany must seek peace; a note to President Wilson followed on 3 October, and the Armistice was signed on 11 November. Krause writes that German fresh reserves fell from nearly thirty divisions in August to fewer than four in October.",
        evidence: "fact",
        studies: ["meuse-argonne"],
        refs: [{ source: 2 }, { source: 0 }, { source: 3 }],
      },
      {
        title: "The cost",
        text: "Lloyd estimates Allied casualties in the Hundred Days at around 700,000, nearly 300,000 British, 279,000 French and approaching 130,000 American, and German casualties at about 760,000, with desertion and mutiny eroding the army further; the Kaiser abdicated on 9 November. Watson counts nearly a million German casualties in the spring offensives, losses that fell hardest on the best-trained troops.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 1 }],
      },
      {
        title: "Why Germany lost",
        text: "Watson blames Ludendorff’s command errors and the German army’s limits in men, materiel and mobility. Krause credits Foch’s series of short, sharp attacks along the whole front and insists that the war was won militarily in the field, against the later Nazi claim of a stab in the back. Ludendorff himself pointed to a spirit of insubordination brought back from home, though he admitted that the fighting power of the army had declined beyond doubt.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "Krause dates the second battle of the Marne from the German attack of 15 July to 6 August; Le Gall dates it from the Allied counter-attack of 18 July to the middle of August. Krause notes that Ludendorff used the phrase “black day” for several different days, and indeed his memoirs call 20 August another. Lloyd warns that German casualties in the Hundred Days may have been higher than the records show.",
        evidence: "uncertainty",
        studies: ["amiens-1918"],
        refs: [{ source: 0 }, { source: 5 }, { source: 3 }, { source: 2 }],
      },
    ],
    sources: [krause, watson, lloyd, ludendorff2, haigDespatches, leGall],
  },
  "sinai-and-palestine-campaign": {
    summary:
      "The war between the British Empire and the Ottoman Empire from the Suez Canal to Syria, 1915–1918, ending with the destruction of the Ottoman armies at Megiddo.",
    narrative: [
      {
        title: "The canal",
        text: "In February 1915 an Ottoman expeditionary force crossed Sinai and tried to cross the Suez Canal on pontoons on 3 February; it failed and withdrew, with casualties Baş puts at 52 officers and 1,358 men. He argues that it nonetheless achieved its aim of tying British troops to Egypt. In March 1916 the Egyptian Expeditionary Force was formed under General Murray from the troops evacuated from Gallipoli and the garrison of Egypt; Kitchen describes a multinational imperial force that sent ten of its fourteen divisions to other fronts.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Across Sinai",
        text: "Murray pushed his defence out across northern Sinai, building a railway, a wire-netting road and a water pipeline behind the advance. The EEF beat off an Ottoman attack at Romani on 4 August 1916, destroyed the garrison of El Arish at Magdhaba on 23 December and took Rafah on the Palestine border on 9 January 1917.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Gaza",
        text: "Murray’s attempt to take Gaza on 26 March 1917 failed in fog and confusion, costing 3,967 casualties against 1,372 Ottoman, though his report claimed over 8,000 Ottoman losses and led London to order an advance on Jerusalem. The second battle of Gaza on 19 April, with tanks and gas, failed outright at a cost of 6,444. Allenby replaced Murray in June. On the Ottoman side, Baş writes, the armies in Palestine were placed under a new army group, Yildirim, staffed almost entirely by German officers under Falkenhayn, which caused a crisis with the Ottoman commanders.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Beersheba to Jerusalem",
        text: "Allenby reorganized the EEF into two infantry corps and the Desert Mounted Corps and, with more troops and guns, broke the Gaza–Beersheba line in the third battle of Gaza from 31 October to 7 November 1917. The EEF pursued north beyond Jaffa and then turned east into the Judean hills; Jerusalem fell in December, at a cost of 21,559 casualties by the end of the year. Falkenhayn was dismissed and Liman von Sanders took command of the Ottoman army group.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Megiddo",
        text: "In 1918 the EEF raided across the Jordan toward Amman in support of the Arab Revolt and was transformed as Indian troops replaced most of its British infantry. On 19 September Allenby’s infantry broke the Ottoman line on the coastal plain north of Jaffa and his cavalry rode through the gap. Liman describes the drumfire that began at 3.30 a.m., British aircraft bombing his headquarters and the telephone exchange at Afula, Arab irregulars cutting the wires, and a rear two hundred kilometres deep with no fighting troops in it; at dawn on 20 September British troops burst into Nazareth and attacked his headquarters. Within days the cavalry had encircled the bulk of the Ottoman army and taken over 75,000 prisoners; Damascus fell on 1 October, and by the armistice the EEF was beyond Aleppo.",
        evidence: "fact",
        studies: ["megiddo-1918"],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
      {
        title: "The retreat to Aleppo",
        text: "Baş writes that the Ottoman Eighth Army was annihilated within two days, while the Seventh Army under Mustafa Kemal, taking command of what remained of the Fourth, made a fighting retreat of over 400 kilometres to positions north of Aleppo, reached just before the armistice, and so kept the British out of Anatolia. Kitchen counts the EEF’s losses in Megiddo and the pursuit at only 5,666.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Cavalry’s last triumph",
        text: "Kitchen calls Megiddo the war’s most successful large-scale use of cavalry, though he notes that Bulgaria’s collapse, which cut the Ottomans off from Germany, did more than the campaign to end the Ottoman war. Baş counts Palestine among the campaigns that ended with the Ottoman army retreating all the way to Anatolia. Liman believed that with a fairly strong reserve his front could have been restored.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Kitchen dates the occupation of Jerusalem to 9 December 1917 and Baş its capture to 8 December. Murray’s claim of over 8,000 Ottoman losses at First Gaza compares with the 1,372 Kitchen gives. Liman’s account of the collapse of September 1918 was written by the commander who lost the battle.",
        evidence: "uncertainty",
        studies: ["megiddo-1918"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [kitchen, bas, liman],
  },
  "invasion-of-poland": {
    summary:
      "Germany’s attack on Poland in September 1939, joined by the Soviet Union from the east, which destroyed the Polish army in five weeks and began the Second World War in Europe.",
    narrative: [
      {
        title: "Plan Z",
        text: "The Polish army deployed under Plan “Z”, ordered on 23 March 1939. Kennedy calls it an obvious attempt to hold the entire country, faulty because troops in the Corridor, the Poznań salient and the Kraków area could all be encircled from German territory; but those regions held much of Poland’s farmland, mines and heavy industry, and giving them up without a fight was politically unthinkable. The West Point study, written when the Polish plans were still largely unknown, saw a cordon along a thousand-mile border, a general reserve that was to come from divisions not yet mobilized, and hopes of a French and British diversion in the west that never came beyond a half-hearted advance into the Saar.",
        evidence: "fact",
        studies: ["poland-1939"],
        refs: [{ source: 0, locator: "p. 56" }, { source: 1 }],
      },
      {
        title: "The invasion",
        text: "Germany attacked at dawn on 1 September with sixty divisions and nearly 1.5 million men, an advance force of more than 2,000 tanks, nearly 900 bombers and over 400 fighters, striking from East Prussia, Germany, Silesia and Slovakia. Poland had mobilized late, had few armoured or motorized units and little more than 300 aircraft, most destroyed in the first days. Britain and France declared war on 3 September. German troops reached the outskirts of Warsaw on 8–9 September; the West Point study judges that the Germans broke Polish resistance in the first four days and so prevented a stand behind the Vistula.",
        evidence: "fact",
        studies: ["poland-1939"],
        refs: [{ source: 2 }, { source: 1, locator: "pp. 26–27" }],
      },
      {
        title: "The Bzura",
        text: "As the German armies drove on toward Warsaw, Polish forces around Kutno remained on their flank. When the German Eighth Army attacked toward the Bzura River on 9 September its advance was stopped, and the Poles counterattacked along its whole front. The Germans turned against them; the concentric attack on the Kutno pocket began on 15 September, and by the 17th the Poles had been pressed into a narrow strip between the Vistula and the Bzura, where the Luftwaffe’s bombing completed their collapse.",
        evidence: "fact",
        studies: ["poland-1939"],
        refs: [{ source: 1 }],
      },
      {
        title: "Two invaders",
        text: "On 17 September the Soviet Union invaded eastern Poland under the secret protocol of the German-Soviet pact, and the Polish government fled the country the same day. Warsaw, heavily damaged by bombing and shelling, surrendered after a siege, and the last Polish units laid down their arms in early October. Germany and the Soviet Union partitioned the country along the Bug River on 29 September; Germany annexed its western provinces and ruled the rest as the Generalgouvernement under Hans Frank.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 1 }],
      },
      {
        title: "Why Poland fell",
        text: "The West Point study warned against reading the campaign as a mere manoeuvre: the officially published German losses were over 10,000 killed, 30,000 wounded and 3,000 missing, mostly in eight days, against stubborn Polish resistance. It credits a balanced German force, not air power and tanks alone, executing a plan under excellent leadership, and regrets that the Allies learned little from it. The Holocaust Encyclopedia notes that the world coined a new word, Blitzkrieg, for the method. Neitzel adds that Rundstedt, whose Army Group South overran the Polish defences within days, left the actual planning to his chief of staff, so his own share in the victory is hard to judge.",
        evidence: "interpretation",
        studies: ["poland-1939"],
        refs: [
          { source: 1, locator: "pp. 26–27" },
          { source: 2 },
          { source: 3 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "The Holocaust Encyclopedia dates Warsaw’s surrender to 28 September and the surrender of the last Polish unit to 6 October; the West Point study has the Warsaw garrison capitulating on 27 September and resistance east of Dęblin lasting until 5 October. Kennedy’s 1956 Army pamphlet could draw on Polish deployment orders that the 1945 West Point authors admitted they did not have.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 2 }, { source: 1 }, { source: 0 }],
      },
    ],
    sources: [pamPoland, westPoint, ushmmPoland, rundstedt],
  },
  "western-campaign-of-1940": {
    summary:
      "Germany’s conquest of the Netherlands, Belgium and France in May and June 1940, from the armoured breakthrough in the Ardennes to the evacuation at Dunkirk and the French armistice.",
    narrative: [
      {
        title: "The sickle cut",
        text: "As chief of staff of Army Group A from October 1939, Manstein opposed the General Staff’s plan, which in essence repeated the Schlieffen Plan’s sweep from the north. He wanted strong armoured forces to break through in the south and drive for the mouth of the Somme, splitting the Allied armies and defeating them in a “sickle cut”. Hitler took up the idea and ordered the plan recast on that basis; Manstein himself was given a corps that only fought in the pursuit. Neitzel writes that Rundstedt, his army group commander, was rather sceptical of the plan and carried it out hesitantly.",
        evidence: "fact",
        studies: ["france-1940"],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "The Allied plan",
        text: "Gamelin’s plan sent the French First and Seventh Armies and the British Expeditionary Force forward to the Dyle in Belgium. Ellis, the British official historian, finds nothing in German records to suggest a trap: without the advance, he argues, Bock’s armies would have reached the French frontier in days instead of taking eighteen to break Belgian resistance, so the move was probably wise, though spoiled by Gamelin’s use of the Seventh and Ninth Armies. Ellis also prints a report of October 1939 in which Ironside recorded Gamelin predicting almost exactly the German attack through the Ardennes that later came, a view Gamelin seems to have abandoned.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Breakthrough to the Channel",
        text: "Having ordered the advance, Gamelin left the battle to Georges, who was in sole command of the northern armies during the first ten days. Weygand replaced Gamelin on 20 May just as the German breakthrough reached the Channel and cut the Allies in two: the French First Army, the BEF and the Belgian army to the north, and to the south a French Ninth Army virtually destroyed and no substantial reserve. Gort held Arras and then gave it up, improvised a defence of the canal line behind him and moved two divisions in time to stop a break on the Ypres front.",
        evidence: "fact",
        studies: ["france-1940"],
        refs: [{ source: 0 }],
      },
      {
        title: "Dunkirk",
        text: "Gort began organizing the Dunkirk bridgehead and planning a partial evacuation before his government or the French accepted it; London ordered the evacuation on 26 May, and it had been running for three days before Weygand decided to evacuate French troops. Ellis concedes that Rundstedt’s pause on the canal line probably helped save the BEF, and Neitzel attributes the halt of the panzer divisions before Dunkirk partly to Rundstedt’s hesitation. South of the Somme the 51st Division was lost with the French IX Corps at St Valery because the order to withdraw came too late. British Army casualties came to 68,111; the RAF had 1,526 casualties and lost 931 aircraft.",
        evidence: "fact",
        studies: ["france-1940"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Why France fell",
        text: "Ellis traces the British failure to the pre-war policy that prepared only a small army, and concludes that the Allies were neither well enough prepared, equipped nor commanded. The French high command, he writes, was beaten by the pace of German operations and its own inability to think ahead, and once Weygand believed no withdrawal was possible defeat was certain; the Luftwaffe played an important but secondary part. Klink sees the victory as the product of surprise, close cooperation between army and air force and the helplessness of the Allied command.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Ellis’s judgement of the French commanders comes from a British official history that disclaims any intention of discussing the French army itself. His evidence for Gamelin’s forecast of the Ardennes attack is a single report by Ironside, of which no other record seems to exist. Ellis and Neitzel agree that the halt before Dunkirk helped the British, but Ellis presents it as one factor among Gort’s own decisions, while Neitzel uses it to judge Rundstedt’s command.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
    ],
    sources: [ellis, manstein, rundstedt],
  },
  "battle-of-britain": {
    summary:
      "The German air offensive against Britain in the summer and autumn of 1940, meant to win the air superiority needed for an invasion, and its defeat by RAF Fighter Command.",
    narrative: [
      {
        title: "Sealion",
        text: "Hitler ordered preparations for a landing in England, Operation Sealion, but the German Naval Staff, which would have to carry the army across, recommended at the end of July that it be put off until the spring of 1941, and all parties agreed that it needed local air superiority first. Collier concludes that a landing was held to be impossible unless the Luftwaffe won a major victory in the air, and that nothing in the evidence suggests Hitler would not have gone ahead had it done so.",
        evidence: "fact",
        studies: ["battle-of-britain"],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "The fighters as target",
        text: "Göring told his commanders on 19 August that their first aim was the destruction of the British fighters. After attacks on coastal targets and a raid on the north-east on 15 August, which met a strong reception from the squadrons Dowding had kept in the north, the Luftwaffe concentrated by day on No. 11 Group in the south-east and on the sector stations from which its squadrons were controlled. Richards notes that the RAF claimed 182 aircraft destroyed on 15 August, when German records later showed seventy-six.",
        evidence: "fact",
        studies: ["battle-of-britain"],
        refs: [{ source: 0 }],
      },
      {
        title: "The critical fortnight",
        text: "Richards places the crisis between 24 August and 6 September, when the sector stations were damaged and fighter losses outran production; three more weeks on that scale would have exhausted the reserves. The real shortage was pilots: by early September squadrons averaged sixteen operational pilots out of twenty-six, and on 8 September Dowding had to divide his squadrons into classes, keeping only those in the south-east at full strength. Yet 125 Spitfires and Hurricanes were still in reserve on 7 September, and the Luftwaffe was in a crisis of its own.",
        evidence: "fact",
        studies: ["battle-of-britain"],
        refs: [{ source: 0 }],
      },
      {
        title: "London",
        text: "On 7 September the Luftwaffe turned against London and, because of its own losses, began to drop most of its bombs by night. In the fortnight before that date Fighter Command lost 277 aircraft against 378 German; in the fortnight after, 144 against 262. Bomber Command attacked the invasion barges gathering in the Channel ports, and on 12 October Hitler postponed Sealion until the spring. In October Fighter Command lost a hundred pilots killed, and by the end of the battle nearly 450 of its men had died since July.",
        evidence: "fact",
        studies: ["battle-of-britain"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Radar and a narrow margin",
        text: "Collier locates the strength of the defences in commanders and controllers able to act on an early warning system built on radar, which he calls possibly the best investment ever made by a British government. Richards calls Fighter Command’s triumph complete but narrow, and records the controversy over Dowding’s refusal to strip the rest of the country for the south-east and over Park’s tactics, criticized by Leigh-Mallory, who favoured massed wings.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 3 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Richards explains how wartime claims went wrong, with several pilots or gunners claiming the same aircraft in the confusion of the big days, and faults the Air Ministry for presenting estimates as facts; German claims of British losses were wilder still. He also rejects the later story that Fighter Command was ever down to a handful of aircraft. Collier dates the end of the invasion threat to October 1940, when the Germans concluded that a landing that year was impossible.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 3 }],
      },
    ],
    sources: [
      richardsBritain,
      collierSealion,
      collierLastPhase,
      collierSumming,
    ],
  },
  "battle-of-the-atlantic": {
    summary:
      "The struggle for the Atlantic sea lanes from 1939 to 1945, above all between the German U-boats and the Allied convoys, escorts and aircraft that protected Britain’s supply lines.",
    narrative: [
      {
        title: "Raeder’s navy",
        text: "Salewski writes that Raeder built toward a large, balanced battle fleet and supported U-boat construction only hesitantly, which set him against the U-boat commander, Dönitz. The outbreak of war in 1939, years earlier than he expected, came to him as a shock. His surface raiders won notable successes until the loss of the Bismarck on 27 May 1941, while the increasingly important U-boat war suffered from shortages of materiel and men. After a quarrel with Hitler over the big ships Raeder resigned on 30 January 1943, and Dönitz, who had directed the U-boats since the start of the war, took command of the navy.",
        evidence: "fact",
        studies: ["battle-of-the-atlantic"],
        refs: [{ source: 3 }, { source: 1 }],
      },
      {
        title: "The American coast",
        text: "After Germany declared war on the United States, the U-boats struck the American seaboard from mid-January 1942. Roskill counts never more than about twelve working there at once, yet they sank thirteen ships of nearly 100,000 tons in the first two weeks, and in March forty-three ships of over 250,000 tons in American coastal, Gulf and Caribbean waters, most of the tonnage tankers. There was no blackout ashore, lights and radio were used freely, and a partial convoy system began only on 1 April. The Army history notes that at the end of 1941 the Navy had about twenty surface vessels and a hundred aircraft to guard the whole Atlantic coast, and that Allied losses in the first half of 1942 nearly equalled those of all 1941.",
        evidence: "fact",
        studies: ["battle-of-the-atlantic"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Packs on the convoy routes",
        text: "As American convoys and patrols took effect, the U-boats moved to the Caribbean in the summer of 1942 and then back to the North Atlantic, hunting in packs and refuelled at sea by supply submarines, the “milch cows”. Allied shipping losses from all causes peaked in November 1942 at over 1.1 million deadweight tons, while the convoys to northern Russia suffered especially heavily.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The crisis of March 1943",
        text: "In the first twenty days of March 1943 the Allies lost ninety-seven ships of more than half a million tons, and nearly two-thirds of that month’s sinkings were ships in convoy; some forty U-boats gathered against convoys HX 229 and SC 122 alone. The Admiralty later wrote that the Germans never came so near to cutting the link between the New World and the Old, and the Naval Staff feared that convoy might no longer be an effective defence.",
        evidence: "fact",
        studies: ["battle-of-the-atlantic"],
        refs: [{ source: 1 }],
      },
      {
        title: "The turn of May 1943",
        text: "Support groups, escort carriers and very long range aircraft reached the convoy routes together that spring. In a series of battles, beginning with the defence of ONS 5, the escorts beat the packs; by 22 May the Germans had lost thirty-three U-boats that month and forty-one by its end. Dönitz withdrew from the North Atlantic, calling the move temporary, and SC 130, which arrived on 25 May, was the last convoy seriously menaced. Throughout the period only two ships were sunk in Atlantic convoys while an air escort was present.",
        evidence: "fact",
        studies: ["battle-of-the-atlantic"],
        refs: [{ source: 1 }],
      },
      {
        title: "How the convoys won",
        text: "Roskill credits the convoy system, and the sea and air escorts of the convoys, with both reducing losses and defeating the U-boats; he judges that Britain had a narrow escape in the spring of 1943, and that history would have blamed a defeat on the lack of two more squadrons of very long range aircraft. He also gives Admiral Horton of Western Approaches a large share of the credit. Salewski faults Raeder for clinging to strategic and technical ideas that the war quickly made obsolete, above all in U-boat construction.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "Roskill, the British naval historian, is openly critical of American slowness to start coastal convoys and to learn from British experience; the American Army history stresses instead the lack of ships and aircraft and the disputes between the Navy and the Army Air Forces over antisubmarine work. Roskill counts losses in ships and tons, the Army history in deadweight tons, so their figures cannot simply be compared. Both concentrate on 1942–1943; Roskill notes that Dönitz returned to the convoy routes six months after May 1943 but that the battle never again hung so delicately in the balance.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
    ],
    sources: [roskillAmerica, roskillEscorts, amhDefensive, raeder],
  },
  "german-invasion-of-the-soviet-union": {
    summary:
      "Operation Barbarossa, Germany’s invasion of the Soviet Union in June 1941, and the drive on Moscow that ended in the Soviet counteroffensive of December 1941.",
    narrative: [
      {
        title: "Won in fourteen days",
        text: "On 3 July 1941, twelve days into the invasion, Halder wrote that the campaign had very likely been won in less than fourteen days; beyond the Dvina and the Dnepr the task would be to seize the Soviet means of production. Stalin, who had said nothing in public until then, spoke to the nation by radio the same day, after setting up the State Defense Committee on 30 June; on 10 July he became supreme commander.",
        evidence: "fact",
        studies: ["barbarossa"],
        refs: [{ source: 0 }],
      },
      {
        title: "Kiev before Moscow",
        text: "In Directives 33 and 34 of July Hitler gave Leningrad and the Ukraine priority over Moscow and ordered Army Group Center to send armour north and south, to the dismay of his generals, who believed the Soviet command would stand before Moscow. On 21 August he sent Guderian’s panzer group south, and Guderian failed to change his mind in a last interview. Guderian’s and Kleist’s armour met behind Kiev on 16 September, and the Germans counted 665,000 prisoners; a Soviet history gives the strength of Southwest Front as 677,085 at the start of the battle and 150,541 at its end.",
        evidence: "fact",
        studies: ["barbarossa"],
        refs: [{ source: 0 }],
      },
      {
        title: "Typhoon",
        text: "Directive 35 of 6 September returned the main effort to Army Group Center. Within a week of the attack in early October Bock’s three panzer groups had encircled six Soviet armies at Vyazma and most of Bryansk Front, and the Germans counted 663,000 prisoners from the Vyazma pocket and about 100,000 near Bryansk. Halder called it “downright classical”; the loss of Kalinin on 14 October set off panic in Moscow. Then the autumn mud set in: the first snow fell on 6 October, the roads became quagmires, and the Blau study names the rasputitsa as one of the main reasons the Germans failed to take Moscow.",
        evidence: "fact",
        studies: ["moscow-1941"],
        refs: [{ source: 0 }, { source: 3 }],
      },
      {
        title: "The last push",
        text: "When Halder met the army group chiefs of staff at Orsha in mid-November, German casualties already stood at 686,000, a fifth of the 3.4 million men committed; panzer divisions were down to 35 percent of their tanks, the 136 divisions in the East were rated as worth 83, and winter clothing lay in depots because the railways could not carry it. The offensive was resumed anyway. Bradley writes that Model, commanding a panzer corps, would not admit that his troops were too weak to storm Moscow; on 4 December they reached a point a few kilometres north of the city before the Soviet blow forced them back.",
        evidence: "fact",
        studies: ["moscow-1941"],
        refs: [{ source: 0 }, { source: 5 }],
      },
      {
        title: "The counteroffensive",
        text: "At the end of November the Germans abandoned Rostov, news of a German retreat that Ziemke and Bauer call the rarest kind thus far in the war, and Hitler dismissed Rundstedt over it. The Stavka struck at Moscow on 5 and 6 December. Hitler forbade any withdrawal beyond local straightening of the line, Brauchitsch resigned, and Guderian, who would not shrink from quarrelling with Hitler, was relieved of command at Christmas. The Blau study describes heavy frostbite casualties, a critical supply situation and the public discouragement caused by the appeal for furs and winter clothing for the troops.",
        evidence: "fact",
        studies: ["moscow-1941"],
        refs: [{ source: 1 }, { source: 2 }, { source: 4 }, { source: 3 }],
      },
      {
        title: "Why Barbarossa failed",
        text: "Ziemke and Bauer argue that at Moscow the Soviet reserves and the weather turned what would in any case have been an unsatisfactory end to the German campaign into a disaster, and that once the United States entered the war Germany could not win unless it defeated the Soviet Union first, which after 5 December 1941 it could not do. German strategy aimed at destroying Soviet manpower, yet Soviet strength at the front rose from 2.9 million men in June 1941 to 4.2 million in December.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 6 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Soviet accounts used by Ziemke and Bauer differ over when the counteroffensive was decided: Sokolovskiy says on 4 December, Vasilevskiy that the Stavka set 5 and 6 December, while the Germans later believed that the drop in temperature on the night of the 4th governed Zhukov’s timing. The prisoner totals for Kiev and Vyazma are German counts. The Blau study rests largely on German records and the postwar writings of German generals.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }, { source: 3 }],
      },
    ],
    sources: [
      zbBarbarossa,
      zbMoscow,
      zbCounter,
      pamRussia,
      guderian,
      model,
      zbConclusion,
    ],
  },
  "japanese-offensive-of-1941-1942": {
    summary:
      "Japan’s opening offensive of December 1941 to the spring of 1942: the attack on Pearl Harbor and the conquest of Malaya, Singapore, the Philippines and the Netherlands Indies.",
    narrative: [
      {
        title: "The plan",
        text: "Japan’s first phase was to seize the resource-rich southern areas, attack the United States fleet in Hawaii and take positions for a defensive perimeter around the southern resources and the home islands. The Pearl Harbor attack, conceived by Admiral Yamamoto, was meant to put the Pacific Fleet out of action and so gain time and freedom of action in the south. Admiral Nagano decided on it on 3 November 1941, and the carrier force sailed from Hitokappu Bay on 26 November.",
        evidence: "fact",
        studies: ["pearl-harbor"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Pearl Harbor",
        text: "On 7 December some 350 aircraft from six carriers that had approached undetected to 200 miles north of Oahu achieved complete surprise. About 170 aircraft were destroyed, all eight battleships sunk or badly damaged and about 3,400 Americans became casualties, 2,402 of them killed; the Japanese lost about 49 aircraft and five midget submarines. The fleet’s three carriers were away, and the oil tanks and repair shops were not hit. The Japanese did not repeat the attack, because the capital ships had been struck, the American carriers could not be found and some fifty land-based aircraft were thought to remain. The same day, Formosa-based bombers destroyed most of the Far East Air Force on its airfields near Manila.",
        evidence: "fact",
        studies: ["pearl-harbor"],
        refs: [{ source: 3 }, { source: 1 }],
      },
      {
        title: "Malaya and Singapore",
        text: "Japanese landings in Malaya went ahead on schedule, and on 10 December naval aircraft sank the Prince of Wales and the Repulse for the loss of four planes, removing the only threat to the invasion convoys. Jungle-trained troops drove down the peninsula, infiltrating and outflanking each British position. Richards and Saunders describe the RAF fighting on from airfields under shellfire while its units were evacuated to Sumatra in chaos; the Japanese landed on Singapore island on 8 February, and on 15 February the garrison of over 80,000 surrendered.",
        evidence: "fact",
        studies: ["singapore-1942"],
        refs: [{ source: 2 }, { source: 3 }, { source: 4 }],
      },
      {
        title: "The southern area",
        text: "Wake, Guam and Hong Kong fell in December. In the Philippines MacArthur withdrew into Bataan on 23 December, leaving supplies behind that doomed the siege. In the Battle of the Java Sea on 27–28 February the Japanese sank two Allied cruisers and three destroyers without loss, and on 9 March the last Allied forces in the Netherlands Indies, almost 100,000 men, surrendered. The Survey writes that never before had so much been gained for so little: apart from three destroyers sunk by submarines, no major Japanese warship was lost.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }, { source: 2 }],
      },
      {
        title: "A brilliant blow and its cost",
        text: "The Army history calls Pearl Harbor one of the most brilliant tactical feats of the war, but it brought the United States fully into a two-front war, since Germany and Italy declared war at once. The Survey’s Japanese informants saw the trap on their own side: the ease of the first phase led Japan to underestimate American strength and expand beyond the original perimeter, which some senior officers thought already too extended, and the losses suffered there became its greatest handicap.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 3 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Survey’s Pearl Harbor chapter was supplied from memory by Japanese officers and warns that details may need correcting. It presents the decision not to strike again as following from an aim already achieved, while the Army history counts the untouched oil tanks, repair shops and absent carriers among the attack’s failures. Richards and Saunders tell the fall of Singapore from the air force’s side and give the RAF’s own estimate of 183 Japanese aircraft destroyed.",
        evidence: "uncertainty",
        studies: ["pearl-harbor"],
        refs: [{ source: 1 }, { source: 3 }, { source: 4 }],
      },
    ],
    sources: [
      ussbsPlanning,
      ussbsPearl,
      ussbsSouth,
      amhDefensive,
      richardsSingapore,
    ],
  },
  "south-pacific-operations-of-1942": {
    summary:
      "The Japanese attempts of 1942 to take Port Moresby in New Guinea, first by sea, turned back in the Battle of the Coral Sea, then overland across the Owen Stanley Range.",
    narrative: [
      {
        title: "Port Moresby",
        text: "After occupying Rabaul at the end of January 1942, the Japanese set out to push their outer perimeter further. Port Moresby, on the south-east coast of Papua, would be its southern outpost, deny the Allies a base within air range of Rabaul and dominate northern Australia. For MacArthur, the best way to defend Australia was to meet the Japanese in New Guinea, and the way into New Guinea lay through Port Moresby. On 30 April an invasion force sailed from Truk, and Tulagi in the Solomons was occupied on 3 May.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "The Coral Sea",
        text: "A United States force built around the carriers Lexington and Yorktown entered the Coral Sea to meet it. On 7 May American aircraft sank the light carrier Shoho within fifteen minutes; on 8 May the two carrier forces found each other and struck simultaneously, badly damaging the Shokaku and damaging the Yorktown, while the Lexington, wrecked by fires and explosions, had to be abandoned. Short of air cover and pilots, the invasion force turned back, and the losses at Midway in June made the Japanese give up a seaborne landing at Port Moresby.",
        evidence: "fact",
        studies: ["coral-sea"],
        refs: [{ source: 0 }],
      },
      {
        title: "The Kokoda Trail",
        text: "Short of carriers after Midway, the Japanese tried overland from Buna on the north coast, over the Owen Stanley Range through Kokoda. General Horii’s troops defeated the Australian and Papuan units in their way and by mid-September were only twenty miles from Port Moresby; the Allies counterattacked along the trail and at Milne Bay and pushed them back to entrenched positions around Buna and Gona.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "Buna",
        text: "The fighting at Buna and Gona lasted into the new year. Allied losses in the Papua campaign came to 8,546 killed and wounded; the American 32nd Division lost 687 killed in action and 2,161 wounded or lost to other causes. The Army’s campaign history attributes much of this to inexperience: the troops were insufficiently hardened, poorly schooled in night patrolling and attacking fortifications, and short of artillery and tanks under a theatre doctrine summed up by General Kenney’s remark that “the artillery in this theater flies”.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "A base saved",
        text: "The Survey argues that by turning back the Port Moresby force the Coral Sea stopped Japan’s southward expansion by sea and saved the base that became the main stepping stone of the Allied advance through New Guinea. The Army’s campaign history adds that intelligence twice underestimated the Japanese, first their determination to take Port Moresby and then their numbers at Buna, and that MacArthur believed too long that better leadership could overcome any obstacle.",
        evidence: "interpretation",
        studies: ["coral-sea"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Survey treats the Coral Sea as the end of the threat to Port Moresby, but the overland advance that followed brought the Japanese closer to it than the invasion fleet ever came. The Army brochure is a history of American operations, although its own account shows Australian and Papuan units doing the early fighting on the Kokoda Trail.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [ussbsCoral, cmhPapua, amhDefensive, amhJapan],
  },
  "japanese-midway-operation": {
    summary:
      "Japan’s attempt in June 1942 to seize Midway and destroy the remaining American carriers, which ended in the loss of four Japanese fleet carriers.",
    narrative: [
      {
        title: "The second phase",
        text: "Encouraged by the unexpected ease of their first conquests, the Japanese delayed consolidating and planned further expansion. Midway, to be occupied on 6 June 1942, was the next step east; the Japanese knew that all the American carriers available had been in the distant Coral Sea only three weeks before.",
        evidence: "fact",
        studies: ["midway"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The American plan",
        text: "The American command suspected Japanese intentions. Having lost ships at Pearl Harbor and the Coral Sea, it decided not to commit its surface forces but to wear the Japanese fleet down by air attack from three carriers rushed north from the Coral Sea; Midway’s defences were strengthened, a submarine cordon was set and Marine squadrons and long-range search planes were concentrated on the island.",
        evidence: "fact",
        studies: ["midway"],
        refs: [{ source: 0 }],
      },
      {
        title: "4 June",
        text: "On the morning of 4 June Marine dive bombers from Midway and the Hornet’s torpedo squadron attacked the Japanese carriers without success. At about 10.20 the dive bombers of the Enterprise and Yorktown hit the Soryu three times, the Akagi twice and the Kaga four times, while the Akagi and Kaga had forty and thirty aircraft aboard. Aircraft from the undamaged Hiryu then struck the Yorktown, and that afternoon American aircraft found and sank the Hiryu. With all four carriers of his striking force lost, Yamamoto abandoned the operation; on 6 June dive bombers sank the cruiser Mikuma.",
        evidence: "fact",
        studies: ["midway"],
        refs: [{ source: 0 }],
      },
      {
        title: "The dive bombers",
        text: "The Survey credits the carrier dive bombers with the victory: in 191 sorties they scored 32 hits, fifteen of which destroyed the Japanese carrier force. Japanese survivors testified that the B-17s’ horizontal bombing from Midway scored no hits at all.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The turning point",
        text: "The Survey judges that the loss of four of Japan’s finest carriers, 250 aircraft and some hundred first-line pilots stripped Japan of the striking force behind its conquests, shifted the balance of power steadily to the United States and made Midway perhaps the decisive battle of the war. The Army history agrees that Midway was the turning point, redressing the naval balance and giving the Allies the initiative, and that Japan lost the bulk of its best naval pilots at the Coral Sea and Midway together.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Survey says only that Japanese intentions were “suspected”. The editors of its online edition point out that it was written long before the American decryption of Japanese naval codes, which decided the battle, was declassified. The Survey counts some hundred pilots lost at Midway; the Army history speaks of the losses of the Coral Sea and Midway together.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 3 }],
      },
    ],
    sources: [ussbsMidway, ussbsPlanning, amhDefensive, amhJapan],
  },
  "german-summer-offensive-of-1942": {
    summary:
      "Germany’s 1942 offensive toward the Caucasus oil fields and the Volga, which ended with the encirclement and destruction of the Sixth Army at Stalingrad in the winter of 1942–1943.",
    narrative: [
      {
        title: "Blau",
        text: "The Blau study, drawing on Halder and other German generals after the war, writes that Hitler himself conceived the 1942 offensive, chose its objectives and dictated its text. Halder wanted to stabilize the front and refit; Hitler insisted that time was working against Germany and that the Caucasus oil mattered more than anything Moscow could offer. Kehrig describes the plan that opened on 28 June: the main thrust for the oil fields, covered by the Sixth Army and parts of the Fourth Panzer Army, which were to take Stalingrad and block the Volga.",
        evidence: "fact",
        studies: ["stalingrad"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Directive 45",
        text: "By 23 July the Germans had failed to trap the Soviet forces in the Don bend, yet Hitler’s Directive 45 of that day sent his tired armies toward the Caucasus and the Volga at the same time. Most of the forces and transport went to Army Group A in the Caucasus, so that the weakened Sixth Army could only attack across the Don toward Stalingrad on 21 August. Paulus warned Hitler on 12 September, and the army high command until November, about the weakness of the Romanian, Italian and Hungarian armies guarding his flanks.",
        evidence: "fact",
        studies: ["stalingrad"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Encirclement",
        text: "The Soviet offensive of 19–20 November broke through the Romanian armies, and by 22 November the Sixth Army, with parts of the Fourth Panzer Army and both Romanian armies, was surrounded. Hitler ordered it to hold between the Don and the Volga until relieved, supplied from the air; Paulus accepted the plan, unlike his corps commander Seydlitz. In December the airlift averaged 90 tons a day and reached the army’s minimum of 300 tons only once, on 7 December.",
        evidence: "fact",
        studies: ["stalingrad"],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "Winter Storm",
        text: "Manstein’s relief attack, Operation Wintergewitter, stalled on 19 December at the Myshkova River, thirty-five kilometres from the pocket. Kehrig writes that a breakout at that last moment was ruled out by the army’s lack of fuel and the hunger of its men. Klink credits Manstein with what followed: an orderly retreat of his army group and the withdrawal of the First Panzer Army from the Caucasus across the Don.",
        evidence: "fact",
        studies: ["stalingrad"],
        refs: [{ source: 1 }, { source: 4 }, { source: 2 }],
      },
      {
        title: "The end at Stalingrad",
        text: "The final Soviet assault began on 10 January 1943. On the morning of 31 January Sixth Army headquarters in a department store basement signalled that the Russians were at the door; Paulus, promoted field marshal the night before, went into captivity, and the northern pocket held out until 2 February. Ziemke and Bauer put German losses in the pocket at somewhat over 200,000, an exact total never established, with 30,000 wounded flown out; Soviet accounts give 147,000 German dead counted and 91,000 prisoners, among them 24 generals. The Soviet Union never released its own losses.",
        evidence: "fact",
        studies: ["stalingrad"],
        refs: [{ source: 2 }, { source: 1 }],
      },
      {
        title: "The decision in the East",
        text: "Ziemke and Bauer argue that Germany failed on 19 November 1942 at the one thing it could still do, keeping the strategic initiative from the Soviet Union, and that Stalingrad put the Soviet Union on the road to a full share in victory. They reject the Soviet claim that the decision there was won single-handed: the United States was carrying a two-front war, and the roads from Stalingrad and from North Africa converged in Germany. The generals behind the Blau study conclude that the offensive should never have been launched, and blame faulty intelligence coloured by Hitler’s wishful thinking and an advance the supply services could never sustain.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 3 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Kehrig writes of the 500 tons a day of air supply that Hitler announced; Ziemke and Bauer give 300 tons as the army’s daily minimum, which the airlift almost never met. The German loss figures cannot be checked against Soviet ones. The Blau study rests on the postwar writings of Halder and his associates, who had reason to lay the blame on Hitler.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
    ],
    sources: [pamRussia, paulus, zbFinale, zbConclusion, manstein],
  },
  "solomon-islands-campaign": {
    summary:
      "The Allied counteroffensive in the Solomon Islands from August 1942, opened by the six-month struggle for Guadalcanal and its airfield.",
    narrative: [
      {
        title: "Rabaul’s outposts",
        text: "Japan drew its south-eastern defence line through the Solomons, with Rabaul on New Britain as its citadel, and in 1942 chose Guadalcanal among the positions that would dominate the line of communications between the United States, Australia and New Zealand. After the Coral Sea and Midway ended the plans to advance on New Caledonia and Fiji, the Japanese went on building outposts for Rabaul in the Solomons, among them an airfield on Guadalcanal.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The landing",
        text: "On 7 August 1942 the 1st Marine Division landed on Guadalcanal and nearby islands and took the airfield at Lunga Point, which the marines named Henderson Field. Air battles were fought almost daily for a month and more, and the Japanese sent in strong ground reinforcements, gambling, and finally losing, substantial air and naval forces in the effort to hold the island.",
        evidence: "fact",
        studies: ["guadalcanal"],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "Night battles at sea",
        text: "The Survey follows the naval battles that decided the island’s supply: the Eastern Solomons in August, where American carrier aircraft sank the light carrier Ryujo; Cape Esperance on the night of 11–12 October, where an American cruiser force surprised a Japanese squadron; the Santa Cruz Islands on 26 October, where the Hornet was lost and the Shokaku was hit; and the naval battle of Guadalcanal of 12–15 November, after which the Japanese gave up all plans to retake the island. Lacking landing craft, they had to send reinforcements in small groups that were destroyed piecemeal.",
        evidence: "fact",
        studies: ["guadalcanal"],
        refs: [{ source: 0 }],
      },
      {
        title: "The airfield and the Tokyo Express",
        text: "The major Japanese assault on the Henderson Field perimeter in late October, delayed until the 23rd, broke down in repeated attacks. Thereafter the almost nightly “Tokyo Express” of destroyers could not keep the garrison supplied, and with malaria spreading General Hyakutake had to scale down his aims. In January 1943 the Army’s XIV Corps went over to the offensive, but a strongpoint at the Gifu held off five American battalions for a month, long enough for the Japanese to evacuate some 13,000 men by way of Cape Esperance.",
        evidence: "fact",
        studies: ["guadalcanal"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The cost",
        text: "The Army’s campaign history counts 1,592 Americans killed in action and 4,183 wounded, besides thousands disabled by disease; the two Army divisions lost 550 killed and 1,289 wounded. The Japanese lost about 14,800 killed in battle, another 9,000 dead of disease and about 1,000 taken prisoner. Each navy lost twenty-four ships, and Japan over six hundred aircraft and their pilots.",
        evidence: "fact",
        studies: ["guadalcanal"],
        refs: [{ source: 1 }],
      },
      {
        title: "Taking the initiative",
        text: "With the victory at Buna, the Army history argues, Guadalcanal turned back the Japanese drive toward Australia, and above all the Americans had stopped reacting to Japanese thrusts and taken the initiative themselves. It is frank about the friction: ground commanders saw an amphibious campaign in which the navy would hold the seas until the island was cleared, while senior naval commanders treated it more as a raid and twice left Guadalcanal waters, in August and October; intelligence about the island stayed poor throughout.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Army brochure dates the campaign from 7 August 1942 to 21 February 1943, past the end of fighting on Guadalcanal, to include the occupation of the Russell Islands, which the Army’s general history calls the last act. The figure of 13,000 Japanese evacuated comes from prisoners of war. The brochure adds that although both navies lost twenty-four ships, Japan’s smaller industrial base made its losses the more serious.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }],
      },
    ],
    sources: [ussbsSolomons, cmhGuadalcanal, amhJapan],
  },
  "north-african-campaign": {
    summary:
      "The war in North Africa from Rommel’s arrival in 1941 to the Axis surrender in Tunisia in May 1943, turning on the British victory at El Alamein and the Anglo-American landings in French North Africa.",
    narrative: [
      {
        title: "Rommel in the desert",
        text: "Sent to Libya in 1941 to help the defeated Italians, Rommel ignored his orders to stay on the defensive, attacked and within weeks reached the Egyptian border. The British drove him back in December 1941, relieving Tobruk after an offensive that began on 18 November, but he retook Cyrenaica and on 21 June 1942 seized Tobruk itself, for which Hitler made him a field marshal. Neitzel writes that Rommel, against Kesselring and Mussolini, who wanted Malta taken first, persuaded Hitler to let him pursue the apparently beaten British army.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }, { source: 0 }],
      },
      {
        title: "The Alamein line",
        text: "In July and September 1942 the British stopped the badly supplied Afrika Korps at El Alamein, 120 kilometres west of Cairo. Richards and Saunders quote Ciano on 2 September that Rommel was halted for lack of fuel, and Rommel that the petrol on which his plans depended did not arrive. The United States sent its first bombers to Egypt in the summer, and 300 new Sherman tanks, which gave the Eighth Army a tank roughly equal to the German panzers.",
        evidence: "fact",
        studies: ["el-alamein"],
        refs: [{ source: 1 }, { source: 3 }, { source: 0 }],
      },
      {
        title: "Lightfoot and Supercharge",
        text: "Montgomery’s Eighth Army opened its offensive at El Alamein on 23 October. Richards and Saunders stress that air superiority let it make all its preparations unobserved: the assaulting infantry of XXX Corps spent the whole day of the 23rd in forward fox-holes without being spotted. After a regrouping Montgomery launched Operation Supercharge on the night of 1–2 November, and on 4 November two infantry divisions cleared the anti-tank screen for the armour to go through. In October British aircraft and submarines sank some 50,000 tons of Axis shipping on the North African routes, and of the German cargo lost, sixty-five per cent was fuel. Rommel withdrew against Hitler’s orders to hold, to save his troops from destruction.",
        evidence: "fact",
        studies: ["el-alamein"],
        refs: [{ source: 1 }, { source: 2 }, { source: 3 }],
      },
      {
        title: "Torch and Tunisia",
        text: "On 8 November Allied troops landed near Casablanca, Oran and Algiers, some 107,000 men carried by over 400 warships. Rommel fell back to the Mareth Line in southern Tunisia, while Arnim faced west against Eisenhower; on 14 February 1943 Rommel broke through at the Kasserine Pass, but without a unified Axis command his thrust was turned north and halted on 22 February. Patton’s II Corps and Montgomery’s Eighth Army attacked the Mareth Line in March, and within a month of joining hands the Allies took Bizerte and Tunis. Rommel had been recalled in March.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 3 }],
      },
      {
        title: "Turning points",
        text: "The Army history calls El Alamein a turning point in British fortunes. Neitzel sees the Alamein line as the end of Hitler’s and Rommel’s dream of a drive to the Nile and beyond, owed not least to Rommel’s own serious operational error, and notes how Goebbels’s propaganda built up the “Desert Fox”. Newell argues that the small American part in the campaign laid the foundation of the Anglo-American cooperation later used in Europe, and that American tanks, guns and trucks in British hands contributed to the breakthrough and pursuit at El Alamein.",
        evidence: "interpretation",
        studies: ["el-alamein"],
        refs: [{ source: 2 }, { source: 3 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Army history says the last of some 275,000 Germans and Italians in Tunisia surrendered on 10 May 1943; Ziemke dates the surrender of the last German and Italian units to 13 May. Richards and Saunders, quoting Rommel, place the blame for the halt at Alamein on fuel that never arrived, while Neitzel puts much of it on Rommel’s own decision to pursue.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 2 }, { source: 4 }, { source: 1 }, { source: 3 }],
      },
    ],
    sources: [cmhEgypt, richardsAlamein, amhGermany, rommel, zZitadelle],
  },
  "kursk-and-soviet-counteroffensives": {
    summary:
      "Germany’s last great offensive in the East, Operation Zitadelle against the Kursk salient in July 1943, and the Soviet offensives that followed it to the Dnepr.",
    narrative: [
      {
        title: "Postponements",
        text: "Hitler announced his “definitive decision” for Zitadelle on 15 April 1943, then postponed it again and again. At a conference in early May, Model reported the strength of the Soviet defences facing his Ninth Army; Manstein thought the attack could succeed if it came in May; Guderian and Speer opposed it altogether because it would cost tanks. Hitler admitted that the thought of the offensive gave him “butterflies in his stomach”. Klink writes that the exhaustion of the Fourth Panzer Army after Manstein’s spring counterstroke forced a pause, so that the attack began only on 5 July.",
        evidence: "fact",
        studies: ["kursk"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The salient",
        text: "Inside the bulge, Rokossovskiy’s Central Front alone had dug over 3,000 miles of trenches, and the engineers had laid 400,000 mines; Konev’s Steppe Front stood behind, with further reserves near Orel and Kharkov. Ziemke judges that Zitadelle was not doomed from the start: the assault divisions were in excellent shape with many new tanks, and the Luftwaffe committed about half of its 2,500 first-line aircraft in the East.",
        evidence: "fact",
        studies: ["kursk"],
        refs: [{ source: 0 }],
      },
      {
        title: "Zitadelle",
        text: "On 5 July the Ninth Army attacked from the north and the Fourth Panzer Army from the south. The Ninth Army broke Rokossovskiy’s first line on the first day but was stalled within a week; in the south the SS panzer corps reached the Psel. On 12 July Soviet fronts attacked the Orel salient behind the Ninth Army, and on 13 July Hitler called off the offensive, alarmed above all by the Allied landing in Sicily three days earlier. Manstein protested that the battle was just reaching its turning point, but Kluge declared that the Ninth Army could not advance again.",
        evidence: "fact",
        studies: ["kursk"],
        refs: [{ source: 0 }],
      },
      {
        title: "To the Dnepr",
        text: "Model, placed in command of the Orel salient as well as his own army, had to give up Orel on 4 August and fell back to the Hagen line. In the south the Eighth Army asked on 20 August to evacuate Kharkov, and in September Army Group South was allowed to go behind the Dnepr; the Soviet armies reached the river with their offensive power largely intact and were across it near the Pripyat before the end of September.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }, { source: 1 }],
      },
      {
        title: "The initiative lost",
        text: "Ziemke concludes that Hitler meant Zitadelle to make the world sit up, and instead set off a convulsion of the whole Eastern Front that weakened his armies and left the Soviet Union in full possession of the initiative. For Klink, its failure was the signal for the German army in the East to go over finally to the defensive.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Manstein’s claim on 13 July that the Russians in the south could be considered beaten was disputed at once by Kluge and cannot be tested, since the offensive was stopped. Ziemke’s account rests largely on German records, and the sources read here say little about the Soviet side of the tank battles in the south.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }],
      },
    ],
    sources: [zZitadelle, zSummer, manstein, model],
  },
  "burma-campaign": {
    summary:
      "The war in Burma and on the Indian frontier, above all the defeat of the Japanese offensive against Imphal and Kohima in 1944 and the Allied reconquest of Burma that followed.",
    narrative: [
      {
        title: "Operation C",
        text: "In early 1944 the Japanese launched an offensive whose object, Saunders writes, seemed to be nothing less than the invasion of India. In a first phase they would take Chittagong on the Arakan front and draw Slim’s reserves into battle; a month later they would seize the bases at Imphal and Dimapur, cut the lines of communication through Assam and install Subhas Chandra Bose at the head of a government on Indian soil.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The Admin Box",
        text: "The Arakan attack opened on 4 February. By the 10th the Japanese had cut the Nyakyedauk Pass and surrounded the British “Admin Box”, expecting the encircled troops to retreat as before. Instead they stood and were supplied by air under Spitfire cover, and by mid-March the besiegers had become the besieged.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Imphal",
        text: "On 8 March the Japanese 15th and 33rd Divisions struck toward Imphal. The 17th Indian Division, ordered to leave Tiddim, began its withdrawal only on 13 March, when the enemy was already across its road. Mountbatten diverted transport aircraft from the “Hump” route to China, and the 5th Indian Division was flown into Imphal in 758 sorties; the garrison, cut off by road, lived on air supply while fighter-bombers struck at the besiegers.",
        evidence: "fact",
        studies: ["imphal-kohima"],
        refs: [{ source: 0 }],
      },
      {
        title: "Kohima",
        text: "The Japanese 31st Division attacked Kohima on 4 April, and the fighting there was among the fiercest of the war; at one point the two sides held opposite edges of a tennis court. Hurricane fighter-bombers flew over 2,200 sorties in sixteen days in support. The capture of the Aradura Spur on 5–6 June ended the battle, and IV and XXXIII Corps began to fight their way toward each other along the Kohima–Imphal road.",
        evidence: "fact",
        studies: ["imphal-kohima"],
        refs: [{ source: 0 }],
      },
      {
        title: "The rout of the Fifteenth Army",
        text: "Saunders estimates conservatively that the Japanese lost 30,000 men and nearly a hundred guns in northern Burma between mid-March and mid-June 1944. The Fifteenth Army retreated through the monsoon, harried from the air. Hogan writes that the British decisively defeated it at Imphal in June and July, removing the threat to India, while Stilwell’s Chinese-American force took Myitkyina in August; MacGarrigle describes Slim’s pursuit through the rainy season that ended in the destruction of the Fifteenth Army and the reconquest of central Burma.",
        evidence: "fact",
        studies: ["imphal-kohima"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "War on air supply",
        text: "Saunders argues that air supply was the decisive factor in the defeat of the Japanese, first in the Arakan and then at Kohima and Imphal, because it let encircled troops stand instead of retreating. Hogan’s brochure shows the American effort in the theatre aimed at the route to China, with Stilwell, pressed by the Joint Chiefs, driving for Myitkyina even while the British were holding off the Japanese offensive into India.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "The account of the Japanese plan comes from the RAF’s official history, which names the Japanese commander as “General Hanayoa”, and its loss figure for the Japanese is an estimate. The American brochures treat Imphal only in passing, as the background to their own operations in northern Burma.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [saundersImphal, cmhIndiaBurma, cmhCentralBurma],
  },
  "north-west-europe-campaign": {
    summary:
      "The Allied campaign in north-west Europe from the Normandy landings of June 1944 through the liberation of France and Belgium, Arnhem and the Battle of the Bulge.",
    narrative: [
      {
        title: "The German defenders",
        text: "Rundstedt, commander in the West from March 1942, failed in Neitzel’s judgement to develop an effective strategy against an Allied landing. Rommel took over Army Group B in December 1943 and had the coastal defences built up, but the two disagreed over how to fight the invasion. After the landing Rommel soon recognized the hopelessness of the situation but could not convince Hitler, and on 17 July he was badly wounded in an air attack.",
        evidence: "fact",
        studies: ["normandy"],
        refs: [{ source: 5 }, { source: 4 }],
      },
      {
        title: "Normandy",
        text: "Hammond’s account of the landing is one of things going wrong: the airborne drops on the night before scattered the men too widely to do more than confuse the enemy, Montgomery’s forces failed to take Caen on D-Day, and Omaha Beach was a near-disaster averted by the courage of individual sailors and soldiers. The Germans, instead of withdrawing behind the Seine as Allied planners had expected, held on at brutal cost; Rommel told his son he had never fought with such losses. Montgomery’s repeated attacks around Caen, Hammond argues, held the best German forces away from the Americans in the bocage.",
        evidence: "fact",
        studies: ["normandy"],
        refs: [{ source: 0 }, { source: 4 }],
      },
      {
        title: "Breakout",
        text: "By late July, Hogan writes, the Germans were losing the battle of the build-up: fourteen German divisions faced fourteen British near Caen, but only nine faced seventeen American divisions in the hedgerows. Once the Americans broke through near St Lô they proved superior in mobile warfare to a largely horse-drawn Wehrmacht, and Hitler’s refusal to retreat across open country north of the Loire led to disaster in the Falaise pocket. Model replaced Kluge as commander in the West on 16 August but could not turn the tide.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 6 }],
      },
      {
        title: "Market-Garden",
        text: "Antwerp was taken almost intact on 4 September but remained useless while the Germans held the Scheldt estuary. Operation Market-Garden, planned by Montgomery’s 21 Army Group and launched on 17 September with 1,545 transport aircraft and 478 gliders, sent airborne divisions to seize the bridges between Eindhoven and Arnhem and open a corridor for the British 30 Corps to cross the Rhine. It rested, Ballard writes, on three assumptions: weak German defences, a single road able to carry 20,000 vehicles quickly, and good flying weather in autumn. On 25 September some 2,000 men of the British 1st Airborne Division crossed back over the Lower Rhine; the other 7,000 who had fought at Arnhem were dead or missing.",
        evidence: "fact",
        studies: ["market-garden"],
        refs: [{ source: 2 }],
      },
      {
        title: "The Ardennes",
        text: "Model rebuilt a continuous German front from the Scheldt to Belfort and helped plan the Ardennes offensive, agreeing in the end to Hitler’s “big solution”. Hitler had named Antwerp as the objective in September. The attack opened at 5.30 a.m. on 16 December against an Allied command that believed up to the last moment the Germans would not attack, and the few roads through the Ardennes ran through road centres such as Bastogne and St Vith. Model ended the war by dissolving his army group in the Ruhr pocket on 17 April 1945 and taking his own life.",
        evidence: "fact",
        studies: ["battle-of-the-bulge"],
        refs: [{ source: 6 }, { source: 3 }],
      },
      {
        title: "What decided the campaign",
        text: "Hogan grants that the German generals’ postwar blame on Allied material superiority and on Hitler contains a grain of truth, but credits American mobility, close air-ground cooperation and an aptitude for improvisation. Cirillo concludes that Hitler’s last offensives in the Ardennes and Alsace failed in both their aims, destroying a large Allied force and breaking up the coalition, and that their cost in men, equipment and morale hastened the end of the war, while the Allies’ cautious broad front left weak points that a desperate enemy could exploit.",
        evidence: "interpretation",
        studies: ["battle-of-the-bulge"],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "Hogan calls the failure to close the Falaise gap a lasting controversy, with Bradley taking responsibility for halting his corps while blaming Montgomery, and the relative quality of German and American troops a debate that remains heated. Bradley writes that the Allies stopped the Ardennes offensive only after a week, while Cirillo shows the Germans holding off Allied counterattacks for a month and withdrawing part of their force. These are American Army brochures; the British and Canadian armies appear mainly where they bear on American operations.",
        evidence: "uncertainty",
        studies: ["market-garden"],
        refs: [{ source: 1 }, { source: 6 }, { source: 3 }, { source: 0 }],
      },
    ],
    sources: [
      cmhNormandy,
      cmhNorthernFrance,
      cmhRhineland,
      cmhArdennes,
      rommel,
      rundstedt,
      model,
    ],
  },
  "soviet-summer-offensive-of-1944": {
    summary:
      "The Soviet summer offensive of 1944, Operation Bagration, which destroyed the German Army Group Center in Belorussia and carried the Red Army to the Vistula and East Prussia.",
    narrative: [
      {
        title: "Deception and delusion",
        text: "From the third week of April 1944 the Stavka built up its forces opposite Army Group Center under an elaborate deception meant to persuade the Germans that the summer offensive would again come in the south. Ziemke describes the German commands adding a self-induced delusion: they expected the blow against Army Group North Ukraine because that was where they were ready to meet it, and Busch let Model take Army Group Center’s strongest reserve, the LVI Panzer Corps, for his own front without protest.",
        evidence: "fact",
        studies: ["bagration"],
        refs: [{ source: 0 }],
      },
      {
        title: "The odds",
        text: "When the build-up was complete, 1.2 million Soviet combat troops stood in the offensive zone from Vitebsk to Bobruysk against an Army Group Center of slightly over 700,000; with the reserves the Stavka held back, 2.5 million men took part. Four thousand tanks, 24,400 guns and mortars and 5,300 aircraft gave superiorities of ten to one and more at the points of assault.",
        evidence: "fact",
        studies: ["bagration"],
        refs: [{ source: 0 }],
      },
      {
        title: "Collapse of the center",
        text: "Five divisions were encircled and as good as lost at Vitebsk, and Hitler ordered Orsha and Mogilev held as “fortified places”. In twelve days Army Group Center lost twenty-five divisions; the Fourth Army lost 130,000 of its 165,000 men. Model took over the army group while keeping his own, and on 17 July the Russians marched 57,000 German prisoners through the streets of Moscow.",
        evidence: "fact",
        studies: ["bagration"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "To the Vistula",
        text: "In mid-July the offensive spread south, where Konev’s armies met behind Lvov on 18 July, and north toward the Baltic. Soviet columns crossed the San and headed for the Vistula, and by the end of the month they were twenty miles from the East Prussian border. In the middle of the crisis, on 20 July, a bomb exploded at Hitler’s headquarters; Guderian, appointed acting chief of the General Staff, believed he could influence the conduct of the war in the East, but constant friction with Hitler ended with his being sent on leave at the end of March 1945.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Who saved the front",
        text: "Ziemke calls Army Group Center under Busch a mindless instrument of Hitler’s will to hold every line, and points to the irony that Model, called in to rescue it, had helped bring on the disaster by drawing off its reserve. Bradley credits Model’s skill with forming a continuous front again and bringing the Soviet offensive to a halt.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Ziemke reports only that the build-up began “allegedly” on a decision of the State Defense Committee. Bradley’s praise of Model sits uneasily with Ziemke’s account of his part in weakening Army Group Center, and Ziemke notes that by the third week of July the Russians, after advancing more than 200 miles without a pause, had for the time being outrun their supplies, so the halt was not Model’s work alone.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [zCenter, model, guderian],
  },
  "philippines-campaign-of-1944-1945": {
    summary:
      "The American return to the Philippines from October 1944: the landing on Leyte, the naval Battle of Leyte Gulf and the campaign for Luzon.",
    narrative: [
      {
        title: "Luzon or Formosa",
        text: "Through 1944 MacArthur argued for advancing through the Philippines to Luzon, while others preferred Formosa. Once the landing on Leyte had been brought forward by two months, MacArthur could promise Luzon in December, long before a Formosa operation could be ready, and on 3 October Admiral King accepted the new plans. The Japanese, for their part, had drawn up the “Sho” plan for a decisive battle on their inner line, and when the Americans landed in the central Philippines in October they activated it, committing the fleet and sending reinforcements to Leyte.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "Leyte Gulf",
        text: "Four Army divisions landed abreast on Leyte on 20 October. The Japanese fleet came in three groups; one, with four carriers but no aircraft, was a decoy to lure Halsey’s Third Fleet north, and Halsey followed it without consulting MacArthur or Kinkaid. The southern force was destroyed in Surigao Strait, but the main force, with the giant battleships Yamato and Musashi, came through San Bernardino Strait and down the coast of Samar; on the morning of 25 October, after two and a half hours against light escorts, it broke off and withdrew. The Japanese lost three battleships, ten cruisers, nine destroyers and all four carriers; the Americans one light and two escort carriers and three destroyers.",
        evidence: "fact",
        studies: ["leyte-gulf"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The battle for Leyte",
        text: "Believing they had crippled the American carriers, the Japanese decided to fight the decisive battle on Leyte and ran nine convoys of reinforcements to the island; MacArthur’s staff at first read the intercepted signals as an evacuation. The fighting lasted far longer than planned. Kamikaze aircraft, first used against the shipping in Leyte Gulf, became the Japanese answer to the loss of their air strength.",
        evidence: "fact",
        studies: ["leyte-gulf"],
        refs: [{ source: 0 }],
      },
      {
        title: "Luzon",
        text: "On 9 January 1945 four divisions landed at Lingayen Gulf. Yamashita did not mean to defend Manila, only to hold down MacArthur’s forces in the mountains, but the naval forces in the city ignored him, and after the Americans reached Manila on 3 February it took a month of building-to-building fighting to clear it. Luzon became the largest land campaign of the Pacific war; organized resistance ended in late June except in the mountains of the north, where Yamashita held out until the end of the war.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }],
      },
      {
        title: "A decisive battle",
        text: "The Army history counts Leyte Gulf among the most decisive actions of the Pacific war. Anderson calls Leyte the first and most decisive operation of the reconquest: the Japanese lost four divisions, twenty-six major warships and forty-six large transports and merchantmen, and more than half their land-based air power in the Philippines. He also lists the American intelligence failures, above all the failure to see that the Japanese meant to fight the decisive battle on Leyte.",
        evidence: "interpretation",
        studies: ["leyte-gulf"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Anderson writes that the Japanese battle fleet off Samar “mysteriously” broke off the action, leaving its chance unexploited, and that the two sides came away with sharply different ideas of who had won. The Army history stresses Halsey’s decision to go north without consulting MacArthur or Kinkaid, which the brochure records more neutrally.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [cmhLeyte, amhJapan, ussbsPlanning],
  },
  "central-pacific-drive": {
    summary:
      "The American advance across the Central Pacific from the Marianas in 1944 to Iwo Jima and Okinawa in 1945, which brought Japan within reach of land-based bombers and invasion.",
    narrative: [
      {
        title: "The Marianas",
        text: "The Central Pacific route promised to force a naval showdown, and the seizure of the Marianas brought the Japanese home islands within reach of the B-29 bombers, which began to raid Japan in late November 1944. Army and Marine divisions landed on Saipan on 15 June 1944 and on Guam on 21 July, and marines went ashore on Tinian three days later. After the Battle of the Philippine Sea, Anderson writes, the Japanese no longer had the naval air strength to face the American carrier forces; the Marianas and Palaus cost the Army 7,791 dead and wounded and the Marines and Navy over 26,000, while more than 72,000 Japanese became casualties, nearly all of them killed.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }, { source: 0 }],
      },
      {
        title: "Iwo Jima",
        text: "Iwo Jima was taken for its airfields, within escort fighter range of Honshu and a refuge for crippled B-29s. Japanese plans made no provision for a large-scale defence beyond the local garrison. The 4th and 5th Marine Divisions landed on 19 February 1945 against what the Army history calls probably the strongest defensive system Americans met in the Pacific; the defenders had to be dug out of their underground positions one by one. The Survey dates the end of organized resistance to 16 March and counts about 21,000 American casualties; before the war ended some 2,400 B-29s made emergency landings on the island.",
        evidence: "fact",
        studies: ["iwo-jima"],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "Okinawa",
        text: "General Ushijima’s 32nd Army, over 77,000 troops reinforced by about 20,000 Okinawan home guards and conscripted students, left the beaches undefended and dug into the hills around Shuri. The Americans landed unopposed on 1 April. From 6 April kamikaze attacks struck the fleet, sinking some twenty-five ships, and on 6–7 April carrier aircraft sank the battleship Yamato on her way to the island. General Buckner, commanding the Tenth Army, was killed on 18 June.",
        evidence: "fact",
        studies: ["okinawa"],
        refs: [{ source: 2 }, { source: 3 }],
      },
      {
        title: "The last stand",
        text: "As the Shuri line fell, the Japanese withdrew to the south of the island; suicides soared, and Ushijima’s chief of staff, General Cho, killed himself on 22 June. The campaign formally ended on 2 July, America’s bloodiest against Japan. Engineers were building airfields long before the fighting ended, and by the end of June five air bases were ready for the bombers that would prepare the invasion of Kyushu and Honshu.",
        evidence: "fact",
        studies: ["okinawa"],
        refs: [{ source: 2 }],
      },
      {
        title: "Firepower against fortification",
        text: "Fisch sees no tactical breakthrough on Okinawa: it was American firepower against Japanese fortifications, won by foot soldiers and small unit leaders, and it erased any hope among Japanese leaders that an invasion of the home islands could be avoided. The Survey judges that Iwo Jima brought airfields 600 miles closer to Japan, and Anderson questions whether the Palaus were worth their cost.",
        evidence: "interpretation",
        studies: ["iwo-jima"],
        refs: [{ source: 2 }, { source: 1 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "The Survey dates the end of organized resistance on Iwo Jima to 16 March, while the Army history speaks only of a month of fighting. For Okinawa the Army history has organized resistance lasting until late June, while Fisch dates the formal end of the campaign to 2 July.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 3 }, { source: 2 }],
      },
    ],
    sources: [cmhWesternPacific, ussbsIwo, cmhRyukyus, amhJapan],
  },
  "final-soviet-offensives-of-1945": {
    summary:
      "The Soviet offensives of 1945 from the Vistula to the Oder and the Battle of Berlin, which ended the war in Europe.",
    narrative: [
      {
        title: "On the Oder",
        text: "In January 1945 the Red Army drove from the Vistula to the Oder, forty miles from Berlin. Heinrici, commanding the army group defending the Oder front, was promised 100,000 men by Hitler to replace his transferred panzer divisions and received about 35,000 untrained air force and navy men; he made clear that his army group did not propose to fight in the city, and that the Ninth Army would retreat past it on both sides.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "The Seelow Heights",
        text: "The First Belorussian and First Ukrainian Fronts attacked before dawn on 16 April. The main force of the First Belorussian Front had to cross the marshy bottomland of the Oder and take the Seelow Heights, and when the assault stalled again on the second day a reserve army and both tank armies were thrown in. Hitler ordered Heinrici to hold everywhere while also sending troops to the threatened flanks; Heinrici asked to be relieved rather than carry out orders he could not reconcile with his conscience.",
        evidence: "fact",
        studies: ["berlin-1945"],
        refs: [{ source: 0 }],
      },
      {
        title: "Encirclement",
        text: "The two Soviet fronts met south-east of Berlin and isolated the Ninth Army, while Hitler pinned his hopes on Wenck’s Twelfth Army, turned around from the Elbe to attack east. Hitler ordered Weidling’s panzer corps into the eastern and south-eastern defences of the city. On 25 April American and Soviet troops met at Torgau on the Elbe; Eisenhower had put his main weight elsewhere because the Russians were clearly going to reach Berlin first.",
        evidence: "fact",
        studies: ["berlin-1945"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The bunker",
        text: "In his last testament Hitler named Dönitz as his successor. Between 3 and 3.30 in the afternoon of 30 April Hitler and his wife killed themselves in the bunker, while a quarter of a mile away the Russians were storming the Reichstag. On 7 May German emissaries surrendered at Eisenhower’s headquarters in Reims.",
        evidence: "fact",
        studies: ["berlin-1945"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The war in the East",
        text: "Ziemke closes with the scale of the German-Soviet war: almost four years of fighting on a front never shorter than 2,400 miles from autumn 1941 to autumn 1943, German military dead of 3 to 3.5 million and Soviet military deaths of more than 12 million, about 47 percent of all soldiers killed in the war. He calls the Soviet victory one of manpower and industrial production exploited with complete ruthlessness, helped by $10.2 billion of lend-lease, and lays the chief responsibility for the German defeat on Hitler.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Ziemke qualifies the German death toll as “apparently” between 3 and 3.5 million, and the Soviet figures come from Soviet sources. He also questions the Soviet claim to the preponderant contribution to Germany’s defeat, which rests on statistics of troops and distances that, he notes, ignore how much less space meant in the Soviet Union than in the rest of Europe.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }],
      },
    ],
    sources: [zBerlin, zConclusion, amhGermany],
  },
  "hannibal-s-italian-campaign": {
    summary:
      "Hannibal’s invasion of Italy in the Second Punic War, from the march over the Alps in 218 BCE through Trebia, Trasimene and Cannae to his recall to Africa.",
    narrative: [
      {
        title: "Over the Alps",
        text: "Hannibal judged that Rome could only be beaten if its Italian confederacy broke apart, so he carried the war into Italy by land while the Roman fleets held the sea. Polybius records a march of five months from New Carthage, fifteen days of it in the Alps, and reports from Hannibal’s own inscription at the Lacinian promontory that he reached the plain of the Po in 218 BCE with 12,000 African and 8,000 Iberian foot and no more than 6,000 horse.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 0, locator: "3.56" }],
      },
      {
        title: "Trebia and Trasimene",
        text: "Superior Carthaginian cavalry and a rising among the Gauls drove the Romans back toward the Apennines, and at the end of 218 Hannibal beat their combined army on the Trebia. In 217 he crossed into Etruria by an unguarded pass and trapped a pursuing army on the shore of Lake Trasimene, where it lost some 40,000 men. He did not march on Rome but turned south to raise Rome’s old enemies, while the dictator Fabius shadowed him without ever accepting battle.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "Cannae",
        text: "In 216 Rome sent out an exceptionally strong field army to end the war in open battle. Near Cannae in Apulia Hannibal let his centre be driven in by the legions while his cavalry wheeled against their flanks and rear, and the army was all but annihilated. Polybius says about seventy thousand Romans and allies died and some ten thousand were captured away from the field, against about 5,700 killed on Hannibal’s side.",
        evidence: "fact",
        studies: ["cannae"],
        refs: [{ source: 2 }, { source: 0, locator: "3.117" }],
      },
      {
        title: "The war of attrition",
        text: "Capua and much of the south then went over to Hannibal, but central and northern Italy, the Greek cities of the coast and the Latin colonies held firm. Rome avoided battle with him and raised as many as 200,000 men, while he had to guard his new allies and never secured a good port until most of Tarentum came into his hands in 212. Capua was blockaded and starved into surrender in 211, despite Hannibal’s feint at Rome, and Tarentum was recovered in 209.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "The Metaurus and the recall",
        text: "In 207 Hasdrubal brought a second army over the Alps, but the consul Nero slipped north from Hannibal’s front with part of his troops, joined his colleague Livius and destroyed Hasdrubal on the Metaurus. Hannibal held on in the far south until Carthage called him home. Livy describes him groaning as he heard the order, and says Rome scarcely knew whether to rejoice that he had left Italy in the sixteenth year of the war.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 3, locator: "30.20, 30.28" }],
      },
      {
        title: "Genius and confederacy",
        text: "Polybius drew the military lesson of Cannae: better half as many infantry and overwhelming cavalry than equality in every arm. Livy gives the Roman tradition that Maharbal told Hannibal he knew how to conquer but not how to use a victory, and that the delay after Cannae saved the city. The Britannica account rejects any strategic fault in Hannibal, explaining his failure by Roman tenacity and the compactness of the Italian confederacy, a case of individual genius overborne by corporate effort.",
        evidence: "interpretation",
        studies: ["cannae"],
        refs: [
          { source: 0, locator: "3.117" },
          { source: 1, locator: "22.51" },
          { source: 2 },
        ],
      },
      {
        title: "Where the sources disagree",
        text: "Against Polybius’s seventy thousand dead at Cannae, Livy, in the translation used here, reports that forty thousand foot and 2,700 horse are said to have been slain. Livy also cites an account of Hannibal bringing 80,000 foot and 10,000 horse into Italy, far above the figures Polybius took from Hannibal’s inscription. The Britannica article, which warns that Livy drew partly on untrustworthy Roman annalists, has Italy cleared of Carthaginian troops in 205, yet places the Carthaginian peace talks that preceded Hannibal’s recall after Scipio’s victories of 203.",
        evidence: "uncertainty",
        studies: ["cannae"],
        refs: [{ source: 1 }, { source: 0 }, { source: 2 }],
      },
    ],
    sources: [polybius3, livy926, ebPunic, livy2736],
  },
  "scipio-s-african-campaign": {
    summary:
      "Scipio’s invasion of Africa from 204 BCE, which destroyed the armies of Carthage and Syphax, forced Hannibal home and ended the Second Punic War at Zama.",
    narrative: [
      {
        title: "The invasion",
        text: "In 205 BCE Scipio, back from his victories in Spain and consul at Rome, proposed to attack Carthage at home. The presence of Hannibal in Italy made the senate hesitate; Livy shows Quintus Fulvius demanding to know whether Scipio would accept its decision or go to the people. Popular support carried the plan. Scipio organized his force in Sicily, crossed in 204 and was penned to the shore near Utica by Carthage and King Syphax of Numidia.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 3, locator: "28.45" }],
      },
      {
        title: "The burning of the camps",
        text: "Through the winter Scipio kept up negotiations with Syphax while his agents studied the enemy camps, the Numidian huts built only of reeds and matting. In the spring he made as if to besiege Utica, then marched at night; Laelius and Massinissa fired the camp of Syphax, and when the Carthaginians ran out unarmed, thinking the blaze an accident, Scipio fell on them and fired theirs. Polybius describes thousands of men, horses and mules dying in the flames.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Recall and truce",
        text: "In 203 a new Carthaginian force was destroyed on the Great Plains near Utica, Syphax was captured and Massinissa restored to his kingdom. Carthage sued for peace on moderate terms, then changed its mind and summoned Hannibal’s army home for a last trial of arms. A conference between the two commanders came to nothing.",
        evidence: "fact",
        studies: ["zama"],
        refs: [{ source: 2 }],
      },
      {
        title: "Zama",
        text: "Hannibal placed over eighty elephants in front, then some twelve thousand mercenaries, then the Libyans and Carthaginians, and held his veterans from Italy back as a third line. Scipio’s formation left lanes through which the frightened elephants passed harmlessly, and Laelius drove off the Carthaginian cavalry. The mercenaries, abandoned by the line behind them, turned on it. The decision came against Hannibal’s reserve, when the cavalry of Laelius and Massinissa returned and struck it in the rear.",
        evidence: "fact",
        studies: ["zama"],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "The peace",
        text: "Carthage kept its African territory and its own laws but gave up its warships except ten triremes and all its elephants, undertook to make no war outside Africa, nor any within it without Rome’s consent, restored Massinissa’s possessions and paid an indemnity of 10,000 talents over fifty years.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1, locator: "15.18" }, { source: 2 }],
      },
      {
        title: "Two generals",
        text: "Polybius insists that Hannibal did everything at Zama that a good general of long experience could do, and that he first tried to settle the dispute by conference. The Britannica account sees in the final cavalry attack a manoeuvre recalling the tactics of Cannae, and concludes from the Roman successes outside Italy that Carthage could only have won by turning Italy’s own resources against Rome.",
        evidence: "interpretation",
        studies: ["zama"],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Livy counts over twenty thousand Carthaginians and allies killed at Zama, about as many captured and up to two thousand of the victors dead, and notes that Valerius Antias told a different story of the run-up, with a battle of twelve thousand slain before Hannibal came to Scipio as an envoy. The name of Zama is itself a problem: the Britannica article notes that the site had not been identified with certainty. The Britannica article describes Polybius’s books for these years as fragmentary, their most continuous passages being those on Scipio’s campaigns.",
        evidence: "uncertainty",
        studies: ["zama"],
        refs: [{ source: 3, locator: "30.35" }, { source: 2 }, { source: 1 }],
      },
    ],
    sources: [polybius14, polybius15, ebPunic, livy2736],
  },
  "second-macedonian-war": {
    summary:
      "Rome’s war against Philip V of Macedon from 200 to 196 BCE, decided at Cynoscephalae and ended by the proclamation of Greek freedom at the Isthmian Games.",
    narrative: [
      {
        title: "After Hannibal",
        text: "Philip V had made a treaty with Hannibal in 215 BCE, and the First Macedonian War ended at the Peace of Phoenice in 205. Once Hannibal was beaten, in the words of the Livius survey, Rome wanted revenge. War came again in 200.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }],
      },
      {
        title: "Flamininus",
        text: "Titus Quinctius Flamininus was elected consul when not yet thirty and found his predecessor facing Philip across the narrow passes of the river Apsus. Forcing the Macedonians from those positions, he carried the war into Thessaly and sought the support of the Greek states.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "Cynoscephalae",
        text: "In June 197 the armies met among the hills of Cynoscephalae. Polybius describes Philip’s own wing driving the Romans before it while his other wing was routed and pursued over the summits; an unnamed tribune then took no more than twenty maniples from the victorious Roman side and struck the advancing Macedonians from behind. Eight thousand Macedonians fell and five thousand were captured; Philip escaped because the Aetolians stopped to plunder his camp.",
        evidence: "fact",
        studies: ["cynoscephalae"],
        refs: [{ source: 0 }],
      },
      {
        title: "Freedom proclaimed",
        text: "The peace required Philip to withdraw from the Greek cities in Europe and Asia. At the Isthmian Games of 196, a herald announced that the Greeks previously subject to him were free, ungarrisoned and tax-free under their own laws; Polybius says the crowd demanded that the announcement be repeated, and Plutarch describes the confusion in the stadium as people asked one another what had been said.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Legion and phalanx",
        text: "Polybius used the battle to explain why the legion beat the phalanx: the phalanx was irresistible on level, open ground and while it stayed intact, but it needed exactly those conditions, while Roman soldiers could fight anywhere and exploit any gap. The Livius survey adds that the Roman withdrawal left a vacuum that drew in Antiochus III and brought the legions back.",
        evidence: "interpretation",
        studies: ["cynoscephalae"],
        refs: [{ source: 0 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "Livy states openly that Valerius Antias, who “on every occasion exaggerates numbers enormously”, gave forty thousand enemy dead and 5,700 prisoners at Cynoscephalae, and Claudius 32,000 dead and 4,300 prisoners, while he himself reports about seven hundred Roman dead and leans on Polybius. It is a rare view of how Roman historians inflated their victories, and a warning for battle figures that survive only from them.",
        evidence: "uncertainty",
        studies: ["cynoscephalae"],
        refs: [{ source: 1 }],
      },
    ],
    sources: [polybius18, livy2736, plutarchFlamininus, liviusMacedonia],
  },
  "third-macedonian-war": {
    summary:
      "Rome’s war against Perseus of Macedon from 171 to 168 BCE, ended at Pydna by Aemilius Paullus and followed by the abolition of the Macedonian monarchy.",
    narrative: [
      {
        title: "Perseus",
        text: "Philip’s son Perseus inherited strained relations with Rome but won support in Greece. In the Livius survey’s judgement the Romans had decided to isolate and destroy him; war broke out in 171 BCE.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "Early failures",
        text: "Perseus opened well. Near Callinicus hill in 171 he brought his cavalry and light troops up to the Roman camp and won the action, Livy counting two hundred Roman horse and not less than two thousand foot killed for a few dozen of his own, then offered peace on the terms his father had accepted; the war went on. In 169 the consul Marcius Philippus forced a way through the mountains into Macedonia by a rugged pass, at great risk, but the war still dragged on.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The turning of Olympus",
        text: "In 168 Aemilius Paullus took command and found Perseus in a strong position. He sent Scipio Nasica with a detachment around by the mountains, as if to go by sea, and Nasica surprised the Macedonian guard on the heights, forcing Perseus to withdraw toward Pydna. Plutarch quotes Nasica’s own letter to one of the kings for the details of the march.",
        evidence: "fact",
        studies: ["pydna"],
        refs: [{ source: 1 }],
      },
      {
        title: "Pydna",
        text: "An eclipse of the moon before the battle alarmed the Macedonians, among whom it was rumoured to portend the eclipse of a king. At Pydna on 22 June 168 the phalanx was broken. Plutarch reports over twenty-five thousand enemy dead, against a Roman loss of a hundred according to Poseidonius or eighty according to Nasica.",
        evidence: "fact",
        studies: ["pydna"],
        refs: [{ source: 1 }],
      },
      {
        title: "The settlement",
        text: "The senate ended the monarchy, dividing Macedonia into four districts, each with its own council, which were to pay Rome half the tribute they had paid their kings. Perseus was led in Paullus’s triumph, having begged to be spared it. In Epirus Paullus carried out the senate’s order to plunder: Plutarch says seventy cities were sacked and 150,000 people enslaved in a single hour. Macedonia became a province in 148.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "What the victory meant",
        text: "Plutarch frames the war as a meditation on fortune, with Paullus treating himself in his triumph as no less clear an example of human weakness than his captive. He also judges the sack of Epirus by its result: each soldier received no more than eleven drachmas, and all men shuddered at the outcome.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Plutarch sets two witnesses against each other on the mountain march: Polybius says the Macedonian guards were still asleep when the Romans fell on them, while Nasica claims a sharp fight in which he killed a Thracian with his own hand. The astonishingly small Roman losses at Pydna come from Poseidonius and from Nasica, a participant.",
        evidence: "uncertainty",
        studies: ["pydna"],
        refs: [{ source: 1 }],
      },
    ],
    sources: [livy3745, plutarchAemilius, liviusMacedonia],
  },
  "crassus-s-parthian-expedition": {
    summary:
      "Marcus Licinius Crassus’s invasion of the Parthian Empire in 54–53 BCE, which ended in the destruction of his army at Carrhae and his own death.",
    narrative: [
      {
        title: "The expedition",
        text: "Crassus, assigned Syria for five years as consul in 55 BCE, crossed the Euphrates and at first took many cities in Mesopotamia that came over to him, then marched along the river with seven legions, nearly four thousand horsemen and about as many light troops. King Artavasdes of Armenia offered help and urged an advance through his country; instead, Plutarch writes, Hyrodes divided his forces, invading Armenia himself and sending Surena against the Romans.",
        evidence: "fact",
        studies: ["carrhae"],
        refs: [{ source: 0 }],
      },
      {
        title: "The advice refused",
        text: "Cassius urged Crassus to rest in a garrisoned city until he had sure information, or at least to keep to the river and advance on Seleucia. Plutarch and Dio both show him instead led away from the Euphrates by a treacherous local ally, whom Plutarch calls the Arab chieftain Ariamnes and Dio Abgarus of Osroëne, Dio adding the promise that Surena was close with few men. When word came from Armenia that Artavasdes could not send help, Crassus answered that he would punish him later.",
        evidence: "fact",
        studies: ["carrhae"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Carrhae",
        text: "Near Carrhae in May 53 the Parthians enveloped the Roman square. The Romans hoped the archers would run out of arrows, and lost heart on seeing camels bringing up fresh supplies. Crassus’s son Publius fell in a sortie. The survivors retreated by night; when Crassus went to a parley with Surena he was killed.",
        evidence: "fact",
        studies: ["carrhae"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "The aftermath",
        text: "Plutarch reports twenty thousand killed and ten thousand captured in the whole campaign. Cassius rode away to Syria with five hundred horsemen, and when the Parthians raided as far as Antioch he repulsed them. Plutarch describes a parody of a Roman triumph staged at Seleucia.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Why Crassus lost",
        text: "The ancient accounts dwell on Crassus’s greed, his omens and the treachery of his guides. The Livius article rejects this: treachery and a desert unfit for Roman deployment were invented, it argues, to cover the fact that the Parthians were superior in numbers and quality and had better supply lines, their camels bringing hundreds of thousands of arrows. It notes too that an army of seven legions could feed itself in the valley of the Balikh.",
        evidence: "interpretation",
        studies: ["carrhae"],
        refs: [{ source: 2 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Plutarch and Dio both blame a treacherous ally but name different men, and the Livius article treats the theme of treachery as a Roman excuse. Plutarch alone preserves the detailed story of the campaign, and his casualty figures are introduced only as what “are said” to be the losses.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [plutarchCrassus, dio40, liviusCarrhae],
  },
  "gallic-revolt-of-52-bce": {
    summary:
      "The great Gallic rising of 52 BCE under Vercingetorix, from the massacre at Cenabum through Avaricum and Gergovia to the siege and surrender of Alesia.",
    narrative: [
      {
        title: "The rising",
        text: "Early in 52 BCE Roman traders were massacred at Cenabum and the Arverni rose under Vercingetorix, soon joined by other tribes. Caesar hurried back from Italy, slipped past him and reached his legions at Agedincum. Vercingetorix, seeing that Caesar could not be met in open battle, resolved to concentrate in a few strong positions and deny the Romans food.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Avaricum and Gergovia",
        text: "Caesar took Avaricum, and by his own account scarcely eight hundred of about forty thousand people there got away to Vercingetorix. He then besieged Gergovia, the Arvernian capital, but an assault failed with the loss of little less than seven hundred men, and he had to raise the siege. Even the Aedui then went over to the revolt.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Alesia",
        text: "After a cavalry defeat near Dijon, Vercingetorix shut himself in Alesia, which Caesar surrounded with lines facing both inward and outward. Vercingetorix sent his cavalry away to summon all Gaul, warning that eighty thousand chosen men were doomed with him. A relief army, by Caesar’s count eight thousand horsemen and about 250,000 foot, attacked the outer lines while the garrison attacked the inner, until a last assault was defeated.",
        evidence: "fact",
        studies: ["alesia"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Surrender",
        text: "Caesar says only that he ordered the arms given up and the chiefs brought out. Dio adds that Vercingetorix might have escaped but hoped for pardon from a man who had once been his friend, and came in person to surrender. There were isolated operations in 51, ending with the capture of Uxellodunum, whose defenders had their hands cut off, and Caesar then fixed the tribute of Gaul.",
        evidence: "fact",
        studies: ["alesia"],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
      {
        title: "The revolt’s strategy",
        text: "The Britannica account credits Vercingetorix with seeing that Caesar could not be fought in open battle and with basing the war on strong points; Caesar’s narrative shows the strength of that strategy at Gergovia and its danger at Alesia, where eighty thousand men shut inside had to wait on a relief army.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Caesar’s is the only contemporary narrative, written by the victor. His figures for Alesia, eighty thousand inside and about 258,000 in the relief army, differ from Plutarch’s, which give not fewer than 170,000 fighting men in the city and 300,000 outside. Caesar’s spare account of the surrender and Dio’s more personal one cannot both be checked.",
        evidence: "uncertainty",
        studies: ["alesia"],
        refs: [{ source: 0 }, { source: 3 }, { source: 2 }],
      },
    ],
    sources: [caesarGallic7, ebJulius, dio40, plutarchCaesar],
  },
  "caesar-s-civil-war": {
    summary:
      "The civil war between Caesar and Pompey and the Senate from 49 to 45 BCE, from the crossing of the Rubicon through Pharsalus to Thapsus and Munda.",
    narrative: [
      {
        title: "The Rubicon",
        text: "A law of Pompey in 52 BCE made it possible to replace Caesar in Gaul before the end of 49, which would have left him a private citizen open to prosecution. When Antony and Curio were driven from the senate, Caesar had his pretext. Plutarch shows him pausing at the Rubicon, the river between Cisalpine Gaul and Italy, and talking through the consequences with Asinius Pollio and others before he crossed.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 3 }],
      },
      {
        title: "Italy and Spain",
        text: "Pompey had only two legions in Italy and eight in Spain. Caesar went down the Adriatic coast by forced marches, through Corfinium, and caught Pompey at Brundisium but could not stop him embarking for the East. He then turned on Pompey’s lieutenants in Spain, reaching Ilerda on 23 June 49 and, after a dangerous start, outmanoeuvring them into surrender on 2 August.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 1 }],
      },
      {
        title: "Dyrrhachium and Pharsalus",
        text: "Caesar crossed to Epirus and tried to blockade Pompey’s larger army at Dyrrhachium, but lost 960 men in one day’s fighting and marched off into Thessaly. At Pharsalus Pompey’s 110 cohorts faced Caesar’s eighty, 22,000 men. Fearing for his right wing against Pompey’s horse, Caesar drew individual cohorts from his third line into a fourth, which met and routed the cavalry and then turned the Pompeian flank.",
        evidence: "fact",
        studies: ["pharsalus"],
        refs: [{ source: 0, locator: "3.71, 3.88–99" }, { source: 2 }],
      },
      {
        title: "From Egypt to Munda",
        text: "Pompey fled to Egypt and was murdered. Caesar stayed nine months at Alexandria, beat Pharnaces at Zela, and in Africa cut to pieces a republican army of fourteen legions at Thapsus on 6 April 46; Cato killed himself. At Munda on 17 March 45 he crushed the sons of Pompey in a battle so close that Plutarch has him running through the ranks to shame his men.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 3 }],
      },
      {
        title: "Speed and clemency",
        text: "The Britannica article stresses Caesar’s marvellous rapidity and his judgement, in the saying attributed to him, that he went to Spain to fight an army without a general and then east to fight a general without an army. It concludes that the powers he then gathered differed little from those of the later Principate, though his apparent reaching for kingship and divinity in his last months helps explain his murder.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Caesar says some 15,000 Pompeians fell at Pharsalus and over 24,000 surrendered, for a loss of not more than two hundred of his own men and about thirty centurions. Appian writes that exaggerators put Pompey’s other losses at 25,000 but that Asinius Pollio, an officer in the battle, counted 6,000 dead; Plutarch reports Pollio adding that most of the dead were servants killed at the camp. Caesar’s own account is the narrative of the victor.",
        evidence: "uncertainty",
        studies: ["pharsalus"],
        refs: [{ source: 0, locator: "3.99" }, { source: 4 }, { source: 3 }],
      },
    ],
    sources: [
      caesarCivil3,
      caesarCivil1,
      ebJulius,
      plutarchCaesar,
      appianCivil2,
    ],
  },
  "war-of-actium": {
    summary:
      "The last war of the Roman Republic, between Octavian and Antony and Cleopatra, decided by the blockade and naval battle at Actium in 31 BCE and ended at Alexandria in 30.",
    narrative: [
      {
        title: "The break",
        text: "After Philippi Antony took the eastern half of the empire and Octavian the west. Antony returned to Cleopatra, and a document, probably forged in the Livius article’s judgement, showed him promising her Roman land; it gave Octavian his excuse for war. Octavian had already annexed Dalmatia, which offered him a land road to the Balkans.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }],
      },
      {
        title: "Agrippa’s blockade",
        text: "Antony and Cleopatra moved to Greece with a very large force. Octavian crossed the Ionian Sea and landed in Epirus, while Agrippa took Methone by storm, then Leucas and Patrae, and later Corinth, cutting Antony’s communications. Antony’s camps on the Gulf of Ambracia, at Actium, began to run short of food, and Canidius advised him to send Cleopatra away and fight on land in Thrace or Macedonia.",
        evidence: "fact",
        studies: ["actium"],
        refs: [{ source: 1 }, { source: 0 }, { source: 2 }],
      },
      {
        title: "The battle",
        text: "On 2 September 31 BCE the fleets met outside the gulf. While the fighting was still even, the sixty ships of Cleopatra were seen hoisting their sails and running through the centre, and Antony followed. Agrippa and Octavian defeated the rest; Plutarch says the fleet held out until the tenth hour, and that it took a high sea to finish it, while Dio describes fire and catapults burning the great galleys.",
        evidence: "fact",
        studies: ["actium"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "Alexandria",
        text: "Antony’s legionaries surrendered to Octavian. Allies changed sides during the winter; Herod of Judaea was among them. In 30 Octavian pursued the pair to Egypt, and at Alexandria both killed themselves. The day Alexandria fell was declared lucky, and the city was to count its years from it.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 2 }, { source: 0 }, { source: 3 }],
      },
      {
        title: "Tactical victory, strategic defeat",
        text: "The Livius article argues that Antony had meant to break out of the gulf, and did: a tactical victory that cost him his army, his reputation as a commander who would not abandon his men and any chance of winning the war. Octavian had refused the land battle Antony wanted, because Antony was the better general, and let Agrippa’s operations do the work.",
        evidence: "interpretation",
        studies: ["actium"],
        refs: [{ source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Dio has Antony mistaking Cleopatra’s escape for flight from fear and following her; the Livius article reads the same movement as a planned break-out, which would make the story of her desertion part of the victor’s propaganda. Plutarch credits Antony with five hundred warships, the Livius article with 230 vessels. Plutarch cites Octavian himself for five thousand dead and three hundred ships captured, and the battle became a prominent part of imperial propaganda.",
        evidence: "uncertainty",
        studies: ["actium"],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
    ],
    sources: [plutarchAntony, dio50, liviusActium, dio51],
  },
  "varus-s-campaign-in-germania": {
    summary:
      "The Germanic rising under Arminius in 9 CE that destroyed three Roman legions under Varus in the Teutoburg narrows.",
    narrative: [
      {
        title: "A province in the making",
        text: "Florus, Dio and Velleius agree that Germania had been conquered by Drusus and that the Romans were later trying to turn it into a real province; they also agree that Varus imposed regular taxes and that these provoked resistance. Velleius sketches Varus as mild, slow and better used to the leisure of camp than to war.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "The conspiracy",
        text: "Arminius, a young noble of the Cherusci, led the plot. Segestes warned Varus, who would not listen. A rising in a distant tribe, by Dio’s account arranged on purpose, drew Varus through what he took to be friendly country. Arminius and his fellow conspirators left the column on the pretext of gathering their allied forces, and the detachments of Roman soldiers in the Germanic communities were killed.",
        evidence: "fact",
        studies: ["teutoburg"],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
      {
        title: "The destruction of the legions",
        text: "Dio is the only writer to give an overview of the fighting, over several days. The Seventeenth, Eighteenth and Nineteenth legions were destroyed. Varus and the senior officers, already wounded, killed themselves; of the two camp prefects Eggius set a noble example and Ceionius proposed surrender, and Vala Numonius rode off toward the Rhine with the cavalry. Varus’s head was sent to Maroboduus.",
        evidence: "fact",
        studies: ["teutoburg"],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
      {
        title: "Germanicus at the site",
        text: "Germanicus later marched to the field. Tacitus describes Varus’s first camp, whose size showed the work of three legions, and the bones, splintered spears and skulls nailed to tree trunks that his men found there. He gives no account of the battle itself.",
        evidence: "fact",
        studies: ["teutoburg"],
        refs: [{ source: 3 }, { source: 1 }],
      },
      {
        title: "Kalkriese",
        text: "One of the fights has been located at Kalkriese, north of Osnabrück, on a strip of farmed land about 220 metres wide between a hill and a bog, with a palisade on the slope. The Livius article proposes translating the name Saltus Teutoburgiensis as “Teutoburg Narrows”, and so few open battlefields of antiquity have been excavated that the finds change how the written accounts are read.",
        evidence: "interpretation",
        studies: ["teutoburg"],
        refs: [{ source: 4 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Dio says Varus had scattered his soldiers among the communities, while Velleius has three legions destroyed together; the Livius article suggests that Varus regrouped on hearing of the rising. It dismisses Dio’s mountains and ravines as a literary commonplace about the edges of the world. Velleius blames the negligence of the general, the perfidy of the enemy and the unkindness of fortune, while the Livius article suggests Varus was a more capable commander than is sometimes assumed.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }, { source: 1 }],
      },
    ],
    sources: [
      dio56,
      liviusTeutoburg,
      velleius,
      tacitusAnnals1,
      liviusKalkriese,
    ],
  },
  "boudican-revolt": {
    summary:
      "The rising of the Iceni and Trinovantes under Boudica in Britain in 60 or 61 CE, which destroyed three Roman towns before it was crushed by Suetonius Paulinus.",
    narrative: [
      {
        title: "Causes",
        text: "While the governor Suetonius Paulinus was attacking the island of Mona, the Icenian king Prasutagus died, having named the emperor as co-heir with his two daughters in the hope of protecting his house. Tacitus describes the kingdom pillaged by centurions, Boudica flogged and her daughters violated, and the Trinobantes joining the Iceni in revolt. Dio adds a financial cause: Seneca, he says, had lent the Britons 40,000,000 sesterces they did not want, and suddenly called it in.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Three towns",
        text: "The rebels took the colony at Camulodunum and then, then Londinium and Verulamium; Tacitus says the natives passed by forts and garrison posts for the places richest in plunder. He records that close to seventy thousand Roman citizens and allies fell there.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The last battle",
        text: "Suetonius, with the Fourteenth Legion and part of the Twentieth, chose his ground and accepted battle against a far larger host. Tacitus says by some accounts little less than eighty thousand Britons fell, against about four hundred Romans killed. The camp-prefect of the Second Legion, Poenius Postumus, who had ignored his orders and so cheated his men of a share in the victory, took his own life.",
        evidence: "fact",
        studies: ["watling-street"],
        refs: [{ source: 0 }],
      },
      {
        title: "Punishment and inquiry",
        text: "A conflict between Suetonius and the procurator led Nero to send his freedman Polyclitus to inspect Britain and, as Nero hoped, reconcile them and calm the natives. Tacitus remarks that his huge train had been a burden to Italy and Gaul and a terror even to Roman soldiers once it crossed the sea.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Two explanations",
        text: "Tacitus lays the rising on Roman abuse of the Icenian royal house and of the Trinovantes, Dio on money and the charisma of a woman who, he says, was chosen to direct the whole war. Both writers give Boudica a speech before the fighting, and Haverfield’s Britannica article, combining them, adds Roman taxation and conscription to the list of grievances.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "Where the sources disagree",
        text: "Tacitus has Boudica end her days by poison; Dio says she fell sick and died. Tacitus reports seventy thousand dead in the towns and Dio eighty thousand. Neither writer names the site of the final battle: the Loeb editor presumes that Suetonius fell back along Watling Street and fought “somewhere in the Midlands”, which is where the catalog’s name comes from. Haverfield dates the death of Prasutagus to 61, and the catalog keeps 60 or 61.",
        evidence: "uncertainty",
        studies: ["watling-street"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [tacitusAnnals14, dio62, ebBoadicea],
  },
  "judaean-campaign-of-vespasian-and-titus": {
    summary:
      "The Roman reconquest of Judaea in the Jewish War of 66–70 CE under Vespasian and Titus, ending in the siege of Jerusalem and the destruction of the Temple.",
    narrative: [
      {
        title: "The outbreak",
        text: "In 66 CE Gessius Florus took money from the Temple treasure, and his reprisals against those who mocked him set off the revolt. The Livius article finds deeper causes in the impoverishment of the Jewish peasantry under Roman taxation, the unemployment that followed the end of work on the Temple and religious tension, and calls the war also a class struggle. In November the Syrian governor Cestius Gallus was defeated on his way back from Jerusalem, and the Twelfth Legion lost its standard.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Vespasian in Galilee",
        text: "Nero gave Vespasian the command. In 67 he reinforced Sepphoris and gathered three legions at Ptolemais, with his son Titus bringing the Fifteenth, then took Jotapata, whose commander Joseph son of Matthias was captured, predicted that Vespasian would be emperor and became the historian Josephus. Galilee was pacified by January 68, while John of Gischala went to Jerusalem.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Jerusalem divided",
        text: "Vespasian, proclaimed emperor, left the war to Titus, assisted by the experienced Tiberius Julius Alexander. Inside Jerusalem the Zealots of Eleazar, the men of John and those of Simon bar Giora were fighting each other. Titus laid siege on 14 April 70, during Passover, when the city was full of pilgrims; Tacitus gives him the Fifth, Tenth and Fifteenth legions already in Judaea.",
        evidence: "fact",
        studies: ["jerusalem-70"],
        refs: [{ source: 1 }, { source: 2 }],
      },
      {
        title: "The siege",
        text: "Siege towers and rams brought down the outer wall after fifteen days. Titus staged a four-day parade of the army and sent Josephus to urge surrender, without result, and siege dams were built against the Antonia fortress. Early in July Roman soldiers climbed its walls at night and drove out the defenders. On the tenth of August the Temple was burning, and the legionaries sacrificed to their standards there; the Old Town and the palace fell soon after.",
        evidence: "fact",
        studies: ["jerusalem-70"],
        refs: [{ source: 1 }],
      },
      {
        title: "Aftermath",
        text: "Josephus says 97,000 were taken prisoner in the war. Many were forced to fight in the arena, and most, according to the Livius article, were brought to Rome to build the Forum of Peace and the Colosseum. Simon was executed in the triumph and John imprisoned for life; the Temple’s treasures were carried through the streets, coins proclaimed Judaea Capta, and Jews had to pay a special tax.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }, { source: 1 }],
      },
      {
        title: "Roman strategy",
        text: "The Livius article describes Vespasian’s strategy as letting the Jews in Jerusalem destroy themselves while he secured the countryside, and judges that Titus’s chief qualification was that his father could trust him. Josephus, who changed sides, wrote his history in part to show that the tyrants in the city, not the Romans, brought on its ruin.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 1 }, { source: 3 }],
      },
      {
        title: "Where the sources disagree",
        text: "Josephus repeatedly shows Titus wishing to preserve the city and Temple; a fragment attributed to Tacitus has Titus among those who held that it must be destroyed to root out Judaism and Christianity. Josephus gives 1,100,000 dead in the siege, a total that even he explains by the crowds of pilgrims, while Tacitus heard of 600,000 besieged. The chronology is also uncertain: Josephus mixes calendars, and the year of the fall of Masada is not stated.",
        evidence: "uncertainty",
        studies: ["jerusalem-70"],
        refs: [{ source: 3 }, { source: 4 }, { source: 2 }, { source: 5 }],
      },
    ],
    sources: [
      liviusJewishWar,
      liviusJerusalem,
      tacitusHistories5,
      josephus,
      tacitusFragments,
      liviusJewishChronology,
    ],
  },
  "constantine-s-italian-campaign": {
    summary:
      "Constantine’s invasion of Italy in 312 against Maxentius, ending at the Milvian Bridge and traditionally associated with his turn to Christianity.",
    narrative: [
      {
        title: "Allies and rivals",
        text: "When Galerius died in 311, Maximinus Daia entered into negotiations with Maxentius, which drove Licinius into alliance with Constantine. Maxentius had been occupied suppressing the revolt of Domitius Alexander in Africa, and in the spring of 312 Constantine crossed the Alps before his rival had completed his preparations.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }],
      },
      {
        title: "Northern Italy",
        text: "Constantine stormed Susa, defeated Maxentius’s generals at Turin and Verona and marched straight on Rome. Zosimus describes Maxentius relying on an army much larger than Constantine’s and on a bridge over the Tiber built in two sections, which could be detached to drop the enemy in the river.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 3 }, { source: 2 }],
      },
      {
        title: "The sign",
        text: "According to Lactantius, a well-informed contemporary, Constantine was told in a dream to mark the heavenly sign on his soldiers’ shields. Eusebius, writing after the emperor’s death, tells of a cross of light seen in the sky at noon, which he says Constantine swore to him was true, followed by Christ appearing to him in his sleep and commanding him to make a standard in that form.",
        evidence: "fact",
        studies: ["milvian-bridge"],
        refs: [{ source: 0 }, { source: 1 }, { source: 3 }],
      },
      {
        title: "The Milvian Bridge",
        text: "On the anniversary of his accession, 28 October, Maxentius stayed in Rome at first; Lactantius says the Sibylline books were consulted and promised that on that day the enemy of the Romans would perish, and he went out to the field. His forces were routed. He fled to the broken bridge and was driven into the Tiber. Constantine disbanded the praetorian guard.",
        evidence: "fact",
        studies: ["milvian-bridge"],
        refs: [{ source: 0 }, { source: 3 }],
      },
      {
        title: "Boldness and belief",
        text: "The Britannica article finds the march on Rome a bold, almost desperate move that contrasts with Constantine’s usual caution, and explains it by the event told as a miracle: Constantine, perhaps impressed by the misfortunes of the persecutors, adopted the monogram of Christ and staked all on the issue. Eusebius compares Maxentius’s drowning with Pharaoh’s army in the Red Sea, which shows how quickly the battle became sacred history.",
        evidence: "interpretation",
        studies: ["milvian-bridge"],
        refs: [{ source: 3 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Lactantius has a dream; Eusebius has a vision by day and a dream by night, and the Britannica article observes that the story in that form was evidently unknown to him when he wrote his Ecclesiastical History. Constantine’s strength is put at about 25,000 by a panegyrist, near 100,000 by Zonaras, and at 90,000 foot and 8,000 horse by Zosimus, who gives Maxentius 170,000 foot and 18,000 horse. Zosimus also has the trap bridge collapse under Maxentius, and Lactantius simply speaks of a broken bridge.",
        evidence: "uncertainty",
        studies: ["milvian-bridge"],
        refs: [{ source: 0 }, { source: 1 }, { source: 3 }, { source: 2 }],
      },
    ],
    sources: [lactantius, eusebiusLife, zosimus2, ebConstantine],
  },
  "gothic-war-of-376-382": {
    summary:
      "The war that followed the Gothic crossing of the Danube in 376, in which the Goths destroyed the army of Valens at Adrianople in 378 and were settled inside the empire under Theodosius.",
    narrative: [
      {
        title: "The crossing",
        text: "Driven by the Huns, the Tervingi begged to be received across the Danube, and the news at court caused more joy than fear. The Greuthungi under Alatheus and Saphrax asked in their turn. Ammianus describes famine among the settlers and two rapacious commanders, Lupicinus, commanding in Thrace, and Maximus. Jordanes tells the same story: the Goths asked for a market to be opened and were cheated.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Marcianopolis",
        text: "Lupicinus invited Alavivus and Fritigern to dinner at Marcianopolis and held their followers outside the walls; fighting broke out, and when he led out his soldiers in haste nine miles from the city, most of his army and its tribunes were destroyed. Ammianus has him escaping while the others fought. The Goths spread through Thrace.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Valens marches",
        text: "Sebastianus, sent from Italy and given the infantry command, surprised bands of Goths laden with booty near the Hebrus. Gratian, the western emperor, sent Richomeres ahead to ask Valens to wait for him. Valens’s courtiers urged him to make haste so that Gratian might have no share in the victory. Zosimus reports that Sebastianus too advised against bringing so great a multitude to a regular battle.",
        evidence: "fact",
        studies: ["adrianople"],
        refs: [{ source: 0 }, { source: 3 }],
      },
      {
        title: "Adrianople",
        text: "On 9 August 378 the army marched over rough ground through the heat and at the eighth hour saw the Gothic wagons drawn up in a perfect circle, about thirteen kilometres north of the city. When talks failed the Romans were defeated. Ammianus says that barely a third of the army escaped, and compares the disaster only to Cannae. Valens died, either at once or, as others said, burned in a peasant’s cottage.",
        evidence: "fact",
        studies: ["adrianople"],
        refs: [{ source: 0 }, { source: 4 }],
      },
      {
        title: "Settlement",
        text: "The Goths failed before the walls of Adrianople. Theodosius succeeded Valens, and the mass of the Gothic warriors entered Roman service as federates. Jordanes reports that Gratian had made a compact, that Theodosius confirmed it, and that the Gothic king Athanaric was received in Constantinople and died there.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }, { source: 4 }],
      },
      {
        title: "Blame",
        text: "Ammianus lays the blame on the corruption of the officers in Thrace, on Valens’s jealousy of Gratian and on a long list of portents, while the Britannica article states that the peaceful designs of Fritigern were thwarted by the ill-treatment the Goths suffered from Roman officials. The Livius article stresses the outcome: Valens’s successor had to offer land to the victors.",
        evidence: "interpretation",
        studies: ["adrianople"],
        refs: [{ source: 0 }, { source: 1 }, { source: 4 }],
      },
      {
        title: "Where the sources disagree",
        text: "Ammianus records two versions of the emperor’s death. His history ends at this point, so the peace rests on later and thinner accounts: the Britannica article dates the terms to 381, Jordanes’s editor marks the peace and Athanaric’s death at 380–381, and the catalog’s title follows the common date of 382. Jordanes’s history of the Goths was written long afterward.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
    ],
    sources: [ammianus31, ebGoths, jordanes, zosimus4, liviusAdrianople],
  },
  "attila-s-invasion-of-gaul": {
    summary:
      "Attila’s invasion of Gaul in 451, turned back from Orléans by Aetius and the Visigoths and ended by the drawn battle of the Catalaunian Plains.",
    narrative: [
      {
        title: "Honoria’s ring",
        text: "Bury writes that the Augusta Honoria’s message reached Attila probably in the spring of 450. He chose to treat her ring as a proposal of marriage, claimed her as his bride and demanded half the territory of Valentinian III. Marcian, the new eastern emperor, took a firmer line, and Attila turned west.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Into Gaul",
        text: "Early in 451 Attila set out with his Huns and his German subjects, among them Gepids under Ardaric and Ostrogoths under three chieftains, joined at the Rhine by Burgundians and some Ripuarian Franks. His army took Metz on 7 April and wasted the Belgic provinces. Aetius’s own preparations were hurried, and his chance depended on the Visigoths, who had decided to stay neutral until Avitus persuaded Theoderic to join.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "Orléans",
        text: "A settlement of Alans had secretly agreed to help Attila, and Bury takes his objective to have been Orléans. He holds that the allies’ first strategic aim was to prevent him reaching it and that they succeeded, so that the Huns fell back toward Troyes with the allies close behind.",
        evidence: "fact",
        studies: [],
        refs: [{ source: 0 }],
      },
      {
        title: "The Mauriac place",
        text: "Attila halted not far from Troyes. The battle began in the afternoon and lasted into the night; it was drawn, with immense slaughter, and Theoderic was among the dead. The next day Attila stood behind his wagons, said to have a funeral pyre ready. Aetius persuaded Thorismud to hurry home to secure his succession and sent the Franks away, and Attila escaped.",
        evidence: "fact",
        studies: ["catalaunian-plains"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "A battle overrated",
        text: "Bury argues that the battle has been enormously exaggerated: the campaign was decided by cutting Attila off from Orléans, and Hun rule in Gaul could not have outlived Attila himself. He explains Aetius’s letting Attila go as policy, since Aetius had long made use of Hun power and did not want to enlarge the prestige of the Visigoths. The Britannica article, by contrast, sees Europe saved by the Teutonic peoples rallying to the empire’s defence.",
        evidence: "interpretation",
        studies: ["catalaunian-plains"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "The name is unsettled: Jordanes and Hydatius speak vaguely of the Catalaunian Plains, while chronicles place the battle at Maurica near Troyes, and Bury argues against the conventional name of Châlons. He also calls the accounts of the events at Orléans contradictory and treats the bishop’s role there as the beginning of a church legend. Jordanes, the fullest narrative, follows the earlier historian Priscus at a distance.",
        evidence: "uncertainty",
        studies: ["catalaunian-plains"],
        refs: [{ source: 0 }, { source: 2 }],
      },
    ],
    sources: [buryAttila, ebAttila, jordanes],
  },
  "persian-expedition-to-the-aegean": {
    summary:
      "The Persian seaborne expedition of 490 BCE under Datis and Artaphernes, sent to punish Eretria and Athens, which took Eretria and was defeated at Marathon.",
    narrative: [
      {
        title: "The expedition",
        text: "Herodotus says Darius wanted a pretext to subdue the Greek states that had refused him earth and water, and was reminded of the Athenians by the sons of Peisistratos. After taking Eretria the Persians sailed for Attica, guided by the exiled tyrant Hippias to Marathon as the ground most convenient for cavalry and nearest Eretria. Athens appealed to Sparta, but its help did not arrive in time. After the battle the Persians sailed round Sunium, and the Athenians hurried back in time to meet them, so that the fleet lay off Phaleron and then went home.",
        evidence: "fact",
        studies: ["marathon"],
        refs: [{ source: 0, locator: "6.94–117" }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Herodotus gives about 6,400 Persian dead and 192 Athenian, and the Britannica article shows that a burial mound excavated in 1891–1892 does hold the Athenian dead. It estimates the Persian force at perhaps 50,000, a modern guess, against 9,000 Athenian hoplites and 1,000 Plataeans.",
        evidence: "uncertainty",
        studies: ["marathon"],
        refs: [{ source: 0, locator: "6.117" }, { source: 1 }],
      },
    ],
    sources: [herodotus, ebMarathon],
  },
  "campaign-on-the-yangtze": {
    summary:
      "Cao Cao’s southern campaign of 208 CE, in which Jing province surrendered to him and the alliance of Sun Quan and Liu Bei stopped him at Red Cliffs.",
    narrative: [
      {
        title: "South to the river",
        text: "Having won the North China Plain, Cao Cao marched against Liu Biao in the seventh month of 208. Liu Biao died, his son Liu Cong surrendered and Liu Bei fled to Xiakou. Liu Bei sent Zhuge Liang to Sun Quan, who dispatched Zhou Yu and Cheng Pu to oppose Cao Cao alongside him; they met him at Red Cliffs, where disease was already spreading in his army. Zhou Yu’s officer Huang Gai observed that the enemy ships lay stem to stern and could be burned. Cao Cao’s defeat stabilized the regions of his rivals and led toward the Three Kingdoms.",
        evidence: "fact",
        studies: ["red-cliffs"],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Cao Cao claimed nearly 800,000 men; the World History Encyclopedia reports that contemporaries and modern scholars consider that a wild exaggeration and suggest about 250,000. Chen Shou’s biography of Zhou Yu credits fire and Huang Gai, and also notes the sickness in Cao Cao’s army, which leaves open how much of the defeat was battle and how much disease.",
        evidence: "uncertainty",
        studies: ["red-cliffs"],
        refs: [{ source: 0 }, { source: 2 }],
      },
    ],
    sources: [redCliffsWh, sanguozhi1, sanguozhi54],
  },
  "mesopotamian-campaign-of-530": {
    summary:
      "The Roman–Persian campaign of 530 in northern Mesopotamia, in which Belisarius defeated a larger Persian army before Dara.",
    narrative: [
      {
        title: "The frontier fortress",
        text: "Dara had been built by the emperor Anastasius as a stronghold against Persia after his treaty with Cabades. Justinian appointed Belisarius General of the East and sent the magister Hermogenes to help him order the army, with Rufinus as ambassador. Procopius sets 25,000 Romans against 40,000 Persian horse and foot and reports about five thousand Persians killed, after which they were no longer willing to fight a pitched battle with the Romans. Mermeroes then invaded near Satala, and the war went on.",
        evidence: "fact",
        studies: ["dara"],
        refs: [{ source: 0 }],
      },
      {
        title: "The limits of the evidence",
        text: "Procopius was chosen as Belisarius’s adviser at this time, which makes him both valuable and partial, and his figures are the only ones used here. He notes that even after their defeat the Persians would not leave until Rufinus went before Cabades, so a victory in the field did not end the war.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }],
      },
    ],
    sources: [procopius],
  },
  "conquest-of-syria": {
    summary:
      "The Muslim conquest of Byzantine Syria in the 630s, decided at the Yarmuk River in 636.",
    narrative: [
      {
        title: "Into Syria",
        text: "After the Ridda wars Abu Bakr sent his armies into Iraq and Syria. Khalid ibn al-Walid crossed the desert from Iraq with his best men to support the divisions in Syria. Umar, who succeeded Abu Bakr, stripped Khalid of his command in favour of Abu Ubaidah, and Damascus fell. Heraclius gathered a great army, which met the Muslims on the Yarmuk on 20 August 636; the victory gave them Syria. Al-Baladhuri’s account stresses the hostility of the Syrians to Byzantium and their welcome for the invaders.",
        evidence: "fact",
        studies: ["yarmouk"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Al-Baladhuri, writing over two centuries later, numbers Heraclius’s army at about 200,000. The World History Encyclopedia warns that Arab chroniclers inflated enemy numbers and shrank their own, and puts the imperial force at around 40,000, while agreeing that the Muslims were outnumbered. The surviving accounts are episodic and personal, more concerned with who fought and was wounded than with the movement of armies.",
        evidence: "uncertainty",
        studies: ["yarmouk"],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [baladhuri, yarmoukWh],
  },
  "invasion-of-england": {
    summary:
      "The succession crisis of 1066 and Duke William of Normandy’s invasion of England, decided at Hastings.",
    narrative: [
      {
        title: "Three claimants",
        text: "Edward the Confessor died on 5 January 1066 without a direct heir, and Harold was crowned at Westminster the next day. Two rivals threatened: Harald Hardrada of Norway and William of Normandy. Harold marched north and defeated Hardrada and Tostig at Stamford Bridge on 25 September; a few days later he heard that William had landed at Pevensey. The defeat at Hastings followed on 14 October.",
        evidence: "fact",
        studies: ["hastings"],
        refs: [{ source: 0 }],
      },
      {
        title: "Whose story",
        text: "The Bayeux Tapestry begins in 1064 with Edward sending Harold to Normandy to offer William the succession, which is the Norman case for the conquest. William of Malmesbury’s account of the battle was written after the Conquest. The evidence for the crisis of 1066 therefore comes largely from the side that won or from its heirs.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 2 }],
      },
    ],
    sources: [englishHeritage, bayeuxMuseum, malmesbury],
  },
  "saladin-s-campaign-of-1187": {
    summary:
      "Saladin’s invasion of the Kingdom of Jerusalem in 1187, which destroyed the Frankish army at Hattin and led to the loss of Jerusalem.",
    narrative: [
      {
        title: "A divided kingdom",
        text: "Raymond III of Tripoli stood opposed to the king and had even allied with Saladin to protect his county, but under pressure he joined the Christian army at the Springs of Saffuriya. From there the army marched to relieve Tiberias. Saladin had water brought up from the lake by camel caravan and positioned near his camp, and the Franks, unable to reach water in the great heat, suffered from thirst and from the smoke of fires lit against them. Hattin opened the way to Saladin’s recovery of Jerusalem later in the year.",
        evidence: "fact",
        studies: ["hattin"],
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      {
        title: "Blame for the disaster",
        text: "The Christian narratives were written in the shadow of defeat, and the divisions between Raymond’s party and the king’s run through them. The Britannica article takes a longer view: Saladin’s army of 1187 had the spirit of the crusaders of 1099, while the kingdom’s own crusaders had lost it.",
        evidence: "interpretation",
        studies: ["hattin"],
        refs: [{ source: 0 }, { source: 2 }],
      },
    ],
    sources: [hattinFordham, hattinDeRe, ebCrusades],
  },
  "third-crusade": {
    summary:
      "The crusade of 1189–1192 launched after the fall of Jerusalem, in which Richard I retook the coast and defeated Saladin at Arsuf but did not recover the city.",
    narrative: [
      {
        title: "Acre and the coast",
        text: "The siege of Acre, begun in 1189 by Guy de Lusignan, became the centre of the crusade because its capture would open the way to Jerusalem. Frederick Barbarossa drowned on the march and most of his army melted away; Philip II sailed straight to Acre, while Richard stopped to conquer Cyprus. On 22 August 1191 Richard marched south from Acre with Saladin shadowing him and, keeping his cavalry between columns of infantry, refused to charge until 7 September at Arsuf.",
        evidence: "fact",
        studies: ["arsuf"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "A limited result",
        text: "The Britannica article records that Richard stayed another year, winning at Arsuf and refortifying Jaffa. A truce left the crusaders in control of the coast and Jerusalem in Muslim hands. The EBSCO summary’s round figures of 25,000 crusaders against 35,000, with 7,000 Muslim dead and perhaps 700 crusaders, are stated without their basis, and should be read as approximations.",
        evidence: "uncertainty",
        studies: ["arsuf"],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [arsufEbsco, ebCrusades],
  },
  "campaign-of-1211-against-the-jin": {
    summary:
      "Chinggis Khan’s invasion of the Jin Empire, in which the Jin field army was defeated at Yehuling in the mountains north-west of the capital.",
    narrative: [
      {
        title: "The war with the Jin",
        text: "The Yuan Shi’s biography of Muqali has Jin defectors reporting the slaughter of relatives and debauchery at their court, and Chinggis declaring that he now had just cause. The Mongols took Dexing and attacked the western commanderies. A Jin army said to number 400,000 drew up north of Yehuling; Muqali argued that the many could only be broken by the few fighting to the death, and led a charge of picked men. The Jin Shi says that the commander Wanyan Chengyu lost heart when the Mongols came to Yehuling, retreated and refused the local militia’s offer to fight in the terrain they knew.",
        evidence: "fact",
        studies: ["yehuling"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "The figure of 400,000 is introduced in the Yuan Shi with the word for “claimed”. The Yuan biography places the battle after its entry for the year renshen (1212), while the Jin Shi’s biography sets the arrival at Yehuling in an eighth month, which the catalog takes as 1211. Both are dynastic histories compiled later, one celebrating the victors and the other explaining the failure of a lost state.",
        evidence: "uncertainty",
        studies: ["yehuling"],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [yuanshi119, jinshi93],
  },
  "mongol-invasion-of-hungary": {
    summary:
      "The Mongol invasion of Hungary in 1241–1242, which destroyed King Béla IV’s army at Mohi and then withdrew.",
    narrative: [
      {
        title: "A kingdom unprepared",
        text: "Béla IV admitted the nomadic Cumans into Hungary, a decision that seemed statesmanlike but alienated his own people; when the Cumans were provoked they left, burning and looting. Sinor estimates Béla’s army at 65,000 and the Mongol centre facing it at no less. After the defeat Béla fled toward the Adriatic and found refuge on an island off Trogir. The west offered no effective help, and Emperor Frederick II blamed an “idle and careless” king.",
        evidence: "fact",
        studies: ["mohi"],
        refs: [{ source: 0 }],
      },
      {
        title: "Why the Mongols left",
        text: "John of Plano Carpini attributed the withdrawal to the death of Ögödei. Sinor disagrees: he calculates that even on unrealistic assumptions the Hungarian pastures could feed the mounts of only about 83,000 warriors, far below the size of the Mongol army, and concludes that logistics compelled the retreat. Pow and Laszlovszky show that the exact stages of the battle remain uncertain, since there are no real hills near the presumed site to match the sources’ account of Batu climbing one.",
        evidence: "uncertainty",
        studies: ["mohi"],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [sinor, powLaszlovszky],
  },
  "campaign-in-syria-and-palestine": {
    summary:
      "The Mongol advance into Syria under Hulagu and its defeat by the Mamluks of Egypt at Ain Jalut in 1260.",
    narrative: [
      {
        title: "Quduz answers Hulagu",
        text: "When Hulagu left Syria he sent an envoy with forty men to Egypt demanding submission. Rashid al-Din describes Quduz debating with his commanders; Nasiruddin Qaymari warned that Hulagu’s promises could not be trusted, since he had killed others who surrendered. The Mamluks marched. Hulagu had taken most of his force home, leaving Ket Buqa, and at Ain Jalut the two armies were about equal at some 20,000 each. Ket Buqa was captured and executed, and on the way back to Cairo Baybars killed Quduz and became sultan.",
        evidence: "fact",
        studies: ["ain-jalut"],
        refs: [{ source: 0 }],
      },
      {
        title: "Where the sources disagree",
        text: "Rashid al-Din was a historian of the Mongol court, writing long after the defeat; the page presenting his account dates the battle to 3 September in its introduction but to 8 September in its own address. The feigned retreat and hidden reserves come from the editor’s summary, and the numbers are approximate.",
        evidence: "uncertainty",
        studies: ["ain-jalut"],
        refs: [{ source: 0 }],
      },
    ],
    sources: [rashid],
  },
  "henry-v-s-campaign-of-1415": {
    summary:
      "Henry V’s invasion of Normandy in 1415, from the siege of Harfleur to his interception and victory at Agincourt on the march to Calais.",
    narrative: [
      {
        title: "The march to Calais",
        text: "Henry took Harfleur, which Monstrelet says surrendered when the French king’s forces could not be assembled in time to relieve it. The English then marched for Calais, and d’Albret, the constable of France, barred their way in the defile between the woods of Agincourt and Tramecourt. Anne Curry stresses that the battle came at the end of a failed campaign: Henry was intercepted on the way home and rescued the situation by victory. The Britannica article gives him about 1,000 men-at-arms, 6,000 archers and a few thousand other foot.",
        evidence: "fact",
        studies: ["agincourt"],
        refs: [{ source: 1 }, { source: 2 }, { source: 0 }],
      },
      {
        title: "Legend and evidence",
        text: "Curry argues that Shakespeare’s Henry V and its wartime use created the image most people have of the battle, one of little England and the common archer against French aristocrats. Monstrelet, who gives upward of ten thousand French dead on the estimate of heralds, was writing in France. Older totals for the armies should be treated with caution, and the University’s historians have been testing popular stories against the records.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 2 }, { source: 1 }],
      },
    ],
    sources: [ebAgincourt, monstrelet, southampton],
  },
  "siege-of-constantinople": {
    summary:
      "Mehmed II’s siege of Constantinople in 1453, which ended the Byzantine Empire after fifty-five days.",
    narrative: [
      {
        title: "Preparation",
        text: "Byzantine territory had shrunk to the city and its immediate hinterland, and its population had fallen to perhaps 40,000–50,000. In 1452 Mehmed made peace with Hungary and Venice, built a fortress at the narrowest point of the Bosporus and had Urban cast cannon to breach the walls. Constantine XI’s appeals to Christendom brought little: the pope pressed for church union, which many in the city rejected. The siege began in April, and Mehmed’s ships were dragged overland into the Golden Horn. The land wall was breached on 29 May.",
        evidence: "fact",
        studies: ["constantinople"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Witnesses",
        text: "Kritovoulos describes the ships carried over the ridge as if on the sea. Barbaro, a Venetian present in the harbour, counts seventy-two fuste brought across and a fleet of 145 vessels, and calls the attackers “dogs” throughout. The two accounts complement each other but neither is neutral.",
        evidence: "uncertainty",
        studies: ["constantinople"],
        refs: [{ source: 1 }, { source: 2 }],
      },
    ],
    sources: [constantinopleBr, kritovoulos, barbaro],
  },
  "babur-s-invasion-of-hindustan": {
    summary:
      "Babur’s invasion of northern India in 1525–1526, ending the Delhi sultanate at Panipat and founding Mughal rule.",
    narrative: [
      {
        title: "A prince without a throne",
        text: "Babur, descended from both Timur and Genghis Khan, lost Fergana, failed repeatedly to hold Samarkand and fell back on Kabul. With no prospect of recovering his old lands, he turned to India, where Ibrahim Lodi’s effort to build a centralized state had antagonized powerful Afghan chiefs such as Daulat Khan Lodi. He set out in November 1525. The battle at Panipat ended the Lodi dynasty and the Delhi sultanate.",
        evidence: "fact",
        studies: ["panipat"],
        refs: [{ source: 0 }],
      },
      {
        title: "The evidence",
        text: "The detailed account comes from Babur’s own memoirs, so the campaign is known mainly through the victor. Britannica notes that the date is usually given as 20 April 1526, though some scholars prefer 21 April, the date used in the catalog.",
        evidence: "uncertainty",
        studies: ["panipat"],
        refs: [{ source: 0 }],
      },
    ],
    sources: [panipatBr],
  },
  "nagashino-campaign": {
    summary:
      "The Takeda siege of Nagashino castle in 1575 and its relief by the armies of Oda Nobunaga and Tokugawa Ieyasu.",
    narrative: [
      {
        title: "Siege and relief",
        text: "A Takeda army of 15,000 besieged Nagashino castle in Mikawa. After a week the samurai Torii Suneemon slipped out to summon help and was killed on his return, shouting to the garrison that relief was on the way. A combined force of 38,000 under Oda and Tokugawa arrived; Oda built a staggered palisade between the hills and the river and stationed 3,000 matchlock men behind it to break the Takeda cavalry charges. The Takeda lost, by Turnbull’s count, 10,000 dead, including 54 of their 97 leaders.",
        evidence: "fact",
        studies: ["nagashino"],
        refs: [{ source: 0 }],
      },
      {
        title: "The image of the battle",
        text: "Much of the popular picture of Nagashino descends from painted screens. The Naruse screen, made on the orders of the head of the Naruse family, who died in 1620, is thought to be the model for later versions and shows Nobunaga, Hideyoshi and Ieyasu together. Britannica calls Nagashino the first modern Japanese battle because of its firearms; the screen shows how early the battle became a celebration of the three unifiers.",
        evidence: "interpretation",
        studies: ["nagashino"],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [nagashinoBr, nagashinoScreen],
  },
  "joseon-naval-operations-of-1592": {
    summary:
      "Admiral Yi Sun-sin’s naval campaign of 1592 against the Japanese invasion of Korea, which culminated at Hansan Island.",
    narrative: [
      {
        title: "Cutting the sea route",
        text: "Appointed commander in Left Jeolla in 1591, Yi trained his men, stocked supplies and developed the turtle ship, so that his fleet, unlike most of the Korean forces, was ready when the Japanese invaded in 1592. His victories off the south coast cut the Japanese armies off from supplies and reinforcements. In the seventh month the Japanese admiral Wakisaka led 73 ships to Geoje; a herdsman told Yi that some seventy lay at Gyeonnaeryang, and in the battle that followed 47 were destroyed and 12 captured.",
        evidence: "fact",
        studies: ["hansan-island"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The turtle ship",
        text: "Britannica says the turtle ship is thought to have been the first ironclad, a claim resting on descriptions of plates on its upper deck. The Korean Encyclopedia’s figures for the Japanese losses at Hansan come from the Korean side.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [yiBr, hansanEk],
  },
  "sekigahara-campaign": {
    summary:
      "The struggle for power after Toyotomi Hideyoshi’s death, decided in 1600 at Sekigahara in favour of Tokugawa Ieyasu.",
    narrative: [
      {
        title: "After Hideyoshi",
        text: "Hideyoshi appointed five regents for his young son, and when Ieyasu began to act independently Ishida Mitsunari formed a coalition against him. Uesugi Kagekatsu planned to draw Ieyasu east while the western army took Osaka and Fushimi, where Torii Mototada held the castle to delay it. Ieyasu sent armies along the Tōkaidō and the Nakasendō; Hidetada, disobeying orders by besieging Ueda, failed to join the others. On 21 October 1600 nearly 89,000 of Ieyasu’s men met just under 82,000 at Sekigahara, where Kobayakawa Hideaki had already secretly promised to change sides.",
        evidence: "fact",
        studies: ["sekigahara"],
        refs: [{ source: 0 }, { source: 2 }],
      },
      {
        title: "Questioning the story",
        text: "The Osprey article reports the research of the Japanese scholar Shiramine Jun, whose criticism of the traditional layout questions the familiar image of Ieyasu marching into a valley of death and being saved only when Kobayakawa changed sides after being fired upon. The standard narrative has been reinforced by constant retelling.",
        evidence: "uncertainty",
        studies: ["sekigahara"],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [sekigaharaBr, sekigaharaOsprey, sekigaharaNps],
  },
  "swedish-intervention-in-germany": {
    summary:
      "Gustavus Adolphus’s intervention in the Thirty Years’ War from 1630, which broke imperial power in northern Germany at Breitenfeld.",
    narrative: [
      {
        title: "The King of Sweden lands",
        text: "North German opponents of the imperial cause called in Gustavus Adolphus. He landed at Peenemünde in June 1630 and spent the rest of the year securing Mecklenburg and Pomerania, partly with an eye to Swedish hegemony in the Baltic. Just as he landed, the princes of the League forced the emperor to dismiss Wallenstein. In September 1631 Tilly, having taken Leipzig, met the Swedes and Saxons at Breitenfeld.",
        evidence: "fact",
        studies: ["breitenfeld"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Numbers",
        text: "History of War gives 36,000 imperialists against 42,000 Swedes and Saxons. The Britannica history of the war notes a swiftness of concentration in Gustavus that surprised the old-fashioned soldiers of his day.",
        evidence: "interpretation",
        studies: ["breitenfeld"],
        refs: [{ source: 2 }, { source: 0 }],
      },
    ],
    sources: [ebThirtyYears, ebBreitenfeld, breitenfeldHw],
  },
  "afzal-khan-s-expedition": {
    summary:
      "The Bijapur expedition of 1659 against Shivaji, ended by the killing of Afzal Khan at Pratapgad and the rout of his army.",
    narrative: [
      {
        title: "A Bijapur army in the hills",
        text: "Shivaji had been seizing weaker Bijapur outposts from about 1655. In 1659 the sultan sent Afzal Khan against him. Shivaji appeared intimidated, drew the army deep into difficult mountains around Jawli and arranged a meeting. He killed Afzal Khan there, and troops placed in advance fell on the unsuspecting army. Britannica says he became a formidable warlord overnight, with the horses, guns and ammunition of the Bijapur force.",
        evidence: "fact",
        studies: ["pratapgad"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Where the sources disagree",
        text: "Britannica gives Afzal Khan 20,000 men; Sabhasad’s Marathi chronicle says twelve thousand horse. Sabhasad presents the plan as inspired by a dream of the goddess and tells the story from the Maratha side, and its editor warns that the Marathi chroniclers wrongly connect Afzal with the death of Sambhaji.",
        evidence: "uncertainty",
        studies: ["pratapgad"],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [shivajiBr, sabhasad],
  },
  "danube-campaign": {
    summary:
      "Marlborough’s march from the Low Countries to the Danube in 1704 to save Vienna, which ended at Blenheim.",
    narrative: [
      {
        title: "The march to the Danube",
        text: "With enemy forces threatening Vienna, Marlborough marched 40,000 men from what is now Belgium to southern Germany, undetected by the French. Joined by Eugene, the allies faced Tallard and Marsin near Blenheim on 13 August 1704. The Britannica article reports 11,000 French and Bavarian prisoners, 100 guns and 200 colours taken; Tallard’s army was almost annihilated, while Marsin’s drew off in good order.",
        evidence: "fact",
        studies: ["blenheim"],
        refs: [{ source: 1 }, { source: 0 }],
      },
      {
        title: "How much is known",
        text: "The Britannica article calls the French and Bavarian killed and wounded large but uncertain, many having drowned in the Danube. The National Army Museum’s account, like most English narratives, tells the campaign through Marlborough, although the allied army was a coalition of British, Austrian, Dutch and Prussian troops.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [ebBlenheim, blenheimNam],
  },
  "indian-campaign-of-1738-1739": {
    summary:
      "Nadir Shah’s invasion of Mughal India in 1738–1739, the victory at Karnal and the sack of Delhi.",
    narrative: [
      {
        title: "From Kabul to Delhi",
        text: "Nadir Shah, king of Persia since 1736, advanced into India after invading Afghanistan in 1738; the Mughal Empire had been seriously weakened since Aurangzeb’s death. On 24 February 1739 at Karnal his troops waited until the Mughal force, with its elephants, came within close range and then fired. Khan Dauran was mortally wounded and Sa’adat Khan captured. Muhammad Shah was taken, Delhi looted and the Peacock Throne carried back to Persia, though he stayed on the throne.",
        evidence: "fact",
        studies: ["karnal"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "An empire’s decline",
        text: "Britannica calls Karnal the effective end of the Mughal Empire. Sarkar’s lectures, drawing on Indian chronicles such as the Siyar, describe how the Indian army ran once its two leaders were gone, with the Persian horsemen in pursuit.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [karnalBr, sarkarNadir],
  },
  "silesian-campaign-of-1757": {
    summary:
      "The campaign of late 1757 in which Frederick the Great recovered Silesia from the Austrians at Leuthen.",
    narrative: [
      {
        title: "From Rossbach to Silesia",
        text: "After beating the French and the imperial army at Rossbach on 5 November 1757, Frederick force-marched from Thuringia, for the Austrians had taken Schweidnitz on 11 November and Breslau on 22 November. On 5 December at Leuthen he attacked Charles of Lorraine with 43,000 men against 72,000. Charles lost 22,000, 12,000 of them captured, and Frederick 6,000.",
        evidence: "fact",
        studies: ["leuthen"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "A rhetoric of desperation",
        text: "The address Frederick is said to have made to his officers before the battle was published only in 1802. It is characteristic of his rhetoric, as the German History in Documents editors note, but it is not a contemporary transcript.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 2 }],
      },
    ],
    sources: [sevenYearsBr, karlLothringen, frederickLeuthen],
  },
  "burgoyne-s-northern-campaign": {
    summary:
      "General Burgoyne’s invasion from Canada in 1777, which ended in his surrender at Saratoga and helped bring France into the war.",
    narrative: [
      {
        title: "A plan without coordination",
        text: "Burgoyne proposed a three-pronged attack on Albany to cut New England from the colonies to the south. Germain approved it and also approved Howe’s plan to attack Philadelphia, so that the expected support up the Hudson never properly materialized. Burgoyne lost nearly 1,000 men at Bennington, fought at Freeman’s Farm and Bemis Heights, and surrendered to Gates on 17 October 1777. Vergennes decided for an alliance when the news reached him in December.",
        evidence: "fact",
        studies: ["saratoga"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Who was to blame",
        text: "The American Battlefield Trust points to confusion over Howe’s role and the contentious relations between the two generals. The State Department’s account gives Saratoga a decisive diplomatic weight, and Burgoyne received Clinton’s letter promising a diversion only after the fighting at Freeman’s Farm.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [saratogaAbt, frenchAlliance],
  },
  "danubian-campaign-of-1789": {
    summary:
      "The Austro-Russian campaign of 1789 against the Ottomans on the Danube, marked by the victories of Focșani and the Rymnik.",
    narrative: [
      {
        title: "Coburg and Suvorov",
        text: "Friedrich Josias of Coburg took the fortress of Chotin in 1788 and in 1789 fought in close cooperation with the Russians under Suvorov. Their victories came at Focșani on 1 August and on the Rymnik on 22 September. The Turkish encyclopedia’s biography of Koca Yusuf Pasha records the heavy rout at the crossing of the Rymnik and on the Boza, and the surrender of Ismail on 11 October and Bender on 14 November.",
        evidence: "fact",
        studies: ["rymnik"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Whose victory",
        text: "The German biographies credit Coburg with beating a nearly fivefold superior force at Martinești, as they call the Rymnik, though Suvorov fought beside him; the Ottoman account measures the defeat by a situation that no change of grand vizier could repair. The disparity of numbers given in the German account should be treated with caution.",
        evidence: "uncertainty",
        studies: ["rymnik"],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [coburg, yusufPasa],
  },
  "vicksburg-campaign": {
    summary:
      "Grant’s campaign of 1863 against Vicksburg, the Confederate stronghold on the Mississippi, which ended in surrender on 4 July.",
    narrative: [
      {
        title: "The river fortress",
        text: "Vicksburg first came under Union naval attack in early 1862. Pemberton had over a year to prepare a ring of earthworks with more than 170 guns. Having cut the city off from Jackson, Grant ordered assaults from 19 May 1863 and on the 23rd turned to siege operations, which continued until Pemberton’s surrender on 4 July. Port Hudson then had no choice but to surrender, and large operations in Mississippi ceased.",
        evidence: "fact",
        studies: ["vicksburg"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "How important was it",
        text: "Ballard notes that historians have debated Vicksburg’s military significance, but that Davis and Lincoln both decided the town was important and the two sides fought furiously over it. Its surrender also weighed on civilian morale: after it many pro-Confederate Mississippians realized that the war was lost.",
        evidence: "interpretation",
        studies: ["vicksburg"],
        refs: [{ source: 1 }],
      },
    ],
    sources: [vicksburgNps, mississippiCivilWar],
  },
  "gettysburg-campaign": {
    summary:
      "Lee’s invasion of the North in June 1863 and his defeat at Gettysburg on 1–3 July.",
    narrative: [
      {
        title: "Into Pennsylvania",
        text: "After Chancellorsville Lee decided to invade the North, to revive Confederate morale and relieve pressure on Vicksburg. Ewell advanced through Maryland as far as Chambersburg, and Early reached York and destroyed bridges. The Army of the Potomac followed east of the mountains under orders to protect Washington. Lee reported that he had not meant to fight a general battle so far from his base unless attacked, but having come unexpectedly on the whole Federal army could not easily withdraw through the mountains with his trains. On 4 July he began his retreat, leaving over 51,000 dead, wounded or missing on both sides.",
        evidence: "fact",
        studies: ["gettysburg"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "Lee’s own account",
        text: "Lee’s report of January 1864 is the commander’s explanation of a defeat, and its claim that a general battle was unintended helps account for why he fought where he did. The National Park Service’s overview, by contrast, is built around the battlefield and the town left in shambles.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [gettysburgNps, leeReport],
  },
  "atlanta-campaign": {
    summary:
      "Sherman’s advance on Atlanta from May to September 1864, against Johnston and then Hood, which helped secure Lincoln’s re-election.",
    narrative: [
      {
        title: "Manoeuvre and assault",
        text: "Johnston took strong positions around Dalton with 53,800 officers and men, soon reinforced by 15,000, and waited to be attacked. Sherman repeatedly sent McPherson’s army round his left flank against the Western & Atlantic Railroad, beginning at Rocky Face Ridge, from which Johnston retreated on 12 May. After Hood took command he attacked unsuccessfully at Peach Tree Creek on 20 July. Battle casualties for the four months came to about 34,500 for the North and 35,000 for the South.",
        evidence: "fact",
        studies: ["atlanta-campaign"],
        refs: [{ source: 0 }],
      },
      {
        title: "Politics",
        text: "The American Battlefield Trust writes that Sherman’s capture of Atlanta all but assured Lincoln’s re-election two months later and set the stage for the March to the Sea. It describes Johnston’s plan as one of waiting to be attacked, and Hood’s first attack as a failure, without settling which approach served the South better.",
        evidence: "interpretation",
        studies: [],
        refs: [{ source: 0 }],
      },
    ],
    sources: [atlantaAbt],
  },
  "campaign-of-1870": {
    summary:
      "The German campaign against the French Army of Châlons in 1870, ending in the surrender of Napoleon III at Sedan.",
    narrative: [
      {
        title: "The march to relieve Metz",
        text: "After Mars-la-Tour and Gravelotte shut Bazaine in Metz, MacMahon’s was the only French army left in the field. Instead of covering Paris, with the ailing emperor beside him, he marched north toward the Belgian border to turn and relieve Metz, because retreat would have doomed the dynasty. The Germans knew his intentions and moved to intercept. After clashes at Nouart, Beaumont and Bazeilles he retired to Sedan, a small fortress that could not feed his army, and was encircled.",
        evidence: "fact",
        studies: ["sedan"],
        refs: [{ source: 0 }],
      },
      {
        title: "Three commanders in a day",
        text: "MacMahon was wounded at 7 a.m. on 1 September. Ducrot ordered a retreat toward Mézières; Wimpffen then produced a directive from the war minister claiming command and countermanded him. Napoleon III decided to give himself up to spare his generals the humiliation of surrender. Whether Ducrot’s retreat could have saved the army cannot be settled from the sources used here.",
        evidence: "uncertainty",
        studies: ["sedan"],
        refs: [{ source: 1 }],
      },
    ],
    sources: [sedanBr, sedanNapoleon],
  },
  "adwa-campaign": {
    summary:
      "The Italian attempt to impose a protectorate on Ethiopia, ended by Menilek II’s victory at Adwa on 1 March 1896.",
    narrative: [
      {
        title: "From Wichale to Adwa",
        text: "Article XVII of the Treaty of Wichale of 1889 was read by Menilek as allowing Ethiopia to use the Italian government in foreign affairs and by Crispi as requiring it, which implied a protectorate. Menilek repudiated it in 1893. Baratieri crossed the frontier in 1895 and occupied Adigrat, Mekele, Adwa and Axum. With supplies short he hesitated before a force of more than 100,000; Crispi’s furious telegram of 28 February pressed him into advancing with 14,500 men, and his columns fought almost in isolation from each other.",
        evidence: "fact",
        studies: ["adwa"],
        refs: [{ source: 0 }, { source: 1 }],
      },
      {
        title: "The cost",
        text: "Britannica estimates more than 6,000 killed on the Italian side, slightly over half of them Italians, and 3,000 to 4,000 prisoners, and more than 5,000 Ethiopians killed and 8,000 wounded. The Italian biographical dictionary places responsibility on the offensive argument of Arimondi at the commanders’ meeting and on the lack of coordination in the field, a focus on Italian decisions that leaves Menilek’s own management of the campaign in the background.",
        evidence: "interpretation",
        studies: ["adwa"],
        refs: [{ source: 0 }, { source: 1 }],
      },
    ],
    sources: [adwaBr, baratieri],
  },
  "baltic-fleet-voyage": {
    summary:
      "The voyage of Russia’s Baltic Fleet around the world in 1904–1905 and its destruction at Tsushima.",
    narrative: [
      {
        title: "Seven months at sea",
        text: "Russia sent the Baltic Fleet under Rozhestvensky to join the Pacific Squadron. It sailed from Liepāja on 15 October 1904; off the Dogger Bank it fired on British trawlers in the belief that they were Japanese torpedo boats, and only a prompt apology avoided war. At Nossi-Bé Rozhestvensky learned that Port Arthur had fallen and proposed turning back, but he went on, joined by reinforcements at Cam Ranh Bay, and made for Vladivostok through the Tsushima Strait, where Tōgō attacked on 27 May 1905.",
        evidence: "fact",
        studies: ["tsushima"],
        refs: [{ source: 0 }],
      },
      {
        title: "Watching the fleet",
        text: "Japanese diplomatic archives show the effort to track the fleet’s progress through missions abroad, including reports drawn from foreign newspapers. Britannica reports two-thirds of the Russian fleet sunk, six ships captured, four reaching Vladivostok and six taking refuge in neutral ports; its dating of the battle to 27–29 May differs from the 27–28 May of the catalog.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [tsushimaBr, jacarTsushima],
  },
  "northwestern-campaign-of-1953-1954": {
    summary:
      "The French and Viet Minh campaign of 1953–1954 in north-western Vietnam, ended by the fall of Dien Bien Phu.",
    narrative: [
      {
        title: "Navarre’s plan",
        text: "General Navarre, appointed in May 1953, was sent to find an honourable way out, bringing the Viet Minh to negotiate after weakening them. His plan kept the corps on the defensive in the north for the first year. Operation Castor dropped paratroops at Dien Bien Phu on 20 November 1953. Giap saw in a garrison dependent on air supply the chance of a major victory. On 7 May 1954, after 56 days of fighting, General de Castries ordered the fighting to stop.",
        evidence: "fact",
        studies: ["dien-bien-phu"],
        refs: [{ source: 0 }],
      },
      {
        title: "Geneva",
        text: "In the wake of the defeat, French and Vietnamese representatives met with the United States and China at Geneva. The State Department calls it a four-month siege where the French account counts 56 days of fighting; the difference probably lies in whether the months before the attack of March are included. Its framing through Eisenhower’s falling dominoes reflects American concerns.",
        evidence: "uncertainty",
        studies: [],
        refs: [{ source: 1 }, { source: 0 }],
      },
    ],
    sources: [dbpDefense, dbpState],
  },
};
