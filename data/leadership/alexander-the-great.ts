import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 2. Lessons are added in reviewed batches; docs/LEADERSHIP_EVIDENCE_ALEXANDER.md
// records which sources can carry each one, and docs/SOURCE_AUDIT.md how each
// was read (batch A1 is the pilot).
const arrian = (book: string, chapter: string, label: string): Source => ({
  title: `Arrian, Anabasis of Alexander ${label} (trans. E. J. Chinnock, 1884)`,
  url: `https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_${book}/Chapter_${chapter}`,
  publisher: "Wikisource",
});
const lacus = "LacusCurtius, University of Chicago";
const plutarch = (part: string, label: string): Source => ({
  title: `Plutarch, Life of Alexander ${label} (trans. Bernadotte Perrin, Loeb, 1919)`,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Alexander%2A/${part}.html`,
  publisher: lacus,
});
const diodorus = (part: string, label: string): Source => ({
  title: `Diodorus Siculus, Library of History ${label} (Loeb, vol. VIII, 1963)`,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diodorus_Siculus/${part}%2A.html`,
  publisher: lacus,
});
const livius = "Livius.org (Jona Lendering)";
const s = {
  a1_13: arrian("I", "XIII", "1.13"),
  a1_15: arrian("I", "XV", "1.15"),
  a2_3: arrian("II", "III", "2.3"),
  a2_17: arrian("II", "XVII", "2.17"),
  a4_18: arrian("IV", "XVIII", "4.18"),
  a4_19: arrian("IV", "XIX", "4.19"),
  a5_25: arrian("V", "XXV", "5.25"),
  a5_26: arrian("V", "XXVI", "5.26"),
  a5_27: arrian("V", "XXVII", "5.27"),
  a5_28: arrian("V", "XXVIII", "5.28"),
  a5_29: arrian("V", "XXIX", "5.29"),
  a6_9: arrian("VI", "IX", "6.9"),
  a6_10: arrian("VI", "X", "6.10"),
  a6_11: arrian("VI", "XI", "6.11"),
  a6_12: arrian("VI", "XII", "6.12"),
  a6_13: arrian("VI", "XIII", "6.13"),
  a6_24: arrian("VI", "XXIV", "6.24"),
  a7_9: arrian("VII", "IX", "7.9"),
  a7_29: arrian("VII", "XXIX", "7.29"),
  plu3: plutarch("3", "1–24.3"),
  plu9: plutarch("9", "62–65"),
  dio17b: diodorus("17B", "17.17–39"),
  dio17e: diodorus("17E", "17.84–103"),
  vulgate: {
    title: "Alexander the Great: the vulgate",
    url: "https://www.livius.org/articles/person/alexander-the-great/alexander-3.2-the-vulgate/",
    publisher: livius,
  },
  arrianSources: {
    title: "Alexander the Great: Arrian’s sources",
    url: "https://www.livius.org/articles/person/alexander-the-great/alexander-3.3-arrians-sources/",
    publisher: livius,
  },
  diary: {
    title:
      "A contemporary account of the battle of Gaugamela (Babylonian Astronomical Diary for 331 BCE)",
    url: "https://www.livius.org/sources/content/oriental-varia/a-contemporary-account-of-the-battle-of-gaugamela/",
    publisher: livius,
  },
  badianDarius: {
    title: "Ernst Badian, “Darius v. Darius III” (1994)",
    url: "https://www.iranicaonline.org/articles/darius-v/",
    publisher: "Encyclopaedia Iranica",
  },
  houdecek: {
    title:
      "Bulletins de la Grande Armée commandés par Napoléon (François Houdecek, 2019)",
    url: "https://www.napoleon.org/histoire-des-2-empires/objets/bulletin-de-la-grande-armee",
    publisher: "Fondation Napoléon",
  },
  ducoulombier: {
    title:
      "Romain Ducoulombier, Une nouvelle histoire des mutineries de 1917 (2010), a review of André Loez, 14-18. Les refus de la guerre, in French",
    url: "https://laviedesidees.fr/Une-nouvelle-histoire-des",
    publisher: "La Vie des idées",
  },
  schynsBligh: {
    title:
      "Birgit Schyns and Michelle C. Bligh, Introduction to the special issue on the romance of leadership (2007), abstract",
    url: "https://doi.org/10.1111/j.1464-0597.2007.00301.x",
    publisher: "Applied Psychology",
  },
  hammond: {
    title:
      "Michelle M. Hammond, Birgit Schyns, Gretchen Vogelgesang Lester and Rachel Clapp-Smith, The romance of leadership: rekindling the fire through replication of Meindl and Ehrlich (2021), abstract",
    url: "https://doi.org/10.1016/j.leaqua.2021.101538",
    publisher: "The Leadership Quarterly",
  },
  hermalin: {
    title:
      "Benjamin E. Hermalin, Toward an economic theory of leadership: leading by example (working paper, 1996), abstract",
    url: "https://ideas.repec.org/p/wop/calbha/_006.html",
    publisher: "RePEc IDEAS",
  },
  morrison: {
    title:
      "Elizabeth Wolfe Morrison, Employee voice and silence (2014), abstract",
    url: "https://doi.org/10.1146/annurev-orgpsych-031413-091328",
    publisher:
      "Annual Review of Organizational Psychology and Organizational Behavior",
  },
} satisfies Record<string, Source>;

export const alexanderVolume: LeadershipVolume = {
  commanderSlug: "alexander-the-great",
  title: "Leadership Lessons from Alexander the Great",
  summary:
    "What a person who leads others can take from Alexander’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Alexander led his father’s army from the Hellespont into India, and there it refused to go further. Two years later, at Opis, it mutinied again. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. Almost nothing written in his lifetime survives beyond a few inscriptions and Babylonian records; the narratives were written centuries later from accounts now lost, so every lesson begins with who is speaking. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did his army stop following him, or did he stop leading it?",
  parts: [
    "Orientation",
    "The instrument",
    "The consent of the army",
    "Winning and ruling",
    "What remains",
  ],
  lessons: [
    {
      slug: "how-to-read-alexander",
      title: "Learning from a man whose record is lost",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a leader’s record was written long afterwards from accounts now lost, a lesson drawn from it is worth only as much as the chain of witnesses behind each episode.",
      inBrief: {
        strength:
          "Companions and a court historian wrote up his campaigns, and every later account depends on them.",
        shadow:
          "Their books are lost; what survives was written centuries later by authors with lessons of their own to teach.",
      },
      moment: {
        text: "At Gordium in 333 BCE Alexander went up to the citadel to see an old wagon whose yoke was tied with a cord of cornel bark. Whoever loosened it, the story ran, would rule Asia. Arrian, writing more than four centuries later, gives two versions. Some say Alexander could find no way to loosen the cord and cut it through with his sword. Aristobulus, who served on the campaign, says he pulled out the wooden pin that held the cord to the wagon-pole and drew the yoke away. Arrian then says plainly: “How Alexander performed the feat in connection with this cord, I cannot affirm with confidence.” Plutarch knows the same two versions and says most writers prefer the sword. The cut knot became the version everyone knows. The one ancient historian who weighed it would not vouch for it.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "2.3" },
          { source: 1, locator: "Alexander 18" },
        ],
      },
      episodes: [
        {
          title: "Two crossings of the Granicus",
          text: "In Arrian, Parmenion advises Alexander to camp on the bank of the Granicus in 334 and cross at daybreak: the river is deep in places, the far bank steep, and the Persian cavalry will catch the army as it climbs out in broken order. Alexander answers that after crossing the Hellespont so easily it would be a disgrace if this brook barred his way, and attacks at once. Plutarch tells the same story and adds that he seemed to be acting like a frenzied and foolish commander rather than a wise one. Diodorus tells a different one. Alexander camps opposite the enemy, the Persians make no move, and at dawn he brings the army across before they can stop him. Even the duel that followed differs: the Loeb editors of Diodorus note that Arrian, Plutarch and Diodorus disagree about which Persian struck Alexander and which one Cleitus cut down.",
          evidence: "uncertainty",
          refs: [
            { source: 2, locator: "1.13" },
            { source: 1, locator: "Alexander 16" },
            { source: 3, locator: "17.19–20 and note 19" },
          ],
          battleSlugs: ["granicus"],
        },
        {
          title: "A Babylonian witness to Gaugamela",
          text: "One account of Gaugamela was written in the weeks that followed by someone with no interest in Greek glory: a Babylonian astronomer keeping the diary of omens, prices and events at the Esagila temple. It records a total eclipse of the moon, then panic in the camp before the king, then a heavy defeat on the day of battle. It says the king’s troops deserted him and fled. It records Alexander’s message to Babylon, “Into your houses I shall not enter”, and his entry into the city as “king of the world”. The Greek writers say Darius fled from his army. The diary, as Livius translates it, has the army leave the king. The note on the page says this has embarrassed classicists, and that of the Greek authors only Diodorus describes Darius as a fighter.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: ["gaugamela"],
        },
        {
          title: "Two families of writers",
          text: "The narratives that survive were written centuries after Alexander’s death: Diodorus in the first century BCE, Curtius in the first century CE, Arrian in the second. Lendering sorts them into two families. The vulgate goes back to Cleitarchus, who wrote in Alexandria a generation later: vivid, entertaining, often wrong, with a dark portrait of the king, and preserved in Diodorus and Curtius. Arrian, a Greek in Roman service in the second century CE, followed Ptolemy and Aristobulus, who had both served on the campaign. Ptolemy later ruled Egypt as king, exaggerated his own part, and ignored his rival Antigonus. Arrian trusted him because, he said, it is more disgraceful for a king to lie, a reason Lendering says few modern scholars will find impressive. Lendering still calls the vulgate certainly not a bad source: some details, such as the crucifixions at Tyre, are known only from it.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 6 }],
          battleSlugs: [],
          campaignSlugs: ["macedonian-invasion-of-persia"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, in the second century CE",
          stake:
            "An admirer, writing under Rome from the memoirs of two companions, one of whom became a king.",
          says: "He names his sources, sets versions side by side and admits doubt. He also explains away faults: Alexander’s anger and Persian manners were no wonder given “his youth and his uninterrupted career of good fortune”.",
          refs: [
            { source: 0, locator: "2.3" },
            { source: 7, locator: "7.29" },
          ],
        },
        {
          who: "Ptolemy, as Arrian reports him",
          stake:
            "A companion who later ruled Egypt and had reasons to shape his own role.",
          says: "Some writers had Ptolemy save Alexander’s life in India and earn the name Soter for it. Ptolemy himself, Arrian notes, recorded that he was not even present, which Arrian calls the greatest error in the histories of Alexander.",
          refs: [{ source: 8, locator: "6.11" }, { source: 6 }],
        },
        {
          who: "Plutarch, around 100 CE",
          stake:
            "A moral biographer looking for character, not a historian of campaigns.",
          says: "“It is not Histories that I am writing, but Lives”: a phrase or a jest, he says, can reveal more of a man than battles.",
          refs: [{ source: 1, locator: "Alexander 1" }],
        },
        {
          who: "Diodorus, in the first century BCE",
          stake:
            "A universal historian following Cleitarchus, the vulgate’s source.",
          says: "At the Granicus the army camps first and crosses at dawn before the Persians can stop it.",
          refs: [{ source: 3, locator: "17.19" }, { source: 5 }],
        },
        {
          who: "A Babylonian astronomer in 331 BCE",
          stake:
            "Kept a temple record of the sky, prices and events, and had no part in the Greek argument.",
          says: "The king’s troops deserted him; Alexander entered Babylon as “king of the world”.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge a decision by what could be known at the time. That rule needs an agreed decision to judge. At the Granicus, Parmenion’s case as Arrian gives it is a sound one: a deep river, steep banks and enemy cavalry waiting to strike a column as it climbs out. If Arrian is right, Alexander chose speed and moral effect against that risk. If Diodorus is right, the famous choice never happened and the army crossed unopposed at dawn. Before asking whether a decision was wise, ask whether the sources agree that it was made.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "1.13" },
            { source: 3, locator: "17.19" },
          ],
        },
        {
          text: "The speeches need the same caution. Arrian gives Alexander and his officers long speeches in direct words: before the siege of Tyre, at the Hyphasis and at Opis. Ancient historians composed such speeches to show what they thought the speaker would have said. They are evidence of how a second-century writer understood the situation, and the later lessons treat them that way: never as Alexander’s words.",
          evidence: "interpretation",
          refs: [
            { source: 13, locator: "2.17" },
            { source: 9, locator: "5.25" },
            { source: 14, locator: "7.9" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "The romance of leadership, now contested",
          base: "contested",
          text: "The Napoleon volume used the romance of leadership, the tendency Schyns and Bligh describe as attributing responsibility for an organisation’s performance to its leaders while disregarding other factors. A history written to show one man’s character would be expected to do exactly that. The finding is less secure than it looked. Hammond, Schyns, Lester and Clapp-Smith ran four studies replicating Meindl and Ehrlich’s early experiment, and report that together they do not support the finding that organisations are viewed more favourably when outcomes are attributed to leadership. So this volume does not lean on a bias in readers. It leans on something visible in the texts: Arrian and Plutarch tell us they are writing about a man, and they choose their stories for what those stories say about him.",
          evidence: "interpretation",
          refs: [{ source: 10 }, { source: 11 }],
          limit:
            "Only the abstracts were read. The studies concern modern evaluators of companies, and cannot say how ancient writers or readers attributed success.",
        },
      ],
      shadow: {
        text: "The tradition that made Alexander famous also supplies the verdict against him, and it arrives ready-made. Ancient moralists liked the story of a man corrupted by success. Arrian excuses Alexander’s anger by his youth and his uninterrupted good fortune; others make the same pattern a charge. When later lessons ask whether Alexander changed, they have to remember that change was what these authors expected to find. A frame the sources bring with them is not evidence that it fits.",
        evidence: "interpretation",
        refs: [{ source: 7, locator: "7.29" }, { source: 5 }],
      },
      counterCase: {
        text: "Napoleon’s record poses the opposite problem, and the first lesson of his volume deals with it. He dictated his bulletins, staff officers worked them up, and they magnified successes and played down setbacks and losses. In 1811 he ordered the collected bulletins reprinted with the things recognised as false taken out, to leave an official record, as had been done for Marengo. The army gave the bulletins a saying, “menteur comme un bulletin”. Having the leader’s own words in abundance did not make the record more reliable. For both men the reader ends in the same place, weighing witnesses who each had a stake.",
        evidence: "interpretation",
        refs: [{ source: 12 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["marengo"],
      },
      cost: {
        text: "The way the record counts the dead is itself a warning. After the Granicus, Plutarch reports a vast Persian toll and, citing Aristobulus, a tiny number of Macedonian dead. Numbers that served a victor’s story are not used in these lessons, but the habit they show stays in view: the people who paid for a battle could vanish from its account.",
        evidence: "interpretation",
        refs: [{ source: 1, locator: "Alexander 16" }],
      },
      transfer: {
        holdsWhen: [
          "The account of a success was written after the fact by people who served the person it praises.",
          "Two independent accounts of the same event survive and can be compared.",
        ],
        failsWhen: [
          "Every source is dismissed for having a stake. Arrian names his doubts, and that makes him more useful, not less.",
          "Only one account survives. Then the honest course is to say what cannot be known.",
        ],
        questions: [
          "Which story about your organisation’s founding is told most often, and who first told it?",
          "Where two people remember the same decision differently, what would settle it?",
          "Which of the speeches you remember were written afterwards?",
        ],
      },
      bearsOn:
        "Both answers to the volume’s question come to us through these authors. Arrian puts the army’s case in a speech he wrote for Coenus, and the charge that Alexander changed suits a moral pattern the ancient writers liked. Each lesson that follows asks which family of sources an episode comes from before it counts it as evidence for either side.",
      questions: [
        {
          prompt:
            "What does Arrian say about whether Alexander cut the Gordian knot?",
          choices: [
            "That he cut it, as all writers agree.",
            "That Aristobulus says he pulled out the pin, and that he himself cannot affirm with confidence how it was done.",
            "That the story was invented by Plutarch.",
          ],
          answer: 1,
          explanation:
            "Arrian gives both versions and declines to choose. The sword became famous anyway.",
        },
        {
          prompt:
            "On what point does the Babylonian Astronomical Diary differ from the Greek accounts of Gaugamela?",
          choices: [
            "It says the king’s troops deserted him, where the Greek writers have Darius flee his army.",
            "It places the battle in a different year.",
            "It says Alexander was defeated.",
          ],
          answer: 0,
          explanation:
            "The diary, as Livius translates it, has the troops leave the king. Livius notes that only Diodorus among the Greek authors shows Darius as a fighter.",
        },
        {
          prompt:
            "Why should a speech in Arrian not be quoted as Alexander’s words?",
          choices: [
            "Because Arrian wrote in Latin.",
            "Because ancient historians composed speeches to show what they thought a speaker would have said.",
            "Because Alexander never addressed his officers.",
          ],
          answer: 1,
          explanation:
            "A speech is evidence of what the historian found plausible, centuries later.",
        },
      ],
      sourceCheck: {
        question: "How did Alexander’s army cross the Granicus in 334 BCE?",
        witnesses: [
          {
            label: "Arrian, from Ptolemy and Aristobulus",
            claim:
              "Parmenion urged him to wait for daybreak; Alexander refused and attacked across the river at once.",
          },
          {
            label: "Diodorus, from Cleitarchus",
            claim:
              "Alexander camped opposite the Persians and crossed at dawn before they could stop him.",
          },
        ],
        prompt: "How should a historian use these two accounts?",
        options: [
          {
            text: "Prefer Arrian, because modern historians usually follow him.",
            feedback:
              "His sources were on the campaign, which counts. But Ptolemy shaped his own role, and Plutarch’s agreement may reflect a shared tradition rather than independent proof.",
          },
          {
            text: "Prefer Diodorus, because the dawn crossing is the more prudent plan.",
            feedback:
              "Choosing the version that seems more sensible is a way of writing the history we would prefer.",
          },
          {
            text: "Record the disagreement, and avoid building a lesson about boldness on an episode whose course is disputed.",
            feedback:
              "The disagreement is real and old. A lesson can use it to teach how the record works, but not as proof of a trait.",
            best: true,
          },
        ],
        battleSlug: "granicus",
      },
      seminar: {
        prompt:
          "Pick one story about Alexander you knew before this lesson. Which family of sources does it come from, and who first told it?",
        guidance:
          "Ask whether it is in Arrian, the vulgate or Plutarch, whether any source names its witness, and what the teller wanted the story to show. The Gordian knot is the model.",
      },
      sources: [
        s.a2_3,
        s.plu3,
        s.a1_13,
        s.dio17b,
        s.diary,
        s.vulgate,
        s.arrianSources,
        s.a7_29,
        s.a6_11,
        s.a5_25,
        s.schynsBligh,
        s.hammond,
        s.houdecek,
        s.a2_17,
        s.a7_9,
      ],
    },
    {
      slug: "the-king-in-the-front-rank",
      title: "The king in the front rank",
      part: "The instrument",
      themes: ["motivation", "judgement"],
      claim:
        "When followers see a leader share the risks they run, the bond can carry them far, and the more that bond rests on one life, the more the whole enterprise is staked on it.",
      inBrief: {
        strength:
          "He fought in the front rank and led assaults himself, and his army saw it.",
        shadow:
          "At the Malli town the bond and the single point of failure were the same thing.",
      },
      moment: {
        text: "In 325 BCE, attacking a town of the Malli in India, Alexander thought the men with the ladders too slow. In Arrian’s account he snatched a ladder, climbed it under his shield, cleared the battlement and stood on the wall alone, a target for the towers on either side. His guards, anxious for him, crowded onto the same ladder and broke it. Arrian gives his reasoning: if he stayed on the wall he would be in danger without achieving anything; if he leapt down inside he might terrify the defenders, and if not, he would at least die not ignobly, after deeds worth remembering. He leapt down into the citadel.",
        evidence: "fact",
        refs: [{ source: 0, locator: "6.9" }],
      },
      episodes: [
        {
          title: "The Granicus",
          text: "Plutarch says Alexander was conspicuous by his shield and the great white plumes of his helmet, and that many rushed at him. In Arrian’s account Alexander unhorsed Darius’s son-in-law with a borrowed spear; Rhoesaces broke off part of his helmet with a scimitar; and as Spithridates raised his scimitar from behind, Cleitus, son of Dropidas, cut off his arm. Diodorus has a slight scalp wound, and the names and order of the attackers differ in each account. All three agree on the essentials: the king fought in the thick of the cavalry battle and owed his life to a companion.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "1.15" },
            { source: 2, locator: "Alexander 16" },
            { source: 3, locator: "17.20" },
          ],
          battleSlugs: ["granicus"],
        },
        {
          title: "The winged men",
          text: "In 327 the defenders of the Sogdian Rock laughed at the offer of terms and told Alexander to find winged soldiers, since they feared no other men. He proclaimed rewards for the first men to reach the summit, from twelve talents down to three hundred darics. The men who had practised scaling rocks in sieges climbed at night with tent pegs and ropes. Some fell, and their bodies were never found in the snow. At dawn the rest waved linen flags from the top, a herald shouted that the winged men had been found, and the defenders surrendered. Here the king did not climb. He proclaimed a prize, and others ran the risk.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "4.18" },
            { source: 5, locator: "4.19" },
          ],
          battleSlugs: ["sogdian-rock"],
        },
        {
          title: "The camp that thought him dead",
          text: "Inside the Malli citadel an arrow went through Alexander’s breastplate into his chest; Ptolemy, Arrian says, reports that air came out of the wound with the blood. Peucestas held the shield brought from Troy over him until the Macedonians broke in. The first news to reach the main camp was that he had died. Arrian describes lament, then despair. Many officers seemed equal in rank and merit, so no one knew who would lead; the army was surrounded by warlike peoples and impassable rivers. When word came that he lived, most did not believe it, and they suspected his letter was forged by his bodyguards and generals. Diodorus adds that Greek settlers in Bactria and Sogdiana, hearing he was dead, rose against the Macedonians. Only when Alexander had himself carried downriver, held up his hand from the ship and then mounted his horse did the army cheer.",
          evidence: "fact",
          refs: [
            { source: 6, locator: "6.10" },
            { source: 7, locator: "6.12" },
            { source: 8, locator: "6.13" },
            { source: 9, locator: "17.99" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, citing Ptolemy for the wound",
          stake:
            "An admirer who still judges, writing from memoirs of men who served beside the king.",
          says: "Alexander lacked the self-control to keep away from danger, “through his impetuosity in battle and his passion for glory”, like men mastered by any other pleasure.",
          refs: [{ source: 8, locator: "6.13" }],
        },
        {
          who: "Nearchus, as Arrian reports him",
          stake:
            "Alexander’s admiral and friend, writing his own memoir after the campaign.",
          says: "Friends reproached the king for exposing himself in front of the army, saying that was the duty of a private soldier, not of the general. Alexander was offended. Arrian thinks he knew they were right.",
          refs: [{ source: 8, locator: "6.13" }],
        },
        {
          who: "Plutarch",
          stake:
            "A moral biographer who admires courage and looks for its excess.",
          says: "Charging across the Granicus, Alexander seemed to be acting like a frenzied and foolish commander rather than a wise one.",
          refs: [{ source: 2, locator: "Alexander 16" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "Follows a tradition that enjoyed the dramatic scene.",
          says: "At the Malli town Alexander thought it out of keeping with his record of success to climb down without achieving anything, and leapt inside.",
          refs: [{ source: 9, locator: "17.99" }],
        },
        {
          who: "Ernst Badian, in the Encyclopaedia Iranica",
          stake:
            "A modern historian reading the Greek sources against themselves, from the Persian side.",
          says: "The Greek historians were quick to charge Darius with cowardice, though bravery was his best-attested quality.",
          refs: [{ source: 10 }],
        },
      ],
      strategist: [
        {
          text: "Personal risk bought real things. A king in the first wave at the Granicus could see the decisive point, act at once, and draw men after him across a river that Parmenion thought too dangerous. The cost was also knowable before the battle. The army had no settled second in command: when the camp later thought him dead, many officers seemed equal in rank, and no one could say who would lead. A commander who stakes himself in every assault is staking the expedition too, and the arrangement depends on his luck holding.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "1.15" },
            { source: 7, locator: "6.12" },
          ],
        },
        {
          text: "At the Malli town the example worked against itself. The guards broke the ladders because they rushed to follow him, and the wall he took was a minor objective. Arrian’s account of his reasoning, to terrify the defenders or die after deeds worth remembering, is Arrian’s reconstruction, but even in Arrian the calculation is about glory more than about the campaign. The Sogdian Rock shows another way to the same end: a public prize, specialists who had practised climbing, and a plan to make the defenders believe the climbers were more numerous than they were.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "6.9" },
            { source: 6, locator: "6.10" },
            { source: 5, locator: "4.19" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Leading by example as a signal",
          base: "theory",
          text: "Hermalin’s economic theory begins from a distinction: leadership is not authority, because following a leader is voluntary rather than coerced. His working paper asks how a leader brings rational followers to follow when the leader may have reasons to mislead them; its title names the answer it explores, leading by example. Read that way, a leader’s own risk is a signal that cannot be faked cheaply: words about the danger being worth it cost nothing, but standing in the front rank does. The Napoleon volume read presence through social identity. This reading adds that example persuades because it is costly, which also explains why it cannot be delegated.",
          evidence: "interpretation",
          refs: [{ source: 11 }],
          limit:
            "Only the abstract was read, and it is a formal model of rational followers in organisations. It cannot measure what Macedonian soldiers felt.",
        },
      ],
      shadow: {
        text: "The Malli town shows the bond and its weakness as one thing. Because the army followed the man, the report of his death left it without a leader it could agree on, afraid of the peoples around it, and unwilling to believe even his own letter. Settlers far away took the same report as a signal to rebel. His friends told him, in Nearchus’s account, that he was doing a private soldier’s duty. Arrian’s verdict is that Alexander knew they were right and could not stop.",
        evidence: "interpretation",
        refs: [
          { source: 7, locator: "6.12" },
          { source: 8, locator: "6.13" },
          { source: 9, locator: "17.99" },
        ],
      },
      counterCase: {
        text: "Darius III left the field at Issus and again at Gaugamela, and the Greek tradition made him a coward. Badian argues that this misreads him. Bravery, he writes, was Darius’s best-attested quality; at Issus he more probably understood that the only chance of saving the kingdom lay in saving himself, because if he died there was no plausible successor who could command allegiance and lead resistance. The Babylonian diary even has his troops desert him at Gaugamela, not the reverse. The same weakness sat inside both armies: everything depended on one man. Alexander risked himself to hold his army; Darius preserved himself to hold an empire, and lost it anyway.",
        evidence: "interpretation",
        refs: [{ source: 10 }, { source: 12 }],
        commanderSlug: "darius-iii",
        battleSlugs: ["issus", "gaugamela"],
      },
      cost: {
        text: "The bond had a cost for others too. When the Macedonians broke into the Malli citadel and saw their king lying on the ground, Arrian says they killed every Indian there, sparing not even a woman or child. Diodorus says they were in a fury at the injury to their king and filled the city with corpses.",
        evidence: "fact",
        refs: [
          { source: 13, locator: "6.11" },
          { source: 9, locator: "17.99" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people you lead can see the risks you take, and the risks are of the same kind as theirs.",
          "Someone else could take over at once if you were lost.",
        ],
        failsWhen: [
          "The organisation cannot work without you, so your risk is everyone’s.",
          "Taking the risk yourself is about your reputation more than about the task.",
        ],
        questions: [
          "Which risks do you share with the people you lead, and which do you only ask of them?",
          "If you were unavailable tomorrow, would people know who decides?",
          "When did your own example last cost you something?",
        ],
      },
      bearsOn:
        "The Malli town came after the refusal at the Hyphasis. Men still broke ladders rushing to follow Alexander, wept when they saw him alive and pressed to touch his hands and clothes. Whatever stopped at the Hyphasis, it was not the army’s attachment to the man. That favours the answer that his aims outran theirs over the answer that they stopped following him.",
      questions: [
        {
          prompt:
            "According to Nearchus, as Arrian reports him, what did Alexander’s friends reproach him for after the Malli town?",
          choices: [
            "For exposing himself in front of the army, which they called a private soldier’s duty, not the general’s.",
            "For turning back at the Hyphasis.",
            "For trusting Ptolemy.",
          ],
          answer: 0,
          explanation:
            "Arrian adds that Alexander was offended because he knew the criticism was correct.",
        },
        {
          prompt:
            "Why, in Arrian’s account, did the army disbelieve the first news that Alexander was alive?",
          choices: [
            "Because the messenger was a Persian.",
            "Because in their fear they suspected the letter was forged by his bodyguards and generals.",
            "Because the news came from Diodorus.",
          ],
          answer: 1,
          explanation:
            "Only seeing him, on the ship and then on horseback, convinced them.",
        },
        {
          prompt: "What is Badian’s reading of Darius’s flight at Issus?",
          choices: [
            "Proof of cowardice, as the Greek historians say.",
            "A planned feint.",
            "A probable judgement that saving himself was the only way to save the kingdom, since no plausible successor existed.",
          ],
          answer: 2,
          explanation:
            "Badian notes that bravery was Darius’s best-attested quality, and reads the flight as a political calculation.",
        },
      ],
      sourceCheck: {
        question:
          "Who protected Alexander when he fell inside the Malli citadel?",
        witnesses: [
          {
            label: "Arrian",
            claim:
              "All agree that Peucestas covered him; accounts differ on Leonnatus and Abreas; writers who say Ptolemy was there are wrong, as Ptolemy himself says he was elsewhere.",
          },
          {
            label: "Plutarch",
            claim:
              "Peucestas and Limnaeus defended him; Limnaeus was killed and Peucestas held out.",
          },
        ],
        prompt: "What can a historian safely say?",
        options: [
          {
            text: "That Ptolemy saved the king and was called Soter for it.",
            feedback:
              "Arrian calls this the greatest error in the histories of Alexander, on Ptolemy’s own testimony that he was not there.",
          },
          {
            text: "That Peucestas covered him, and that the other names are disputed.",
            feedback:
              "Arrian says all agree on Peucestas, and Plutarch names him too. Beyond that the record divides.",
            best: true,
          },
          {
            text: "Nothing at all, since the accounts conflict.",
            feedback:
              "Disagreement on details does not erase the point on which every account agrees.",
          },
        ],
      },
      seminar: {
        prompt:
          "Alexander risked himself; Darius preserved himself. Under what conditions would each choice have been the right one?",
        guidance:
          "Consider who could have replaced each man, what each army needed to see, and whether the Greek picture of Darius can be trusted. Badian and the Babylonian diary are the starting points.",
      },
      sources: [
        s.a6_9,
        s.a1_15,
        s.plu3,
        s.dio17b,
        s.a4_18,
        s.a4_19,
        s.a6_10,
        s.a6_12,
        s.a6_13,
        s.dio17e,
        s.badianDarius,
        s.hermalin,
        s.diary,
        s.a6_11,
      ],
    },
    {
      slug: "the-river-they-would-not-cross",
      title: "The river they would not cross: the Hyphasis, 326 BCE",
      part: "The consent of the army",
      themes: ["motivation", "communication", "restraint"],
      claim:
        "When followers have been asked for more than they will give, a leader may learn the limit only by reaching it, and the way he turns back decides what remains of the bond.",
      inBrief: {
        strength:
          "When the army refused, he did not force it, and found a way to turn back that both sides could accept.",
        shadow:
          "He learned the limit only by reaching it, after years of asking for one more effort.",
      },
      moment: {
        text: "At the Hyphasis, the easternmost river of his campaign, Alexander called his officers together a second time, in anger. In Arrian’s account he told them he would go on with those who chose to follow, and that the rest could go home and tell their families they had deserted their king among his enemies. Then he went into his tent and admitted none of his Companions for three days, waiting for the mood of the camp to change. It did not. There was profound silence, and the soldiers were plainly annoyed at his anger without being changed by it. Ptolemy, Arrian says, records that he then sacrificed for the crossing and the omens were unfavourable. Alexander called the oldest of the Companions and announced that the army would turn back.",
        evidence: "fact",
        refs: [{ source: 0, locator: "5.28" }],
      },
      episodes: [
        {
          title: "After the Hydaspes",
          text: "Plutarch says the struggle with Porus blunted the Macedonians’ courage and stayed their advance into India; they had heard of vast armies and elephants beyond the next river. Arrian reports that the land beyond the Hyphasis was said to be fertile, well governed and rich in elephants. These reports excited in Alexander an ardent desire to go on, but the spirit of the Macedonians began to flag, he writes, when they saw the king raising one labour after another and incurring one danger after another. Meetings were held throughout the camp. The most moderate men lamented their lot; others said they would not follow him any farther, even if he led the way.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "Alexander 62" },
            { source: 2, locator: "5.25" },
          ],
          battleSlugs: ["hydaspes"],
        },
        {
          title: "The council and Coenus",
          text: "Diodorus says Alexander saw that his men were exhausted after almost eight years of toil and danger. Horses’ hooves were worn thin, armour was failing, Greek clothing had given way to recut Indian garments, and the rains had lasted seventy days. He let them plunder the country and gave rations to their wives and bounties to their children, then made a careful speech; they did not accept it. In Arrian the speech is long, and when it ends there is a long silence: the officers neither dared to oppose the king nor wished to agree. At last Coenus speaks for the bulk of the army. Few of those who set out are left, most lost to disease; the rest are worn in body and more in spirit, and long for parents, wives, children and home. Do not lead us against our will, he says, for without free will the men will not be the same in danger.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "17.94" },
            { source: 4, locator: "5.26" },
            { source: 5, locator: "5.27" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
        {
          title: "Three accounts of the turning",
          text: "The sources agree that the army turned back and disagree on how. In Arrian the omens give the reason, and the soldiers shout and weep for joy and pray for blessings on Alexander, “because by them alone he suffered himself to be conquered”. Twelve altars as tall as towers mark the limit. Plutarch places the refusal at the Ganges. Alexander shuts himself in his tent in anger, counting retreat a confession of defeat, until his friends console him and the soldiers crowd at his door, pleading and wailing. He then leaves behind oversized armour, high mangers and heavy bits, which Plutarch calls deceitful devices for the enhancement of his fame. Diodorus has altars to the twelve gods and a camp three times the normal size, to leave the natives evidence of men of huge stature.",
          evidence: "uncertainty",
          refs: [
            { source: 6, locator: "5.29" },
            { source: 1, locator: "Alexander 62" },
            { source: 3, locator: "17.95" },
          ],
          battleSlugs: [],
          campaignSlugs: ["indian-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Arrian, citing Ptolemy for the sacrifices",
          stake:
            "Follows a companion who became king, and who had reason to show the turning as the gods’ decision.",
          says: "The king waited three days for the soldiers to change their minds; when they did not, the omens forbade the crossing and he announced the return.",
          refs: [{ source: 0, locator: "5.28" }],
        },
        {
          who: "Coenus, in the speech Arrian wrote for him",
          stake:
            "A senior officer, honoured and rewarded, speaking for men below him: and a composition by a historian four centuries later.",
          says: "He will speak not to please the men but for what is safest for the king, and the men will not be the same in danger if they are led against their will.",
          refs: [{ source: 5, locator: "5.27" }],
        },
        {
          who: "Plutarch",
          stake: "A moralist alert to vanity in great men.",
          says: "Alexander counted retreat a confession of defeat, relented only to his soldiers’ wailing, and covered his withdrawal with deceitful devices for his fame.",
          refs: [{ source: 1, locator: "Alexander 62" }],
        },
        {
          who: "Diodorus, from the vulgate",
          stake: "Interested in the scene and in the king’s generosity.",
          says: "Alexander tried gratitude first, with plunder for the men and pay for their families; the Macedonians still refused his speech.",
          refs: [{ source: 3, locator: "17.94" }],
        },
      ],
      strategist: [
        {
          text: "The refusal was foreseeable. Arrian has open meetings throughout the camp, and Diodorus has Alexander reading his army’s exhaustion and trying to buy its goodwill before he spoke. His alternatives were few. He could not force an army that held the only power that mattered, its willingness to fight. He could go on with volunteers, which he threatened and did not do. Or he could turn back. Once persuasion and gifts had failed, the strategic question was no longer whether to stop but how to stop without breaking his authority.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "5.25" },
            { source: 3, locator: "17.94" },
          ],
        },
        {
          text: "The sacrifices answered that question. They let the turning be the gods’ decision rather than the army’s victory over its king. The army seems to have understood it differently, if Arrian is right: the soldiers thanked him for letting himself be conquered by them alone. Both readings could hold at once, and that is the point of a face-saving device. The altars and the oversized camp did the same work for posterity. The army was intact for the voyage down the Indus. It did not end the risk: the Malli town and the march through the Gedrosian desert still lay ahead, the desert chosen, in the one account Arrian gives of the motive, from Nearchus, to outdo Semiramis and Cyrus.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "5.28" },
            { source: 6, locator: "5.29" },
            { source: 7, locator: "6.24" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Upward voice and silence",
          base: "review",
          text: "Morrison defines upward voice as people voluntarily raising suggestions, concerns or problems with someone above them, and silence as withholding that input, which deprives the organisation of useful information. Her review traces the factors and motives that decide which people choose. Arrian’s council fits the description closely: a long silence because the officers neither dared to oppose the king nor wished to agree, broken by one senior man who justifies speaking by his age, his honours and his record of courage. In Arrian’s telling, voice came late, from the person safest to give it, and only after the soldiers had already decided among themselves.",
          evidence: "interpretation",
          refs: [{ source: 8 }, { source: 5, locator: "5.27" }],
          limit:
            "The review concerns employees in modern organisations, and only its abstract was read. Coenus’s speech is Arrian’s composition, so this reading tests a second-century writer’s picture of voice, not the event.",
        },
      ],
      shadow: {
        text: "He learned the limit only by reaching it. Coenus’s reasons, the losses, the disease, the longing for home, were not new in 326. The first response Arrian records is anger: Alexander broke up the meeting, annoyed at Coenus’s freedom of speech, then threatened to go on without them and shut himself away. Plutarch’s Alexander counts retreat as defeat. A leader who treats every limit as a test of will learns where the limit is at the moment it holds, in front of everyone.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "5.28" },
          { source: 1, locator: "Alexander 62" },
        ],
      },
      counterCase: {
        text: "In the spring of 1917 French soldiers refused orders in a wave of collective protests. The usual story, which this site’s profile of Philippe Pétain follows, has Pétain answer the mutinies by halting offensives. Ducoulombier’s review of André Loez’s history of the mutineers sets out a different account. Pétain was appointed commander-in-chief on 15 May, before the government learned of the mutinies, so he was not called in to restore order. The wave of collective refusals forced offensives to stop until the autumn against his wishes. Early in June he restored the special courts-martial, and the review argues that repression was held in check by the political authorities rather than by his leniency. In both cases the army set the limit, and the record gave the turning to the commander: the gods’ omens in one, a general’s wisdom in the other.",
        evidence: "interpretation",
        refs: [{ source: 9 }],
        commanderSlug: "philippe-petain",
        battleSlugs: [],
      },
      cost: {
        text: "Coenus’s speech counts the cost in the men who were no longer there: killed in battle, invalided by wounds, left behind in garrisons and colonies, and above all lost to disease. Diodorus shows the soldiers’ wives and children travelling with the army. The Indian peoples already conquered, and those beyond the river who were spared, appear in these accounts only as reports of wealth and elephants.",
        evidence: "fact",
        refs: [
          { source: 5, locator: "5.27" },
          { source: 3, locator: "17.94" },
        ],
      },
      transfer: {
        holdsWhen: [
          "People have given a great deal and are being asked for more without an end in sight.",
          "The leader can find a way to stop that lets both sides keep their standing.",
        ],
        failsWhen: [
          "The limit is treated as a test of will, so the leader learns it only in public.",
          "The face-saving story becomes the official account and the reasons for the refusal are forgotten.",
        ],
        questions: [
          "What signs would tell you that the people you lead have reached their limit before they say so?",
          "Who in your team would speak if everyone else stayed silent, and why them?",
          "If you had to turn back, what story would you tell, and would it be true?",
        ],
      },
      bearsOn:
        "This is the volume’s first strong evidence. Arrian, Plutarch and Diodorus all locate the cause of the refusal in the army’s exhaustion and longing for home, not in a change in Alexander. Arrian also sets the reports of new lands that excited the king beside the flagging spirit of his men. At the Hyphasis, the sources point to aims that had outrun the men’s, and to men who still cheered the king who let them go.",
      questions: [
        {
          prompt:
            "According to Ptolemy, as Arrian reports him, what happened after Alexander’s three days in his tent?",
          choices: [
            "The army agreed to cross.",
            "He sacrificed for the crossing, the omens were unfavourable, and he announced the return.",
            "Coenus was arrested.",
          ],
          answer: 1,
          explanation:
            "The omens let the turning be the gods’ decision. Arrian names Ptolemy as his source for them.",
        },
        {
          prompt:
            "What, in Arrian’s account, did Alexander’s officers do when he finished speaking?",
          choices: [
            "They cheered.",
            "They kept a long silence, neither daring to oppose him nor wishing to agree, until Coenus spoke.",
            "They voted to go on.",
          ],
          answer: 1,
          explanation:
            "The silence is the most telling detail in the scene, and it fits what research calls withholding voice.",
        },
        {
          prompt:
            "What does Ducoulombier’s review of Loez say about Pétain and the halt to French offensives in 1917?",
          choices: [
            "That the refusals forced the halt against Pétain’s wishes.",
            "That Pétain was appointed after the mutinies to end them.",
            "That no soldiers were punished.",
          ],
          answer: 0,
          explanation:
            "Pétain was appointed before the mutinies were known, and he restored special courts-martial in June.",
        },
      ],
      sourceCheck: {
        question: "How did Alexander come to turn back at the Hyphasis?",
        witnesses: [
          {
            label: "Arrian, citing Ptolemy",
            claim:
              "After three days of silence the sacrifices for the crossing were unfavourable, and he announced the return.",
          },
          {
            label: "Plutarch",
            claim:
              "He lay in his tent in anger until his friends consoled him and his soldiers wailed at his door; then he relented.",
          },
          {
            label: "Diodorus",
            claim:
              "The Macedonians did not accept his speech, and he gave up the undertaking.",
          },
        ],
        prompt: "What do the three accounts allow a historian to conclude?",
        options: [
          {
            text: "That the gods forbade the crossing, as the most detailed source says.",
            feedback:
              "Ptolemy reports the omens, but omens that arrive exactly when needed are also a way of presenting a decision.",
          },
          {
            text: "That the army’s refusal decided the matter, and that the sources differ on how the king presented it.",
            feedback:
              "All three agree the army would not go on. They differ on the face the turning was given: omens, tears or a failed speech.",
            best: true,
          },
          {
            text: "That Alexander never intended to cross.",
            feedback:
              "Every account has him wanting to go on, and Plutarch has him count retreat as a defeat.",
          },
        ],
        campaignSlug: "indian-campaign",
      },
      seminar: {
        prompt:
          "Coenus says the men will not be the same in danger if they are led against their will. Is consent a condition of an army’s effectiveness, or only of its comfort?",
        guidance:
          "Compare the Hyphasis with the French army in 1917. Ask in each case who set the limit, how the commander answered, and who received credit for respecting it.",
      },
      sources: [
        s.a5_28,
        s.plu9,
        s.a5_25,
        s.dio17e,
        s.a5_26,
        s.a5_27,
        s.a5_29,
        s.a6_24,
        s.morrison,
        s.ducoulombier,
      ],
    },
  ],
  inProgress:
    "The pilot lessons are published. The rest of the volume is added in reviewed batches.",
};
