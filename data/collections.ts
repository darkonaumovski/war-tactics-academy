import type { Battle, Collection } from "../lib/types";
import { formatYear, inCollection } from "../lib/logic";
// Collection prose is a synthesis of the linked studies, which hold the read
// sources; it adds no claim that a member study does not support.
export const collections: Collection[] = [
  {
    slug: "alexander",
    title: "Alexander’s campaign",
    summary:
      "Alexander’s invasion of the Persian Empire, from his first battle in Asia to the river crossing in the Punjab.",
    introduction:
      "These studies follow Alexander’s army from the Granicus to the Hydaspes. The war changed character as it moved east: pitched battles against satraps and a royal army, sieges of fortified coastal cities, a defended mountain pass, years of fighting against revolt in Bactria and Sogdiana, and finally a river crossing against an army with elephants.",
    arc: [
      {
        text: "Darius III had only recently come to power and faced revolts elsewhere, so no royal army met the invasion in 334 BCE. The satraps of western Asia Minor were beaten at the Granicus, and Sardis and Ephesus fell without a fight.",
        studies: ["granicus"],
      },
      {
        text: "Darius then raised a royal army and came down behind Alexander on the Cilician coast, and was defeated at Issus, which left Phoenicia and Egypt largely unprotected. Persian sea power still threatened Alexander’s communications, and its crews came largely from the Phoenician cities: Tyre fell to a mole, a fleet gathered from defecting cities and a seaborne assault, and Gaza to a siege that opened the road to Egypt.",
        studies: ["issus", "tyre", "gaza-332-bce"],
      },
      {
        text: "At Gaugamela in 331 BCE Alexander defeated Darius again, in a battle that decided the fate of the Achaemenid empire. Early in 330 he turned the defended Persian Gate on the road to Persepolis, where the palace was later burned.",
        studies: ["gaugamela", "persian-gate"],
      },
      {
        text: "In the north-east the war became a struggle against revolt. A victory on the Jaxartes did not end the Sogdian rising under Spitamenes, and the fighting went on into 327 BCE, with forts stormed, populations resettled and countryside ravaged. The capture of the Sogdian Rock ended in a marriage into the family of Oxyartes, which Livius presents as a political necessity.",
        studies: ["jaxartes", "sogdian-rock"],
      },
      {
        text: "In 326 BCE Alexander crossed the flooded Hydaspes by deception and defeated Porus. Soon afterwards the army refused to advance beyond the Hyphasis and Alexander turned back; Porus remained as a client ruler on the eastern border.",
        studies: ["hydaspes"],
      },
    ],
    wars: ["alexander"],
    courseSlugs: [],
  },
  {
    slug: "rome",
    title: "Rome, Republic to Empire",
    summary:
      "Roman war from Hannibal’s victory at Cannae to the coalition that turned Attila out of Gaul.",
    introduction:
      "These studies span nearly seven centuries of Roman war. Rome won most of them, but the collection keeps its great defeats as well: Cannae, Carrhae, Teutoburg and Adrianople, where an emperor died with his army. Several also record what conquest meant for the conquered, from the plundering of Epirus to the destruction of Jerusalem.",
    arc: [
      {
        text: "Against Carthage and Macedon the Republic showed that it could lose battles and still win wars. After Cannae, where Hannibal encircled a much larger Roman army, Rome refused to ransom its prisoners and kept fighting; at Zama, Scipio and Massinissa’s Numidian cavalry defeated Hannibal and ended the Second Punic War. In the east, Cynoscephalae broke Philip V’s phalanx, and Pydna ended the Antigonid kingdom; Macedonia became a province in 148 BCE.",
        studies: ["cannae", "zama", "cynoscephalae", "pydna"],
      },
      {
        text: "In the last century of the Republic, the generals who led its wars also fought for power within it. Crassus’s death at Carrhae fixed the Euphrates as a boundary with Parthia and left Pompey and Caesar as the remaining triumvirs. Caesar’s siege lines at Alesia faced the defenders and a relief army at once; at Pharsalus he defeated Pompey, and Livius calls the battle the end of the Republic. Octavian’s victory at Actium left him, as Augustus, ruling alone for over forty years.",
        studies: ["carrhae", "alesia", "pharsalus", "actium"],
      },
      {
        text: "The Empire’s wars were fought on its frontiers and in its provinces. Three legions under Varus were destroyed in the Teutoburg ambush, and Tiberius later chose not to occupy Germania east of the Rhine. Suetonius Paulinus crushed Boudica’s revolt at Watling Street. In 70 CE Titus besieged and starved Jerusalem; the city and its Temple were destroyed, and Jews throughout the empire had to pay a special tax.",
        studies: ["teutoburg", "watling-street", "jerusalem-70"],
      },
      {
        text: "In the late Empire, civil war and invasion overlapped. Constantine’s victory at the Milvian Bridge gave him the West, and he later ruled the whole empire from Constantinople. At Adrianople the emperor Valens attacked before his army had concentrated and was killed, and a large part of the eastern field army was lost. In 451 Aetius’s coalition with the Visigoths and other peoples settled in Gaul forced Attila out of Gaul, though Attila invaded Italy the next year.",
        studies: ["milvian-bridge", "adrianople", "catalaunian-plains"],
      },
    ],
    wars: [
      "punic",
      "macedonian-wars",
      "roman-parthian",
      "gallic",
      "roman-civil-wars",
      "roman-germanic",
      "roman-britain",
      "jewish-roman",
      "tetrarchy-civil-wars",
      "gothic-war",
      "hunnic-invasions",
    ],
    courseSlugs: ["classical-warfare"],
  },
  {
    slug: "napoleon",
    title: "Napoleon in command",
    summary:
      "Napoleon’s battles and campaigns, from the siege of Toulon to Waterloo.",
    introduction:
      "These studies follow Napoleon’s command from the siege of Toulon, after which he was promoted to brigadier general, to Waterloo. They cover his victories and his defeats, and the campaigns in which marching, disease and supply failure cost his armies more than battle did.",
    arc: [
      {
        text: "After Toulon and 13 Vendémiaire, when his guns broke the royalist columns marching on the Convention, Bonaparte became the government’s adviser on military matters, and in March 1796 he was given command of the Army of Italy. Within three weeks he had separated the Austrian and Sardinian armies and forced Piedmont out of the war. Lodi opened the road to Milan; at Castiglione, Arcole and Rivoli he beat the Austrian armies sent to relieve Mantua, which then surrendered, and peace preliminaries followed at Leoben.",
        studies: [
          "toulon",
          "vendemiaire",
          "montenotte",
          "lodi",
          "castiglione",
          "arcole",
          "rivoli",
        ],
      },
      {
        text: "In Egypt the Battle of the Pyramids opened the road to Cairo, but Nelson destroyed the French fleet in Aboukir Bay and left the army cut off. The Syrian venture ended at Acre, with plague in the army. After defeating an Ottoman landing at Aboukir, Bonaparte left Egypt secretly and seized power in Paris; as First Consul he won at Marengo, which began the end of the Second Coalition.",
        studies: ["pyramids", "acre", "aboukir-1799", "marengo"],
      },
      {
        text: "From 1805 to 1809 Napoleon defeated Austria, Prussia and Russia in turn. Mack’s army capitulated at Ulm and the allies were beaten at Austerlitz; Jena–Auerstedt began the conquest of Prussia, and after the butchery of Eylau, Friedland led to the Treaties of Tilsit. In 1809 Austria fought again: Napoleon recovered a dispersed position around Eckmühl and took Vienna, suffered a reverse at Aspern-Essling, and won at Wagram.",
        studies: [
          "ulm",
          "austerlitz",
          "jena-auerstedt",
          "eylau",
          "friedland",
          "eckmuhl",
          "aspern-essling",
          "wagram",
        ],
      },
      {
        text: "In 1812 the Russian armies withdrew from Smolensk and fought before Moscow at Borodino, then withdrew again. Napoleon entered Moscow, but the Russians would not come to terms. After Maloyaroslavets the army retreated over the devastated road it had come by and crossed the Berezina, and only a few broken thousands recrossed the Neman. Long marches and supply failures, more than combat, had taken a heavy toll even before Borodino, and the cavalry lost in Russia could not be replaced.",
        studies: ["smolensk-1812", "borodino", "maloyaroslavets", "berezina"],
      },
      {
        text: "In 1813 Napoleon won at Lützen and Bautzen but lacked the cavalry to pursue. Austria joined the Allies, who agreed to avoid battle with Napoleon himself and attack his subordinates; their defeats undid his victory at Dresden. Leipzig ended French power east of the Rhine, and after breaking through at Hanau Napoleon had, for the second year running, lost an army.",
        studies: ["lutzen-1813", "bautzen", "dresden", "leipzig", "hanau"],
      },
      {
        text: "In France in 1814 he defeated Blücher’s strung-out corps in the Six Days, but gained only time; after La Rothière, Laon and Arcis-sur-Aube Paris capitulated and he abdicated. Returning in 1815, he struck first in Belgium and beat the Prussians at Ligny, but they withdrew toward Wavre and reached Waterloo two days later. The Hundred Days ended with the Allied occupation of Paris and Napoleon’s final exile.",
        studies: [
          "la-rothiere",
          "six-days-campaign",
          "laon",
          "arcis-sur-aube",
          "ligny",
          "waterloo",
        ],
      },
    ],
    wars: ["french-revolutionary", "napoleonic"],
    courseSlugs: ["napoleonic-warfare"],
  },
  {
    slug: "ww1",
    title: "The First World War",
    summary:
      "Engagements of the First World War, from the opening campaigns of 1914 to the collapse of the Central Powers in 1918.",
    introduction:
      "For now the collection is strongest in the Balkans: alongside Tannenberg and Verdun it holds the whole Serbian Front, which also has a collection of its own. Together they show the opening battles of 1914, the attrition of Verdun, and a secondary front that in 1918 forced Bulgaria out of the war.",
    arc: [
      {
        text: "In August 1914 the war opened with battles of movement on its eastern fronts. German forces encircled the Russian Second Army at Tannenberg but could not turn the victory into a strategic one. Serbia defeated the first Austro-Hungarian invasion on Cer and, after giving up Belgrade, drove the third out of the country on the Kolubara.",
        studies: ["tannenberg", "cer", "kolubara"],
      },
      {
        text: "In the autumn of 1915 the Central Powers, now joined by Bulgaria, attacked Serbia from the north and the east. The Serbian army escaped encirclement but was driven out of the country, and the Central Powers opened the Danube route and the railway to Constantinople. The army, the government and refugees crossed the winter mountains to the Adriatic and were evacuated to Corfu.",
        studies: ["invasion-of-serbia-1915", "serbian-retreat-1915"],
      },
      {
        text: "In 1916 Verdun became a prolonged battle around fortified ground; its losses, added to those of the Somme, created a German manpower crisis, and in France it became the national symbol of the war. In Macedonia the rebuilt Serbian army took Kajmakčalan, and the Allies took Monastir, before the front fell quiet for nearly two years.",
        studies: ["verdun", "kajmakcalan", "monastir-1916"],
      },
      {
        text: "In September 1918 Serbian and French divisions broke the Bulgarian line at Dobro Pole, and within two weeks Bulgaria left the war. Serbian armies freed Serbia within five weeks, and on 1 December 1918 the Kingdom of Serbs, Croats and Slovenes was proclaimed in Belgrade.",
        studies: ["dobro-pole", "liberation-of-serbia-1918"],
      },
    ],
    wars: ["ww1"],
    courseSlugs: ["industrial-world-wars", "serbian-front"],
    inProgress:
      "The Western Front from the Marne to Amiens, Gallipoli, Jutland, the Brusilov offensive, Caporetto and Megiddo are planned for the next stage of work. This arc will be rewritten when they are added.",
  },
  {
    slug: "serbian-front",
    title: "The Serbian Front, 1914–1918",
    summary:
      "Serbia’s war from the victories of 1914 through invasion, retreat and occupation to liberation in 1918.",
    introduction:
      "These studies follow the Serbian army from its victories of 1914, through the invasion and retreat of 1915, to the Macedonian front and the breakthrough of 1918. They also record what the war did to civilians: killings during the 1914 invasions, epidemic, occupation and the reprisals that crushed the Toplica Uprising.",
    arc: [
      {
        text: "Serbia planned to stay on the defensive until the direction of the main invasion became clear. On Cer in August 1914 Stepanović’s Second Army struck the invaders’ flank and drove them back across the Drina; Austro-Hungarian troops had killed civilians in Šabac and across Mačva. Under pressure from its allies Serbia then crossed into Syrmia and, with Montenegro, toward Sarajevo, while a second invasion was held on the Drina in weeks of mountain fighting in which its artillery ammunition ran short.",
        studies: ["cer", "syrmia-1914", "romanija-1914", "drina-1914"],
      },
      {
        text: "In November a third invasion forced the Serbs to give up Belgrade. Their armies counterattacked from Suvobor and drove the invaders out of Serbia on the Kolubara, gaining a long respite. In the first months of 1915 an epidemic killed many soldiers, wounded men, civilians and prisoners.",
        studies: ["kolubara"],
      },
      {
        text: "In October 1915 heavy artillery let the Central Powers cross the Sava and the Danube and take Belgrade, and Bulgaria joined the attack from the east. The Serbian army escaped encirclement but was driven out of the country. With the government, the king and refugees it crossed the mountains of Montenegro and Albania to the Adriatic and was evacuated to Corfu, while the Montenegrin army, which held at Mojkovac, covered the withdrawal at heavy cost.",
        studies: [
          "belgrade-1915",
          "invasion-of-serbia-1915",
          "serbian-retreat-1915",
          "mojkovac",
        ],
      },
      {
        text: "Rebuilt on Corfu, the army sailed to the Salonika front in 1916, took the summit of Kajmakčalan and joined the Allied advance that took Monastir, the first Serbian town to be liberated. In occupied Serbia the Bulgarian authorities suppressed Serbian schools, names and the Cyrillic alphabet; attempts to conscript young men set off the Toplica Uprising of 1917, which was crushed with mass reprisals against civilians.",
        studies: ["kajmakcalan", "monastir-1916", "toplica-uprising"],
      },
      {
        text: "In September 1918 Serbian and French divisions broke the Bulgarian line at Dobro Pole, and Bulgaria left the war within two weeks. Serbian armies and French cavalry freed Serbia within five weeks, and on 1 December the Kingdom of Serbs, Croats and Slovenes was proclaimed. The museum catalogue cited in the study notes that in proportion to its population Serbia suffered the greatest demographic loss of any belligerent.",
        studies: ["dobro-pole", "liberation-of-serbia-1918"],
      },
    ],
    campaigns: [
      "serbian-campaign-of-1914",
      "serbian-campaign-of-1915",
      "occupation-of-serbia",
      "macedonian-front",
    ],
    courseSlugs: ["serbian-front"],
  },
  {
    slug: "ww2",
    title: "The Second World War",
    summary:
      "Engagements of the Second World War in Europe, North Africa and the Pacific.",
    introduction:
      "The collection currently holds five studies, from Midway in June 1942 to the Normandy campaign of 1944. They show the turning of the war in three theatres at once, and the opening of the second front in the west.",
    arc: [
      {
        text: "In 1942 the war turned in three theatres. At Midway American carrier forces, guided by intelligence that identified the objective, defeated Japan’s carrier striking force; the result altered the carrier balance but did not end the Pacific War. In Egypt, Second El Alamein was the British Army’s first clear, decisive victory over the Axis. At Stalingrad, urban fighting ended in a Soviet encirclement and the destruction of the trapped German Sixth Army.",
        studies: ["midway", "el-alamein", "stalingrad"],
      },
      {
        text: "Kursk, in July 1943, was the last major German offensive on the Eastern Front, and its failure was followed by major Soviet counteroffensives, at an immense human cost to both sides. In June 1944 the Allied landings in Normandy opened the second front that they considered essential to defeating Germany; the campaign opened the way to the liberation of France and the advance into Germany.",
        studies: ["kursk", "normandy"],
      },
    ],
    wars: ["ww2"],
    courseSlugs: ["industrial-world-wars"],
    inProgress:
      "Poland and France, the Battle of Britain, Barbarossa and Moscow, the Pacific war from Pearl Harbor to Okinawa, Bagration, Market Garden, the Bulge and Berlin are planned for later stages of work. This arc will be rewritten when they are added.",
  },
];
export const collectionBattles = (c: Collection, battles: Battle[]) =>
  battles.filter((b) => inCollection(c, b));
// "334–326 BCE", "216 BCE – 451 CE" or "1793–1815"; catalog order is by date.
export function collectionPeriod(battles: Battle[]) {
  if (!battles.length) return "";
  const first = battles[0].year;
  const last = battles[battles.length - 1].year;
  if (first === last) return formatYear(first).replace(/ CE$/, "");
  if (first < 0 && last < 0) return `${Math.abs(first)}–${formatYear(last)}`;
  if (first < 0) return `${formatYear(first)} – ${formatYear(last)}`;
  return `${first}–${last}`;
}
