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
      ["334 BCE", "Crossing into Asia; battle at the Granicus"],
      ["333 BCE", "Battle of Issus"],
      ["332 BCE", "Sieges of Tyre and Gaza; Egypt occupied"],
      ["331 BCE", "Battle of Gaugamela"],
      ["330 BCE", "Persepolis burned; Darius III killed by his own officers"],
      ["326 BCE", "Battle at the Hydaspes; the army refuses to go farther"],
      ["323 BCE", "Alexander dies at Babylon"],
    ),
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
      ["1204", "Fourth Crusade sacks Constantinople"],
      ["1291", "Mamluks take Acre, the last major crusader stronghold"],
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
      ["1796–1797", "Bonaparte's Italian campaign; Mantua surrenders"],
      ["1798–1799", "Expedition to Egypt and Syria"],
      ["November 1799", "Bonaparte seizes power in the coup of 18 Brumaire"],
      ["June 1800", "Battle of Marengo"],
      ["March 1802", "Peace of Amiens"],
    ),
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
      ["1814", "Napoleon abdicates"],
      ["1815", "Hundred Days; Waterloo"],
    ),
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
        "December 1914",
        "Serbian counter-offensive on the Kolubara drives the Austro-Hungarian army out of Serbia",
      ],
      ["1915", "Gallipoli campaign"],
      [
        "October–November 1915",
        "German, Austro-Hungarian and Bulgarian invasion of Serbia; the Serbian army retreats through Montenegro and Albania",
      ],
      ["1916", "Verdun and the Somme"],
      ["1917", "United States enters the war; revolutions in Russia"],
      ["1918", "German spring offensives; Allied Hundred Days"],
      [
        "September 1918",
        "Allied breakthrough at Dobro Pole; Bulgaria signs an armistice",
      ],
      ["By 1 November 1918", "All of pre-war Serbia is liberated"],
      ["11 November 1918", "Armistice"],
    ),
  },
  ww2: {
    participants: [
      "Allied powers, including the United Kingdom, the Soviet Union, the United States, China and France",
      "Axis powers, including Germany, Japan and Italy",
    ],
    geography: "Europe, North Africa, the Atlantic, Asia and the Pacific.",
    developments: t(
      ["September 1939", "Germany invades Poland"],
      ["June 1941", "Germany invades the Soviet Union"],
      [
        "1941–1945",
        "Holocaust: Nazi Germany and its collaborators murder six million Jews",
      ],
      ["December 1941", "Japan attacks Pearl Harbor"],
      ["June 1942", "Battle of Midway"],
      ["November 1942–February 1943", "Stalingrad encirclement and surrender"],
      ["June 1944", "Normandy landings"],
      ["May 1945", "Germany surrenders"],
      ["August–September 1945", "Atomic bombings; Japan surrenders"],
    ),
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
