import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 3, a shared volume. Lessons are added in reviewed batches;
// docs/LEADERSHIP_EVIDENCE_SERBIA.md records which sources can carry each one,
// and docs/SOURCE_AUDIT.md how each was read (batch S1 is the pilot). The
// 1914-1918-online articles are cited in the PDF editions that were read.
const encyclopedia =
  "1914-1918-online. International Encyclopedia of the First World War";
const pdf = (slug: string, title: string): Source => ({
  title,
  url: `https://encyclopedia.1914-1918-online.net/article/${slug}/?format=pdf`,
  publisher: encyclopedia,
});
const britannica = "Encyclopaedia Britannica";
const mod = "Ministry of Defence of the Republic of Serbia";
const s = {
  bjelajac: pdf("serbia", "Mile Bjelajac, “Serbia” (2015), PDF edition"),
  tasic: pdf(
    "warfare-1914-1918-south-east-europe",
    "Dmitar Tasić, “Warfare 1914-1918 (South East Europe)”, PDF edition",
  ),
  hall: pdf(
    "war-in-the-balkans-1-1",
    "Richard C. Hall, “War in the Balkans”, PDF edition",
  ),
  raspopovic: pdf(
    "montenegro",
    "Radoslav Raspopović, “Montenegro”, PDF edition",
  ),
  krivokapic: pdf(
    "historiography-1918-today-serbia-and-montenegro-south-east-europe",
    "Gordana Krivokapić-Jović, “Historiography 1918-Today: Serbia and Montenegro (South East Europe)”, PDF edition",
  ),
  catalogue: {
    title:
      "Serbia 1914: exhibition catalogue (Miloš Ković, Nebojša Damnjanović, Vuk Obradović and Sanja Veljković)",
    url: "https://imus.org.rs/wp-content/uploads/2020/03/Srbija-1914-Katalog.pdf",
    publisher: "Historical Museum of Serbia and Military Museum, Belgrade",
  },
  reiss: {
    title:
      "R. A. Reiss, Report upon the atrocities committed by the Austro-Hungarian army during the first invasion of Serbia (1916)",
    url: "https://archive.org/stream/cu31924027863657/cu31924027863657_djvu.txt",
    publisher: "Internet Archive (Cornell University Library copy)",
  },
  oulk: {
    title:
      "Österreich-Ungarns letzter Krieg 1914–1918, vol. III: Das Kriegsjahr 1915, part 2 (Vienna, interwar), in German",
    url: "https://archive.org/details/sterreichungar03austuoft",
    publisher:
      "Austrian Federal Ministry of the Army and War Archive (Internet Archive)",
  },
  rauchensteiner: {
    title:
      "Manfried Rauchensteiner, The First World War and the End of the Habsburg Monarchy, 1914–1918, pp. 278–280",
    url: "https://austria-forum.org/web-books/firstworldwar01en2014isds/000280",
    publisher: "Böhlau Verlag, Austria-Forum web edition",
  },
  carnegie: {
    title:
      "Report of the International Commission to Inquire into the Causes and Conduct of the Balkan Wars (1914)",
    url: "https://archive.org/download/cu31924011526914/cu31924011526914_djvu.txt",
    publisher: "Carnegie Endowment for International Peace (Internet Archive)",
  },
  blackHand: {
    title: "Black Hand",
    url: "https://www.britannica.com/topic/Black-Hand-secret-Serbian-society",
    publisher: britannica,
  },
  putnik: {
    title: "Radomir Putnik",
    url: "https://www.britannica.com/biography/Radomir-Putnik",
    publisher: britannica,
  },
  campaign1914: {
    title: "World War I: The Serbian campaign, 1914 (Dennis E. Showalter)",
    url: "https://www.britannica.com/event/World-War-I/The-Serbian-campaign-1914",
    publisher: britannica,
  },
  peter: {
    title: "Peter I (king of Serbia)",
    url: "https://www.britannica.com/biography/Peter-I-king-of-Serbia",
    publisher: britannica,
  },
  retreatMoscow: {
    title: "Napoleonic Wars: The retreat from Moscow",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-retreat-from-Moscow",
    publisher: britannica,
  },
  modKolubara: {
    title: "The Battle of Kolubara (2016)",
    url: "https://www.mod.gov.rs/eng/10371/bitka-na-kolubari-10371",
    publisher: mod,
  },
  modVido: {
    title:
      "Minister Gašić attends commemorative ceremony on Vido Island (2025)",
    url: "https://www.mod.gov.rs/eng/22671/ministar-gasic-prisustvovao-komemorativnoj-svecanosti-na-ostrvu-vido",
    publisher: mod,
  },
  kutuzov: {
    title: "Mikhail Kutuzov and the War of 1812",
    url: "https://museum-artillery.ru/en/main-exposition/mikhail-kutuzov-and-the-war-of-1812.html",
    publisher:
      "Military-Historical Museum of Artillery, Engineer and Signal Corps",
  },
  liuHilton: {
    title:
      "James H. Liu and Denis J. Hilton, How the past weighs on the present: social representations of history and their role in identity politics (2005), abstract",
    url: "https://doi.org/10.1348/014466605x27162",
    publisher: "British Journal of Social Psychology",
  },
  detertBurris: {
    title:
      "James R. Detert and Ethan R. Burris, Leadership behavior and employee voice: is the door really open? (2007), abstract",
    url: "https://doi.org/10.5465/amj.2007.26279183",
    publisher: "Academy of Management Journal",
  },
} satisfies Record<string, Source>;

export const serbianSupremeCommandVolume: LeadershipVolume = {
  commanderSlug: "radomir-putnik",
  alsoCommanderSlugs: ["zivojin-misic", "stepa-stepanovic", "petar-bojovic"],
  title: "Leadership Lessons from the Serbian Supreme Command, 1914–1918",
  summary:
    "What a person who leads others can take from the Serbian Supreme Command of 1914–1918, Radomir Putnik with Stepa Stepanović, Živojin Mišić and Petar Bojović, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In 1914 a small army, just out of two Balkan Wars and short of rifles and artillery ammunition, turned back the Austro-Hungarian invasions. In 1915, attacked by Germany, Austria-Hungary and Bulgaria together, it lost its whole country, retreated through Montenegro and Albania in winter and was evacuated by the Allies to Corfu. In 1918 it broke through at Dobro Pole and marched home. Its command was shared: a chief of staff in poor health, army commanders who became field marshals, a prince regent who was commander-in-chief, and a government at war. Each lesson tests one claim about leading people against that record, and asks who, in a shared command, actually decided. One record cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "Did its commanders make Serbia’s endurance, or did they keep from wasting it?",
  parts: [
    "Orientation",
    "Judgement, 1914",
    "Sharing command",
    "Catastrophe, 1915",
    "The return",
  ],
  lessons: [
    {
      slug: "how-to-read-the-serbian-front",
      title: "Heroes, memory and the enemy’s files",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a nation’s war is remembered as an epic, a lesson drawn from it is worth only as much as the evidence that comes from outside that memory.",
      inBrief: {
        strength:
          "A small army’s victories and its survival became the foundation of how a nation remembers itself.",
        shadow:
          "Commemoration makes heroes, leaves out what is inconvenient, and changes with every state that inherits it.",
      },
      moment: {
        text: "The catalogue of the exhibition Serbia 1914, by the Historical Museum of Serbia and the Military Museum in Belgrade, begins with memory rather than battles. Like other Europeans, its authors write, Serbs count the First World War among their most important collective memories. Almost every village in Serbia has a monument to those killed, and the inscriptions bear the years 1912 to 1918, because in Balkan memory the Balkan Wars and the World War merged into one Great War. Since 1918, they add, generations of Serbs have lived in five different states, and memory and identity have been constructed and reconstructed with each of them. The catalogue closes by urging its readers not to renounce the achievements of their forefathers. A museum that warns that memory is built is itself building it.",
        evidence: "fact",
        refs: [{ source: 0, locator: "introduction" }],
      },
      episodes: [
        {
          title: "A founding myth and its silences",
          text: "The same catalogue is frank about what memory left out. The Kingdom of Yugoslavia, it says, found its founding myth in the First World War, and some inconvenient themes were sidestepped for the new Yugoslav identity: the names of those who committed war crimes against Serbian civilians in 1914 on both sides of the Drina went unrecorded, as did the nationalities of the soldiers who fought so fiercely at Mačkov Kamen and the Kolubara. The need to keep the governing elite’s continuity hindered research into the Salonika trial of 1917. Socialist Yugoslavia revised that trial, celebrated Gavrilo Princip as a precursor, and confined research on the war largely to military operations. Krivokapić-Jović divides the historiography into interwar, socialist and post-Yugoslav periods, and describes the last as divided between a revisionist national camp and a critical scholarly one.",
          evidence: "fact",
          refs: [{ source: 0, locator: "introduction" }, { source: 1 }],
          battleSlugs: ["drina-1914", "kolubara"],
        },
        {
          title: "Who lit the fuse?",
          text: "Even the war’s first cause divides the traditions. Bjelajac, a Serbian historian, writes that the assassination in Sarajevo was masterminded and carried out by local members of Young Bosnia, and frames it within Austria-Hungary’s Balkan plans since 1906. Hall, an American historian of the Balkan wars, writes that a cabal of Serbian army officers led by Colonel Dragutin Dimitrijević, known as Apis, abetted Princip and his companions. Britannica calls Dimitrijević’s secret society, the Black Hand, instrumental in planning the assassination. The facts each cites overlap; the emphasis does not.",
          evidence: "uncertainty",
          refs: [{ source: 2 }, { source: 3 }, { source: 4 }],
          battleSlugs: [],
        },
        {
          title: "A witness with a commission",
          text: "R. A. Reiss, a professor at Lausanne, collected evidence of atrocities against civilians during the first Austro-Hungarian invasion on the spot in September to November 1914. His report was submitted to the Serbian government in April 1915, and its English edition of 1916 was prefaced by the Serbian War Press Bureau, which called him a neutral man of science. Reiss also asked Austro-Hungarian prisoners whether Serbian soldiers had committed cruelties; he reports that they knew of none, apart from one man repeating hearsay. Tasić confirms the atrocities at Šabac and in western Serbia and adds a context the report leaves out: anti-Serbian propaganda reinforced by attacks from Serbian irregulars who could not be told apart from civilians.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 6 }],
          battleSlugs: ["cer"],
        },
        {
          title: "The enemy’s file",
          text: "Some of the most useful testimony comes from the other side. Volume III of the official history of Austria-Hungary’s war, published between the wars by the Austrian army ministry and the War Archive in Vienna, reconstructs how the Serbian Supreme Command judged its situation in November 1915 and sets out Putnik’s plan to break south through the Kačanik gorge to the Allied army. It calls the Serbian army brave and says it had fought for six weeks without any prospect of success to gain time for the French and British. Rauchensteiner, the Austrian historian of the Habsburg war, writes that Serbia’s success in 1914 created an image of David and Goliath.",
          evidence: "fact",
          refs: [
            { source: 7, locator: "pp. 294, 316–317" },
            { source: 8, locator: "p. 280" },
          ],
          battleSlugs: ["invasion-of-serbia-1915"],
        },
      ],
      witnesses: [
        {
          who: "The museums’ catalogue",
          stake:
            "Belgrade’s historical and military museums, writing about memory while contributing to it.",
          says: "Almost every Serbian village has a monument to the Great War, and memory has been constructed and reconstructed under five successive states.",
          refs: [{ source: 0, locator: "introduction" }],
        },
        {
          who: "Mile Bjelajac",
          stake:
            "A Serbian historian, answering a century of blame placed on Serbia.",
          says: "The assassination was masterminded by local members of Young Bosnia; Serbia, he also argues, fully obeyed the Hague and Geneva conventions in its treatment of prisoners.",
          refs: [{ source: 2 }],
        },
        {
          who: "Richard C. Hall",
          stake:
            "An American historian of the Balkan wars, outside the national traditions.",
          says: "A cabal of Serbian officers led by Dimitrijević abetted the assassins.",
          refs: [{ source: 3 }],
        },
        {
          who: "R. A. Reiss",
          stake:
            "A Lausanne scientist whose report was submitted to the Serbian government and published by its press bureau.",
          says: "Atrocities against Serbian civilians in 1914 were documented on the spot; Austro-Hungarian prisoners knew of no Serbian cruelty except by hearsay.",
          refs: [{ source: 5 }],
        },
        {
          who: "The Austro-Hungarian official history",
          stake:
            "The war archive of the defeated empire’s successor, writing about an enemy beaten in 1915 in a war Austria-Hungary lost.",
          says: "The Serbian army fought bravely and without hope of success, to gain time for its allies.",
          refs: [{ source: 7, locator: "pp. 316–317" }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule, to judge a decision by what the commander could know, runs into a particular problem here: the commander is often a collective. The catalogue attributes the decisions of 1914 to the Serbian Supreme Command; later commemoration attaches them to named field marshals. Before asking whether a decision was wise, this volume asks whose it was, and says when the sources disagree. The lesson on Kolubara is the first test.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "“The Battle of Kolubara”" }],
        },
        {
          text: "The enemy’s records help with the other half of the rule. The Austro-Hungarian official history explicitly reconstructs how the Serbian command assessed its position in November 1915, using what its authors could learn after the war. That is close to the strategist’s question, asked by the people who had most reason to know the answer. Its authors also had their own reasons: praising a brave enemy flatters the army that beat it.",
          evidence: "interpretation",
          refs: [{ source: 7, locator: "pp. 294, 316–317" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Social representations of history",
          base: "theory",
          text: "Liu and Hilton describe socially shared representations of history as central to creating, maintaining and changing a people’s identity. They offer a narrative framework for how collectively significant events are selectively incorporated into those representations, which act as charters: they lead nations with similar interests to take different stances, and they shape how stable and legitimate a social order seems. The Serbian Front is a clear case. Kolubara and the retreat were taken up by one state as a founding myth, reworked by the next, and contested in the third, while the events themselves stayed the same.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "Only the abstract was read. It is a theoretical framework about groups, and says nothing about whether any particular memory of these events is accurate.",
        },
      ],
      shadow: {
        text: "An epic leaves people out. The Carnegie Commission’s report on the Balkan Wars, published in 1914, records crimes by every army, among them accounts of Serbian troops burning Albanian villages around Dibra and killing their inhabitants in 1913. The catalogue itself notes that the names of those who committed crimes against Serbian civilians went unrecorded for political reasons. A memory built around a small nation’s endurance has little room for the people that nation’s army fought or governed, and this volume’s last lesson returns to them.",
        evidence: "interpretation",
        refs: [
          { source: 10, locator: "ch. IV" },
          { source: 0, locator: "introduction" },
        ],
      },
      counterCase: {
        text: "The other side personalised its defeat as Serbia personalised its victory. Rauchensteiner writes that the collapse of December 1914 shocked Vienna because Oskar Potiorek had repeatedly reported successes. Asked who was to blame, the officer sent to investigate answered tersely: General of Artillery Potiorek. Potiorek was retired, wrote in his diary that the failure would remain associated with his name, and considered his dismissal unreasonable. Rauchensteiner himself judges that the Balkans should have been a secondary theatre from the start. Blaming one general was simpler than examining the decision to fight on two fronts.",
        evidence: "interpretation",
        refs: [{ source: 8, locator: "pp. 279–280" }],
        commanderSlug: "oskar-potiorek",
        battleSlugs: ["kolubara"],
      },
      cost: {
        text: "In the winter of 1915 an epidemic swept through the exhausted country, killing soldiers, civilians and prisoners of war alike; Bjelajac calls it the worst loss of life of the early war. The sources name it differently, as typhus, typhoid fever, or cholera and typhus, and give figures that are not used here.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 6 }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "The story of your organisation’s hardest period has become part of its identity.",
          "Records from outsiders, competitors or critics exist and can be set beside the official account.",
        ],
        failsWhen: [
          "Every national or institutional memory is dismissed as myth. Commemoration can preserve real events.",
          "The enemy’s praise is taken as neutral. It too has reasons.",
        ],
        questions: [
          "Which story about your organisation’s survival is retold most often, and what does it leave out?",
          "Whose records of that period would tell it differently?",
          "When a decision is credited to a famous person, how would you check whose it was?",
        ],
      },
      bearsOn:
        "Both of the volume’s questions depend on who is speaking. Serbian commemoration credits the commanders and the soldiers; the enemy’s files credit Serbian courage and blame their own general; Bjelajac stresses Allied pressure and Allied help. Whether the commanders made Serbia’s endurance or kept from wasting it, and who in a shared command decided, will be answered lesson by lesson from witnesses on more than one side.",
      questions: [
        {
          prompt:
            "What does the Serbia 1914 catalogue say was sidestepped in the Kingdom of Yugoslavia’s memory of the war?",
          choices: [
            "The battles of Cer and Kolubara.",
            "Inconvenient themes, such as the names of those who committed crimes against Serbian civilians in 1914 and research into the Salonika trial.",
            "The role of King Peter.",
          ],
          answer: 1,
          explanation:
            "The catalogue’s authors say the new state’s Yugoslav identity and its elite’s continuity shaped what was remembered.",
        },
        {
          prompt:
            "Why should Reiss’s report be read with its commission in mind?",
          choices: [
            "Because it was written by an Austrian officer.",
            "Because it was submitted to the Serbian government and published with a preface by the Serbian War Press Bureau.",
            "Because Reiss never visited Serbia.",
          ],
          answer: 1,
          explanation:
            "His evidence was gathered on the spot and is serious; the stake of those who published it should still be stated.",
        },
        {
          prompt:
            "What does the Austro-Hungarian official history say about the Serbian army in November 1915?",
          choices: [
            "That it fled without fighting.",
            "That it fought bravely, without prospect of success, to gain time for its allies.",
            "That it was larger than the invading armies.",
          ],
          answer: 1,
          explanation:
            "A defeated enemy praised by its conqueror’s archive is useful evidence, with its own motive.",
        },
      ],
      sourceCheck: {
        question: "Who was responsible for the Sarajevo assassination?",
        witnesses: [
          {
            label: "Mile Bjelajac",
            claim:
              "It was masterminded and carried out by local members of Young Bosnia, within a wider framework of Austro-Hungarian Balkan policy.",
          },
          {
            label: "Richard C. Hall",
            claim:
              "A cabal of Serbian officers led by Colonel Dimitrijević abetted Princip and his companions.",
          },
          {
            label: "Britannica",
            claim:
              "Dimitrijević’s Black Hand was instrumental in planning the assassination.",
          },
        ],
        prompt: "How should a reader use these three accounts?",
        options: [
          {
            text: "Prefer Bjelajac, because he is the specialist on Serbia.",
            feedback:
              "His expertise is real, and so is his position in a long Serbian argument against war guilt.",
          },
          {
            text: "Prefer Hall and Britannica, because they agree.",
            feedback:
              "Agreement between general works can reflect a shared tradition rather than independent evidence.",
          },
          {
            text: "Note that all three accept the assassins and the Black Hand’s existence, and that they differ on how far Serbian officers directed the plot.",
            feedback:
              "The disagreement is about emphasis and responsibility, which is exactly where national traditions diverge.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Pick one image of the Serbian Front you already know: Cer, Kolubara, the retreat through Albania. Which tradition gave it to you, and what would a witness from the other side add?",
        guidance:
          "Ask whether the account comes from commemoration, from the enemy’s files or from a foreign scholar, and what each needed the story to show. The catalogue’s own warnings about memory are a good model.",
      },
      sources: [
        s.catalogue,
        s.krivokapic,
        s.bjelajac,
        s.hall,
        s.blackHand,
        s.reiss,
        s.tasic,
        s.oulk,
        s.rauchensteiner,
        s.liuHilton,
        s.carnegie,
      ],
    },
    {
      slug: "the-capital-or-the-army",
      title: "The capital or the army: Kolubara, 1914",
      part: "Judgement, 1914",
      themes: ["judgement", "restraint"],
      claim:
        "When the army is the one thing that cannot be replaced, giving up the capital can be the condition of keeping the war.",
      inBrief: {
        strength:
          "The Supreme Command gave up Belgrade to save the army, then struck while the enemy celebrated.",
        shadow:
          "In 1915 giving up ground no longer saved anything, and who deserves the credit for 1914 is still argued.",
      },
      moment: {
        text: "On 20 November 1914, the museums’ catalogue says, the Austro-Hungarian Sixth Army drove the Serbian First Army back across the Ljig to Mount Suvobor. Facing difficulties all along an over-extended front, the Serbian Supreme Command ordered a withdrawal to new positions to shorten it. The new plan gave up Belgrade, moving its defenders to Mount Kosmaj. Bjelajac adds why the army could not simply hold: after fifty-five days of entrenched fighting its artillery ammunition had run out, and it fell back some fifty to sixty kilometres, leaving the capital.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "“The Battle of Kolubara”" },
          { source: 1 },
        ],
      },
      episodes: [
        {
          title: "Out of shells",
          text: "Bjelajac says the summer of 1914 caught the Serbian army wholly unprepared, short of rifles, artillery, ammunition and much else after the Balkan Wars; Russia declined Pašić’s requests for arms until September. Tasić says that outnumbered and short of ammunition, the army had to withdraw and evacuate Belgrade, but that the withdrawal let it regroup and replenish its ammunition. Rauchensteiner names the source: the First Army gathered its remaining guns and brought in French artillery ammunition along the railway from Salonika to Niš, which Greece allowed to pass.",
          evidence: "fact",
          refs: [
            { source: 1 },
            { source: 2 },
            { source: 3, locator: "p. 278" },
          ],
          battleSlugs: ["kolubara"],
        },
        {
          title: "A prestige objective",
          text: "On the other side, Rauchensteiner writes, the campaign was going badly and losses were rising, yet Potiorek ordered the left wing of his Fifth Army to take Belgrade as a prestige objective. The city fell without a fight on 2 December, the sixty-sixth anniversary of Franz Joseph’s accession; told by telephone, the Emperor reportedly wept with joy. A victory parade was set for 3 December. The catalogue describes the Austro-Hungarian armies regrouping at the same moment, the Fifth occupying the capital and the Sixth taking over its positions in the line.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "p. 278" },
            { source: 0, locator: "“The Battle of Kolubara”" },
          ],
          battleSlugs: ["kolubara"],
        },
        {
          title: "The counter-stroke",
          text: "On the morning of 3 December all three Serbian armies attacked. The catalogue says the First Army under Živojin Mišić caught the enemy by surprise; its 1st Danube Division broke through on Suvobor and took Valjevo on 8 December, the 16th Corps’ retreat exposed the Austro-Hungarian right, and the other corps fell back in turn. Rauchensteiner says the entire front collapsed and the Habsburg armies ended back on their own soil, where they had begun in August. The Serbs re-entered Belgrade on 15 December. Britannica adds that mud and exhaustion kept them from turning the retreat into a rout.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "“The Battle of Kolubara”" },
            { source: 3, locator: "p. 279" },
            { source: 4 },
          ],
          battleSlugs: ["kolubara"],
          campaignSlugs: ["serbian-campaign-of-1914"],
        },
      ],
      witnesses: [
        {
          who: "The museums’ catalogue",
          stake:
            "Belgrade’s historical and military museums, telling the battle as the army’s collective achievement.",
          says: "The Serbian Supreme Command ordered the withdrawal, and later decided to launch the counter-offensive.",
          refs: [{ source: 0, locator: "“The Battle of Kolubara”" }],
        },
        {
          who: "Serbia’s Ministry of Defence, 2016",
          stake:
            "An official commemoration of a national victory and its field marshal.",
          says: "The decision about the counter-offensive was made according to the suggestion of General Mišić.",
          refs: [{ source: 5 }],
        },
        {
          who: "Britannica",
          stake: "A general reference work summarising a commander’s career.",
          says: "Putnik, in poor health, routed overwhelming Austrian forces on the Kolubara.",
          refs: [{ source: 6 }],
        },
        {
          who: "Manfried Rauchensteiner",
          stake:
            "An Austrian historian of the Habsburg war, severe on his own side’s commander.",
          says: "Potiorek took Belgrade as a prestige objective while his campaign failed, and had repeatedly reported successes.",
          refs: [{ source: 3, locator: "pp. 278–279" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the choice was between two losses. Holding an over-extended front without shells risked having the army broken; giving up Belgrade cost the capital, the government’s prestige and the people of the city. The withdrawal made sense only if the army could be resupplied and if the enemy would overreach. Both conditions came true: French ammunition arrived through Greece, and Tasić says the attackers were exhausted, undermanned and at the end of over-stretched supply lines. The decision was sound because it was conditional, not because it was certain to work.",
          evidence: "interpretation",
          refs: [
            { source: 2 },
            { source: 3, locator: "p. 278" },
            { source: 0, locator: "“The Battle of Kolubara”" },
          ],
        },
        {
          text: "The timing was the other half. Rauchensteiner says the counter-attack was planned to coincide with the enemy’s victory parade, at the moment the Austro-Hungarian armies were changing places in the line. The exercise Give up the capital puts the reader at the point of decision. The question the sources cannot settle is who first saw the opportunity: the catalogue gives the decision to the Supreme Command, the Ministry of Defence to Mišić’s suggestion, Britannica the victory to Putnik.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "p. 278" },
            { source: 0, locator: "“The Battle of Kolubara”" },
            { source: 5 },
            { source: 6 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Leader openness and upward voice",
          base: "single study",
          text: "Detert and Burris studied thousands of restaurant employees and their managers and found that managers’ openness was more consistently related to employees speaking up with improvements than transformational leadership was, an effect that ran through employees’ sense that speaking up was safe and was strongest among the best performers. If the Ministry of Defence is right that the counter-offensive followed Mišić’s suggestion, Kolubara is a case of a chief accepting a subordinate’s proposal at the decisive moment. If the catalogue is right, it is a case of a command acting together. Either way, the research suggests why a commander nearest the troops would speak only if the headquarters was known to listen.",
          evidence: "interpretation",
          refs: [{ source: 7 }],
          limit:
            "Only the abstract was read. A restaurant chain is not an army in crisis, and the sources disagree about whose idea the counter-offensive was.",
        },
      ],
      shadow: {
        text: "Trading ground for time worked once. In 1915, Tasić writes, Serbia faced German, Austro-Hungarian and Bulgarian armies outnumbering it two to one, attacking along the Morava valley with heavy artillery the Serbian army could not match, and the Bulgarians cut the road south. Giving up territory then bought nothing that could be used. Even the victory of 1914 had drained the army: Rauchensteiner says the Serbs had utterly exhausted themselves, and that cholera, dysentery and typhus were spreading.",
        evidence: "interpretation",
        refs: [{ source: 2 }, { source: 1 }, { source: 3, locator: "p. 280" }],
      },
      counterCase: {
        text: "At Fili in 1812, the Russian artillery museum’s account says, most of Kutuzov’s generals favoured another battle before Moscow. Kutuzov objected, holding that the loss of Moscow did not mean the loss of all Russia, and led the army away, first towards Ryazan and then in a flank march that covered the grain-rich south, the reserves at Kaluga and the arsenal at Tula. The French lost sight of his army; at Tarutino they were beaten, and after Maloyaroslavets Napoleon retreated. The Napoleon volume met Moscow from Napoleon’s side. Kutuzov had something Serbia lacked: space. Putnik’s army gave up its capital with very little country left behind it.",
        evidence: "interpretation",
        refs: [{ source: 8 }],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino"],
      },
      cost: {
        text: "Belgrade was abandoned to occupation for two weeks. Tasić records that the victories of 1914 cost the Serbian army heavy losses among officers, NCOs and soldiers, and that early in 1915 an epidemic crippled its medical staff and killed soldiers, civilians and Austro-Hungarian prisoners alike. The sources’ figures are not used here.",
        evidence: "fact",
        refs: [
          { source: 2 },
          { source: 0, locator: "“The Battle of Kolubara”" },
          { source: 3, locator: "p. 278" },
        ],
      },
      transfer: {
        holdsWhen: [
          "One asset, people, capability or trust, cannot be replaced if it is lost, and others can be recovered later.",
          "You can see the conditions that would make the retreat pay, and they are within reach.",
        ],
        failsWhen: [
          "Giving ground becomes a habit when no resupply or opportunity will come.",
          "The symbolic cost of what is given up is ignored, and the people who depended on it are left without a word.",
        ],
        questions: [
          "What in your organisation cannot be replaced, and what are you protecting instead of it?",
          "What would have to happen for a retreat you are considering to pay off?",
          "Who in your team would tell you that the moment to strike had come?",
        ],
      },
      bearsOn:
        "Kolubara supports the answer that the commanders kept Serbia’s endurance from being wasted: they refused to spend the army on the capital. It also shows how much depended on others, French shells through Greece and an enemy commander chasing a symbol. On the second question, who decided, the sources give three answers, which is itself the evidence.",
      questions: [
        {
          prompt:
            "Why did the Serbian Supreme Command withdraw and give up Belgrade, according to the catalogue and Bjelajac?",
          choices: [
            "To lure the enemy into a planned trap from the start.",
            "To shorten an over-extended front after its artillery ammunition had run out.",
            "Because the Allies ordered it.",
          ],
          answer: 1,
          explanation:
            "The decision was a response to exhaustion and shortage, made conditional on resupply.",
        },
        {
          prompt:
            "According to Rauchensteiner, where did the ammunition for the counter-offensive come from?",
          choices: [
            "From captured Austro-Hungarian depots.",
            "French artillery ammunition brought by railway from Salonika, which Greece let pass.",
            "From Russian factories by sea.",
          ],
          answer: 1,
          explanation:
            "Resupply was one of the conditions that made the withdrawal pay.",
        },
        {
          prompt:
            "What does Detert and Burris’s study link to employees speaking up?",
          choices: [
            "Higher pay.",
            "Managers’ openness, through employees’ sense that it is safe to speak.",
            "Strict discipline.",
          ],
          answer: 1,
          explanation:
            "The effect was strongest among the best performers, those whose ideas matter most.",
        },
      ],
      sourceCheck: {
        question: "Whose decision was the counter-offensive at Kolubara?",
        witnesses: [
          {
            label: "The museums’ catalogue",
            claim:
              "The Serbian Supreme Command decided to launch a counter-offensive and ordered all three armies to attack.",
          },
          {
            label: "Serbia’s Ministry of Defence",
            claim:
              "The decision was made according to the suggestion of General Mišić, commander of the First Army.",
          },
          {
            label: "Britannica",
            claim: "Putnik routed the Austrian forces on the Kolubara.",
          },
        ],
        prompt: "What can a historian safely say?",
        options: [
          {
            text: "That Mišić overruled Putnik and saved the battle.",
            feedback:
              "No source read for this lesson says so. The ministry credits a suggestion; the catalogue a collective decision.",
          },
          {
            text: "That the Supreme Command ordered the counter-offensive, and that the sources differ on who proposed it.",
            feedback:
              "The order is attested; the authorship of the idea is claimed for Mišić by an official commemoration and is not settled.",
            best: true,
          },
          {
            text: "That Putnik alone planned it, since Britannica names him.",
            feedback:
              "A short biography credits the commander-in-chief for the whole battle, as such articles usually do.",
          },
        ],
        battleSlug: "kolubara",
      },
      seminar: {
        prompt:
          "Was giving up Belgrade a decision to save the army or a gamble that happened to pay? What would have made it the wrong choice?",
        guidance:
          "List the conditions: resupply, the enemy’s state, the weather, the Allies. Then compare 1915, when the same choice was available and no longer worked.",
      },
      sources: [
        s.catalogue,
        s.bjelajac,
        s.tasic,
        s.rauchensteiner,
        s.campaign1914,
        s.modKolubara,
        s.putnik,
        s.detertBurris,
        s.kutuzov,
      ],
    },
    {
      slug: "the-retreat-that-kept-an-army",
      title: "The retreat that kept an army: Albania and Corfu",
      part: "Catastrophe, 1915",
      themes: ["motivation", "ethics"],
      claim:
        "When a leader shares the hardship of those they lead, the bond may survive defeat, but shared hardship cannot by itself keep an army alive.",
      inBrief: {
        strength:
          "The old king and the chief of staff went through the mountains with the army, and it survived as an army.",
        shadow:
          "Presence could not feed, clothe or heal it; Allied ships and Corfu did that, and many did not live to reach them.",
      },
      moment: {
        text: "On 25 November 1915, Bjelajac writes, the Serbian High Command ordered the army to retreat through Montenegro and Albania, join the Allies and continue the war outside the country. The order said plainly that the army was in no condition for a counter-offensive, but that capitulation was the worse choice. The Austro-Hungarian official history records the attempt that came first: Putnik’s plan to break south through the Kačanik gorge to the Allied army at Salonika, defeated when the Bulgarians held the passes. The old king, Peter I, went with the army, carried in a litter; Putnik, in poor health, was carried in a sedan chair.",
        evidence: "fact",
        refs: [
          { source: 0 },
          { source: 1, locator: "pp. 316–317" },
          { source: 2 },
          { source: 3 },
        ],
      },
      episodes: [
        {
          title: "Through the mountains",
          text: "Bjelajac describes the retreat across high, snowy mountains in poor clothes, without food or medical supplies, sometimes through hostile Albanian villages, costing thousands of soldiers’ lives; civilians and the prisoners of war who marched with their former captors suffered alike. The enemy’s official history describes the same road from behind: thousands fell away, laid down their arms or perished, hunger typhus raged in the columns, and the roads were lined with the carcasses of horses and the wreckage of wagons, while rearguards sacrificed themselves to hold the pursuit.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1, locator: "p. 317" }],
          battleSlugs: ["serbian-retreat-1915"],
        },
        {
          title: "The rearguard",
          text: "The Montenegrin army covered much of the withdrawal. Raspopović writes that it helped the main Serbian forces fall back to Kosovo, again when they had to leave Kosovo before the Bulgarian advance, and that part of the Serbian army retreated through Montenegro to Scutari and the coast; acting as a general strategic protector, the Montenegrin army suffered heavy losses of its own. The alliance did not end well. Montenegro withdrew from the war in January 1916, and the Serbian army, Raspopović notes, later sought to prove that its own military delegate had not suggested Montenegro’s peace negotiations.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: ["mojkovac"],
        },
        {
          title: "The ships",
          text: "Survival came from the sea. Bjelajac writes that France led an Allied rescue mission under General Piarron de Mondésir from 12 December, coordinated by an inter-Allied commission in Rome, and that Corfu was occupied as the base. The operation had two phases, evacuation from the Albanian coast and then recovery and reorganisation, and soldiers and civilians were carried to Corfu, Bizerte, Italy and France. Within weeks of the first transports, many died of exhaustion and disease. Hall says that after rest and refurbishment on Corfu the survivors joined the Salonika armies. Bjelajac adds that a Serbian decision of June 1915, taken against Allied advice, to occupy communications along the Drin in Albania proved helpful six months later.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 5 }],
          battleSlugs: ["serbian-retreat-1915"],
          campaignSlugs: ["serbian-campaign-of-1915"],
        },
        {
          title: "The prisoners",
          text: "Austro-Hungarian prisoners of war marched with the army. Bjelajac writes that thousands of them died during the retreat to the Adriatic, that some escaped from a poorly guarded column, sometimes with help from local Albanians, and that the rest were handed over to the Italians at Valona. He argues that their sufferings came from the shortages that the army, the refugees and the wounded all shared, not from ill will, and that Serbia observed the Hague and Geneva conventions; he is answering a century of Austro-Hungarian accusations.",
          evidence: "fact",
          refs: [{ source: 0 }],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Mile Bjelajac",
          stake:
            "A Serbian historian who stresses both Serbian endurance and Allied help, and defends Serbia’s conduct.",
          says: "The High Command chose retreat over capitulation; France led the rescue; the prisoners suffered from shared shortages, not ill will.",
          refs: [{ source: 0 }],
        },
        {
          who: "The Austro-Hungarian official history",
          stake:
            "The pursuer’s official history, writing with respect for an enemy it had beaten.",
          says: "After six weeks of fighting without hope of success, the army’s power of resistance was already broken, and thousands fell away on the retreat.",
          refs: [{ source: 1, locator: "pp. 316–317" }],
        },
        {
          who: "Radoslav Raspopović",
          stake:
            "A Montenegrin historian, writing about an ally whose role Serbian memory tends to absorb.",
          says: "The Montenegrin army protected the Serbian retreat at heavy cost; the two governments then disagreed over who had suggested Montenegro’s peace talks.",
          refs: [{ source: 4 }],
        },
        {
          who: "Serbia’s Ministry of Defence, 2025",
          stake: "An official commemoration a century later.",
          says: "The landing on Corfu and Vido marks the end of the “Albanian Golgotha”; a wreath is laid at sea, at the “Blue Tomb”.",
          refs: [{ source: 6 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, the options in November 1915 were few. The break south to the Allies had failed. A last battle on the plain of Kosovo, where the enemy expected one, would have ended the army. Capitulation would have ended the state. Retreat to the Adriatic kept both alive, provided the Allies could carry the army away. The command took the only option that preserved what could not be replaced, and an earlier decision, the occupation of Albanian communications against Allied advice, made it possible.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "pp. 316–317" }, { source: 0 }],
        },
        {
          text: "The lesson of the retreat is the division of labour between presence and logistics. The king and the chief of staff shared the road, and the army did not dissolve. But food, clothing, medicine and ships came from the Allies, and the reorganisation on Corfu made the army fit to fight again. A commander can keep an army together; only a coalition could keep this one alive.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 5 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The Napoleon volume’s lesson on leaving the army drew on research about broken psychological contracts, and this lesson does not restate it. No psychological research read for this volume measures what shared hardship does to soldiers in retreat, and the lesson leaves the question to the historian and the strategist.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No psychological source is offered, and the lesson draws no psychological conclusion.",
        },
      ],
      shadow: {
        text: "Presence did not save the men who reached the coast too weak to live. Bjelajac records thousands of deaths from exhaustion and disease within weeks of the first transports, and the Ministry of Defence still lays a wreath at sea for those buried off Vido. Sharing hardship kept the bond; it did not stop the hunger, the cold or the epidemic. A leader who mistakes the first for the second will ask the bond to do what only supplies can.",
        evidence: "interpretation",
        refs: [{ source: 0 }, { source: 6 }],
      },
      counterCase: {
        text: "Napoleon made the other choice in December 1812. Britannica says that when the remnant of his army was about a hundred kilometres east of Vilnius, he handed command to Murat and hurried ahead to reach Paris before news of the disaster. The Napoleon volume used the Serbian retreat as the counter-case to that departure. Seen from this side, the comparison runs the other way: the Serbian leaders stayed, and their army still could not save itself. Staying kept the army whole as a body; it took French ships and the island of Corfu to keep it alive.",
        evidence: "interpretation",
        refs: [{ source: 7 }, { source: 0 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["berezina"],
      },
      cost: {
        text: "The retreat killed soldiers and civilian refugees, prisoners of war who had no choice in it, and Montenegrins who covered it. More died on Corfu and Vido after they arrived. The sources give figures that differ and are not used here.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 4 }, { source: 6 }],
      },
      transfer: {
        holdsWhen: [
          "Defeat is certain, and the choice is about what survives it.",
          "Partners outside your organisation can supply what your presence cannot.",
        ],
        failsWhen: [
          "Shared hardship is treated as a substitute for supplies, care or rescue.",
          "The people who cannot leave, the sick, the captive, the dependants, are not counted in the plan.",
        ],
        questions: [
          "In your hardest period, what did your presence hold together, and what did it not?",
          "Who outside your organisation would you depend on if it failed?",
          "Who would be carried with you in a retreat, and who would be left behind?",
        ],
      },
      bearsOn:
        "The retreat is where the commanders most clearly kept Serbia’s endurance from being wasted: they chose to save an army rather than surrender it. It is also where the allies’ answer is strongest, since French ships and Corfu made survival possible. On who decided, the sources name the High Command and Putnik, with the king and the government sharing the road.",
      questions: [
        {
          prompt:
            "Why did the Serbian High Command order the retreat through Albania, according to Bjelajac?",
          choices: [
            "Because the Allies demanded it.",
            "Because the army could not counter-attack, and capitulation was the worse choice.",
            "To attack Austria-Hungary from the Adriatic.",
          ],
          answer: 1,
          explanation:
            "The order aimed to keep the army in the war outside the country.",
        },
        {
          prompt: "Who led the Allied rescue mission on the Albanian coast?",
          choices: [
            "Great Britain.",
            "Italy.",
            "France, under General Piarron de Mondésir.",
          ],
          answer: 2,
          explanation:
            "An inter-Allied commission in Rome coordinated it, and Corfu was occupied as its base.",
        },
        {
          prompt:
            "What does Raspopović say the Montenegrin army did during the retreat?",
          choices: [
            "It joined the Austro-Hungarians.",
            "It protected the Serbian withdrawal at heavy cost to itself.",
            "It refused to fight.",
          ],
          answer: 1,
          explanation:
            "The alliance then ended in a dispute over Montenegro’s peace negotiations.",
        },
      ],
      sourceCheck: {
        question:
          "What kept the Serbian army alive in the winter of 1915–1916?",
        witnesses: [
          {
            label: "Mile Bjelajac",
            claim:
              "A French-led Allied rescue mission evacuated the army and reorganised it on Corfu.",
          },
          {
            label: "The Austro-Hungarian official history",
            claim:
              "The army’s power of resistance was broken; thousands fell away, and only rearguards held the pursuit.",
          },
          {
            label: "Serbia’s Ministry of Defence",
            claim:
              "The retreat was a path of Golgotha and resurrection, ending on Corfu and Vido.",
          },
        ],
        prompt: "How should the three be combined?",
        options: [
          {
            text: "The army saved itself through its spirit, as the commemoration suggests.",
            feedback:
              "Spirit kept men walking; the enemy’s own account shows the army breaking, and Bjelajac shows who carried it away.",
          },
          {
            text: "The army held together as a body, but its survival depended on Allied evacuation and recovery.",
            feedback:
              "Each witness supplies a part: endurance, breakdown, and rescue.",
            best: true,
          },
          {
            text: "The army was destroyed, as the enemy history implies.",
            feedback:
              "It was broken as a fighting force in 1915 and fought again from Salonika in 1916.",
          },
        ],
        campaignSlug: "serbian-campaign-of-1915",
      },
      seminar: {
        prompt:
          "The Serbian leaders stayed with their army; Napoleon left his. Which did more to keep an army in existence, and what does that say about presence?",
        guidance:
          "Separate the bond from the logistics. Ask what each leader’s choice did for morale, for command and for survival, and who supplied what the leaders could not.",
      },
      sources: [
        s.bjelajac,
        s.oulk,
        s.peter,
        s.putnik,
        s.raspopovic,
        s.hall,
        s.modVido,
        s.retreatMoscow,
      ],
    },
  ],
  inProgress:
    "The pilot lessons are published. The rest of the volume is added in reviewed batches.",
};
