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
