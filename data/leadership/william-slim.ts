import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 9, on William Slim, written in reviewed batches: B1, the pilot
// (lessons 0, 4 and 7), then B2 to B5, Parts I to IV in curriculum order,
// ending with the ledger that answers the volume's question;
// docs/LEADERSHIP_EVIDENCE_SLIM.md records which sources can carry each
// lesson, and docs/SOURCE_AUDIT.md how each was read. Slim's own books are in
// copyright, so his words reach the volume through the sources that quote
// them, and through his openly readable lecture of 1957. The official
// histories are cited by volume with chapter locators.
const kirby = (vol: 2 | 3 | 4 | 5, title: string, year: number): Source => ({
  title: `S. Woodburn Kirby, The War Against Japan, vol. ${["", "", "II", "III", "IV", "V"][vol]}: ${title} (London: HMSO, ${year}) (History of the Second World War, United Kingdom Military Series)`,
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
  lemoStalingrad: {
    title: "“Die Schlacht um Stalingrad” (in German)",
    url: "https://www.dhm.de/lemo/kapitel/der-zweite-weltkrieg/kriegsverlauf/schlacht-um-stalingrad-194243",
    publisher: "LeMO, Deutsches Historisches Museum",
  },
  ndbPaulus: {
    title:
      "Manfred Kehrig, “Paulus, Friedrich Wilhelm Ernst”, Neue Deutsche Biographie 20 (2001) (in German)",
    url: "https://www.deutsche-biographie.de/sfz94261.html",
    publisher: "Deutsche Biographie",
  },
  barkawi: {
    title:
      "Tarak Barkawi, Soldiers of Empire: Indian and British Armies in World War II (Cambridge University Press, 2017), Introduction, publisher’s excerpt",
    url: "https://assets.cambridge.org/97811071/69586/excerpt/9781107169586_excerpt.pdf",
    publisher: "Cambridge University Press",
  },
  somervilleAfrica: {
    title:
      "“African participants in the Second World War”, with the recollections of Aziz Brimah, 81st West African Division, recorded by Christopher Somerville",
    url: "https://www.christophersomerville.co.uk/mgtrust/afr2.htm",
    publisher: "christophersomerville.co.uk",
  },
  somervilleIndia: {
    title:
      "“Participants from the Indian subcontinent in the Second World War”, with the recollections of Nila Kantan and Tilbahadur Thapa, recorded by Christopher Somerville",
    url: "https://www.christophersomerville.co.uk/mgtrust/ind2.htm",
    publisher: "christophersomerville.co.uk",
  },
  iwmIndia: {
    title: "India and the Second World War",
    url: "https://www.iwm.org.uk/history/second-world-war/india",
    publisher: "Imperial War Museums",
  },
  sleesman: {
    title:
      "Dustin Sleesman and others, Cleaning up the big muddy: a meta-analytic review of the determinants of escalation of commitment (2012), abstract",
    url: "https://doi.org/10.5465/amj.2010.0696",
    publisher: "Academy of Management Journal",
  },
  midway: {
    title: "H-006-1: Midway overview",
    url: "https://www.history.navy.mil/about-us/leadership/director/directors-corner/h-grams/h-gram-006/h-006-1.html",
    publisher: "Naval History and Heritage Command",
  },
  romanusCommand5: {
    title:
      "Charles F. Romanus and Riley Sunderland, Stilwell’s Command Problems (Washington: Office of the Chief of Military History, 1956), ch. V: The Burma Campaign in the Balance (United States Army in World War II)",
    url: "https://www.ibiblio.org/hyperwar/USA/USA-CBI-Command/USA-CBI-Command-5.html",
    publisher: "HyperWar (ibiblio)",
  },
  kirby4: kirby(4, "The Reconquest of Burma", 1965),
  leese: {
    title:
      "Oliver Leese, “Operations in Burma from 12th November, 1944, to 15th August, 1945”, despatch of 4 February 1947, Supplement to the London Gazette, no. 39195, 12 April 1951",
    url: "https://www.thegazette.co.uk/London/issue/39195/data.pdf",
    publisher: "The London Gazette",
  },
  ndbRommel: {
    title:
      "Sönke Neitzel, “Rommel, Eugen Johannes Erwin”, Neue Deutsche Biographie 22 (2005) (in German)",
    url: "https://www.deutsche-biographie.de/sfz107896.html",
    publisher: "Deutsche Biographie",
  },
  kirby5: kirby(5, "The Surrender of Japan", 1969),
  macgarrigle: {
    title:
      "George L. MacGarrigle, Central Burma (The U.S. Army Campaigns of World War II, Center of Military History, 1996)",
    url: "https://archive.org/details/CentralBurma",
    publisher: "Internet Archive",
  },
  saunders16: {
    title:
      "Hilary St. George Saunders, Royal Air Force 1939–1945, vol. III: The Fight Is Won (London: HMSO, 1954), ch. XVI: The Rising Sun Sets (History of the Second World War, United Kingdom Military Series)",
    url: "https://www.ibiblio.org/hyperwar/UN/UK/UK-RAF-III/UK-RAF-III-16.html",
    publisher: "HyperWar (ibiblio)",
  },
  ndbMoltke: {
    title:
      "Heinrich Walle, “Moltke, Helmuth Graf von”, Neue Deutsche Biographie 18 (1997) (in German)",
    url: "https://www.deutsche-biographie.de/sfz64977.html",
    publisher: "Deutsche Biographie",
  },
  britBelisarius: {
    title: "John Walton Barker, “Belisarius”",
    url: "https://www.britannica.com/biography/Belisarius",
    publisher: "Encyclopaedia Britannica",
  },
  britAungSan: {
    title: "“Aung San” (Britannica Editors)",
    url: "https://www.britannica.com/biography/Aung-San",
    publisher: "Encyclopaedia Britannica",
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
      slug: "stand-and-be-supplied",
      title: "Stand and be supplied: the Admin Box",
      part: "Rebuilding",
      themes: ["organisation", "judgement"],
      claim:
        "When a commander orders encircled troops to stand fast, they can hold and turn an envelopment into a trap, but only if the means to supply them from the air were prepared before the order was given, the air is his, and reserves arrive in time; without the aircraft, the same order leaves the troops to starve.",
      inBrief: {
        strength:
          "His order to stand fast when cut off was given months in advance, with the air supply and reserves to make it good.",
        shadow:
          "The aircraft were flown by an American-led command and won their sky with new fighters; surprise and slow reserves made the margin thin.",
      },
      moment: {
        text: "In the early hours of 4 February 1944 a Japanese column under Major-General Sakurai passed through and round the 7th Indian Division in Arakan and within a day was deployed in its rear. On 6 February the division’s headquarters was overrun, and its commander, Messervy, fought his way out to Sinzweya, the administrative area, where clerks, cooks, gunners, mule drivers and part of a brigade formed what became known as the Admin Box. In the past, a Japanese envelopment like this had been followed by a British withdrawal. This time the order was to stay. Kirby records that when Slim took command of the Fourteenth Army in October 1943 he had made it clear that formations whose communications were cut were to stand fast and, supplied by air, form an anvil against which reserves would destroy the enemy in their rear; on the evening of 4 February he told Christison, commanding XV Corps, that his formations would be supplied by air if necessary.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. IX, X" },
          { source: 1, locator: "ch. X" },
          { source: 2, locator: "para. 40" },
        ],
      },
      episodes: [
        {
          title: "A promise prepared in advance",
          text: "The order was only as good as the means behind it, and Kirby shows them being built before it was given. Air supply in the retreat of 1942 had been improvised: a scratch unit had fed refugees and Chinese troops leaving Burma. From December 1942 India Command trained air supply companies at Chaklala, and by the autumn of 1943 several were stationed at airfields in eastern Bengal. Slim had warned his chief administrative officer, Snelling, that he must be ready to maintain forward formations by air at any time; the air supply units were reinforced and their training intensified, and when the Japanese attack was expected Slim told Snelling to start packing day and night. With reserves at hand and the air supply organisation ready, Kirby writes, Slim felt that the offensive could be awaited with confidence.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. III, IX" }],
          battleSlugs: ["admin-box"],
        },
        {
          title: "Whose aircraft",
          text: "The aircraft were not Slim’s. Giffard records that in December 1943 the British and American transport squadrons were brought under one Troop Carrier Command, commanded by Brigadier-General W. D. Old of the United States Army Air Forces. Supply dropping began on 9 February, by night once Japanese fighters appeared, except over Sinzweya, where the hills ruled out night dropping and the aircraft flew special circuits by day; the beleaguered troops received not only food and ammunition but cigarettes, rum, mail and newspapers. Saunders credits the newly arrived Spitfire squadrons with winning the air that made it possible. The same squadrons were also supplying the 81st West African Division in the Kaladan and preparing to fly the Chindits into Burma; on 18 February Mountbatten asked to divert transport aircraft from the airlift to China. Kirby records that the Combined Chiefs of Staff authorised it on the 24th and that the aircraft arrived as the pass reopened, when the need for them was over.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "para. 122" },
            { source: 0, locator: "ch. X" },
            { source: 4 },
          ],
          battleSlugs: ["admin-box"],
        },
        {
          title: "The box",
          text: "The defenders of Sinzweya were not the army’s infantry. Madan, the Indian official historian, lists the doctor, the tankman, the gunner, the mule driver, the sapper, the clerk and the cook; Messervy ordered that there would be no withdrawal, and that the troops would dig in where they were and let the Japanese attack. Kirby writes that the garrison, largely administrative troops, fought magnificently and, helped by poorly co-ordinated Japanese attacks, repelled every attempt to break in; Madan notes that the Indian muleteers of the mule companies, never taken seriously as fighters, took the box’s first Japanese prisoner. From mid-February seriously wounded men were flown out from light-aircraft strips by American pilots of No. 1 Air Commando.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "ch. X" },
            { source: 0, locator: "ch. X" },
          ],
          battleSlugs: ["admin-box"],
        },
        {
          title: "The besieger besieged",
          text: "The Japanese plan assumed the old pattern. Giffard quotes a captured directive of the 55th Division’s infantry group: as the enemy had previously suffered defeat, if a portion of them wavered the whole would at once be confused, and victory was certain. The Japanese army’s own monograph, written after the war by former officers of the 28th Army, describes the change from the other side: in the past they had won by surrounding the enemy, but now the enemy had adopted a strong perimeter defence which, supported by air supply, withstood their encircling tactics; after the middle of February lack of supplies, particularly food, handicapped them, while the British had adequate food and ammunition from the air. On the night of 23 February Colonel Tanahashi withdrew his force on his own responsibility; Sakurai was extremely angry, the monograph says, but came to see that lack of food had made it inevitable.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "para. 41" },
            { source: 3, locator: "Ha-Go operation" },
          ],
          battleSlugs: ["admin-box"],
        },
      ],
      witnesses: [
        {
          who: "George Giffard",
          stake:
            "Slim’s superior as commander of 11th Army Group, writing his despatch in June 1945.",
          says: "The division was supplied by air and so did not have to retire, the main cause of the Japanese defeat; the basic reason was that the troops refused to waver.",
          refs: [{ source: 2, locator: "paras. 29, 41" }],
        },
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, writing in 1961 with the records of both sides.",
          says: "The battle marked the turning point of the war in South-East Asia, and its outcome was psychologically of immense value.",
          refs: [{ source: 0, locator: "ch. X" }],
        },
        {
          who: "Former officers of the Japanese 28th Army",
          stake:
            "Compilers of their army’s record for the American occupation authorities.",
          says: "The enemy’s perimeter defence, supported by air supply, withstood the encircling tactics that had won before.",
          refs: [{ source: 3, locator: "Ha-Go operation" }],
        },
        {
          who: "Hilary St. George Saunders",
          stake: "The Royal Air Force’s official historian, writing in 1954.",
          says: "The army was ordered to stand and rely on the air forces for supplies, and that is why the victory was won.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "An order to stand fast when cut off is a promise from the commander to the troops: hold, and you will be fed and relieved. Its value lies entirely in whether it can be kept. Slim’s contribution was to tie the order to the means before it was needed: the warning to Snelling, the air supply units reinforced and trained, the reserves held ready. The means themselves came from many hands: India Command built the air supply organisation, an American-led command flew it, and the Spitfires won the sky. The method was Slim’s; its execution depended on others, as the volume’s question would predict.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. III, IX" },
            { source: 2, locator: "para. 122" },
            { source: 4 },
          ],
        },
        {
          text: "The margin was thinner than the victory makes it look. Kirby writes that the Japanese achieved almost complete surprise, partly because XV Corps paid too little heed to reports from its forward troops, and that a small raiding detachment drew off the first reserves, so that no serious pressure reached the Japanese rear until 16 February, twelve days into the battle. The transport squadrons were committed to the West Africans and to the Chindit fly-in as well; had the crisis run into March, Kirby says, either the 7th Division’s supply or the fly-in would have had to give way unless more aircraft were found. The enemy’s supplies ran out first, which is what the method was designed to ensure, but only just.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. X" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The order changed what encircled soldiers could expect, and Madan quotes Mountbatten’s view that the mail and newspapers dropped with the rations made the troops realise that, though encircled, they were never isolated. Research on expectation and stress could bear on that, but none was read for this volume, and the lesson on rebuilding has already set out what the cohesion research can and cannot say. The sources show the effect in the fighting and in the Japanese monograph’s account of the change.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson rests on the official histories, the despatch and the Japanese monograph.",
        },
      ],
      shadow: {
        text: "The credit is claimed by every hand that helped. Kirby and Giffard credit Slim’s orders; Madan credits the farsightedness of the Allied higher command and the air force; Saunders writes of Mountbatten and the airmen, and of a victory won by air power, as simple as that. Each is partly right. The method also had conditions that Arakan in February 1944 happened to meet: air superiority, transport aircraft that could be spared for three weeks, and an enemy whose own supply could not outlast them. Where those conditions failed, as for the encircled army in the counter-case, the same order was fatal.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "ch. X" },
          { source: 1, locator: "ch. X" },
          { source: 4 },
        ],
        battleSlugs: ["admin-box"],
      },
      counterCase: {
        text: "At Stalingrad in November 1942 the German Sixth Army was given the same order without the means. LeMO, the German Historical Museum’s history, writes that Hitler flatly refused Paulus’s request to break out and trusted the empty assurances of Göring, commanding the Luftwaffe, that the encircled army could be supplied from the air until relieved; the Wehrmacht lacked the capacity for either relief or air supply that winter, and the supplies the army needed were never delivered. Manstein’s relief attack stalled short of the pocket and was broken off. Kehrig’s biography of Paulus adds that he accepted the plan, unlike his corps commander Seydlitz, taking the promised air supply as the only possibility for the time being; when the relief stalled, a breakout was ruled out by the lack of fuel and the starving state of the troops. The order to stand was the same as Slim’s; the aircraft and the relief were not there.",
        evidence: "interpretation",
        refs: [{ source: 5 }, { source: 6 }],
        commanderSlug: "erich-von-manstein",
        battleSlugs: ["stalingrad"],
      },
      cost: {
        text: "On the night of 7–8 February the Japanese overran the box’s main dressing station. Kirby, from the few survivors, writes that wounded men were tied and beaten and kept without food and water, that those who cried for water were shot, and that the rest were fired on when the area could no longer be held; Madan prints the account of Captain S. N. Basu, a doctor who escaped, that the medical staff were lined up and shot. The two accounts differ, and both describe the killing of wounded men and those caring for them. On the other side, the Japanese column ran out of food; Giffard writes that from 20 February its men tried to escape in small parties and many failed to get through.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. X" },
          { source: 1, locator: "ch. X" },
          { source: 2, locator: "para. 39" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people told to hold their ground have been promised support that was prepared before the crisis and can actually be delivered.",
          "Reserves are ready to break the pressure on them, and the opponent’s own supplies will run out first.",
        ],
        failsWhen: [
          "The promise of support rests on capacity that does not exist, as at Stalingrad.",
          "The same scarce resources are committed to other tasks that cannot wait.",
        ],
        questions: [
          "When you ask a team to hold under pressure, what have you prepared to support them, and can it really be delivered?",
          "Which of those resources belong to someone else, and what else are they committed to?",
          "How long can the team hold, and how long will the relief take to arrive?",
        ],
      },
      bearsOn:
        "The Admin Box is the volume’s question in miniature. Leadership gave the order and prepared it; the means, transport aircraft under an American commander and fighters that won the air, made it possible; and the enemy’s mistake, a plan built on the assumption that the British would retreat and on supplies the column could carry, did the rest. Kirby calls the result psychologically of immense value: it was the first success the rebuilt army could believe in.",
      questions: [
        {
          prompt:
            "What had Slim ordered, before February 1944, for formations whose communications were cut?",
          choices: [
            "To withdraw at once to the nearest road.",
            "To stand fast and, supplied by air, form an anvil against which reserves would destroy the enemy.",
            "To break out in small parties through the jungle.",
          ],
          answer: 1,
          explanation:
            "Kirby records the order and the preparations Slim made with Snelling to make it practical.",
        },
        {
          prompt:
            "Who commanded the Troop Carrier Command that supplied the encircled formations?",
          choices: [
            "Slim himself.",
            "Brigadier-General W. D. Old of the United States Army Air Forces.",
            "Christison, the corps commander.",
          ],
          answer: 1,
          explanation:
            "Giffard records that British and American transport squadrons were unified under Old in December 1943.",
        },
        {
          prompt:
            "What does the Japanese monograph say changed in February 1944?",
          choices: [
            "The British attacked first.",
            "The enemy now held strong perimeters supplied by air, which withstood the encircling tactics that had won before.",
            "The Japanese ran out of ammunition on the first day.",
          ],
          answer: 1,
          explanation:
            "It adds that lack of food handicapped the Japanese after mid-February, while the British were supplied from the air.",
        },
      ],
      sourceCheck: {
        question:
          "Did the transport aircraft borrowed from the route to China save the Admin Box?",
        witnesses: [
          {
            label: "Peirse, as Saunders quotes him",
            claim:
              "He was compelled to request the loan of transport aircraft from the United States Air Transport Command, which were promptly and unstintingly supplied.",
          },
          {
            label: "Kirby, official history",
            claim:
              "The diversion was authorised on 24 February; the aircraft arrived as the pass reopened and were returned in early March.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept Peirse: the borrowed aircraft supplied the box.",
            feedback:
              "Peirse describes the request and the response; Kirby’s dates show the aircraft arrived after the need had passed.",
          },
          {
            text: "Read them together: the box was supplied by the squadrons already in the theatre, and the request shows how close the margin was if the battle had lasted longer.",
            feedback:
              "Both are true; the borrowed aircraft matter as evidence of the risk, not as the cause of the victory.",
            best: true,
          },
          {
            text: "Dismiss both, since the battle was won by the infantry.",
            feedback:
              "The infantry held because they were supplied; the question is which aircraft supplied them.",
          },
        ],
        battleSlug: "admin-box",
      },
      seminar: {
        prompt:
          "Who won the Admin Box? Argue it from three positions: Slim, Brigadier-General Old of Troop Carrier Command, and Colonel Tanahashi.",
        guidance:
          "Use Kirby on the order, the preparations and the margin, Giffard on the aircraft and the captured directive, Madan on the garrison, Saunders on the air, and the Japanese monograph on the withdrawal. Say what each controlled.",
      },
      sources: [
        s.kirby3,
        s.madan,
        s.giffard,
        s.jm132,
        s.saunders,
        s.lemoStalingrad,
        s.ndbPaulus,
      ],
    },
    {
      slug: "whose-army",
      title: "Whose army? The soldiers of an empire that was ending",
      part: "Rebuilding",
      themes: ["motivation", "ethics"],
      claim:
        "When an army of many peoples fights for a state that many of its soldiers have reason to doubt, its commanders can help make it fight as one, but they cannot settle for its soldiers whose war it is, and the answer may change in defeat, in captivity or after victory.",
      inBrief: {
        strength:
          "An army of Indian, Gurkha, African, Burmese and British soldiers fought increasingly well in a war many of them had little reason to call their own.",
        shadow:
          "It served a colonial state during a famine at its base, and some of its own former soldiers fought against it.",
      },
      moment: {
        text: "In the autumn of 1943, as the Fourteenth Army was formed, famine struck Bengal, the province behind its front. Kirby attributes it to hoarding and a partial failure of the main crops, and records that at the end of October the Viceroy had to ask for military aid; the army organised the collection and transport of supplies and medical relief. The Imperial War Museums write that the bulk of the Fourteenth Army was Indian. In the same months the Japanese placed a division of the Indian National Army, raised from Indian soldiers captured in 1942, under the Fifteenth Army that was preparing to attack Imphal. Barkawi, a historian of the Indian Army, sums up the position: by 1943 Indian soldiers found their former comrades arrayed against them, the British had not promised any concrete step toward independence after the war, famine was consuming Bengal, and yet Indian soldiers went out to fight, increasingly effectively.",
        evidence: "fact",
        refs: [
          { source: 4, locator: "ch. II, VI" },
          { source: 3 },
          { source: 0, locator: "Introduction" },
        ],
      },
      episodes: [
        {
          title: "A volunteer army of a colonial state",
          text: "The army was raised by voluntary enlistment, and it was organised by the colonial state around the idea of “martial races”, recruiting from favoured peoples into ethnically separate units. Barkawi writes that the war broke that structure: defeats and massive expansion forced the army to recruit beyond the favoured classes and to commission ever more Indian officers, many of them emergency-commissioned nationalists, with British officers new to India; and soldiers, he notes, fought effectively together without much of a common language. Before the war most of its soldiers had been, in his words, uneducated peasants serving a distant King-Emperor, fighting an enemy that promised them liberation from white colonialism. The Gurkhas came from Nepal, outside British India; the West African divisions from the Gold Coast, Nigeria, Sierra Leone and the Gambia.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "Introduction" },
            { source: 2 },
            { source: 1 },
          ],
          battleSlugs: [],
          campaignSlugs: ["burma-campaign"],
        },
        {
          title: "In their own words",
          text: "A few soldiers’ reasons survive in their own words, recorded decades later by the writer Christopher Somerville. Aziz Brimah, the son of a Muslim community chief in Accra, served with the 81st West African Division in Burma. His motives, he said, were that the British had ended the tribal wars, that it was proper to help them in trouble, and that it was in his own people’s interest to face an expanding enemy before it reached them: “We knew that if we didn’t volunteer the enemy would come.” He took the fight as a holy war. Nila Kantan, a Brahmin from a village on the Godavari who had never met an Englishman, volunteered in 1940, was rejected for the infantry as too thin and served in supply units; in the desert he asked himself why they were fighting there, said that in the army they forgot their religion, and came to abhor war. Tilbahadur Thapa, a Gurkha with the Chindits in 1943, was captured, held in Rangoon jail and asked with the other prisoners whether he would work for the Japanese; every hand went up, he said, and he later escaped to the British lines.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 2 }],
          battleSlugs: [],
          campaignSlugs: ["burma-campaign"],
        },
        {
          title: "The army that fed the famine’s base",
          text: "The famine fell on the province that was the army’s base. Kirby records that the army’s relief organisation doubled the despatch of supplies to the affected areas within a fortnight and partly restored confidence, but that it was months before the situation returned to normal, and that India’s internal economy was reaching breaking point. His explanation of the famine, hoarding and crop failure, is the official historian’s; it is the only one read for this volume. The army that was being rebuilt to fight from Bengal did so while Bengal starved.",
          evidence: "interpretation",
          refs: [{ source: 4, locator: "ch. II" }],
          battleSlugs: [],
          campaignSlugs: ["burma-campaign"],
        },
        {
          title: "After victory",
          text: "The question of whose war it was was answered politically after the fighting. The Imperial War Museums write that India’s contribution to victory was so immense that it became a key argument for securing independence in 1947, the year in which partition divided British India into India and Pakistan. The Japanese had hoped for an answer of a different kind: Kirby writes that their planners thought the Imphal offensive might, with Bose’s Indian National Army, foment a revolt in Bengal and Bihar on a far greater scale than the riots of 1942. The soldiers of the Fourteenth Army defeated that offensive, and within three years the empire they had served in India was gone.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 4, locator: "ch. XXXII" }],
          battleSlugs: ["imphal-kohima"],
        },
      ],
      witnesses: [
        {
          who: "Aziz Brimah, 81st West African Division",
          stake:
            "A Gold Coast soldier, interviewed decades after the war for a British writer’s book.",
          says: "The enemy would have come if they had not gone to meet it; he fought it as a holy war.",
          refs: [{ source: 1 }],
        },
        {
          who: "Nila Kantan, Indian Army supply units",
          stake:
            "A volunteer of 1940 from a village in southern India, interviewed decades later.",
          says: "Every job in the army is useful; he wondered why they were fighting, and came to hate war.",
          refs: [{ source: 2 }],
        },
        {
          who: "Tarak Barkawi",
          stake:
            "A historian of the Indian Army, writing in 2017 about why its soldiers fought.",
          says: "Indian soldiers fought increasingly effectively despite famine, the INA and no promise of independence, because the army itself made them into fighting groups.",
          refs: [{ source: 0, locator: "Introduction" }],
        },
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, writing in 1961 from British and Japanese records.",
          says: "The army organised famine relief in Bengal; the Japanese hoped the INA would help raise a revolt in India.",
          refs: [{ source: 4, locator: "ch. II, XXXII" }],
        },
      ],
      strategist: [
        {
          text: "For the commander, the army’s composition was a fact of means, and the measures that made it fight, training, health and a first success, are the subject of the earlier lessons. What the commander could not supply was a cause the soldiers shared. The sources show several: Brimah’s fear of an enemy that would come to his home and his sense of obligation; Kantan’s pride in a job that mattered; and, in Barkawi’s argument, the army itself, whose discipline and training made groups that held together without a nation behind them. None of these is the empire’s own justification, and none was the commander’s to give.",
          evidence: "interpretation",
          refs: [
            { source: 1 },
            { source: 2 },
            { source: 0, locator: "Introduction" },
          ],
        },
        {
          text: "The enemy’s strategy counted on the question being open. Kirby writes that the Japanese hoped Imphal would bring a revolt in India with the help of the INA, and the INA division marched with the Fifteenth Army. The Fourteenth Army’s answer in 1944 was given on the battlefield, but the political answer came later and was not the empire’s: India’s war effort, the Imperial War Museums write, became an argument for independence. A commander can win the war he is given; he cannot decide what his soldiers’ victory will mean to them.",
          evidence: "interpretation",
          refs: [{ source: 4, locator: "ch. VI, XXXII" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Solidarity made by the army itself",
          base: "theory",
          text: "Barkawi argues that an army is a machine for group formation: regular discipline is a set of sturdy ritual techniques, many of them doubling as training, that work in almost any culture though always in a local idiom, and under the right conditions battle itself generates solidarity and the will to sacrifice. He sets this against the classic view, from Shils and Janowitz, that casualties break down the small groups that keep soldiers fighting. The argument explains how soldiers with different reasons, or none they would name, could fight well together; the lesson on rebuilding cites the cohesion research that measures something similar in modern units. It does not tell us what any one soldier thought.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "Introduction" }],
          limit:
            "Only the publisher’s excerpt of the introduction was read: it states the argument without the evidence of the chapters. It is historical sociology rather than psychology, and it describes the Indian Army as a whole rather than particular units.",
        },
      ],
      shadow: {
        text: "The soldiers’ voices in this lesson are few, recorded decades after the war and selected for publication by a British writer; none comes from the Indian National Army, from Burmese soldiers on either side, or from Bengal. The empire also used its soldiers as a story: Brimah recalled that on the way to India rumours spread among Indians that the Africans were cannibals with tails, and that the British authorities themselves began to spread the story to frighten the Japanese. An army that fought well under these conditions says much about its soldiers; it says little in favour of the state that raised it.",
        evidence: "interpretation",
        refs: [{ source: 1 }, { source: 2 }],
      },
      counterCase: {
        text: "The same army’s hold failed in the defeat of 1941–1942. Barkawi writes that its war-raised battalions were overrun from Hong Kong to Rangoon, by way of Singapore, and that from the remnants of this defeated army the Japanese recruited the anti-British Indian National Army; war, he argues, made many Indian soldiers into political agents, especially those in Axis captivity. Kirby, writing from the British records, calls it the “so-called” Indian National Army and records its division placed under the Japanese Fifteenth Army for Imphal. The organisation that bound soldiers to the army in Arakan and at Imphal could not bind men whose army had surrendered and who were offered another cause. The Hannibal volume’s lesson on an army of many peoples asks how a commander held such an army together far from home; here the question is what happened when the army no longer held them.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "Introduction" },
          { source: 4, locator: "ch. VI" },
        ],
        battleSlugs: ["singapore-1942", "imphal-kohima"],
      },
      cost: {
        text: "The costs of this lesson fall on people the commanders’ sources rarely name. Bengal starved while the army’s base was built on it; Kirby gives the official explanation and the relief, not the dead. Soldiers of the INA and of the Fourteenth Army, former comrades, fought each other. Prisoners like Tilbahadur Thapa were held in conditions he described as bound together on their backs over a trench for their waste, in the heat, for a month. No figure for any of these is given here.",
        evidence: "fact",
        refs: [
          { source: 4, locator: "ch. II" },
          { source: 0, locator: "Introduction" },
          { source: 2 },
        ],
      },
      transfer: {
        holdsWhen: [
          "People with different reasons for being there are given training, purpose in their own work and the experience of succeeding together.",
          "Their leaders know that the organisation’s cause is not necessarily theirs, and do not pretend otherwise.",
        ],
        failsWhen: [
          "The organisation is defeated or absent, and someone else offers the people a cause, as in 1942.",
          "Leaders assume that people who work well for them share the organisation’s aims.",
        ],
        questions: [
          "Do you know why the people in your organisation are there, in their own words?",
          "Which of your organisation’s aims would they not call their own?",
          "If the organisation failed tomorrow, what would still hold them together?",
        ],
      },
      bearsOn:
        "The lesson tests what “leadership” can mean in the volume’s question. Slim could make an army of many peoples fight well, but the reasons its soldiers fought were their own, and some were the army’s doing rather than any commander’s. It also widens “the record”: the commanders’ sources describe the army as formations, and the soldiers’ own reasons reach us only in a few recollections recorded long afterwards.",
      questions: [
        {
          prompt:
            "What reasons did Aziz Brimah give for volunteering, as Somerville recorded them?",
          choices: [
            "He was conscripted and had no choice.",
            "The British had ended the tribal wars, it was proper to help them, and the enemy would come if not met.",
            "He wanted to see India.",
          ],
          answer: 1,
          explanation: "He added that he fought the war as a holy war.",
        },
        {
          prompt:
            "How did the army respond to the Bengal famine, according to Kirby?",
          choices: [
            "It took no part in relief.",
            "At the Viceroy’s request it organised the collection and transport of supplies and medical relief.",
            "It moved its base out of Bengal.",
          ],
          answer: 1,
          explanation:
            "Kirby gives the official explanation of the famine and the relief; it was months before the situation returned to normal.",
        },
        {
          prompt:
            "What does Barkawi argue sustained the Indian Army’s soldiers, if not nationalism?",
          choices: [
            "Hatred of the Japanese alone.",
            "The army itself, whose discipline, training and battle made soldiers into fighting groups.",
            "A promise of independence after the war.",
          ],
          answer: 1,
          explanation:
            "He notes that the British had made no concrete promise of independence.",
        },
      ],
      sourceCheck: {
        question: "Why did the soldiers of the Fourteenth Army fight?",
        witnesses: [
          {
            label: "Aziz Brimah, recalled decades later",
            claim:
              "To meet an expanding enemy before it reached home, and as a holy war.",
          },
          {
            label: "Nila Kantan, recalled decades later",
            claim:
              "He volunteered, did a job he thought useful, and wondered why they were fighting.",
          },
          {
            label: "Barkawi, historian, 2017",
            claim:
              "The army itself made them into groups that fought, without a nation behind them.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Generalise from Brimah: they fought to defend their homes.",
            feedback:
              "One soldier’s reasons, recalled decades later, cannot stand for an army of many peoples.",
          },
          {
            text: "Treat the soldiers’ words as evidence of particular men’s reasons, and Barkawi’s argument as an explanation of how the army made such different men fight together; neither settles the question for the army as a whole.",
            feedback:
              "The sources answer different questions: why one man went, and how an organisation made many men fight.",
            best: true,
          },
          {
            text: "Assume they fought for the empire, since they served in its army.",
            feedback:
              "None of the soldiers quoted gives that reason, and the volume’s rules exclude assigning one reason to all.",
          },
        ],
      },
      seminar: {
        prompt:
          "Whose war was it? Argue it from three positions: a soldier of an Indian division at Imphal, a soldier of the Indian National Army, and a famine relief worker in Bengal in 1943.",
        guidance:
          "Use Barkawi’s introduction, Somerville’s recorded recollections, Kirby on the famine and on Japanese hopes, and the Imperial War Museums. Say which of these voices the sources preserve and which they do not.",
      },
      sources: [
        s.barkawi,
        s.somervilleAfrica,
        s.somervilleIndia,
        s.iwmIndia,
        s.kirby3,
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
    {
      slug: "the-enemys-gamble",
      title: "The enemy’s gamble: Mutaguchi and the Fifteenth Army",
      part: "The decisive battle",
      themes: ["judgement", "adaptation"],
      claim:
        "When an opponent stakes an offensive on capturing what he lacks and on his enemy behaving as before, a commander who reads that gamble can make it fail, but the gamble’s failure belongs to the opponent as much as to him: it is lost also by the warnings its own side ignored.",
      inBrief: {
        strength:
          "Slim built his battle around what the Japanese offensive needed most: speed, and the supplies it hoped to capture.",
        shadow:
          "He misjudged the force against Kohima, and much of the Japanese defeat was made inside the Japanese command.",
      },
      moment: {
        text: "The Japanese offensive against Imphal was a year old before it began. Arakawa Kenichi, writing for Japan’s National Institute for Defense Studies, concludes that Lieutenant-General Renya Mutaguchi planned it in the spring of 1943, after the first Chindit expedition and his promotion to command the Fifteenth Army, and carried it out in the spring of 1944 without revision. Its primary objective was to protect Burma, but Mutaguchi added to it what Arakawa calls his ambitious dream, which made it unfeasible and beyond the army’s capacity. The army’s own postwar monograph records the plan’s arithmetic: about three weeks for the attack, three weeks’ rations, and success dependent on surprise. Kirby adds what the Japanese hoped for: a base in India with great propaganda value, a threat to the airlift to China, and perhaps a revolt in Bengal and Bihar.",
        evidence: "fact",
        refs: [
          { source: 1 },
          { source: 0, locator: "plan of the Imphal operation" },
          { source: 2, locator: "ch. XXXII" },
        ],
      },
      episodes: [
        {
          title: "What the gamble needed",
          text: "The British knew what the offensive needed. In a telegram of 15 March 1944, Kirby records, Mountbatten told the Chiefs of Staff that the loss of the Imphal plain would give the Japanese two all-weather airfields and abundant supplies of food. Slim’s plan, set out in the lesson on letting the enemy come, was built to deny them: to withdraw to the plain, keep the bases, and fight where the attacker’s supply would fail first. Reading the enemy commander here meant knowing what he could not do without, not predicting his every move; the force sent against Kohima, a division where a detachment had been expected, shows how much of the detail was missed.",
          evidence: "fact",
          refs: [{ source: 2, locator: "ch. XIII" }],
          battleSlugs: ["imphal-kohima"],
        },
        {
          title: "Warnings from inside",
          text: "The gamble was questioned on its own side as it began. When the Chindits landed behind the Fifteenth Army in March, the monograph records, the chief of staff of the 5th Air Division judged the threat so serious that he recommended reconsidering the Imphal operation, and some of the Fifteenth Army’s own staff urged postponement; Mutaguchi believed the landings were a diversion heralding a counter-attack and went on. The commander of the 33rd Division, Yanagida, reported that Imphal could not be taken within the scheduled three weeks and that the rainy season and the supply difficulties would end in tragedy. He was told to execute his orders, and Mutaguchi later bypassed him and worked through his chief of staff. The monograph itself suggests that Yanagida’s pessimism was influenced by a misunderstood report.",
          evidence: "fact",
          refs: [
            {
              source: 0,
              locator: "the Wingate airborne invasion; 33d Division",
            },
          ],
          battleSlugs: ["imphal-kohima", "operation-thursday"],
        },
        {
          title: "Optimism above",
          text: "The doubts reached Tokyo and were not heard. Kirby writes that on 15 May 1944, when Hata, returning to Tokyo from a tour of the southern fronts with grave doubts, began his report to Tojo by saying that the Imphal operations stood little chance of success, Tojo stopped him and changed the subject. On 5 June Kawabe, Mutaguchi’s superior, urged him to continue. The monograph records that when Mutaguchi himself reported on 26 June that withdrawal was necessary, the Burma Area Army at first urged him to go on, because no order to suspend had come from above; only then did Kawabe propose suspension, which Tokyo and the Southern Army approved, and the orders were issued on 4 July.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "ch. XXIV" },
            { source: 0, locator: "withdrawal from Imphal" },
          ],
          battleSlugs: ["imphal-kohima"],
        },
        {
          title: "Sato",
          text: "The commander who broke the gamble’s rules has two records. Kirby writes that Sato, commanding the 31st Division at Kohima and extremely short of food and ammunition, urged from the middle of May to be allowed to withdraw to where his division could be supplied; Mutaguchi refused, saying Imphal was about to fall, and when Sato began to withdraw without permission at the end of May, Mutaguchi sanctioned it after the event. The Japanese monograph says that Sato arbitrarily abandoned Kohima against orders, and that when ordered in June to stop and rejoin the battle he argued that the army’s failure to supply his division made it impossible to comply; Mutaguchi asked for him to be disciplined and replaced. Kirby adds that Sato’s earlier refusal to send a regiment to Imphal, blamed by the Japanese for their failure, rested on fears that were in fact well founded.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "ch. XXIII, XXIV, XXV" },
            { source: 0, locator: "withdrawal from Imphal" },
          ],
          battleSlugs: ["imphal-kohima"],
        },
      ],
      witnesses: [
        {
          who: "Arakawa Kenichi",
          stake:
            "A historian at Japan’s National Institute for Defense Studies, writing in 2002 about why his country’s army undertook the operation.",
          says: "Mutaguchi’s plan was carried out a year later without revision, and once it was failing neither he nor Kawabe could bring himself to halt it.",
          refs: [{ source: 1 }],
        },
        {
          who: "Former officers of the Japanese Fifteenth Army",
          stake:
            "Compilers of their army’s record for the American occupation authorities, after its destruction.",
          says: "Sato arbitrarily abandoned Kohima; the airborne landings upset the army’s timetable.",
          refs: [{ source: 0, locator: "withdrawal from Imphal" }],
        },
        {
          who: "Lieutenant-General Yanagida, 33rd Division",
          stake:
            "A divisional commander reporting to Mutaguchi in March 1944, as the monograph paraphrases his message.",
          says: "Imphal could not be taken in three weeks, and the rains and supply would end in tragedy.",
          refs: [{ source: 0, locator: "33d Division" }],
        },
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, using Japanese as well as British records.",
          says: "Tojo stopped the report that the operation had little chance; Sato’s fears were well founded.",
          refs: [{ source: 2, locator: "ch. XXIII, XXIV" }],
        },
      ],
      strategist: [
        {
          text: "The strategist judges Slim’s reading by what he could know. He could not know the enemy’s exact routes or the force sent against Kohima, and he misjudged both. He could know the shape of the gamble: an army crossing mountains with three weeks’ supplies must win quickly and feed itself on what it captures. His plan answered the shape rather than the detail, and that made it robust to the details he got wrong. A reading of an opponent that rests on what the opponent cannot do without is harder to deceive than one that rests on predicting his moves.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "ch. XIII" },
            { source: 0, locator: "plan of the Imphal operation" },
          ],
        },
        {
          text: "The defeat was also made inside the Japanese command. The air division, the army staff, a divisional commander and the officer who reported in Tokyo all saw the danger; the plan went on because the man who made it would not change it and those above him would not hear the doubt. Arakawa’s summary judgement is that Mutaguchi failed to notice, or took no interest in, the change in the British and Indian army during 1943. The Hannibal volume’s lesson on reading the consul shows a commander who won by understanding his opponent; Imphal shows a commander who lost by declining to.",
          evidence: "interpretation",
          refs: [
            {
              source: 0,
              locator: "the Wingate airborne invasion; 33d Division",
            },
            { source: 2, locator: "ch. XXIV" },
            { source: 1 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Escalation of commitment, and its limits",
          base: "contested",
          text: "Persisting with a failing course one is responsible for has a name, escalation of commitment, and Sleesman and his colleagues reviewed its many proposed determinants and theories by meta-analysis. The Napoleon and Western Front volumes have already set out why the classic laboratory finding is less secure than its fame; that discussion is not repeated here. Arakawa’s own explanation is a historian’s, not a psychologist’s: he writes that Mutaguchi and Kawabe lost sound military judgement by expecting too much of success, together with their characters. The sources show the refusals directly, at each level; no label adds to them.",
          evidence: "interpretation",
          refs: [{ source: 3 }, { source: 1 }],
          limit:
            "Only the abstract of the meta-analysis was read, and it does not say which determinants matter most. The research concerns individuals in modern organisations and experiments, not commanders in war, and it is no basis for a judgement of character.",
        },
      ],
      shadow: {
        text: "Reading the enemy is easier in retrospect than it was in March 1944. Slim expected a detachment against Kohima and a division came; the 17th Division’s withdrawal began late. Much of what defeated the gamble was the gamble itself: an army sent across mountains on three weeks’ food, divisional commanders overruled, a pessimistic report cut short in Tokyo. The Japanese monograph, for its part, lays blame on Yanagida’s caution and Sato’s disobedience, which is the record of an army explaining its defeat by its subordinates. The victor’s reading and the loser’s record each have reasons to put the cause somewhere convenient.",
        evidence: "interpretation",
        refs: [
          { source: 2, locator: "ch. XIII, XXIV" },
          { source: 0, locator: "33d Division; withdrawal from Imphal" },
        ],
        battleSlugs: ["imphal-kohima"],
      },
      counterCase: {
        text: "Midway, in June 1942, is the gamble read by its enemy, and even there the reading was partial. The U.S. Navy’s history office writes that Yamamoto based his plan on inadequate intelligence and an inaccurate understanding of American intent, assuming that demoralised Americans would have to be drawn out to fight, and that he refused to consider that his plan might be compromised. Nimitz, from code-breaking and other intelligence, knew the objective, the approximate timing and the approximate forces, but not that Yamamoto’s main body of battleships trailed several hundred miles behind the carriers. Reading the gamble gave the defender his chance; it did not win the battle by itself, and the reader did not see everything. The same was true of Slim at Imphal.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "isoroku-yamamoto",
        battleSlugs: ["midway"],
      },
      cost: {
        text: "The gamble’s cost fell on the men who carried its three weeks’ food. The Japanese monograph records men not carrying the wounded set to hauling the guns because almost all the horses were dead, and the rains draining the strength of men already weak; Kirby writes that by June the 31st Division’s morale had cracked and its troops were throwing away their arms. Between May and the end of June, he notes, three Japanese divisional commanders were relieved in the middle of the battle. On the other side were the defenders of Imphal and Kohima and the people of the hills where the armies fought. No figure for the Fifteenth Army’s losses is given here.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "withdrawal from Imphal" },
          { source: 2, locator: "ch. XXV" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The opponent’s plan depends on something it lacks and hopes to take from you, and you can deny it.",
          "You plan against what the opponent cannot do without, so that errors about the detail do not break the plan.",
        ],
        failsWhen: [
          "The reading rests on predicting the opponent’s moves rather than his needs.",
          "Credit for the opponent’s failure is taken without noticing how much of it was made inside his own organisation.",
        ],
        questions: [
          "What does your competitor’s plan need that it does not yet have?",
          "Who inside your own organisation has warned that your current plan will fail, and what happened to the warning?",
          "How much of your last success was your rival’s mistake?",
        ],
      },
      bearsOn:
        "Imphal gives the third answer to the volume’s question its strongest evidence. The enemy’s mistakes were real and were made at every level, from the plan of 1943 to Tokyo’s refusal to hear doubt in 1944. But the mistakes could be punished only by an army that could stand and be supplied, and by a commander who planned against the gamble’s needs; the enemy’s mistakes and the rebuilt army are two halves of one result.",
      questions: [
        {
          prompt:
            "According to Arakawa, how did Mutaguchi’s plan of 1943 change before it was carried out in 1944?",
          choices: [
            "It was reduced to a limited raid.",
            "It was carried out without revision.",
            "It was rewritten by the Southern Army.",
          ],
          answer: 1,
          explanation:
            "Arakawa writes that the plan was executed a year later without any revision, and that neither Mutaguchi nor Kawabe could bring himself to halt it.",
        },
        {
          prompt:
            "What happened when Hata began his report to Tojo on 15 May 1944 by saying the Imphal operations stood little chance of success?",
          choices: [
            "Tojo ordered the operation halted.",
            "Tojo stopped him and changed the subject.",
            "Tojo sent reinforcements.",
          ],
          answer: 1,
          explanation: "Kirby records the scene from Japanese sources.",
        },
        {
          prompt:
            "Why did Sato say he could not obey the order of June 1944 to rejoin the battle?",
          choices: [
            "He had been wounded.",
            "The Fifteenth Army had failed to send his division supplies.",
            "He had orders from Tokyo.",
          ],
          answer: 1,
          explanation:
            "The monograph calls his withdrawal arbitrary; Kirby records that Mutaguchi sanctioned it after the event.",
        },
      ],
      sourceCheck: {
        question: "Was Sato right to withdraw from Kohima?",
        witnesses: [
          {
            label: "Japanese Monograph No. 134",
            claim: "He arbitrarily abandoned Kohima against orders.",
          },
          {
            label: "Sato, as the monograph reports him",
            claim:
              "The army’s failure to supply his division made obedience impossible.",
          },
          {
            label: "Kirby, official history",
            claim:
              "He had urged withdrawal from mid-May for lack of food and ammunition; Mutaguchi sanctioned it after the event.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the monograph, since it is the Japanese army’s own record.",
            feedback:
              "The monograph is the record of the army whose plan failed, and it has reasons to place the failure on a disobedient subordinate.",
          },
          {
            text: "Read the order and the supply together: the order to hold was given to a division the army could not feed, and Kirby’s dates show the request came before the disobedience.",
            feedback:
              "Disobedience and its cause are both in the record; the question is which came first.",
            best: true,
          },
          {
            text: "Accept Sato’s argument, since the division was starving.",
            feedback:
              "His argument is reported by the monograph that condemns him; Kirby’s account supports the hunger but records the disobedience too.",
          },
        ],
        battleSlug: "imphal-kohima",
      },
      seminar: {
        prompt:
          "Who lost the battle of Imphal for Japan? Argue it from three positions: Mutaguchi, Sato and Yanagida.",
        guidance:
          "Use Monograph No. 134 on the plan, the warnings and the withdrawal, Arakawa’s summary, and Kirby on Tokyo and on Sato. Say what each man knew of the army’s supplies when he decided.",
      },
      sources: [s.jm134, s.arakawa, s.kirby3, s.sleesman, s.midway],
    },
    {
      slug: "the-subordinate-with-a-patron",
      title: "The subordinate with a patron: Wingate and the Chindits",
      part: "The decisive battle",
      themes: ["organisation", "communication"],
      claim:
        "When a commander is given a subordinate with a direct line to the head of government and aims of his own, he must make use of him, but he can control him only by setting firm limits on what he is given, and the judgement of the experiment may outlast them both.",
      inBrief: {
        strength:
          "Slim gave Wingate his operation, launched it when it was in doubt, and kept the decision on reinforcements to himself.",
        shadow:
          "The force absorbed men and aircraft from the main battle, and its value is still argued by every source that describes it.",
      },
      moment: {
        text: "Slim did not choose to have Special Force. Kirby writes that at the Quadrant conference at Quebec in August 1943 the Prime Minister and the Chiefs of Staff, deeply impressed by Orde Wingate’s theories and claims, which seemed to offer a chance of success in a theatre where there had been none, decided to increase his long-range penetration brigades from two to six. Auchinleck, Commander-in-Chief in India, protested that the decision was uneconomical and unsound, since such forces alone could not win decisive results; his arguments, which Kirby says events proved sound, were rejected, and to find the men he had to break up his best-trained and only battle-experienced British division and take a brigade from the newly arrived African division. The force that resulted came under Slim’s Fourteenth Army.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XXXII" }],
      },
      episodes: [
        {
          title: "The terms",
          text: "In January 1944 Wingate asked for four extra battalions to garrison his strongholds. Kirby finds no record of his meeting with Slim, but Slim’s messages that evening and two days later are clear: one battalion would be ready, three more would be trained, and the decision whether and when they were flown in would rest with Slim, on purely military grounds; “Wingate realizes this”. Wingate wrote to Mountbatten that Slim had agreed at once to put four battalions at his disposal. When Slim repeated his terms on 24 January, Wingate’s first inclination, Kirby writes, was to propose that the whole operation be called off; on reflection he withdrew his request.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XII" }],
          battleSlugs: ["operation-thursday"],
        },
        {
          title: "Aims that differed",
          text: "Wingate’s aims went beyond his orders. Kirby records that when Mountbatten explained the Allied strategy for the defeat of Japan in February, Wingate was extremely upset, and Mountbatten wrote to him that his attitude arose from his own plans for a continental advance through Burma to Hanoi, which had never been in his directive. Romanus and Sunderland write that Wingate hoped to force the Japanese out of northern Burma before the monsoon, aims far different from Slim’s plan to lure them to Imphal. On 9 March, told that his reserve brigades might be diverted to IV Corps, Wingate flew to Slim intending to resign; instead he argued for one of them, and Slim promised it if the main front went well.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XII" }, { source: 3 }],
          battleSlugs: ["operation-thursday"],
        },
        {
          title: "Launching it, and losing him",
          text: "On 5 March, as the first gliders were about to leave, photographs showed one landing ground obstructed. Kirby writes that the final decision lay with Slim, who judged that cancelling would throw his campaign plan out of gear and break his promise to Stilwell to cut the Japanese 18th Division’s communications, and that the obstruction did not necessarily mean the plan was known; the brigade went to the other ground. On 24 March Wingate was killed in an air crash, and Giffard records that he was succeeded by Lentaigne. The commander of the 16th Brigade later wrote, as Romanus and Sunderland quote him, that the orders Wingate had just given his brigadiers were unknown to his own headquarters.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XII" },
            { source: 1, locator: "on Special Force" },
            { source: 3 },
          ],
          battleSlugs: ["operation-thursday"],
        },
        {
          title: "Four verdicts",
          text: "The sources disagree on what the experiment achieved. Kirby writes that once his force was committed Wingate abandoned his own precepts, using his brigades as if they were normal formations, with the capture of Indaw airfield an obsession, and that under Stilwell the force was worn down until it became completely ineffective. Giffard found that the operations had less effect than he had hoped and did not prove commensurate with the manpower and material spent, while paying tribute to Wingate as that rare combination of the dreamer and the man of action. The Japanese monograph credits the landings with upsetting the Fifteenth Army’s timetable, keeping its headquarters from moving forward until late April and cutting the supply routes of two divisions. Romanus and Sunderland call it a great aid to Stilwell and write that the Japanese 18th Division’s supply was fundamentally compromised.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XXXII" },
            { source: 1, locator: "para. 114; tribute to Wingate" },
            { source: 2, locator: "results of Wingate invasion" },
            { source: 3 },
          ],
          battleSlugs: ["operation-thursday"],
        },
      ],
      witnesses: [
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, writing in 1961 with the records of the commands Wingate had criticised.",
          says: "Auchinleck’s objections were proved sound, and Wingate abandoned his own precepts in action.",
          refs: [{ source: 0, locator: "ch. XXXII" }],
        },
        {
          who: "George Giffard",
          stake:
            "Slim’s superior, writing in June 1945 about a force he had hoped would help the main battle.",
          says: "The results were not commensurate with the cost; Wingate was a rare combination of the dreamer and the man of action.",
          refs: [{ source: 1, locator: "para. 114; tribute to Wingate" }],
        },
        {
          who: "Former officers of the Japanese Fifteenth Army",
          stake:
            "Compilers of the record of the army the Chindits attacked from behind.",
          says: "The airborne force upset the army’s timetable and eventually led to the abandonment of northern Burma.",
          refs: [{ source: 2, locator: "results of Wingate invasion" }],
        },
        {
          who: "Romanus and Sunderland",
          stake:
            "American official historians of Stilwell’s command, which the Chindits served.",
          says: "The Chindits were a great aid to Stilwell; their aims were far different from Slim’s.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "Slim could not refuse the force, and he did not try to. He gave it a task that fitted his own plan, cutting the communications of the division facing Stilwell, and he kept to himself the decisions that mattered: whether reserve battalions went in, when the reserve brigades were released. On 5 March he took the risk of launching it, because cancelling would have broken his plan and his promise to an ally. The method for a subordinate with a patron is to use what he brings and put limits on what he can take; it worked as far as Slim’s own decisions reached.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. XII" }],
        },
        {
          text: "The limits did not reach everything. The decision that created the force was taken in Quebec over the heads of the commanders in India; Wingate told Mountbatten what Slim had not agreed; and his aims, a continental advance and northern Burma cleared before the monsoon, were not his commander’s. The patron’s decision cost the main army a battle-experienced division and, in Giffard’s words, an expenditure in manpower and material that the results did not repay. Whether the return was worth it is exactly where the sources divide, by nationality and by the command each served.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XII, XXXII" },
            { source: 3 },
            { source: 1, locator: "para. 114" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Wingate is the figure in this volume about whose health and temperament most stories are told, and the volume’s rules forbid drawing conclusions about command from them. None was traced to a source read for this lesson, and none is used. The lesson rests on what the documents show: the messages that set the terms, the letters in which Wingate described them differently, and the orders and verdicts that followed.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no personal report about Wingate is used; the lesson rests on the official histories, the despatch and the Japanese monograph.",
        },
      ],
      shadow: {
        text: "Slim’s limits held for his own decisions but not for the force’s fate. After Wingate’s death it passed to Stilwell, who used it as ordinary infantry through the monsoon, and Kirby records that malaria, exertion on short rations and exposure wore it down until it was completely ineffective. The official history that judges Wingate so severely was written from the records of the commands he had attacked in his letters, and his defenders’ case is represented in this lesson only by the American and Japanese assessments; no book by them was read. The lesson cannot settle the dispute, and it should not pretend to.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "ch. XII, XXXII" }],
        battleSlugs: ["operation-thursday"],
      },
      counterCase: {
        text: "On the Japanese side, a superior who did not set limits gave the subordinate his way. Arakawa writes that Mutaguchi’s plan went unrevised because his superior, Kawabe, kept a loose rein on him, and because Inada, the Southern Army’s vice chief of staff who had urged him to modify it, was moved; and that once the operation was failing neither man could bring himself to halt it. The Japanese monograph records that it was not until the end of June 1944 that Kawabe proposed suspending it. A subordinate with ambitions beyond his orders is dangerous in any army; Kawabe’s case shows what happens when the commander above him does not draw the lines Slim drew.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 2, locator: "withdrawal from Imphal" }],
        battleSlugs: ["imphal-kohima"],
      },
      cost: {
        text: "The experiment was paid for by the men who marched in it and by the army it was taken from. Auchinleck had to break up a trained division and strip other units of some of their best young officers and men to raise it. The Chindits fought through the monsoon on short rations, and Kirby records the malaria and exposure that wore them out. Japanese battalions were pulled from their divisions to hunt them. The country between the Irrawaddy and the railway was fought over for months, and no source read gives the account of the people who lived there.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XXXII" }, { source: 3 }],
      },
      transfer: {
        holdsWhen: [
          "A subordinate brings resources and backing from above, and the leader gives him a task that serves the leader’s own plan.",
          "The leader keeps the decisions that commit further resources, and puts them in writing.",
        ],
        failsWhen: [
          "The subordinate’s aims differ from the organisation’s, and no one above him draws the line, as with Kawabe and Mutaguchi.",
          "The leader’s limits cover only what he controls, while the patron’s decision has already taken what the main effort needed.",
        ],
        questions: [
          "Who in your organisation has a direct line above you, and what do they want that you do not?",
          "Which decisions about their resources have you kept, and have you put them in writing?",
          "How will you judge the experiment afterwards, and who will judge it differently?",
        ],
      },
      bearsOn:
        "Wingate’s operation tests the second answer to the volume’s question from an awkward side. Means decided elsewhere came to Slim in a form he had not chosen: a force made by a Prime Minister’s enthusiasm, at the cost of his own army. Leadership here meant using what he was given without being used by it. The enemy’s monograph credits the operation more than the British official history does, which is a reminder that the record of a success depends on whose plan it served.",
      questions: [
        {
          prompt:
            "What terms did Slim set in January 1944 for the extra battalions Wingate wanted?",
          choices: [
            "Four battalions at Wingate’s disposal at once.",
            "One battalion ready and three trained, with the decision whether and when to fly them in resting with Slim.",
            "No battalions at all.",
          ],
          answer: 1,
          explanation:
            "Wingate wrote to Mountbatten that Slim had agreed to four; Slim’s own messages say otherwise.",
        },
        {
          prompt:
            "Why did Slim decide to launch the operation on 5 March despite the blocked landing ground?",
          choices: [
            "Wingate threatened to resign.",
            "Cancelling would upset his campaign plan and break his promise to Stilwell, and the obstruction did not prove the plan was known.",
            "Mountbatten ordered him to.",
          ],
          answer: 1,
          explanation: "Kirby says the final decision lay with Slim.",
        },
        {
          prompt:
            "According to Arakawa, why did Mutaguchi’s plan go unrevised?",
          choices: [
            "Tokyo ordered it unchanged.",
            "Kawabe kept a loose rein on him, and the staff officer who urged changes was moved.",
            "The plan was perfect.",
          ],
          answer: 1,
          explanation:
            "Arakawa adds that neither man could bring himself to halt the operation when it was failing.",
        },
      ],
      sourceCheck: {
        question: "Did Operation Thursday help defeat the Japanese at Imphal?",
        witnesses: [
          {
            label: "Giffard, despatch, 1945",
            claim:
              "It did not affect the launching of the offensive and had little effect on its communications.",
          },
          {
            label: "Japanese Monograph No. 134",
            claim:
              "It upset the Fifteenth Army’s timetable and cut the supply routes of two of its divisions.",
          },
          {
            label: "Kirby, official history, 1961",
            claim:
              "Wingate abandoned his precepts, and Auchinleck’s objections were proved sound.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Prefer the Japanese monograph, since the enemy knows best what hurt him.",
            feedback:
              "The monograph is strong evidence of effect, but a defeated army also has reasons to attribute its failure to a dramatic stroke rather than to its own plan.",
          },
          {
            text: "Set the effect against the cost: the Japanese record shows real effect on their timetable and supply, while the British sources weigh it against the men and aircraft taken from the main battle; both can be true.",
            feedback:
              "The disagreement is partly about different questions: what the force did, and whether it was worth what it cost.",
            best: true,
          },
          {
            text: "Prefer Kirby, since the official history had all the records.",
            feedback:
              "Kirby had the records of the commands Wingate criticised; his judgement is evidence, not a verdict beyond dispute.",
          },
        ],
        battleSlug: "operation-thursday",
      },
      seminar: {
        prompt:
          "Was Special Force worth what it cost? Argue it from three positions: Slim, Auchinleck and Stilwell.",
        guidance:
          "Use Kirby on Quebec, the January terms and the retrospect, Giffard’s verdict, the Japanese monograph and Romanus and Sunderland. Say who decided to create the force and who paid for it.",
      },
      sources: [s.kirby3, s.giffard, s.jm134, s.romanusCommand5, s.arakawa],
    },
    {
      slug: "last-in-line",
      title: "Last in line: allies, masters and means decided elsewhere",
      part: "The decisive battle",
      themes: ["organisation", "adaptation"],
      claim:
        "When a commander stands at the end of a coalition’s priorities, he can plan only with what he is sent, and means can be taken away at the decisive moment; he can still choose what to ask for and what to improvise, but a plan that outruns his means succeeds only if the means are found in time.",
      inBrief: {
        strength:
          "His army improvised river fleets and air bases and made do with less than it needed, and when his plan outran his means the means were found.",
        shadow:
          "Aircraft were taken from him in mid-campaign by a decision made for China, and the cost fell on a division holding a bridgehead.",
      },
      moment: {
        text: "On 10 and 11 December 1944, as the Fourteenth Army was advancing into central Burma, transport aircraft were removed to China. Leese, commanding Allied land forces, writes in his despatch that on Wedemeyer’s request, made because of the crisis in China, two Chinese divisions were flown out of Burma, and that a large number of transport aircraft, many of them already allotted to the Fourteenth Army’s maintenance, went with them. The advance depended more and more on air supply as it outran its land communications; the loss, Leese writes, curtailed its freedom of action, and Slim calculated that his army’s operations were retarded by at least two weeks.",
        evidence: "fact",
        refs: [{ source: 0, locator: "paras. 51–52" }],
      },
      episodes: [
        {
          title: "Whose aircraft, whose priorities",
          text: "The aircraft were American and the decision was not Burma’s. Kirby records that when the British Chiefs of Staff protested that Wedemeyer had been given what amounted to a blank cheque on all American air forces in South-East Asia, the American Chiefs replied that keeping transport aircraft for South-East Asia Command’s future operations was not justified when their transfer seemed imperative to halt an approaching catastrophe in China, and reminded them that the integration of the British and American air forces in December 1943 had reserved the right to reassign units. Air Transport Command was not under Mountbatten at all. In April 1945 Marshall gave the assurance that no American aircraft would be moved before the fall of Rangoon or 1 June, whichever came first.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. XI, XXVII" }],
          battleSlugs: ["meiktila-mandalay"],
        },
        {
          title: "Stilwell",
          text: "The coalition in Burma was not one chain of command. Romanus and Sunderland print the draft Stilwell wrote for Mountbatten early in 1944, listing his roles: chief of staff to Chiang Kai-shek, commander of the American theatre, never formally appointed deputy to Mountbatten, and, in his words, “serving under Slim”. The same historians record that when Mountbatten asked to divert aircraft from the airlift to China for the Arakan battle, Stilwell refused his concurrence, because he understood that only a Japanese battalion was causing the trouble and could not justify the diversion to the Generalissimo. Saunders writes that Stilwell contrived in some mysterious fashion to combine the duties of a string of appointments.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3, locator: "ch. XV" }],
          battleSlugs: ["admin-box"],
        },
        {
          title: "What was asked for",
          text: "Some of what was asked for came back. Leese writes that he kept pressing, that Mountbatten sent his chief of staff to London to put the case in person, and that on 26 January 1945 word came that the transport aircraft would be not only made up but increased. Kirby records that two of the three squadrons lent to China returned at the end of January and that two Canadian squadrons arrived. Other means never came: Saunders writes that the plan to use the sea could not be carried out because the ships and landing craft were not available, and would not be until the liberation of Europe had been accomplished.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "Section IV" },
            { source: 1, locator: "ch. XXXIII" },
            { source: 3, locator: "ch. XV" },
          ],
          battleSlugs: ["meiktila-mandalay"],
        },
        {
          title: "What was done without",
          text: "The army planned within what it had and improvised the rest. Kirby writes that deliveries to the Fourteenth Army in March and April 1945 fell short of its full requirements, and that the shortage did not deter it: by improvisation it made do with what it got. A fleet of river craft was built on the upper Chindwin from material brought hundreds of miles along poor roads and from local material, which Kirby calls a fine piece of imaginative planning; new air bases supplied by sea were built at Akyab and Kyaukpyu, ready only just in time. To keep the advance on Rangoon supplied, Leese cut XV Corps in Arakan down to one division, which virtually ended its operations on the coast.",
          evidence: "fact",
          refs: [{ source: 1, locator: "ch. XXXIV" }],
          battleSlugs: ["meiktila-mandalay", "rangoon-1945"],
        },
      ],
      witnesses: [
        {
          who: "Oliver Leese",
          stake:
            "Slim’s superior as commander of Allied land forces, writing in 1947 about a campaign he had directed.",
          says: "The removal of the aircraft curtailed the army’s freedom of action and retarded its operations by at least two weeks.",
          refs: [{ source: 0, locator: "paras. 51–52" }],
        },
        {
          who: "The American Chiefs of Staff, as Kirby reports them",
          stake:
            "The owners of the aircraft, weighing Burma against a crisis in China.",
          says: "Keeping the aircraft for future operations in Burma was not justified when China faced catastrophe.",
          refs: [{ source: 1, locator: "ch. XI" }],
        },
        {
          who: "Joseph Stilwell, in a draft for Mountbatten",
          stake:
            "The American theatre commander, chief of staff to Chiang Kai-shek, explaining his position in 1944.",
          says: "He held several posts at once, was not formally Mountbatten’s deputy, and was serving under Slim.",
          refs: [{ source: 2 }],
        },
        {
          who: "S. Woodburn Kirby",
          stake: "The British official historian, writing in 1965.",
          says: "The army made do with what it got, by improvisation.",
          refs: [{ source: 1, locator: "ch. XXXIV" }],
        },
      ],
      strategist: [
        {
          text: "A commander last in line controls what he asks for, what he plans and what he improvises. Mountbatten and Leese did the asking, and some of it worked; the aircraft came back and more were promised. Slim’s part was the plan, and it did not stay within his means. Kirby writes that in December 1944, soon after the squadrons were lent to China, Slim changed his plan so that the major battle would be fought south of the Irrawaddy, outside the economic range of transport aircraft working from Imphal, which made new air bases and more aircraft essential; the supreme and land-force headquarters had to find them. The army then made do with what it got. The bold plan proved right, but it depended on others finding the means in time.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "paras. 51–52; Section IV" },
            { source: 1, locator: "ch. XXXIV" },
          ],
        },
        {
          text: "The constraints were not unreasonable from where they were set. The Americans faced a crisis in China; Europe needed the landing craft; Stilwell’s first duty was to the Generalissimo. Wellington’s volume asks what a commander can do with allies he cannot command, and the Western Front volume how coordination is achieved by persuasion; Burma adds the case of a commander who was not the ally that mattered most. The lesson from the record is less about protest than about building a plan that survives the loss of what can be taken away.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "ch. XI" },
            { source: 2 },
            { source: 3, locator: "ch. XV" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on decision-making under scarcity, or on how organisations adapt to cuts, could bear on this lesson, but none was read for this volume. The sources show the adaptation directly, in what was built and what was given up.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson rests on the despatch, the official histories and the American history.",
        },
      ],
      shadow: {
        text: "Making do had a price that the army’s pride in it can hide. Leese writes that because the aircraft were lost, the lower crossing of the Irrawaddy took place about fourteen days late, and the 19th Indian Division, already across the river north of Mandalay, had to hold its bridgehead against a greater concentration of the enemy for those fourteen days longer, in very bitter fighting with severe casualties. Improvisation also depended on others: the airfields on the Arakan coast were ready only just in time, and the coastal corps was stripped to feed the advance. An army that makes do is praised; the men who held the bridgehead paid for the making do.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "paras. 52–53" },
          { source: 1, locator: "ch. XXXIV" },
        ],
        battleSlugs: ["meiktila-mandalay"],
      },
      counterCase: {
        text: "Rommel, at the end of the Axis line in North Africa, chose the opposite. Sönke Neitzel’s article in the Neue Deutsche Biographie records that after taking Tobruk in June 1942, against the strong opposition of his superior Kesselring and of Mussolini, who wanted Malta taken first, he obtained from Hitler the order to pursue the apparently beaten British army at once. In July and September 1942 the British stopped his badly supplied forces at El Alamein, and the dream of an advance to the Nile and beyond failed, Neitzel writes, not least through Rommel’s serious operational error. A commander last in line who asks for the farthest objective rather than the means to reach it can win a great deal quickly and then lose it at the end of his supply.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "erwin-rommel",
        battleSlugs: ["el-alamein"],
      },
      cost: {
        text: "The cost of the decisions made elsewhere was paid in Burma. The 19th Indian Division fought longer in its bridgehead because the aircraft were gone; the Fourteenth Army lived on less than its full requirements through the decisive months. The Chinese divisions flown back to China went to another war. The river craft and airfields were built by men whose part the sources record mostly as an achievement of planning. No figures for these costs are given here.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "paras. 51–53" },
          { source: 1, locator: "ch. XXXIV" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The plan’s demands are matched, in time, by resources others can be persuaded to provide, and the organisation improvises the rest.",
          "Someone above argues the case for more, while the organisation improvises with what it has.",
        ],
        failsWhen: [
          "The plan depends on resources that belong to someone with other priorities, without a fallback.",
          "The leader asks for the farthest objective rather than the means to reach it, as Rommel did in 1942.",
        ],
        questions: [
          "Which of your resources can be taken away by a decision made elsewhere, and what happens if they are?",
          "What have you asked for, and who is arguing your case above you?",
          "What could your team build or improvise if the next cut came tomorrow?",
        ],
      },
      bearsOn:
        "Last in line is the volume’s second answer, means, seen from below. The means that won in 1945 were real, but they were decided in Washington, London and Chungking, and could be taken away mid-campaign. What the commander controlled was the plan and the improvisation; Slim’s plan outran his means and succeeded because they were found in time, as Rommel’s in 1942 were not. At the end of the line, leadership and means cannot be separated.",
      questions: [
        {
          prompt:
            "By how much did Slim calculate that the removal of transport aircraft in December 1944 retarded his army’s operations?",
          choices: ["Not at all.", "At least two weeks.", "Six months."],
          answer: 1,
          explanation:
            "Leese records Slim’s calculation, and the 19th Division’s longer stand in its bridgehead.",
        },
        {
          prompt:
            "Why did the American Chiefs of Staff say the aircraft could be moved to China?",
          choices: [
            "Burma had been won.",
            "Keeping them for future operations in Burma was not justified against an approaching catastrophe in China, and the air forces’ integration allowed reassignment.",
            "Slim did not need them.",
          ],
          answer: 1,
          explanation:
            "Kirby records the exchange; Marshall later assured Mountbatten of the aircraft until Rangoon fell or 1 June.",
        },
        {
          prompt:
            "What did Rommel obtain from Hitler after taking Tobruk, according to Neitzel?",
          choices: [
            "Permission to take Malta first.",
            "The order to pursue the British at once, against the opposition of Kesselring and Mussolini.",
            "Reinforcements of fuel for a defensive stand.",
          ],
          answer: 1,
          explanation: "His badly supplied forces were stopped at El Alamein.",
        },
      ],
      seminar: {
        prompt:
          "Was Burma’s place at the end of the line a fair decision? Argue it from three positions: Slim, Wedemeyer and a commander of the 19th Indian Division in its bridgehead.",
        guidance:
          "Use Leese’s despatch, Kirby on the exchange between the Chiefs of Staff and on the improvisation, Romanus and Sunderland on Stilwell, and Saunders on the landing craft. Say who decided each priority and who paid for it.",
      },
      sources: [s.leese, s.kirby4, s.romanusCommand5, s.saunders, s.ndbRommel],
    },
    {
      slug: "the-changed-plan",
      title: "The changed plan: Meiktila",
      part: "Victory",
      themes: ["adaptation", "judgement"],
      claim:
        "When the enemy declines the battle a plan was built for, a commander can win more by changing the plan than by pursuing it, but only if he reads the signs early, keeps a fallback for the means he may not get, and his army can move faster than the enemy can read the change.",
      inBrief: {
        strength:
          "Slim scrapped his plan within days of reading the Japanese withdrawal and struck at the base they had to defend.",
        shadow:
          "The new plan outran his aircraft, depended on deception and the enemy’s misjudgement, and its credit is claimed by more than one headquarters.",
      },
      moment: {
        text: "Slim’s plan for the dry season of 1944–1945, Operation CAPITAL, was to bring the Japanese armies to battle between the Chindwin and the Irrawaddy and destroy them there. Early in December, Kirby writes, he began to suspect that Kimura, the new Japanese commander, did not intend to fight so far north: the dispositions of the Japanese divisions, the lack of opposition to the 19th Division, captured documents, reports from the inhabitants of liberated Burmese villages and air reconnaissance of troops and supplies moving south all pointed the same way. On 16 December Slim’s chief of staff telegraphed that the original plan was being scrapped; on 17 December Slim sent Leese a summary of a new plan, which he called EXTENDED CAPITAL, and on 20 December a full appreciation.",
        evidence: "fact",
        refs: [{ source: 0, locator: "ch. XV" }],
      },
      episodes: [
        {
          title: "Striking at what the enemy must defend",
          text: "If the Japanese would not fight north of Mandalay, Slim had to place a force south of it, so that they would have to fight to extricate themselves. Kirby records the plan: XXXIII Corps would close up to the Irrawaddy and encircle Mandalay, while IV Corps moved down the Myittha valley, crossed the river near Pakokku and seized Meiktila and Thazi, the key points on the road and railway between Mandalay and Rangoon and the main Japanese administrative area in central Burma. Leese’s despatch records that Slim had always had an alternative plan in mind in case the enemy chose to fight east of the river, and in its own voice draws attention to the selection of Meiktila as the focal point of all the Japanese communications and their chief airfield centre.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XV" },
            { source: 1, locator: "paras. 60–61, 67" },
          ],
          battleSlugs: ["meiktila-mandalay"],
        },
        {
          title: "Asking for the means, and keeping a fallback",
          text: "The plan was larger than the resources Slim then had. Kirby sets out what his appreciation asked for: a river transport service on the Chindwin and the Irrawaddy in place of a road, airfields every fifty miles along the advance, more engineer and transport companies, and above all more aircraft to lift supplies over longer distances. Operations could not go beyond the third phase unless extra aircraft were provided; if they were not, operations would be limited to taking and holding the line Meiktila–Yenangyaung. In forwarding the appreciation, Slim wrote that the prize before them was of a value quite out of proportion to the few extra resources required to achieve it.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XV" }],
          battleSlugs: ["meiktila-mandalay"],
        },
        {
          title: "Making the enemy misread the change",
          text: "Speed depended on the Japanese seeing the wrong threat. Kirby writes that Slim’s strategic object was to make them believe that the whole army was moving on Mandalay and that the force in the Myittha valley was a small diversion; Leese describes the devices used to persuade them that IV Corps was still on the left of XXXIII Corps. Saunders writes that Kimura, denied the help of air reconnaissance, concentrated his reserves against the crossings near Mandalay with astonishing speed and skill, and was confounded when IV Corps broke out towards Meiktila. Kirby records from Japanese records that a conference at Meiktila in February heard some officers fear a thrust from Nyaungu, but that the majority judged it would be on the scale of a Chindit operation, which the forces on the spot could deal with.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "ch. XXIII" },
            { source: 1, locator: "para. 67" },
            { source: 3 },
          ],
          battleSlugs: ["meiktila-mandalay"],
        },
        {
          title: "Meiktila",
          text: "IV Corps crossed the Irrawaddy near Nyaungu in mid-February, and Meiktila fell on 3 March. Kirby gives the reasons for the swift success: the thrust struck the junction of the Japanese 15th and 28th Armies, and the deception had fixed their attention on Mandalay; but the main credit, he writes, must go to Messervy and his commanders, who took risks and let nothing delay them. The Japanese concentrated every unit they could to break the stranglehold on their main line of communication, and failed. By the end of March, Kirby concludes, the Burma Area Army had virtually ceased to exist as a fighting force.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. XXIII, XXVI" }],
          battleSlugs: ["meiktila-mandalay"],
        },
      ],
      witnesses: [
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, writing in 1965 with Slim’s telegrams and the Japanese records.",
          says: "Slim scrapped CAPITAL on the evidence of a Japanese withdrawal; the main credit for the crossing goes to Messervy and his commanders.",
          refs: [{ source: 0, locator: "ch. XV, XXIII" }],
        },
        {
          who: "Oliver Leese",
          stake:
            "Slim’s superior, writing in 1947 about a battle fought under his army group.",
          says: "Slim always had an alternative plan, and the selection of Meiktila deserves attention.",
          refs: [{ source: 1, locator: "paras. 60–61, 67" }],
        },
        {
          who: "Hilary St. George Saunders",
          stake: "The Royal Air Force’s official historian, writing in 1954.",
          says: "Kimura, denied air reconnaissance, concentrated with astonishing speed and skill and was confounded.",
          refs: [{ source: 3 }],
        },
        {
          who: "George L. MacGarrigle",
          stake:
            "A historian of the U.S. Army’s Center of Military History, writing in 1996.",
          says: "Kimura chose not to defend so far north, reasoning that the Allies’ supply would worsen as they advanced while his own eased.",
          refs: [{ source: 2 }],
        },
      ],
      strategist: [
        {
          text: "Judged by what Slim knew in mid-December, the change was a decision under uncertainty. Leese writes that there was still doubt whether the Japanese meant to make a main stand on the Irrawaddy or merely to delay, though one report said they would not hold Mandalay. The new plan was robust to either: if the Japanese stood at Mandalay, a force at Meiktila cut them off; if they withdrew, it barred their road. Kimura’s own reasoning, that the Allies’ supply would worsen as they advanced, was sound, and Slim’s plan accepted that cost in order to strike before Kimura could use it.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "paras. 59–60" },
            { source: 2 },
            { source: 0, locator: "ch. XV" },
          ],
        },
        {
          text: "The change worked because the army could move faster than the enemy could read it, and that speed was made by others as much as by the plan: engineers who built roads and ferries, air supply, deception, and a Japanese command denied air reconnaissance. The plan also kept a fallback, to stop at Meiktila and Yenangyaung if the aircraft did not come. The Napoleon volume’s lesson on planning for being wrong asks what a commander prepares for the case where his first plan fails; Slim’s answer here was to have the second plan ready before the first was abandoned, and to say what he would do if the means for it were refused.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. XV, XXIII" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on how people revise plans in the face of new evidence could bear on the change of December 1944, but none was read for this volume. The sources show the revision directly: the evidence Kirby lists, the dates of the telegrams, and the conditions Slim attached.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson rests on the official history, the despatch and the air history.",
        },
      ],
      shadow: {
        text: "The credit for the change is divided among those who recorded it. Kirby credits the plan to Slim’s telegrams; Leese presents the selection of Meiktila in his own voice; Kirby gives the main credit for the crossing to Messervy; Saunders stresses that Kimura fought blind, without air reconnaissance. The plan also outran its aircraft, as the lesson on being last in line shows, and it was made with poor intelligence: Leese writes that compared with other theatres they were often virtually fighting in the dark. The enemy’s judgement at Meiktila, that the thrust would be a raid, did much of the work.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "ch. XV, XXIII" },
          { source: 1, locator: "paras. 59, 67" },
          { source: 3 },
        ],
        battleSlugs: ["meiktila-mandalay"],
      },
      counterCase: {
        text: "Helmuth von Moltke the Younger in 1914 is the commander whose plan was not changed in time. Heinrich Walle’s article in the Neue Deutsche Biographie names the causes of the German failure on the Marne: the technical inadequacy of communications between the supreme headquarters and the front, the wide independence Moltke allowed his army commanders, and his hesitation to intervene in time when operations departed from the overall plan. On 9 September, with the German armies threatened with envelopment near Paris, he ordered the retreat behind the Aisne, and on 14 September he had to hand the direction of operations to Falkenhayn. A plan that is not revised while there is still time is revised by the enemy.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "helmuth-von-moltke-the-younger",
        battleSlugs: ["marne-1914"],
      },
      cost: {
        text: "The change moved the battle into the towns of central Burma. Meiktila was taken and then besieged for a month; Mandalay’s Fort Dufferin was bombarded with medium artillery and rockets before the remnants of its garrison tried to escape through the ruins. Kirby records that at one position near Meiktila many of the Japanese dead seemed to be hospital patients who had killed themselves. The Japanese divisions that counter-attacked at Meiktila were destroyed as fighting forces. The Burmese who lived in these towns appear in the sources as the inhabitants who reported the Japanese movements and as the population of places fought over; no figure is given here.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. XV, XXIII, XXVI" },
          { source: 1, locator: "para. 115" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The leader reads early that the competition has declined the contest the plan was built for, and has a second plan ready.",
          "The new plan says what it needs, and what will be done if it does not get it.",
        ],
        failsWhen: [
          "The leader waits for certainty, or leaves subordinates to drift from a plan that no longer fits, as Moltke did in 1914.",
          "The change depends on the competition misreading it, and they do not.",
        ],
        questions: [
          "What evidence would tell you that the contest your plan expects is not going to happen?",
          "What is your second plan, and what would it need that you do not have?",
          "If the extra resources were refused, where would you stop?",
        ],
      },
      bearsOn:
        "Meiktila is the volume’s first answer at its strongest: a commander’s reading and his changed plan won a decisive battle. But the plan rested on means others had to find, on corps commanders who took the risks, and on an enemy who misread the change. Leadership changed the plan; the rebuilt army, the aircraft and the enemy’s error made it work.",
      questions: [
        {
          prompt:
            "What evidence led Slim, in December 1944, to suspect that the Japanese would not fight north of Mandalay?",
          choices: [
            "A Japanese radio announcement.",
            "Their dispositions, the lack of opposition to the 19th Division, captured documents, reports from Burmese villagers and air reconnaissance.",
            "A report from Mountbatten’s headquarters in Kandy.",
          ],
          answer: 1,
          explanation:
            "Kirby lists the evidence and dates the decision to scrap CAPITAL to 16 December.",
        },
        {
          prompt:
            "What did Slim propose if the extra aircraft he asked for were not provided?",
          choices: [
            "To abandon the offensive.",
            "To limit operations to taking and holding the line Meiktila–Yenangyaung.",
            "To attack Rangoon from the sea.",
          ],
          answer: 1,
          explanation:
            "Kirby prints the appreciation, with its conditions and its fallback.",
        },
        {
          prompt:
            "How did the Japanese conference at Meiktila in February 1945 judge a possible thrust from Nyaungu?",
          choices: [
            "As the main Allied effort.",
            "As likely to be on the scale of a Chindit operation, which local forces could deal with.",
            "As impossible across the Irrawaddy.",
          ],
          answer: 1,
          explanation:
            "Kirby records the majority opinion from Japanese records; some officers feared a powerful thrust.",
        },
      ],
      sourceCheck: {
        question: "Whose plan was Meiktila?",
        witnesses: [
          {
            label: "Kirby, official history",
            claim:
              "Slim scrapped CAPITAL and set out EXTENDED CAPITAL in his telegrams of 16–20 December.",
          },
          {
            label: "Leese, despatch, 1947",
            claim:
              "Slim always had an alternative plan; Leese draws attention to the selection of Meiktila.",
          },
          {
            label: "Kirby, on the crossing",
            claim:
              "The main credit must go to Messervy and his commanders, who took risks.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Credit Leese, since the despatch presents the choice of Meiktila as his.",
            feedback:
              "Leese also credits Slim with the alternative plan; a despatch speaks in its author’s voice about decisions made under his command.",
          },
          {
            text: "Read the levels: Slim made the plan, Leese approved and presented it, and Messervy’s corps carried out the part on which it turned.",
            feedback:
              "The documents Kirby prints show the plan’s author; the despatch shows its sponsor; the crossing shows its executors.",
            best: true,
          },
          {
            text: "Credit the air force, since Kimura fought without air reconnaissance.",
            feedback:
              "Saunders’s point is about a condition of the plan, not its authorship.",
          },
        ],
        battleSlug: "meiktila-mandalay",
      },
      seminar: {
        prompt:
          "Was Slim right to scrap CAPITAL in December 1944 before he was certain? Argue it from three positions: Slim, Leese and Kimura.",
        guidance:
          "Use Kirby on the evidence, the appreciation and its conditions, Leese on the doubt and the alternative plan, MacGarrigle on Kimura’s reasoning and Saunders on his concentration. Say what each knew on 16 December.",
      },
      sources: [s.kirby4, s.leese, s.macgarrigle, s.saunders16, s.ndbMoltke],
    },
    {
      slug: "after-rangoon",
      title: "After Rangoon: victory, and a superior who wanted him gone",
      part: "Victory",
      themes: ["succession", "ethics"],
      claim:
        "When a commander is pushed aside at the moment of victory, how he answers can tell his army what its victory was worth, but the decision is rarely his alone, and the victory’s meaning is settled by others, among them the people whose country it was fought in.",
      inBrief: {
        strength:
          "Offered a lesser command after Rangoon, Slim declined it, and the attempt to replace him was dropped.",
        shadow:
          "The affair is known mostly from his biographer, Leese’s side is unread, and the victory’s political meaning belonged to others.",
      },
      moment: {
        text: "Rangoon was entered on 3 May 1945 by the 26th Indian Division, ahead of the Fourteenth Army’s leading division, which was still north of the city when the monsoon broke that day; the two met north of Rangoon on 6 May. Saunders quotes Mountbatten’s despatch: though the Fourteenth Army had technically lost the race for Rangoon, it was their drive that had really won the battle. The next day, Kirby writes, Leese called Slim to his headquarters at Meiktila and told him in private that he proposed to place Christison in command of the Fourteenth Army and that Slim would remain in command in Burma.",
        evidence: "fact",
        refs: [{ source: 5 }, { source: 0, locator: "ch. III" }],
      },
      episodes: [
        {
          title: "A footnote in the official history",
          text: "Kirby gives Leese’s reasons as operational. With Rangoon taken, Leese decided that the Fourteenth Army’s headquarters should leave Burma to plan the reconquest of Malaya, and that a new Burma Army, formed from XXXIII Corps’ headquarters, should take its place; a planning staff for the Fourteenth Army was set up in Delhi under Christison the same day. The rest is a footnote: Slim was not prepared to accept the Burma command, and the proposal was later dropped on Mountbatten’s orders. The official history, written with full access to the records, gives the affair two sentences.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. III" }],
          battleSlugs: ["rangoon-1945"],
        },
        {
          title: "The army’s answer",
          text: "The Australian Dictionary of Biography tells the affair from Slim’s side. After Rangoon was taken, it writes, Leese decided that he would replace Slim; the decision was greeted with dismay and incredulity by the officers and men of the Fourteenth Army, and was quashed in London. Slim was promoted general on 1 July 1945 and took over from Leese just as the war ended in August. The two accounts differ in where the decision was reversed, Mountbatten’s headquarters or London, and agree that Slim refused the lesser post.",
          evidence: "fact",
          refs: [{ source: 1 }, { source: 0, locator: "ch. III" }],
          battleSlugs: ["rangoon-1945"],
        },
        {
          title: "Aung San",
          text: "The victory’s meaning in Burma was not the army’s to decide. Kirby writes that the Burma National Army, originally raised by the Japanese, had become the military wing of the Anti-Fascist Organization under Aung San, and that late in March 1945 Mountbatten told the Chiefs of Staff a nationalist rising against the Japanese was imminent; Britannica records that Aung San switched his army to the Allied cause that month. The War Cabinet replied that its leaders must not be given the impression that they were regarded as liberators or political leaders of the country. When Aung San came to Slim at Meiktila on 16 May, Kirby records, he presented himself as the military representative of a provisional government come as an Allied commander; Slim told him that he and his army had no legal status, and suggested that it might become part of Burma’s future defence forces.",
          evidence: "fact",
          refs: [{ source: 0, locator: "ch. V" }, { source: 3 }],
          battleSlugs: ["rangoon-1945"],
        },
      ],
      witnesses: [
        {
          who: "S. Woodburn Kirby",
          stake:
            "The official historian, writing in 1969, who records the proposal in a footnote.",
          says: "Slim would not accept the Burma command, and the proposal was dropped on Mountbatten’s orders.",
          refs: [{ source: 0, locator: "ch. III" }],
        },
        {
          who: "The Australian Dictionary of Biography",
          stake: "A biographical entry of 2002, drawing on Slim’s biographers.",
          says: "The army met the decision with dismay and incredulity, and it was quashed in London.",
          refs: [{ source: 1 }],
        },
        {
          who: "Aung San, as Kirby reports him",
          stake:
            "Commander of the Burma National Army, which had fought for the Japanese and turned against them in 1945.",
          says: "He came as the military representative of a provisional government, an Allied commander, to treat with the British.",
          refs: [{ source: 0, locator: "ch. V" }],
        },
        {
          who: "Mountbatten, as Saunders quotes his despatch",
          stake: "The Supreme Allied Commander, writing after the campaign.",
          says: "The Fourteenth Army technically lost the race for Rangoon, but its drive had really won the battle.",
          refs: [{ source: 5 }],
        },
      ],
      strategist: [
        {
          text: "Leese’s proposal had a logic the sources record: the Fourteenth Army’s headquarters was the obvious instrument for the next campaign, in Malaya, and someone had to command in Burma. What the sources do not record is Leese’s own account of why Slim was to be moved rather than asked; none was read, and the lesson cannot supply it. A commander’s answer at such a moment is limited to what he will accept. Slim declined the lesser post, which left the decision to those above Leese, and they reversed it.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. III" }, { source: 1 }],
        },
        {
          text: "The second test after Rangoon was political, and the sources show its limits. The War Cabinet wanted Aung San kept in his place; Slim, who had wanted to meet him to co-ordinate the Burma National Army’s operations, told him he had no legal status. Britannica records that within two years an agreement provided for Burma’s independence within a year, and that Aung San was assassinated in July 1947. The commander could decide whom his army fought beside; he could not decide what the country he had reconquered would become.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "ch. V" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Nothing in the sources records what Slim thought or felt about the attempt to replace him, and the volume does not guess. The memoir, which describes it, is in copyright and was not read; the lesson rests on the official history’s footnote and the biography.",
          evidence: "interpretation",
          refs: [],
          limit: "No mechanism is offered and no state of mind is inferred.",
        },
      ],
      shadow: {
        text: "The story of the commander nearly removed at the moment of victory is told here mostly from his side. The biography reports the army’s dismay; Leese’s account was not read; the official history gives two sentences. A reader who meets the affair as a vindication of Slim should notice how little of the record speaks for the other party. The army’s victory also did not settle Burma’s future: the British treated the Burmese army that had changed sides as former collaborators without legal status, and within three years Burma left the empire.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "ch. III, V" },
          { source: 1 },
          { source: 3 },
        ],
        battleSlugs: ["rangoon-1945"],
      },
      counterCase: {
        text: "Belisarius, Justinian’s general, is the victorious commander whom his master did remove. John Walton Barker writes in Britannica that after Belisarius had destroyed the Vandal kingdom and taken Italy, the Goths offered to surrender if he would rule over them as emperor; Justinian had already come to fear that so popular a commander might aim at his throne, and although Belisarius refused the title, he was recalled in disfavour, later stripped of his command on charges of disloyalty, and sent back to Italy without sufficient men and money. Barker adds that despite his treatment Belisarius never wavered in his obedience. The Hannibal volume’s lesson on what Rome and Carthage did with their victorious generals asks the same question of Scipio; here the master’s suspicion had its way.",
        evidence: "interpretation",
        refs: [{ source: 4 }],
        commanderSlug: "belisarius",
        battleSlugs: ["dara"],
      },
      cost: {
        text: "The victory had its last costs after Rangoon. The Japanese 28th Army, trapped west of the Sittang, broke out in July; Kirby quotes an account of men lying by day on floating islands in the swamps and floundering by night, up to the neck in water, without food, exhausted men losing consciousness and sinking into the bog. He calls the break-out an heroic effort by a half-starved army without guns or air support. In Mandalay, Leese records, Fort Dufferin had been bombarded with medium artillery and rockets before the remnants of its garrison tried to escape. No figure is given here.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. IV" },
          { source: 6, locator: "para. 115" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The person pushed aside at the moment of success states plainly what they will and will not accept, and leaves the decision to those above.",
          "Those above can see what the team thinks of the change.",
        ],
        failsWhen: [
          "The person’s superiors fear his success more than they value it, as Justinian feared Belisarius.",
          "The success is taken to settle questions that belong to other people.",
        ],
        questions: [
          "If you were moved aside at the moment your team succeeded, what would you accept, and what would your answer tell the team?",
          "Whose account of a contested decision about you have you never heard?",
          "What does your organisation’s success decide, and what does it leave to others?",
        ],
      },
      bearsOn:
        "After Rangoon tests the record more than any other answer. The story of Slim’s near-removal is one of the strongest parts of his reputation, and it reaches us chiefly through his biographer; the official history keeps it in a footnote. The victory itself was the rebuilt army’s, but what it was worth was decided in London, in Mountbatten’s headquarters and, within three years, in Burma and India.",
      questions: [
        {
          prompt:
            "What did Leese propose to Slim on 7 May 1945, according to Kirby?",
          choices: [
            "That Slim command the invasion of Malaya.",
            "That Christison command the Fourteenth Army and Slim remain in command in Burma.",
            "That Slim retire.",
          ],
          answer: 1,
          explanation:
            "Slim would not accept the Burma command, and the proposal was dropped on Mountbatten’s orders.",
        },
        {
          prompt:
            "How does the Australian Dictionary of Biography say the Fourteenth Army received the decision to replace Slim?",
          choices: [
            "With indifference.",
            "With dismay and incredulity.",
            "With approval.",
          ],
          answer: 1,
          explanation:
            "It adds that the decision was quashed in London; Leese’s side was not read.",
        },
        {
          prompt: "What did Slim tell Aung San at Meiktila on 16 May 1945?",
          choices: [
            "That he would recognise his provisional government.",
            "That he and his army had no legal status, and that his army might become part of Burma’s future defence forces.",
            "That his army would be disbanded at once.",
          ],
          answer: 1,
          explanation:
            "Kirby records the meeting; the War Cabinet had ruled that the movement’s leaders were not to be treated as liberators.",
        },
      ],
      sourceCheck: {
        question: "How was the attempt to replace Slim reversed?",
        witnesses: [
          {
            label: "Kirby, official history, 1969",
            claim: "It was dropped on Mountbatten’s orders.",
          },
          {
            label: "Australian Dictionary of Biography, 2002",
            claim:
              "It was quashed in London, after dismay and incredulity in the army.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Prefer Kirby, since the official history had the records.",
            feedback:
              "Kirby had the records, but gives the affair only a footnote; it does not say what moved Mountbatten.",
          },
          {
            text: "Read them together: Mountbatten could have given the order after London intervened, and neither source gives Leese’s side; the reader should hold the question open.",
            feedback:
              "The two accounts are compatible, and both are thin; the gap is Leese’s own account.",
            best: true,
          },
          {
            text: "Prefer the biography, since it gives the army’s reaction.",
            feedback:
              "The army’s reaction is evidence of feeling, not of who reversed the decision.",
          },
        ],
        battleSlug: "rangoon-1945",
      },
      seminar: {
        prompt:
          "What did the victory at Rangoon settle? Argue it from three positions: Slim, Leese and Aung San.",
        guidance:
          "Use Kirby on the proposal and on Aung San, the Australian Dictionary of Biography, Saunders’s quotation of Mountbatten and Britannica on Aung San. Say which of these voices the sources let speak for itself.",
      },
      sources: [
        s.kirby5,
        s.adb,
        s.kirby4,
        s.britAungSan,
        s.britBelisarius,
        s.saunders16,
        s.leese,
      ],
    },
    {
      slug: "the-ledger",
      title: "The ledger: how a beaten army was rebuilt, and who paid",
      part: "Victory",
      themes: ["judgement", "ethics"],
      claim:
        "When an army beaten in one campaign wins the next, the victory can be credited to its commander’s leadership only where his choices, and not the means sent to him or the enemy’s errors alone, made the difference, and any verdict must count who paid and who wrote the record.",
      inBrief: {
        strength:
          "The volume can answer its question: an army that had broken in Arakan in 1943 destroyed the Japanese armies in Burma in 1945, and its commander’s methods and plans were part of the reason.",
        shadow:
          "The rebuilding began before him, the means came from others, the enemy made grave mistakes, and his reputation rests on a record he wrote well.",
      },
      moment: {
        text: "In May 1943 the units in Arakan, Kirby writes, had lost the will to resist; their morale could have been restored only by withdrawing them. In February 1944 the same official history calls the Admin Box the first time the Japanese met well-trained British and Indian formations, and by the end of March 1945 the Burma Area Army had virtually ceased to exist as a fighting force. The Australian Dictionary of Biography calls the transformation of a defeated force into a proud army Slim’s greatest achievement. This volume has asked from its first lesson how that transformation happened: by leadership, by means, through the enemy’s mistakes, or whether the record decides what we see.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. XX" },
          { source: 1, locator: "ch. X" },
          { source: 2, locator: "ch. XXVI" },
          { source: 5 },
        ],
      },
      episodes: [
        {
          title: "Leadership",
          text: "The evidence for Slim’s own part is real and specific. He drew a method from the failure in Arakan: strong pivots that the enemy must attack, and striking forces to destroy him; he ordered formations to stand fast when cut off and prepared the air supply to make the order good; he chose to fight at Imphal where the attacker’s supply would fail first; and in December 1944 he scrapped one plan for a better one within days. The biography credits him above all with maintaining morale. But the same sources show his errors, at the Pin Chaung in 1942, at Monywa, in the timing at Imphal, and in the force he expected at Kohima.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. X, XII, XX" },
            { source: 1, locator: "ch. IX, X, XIII" },
            { source: 2, locator: "ch. XV" },
            { source: 5 },
          ],
          battleSlugs: [
            "first-arakan",
            "admin-box",
            "imphal-kohima",
            "meiktila-mandalay",
          ],
        },
        {
          title: "Means",
          text: "The means were decided elsewhere and were decisive. India Command built the air supply organisation from December 1942 and ordered the training and health measures of late 1943; the transport squadrons that kept encircled formations fighting were British and American, and aircraft were borrowed from the airlift to China in the crises of 1944; the Imperial War Museums record that the bulk of the army was Indian, and India was its base. Kirby writes that in 1945 the army made do, by improvisation, with less than it needed; the means were sufficient only because they were found, just, in time.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "ch. III, IX" },
            { source: 2, locator: "ch. XXXIV" },
            { source: 6 },
          ],
          battleSlugs: ["admin-box", "rangoon-1945"],
        },
        {
          title: "The enemy’s mistakes",
          text: "The Japanese made grave mistakes, and their own historians say so. Arakawa writes that Mutaguchi carried out a plan of 1943 a year later without revision, failed to notice or took no interest in the change in the British and Indian army, and could not bring himself to halt the offensive when it failed. In February 1945 a Japanese conference at Meiktila judged that a thrust from Nyaungu would be on the scale of a Chindit raid. But the mistakes could be punished only by an army able to stand, be supplied and strike at the right place; at Arakan in 1943 the same Japanese tactics had won.",
          evidence: "interpretation",
          refs: [
            { source: 4 },
            { source: 2, locator: "ch. XXIII" },
            { source: 0, locator: "ch. XX" },
          ],
          battleSlugs: ["imphal-kohima", "meiktila-mandalay"],
        },
        {
          title: "The record",
          text: "The record shapes all three. The memoir, which the biography calls one of the best-written books of the war, reaches this volume only through those who quote it; the official historians, by their own account, were given full access to official documents, those of the commands they judged among them; the Japanese monographs were written by the defeated for their occupiers. The soldiers’ own reasons survive in a handful of recollections recorded decades later; Barkawi’s explanation, that the army itself made its soldiers into fighting groups, is a historian’s, from the introduction to his book. Each answer to the volume’s question comes through a different witness.",
          evidence: "interpretation",
          refs: [
            { source: 5 },
            { source: 1, locator: "front matter" },
            { source: 8, locator: "Introduction" },
          ],
          battleSlugs: [],
          campaignSlugs: ["burma-campaign"],
        },
      ],
      witnesses: [
        {
          who: "S. Woodburn Kirby",
          stake:
            "The British official historian, writing between 1958 and 1969 with the records of both sides.",
          says: "The Arakan units of 1943 had lost the will to resist; by March 1945 the Burma Area Army had virtually ceased to exist.",
          refs: [
            { source: 0, locator: "ch. XX" },
            { source: 2, locator: "ch. XXVI" },
          ],
        },
        {
          who: "Arakawa Kenichi",
          stake:
            "A Japanese military historian, writing in 2002 for his country’s defence ministry.",
          says: "Mutaguchi’s plan went unrevised, and he did not notice the change in his enemy.",
          refs: [{ source: 4 }],
        },
        {
          who: "The Australian Dictionary of Biography",
          stake: "A biographical entry of 2002.",
          says: "The transformation of a defeated force into a proud army was Slim’s greatest achievement.",
          refs: [{ source: 5 }],
        },
        {
          who: "Tarak Barkawi",
          stake: "A historian of the Indian Army, writing in 2017.",
          says: "Indian soldiers fought increasingly effectively despite famine, the INA and no promise of independence.",
          refs: [{ source: 8, locator: "Introduction" }],
        },
      ],
      strategist: [
        {
          text: "The volume’s answer, offered for the reader to contest, ranks the four. First, the means and the rebuilding behind the army: training, health and air supply ordered from India and flown by an Allied command, without which no order to stand could have been kept. Second, Slim’s methods and plans, which turned those means into a way of fighting the Japanese could not answer and, at Meiktila, into a decisive battle. Third, the enemy’s mistakes, which were real and were punished because the army could punish them. Over all three lies the record, which gives the commander the credit most readers meet.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "ch. III, X" },
            { source: 2, locator: "ch. XV, XXIII" },
            { source: 4 },
            { source: 5 },
          ],
        },
        {
          text: "The volume’s premise has to be tested too. Had the army learned to lose? In 1942, Kirby writes, it retreated nearly a thousand miles without once losing its cohesion; that is not an army that had learned to lose, but one that had been outmatched in training, equipment and the air. In Arakan in 1943 particular units, left too long without relief and filled with untrained men, did break. The premise holds for those units and that year; for the army as a whole, “badly prepared and badly supplied” describes 1942 better than “learned to lose”, and the rebuilding was as much training and supply as morale.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "ch. XII, XX" },
            { source: 8, locator: "Introduction" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The ledger offers no new mechanism. The volume used research where it had a sound base: on self-serving explanations of defeat, on cohesion and group performance, on why “learned helplessness” does not fit an army, on escalation of commitment as a contested label, and on how an army makes fighting groups, each from an abstract or an excerpt with its limits stated. Elsewhere it relied on the documents and said so. A single campaign cannot show which of a commander’s qualities caused a victory, and the qualities themselves reach us chiefly through others’ description of them.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the ledger rests on the evidence of the earlier lessons.",
        },
      ],
      shadow: {
        text: "The answer depends on a record shaped by the man it judges. Slim’s memoir is admired for the faults it admits, and it decides much of what readers see; this volume could not read it, and met his leadership through his biographer, the official historians’ quotations and the Japanese army’s view of its own failure. The soldiers who did most of the fighting, Indian, Gurkha, African, Burmese and British, appear in the commanders’ records chiefly as formations. A verdict that credits the commander should be held as lightly as the record that supports it.",
        evidence: "interpretation",
        refs: [{ source: 5 }, { source: 8, locator: "Introduction" }],
      },
      counterCase: {
        text: "The Japanese tried to rebuild a beaten army too. After Imphal, MacGarrigle writes, Tokyo told the Burma Area Army not to count on reinforcements; its new commander, Kimura, chose not to defend northern Burma, reasoning soundly that the Allies’ supply would worsen as they advanced while his own eased. Saunders writes that, denied air reconnaissance and moving only by night, Kimura concentrated his forces against the crossings near Mandalay with astonishing speed and skill, and was confounded at Meiktila. By the end of March, Kirby writes, his army had virtually ceased to exist. Skilled command without air, supply or reinforcement could not rebuild what the Fourteenth Army had been rebuilt with. The Serbian volume’s ledger of survival and the Western Front volume’s ledger of learning weigh other armies rebuilt after defeat; this case is the enemy’s.",
        evidence: "interpretation",
        refs: [
          { source: 10 },
          { source: 9 },
          { source: 2, locator: "ch. XXVI" },
        ],
        battleSlugs: ["meiktila-mandalay"],
      },
      cost: {
        text: "The ledger must count who paid. The soldiers of every army: Indian, Gurkha, African, Burmese, British, Chinese, American, Japanese and those of the Indian National Army. The Indian and Burmese refugees of 1942, of whom Kirby writes that many thousands died on the way. Bengal, where famine struck the army’s base in 1943. The Naga people, who left along the hill tracks as the Japanese approached Kohima and appear in the official history chiefly as a question of loyalty. The prisoners and the far larger number of Asian labourers who died building the Burma–Siam railway. The Japanese soldiers who went hungry at Kohima and starved in the swamps of the Sittang. The towns of central Burma fought over in 1945. And within three years the empire the army served was gone from India and Burma: the Imperial War Museums write that India’s war effort was a key argument for independence in 1947, the year of partition, and Britannica that an agreement of January 1947 provided for Burma’s independence within a year. No figures are given here.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "ch. XI" },
          { source: 1, locator: "ch. II, XVI, XXIV" },
          { source: 2, locator: "ch. XXIII, XXVI" },
          { source: 3, locator: "ch. IV; appendix 30" },
          { source: 6 },
          { source: 7 },
        ],
      },
      transfer: {
        holdsWhen: [
          "A leader rebuilding a beaten organisation can show which of the changes were theirs, which were sent to them, and which were the competition’s mistakes.",
          "The record of the recovery can be read from more than one side, including the people who did the work.",
        ],
        failsWhen: [
          "The recovery is credited to the leader alone, because the leader’s account is the one most people read.",
          "Skill in command is expected to make up for means that are not there, as for Kimura in 1945.",
        ],
        questions: [
          "In the recovery you are proudest of, what was sent to you, what did you change, and what did the competition get wrong?",
          "Whose account of that recovery have you never read?",
          "Who paid for it, and does any record name them?",
        ],
      },
      bearsOn:
        "The volume’s answer: the army that had learned to lose in Arakan was rebuilt by training, health and air supply that came largely from outside its commander’s control; it was made to win by a commander whose methods and plans fitted those means to an enemy who made grave mistakes; and it is remembered chiefly through that commander’s own admired account. Leadership is the second answer, not the first, and the most visible.",
      questions: [
        {
          prompt:
            "How does the volume rank the four answers to its question, for the reader to contest?",
          choices: [
            "Leadership first, then the record.",
            "Means and the rebuilding first, Slim’s methods and plans second, the enemy’s mistakes third, and the record over all.",
            "The enemy’s mistakes alone.",
          ],
          answer: 1,
          explanation:
            "The ranking is an argument from the evidence of the lessons, offered to be contested.",
        },
        {
          prompt:
            "What does Kirby say of the army’s retreat from Burma in 1942?",
          choices: [
            "That it dissolved into a rout.",
            "That it retreated nearly a thousand miles without once losing its cohesion.",
            "That it was evacuated by sea.",
          ],
          answer: 1,
          explanation:
            "The evidence complicates the premise that the army had simply learned to lose.",
        },
        {
          prompt:
            "Why does the ledger take Kimura’s Burma Area Army as its counter-case?",
          choices: [
            "Because Kimura was a poor commander.",
            "Because skilled command without air, supply or reinforcement could not rebuild a beaten army.",
            "Because the Japanese did not try to rebuild.",
          ],
          answer: 1,
          explanation:
            "Saunders praises Kimura’s concentration; Kirby records his army’s destruction.",
        },
      ],
      seminar: {
        prompt:
          "Argue the opposite of the volume’s answer: that Slim’s leadership was the first cause of the victory. Then answer it from the positions of an Indian soldier of 1943, a Japanese staff officer of 1945 and an official historian.",
        guidance:
          "Use the evidence of the whole volume: Kirby on Arakan, the Admin Box, Imphal and Meiktila; Arakawa; the biography; Barkawi; and the soldiers’ recollections. Say which evidence each side must explain away.",
      },
      sources: [
        s.kirby2,
        s.kirby3,
        s.kirby4,
        s.kirby5,
        s.arakawa,
        s.adb,
        s.iwmIndia,
        s.britAungSan,
        s.barkawi,
        s.saunders16,
        s.macgarrigle,
      ],
    },
  ],
};
