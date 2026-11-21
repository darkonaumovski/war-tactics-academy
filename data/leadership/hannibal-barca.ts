import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 7, shared by Hannibal and Scipio, written in reviewed batches (batch
// H1, the pilot, is lessons 0, the record, 5, Rome's answer, and 7, Scipio
// learning from the enemy; batch H2 is lessons 1 to 4, Hannibal's war);
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
  pol15: polybius(15),
  pol23: polybius(23),
  livy21: livy(21),
  livy22: livy(22),
  livy23: livy(23),
  livy25: livy(25),
  livy26: livy(26),
  livy27: livy(27),
  livy28: livy(28),
  livy30: livy(30),
  livy38: livy(38),
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
  ],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
