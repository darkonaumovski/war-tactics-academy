import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 9, on William Slim, written in reviewed batches (batch B1, the
// pilot, is lessons 0, the record, 4, the rebuilding, and 7, Imphal; batch B2
// is Part I, lessons 1–3, Gallabat, the retreat of 1942 and the first Arakan);
// docs/LEADERSHIP_EVIDENCE_SLIM.md records which sources can carry each
// lesson, and docs/SOURCE_AUDIT.md how each was read. Slim's own books are in
// copyright, so his words reach the volume through the sources that quote
// them, and through his openly readable lecture of 1957. The official
// histories are cited by volume with chapter locators.
const kirby = (vol: 2 | 3 | 4, title: string, year: number): Source => ({
  title: `S. Woodburn Kirby, The War Against Japan, vol. ${["", "", "II", "III", "IV"][vol]}: ${title} (London: HMSO, ${year}) (History of the Second World War, United Kingdom Military Series)`,
  url: `https://archive.org/details/war-against-japan-vol-${vol}`,
  publisher: "Internet Archive",
});
const s = {
  adb: {
    title:
      "M. D. de B. Collins Persse, “Slim, Sir William Joseph (1891–1970)”, Australian Dictionary of Biography, vol. 16 (2002)",
    url: "https://adb.anu.edu.au/biography/slim-william-joseph-11713",
    publisher: "National Centre of Biography, Australian National University",
  },
  gurkha: {
    title:
      "“Leadership Style and Legacy”, in ‘Uncle Bill’: Field Marshal Bill Slim and his leadership legacy (online exhibition)",
    url: "https://thegurkhamuseum.co.uk/blog/leadership-and-legacy/",
    publisher: "The Gurkha Museum, Winchester",
  },
  lecture: {
    title:
      "William Slim, “Leadership in Management”, William Queale Lecture, Adelaide, April 1957 (Australian Army Journal, November 1957), reprinted in edited form",
    url: "https://researchcentre.army.gov.au/library/australian-army-journal-aaj/volume-1-number-1/retrospective-leadership-management",
    publisher: "Australian Army Research Centre",
  },
  nam: {
    title: "William Slim: The soldiers’ soldier",
    url: "https://www.nam.ac.uk/explore/william-slim",
    publisher: "National Army Museum, London",
  },
  kirby2: kirby(2, "India’s Most Dangerous Hour", 1958),
  kirby3: kirby(3, "The Decisive Battles", 1961),
  madan: {
    title:
      "N. N. Madan, The Arakan Operations, 1942–45 (Official History of the Indian Armed Forces in the Second World War, general editor Bisheshwar Prasad, 1954)",
    url: "https://archive.org/details/arakanoperations1942",
    publisher: "Internet Archive",
  },
  jm132: {
    title:
      "Japanese Monograph No. 132: Burma Operations Record, 28th Army Operations in Akyab Area (revised 1958), compiled by former officers of the 28th Army",
    url: "https://www.ibiblio.org/hyperwar/Japan/Monos/pdfs/JM-132/JM-132.pdf",
    publisher: "Office of the Chief of Military History, U.S. Army (HyperWar)",
  },
  jm134: {
    title:
      "Japanese Monograph No. 134: Burma Operations Record, 15th Army Operations in Imphal Area and Withdrawal to Northern Burma (revised edition)",
    url: "https://www.ibiblio.org/hyperwar/Japan/Monos/pdfs/JM-134/JM-134.pdf",
    publisher: "Office of the Chief of Military History, U.S. Army (HyperWar)",
  },
  arakawa: {
    title:
      "Arakawa Kenichi, “Japanese War Leadership in Burma Theater: Imphal”, in Summary of Sessions, International Forum on War History 2002",
    url: "https://www.nids.mod.go.jp/english/event/forum/pdf/2002.pdf",
    publisher:
      "National Institute for Defense Studies, Ministry of Defense of Japan",
  },
  giffard: {
    title:
      "George Giffard, “Operations in Burma and North-East India from 16th November, 1943 to 22nd June, 1944”, despatch of 19 June 1945, Supplement to the London Gazette, no. 39171, 19 March 1951",
    url: "https://www.thegazette.co.uk/London/issue/39171/data.pdf",
    publisher: "The London Gazette",
  },
  wavell43: {
    title:
      "Archibald Wavell, “Operations in the India Command, from 1st January, 1943, to 20th June, 1943”, despatch of 27 June 1944, Supplement to the London Gazette, no. 38266, 22 April 1948",
    url: "https://www.thegazette.co.uk/London/issue/38266/data.pdf",
    publisher: "The London Gazette",
  },
  forgotten: {
    title:
      "“Forgotten Army”, Greymouth Evening Star, 8 November 1944, p. 5 (a report from London of 7 November)",
    url: "https://paperspast.natlib.govt.nz/newspapers/GEST19441108.2.33",
    publisher: "Papers Past, National Library of New Zealand",
  },
  epitaph: {
    title:
      "Rob Kirk, “The Kohima Epitaph: When you go home...” (21 February 2025)",
    url: "https://www.westernfrontassociation.com/world-war-i-articles/2025/february/the-kohima-epitaph-when-you-go-home/",
    publisher: "The Western Front Association",
  },
  ebGrant: {
    title: "“Grant, Ulysses Simpson”, Encyclopædia Britannica, 11th ed. (1911)",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Grant,_Ulysses_Simpson",
    publisher: "Wikisource",
  },
  saunders: {
    title:
      "Hilary St. George Saunders, Royal Air Force 1939–1945, vol. III: The Fight Is Won (London: HMSO, 1954), ch. XV: Arakan, Kohima, and Imphal (History of the Second World War, United Kingdom Military Series)",
    url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-RAF-III/UK-RAF-III-15.html",
    publisher: "HyperWar (ibiblio)",
  },
  richardsSingapore: {
    title:
      "Denis Richards and Hilary St. George Saunders, Royal Air Force 1939–1945, vol. II: The Fight Avails (London: HMSO, 1954), ch. II: The Fall of Singapore (History of the Second World War, United Kingdom Military Series)",
    url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-RAF-II/UK-RAF-II-2.html",
    publisher: "HyperWar (ibiblio)",
  },
  oliver: {
    title:
      "Laurel W. Oliver and others, A quantitative integration of the military cohesion literature (1999), abstract",
    url: "https://zenodo.org/records/1236231",
    publisher: "Military Psychology (Zenodo)",
  },
  maier: {
    title:
      "Steven F. Maier and Martin E. P. Seligman, Learned helplessness at fifty: insights from neuroscience (2016), abstract",
    url: "https://europepmc.org/article/PMC/PMC4920136",
    publisher: "Psychological Review (Europe PMC)",
  },
  eastAfrica: {
    title:
      "East African Campaign, 1940–41, ch. III: The First Encounters (Official History of the Indian Armed Forces in the Second World War, general editor Bisheshwar Prasad, 1963)",
    url: "https://www.ibiblio.org/hyperwar/UN/India/EAfrica/EAfrica-3.html",
    publisher:
      "Combined Inter-Services Historical Section, India and Pakistan (HyperWar)",
  },
  playfair: {
    title:
      "I. S. O. Playfair, The Mediterranean and Middle East, vol. I: The Early Successes against Italy (London: HMSO, 1954), ch. XXI: The Italians Lose the Initiative in East Africa (History of the Second World War, United Kingdom Military Series)",
    url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-I/UK-Med-I-21.html",
    publisher: "HyperWar (ibiblio)",
  },
  wavellEastAfrica: {
    title:
      "Archibald Wavell, “Operations in East Africa, November, 1940 – July, 1941”, despatch of 21 May 1942, Supplement to the London Gazette, no. 37645, 10 July 1946",
    url: "https://www.thegazette.co.uk/London/issue/37645/data.pdf",
    publisher: "The London Gazette",
  },
  wavell42: {
    title:
      "Archibald Wavell, “Operations in Burma from 15th December, 1941, to 20th May, 1942”, despatch of 14 July 1942 covering the reports of T. J. Hutton and H. R. L. G. Alexander, Supplement to the London Gazette, no. 38228, 11 March 1948",
    url: "https://www.thegazette.co.uk/London/issue/38228/data.pdf",
    publisher: "The London Gazette",
  },
  newell: {
    title:
      "Clayton R. Newell, Burma, 1942 (The U.S. Army Campaigns of World War II, Center of Military History, 1995)",
    url: "https://archive.org/details/Burma1942",
    publisher: "Internet Archive",
  },
  mezulis: {
    title:
      "Amy Mezulis, Lyn Abramson, Janet Hyde and Benjamin Hankin, Is there a universal positivity bias in attributions? A meta-analytic review of individual, developmental, and cultural differences in the self-serving attributional bias (2004), abstract",
    url: "https://europepmc.org/article/MED/15367078",
    publisher: "Psychological Bulletin (Europe PMC)",
  },
  rauchensteinerSecond: {
    title:
      "Manfried Rauchensteiner, The First World War and the End of the Habsburg Monarchy, 1914–1918, pp. 190–191",
    url: "https://austria-forum.org/web-books/firstworldwar01en2014isds/000192",
    publisher: "Böhlau Verlag, Austria-Forum web edition",
  },
  rauchensteinerDismissal: {
    title:
      "Manfried Rauchensteiner, The First World War and the End of the Habsburg Monarchy, 1914–1918, pp. 279–280",
    url: "https://austria-forum.org/web-books/firstworldwar01en2014isds/000281",
    publisher: "Böhlau Verlag, Austria-Forum web edition",
  },
  ebRetreat: {
    title: "Napoleonic Wars: The retreat from Moscow",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-retreat-from-Moscow",
    publisher: "Encyclopaedia Britannica",
  },
  longstreet: {
    title: "William Garrett Piston, “James Longstreet (1821–1904)”",
    url: "https://encyclopediavirginia.org/entries/longstreet-james-1821-1904/",
    publisher: "Encyclopedia Virginia, Virginia Humanities",
  },
} satisfies Record<string, Source>;

export const slimVolume: LeadershipVolume = {
  commanderSlug: "william-slim",
  title:
    "Leadership Lessons from William Slim: from Gallabat to Rangoon, 1940–1945",
  summary:
    "What a person who leads others can take from William Slim, who led a beaten army out of Burma in 1942 and back to Rangoon in 1945, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In November 1940 William Slim, an Indian Army brigadier, took the frontier fort of Gallabat from the Italians and gave it up the next day. In 1942 he led Burma Corps out of Burma to India, and in 1943 he was given command in Arakan only as a failed offensive ended. Late that year he took command of the new Fourteenth Army; in 1944 its encircled formations held in Arakan and at Imphal and Kohima, and in 1945 it took Meiktila and Mandalay and raced the monsoon to Rangoon. The army he led was largely Indian, with African, Gurkha, Burmese and British formations, and it served a colonial state within a few years of its end. This volume asks what turned that army into one that expected to win, and how much of the change was his.",
  question:
    "How do you rebuild an army that has learned to lose: by leadership, by means, through the enemy’s mistakes, or does the record decide what we see?",
  parts: [
    "Orientation",
    "Learning to lose",
    "Rebuilding",
    "The decisive battle",
    "Victory",
  ],
  lessons: [
    {
      slug: "how-to-read-slim",
      title: "A victory told by its general: how to read Slim",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When a commander writes a celebrated account of his own campaign, the reader learns most from it only if the account is set beside the official histories, the enemy’s record and the voices it leaves out, because a memoir admired for its modesty still chooses what the reader sees.",
      inBrief: {
        strength:
          "Slim’s campaign is recorded by both sides: the British and Indian official histories, his superiors’ despatches and the Japanese army’s own monographs.",
        shadow:
          "His memoir, the account most readers meet, is in copyright and reaches this volume only through those who quote it.",
      },
      moment: {
        text: "Slim’s account of the Burma campaign, Defeat into Victory, appeared in London in 1956, while he was governor-general of Australia. The Australian Dictionary of Biography records that it sold very widely and was hailed as one of the best, and best written, books on the Second World War; his broadcasts followed in 1957 and his reminiscences of his earlier battles, Unofficial History, in 1959. The Gurkha Museum writes that the memoir is light on self-promotion and heavy on praise for his subordinates, and that every officer cadet at Sandhurst is now required to read it. A book written by a victorious general a decade after the war has become the way most readers meet the campaign. This volume cannot quote it at length: it is in copyright, and Slim’s words reach the lessons through the sources that quote them and through a lecture he gave in 1957 that is openly readable.",
        evidence: "fact",
        refs: [{ source: 0 }, { source: 1 }],
      },
      episodes: [
        {
          title: "A general who blamed himself",
          text: "The memoir’s reputation rests partly on its self-criticism. The Australian Dictionary of Biography quotes Slim on Gallabat, the frontier fort he took and gave up in November 1940: when two courses of action were open to him he had not chosen, as a good commander should, the bolder, and had taken counsel of his fears. The words come from his own later account, written years after the event. A commander’s honesty about his first defeat is evidence of how he wanted to be read, as well as of what happened; the Gallabat study sets the official accounts of the action beside each other.",
          evidence: "fact",
          refs: [{ source: 0 }],
          battleSlugs: ["gallabat"],
        },
        {
          title: "Two official records of one battle",
          text: "The British official history says of its authors that they were given full access to official documents and that they and the editor alone are responsible for its statements. Its account of the Admin Box in February 1944 calls the battle the turning point of the war in South-East Asia, the first time the Japanese met well-trained British and Indian formations. The Japanese army’s record of the same battle was compiled after the war by former staff officers of the 28th Army from the documents left at its headquarters and their own recollections, and reviewed by their former commander; it blames a Japanese tactical blunder and the inaction of three British brigades that let the attacking column escape. Both are official, and each is written by men with a stake in the result.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "front matter; ch. X" },
            { source: 3, locator: "foreword; Ha-Go operation" },
          ],
          battleSlugs: ["admin-box"],
        },
        {
          title: "The Forgotten Army",
          text: "The phrase most attached to Slim’s army has no traced author. The earliest use read for this volume is a report from London of 7 November 1944: at a press conference at the Ministry of Information, Air Chief Marshal Joubert criticised the British press for neglecting Burma, speaking of the troops there as angry white men whose fighting was not being publicised at home, and General Owen called the Fourteenth Army the “Forgotten Army”. Giffard, Slim’s superior, wrote in June 1945 that amenities, a daily newspaper and visits from entertainers had improved morale, and that the men were beginning to feel they did not belong to “The Forgotten Army”. The official history credits Wingate with putting an almost forgotten army in the headlines. The army that was said to be forgotten was described, at the press conference that named it, as if its Indian and African soldiers were not there.",
          evidence: "fact",
          refs: [
            { source: 4 },
            { source: 5, locator: "para. 166" },
            { source: 2, locator: "ch. XIV" },
          ],
          battleSlugs: [],
          campaignSlugs: ["burma-campaign"],
        },
        {
          title: "Words on a memorial",
          text: "The best-known words from the campaign are carved on the 2nd Division’s memorial at Kohima: when you go home, tell them of us and say, for your tomorrow we gave our today. They were not written there. John Maxwell Edmonds, a Cambridge classicist who worked as a codebreaker in the First World War, wrote them among his war epitaphs of 1918 to 1920 as an inscription “For a British Graveyard in France”; the Western Front Association’s account records that the wording was later changed, to Edmonds’s displeasure, into the form now carved at Kohima. A memorial is a source for how the dead were remembered, not for what they said.",
          evidence: "fact",
          refs: [{ source: 6 }],
          battleSlugs: ["imphal-kohima"],
        },
      ],
      witnesses: [
        {
          who: "William Slim, in 1957",
          stake:
            "The victorious commander, then governor-general of Australia, speaking to businessmen a year after his memoir appeared.",
          says: "Leadership is of the spirit and management of the mind; managers are necessary; leaders are essential.",
          refs: [{ source: 7 }],
        },
        {
          who: "S. Woodburn Kirby and his colleagues",
          stake:
            "British official historians, writing in the 1950s and 1960s with full access to official documents.",
          says: "The Admin Box was the turning point of the war in South-East Asia.",
          refs: [{ source: 2, locator: "front matter; ch. X" }],
        },
        {
          who: "The compilers of the Japanese Monographs",
          stake:
            "Former officers of the defeated army, writing for the American occupation authorities from surviving documents and memory.",
          says: "The Japanese lost the Admin Box through their own blunder as much as British skill.",
          refs: [{ source: 3, locator: "foreword; Ha-Go operation" }],
        },
        {
          who: "Air Chief Marshal Joubert, in 1944",
          stake:
            "A senior air commander in South-East Asia Command, pressing the British press to report the campaign.",
          says: "The men in Burma are angry that their fighting is not publicised at home.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The strategist judges a decision by what the commander knew when he made it, and this campaign gives unusual help. Slim’s own appreciations survive inside the official histories: Kirby prints his orders and appreciations of the time, such as the standing order before the Admin Box that cut-off units were to stand fast and be supplied by air, and his appreciation before Imphal. Those documents come before the memoir and before the fame. The method is to read each decision first in the papers of the moment, then in the memoir as others report it, and to notice where the later account knows more than the commander could.",
          evidence: "interpretation",
          refs: [{ source: 2, locator: "ch. X, XIII" }, { source: 0 }],
        },
        {
          text: "The record also carries a verdict that frames the volume. The National Army Museum gives Mountbatten’s judgement, dated 1946, that Slim was the finest general the Second World War produced; the Australian Dictionary of Biography repeats it without a date. Neither prints Mountbatten’s own text. A verdict from a commander’s superior, made soon after a shared victory, is a claim to test, and this volume tests it against the official histories, the enemy’s record and the counter-cases.",
          evidence: "interpretation",
          refs: [{ source: 8 }, { source: 0 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on autobiographical memory and on how organisations remember could bear on a memoir written ten years after the events, but none was read for this volume. The lesson relies instead on comparing documents written at the time, accounts written later, and records written by the other side.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; the lesson’s claims rest on the dates and authors of the documents.",
        },
      ],
      shadow: {
        text: "A memoir admired for its modesty is harder to read critically than a boastful one. Slim’s self-criticism at Gallabat, and the praise of subordinates the Gurkha Museum notes, invite trust; but a commander who admits small faults also chooses which faults to admit. His book is now issued to officer cadets as a text on leadership, and his own lecture of 1957 addressed managers. The more a campaign is read for lessons, the more its memoir decides which lessons are seen.",
        evidence: "interpretation",
        refs: [{ source: 1 }, { source: 0 }, { source: 7 }],
      },
      counterCase: {
        text: "Grant’s memoir is the nearest case, read in the Grant and Lee volume’s orientation. The 1911 Britannica called it frank, modest and charming, among the best military biographies, written to keep his family from want while he was suffering from cancer, and finished four days before his death. It was admired for the same plainness as Slim’s, and it too argued with its critics. Both books shaped how their wars were read for generations; the difference is that Grant wrote against death to provide for his family, and Slim wrote at the height of his career, a decade after his victory.",
        evidence: "interpretation",
        refs: [{ source: 9 }],
        commanderSlug: "ulysses-s-grant",
        battleSlugs: [],
      },
      cost: {
        text: "The soldiers who did most of the fighting appear in the commanders’ record mostly as formations: Indian, Gurkha, African and Burmese units. None of the sources read for this lesson gives an Indian, African or Burmese soldier’s own account. The press conference that named the Forgotten Army spoke of white men. A reader of this campaign should notice whose words survive, and that the memorials speak for the dead in borrowed lines.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 6 }],
      },
      transfer: {
        holdsWhen: [
          "The leader of a successful effort writes its accepted history, and later readers meet the effort through that account.",
          "Documents written at the time, and records kept by the other side, survive and can be set beside the later account.",
        ],
        failsWhen: [
          "The self-critical tone of an account is taken as proof that it is complete.",
          "Only the leader’s account is read, and the people who did the work leave no record of their own.",
        ],
        questions: [
          "Who wrote the accepted account of your organisation’s best success, and what did it leave out?",
          "Which phrase attached to a past achievement of yours has a traced author?",
          "Whose records of a shared effort have you never read?",
        ],
      },
      bearsOn:
        "The fourth answer to the volume’s question, the record, shapes all the others. Slim’s leadership is described above all in his own admired book; the means are described in the official histories and despatches; the enemy’s mistakes are described by the enemy’s own officers. The record does not settle the question, but each answer comes through a different witness, and the reader must know which.",
      questions: [
        {
          prompt:
            "Who wrote the lines carved on the 2nd Division’s memorial at Kohima?",
          choices: [
            "Slim, in an order of the day after the battle.",
            "John Maxwell Edmonds, as an epitaph for the dead of the First World War, later adapted.",
            "A soldier of the Kohima garrison.",
          ],
          answer: 1,
          explanation:
            "Edmonds wrote them among his war epitaphs of 1918–1920; they were changed before they reached Kohima.",
        },
        {
          prompt:
            "What is the earliest use of the phrase “Forgotten Army” read for this volume?",
          choices: [
            "Slim’s memoir of 1956.",
            "A press conference at the Ministry of Information in London on 7 November 1944.",
            "An order issued by Mountbatten in 1943.",
          ],
          answer: 1,
          explanation:
            "General Owen used it there; the phrase’s first author is not traced.",
        },
        {
          prompt:
            "Why do the British official history and the Japanese monograph explain the Admin Box differently?",
          choices: [
            "One of them is a forgery.",
            "Each was written by men with a stake in the result: British historians with the British records, and former Japanese staff officers from their own documents and memory.",
            "The Japanese monograph describes a different battle.",
          ],
          answer: 1,
          explanation:
            "Kirby calls the battle a turning point; the monograph blames a Japanese blunder and British inaction for the column’s escape.",
        },
      ],
      sourceCheck: {
        question: "Was Slim the finest general of the Second World War?",
        witnesses: [
          {
            label: "Mountbatten, as the National Army Museum quotes him, 1946",
            claim: "The finest general World War Two produced.",
          },
          {
            label: "Kirby, official history",
            claim:
              "The Admin Box was the turning point of the war in South-East Asia.",
          },
          {
            label: "Arakawa, National Institute for Defense Studies",
            claim:
              "Mutaguchi did not notice, or took no interest in, the change in the British and Indian army in 1943.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Mountbatten’s verdict, since he was Slim’s superior and saw his work.",
            feedback:
              "Mountbatten’s judgement is evidence of what Slim’s superior thought soon after a shared victory, not proof of a ranking.",
          },
          {
            text: "Treat Mountbatten’s words as a verdict to test, and test it against the official history’s account of what the army did and the enemy’s account of why it lost.",
            feedback:
              "The volume asks how much of the change was Slim’s; the other witnesses show that the enemy’s choices and the army’s rebuilding also count.",
            best: true,
          },
          {
            text: "Dismiss the verdict, since it cannot be traced to Mountbatten’s own text.",
            feedback:
              "The untraced text means the words should be used with their reporters, not that the opinion should be ignored.",
          },
        ],
      },
      seminar: {
        prompt:
          "Slim’s memoir is issued to officer cadets as a text on leadership. Argue whether that is the right use of it, from three positions: a soldier of an Indian division in the Fourteenth Army, a former Japanese staff officer writing his army’s monograph, and a historian of the campaign.",
        guidance:
          "Use the official history’s judgement of the Admin Box, the Japanese monograph’s, the 1944 press report and the Kohima memorial. In each case say who wrote, when, and for whom.",
      },
      sources: [
        s.adb,
        s.gurkha,
        s.kirby3,
        s.jm132,
        s.forgotten,
        s.giffard,
        s.epitaph,
        s.lecture,
        s.nam,
        s.ebGrant,
      ],
    },
    {
      slug: "the-first-defeat",
      title: "The first defeat: Gallabat",
      part: "Learning to lose",
      themes: ["judgement", "adaptation"],
      claim:
        "When a commander examines his own part in his first defeat, rather than only the troops’ or the enemy’s, he may learn more from it than from a victory, but only if he can tell his own decisions from the means and plans that others set, and only if the lesson he draws keeps its conditions.",
      inBrief: {
        strength:
          "Of everyone who described Gallabat, Slim alone blamed Slim: he wrote that he had not chosen the bolder course.",
        shadow:
          "The official accounts blame tanks, aircraft and a plan made above him, and nothing read records what he changed afterwards.",
      },
      moment: {
        text: "On 6 November 1940 Brigadier W. J. Slim’s 10th Indian Infantry Brigade attacked the Italian frontier fort of Gallabat, on the border of the Sudan and Ethiopia. The 3rd Royal Garhwal Rifles took the fort behind its tanks by half past seven in the morning, after two riflemen ran forward and cut the wire by hand. By then most of the tanks had broken down, and the wire round Metemma, across the dry river bed that marked the frontier, was intact. The Indian official history records that Slim decided not to go on with the attack on Metemma. From mid-morning Italian bombers, with their fighters in command of the air, attacked the fort again and again; the brigade had no anti-aircraft guns. On 7 November, with the tank workshop vehicle hit and the bombing continuing, Slim gave up the fort and withdrew to positions from which his artillery could reach Metemma. It was his first battle as a brigade commander, and Playfair’s British official history says plainly that it failed of its object.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. III" },
          { source: 1, locator: "ch. XXI" },
        ],
      },
      episodes: [
        {
          title: "A plan made above him",
          text: "The attack was not Slim’s idea. At a conference in Khartoum at the end of October, attended by the Secretary of State for War, Anthony Eden, it was proposed that Gallabat be attacked early in November and Kassala early in January; on Wavell’s instructions Major-General Heath of the 5th Indian Division planned the operation for Slim’s brigade and a squadron of tanks. Reports of Italian reinforcements on the road from Gondar brought it forward by two days, and rain on the evening before made the forward landing ground unusable until nine the next morning. The plan depended on tanks to break the wire and cross the river bed, and on a few British fighters which Playfair describes as inferior to the Italian ones; they were shot down early.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. III" },
            { source: 1, locator: "ch. XXI" },
          ],
          battleSlugs: ["gallabat"],
        },
        {
          title: "Four verdicts",
          text: "Each account of Gallabat places the failure somewhere different. The Indian official history names two reasons: the breakdown of the tanks from mechanical causes, and Italian superiority in the air, which no anti-aircraft guns could answer; it draws the lesson that all forward troops need protection against air attack. Playfair says the tanks were disabled mainly by mines and boulders in the long grass, and calls the whole “General Platt’s operation”, after the commander in the Sudan. Wavell’s despatch calls it a minor attack and a partially successful action. Only Slim blames Slim. The Australian Dictionary of Biography quotes him: when two courses of action were open to him he had not chosen, as a good commander should, the bolder; he had taken counsel of his fears. Those words come from his own later account; the same entry records that his reminiscences of his earlier battles appeared as Unofficial History in 1959.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. III" },
            { source: 1, locator: "ch. XXI" },
            { source: 2 },
            { source: 3 },
          ],
          battleSlugs: ["gallabat"],
        },
        {
          title: "What came after",
          text: "The defeat did not end the front. Wavell decided to keep up pressure at Gallabat without large operations there and to make Kassala the main effort. The Indian official history records that the 5th Indian Division’s patrolling in November and December gave it the upper hand in no man’s land and improved the morale of the Indian troops, and that the Italians came to overestimate the British strength; Wavell writes that artillery fire made Metemma untenable for the Italians, though it could not be occupied. They left Gallabat and Metemma at the end of January 1941. Slim was wounded soon after Gallabat in an air attack; in May 1941, the Australian Dictionary of Biography records, he took command of the 10th Indian Division, which fought a successful campaign against the Vichy French in Syria that summer.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. III" },
            { source: 2 },
            { source: 1, locator: "ch. XXI" },
            { source: 3 },
          ],
          battleSlugs: ["gallabat"],
          campaignSlugs: ["east-african-campaign"],
        },
      ],
      witnesses: [
        {
          who: "William Slim, in his later account",
          stake:
            "The commander of 1945, recalling his first battle in a later account, as the Australian Dictionary of Biography quotes him.",
          says: "He had not chosen the bolder of two courses, and had taken counsel of his fears.",
          refs: [{ source: 3 }],
        },
        {
          who: "The Indian official historians",
          stake:
            "The Combined Inter-Services Historical Section of India and Pakistan, writing in the 1960s about the Indian Army’s campaign.",
          says: "The attack failed because the tanks broke down and the Italians held the air; forward troops need protection against air attack.",
          refs: [{ source: 0, locator: "ch. III" }],
        },
        {
          who: "I. S. O. Playfair",
          stake:
            "The British official historian of the war in the Mediterranean and Middle East, writing in 1954.",
          says: "General Platt’s operation at Gallabat failed of its object.",
          refs: [{ source: 1, locator: "ch. XXI" }],
        },
        {
          who: "Archibald Wavell",
          stake:
            "The Commander-in-Chief who ordered the attack, reporting in May 1942 on a campaign his forces had since won.",
          says: "It was a minor attack and a partially successful action.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Judged on what Slim knew on 6 November, the decision not to attack Metemma is hard to fault: one cruiser tank was still running, the wire was intact, and the plan had relied on tanks to break it. The decision of 7 November is harder to judge, because no source read says what the bolder course would have been: to hold the fort under bombing in the open, or to attack Metemma without tanks. Slim’s later verdict names a fault without naming the alternative. The official accounts, which describe the broken tanks, the lost workshop, the inferior fighters and the absence of anti-aircraft guns, give no reason to think that staying would have succeeded.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. III" },
            { source: 1, locator: "ch. XXI" },
            { source: 3 },
          ],
        },
        {
          text: "A rule drawn from one defeat can be applied where it does not fit. At Yenangyaung in April 1942, Kirby records, Bruce Scott proposed that his cut-off 1st Burma Division abandon its transport and fight its way out, and Slim ordered him to hold on, because the Chinese would renew their attack at dawn. The division spent the night without water; the Chinese attack came in the afternoon, after Bruce Scott had broken out and the vehicles had been abandoned and the guns put out of action. No source read connects that order with Gallabat, and none should be inferred. But the two cases together show why “choose the bolder course” is not a lesson that can be carried from one battle to the next without its conditions: at Yenangyaung holding on was the bold choice, and it depended on an ally’s timing.",
          evidence: "interpretation",
          refs: [{ source: 4, locator: "ch. X" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Self-serving attribution, reversed",
          base: "meta-analysis",
          text: "The Caesar volume’s lesson on defeat in his own words set Caesar’s explanations beside the meta-analysis by Mezulis and her colleagues, which combined 266 studies and found that people generally explain their successes by themselves and their failures by other causes, a large bias present in nearly all samples. Slim’s account of Gallabat runs the other way: he names no cause but himself, where the official accounts name tanks, aircraft and a plan made above him. Potiorek, explaining his first defeat in Serbia while still in command, fits the average. The research describes averages and cannot say why one person departs from them; and an admission of an early, small failure, made in a later account by a general whose career had since succeeded, costs its author little.",
          evidence: "interpretation",
          refs: [{ source: 5 }, { source: 3 }, { source: 6 }],
          limit:
            "Only the abstract was read. The studies concern people’s explanations of ordinary events, not commanders’ published reminiscences, and they cannot tell sincere self-criticism from self-presentation.",
        },
      ],
      shadow: {
        text: "Taking all the blame can hide the lessons that belonged to others. The Indian official history concludes that forward troops needed protection against air attack, and there were no anti-aircraft guns to give the brigade; the tanks had one workshop vehicle and no replacement. Those were matters for the theatre, not the brigadier, and a self-reproach that ignores them is not a full account. It also lets a reader treat the defeat as a stage in a good general’s education. Whether Gallabat taught Slim anything specific, no source read records; the evidence of what he did next lies in the later lessons, and none of it is tied to Gallabat by the sources.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "ch. III" }, { source: 3 }],
        battleSlugs: ["gallabat"],
      },
      counterCase: {
        text: "Oskar Potiorek, commanding the Austro-Hungarian forces against Serbia in 1914, explained his first defeat the other way. Rauchensteiner writes that Potiorek succeeded in laying the blame for the failure of the first offensive on insufficient support from the 2nd Army, and so from the Army High Command; the Emperor believed him, and he planned a second offensive. Conrad approved it, urging only that the error of the first battles not be repeated and that the armies not be left unable to support each other. By the end of September the second offensive had also failed, and Potiorek reacted with dismissals. After the third failure, in December, the officer sent to investigate named Potiorek as the one to blame, and Potiorek wrote in his diary that he would not now be granted the chance to make good the misfortune himself. A commander who places his first defeat outside himself can keep his command and lose the lesson.",
        evidence: "interpretation",
        refs: [
          { source: 6, locator: "pp. 190–191" },
          { source: 7, locator: "pp. 279–280" },
        ],
        commanderSlug: "oskar-potiorek",
        battleSlugs: ["cer", "drina-1914"],
      },
      cost: {
        text: "The bombing fell on troops in the open. In the fort there was no cover from view, the slit trenches were inadequate and the hard ground made new ones difficult to dig, and the Indian official history records that casualties among the forward troops were heavy; in the confusion, elements in the rear began to withdraw without orders before control was restored. The posts were held for Italy by colonial battalions and irregular bande, whose soldiers’ own accounts none of the sources gives. The Ethiopian Patriots, fighting Italian rule, were the people the attack was meant to encourage; Playfair writes that the effect on them was on the whole good.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. III" },
          { source: 1, locator: "ch. XXI" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The person who failed can separate the decisions that were theirs from the means and plans that others set.",
          "Their account of the failure can be set beside other accounts written by people who saw it differently.",
        ],
        failsWhen: [
          "Self-blame takes in faults that belonged to the system, so that they go unfixed.",
          "A rule drawn from one failure, such as always choosing the bolder course, is applied without its conditions.",
        ],
        questions: [
          "In your last failure, which decisions were yours, and which conditions were set by others?",
          "Who else has given an account of that failure, and does it agree with yours?",
          "What would you need to see before applying the lesson you drew from it?",
        ],
      },
      bearsOn:
        "Gallabat sets two of the volume’s answers against each other before Slim commanded an army. The official accounts explain the defeat by means: tanks that broke down, fighters that were outmatched, no anti-aircraft guns. Slim’s own later account explains it by leadership, his own. The record decides which a reader meets: Slim’s admirers meet the commander who blamed himself, readers of the official histories meet the machines.",
      questions: [
        {
          prompt:
            "How does the Indian official history explain the failure at Gallabat?",
          choices: [
            "By Slim’s caution.",
            "By the mechanical breakdown of the tanks and Italian superiority in the air.",
            "By the arrival of Italian reinforcements from Gondar.",
          ],
          answer: 1,
          explanation:
            "It draws the lesson that all forward troops need protection against air attack; Slim’s own account blames himself.",
        },
        {
          prompt:
            "What did Slim later say of his own conduct at Gallabat, as the Australian Dictionary of Biography quotes him?",
          choices: [
            "That the tank crews had failed him.",
            "That when two courses were open he had not chosen the bolder, and had taken counsel of his fears.",
            "That the attack had served its purpose.",
          ],
          answer: 1,
          explanation:
            "The words come from his later account; none of the official accounts blames him.",
        },
        {
          prompt:
            "How did Potiorek explain the failure of his first invasion of Serbia, according to Rauchensteiner?",
          choices: [
            "He blamed himself and asked to be relieved.",
            "He blamed insufficient support from the 2nd Army and the Army High Command.",
            "He blamed the weather.",
          ],
          answer: 1,
          explanation:
            "The Emperor believed him, and a second offensive followed and failed.",
        },
      ],
      sourceCheck: {
        question: "Whose defeat was Gallabat?",
        witnesses: [
          {
            label: "Indian official history, 1963",
            claim: "The tanks broke down and the Italians held the air.",
          },
          {
            label: "Playfair, British official history, 1954",
            claim: "General Platt’s operation failed of its object.",
          },
          {
            label: "Wavell, despatch, 1942",
            claim: "A minor attack and a partially successful action.",
          },
          {
            label: "Slim, later account, as the ADB quotes him",
            claim: "He had not chosen the bolder course.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Slim’s verdict, since no one knew his decisions better.",
            feedback:
              "A later self-judgement by a famous general shows how he chose to remember the battle; it does not cancel the tanks, the air or the plan made above him.",
          },
          {
            text: "Read them together: Slim’s decisions on 6 and 7 November were his, but the plan, the tanks, the air and the missing anti-aircraft guns were set above him, and each witness had a reason to stress one part.",
            feedback:
              "Each account is true of a different level of command, and the reader has to assemble them.",
            best: true,
          },
          {
            text: "Accept Wavell’s verdict, since he commanded the theatre.",
            feedback:
              "Wavell wrote after his forces had won the campaign, and a commander-in-chief has reasons to call a failed attack partially successful.",
          },
        ],
        battleSlug: "gallabat",
      },
      seminar: {
        prompt:
          "Was Gallabat Slim’s defeat? Argue it from three positions: a soldier of the Garhwal Rifles in the fort under bombing, Wavell, and Slim writing about the battle long afterwards.",
        guidance:
          "Use the Indian official history, Playfair, Wavell’s despatch and the Australian Dictionary of Biography. Say what each could see on 7 November, and when each account was written.",
      },
      sources: [
        s.eastAfrica,
        s.playfair,
        s.wavellEastAfrica,
        s.adb,
        s.kirby2,
        s.mezulis,
        s.rauchensteinerSecond,
        s.rauchensteinerDismissal,
      ],
    },
    {
      slug: "the-long-retreat",
      title: "The long retreat: Burma, 1942",
      part: "Learning to lose",
      themes: ["organisation", "motivation", "ethics"],
      claim:
        "When an army retreats, its commanders can keep it in being if they keep it fighting, keep it supplied on the way and give up what it cannot carry, but the retreat’s cost falls on those who cannot keep up, and a commander’s share in holding it together is hard to separate from the system that fed it.",
      inBrief: {
        strength:
          "Burma Corps fought a losing campaign up the Irrawaddy and reached India as an army, not a rout.",
        shadow:
          "It lost nearly all its guns and vehicles, its decisions at Yenangyaung and Monywa went wrong, and the refugees walked beside it.",
      },
      moment: {
        text: "On 19 March 1942, after the fall of Rangoon, Lieutenant-General W. J. Slim flew in from India to Magwe and took command of Burma Corps: the 1st Burma Division, the 17th Indian Division and the 7th Armoured Brigade. Kirby records that its staff, signals and corps troops had to be found from the forces already in Burma, so that it was deficient in equipment and signals throughout the campaign and never fully staffed; Alexander, who had asked India for a corps commander, says the same. Two months later its rearguard reached Tamu, in India. In Kirby’s words, the Army in Burma had retreated nearly a thousand miles in some three and a half months without once losing its cohesion, the longest retreat ever carried out by a British army. Very little of its armament and equipment came out with it.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. IX, XII" },
          { source: 1, locator: "Alexander, para. 19" },
        ],
      },
      episodes: [
        {
          title: "An army without air",
          text: "By early April the losses of the Allied air forces at Magwe and Akyab were being felt over the corps. On 5 April Alexander told Wavell that the lack of any air support was already affecting the troops’ morale, and the next day he wrote that the 17th Division was tired and dispirited: its unit commanders complained of more than three months’ fighting without relief, of units growing weaker with no reinforcements, and of constant bombing and machine-gunning with no British aircraft to answer it. Morale, he wrote, could be raised only by flying in reinforcements, by air support and by propaganda. Wavell sent what he could spare, keeping the rest for the defence of north-east India, and the Chiefs of Staff agreed. Kirby adds that Alexander and Slim had no air reconnaissance at all and had to rely on ground patrols for information.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. X" }],
          battleSlugs: ["burma-1942"],
        },
        {
          title: "Yenangyaung",
          text: "Slim held the Yenangyaung oilfields until the last possible moment, because the Allied forces needed their petrol, and gave the signal to destroy them at one in the afternoon of 15 April. He had told Bruce Scott to delay the 1st Burma Division’s withdrawal to give the Chinese time to strike; when a Japanese regiment blocked the ford over the Pin Chaung behind the division, Bruce Scott proposed abandoning his transport and fighting his way out, and Slim ordered him to hold on, since the Chinese would attack at dawn. A false report that the Japanese were at Kyaukpadaung led corps headquarters to recall troops who had crossed the chaung, losing, Kirby writes, the last chance of opening the road. The next afternoon, with no sign of the Chinese, Bruce Scott broke out; his vehicles stuck in loose sand and were abandoned, and the guns were put out of action. The Chinese 38th Division attacked an hour later.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. X" }],
          battleSlugs: ["burma-1942"],
        },
        {
          title: "The race for the Chindwin",
          text: "On 26 April Alexander told Slim that the defence of India was now the main object: as much of the army as possible was to be brought out to India. Slim, on a report that a Japanese force would move up the Myittha valley to cut the road to Tamu, sent the whole of the 2nd Burma Brigade up the valley instead of a detachment, and Alexander confirmed the change. The Japanese entered Pakokku on the night the brigade left it, and moved on to Monywa without opposition. Kirby writes that neither the army nor the corps foresaw how fast they could do it, and that the loss of Monywa turned a controlled, timetabled retirement into a hurried retreat that might easily have ended in disaster. At the Shwegyin ferry there were too few river steamers to carry the guns and vehicles, and nearly all were destroyed or abandoned.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XII" }],
          battleSlugs: ["burma-1942"],
        },
        {
          title: "Those who walked",
          text: "The army did not retreat alone. Alexander reported that the Indians of Burma, who ran much of its business and public services and were unpopular with the Burmese, felt that when British rule failed they must get out or be murdered, and judged that in this they were probably right. On the track to the Chindwin there were many thousands of refugees, and he was not prepared to abandon them either to the enemy or to molestation by the local population; he ordered Burma Corps to delay its rearguard while they and the army’s followers were cleared. The wounded, too, had to travel with the force once Japanese bombing had closed the airfields. Kirby records that refugees walked out of Burma by every route, that those on the northern routes were overtaken by the monsoon, and that many thousands died on the way.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "Alexander, paras. 72, 90" },
            { source: 0, locator: "ch. XI, XII" },
          ],
          battleSlugs: ["burma-1942"],
          campaignSlugs: ["japanese-offensive-of-1941-1942"],
        },
      ],
      witnesses: [
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, writing in 1958 with the records of the army and its enemy.",
          says: "The army retreated without once losing its cohesion; the administrative services and the 7th Armoured Brigade revived and sustained its morale.",
          refs: [{ source: 0, locator: "ch. XII" }],
        },
        {
          who: "Archibald Wavell",
          stake:
            "The Commander-in-Chief in India, covering his subordinates’ reports in July 1942.",
          says: "Slim, Cowan and Bruce Scott were good and resolute commanders, and the final withdrawal was skilfully conducted largely through their efforts.",
          refs: [{ source: 1, locator: "Wavell, para. 35" }],
        },
        {
          who: "Harold Alexander",
          stake: "The army commander, reporting on a campaign he had lost.",
          says: "An army’s needs come before refugees’, but the Indians of Burma had to be brought out, and he would not abandon them.",
          refs: [{ source: 1, locator: "Alexander, paras. 72, 90" }],
        },
        {
          who: "Joseph Stilwell, as Newell quotes him",
          stake:
            "The American general commanding the Chinese armies, who walked out of Burma with his staff.",
          says: "They had taken a beating and been run out of Burma, and ought to find out why and go back.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Whose retreat was it? Alexander commanded the army and made the decisions that shaped its end: the defence of India as the main object, the route through Kalewa, the refusal to abandon the wounded and the refugees. Slim commanded the corps that did most of the fighting, and made the decisions at Yenangyaung and on the way to the Chindwin. Kirby records Wavell telling the Prime Minister that Alexander had performed a fine feat in bringing back the army; the Australian Dictionary of Biography credits Slim with bringing the exhausted but defiant survivors to Imphal, and calls maintaining morale his pre-eminent contribution. Both describe real work at different levels of command. A reader who meets the retreat through Slim’s biography should remember that it was Alexander’s army.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XII" },
            { source: 1, locator: "Wavell, para. 35" },
            { source: 3 },
          ],
        },
        {
          text: "Judged by what Slim knew, his decisions were defensible, and two went wrong. Holding the oilfields to the last met the army’s need for petrol. Holding the 1st Burma Division in place for a Chinese attack that came late cost it its transport and guns. Sending a whole brigade up the Myittha valley against a reported threat uncovered Monywa. Kirby’s own explanation of why the army held together names two things, neither of them a commander: the administrative services, which moved the base north in stages and kept the fighting troops supplied with food, water and ammunition, and the 7th Armoured Brigade, without which, he writes, Burma Corps might well have collapsed. Keeping an army in being depended on what it could carry and what could carry it.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. X, XII" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The volume’s lesson on rebuilding cites research on cohesion and group performance, and cohesion is Kirby’s word for what this army kept. But that research measures modern units in ordinary service, and nothing in it describes how a retreating corps holds together under air attack and without water. The sources show the conditions directly, and the lesson relies on them rather than on an analogy.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson rests on the official history and the despatch.",
        },
      ],
      shadow: {
        text: "Cohesion was bought with almost everything the army owned. At Shwegyin the guns, tanks and nearly all the vehicles were destroyed or abandoned, and the 7th Armoured Brigade, which Kirby credits with saving the corps, came out without its tanks. The Chinese 38th Division, which had fought for Slim at Yenangyaung and whose commander wanted it to go to India with Burma Corps, could not be invited, because it formed the rearguard of the Chinese armies and its removal would have had political repercussions. The corps itself reached India exhausted, and dysentery and malaria took a heavy toll in the Kabaw valley; Kirby judges that another week’s campaign east of the Chindwin might well have led to complete disaster.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "ch. XII" }],
        battleSlugs: ["burma-1942"],
      },
      counterCase: {
        text: "Napoleon’s retreat from Moscow in 1812 is the army that did not survive its retreat. Britannica records that after Maloyaroslavets he went back by the direct route, through Smolensk, which had been ravaged in August and was virtually destitute of supplies, and that the large majority of his losses occurred before the first snowfall. On 5 December, east of Vilnius, he handed the command to Murat and hastened ahead to reach Paris before the news of his disaster. The dissolution of the Grande Armée, Britannica writes, meant that the French army could no longer absorb new recruits into well-established formations. Burma Corps retreated along staging camps stocked ahead of it, its commanders brought it through to India, and it arrived as formations into which an army could be rebuilt. The Serbian volume’s lesson on the retreat through Albania asks what shared hardship can do when supplies cannot be carried; in Burma the supply on the line of retreat made the difference.",
        evidence: "interpretation",
        refs: [
          { source: 4 },
          { source: 0, locator: "ch. XII" },
          { source: 1, locator: "Wavell, para. 35" },
        ],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["maloyaroslavets", "berezina"],
      },
      cost: {
        text: "The heaviest costs fell on those who could not keep up. In the 1st Burma Division’s perimeter at the Pin Chaung, Kirby records, men were beginning to die from exhaustion in the heat for lack of water. The wounded travelled with the army along a sandy track. The refugees, most of them Indians leaving a country where they now feared for their lives, walked beside it or by harder routes to the north, where the monsoon caught them, and many thousands died. No source read for this volume gives a refugee’s own account, and their losses are not counted here. The Indian exodus also left Burma without many of the people who had kept its public services running.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. X, XI, XII" },
          { source: 1, locator: "Alexander, para. 90" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The organisation can carry what it needs as it withdraws, and someone keeps supplies moving ahead of it.",
          "Its leaders accept the loss of what cannot be carried in order to keep its people together.",
        ],
        failsWhen: [
          "The way back runs through ground already stripped, as in Russia in 1812.",
          "Those who cannot keep up are left to bear the cost unseen.",
        ],
        questions: [
          "In your last forced withdrawal, who kept the supplies moving, and were they credited?",
          "What did you give up to keep the team together, and was it the right thing to give up?",
          "Who outside your organisation paid for its retreat, and do you know their account?",
        ],
      },
      bearsOn:
        "The retreat tests the premise of the volume’s question. An army that kept its cohesion through what Kirby calls the longest retreat a British army had made had not simply learned to lose: Kirby explains its defeat by unpreparedness, training for the wrong country, dependence on roads and the loss of the air, and its survival by supply and armour. It brought out of Burma its formations and its commanders’ experience, not its equipment, and what its corps commander had learned there would be tested in Arakan and at Imphal.",
      questions: [
        {
          prompt:
            "Why did Slim order the 1st Burma Division to hold on at the Pin Chaung rather than break out at once?",
          choices: [
            "He expected it to be supplied from the air.",
            "The Chinese 38th Division was to renew its attack at dawn.",
            "He had orders from London to hold the oilfields.",
          ],
          answer: 1,
          explanation:
            "The Chinese attack came in the afternoon, after the division had broken out without its vehicles and guns.",
        },
        {
          prompt:
            "Which two things does Kirby credit with reviving and sustaining the army’s morale in 1942?",
          choices: [
            "Slim’s speeches and new equipment from India.",
            "The administrative services that moved the base north with the army, and the 7th Armoured Brigade.",
            "Air supply and reinforcements from India.",
          ],
          answer: 1,
          explanation:
            "Without the armoured brigade, Kirby writes, Burma Corps might well have collapsed.",
        },
        {
          prompt:
            "What does Britannica say the retreat from Moscow did to the French army’s formations?",
          choices: [
            "They were rebuilt over the winter at Vilnius.",
            "Their dissolution meant the army could no longer absorb recruits into well-established formations.",
            "They were preserved by Murat’s rearguard.",
          ],
          answer: 1,
          explanation:
            "Burma Corps, by contrast, reached India as formations that could be rebuilt.",
        },
      ],
      sourceCheck: {
        question: "What kept Burma Corps together in 1942?",
        witnesses: [
          {
            label: "Kirby, official history, 1958",
            claim:
              "The administrative services and the 7th Armoured Brigade; without the brigade the corps might have collapsed.",
          },
          {
            label: "Wavell, despatch, 1942",
            claim: "Good and resolute commanders: Slim, Cowan and Bruce Scott.",
          },
          {
            label: "Australian Dictionary of Biography, 2002",
            claim: "Slim’s pre-eminent contribution was in maintaining morale.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Prefer the biography, since it focuses on Slim.",
            feedback:
              "A biography asks what one man did; it is not placed to weigh him against the supply services and the armour.",
          },
          {
            text: "Treat them as answers at different levels: the commanders’ decisions, the means that carried the army, and the man the soldiers saw; and notice that the official historian, writing with all the records, puts the means first.",
            feedback:
              "Kirby, Wavell and the biography each describe a real part of the story; the question is how much each part weighed.",
            best: true,
          },
          {
            text: "Prefer Wavell, since he was closest to the events.",
            feedback:
              "Wavell was covering his subordinates’ reports soon after a defeat, and praise of commanders is part of a despatch’s purpose.",
          },
        ],
        battleSlug: "burma-1942",
      },
      seminar: {
        prompt:
          "Whose retreat was it? Argue it from three positions: Alexander, Slim, and an Indian refugee on the track from Ye-U to the Chindwin.",
        guidance:
          "Use Kirby, Wavell’s despatch with Alexander’s report, Newell and the Australian Dictionary of Biography. Say what the refugee could not have recorded, and why no source read gives such an account.",
      },
      sources: [s.kirby2, s.wavell42, s.newell, s.adb, s.ebRetreat],
    },
    {
      slug: "sidelined",
      title: "Sidelined: the first Arakan",
      part: "Learning to lose",
      themes: ["judgement", "communication"],
      claim:
        "When a subordinate is kept out of a failing campaign, he can learn from watching it and say what he sees, but he cannot fix what he does not command, and his learning is tested only once he is given command, with the troops the failure has left.",
      inBrief: {
        strength:
          "He gave his superiors his honest view, on the tanks at Donbaik and on where to stand in May, and drew a new method from a campaign he did not run.",
        shadow:
          "His advice was overruled until the campaign was lost, and his own plans failed with troops whose morale he could not restore.",
      },
      moment: {
        text: "From the autumn of 1942 to April 1943 the British advance down the Arakan coast towards Akyab was run over Slim’s head. Wavell gave the plan to Irwin’s Eastern Army, and Irwin gave the 14th Indian Division its orders; Slim’s XV Corps had been allotted the defence of eastern Bengal and Calcutta. The only part Kirby records for it in the offensive before April came before the attack on Donbaik on 1 February, when Irwin ordered XV Corps to send forward tanks for it: Slim pointed out at the time that they were too few, and his view was not accepted. XV Corps took command in Arakan on 14 April 1943, when the offensive had failed and the Japanese were driving north.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. XI, XV, XX" },
          { source: 1, locator: "ch. VII" },
        ],
      },
      episodes: [
        {
          title: "Overruled at every level",
          text: "The campaign was a chain of advice set aside. When it seemed improbable that the Mayu peninsula could be cleared before the monsoon, Irwin recommended defensive positions; Wavell writes that he refused to take up a defensive attitude without first obtaining a marked success, and directed a further attack on Donbaik, which failed on 18 March. Irwin, Kirby writes, had already overruled Lloyd’s plans more than once, and when Lloyd ordered his brigades out of the end of the peninsula on 29 March, Irwin countermanded the order, relieved him and took command himself until Lomax arrived. On the one occasion tanks were used, the tank commander’s advice on how to use them was not taken. Advice reached each commander from below and was overruled.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "paras. 7, 9" },
            { source: 0, locator: "ch. XX" },
          ],
          battleSlugs: ["first-arakan"],
        },
        {
          title: "A method drawn from a lost campaign",
          text: "Slim found, Kirby writes, a most unsatisfactory state of affairs: units whose morale had been lowered by the failures at Donbaik and Rathedaung, losses replaced by young, partly trained men, morale generally poor and in some units very low. In an appreciation of 24 April he wrote that in a theatre where troops were few and the country vast, lines of defence could always be turned; what was needed were large, strong, well-stocked pivots from which striking forces could operate, not to hold ground but to destroy the enemy, placed so that the Japanese would have to attack them. He proposed to fall back to the open country round Cox’s Bazar, where his artillery and tanks could deploy, and let the Japanese string themselves out: “Let him. Pursuing this policy we give the Japanese all the dirty work.”",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XX" }],
          battleSlugs: ["first-arakan"],
        },
        {
          title: "Arguing with his superior",
          text: "When Irwin came to XV Corps headquarters on 8 May to urge that Maungdaw be held, Slim insisted that the time had come for his withdrawal to Cox’s Bazar; they compromised on giving up Maungdaw and holding a line further north. Later Irwin wanted to retake Maungdaw by surprise; Slim, who had accurate knowledge of the Japanese dispositions, said it would be comparable with the attack on Donbaik, and the idea was dropped. The Australian Dictionary of Biography adds what Kirby does not mention: that Irwin attempted to have Slim relieved, and that the outcome was expressed in Irwin’s message to Slim, “You’re not sacked. I am.” Wavell, who replaced Irwin with Giffard on 20 May, gives as the reason that Irwin had been suffering for some time from ill health.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XX" },
            { source: 3 },
            { source: 2, locator: "para. 14" },
          ],
          battleSlugs: ["first-arakan"],
        },
        {
          title: "Given command",
          text: "Once the corps held the line, Slim’s instructions turned the method into orders. On 14 June 1943 he laid down that, until the weather allowed an offensive, formations in contact would practise aggressive defence and use the monsoon to gain the upper hand in patrolling and minor enterprises. In October, Madan records, he set the policy for the corps’ return to Arakan in November: to hold the line when the Japanese attacked, and to prepare to attack the Maungdaw–Buthidaung area, with a sea assault if one could be made. By then, Madan writes, it was realised that the key to progress lay in command of the heights of the Mayu range. How the corps fared when the Japanese did attack, in February 1944, is the subject of the lesson on rebuilding.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. VIII" }],
          battleSlugs: ["first-arakan", "admin-box"],
          campaignSlugs: ["burma-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Archibald Wavell",
          stake:
            "The Commander-in-Chief who ordered the campaign and the last attack on Donbaik, writing his despatch in June 1944.",
          says: "Taking Akyab overland was always a gamble, and he would never regret ordering the campaign.",
          refs: [{ source: 2, locator: "para. 19" }],
        },
        {
          who: "S. Woodburn Kirby",
          stake:
            "The official historian, writing in 1958 with the records of every command.",
          says: "Wavell might have been well advised to cancel the attempt; Irwin’s views were far from the realities; the plans of Slim and Lomax might have succeeded with determined troops.",
          refs: [{ source: 0, locator: "ch. XX" }],
        },
        {
          who: "William Slim, 24 April 1943, as Kirby prints him",
          stake:
            "The corps commander handed a beaten force, writing an appreciation for his superior.",
          says: "Lines of defence can always be turned; hold strong pivots and let the enemy string himself out.",
          refs: [{ source: 0, locator: "ch. XX" }],
        },
        {
          who: "The Australian Dictionary of Biography",
          stake:
            "A biographical entry of 2002 whose bibliography begins with Lewin’s life of Slim.",
          says: "Irwin tried to have Slim relieved, and was relieved himself.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "A subordinate outside an operation has few levers: advice, an appreciation, and, once he commands, refusal. Slim used each. His advice on the tanks was overruled; his appreciation of 24 April set the plan for the withdrawal; his refusal to repeat Donbaik at Maungdaw stopped an operation. What he could not do was restore units that, Kirby judges, could have been restored only by withdrawing them from Arakan, because the reinforcements sent from India were almost entirely untrained and no unit can absorb many untrained men in the face of the enemy. Kirby’s verdict, that the plans of Slim and Lomax were well conceived and might have succeeded with determined troops, is a judgement on what a commander can do with an army he is given late.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. XX" }],
        },
        {
          text: "Watching from outside may have given Slim what those inside lacked: a view of the pattern rather than the next attack. His appreciation describes the Japanese method, levering the corps out of one position after another through their control of the rivers, and answers it with positions the enemy must attack and forces that destroy rather than hold. Kirby’s review names the same method as decisive: Koga avoided frontal attacks and manoeuvred two divisions out of their positions by deep outflanking attacks on their communications, while the British commanders persisted at Donbaik. Wavell’s despatch, for its part, names the campaign’s greatest gain as experience of the enemy’s methods and of the army’s own defects. Whether the answer would work could not be known in April 1943.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XX" },
            { source: 2, locator: "para. 19" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on how organisations learn from failure, and on how dissent travels up a hierarchy, could bear on this case, but none was read for this volume. The Western Front volume’s lesson on Passchendaele asks why doubts failed to reach the top; in Arakan the doubts did reach the top, from Lloyd, from Irwin and from Slim, and were overruled, which the despatch and the official history show directly.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson rests on the despatch, the two official histories and the biography.",
        },
      ],
      shadow: {
        text: "Being kept out kept Slim’s name off the failure. Wavell’s despatch on the campaign names Irwin and no corps or divisional commander, and the story of Irwin’s attempt to relieve Slim ends, in the biography, with Irwin’s own removal. But Slim’s command in Arakan also failed. The box on the Mayu range collapsed, Buthidaung was abandoned, and the withdrawal from Maungdaw, hurried by reports from V Force that proved incorrect, left much of value to the enemy. Being right about a superior’s plan is not the same as being able to win with the means one is given.",
        evidence: "interpretation",
        refs: [{ source: 2 }, { source: 3 }, { source: 0, locator: "ch. XX" }],
        battleSlugs: ["first-arakan"],
      },
      counterCase: {
        text: "James Longstreet at Gettysburg was a senior subordinate overruled. Piston writes that he opposed Lee’s plans in July 1863 but risked his life recklessly in carrying them out; after the defeat he took reinforcements west and helped win at Chickamauga, then performed poorly under Bragg in the Chattanooga campaign, and as an independent commander failed to take Knoxville. His objection to Lee’s plan did not make him a successful commander of his own campaign, and in defending his reputation after the war, Piston writes, he proved his own worst enemy. A subordinate who was right from outside is tested when he is given command; Longstreet’s test went against him, and Slim’s is the subject of the lessons that follow.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "james-longstreet",
        battleSlugs: ["gettysburg"],
      },
      cost: {
        text: "The men who paid were those left in Arakan too long. Madan records that malaria and fever had taken a very heavy toll of troops who had been given practically no anti-malarial training and had few protective measures, and that reinforcements arrived untrained and unfit for the fighting. When the brigades were extricated from the end of the peninsula, one was broken into small groups that made their way out through the jungle with the loss of all their equipment. The civilians of Arakan appear in the sources read for this lesson chiefly as the labour that disappeared when Maungdaw was bombed.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "ch. VII" },
          { source: 0, locator: "ch. XX" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The person kept out of a failing project records what they see and gives their view, in writing, to those who decide.",
          "They are given authority while there is still something to apply their view to, and the means to apply it.",
        ],
        failsWhen: [
          "Being kept out is taken as proof of having been right.",
          "The people inherited cannot carry out even a sound plan, as in Arakan in May 1943.",
        ],
        questions: [
          "What can you see from outside a failing project that the people inside it cannot?",
          "Have you said it to someone who can act on it, in a form they can use?",
          "If the project were handed to you tomorrow, what could you change and what could you not?",
        ],
      },
      bearsOn:
        "The first Arakan is where the volume’s premise is strongest: Kirby and Madan both describe units whose morale had broken under failure, malaria and untrained reinforcement. It also shows the first answer, leadership, at its limit. The corps commander’s new method came from watching a campaign he did not run, but it could not be carried out with the troops he inherited; the rebuilding that followed needed training, health and fresh formations as well as a commander who had learned.",
      questions: [
        {
          prompt:
            "What advice did Slim give before the attack on Donbaik in February 1943, according to Kirby?",
          choices: [
            "That it be made at night.",
            "That the number of tanks sent forward was insufficient.",
            "That it be called off.",
          ],
          answer: 1,
          explanation:
            "His view was not accepted, on the ground that a larger force was too difficult to move and deploy.",
        },
        {
          prompt: "What did Slim’s appreciation of 24 April 1943 propose?",
          choices: [
            "A renewed attack on Donbaik with fresh troops.",
            "Strong, well-stocked pivots that the Japanese must attack, with striking forces to destroy them, instead of lines of defence.",
            "An immediate seaborne landing at Akyab.",
          ],
          answer: 1,
          explanation:
            "He proposed falling back to the open country round Cox’s Bazar and letting the Japanese string themselves out.",
        },
        {
          prompt:
            "What does the Australian Dictionary of Biography say Irwin tried to do?",
          choices: [
            "Give Slim command of the offensive in January.",
            "Have Slim relieved, before Irwin was himself replaced.",
            "Send Slim to Burma Corps.",
          ],
          answer: 1,
          explanation:
            "Kirby does not mention the attempt; Wavell gives Irwin’s ill health as the reason for replacing him.",
        },
      ],
      sourceCheck: {
        question: "Why was Irwin replaced in May 1943?",
        witnesses: [
          {
            label: "Wavell, despatch, 1944",
            claim: "He had been suffering for some time from ill health.",
          },
          {
            label: "Kirby, official history, 1958",
            claim:
              "His instructions showed how far his views were from the realities of the situation.",
          },
          {
            label: "Australian Dictionary of Biography, 2002",
            claim:
              "He clashed with Slim and tried to have him relieved; “You’re not sacked. I am.”",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Wavell’s reason, since he made the decision.",
            feedback:
              "Wavell made it and wrote it, but a despatch has reasons to give a dignified cause for a commander’s removal, and Wavell had himself overruled Irwin.",
          },
          {
            text: "Treat ill health as Wavell’s stated reason, Kirby’s critique as the historian’s judgement of Irwin’s command, and the biography’s story as one that Kirby does not confirm; the reasons may overlap.",
            feedback:
              "None of the three excludes the others, and only the biography connects the removal to Slim.",
            best: true,
          },
          {
            text: "Accept the biography, since the quoted message settles it.",
            feedback:
              "The message is quoted without a source in the entry; it is a memorable story, not proof of why Wavell acted.",
          },
        ],
        battleSlug: "first-arakan",
      },
      seminar: {
        prompt:
          "What could Slim have done about the Arakan offensive before April 1943? Argue it from three positions: Slim, Irwin and Lloyd.",
        guidance:
          "Use Kirby on the tanks, on Irwin and Lloyd and on the review of the campaign, Wavell’s despatch and the Australian Dictionary of Biography. Say what each man commanded and what he could only advise.",
      },
      sources: [s.kirby2, s.madan, s.wavell43, s.adb, s.longstreet],
    },
    {
      slug: "the-army-that-expected-to-lose",
      title: "The army that expected to lose: rebuilding morale",
      part: "Rebuilding",
      themes: ["motivation", "organisation", "communication"],
      claim:
        "When an army has been beaten, it can be made to expect victory again by training, health and a first success it can believe in, but only if the means arrive and the success is real; a commander’s presence helps only where the system behind him has changed too.",
      inBrief: {
        strength:
          "Slim made himself known to soldiers of every people in his army and enforced the health discipline that kept them in the line.",
        shadow:
          "Much of the rebuilding was ordered from India before and around him, and its first test depended on aircraft and an enemy’s errors.",
      },
      moment: {
        text: "In April 1943 Slim took command of the troops in Arakan at the end of a failed offensive. Kirby writes that he found a most unsatisfactory state of affairs: units whose morale had been lowered by repeated failures to take Donbaik and Rathedaung, losses from battle and malaria replaced by young, partly trained men, and morale generally poor and in some units very low. Madan’s Indian official history adds that the brigades had had practically no anti-malarial training and that reinforcements arrived untrained and unfit for the fighting. A year later the same army’s encircled formations stood and fought. This lesson asks what changed in between, and who changed it.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. XX" },
          { source: 1, locator: "ch. VII" },
        ],
      },
      episodes: [
        {
          title: "Morale after the Arakan",
          text: "When the Japanese drove into the Mayu valley in May 1943, Lomax planned to trap them in a box on the range. Slim reported to Irwin that the sides of the box had crumbled and the lid had opened without adequate reason, mainly because of the very low morale of units that had been in Arakan without relief since the beginning of operations. Kirby judges that morale could have been restored only by withdrawing them, since no unit can absorb large numbers of untrained men in the face of the enemy. The official history’s conclusion is that a beaten unit cannot be rebuilt while it is still being beaten.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XX" }],
          battleSlugs: ["first-arakan"],
        },
        {
          title: "What India ordered",
          text: "Much of the rebuilding was ordered from India. Kirby writes that Auchinleck, as Commander-in-Chief, knew that the morale of the Army in India had been badly shaken by the Arakan failures and set out in the autumn of 1943 to restore it: he enlarged the intelligence school so that officers knew Japanese methods, put into effect the recommendations of the Infantry Committee that had sat in June to raise the standard of training and of reinforcements, ordered constant patrolling and planned raids to give the troops confidence and kill the myth of Japanese invincibility, gave new formations battle training in jungle warfare, and improved welfare, health and feeding, with anti-malarial discipline tightened and mobile malaria treatment units placed close behind the forward divisions. Slim took command of the new Fourteenth Army in the same months.",
          evidence: "fact",
          refs: [{ source: 2, locator: "ch. III" }],
          battleSlugs: [],
          campaignSlugs: ["burma-campaign"],
        },
        {
          title: "Being seen, and enforcing health",
          text: "Slim’s own part was personal. The Australian Dictionary of Biography writes that his pre-eminent contribution was maintaining morale, that he spoke to as many soldiers as possible, man to man, and that his soldiers came to know him as “Uncle Bill”. The Gurkha Museum adds that he addressed the soldiers of a multinational, many-languaged army in their own languages as best he could, and that, malaria being as great a threat as the Japanese, he threatened to remove commanding officers whose units had too many malaria casualties, and carried out the threat, after which the rate improved. In 1957 he told an audience that a leader must be known as an actual person to all under him, and that every man must feel that what he does matters.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4 }, { source: 5 }],
          battleSlugs: [],
        },
        {
          title: "A success the troops could believe in",
          text: "Kirby writes that Slim knew, before the Japanese struck in Arakan in February 1944, that the troops’ self-confidence would be restored only if the unbroken chain of Japanese success with infiltration and envelopment were ended, and that he could not risk even a minor defeat. He had told his commanders that units whose communications were cut were to stand fast, be supplied by air and wait for reserves. The Admin Box held, and Kirby judges the outcome psychologically of immense value: it showed there was an answer to Japanese envelopment and created in the troops confidence in their leaders and in themselves.",
          evidence: "fact",
          refs: [{ source: 2, locator: "ch. X" }],
          battleSlugs: ["admin-box"],
        },
      ],
      witnesses: [
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, with the records of India Command and Fourteenth Army.",
          says: "Auchinleck set out to restore the army’s shaken morale, and the Admin Box restored the troops’ confidence in their leaders and themselves.",
          refs: [{ source: 2, locator: "ch. III, X" }],
        },
        {
          who: "George Giffard",
          stake:
            "Slim’s superior as commander of 11th Army Group, writing his despatch in June 1945.",
          says: "Amenities, a daily newspaper and entertainment improved morale, and the men were beginning to feel they were no longer a forgotten army.",
          refs: [{ source: 6, locator: "para. 166" }],
        },
        {
          who: "Arakawa Kenichi",
          stake:
            "A Japanese military historian writing for his country’s defence ministry about why the Imphal offensive failed.",
          says: "The British trained and converted their army into a vigorous one during 1943, and Mutaguchi did not notice.",
          refs: [{ source: 7 }],
        },
        {
          who: "The Gurkha Museum",
          stake:
            "A regimental museum of the Gurkhas, with whom Slim served, presenting him as a model of leadership.",
          says: "He was seen and heard by his soldiers in their own languages, and he removed commanders who let malaria go unchecked.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "For the strategist, morale was a precondition of every plan Slim made in 1944. The method of standing fast when cut off, with air supply and reserves, assumed troops who would not break when encircled; in May 1943 the box on the Mayu range had failed because they did. Raising the army’s confidence was therefore not a separate task from operations but the condition for the operations he intended, and the measures that mattered most were the ones that made the method possible: training in the jungle, health in the line, and a first test chosen so that it could be won.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XX" },
            { source: 2, locator: "ch. X" },
          ],
        },
        {
          text: "The enemy’s view confirms the change and complicates the credit. Arakawa writes that during 1943 the British postponed their large offensive, adopted the box tactics and trained their army into a vigorous one, and that Mutaguchi failed to notice. The improvement was visible to the other side; but Arakawa attributes it to the British force as a whole, and Kirby attributes the measures to India Command. A strategist judging Slim must separate what he ordered from what he inherited and used.",
          evidence: "interpretation",
          refs: [{ source: 7 }, { source: 2, locator: "ch. III" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Group cohesion",
          base: "meta-analysis",
          text: "Oliver and her colleagues combined studies of military units and found that cohesion was associated with group performance, and more weakly with individual performance, satisfaction, retention and readiness. Training together, shared hardship survived and a commander the troops know are among the conditions that the Burma sources describe; the review suggests why such conditions matter for how units perform.",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "The abstract alone was read. The associations are correlations from modern samples and do not show that cohesion caused the improvement in 1944, or which of Slim’s or Auchinleck’s measures produced it.",
        },
        {
          mechanism: "Why “learned helplessness” does not fit",
          base: "review",
          text: "It is tempting to call a beaten army helpless by learning. Maier and Seligman, who named learned helplessness, now write that the original theory got it backward: passivity after prolonged uncontrollable stress is the default response, and what animals learn is that they have control. If anything carries over, it is that confidence follows experience of control, which is what a first winnable test provides; but the work concerns animals and shock, not armies.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "The abstract alone was read, and the findings come from laboratory animals. They are used here only to explain why the label does not fit an army, not to describe the Fourteenth Army’s state of mind.",
        },
      ],
      shadow: {
        text: "The credit is shared and the method had limits. The measures that Kirby lists were ordered by Auchinleck from India; the success at the Admin Box depended on transport aircraft and air superiority that Slim did not control; and the Japanese, by Arakawa’s account, ignored the change in their enemy. Slim’s enforcement of malaria discipline worked by removing officers, and the sources that praise his presence are a regimental museum and a biography, not the soldiers. Morale built on one success could be lost by one defeat, which is why Slim would not risk even a small one.",
        evidence: "interpretation",
        refs: [
          { source: 2, locator: "ch. III, X" },
          { source: 7 },
          { source: 4 },
        ],
      },
      counterCase: {
        text: "Wavell tried the other way in March 1943. Kirby writes that, with morale ebbing after six weeks of failed attacks at Donbaik and Rathedaung, Wavell was courting disaster in ordering a further attack on Donbaik in the hope that a victory might restore morale and prestige; the Japanese had been reinforced, Akyab could no longer be taken, and the attack on 18 March failed. Wavell’s despatch concedes that the serious loss of the campaign was in prestige and morale. A victory sought to restore morale, without the means to win it, deepened the loss it was meant to repair.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "ch. XX" },
          { source: 10, locator: "para. 19" },
        ],
        battleSlugs: ["first-arakan"],
      },
      cost: {
        text: "The rebuilding was paid for by the men who were sick and the men who were sent untrained. Madan records that malaria and fever took a heavy toll of brigades that had practically no protection against it, and that reinforcements arrived unfit for the fighting they were sent into; Kirby records units left in Arakan without relief until their morale broke. The measures of late 1943 were a response to those losses, not a way of avoiding them.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "ch. VII" },
          { source: 0, locator: "ch. XX" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people who failed are given training, health and the means to succeed, and their first test is one that can be won.",
          "The leader is known to them as a person and the system behind the leader has changed too.",
        ],
        failsWhen: [
          "Morale is pursued by demanding a success the means cannot deliver, as at Donbaik in March 1943.",
          "Presence and speeches stand in for training, health and supply that have not arrived.",
        ],
        questions: [
          "After your team’s last failure, what changed in its training and resources, and what changed only in its speeches?",
          "Which of the measures credited to you were ordered by someone above you?",
          "What first test would show your team it can succeed, and can you make sure it is winnable?",
        ],
      },
      bearsOn:
        "The lesson divides the first answer to the volume’s question. Leadership in the narrow sense, Slim’s presence and his enforcement of health, is well attested; but the training and welfare measures came from India Command, the first success needed aircraft, and the enemy failed to see the change. The premise that the army had learned to lose holds for the Arakan in 1943; that one man rebuilt it does not hold on its own.",
      questions: [
        {
          prompt:
            "Who, according to Kirby, ordered the training and health measures of autumn 1943 to restore the army’s morale?",
          choices: [
            "Mountbatten, on taking command of South-East Asia Command.",
            "Auchinleck, as Commander-in-Chief in India.",
            "Slim alone, on taking command of the Fourteenth Army.",
          ],
          answer: 1,
          explanation:
            "Kirby credits Auchinleck with the intelligence, training, patrolling, welfare, health and malaria measures; Slim took command of the new army in the same months.",
        },
        {
          prompt:
            "Why did Slim say Lomax’s box on the Mayu range failed in May 1943?",
          choices: [
            "The Japanese used tanks.",
            "Its sides crumbled and its lid opened, mainly because of the very low morale of units long in Arakan without relief.",
            "Its air supply failed.",
          ],
          answer: 1,
          explanation:
            "Slim’s report to Irwin, as Kirby prints it, blamed the low morale of units left too long in action.",
        },
        {
          prompt:
            "What do Maier and Seligman now say about learned helplessness?",
          choices: [
            "That it proves beaten armies cannot recover.",
            "That the original theory got it backward: passivity is the default, and what is learned is control.",
            "That it applies equally to animals and armies.",
          ],
          answer: 1,
          explanation:
            "Their review reverses the theory, and its findings come from animal studies.",
        },
      ],
      seminar: {
        prompt:
          "Who rebuilt the Fourteenth Army? Argue the case from three positions: Slim, Auchinleck, and a Japanese staff officer who watched the British change during 1943.",
        guidance:
          "Use Kirby on Auchinleck’s measures and on the Admin Box, Giffard on morale, the Gurkha Museum and the Australian Dictionary of Biography on Slim, and Arakawa. Separate what each man ordered from what he inherited.",
      },
      sources: [
        s.kirby2,
        s.madan,
        s.kirby3,
        s.adb,
        s.gurkha,
        s.lecture,
        s.giffard,
        s.arakawa,
        s.oliver,
        s.maier,
        s.wavell43,
      ],
    },
    {
      slug: "fighting-at-the-end-of-his-line",
      title: "Letting the enemy come: Imphal",
      part: "The decisive battle",
      themes: ["judgement", "adaptation"],
      claim:
        "When a commander draws an attacker to fight at the end of its supply line, he can destroy it, but only if he times his own withdrawal correctly and can reinforce and supply his troops faster than the enemy; withdrawing too late can lose what the plan was meant to save.",
      inBrief: {
        strength:
          "Slim chose to fight the Japanese offensive on the Imphal plain, where their supply would fail first and his own could come by air.",
        shadow:
          "He left the decision to withdraw to a proviso that made it late, and he upheld a withdrawal from Kohima that the official history calls a mistake.",
      },
      moment: {
        text: "On 7 March 1944 Slim went to IV Corps headquarters to discuss with Scoones how to meet the Japanese offensive that both expected. Scoones proposed to withdraw his two forward divisions from Tiddim and Tamu to the Imphal plain, hold vital points with the fewest troops, and assemble a reserve to destroy the Japanese on ground of his own choosing. Slim agreed, provided that permission to withdraw was given to the divisional commanders by Scoones personally, and only when he was satisfied beyond all reasonable doubt that a major offensive had begun. Kirby writes that the proviso was to lead to the withdrawal of the 17th Division being left until too late.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XIII" }],
      },
      episodes: [
        {
          title: "Why the plain",
          text: "Giffard, Slim’s superior, explained the choice in his despatch: to leave the 17th Division at Tiddim and the 20th near Tamu would give the Japanese excellent opportunities to cut them off and imperil the defence of the Imphal plain, which was Slim’s primary task; and if he could engage the Japanese near the plain he would impose on them all the disadvantages of a long line of communication over difficult country while keeping a short one himself. Giffard calls the decision very rightly made.",
          evidence: "fact",
          refs: [{ source: 1, locator: "paras. 62–63" }],
          battleSlugs: ["imphal-kohima"],
        },
        {
          title: "The enemy’s three weeks",
          text: "The Japanese plan made the same calculation from the other side. Monograph No. 134, written after the war by former officers of the Fifteenth Army, records that the attack phase was estimated at three weeks, that each force would supply itself during it, that about three weeks’ rations were stored on the Chindwin, and that ammunition was to be carried for no more than three weeks of operations. Success depended on surprise, and the planners knew the bold march across the mountains could be upset by well-prepared resistance and reinforcements. Arakawa writes that Mutaguchi carried out his plan of 1943 a year later without revision.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }],
          battleSlugs: ["imphal-kohima"],
        },
        {
          title: "Late from Tiddim, quick by air",
          text: "The 17th Division began its withdrawal only when the Japanese were already across its road, and Scoones had to use his reserves to extricate it. Giffard blames the division’s commander, who was not pressed frontally and did not realise how far the enemy had infiltrated behind him, for postponing his retirement somewhat too long; Kirby traces the delay to the proviso Slim attached. To replace the reserves, Slim needed the 5th Indian Division from Arakan. Saunders writes that there were not enough transport aircraft, and that Mountbatten diverted aircraft from the route over the Hump to China, against his directive, to fly the division into Imphal.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "para. 64" },
            { source: 0, locator: "ch. XIII" },
            { source: 4 },
          ],
          battleSlugs: ["imphal-kohima", "admin-box"],
        },
        {
          title: "Kohima",
          text: "Scoones’s appreciation in February expected a detachment of up to four battalions to move against the road from Kohima to Imphal; the Japanese 31st Division came. At the end of March, Kirby writes, the 161st Brigade was ordered back from Kohima to Dimapur, and when Ranking, commanding the area, asked whether he could leave the rest of the brigade at Kohima, Slim, after discussing it with Stopford, replied that the original plan must be adhered to. Kirby calls the precipitous withdrawal a mistake. The garrison left at Kohima held a shrinking perimeter, supplied by air, until relief came.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XIII, XVI" }, { source: 4 }],
          battleSlugs: ["imphal-kohima"],
        },
      ],
      witnesses: [
        {
          who: "George Giffard",
          stake:
            "Slim’s superior, writing in June 1945 about a battle his army group had won.",
          says: "Slim decided very rightly to fight near the plain; the 17th Division’s commander retired somewhat too late.",
          refs: [{ source: 1, locator: "paras. 63–64" }],
        },
        {
          who: "S. Woodburn Kirby",
          stake:
            "The official historian, writing with the records of all the commands involved.",
          says: "Slim’s proviso left the withdrawal too late, and the withdrawal from Kohima was a mistake.",
          refs: [{ source: 0, locator: "ch. XIII, XVI" }],
        },
        {
          who: "Former officers of the Japanese Fifteenth Army",
          stake:
            "Compilers of their army’s record for the American occupation authorities, after its destruction.",
          says: "The plan rested on three weeks’ supplies and on surprise, and knew it could be upset by prepared resistance.",
          refs: [{ source: 2 }],
        },
        {
          who: "Mountbatten, as Saunders quotes his despatch",
          stake:
            "The Supreme Allied Commander, who took the aircraft for the 5th Division from the route to China.",
          says: "Diverting the aircraft was contrary to his directive and risked the goodwill of the President and the Joint Chiefs.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "The plan was sound in its logic: an attacker carrying three weeks’ supplies across mountains must win quickly or starve, and a defender who keeps his army intact near his base, and can be supplied by air, can wait for that moment. The risk lay in the timing. A withdrawal begun too early gives up ground and the forward positions for nothing; one begun too late lets the enemy cut off the divisions it was meant to save. Slim chose to wait for certainty, and the 17th Division paid for the wait with a fighting retreat that used up the reserves.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. XIII" }, { source: 2 }],
        },
        {
          text: "The plan also depended on means Slim did not command. The 5th Division reached Imphal because Mountbatten took aircraft from the route to China against his instructions; the garrisons stood because transport aircraft could supply them. Saunders writes that the encircled men of the Fourteenth Army would have been doomed but for the air. A commander who lets the enemy come must be sure that he can reinforce and supply faster than the enemy can; here that certainty came from a superior’s risk and an air force’s capacity.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The decision to wait for certainty before withdrawing could be read through research on decisions under uncertainty, but none was read for this volume, and the sources show the reasoning directly: Slim wanted no withdrawal until a major offensive was certain, and the proviso written into his agreement made the timing depend on that certainty.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson rests on the orders and judgements recorded in the official history and the despatch.",
        },
      ],
      shadow: {
        text: "The success hides two errors. The proviso that left the 17th Division’s withdrawal late was Slim’s, though his superior’s despatch puts the blame on the division’s commander; and the withdrawal of the 161st Brigade from Kohima, which Slim upheld, left the garrison there weaker than it need have been against a division where a detachment had been expected. The battle was won because the Japanese plan failed, the garrisons held and aircraft arrived in time, not because the timing was right.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "ch. XIII, XVI" },
          { source: 1, locator: "para. 64" },
        ],
        battleSlugs: ["imphal-kohima"],
      },
      counterCase: {
        text: "Singapore is the failure of a defence that waited for the attacker at the end of a long advance without the means to outlast it. The RAF’s official history records that the convoys bringing reinforcements reached Singapore safely and that their arrival raised the population’s spirits, but that the army had been wholly deprived of air support; the last fighters were withdrawn on 10 February 1942, and on 15 February the garrison, hemmed in on all sides, surrendered. The Japanese, the history writes, hardly troubled the ships bringing troops in, knowing they would only swell the prisoners. Letting the enemy come works only for a defender who can supply and reinforce faster than the attacker.",
        evidence: "interpretation",
        refs: [{ source: 5 }],
        battleSlugs: ["singapore-1942"],
      },
      cost: {
        text: "The waiting had its price in men. The 17th Division fought its way back to the plain through the Japanese blocks, and the reserves used to save it were lost to the battle for weeks. When the 161st Brigade was ordered out of Kohima, its commander protested that his forward battalions would have to abandon the Assam Regiment at Jessami to its fate; a message telling the garrison to retire fell into Japanese hands. On the other side, the Japanese divisions that had carried three weeks’ food starved in the monsoon.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XIII, XVI" }, { source: 2 }],
      },
      transfer: {
        holdsWhen: [
          "The opponent’s plan depends on a quick success and its supplies will run out first.",
          "The defender can reinforce and supply the positions it holds faster than the opponent can, and decides in time when to pull back.",
        ],
        failsWhen: [
          "The decision to withdraw waits for a certainty that comes too late.",
          "The defender cannot supply or reinforce the position, as at Singapore.",
        ],
        questions: [
          "If a competitor’s push depends on quick success, how long can you hold before its resources run out, and do you know?",
          "What condition have you set for pulling back, and will you know it is met before it is too late?",
          "Which of the resources your plan depends on are controlled by someone else?",
        ],
      },
      bearsOn:
        "Imphal tests three answers to the volume’s question at once. Leadership chose the ground and the method; the means, aircraft taken from the route to China, made the method work; and the enemy’s plan, carrying three weeks’ supplies on the hope of capture, did much of the rest. The battle shows a rebuilt army standing when cut off, but it also shows its commander’s errors, recorded by the official historian rather than by himself.",
      questions: [
        {
          prompt:
            "What condition did Slim attach to the withdrawal of the forward divisions to the Imphal plain?",
          choices: [
            "That they withdraw at once.",
            "That Scoones personally give permission only when he was satisfied beyond reasonable doubt that a major offensive had begun.",
            "That they wait for Mountbatten’s order.",
          ],
          answer: 1,
          explanation:
            "Kirby writes that this proviso led to the 17th Division’s withdrawal being left until too late.",
        },
        {
          prompt:
            "How long did the Japanese plan expect the attack phase of the Imphal offensive to last?",
          choices: ["Three days.", "About three weeks.", "Six months."],
          answer: 1,
          explanation:
            "Monograph No. 134 records three weeks, with about three weeks’ rations and ammunition.",
        },
        {
          prompt:
            "How was the 5th Indian Division brought from Arakan to Imphal?",
          choices: [
            "By rail through Assam.",
            "By aircraft that Mountbatten diverted from the route to China, against his directive.",
            "By sea to Chittagong and then by road.",
          ],
          answer: 1,
          explanation:
            "Saunders quotes Mountbatten’s despatch on the risk he took with the President’s goodwill.",
        },
      ],
      sourceCheck: {
        question: "Why was the 17th Division’s withdrawal from Tiddim late?",
        witnesses: [
          {
            label: "Giffard, despatch, 1945",
            claim:
              "The division’s commander, not pressed frontally, postponed his retirement somewhat too long.",
          },
          {
            label: "Kirby, official history",
            claim:
              "Slim’s proviso, that permission be given only when a major offensive was certain, led to the withdrawal being left until too late.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Prefer Giffard, since he wrote closest to the event.",
            feedback:
              "Giffard wrote as Slim’s superior about a victory his army group had won, and names a subordinate; nearness in time is not neutrality.",
          },
          {
            text: "Read both: the proviso set the condition, and the divisional commander judged when it was met; the official history, with all the records, traces the delay to the condition.",
            feedback:
              "The two accounts describe different links in one chain; Kirby’s, written with the records of all the commands, places the cause higher up.",
            best: true,
          },
          {
            text: "Dismiss both, since the battle was won anyway.",
            feedback:
              "The victory does not settle why the withdrawal was late or what it cost the 17th Division and the reserves.",
          },
        ],
      },
      seminar: {
        prompt:
          "Was Slim right to wait for certainty before letting his divisions withdraw? Argue it from three positions: Cowan, commanding the 17th Division, Mutaguchi, and Giffard.",
        guidance:
          "Use Kirby on the proviso and on Kohima, Giffard’s despatch, Monograph No. 134 on the Japanese plan, and Saunders on the aircraft. Say what each man knew on 7 March.",
      },
      sources: [
        s.kirby3,
        s.giffard,
        s.jm134,
        s.arakawa,
        s.saunders,
        s.richardsSingapore,
      ],
    },
  ],
  inProgress:
    "This volume is being written. Its pilot lessons are published; the rest are added in reviewed batches.",
};
