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
    route: true,
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
      "The collection follows the war from the battles of movement of 1914, at Tannenberg, on the Marne and at Ypres, through the deadlock of 1915 to 1917: gas at Ypres, Gallipoli, Verdun, the Somme, Jutland, the Brusilov offensive, Caporetto, Passchendaele and Cambrai. It ends with the offensives of 1918, from Operation Michael and Amiens to Megiddo and the Meuse-Argonne, and includes the whole Serbian Front, which also has a collection of its own. Together they show a war of movement turning into trench warfare, armies learning at great cost to combine artillery, infantry, tanks and aircraft, and the fronts of the Central Powers giving way one after another in the autumn of 1918.",
    arc: [
      {
        text: "In August 1914 the war opened with battles of movement on its eastern fronts. German forces encircled the Russian Second Army at Tannenberg but could not turn the victory into a strategic one. Serbia defeated the first Austro-Hungarian invasion on Cer; a Serbian crossing into Syrmia was aborted, an offensive with Montenegro toward Sarajevo was turned back, and a second invasion was held on the Drina. After giving up Belgrade, the Serbian army drove the third invasion out of the country on the Kolubara.",
        studies: [
          "tannenberg",
          "cer",
          "syrmia-1914",
          "romanija-1914",
          "drina-1914",
          "kolubara",
        ],
      },
      {
        text: "In the west, a French counter-stroke from Paris struck the open flank of the German right wing on the Marne in September 1914 and forced it back to the Aisne, ending German hopes of a quick victory. Each side then tried to turn the other's northern flank; at Ypres in October and November the Allies held a salient against repeated German attacks, and both sides settled into the trench warfare that marked the rest of the war on the Western Front.",
        studies: ["marne-1914", "first-ypres"],
      },
      {
        text: "In 1915 neither new weapons nor new fronts broke the deadlock. At Ypres in April the Germans released chlorine from cylinders, the first large-scale gas attack on the Western Front; it opened a gap that they were not prepared to exploit. At Gallipoli, Allied landings meant to open the Dardanelles were held to shallow beachheads by Ottoman troops on the heights and ended in evacuation.",
        studies: ["second-ypres", "gallipoli"],
      },
      {
        text: "In the autumn of 1915 the Central Powers, now joined by Bulgaria, attacked Serbia from the north and the east and took Belgrade. The Serbian army escaped encirclement but was driven out of the country, and the Central Powers opened the Danube route and the railway to Constantinople. The army, the government and refugees crossed the winter mountains to the Adriatic and were evacuated to Corfu, while the Montenegrin army, which held at Mojkovac, covered the withdrawal.",
        studies: [
          "belgrade-1915",
          "invasion-of-serbia-1915",
          "mojkovac",
          "serbian-retreat-1915",
        ],
      },
      {
        text: "1916 was the year of attrition. Verdun became a prolonged battle around fortified ground and, in France, the national symbol of the war. On the Somme the British Army suffered its bloodiest day on 1 July and fought on into November without a breakthrough, while the German army suffered losses it could not afford; together the two battles created a German manpower crisis. At Jutland the only clash of the battle fleets cost the British more ships but left their command of the North Sea unchanged.",
        studies: ["verdun", "somme", "jutland"],
      },
      {
        text: "In the east, Brusilov's attack on a broad front in June broke the Austro-Hungarian line and virtually ended the Habsburg military effort, until German reserves stopped it; Russian losses were also enormous. In Macedonia the rebuilt Serbian army took Kajmakčalan, and the Allies took Monastir, before that front fell quiet for nearly two years; in occupied Serbia the Toplica Uprising of 1917 was crushed with very heavy civilian losses. In October 1917 an Austro-German offensive at Caporetto, using infiltration, broke the Italian front and drove the Italians back to the Piave, where they held.",
        studies: [
          "brusilov-offensive",
          "kajmakcalan",
          "monastir-1916",
          "toplica-uprising",
          "caporetto",
        ],
      },
      {
        text: "In Flanders in 1917 Haig sought a breakthrough from Ypres to the Belgian coast and its submarine bases. Rain and shellfire turned the battlefield into a swamp; Plumer's limited bite-and-hold attacks won ground where deeper objectives failed, and the Canadians took the Passchendaele ridge in November, far short of the coast. At Cambrai massed tanks, an unregistered barrage and aircraft broke deep into the Hindenburg Line, but there were no reserves to exploit the gap, and a German counter-stroke by infiltrating storm troops retook most of the ground.",
        studies: ["passchendaele", "cambrai-1917"],
      },
      {
        text: "With Russia out of the war, Ludendorff attacked the British in March 1918 before American troops arrived in strength. Operation Michael made the deepest advance on the Western Front since 1914 but took nothing of strategic value, and the offensives that followed used up Germany's best troops. The Allies placed Foch in coordinating command, and on 8 August a surprise all-arms attack at Amiens broke the German front; Ludendorff called it the black day of the German army, and it opened the Hundred Days that ended in the armistice.",
        studies: ["operation-michael", "amiens-1918"],
      },
      {
        text: "In September 1918 Serbian and French divisions broke the Bulgarian line at Dobro Pole, and within two weeks Bulgaria left the war. Serbian armies freed Serbia within five weeks, and on 1 December 1918 the Kingdom of Serbs, Croats and Slovenes was proclaimed in Belgrade.",
        studies: ["dobro-pole", "liberation-of-serbia-1918"],
      },
      {
        text: "In Palestine, also in September, Allenby led the Ottomans to expect an attack across the Jordan, broke in on the coast and sent his cavalry deep into their rear at Megiddo; the Ottoman armies there were destroyed, Damascus fell on 1 October and the Ottoman Empire signed an armistice at Mudros at the end of the month. On the Western Front the American First Army attacked between the Meuse and the Argonne on 26 September as part of Foch's general offensive; it ground forward through October, broke the German lines in November and reached the heights above Sedan before the armistice of 11 November.",
        studies: ["megiddo-1918", "meuse-argonne"],
      },
    ],
    wars: ["ww1"],
    courseSlugs: ["industrial-world-wars", "serbian-front"],
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
    route: true,
  },
  {
    slug: "ww2",
    title: "The Second World War",
    summary:
      "Engagements of the Second World War in Europe, North Africa and the Pacific.",
    introduction:
      "The collection currently holds twenty-one studies, from the invasion of Poland in September 1939 to Iwo Jima in March 1945, with the Battle of the Atlantic running through the whole war. They show Germany's victories of 1939 and 1940, its failure over Britain and before Moscow, Japan's offensive of 1941–1942 from Pearl Harbor to Singapore and its first check in the Coral Sea, the turning of the war on Guadalcanal, in the Atlantic and in three other theatres in 1942 and 1943, the Allied offensives of 1944 in Burma, in Normandy and in Belorussia, and the last German and Japanese efforts at Arnhem, in the Ardennes, at Leyte Gulf and on Iwo Jima. They also record the war against civilians that began with the invasion of Poland, became genocide in the east and, in Singapore, brought the massacre of Chinese civilians.",
    arc: [
      {
        text: "In September 1939 Germany invaded Poland from three sides and the Soviet Union from the east; Poland was defeated within weeks and partitioned, and German forces shot Polish civilians, clergy, intellectuals and Jews from the first weeks. In May 1940 an armoured thrust through the Ardennes broke the French front at Sedan and reached the Channel, cutting the Allied armies in two; the British escaped from Dunkirk, and France signed an armistice in June. Over southern England in the summer and autumn of 1940, RAF Fighter Command, directed by its air defence system, denied the Luftwaffe the air superiority needed for an invasion.",
        studies: ["poland-1939", "france-1940", "battle-of-britain"],
      },
      {
        text: "In June 1941 Germany invaded the Soviet Union in a war of annihilation. Its armies won vast encirclements, but the Red Army raised new armies, and by December the Germans had been stopped before Moscow. Behind the front the Einsatzgruppen and other units began the Holocaust by shooting, and Soviet prisoners of war died in vast numbers through deliberate starvation.",
        studies: ["barbarossa"],
      },
      {
        text: "In October 1941 the Germans renewed their drive on Moscow. After new encirclements, mud and then frost stopped them within sight of the city, and on 5–6 December a Soviet counteroffensive, with fresh troops from the east, drove them back: the first major German defeat of the war. On 7 December Japan struck the US Pacific Fleet at Pearl Harbor, crippling its battleships but missing its carriers and bringing a united United States into the war. Its army advanced down the Malay Peninsula and took Singapore in February 1942, followed by the massacre of Chinese civilians in the Sook Ching. In May, in the Coral Sea, the first battle fought entirely by carrier aircraft turned back the invasion of Port Moresby.",
        studies: ["moscow-1941", "pearl-harbor", "singapore-1942", "coral-sea"],
      },
      {
        text: "In 1942 the war turned in three theatres. At Midway American carrier forces, guided by intelligence that identified the objective, defeated Japan’s carrier striking force; the result altered the carrier balance but did not end the Pacific War. In Egypt, Second El Alamein was the British Army’s first clear, decisive victory over the Axis. At Stalingrad, urban fighting ended in a Soviet encirclement and the destruction of the trapped German Sixth Army.",
        studies: ["midway", "el-alamein", "stalingrad"],
      },
      {
        text: "On Guadalcanal, from August 1942 to February 1943, American forces held the island's airfield through a series of land, sea and air battles until the Japanese evacuated it; with Midway it marked the turning point of the Pacific War. In the Atlantic, the longest campaign of the war, the U-boat crisis peaked in March 1943; in May very-long-range aircraft, escort carriers, support groups, radar and direction-finding defeated the wolf packs, and Dönitz withdrew them from the North Atlantic.",
        studies: ["guadalcanal", "battle-of-the-atlantic"],
      },
      {
        text: "Kursk, in July 1943, was the last major German offensive on the Eastern Front, and its failure was followed by major Soviet counteroffensives, at an immense human cost to both sides. In June 1944 the Allied landings in Normandy opened the second front that they considered essential to defeating Germany; the campaign opened the way to the liberation of France and the advance into Germany.",
        studies: ["kursk", "normandy"],
      },
      {
        text: "In 1944 the Allies took the offensive on every front. At Imphal and Kohima a Japanese offensive into India failed against garrisons supplied by air, and the starving Japanese army was destroyed, opening the reconquest of Burma. In Belorussia, Operation Bagration, launched as the Western Allies fought in Normandy, used deception and deep breakthroughs to destroy Army Group Centre and carry the Red Army to the Vistula, where it halted while the Germans crushed the Warsaw Uprising.",
        studies: ["imphal-kohima", "bagration"],
      },
      {
        text: "In September 1944 an airborne and armoured thrust through the Netherlands, Market Garden, took every bridge but the last, at Arnhem, where the British airborne division was destroyed. In October Japan's last great fleet operation, aimed at the landing on Leyte, failed despite drawing Halsey away with a decoy, and its navy ceased to be a strategic force. In December Germany's last offensive in the west surprised the Americans in the Ardennes but was stopped at St Vith and Bastogne and short of the Meuse. In February and March 1945 US Marines took Iwo Jima from a garrison dug into tunnels and caves, at a cost that foreshadowed an invasion of Japan.",
        studies: [
          "market-garden",
          "leyte-gulf",
          "battle-of-the-bulge",
          "iwo-jima",
        ],
      },
    ],
    wars: ["ww2"],
    courseSlugs: ["industrial-world-wars"],
    inProgress:
      "Okinawa and Berlin are planned for the next batch. This arc will be rewritten when they are added.",
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
