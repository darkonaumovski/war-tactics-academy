import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 10, on Yi Sun-sin, written in reviewed batches: P1, the pilot
// (lessons 0, 6 and 8), then the rest in curriculum order;
// docs/LEADERSHIP_EVIDENCE_YI.md records which sources can carry each lesson,
// and docs/SOURCE_AUDIT.md how each was read. Yi's diary, his reports and the
// Annals of King Seonjo are read in the original Classical Chinese or in
// Korean translation and paraphrased; no English sentence is quoted as his.
const itkc =
  "Korean Classics Database (Institute for the Translation of Korean Classics)";
const works = "Yi chungmugong jeonseo (Complete Works of Yi Sun-sin, 1795)";
const mo = (id: string, title: string): Source => ({
  title,
  url: `https://db.itkc.or.kr/dir/item?itemId=MO#/dir/node?dataId=ITKC_MO_0232A_${id}`,
  publisher: itkc,
});
const jt = (id: string, title: string): Source => ({
  title,
  url: `https://db.itkc.or.kr/dir/item?itemId=JT#/dir/node?dataId=ITKC_JT_${id}`,
  publisher: itkc,
});
const ek = (id: string, title: string): Source => ({
  title,
  url: `https://encykorea.aks.ac.kr/Article/${id}`,
  publisher: "Encyclopedia of Korean Culture, Academy of Korean Studies",
});
const ws = (page: string, title: string): Source => ({
  title,
  url: `https://zh.wikisource.org/wiki/${encodeURI(page)}`,
  publisher: "Wikisource (Chinese)",
});
const s = {
  reportOkpo: mo(
    "0050_010_0070",
    `Yi Sun-sin, report on the battle of Okpo (玉浦破倭兵狀, 1592), in ${works}, vol. 2, in Classical Chinese`,
  ),
  diary1597_4: mo(
    "0110_010_0010",
    `Yi Sun-sin, war diary, 4th month of 1597, in ${works}, vol. 8, in Classical Chinese`,
  ),
  diary1597_8: mo(
    "0110_010_0050",
    `Yi Sun-sin, war diary, 8th month of 1597, in ${works}, vol. 8, in Classical Chinese`,
  ),
  diary1597_9: mo(
    "0110_010_0060",
    `Yi Sun-sin, war diary, 9th month of 1597, in ${works}, vol. 8, in Classical Chinese`,
  ),
  haengnok: mo(
    "0120_010_0010",
    `Yi Bun, Haengnok (行錄, Record of Conduct of Yi Sun-sin), in ${works}, vol. 9, appendix 1, in Classical Chinese`,
  ),
  annals1592: {
    title:
      "Seonjo sujeong sillok (revised Annals of King Seonjo), 25th year, 5th month, 1st day: Yi Sun-sin defeats the Japanese off Geoje, Korean translation with the original",
    url: "https://sillok.history.go.kr/id/knb_12505001_020",
    publisher:
      "Veritable Records of the Joseon Dynasty, National Institute of Korean History",
  },
  annals1597Jan: jt(
    "N0_A30_01A_27A_00030",
    "Seonjo sillok (Annals of King Seonjo), 30th year, 1st month, 27th day [3]: the king and his ministers discuss the command of the navy, Korean translation (Jo Su-ik, 1987)",
  ),
  annals1597Mar13: jt(
    "N0_A30_03A_13A_00020",
    "Seonjo sillok, 30th year, 3rd month, 13th day [2]: the ministers to discuss Yi Sun-sin’s punishment, Korean translation (Bak Chan-su, 1987)",
  ),
  annals1597Mar20: jt(
    "N0_A30_03A_20A_00040",
    "Seonjo sillok, 30th year, 3rd month, 20th day [4]: Won Gyun’s report of the 28th day of the 2nd month, Korean translation (Bak Chan-su, 1987)",
  ),
  annals1597Jul: jt(
    "N0_A30_07A_22A_00030",
    "Seonjo sillok, 30th year, 7th month, 22nd day [3]: the king and the Border Defence Council discuss the defeat of Won Gyun’s fleet, Korean translation (Maeng Cheon-sul, 1988)",
  ),
  annals1597Sep: jt(
    "N1_A30_09A_01A_00030",
    "Seonjo sujeong sillok, 30th year, 9th month, 1st day [3]: Yi Sun-sin defeats the enemy below Byeokpajeong on Jindo, Korean translation (Jo Su-ik, 1989)",
  ),
  annals1597Nov: jt(
    "N0_A30_11A_10A_00050",
    "Seonjo sillok, 30th year, 11th month, 10th day [5]: a dispatch to the Ming commander’s headquarters, Korean translation (Kim Neung-ha, 1988)",
  ),
  annals1598: jt(
    "N0_A31_11A_27A_00050",
    "Seonjo sillok, 31st year, 11th month, 27th day [5]: Yi Deok-hyeong’s report on the navy, with the historians’ comment, Korean translation (Yi Hae-gwon, 1988)",
  ),
  ekYi: ek("E0044900", "이순신 (Yi Sun-sin) — Lee Jang-hee, in Korean"),
  ekWon: ek("E0040619", "원균 (Won Gyun) — Lee Jeong-il, in Korean"),
  ekMyeong: ek(
    "E0018250",
    "명량대첩 (The great victory at Myeongnyang) — Jo Seong-do, in Korean",
  ),
  seikan1: ws(
    "征韓偉略/卷之一",
    "Kawaguchi Chōju, Seikan iryaku (征韓偉略, 1831), vol. 1, in Classical Chinese",
  ),
  seikan4: ws(
    "征韓偉略/卷之四",
    "Kawaguchi Chōju, Seikan iryaku (1831), vol. 4, in Classical Chinese",
  ),
  seikan5: ws(
    "征韓偉略/卷之五",
    "Kawaguchi Chōju, Seikan iryaku (1831), vol. 5, in Classical Chinese",
  ),
  mingshi: ws(
    "明史/卷247",
    "Zhang Tingyu and others, Ming shi (1739), vol. 247, biographies of Chen Lin and Deng Zilong, in Classical Chinese",
  ),
  aston4: {
    title:
      "W. G. Aston, “Hideyoshi's Invasion of Korea”, chapter IV, Transactions of the Asiatic Society of Japan, vol. 11 (1883)",
    url: "https://archive.org/details/in.gov.ignca.26017",
    publisher: "Internet Archive",
  },
  ballard: {
    title:
      "G. A. Ballard, The Influence of the Sea on the Political History of Japan (London: John Murray, 1921), ch. II",
    url: "https://archive.org/details/influenceofseaon00balluoft",
    publisher: "Internet Archive",
  },
  ogawa: {
    title:
      "Ogawa Takaaki, “Toward better understanding of the battle of Myeongnyang: Review of Literature”, Bulletin of International Pacific University, no. 19, English abstract only",
    url: "https://ipu.repo.nii.ac.jp/record/792/files/11_%E5%B0%8F%E5%B7%9D%E9%9A%86%E7%AB%A0_19%E5%8F%B7.pdf",
    publisher: "International Pacific University repository",
  },
  unesco: {
    title:
      "Cultural Heritage Administration, Republic of Korea, “Nanjung Ilgi: War Diary of Admiral Yi Sun-sin”, nomination to the Memory of the World Register (2012)",
    url: "https://media.unesco.org/sites/default/files/webform/mow001/republic_of_korea_nanjung_ilgi.pdf",
    publisher: "UNESCO",
  },
  adb: {
    title:
      "M. D. de B. Collins Persse, “Slim, Sir William Joseph (1891–1970)”, Australian Dictionary of Biography, vol. 16 (2002)",
    url: "https://adb.anu.edu.au/biography/slim-william-joseph-11713",
    publisher: "National Centre of Biography, Australian National University",
  },
  macgarrigle: {
    title:
      "George L. MacGarrigle, Central Burma (The U.S. Army Campaigns of World War II, Center of Military History, 1996)",
    url: "https://archive.org/details/CentralBurma",
    publisher: "Internet Archive",
  },
  iwo: {
    title: "Iwo Jima and Okinawa: Death at Japan’s Doorstep",
    url: "https://www.nationalww2museum.org/war/articles/iwo-jima-and-okinawa-death-japans-doorstep",
    publisher: "The National WWII Museum, New Orleans",
  },
  reportAid: mo(
    "0050_010_0050",
    `Yi Sun-sin, report on going to the aid of Gyeongsang (赴援慶尙道狀, 1592), in ${works}, vol. 2, in Classical Chinese`,
  ),
  reportDangpo: mo(
    "0050_010_0080",
    `Yi Sun-sin, report on the second sortie, from Sacheon to Yulpo (唐浦破倭兵狀, 1592), in ${works}, vol. 2, in Classical Chinese`,
  ),
  reportHansan: mo(
    "0050_010_0090",
    `Yi Sun-sin, report on the battles of Gyeonnaeryang and Angolpo (見乃梁破倭兵狀, 1592), in ${works}, vol. 2, in Classical Chinese`,
  ),
  diary1592_5: mo(
    "0080_010_0050",
    `Yi Sun-sin, war diary, 5th month of 1592, in ${works}, vol. 5, in Classical Chinese`,
  ),
  diary1592_6: mo(
    "0080_010_0060",
    `Yi Sun-sin, war diary, 6th month of 1592, in ${works}, vol. 5, in Classical Chinese`,
  ),
  annals1592Jun: jt(
    "N1_A25_06A_01A_00020",
    "Seonjo sujeong sillok, 25th year, 6th month, 1st day [2]: Yi Sun-sin defeats the Japanese in succession, Korean translation (Jo Myeong-geun, 1989)",
  ),
  ekOkpo: ek(
    "E0038825",
    "옥포해전 (The battle of Okpo) — Jo Seong-do, in Korean",
  ),
  ekSacheon: ek(
    "E0026034",
    "사천해전 (The battle of Sacheon) — Jo Seong-do, in Korean",
  ),
  ekDanghangpo: ek(
    "E0013958",
    "당항포해전 (The battles of Danghangpo) — Jo Seong-do, in Korean",
  ),
  ekHansan: ek(
    "E0061676",
    "한산도대첩 (The great victory at Hansan Island) — Jo Seong-do, in Korean",
  ),
  seikan2: ws(
    "征韓偉略/卷之二",
    "Kawaguchi Chōju, Seikan iryaku (1831), vol. 2, in Classical Chinese",
  ),
  royalArmouries: {
    title: "Waterloo 1815",
    url: "https://royalarmouries.org/objects-and-stories/stories/waterloo-1815",
    publisher: "Royal Armouries",
  },
  nagashino: {
    title: "Battle of Nagashino — Stephen Turnbull",
    url: "https://www.britannica.com/event/Battle-of-Nagashino",
    publisher: "Encyclopaedia Britannica",
  },
  polybius: {
    title: "Polybius, Histories, book 3, trans. Evelyn S. Shuckburgh (1889)",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0234%3Abook%3D3&force=y",
    publisher: "Perseus Digital Library, Tufts University",
  },
} satisfies Record<string, Source>;

export const yiVolume: LeadershipVolume = {
  commanderSlug: "yi-sun-sin",
  title: "Leadership Lessons from Yi Sun-sin: from Okpo to Noryang, 1592–1598",
  summary:
    "What a person who leads others can take from Yi Sun-sin, the Joseon admiral who won at sea in 1592, was charged by his own king in 1597, returned when the fleet was lost and died in the last battle of the war, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In the 5th lunar month of 1592 Yi Sun-sin, commander of the Left Jeolla fleet, took his ships out of his own province to fight the Japanese invasion off Okpo, and won. By 1593 he commanded the navies of all three southern provinces. In 1597 his king accused him of deceiving the court and letting the enemy go, crimes he said deserved death; Yi was imprisoned, released to serve without rank, and restored only after his successor’s fleet was destroyed at Chilcheollyang. With the ships that were left he held the strait of Myeongnyang, and in 1598, fighting beside a Ming fleet, he was killed at Noryang as the Japanese withdrew. This volume asks how a commander leads when his own government may be the greater danger, and how much of that story was written by others.",
  question:
    "How do you lead when your own government is the greater danger: by obedience, by evasion, by results, or does the record decide who was in danger?",
  parts: [
    "Orientation",
    "The first year",
    "Rivals and the court",
    "With almost nothing",
    "The end",
  ],
  lessons: [
    {
      slug: "how-to-read-yi",
      title:
        "A commander written by his nephew, his court and his nation: how to read Yi",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a commander’s own papers survive but his fame rests on what others wrote about him, the reader learns most by setting each famous story beside the document closest to the event, because family memorials, court histories and later admirers each chose what to keep.",
      inBrief: {
        strength:
          "Yi’s own reports and diary survive in the original, beside two editions of the court’s annals and the Japanese and Ming records.",
        shadow:
          "The sayings that made him famous come from his nephew’s memorial of him, not from his own hand.",
      },
      moment: {
        text: "Yi kept a diary almost every day of the war, from the 1st month of 1592 to two days before his death in the 11th month of 1598. The nomination of the diary to UNESCO’s Memory of the World register records that the manuscript was preserved by his descendants and is now kept at his memorial shrine, that one year is lost from it and survives only in print, and that the whole was printed in 1795, at the order of King Jeongjo, in the Complete Works of Yi Sun-sin. The same Complete Works print his reports to the court and, in an appendix, the Record of Conduct written after his death by his nephew Yi Bun. This volume reads them in the original Classical Chinese and gives them in its own words: their modern translations are protected, and no English rendering of Yi’s sentences is offered as his.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
      },
      episodes: [
        {
          title: "Okpo, three ways",
          text: "Yi’s own report on his first battle, written for the court in 1592, says he waited for the court’s order before leaving his province, ordered his captains to hold steady, and complained that Won Gyun’s men had shot at his own while seizing a prize. The revised Annals of King Seonjo, compiled after the war, tell it differently: Won Gyun had sunk his own fleet before an officer talked him out of fleeing, and Yi’s captains were reluctant until Jeong Un urged him to go. The Japanese compilation Seikan iryaku, written in 1831 from family records and from Ryu Seong-ryong’s Jingbirok, says Yi at first refused, citing the boundary of his command, and records the Japanese side of the battle in a single line: Tōdō Takatora fought at Karashima and lost.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 3 }, { source: 4 }],
          battleSlugs: ["okpo"],
        },
        {
          title: "Twelve ships",
          text: "The best-known words attributed to Yi come from his nephew. Yi Bun’s Record of Conduct says that after the fleet was destroyed in 1597, the court, thinking the navy too weak, ordered Yi to fight on land, and that Yi replied in a memorial that the navy had kept the Japanese out of Jeolla and Chungcheong for years, that he still had twelve warships, and that while he lived the enemy would not despise the navy. Yi’s own diary for that month records his preparations and the ships he had, but not the memorial; the court’s own dispatch to the Ming after the battle that followed calls it a small victory. The saying may record a real memorial, but it reaches us through a family memorial written after his death.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 5 }, { source: 6 }],
          battleSlugs: ["myeongnyang"],
        },
        {
          title: "Who hid his death",
          text: "Every account of Yi’s death at Noryang says it was concealed so that the fighting would go on; they disagree about who concealed it. The Record of Conduct says his eldest son, his nephew Wan and his servant hid his body and kept the flags signalling. The historians who wrote their comment into the Annals in 1598 say his son began to weep and an officer, Yi Mun-uk, stopped him, covered the body and beat the drum. The Seikan iryaku, following Jingbirok, says his nephew hid it. Each version honours a different person.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 7 }, { source: 8 }],
          battleSlugs: ["noryang"],
        },
        {
          title: "A hero and his rival",
          text: "The same historians of 1598 wrote that Won Gyun’s greed and cruelty had lost him his men and brought the defeat of 1597, and that the court had misused Yi. The Korean encyclopedia’s modern entry on Won Gyun, by Lee Jeong-il, presents him instead as a commander who fought on with scattered forces, quarrelled with Yi over credit and lost following the court’s unreasonable orders; it notes that he was enrolled with Yi among the first-class merit subjects of the war in 1604, and that while Yi became a national hero, Won Gyun has been remembered as the typical coward. A British admiral, G. A. Ballard, called Yi the Nelson of the East in 1921, in a chapter that misdates his removal from command.",
          evidence: "fact",
          refs: [{ source: 7 }, { source: 9 }, { source: 10 }],
          battleSlugs: ["chilcheollyang"],
        },
      ],
      witnesses: [
        {
          who: "Yi Sun-sin, in his reports of 1592",
          stake:
            "The commander reporting his own victories to a court that rewarded them with rank.",
          says: "The south was lost because its coastal commanders would not fight at sea.",
          refs: [{ source: 1 }],
        },
        {
          who: "Yi Bun, his nephew",
          stake:
            "A member of Yi’s family, writing his uncle’s Record of Conduct after his death.",
          says: "Yi told the court that with the ships he had left he could still hold the sea.",
          refs: [{ source: 2 }],
        },
        {
          who: "The court historians of 1598",
          stake:
            "The compilers of the Annals, writing their judgement beside the report of his death.",
          says: "The court misused Yi, and Won Gyun’s greed and cruelty lost the fleet.",
          refs: [{ source: 7 }],
        },
        {
          who: "Kawaguchi Chōju, in 1831",
          stake:
            "A Japanese compiler working from Japanese family records and a Korean minister’s memoir.",
          says: "Tōdō Takatora fought at Karashima and lost.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The strategist judges a decision by what the commander knew, and Yi’s papers give unusual help: his reports set out his reasons at the time, before any memorial or legend. After Okpo he explained why he would not land his archers in Geoje’s forests at dusk, and why so few enemy dead could be counted. Those reasons can be weighed as he gave them, and then set beside what the court and the enemy recorded.",
          evidence: "interpretation",
          refs: [{ source: 1 }],
        },
        {
          text: "The court’s side survives too. The Annals record the king’s own words in 1597, when he called for Yi’s punishment, and in the same year, when he blamed his commander-in-chief for the loss of the fleet. A reader who meets the court only through Yi’s admirers will see a jealous king; a reader of the Annals will see a king who wanted results from a navy he could not judge from afar. This volume reads both.",
          evidence: "interpretation",
          refs: [{ source: 11 }, { source: 13 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on collective memory and on how families and nations remember their dead could bear on how Yi’s story was shaped, but none was read for this volume. The lesson relies instead on comparing documents by their authors and dates.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; the lesson’s claims rest on who wrote each document and when.",
        },
      ],
      shadow: {
        text: "Reading in the original protects against borrowed translations, but it also means that most readers cannot check the readings, and this volume asks them to trust its paraphrases. Yi’s own reports are not neutral either: they were written to a court that rewarded victories, and in 1597 the king and Won Gyun both accused him of taking others’ credit. A hero’s own papers are evidence of how he wanted to be seen, as much as of what happened.",
        evidence: "interpretation",
        refs: [{ source: 1 }, { source: 11 }],
      },
      counterCase: {
        text: "William Slim, whose volume precedes this one, wrote his own record: the Australian Dictionary of Biography records that his Defeat into Victory, published in 1956, sold very widely and was hailed as one of the best-written books on the Second World War. Slim shaped his campaign’s story himself, a decade after it; Yi wrote reports and a diary but no account for the public, and his public story was made by his nephew, the court’s historians and, centuries later, his nation. The reader of Slim must watch the author; the reader of Yi must watch everyone else.",
        evidence: "interpretation",
        refs: [{ source: 12 }],
        commanderSlug: "william-slim",
        battleSlugs: [],
      },
      cost: {
        text: "The people who rowed, fished and fled appear in Yi’s papers only through him: the captive boy whose account of his seizure he recorded at Okpo, the refugees who waved from the hills, the fishermen whose boats were taken into the fleet. The Japanese crews appear only as enemies, and the Ming soldiers mostly as allies’ numbers. None of them left their own account in the sources read.",
        evidence: "interpretation",
        refs: [{ source: 1 }],
      },
      transfer: {
        holdsWhen: [
          "A leader’s own records survive, but the stories told about the leader come from family, colleagues or admirers.",
          "Records from the other side, and from the leader’s superiors, survive and can be set beside the admirers’ accounts.",
        ],
        failsWhen: [
          "A famous saying is repeated without asking who first wrote it down.",
          "Only the admirers’ accounts are read, or only the critics’.",
        ],
        questions: [
          "Which saying attributed to a leader you admire can you trace to the leader’s own words?",
          "Who has written the accepted account of a rival you have had?",
          "Whose record of a shared success would contradict yours?",
        ],
      },
      bearsOn:
        "The fourth answer to the volume’s question, the record, shapes all the others. The court’s danger is told most fully by Yi’s nephew and by the historians of 1598, both partisans; the court’s own words survive in the same Annals and tell a more complicated story. Each later lesson names whose account it is following.",
      questions: [
        {
          prompt:
            "Where does the saying that Yi still had twelve warships come from?",
          choices: [
            "Yi’s own diary for the 9th month of 1597.",
            "His nephew Yi Bun’s Record of Conduct, written after his death.",
            "The Ming history’s biography of Chen Lin.",
          ],
          answer: 1,
          explanation:
            "Yi Bun reports it as Yi’s memorial to the court; the diary for those weeks does not record it.",
        },
        {
          prompt:
            "According to the court historians of 1598, who concealed Yi’s death at Noryang?",
          choices: [
            "His nephew Wan.",
            "The officer Yi Mun-uk, who stopped Yi’s son from weeping and beat the drum.",
            "The Ming admiral Chen Lin.",
          ],
          answer: 1,
          explanation:
            "The Record of Conduct and Jingbirok name family members instead; each account honours a different person.",
        },
        {
          prompt:
            "Why do Yi’s report and the revised Annals tell the story of Okpo differently?",
          choices: [
            "One of them describes a different battle.",
            "Yi wrote for the court immediately after the battle; the revised Annals were compiled later and give more weight to Won Gyun’s collapse and Jeong Un’s urging.",
            "The Annals were written by the Japanese.",
          ],
          answer: 1,
          explanation:
            "Both are Korean records, written at different times for different purposes.",
        },
      ],
      sourceCheck: {
        question: "Was Won Gyun a coward?",
        witnesses: [
          {
            label: "The court historians of 1598",
            claim:
              "His greed and cruelty lost him his men and brought the defeat of 1597.",
          },
          {
            label: "Lee Jeong-il, Encyclopedia of Korean Culture",
            claim:
              "He fought on with scattered forces and lost following the court’s unreasonable orders.",
          },
          {
            label: "The merit roll of 1604",
            claim:
              "He was enrolled with Yi among the first-class merit subjects of the war.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the historians of 1598, since they wrote closest to the events.",
            feedback:
              "They wrote soon after, but as partisans of Yi; their judgement is evidence of a view at court, not a verdict.",
          },
          {
            text: "Set each judgement beside who made it and why, and read Won Gyun’s conduct in the documents of 1592 and 1597 before deciding.",
            feedback:
              "Each witness has a stake: Yi’s admirers, a modern reassessment, and a court that honoured him after the war. The later lessons read the documents.",
            best: true,
          },
          {
            text: "Accept the merit roll, since it is the state’s official honour.",
            feedback:
              "An honour granted after a war records what the state chose to reward, which may reflect politics as much as conduct.",
          },
        ],
      },
      seminar: {
        prompt:
          "Yi is one of Korea’s national heroes. Argue how a volume on his leadership should treat the sayings attributed to him, from three positions: his nephew writing the Record of Conduct, a Japanese compiler of 1831, and a Korean historian reassessing Won Gyun.",
        guidance:
          "Use the twelve ships, the three accounts of his death and the two judgements of Won Gyun. In each case say who wrote, when, and for whom.",
      },
      sources: [
        s.unesco,
        s.reportOkpo,
        s.haengnok,
        s.annals1592,
        s.seikan1,
        s.diary1597_9,
        s.annals1597Nov,
        s.annals1598,
        s.seikan5,
        s.ekWon,
        s.ballard,
        s.annals1597Jan,
        s.adb,
        s.annals1597Jul,
      ],
    },
    {
      slug: "beyond-his-province",
      title: "Beyond his province: going where the orders do not reach",
      part: "The first year",
      themes: ["judgement", "motivation"],
      claim:
        "When a commander’s neighbours have collapsed, he may go to their aid beyond his own command, but if he waits for authority he keeps his superiors’ trust at the price of time, and whether he can go at all depends on the captains who must follow him.",
      inBrief: {
        strength:
          "Yi took the only intact fleet in the south out of its province, with the court’s order, and won the first Korean victory at sea.",
        shadow:
          "He waited for orders and allies while the Gyeongsang coast burned, and steadied his crews by beheading deserters.",
      },
      moment: {
        text: "On the 29th day of the 4th month of 1592 a letter reached Yi Sun-sin, commander of the Left Jeolla fleet, from Won Gyun, commander of the Right Gyeongsang fleet to the east. The Japanese had landed at Busan and Gimhae, Won Gyun wrote; the coastal forts had fallen one after another, the beacons had gone dark, and his own headquarters was lost. He asked Yi to send every ship he had to Dangpo. Yi’s province had not yet been touched. His own report on the appeal records that the neighbouring garrison on Namhae had fled before seeing the enemy, and that his fleet numbered fewer ships than he wanted to take into waters he did not know.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "The appeal",
          text: "Yi’s report on going to Gyeongsang’s aid shows a province coming apart. His messenger found the Namhae town empty, its granaries open and its armoury stripped, and Yi ordered that if the report was true the stores were to be burned so that they would not feed the enemy. Some of his own soldiers and their families were slipping away by night; he had deserters beheaded and displayed. The report also gives his explanation of the disaster: the coastal commanders had not fought at sea and had let the enemy land at will, and had they kept their fleets on the water, the country would not have been brought so low.",
          evidence: "fact",
          refs: [{ source: 0 }],
          battleSlugs: [],
          campaignSlugs: ["joseon-naval-operations-of-1592"],
        },
        {
          title: "The captains",
          text: "The revised Annals of King Seonjo, compiled after the war, say that when Won Gyun’s messenger arrived most of Yi’s captains argued that they could barely hold their own province and had no time for another; only Jeong Un of Nokdo and the officer Song Hui-rip urged him, with tears, to go, saying that against the enemy there was no line between one province and another, and that blunting the enemy’s spearhead would also save their own. Yi was greatly pleased, and Eo Yeong-dam of Gwangyang offered to act as pilot. Yi’s diary for the first days of the 5th month records the captains’ resolve, one magistrate who seemed to want to avoid the expedition, and a sailor who deserted and was beheaded.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 2 }],
          battleSlugs: ["okpo"],
        },
        {
          title: "Waiting",
          text: "Yi did not sail at once. His report says he meant to wait until the Right Jeolla fleet, which the provincial governor had ordered to follow him, arrived; that he lacked pilots for Gyeongsang’s waters and had no support from the Gyeongsang commanders, who had fled; and that, hearing the enemy was nearing the capital, he longed to march to the king but, as a frontier commander, could not leave his post without orders. His report on Okpo opens with the court’s order to join the Gyeongsang fleet. The Japanese compilation Seikan iryaku, following Ryu Seong-ryong’s Jingbirok, tells it more harshly: Yi first declined, citing the boundary of his command, and sailed only after Won Gyun’s messenger had come back several times.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 3 }, { source: 4 }],
          battleSlugs: [],
        },
        {
          title: "Okpo",
          text: "The fleet sailed on the 4th day of the 5th month without the Right Jeolla ships, met Won Gyun off Dangpo on the 6th, and on the 7th found Japanese ships raiding the harbour of Okpo on Geoje. Yi ordered his captains to hold steady, the fleet advanced in line, and the Japanese, caught with their crews ashore, fled along the shore and abandoned their ships. That evening and the next morning more were destroyed at Happo and Jeokjinpo. Then the news that the king had left the capital reached the fleet, and Yi turned home. The court promoted him.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 1 }, { source: 5 }],
          battleSlugs: ["okpo"],
        },
      ],
      witnesses: [
        {
          who: "Yi Sun-sin, in his report of 1592",
          stake:
            "A provincial commander explaining to the court why he would go, and why not yet.",
          says: "He would gladly die striking the enemy, but could not move without orders, pilots or the fleet that was to follow him.",
          refs: [{ source: 0 }],
        },
        {
          who: "Won Gyun, as Yi’s report quotes his letter",
          stake:
            "The neighbouring commander whose province had fallen, asking for help.",
          says: "Every ship Yi had should come to Dangpo.",
          refs: [{ source: 0 }],
        },
        {
          who: "Jeong Un, as the revised Annals report him",
          stake: "One of Yi’s captains, the commander of Nokdo.",
          says: "There is no line between provinces against the enemy; blunting him there saves our own.",
          refs: [{ source: 1 }],
        },
        {
          who: "Kawaguchi Chōju, following Jingbirok",
          stake:
            "A Japanese compiler of 1831, relying on a Korean minister’s memoir.",
          says: "Yi first refused, citing his boundary, and went only when asked again and again.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "Yi weighed time against risk. Every day he waited, the Gyeongsang coast burned; but his fleet was the only intact force on the south coast, and taking it alone into unknown waters, without pilots or allies, risked losing it in the first week. He waited for the court’s order and for a few days for the Right Jeolla fleet, then sailed without the latter. At Okpo the risk paid: he found the enemy dispersed and unready.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 3 }],
        },
        {
          text: "Going to Gyeongsang’s aid was also a way of defending Jeolla. Jeong Un’s argument, as the Annals give it, was that the enemy’s spearhead had to be blunted where it was; Yi’s own report argued that the land had been lost because no one had fought at sea. A commander who goes beyond his orders to fight on another’s ground can be defending his own.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 0 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on helping across organisational boundaries, and on how groups decide whether to act when others are failing, could bear on Yi’s captains, but none was read for this volume. The lesson rests on what the reports, the diary and the Annals record.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the captains’ reasons are those the sources give.",
        },
      ],
      shadow: {
        text: "Yi’s waiting has a cost the reports do not count: the days in which the Gyeongsang coast was left to the raiders. His discipline had another: deserters beheaded and displayed, before the fleet had fought. And his own reports of these weeks blame others freely: the coastal commanders who fled, the magistrate who would not come, Won Gyun’s men who shot at his own.",
        evidence: "interpretation",
        refs: [{ source: 0 }, { source: 3 }, { source: 2 }],
      },
      counterCase: {
        text: "Emmanuel de Grouchy, sent by Napoleon after the Prussians beaten at Ligny in June 1815, kept to his orders. The Royal Armouries’ account of the campaign records that one of his corps commanders, Gérard, urged him to abandon the pursuit and march to the sound of the guns at Waterloo; Grouchy pressed on, was held by the Prussian rearguard at Wavre, and was still fighting there when the battle was lost, while an order from Napoleon to come and crush the Prussian corps on his flank came too late. Yi waited for orders and then went beyond his province; Grouchy obeyed his orders when the situation had outrun them.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        commanderSlug: "emmanuel-de-grouchy",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "The people of the Gyeongsang coast, who fled into the hills while their villages were plundered; the deserters executed to steady the fleet; and the captive boy taken from his family near Busan, whose account of his capture Yi recorded after Okpo.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "A neighbouring unit has failed and asks for help that lies outside one’s own remit.",
          "One’s own unit is intact, and the risk of acting is losing it.",
        ],
        failsWhen: [
          "Waiting for authority lets the situation pass beyond help.",
          "The people who must do the work have not been persuaded.",
        ],
        questions: [
          "When a neighbouring team failed, whose permission did you wait for, and what did the wait cost?",
          "Which of your people argued for going, and which against?",
          "What would you have had to risk to go a day earlier?",
        ],
      },
      bearsOn:
        "The first year gives the first evidence for obedience. Yi waited for the court’s order before leaving his province, and the court rewarded him for it with promotion. The same court, five years later, would accuse him of not attacking when ordered. The contrast is the volume’s question: obedience protected him in 1592 because it came with victories.",
      questions: [
        {
          prompt:
            "What did Won Gyun ask of Yi in his letter of the 4th month of 1592?",
          choices: [
            "That Yi stay in Jeolla and defend it.",
            "That Yi send every ship he had to Dangpo.",
            "That Yi march to the capital.",
          ],
          answer: 1,
          explanation:
            "Yi’s report on going to Gyeongsang’s aid quotes the letter.",
        },
        {
          prompt:
            "According to the revised Annals, who urged Yi to go to Gyeongsang’s aid when most of his captains were against it?",
          choices: [
            "Won Gyun and Yi Eok-gi.",
            "Jeong Un and Song Hui-rip.",
            "The king himself.",
          ],
          answer: 1,
          explanation:
            "They argued that there was no line between provinces against the enemy.",
        },
        {
          prompt: "Why did Yi turn home after Okpo, Happo and Jeokjinpo?",
          choices: [
            "His fleet had been defeated.",
            "News reached the fleet that the king had left the capital.",
            "Won Gyun ordered him back.",
          ],
          answer: 1,
          explanation:
            "His report on Okpo records the news and his decision to return.",
        },
      ],
      sourceCheck: {
        question: "Did Yi hesitate to go to Gyeongsang’s aid?",
        witnesses: [
          {
            label: "Yi’s report, 1592",
            claim:
              "He would go, but waited for orders, pilots and the Right Jeolla fleet.",
          },
          {
            label: "The revised Annals",
            claim:
              "Most of his captains were against it; Jeong Un and Song Hui-rip urged him, and he was greatly pleased.",
          },
          {
            label: "Seikan iryaku, following Jingbirok",
            claim:
              "He first declined, citing his boundary, and went only when asked repeatedly.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Yi’s report: he explained his own reasons at the time.",
            feedback:
              "His reasons are the best evidence of what he weighed, but he was writing to the court that would judge him.",
          },
          {
            text: "Read all three as agreeing that he waited, and differing on why: caution and orders in his own account, his captains’ reluctance in the Annals, his boundary in Jingbirok.",
            feedback:
              "The fact of the wait is common ground; the reasons depend on who wrote, and when.",
            best: true,
          },
          {
            text: "Accept the Seikan iryaku: it is the outside view.",
            feedback:
              "On this point it follows a Korean memoir, Jingbirok, so it is not an independent Japanese witness.",
          },
        ],
      },
      seminar: {
        prompt:
          "Yi waited for the court’s order before going to Gyeongsang’s aid. Argue whether he waited too long, from three positions: Won Gyun, Jeong Un and a villager on the Geoje coast.",
        guidance:
          "Use Yi’s report on going to Gyeongsang’s aid, the revised Annals and the Okpo report. Say what each knew on the day.",
      },
      sources: [
        s.reportAid,
        s.annals1592,
        s.diary1592_5,
        s.reportOkpo,
        s.seikan1,
        s.ekOkpo,
        s.royalArmouries,
      ],
    },
    {
      slug: "the-new-ship",
      title: "The new ship: a weapon inside an old formation",
      part: "The first year",
      themes: ["adaptation", "judgement"],
      claim:
        "When a new weapon is used as the point of a trained force, it can open a battle, but it does not win alone, and the legend that grows around it may outrun what its makers said it did.",
      inBrief: {
        strength:
          "Yi sent the turtle ship in first, at the moment the tide and a feigned withdrawal had made, and the fleet behind it did the rest.",
        shadow:
          "The ship became a national symbol and a claim to the world’s first ironclad that its maker’s own description does not make.",
      },
      moment: {
        text: "On the 29th day of the 5th month of 1592, at Sacheon, a ship went into action that Yi had built in case of invasion. His report on the sortie describes it: a dragon’s head at the bow with a cannon in its mouth, iron spikes set on its back, and a hull from which the crew could see out while the enemy could not see in, so that it could charge among even hundreds of enemy ships and fire. On this sortie it served as the ship of the assault commander, at the head of the fleet.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "Sacheon",
          text: "At Sacheon the Japanese held a steep ridge above their moored ships, the tide was out, and Yi’s arrows could not reach them. He told his captains that the enemy was overconfident and would follow if the fleet seemed to withdraw. The fleet turned away; part of the Japanese force came down to the ships and the shore. As the tide rose, the turtle ship charged among the Japanese ships and fired first, Yi pressed in behind, and the fleet destroyed the ships. A bullet struck Yi in the left shoulder and passed out through his back without serious injury; his diary records it in the same words. The encyclopedia calls Sacheon the turtle ship’s first battle.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
          battleSlugs: ["sacheon-1592"],
        },
        {
          title: "Dangpo",
          text: "Three days later, at Dangpo, the Japanese commander sat in a towered flagship. Yi’s report says he sent the turtle ship straight at it; it rammed the ship below the tower and fired its cannon up into it, and the commander, shot by an arrow, fell. The revised Annals tell the same scene and add that the king promoted Yi again after the sortie. Among the plunder was a gilded fan bearing Hideyoshi’s name and the title of the Lord of Chikuzen, and Yi concluded that the commander killed was that lord; the fan names another man as its recipient, so the identification is his inference.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 3 }],
          battleSlugs: ["sacheon-1592"],
        },
        {
          title: "What the Annals and the Japanese remembered",
          text: "The revised Annals, compiled after the war, describe the turtle ship more fully than Yi did: a planked roof like a turtle’s back with narrow crossing paths, the rest set with blades and spikes and covered with matting, a dragon’s head with a gun port at the bow, gun ports on every side, and a speed that let it pass through the enemy unharmed. The Japanese compilation Seikan iryaku, following Jingbirok, gives it a part at Hansan: arched like a turtle, its fighters and rowers inside, firing in all directions and moving among the Japanese ships like a weaver’s shuttle.",
          evidence: "fact",
          refs: [{ source: 4 }, { source: 5 }],
          battleSlugs: ["hansan-island"],
        },
        {
          title: "The legend",
          text: "The nomination of Yi’s diary to UNESCO’s Memory of the World register says that Korea built the world’s first armour-plated warships. Yi’s own description says nothing of armour plating: it gives iron spikes and a covered back. The revised Annals give planking, blades and matting. A claim made by a national heritage agency four centuries later is evidence of what the ship has come to mean, not of how it was built.",
          evidence: "uncertainty",
          refs: [{ source: 6 }, { source: 0 }, { source: 4 }],
          battleSlugs: ["sacheon-1592"],
        },
      ],
      witnesses: [
        {
          who: "Yi Sun-sin, in his report of 1592",
          stake: "The ship’s maker, reporting its first use to the court.",
          says: "He had built it fearing invasion, to charge among the enemy and fire.",
          refs: [{ source: 0 }],
        },
        {
          who: "The compilers of the revised Annals",
          stake:
            "Court historians writing after the war, when the ship was already famous.",
          says: "It passed through the enemy unharmed and won wherever it went.",
          refs: [{ source: 4 }],
        },
        {
          who: "Kawaguchi Chōju, following Jingbirok",
          stake: "A Japanese compiler of 1831 relying on a Korean memoir.",
          says: "The turtle ships moved among the Japanese like a shuttle and broke their ships with gunfire.",
          refs: [{ source: 5 }],
        },
        {
          who: "The Cultural Heritage Administration, 2012",
          stake:
            "A national heritage agency nominating the diary for international recognition.",
          says: "Korea built the world’s first armour-plated warships.",
          refs: [{ source: 6 }],
        },
      ],
      strategist: [
        {
          text: "The turtle ship opened the attack; it did not make the victories alone. Okpo, three weeks earlier, was won without it, by a fleet advancing in line with guns and arrows against an enemy caught dispersed. At Sacheon the decisive moves were the feigned withdrawal that brought the Japanese off their ridge and the tide that let the fleet close; the turtle ship was the point of the attack the fleet then delivered. Its value was to break into a formation the fleet could then destroy.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 2 }],
        },
        {
          text: "Yi also changed how his fleet fought around the new ship. His report on the sortie records a standing order that men who fought to the death would be rewarded first even if they took no heads, because the race for heads had cost lives; and he refused heads brought in by Gyeongsang fishermen, sending them to Won Gyun. A new weapon is used well when the rules for using it change with it.",
          evidence: "interpretation",
          refs: [{ source: 0 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on how new technology is adopted by organisations, and on how symbols gather meaning, could bear on the turtle ship, but none was read for this volume. The lesson rests on what the sources say the ship was and did.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson compares descriptions by their authors and dates.",
        },
      ],
      shadow: {
        text: "A weapon that becomes a symbol is hard to see clearly. The turtle ship is now one of Korea’s best-known images, and the claim to the world’s first ironclad is made by a national agency in an international nomination. Yi himself was wounded on the sortie that introduced it, leading from close behind it. The legend gives the ship credit that belonged to the fleet, the tide and the captains who followed it in.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 0 }],
      },
      counterCase: {
        text: "Oda Nobunaga at Nagashino in 1575 also won with a new weapon inside a prepared position. Britannica, in Stephen Turnbull’s article, records that he placed matchlock musketeers behind a palisade of staked fences staggered in three layers, with gaps for a counter-attack, and had them fire volleys at the Takeda cavalry that had beaten the Tokugawa two years before; the charge broke, and the Takeda fought on until mid-afternoon before retreating. Britannica calls it the first modern Japanese battle. As with the turtle ship, the weapon worked inside a formation built for it, and its fame has outrun the description of how it was used.",
        evidence: "interpretation",
        refs: [{ source: 7 }],
        commanderSlug: "oda-nobunaga",
        battleSlugs: ["nagashino"],
      },
      cost: {
        text: "Yi’s report on the sortie names the men of his fleet killed and wounded by bullets and arrows, ordered their bodies carried home for burial and their families provided for, and records Korean captives taken from the Japanese ships, among them a girl from Ulsan whose account of the Japanese commander he set down. The Japanese crews who drowned or fled ashore are counted only as enemies.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "A new tool gives an advantage at one point of an operation, and the rest of the organisation is trained to exploit the opening.",
          "The rules and incentives around the tool change with it.",
        ],
        failsWhen: [
          "The tool is credited with what the organisation and the circumstances achieved.",
          "The story of the tool replaces the record of how it was used.",
        ],
        questions: [
          "Which new tool in your work is credited with a success that the people around it made?",
          "What rule had to change before the tool could be used well?",
          "Who first described the tool, and how does that description compare with what is now said of it?",
        ],
      },
      bearsOn:
        "The turtle ship belongs to the third answer, results: it helped win the victories of 1592 that made Yi indispensable. It also belongs to the fourth: the ship’s legend, like Yi’s, has grown in later hands, and a reader of the volume must keep Yi’s own description apart from what was later said of his ship and of him.",
      questions: [
        {
          prompt: "How did Yi describe the turtle ship in his report of 1592?",
          choices: [
            "As an iron-plated warship.",
            "As a ship with a dragon’s head and cannon at the bow, iron spikes on its back, and a hull the enemy could not see into.",
            "As a captured Japanese ship.",
          ],
          answer: 1,
          explanation:
            "His report does not mention armour plating; the claim to the first ironclad is later.",
        },
        {
          prompt:
            "What decided the battle at Sacheon besides the turtle ship’s charge?",
          choices: [
            "A Ming fleet arriving.",
            "A feigned withdrawal that brought the Japanese off their ridge, and the rising tide that let the fleet close.",
            "A storm that wrecked the Japanese ships.",
          ],
          answer: 1,
          explanation:
            "Yi’s report sets out both; the turtle ship opened the attack the fleet delivered.",
        },
        {
          prompt:
            "Why did Yi conclude that the commander killed at Dangpo was the Lord of Chikuzen?",
          choices: [
            "A prisoner told him so.",
            "A gilded fan found on the flagship bore Hideyoshi’s name and that title, though it named another man as its recipient.",
            "The Japanese records say so.",
          ],
          answer: 1,
          explanation: "The identification is Yi’s inference from the fan.",
        },
      ],
      sourceCheck: {
        question: "Was the turtle ship the world’s first ironclad?",
        witnesses: [
          {
            label: "UNESCO nomination, 2012",
            claim: "Korea built the world’s first armour-plated warships.",
          },
          {
            label: "Yi’s report, 1592",
            claim:
              "A dragon’s head with a cannon, iron spikes on its back, a hull the enemy could not see into.",
          },
          {
            label: "The revised Annals",
            claim:
              "A planked roof like a turtle’s back, set with blades and covered with matting.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the UNESCO nomination: it is an official international document.",
            feedback:
              "It is a nomination written by a national agency, four centuries after the ship, and it cites no description of plating.",
          },
          {
            text: "Start from the maker’s own description, note what it says and does not say, and treat later claims as evidence of the ship’s reputation.",
            feedback:
              "Yi’s report and the Annals describe spikes, planking and matting; neither describes armour plating.",
            best: true,
          },
          {
            text: "Dismiss the turtle ship as a legend.",
            feedback:
              "Yi’s report records it in action at Sacheon and Dangpo; the ship is real, the superlative is the question.",
          },
        ],
      },
      seminar: {
        prompt:
          "Argue how much of the victories of 1592 belongs to the turtle ship, from three positions: its assault commander, a captain of a panokseon behind it, and a historian writing for a national museum.",
        guidance:
          "Use Yi’s reports on Okpo and the second sortie, the revised Annals and the UNESCO nomination. Remember that Okpo was won without it.",
      },
      sources: [
        s.reportDangpo,
        s.diary1592_5,
        s.ekSacheon,
        s.annals1592Jun,
        s.annals1592,
        s.seikan2,
        s.unesco,
        s.nagashino,
      ],
    },
    {
      slug: "a-way-out",
      title: "A way out: shaping where the enemy fights",
      part: "The first year",
      themes: ["judgement", "restraint"],
      claim:
        "When an enemy who is losing can escape to the shore, a commander may do better to offer him a way out to sea, where he can be destroyed, but the method needs room to fight, an enemy who takes the opening, and a commander willing to count what a trapped enemy would do to the people ashore.",
      inBrief: {
        strength:
          "At Danghangpo, Hansan and Angolpo Yi chose where the enemy would fight, and twice opened a way out to bring him into open water.",
        shadow:
          "At Hansan the way out led to an island where survivors would starve; the method served destruction first.",
      },
      moment: {
        text: "On the 5th day of the 6th month of 1592 the Korean fleets came to the mouth of Danghangpo, a long inlet in Goseong where the Japanese ships that had escaped from Dangpo were sheltering. Yi’s report on the sortie records his worry: if the Japanese were cornered they would abandon their ships and escape into the hills, as they had at Okpo, and could not all be destroyed. He sent a few warships in to look, with orders to feign a retreat if they were chased, and kept the rest of the fleet out of sight.",
        evidence: "fact",
        refs: [{ source: 0 }],
      },
      episodes: [
        {
          title: "Danghangpo",
          text: "The scouts signalled the enemy; Yi left ships at the mouth and led the fleet in. The Japanese ships lay against the shore near the head of the inlet, among them a flagship with a painted three-storey tower and black banners bearing the invocation of the Lotus Sutra. The Korean ships surrounded them and the turtle ship charged in. Then, judging that the Japanese would take to the land if they lost hope, Yi ordered the fleet to open one side and pretend to fall back. The flagship and its escort made for the gap and were caught in open water and destroyed. Yi left one ship deliberately as a way out; at dawn an officer waiting at the mouth caught it as the survivors came out in it.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1 }, { source: 2 }],
          battleSlugs: ["danghangpo"],
        },
        {
          title: "Hansan",
          text: "A month later a herdsman told the admirals that a large Japanese fleet lay in Gyeonnaeryang, a strait off Geoje. Yi’s report on the battle explains his choice of ground: the strait was narrow and full of hidden rocks, so that his ships would foul each other, and if the Japanese were cornered they would land; he would draw them out into the waters off Hansan Island, which lies between Geoje and Goseong with no way to swim ashore, so that even those who landed would starve. A few panokseon attacked and fell back; the Japanese followed into open water, and the fleet turned on them in a crane-wing formation. The Seikan iryaku, following Jingbirok, describes the same feigned withdrawal, the Korean ships turning together at a drumbeat once the Japanese were clear of the narrows.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }, { source: 5 }],
          battleSlugs: ["hansan-island"],
        },
        {
          title: "Angolpo",
          text: "The next day the fleets found more Japanese ships at Angolpo, in a shallow harbour that dried at low tide, and the Japanese would not come out. The fleets went in by turns and destroyed most of them. Yi then stopped. His report says that if every ship were burned, the Japanese ashore would become desperate men, and the villagers hiding in the hills would be slaughtered; so he drew back a short distance for the night. Before dawn the Japanese cut their cables and fled in the ships that were left.",
          evidence: "fact",
          refs: [{ source: 3 }],
          battleSlugs: ["hansan-island"],
        },
        {
          title: "The stranded",
          text: "When the fleet passed Hansan Island again on its way home, the Japanese who had landed there were starving, too weak to walk, sleeping on the shore; Yi wrote that they had no way out, like birds in a cage. Short of supplies and with news of the enemy advancing on Jeonju, he left them to the soldiers and people of Geoje.",
          evidence: "fact",
          refs: [{ source: 3 }],
          battleSlugs: ["hansan-island"],
        },
      ],
      witnesses: [
        {
          who: "Yi Sun-sin, in his reports of 1592",
          stake:
            "The commander explaining his choices to the court that rewarded his victories.",
          says: "A cornered enemy will escape ashore; draw him into open water, and do not drive him to desperation where the people are hiding.",
          refs: [{ source: 0 }, { source: 3 }],
        },
        {
          who: "Kawaguchi Chōju, following Jingbirok",
          stake: "A Japanese compiler of 1831 relying on a Korean memoir.",
          says: "Yi drew the Japanese out of the narrows by a feigned retreat and turned on them at a drumbeat.",
          refs: [{ source: 4 }],
        },
        {
          who: "Jo Seong-do, Encyclopedia of Korean Culture",
          stake: "A naval historian of the Korea Naval Academy.",
          says: "Danghangpo, fought twice, was the product of Yi’s careful planning.",
          refs: [{ source: 2 }],
        },
        {
          who: "Homer Hulbert, as the encyclopedia quotes him",
          stake: "An American writer on Korea, in 1906.",
          says: "Hansan was Korea’s Salamis.",
          refs: [{ source: 5 }],
        },
      ],
      strategist: [
        {
          text: "The common thread is that Yi decided where the enemy would fight. At Danghangpo he reconnoitred before entering a confined water; at Hansan he refused to fight in a strait that favoured the enemy and drew him into one that favoured himself. The opening he left was a tool for bringing the enemy to the place he wanted. It worked because the Japanese, as the encyclopedia’s account of Hansan has it, came on in high spirits as if to avenge their defeats, and took the bait.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 3 }, { source: 5 }],
        },
        {
          text: "Angolpo shows the same method turned to another end. There the opening was left not to destroy the enemy but to spare the people ashore from a trapped and desperate one. A commander who leaves an enemy a way out may be setting a trap or limiting a war’s cost, and the sources show Yi doing both within two days.",
          evidence: "interpretation",
          refs: [{ source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on how people behave when cornered, and on deception in competition, could bear on Yi’s method, but none was read for this volume. The lesson rests on Yi’s stated reasons and the battles’ course.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the enemy’s behaviour is as the Korean and Japanese accounts describe it.",
        },
      ],
      shadow: {
        text: "The way out at Hansan was not mercy. Yi chose the waters off the island because survivors who reached it would starve, and they did: he found them too weak to walk and left them. The method’s success also depended on an enemy who took the opening; where the Japanese would not come out, as at Angolpo, the fleet had to go in after them under fire. And every account of these battles, Korean and Japanese, rests in part on Yi’s own reports.",
        evidence: "interpretation",
        refs: [{ source: 3 }, { source: 0 }],
      },
      counterCase: {
        text: "At Cannae in 216 BCE Hannibal left the Romans no way out. Polybius describes his crescent of Iberian and Celtic infantry giving way before the Roman legions, which pressed into the centre until the African heavy infantry on both wings turned inward and charged their flanks; the Romans, caught between two lines, fought on in groups but could not escape. The Hannibal volume reads the battle as the fruit of reading the consul. Yi, facing an enemy who could escape ashore, did the reverse: he opened the line so that the enemy would leave the land behind.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        commanderSlug: "hannibal-barca",
        battleSlugs: ["cannae"],
      },
      cost: {
        text: "The villagers hiding in the hills above Angolpo, whose safety Yi weighed; the Japanese left starving on Hansan Island; the Korean captives freed from the Japanese ships; and the refugees from the coastal districts who came to Yi’s base after the second sortie and were settled near it.",
        evidence: "fact",
        refs: [{ source: 3 }, { source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "A competitor or opponent who is losing can withdraw to ground where he cannot be reached.",
          "There is open ground where the contest can be decided, and the opponent can be drawn there.",
        ],
        failsWhen: [
          "The opponent does not take the opening and stays where he is strong.",
          "The way out is offered without counting who else stands in its path.",
        ],
        questions: [
          "When did you last leave a rival a way out, and where did it lead?",
          "Who stood in the path of the way out you offered?",
          "Where would you rather your opponent fought, and how could you bring him there?",
        ],
      },
      bearsOn:
        "These victories are the results on which Yi’s standing rested. They are also the measure the court later used against him: in 1597 the king complained that Yi had done nothing since 1592. A commander whose early successes set the standard may find that caution afterwards is judged against them.",
      questions: [
        {
          prompt: "Why did Yi open a gap in his line at Danghangpo?",
          choices: [
            "His fleet was being defeated.",
            "He judged that the Japanese, if they lost hope, would abandon their ships and escape ashore; the gap drew them into open water.",
            "To let the Right Jeolla fleet in.",
          ],
          answer: 1,
          explanation: "His report on the sortie gives the reasoning.",
        },
        {
          prompt: "Why did Yi stop short of burning every ship at Angolpo?",
          choices: [
            "He had run out of ammunition.",
            "He feared that Japanese trapped ashore would become desperate and slaughter the villagers hiding in the hills.",
            "Won Gyun ordered him to stop.",
          ],
          answer: 1,
          explanation:
            "His report on the battle says so; the Japanese fled before dawn.",
        },
        {
          prompt: "Why did Yi choose the waters off Hansan Island?",
          choices: [
            "Because the Ming fleet was there.",
            "Because Gyeonnaeryang was narrow and rocky, and survivors who landed on Hansan would have no way off.",
            "Because the Japanese chose it.",
          ],
          answer: 1,
          explanation: "His report sets out both reasons.",
        },
      ],
      sourceCheck: {
        question: "Did Hansan decide the war at sea?",
        witnesses: [
          {
            label: "Jo Seong-do, Encyclopedia of Korean Culture",
            claim:
              "It nearly destroyed the main Japanese fleet and frustrated the plan to advance by land and sea together.",
          },
          {
            label: "Yi’s report on Hansan and Angolpo",
            claim:
              "Afterwards a lookout still counted many Japanese ships in the rivers at Yangsan and Gimhae.",
          },
          {
            label: "Seikan iryaku",
            claim:
              "Wakisaka escaped, and in his anger attacked again and took a Korean ship.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the encyclopedia: Hansan was decisive.",
            feedback:
              "It is a well-founded judgement of the battle’s effect on the Japanese plan, but Yi’s own report and the Japanese record show a war at sea that went on.",
          },
          {
            text: "Separate the battle’s effect on the Japanese plan, which the encyclopedia argues, from the claim that it ended the war at sea, which Yi’s report and the Japanese record contradict.",
            feedback:
              "A battle can decide a campaign’s shape without ending the fighting; the war at sea went on for six years.",
            best: true,
          },
          {
            text: "Accept the Seikan iryaku: Hansan changed little.",
            feedback:
              "Its account of Wakisaka’s revenge is a family record of one commander, not a judgement of the campaign.",
          },
        ],
      },
      seminar: {
        prompt:
          "At Hansan Yi chose ground where survivors would starve; at Angolpo he held back to spare villagers. Argue whether these were the same principle or two different ones, from three positions: a villager above Angolpo, a Japanese sailor stranded on Hansan, and Yi writing to the court.",
        guidance:
          "Use Yi’s reports on the second sortie and on Hansan and Angolpo, and the Seikan iryaku. Keep Yi’s stated reasons apart from their effects.",
      },
      sources: [
        s.reportDangpo,
        s.diary1592_6,
        s.ekDanghangpo,
        s.reportHansan,
        s.seikan2,
        s.ekHansan,
        s.polybius,
      ],
    },
    {
      slug: "the-agents-story",
      title: "The agent’s story: refusing an order the enemy wrote",
      part: "Rivals and the court",
      themes: ["judgement", "restraint"],
      claim:
        "When a commander will not act on intelligence he suspects, he may be right about the enemy and still be removed by his own side, because a court that has waited years for an attack can read caution as disobedience, and the commander’s past successes do not explain his present inaction.",
      inBrief: {
        strength:
          "Yi would not throw his fleet at a crossing an enemy agent had announced, and the court’s own record shows his patron still defending him.",
        shadow:
          "He had kept the fleet at Hansan for years; the king’s charges rested on grievances the court believed, and Yi was removed in the middle of a war.",
      },
      moment: {
        text: "On the 27th day of the 1st month of 1597, as the second Japanese invasion began, King Seonjo met his ministers to discuss the command of the navy. The Annals record his words: he did not know Yi well, but Yi seemed to lack wisdom; he had done nothing since 1592; he had let slip a chance heaven had given; and even if he brought back Katō Kiyomasa’s head he could not be forgiven. The chance was a crossing. A Japanese agent had told a Korean commander the day on which Katō, one of the invasion’s leading generals, would sail for Korea, and the court had ordered Yi to intercept him at sea. Katō landed.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1 }],
      },
      episodes: [
        {
          title: "The agent",
          text: "The Korean encyclopedia’s entry on Yi, by Lee Jang-hee, says a double agent named Yoshira, serving Konishi Yukinaga, told the Gyeongsang commander Kim Eung-seo that Katō would cross on a certain day and could be taken at sea; the court ordered Yi to act, and Yi, knowing it for a trap, sailed reluctantly, but Katō had landed days before. The Japanese compilation Seikan iryaku gives the same story from the other side: Konishi, knowing of the quarrel between Yi and Won Gyun, set out to divide them through Yoshira; Yi suspected a trick and delayed for days, and Yoshira came back to say that Katō had landed and to ask, with feigned regret, why the Koreans had not intercepted him. Neither account was written by Yi.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 2 }],
          battleSlugs: [],
          campaignSlugs: ["joseon-naval-operations-of-1597-1598"],
        },
        {
          title: "The court decides",
          text: "The meeting of the 27th shows the court divided, not unanimous. Ryu Seong-ryong, the chief minister, said he had recommended Yi for his first commands and knew him well, but agreed that Yi had stayed long at Hansan doing little and had not intercepted the crossing; he had argued against replacing him only because changing commanders in a crisis was hard. Jeong Tak said Yi was truly at fault but a commander should not be changed in an emergency. Yi Jeong-hyeong reported Yi’s reasons for basing the fleet at Hansan rather than on Geoje, where there was no sheltered anchorage and the enemy faced it across the water, and warned against appointing Won Gyun. Kim Su said Won Gyun often told him Yi had stolen his credit. The king proposed giving Won Gyun the fleet.",
          evidence: "fact",
          refs: [{ source: 0 }],
          battleSlugs: [],
        },
        {
          title: "The charges",
          text: "On the 13th day of the 3rd month the king sent his ministers a memorandum: Yi had deceived the court, which was disrespect to the king; had let the enemy go without attacking, which was betrayal of the country; had taken others’ merit and slandered them; and had acted without restraint. These were crimes deserving death, and the king asked how to proceed. A week later the court received Won Gyun’s report from Yi’s old command. It described an earlier show of force off Busan under Yi, in which, by the account of one of Yi’s own officers, the flagship had grounded at low tide near the enemy and Yi had to be carried to another ship. The Border Defence Council judged that show of force harmful, since it had let the enemy see the navy’s weakness.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }],
          battleSlugs: [],
        },
        {
          title: "The cost of being right",
          text: "The encyclopedia records that Yi was interrogated for about a month, that the minister Jeong Tak’s defence spared him further questioning, and that he was sent to serve without rank under the commander-in-chief Gwon Yul. His nephew’s Record of Conduct says he answered his interrogators without blaming anyone else. His diary takes up on the 1st day of the 4th month, the day he left prison; on the road south under guard he learned of his mother’s death. In the 7th month Won Gyun’s fleet was destroyed at Chilcheollyang, and in the 8th the court restored Yi to command.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 5 }, { source: 6 }],
          battleSlugs: ["chilcheollyang"],
        },
      ],
      witnesses: [
        {
          who: "King Seonjo, in 1597",
          stake:
            "The king who had fled his capital in 1592 and needed results from a navy he could not see.",
          says: "Yi had done nothing since 1592 and let a heaven-sent chance go; he could not be forgiven.",
          refs: [{ source: 0 }],
        },
        {
          who: "Ryu Seong-ryong, chief minister",
          stake:
            "The minister who had recommended Yi, defending him without excusing him.",
          says: "Yi was not without fault, but a commander should not be changed in a crisis.",
          refs: [{ source: 0 }],
        },
        {
          who: "Won Gyun, in his report of 1597",
          stake: "Yi’s rival and successor, reporting on Yi’s last operations.",
          says: "Yi’s show of force off Busan achieved nothing and nearly lost his flagship.",
          refs: [{ source: 4 }],
        },
        {
          who: "Lee Jang-hee, Encyclopedia of Korean Culture",
          stake: "A modern biographer of a national hero.",
          says: "Yi was the victim of an enemy ruse, of faction and of his rival’s accusations.",
          refs: [{ source: 1 }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Yi could know, the order rested on the word of an enemy agent about the timing of an enemy crossing. An attempt to intercept it meant taking the fleet towards Busan, into the waters near the enemy’s base where, by Won Gyun’s own report, Yi’s earlier show of force had nearly lost the flagship. Six months later Won Gyun, pressed into the same waters, lost the fleet. The Seikan iryaku confirms that the story was a Japanese design.",
          evidence: "interpretation",
          refs: [{ source: 2 }, { source: 4 }, { source: 7 }],
        },
        {
          text: "The court’s case was not baseless. Its chief minister, Yi’s own patron, agreed that the fleet had done little for years; Won Gyun’s report described an operation off Busan that had gone wrong; and Yi Jeong-hyeong admitted that matters on the frontier could not be judged from the capital. The strategist sees a commander right about the trap and a court right that it could not tell, from where it sat, whether his caution was judgement or reluctance. What the court lacked was a way to judge its admiral other than by attacks.",
          evidence: "interpretation",
          refs: [{ source: 0 }, { source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on how organisations judge cautious leaders, and on blame after ambiguous outcomes, could bear on the court’s decision, but none was read for this volume. The lesson rests on what the Annals record of the court’s reasoning.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the court’s reasons are those its ministers gave, as the Annals record them.",
        },
      ],
      shadow: {
        text: "The defence of Yi is told mostly by those who wrote after Chilcheollyang had proved him right. Before it, the king’s grievances were shared, in part, by Yi’s own patron. The same meeting heard that Yi’s officers, recruiting rowers in Namwon, had seized men’s relatives and killed a local officer, so that the town rang with weeping. A commander can be right about the enemy and still give his government reasons to distrust him.",
        evidence: "interpretation",
        refs: [{ source: 0 }],
      },
      counterCase: {
        text: "Joseph Stilwell, commanding American forces in China and serving as chief of staff to Chiang Kai-shek, was removed in October 1944 not for a lost battle but over command: MacGarrigle’s history for the U.S. Army records that when Roosevelt urged Chiang to put all his American-supported armies under Stilwell, Chiang refused and asked for Stilwell’s recall, and the president granted it. Stilwell was removed by his own government at an ally’s request and was not restored; Yi was removed by his own king on charges the court believed, and was restored only after the fleet was lost. In both cases the government judged its commander by a political measure he could not meet by fighting.",
        evidence: "interpretation",
        refs: [{ source: 8 }],
        commanderSlug: "joseph-stilwell",
        battleSlugs: [],
      },
      cost: {
        text: "The men taken in Namwon and their relatives, as reported at court; Yi’s mother, who died while her son travelled south under guard; and above all the crews of the fleet lost at Chilcheollyang, whose destruction was what restored Yi to command.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 5 }, { source: 7 }],
      },
      transfer: {
        holdsWhen: [
          "A leader is ordered to act on information he has good reason to distrust, by superiors far from the situation.",
          "The superiors have waited long for action and can judge only by visible results.",
        ],
        failsWhen: [
          "The leader’s caution is not explained, or the explanation does not reach those who decide.",
          "The leader’s other conduct gives the superiors grounds to distrust him.",
        ],
        questions: [
          "When did you last refuse an instruction you thought was based on bad information, and how did you explain it?",
          "What would your superiors need to see to tell your caution from reluctance?",
          "Who among your critics also has a point?",
        ],
      },
      bearsOn:
        "This lesson tests three of the volume’s answers at once. Obedience: Yi accepted arrest and served without rank. Evasion: his delay before the crossing was the charge, and the Japanese record confirms the trap he suspected. Results: only the fleet’s destruction restored him. The record answer is the warning: the court’s own words show its danger to Yi was real, but also that it had reasons, which his later admirers left out.",
      questions: [
        {
          prompt:
            "According to the encyclopedia and the Seikan iryaku, who carried the story of Katō Kiyomasa’s crossing to the Koreans?",
          choices: [
            "Won Gyun.",
            "Yoshira, an agent serving Konishi Yukinaga.",
            "A Ming envoy.",
          ],
          answer: 1,
          explanation:
            "The Seikan iryaku says Konishi used Yoshira to divide Yi and Won Gyun.",
        },
        {
          prompt:
            "What did Ryu Seong-ryong, who had recommended Yi, say at the court meeting of the 27th day of the 1st month of 1597?",
          choices: [
            "That Yi was blameless and the charges were invented.",
            "That Yi was not without fault, having done little at Hansan, but that changing commanders in a crisis was hard.",
            "That Won Gyun should command alone at once.",
          ],
          answer: 1,
          explanation:
            "His half-defence shows the court’s grievance was shared even by Yi’s patron.",
        },
        {
          prompt:
            "What did the Border Defence Council conclude from Won Gyun’s report on Yi’s show of force off Busan?",
          choices: [
            "That it had frightened the Japanese into withdrawing.",
            "That it had done harm, letting the enemy see the navy’s weakness.",
            "That Won Gyun should be punished for reporting it.",
          ],
          answer: 1,
          explanation:
            "The report described Yi’s flagship grounding at low tide near the enemy.",
        },
      ],
      sourceCheck: {
        question: "Was Yi’s arrest the work of faction?",
        witnesses: [
          {
            label: "Lee Jang-hee, Encyclopedia of Korean Culture",
            claim:
              "A faction attacking Ryu Seong-ryong, Won Gyun’s accusations and an enemy ruse brought Yi down.",
          },
          {
            label: "The Annals, 27th day of the 1st month of 1597",
            claim:
              "The king and his ministers, Yi’s patron among them, agreed that the fleet had done little for years.",
          },
          {
            label: "Seikan iryaku",
            claim: "Konishi used his agent to divide the Korean commanders.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the encyclopedia: the arrest was a plot.",
            feedback:
              "Faction and the enemy’s ruse played their part, but the Annals show that the grievance was shared by ministers who were not Yi’s enemies.",
          },
          {
            text: "Treat the arrest as the result of an enemy ruse working on a real grievance, in a court where Yi had both defenders and accusers.",
            feedback:
              "Each witness explains part of it; together they show why the court could believe it was enforcing discipline.",
            best: true,
          },
          {
            text: "Accept the king: Yi was disobedient and deserved punishment.",
            feedback:
              "The Japanese record confirms that the crossing was a trap, and the court itself blamed others when the fleet was lost.",
          },
        ],
      },
      seminar: {
        prompt:
          "Argue the court meeting of the 27th day of the 1st month of 1597 from three seats: the king, Ryu Seong-ryong and Yi Jeong-hyeong. Should Yi have been replaced?",
        guidance:
          "Use only what was known at the meeting: the agent’s story, the years at Hansan, Yi’s reasons for the base, Won Gyun’s grievance and the reports from Namwon. Then say what Chilcheollyang changes, and why it should not decide the argument.",
      },
      sources: [
        s.annals1597Jan,
        s.ekYi,
        s.seikan4,
        s.annals1597Mar13,
        s.annals1597Mar20,
        s.diary1597_4,
        s.haengnok,
        s.annals1597Jul,
        s.macgarrigle,
      ],
    },
    {
      slug: "the-remnant",
      title: "The remnant: Myeongnyang",
      part: "With almost nothing",
      themes: ["motivation", "judgement"],
      claim:
        "When a commander has almost nothing left, he can still choose the ground and the moment, and his example and the threat of punishment may hold a frightened force together for one battle, but one battle does not decide a campaign, and its meaning depends on who records it.",
      inBrief: {
        strength:
          "Yi chose his ground, led from the front and forced hesitant captains into the fight, and the Japanese vanguard turned back.",
        shadow:
          "He threatened his own captains with death, withdrew north afterwards, and the court called it a small victory.",
      },
      moment: {
        text: "On the 3rd day of the 8th month of 1597 a royal messenger reached Yi, still serving without rank, with a letter appointing him again commander of the navies of the three provinces. The fleet he had built had been destroyed at Chilcheollyang two weeks before. His diary records that he set out the same day. Over the next month, riding through towns whose officials had fled and whose granaries the retreating army had burned, he gathered men, weapons and the few warships that had escaped, and on the 16th day of the 9th month he met the Japanese fleet in the strait of Myeongnyang.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1 }],
      },
      episodes: [
        {
          title: "Gathering what was left",
          text: "The diary for the 8th month is a record of collapse. Officials who had fled were summoned and rebuked; a granary burned by the provincial army commander was found in ashes; elsewhere he found the stores intact and set men to guard them. Yi fell seriously ill and spent nights unable to rise. When men raised a false alarm that the enemy had come, he had them beheaded, and the camp, he wrote, was steadied. Bae Seol, the Gyeongsang commander who had brought ships away from Chilcheollyang, avoided him and, on the 2nd day of the 9th month, deserted. His nephew’s Record of Conduct adds that the court, thinking the navy too weak, ordered Yi to fight on land, and that he refused in a memorial: while he lived, the enemy would not despise the navy.",
          evidence: "fact",
          refs: [{ source: 0 }, { source: 1 }, { source: 2 }, { source: 3 }],
          battleSlugs: [],
          campaignSlugs: ["joseon-naval-operations-of-1597-1598"],
        },
        {
          title: "Choosing the ground",
          text: "A night attack on the 7th day of the 9th month was beaten off. On the 14th a captive who had escaped reported that the Japanese meant to destroy the remnant of the fleet and then sail up to the river at the capital. On the 15th Yi judged that so few ships could not fight with the strait of Myeongnyang behind them, and moved to the anchorage in front of the Right Jeolla naval base. He called his captains together and told them, citing the military classics, that those who resolve to die live and those who seek to live die, and that one man holding a narrow path can frighten a thousand; any who disobeyed would be dealt with by military law. That night, the diary says, he dreamed that a spirit told him how he would win and how he would lose.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 3 }],
          battleSlugs: ["myeongnyang"],
        },
        {
          title: "The fight in the strait",
          text: "On the morning of the 16th the Japanese fleet entered the strait and surrounded Yi’s ships. His captains, judging the odds hopeless, held back, and the Right Jeolla commander withdrew far off. Yi’s ship went forward alone, firing, and he told his frightened crew that however many ships the enemy had, they could not overcome his. When the others still hung back he signalled the commander of his centre, Kim Eung-ham, and An Wi of Geoje, and called out to An Wi to ask whether he wanted to die under military law. An Wi charged into the enemy and was nearly overwhelmed; Yi went to his aid. A Japanese who had surrendered to Yi pointed out a commander in the water, and Yi had the man hauled aboard and cut to pieces. The Korean ships attacked together, the Japanese withdrew, and Yi, calling it truly heaven’s luck, moved his fleet away that night. The encyclopedia adds that the tide turned during the fight, disordering the larger fleet in the narrows.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 3 }],
          battleSlugs: ["myeongnyang"],
        },
        {
          title: "What it was",
          text: "In the following days Yi’s fleet withdrew north along the coast of Jeolla. Writing to the Ming headquarters, the court forwarded his report and called the result a small victory that had blunted the enemy, so that Japanese ships would not enter the western sea. The encyclopedia, a modern Korean synthesis, judges that it turned the course of the second invasion. Ogawa Takaaki, reviewing the literature, argues from the accounts of two Koreans captured by the Japanese fleet just after the battle, and from Yi’s withdrawal, that the Koreans won a tactical victory over the vanguard while the Japanese navy won the campaign. The Japanese records barely mention it: the Seikan iryaku has only a line taken from Jingbirok, and Aston, writing from Japanese and Korean records in 1883, called the fighting slight engagements.",
          evidence: "uncertainty",
          refs: [
            { source: 4 },
            { source: 3 },
            { source: 5 },
            { source: 6 },
            { source: 7 },
          ],
          battleSlugs: ["myeongnyang"],
        },
      ],
      witnesses: [
        {
          who: "Yi Sun-sin, in his diary",
          stake:
            "The commander’s private daily record, written the night of the battle.",
          says: "The captains held back and had to be forced in; the victory was heaven’s luck.",
          refs: [{ source: 1 }],
        },
        {
          who: "The court, writing to the Ming",
          stake:
            "A government asking its ally for ships after the loss of its own fleet.",
          says: "The navy had won a small victory that would keep the Japanese out of the western sea.",
          refs: [{ source: 4 }],
        },
        {
          who: "Ogawa Takaaki",
          stake:
            "A Japanese scholar reviewing Korean and Japanese accounts, in a university bulletin.",
          says: "The Koreans won a tactical victory over the vanguard; the Japanese won the campaign.",
          refs: [{ source: 5 }],
        },
        {
          who: "Yi Bun, his nephew",
          stake: "The family biographer, writing after Yi’s death.",
          says: "Yi told the court that while he lived the enemy would not despise the navy.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Yi’s choice of ground is recorded the day before the battle, in his own reasoning: a handful of ships could not fight with a dangerous strait at their back, but at its mouth a larger fleet would have to come at them through the narrows, where numbers counted for less and the tide could turn against it. He chose the place where the enemy’s advantage was smallest and accepted a fight he could not avoid if the Japanese were to be kept from the western sea.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 3 }],
        },
        {
          text: "The withdrawal north is the harder judgement. Read as preservation, it kept the only Korean fleet in being, which is what the court hoped would let it rebuild with Ming ships. Read as Ogawa reads it, it left the coast to the Japanese, who were burning towns behind him as he sailed. Both readings fit the diary; the strategist can say that Yi chose to keep the fleet rather than the coast, and that the choice was his to make only because he had won the day before.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 4 }, { source: 5 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on leadership under fear, and on the effects of threatened punishment on groups, could bear on Yi’s conduct in the strait, but none was read for this volume. The lesson rests on what the diary records he said and did, not on what he felt.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the diary records actions and words, and the lesson does not infer his state of mind from his illness or his dream.",
        },
      ],
      shadow: {
        text: "The force that held at Myeongnyang was held by fear as well as example. Yi had men beheaded for a false alarm, threatened his captains with military law before the battle, called out to An Wi to ask whether he wanted to die under it, and spared Kim Eung-ham, the diary says, only because the fight was still in the balance. The account of the battle is Yi’s own, written that night. And the battle that made his legend was, to the court that reported it, a small victory followed by a withdrawal.",
        evidence: "interpretation",
        refs: [{ source: 1 }, { source: 0 }, { source: 4 }],
      },
      counterCase: {
        text: "Tadamichi Kuribayashi, defending Iwo Jima in 1945, also chose his ground with too little. The National WWII Museum records that he recognised he could not defeat an American landing and planned instead a long and costly defence to shake American resolve, concentrating his garrison underground in the north of the island, and that his men, most of them conscripts, fought on until only a few were taken alive. Like Yi he chose where the enemy’s advantage would be smallest; unlike Yi he had no fleet to save and no way out, and his choice of ground made the battle longer and costlier without changing its end.",
        evidence: "interpretation",
        refs: [{ source: 8 }],
        commanderSlug: "tadamichi-kuribayashi",
        battleSlugs: ["iwo-jima"],
      },
      cost: {
        text: "The men executed for a false alarm; the sailors killed on Yi’s ship, whom the diary names; the Japanese who drowned in the strait; the refugees whose boats gathered behind the fleet and who brought food after the battle; and the coastal towns the Japanese burned as Yi withdrew north.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1 }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "A leader takes over a broken organisation and must act before it can be rebuilt.",
          "The leader can choose where to meet the next challenge, and the choice reduces the opponent’s advantages.",
        ],
        failsWhen: [
          "Fear is used where trust has not yet been built, and the organisation learns only fear.",
          "One success is taken for a reversal of the whole situation.",
        ],
        questions: [
          "When you last took over something broken, what did you decide not to defend?",
          "What have you asked of people by example, and what by threat?",
          "Who called your best success small, and were they wrong?",
        ],
      },
      bearsOn:
        "Myeongnyang is the volume’s clearest case of the third answer, results: a commander restored after disaster won the battle that made him indispensable again. It is also a case of the fourth: the twelve ships and the meaning of the victory reach us through his nephew and through a modern tradition, while the court of 1597 called it small and the Japanese records barely noticed it.",
      questions: [
        {
          prompt:
            "Why did Yi move his fleet on the 15th day of the 9th month of 1597?",
          choices: [
            "To escape the Japanese fleet altogether.",
            "Because he judged that so few ships could not fight with the strait of Myeongnyang behind them.",
            "To join the Ming fleet.",
          ],
          answer: 1,
          explanation:
            "His diary records the reasoning; he moved to the anchorage in front of the Right Jeolla naval base.",
        },
        {
          prompt: "How did the court describe the battle to the Ming?",
          choices: [
            "As the decisive victory of the war.",
            "As a small victory that would keep the Japanese out of the western sea.",
            "As a defeat.",
          ],
          answer: 1,
          explanation:
            "The modern encyclopedia judges it far more important; the court was writing to an ally whose ships it needed.",
        },
        {
          prompt:
            "What does Ogawa Takaaki conclude from the accounts of Koreans captured just after the battle?",
          choices: [
            "That the battle never happened.",
            "That the Koreans won a tactical victory over the vanguard while the Japanese navy won the campaign.",
            "That the Ming fleet decided the battle.",
          ],
          answer: 1,
          explanation:
            "His review is a minority view; the lesson gives it beside the court’s and the encyclopedia’s.",
        },
      ],
      sourceCheck: {
        question: "Was Myeongnyang a great victory?",
        witnesses: [
          {
            label: "Encyclopedia of Korean Culture",
            claim:
              "It blocked the western sea and turned the course of the second invasion.",
          },
          {
            label: "The court, writing to the Ming, 1597",
            claim:
              "A small victory that blunted the enemy and would keep his ships out of the western sea.",
          },
          {
            label: "Ogawa Takaaki",
            claim:
              "A tactical Korean victory over the vanguard; a strategic Japanese victory.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the encyclopedia: it is the modern consensus.",
            feedback:
              "It is the Korean synthesis, but the court that reported the battle and the captives who saw the Japanese fleet afterwards give reasons for caution.",
          },
          {
            text: "Separate what the battle did on the day, which all agree on, from what it did to the campaign, which is disputed, and ask why each writer weighed it as they did.",
            feedback:
              "The day is clear from Yi’s diary; the campaign is the argument, and each witness had reasons to weigh it as they did.",
            best: true,
          },
          {
            text: "Accept Ogawa: the withdrawal proves the Japanese won.",
            feedback:
              "The withdrawal kept the only Korean fleet in being, which the court valued; a strategic judgement needs the rest of the campaign.",
          },
        ],
      },
      seminar: {
        prompt:
          "Yi threatened his captains with death and then led them into a fight they thought hopeless. Argue whether his conduct in the strait is a model of leadership, from three positions: An Wi, whom he called out by name; a sailor on Yi’s own ship; and a refugee whose boat waited behind the fleet.",
        guidance:
          "Use the diary for the 15th and 16th days of the 9th month, the court’s dispatch and Ogawa’s abstract. Keep what Yi did apart from what he may have felt.",
      },
      sources: [
        s.diary1597_8,
        s.diary1597_9,
        s.haengnok,
        s.ekMyeong,
        s.annals1597Nov,
        s.ogawa,
        s.seikan5,
        s.aston4,
        s.iwo,
      ],
    },
  ],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
