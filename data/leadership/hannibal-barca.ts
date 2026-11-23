import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 7, shared by Hannibal and Scipio, written in reviewed batches (batch
// H1, the pilot, is lessons 0, the record, 5, Rome's answer, and 7, Scipio
// learning from the enemy; batch H2 is lessons 1 to 4, Hannibal's war; batch
// H3 is lessons 6, 8 and 9, the rest of Scipio's answer; batch H4 is lessons
// 10 to 12, the meeting at Zama, both rejected and the ledger, which complete
// the volume);
// docs/LEADERSHIP_EVIDENCE_HANNIBAL_SCIPIO.md records
// which sources can carry each lesson, and docs/SOURCE_AUDIT.md how each was
// read. Polybius and Plutarch are the Loeb translations on LacusCurtius, Livy
// is Canon Roberts's translation on Wikisource; locators are book and chapter,
// or chapter alone for the Lives.
const lacus = "LacusCurtius, University of Chicago";
const thayer = (path: string, title: string): Source => ({
  title,
  url: `https://penelope.uchicago.edu/Thayer/E/Roman/Texts/${path}%2A.html`,
  publisher: lacus,
});
const polybius = (book: number): Source =>
  thayer(
    `Polybius/${book}`,
    `Polybius, Histories, Book ${book}, trans. W. R. Paton (Loeb Classical Library, 1922–1927)`,
  );
const livy = (book: number): Source => ({
  title: `Livy, History of Rome, Book ${book}, trans. Canon Roberts (1905)`,
  url: `https://en.wikisource.org/wiki/From_the_Founding_of_the_City/Book_${book}`,
  publisher: "Wikisource",
});
const eb1911 = (page: string, title: string): Source => ({
  title: `“${title}”, Encyclopædia Britannica, 11th ed. (1911)`,
  url: `https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/${page}`,
  publisher: "Wikisource",
});
const s = {
  pol3: polybius(3),
  pol10: polybius(10),
  pol11: polybius(11),
  pol14: polybius(14),
  pol15: polybius(15),
  pol23: polybius(23),
  livy21: livy(21),
  livy22: livy(22),
  livy23: livy(23),
  livy25: livy(25),
  livy26: livy(26),
  livy27: livy(27),
  livy28: livy(28),
  livy29: livy(29),
  livy30: livy(30),
  livy33: livy(33),
  livy38: livy(38),
  livy39: livy(39),
  plutarchFlamininus: thayer(
    "Plutarch/Lives/Flamininus",
    "Plutarch, Life of Flamininus, trans. B. Perrin (Loeb Classical Library, 1921)",
  ),
  arrian38: {
    title: "Arrian, Anabasis of Alexander 3.8 (trans. E. J. Chinnock, 1884)",
    url: "https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_III/Chapter_VIII",
    publisher: "Wikisource",
  },
  arrian313: {
    title: "Arrian, Anabasis of Alexander 3.13 (trans. E. J. Chinnock, 1884)",
    url: "https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_III/Chapter_XIII",
    publisher: "Wikisource",
  },
  britZhukov: {
    title: "Georgy Zhukov (Britannica Editors)",
    url: "https://www.britannica.com/biography/Georgy-Zhukov",
    publisher: "Encyclopædia Britannica",
  },
  britAutumn1813: {
    title:
      "Napoleonic Wars: Dispositions for the autumn campaign (of 1813) (Britannica Editors)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Dispositions-for-the-autumn-campaign",
    publisher: "Encyclopædia Britannica",
  },
  plutarchFabius: thayer(
    "Plutarch/Lives/Fabius_Maximus",
    "Plutarch, Life of Fabius Maximus, trans. B. Perrin (Loeb Classical Library, 1916)",
  ),
  plutarchPompey: thayer(
    "Plutarch/Lives/Pompey",
    "Plutarch, Life of Pompey, trans. B. Perrin (Loeb Classical Library, 1917)",
  ),
  suetonius: thayer(
    "Suetonius/12Caesars/Julius",
    "Suetonius, The Deified Julius, trans. J. C. Rolfe (Loeb Classical Library, 1913)",
  ),
  plutarchCaesar: thayer(
    "Plutarch/Lives/Caesar",
    "Plutarch, Life of Caesar, trans. B. Perrin (Loeb Classical Library, 1919)",
  ),
  appianSpain4: {
    title: "Appian, The Spanish Wars 16–20, trans. Horace White",
    url: "https://www.livius.org/sources/content/appian/appian-the-spanish-wars/appian-the-spanish-wars-4/",
    publisher: "Livius.org (Jona Lendering)",
  },
  appianSpain5: {
    title: "Appian, The Spanish Wars 21–25, trans. Horace White",
    url: "https://www.livius.org/sources/content/appian/appian-the-spanish-wars/appian-the-spanish-wars-5/",
    publisher: "Livius.org (Jona Lendering)",
  },
  appianSpain6: {
    title: "Appian, The Spanish Wars 26–28, trans. Horace White",
    url: "https://www.livius.org/sources/content/appian/appian-the-spanish-wars/appian-the-spanish-wars-6/",
    publisher: "Livius.org (Jona Lendering)",
  },
  appianHannibal12: {
    title: "Appian, The War against Hannibal 56–61, trans. Horace White",
    url: "https://www.livius.org/sources/content/appian/appian-war-against-hannibal/appian-war-against-hannibal-12/",
    publisher: "Livius.org (Jona Lendering)",
  },
  liviusTrasimene: {
    title: "Jona Lendering, Lake Trasimene (217 BCE)",
    url: "https://www.livius.org/articles/battle/lake-trasimene/",
    publisher: "Livius.org",
  },
  caesarGallic2: thayer(
    "Caesar/Gallic_War/2",
    "Caesar, The Gallic War, Book 2, trans. H. J. Edwards (Loeb Classical Library, 1917)",
  ),
  oman5: {
    title:
      "Charles Oman, A History of the Peninsular War, vol. V: October 1811–August 1812 (Oxford: Clarendon Press, 1914)",
    url: "https://archive.org/details/historyofpeninsu05oman",
    publisher: "Internet Archive",
  },
  britRussia: {
    title:
      "Napoleonic Wars: France and northern Europe, 1809–12, and the Russian campaign (Britannica Editors)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/France-and-northern-Europe-1809-12",
    publisher: "Encyclopædia Britannica",
  },
  britRetreat: {
    title:
      "Napoleonic Wars: The retreat from Moscow and the campaign of 1813 (Britannica Editors)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-retreat-from-Moscow",
    publisher: "Encyclopædia Britannica",
  },
  ciceroCato: {
    title: "Cicero, Cato maior de senectute (Latin text)",
    url: "https://la.wikisource.org/wiki/Cato_maior_de_senectute",
    publisher: "Wikisource (Latin)",
  },
  ebHannibal: eb1911("Hannibal_(general)", "Hannibal (general)"),
  ebPolybius: eb1911("Polybius", "Polybius"),
  ebPunic: eb1911("Punic_Wars", "Punic Wars"),
  ebScipio: eb1911("Scipio", "Scipio"),
  gilbertMalone: {
    title:
      "Daniel Gilbert and Patrick Malone, The correspondence bias (1995), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/7870861/",
    publisher: "Psychological Bulletin (PubMed)",
  },
  vanKnippenberg: {
    title:
      "Daan van Knippenberg and Michaéla Schippers, Work group diversity (2007), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/16903805/",
    publisher: "Annual Review of Psychology (PubMed)",
  },
  taylor: {
    title:
      "Paul Taylor, Darlene Russ-Eft and Daniel Chan, A meta-analytic review of behavior modeling training (2005), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/16060787/",
    publisher: "Journal of Applied Psychology (PubMed)",
  },
} satisfies Record<string, Source>;
export const hannibalScipioVolume: LeadershipVolume = {
  commanderSlug: "hannibal-barca",
  alsoCommanderSlugs: ["scipio-africanus"],
  title:
    "Leadership Lessons from Hannibal and Scipio: the Second Punic War, 218–201 BCE",
  summary:
    "What a person who leads others can take from Hannibal and Scipio, the opposing commanders of the Second Punic War, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In 218 BCE Hannibal led an army from Spain over the Alps into Italy, beat the Romans on the Ticinus, the Trebia, at Lake Trasimene and at Cannae, and stayed in Italy for fifteen years. Rome would not make peace. Publius Cornelius Scipio, who had fought in the first of those battles as a young man, took command in Spain, drove Carthage out of it, carried the war to Africa and beat Hannibal at Zama in 202. Both men’s own words are lost. The war is known from a Greek historian, Polybius, who questioned men who had been there, drew on Scipio’s friend Laelius and was himself the friend of Scipio’s adoptive grandson, from Livy, a Roman writing two centuries later, and from writers later still; Hannibal’s own historians survive only in what his enemies chose to quote, and Carthage itself was destroyed half a century after the war. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. The costs stay in view: Italy laid waste by both armies, the allies punished when Rome returned, the peoples of Spain and Africa fought over by both sides, the enslaved, and the soldiers of every people in both armies. One war cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "Why did the better tactician lose the war: Hannibal’s strategy, Rome’s system, Scipio’s command, or the record written by the winners?",
  parts: [
    "Orientation",
    "Hannibal’s war",
    "Scipio’s answer",
    "The meeting and after",
  ],
  lessons: [
    {
      slug: "how-to-read-the-hannibalic-war",
      title:
        "A war written by the winners’ friends: how to read the Hannibalic War",
      part: "Orientation",
      themes: ["communication", "judgement"],
      claim:
        "When the surviving accounts of a war were written by the victors and their friends, a lesson drawn from them is only as sound as the reader’s ability to say who told each story, to whom, and why.",
      inBrief: {
        strength:
          "Polybius questioned men who had been there, crossed the Alps himself and read Hannibal’s own list of his forces.",
        shadow:
          "Hannibal’s historians survive only in his enemies’ quotations, and Carthage’s own record went down with the city.",
      },
      moment: {
        text: "On the Lacinian promontory in southern Italy, Polybius writes, he found a bronze tablet on which Hannibal himself, while he was in Italy, had set out the forces he left in Spain and Africa, and he decided to follow it as an absolutely first-rate authority. A few chapters later he says that what he writes of the march over the Alps he can state with some confidence, because he had questioned men who were present and had made the passage himself to see. Almost everything Hannibal wrote or had written is lost. What survives of his own record is a list read off a bronze tablet by a Greek historian who spent his life among Romans, and the war of the most admired general Rome ever faced comes to us through his enemy’s side.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.33, 3.48" }],
      },
      episodes: [
        {
          title: "Who told the story",
          text: "Polybius names some of the writers before him and rejects them. Fabius Pictor, a Roman senator who lived through the war, he warns readers not to trust because of his rank and his date; two Greeks who wrote on Hannibal’s side, Chaereas and Sosylus, he dismisses as having the authority of gossip in a barber’s shop. The Loeb editor notes that Sosylus was Hannibal’s Greek teacher and went with him on campaign. For Scipio, Polybius draws on Gaius Laelius, who shared his every word and deed from youth, and it is from Laelius that we have the story of the seventeen-year-old Scipio saving his wounded father on the Ticinus. Livy, writing later, cites a Roman officer whom Hannibal had taken prisoner and who heard him speak, the annalist Fabius for the losses at Trasimene, Hannibal’s historian Silenus beside the Roman Valerius Antias, whom he accuses of invention, and he admits on Scipio’s last years that he cannot decide which tradition to follow.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.8–9, 3.20" },
            { source: 1, locator: "10.3" },
            { source: 2, locator: "21.38" },
            { source: 7, locator: "22.7" },
            { source: 3, locator: "26.49" },
            { source: 4, locator: "38.56" },
          ],
          battleSlugs: ["ticinus"],
        },
        {
          title: "The oath at the altar",
          text: "The most famous story of Hannibal’s boyhood has a chain of transmission that Polybius gives in full. Years after the war, at the court of King Antiochus, Hannibal found the king suspicious of him. Out of other arguments, he said that at nine years old, as his father Hamilcar sacrificed before leaving for Spain, he had been led to the altar, had laid his hand on the victim and had sworn never to be the friend of the Romans; and so long as the king meant war with Rome he could rely on him. Polybius takes it as proof of Hamilcar’s purpose. Livy opens his account of the war with a different version, an oath to be Rome’s enemy as soon as he could, and calls it a story widely current. The story is real evidence: of what Hannibal said about himself to a king, when it served him.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.11–12" },
            { source: 2, locator: "21.1" },
          ],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "Vinegar on the rock",
          text: "Near the top of the pass, a landslip had carried away the path. Polybius describes Hannibal camping on the ridge, setting the soldiers to build up the path along the cliff, getting the horses and pack animals across in a day and the starving elephants in three. Livy has the soldiers fell trees, pile them against the rock, set them alight and pour vinegar on the red-hot stone to break it before cutting a way through with their tools. Polybius, who says he made the crossing himself and questioned survivors, and who complains of writers who put gods and heroes into the story of the Alps, has no fire and no vinegar.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.47–48, 3.54–55" },
            { source: 2, locator: "21.37" },
          ],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "Neptune and the tide",
          text: "Before the assault on New Carthage, Polybius writes, Scipio told his soldiers that Neptune had appeared to him in his sleep and promised help the whole army would see; when the lagoon fell in the middle of the attack and men waded across to an unguarded wall, the army took it for the work of a god. Polybius explains it away: fishermen had told Scipio during the winter that the lagoon was shallow and usually fell every day toward evening, and he compares Scipio to Lycurgus, who claimed the oracle’s support for laws of his own making. Livy has the ebb at midday, helped by a north wind, and says Scipio ascribed to the gods what he had found out by inquiry. Polybius’s reading is the admiring one: a calculating commander using his men’s beliefs.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "10.2, 10.8, 10.11, 10.14" },
            { source: 3, locator: "26.45" },
          ],
          battleSlugs: ["new-carthage"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek detained at Rome who became the lifelong friend of Scipio Aemilianus, Scipio Africanus’s adoptive grandson and the future conqueror of Carthage, and drew on Scipio Africanus’s friend Laelius.",
          says: "Scipio acted by calculation, not luck; Hannibal by careful inquiry, not as the romancers say; and Rome recovered through its constitution.",
          refs: [
            { source: 1, locator: "10.2–3" },
            { source: 0, locator: "3.48, 3.118" },
            { source: 5 },
          ],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian writing two centuries later, who the 1911 Britannica says drew partly on Polybius and other good authorities and partly on untrustworthy Roman annalists, and who wrote of Rome’s greatest war as its own.",
          says: "Hannibal had every soldier’s virtue, matched by inhuman cruelty and a perfidy worse than Punic.",
          refs: [{ source: 2, locator: "21.4" }, { source: 6 }],
        },
        {
          who: "Fabius Pictor, as Polybius and Livy report him",
          stake:
            "A Roman senator who lived through the war and wrote its first Roman history; known only through later writers.",
          says: "The war began with the ambition of Hasdrubal and Hannibal, against the wishes of Carthage’s leading men.",
          refs: [
            { source: 0, locator: "3.8–9" },
            { source: 7, locator: "22.7" },
          ],
        },
        {
          who: "Sosylus and Silenus, as their enemies quote them",
          stake:
            "Greek historians who went with Hannibal; their works are lost and survive only where Polybius and Livy chose to mention them.",
          says: "Nothing that can be read in their own words.",
          refs: [
            { source: 0, locator: "3.20" },
            { source: 3, locator: "26.49" },
          ],
        },
      ],
      strategist: [
        {
          text: "The strategist’s rule is to judge a decision by what the commander knew when he made it. For Hannibal that knowledge is almost always reported by Polybius, who writes his reasoning from the inside: at the Trebia he knew that Sempronius was sure to be aggressive, and before the Alps he had inquired carefully about the richness of the country, the hatred of its peoples for Rome and the difficulties of the route. Polybius says he learned such things by inquiry, and some of it, such as the tablet and the Alpine route, he checked himself. But a reconstructed motive is still a historian’s argument. The method is to test each motive against what Hannibal did, and to notice when the reconstruction is a little too wise.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "3.48, 3.70" }],
        },
        {
          text: "The record also supplies opposite verdicts on the strategy itself. Polybius admires Hannibal’s generalship over sixteen years and then judges that had he begun with the rest of the world and finished with the Romans none of his plans would have failed, but he began with those he should have left to the last. The 1911 Britannica’s history of the Punic Wars says the failure was not due to any strategic mistake but to Rome’s will and the compactness of its Italian confederacy, individual genius overborne by corporate and persevering effort. One is the verdict of a contemporary who knew the Romans from inside; the other of a modern scholar reading him. Both are claims to test, and this volume tests them.",
          evidence: "interpretation",
          refs: [{ source: 8, locator: "11.19" }, { source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research exists on how stories change as they are retold and on how much readers trust a source they know to be interested, but none of it was read for this volume, and a laboratory finding about retelling would add little to what can be shown directly here: three versions of the Alpine rock, two of the oath, two hours for the tide. The lesson relies on the documents and their chains of transmission.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited. The lesson’s claims rest on comparing the ancient reporters.",
        },
      ],
      shadow: {
        text: "The gaps cannot be filled. Carthage was taken by storm in 146 BCE under Scipio Aemilianus, Polybius’s friend; the 1911 Britannica records that the survivors were sold into slavery and the city razed, its site cursed to lie desolate. Whatever Carthage wrote about Hannibal went with it. What remains is a record in which a Roman historian can describe Hannibal’s character as virtues matched by every vice Romans ascribed to Carthage, and the reader has nothing Carthaginian to set against it.",
        evidence: "fact",
        refs: [{ source: 6 }, { source: 2, locator: "21.4" }],
      },
      counterCase: {
        text: "Caesar is the opposite case, and the Caesar volume’s orientation reads him at length. He wrote the memoirs of the Gallic War and of the civil war himself; Suetonius quotes Cicero’s praise of their plainness and Hirtius’s of their speed, and Asinius Pollio, who served under him, thought them put together somewhat carelessly and without strict regard for truth. Caesar’s readers must separate what he reports from what he argues. Hannibal’s must reconstruct what he might have argued from what his enemies reported. Neither record is neutral; the difference is whose interest shaped it.",
        evidence: "interpretation",
        refs: [{ source: 9, locator: "56.1–4" }],
        commanderSlug: "julius-caesar",
        battleSlugs: [],
      },
      cost: {
        text: "The victims of the war are also described by the victors’ friends, sometimes with a plainness that is itself evidence. Polybius, telling of New Carthage, says that once enough troops were inside Scipio sent most of them against the inhabitants with orders to kill everyone they met until the signal to plunder, which he calls the Roman custom, meant to inspire terror; in captured cities, he adds, one may see dogs cut in half. He reports it without protest and without numbers. No account by the people of New Carthage survives.",
        evidence: "fact",
        refs: [{ source: 1, locator: "10.15" }],
      },
      transfer: {
        holdsWhen: [
          "The surviving accounts of a contest were written by the winners or their friends, and the loser’s own record is lost or suppressed.",
          "Some witnesses name their sources, so that chains of transmission can be traced and compared.",
        ],
        failsWhen: [
          "A plain or admiring style is taken for neutrality; Polybius admired Hannibal and still wrote from among his enemies.",
          "Silence is read as absence, so that what the loser might have said is treated as never having existed.",
        ],
        questions: [
          "Which accounts of your organisation’s past failures were written by the people who replaced those involved?",
          "When a story about a leader’s youth explains everything that followed, who first told it, and to whom?",
          "Whose records of your last success no longer exist, and what would they have said?",
        ],
      },
      bearsOn:
        "The fourth answer to the volume’s question, the record written by the winners, is not one answer among four but the condition of all the others. Hannibal’s strategy is judged in Polybius’s words; Rome’s system is praised by a Greek who admired it; Scipio’s command is described by his friend’s source and his grandson’s friend. The record does not settle the question, but it decides which evidence the other answers can use, and the two verdicts it supplies, Polybius’s on Hannibal’s strategy and the Britannica’s on Rome’s cohesion, are where the volume begins.",
      questions: [
        {
          prompt:
            "Through whom does the story of Hannibal’s boyhood oath reach us, according to Polybius?",
          choices: [
            "From Hamilcar’s own memoirs.",
            "From Hannibal himself, who told it years later to King Antiochus when the king mistrusted him.",
            "From a Carthaginian inscription.",
          ],
          answer: 1,
          explanation:
            "Polybius gives the chain in full; Livy calls his own version a story widely current.",
        },
        {
          prompt:
            "Why does Polybius claim confidence about Hannibal’s crossing of the Alps?",
          choices: [
            "Because he read Hannibal’s diary.",
            "Because he questioned men who were present and made the passage himself.",
            "Because Fabius Pictor described it.",
          ],
          answer: 1,
          explanation:
            "He says so at 3.48; his version of the broken path has no fire and no vinegar.",
        },
        {
          prompt:
            "What survives of the histories written by Hannibal’s companions?",
          choices: [
            "Several complete books.",
            "Only what Polybius and Livy chose to mention, as when Polybius dismisses Sosylus and Livy cites Silenus.",
            "A Carthaginian translation.",
          ],
          answer: 1,
          explanation:
            "Their works are lost; they reach us through the writers on the other side.",
        },
      ],
      sourceCheck: {
        question:
          "How did Hannibal’s army get past the broken path in the Alps?",
        witnesses: [
          {
            label: "Polybius 3.54–55",
            claim:
              "The soldiers built up the path along the cliff; the horses crossed in a day and the elephants in three.",
          },
          {
            label: "Livy 21.37",
            claim:
              "The soldiers heated the rock with burning trees, poured vinegar on it and cut a way through.",
          },
          {
            label: "Polybius 3.48",
            claim:
              "He had questioned men present and crossed the Alps himself to see.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Follow Livy, because his account is more detailed.",
            feedback:
              "Detail is not evidence of knowledge; Livy wrote two centuries later and gives no source for the vinegar.",
          },
          {
            text: "Follow Polybius on the method, because he says he checked the ground and spoke to survivors, and treat the vinegar as a later story whose origin is unknown.",
            feedback:
              "Polybius states how he knows; the vinegar may have come from a tradition Polybius rejected, but no source for it is named.",
            best: true,
          },
          {
            text: "Combine them: the soldiers built the path with fire and vinegar.",
            feedback:
              "Combining two accounts produces a third that neither witness gave.",
          },
        ],
        campaignSlug: "hannibal-s-italian-campaign",
      },
      seminar: {
        prompt:
          "Hannibal’s own historians are lost. Argue what the war would look like if Sosylus’s history had survived instead of Polybius’s, from three positions: a Carthaginian veteran, a Roman senator of Fabius Pictor’s generation, and a modern historian.",
        guidance:
          "Use the oath, the Alpine rock and the tide at New Carthage. In each case say what Polybius could check for himself and what he took from interested witnesses.",
      },
      sources: [
        s.pol3,
        s.pol10,
        s.livy21,
        s.livy26,
        s.livy38,
        s.ebPolybius,
        s.ebPunic,
        s.livy22,
        s.pol11,
        s.suetonius,
      ],
    },
    {
      slug: "over-the-alps",
      title: "Over the Alps: carrying the war into the enemy’s country",
      part: "Hannibal’s war",
      themes: ["judgement", "adaptation"],
      claim:
        "Carrying a war into the enemy’s own country can turn the enemy’s strength against it, but only while the invader can live off the land and enough of the enemy’s allies change sides to make up for what home cannot send.",
      inBrief: {
        strength:
          "Hannibal took the war to Italy, where he could feed on the country and offer Rome’s allies their freedom.",
        shadow:
          "Most of the allies stayed, Rome would not treat, and Italy was laid waste by both armies for fifteen years.",
      },
      moment: {
        text: "Before he left Spain, Polybius writes, Hannibal had informed himself accurately about the fertility of the land at the foot of the Alps and along the Po, how thickly it was peopled, how brave its men were in war, and above all how they had hated Rome since their last war with it. He sent messengers with unlimited promises to the Celtic chiefs on both sides of the mountains, judging that the only way to carry the war into Italy was to reach that country and make the Celts his partners. When the messengers came back to say that the Celts consented and were waiting, and that the crossing was very toilsome but by no means impossible, he drew his army out of winter quarters. The invasion was planned around a people, not a road.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.34" }],
      },
      episodes: [
        {
          title: "The price of the passes",
          text: "The road cost more than any battle of that year. Polybius says that rivers, hostile tribes and the precipices of the Alps had cost Hannibal many men and a far greater number of horses and pack animals, and that the survivors came down into the plain more like beasts than men, worn out by toil and want of food; he gives the strength Hannibal himself recorded on the tablet at Lacinium, and those figures are left out here. The 1911 Britannica, in Caspari’s article, judges the march one of the most memorable achievements of any army of antiquity, because it brought the war straight into Roman territory and frustrated Rome’s plan to fight the main issue abroad. Hannibal rested the army, then approached the Taurini, who refused his alliance.",
          evidence: "fact",
          refs: [{ source: 0, locator: "3.56, 3.60" }, { source: 3 }],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "The first allies",
          text: "The plan began to work after the first clash. Once the Carthaginian prospects looked brighter after the Ticinus, Polybius says, the Celtic contingents serving in the Roman army fell on the Romans camped nearest them at night and went over; Hannibal sent them home to bring their peoples in, and the Celts of the plain kept his camp supplied before the Trebia. Polybius gives the reason he attributes to Hannibal for fighting there so soon: a general who has brought his army into a foreign country on such a venture has only one hope of safety, to keep his allies’ hopes alive. Victory was not the aim but the means; the aim was a following.",
          evidence: "fact",
          refs: [{ source: 0, locator: "3.67–68, 3.70" }],
          battleSlugs: ["ticinus", "trebia"],
        },
        {
          title: "Living on the country",
          text: "The following had a price. Polybius says the Celts disliked the war being fought in their own land and wanted to invade the enemy’s, chiefly in hope of plunder; the Britannica adds that their zeal abated once Hannibal’s army was quartered on them for the winter. So in 217 he went south, and after Trasimene ravaged the country to the Adriatic. In Campania he tried to force the issue on Rome’s allies directly: either Fabius would fight, or it would be plain to everyone that the Romans were abandoning the country, and the towns would hurry to change sides. Polybius adds that up to then, after two Roman defeats, not one Italian city had gone over.",
          evidence: "fact",
          refs: [{ source: 0, locator: "3.78, 3.86, 3.90" }, { source: 3 }],
          battleSlugs: ["lake-trasimene"],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "After Cannae",
          text: "Cannae brought what the plan required: the south of Italy began to come over. It did not bring the other thing an invasion needs, an enemy willing to treat. Polybius says the Romans expected Hannibal at the city any moment, and that the senate deliberated with manly coolness. Livy gives the counter-argument in the Carthaginian senate to Hanno, an enemy of the Barcid house, in a speech of Livy’s composing: had any Roman envoy come to sue for peace, had anyone in Rome even spoken the word? If not, Carthage had as much war before it as on the day Hannibal entered Italy. The senate voted reinforcements anyway. The Alexander volume’s lesson on Parmenion’s advice reads Maharbal’s reproach after the battle. The Britannica judges that after Trasimene, without siege engines, Hannibal could not hope to take Rome, and that after Cannae only proper reinforcements from home might have made a direct attack possible.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.118" },
            { source: 2, locator: "23.13" },
            { source: 1, locator: "22.51, 22.61" },
            { source: 3 },
          ],
          battleSlugs: ["cannae"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek who wrote two generations later among Hannibal’s enemies, who admired the general and judged the plan.",
          says: "Hannibal inquired carefully before he marched; had he begun with the rest of the world and finished with the Romans, none of his plans would have failed.",
          refs: [
            { source: 0, locator: "3.34, 3.48" },
            { source: 4, locator: "11.19" },
          ],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian writing under Augustus, for whom the war is the story of Rome’s endurance.",
          says: "The day’s delay after Cannae is believed to have saved the city and the empire, and no one in Rome spoke of peace.",
          refs: [{ source: 1, locator: "22.51, 22.61" }],
        },
        {
          who: "Hanno, as Livy reports him",
          stake:
            "A Carthaginian senator hostile to Hannibal’s family, in a speech Livy composed two centuries later.",
          says: "A victory that brings no Roman offer of peace has not shortened the war.",
          refs: [{ source: 2, locator: "23.13" }],
        },
        {
          who: "The 1911 Britannica (M. O. B. Caspari)",
          stake:
            "A modern classical scholar, admiring of Hannibal, who notes that nearly all that is known of him comes from hostile sources.",
          says: "The march frustrated Rome’s plan to fight abroad; Hannibal could not take Rome without siege engines, and Carthage gave him only grudging support.",
          refs: [{ source: 3 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the invasion answered a real problem. Rome meant, the Britannica says, to fight out the main issue on foreign ground; a Carthaginian army that waited in Spain would fight on Rome’s terms. Italy offered what Spain could not: a rich country to feed an army far from home, and Celts who had fought Rome within living memory and hated it still. Polybius’s account shows the measure Hannibal set himself. He freed allied prisoners and spoke of the freedom of Italy, and he fought early at the Trebia to keep his new allies’ hopes alive. The strategy was judged by defections, not by battles, and by that measure it stalled for two years after its first success among the Celts.",
          evidence: "interpretation",
          refs: [
            { source: 3 },
            { source: 0, locator: "3.34, 3.70, 3.77, 3.90" },
          ],
        },
        {
          text: "The choice after Cannae should be judged the same way. A march on Rome would have meant a siege, without engines, of a walled city whose senate was spending what it had on arming even slaves, while allies waited to be won in the south. Hannibal chose the south. When he did come to Rome, in 211, it was to draw the armies besieging Capua away from it; Livy has him ride up to the Colline Gate to look at the walls, and says that although one proconsul brought part of his army to the city, the siege of Capua went on unrelaxed. Rome had read the march for what it was. The strategy’s weak point was not that it avoided Rome but that it needed Rome to behave like a defeated state, and Rome would not.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "26.10, 26.12" },
            { source: 0, locator: "3.118" },
            { source: 1, locator: "22.61" },
            { source: 3 },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "It would be easy to call the invasion overconfident, or to admire it as nerve. Neither reading rests on anything but the outcome, and no research on risk or confidence was read for this lesson. Hannibal’s reasoning reaches us almost entirely through Polybius, who reconstructs it, and the one Carthaginian argument against the war is a speech Livy wrote for an enemy of the Barcids. The lesson judges the plan by what it needed and what it got.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; the motives in this lesson are those the ancient historians attribute.",
        },
      ],
      shadow: {
        text: "An army that lives on the enemy’s country lives on the people in it. To provoke Flaminius, Polybius says, Hannibal burned and wasted Etruria, and after Trasimene he ravaged his way to the Adriatic with orders to kill the adults his men met on the road, as at the storming of a city, which Polybius puts down to his hatred of Rome. Rome’s own allies paid for resisting him: by 209 the Latin colonies told the consuls that ten years of levies and taxes had drained them. The strategy that was meant to free Italy’s peoples was paid for by them, on both sides.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "3.82, 3.86" },
          { source: 8, locator: "27.9" },
        ],
      },
      counterCase: {
        text: "Napoleon’s invasion of Russia in 1812 shows the same strategy failing faster. Britannica’s account says he assembled the largest army Europe had ever seen, with unprecedented efforts at supply and transport that were still quite insufficient for an advance so far into Russia, and that he wrongly supposed the campaign would be over within a month. The Russians retreated; marching and the failure of the commissariat, not combat, took a heavy toll before Moscow, and forage failed the horses. The Russians then refused to come to terms. The Napoleon volume’s lesson on knowing when to stop reads the month at Moscow, and the Caesar volume’s lesson on speed sets Hannibal beside Caesar; the comparison here is narrower. Hannibal invaded a country that could feed his army, and he kept it there for fifteen years. Napoleon invaded one that could not, and lost his army in a season. Both waited for an enemy to make peace who would not.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 7 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: [],
      },
      cost: {
        text: "The first people to meet the invasion in Italy were the Taurini, at the foot of the mountains. When they refused Hannibal’s offer of friendship, Polybius writes, he surrounded their chief town, took it in three days and massacred those who had opposed him, which so terrified the neighbouring tribes that they all came in and submitted. The war that promised the peoples of Italy their liberty opened with the destruction of one of them.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.60" }],
      },
      transfer: {
        holdsWhen: [
          "The place you carry the contest into can sustain you, and the people there have reasons of their own to join you.",
          "Each success is measured by what it brings over to your side, not by the size of the win.",
        ],
        failsWhen: [
          "The plan assumes the opponent will behave as a beaten party should, and the opponent refuses.",
          "Support from home is grudging, so that every loss must be replaced from the ground you stand on.",
        ],
        questions: [
          "If you took the contest onto your competitor’s ground, what would feed you there, and who would join you?",
          "What would your opponent have to do for your strategy to succeed, and what if they simply refuse?",
          "Who pays for your presence in the places you are trying to win?",
        ],
      },
      bearsOn:
        "This is the first evidence for the answer ‘Hannibal’s strategy’, and it is mixed. The invasion achieved what it could control: an army in Italy, fed by Italy, victorious for three years. It depended on two things it could not control, the allies’ choice and Rome’s will to go on, and both went against it, the second most of all. Polybius’s verdict that Hannibal began with the enemy he should have left to last is a judgement on exactly that dependence, and Hanno’s question, as Livy gives it, states it from Carthage.",
      questions: [
        {
          prompt:
            "What did Hannibal inquire into before marching, according to Polybius?",
          choices: [
            "The best pass over the Alps for elephants.",
            "The fertility and population of the Po valley, its men’s bravery and their hatred of Rome.",
            "The strength of Rome’s walls.",
          ],
          answer: 1,
          explanation:
            "Polybius 3.34: the invasion was planned around the Celts as partners.",
        },
        {
          prompt:
            "What did Polybius say about Italian cities before Cannae, despite two Roman defeats?",
          choices: [
            "That most had gone over to Hannibal.",
            "That not one had changed sides, which showed the awe the allies felt for Rome.",
            "That Rome had disbanded its alliances.",
          ],
          answer: 1,
          explanation: "Polybius 3.90, during the campaign in Campania.",
        },
        {
          prompt:
            "Why, in the speech Livy gives him, did Hanno doubt that Cannae had shortened the war?",
          choices: [
            "Because Hannibal had lost too many men.",
            "Because no Roman had asked for peace or even mentioned it.",
            "Because Carthage had no money.",
          ],
          answer: 1,
          explanation:
            "Livy 23.13; the speech is Livy’s composition, given to an opponent of Hannibal’s family.",
        },
      ],
      sourceCheck: {
        question: "Why did Hannibal not march on Rome after Cannae?",
        witnesses: [
          {
            label: "Livy 22.51",
            claim:
              "That day’s delay is believed to have saved the city and the empire.",
          },
          {
            label: "Polybius 3.118",
            claim:
              "Rome expected him at any moment, but its senate kept its head and its constitution brought it through.",
          },
          {
            label: "1911 Britannica, “Hannibal”",
            claim:
              "After Trasimene, without siege engines, he could not hope to take Rome; after Cannae, with proper reinforcements he might have attacked it.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Livy settles it: Hannibal hesitated and lost the war that day.",
            feedback:
              "Livy reports a belief, written two centuries later by a Roman for whom Rome’s survival was the story; it is a verdict, not evidence of what a march could have done.",
          },
          {
            text: "Set the belief against the means: a siege without engines, a senate that kept its head and allies to be won in the south; the choice is defensible, and the strategy’s weakness lay elsewhere.",
            feedback:
              "This judges the choice by what was knowable and keeps Livy’s verdict as evidence of how Romans later saw it.",
            best: true,
          },
          {
            text: "None of them can be used, because they disagree.",
            feedback:
              "Disagreement is the evidence: each witness shows what its writer thought decided the war.",
          },
        ],
        battleSlug: "cannae",
      },
      seminar: {
        prompt:
          "Spring 218, New Carthage. Argue whether Hannibal should invade Italy or wait for Rome in Spain, from three positions: a Celtic chief of the Po valley, a member of the Carthaginian senate, and one of Rome’s Latin colonists.",
        guidance:
          "Use Polybius’s account of Hannibal’s inquiries, the cost of the passes, the first Celtic allies and the silence of the Italian cities before Cannae. Say what each speaker could know in 218, and who would pay for each choice.",
      },
      sources: [
        s.pol3,
        s.livy22,
        s.livy23,
        s.ebHannibal,
        s.pol11,
        s.livy26,
        s.britRussia,
        s.britRetreat,
        s.livy27,
      ],
    },
    {
      slug: "reading-the-consul",
      title: "Reading the consul: knowing the enemy commander",
      part: "Hannibal’s war",
      themes: ["judgement", "adaptation"],
      claim:
        "A commander who studies the opposing general’s character can set traps that general will walk into, but only while the enemy keeps sending the same kind of commander, and only if the reading is of the person in front of him rather than of a reputation.",
      inBrief: {
        strength:
          "Hannibal read Sempronius and Flaminius and drew each into battle on ground of his choosing.",
        shadow:
          "Rome sent Fabius, who would not be drawn, and the portraits of the rash consuls were written by their political enemies.",
      },
      moment: {
        text: "Camped at the edge of the Etrurian marshes in 217, Polybius writes, Hannibal learned that the country ahead promised rich plunder and that the consul Flaminius was a demagogue and a courtier of the mob, with no talent for war and great confidence in himself. He reckoned that if he marched past the Roman army and laid the country waste, Flaminius would not look on for fear of his soldiers’ jeers, and would follow anywhere to win the victory before his colleague arrived. Polybius stops to praise the reasoning: anyone who thinks there is anything more essential to a general than knowing his opponent’s principles and character is ignorant and foolish. As a swordsman looks for the unprotected part of the body, a commander must look for the weak spots in the enemy general’s mind.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.80–81" }],
      },
      episodes: [
        {
          title: "The Trebia: a consul with a deadline",
          text: "In December 218 the consul Sempronius had won a skirmish and wanted a battle. His colleague Scipio, wounded, advised waiting through the winter. Polybius gives Sempronius’s motive as ambition: he wanted to fight before Scipio recovered and before the consuls of the next year took office. Hannibal, Polybius says, knew that Sempronius was sure to be aggressive. Livy adds how he knew: he had heard by report that one consul was impetuous and headstrong, found it confirmed by the skirmish, and sent Gauls, who served in both armies, to see whether the Romans were preparing for battle. The ambush in the stream bed and the Romans drawn across the river before breakfast followed from the reading.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.70–71" },
            { source: 1, locator: "21.53" },
          ],
          battleSlugs: ["trebia"],
        },
        {
          title: "Trasimene: a consul provoked",
          text: "Livy says that after the marshes Hannibal investigated as carefully as he could the consul’s mood and plans, then burned the country within his sight to make his faults show more plainly. Both Polybius and Livy describe Flaminius’s officers urging him to wait for his colleague, and Flaminius asking what Rome would say if the army sat still while Italy burned. Plutarch calls him fiery and ambitious, elated by an earlier victory won against the senate’s wishes. Jona Lendering, writing for Livius, dissents: in his reading Flaminius was too careful to take the bait, followed Hannibal at a distance to avoid his cavalry, and was caught because he did not know exactly where the enemy had gone, marching along the road between the hills and the lake in morning fog.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "22.3" },
            { source: 0, locator: "3.82" },
            { source: 3, locator: "2–3" },
            { source: 4 },
          ],
          battleSlugs: ["lake-trasimene"],
        },
        {
          title: "A commander who would not be drawn",
          text: "Fabius gave Hannibal nothing to read. Livy says Hannibal saw at once that he faced a different kind of commander from Flaminius or Sempronius. So he read the politics around Fabius instead. Plutarch says that when Hannibal reached Fabius’s own estates he had everything around them burned and those alone spared and guarded, to bring more odium on him at Rome, where the tribunes were already denouncing him. Years later, Livy says, Hannibal had the leaders of Metapontum write to Fabius offering to surrender their town, meaning to ambush him on the way; Fabius believed the letter, and was saved, in Livy’s account, by unfavourable omens and by the messengers’ confession.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "22.12" },
            { source: 3, locator: "5, 7" },
            { source: 7, locator: "27.16" },
          ],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "Cannae: a reading and a decision",
          text: "Before Cannae, Livy says, Hannibal knew as much of the Roman camp as of his own: that the consuls quarrelled, that many of the soldiers were recruits, and that a skirmish he had lost would bait Varro into more rashness. Polybius tells it differently. The senate in Rome had already decided to give battle and sent both consuls to do it; at the river, Aemilius wanted to draw the enemy onto ground where infantry would decide, and Varro, through inexperience in Polybius’s word, advanced on his day of command. At Cannae Hannibal’s reading of a consul met a state that had chosen to fight.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "22.41" },
            { source: 0, locator: "3.107, 3.110" },
          ],
          battleSlugs: ["cannae"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek who wrote as the friend of a leading Roman family and for statesmen, and who makes the commander’s study of his enemy a rule of generalship.",
          says: "Flaminius was a demagogue, Varro inexperienced, and the general who sees his opponent’s faults will soonest win.",
          refs: [{ source: 0, locator: "3.80–81, 3.110" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who drew on annalists such as the senator Fabius Pictor, and in whose pages the consuls who defied the senate come off badly; he gives Fabius a speech calling Varro more dangerous than Hannibal, which is Livy’s own composition.",
          says: "Flaminius respected neither gods, senate nor laws; Varro was impetuous and headstrong.",
          refs: [{ source: 2, locator: "22.3, 22.7, 22.39, 22.41" }],
        },
        {
          who: "Plutarch",
          stake:
            "A Greek biographer writing about three centuries later, whose hero is Fabius.",
          says: "Flaminius was fiery and ambitious; of all Fabius’s enemies only Hannibal understood him.",
          refs: [{ source: 3, locator: "2–3, 5" }],
        },
        {
          who: "Jona Lendering",
          stake:
            "A modern historian writing for a general readership, reading the campaign from the ground and the map.",
          says: "Flaminius was too careful to swallow the bait, and was caught by a trap he could not see in the fog.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, Hannibal’s readings were not guesses about temperament alone. Livy has him start from report and wait for behaviour to confirm it; Polybius has him calculate from the consul’s position as well as his character. What he exploited was a feature of the Roman system: consuls served for a year, commanded in turn and answered to citizens watching their fields burn, so that every consul had reasons to fight soon. A commander who reads the institution as well as the man is less likely to be surprised when the man turns out to be careful, as Flaminius may have been.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "21.53" },
            { source: 0, locator: "3.70, 3.82" },
          ],
        },
        {
          text: "The method’s limit was that the enemy could change what there was to read. Rome appointed a dictator after Trasimene, and Fabius refused battle; Hannibal’s answer, to work on Fabius’s critics at home, nearly succeeded, and the critics won in 216. After Cannae Rome did not give him another field army to read on his terms, and this volume’s lesson on the Delayer follows that change. When Tarentum was retaken by a ruse in 209, Livy has Hannibal remark that the Romans too had their Hannibal. The Napoleon volume’s lesson on rivals who learn makes the general point: the side that keeps losing has more reason to study the winner than the winner has to change.",
          evidence: "interpretation",
          refs: [
            { source: 3, locator: "7" },
            { source: 7, locator: "27.16" },
            { source: 0, locator: "3.107" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Reading character from behaviour the situation explains",
          base: "review",
          text: "Gilbert and Malone describe the correspondence bias as the tendency to infer a person’s lasting dispositions from behaviour that the situation could entirely explain, and call its causes poorly understood. The Napoleon volume used the same review to warn against reading genius into a young general’s victories. Here it cuts two ways. Hannibal’s readings worked best when he read the situation too: a consul with a deadline, a consul whose land was burning. And the historians who explain Rome’s defeats by the rashness of Flaminius and Varro may be making the same inference about them, when Polybius himself says the senate had decided to fight at Cannae.",
          evidence: "interpretation",
          refs: [{ source: 5 }, { source: 0, locator: "3.107" }],
          limit:
            "Only the abstract was read. The research concerns modern observers judging other people; it cannot show what Hannibal thought, or whether Flaminius and Varro were in fact rash.",
        },
      ],
      shadow: {
        text: "The lesson rests on portraits that may be politics. Flaminius was a popular consul, as Lendering calls him, who had fought the Gauls against the senate’s wishes in Plutarch’s account, and the writers who call him a demagogue wrote from the senate’s side; Livy’s Varro is drawn in the same colours. Livy’s own Rome treated the defeated Varro better than his history does: it thanked him for not despairing of the republic. A reader who learns from these sources to read an opponent’s character may be learning the historians’ prejudices about men they blamed for disaster.",
        evidence: "interpretation",
        refs: [
          { source: 4 },
          { source: 3, locator: "2" },
          { source: 2, locator: "22.3, 22.61" },
          { source: 0, locator: "3.80" },
        ],
      },
      people: ["quintus-fabius-maximus"],
      counterCase: {
        text: "Marshal Marmont read Wellington at Salamanca in 1812 and was destroyed by the reading. Oman writes that after days of manoeuvre in which the allies had given ground whenever outflanked, Marmont, by his own exculpatory dispatch, was convinced that Wellington would retire again the moment his flank was threatened. He took the shifting of British reserves behind a crest for the start of a retreat and pushed his left forward to catch the rearguard; Jourdan wrote that he extended it much too far. Wellington, Oman says, was still hoping the French would commit themselves to some premature movement, with every man in hand. The Wellington volume’s lesson on the afternoon at Salamanca reads the day from Wellington’s side. Marmont had read a pattern as a character, when the pattern belonged to a situation that Wellington could end whenever the enemy erred.",
        evidence: "interpretation",
        refs: [{ source: 6, locator: "pp. 421–431" }],
        commanderSlug: "auguste-de-marmont",
        battleSlugs: ["salamanca-1812"],
      },
      cost: {
        text: "The men who paid for a consul’s reading were the soldiers in the defile. At Trasimene, Polybius writes, the Romans were attacked from all sides in the mist and cut down in marching order, betrayed, as he puts it, by their commander’s lack of judgement; those driven into the lake stood with only their heads above water and were killed by the cavalry riding in after them. Livy adds that Flaminius was killed by an Insubrian horseman who recognised him as the man who had laid waste his people’s land.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "3.84" },
          { source: 2, locator: "22.6" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people you compete against are chosen by a system that keeps producing the same pressures, and you can see both the person and the pressures.",
          "Reports about a rival’s character are tested against what the rival actually does before anything is staked on them.",
        ],
        failsWhen: [
          "The other side changes who leads it, or how, and the old reading is applied to a new opponent.",
          "The portrait you are working from was drawn by the rival’s own enemies, or by those who need to explain a defeat.",
        ],
        questions: [
          "What do you know about your main rival’s leader that you have checked against behaviour, and what only by report?",
          "Which pressures on that leader, rather than their character, explain what they do?",
          "If they were replaced tomorrow by someone careful, which of your plans would still work?",
        ],
      },
      bearsOn:
        "The lesson tests the volume’s premise that Hannibal was the better tactician. His great victories came from reading Roman commanders and a Roman system that kept giving him commanders under pressure to fight. When Rome changed the system, the reading had less to work on, and the later years in Italy show no battle of the same kind. That strengthens the answer ‘Rome’s system’: the better tactician was beaten partly by an enemy that stopped offering him the battles he was best at. And the portraits of the consuls he beat come from the record, the fourth answer, written by their political opponents.",
      questions: [
        {
          prompt:
            "Why, according to Polybius, did Sempronius want to fight at the Trebia so soon?",
          choices: [
            "Because his army was starving.",
            "Because he wanted the victory for himself before his colleague recovered and the new consuls took office.",
            "Because the senate ordered it.",
          ],
          answer: 1,
          explanation:
            "Polybius 3.70; Hannibal, Polybius says, knew he was sure to be aggressive.",
        },
        {
          prompt:
            "How, according to Plutarch, did Hannibal try to turn Rome against Fabius?",
          choices: [
            "By bribing the tribunes.",
            "By sparing Fabius’s own estates while burning everything around them.",
            "By offering him a separate peace.",
          ],
          answer: 1,
          explanation: "Plutarch, Fabius 7.",
        },
        {
          prompt:
            "What does Polybius say about the decision to fight at Cannae?",
          choices: [
            "That Varro chose battle against the senate’s orders.",
            "That the senate had decided to give battle and sent both consuls to do it.",
            "That Hannibal forced a battle the Romans did not want.",
          ],
          answer: 1,
          explanation:
            "Polybius 3.107; the dispute between the consuls was over where and when, at 3.110.",
        },
      ],
      sourceCheck: {
        question: "Was Flaminius rash?",
        witnesses: [
          {
            label: "Polybius 3.80–82",
            claim:
              "A demagogue with no talent for war, who could not bear to watch the country burn and pursued regardless of time or place.",
          },
          {
            label: "Livy 22.3",
            claim:
              "Overbearing and contemptuous of gods, senate and laws; he overrode his officers and marched.",
          },
          {
            label: "Jona Lendering, Livius",
            claim:
              "Too careful to take the bait; he followed at a distance and was caught in fog without knowing where the enemy was.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Accept the ancient verdict: two independent sources agree.",
            feedback:
              "Polybius and Livy drew on the same Roman tradition, which was hostile to popular consuls; their agreement is weaker than it looks.",
          },
          {
            text: "Treat the portrait as a political judgement to be tested against the movements: he followed, kept his distance and was surprised in fog, which fits caution as well as rashness.",
            feedback:
              "This separates what Flaminius did from what his enemies said he was, and keeps the modern dissent as an interpretation, not a fact.",
            best: true,
          },
          {
            text: "Accept the modern view, because modern historians are neutral.",
            feedback:
              "A modern reading is an argument from the same evidence; it shows the ancient portrait can be questioned, not that it is wrong.",
          },
        ],
        battleSlug: "lake-trasimene",
      },
      seminar: {
        prompt:
          "In the winter of 217 a Carthaginian officer argues that Hannibal’s method of reading consuls has stopped working. Argue the point from three positions: Hannibal’s brother Mago, a Roman tribune attacking Fabius, and a modern historian sceptical of the ancient portraits.",
        guidance:
          "Use the Trebia, Trasimene, the spared estates of Fabius and Cannae. Say in each case whether the reading was of a person, a situation or an institution, and who wrote the portrait being relied on.",
      },
      sources: [
        s.pol3,
        s.livy21,
        s.livy22,
        s.plutarchFabius,
        s.liviusTrasimene,
        s.gilbertMalone,
        s.oman5,
        s.livy27,
      ],
    },
    {
      slug: "the-allies-who-stayed",
      title: "The allies who stayed: breaking a confederacy",
      part: "Hannibal’s war",
      themes: ["judgement", "ethics"],
      claim:
        "A strategy aimed at an enemy’s allies can win what battles cannot, but only if the allies see more to gain from changing sides than to fear from the power they leave, and only while the new protector can defend them when that power returns.",
      inBrief: {
        strength:
          "Hannibal freed allied prisoners, offered liberty on generous terms and won Capua, Tarentum and much of the south.",
        shadow:
          "He could not protect them: Capua and Tarentum were retaken and punished, and Rome’s colonies held.",
      },
      moment: {
        text: "In the winter after the Trebia, Polybius writes, Hannibal kept his Roman prisoners on short rations but treated the prisoners from Rome’s allies with the greatest kindness. He called them together and told them he had come to make war not on them but on the Romans for their sake; he had come to restore the liberty of the peoples of Italy and help them recover the cities and lands Rome had taken. Then he sent them home without ransom, meaning, Polybius says, to win the peoples of Italy over and turn them against Rome. After Trasimene he did the same, telling the freed allies that he was fighting the Romans for the freedom of Italy.",
        evidence: "fact",
        refs: [{ source: 0, locator: "3.77, 3.85" }],
      },
      episodes: [
        {
          title: "Not a single city",
          text: "For two years the offer won nothing south of the Po. Polybius says that after two Roman defeats not one Italian city had revolted, though some suffered greatly, and he takes it as a measure of the awe and respect the allies felt for Rome. Jona Lendering adds that after Trasimene, even when Hannibal had beaten part of the other consul’s army near Assisi, that town refused to surrender. Hannibal’s march into Campania was meant to change that by showing the allies that Rome would not defend them.",
          evidence: "fact",
          refs: [{ source: 0, locator: "3.90" }, { source: 6 }],
          battleSlugs: ["lake-trasimene"],
        },
        {
          title: "Capua’s terms",
          text: "After Cannae the south began to move. Livy lists the peoples who went over, and Capua, in Campania, sent envoys. The terms Livy reports were generous: no Carthaginian officer was to have any authority over a Campanian, no Campanian was to serve against his will, and Capua was to keep its own laws and magistrates. Livy also says what held some Campanians back: families tied to Rome by marriage, and young nobles serving with Roman forces in Sicily. One Capuan, Decius Magius, opposed admitting a Carthaginian garrison. Hannibal summoned him; when he refused, Hannibal had the Capuan senate hand him over and sent him in chains to Carthage, in breach, Magius protested, of the treaty’s first term.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "22.61" },
            { source: 2, locator: "23.4, 23.7, 23.10" },
          ],
          battleSlugs: ["cannae"],
        },
        {
          title: "Tarentum",
          text: "Tarentum went over for a reason Rome supplied. Livy says that hostages from Tarentum and Thurii, held loosely in Rome, escaped, were caught and were scourged and thrown from the Rock with the people’s approval, and that the cruelty of it turned the two cities. Young Tarentine nobles met Hannibal and agreed terms: freedom, their own laws, no tribute and no garrison against their will. The city was betrayed to him by night, but the Roman garrison held the citadel. In 209 Fabius retook the city through a Bruttian officer of the garrison, and Livy says that armed and unarmed, Carthaginians, Tarentines and even Bruttians were killed without distinction before the sack.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "25.7–8, 25.10" },
            { source: 5, locator: "27.15–16" },
          ],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "Capua abandoned",
          text: "When Rome besieged Capua in 211, Hannibal tried to draw the besiegers away by marching on Rome itself. Livy says that one proconsul brought part of his army to the city, but the siege went on unrelaxed, and that Hannibal then went south towards Regium. The Capuans learned from the Romans across the lines that they had been left to themselves. A dispatch from the Carthaginian garrison commanders, intercepted by the Romans, charged Hannibal with surrendering the city to the enemy: the Romans, it said, could not be drawn off Capua even by a threat to their own city, so much more determined were they as enemies than the Carthaginians as friends.",
          evidence: "fact",
          refs: [{ source: 4, locator: "26.10, 26.12" }],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek admirer of the Roman constitution, writing two generations later.",
          says: "The allies held after two defeats out of awe and respect for the Roman state.",
          refs: [{ source: 0, locator: "3.90" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who writes the defectors as morally corrupt and commends their punishment.",
          says: "Capua was demoralised by luxury and a licentious populace; its punishment was a policy that commended itself from every point of view.",
          refs: [
            { source: 2, locator: "23.2–4" },
            { source: 4, locator: "26.16" },
          ],
        },
        {
          who: "Hannibal, as Livy reports him",
          stake:
            "Words given to him by a Roman historian two centuries later, addressed to Roman prisoners after Cannae.",
          says: "He had no deadly feud with Rome; he was fighting for his country’s honour and power.",
          refs: [{ source: 1, locator: "22.58" }],
        },
        {
          who: "Decius Magius, as Livy reports him",
          stake:
            "The Capuan who opposed the defection, remembered in a Roman history as the one loyal man.",
          says: "The Capuans had got the liberty they asked for, and were watching a fellow citizen led off in chains.",
          refs: [{ source: 2, locator: "23.10" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the offer was well made. Freeing allied prisoners cost little and told every town what Hannibal intended; the terms given to Capua and Tarentum were as generous as any ally could ask. But generosity had a price. A city that kept its laws, admitted no garrison against its will and owed no service gave Hannibal territory to defend rather than soldiers to defend it with. The strategy needed allies to replace what Carthage could not send; the terms that won their consent made them least able to do so.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "23.7" },
            { source: 3, locator: "25.8" },
          ],
        },
        {
          text: "The allies’ choice turned on what would happen when Rome came back, and Rome’s system answered that question for them. Its colonies were planted across Italy on land taken from its enemies; when twelve of thirty refused men and money in 209, they still did not go over to Hannibal, and The Delayer reads the cost they complained of. Its punishments were visible: the Tarentine hostages, then Capua. And Hannibal could not be everywhere. Livy’s own conclusion on Capua states the strategic lesson from Rome’s side: the punishment showed the power of Rome to punish the faithless and the powerlessness of Hannibal to protect those who had gone over to him.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "27.9–10" },
            { source: 4, locator: "26.16" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on trust and on when people leave a group exists, but none was read for this lesson, and the sources offer little to apply it to. Livy explains Capua’s defection by luxury and the mob, and Tarentum’s recapture by a soldier’s love affair; these are a moralist’s explanations, not evidence of motive. What the documents do show is calculation: the terms each city demanded, the ties that held others back, and what each feared from Rome’s return.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. The Italian cities’ own deliberations survive only in Roman retellings.",
        },
      ],
      shadow: {
        text: "The allies who changed sides paid most. At Capua, Livy says, the leading men were executed or imprisoned, the people sold into slavery, and the city left standing only as a shelter for farmers, with no senate, no assembly and no magistrates of its own, its justice given by an officer sent each year from Rome. When Hannibal left Italy, Appian says, the senate pardoned the Italians who had sided with him, except the Bruttians, who had stayed loyal to him longest; they lost much of their land and their arms and were made to serve Roman magistrates as attendants. Hannibal’s promise of liberty ended, for those who believed it longest, in the loss of the liberty they had had.",
        evidence: "fact",
        refs: [
          { source: 4, locator: "26.16" },
          { source: 8, locator: "61" },
        ],
      },
      counterCase: {
        text: "Caesar shows the strategy working where its conditions held. In 57 BCE, by his own account, the Remi, the Belgic people nearest Gaul, came over to him unasked, gave hostages and corn, and told him everything about the Belgic coalition, though their own kinsmen the Suessiones had joined it. When the Belgae attacked the Remian town of Bibrax, Caesar sent archers and slingers in that same night, and the town held. The coalition broke up when its members went home to defend their own lands; and when the Suessiones surrendered, it was the Remi who interceded for them and won them terms. The Caesar volume’s lesson on Gaul divided reads the Aedui, the other side of the same method. The Remi changed sides because Caesar could protect them at once and raise them above their kin; Capua changed sides on terms no one could enforce.",
        evidence: "interpretation",
        refs: [{ source: 7, locator: "2.3–12" }],
        commanderSlug: "julius-caesar",
        battleSlugs: [],
      },
      cost: {
        text: "The violence went both ways. When Capua went over, Livy says, the populace seized Roman officers and citizens in the city and shut them in the baths, where they died from the heat and fumes. When Tarentum was retaken, the killing was indiscriminate and the city was sacked; even men of the Bruttian garrison, which had let the Romans in, were killed, by mistake, from old hatred, or, Livy suggests, to hide that the city had been betrayed. The peoples of the south were fought over by both sides, and each side’s historians record the other’s cruelty most fully.",
        evidence: "fact",
        refs: [
          { source: 2, locator: "23.7" },
          { source: 5, locator: "27.16" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The people you hope to win over have grievances of their own against the side they would leave, and you can protect them once they move.",
          "What you offer them can be enforced, by you or by them.",
        ],
        failsWhen: [
          "The terms that win consent leave the new allies unable or unwilling to help you.",
          "The other side is visibly able to return and punish, and you cannot be everywhere at once.",
        ],
        questions: [
          "If a partner of your competitor came over to you, could you protect them when the competitor retaliated?",
          "What are you offering that wins agreement but gives you nothing you need?",
          "What is the other side doing, harshly or generously, that decides your prospects more than your own offer does?",
        ],
      },
      bearsOn:
        "The allies are where the first two answers meet. Hannibal’s strategy depended on them, and Rome’s system was built to keep them: colonies, intermarriage, citizens serving in Rome’s armies, and punishments everyone could see. The evidence favours the system. Most allies stayed for two years without any defeat to excuse it, and those who left found that Hannibal could not shield them. Rome’s own cruelty to the Tarentine hostages shows the system could also push allies away; it survived that mistake, which Hannibal’s strategy needed it to make more often.",
      questions: [
        {
          prompt:
            "What did Hannibal tell the allied prisoners he freed after the Trebia?",
          choices: [
            "That they must join his army.",
            "That he had come to make war on Rome for their sake and to restore the liberty of the peoples of Italy.",
            "That Carthage would rule Italy.",
          ],
          answer: 1,
          explanation:
            "Polybius 3.77; they were sent home without ransom to win their peoples over.",
        },
        {
          prompt: "What, according to Livy, turned Tarentum against Rome?",
          choices: [
            "A Roman defeat at sea.",
            "The scourging and execution of Tarentine hostages who had escaped from Rome.",
            "A famine.",
          ],
          answer: 1,
          explanation:
            "Livy 25.7–8: the cruelty of the punishment caused bitter resentment.",
        },
        {
          prompt:
            "How did Caesar keep the Remi, by his own account, when the Belgae attacked them?",
          choices: [
            "He paid them a subsidy.",
            "He sent troops to their town of Bibrax that same night, and it held.",
            "He told them to make peace with the Belgae.",
          ],
          answer: 1,
          explanation: "Caesar, Gallic War 2.6–7.",
        },
      ],
      sourceCheck: {
        question: "Why did Capua go over to Hannibal?",
        witnesses: [
          {
            label: "Livy 23.2–4",
            claim:
              "The city was corrupted by prosperity, its senate cowed and its populace unrestrained; after Cannae it despised Rome’s power.",
          },
          {
            label: "Livy 23.7",
            claim:
              "It negotiated terms: its own laws and magistrates, no Carthaginian authority, no service against its will.",
          },
          {
            label: "Polybius 3.118",
            claim:
              "After Cannae some Campanian towns invited Hannibal, and all eyes turned to the Carthaginians.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Livy explains it: a corrupt city made a corrupt choice.",
            feedback:
              "Livy’s moral portrait is written by the side that punished Capua; it explains nothing that the terms do not explain better.",
          },
          {
            text: "Read the terms as the evidence of motive: after Cannae Capua expected Rome to lose and bargained for its independence, and the moral portrait is Livy’s judgement on that bargain.",
            feedback:
              "This uses what Capua demanded as the best surviving trace of its reasoning, and keeps Livy’s verdict as evidence of how Rome saw it.",
            best: true,
          },
          {
            text: "No reason can be known, so the defection tells us nothing.",
            feedback:
              "The terms and the timing are evidence even without a Capuan account.",
          },
        ],
        campaignSlug: "hannibal-s-italian-campaign",
      },
      seminar: {
        prompt:
          "Capua, summer 216, after Cannae. The senate debates whether to send envoys to Hannibal. Argue from three positions: Pacuvius Calavius, Decius Magius, and a Capuan noble whose son is serving with the Romans in Sicily.",
        guidance:
          "Use Hannibal’s treatment of allied prisoners, the silence of the cities before Cannae, Capua’s terms and Tarentum’s grievance. Say what each speaker could know in 216 about what Rome would do if it returned.",
      },
      sources: [
        s.pol3,
        s.livy22,
        s.livy23,
        s.livy25,
        s.livy26,
        s.livy27,
        s.liviusTrasimene,
        s.caesarGallic2,
        s.appianHannibal12,
      ],
    },
    {
      slug: "an-army-of-many-peoples",
      title: "An army of many peoples: holding a coalition far from home",
      part: "Hannibal’s war",
      themes: ["organisation", "motivation"],
      claim:
        "A commander can hold an army of many peoples together without a state behind it, but only while he can feed it, pay it and lead it to victory, and only at the cost of the country it lives on.",
      inBrief: {
        strength:
          "No source records a mutiny in Hannibal’s army in all its years in Italy, even after its defeats.",
        shadow:
          "It lived off Italy, and the army he led at Zama, most of it new to him, broke apart along its lines of language and pay.",
      },
      moment: {
        text: "After the Metaurus, Livy writes, no battle was fought with Hannibal that year; he made no move, and the Romans did not care to disturb him. Livy stops to admire him more in adversity than in success. For thirteen years he had made war in an enemy’s country far from home, with an army that was not of his own people but a mixture of nations with nothing in common, neither laws, customs nor language, who differed in dress, arms and even gods. Yet no disturbance broke out among them or against him, though money and supplies often ran short, and want of them had caused disgraceful scenes between generals and soldiers in the first war with Rome. Now he withdrew into Bruttium, which could barely feed his army, and Carthage sent him nothing.",
        evidence: "fact",
        refs: [{ source: 0, locator: "28.12" }],
      },
      episodes: [
        {
          title: "Placed so they could not turn back",
          text: "Hannibal managed his army’s differences openly. On the march through the Arno marshes in 217, Polybius says, he put the Africans and Spaniards in front with the baggage, the Celts behind them and the cavalry under his brother Mago at the rear, chiefly because the Celts were soft and averse to labour and might try to turn back; the cavalry was there to stop them. The Celts suffered most and lost most. The same winter, Polybius says, Hannibal had wigs made for different ages and changed them constantly, because he feared the fickleness of his new Celtic allies and attempts on his life.",
          evidence: "fact",
          refs: [{ source: 1, locator: "3.78–79" }],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "Recruited by victory",
          text: "The army grew by winning. After the Ticinus the Celtic contingents in the Roman army killed the Romans nearest them and came over, and Hannibal sent them home to bring their peoples in. At Trasimene, Livy says, the consul was killed by an Insubrian horseman who recognised him as the man who had laid waste his people’s land: the Celts fought Hannibal’s war for grievances of their own. The 1911 Britannica sums up what the record implies: as his veterans melted away he had to raise fresh levies where he was, and yet we never hear of a mutiny.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "3.67" },
            { source: 11, locator: "22.6" },
            { source: 7 },
          ],
          battleSlugs: ["ticinus", "lake-trasimene"],
        },
        {
          title: "Zama: many voices",
          text: "At Zama Hannibal commanded a different army. Polybius describes it in three lines: in front, mercenaries of several peoples, Ligurians, Celts, Balearic islanders and Moors; behind them the African levies and Carthaginians; and at the rear, well apart, the troops he had brought from Italy. Each mercenary commander addressed his own men; Livy says the officers passed Hannibal’s words on through interpreters. Polybius, quoting Homer, says the mercenaries’ war cries were not one voice but many tongues. When the Romans pressed them, the mercenaries thought the Carthaginians behind them had left them in the lurch and turned on them; Hannibal had his rear ranks level their spears to keep the fugitives out of his own line.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "15.11–13" },
            { source: 4, locator: "30.33" },
          ],
          battleSlugs: ["zama"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek who served Rome’s friends and admired Hannibal’s generalship without admiring his choice of enemy.",
          says: "The ability of the commander made men of different races give ear to a single word of command for sixteen years.",
          refs: [{ source: 2, locator: "11.19" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who follows Polybius in admiration, but also gives a Roman consul a speech describing Hannibal’s army as savages from the ends of the earth taught to eat human flesh, which is Livy’s composition.",
          says: "No disturbance ever broke out in the army, though pay and supplies were often lacking.",
          refs: [
            { source: 0, locator: "28.12" },
            { source: 5, locator: "23.5" },
          ],
        },
        {
          who: "Appian",
          stake:
            "A Greek writing in the second century CE; Jona Lendering notes that his books on Hannibal add little to Polybius and Livy.",
          says: "Hannibal used his allies from necessity, not good will, and treated them as enemies when they were of no further use.",
          refs: [{ source: 6, locator: "59–60" }],
        },
        {
          who: "The 1911 Britannica (M. O. B. Caspari)",
          stake:
            "A modern classical scholar who says plainly that almost all that is known of Hannibal comes from hostile sources.",
          says: "We never hear of a mutiny, though the army was made of Africans, Spaniards and Gauls and Carthage gave grudging support.",
          refs: [{ source: 7 }],
        },
      ],
      strategist: [
        {
          text: "The Alexander volume’s lesson on Opis sets Polybius’s admiration beside an army that had one founding people to offend; this lesson asks what held an army that had none. The sources show four means. Placement, which put the doubtful where they could not run and the reliable where the danger was. Pay and plunder: Polybius says the Celts wanted to invade Roman land chiefly for booty, and Livy has Hannibal promise his auxiliaries pay and booty at Zama. Victory, which brought recruits. And the commander himself, present through every year of it. Each had its limit. Placement works only in battle; plunder requires country still worth taking; victory stopped after Cannae.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "3.78–79" },
            { source: 4, locator: "30.33" },
            { source: 2, locator: "11.19" },
          ],
        },
        {
          text: "Without a state that reinforced it, the army’s cohesion depended on its own history. The army in Italy had shared one for years; the army at Zama had not. Livy says Scipio himself acknowledged the skill of Hannibal’s order there, and explains it as an answer to troops he could not trust: mercenaries in front, held by pay and not loyalty, and Italians at the rear because he doubted them. Scipio had faced the same problem at Ilipa, where Polybius says he dared not rely on his Spanish allies in a decisive battle and used them for show while his legions fought. Both commanders put the men they doubted where their doubts would cost least. Hannibal at Zama had more of them.",
          evidence: "interpretation",
          refs: [
            { source: 4, locator: "30.35" },
            { source: 2, locator: "11.20" },
            { source: 3, locator: "15.11" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Diversity with no simple rule",
          base: "review",
          text: "Van Knippenberg and Schippers, reviewing research on work-group diversity, report that differences between members can affect a group’s process and performance positively as well as negatively, that much remains unclear, and that more attention is needed to the processes behind the effects and the conditions on which they depend. That is a caution, not a mechanism. It warns against two easy readings of this lesson: that an army of many peoples was bound to fall apart, and that Hannibal’s genius alone held it together. The sources point to conditions, placement, pay, victory and a long shared history, which is the kind of contingency the review says matters.",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "Only the abstract was read. The research concerns modern workplace groups, not armies, and the absence of mutiny in Hannibal’s army is known from the silence of hostile sources.",
        },
      ],
      shadow: {
        text: "The army that held together lived on Italy, and its leaving was brutal in the accounts that survive. When Carthage recalled him, Livy says, Italians in the army who refused to follow took refuge in the temple of Juno Lacinia and were murdered within the sacred precinct. Appian tells it differently: Hannibal gathered those who meant to stay, had his soldiers choose some of them as slaves, and had the rest killed so that Rome could not use them. Both writers were hostile, and their versions disagree; neither can be checked against Polybius, whose account of the departure was not read for this volume. Appian adds that before he sailed Hannibal had the towns still allied to him plundered.",
        evidence: "uncertainty",
        refs: [
          { source: 4, locator: "30.20" },
          { source: 6, locator: "58–59" },
        ],
      },
      counterCase: {
        text: "Napoleon’s army of 1812 shows a coalition army failing when victory stopped. Britannica says that fewer than half of those who entered Russia were French, and that the non-French contingents were given secondary tasks; Austria and Prussia, which supplied two of them, told the Tsar beforehand that they would make no serious effort. After the retreat the contingents went home with their governments. The commander of the Prussian contingent, Yorck, signed his own convention of neutrality with the Russians at Tauroggen; Schwarzenberg signed an armistice and withdrew the Austrians; and the Poles offered no resistance to the Russian advance. The Wellington volume’s lesson on allies he could not command shows the opposite case, an allied army held because its commander could see it, train it and place it inside his own divisions. Napoleon’s contingents had governments to recall them. Hannibal’s men had nowhere to go but with him, which may explain as much as his ability.",
        evidence: "interpretation",
        refs: [{ source: 9 }, { source: 10 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: [],
      },
      cost: {
        text: "The men of many peoples died for causes not their own as well as for their own. In the marshes the Celts, placed where they could not turn back, suffered and lost most. At Zama, Polybius writes, the mercenaries, believing themselves abandoned, fell on the Carthaginians, who were forced to fight both them and the Romans, and many of both were cut down where they stood. Their names are not recorded.",
        evidence: "fact",
        refs: [
          { source: 1, locator: "3.79" },
          { source: 3, locator: "15.13" },
        ],
      },
      transfer: {
        holdsWhen: [
          "People from different backgrounds share a long history of success together, and their leader can still feed and pay them.",
          "Each group’s doubts are known and the leader places people where those doubts cost least.",
        ],
        failsWhen: [
          "Success stops and each group has somewhere else to go, a government, an employer or a home.",
          "A new group is assembled quickly from strangers and expected to hold like the old one.",
        ],
        questions: [
          "What holds your most varied team together: shared history, pay, success, or you?",
          "If success stopped for a year, who would leave first, and where would they go?",
          "Who outside your team pays for keeping it together?",
        ],
      },
      bearsOn:
        "This lesson strengthens the premise and narrows the first answer. The army in Italy did not fail Hannibal; it held through defeat and want, and the sources, all hostile, record no mutiny. What failed was what it depended on: Carthage, which, Livy says, was more concerned to keep Spain than to help him, and a war that stopped giving it victories. At Zama Hannibal fought with an army he had not made, and it came apart along the lines Polybius admired him for crossing. The better tactician lost partly because he no longer had the instrument he had built.",
      questions: [
        {
          prompt:
            "Why, according to Polybius, did Hannibal put the Celts in the middle of the column through the marshes?",
          choices: [
            "Because they knew the ground.",
            "Because he feared they would turn back, and the cavalry behind them could stop them.",
            "Because they were his best troops.",
          ],
          answer: 1,
          explanation: "Polybius 3.79; the Celts suffered and lost most.",
        },
        {
          prompt:
            "What happened among Hannibal’s troops at Zama, according to Polybius?",
          choices: [
            "The Italian veterans deserted.",
            "The mercenaries, thinking themselves abandoned, turned on the Carthaginians behind them.",
            "The Numidians changed sides during the battle.",
          ],
          answer: 1,
          explanation:
            "Polybius 15.13; Hannibal kept the fugitives out of his rear line with levelled spears.",
        },
        {
          prompt:
            "What happened to the Prussian and Austrian contingents of Napoleon’s army after the retreat from Moscow?",
          choices: [
            "They fought on to Leipzig as French allies.",
            "Yorck signed a convention of neutrality and Schwarzenberg an armistice, and both withdrew.",
            "They were disbanded by Napoleon.",
          ],
          answer: 1,
          explanation:
            "Britannica, ‘The retreat from Moscow’: the contingents followed their governments, not the commander.",
        },
      ],
      sourceCheck: {
        question: "Who stood in Hannibal’s third line at Zama?",
        witnesses: [
          {
            label: "Polybius 15.11",
            claim:
              "The troops he had brought from Italy, whom he urged to remember their comradeship of seventeen years.",
          },
          {
            label: "Livy 30.33, 30.35",
            claim:
              "Mainly Bruttians who had followed him from necessity rather than will; he doubted whether they would be friends or foes and kept them at the rear.",
          },
          {
            label: "Appian, War against Hannibal 59",
            claim:
              "Before sailing he took the Italians who would follow him and had many of those who would not killed.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Follow Polybius: they were his veterans, and the rear was a place of honour.",
            feedback:
              "Polybius is the earliest witness, but the speech about comradeship is his composition; it shows how he understood the line, not who was in it.",
          },
          {
            text: "Both can be true: veterans of Italy, many of them Italians whose loyalty after the departure was uncertain. The disagreement is about trust, and Livy’s and Appian’s hostile accounts of the departure explain why it was in doubt.",
            feedback:
              "This keeps both witnesses and asks what each emphasised; the rear line could be both a reserve and a precaution.",
            best: true,
          },
          {
            text: "Follow Livy: the army from Italy was unreliable throughout.",
            feedback:
              "Livy himself says no disturbance ever broke out in the army in Italy; his doubt is about the Italians at Zama, not the whole army.",
          },
        ],
        battleSlug: "zama",
      },
      seminar: {
        prompt:
          "Bruttium, 205. Hannibal’s army has held for years without a mutiny, and no help is coming. Argue what holds it together, from three positions: a Spanish veteran who crossed the Alps, a Bruttian recruited in Italy, and a Carthaginian senator deciding whether to send reinforcements to Italy or to Spain.",
        guidance:
          "Use Polybius 11.19 and Livy 28.12, the marsh march, the Celtic recruits after the Ticinus, and the order at Zama. Say what each speaker gains from staying, and where else each could go.",
      },
      sources: [
        s.livy28,
        s.pol3,
        s.pol11,
        s.pol15,
        s.livy30,
        s.livy23,
        s.appianHannibal12,
        s.ebHannibal,
        s.vanKnippenberg,
        s.britRussia,
        s.britRetreat,
        s.livy22,
      ],
    },
    {
      slug: "the-delayer",
      title: "The Delayer: refusing battle against a better general",
      part: "Hannibal’s war",
      themes: ["restraint", "judgement"],
      claim:
        "Refusing battle against a stronger field commander can win a war, but only while the state can bear the cost of delay and the commander can bear the contempt of his own side.",
      inBrief: {
        strength:
          "Fabius kept a beaten army in being and fought where Rome was strong: supplies, men and time.",
        shadow:
          "The countryside burned while he waited, and his caution later turned against the strategy that ended the war.",
      },
      moment: {
        text: "When Fabius arrived with the army Rome had given him after Trasimene, Polybius writes, Hannibal led his forces out and drew them up near the Roman camp to strike a blow that would cow the enemy. Nobody came out. Hannibal waited, then went back to his camp. Livy tells the same scene and adds that Hannibal taunted the Romans as sons of Mars whose spirit was broken, but was in fact anxious, seeing that Rome had found a general of a different kind from Flaminius or Sempronius. In Rome and in Fabius’s own camp, Polybius says, the dictator was at first despised as a coward afraid of battle.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "3.89" },
          { source: 1, locator: "22.12" },
        ],
      },
      episodes: [
        {
          title: "Where Rome was strong",
          text: "Polybius sets out the reasoning he attributes to Fabius. Hannibal’s soldiers had trained in war from youth under a general raised among them, had won many battles and had only one hope of safety, victory; the Roman army was the opposite and would lose a pitched battle. Rome’s advantages lay elsewhere, in inexhaustible supplies of provisions and men. So Fabius marched parallel to the enemy, took the strong positions first, kept his men together with supplies behind them, and picked off foragers who strayed. Plutarch adds that he camped on hills out of reach of the Carthaginian cavalry and came just near enough to make his delays a threat.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.89–90" },
            { source: 2, locator: "5" },
          ],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "The divided command",
          text: "Fabius’s master of horse, Minucius, wanted to fight; Plutarch calls him eager to fight out of season. Commanding his own part of the army, Minucius was drawn into an ambush and his whole force was in danger, until Fabius came up with his own legions and Hannibal, seeing them fresh and in good order, broke off. To those present, Polybius writes, it was evident that all had been lost by Minucius’s rashness and saved, as before, by Fabius’s caution. Plutarch says that of all his enemies only Hannibal understood what Fabius was doing, and therefore tried every trick to force him to fight.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.105" },
            { source: 2, locator: "5" },
          ],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
        {
          title: "After Cannae",
          text: "Fabius’s method was set aside in 216, when Rome sent out a great army to end the war in open battle and lost it at Cannae. Then the system he stood for took over. Polybius says the senate deliberated with manly coolness, and credits Rome’s recovery to its constitution and wise counsel. Livy says that although allies across the south went over to Hannibal, no one in Rome spoke the word peace; the senate refused to ransom the prisoners, and the defeated consul was thanked for not despairing of the republic. The Decision Room exercise ‘After the encirclement’ asks the reader to stand in that senate.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "3.118" },
            { source: 1, locator: "22.58, 22.61" },
          ],
          battleSlugs: ["cannae"],
        },
        {
          title: "The stroke that delay made possible",
          text: "Delay was never the whole of Rome’s answer. In 207, when Hasdrubal brought a second army into Italy, the consul Nero left most of his troops facing Hannibal, marched north in secret to join his colleague and destroyed Hasdrubal on the Metaurus before the brothers could meet. Livy says the city was divided between praising and condemning his daring and waited for the result to judge it, a most unfair way of judging. The armies Fabius had kept in being gave Rome the means for that march; the decision to make it was the opposite of his method.",
          evidence: "interpretation",
          refs: [{ source: 3, locator: "27.43–44" }],
          battleSlugs: ["metaurus"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek admirer of the Roman constitution, writing two generations later, who also judged Hannibal’s choice of enemy a mistake.",
          says: "Fabius’s caution was the most sensible conduct possible, and time proved it.",
          refs: [{ source: 0, locator: "3.89, 3.105" }],
        },
        {
          who: "Ennius, as Livy and Cicero quote him",
          stake:
            "A Roman poet of the war generation, whose verse on Fabius later writers repeated.",
          says: "One man by his slowness restored the state.",
          refs: [
            { source: 4, locator: "30.26" },
            { source: 5, locator: "10" },
          ],
        },
        {
          who: "Plutarch",
          stake:
            "A Greek biographer writing about three centuries later, who admired Fabius and wrote his life as a model of character.",
          says: "His countrymen despised him; Hannibal alone understood him; later his caution turned to jealous opposition of Scipio.",
          refs: [{ source: 2, locator: "5, 25–26" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who writes the war as Rome’s endurance, and who leaves Fabius’s motive open at his death.",
          says: "Whether he was slow by nature or chose slowness for this war is uncertain; that it saved the state is not.",
          refs: [{ source: 4, locator: "30.26" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, Fabius’s choice in 217 rested on a comparison he could make at the time: his army had been beaten twice by an enemy stronger in cavalry and in experience, and Rome could feed and replace its soldiers while Hannibal could not easily do either. What he could not know was whether Rome’s allies would wait as patiently as he did. Polybius’s own account of the Trebia gives Hannibal’s side of the arithmetic: an invader’s only hope lies in keeping his allies’ hopes alive, and an army that does nothing loses them. Fabius’s delay attacked exactly that.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "3.70, 3.89–90" }],
        },
        {
          text: "Delay was a means, and its limits showed quickly. It depended on a dictator’s temporary command and a citizen body willing to watch Italy burn; it lost the argument in 216 and was paid for at Cannae; and it won the war only when joined to strokes Fabius would not have made, Nero’s march and Scipio’s invasion of Africa. Plutarch says that when Scipio proposed Africa, Fabius filled the city with fear and had his forces limited, and that the people thought him jealous. The strategy that saved Rome in 217 had, by 205, become one man’s temperament.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "25–26" },
            { source: 3, locator: "27.43–44" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "It is tempting to explain the contempt Fabius endured, and Minucius’s eagerness, by a general preference for action over waiting. Research on such biases exists, but none was read for this volume, and the sources already give the reasons that mattered: the soldiers’ and citizens’ shame at watching their country burned, and the political cost of looking afraid. The Wellington volume’s lesson on preserving the only army makes the same point about a commander’s need to keep those who can recall him.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered and no study is cited; the lesson relies on what the ancient writers say Fabius’s critics said.",
        },
      ],
      shadow: {
        text: "Delay was paid for by others. While Fabius shadowed him, Hannibal ravaged the fields of Rome’s allies before his eyes, Livy says, precisely to provoke him, as he had burned Etruria to provoke Flaminius. Ten years later the Latin colonies complained that they had been drained by levies and war taxes every year. And the caution that saved Rome in 217 hardened, in Plutarch’s telling, into opposition to the invasion of Africa: he thinks it began in prudence and grew more violent out of rivalry, so that the people thought Fabius jealous of Scipio’s success.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "22.12" },
          { source: 0, locator: "3.82" },
          { source: 3, locator: "27.9" },
          { source: 2, locator: "25" },
        ],
      },
      people: ["quintus-fabius-maximus", "hasdrubal-barca"],
      counterCase: {
        text: "Pompey held the same plan against Caesar in 48 and could not keep it. Plutarch says he feared a battle against Caesar’s veterans and meant to wear them down by delay and want of supplies; after Dyrrhachium his followers, sure of victory, were already canvassing for offices in Rome, and called him Agamemnon and King of Kings, accusing him of prolonging the war to keep his command. Plutarch says that with these speeches they forced him from his settled purpose, a man who was a slave to fame and loath to disappoint his friends, and he fought at Pharsalus. The Caesar volume’s lesson on a rival who knew him reads the battle; the Wellington volume’s on the only army reads Barclay de Tolly’s retreat, which was abandoned for the same reason. Fabius bore the contempt; Pompey could not.",
        evidence: "interpretation",
        refs: [{ source: 6, locator: "66–67" }],
        commanderSlug: "pompey",
        battleSlugs: ["pharsalus"],
      },
      cost: {
        text: "The allies bore the war Fabius chose not to end quickly. In 209, Livy says, the Latin colonies complained that for ten years they had been drained by levies and taxes, that their men enlisted by Rome were as lost to them as prisoners of Hannibal, who at least sent captives home without ransom, while Rome sent its defeated men to Sicily for years. Twelve of the thirty colonies told the consuls they could give no more men or money. The other eighteen held, and Livy names them with praise; the twelve are named too.",
        evidence: "fact",
        refs: [{ source: 3, locator: "27.9–10" }],
      },
      transfer: {
        holdsWhen: [
          "The opponent is stronger in the contest he offers and weaker in the long one, and the leader’s side can outlast him.",
          "Those who can remove the leader accept, or can be made to accept, that waiting is a choice and not a failure.",
        ],
        failsWhen: [
          "The cost of waiting falls on people who will not keep paying it, as the Latin colonies nearly did not.",
          "Delay hardens from a method into a habit and opposes the moment when a bold stroke becomes possible.",
        ],
        questions: [
          "In your situation, where is your opponent strong and where is time on your side?",
          "Who is paying for your patience, and how long will they go on?",
          "When would your own caution stop being a method and start being an obstacle?",
        ],
      },
      bearsOn:
        "Fabius is the first evidence for the second answer, Rome’s system. His delay worked only because Rome could replace armies and its allies, mostly, held; it failed when the state chose battle at Cannae and succeeded when the state chose endurance afterwards. But the system did not win by delay alone: it won by combining delay with strokes that Fabius opposed. The lesson therefore weakens a simple version of the second answer and strengthens a compound one, in which Rome’s endurance gave its bolder commanders time.",
      questions: [
        {
          prompt:
            "Where, according to Polybius, did Fabius think Rome’s advantage lay?",
          choices: [
            "In better cavalry.",
            "In inexhaustible supplies of provisions and men.",
            "In Hannibal’s lack of elephants.",
          ],
          answer: 1,
          explanation:
            "Polybius 3.89: the Carthaginians were better trained and could only win by battle; Rome could outlast them.",
        },
        {
          prompt: "What happened to Minucius when he shared Fabius’s command?",
          choices: [
            "He won a great victory.",
            "He was drawn into an ambush and saved when Fabius came up with his legions.",
            "He was killed at Cannae.",
          ],
          answer: 1,
          explanation:
            "Polybius 3.105: all was lost by Minucius’s rashness and saved by Fabius’s caution, as those present saw.",
        },
        {
          prompt:
            "Why does Plutarch say Pompey abandoned the same plan of delay before Pharsalus?",
          choices: [
            "Because Caesar’s army was growing stronger.",
            "Because his followers’ taunts and expectations forced him from his settled purpose.",
            "Because the senate ordered it.",
          ],
          answer: 1,
          explanation:
            "Plutarch, Pompey 67: a man who was a slave to fame and loath to disappoint his friends.",
        },
      ],
      sourceCheck: {
        question: "Was Fabius’s delay a strategy or a temperament?",
        witnesses: [
          {
            label: "Polybius 3.89–90",
            claim:
              "A reasoned choice: he fell back on the means in which Rome had the advantage.",
          },
          {
            label: "Livy 30.26",
            claim:
              "It may be a question whether he was slow by nature or chose slowness for this war.",
          },
          {
            label: "Plutarch, Fabius 25",
            claim:
              "His opposition to Scipio began in caution and grew violent out of rivalry.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Polybius settles it: it was a strategy.",
            feedback:
              "Polybius gives reasons he attributes to Fabius, written two generations later; he does not report Fabius’s own words.",
          },
          {
            text: "Treat 217 and 205 separately: the evidence supports a reasoned strategy after Trasimene, and Plutarch’s reading of temperament for the opposition to Africa.",
            feedback:
              "The same caution can be a strategy in one situation and a habit in another; Livy’s doubt covers the whole career.",
            best: true,
          },
          {
            text: "Plutarch settles it: it was jealousy throughout.",
            feedback:
              "Plutarch himself says the opposition began in prudence; the jealousy is what the people thought.",
          },
        ],
        battleSlug: "cannae",
      },
      seminar: {
        prompt:
          "In the winter of 217 a senator proposes that Fabius be replaced by a commander who will fight. Argue for and against from three positions: a Roman farmer in Campania, a Latin colonist, and a Carthaginian officer in Hannibal’s camp.",
        guidance:
          "Use Polybius’s account of Fabius’s reasoning, the ravaging of the allies’ land, Minucius’s rescue, and Pompey’s failure to hold the same plan. Say what each speaker could know in 217.",
      },
      sources: [
        s.pol3,
        s.livy22,
        s.plutarchFabius,
        s.livy27,
        s.livy30,
        s.ciceroCato,
        s.plutarchPompey,
      ],
    },
    {
      slug: "the-young-commander",
      title: "The young commander: a command given by an assembly",
      part: "Scipio’s answer",
      themes: ["judgement", "communication"],
      claim:
        "A leader given command young and outside the usual route can act with a freedom older men lack, but only while early success keeps the doubters quiet, and only if the freedom is spent on preparation rather than display.",
      inBrief: {
        strength:
          "Scipio took a command no one else would stand for, kept his plan to one friend, and prepared New Carthage in secret.",
        shadow:
          "He made his men believe the gods were with him, and the belief, by one ancient account, came to hold him too.",
      },
      moment: {
        text: "After Capua fell, Rome turned to Spain, where it had lost both its generals within a month of each other, and the people were left to elect a proconsul. Livy says the consuls hoped that men qualified for so great a command would stand, and none did; the citizens went out to the Campus Martius almost in despair, looking at their leaders, who looked at one another. Then Publius Cornelius Scipio, son of the general who had fallen, a young man barely twenty-four by Livy’s count, stood up on a rise where he could be seen and heard and offered himself. Every century and every voter chose him. When the enthusiasm cooled, Livy writes, there was a sudden silence, as people asked whether affection had got the better of judgement; what worried them most was his youth, and some dreaded the fortune of his house.",
        evidence: "fact",
        refs: [{ source: 0, locator: "26.18" }],
      },
      episodes: [
        {
          title: "An age and a name",
          text: "The witnesses disagree on his age: Livy and Appian make him twenty-four at the election, Polybius twenty-seven when he crossed the Ebro. Appian says the older men called his speech foolhardiness rather than spirit, and that when Scipio offered to yield the command to any elder who wanted it, none came forward. His record was short and told by friends. Polybius has from Laelius the story of the seventeen-year-old saving his father at the Ticinus, and tells how Scipio won the aedileship for himself and his brother by telling his mother he had twice dreamed it, which Polybius explains as a calculation on his popularity. The 1911 Britannica adds that he was present at the Trebia and Cannae.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "26.18" },
            { source: 2, locator: "18" },
            { source: 1, locator: "10.3–6" },
            { source: 4 },
          ],
          battleSlugs: ["ticinus"],
          campaignSlugs: ["scipio-s-spanish-campaign"],
        },
        {
          title: "A plan told to one man",
          text: "The volume’s lesson on learning from the enemy follows the inquiry behind the march on New Carthage; this lesson follows its handling. Polybius says Scipio had decided to do none of the things he had publicly announced, and concealed the plan from everyone except Laelius, who was to bring the fleet. He set aside the course that anyone would expect, an attack on one of the enemy’s field armies, for one that neither his enemies nor his friends foresaw. He also made sure of a way out: if the attempt failed, he could save his army by sea, since he held it, and the enemy armies were too far away to stop him. Polybius adds that Scipio himself, in a letter to Philip of Macedon, explained the siege by these calculations.",
          evidence: "fact",
          refs: [{ source: 1, locator: "10.6, 10.8–9" }],
          battleSlugs: ["new-carthage"],
        },
        {
          title: "Three readings of a religion",
          text: "The orientation of this volume reads the tide at New Carthage; the larger question is how Scipio used belief. Polybius’s answer is policy: like Lycurgus, Scipio saw that most men will not face great risks without hope of divine help, and made his soldiers believe his projects were inspired. Livy leaves it open: Scipio never undertook important business without first sitting alone in the temple on the Capitol, and he neither denied nor admitted the story that he had been fathered by a serpent, whether he was open to such beliefs or used them to have his orders obeyed. Appian says that after New Carthage he began to think himself divinely inspired, and said so for the rest of his life. The 1911 Britannica thinks it quite possible that he honestly shared the belief.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "10.2, 10.5" },
            { source: 0, locator: "26.19" },
            { source: 3, locator: "23" },
            { source: 4 },
          ],
          battleSlugs: ["new-carthage"],
        },
        {
          title: "The workshop of war",
          text: "After the capture Scipio sent Laelius to Rome at once with the news and the most distinguished prisoners because, Polybius says, the Romans had regarded Spain as desperate, and he knew the news would make them support him harder. Then he stayed to train. Polybius and Livy give the same cycle of days: a run in armour, a day for arms, a day of rest, then mock fighting with blunted weapons, while the fleet practised at sea and Scipio visited the workshops daily. Polybius borrows Xenophon’s phrase for the town: a workshop of war. The Carthaginian generals, Livy says, told people that a young swaggerer had stolen one city by a trick and would soon be reminded of his family’s deaths; among themselves they knew how much they had lost.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "10.19–20" },
            { source: 0, locator: "26.51" },
          ],
          battleSlugs: ["new-carthage"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek who drew his picture of Scipio from Laelius, Scipio’s lifelong friend, and wrote to correct those who credited him to fortune.",
          says: "Everything Scipio did was done by calculation; those who see the gods and fortune in it cannot see causes.",
          refs: [{ source: 1, locator: "10.2, 10.5, 10.9" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who admired Scipio and was willing to say that part of what he admired was performance.",
          says: "Scipio won admiration by his real qualities and by his skill in displaying them; some of his traits were genuine and some studied acting.",
          refs: [{ source: 0, locator: "26.19" }],
        },
        {
          who: "Appian",
          stake:
            "A Greek of the second century CE, writing from earlier histories without naming them.",
          says: "He spoke at his election like one possessed, and after New Carthage came to believe in his own inspiration.",
          refs: [
            { source: 2, locator: "18–19" },
            { source: 3, locator: "23" },
          ],
        },
        {
          who: "The 1911 Britannica",
          stake:
            "A modern reference that admires Scipio as one of Rome’s greatest generals.",
          says: "He was elected unanimously for his noble demeanour and enthusiastic language, and may honestly have believed he was favoured by the gods; to his political opponents he was often harsh and arrogant.",
          refs: [{ source: 4 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, Scipio’s youth gave him one freedom older men lacked: no method of his own to defend. A commander with a reputation built on battles would have looked for a battle; Scipio, by Polybius’s account, chose a target nobody was guarding and kept the choice to himself. The assembly’s unanimity gave him political cover, but not resources: Appian says he was not allowed a larger force while Hannibal was in Italy. He spent his freedom on preparation, a winter of inquiry, secrecy, a fallback by sea and drill afterwards. The Alexander volume’s lesson on a borrowed army shows a young commander, and Hannibal himself, taking over an army that already knew how to win; Scipio took over a beaten one, and his first act was to give it a success.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "10.6, 10.8, 10.20" },
            { source: 2, locator: "18" },
          ],
        },
        {
          text: "Early success was political capital, and Scipio spent it as fast as he earned it. Laelius was sent to Rome before the army had finished training. Later the bill came in. In the speech Livy gives Fabius against the invasion of Africa, which is Livy’s composition, the charges are those a young commander’s freedom invites: that he let Hasdrubal Barca slip out of Spain to Italy, and that he crossed to Africa to visit King Syphax, leaving his province and army without authority. A commander chosen because no one else would stand has to keep winning, because his authority rests on the doubters’ silence.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "10.19" },
            { source: 6, locator: "28.42" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on age and leadership, or on how leaders use followers’ beliefs, was not read for this lesson. The evidence is also unusually shaped. Scipio wrote memoirs in Greek, the Britannica says, and they are lost; what survives is the picture of his friend Laelius as Polybius used it, Livy’s admiring scepticism and Appian’s later account. Three writers read the same behaviour as policy, as performance and as belief, and none of them could see inside him.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. What Scipio believed about the gods cannot be known; the lesson reports what each witness thought.",
        },
      ],
      shadow: {
        text: "Polybius praises Scipio for making his men believe his projects were divinely inspired so that they would face greater dangers; at New Carthage that belief sent them wading across a lagoon to the walls. The admiring reading is that he managed fear with faith. The less admiring one is in Appian, who says the success persuaded him too, and in Livy, who says that after Spain his thirst for lasting renown was insatiable and that he already saw Africa as the crown of his glory. A young commander’s freedom, used well, can harden into a conviction of being chosen.",
        evidence: "interpretation",
        refs: [
          { source: 1, locator: "10.2, 10.14" },
          { source: 3, locator: "23" },
          { source: 6, locator: "28.17" },
        ],
        battleSlugs: ["new-carthage"],
      },
      counterCase: {
        text: "Pompey shows the same freedom failing in the same country. Plutarch says that at twenty-three, appointed general by nobody, he raised legions in Picenum on his own authority, won a series of fights and was saluted as imperator by Sulla himself. Later he kept his army under arms near Rome until the senate gave him the command against Sertorius in Spain. There the young commander met an enemy he could not out-calculate. At Lauron, thinking he had Sertorius surrounded, he found himself enveloped and had to watch the town burn; at the Sucro he hurried into battle late in the day so as not to share the victory with Metellus, and escaped only by abandoning his horse. Short of money, he wrote to the senate threatening to bring his army back to Italy unless it was sent. Scipio’s youth was spent on preparation; Pompey’s, in Spain, on haste for a victory of his own.",
        evidence: "interpretation",
        refs: [{ source: 5, locator: "6–8, 17–20" }],
        commanderSlug: "pompey",
        battleSlugs: [],
      },
      cost: {
        text: "The success that made Scipio’s name was paid for by the people of New Carthage. The orientation of this volume quotes Polybius on the killing in the streets. Of those who survived, Polybius says, the citizens were sent home, but the craftsmen were made public slaves of Rome, promised freedom only if they worked well until Carthage was beaten, and the strongest of the young prisoners were put to the oars of the fleet on the same promise.",
        evidence: "fact",
        refs: [{ source: 1, locator: "10.17" }],
      },
      transfer: {
        holdsWhen: [
          "No one more senior will take the task, so that the newcomer’s authority comes from the choice itself.",
          "The leader uses the absence of a reputation to choose the unexpected course, and prepares it quietly.",
        ],
        failsWhen: [
          "The newcomer needs a victory of their own and hurries to get it.",
          "Early success is taken as proof of being chosen, and the leader stops checking the calculation.",
        ],
        questions: [
          "If you were given a role no one else wanted, what would you do that someone with a reputation to protect could not?",
          "Who is waiting for your first mistake, and what would buy their silence for another year?",
          "Which of your colleagues’ beliefs are you using to get them to take risks, and would you say so aloud?",
        ],
      },
      bearsOn:
        "This lesson begins the evidence for the third answer, Scipio’s command, and complicates it at once. The young commander’s first victory came from calculation, secrecy and preparation, not luck, as Polybius insists. But he was the choice of a Roman assembly in a crisis, and his freedom was a gift of Rome’s system as much as of his talent: a state that could put a twenty-four-year-old in charge of a lost province, and then let him prepare. The record that describes his calculation comes from his friend.",
      questions: [
        {
          prompt:
            "Why, according to Livy, was Scipio elected to the Spanish command?",
          choices: [
            "The senate appointed him over several rivals.",
            "No other candidate stood, and when he offered himself every century voted for him.",
            "His father had named him as successor.",
          ],
          answer: 1,
          explanation:
            "Livy 26.18; the doubts about his youth came after the vote.",
        },
        {
          prompt: "How does Polybius explain Scipio’s claims of divine help?",
          choices: [
            "As genuine visions.",
            "As policy: like Lycurgus, he made his men believe his plans were inspired so that they would face danger.",
            "As inventions of later writers.",
          ],
          answer: 1,
          explanation:
            "Polybius 10.2 and 10.5; Livy leaves the question open and Appian thinks he came to believe it.",
        },
        {
          prompt:
            "What happened when the young Pompey, by Plutarch’s account, hurried to fight Sertorius at the Sucro?",
          choices: [
            "He won a complete victory.",
            "The battle was indecisive, his own wing was routed and he escaped by abandoning his horse.",
            "He refused battle.",
          ],
          answer: 1,
          explanation:
            "Plutarch, Pompey 19: he wanted the victory before Metellus arrived.",
        },
      ],
      sourceCheck: {
        question: "How old was Scipio when he took command in Spain?",
        witnesses: [
          {
            label: "Livy 26.18",
            claim: "Barely twenty-four at the election.",
          },
          {
            label: "Appian, Spanish Wars 18",
            claim: "Only twenty-four years of age.",
          },
          {
            label: "Polybius 10.6",
            claim:
              "Twenty-seven when he crossed the Ebro to march on New Carthage.",
          },
        ],
        prompt: "How should a reader handle the disagreement?",
        options: [
          {
            text: "Take the majority: two witnesses say twenty-four.",
            feedback:
              "Appian wrote centuries later and may follow the same tradition as Livy; agreement is not independence.",
          },
          {
            text: "Give both and say what depends on the difference: very young either way, and the lesson’s argument does not need a precise age.",
            feedback:
              "This keeps the dispute visible and avoids building an argument on a number the sources do not settle.",
            best: true,
          },
          {
            text: "Follow Polybius alone, because he is earliest.",
            feedback:
              "Polybius is earliest, but even he dates the age to a different moment, the crossing of the Ebro, not the election.",
          },
        ],
        campaignSlug: "scipio-s-spanish-campaign",
      },
      seminar: {
        prompt:
          "Rome, after the fall of Capua. The assembly has just elected Scipio, and the silence has set in. Argue whether the vote should stand, from three positions: a senator who served at Cannae, a veteran of the Scipios’ army in Spain, and a Spanish prince whose family is held hostage at New Carthage.",
        guidance:
          "Use Livy on the election, Appian on the elders’ objection, Polybius on Scipio’s plan and his use of belief, and Pompey’s youth in Spain. Say what each speaker could know on the day of the vote.",
      },
      sources: [
        s.livy26,
        s.pol10,
        s.appianSpain4,
        s.appianSpain5,
        s.ebScipio,
        s.plutarchPompey,
        s.livy28,
      ],
    },
    {
      slug: "learning-from-the-enemy",
      title: "Learning from the enemy: Scipio in Spain",
      part: "Scipio’s answer",
      themes: ["adaptation", "judgement"],
      claim:
        "A commander who studies why his own side was beaten, and what the enemy does by habit, can turn the enemy’s methods against him, but only while his army can be trained to new movements and the enemy does not learn as fast.",
      inBrief: {
        strength:
          "Scipio studied his father’s defeat and the enemy’s routine, and beat the Carthaginians in Spain with both.",
        shadow:
          "No ancient writer says he learned from Hannibal, and his caution at Baecula let Hasdrubal march for Italy.",
      },
      moment: {
        text: "Polybius begins Scipio’s Spanish command with an act of study. Before leaving Rome, he writes, Scipio had learned by careful inquiry that his father and uncle had been destroyed by the treachery of their Celtiberian allies and the separation of the two Roman armies, and concluded that this was the cause of the defeat. In Spain he inquired from everyone about the enemy and learned that the three Carthaginian armies were far apart, none within ten days’ march of New Carthage, and their commanders on bad terms. To attack one army risked being caught by the others, as his father had been. He chose the enemy’s base instead.",
        evidence: "fact",
        refs: [{ source: 0, locator: "10.7–8" }],
      },
      episodes: [
        {
          title: "A defeat studied",
          text: "In the speech Polybius gives him on crossing the Ebro, Scipio tells his soldiers that the Romans were beaten not by Carthaginian courage but by the treachery of the Celtiberians and by rashness, the generals cut off from each other through trusting that alliance; now both weaknesses were the enemy’s, divided and hated by their subjects. The speech is Polybius’s composition, but the plan that followed matched it: the march on New Carthage, the enemy’s arsenal, guarded by a small garrison because no one thought it threatened.",
          evidence: "fact",
          refs: [{ source: 0, locator: "10.6–8" }],
          battleSlugs: ["new-carthage"],
        },
        {
          title: "Baecula",
          text: "Against Hasdrubal Barca’s strong position near Baecula, Scipio sent light troops at the covering force on the ridge and, when Hasdrubal began to lead his army out, took half his army round one flank and gave Laelius the other half to go round the other, catching the Carthaginians while they were still forming. He did not pursue Hasdrubal, Polybius says, for fear of being attacked by the other generals; Livy says some of his council urged pursuit. Fear of being caught between armies, the lesson of his father’s death, governed the choice.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "10.38–39" },
            { source: 1, locator: "27.20" },
          ],
          battleSlugs: ["baecula"],
        },
        {
          title: "Ilipa and the Trebia",
          text: "At Ilipa, after days in which both armies formed late in the same order, Scipio had his men fed and armed before dawn, attacked the Carthaginian camp at first light, and formed his line in reverse, Spaniards in the centre and Romans on the wings, so that Hasdrubal, son of Gisco, had to form his army unfed and by habit. Livy says Scipio deliberately delayed the main attack until the seventh hour so that hunger, thirst and heat would wear the enemy down. Twelve years earlier, Polybius had described the same weapon used against Rome: at the Trebia Hannibal drew the Roman army across a river before it had eaten, while his own men breakfasted by their fires. No ancient writer read for this volume says Scipio took the method from Hannibal; the likeness is the reader’s inference, and Scipio, who fought at the Ticinus, had served in the army that suffered it.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "11.22–24" },
            { source: 9, locator: "28.14–15" },
            { source: 3, locator: "3.72" },
            { source: 4 },
          ],
          battleSlugs: ["ilipa", "trebia"],
        },
        {
          title: "Zama",
          text: "At Zama Scipio faced the general whose methods he is said to have learned, and the battle was decided as several of Hannibal’s had been, by cavalry returning to strike the enemy’s rear. That cavalry was Masinissa’s, the Numidian prince who, Livy says, came to a secret understanding with Scipio’s lieutenant after Ilipa. Polybius insists that Hannibal did all a good general of long experience could do and that no one could have made better dispositions against a Roman army; Livy says Scipio himself acknowledged it.",
          evidence: "fact",
          refs: [
            { source: 5, locator: "15.15" },
            { source: 9, locator: "28.16" },
            { source: 6, locator: "30.35" },
          ],
          battleSlugs: ["zama"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek historian who drew on Scipio’s friend Laelius and wrote against those who credited Scipio’s successes to fortune.",
          says: "Everything Scipio did was done with calculation and foresight.",
          refs: [{ source: 0, locator: "10.2, 10.9" }],
        },
        {
          who: "Scipio, as Polybius reports his letter",
          stake:
            "The commander’s own account, in a letter to Philip of Macedon, known only from Polybius’s summary.",
          says: "He undertook his operations in Spain, and the siege of New Carthage above all, after making the calculations Polybius sets out.",
          refs: [{ source: 0, locator: "10.9" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who follows Polybius closely for Spain and adds details from other authorities.",
          says: "Scipio altered his order on the day of battle because both camps assumed it would not change, and timed the attack to tire the enemy.",
          refs: [{ source: 9, locator: "28.14–15" }],
        },
        {
          who: "Appian",
          stake:
            "A Greek writing in the second century CE, whose account of Spain is confused about names and places.",
          says: "Scipio fired his men with omens and spoke like one inspired; the enemy, unfed, gave way.",
          refs: [{ source: 7, locator: "26–27" }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, Ilipa was a gamble on discipline. Scipio knew the enemy’s routine because he had watched it for days and had copied it himself; he did not know whether his legions could wheel outward and forward under pressure without breaking, and Polybius notes that the movement left his wings in an unusual order, which Scipio rightly ignored. He also knew he could not trust his Spanish allies in a decisive fight, which is why he gave them the centre, where they had only to advance slowly and hold the enemy’s best troops in place. The plan used the enemy’s habit, his own army’s training and his allies’ unreliability together.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "11.20, 11.22–23" },
            { source: 9, locator: "28.13–14" },
          ],
        },
        {
          text: "The question of what Scipio learned from Hannibal has to be argued, not assumed. The 1911 Britannica says he was present at the Ticinus, the Trebia and Cannae, so he had seen Hannibal’s cavalry and his use of hunger and timing. The sources read for this volume never say he copied them. What they show is narrower: he studied why Rome had lost in Spain, he studied his enemy’s habits, and he won with cavalry he had recruited from the enemy’s side. If he learned from Hannibal, he learned the principle, to make the enemy fight on your terms, rather than any formation.",
          evidence: "interpretation",
          refs: [
            { source: 4 },
            { source: 0, locator: "10.7" },
            { source: 9, locator: "28.16" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "Learning from models, failures as well as successes",
          base: "meta-analysis",
          text: "A meta-analysis of 117 studies of behaviour-modelling training found its effects largest on what trainees learned and smaller on what they did at work, and found that skills transferred best when trainees were shown both negative and positive models, practised on scenarios of their own, set goals, and worked where their superiors had been trained too. Scipio’s Spanish command looks like that pattern: a negative model in his father’s defeat, a positive one in his enemy’s successes, and an army he drilled at New Carthage before using new movements at Ilipa. The finding can suggest why studying a defeat and an enemy together might teach more than either alone.",
          evidence: "interpretation",
          refs: [{ source: 8 }, { source: 0, locator: "10.20" }],
          limit:
            "The studies concern designed training with feedback, mostly in modern workplaces, not a commander learning from war; only the abstract was read, and it cannot show what Scipio learned or from whom.",
        },
      ],
      shadow: {
        text: "The lesson Scipio took from his father’s death cut both ways. At Baecula the fear of being caught between Carthaginian armies kept him from pursuing Hasdrubal Barca, who left with his treasury and elephants, crossed the Pyrenees and brought a second army into Italy. Rome stopped him on the Metaurus, through Nero’s march, not Scipio’s. A commander who has learned what destroyed his predecessor can become too careful of that one danger.",
        evidence: "interpretation",
        refs: [
          { source: 0, locator: "10.39" },
          { source: 1, locator: "27.20" },
        ],
        battleSlugs: ["baecula", "metaurus"],
      },
      people: ["hasdrubal-barca", "masinissa"],
      counterCase: {
        text: "Hasdrubal, son of Gisco, shows the same habit failing on the other side. At Ilipa he had watched Scipio for days and learned what Livy says both camps took for granted: that the armies would fight in the order they had been standing in, Romans against Carthaginians in the centre. He had learned the routine, and the routine was the trap. When Scipio attacked early and in reverse, Hasdrubal, surprised, formed his army in its usual order without time to feed it, and his best troops stood idle while his wings were broken. Learning the enemy’s pattern is useful only while the enemy is not using it to teach you.",
        evidence: "interpretation",
        refs: [
          { source: 2, locator: "11.22, 11.24" },
          { source: 9, locator: "28.14" },
        ],
        battleSlugs: ["ilipa"],
      },
      cost: {
        text: "Livy describes the pursuit after Ilipa: when the Romans caught Hasdrubal’s column it was no longer a battle but butchery, until the general fled to the hills with part of his army and then by sea, leaving it to its fate. The army broke up, some deserting to the Romans and others scattering to their peoples. The soldiers who paid for their commander’s predictability were mostly Spaniards and Africans whose names no source records.",
        evidence: "fact",
        refs: [{ source: 9, locator: "28.16" }],
      },
      transfer: {
        holdsWhen: [
          "A leader studies why their own side failed, not only what the winner did, and can train their people to new ways of working before using them.",
          "The opponent’s habits are visible and the opponent does not expect them to be used.",
        ],
        failsWhen: [
          "The lesson of one failure is learned so well that it blocks the bold move the next situation needs.",
          "The opponent is studying you as closely, so that a pattern you show becomes a pattern used against you.",
        ],
        questions: [
          "What did your organisation’s last serious failure teach, and is that lesson now making you too careful of one danger?",
          "Which of your competitor’s habits have you learned, and which of yours have they?",
          "Where have you copied an opponent’s method without understanding the principle behind it?",
        ],
      },
      bearsOn:
        "The lesson is the strongest evidence for the third answer, Scipio’s command, and it weakens the premise. Scipio won in Spain by studying a defeat and an enemy, and at Zama the cavalry that decided the battle came from a prince he had won over. But Polybius says Hannibal did everything a good general could at Zama, and the method Scipio used at Ilipa was one Hannibal had used against Rome. If the better tactician lost, it was partly because his enemy learned, and partly because his enemy had the allies.",
      questions: [
        {
          prompt:
            "What did Scipio conclude, according to Polybius, about the cause of his father’s and uncle’s defeat in Spain?",
          choices: [
            "That Carthaginian soldiers were braver.",
            "That it came from the treachery of their Celtiberian allies and the separation of the Roman armies.",
            "That they had no cavalry.",
          ],
          answer: 1,
          explanation:
            "Polybius 10.7: he learned it by careful inquiry at Rome before leaving.",
        },
        {
          prompt: "What did Scipio change on the day of Ilipa?",
          choices: [
            "Nothing; he fought in his usual order.",
            "The hour and the order: an early attack with fed troops, Spaniards in the centre and Romans on the wings.",
            "He attacked by sea.",
          ],
          answer: 1,
          explanation:
            "Polybius 11.22 and Livy 28.14: he reversed the pattern both camps had come to expect.",
        },
        {
          prompt:
            "Does any source read for this volume say Scipio learned his methods from Hannibal?",
          choices: [
            "Yes, Polybius says so explicitly.",
            "No; the likeness between the Trebia and Ilipa is an inference the reader must test.",
            "Yes, Livy quotes Scipio saying so.",
          ],
          answer: 1,
          explanation:
            "The sources show Scipio studying his father’s defeat and his enemy’s habits; the transfer from Hannibal is not stated.",
        },
      ],
      sourceCheck: {
        question: "Did Scipio learn his methods from Hannibal?",
        witnesses: [
          {
            label: "Polybius 10.7",
            claim:
              "Scipio studied the causes of his father’s defeat and the state of the enemy, and acted by calculation.",
          },
          {
            label: "Polybius 3.72 and 11.22",
            claim:
              "At the Trebia Hannibal made the Romans fight unfed; at Ilipa Scipio made the Carthaginians fight unfed.",
          },
          {
            label: "1911 Britannica, “Scipio”",
            claim: "Scipio was present at the Ticinus, the Trebia and Cannae.",
          },
        ],
        prompt: "What can a reader conclude?",
        options: [
          {
            text: "That Scipio copied Hannibal; the evidence is clear.",
            feedback:
              "No source says so; the conclusion rests on a likeness and on his presence at Hannibal’s battles.",
          },
          {
            text: "That he may have learned the principle from what he saw, but the sources show only that he studied defeats and habits; the transfer is an inference.",
            feedback:
              "This keeps what the sources say apart from what the reader infers, and leaves the inference open to test.",
            best: true,
          },
          {
            text: "That he learned nothing from Hannibal, because no source says he did.",
            feedback:
              "Silence in the sources is not evidence of absence; he had seen Hannibal’s methods at first hand.",
          },
        ],
        battleSlug: "ilipa",
      },
      seminar: {
        prompt:
          "Scipio is given the Spanish command after his father’s and uncle’s deaths. Argue what he should learn first, and from whom, from three positions: a veteran of the Scipios’ Spanish army, a Roman survivor of Cannae, and one of the Spanish princes whose hostages Carthage held.",
        guidance:
          "Use Polybius’s account of his inquiries, Baecula, Ilipa and the Trebia. Say what each speaker could know in 210, and what Scipio’s caution at Baecula cost.",
      },
      sources: [
        s.pol10,
        s.livy27,
        s.pol11,
        s.pol3,
        s.ebScipio,
        s.pol15,
        s.livy30,
        s.appianSpain6,
        s.taylor,
        s.livy28,
      ],
    },
    {
      slug: "allies-made-and-kept",
      title: "Allies made and kept: winning peoples, not only battles",
      part: "Scipio’s answer",
      themes: ["ethics", "judgement"],
      claim:
        "A commander who treats the enemy’s allies generously can turn them, but only while his promises are kept, the alternative looks worse, and the allies believe the generosity belongs to his state and not only to him.",
      inBrief: {
        strength:
          "Scipio returned hostages, freed Spanish prisoners and sent Masinissa’s nephew home, and Spain and Masinissa came over.",
        shadow:
          "Indibilis and Mandonius rose twice when Scipio seemed gone, and in Africa he burned the camps of a king he was negotiating with.",
      },
      moment: {
        text: "Among the prizes of New Carthage were the hostages Carthage held from the peoples of Spain. Polybius says Scipio called the children to him one by one, told them they would soon see their parents, gave the girls earrings and bracelets and the young men daggers and swords, and asked them all to write home that they were safe and that Rome would restore them if their families became Rome’s allies. Livy gives him a sentence on the policy: the Romans preferred to bind men by kindness rather than by fear. Then the wife of Mandonius, brother of the Ilergete king, fell at his feet. When he promised that the women would want for nothing, she answered that it was not food she was afraid for, and Scipio, Polybius says, understood her and wept.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "10.18" },
          { source: 1, locator: "26.49" },
        ],
      },
      episodes: [
        {
          title: "Two stories of a captive",
          text: "Soldiers brought Scipio a young woman of great beauty. In Polybius’s version he said that as a private man he would have welcomed no gift more, but as general none less, and gave her to her father to marry whom he chose; the army approved his self-restraint. In Livy’s she was betrothed to a young Celtiberian noble, Aluccius; Scipio returned her to him, asked only that he be a friend to Rome, and gave him the gold her parents had brought for her ransom as a wedding present, and Aluccius came back with a body of horsemen. The two endings cannot both be true. Both reach us from Scipio’s admirers, and both were told to show what kind of Roman he was.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "10.19" },
            { source: 1, locator: "26.50" },
          ],
          battleSlugs: ["new-carthage"],
        },
        {
          title: "The princes who changed sides",
          text: "The hostages brought their families. Polybius says Edeco, prince of the Edetani, came first, asking for his wife and children and to be named a friend before he went home, so that the rest would follow; they did. Andobales, whom Livy calls Indibilis, and his brother Mandonius had long been estranged from Carthage, which had demanded money from them and their wives and daughters as hostages. Livy gives Indibilis a careful speech: a deserter is loathed by his old friends and suspected by his new ones, so let Scipio judge them by what they did next. Scipio answered that he would not call men deserters who left an alliance in which no law was respected. Polybius draws the moral: Carthage won Spain by kindness and lost it by tyranny.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "10.34–37" },
            { source: 2, locator: "27.17" },
          ],
          battleSlugs: ["baecula"],
          campaignSlugs: ["scipio-s-spanish-campaign"],
        },
        {
          title: "Freed and sold",
          text: "After Baecula the generosity had edges. Polybius says Scipio freed the Iberian prisoners without ransom and let Andobales choose horses from the captured herd; Livy adds that the Africans were sold by the quaestor. Among them was a Numidian boy of royal blood, Massiva, nephew of Masinissa, the cavalry leader serving Carthage; Scipio gave him gifts and an escort and sent him back to his uncle. When the Spaniards hailed Scipio as king, he told them to call him general. Later, Livy says, Masinissa met Scipio, thanked him first for his nephew, and offered to serve Rome in Africa.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "10.40" },
            { source: 2, locator: "27.19" },
            { source: 3, locator: "28.35" },
          ],
          battleSlugs: ["baecula"],
        },
        {
          title: "The princes rise",
          text: "Once the Carthaginians had gone, the princes’ calculation changed. Livy says that when Scipio fell ill in 206 and rumour made him dead, Indibilis and Mandonius, who had expected the lordship of Spain to pass to them, raised their peoples against Rome’s allies. Scipio recovered, beat them, and when Mandonius came to beg for mercy, spared them a second time without taking hostages or arms, telling them they would feel his anger in arms if they rose again. After he left Spain, Livy says, Indibilis rose again, telling the Spaniards that the Roman generals left behind were names only and Spain could be free; this time Mandonius was handed over by his own council, and the tribes paid and gave hostages.",
          evidence: "fact",
          refs: [
            { source: 3, locator: "28.24, 28.34" },
            { source: 4, locator: "11.31–33" },
            { source: 5, locator: "29.1–3" },
          ],
          battleSlugs: [],
          campaignSlugs: ["scipio-s-spanish-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "Scipio’s admirer, who uses Carthage in Spain as a lesson for those who rule others.",
          says: "Power is kept best by the same means that won it, kindness and the prospect of benefits; the Carthaginians forgot this and lost their allies.",
          refs: [{ source: 0, locator: "10.36" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who tells Scipio’s generosity with admiration and the Spaniards’ revolts as treachery.",
          says: "Indibilis rose the second time out of admiration for Scipio, thinking no other Roman general worth fearing.",
          refs: [{ source: 5, locator: "29.1" }],
        },
        {
          who: "Indibilis, as Livy reports him",
          stake:
            "A Spanish king changing sides, in words a Roman historian gave him.",
          says: "A deserter is loathed by old friends and suspected by new ones; judge us by what we do from today.",
          refs: [{ source: 2, locator: "27.17" }],
        },
        {
          who: "Masinissa, as Livy reports him",
          stake:
            "The Numidian prince whose cavalry Carthage relied on, in a meeting Livy describes from the Roman side.",
          says: "He had been grateful since his nephew came home, and in Africa he could serve Rome as he could not in Spain.",
          refs: [{ source: 3, locator: "28.35" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, generosity was Scipio’s cheapest weapon. Carthage’s hostages were its guarantee of Spanish loyalty; by sending them home on condition of alliance, Scipio turned Carthage’s security into Rome’s credit. Carthage had made the comparison easy, demanding money from its own allies and their wives and daughters as hostages. He did not mistake gratitude for reliability: at Ilipa, Polybius says, he dared not trust his Spanish allies in a decisive battle and gave them the centre for show. Generosity bought neutrality, supplies and friends; the fighting he kept for Romans.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "10.35" },
            { source: 4, locator: "11.20" },
          ],
        },
        {
          text: "The generosity was personal, and that was its limit. Livy’s account of the second rising says Indibilis thought Scipio the only Roman general worth fearing; when Scipio left, the bond left with him. Scipio’s answer the first time was to spare the princes again, without hostages, which made mercy his policy and his signature; his successors demanded Mandonius alive. Masinissa’s change of sides held: by Livy’s account he had a father’s throne to win in Africa, and Rome was the power that could help him to it. The lesson on the allies who stayed asked what made Rome’s allies hold; this one shows how much of Scipio’s Spanish success rested on one man’s presence.",
          evidence: "interpretation",
          refs: [
            { source: 5, locator: "29.1–3" },
            { source: 3, locator: "28.34–35" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on reciprocity and gratitude could be applied here, but none was read for this lesson, and the evidence would not bear it. Every motive in the lesson, the old woman’s fear, Aluccius’s joy, Indibilis’s calculation and Masinissa’s gratitude, is reported by Roman or pro-Roman writers in speeches they composed. The behaviour can be traced; the feelings cannot.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. No Spanish or Numidian account of these choices survives.",
        },
      ],
      shadow: {
        text: "The same commander deceived an African king in a negotiation. Polybius says that in the winter of 204 to 203, besieging Utica, Scipio let Syphax believe that a peace was possible, sent his envoys again and again to the camps of Syphax and the Carthaginians, and sent officers with them disguised as slaves to study the huts and the gates. When he was ready he sent a last message that his council was against peace, so that he would not seem to break faith while negotiations were in progress, and that night his men set fire to both camps and cut down those who ran from the flames. Polybius calls it the most splendid of Scipio’s exploits.",
        evidence: "fact",
        refs: [{ source: 6, locator: "14.1–5" }],
      },
      people: ["masinissa"],
      counterCase: {
        text: "Caesar shows generosity to enemies failing at its source. Suetonius says he spared Pompeians who asked, let those not yet pardoned come home and hold office, and answered plots with warnings; Plutarch says he gave honours and offices to men who had fought him, Brutus and Cassius among them, both made praetors, and refused a bodyguard. Suetonius names Cassius and the two Bruti at the head of the conspiracy that killed him, and records that two Pompeians he had pardoned took up arms again. The Caesar volume’s lesson on clemency reads that policy whole. The comparison is with Indibilis: generosity that depends on one man’s person holds only while that person is present and feared, and both commanders were tested by men they had spared.",
        evidence: "interpretation",
        refs: [
          { source: 7, locator: "75, 80" },
          { source: 8, locator: "57" },
        ],
        commanderSlug: "julius-caesar",
        battleSlugs: [],
      },
      cost: {
        text: "Scipio’s generosity was selective, and others paid for the selection. After Baecula the Spaniards went home free and the Africans were sold. After the second rising the Spanish tribes, Livy says, had to pay the army double, supply corn and clothing, and give hostages again, the hostages Scipio had made a point of returning. And in Africa, Livy says, Laelius’s first raid fell on people around Hippo Regius who were working their fields and suspected nothing.",
        evidence: "fact",
        refs: [
          { source: 2, locator: "27.19" },
          { source: 5, locator: "29.3" },
        ],
      },
      transfer: {
        holdsWhen: [
          "Your opponent has treated its own partners badly, so that your fair dealing is a visible contrast.",
          "Your promises are kept by your organisation, not only by you, and partners can see that they will survive your absence.",
        ],
        failsWhen: [
          "The goodwill attaches to you personally, and you leave.",
          "The same partners see you deceive someone else when it suits you.",
        ],
        questions: [
          "Which of your relationships would survive your leaving, and which would end that week?",
          "What has your competitor done to its partners that makes your offer look good, and how long will that last?",
          "Where does your generosity stop, and who sees where it stops?",
        ],
      },
      bearsOn:
        "This lesson adds to the third answer, Scipio’s command, a strength Hannibal’s war lacked: at Zama the cavalry that decided the battle came from a prince Scipio had won over in Spain. It also adds to the first answer, read from the other side. Polybius’s verdict that Carthage lost Spain by tyranny is the mirror of the allies who stayed with Rome in Italy: in both countries the side that treated its allies worse lost them. And Scipio’s own bonds proved personal; Rome kept Spain afterwards by the older method, hostages and force.",
      questions: [
        {
          prompt:
            "What did Scipio ask the Spanish hostages at New Carthage to write home, according to Polybius?",
          choices: [
            "That they would be sold unless ransomed.",
            "That they were safe, and that Rome would restore them if their families became Rome’s allies.",
            "That Carthage had abandoned them.",
          ],
          answer: 1,
          explanation:
            "Polybius 10.18; the hostages were Carthage’s guarantee of Spanish loyalty.",
        },
        {
          prompt:
            "Why did Indibilis and Mandonius rise in 206, according to Livy?",
          choices: [
            "Because Scipio had executed their hostages.",
            "Because they had expected the lordship of Spain once Carthage left, and the rumour of Scipio’s death gave them their chance.",
            "Because Carthage paid them.",
          ],
          answer: 1,
          explanation: "Livy 28.24; Scipio spared them a second time (28.34).",
        },
        {
          prompt:
            "How did Scipio prepare the burning of the camps in Africa, according to Polybius?",
          choices: [
            "By a direct assault in daylight.",
            "By sending officers disguised as slaves with his envoys during peace negotiations to study the camps.",
            "By bribing Syphax.",
          ],
          answer: 1,
          explanation:
            "Polybius 14.1–2; he sent a last message so as not to appear to break faith while negotiations were in progress.",
        },
      ],
      sourceCheck: {
        question:
          "What did Scipio do with the captive young woman at New Carthage?",
        witnesses: [
          {
            label: "Polybius 10.19",
            claim:
              "He said that as general he could accept no such gift and gave her to her father to marry whom he chose.",
          },
          {
            label: "Livy 26.50",
            claim:
              "He returned her to her betrothed, Aluccius, and gave him her ransom as a wedding gift; Aluccius came back with horsemen for Rome.",
          },
          {
            label: "Polybius 10.18",
            claim:
              "He promised the wife of Mandonius to guard the captive princesses as if they were his own family.",
          },
        ],
        prompt: "What can a reader take from these?",
        options: [
          {
            text: "That Livy’s fuller version is right, because it has names.",
            feedback:
              "Names and dialogue are what a later writer adds; Livy gives no source for them.",
          },
          {
            text: "That the event is uncertain in its details, but both versions show the reputation Scipio’s admirers wanted him to have, and that the treatment of captives was part of his policy.",
            feedback:
              "This keeps the contradiction and asks what each version was for, without choosing a romance.",
            best: true,
          },
          {
            text: "That the story is invented and should be ignored.",
            feedback:
              "Two early reporters tell it; what it shows about Scipio’s reputation is evidence even if the details are not.",
          },
        ],
        battleSlug: "new-carthage",
      },
      seminar: {
        prompt:
          "Tarraco, 206. Scipio is about to leave Spain. Argue how Rome should keep its Spanish allies after he goes, from three positions: Indibilis, a Roman officer staying in Spain, and a Carthaginian envoy trying to win the princes back.",
        guidance:
          "Use the hostages of New Carthage, Indibilis’s speech, the Africans sold after Baecula, the first rising and its pardon, and Caesar’s pardoned enemies. Say what each speaker could promise, and who would keep the promise after Scipio sailed.",
      },
      sources: [
        s.pol10,
        s.livy26,
        s.livy27,
        s.livy28,
        s.pol11,
        s.livy29,
        s.pol14,
        s.suetonius,
        s.plutarchCaesar,
      ],
    },
    {
      slug: "taking-the-war-to-africa",
      title: "Taking the war to Africa: persuading the state",
      part: "Scipio’s answer",
      themes: ["judgement", "ethics"],
      claim:
        "A commander who must persuade his own government to adopt his strategy can win the argument by results, but only if he stays within the authority it gives him and answers for what his subordinates do under it.",
      inBrief: {
        strength:
          "Scipio stepped back from appealing to the people, accepted the senate’s terms, raised what it refused him from volunteers and allies, and let a commission see his army.",
        shadow:
          "His legate Pleminius plundered Locri, and Scipio’s first inquiry left him in command.",
      },
      moment: {
        text: "In 205 Scipio was consul, and Africa was the question. Livy says it was generally believed that if the senate refused him Africa he would take the matter straight to the people. Fabius challenged him in the senate to say whether he would abide by its decision. Scipio answered that he would act as he thought best for the state. Fabius appealed to the tribunes, and they ruled that if the consul submitted the provinces to the senate its decision would be final, and if he did not they would support any senator who refused to vote. Scipio asked for a day to consult his colleague. The next day he submitted the question to the senate. It gave him Sicily, with leave to cross to Africa if he thought it in the interest of the state.",
        evidence: "fact",
        refs: [{ source: 0, locator: "28.45" }],
      },
      episodes: [
        {
          title: "The case against",
          text: "Livy gives Fabius a long speech against the invasion, which is Livy’s composition, and it is a serious case. Africa had destroyed Regulus in the first war; Spain had friendly harbours and Africa had none; the Numidian kings had proved faithless; Hannibal was still in Italy; and Scipio, Fabius says, had let Hasdrubal slip out of Spain and had left his province without authority to visit King Syphax. Plutarch thinks Fabius’s opposition began in caution and grew violent out of rivalry, and says the people thought him jealous. Livy gives Scipio a reply, also his composition: Carthage’s armies were mercenaries and its allies faithless, and an invasion of Africa would draw Hannibal home.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "28.40, 28.42, 28.44" },
            { source: 1, locator: "25" },
          ],
          battleSlugs: [],
          campaignSlugs: ["scipio-s-african-campaign"],
        },
        {
          title: "Volunteers and Etruscan timber",
          text: "The senate gave Scipio the province but not the means. Livy says he was not allowed to levy troops, but could enlist volunteers, and since he had said the fleet would cost the state nothing, he could accept what the allies gave. The towns of Etruria sent timber, iron, sailcloth, grain and arms, and men came from the Umbrians, the Sabines and the Marsi. Plutarch says Fabius blocked public money and had Scipio’s forces limited to the troops already in Sicily and a few of his Spanish veterans. In Sicily, Livy says, Scipio turned reluctant Sicilian nobles into a cavalry squadron by letting each buy his way out with a trained substitute, picked the veterans of the siege of Syracuse, and made Italians return property they had seized from Syracusans, because confidence in the honesty of government mattered more than anything.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "28.45" },
            { source: 1, locator: "25–26" },
            { source: 2, locator: "29.1" },
          ],
          battleSlugs: [],
          campaignSlugs: ["scipio-s-african-campaign"],
        },
        {
          title: "Locri",
          text: "In southern Italy Scipio retook Locri from the Carthaginians and left his legate Pleminius in command. Livy says the Locrians found Pleminius and his soldiers worse than the Carthaginians: they outraged the townspeople and their families and plundered the treasury of Proserpine. When Pleminius’s men fought those of two military tribunes, the tribunes’ soldiers mutilated Pleminius. Scipio came, held an inquiry, kept Pleminius in his post and sent the tribunes in chains towards Rome. Pleminius then had the tribunes tortured to death and punished the Locrians who had complained. At Rome Fabius moved that Scipio be recalled for leaving his province without orders; the senate sent a commission instead.",
          evidence: "fact",
          refs: [{ source: 2, locator: "29.8–9, 29.19, 29.21" }],
          battleSlugs: [],
          campaignSlugs: ["scipio-s-african-campaign"],
        },
        {
          title: "An army as the answer",
          text: "The commission found at Locri that the Locrians would rather have Scipio as a friend than accuse him; his fault, they said, was too much confidence in Pleminius or too little in them. Pleminius and others were sent in chains to Rome. At Syracuse, Livy says, Scipio answered the rumours about his Greek dress and idle staff not with words but by putting his army and fleet through manoeuvres as if for battle, and the commissioners left convinced that if this general and army could not conquer Carthage, no one could. The senate told him to sail. Plutarch says that when news came from Africa of camps burned and a king captured, and Carthage recalled Hannibal, Fabius still demanded a successor for Scipio.",
          evidence: "fact",
          refs: [
            { source: 2, locator: "29.21–22" },
            { source: 1, locator: "26" },
          ],
          battleSlugs: ["zama"],
        },
      ],
      witnesses: [
        {
          who: "Livy",
          stake:
            "A Roman historian who writes the debate of 205 as a contest of two great men and composes both their speeches.",
          says: "Scipio, no longer content with a moderate share of glory, said he had been elected to end the war and would take it to the people if the senate refused.",
          refs: [{ source: 0, locator: "28.40" }],
        },
        {
          who: "Fabius, as Livy reports him",
          stake:
            "Rome’s senior general, five times consul, speaking against a man younger than his son, in speeches Livy composed.",
          says: "Consuls are elected for the commonwealth, not to carry armies wherever they please like kings; Scipio was born to destroy military discipline.",
          refs: [
            { source: 0, locator: "28.42" },
            { source: 2, locator: "29.19" },
          ],
        },
        {
          who: "Plutarch",
          stake:
            "Fabius’s biographer, admiring of him but willing to name his faults.",
          says: "Fabius began in caution and grew violent from rivalry; he tried to keep money and men from Scipio.",
          refs: [{ source: 1, locator: "25–26" }],
        },
        {
          who: "The Locrians, as Livy reports them",
          stake:
            "The victims of Scipio’s legate, speaking before a Roman commission and wary of a powerful man.",
          says: "The crimes were not done by Scipio’s order; his fault was trusting Pleminius too much or the Locrians too little.",
          refs: [{ source: 2, locator: "29.21" }],
        },
      ],
      strategist: [
        {
          text: "Judged by what was knowable in 205, both sides of the debate had a case. Fabius’s points were real: an invasion without a friendly harbour, Numidian kings who had switched sides before, Hannibal undefeated in Italy. Scipio’s were real too: Carthage’s armies were hired, its African allies unreliable, and Hannibal could be drawn home only by a threat to Carthage. What decided it was not the argument but the method. Scipio pressed to the edge of his authority, threatened to go to the people, then accepted the tribunes’ ruling and a half-measure, and built the rest from volunteers and allies. The Wellington volume’s lesson on the government at home follows a commander managing those who could recall him by controlling what they heard; Scipio did it by showing them.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "28.42, 28.44–45" },
            { source: 2, locator: "29.22" },
          ],
        },
        {
          text: "The authority he stretched was political; the authority that nearly cost him was the one he delegated. Scipio’s weakness at Locri was loyalty to his own appointee, the fault the Locrians named. His first inquiry punished the tribunes and kept the legate, and the result was murder and a scandal that gave his opponents their best weapon. He survived because the senate chose an inquiry over a recall, and because the commission judged him by his army. A commander who wins the argument by results is answerable for the results of the people he leaves in charge.",
          evidence: "interpretation",
          refs: [{ source: 2, locator: "29.9, 29.19, 29.21" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "Research on legitimacy, already read for the Alexander and Caesar volumes, would describe what Scipio kept and Caesar lost. This lesson does not repeat it. The decisive acts are institutional: a challenge, a ruling by the tribunes, a decree, a commission, an inspection. The two men’s motives reach us only through speeches Livy wrote for them and Plutarch’s judgement of Fabius.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Motives are those the ancient writers attribute.",
        },
      ],
      shadow: {
        text: "Locri paid for Scipio’s loyalty to his legate. By Livy’s account the city suffered worse under its Roman garrison than under the Carthaginians: its people and their families were outraged, its temple of Proserpine robbed, its leading men who complained were tortured. It was the senate’s commission, not Scipio, that gave the Locrians back their laws, had their property and their free people returned and put the sacred money back in the temple. The commission found Scipio innocent of ordering the crimes, and the Locrians, facing a powerful man, chose to call him their friend.",
        evidence: "fact",
        refs: [{ source: 2, locator: "29.8–9, 29.19, 29.21" }],
      },
      people: ["quintus-fabius-maximus"],
      counterCase: {
        text: "Caesar faced the same fork in 49 and took the other road. Suetonius says he asked the senate to let him keep the privilege the people had granted or make the others give up their armies, offered a compromise, and when the senate would not intervene and the tribunes who vetoed for him fled the city, crossed the Rubicon with his army. Pompey said he wanted turmoil because he could not pay for his promises; Cato swore to prosecute him the moment he disbanded. The Caesar volume’s lesson on the Rubicon follows where that road led. Scipio, threatened only by a vote, could afford to step back and win by results; Caesar, threatened by prosecution, believed he could not. Their states differed less than their stakes.",
        evidence: "interpretation",
        refs: [{ source: 3, locator: "29–31" }],
        commanderSlug: "julius-caesar",
        battleSlugs: [],
      },
      cost: {
        text: "The war Scipio carried to Africa fell first on Africans who had no say in it. Livy says that when Laelius landed near Hippo Regius ahead of the invasion, his men were sent to ravage the country at daybreak while the inhabitants were going about their work suspecting nothing, and did much damage. Plutarch records the news Rome celebrated: two camps destroyed by fire, and in them a great number of men, arms and horses.",
        evidence: "fact",
        refs: [
          { source: 2, locator: "29.3" },
          { source: 1, locator: "26" },
        ],
      },
      transfer: {
        holdsWhen: [
          "You can accept less than you asked for and build the rest from people who choose to back you.",
          "When challenged, you can show the work rather than argue about it.",
        ],
        failsWhen: [
          "Someone you appointed abuses the authority you gave them and you protect them.",
          "Stepping back costs you more than you can bear, so that you cross instead.",
        ],
        questions: [
          "If your board refused your strategy, what would you build from volunteers and partners alone?",
          "Whom have you put in charge somewhere you do not see, and what would you do if they were accused tomorrow?",
          "What could you show, rather than say, to the people who doubt you?",
        ],
      },
      bearsOn:
        "Here the second and third answers meet. The strategy that ended the war, carrying it to Africa, was the young commander’s, not the system’s; the system’s most respected voice opposed it. But the system shaped it: it set limits, Scipio accepted them, it audited him after Locri, and it let him go when the audit was satisfied. Rome won through a commander who could persuade it and a state that could be persuaded without being overthrown.",
      questions: [
        {
          prompt:
            "What did the tribunes rule in the senate debate of 205, according to Livy?",
          choices: [
            "That Scipio could take the question to the people.",
            "That if Scipio submitted the provinces to the senate its decision would be final, and if not they would support senators who refused to vote.",
            "That Fabius should command in Africa.",
          ],
          answer: 1,
          explanation:
            "Livy 28.45; Scipio asked for a day and then submitted to the senate.",
        },
        {
          prompt:
            "How did Scipio equip his expedition when the senate refused him a levy?",
          choices: [
            "He borrowed from Carthage.",
            "He enlisted volunteers and accepted materials offered by the towns of Etruria and other allies.",
            "He used Hannibal’s captured ships.",
          ],
          answer: 1,
          explanation: "Livy 28.45; Plutarch, Fabius 25.",
        },
        {
          prompt:
            "What did the commission sent to Sicily do before reporting on Scipio?",
          choices: [
            "It recalled him to Rome.",
            "It watched his army and fleet manoeuvre and inspected his preparations.",
            "It read his letters to the senate.",
          ],
          answer: 1,
          explanation:
            "Livy 29.22: he answered the charges by acts, not words.",
        },
      ],
      sourceCheck: {
        question:
          "Why did Scipio leave Pleminius in command after the first inquiry?",
        witnesses: [
          {
            label: "Livy 29.9",
            claim:
              "Scipio acquitted Pleminius and kept him in his post, and sent the tribunes in chains towards Rome.",
          },
          {
            label: "The Locrians, Livy 29.21",
            claim:
              "He trusted Pleminius too much or the Locrians too little; he did not order the crimes.",
          },
          {
            label: "Fabius, Livy 29.19",
            claim:
              "Scipio was born to destroy discipline: he indulged soldiers and then punished them, like a foreign tyrant.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Fabius is right: it shows Scipio’s contempt for discipline.",
            feedback:
              "Fabius was Scipio’s chief opponent, and the speech is Livy’s; it is an accusation, not a finding.",
          },
          {
            text: "The Locrians’ judgement is the most useful: the inquiry weighed the outrage to his legate over the outrage to the town, and the result shows the danger of loyalty to one’s own appointee.",
            feedback:
              "This uses the witnesses with the least reason to flatter Scipio, though they had reason to be careful, and reads the decision by its result.",
            best: true,
          },
          {
            text: "Scipio cannot be blamed, because he was preparing for Africa.",
            feedback:
              "Being busy elsewhere explains the inquiry’s haste; it does not answer for its outcome.",
          },
        ],
        campaignSlug: "scipio-s-african-campaign",
      },
      seminar: {
        prompt:
          "Rome, 204. The senate debates Fabius’s motion to recall Scipio after Locri. Argue the motion from three positions: a Locrian envoy, a volunteer from Umbria waiting in Sicily to sail, and a senator who voted for the commission.",
        guidance:
          "Use the debate of 205, the volunteers and the Etruscan gifts, the inquiry at Locri, the commission’s inspection and Caesar’s Rubicon. Say what each speaker wants Rome to do about a commander whose strategy they need and whose legate they fear.",
      },
      sources: [s.livy28, s.plutarchFabius, s.livy29, s.suetonius],
    },
    {
      slug: "the-meeting-at-zama",
      title: "The meeting at Zama: two commanders who knew each other",
      part: "The meeting and after",
      themes: ["judgement", "adaptation"],
      claim:
        "When two commanders know each other’s methods, the battle goes to the one with the better instrument for the method both expect, but only if he can keep it in hand when the fighting turns.",
      inBrief: {
        strength:
          "Scipio met Hannibal’s elephants with open lanes, re-formed his line in the middle of the battle and had the cavalry to finish it.",
        shadow:
          "The battle was nearer than its result: Hannibal’s veterans stood until the cavalry came back, and Polybius says it came providentially.",
      },
      moment: {
        text: "Hannibal had marched to Zama and sent three spies to see where the Romans were camped and how they were disposed. They were caught. Scipio, Polybius writes, was so far from punishing them, as was the custom, that he had a tribune show them round the whole camp, asked whether they had seen everything, gave them food and an escort, and told them to report carefully to Hannibal. Livy adds that Masinissa had come in with his Numidians that very day, so that what the spies saw was the force that would beat their army. Hannibal, Polybius says, was so struck by Scipio’s daring that he asked to meet him.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "15.5" },
          { source: 1, locator: "30.29" },
        ],
      },
      episodes: [
        {
          title: "The meeting",
          text: "The two commanders rode out with a few horsemen, left them, and met with only interpreters. Polybius and Livy both give long speeches, and both are the historians’ compositions. In Polybius, Hannibal warns the younger man that fortune turns, offers Rome Sicily, Sardinia and Spain, and Scipio answers that Carthage had broken a peace already agreed and must now surrender or fight. Livy calls them the greatest commanders of their own or any earlier age. He also admits he cannot say whether Hannibal asked for the meeting on his own initiative or his government’s, and reports Valerius Antias’s story that Hannibal had first been beaten and came to Scipio’s camp with envoys, a story Livy does not adopt.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "15.6–8" },
            { source: 1, locator: "30.29–30" },
          ],
          battleSlugs: ["zama"],
        },
        {
          title: "Dispositions both expected",
          text: "Each commander set out his army against the other’s known strengths. Hannibal, Polybius says, placed his elephants in front to throw the Roman ranks into confusion, mercenaries behind them, then Libyans and Carthaginians, and the troops he had brought from Italy far to the rear. Scipio, Livy says, did not close up his maniples but left lanes between them for the elephants, with light troops told to fall back into them; Masinissa’s Numidians were on one wing and Laelius’s Italian cavalry on the other. When the trumpets sounded, Polybius writes, some elephants turned back on Hannibal’s own Numidians, and the rest passed through the gaps Scipio had left.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "15.11–12" },
            { source: 1, locator: "30.33" },
          ],
          battleSlugs: ["zama"],
        },
        {
          title: "The second battle",
          text: "After the first two Carthaginian lines broke, Scipio faced the veterans of Italy across ground covered with dead and arms. Polybius says he recalled by bugle the hastati who were pursuing, carried the wounded to the rear, set the hastati opposite the enemy centre and moved the principes and triarii up on the wings, then sent the whole line over the bodies. The two lines, nearly equal in number, spirit and arms, fought for a long time, the men falling where they stood, until Masinissa and Laelius came back from pursuing the cavalry, providentially, Polybius says, and fell on the rear. The 1911 Britannica calls it a manoeuvre recalling the tactics of Cannae.",
          evidence: "fact",
          refs: [{ source: 0, locator: "15.14" }, { source: 2 }],
          battleSlugs: ["zama"],
        },
        {
          title: "After the battle",
          text: "Hannibal escaped to Hadrumetum and then to Carthage, and told the senate, Livy says, that they had lost not a battle but the war, and that their only safety lay in peace. When a senator rose to oppose the terms, Polybius says, it is said that Hannibal pulled him down from the platform, then apologised: he had left Carthage at nine and was now over forty-five, and they should ask not whether he knew their customs but whether he cared for his country. Livy names the man as Gisgo. The terms Polybius gives left Carthage its laws and its African lands but took its warships and elephants, its right to make war outside Africa, and hostages, with an indemnity spread over fifty years.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "30.35, 30.37" },
            { source: 0, locator: "15.18–19" },
          ],
          battleSlugs: ["zama"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "Scipio’s admirer, who also admired Hannibal and wrote his verdict on Zama for military readers.",
          says: "Hannibal did all that a good general of long experience could do, and no one could have disposed the same arms better against the Romans; a brave man met a braver.",
          refs: [{ source: 0, locator: "15.15–16" }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who writes Zama as the meeting of the two greatest commanders in history, and doubts some of his own sources.",
          says: "Scipio himself, and every experienced soldier, acknowledged Hannibal’s skill in the disposition of his troops.",
          refs: [{ source: 1, locator: "30.30, 30.35" }],
        },
        {
          who: "Valerius Antias, as Livy reports him",
          stake:
            "A Roman annalist whom Livy elsewhere accuses of inventing numbers.",
          says: "Hannibal had already been beaten once and came to Scipio’s camp with envoys to ask for terms.",
          refs: [{ source: 1, locator: "30.29" }],
        },
        {
          who: "The 1911 Britannica",
          stake:
            "A modern summary that sees the battle as decided by numbers of horse and by training.",
          says: "Scipio’s smaller army was well trained throughout and far stronger in cavalry; Hannibal could not make his indifferent troops a match for it, and his veterans were broken only from behind.",
          refs: [{ source: 2 }, { source: 3 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, both commanders knew what the other would try. Hannibal’s victories had been won by cavalry striking the Roman rear; Scipio, as the lesson on learning from the enemy shows, had won Ilipa by breaking the enemy’s wings. At Zama the cavalry was on the Roman side, because Masinissa had come over. Hannibal therefore had to win without the instrument his method needed. His answer, elephants to disorder the Roman ranks and a line in depth to blunt the Roman swords before his veterans engaged, was the best use of what he had, as Polybius insists. Scipio’s lanes show he expected the elephants; his wings show he expected to win where Hannibal used to.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "15.16" },
            { source: 1, locator: "30.33" },
          ],
        },
        {
          text: "Knowing the method was not enough; the battle turned on keeping the army in hand. When the first lines broke, Scipio stopped the pursuit by bugle and rebuilt his line before attacking the veterans, and the cavalry that won the day had first ridden off the field after the Carthaginian horse and had to come back. Polybius’s word for their return, providentially, admits how close it was. The Caesar volume’s lesson on a rival who knew him asks the same question of Pharsalus, where Caesar’s hidden fourth line answered the attack Pompey had planned. In both, the winner had prepared for the method he knew was coming and kept something back.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "15.14" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The meeting at Zama invites a reading of two minds sizing each other up, and the ancient writers supplied the dialogue. None of it is evidence of what either man thought: the speeches are compositions, and the scene of mutual admiration is Livy’s. No research was read for this lesson, and the evidence that matters is what each commander did with his troops.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. What passed between the two men is unknown beyond the fact that they met.",
        },
      ],
      shadow: {
        text: "The meeting is remembered as courtesy between great men, and the war around it was not courteous. Before Zama, after the Carthaginians had seized Roman transports and broken the agreement Scipio had made with them, Polybius says Scipio went round the towns of the Carthaginian countryside no longer accepting surrenders, taking them by assault and selling the inhabitants as slaves, to show his anger. Scipio’s generosity to the spies and his severity to the towns served the same end: to show Carthage what it faced.",
        evidence: "fact",
        refs: [{ source: 0, locator: "15.1–4" }],
        battleSlugs: ["zama"],
      },
      people: ["masinissa"],
      counterCase: {
        text: "Darius III shows the prepared answer failing. After Issus, Arrian says, some persuaded the king that he had been beaten because the field was too narrow, so at Gaugamela he chose open country and had all uneven ground levelled for his chariots and cavalry. Alexander led his army to the right until he was almost off the levelled ground, forcing Darius to send cavalry round to stop him. When the scythed chariots charged, the light troops in front shot down some and seized the reins of others, and where the rest came on, Arrian writes, the men opened their ranks as they had been told, let the chariots through and had them killed behind the line. Darius had prepared for the battle he had lost; Alexander, like Scipio at Zama, had prepared for the weapon he knew was coming. The Alexander volume’s lessons read what followed.",
        evidence: "interpretation",
        refs: [{ source: 4 }, { source: 5 }],
        commanderSlug: "darius-iii",
        battleSlugs: ["gaugamela"],
      },
      cost: {
        text: "Polybius describes the ground between the armies after the first lines had broken: covered with blood and bodies, so slippery with corpses and thrown-away arms that Scipio feared his line would break crossing it. The veterans of Italy fell where they stood, and when the cavalry struck from behind, most were cut down in their ranks and few of those who fled escaped across the level country. The ancient figures for the dead are left out here.",
        evidence: "fact",
        refs: [{ source: 0, locator: "15.14" }],
      },
      transfer: {
        holdsWhen: [
          "Both sides know each other’s methods, so that the advantage lies in having the means the method requires.",
          "The leader has rehearsed what to do when the first phase succeeds, and can stop the people who are winning in order to win again.",
        ],
        failsWhen: [
          "Preparation is aimed at the last contest, not the one in front of you.",
          "The decisive resource leaves the field in pursuit and does not come back in time.",
        ],
        questions: [
          "What does your rival know about your methods, and what are they preparing in answer?",
          "What would you need to stop your own people doing in the middle of a success?",
          "Which resource do you rely on to finish, and what if it is late?",
        ],
      },
      bearsOn:
        "Zama is the only direct test of the premise, and it supports it narrowly. Polybius and Livy both say Hannibal did everything a commander could; he lost to a younger general who had the cavalry, prepared for the elephants and kept his army in hand. The cavalry came from Masinissa, whom Scipio had won over, and the army from Spain and Sicily that Scipio had trained, so the third answer, Scipio’s command, decides the battle. But Hannibal fought at Zama because Rome’s system had outlasted him in Italy, and without the cavalry his method needed because Carthage’s allies had gone.",
      questions: [
        {
          prompt:
            "What did Scipio do with Hannibal’s captured spies, according to Polybius?",
          choices: [
            "He executed them, as was the custom.",
            "He had them shown round his camp and sent them back to report to Hannibal.",
            "He kept them as hostages.",
          ],
          answer: 1,
          explanation:
            "Polybius 15.5; Livy adds that Masinissa had arrived that day.",
        },
        {
          prompt: "How did Scipio deal with Hannibal’s elephants at Zama?",
          choices: [
            "He attacked them with his own elephants.",
            "He left lanes between his maniples for them to pass through.",
            "He retreated until they tired.",
          ],
          answer: 1,
          explanation:
            "Livy 30.33 and Polybius 15.12; Arrian describes Alexander’s men opening their ranks to scythed chariots at Gaugamela.",
        },
        {
          prompt:
            "What decided the final stage of the battle, according to Polybius?",
          choices: [
            "Hannibal’s veterans broke at the first charge.",
            "Masinissa and Laelius returned from the pursuit and fell on the rear of the evenly matched lines.",
            "Rain stopped the fighting.",
          ],
          answer: 1,
          explanation:
            "Polybius 15.14; he says they arrived providentially at the right moment.",
        },
      ],
      sourceCheck: {
        question: "Who asked for the meeting before Zama, and why?",
        witnesses: [
          {
            label: "Polybius 15.5",
            claim:
              "Hannibal, struck by Scipio’s treatment of his spies, wanted to meet and talk with him.",
          },
          {
            label: "Livy 30.29",
            claim:
              "Hannibal asked, hoping for better terms before a defeat; Livy cannot say whether on his own initiative or his government’s.",
          },
          {
            label: "Valerius Antias, in Livy 30.29",
            claim:
              "Hannibal had already been defeated and came with envoys to Scipio’s camp.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Follow Polybius: the meeting came from admiration.",
            feedback:
              "Polybius gives Hannibal a motive no one could have known; Livy’s more political motive is at least as likely.",
          },
          {
            text: "Accept that Hannibal asked for it, keep both motives open, and set aside Antias, whose story neither Livy nor Polybius follows.",
            feedback:
              "The fact is agreed; the motive is a reconstruction, and the reader should say so.",
            best: true,
          },
          {
            text: "Follow Antias, because his account is the most specific.",
            feedback:
              "Livy elsewhere accuses Antias of invention, and gives his version only as a variant.",
          },
        ],
        battleSlug: "zama",
      },
      seminar: {
        prompt:
          "The night before Zama. Argue what each commander should do with what he learned at the meeting, from three positions: Hannibal’s veteran officer from Italy, Masinissa, and a Carthaginian senator who wants peace.",
        guidance:
          "Use the spies, the meeting, the dispositions, the second battle and Darius at Gaugamela. Say what each speaker knew about the other side’s method, and what they could not know.",
      },
      sources: [
        s.pol15,
        s.livy30,
        s.ebPunic,
        s.ebHannibal,
        s.arrian38,
        s.arrian313,
      ],
    },
    {
      slug: "both-rejected",
      title: "Both rejected: what their states did with them",
      part: "The meeting and after",
      themes: ["ethics", "succession"],
      claim:
        "A state can turn on the commanders who served it best once the danger is past, and how each commander answers that test, through its laws or past them, shows what he served.",
      inBrief: {
        strength:
          "Hannibal reformed Carthage’s finances as a magistrate; Scipio, prosecuted, would not plead but did not raise a hand against the Republic.",
        shadow:
          "Hannibal fled to make war on Rome again; Scipio tore up the accounts he was asked for and defied the tribunes.",
      },
      moment: {
        text: "Late in Scipio’s life two tribunes, the Petillii, brought charges against Scipio Africanus, by Valerius Antias’s account. Livy reports what people said. Some blamed the whole citizen body: the two greatest cities in the world had proved ungrateful to their foremost men at almost the same time, Carthage driving the defeated Hannibal into exile and Rome banishing the victorious Scipio in the hour of its victory. Others answered that no citizen should stand so high that he could not be made to answer according to law; nothing protected the liberty of all so much as the power to put the most powerful man on trial.",
        evidence: "fact",
        refs: [{ source: 0, locator: "38.50" }],
      },
      episodes: [
        {
          title: "Hannibal in office",
          text: "After the peace Hannibal served as one of Carthage’s chief magistrates. Livy says the order of judges held office for life and had every citizen’s property and life in its power; when a quaestor of that party ignored Hannibal’s summons, he had him arrested and carried a law making judges elected yearly. Finding that public revenues were wasted or embezzled, so that the payments to Rome threatened a new tax, he showed the assembly that recovering what had been stolen would pay Rome without taxing anyone, and did it. The 1911 Britannica confirms the reform and its result. The men who had lost by it, Livy says, began to urge the Romans against him.",
          evidence: "fact",
          refs: [{ source: 1, locator: "33.45–47" }, { source: 2 }],
          battleSlugs: ["zama"],
        },
        {
          title: "Flight",
          text: "Scipio, Livy says, long opposed Rome’s involvement: it was beneath the Roman people, having beaten Hannibal in war, to act as his prosecutors in Carthaginian party politics. He lost. Roman envoys came, ostensibly about Masinissa. Hannibal understood they had come for him, showed himself in the forum by day, and at night rode to a ship waiting at his estate on the coast. Livy describes the crowd at his house next day, some saying he had fled and more that the Romans had killed him. The Roman envoys told the Carthaginian council he had gone to Antiochus to stir up war, and Carthage answered that it would do whatever Rome thought right. He went to Antiochus, who, the Britannica says, would not trust him with any important command.",
          evidence: "fact",
          refs: [{ source: 1, locator: "33.47–49" }, { source: 2 }],
          battleSlugs: [],
        },
        {
          title: "Scipio on trial",
          text: "The tribunes revived Syracuse and Locri and accused Scipio of taking money from Antiochus. Livy says that on the day of his defence he would not answer the charges: it was the anniversary of Zama, he told the assembly, and he was going to the Capitol to give thanks, and the whole crowd followed him there, leaving the tribunes alone. Then he withdrew to Liternum and would not appear again, and a tribune who was his political enemy, Tiberius Gracchus, stopped the prosecution as a greater disgrace to Rome than to him. Polybius tells, for the sake of the good fame of the dead, of Scipio tearing up an account book in the senate rather than render it. Livy admits he cannot settle who prosecuted Scipio, when or where he died.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "38.51–53, 38.56" },
            { source: 3, locator: "23.14" },
          ],
          battleSlugs: [],
        },
        {
          title: "Two deaths",
          text: "Hannibal ended at the court of Prusias of Bithynia. When Flamininus came from Rome, Livy says, the king’s soldiers surrounded the house, every exit was guarded, and Hannibal took the poison he had long kept ready; the speech Livy gives him against Rome and his host is Livy’s composition. Plutarch says there were several accounts of his death, and that many senators thought Flamininus’s pursuit of a harmless old man odious, setting it against Scipio’s magnanimity. Livy says Scipio died about the same time, by Polybius’s dating, which he disputes, and that it is said he ordered his tomb at Liternum so that his ungrateful country would not bury him.",
          evidence: "fact",
          refs: [
            { source: 4, locator: "39.51–52" },
            { source: 5, locator: "20–21" },
            { source: 0, locator: "38.53" },
          ],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Livy",
          stake:
            "A Roman historian of the Augustan age, writing about the limits of great men’s power in a state that had just been ruled by one.",
          says: "Neither Hannibal, Scipio nor Philopoemen died in a way worthy of his career, nor in his own country.",
          refs: [{ source: 4, locator: "39.52" }],
        },
        {
          who: "Polybius",
          stake:
            "The friend of Scipio’s adoptive grandson, who says plainly why he tells these stories.",
          says: "Scipio had won such affection that his accusers were left alone in the forum; these anecdotes are told for the good fame of the dead.",
          refs: [{ source: 3, locator: "23.14" }],
        },
        {
          who: "Tiberius Gracchus, as Livy reports him",
          stake:
            "Scipio’s political opponent, whose speech Livy says survived but did not fit the other accounts.",
          says: "Scipio on trial would shame Rome more than himself; yet in the speech Livy says survived, Gracchus complained that Scipio had once defied the tribunes by force to free his brother.",
          refs: [{ source: 0, locator: "38.52–53, 38.56" }],
        },
        {
          who: "Plutarch",
          stake:
            "A Greek biographer of Flamininus, who reports both the senate’s disgust and the defence of his act.",
          says: "Many thought the hounding of Hannibal cruel and vain; others thought him a fire that needed only fanning while he lived.",
          refs: [{ source: 5, locator: "21" }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, each state had reasons. Carthage was paying Rome and could not afford to be thought to shelter Rome’s enemy; Hannibal’s reforms had made him powerful enemies at home, who used Rome against him. Rome had a hero whose authority, by his accusers’ account, had come to outweigh the senate’s; the principle Livy reports, that no citizen should be beyond trial, was not only envy. The test for the commanders was what to do when their states turned. Neither used an army against his own state. Hannibal left and went to a king at war with Rome; Scipio stayed within reach and refused to submit.",
          evidence: "interpretation",
          refs: [
            { source: 1, locator: "33.46–47" },
            { source: 0, locator: "38.50–51" },
          ],
        },
        {
          text: "Their answers show different loyalties. Hannibal served Carthage while he could, honestly by Livy’s own account, and when Carthage could no longer protect him he served his war with Rome, as he told Antiochus, in Polybius’s account of the oath, that he always would. Scipio served the Republic by his own lights: he had refused the dictatorship and the statues the people offered him, Gracchus reminded the assembly, but he would not account for money or appear before tribunes. The restraint that kept him from Caesar’s road also kept him from submitting to the law he had refused to rise above.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "38.56" },
            { source: 3, locator: "23.14" },
            { source: 8, locator: "3.11–12" },
          ],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "The endings invite psychological readings, bitterness in exile, pride at Liternum, and the sources supply speeches and gestures to support them. None is safe. Hannibal’s last words are Livy’s; Scipio’s defiance is told by his family’s friend for the good fame of the dead; Livy himself cannot settle the facts of Scipio’s last years. No research is offered.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered. Both men’s feelings at the end are known only through admirers or enemies.",
        },
      ],
      shadow: {
        text: "Each man’s answer had a cost to the state he served. Scipio’s refusal to account for public money, which Polybius tells as greatness, was also a refusal of the oversight that Rome’s liberty depended on, and Livy’s other version has him using violence against tribunes to free his brother. Hannibal’s flight took him to Antiochus, and the Roman envoys’ charge that he would stir up war everywhere was, by his own story of the oath, not unfounded. Both states treated their great men badly; both men gave their states reasons.",
        evidence: "interpretation",
        refs: [
          { source: 3, locator: "23.14" },
          { source: 0, locator: "38.56" },
          { source: 1, locator: "33.49" },
          { source: 8, locator: "3.11–12" },
        ],
      },
      counterCase: {
        text: "Georgy Zhukov faced the same test in a state far harsher than Rome. Britannica says that after commanding the assault on Berlin and receiving Germany’s surrender, he came home in 1946 so popular that Stalin apparently saw him as a threat and sent him to a series of obscure regional commands. He went. After Stalin died the new leaders, wanting the army’s support, brought him back; in 1957 he provided the aircraft that carried Central Committee members to Moscow to save Khrushchev from a majority of the Presidium. Months later Khrushchev, unable to tolerate his efforts to make the army more autonomous, dismissed him. Zhukov accepted obscurity twice and was honoured late; when he used the army’s means in politics once, for his master, it ended his career.",
        evidence: "interpretation",
        refs: [{ source: 6 }],
        commanderSlug: "georgy-zhukov",
        battleSlugs: ["berlin-1945"],
      },
      cost: {
        text: "Carthage’s citizens paid for the peace that Hannibal urged and the reforms that drove him out. Livy says that when the first instalment of the indemnity came due the treasury was empty and the senate wept; he gives Hannibal a reply, which is Livy’s composition, that they should have wept when their arms and ships were taken. Hannibal’s reforms were meant to spare citizens a new tax to pay Rome, and the men who lost by them turned to Rome to be rid of him.",
        evidence: "fact",
        refs: [
          { source: 7, locator: "30.44" },
          { source: 1, locator: "33.46–47" },
        ],
      },
      transfer: {
        holdsWhen: [
          "The danger that made a leader indispensable has passed, and the institutions they bypassed reassert themselves.",
          "The leader’s rivals at home can borrow the authority of an outside power.",
        ],
        failsWhen: [
          "The leader treats the institution’s demand for an account as an insult to be refused.",
          "The leader answers rejection by finding another patron to continue the old fight.",
        ],
        questions: [
          "When your organisation no longer needs you as much, what account will it ask of you, and will you give it?",
          "Which of your reforms has made enemies who would welcome outside help against you?",
          "If you were pushed aside, what would you do that showed what you had been serving?",
        ],
      },
      bearsOn:
        "This lesson changes the question’s frame: neither state was grateful, and neither commander outlived his war in honour. For the record, the fourth answer, it shows why the stories survive in the form they do: Scipio’s defiance told for his good fame, Hannibal’s death told with a speech against Rome by a Roman historian. For Rome’s system, the second answer, it shows the system’s other side: the same institutions that outlasted Hannibal would not exempt Scipio.",
      questions: [
        {
          prompt:
            "What reform did Hannibal carry as a magistrate at Carthage, according to Livy?",
          choices: [
            "He abolished the senate.",
            "He made the judges, who had held office for life, elected yearly, and recovered embezzled revenue to pay Rome without new taxes.",
            "He raised a new army.",
          ],
          answer: 1,
          explanation:
            "Livy 33.46–47; the men who lost by it urged Rome against him.",
        },
        {
          prompt:
            "What did Scipio do on the day of his defence, according to Livy?",
          choices: [
            "He answered every charge in detail.",
            "He said it was the anniversary of Zama and led the assembly to the Capitol to give thanks.",
            "He fled to Antiochus.",
          ],
          answer: 1,
          explanation: "Livy 38.51; he then withdrew to Liternum.",
        },
        {
          prompt:
            "Why, according to Britannica, was Zhukov dismissed as defence minister in 1957?",
          choices: [
            "For losing a battle.",
            "Because Khrushchev could not tolerate his efforts to make the army more autonomous.",
            "For corruption.",
          ],
          answer: 1,
          explanation:
            "Months after he had helped Khrushchev survive the attempt to oust him.",
        },
      ],
      sourceCheck: {
        question: "Was Scipio’s prosecution ingratitude, or the law at work?",
        witnesses: [
          {
            label: "Livy 38.50",
            claim:
              "Some called Rome ungrateful to its foremost man; others said no citizen should be above answering to the law.",
          },
          {
            label: "Polybius 23.14",
            claim:
              "Scipio tore up the account book rather than render it, and Polybius tells it for his good fame.",
          },
          {
            label: "Livy 38.56",
            claim:
              "In another version Scipio freed his brother from arrest by force, and Gracchus complained that a private citizen had defied the tribunes.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Ingratitude: Polybius shows a great man hounded by lesser ones.",
            feedback:
              "Polybius says he tells the anecdotes for Scipio’s good fame; the same story shows a refusal to account for public money.",
          },
          {
            text: "Both: the prosecution had political motives, and it also tested a principle Scipio would not accept; Livy reports both views and his sources disagree on the facts.",
            feedback:
              "This keeps both readings, which Livy himself presents, and notes that the facts are uncertain.",
            best: true,
          },
          {
            text: "The law: Scipio was guilty because he would not answer.",
            feedback:
              "Refusing to answer is not proof of the charge; no source shows the bribery.",
          },
        ],
        campaignSlug: "scipio-s-african-campaign",
      },
      seminar: {
        prompt:
          "Rome, the day Scipio walks from the Rostra to the Capitol. Argue what the Republic owes him, and what he owes it, from three positions: a tribune of the plebs, a veteran of Zama, and a Carthaginian merchant in Rome who remembers Hannibal’s flight.",
        guidance:
          "Use Hannibal’s reforms and flight, Scipio’s trial and the torn account book, the two deaths and Zhukov’s dismissal. Say what each state could reasonably demand of a commander once the war was over.",
      },
      sources: [
        s.livy38,
        s.livy33,
        s.ebHannibal,
        s.pol23,
        s.livy39,
        s.plutarchFlamininus,
        s.britZhukov,
        s.livy30,
        s.pol3,
      ],
    },
    {
      slug: "the-ledger",
      title: "The ledger: why did the better tactician lose?",
      part: "The meeting and after",
      themes: ["judgement", "ethics"],
      claim:
        "When a war is weighed whole, the winner of the great battles can prove to have lost to a system, a rival and a record at once, but the verdict holds only when the costs are counted with the victories and the reader says openly which evidence decided it.",
      inBrief: {
        strength:
          "Hannibal won every great battle in Italy and held an army together for fifteen years far from home.",
        shadow:
          "Italy, Spain and Africa paid for the war, and half a century later Carthage itself was destroyed.",
      },
      moment: {
        text: "The two verdicts that frame this volume were written two thousand years apart. Polybius, who knew the Romans from within, admired Hannibal’s generalship over sixteen years and judged that had he begun with the rest of the world and finished with the Romans, none of his plans would have failed; he began with those he should have left to last. The 1911 Britannica, reading Polybius among others, answered that Carthage could only hope to win by invading Italy and turning Rome’s own resources against it, and that the failure was due not to any strategic mistake but to Rome’s strength of will and the compactness of its Italian confederacy: individual genius overborne by corporate and persevering effort.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "11.19" }, { source: 1 }],
      },
      episodes: [
        {
          title: "Hannibal’s strategy",
          text: "The invasion needed two things it could not compel. Rome’s allies had to change sides, and before Cannae, Polybius says, not one Italian city did. Rome had to treat, and in the speech Livy gives him after Cannae, Hanno asked the Carthaginian senate whether any Roman had so much as mentioned peace. When the south did go over, Hannibal could not protect it: Livy’s verdict on Capua is that its fate showed his powerlessness to defend those who had joined him. The lessons on the invasion and on the allies who stayed weigh this answer; it is strong, but it is the strength of a plan that depended on its enemy.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "3.90, 3.118" },
            { source: 3, locator: "23.13" },
            { source: 4, locator: "26.16" },
          ],
          battleSlugs: ["cannae"],
        },
        {
          title: "Rome’s system",
          text: "Polybius credits Rome’s recovery after Cannae to its constitution and to wise counsel. The volume has followed the system at work: a dictator who refused battle, a senate that would not ransom its prisoners or mention peace, colonies that kept sending men even when twelve of them refused, and, as the lesson on the Delayer tells, a consul who left his own front to destroy a relieving army on the Metaurus before Hannibal knew it had come. The system also produced Scipio, by an assembly’s vote, and audited him after Locri. It did not win by delay alone, as the lesson on the Delayer shows; it won by enduring until its bolder commanders could strike.",
          evidence: "interpretation",
          refs: [
            { source: 2, locator: "3.118" },
            { source: 5, locator: "27.9–10" },
          ],
          battleSlugs: ["metaurus"],
        },
        {
          title: "Scipio’s command",
          text: "Scipio took Carthage’s base in Spain by calculation, won its peoples with returned hostages and freed prisoners, beat its armies by reversing his own habits at Ilipa, carried the war to Africa against the senate’s most respected voice, and at Zama had the cavalry Hannibal lacked because Masinissa had come over. Polybius’s verdict on Zama is that Hannibal did all a good general could and met a braver man. Whether Scipio learned from Hannibal the sources never say; that he learned from defeat and from his enemies’ habits, they show.",
          evidence: "interpretation",
          refs: [{ source: 6, locator: "15.15–16" }],
          battleSlugs: ["ilipa", "zama"],
        },
        {
          title: "The record",
          text: "Every answer reaches us through the winners’ side. Polybius drew on Laelius and wrote as the friend of Scipio’s grandson; Livy wrote two centuries later for Romans; Hannibal’s own historians survive only in his enemies’ quotations, and the Britannica notes that nearly all that is known of him comes from hostile sources. In the speech Livy gives him at his recall, Hannibal blames not the Roman people but the Carthaginian senate’s envy, a fifth answer the record allows only in a Roman’s words. The record does not decide the question, but it decides what evidence the other answers can use.",
          evidence: "interpretation",
          refs: [{ source: 7 }, { source: 8, locator: "30.20" }],
          battleSlugs: [],
          campaignSlugs: ["hannibal-s-italian-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Polybius",
          stake:
            "A Greek who watched Rome conquer his own country and became the friend of the man who destroyed Carthage.",
          says: "Hannibal’s choice of enemy was his mistake; Rome’s constitution was its strength.",
          refs: [
            { source: 0, locator: "11.19" },
            { source: 2, locator: "3.118" },
          ],
        },
        {
          who: "The 1911 Britannica",
          stake:
            "A modern reference written in an age of empires, admiring Rome’s will and Hannibal’s genius together.",
          says: "Carthage could only win by invading Italy, and Hannibal made no strategic mistake; individual genius was overborne by corporate effort.",
          refs: [{ source: 1 }],
        },
        {
          who: "Livy",
          stake:
            "A Roman historian who admired Hannibal most in adversity and wrote Rome’s endurance as its virtue.",
          says: "In thirteen years in an enemy’s country no mutiny broke out in his army of many peoples, though Carthage sent him nothing.",
          refs: [{ source: 9, locator: "28.12" }],
        },
        {
          who: "Hannibal, as Livy imagines him at his recall",
          stake:
            "Words a Roman historian composed for the defeated general two centuries later.",
          says: "Not the Roman people, so often routed, but the Carthaginian senate’s envy had beaten him.",
          refs: [{ source: 8, locator: "30.20" }],
        },
      ],
      strategist: [
        {
          text: "Weighed without hindsight, the strategy was the only one that offered Carthage victory, as the Britannica argues, and it was also a wager on things Hannibal could not control, as Polybius implies. Both verdicts can be true. The invasion turned Rome’s strength, its manpower and allies, into the object of the war; it would succeed if the allies broke and fail if they held. They held, mostly, because Rome’s system gave them more to lose by leaving and Hannibal could not protect them when they did. On this volume’s evidence, the war was lost first in the allied cities of Italy and the Roman senate, not on a battlefield.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 0, locator: "11.19" }],
        },
        {
          text: "The premise, that Hannibal was the better tactician, survives but narrowly. He won every great battle he chose in Italy by reading Roman commanders and using cavalry and ground; Scipio won his by preparation, by reversing his own habits and by allies. At Zama the two met when Scipio had the instrument Hannibal’s method needed and Hannibal did not. The better tactician on the field lost to a better strategist of alliances and a better state. Readers who think the premise wrong should argue that Scipio’s battles, never lost, are the stronger record; the sources would allow it.",
          evidence: "interpretation",
          refs: [{ source: 6, locator: "15.15–16" }],
        },
      ],
      psychologist: [
        {
          mechanism: "None offered",
          base: "none",
          text: "A ledger of a war is a judgement of value and of evidence, not a psychological question. The earlier lessons used research only where a sound review spoke to a narrow point, on learning from models, on diversity in groups, on reading character from behaviour. None of it can weigh a war, and none is offered here.",
          evidence: "interpretation",
          refs: [],
          limit:
            "No mechanism is offered; the lesson weighs sources and costs.",
        },
      ],
      shadow: {
        text: "The war’s last cost came fifty years after it ended. The 1911 Britannica says Carthage’s revived commerce roused Roman jealousy and alarm, a pretext was found, and after a siege that went badly for the Romans for two years Scipio Aemilianus, Africanus’s adoptive grandson and Polybius’s friend, took the city street by street; the survivors were sold into slavery, the city razed and its site cursed to lie desolate. Whatever Carthage might have written about Hannibal went with it. Livy records a tradition that Scipio Africanus used to say only the jealousy of two Roman consuls had kept the war of his own day from ending with Carthage’s destruction.",
        evidence: "fact",
        refs: [{ source: 1 }, { source: 8, locator: "30.44" }],
      },
      counterCase: {
        text: "Napoleon in 1813 lost a war the same way, and the Napoleon volume’s lesson on rivals who learn reads it from his side. Britannica says the allies agreed to avoid battle with Napoleon himself and attack his subordinates. He beat Schwarzenberg at Dresden, his last great victory, and within days his marshals were routed at Grossbeeren, the Katzbach and Kulm, and later at Dennewitz; Bavaria changed sides; at Leipzig the converging armies beat him, and for the second year running he lost an army. Rome had done the same to Hannibal: avoided him when it could, beat Hasdrubal on the Metaurus, and took Spain and Africa from under him. A commander who wins every battle he fights can still lose to enemies who choose which battles to give him.",
        evidence: "interpretation",
        refs: [{ source: 10 }],
        commanderSlug: "napoleon-bonaparte",
        battleSlugs: ["dresden", "leipzig"],
      },
      cost: {
        text: "The ledger’s other column runs through every lesson. Italy laid waste by both armies for fifteen years, with orders on Hannibal’s march after Trasimene to kill the adults met on the road. The Latin colonies drained by levies and taxes. Capua’s people sold and its government abolished; Tarentum sacked. The inhabitants of New Carthage killed in the streets by Roman custom and its craftsmen made public slaves. The Africans sold after Baecula, the towns of the Carthaginian countryside sold before Zama, and the Italian soldiers who would not sail with Hannibal killed, in Livy’s account and Appian’s. The ancient figures for all of them are left out.",
        evidence: "fact",
        refs: [
          { source: 2, locator: "3.86" },
          { source: 5, locator: "27.9, 27.16, 27.19" },
          { source: 4, locator: "26.16" },
          { source: 11, locator: "10.15, 10.17" },
          { source: 6, locator: "15.4" },
          { source: 8, locator: "30.20" },
          { source: 12, locator: "59" },
        ],
      },
      transfer: {
        holdsWhen: [
          "A contest is judged as a whole, with its costs and its sources entered beside its results.",
          "The reader can say which evidence decided the verdict, and what would change it.",
        ],
        failsWhen: [
          "The best performer is assumed to be the deserving winner, and the system that outlasted them is left out.",
          "The account of the contest was written by one side and is read as if it were neutral.",
        ],
        questions: [
          "In your field, who won the visible contests and who won the long one, and why were they different?",
          "What in your organisation plays the part of Rome’s allies: the thing that holds when the battles go badly?",
          "Whose account of your last success will survive, and whose will not?",
        ],
      },
      bearsOn:
        "Why did the better tactician lose the war? This volume’s answer is Rome’s system first: a state that would not treat, replaced its armies and kept most of its allies, and so turned Hannibal’s victories into a war of attrition he could not win far from home. Scipio’s command second: a commander that system produced, who took away Carthage’s base, its allies and its cavalry and then beat Hannibal with them. Hannibal’s strategy third: not a mistake in its choice, which was the only path to victory, but a wager on allies and on Rome’s will that both went against him. And the record over all three, written by the winners’ friends. Argue the opposite: that Scipio, not Rome, decided the war, because without Spain and Masinissa the system could have endured for ever without winning.",
      questions: [
        {
          prompt: "What did Polybius think was Hannibal’s great mistake?",
          choices: [
            "Crossing the Alps.",
            "Beginning with the Romans, whom he should have left to the last.",
            "Not marching on Rome after Trasimene.",
          ],
          answer: 1,
          explanation:
            "Polybius 11.19; the 1911 Britannica answers that invading Italy was Carthage’s only path to victory.",
        },
        {
          prompt:
            "To what did the 1911 Britannica attribute Hannibal’s failure?",
          choices: [
            "To his strategic mistakes.",
            "To Rome’s strength of will and the compactness of its Italian confederacy.",
            "To the elephants.",
          ],
          answer: 1,
          explanation:
            "Individual genius overborne by corporate and persevering effort.",
        },
        {
          prompt:
            "What plan did the allies adopt against Napoleon in 1813, according to Britannica?",
          choices: [
            "To seek battle with him at once.",
            "To avoid battle with Napoleon himself and attack his subordinates.",
            "To make peace on his terms.",
          ],
          answer: 1,
          explanation:
            "Dresden was his last great victory; the war was lost around it.",
        },
      ],
      sourceCheck: {
        question: "Was Hannibal’s strategy a mistake?",
        witnesses: [
          {
            label: "Polybius 11.19",
            claim:
              "Had he begun with the rest of the world and finished with Rome, none of his plans would have failed.",
          },
          {
            label: "1911 Britannica, “Punic Wars”",
            claim:
              "Carthage could only win by invading Italy; the failure was not due to any strategic mistake.",
          },
          {
            label: "Hanno, in Livy 23.13",
            claim:
              "A victory that brings no Roman offer of peace has not shortened the war.",
          },
        ],
        prompt: "How should a reader weigh these?",
        options: [
          {
            text: "Polybius is right, because he was closer to events.",
            feedback:
              "Polybius was closer, but his alternative, conquering the rest of the world first, is a counterfactual no one could test.",
          },
          {
            text: "Both can be true: invasion was Carthage’s only chance, and it was a wager on allies and on Rome’s will that went against it; Hanno’s question names the wager.",
            feedback:
              "This keeps the two verdicts as answers to different questions, the choice and the odds, and uses the Carthaginian voice the record preserves.",
            best: true,
          },
          {
            text: "The Britannica is right, because modern scholarship supersedes ancient opinion.",
            feedback:
              "The Britannica reads the same ancient sources; its verdict is an argument, not new evidence.",
          },
        ],
        campaignSlug: "hannibal-s-italian-campaign",
      },
      seminar: {
        prompt:
          "Write the epitaph for the war. Argue why the better tactician lost, from three positions: a Carthaginian who survived the fall of the city in 146, a Latin colonist whose town held, and Polybius himself.",
        guidance:
          "Use the volume’s four answers, the two verdicts, the costs and Napoleon in 1813. Each speaker must name the evidence that decided their verdict and the evidence they would rather not count.",
      },
      sources: [
        s.pol11,
        s.ebPunic,
        s.pol3,
        s.livy23,
        s.livy26,
        s.livy27,
        s.pol15,
        s.ebHannibal,
        s.livy30,
        s.livy28,
        s.britAutumn1813,
        s.pol10,
        s.appianHannibal12,
      ],
    },
  ],
};
