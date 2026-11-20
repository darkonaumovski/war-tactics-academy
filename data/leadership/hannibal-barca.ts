import type { LeadershipVolume, Source } from "../../lib/types";
// Volume 7, shared by Hannibal and Scipio, written in reviewed batches (batch
// H1, the pilot, is lessons 0, the record, 5, Rome's answer, and 7, Scipio
// learning from the enemy); docs/LEADERSHIP_EVIDENCE_HANNIBAL_SCIPIO.md records
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
  ciceroCato: {
    title: "Cicero, Cato maior de senectute (Latin text)",
    url: "https://la.wikisource.org/wiki/Cato_maior_de_senectute",
    publisher: "Wikisource (Latin)",
  },
  ebPolybius: eb1911("Polybius", "Polybius"),
  ebPunic: eb1911("Punic_Wars", "Punic Wars"),
  ebScipio: eb1911("Scipio", "Scipio"),
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
