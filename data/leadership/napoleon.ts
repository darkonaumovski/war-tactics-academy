import type { LeadershipVolume, Source } from "../../lib/types";
// Lessons are added in reviewed batches; docs/LEADERSHIP_EVIDENCE.md records
// which sources can carry each one, and docs/SOURCE_AUDIT.md how each was read.
const archive = (id: string) => `https://archive.org/details/${id}`;
const fondation = "Fondation Napoléon";
const britannica = "Encyclopaedia Britannica";
const s = {
  houdecek: {
    title:
      "Bulletins de la Grande Armée commandés par Napoléon (François Houdecek, 2019)",
    url: "https://www.napoleon.org/histoire-des-2-empires/objets/bulletin-de-la-grande-armee",
    publisher: fondation,
  },
  nice: {
    title:
      "De Paris à Milan, mars–mai 1796 (Revue du Souvenir Napoléonien 406)",
    url: "https://www.napoleon.org/wp-content/themes/napoleon/annexes/hors-serie/premiere-campagne-italie/fr/lesecrits/articles/articles01.html",
    publisher: fondation,
  },
  arcole: {
    title: "Arcole",
    url: "https://www.napoleon.org/en/magazine/places/arcole-2/",
    publisher: fondation,
  },
  marengo: {
    title: "Marengo",
    url: "https://www.napoleon.org/en/magazine/places/marengo-2/",
    publisher: fondation,
  },
  short: {
    title: "Was Napoleon Short? (Alicja Zelazko)",
    url: "https://www.britannica.com/story/was-napoleon-short",
    publisher: britannica,
  },
  stanhope: {
    title:
      "Earl Stanhope, Notes of Conversations with the Duke of Wellington, 1831–1851",
    url: archive("notesofconversat00stanrich"),
    publisher: "Internet Archive",
  },
  gourgaud: {
    title: "Talks of Napoleon at St. Helena with General Baron Gourgaud (1903)",
    url: archive("talksofnapoleona01gour"),
    publisher: "Internet Archive",
  },
  metternich: {
    title: "Memoirs of Prince Metternich, 1773–1815, vol. 1",
    url: archive("memoirsofprincem0001prin"),
    publisher: "Internet Archive",
  },
  chaptal: {
    title: "Jean-Antoine Chaptal, Mes souvenirs sur Napoléon (1893), in French",
    url: archive("messouvenirssurn00chapuoft"),
    publisher: "Plon (Internet Archive)",
  },
  thibaudeau: {
    title:
      "A. C. Thibaudeau, Bonaparte and the Consulate, translated and edited by G. K. Fortescue",
    url: archive("bonaparteconsula00thib"),
    publisher: "Methuen (Internet Archive)",
  },
  fischhoff: {
    title:
      "Baruch Fischhoff, Fifty years of hindsight bias research: Reflection on Fischhoff (1975), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/39913490/",
    publisher: "Journal of Experimental Psychology (PubMed)",
  },
  clausewitz: {
    title: "Carl von Clausewitz, On War, translated by J. J. Graham",
    url: "https://www.gutenberg.org/files/1946/1946-h/1946-h.htm",
    publisher: "Project Gutenberg",
  },
  timeline: {
    title: "Austerlitz, 2 December 1805: a timeline",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/timelines/austerlitz-2-december-1805-a-timeline",
    publisher: fondation,
  },
  corsican: {
    title:
      "The Corsican: A Diary of Napoleon’s Life in His Own Words, ed. R. M. Johnston",
    url: archive("corsicandiary00napouoft"),
    publisher: "Houghton Mifflin, 1910 (Internet Archive)",
  },
  rose: {
    title: "J. Holland Rose, “Napoleon I.”, Encyclopædia Britannica, 11th ed.",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Napoleon_I.",
    publisher: "Wikisource",
  },
  italy: {
    title: "French Revolutionary wars: Campaign in Italy",
    url: "https://www.britannica.com/event/French-revolutionary-wars/Campaign-in-Italy",
    publisher: britannica,
  },
  forces: {
    title: "Napoleonic Wars: French and British armed forces",
    url: "https://www.britannica.com/event/Napoleonic-Wars/French-and-British-armed-forces",
    publisher: britannica,
  },
  russia: {
    title: "Napoleonic Wars: The Russian campaign, 1812",
    url: "https://www.britannica.com/event/Napoleonic-Wars/France-and-northern-Europe-1809-12",
    publisher: britannica,
  },
  retreat: {
    title: "Napoleonic Wars: The retreat from Moscow",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-retreat-from-Moscow",
    publisher: britannica,
  },
  borodino: {
    title: "Battle of Borodino",
    url: "https://www.britannica.com/event/Battle-of-Borodino",
    publisher: britannica,
  },
  smolensk: {
    title: "Battle of Smolensk (John Swift)",
    url: "https://www.britannica.com/event/Battle-of-Smolensk",
    publisher: britannica,
  },
  acre: {
    title: "Siege of Acre (Adrian Gilbert)",
    url: "https://www.britannica.com/event/Siege-of-Acre-1799",
    publisher: britannica,
  },
  caulaincourt: {
    title:
      "With Napoleon in Russia: The Memoirs of General de Caulaincourt, ed. Jean Hanoteau, abridged by George Libaire",
    url: archive("in.ernet.dli.2015.58850"),
    publisher: "William Morrow, 1935 (Internet Archive)",
  },
  kahnemanKlein: {
    title:
      "Daniel Kahneman and Gary Klein, Conditions for intuitive expertise: a failure to disagree (2009), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/19739881/",
    publisher: "American Psychologist (PubMed)",
  },
  klein: {
    title: "Gary Klein, Naturalistic decision making (2008), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/18689053/",
    publisher: "Human Factors (PubMed)",
  },
  lentz: {
    title:
      "Bullet Point #5: Was the Egyptian Campaign one of Napoleon’s great successes? (Thierry Lentz)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/bullet-point-5-egyptian-campaign-one-napoleons-great-successes/",
    publisher: fondation,
  },
  ganiere: {
    title:
      "La retraite de Russie (Paul Ganière, Revue du Souvenir Napoléonien 354)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/la-retraite-de-russie/",
    publisher: fondation,
  },
  fili: {
    title:
      "1812 La Campagne de Russie : 2 : De Borodino à Moscou (Hamish Davey-Wright)",
    url: "https://www.napoleon.org/histoire-des-2-empires/chronologies/1812-la-campagne-de-russie-2-de-borodino-a-moscou/",
    publisher: fondation,
  },
  bialek: {
    title:
      "Michał Białek, Michał Węgrzyn and Ethan Meyers, Escalation of commitment is independent of numeracy and cognitive reflection: failed replication and extension of Staw (1976), abstract",
    url: "https://journals.ue.poznan.pl/ebr/article/view/428",
    publisher: "Economics and Business Review",
  },
  flora: {
    title: "Replications of Staw (1976), Knee-deep in the big muddy",
    url: "https://forrt.org/flora-replication-atlas/doi/10.1016/0030-5073(76)90005-2/",
    publisher: "FLoRA Replication Atlas",
  },
  sleesman: {
    title:
      "Dustin Sleesman and others, Cleaning up the big muddy: a meta-analytic review of the determinants of escalation of commitment (2012), abstract",
    url: "https://doi.org/10.5465/amj.2010.0696",
    publisher: "Academy of Management Journal",
  },
  artillery: {
    title:
      "“Artillery”, Encyclopædia Britannica, 11th ed., section on Gribeauval’s reforms",
    url: "https://en.wikisource.org/wiki/Page:EB1911_-_Volume_02.djvu/729",
    publisher: "Wikisource",
  },
  frw: {
    title: "“French Revolutionary Wars”, Encyclopædia Britannica, 11th ed.",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/French_Revolutionary_Wars",
    publisher: "Wikisource",
  },
  campaigns: {
    title: "“Napoleonic Campaigns”, Encyclopædia Britannica, 11th ed.",
    url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Napoleonic_Campaigns",
    publisher: "Wikisource",
  },
  firstCoalition: {
    title:
      "French Revolutionary wars: The First Coalition and the Jacobin regime",
    url: "https://www.britannica.com/event/French-revolutionary-wars/The-First-Coalition-and-the-Jacobin-regime",
    publisher: britannica,
  },
  archduke: {
    title: "Archduke Charles",
    url: "https://www.britannica.com/biography/Archduke-Charles",
    publisher: britannica,
  },
  jena: {
    title: "Battle of Jena",
    url: "https://www.britannica.com/event/Battle-of-Jena",
    publisher: britannica,
  },
  jenaCampaign: {
    title:
      "Napoleonic Wars: Trafalgar and Italy (the campaign of Jena and Auerstädt)",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Trafalgar-and-Italy",
    publisher: britannica,
  },
  coalitions: {
    title: "Napoleonic Wars: The Third and Fourth Coalitions, 1803–07",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-Third-and-Fourth-Coalitions-1803-07",
    publisher: britannica,
  },
  ulm: {
    title: "Battle of Ulm",
    url: "https://www.britannica.com/event/Battle-of-Ulm",
    publisher: britannica,
  },
  marengoBattle: {
    title: "Battle of Marengo",
    url: "https://www.britannica.com/event/Battle-of-Marengo",
    publisher: britannica,
  },
  france1814: {
    title: "Napoleonic Wars: The campaign of France, 1814",
    url: "https://www.britannica.com/event/Napoleonic-Wars/The-campaign-of-France-1814",
    publisher: britannica,
  },
  autumn1813: {
    title: "Napoleonic Wars: Dispositions for the autumn campaign",
    url: "https://www.britannica.com/event/Napoleonic-Wars/Dispositions-for-the-autumn-campaign",
    publisher: britannica,
  },
  tolentino: {
    title:
      "De Mantoue à Tolentino, juin 1796 – février 1797 (Revue du Souvenir Napoléonien 410)",
    url: "https://www.napoleon.org/wp-content/themes/napoleon/annexes/hors-serie/premiere-campagne-italie/fr/lesecrits/articles/articles02.html",
    publisher: fondation,
  },
  linden: {
    title:
      "Davout, homme de devoir. 1. Le soldat (Jean Linden, Revue du Souvenir Napoléonien 303)",
    url: "https://www.napoleon.org/histoire-des-2-empires/articles/davout-homme-de-devoir-1-le-soldat/",
    publisher: fondation,
  },
  collapse: {
    title:
      "The collapse of the Grand Empire: introduction to volume 14 of the Correspondance générale (François Houdecek)",
    url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/collapse-grand-empire-introduction-volume-14-correspondance-generale-de-napoleon-bonaparte-leipzig-juillet-1813-decembre-1813/",
    publisher: fondation,
  },
  criste: {
    title: "Weyrother, Franz von (Oscar Criste, ADB 42, 1897), in German",
    url: "https://www.deutsche-biographie.de/sfz85314.html",
    publisher: "Allgemeine Deutsche Biographie",
  },
  houssaye: {
    title: "Henry Houssaye, 1815: Waterloo",
    url: archive("1815waterloo00hous"),
    publisher: "Internet Archive",
  },
  gilbertMalone: {
    title:
      "Daniel Gilbert and Patrick Malone, The correspondence bias (1995), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/7870861/",
    publisher: "Psychological Bulletin (PubMed)",
  },
  schyns: {
    title:
      "Birgit Schyns, Jörg Felfe and Hartmut Blank, Is charisma hyper-romanticism? Empirical evidence from new data and a meta-analysis (2007), abstract",
    url: "https://doi.org/10.1111/j.1464-0597.2007.00302.x",
    publisher: "Applied Psychology",
  },
  mooreHealy: {
    title:
      "Don Moore and Paul Healy, The trouble with overconfidence (2008), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/18426301/",
    publisher: "Psychological Review (PubMed)",
  },
  mitchell: {
    title:
      "Deborah Mitchell, J. Edward Russo and Nancy Pennington, Back to the future: temporal perspective in the explanation of events (1989), abstract",
    url: "https://doi.org/10.1002/bdm.3960020103",
    publisher: "Journal of Behavioral Decision Making",
  },
  harrisonHorne: {
    title:
      "Yvonne Harrison and James Horne, The impact of sleep deprivation on decision making: a review (2000), abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/11014055/",
    publisher: "Journal of Experimental Psychology: Applied (PubMed)",
  },
} satisfies Record<string, Source>;

export const napoleonVolume: LeadershipVolume = {
  commanderSlug: "napoleon-bonaparte",
  title: "Leadership Lessons from Napoleon",
  summary:
    "What a person who leads others can take from Napoleon’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Napoleon won for nearly two decades and then lost everything. Each lesson here tests one claim about leading people against the record of that career: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did Napoleon get worse, or did the problem get harder?",
  parts: [
    "Orientation",
    "Judgement",
    "Moving people",
    "Building the instrument",
    "The limits of the self",
    "What remains",
  ],
  inProgress:
    "Six lessons are available. Thirteen more are planned, and the last will answer the question above.",
  lessons: [
    {
      slug: "how-to-read-napoleon",
      title: "How to learn from Napoleon without being fooled by him",
      part: "Orientation",
      themes: ["communication", "ethics"],
      claim:
        "When a leader also wrote the record of their own leadership, a lesson drawn from that record is worth only as much as the evidence that does not come from them.",
      moment: {
        text: "On 30 November 1811 Napoleon told Berthier to press on without pause with writing the campaigns of 1805 to 1809, because otherwise nothing would remain. The collected bulletins were to be reprinted, and he said how: retouched, with the things recognised as false taken out, faults of style corrected, and staff papers added, such as lists of prisoners and captured flags. An official work of this kind had already been made for Marengo. The man who would be history’s main witness to these campaigns was editing the evidence while he still held power.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "citing Correspondance générale, no. 29 217" },
        ],
      },
      episodes: [
        {
          title: "A proclamation written nineteen years late",
          text: "The most quoted speech of his first command tells the soldiers of the Army of Italy that they are naked and ill-fed, and promises them the most fertile plains in the world. It is dated March 1796 in his published correspondence and has often been reprinted without comment. An article in the Fondation Napoléon’s review traces it. One survivor of the campaign gives roughly this text, but in memoirs written in 1844, after it had appeared in a history and in the Mémorial of St Helena. Three other officers who were present remember speeches at parades and reviews with the same sense but not these words or this style, and they say the speeches were not always well received. The article concludes that the text was composed on the way to St Helena to sum up those speeches: the voice is that of 1815, not 1796.",
          evidence: "fact",
          refs: [{ source: 1, locator: "“Fausse et vraie proclamations”" }],
          battleSlugs: ["montenotte"],
        },
        {
          title: "The bridge at Arcole",
          text: "On 15 November 1796 Augereau could not get across the bridge at Arcole. Bonaparte tried in his turn and could not get his troops to follow him. The fighting went on for two more days and turned on a bridge built over the Alpone, which let Augereau’s divisions reach the Austrian rear. The image that survived is different. Gros painted the proud young general on the bridge, and the obelisk raised on the site in 1810 says that he seized the standard, hurled himself onto the bridge, gave his men the courage to fight and destroyed the Austrians. What the stone records as the turning point was, on the Fondation’s own account, an attempt that failed.",
          evidence: "fact",
          refs: [{ source: 2 }],
          battleSlugs: ["arcole"],
        },
        {
          title: "Marengo made official",
          text: "The Fondation’s account of Marengo says that victory was never so close to defeat. By two in the afternoon on 14 June 1800 the French position was so bad that Melas left the field to announce his success. Desaix’s troops arrived at about five, Bonaparte halted the retreat, and the counter-attack followed, in which Desaix fell. Afterwards came paintings, sculpture, monuments and a tomb at the Great St Bernard, all magnifying the hero, and the official work that Houdecek names as the model for the later campaign histories. A battle saved by a subordinate’s arrival entered the record as the First Consul’s.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 0 }],
          battleSlugs: ["marengo"],
        },
        {
          title: "A legend he could not control",
          text: "Not every legend was his. Britannica’s account of his height notes that he censored the press and dictated his life story in exile, yet could not stop the rumour that he was short. Le Petit Caporal was a term of affection from his soldiers, not a description, and French paintings of the time suggest a man of average stature.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: [],
        },
      ],
      witnesses: [
        {
          who: "Napoleon, in the bulletins",
          stake: "The bulletins were instruments of war and of his own renown.",
          says: "Dictated by him and worked up by staff officers, they magnified great deeds and minimised setbacks and losses. Proclamations were reworked before publication so that victory would look foreseen.",
          refs: [{ source: 0 }],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake:
            "A defeated man arguing with the verdict, in conversation with a companion in exile.",
          says: "He lists his own errors of 1815, then concludes: “It was fate; for after all, I ought to have won that battle.”",
          refs: [{ source: 6, locator: "pp. 188–189" }],
        },
        {
          who: "Metternich",
          stake:
            "He wrote long afterwards, about a private meeting with his great opponent.",
          says: "At Dresden in June 1813, he says, Napoleon answered him in a rage: “a man such as I am does not concern himself much about the lives of a million of men.”",
          refs: [{ source: 7, locator: "p. 190" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake:
            "His opponent, speaking years after the wars and reported by a friend.",
          says: "Told that Napoleon knew soldiers by name, he said that a general, Lobau, prepared lists for him, and that in all Napoleon wrote “you never find a thing related precisely as it happened.”",
          refs: [{ source: 5, locator: "p. 24" }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, writing after his fall. The same memoir admires him and condemns him.",
          says: "He describes the First Consul remembering every name from his youth at Valence, and elsewhere says that most generals approached him trembling.",
          refs: [{ source: 8, locator: "pp. 183–184, 247" }],
        },
        {
          who: "G. K. Fortescue, editing Thibaudeau in 1908",
          stake:
            "An admirer of the First Consul, who prefers the younger man’s words to the older man’s.",
          says: "He refused to compare Thibaudeau with St Helena, where he heard only “the distorted memories of a prematurely dying man.”",
          refs: [{ source: 9, locator: "p. viii" }],
        },
      ],
      strategist: [
        {
          text: "A record was a weapon before it was a memory. The bulletins went to the prefects and were read from pulpits at Sunday sermons, in schools, taverns and theatres, and being named in one was an honour that soldiers and regiments watched for. Shading a report served morale and opinion at home; a commander at war had reasons that were not vanity. It follows that a bulletin is good evidence of what he wanted believed at that moment, which is worth knowing, and weak evidence of what happened.",
          evidence: "interpretation",
          refs: [{ source: 0 }],
        },
        {
          text: "The reader’s first discipline is to stop at the moment of decision. Ask what Bonaparte could know at Marengo before five in the afternoon, not what the paintings show. Napoleon makes the point against himself on St Helena: “When one looks at results one can commonly perceive what one ought to have done.” A decision has to be judged on the information, means and alternatives available when it was taken, and a good one can still lose. The later lessons hold to that rule, and say so when the evidence will not let them.",
          evidence: "interpretation",
          refs: [{ source: 6, locator: "p. 186" }, { source: 3 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Hindsight bias",
          base: "review",
          text: "Fischhoff, who began this line of research in 1975, describes hindsight bias as failing to realise how far seeing an event has changed one’s view of it, so that what happened appears to have been more likely than it was. He reports that the bias has been found in many settings, historical analysis among them, that warning people about it has no discernible effect, and that helping them reconstruct earlier perspectives might help. For a reader of Napoleon the implication is uncomfortable. Knowing about the bias is not enough. The remedy is a procedure: rebuild what was known, in the order it became known.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "This research describes people judging past events. It cannot say what Napoleon thought, and only the abstract of Fischhoff’s reflection was read for this lesson.",
        },
      ],
      shadow: {
        text: "Control of the record had a price. Houdecek reports that the bulletins gave the army and society a saying, “menteur comme un bulletin”, a liar like a bulletin, though he names no source for it. Soldiers could hold that view and still long to be mentioned. The deeper cost fell on Napoleon himself. Wellington could claim that he had scarcely once “tripped into truth”, and the claim is hard to dismiss. A witness who edits everything loses credit even where he is right, and his readers lose the means of telling the difference.",
        evidence: "interpretation",
        refs: [{ source: 0 }, { source: 5, locator: "p. 24" }],
      },
      counterCase: {
        text: "Wellington offers a different habit and a warning. At Walmer in 1836, talking of how testimonies vary, he said that no two people would agree on the hour Waterloo began. He thought the French proclamations were meant for Paris, and he said of Lavalette’s memoirs, “What lies he tells!” That scepticism is attractive. He was still no neutral: he was judging men he had fought, and we have these remarks only through Stanhope’s notes. A rival’s doubt is evidence to be weighed, like an admirer’s praise.",
        evidence: "interpretation",
        refs: [{ source: 5, locator: "pp. 13, 23, 88" }],
        commanderSlug: "arthur-wellesley",
        battleSlugs: ["waterloo"],
      },
      cost: {
        text: "The bulletins minimised setbacks and losses. For families who heard them read in church, that was not a question of style. The men who paid for a battle could disappear from its official account, and later lessons return to them.",
        evidence: "interpretation",
        refs: [{ source: 0 }],
      },
      transfer: {
        holdsWhen: [
          "The person whose decisions you are studying controlled the reports, the minutes or the public account.",
          "An independent record exists to set against the official one.",
        ],
        failsWhen: [
          "Every source is dismissed because each has a stake. A witness with a motive can still be right.",
          "The official record is all that survives. Then the honest course is to say what cannot be known.",
        ],
        questions: [
          "Who wrote the account of your organisation’s last success, and what did they stand to gain?",
          "What would you need to see from someone who disagreed with it?",
          "Before anyone knew the outcome, what did the decision look like?",
        ],
      },
      bearsOn:
        "Napoleon’s own testimony cannot settle whether he got worse or the problem got harder. On St Helena he offers a list of his own mistakes and he offers fate. Every lesson that follows looks for evidence that does not come from him, and says so when it cannot find any.",
      questions: [
        {
          prompt:
            "Why does the Fondation’s article doubt that the Nice proclamation dates from 1796?",
          choices: [
            "No French officers were at Nice in March 1796.",
            "Officers present recall speeches with its sense but not its words, and the one who gives its text wrote after it had been printed.",
            "It contradicts the orders Bonaparte sent to the Directory.",
          ],
          answer: 1,
          explanation:
            "Desvernois wrote in 1844, after the text was in print; Pelleport, Giraud and Roguet remember the sense of various speeches but not these words.",
        },
        {
          prompt: "What is a bulletin best used as evidence of?",
          choices: [
            "What Napoleon wanted believed at that moment.",
            "The exact order of events in a battle.",
            "The true scale of French losses.",
          ],
          answer: 0,
          explanation:
            "Bulletins magnified successes and minimised setbacks. That makes them strong evidence of intended messaging and weak evidence of events.",
        },
        {
          prompt:
            "According to Fischhoff’s summary, what has no discernible effect on hindsight bias?",
          choices: [
            "Helping people to reconstruct earlier perspectives.",
            "Studying several settings at once.",
            "Warning people about the bias.",
          ],
          answer: 2,
          explanation:
            "Warnings alone do not help, which is why the lesson recommends a procedure: rebuild what was known, in order.",
        },
      ],
      sourceCheck: {
        question: "Who were Napoleon’s bulletins and proclamations for?",
        witnesses: [
          {
            label: "Wellington, reported by Stanhope",
            claim:
              "The proclamations were seen much more in the papers than by the soldiers: they were meant for Paris.",
          },
          {
            label: "François Houdecek, Fondation Napoléon",
            claim:
              "The bulletins went to the prefects and were read at Sunday sermons, in schools, taverns and theatres, and being named in one was an honour soldiers watched for.",
          },
        ],
        prompt: "How should a historian use these two statements?",
        options: [
          {
            text: "Prefer Houdecek, because he is a modern historian.",
            feedback:
              "He has the correspondence behind him, but he describes how the bulletins were meant to spread, which does not show who actually heard them.",
          },
          {
            text: "Prefer Wellington, because he was there and fought the French.",
            feedback:
              "He was on the other side of the line, speaking years later and through Stanhope’s notes. His view is evidence of how an opponent saw these texts.",
          },
          {
            text: "Note that they discuss different texts and audiences, and that neither measures who actually heard them.",
            feedback:
              "Wellington speaks of proclamations and Houdecek chiefly of bulletins. Both can be partly right, and the question of real reach stays open.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Choose one famous Napoleonic scene you already know. What would you need to see before you believed it?",
        guidance:
          "Ask when the earliest account was written, who wrote it, what they stood to gain, and whether anyone with the opposite interest agrees. Arcole and the Nice proclamation are models.",
      },
      sources: [
        s.houdecek,
        s.nice,
        s.arcole,
        s.marengo,
        s.short,
        s.stanhope,
        s.gourgaud,
        s.metternich,
        s.chaptal,
        s.thibaudeau,
        s.fischhoff,
      ],
    },
    {
      slug: "inherit-before-you-invent",
      title: "What he inherited",
      part: "Judgement",
      themes: ["judgement", "organisation"],
      claim:
        "When a leader appears to have created a system, look first for what they inherited, and then for what they did to scale it.",
      moment: {
        text: "On 11 April 1796 an Austrian column under d’Argenteau was stopped at the redoubt of Monte Legino by the resistance of Rampon’s brigade. That night Bonaparte, twenty-six years old and only just in command of the Army of Italy, sent his forces across the Apennines by separate routes: Laharpe straight to Monte Legino, Masséna round the Austrian flank, Augereau by another pass. The Austrians were beaten at Montenotte, and a famous campaign had begun. It looks like the start of something new. Most of what made that night possible was already there when he arrived.",
        evidence: "fact",
        refs: [{ source: 0, locator: "“Les opérations”" }],
      },
      episodes: [
        {
          title: "Divisions, guns and a drill-book",
          text: "An army could march by separate routes that night because it was already built in divisions able to act on their own. Britannica dates the origins of the divisional system to the 1760s and its wholesale adoption to the Revolution, and the 1911 Britannica says that temporary divisions had hardened by 1796 into a practically universal system. The artillery he had trained in owed its form to Gribeauval, who from 1765 built a complete system of guns and carriages, was successfully resisted for a time, and could impose his ideas only from 1776. The infantry’s drill came from the same years: when Britannica describes the great army of 1805 it says that no changes were made in tactics or formation and that the infantry went on using the regulation of 1791.",
          evidence: "fact",
          refs: [
            { source: 2 },
            { source: 3 },
            { source: 1, locator: "§ 9" },
            { source: 4 },
          ],
          battleSlugs: ["montenotte"],
        },
        {
          title: "The army the Revolution raised",
          text: "The men came from the Republic. Carnot drafted the decree of 23 August 1793 that requisitioned all Frenchmen for the armies. The amalgamation of old regulars and Revolutionary volunteers was decreed that February and begun in spring 1794. The 1911 Britannica argues that out of this rough mixture the army gradually evolved its own leaders and reached its highest value in the very campaign of 1796 that made Bonaparte’s name. Promotion by proven ability was therefore something he found in place, along with a generation of officers already tested by four years of war.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 3 }],
          battleSlugs: [],
        },
        {
          title: "Ideas from books, tested at Toulon",
          text: "J. Holland Rose wrote in 1911 that Bonaparte took from the younger du Teil’s work on the new artillery, and from Guibert and Bourcet, the principle of concentrating effort against one point of the enemy’s line, which he advocated at Toulon. Chaptal remembers the plan at Toulon as worked out together by Bonaparte and General Dugommier, with Bonaparte given the most dangerous part. The site’s study records the same uncertainty among modern sources. Neither account makes the idea his invention, and neither denies that he saw how to use it.",
          evidence: "fact",
          refs: [{ source: 5 }, { source: 7, locator: "pp. 202–203" }],
          battleSlugs: ["toulon"],
        },
        {
          title: "What was his",
          text: "None of this makes him a mere heir. Britannica says that until he took command in Italy the changes in the French army had not been matched by a revolution in strategy, and that his campaign of 1796 organised the Revolution’s methods and the ideas of earlier reformers into a coherent system. The Fondation’s article credits Carnot with the intuition of main and secondary theatres and of massed action, and says the applications remained exceptional until Bonaparte made them systematic. The permanent army corps, with its own staff and services, was formed on the Channel coast and first used on the grand scale in 1805, when divisions and corps totalling some two hundred thousand men were coordinated to a single purpose.",
          evidence: "fact",
          refs: [
            { source: 6 },
            { source: 0, locator: "introduction" },
            { source: 4 },
          ],
          battleSlugs: ["ulm"],
        },
      ],
      witnesses: [
        {
          who: "J. Holland Rose, 1911",
          stake:
            "A biographer with a thesis about what made Bonaparte, writing a century later.",
          says: "He names du Teil, Guibert and Bourcet as the source of Bonaparte’s leading principle.",
          refs: [{ source: 5 }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, and writing what he remembered being told.",
          says: "He has Bonaparte and Dugommier concert the plan of attack at Toulon together.",
          refs: [{ source: 7, locator: "pp. 202–203" }],
        },
        {
          who: "Bonaparte at Cherasco, April 1796",
          stake:
            "A general praising his army in public, with the government at home also listening.",
          says: "He tells the soldiers they have won battles without guns, crossed rivers without bridges and made forced marches without shoes. The credit is placed on them, in words that also advertise the man who led them.",
          refs: [{ source: 0, locator: "text of the proclamation" }],
        },
        {
          who: "The Fondation Napoléon’s review",
          stake:
            "The journal of a society devoted to Napoleon, which makes its concessions the more useful.",
          says: "It credits Carnot with the idea, and it warns that the story told at St Helena drew largely on bulletins full of errors and calculated omissions.",
          refs: [{ source: 0, locator: "introduction" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, what Bonaparte added in April 1796 was a use for what he had found. Divisions that could march apart were an opportunity and a risk, since each could be caught alone. He chose to spread them over mountain roads at night and bring them together on one enemy detachment, while a single brigade on the Genoa side held on to buy time. Any general of the Republic had the same instrument. Few used it this way, and the advantage lay in the combination of inherited means with a new idea of what they were for.",
          evidence: "interpretation",
          refs: [{ source: 0, locator: "“Les opérations”" }, { source: 6 }],
        },
        {
          text: "What he left alone is as instructive as what he changed. Britannica says that he did not prescribe infantry formations to his corps commanders, that their combinations were often ineffective and wasteful, and that he made no serious attempt to introduce the two-rank firing that served the British so well. An inheritor who adds a new layer may not notice that the old layers are ageing beneath it. The instrument was excellent for the kind of campaign it had been built for, and he did not rebuild it for others.",
          evidence: "interpretation",
          refs: [{ source: 4 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Crediting the person for what the situation explains",
          base: "review",
          text: "Gilbert and Malone describe the correspondence bias as the tendency to infer a person’s lasting dispositions from behaviour that the situation could entirely explain. They call it one of the most fundamental phenomena in social psychology, and they say its causes remain poorly understood. A reader who sees a young general win six battles in a few weeks and concludes that genius explains it is at risk of exactly this inference.",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "The bias concerns observers, so it speaks to how we read Bonaparte and not to what he was like. It does not show that his ability was small. Only the abstract was read.",
        },
        {
          mechanism: "The romance of leadership",
          base: "meta-analysis",
          text: "Schyns, Felfe and Blank combined new and earlier studies and found a positive relationship between a person’s tendency to romanticise leadership and their perception of a leader as transformational. They conclude that the perception of leadership comprises more than the leader’s actual behaviour. Admirers of Napoleon, then and since, may be telling us about the admirers.",
          evidence: "interpretation",
          refs: [{ source: 9 }],
          limit:
            "The studies concern modern students and employees rating leaders. Carrying them over to nineteenth-century opinion is this lesson’s inference, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "The legend that he made it all was partly his own work. The Fondation’s article says that his St Helena account of the Italian campaign drew largely on his own bulletins, and it singles out the disputed parts played by Fornésy and Rampon at Monte Legino as an example of how hard the real events are to recover. The deeper failure was in maintenance. Britannica says there was no real training for staff work, that staff officers were chosen haphazardly, and that he was content to use men who proved still more deficient when they became theatre commanders. A system he had inherited and sharpened was not being renewed to outlast him.",
        evidence: "interpretation",
        refs: [{ source: 0, locator: "introduction" }, { source: 4 }],
      },
      counterCase: {
        text: "Archduke Charles shows the same problem from the opposite side. Britannica says that after 1801, with wide powers, he discarded Austria’s old military system and began reforms that adopted the principle of the nation in arms, French organisation and tactics, and new military academies. He had no Revolution to inherit from, so he had to import one. The army was not yet ready in 1809, but it beat Napoleon at Aspern-Essling before losing at Wagram. A reformer can be seen working in the open in a way that an inheritor cannot.",
        evidence: "interpretation",
        refs: [{ source: 10 }],
        commanderSlug: "archduke-charles",
        battleSlugs: ["aspern-essling"],
      },
      cost: {
        text: "The inheritance included compulsion. The decree of 1793 requisitioned all Frenchmen, and the 1911 Britannica observes that many were better off in the army than at home, where they lived in fear of denunciation and the guillotine. The law of 1798 replaced the levies with regular conscription, which lasted until 1815 and brought more than two million men into the army. Whatever Napoleon did with that system, the young men it took did not choose it.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 3 }, { source: 4 }],
      },
      transfer: {
        holdsWhen: [
          "The organisation had a capable structure, trained people or new methods before the celebrated leader arrived.",
          "Rivals with similar means did less with them, so that the leader’s contribution can be seen.",
        ],
        failsWhen: [
          "The leader really did build the system from nothing, as a founder sometimes does.",
          "Inheritance becomes an excuse for denying any credit to a person who plainly changed the result.",
        ],
        questions: [
          "What did your organisation’s last success owe to work done before the people now credited with it?",
          "What are you drawing on that you are not renewing?",
          "Which of your inherited methods have you stopped looking at?",
        ],
      },
      bearsOn:
        "If much of his early success drew on capital built up by others, then part of what looks like later decline may be that capital running out. Britannica calls the army of 1805 the best he was to lead. That points towards “the problem got harder”, though he was also the person who failed to renew it.",
      questions: [
        {
          prompt:
            "By when does the 1911 Britannica say the divisional system had become practically universal in the French army?",
          choices: ["1765", "1796", "1805"],
          answer: 1,
          explanation:
            "Temporary divisions hardened into a permanent system during the Revolutionary wars, before Bonaparte’s Italian campaign.",
        },
        {
          prompt:
            "What does Britannica say about the tactics of the army Napoleon led in 1805?",
          choices: [
            "No changes were made, and the infantry kept the regulation of 1791.",
            "Napoleon wrote a new drill-book for it at Boulogne.",
            "It had adopted British two-rank firing.",
          ],
          answer: 0,
          explanation:
            "Britannica places his innovation in the organisation of the army and the direction of its movements.",
        },
        {
          prompt: "What is the correspondence bias?",
          choices: [
            "Trusting letters more than memoirs.",
            "Believing that success comes from luck alone.",
            "Inferring lasting traits from behaviour that the situation could entirely explain.",
          ],
          answer: 2,
          explanation:
            "It is a tendency in the observer, which is why the lesson applies it to readers of Napoleon.",
        },
      ],
      sourceCheck: {
        question: "Whose plan took Toulon?",
        witnesses: [
          {
            label: "J. Holland Rose, 1911",
            claim:
              "Bonaparte advocated at Toulon the concentration of effort against one point, a principle he took from du Teil, Guibert and Bourcet.",
          },
          {
            label: "Chaptal, his former minister",
            claim:
              "Bonaparte and Dugommier concerted the plan of attack together, and the most dangerous part was entrusted to Bonaparte.",
          },
        ],
        prompt: "How can these two accounts be reconciled?",
        options: [
          {
            text: "They cannot: one must be wrong.",
            feedback:
              "Advocating a principle and agreeing a plan with one’s commander are different acts. Both can be true at once.",
          },
          {
            text: "Rose is right, because he is a professional historian.",
            feedback:
              "He writes with more distance, but he is explaining where an idea came from. Chaptal is describing who made the plan.",
          },
          {
            text: "An idea from books, advocated by a junior officer and adopted with his commander, fits both.",
            feedback:
              "That reading gives Bonaparte his part without making him sole author, which is the position this lesson asks you to test.",
            best: true,
          },
        ],
        battleSlug: "toulon",
      },
      seminar: {
        prompt:
          "Pick a leader celebrated for transforming an organisation. List what was already in place when they arrived.",
        guidance:
          "Then ask what no predecessor with the same means had done. Keep both lists. The lesson is in the difference between them, not in choosing one.",
      },
      sources: [
        s.nice,
        s.artillery,
        s.firstCoalition,
        s.frw,
        s.forces,
        s.rose,
        s.italy,
        s.chaptal,
        s.gilbertMalone,
        s.schyns,
        s.archduke,
      ],
    },
    {
      slug: "intuition-is-stored-work",
      title: "The coup d’œil: intuition as stored work",
      part: "Judgement",
      themes: ["judgement"],
      claim:
        "When long preparation meets a setting whose signals have stayed the same, fast judgement can be trusted; when the setting changes, the feeling of certainty outlives the reliability.",
      moment: {
        text: "A little after eight on the morning of 2 December 1805, as the mist cleared near Austerlitz, Napoleon saw that allied columns had come down from the Pratzen heights to join the attacks on Telnitz and Sokolnitz. In the diary of his words compiled by R. M. Johnston he asks Soult how long it will take to reach the plateau. Less than twenty minutes, says Soult. “If that is so, we will wait fifteen minutes more.” Soult took the heights in about half an hour, and the allies spent the rest of the morning trying to get them back. It is the classic image of the coup d’œil: one look, one order.",
        evidence: "fact",
        refs: [{ source: 1 }, { source: 3, locator: "p. 218" }],
      },
      episodes: [
        {
          title: "What the look was made of",
          text: "J. Holland Rose describes a young artillery officer at Auxonne, short of money and reading history, whose notes and essays show a resolve to master every detail of his profession. Rose says he took from the younger du Teil’s work on the new artillery, and from Guibert and Bourcet, the principle of concentrating effort against one point of the enemy’s line, which he urged at Toulon in 1793 and applied throughout his campaigns. General du Teil wrote of him after the siege: “much science, as much intelligence and too much bravery.” Rose adds that it is an exaggeration to say his fortunes were made at Toulon. Rose wrote in 1911, and his account of these influences is one historian’s judgement.",
          evidence: "fact",
          refs: [{ source: 4 }],
          battleSlugs: ["toulon"],
        },
        {
          title: "Rivoli, January 1797",
          text: "Early in 1797 Alvinczy came down the Adige while Provera marched on Mantua. Bonaparte left a defensive screen to check Provera, concentrated all his remaining troops and routed Alvinczy at Rivoli on 14 January, then regrouped at once against Provera, who capitulated two days later. This is the Toulon principle under pressure: accept risk in one place in order to be strong in another, and judge how long the screen will hold. The site’s study of Rivoli records that the sources share out the credit among Bonaparte, Masséna and Joubert, so the decision was his but the performance was not his alone.",
          evidence: "fact",
          refs: [{ source: 5 }],
          battleSlugs: ["rivoli"],
        },
        {
          title: "Austerlitz, prepared",
          text: "The fifteen minutes were not the whole of the judgement. On 21 November, eleven days before the battle, Napoleon had reconnoitred the ground that would become the battlefield. The eyes that read the Pratzen that morning already knew what it commanded. The site’s study cautions that the popular picture of a perfectly controlled trap compresses a contested fight, in which allied officers went on blaming one another for what the columns did. The anecdote is evidence of timing, resting on knowledge of the ground.",
          evidence: "fact",
          refs: [{ source: 1 }],
          battleSlugs: ["austerlitz"],
        },
      ],
      witnesses: [
        {
          who: "Clausewitz",
          stake:
            "A theorist seeking a general account of command, not a witness to these battles.",
          says: "Coup d’œil began as a correct judgment by eye of time and space in battle, and came to mean “the rapid discovery of a truth which to the ordinary mind is either not visible at all or only becomes so after long examination and reflection.”",
          refs: [{ source: 0, locator: "I.3" }],
        },
        {
          who: "Johnston’s diary of Napoleon",
          stake:
            "A compilation from Napoleon’s words and reports of them, so the scene at Austerlitz reaches us already selected.",
          says: "The exchange with Soult shows Napoleon converting a known distance into a time and then waiting for it.",
          refs: [{ source: 3, locator: "p. 218" }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, and critical of him elsewhere in the same memoir, which gives this praise more weight.",
          says: "He describes the First Consul questioning an old acquaintance about their youth at Valence, remembering every name and judging each person’s character accurately.",
          refs: [{ source: 2, locator: "pp. 183–184" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake: "His opponent, reported at second hand.",
          says: "“I also doubt the goodness of his memory, from the looseness and inaccuracy of his statements.”",
          refs: [{ source: 11, locator: "p. 24" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, the decision at Austerlitz looks less like inspiration than like disciplined waiting. He could see columns leaving the heights. He could not know how many more would go, or how fast Kutuzov would react. The value of the fifteen minutes is that they let the movement develop while keeping the blow within reach, and that was a calculation he could make only because the ground had been studied and Soult could answer the question.",
          evidence: "interpretation",
          refs: [{ source: 1 }, { source: 3, locator: "p. 218" }],
        },
        {
          text: "The strength had a precondition. Britannica says that his system’s reduced supply trains and independent lines of operation brought great benefits so long as victory came soon, that it did not suit prolonged campaigning or retreat, and that although perfected in western Europe and northern Italy it was far less practicable in the east. Judgement formed in Italy and Moravia was judgement about a particular kind of war.",
          evidence: "interpretation",
          refs: [{ source: 6 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Recognising situations from experience",
          base: "review",
          text: "Research on naturalistic decision making studies how people decide in real-world settings. Klein’s summary says the approach emphasises the role of experience in letting people rapidly categorise situations in order to act well, and that it has been used to revise military doctrine and training. That fits what witnesses describe: the look at the Pratzen would then be recognition of a situation by someone equipped to recognise it, rather than a mysterious gift.",
          evidence: "interpretation",
          refs: [{ source: 7 }],
          limit:
            "The fit is suggestive only. Nobody can test how Napoleon reached a decision, and only the abstract was read for this lesson.",
        },
        {
          mechanism: "When intuition can be trusted",
          base: "review",
          text: "Kahneman and Klein, starting from opposed research traditions, concluded that the quality of an intuitive judgement depends on how predictable the environment is and whether the person has had the chance to learn its regularities. They add that subjective experience is not a reliable indicator of accuracy. Those two conditions give the reader a test to apply to Napoleon’s career: was this a kind of war he had had the chance to learn, and did its signals still mean what they had meant?",
          evidence: "interpretation",
          refs: [{ source: 8 }],
          limit:
            "The article does not discuss Napoleon or war in this sense; applying it to him is this lesson’s inference. War is only partly predictable, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "In 1812 the signals changed and the expectation did not. Britannica says he wrongly supposed the campaign would be over in thirty days. The Russians, heavily outnumbered, pulled back rather than risk all in one battle. At Smolensk, Caulaincourt reports, he questioned a Russian officer and said that honour required the Russians to give battle, after which it would be easy to make peace. At Borodino he feared that an attempt to outflank them might let them escape, ordered a frontal attack and then, far from a field hidden in smoke, was perhaps unsure how the battle stood. A decisive battle followed by terms was the pattern he knew. It had stopped being the pattern he was in.",
        evidence: "interpretation",
        refs: [
          { source: 9 },
          { source: 10 },
          { source: 12, locator: "pp. 80–81" },
          { source: 13 },
        ],
        battleSlugs: ["smolensk-1812", "borodino"],
      },
      counterCase: {
        text: "Barclay de Tolly read the same invasion as a problem of time and distance. Britannica says that the Russians pulled back rather than risk all in one battle and that at Smolensk their commanders anticipated encirclement and withdrew in the night. Caulaincourt records what Alexander had told him before the war: that defeat would not mean a dictated peace, and that Russia had room. Barclay’s was not a free choice either. Britannica adds that he stood at Smolensk partly because his junior officers threatened mutiny if he did not.",
        evidence: "fact",
        refs: [{ source: 10 }, { source: 12, locator: "pp. 5–6" }],
        commanderSlug: "barclay-de-tolly",
        battleSlugs: ["smolensk-1812"],
      },
      cost: {
        text: "A misread war is paid for by other people. Britannica calls the attack at Borodino crude, and describes fighting that seesawed along a narrow front until both sides were exhausted. The figures in the sources differ and are not given here.",
        evidence: "fact",
        refs: [{ source: 13 }],
      },
      transfer: {
        holdsWhen: [
          "The person deciding has long experience of this kind of problem, with quick and honest feedback.",
          "The situation is one they have often met, and its signals mean what they used to.",
        ],
        failsWhen: [
          "The setting has changed in ways experience does not cover: scale, distance, or an opponent who will not play the expected game.",
          "The only evidence for the judgement is how sure the person feels.",
        ],
        questions: [
          "How often have you had this exact kind of decision, and how soon did you learn whether you were right?",
          "What has changed since the last time your instinct on this was reliable?",
          "What preparation is your fast judgement actually resting on?",
        ],
      },
      bearsOn:
        "This lesson leans towards “the problem got harder”: the mind that read Austerlitz was reading a kind of war it knew. It does not close the question. Nothing here shows whether his judgement had also declined by 1812, and the evidence that he misread Russia is compatible with both answers.",
      questions: [
        {
          prompt:
            "Beyond judging by eye, what does Clausewitz say coup d’œil came to mean?",
          choices: [
            "Reliance on a commander’s luck.",
            "The rapid discovery of a truth that others would see only after long reflection, or not at all.",
            "The ability to memorise a map.",
          ],
          answer: 1,
          explanation:
            "Clausewitz says the term came to refer more often to the mental eye than the physical one.",
        },
        {
          prompt:
            "What had Napoleon done on 21 November 1805 that matters to the fifteen-minute wait?",
          choices: [
            "He had reconnoitred the ground that became the battlefield.",
            "He had agreed an armistice with Austria.",
            "He had sent Soult away to Vienna.",
          ],
          answer: 0,
          explanation:
            "The judgement on the morning of the battle rested on knowledge of the ground gained eleven days earlier.",
        },
        {
          prompt:
            "On Kahneman and Klein’s account, what is not a reliable indicator of the accuracy of an intuitive judgement?",
          choices: [
            "The predictability of the environment.",
            "The person’s opportunity to learn its regularities.",
            "How the judgement feels to the person making it.",
          ],
          answer: 2,
          explanation:
            "The first two are the conditions they say to assess. Subjective experience is the one they warn against.",
        },
      ],
      sourceCheck: {
        question: "How good was Napoleon’s memory for people?",
        witnesses: [
          {
            label: "Chaptal, his minister",
            claim:
              "Questioning an old acquaintance at Malmaison, he remembered every name from his youth at Valence.",
          },
          {
            label: "Wellington, reported by Stanhope",
            claim:
              "Soldiers singled out at reviews were read from a list that Lobau prepared, and the looseness of Napoleon’s writings makes his memory doubtful.",
          },
        ],
        prompt: "What is the strongest way to weigh these?",
        options: [
          {
            text: "Accept Chaptal, because he knew Napoleon personally.",
            feedback:
              "His closeness counts, but he describes one occasion about Napoleon’s own youth. That does not tell us how soldiers came to be named at reviews.",
          },
          {
            text: "Accept Wellington, because he explains how the trick was done.",
            feedback:
              "It is a specific claim, but it comes from an opponent, at second hand, and he does not say how he knew it.",
          },
          {
            text: "Treat them as claims about different things, and keep each at the weight its witness can bear.",
            feedback:
              "Remembering people from one’s youth and calling out soldiers at parade are separate abilities. Both accounts could be true.",
            best: true,
          },
        ],
      },
      seminar: {
        prompt:
          "Name a decision in your own field that felt obvious and turned out right. Would the same feeling have been reliable in a new setting?",
        guidance:
          "Use the two conditions from Kahneman and Klein. Separate how predictable the situation was from how many chances you had to learn it, and set aside how sure you felt.",
      },
      sources: [
        s.clausewitz,
        s.timeline,
        s.chaptal,
        s.corsican,
        s.rose,
        s.italy,
        s.forces,
        s.klein,
        s.kahnemanKlein,
        s.russia,
        s.smolensk,
        s.stanhope,
        s.caulaincourt,
        s.borodino,
      ],
    },
    {
      slug: "plan-for-being-wrong",
      title: "Plans that survive error",
      part: "Judgement",
      themes: ["judgement", "organisation"],
      claim:
        "When the situation cannot be known in advance, an organisation built to absorb a wrong assumption is worth more than a correct prediction.",
      moment: {
        text: "On the morning of 13 October 1806 Napoleon wrote to Murat: “At last the veil is torn; the enemy have begun their retreat towards Magdeburg.” That afternoon he rode up to the heights above Jena and saw Prussian camps. By the account of the 1911 Britannica he concluded from all his reports that the whole Prussian army was in front of him, and he ordered his forces to concentrate on Jena, marching all night if need be. Six hours earlier that would have been true. The Prussian main body had already begun to move away to the north.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "p. 245" },
          { source: 1, locator: "§ 16" },
        ],
      },
      episodes: [
        {
          title: "Ulm: uncertain and spread out",
          text: "In 1805 Mack waited near Ulm, expecting Napoleon to come through the Black Forest with far fewer troops than he had. Instead the French crossed the Rhine, wheeled south and were across the Danube behind him before he knew it. The manoeuvre was not as clean as it later looked. Britannica says that after crossing the Danube Napoleon was uncertain of the Austrians’ latest positions, so he extended his front along the Lech and detached a corps towards Munich in case the Russians appeared, and that the encirclement was marked by bad weather, short supplies and clumsiness among some of his subordinates. The wide net caught Mack anyway. It did not depend on knowing exactly where he was.",
          evidence: "fact",
          refs: [{ source: 3 }, { source: 2 }],
          battleSlugs: ["ulm"],
        },
        {
          title: "Jena and Auerstedt: the error forgiven",
          text: "On 14 October 1806 Napoleon struck at Jena with only part of his army and beat what he took to be the main enemy. It was Hohenlohe’s flank force. Thirteen miles to the north, at Auerstedt, Davout’s single corps, marching on orders to come down on the Prussian rear, ran into the main army under Brunswick and held for six hours until the Prussian attack gave way. Britannica says the Prussians had not yet adopted the divisional system and that Brunswick spent his superior strength in piecemeal attacks. The commander had the wrong picture, and his plan still produced a double victory, because each corps was built to fight alone for a day.",
          evidence: "fact",
          refs: [
            { source: 2 },
            { source: 4 },
            { source: 1, locator: "§§ 17–18" },
            { source: 6 },
          ],
          battleSlugs: ["jena-auerstedt"],
        },
        {
          title: "Marengo: the error nearly fatal",
          text: "Six years earlier the same habit almost cost him everything. Britannica says that in June 1800, mistakenly believing Melas to be at Turin, Bonaparte weakened his army by sending out detachments to find the enemy. Melas came out of Alessandria on the morning of 14 June against a dispersed French force, and it was about eleven before Bonaparte, some way off, understood that he faced the main Austrian army. Of the two detachments only one received its recall: Boudet’s division, with Desaix, turned back at one in the afternoon on a frantic message and reached the field between four and five. Nothing in the arrangements guaranteed that. The margin was one message.",
          evidence: "fact",
          refs: [{ source: 5 }],
          battleSlugs: ["marengo"],
        },
      ],
      witnesses: [
        {
          who: "Napoleon, in his orders of October 1806",
          stake:
            "Written at the time to subordinates who had to act on them, so more reliable than his later accounts, though compiled by an editor.",
          says: "He writes to Marshal Soult that he hopes for a battle, and that whatever the enemy does he has an answer: delighted if attacked, ready to attack, and in front of them if they turn away.",
          refs: [{ source: 0, locator: "p. 242" }],
        },
        {
          who: "The 1911 Britannica on the Napoleonic campaigns",
          stake:
            "Soldierly narrative drawn from the general staff histories, and more interested in method than in reputation.",
          says: "It says that on the morning of the 13th the reports only partly cleared up the situation, and that the real truth was very different from what he supposed.",
          refs: [{ source: 1, locator: "§ 16" }],
        },
        {
          who: "Jean Linden",
          stake: "Writing an admiring study of Davout in a Napoleonic review.",
          says: "He says that on the 12th Napoleon did not know the exact position of the Prussian forces, and asked his commanders to look for information.",
          refs: [{ source: 6 }],
        },
        {
          who: "Oskar Criste, 1897",
          stake:
            "An Austrian biographer citing the war archive, and defending an Austrian staff officer.",
          says: "He says Kutuzov altered Weyrother’s excellent dispositions at Austerlitz, and that Weyrother, constantly ill, lacked the energy to insist on them.",
          refs: [{ source: 8 }],
        },
      ],
      strategist: [
        {
          text: "Without hindsight, the corps system looks like insurance. In the days before Jena Napoleon could not know where the main Prussian force was, and he knew that he did not know: his letter to Soult lists what he will do in each case. The orders of that night gave Davout a task and left the choice of road to him. A corps with its own staff, services and cavalry could fight for a day on its own. That is why a false picture did not lead to a catastrophe. The decision worth studying is the one taken years earlier to organise the army so that being wrong would be survivable.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "p. 242" },
            { source: 13 },
            { source: 6 },
          ],
        },
        {
          text: "Marengo shows the limit of the argument. There the dispersal itself was the risk. Bonaparte had detached forces in search of an enemy he had misplaced, and only one reserve division remained. A wide net works when the parts can reach each other in time. Judged on what he knew on 13 June, the detachments were a reasonable way of finding an elusive opponent; judged on how little margin they left, they were dangerous. Both judgements can stand.",
          evidence: "interpretation",
          refs: [{ source: 5 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Excessive precision in belief",
          base: "theory",
          text: "Moore and Healy distinguish three kinds of overconfidence: overestimating one’s performance, placing oneself above others, and holding beliefs with excessive precision. They report that overprecision is more persistent than the other two. A plan that depends on the enemy being in one place is a precise belief. On that view the useful question at Jena or Marengo is less how confident Napoleon felt than how narrow a range of possibilities his dispositions allowed for.",
          evidence: "interpretation",
          refs: [{ source: 10 }],
          limit:
            "These are mainly experiments on modern participants, and nobody can measure what Napoleon believed. Only the abstract was read.",
        },
        {
          mechanism: "Imagining the failure has already happened",
          base: "single study",
          text: "Prospective hindsight means explaining a future event as if it had already occurred, an idea often recommended to planners. Mitchell, Russo and Pennington found in their first experiment that temporal perspective made little difference, and that it was treating the outcome as certain that strongly changed the explanations people gave. If that holds, the useful exercise is to take a plan’s failure as settled and then explain it.",
          evidence: "interpretation",
          refs: [{ source: 11 }],
          limit:
            "This is one small research paper on how people explain events. It does not test whether such an exercise improves plans, and only the abstract was read.",
        },
      ],
      shadow: {
        text: "At Waterloo the insurance had run out. Houssaye writes that neither Napoleon nor Soult expected the Prussians on the field, since they judged that the French were rid of them for many days, and that Soult regretted the detachment of Grouchy with so large a force. Napoleon said on St Helena that when he quitted Quatre Bras he ought to have left only a small force to follow Blücher and taken all the rest with him. In 1806 a wrong belief about the enemy had been absorbed by a corps that could stand alone. In 1815 the same kind of belief met a detached force that did not arrive, and nothing absorbed it.",
        evidence: "interpretation",
        refs: [
          { source: 9, locator: "pp. 163–164" },
          { source: 7, locator: "pp. 188–189" },
        ],
        battleSlugs: ["waterloo"],
      },
      counterCase: {
        text: "The allied plan at Austerlitz was the opposite kind of plan: precise, written and dependent on several columns doing what it said. The Fondation’s timeline shows Buxhöwden and Langeron leaving the Pratzen heights to support the attacks at Telnitz and Sokolnitz, and Kutuzov throwing in all his troops to recover what was abandoned. Who was responsible is disputed. Criste says Kutuzov altered Weyrother’s dispositions, and the site’s study records Russian officers blaming Weyrother. Whichever is right, once the movement was under way there was little in the allied arrangement that could absorb a mistake.",
        evidence: "interpretation",
        refs: [{ source: 12 }, { source: 8 }],
        battleSlugs: ["austerlitz"],
      },
      cost: {
        text: "An error that is absorbed is absorbed by someone. At Auerstedt it was Davout’s corps, which held against the main Prussian army until, the 1911 Britannica says, its strength was nearly exhausted by midday. At Marengo it was the men of Victor and Lannes, driven back disordered across the plain for hours while the recall message travelled. A system that forgives its commander’s mistakes does so at the expense of the people closest to them.",
        evidence: "fact",
        refs: [{ source: 1, locator: "§ 18" }, { source: 5 }],
      },
      transfer: {
        holdsWhen: [
          "The facts that matter cannot be known before action must be taken.",
          "Parts of the organisation can act alone for long enough to be reached by help.",
        ],
        failsWhen: [
          "Dispersing to cover every possibility leaves no part strong enough to survive contact.",
          "The situation is predictable and a precise plan would simply be better.",
        ],
        questions: [
          "What is your plan assuming that you have not checked?",
          "If that assumption is wrong, which team absorbs the error, and can it?",
          "Take the failure of this plan as settled. What is the most likely explanation?",
        ],
      },
      bearsOn:
        "The system forgave him in 1806 and did not in 1815. That may be a question of margin: better opponents, a smaller and less practised army, fewer commanders able to stand alone. Or it may be that the same habit of assumption went on unchecked after success had taught him it was safe. This lesson cannot separate those, but it shows that the habit itself did not change.",
      questions: [
        {
          prompt:
            "What did Napoleon conclude on the afternoon of 13 October 1806, according to the 1911 Britannica?",
          choices: [
            "That the whole Prussian army was in front of him at Jena.",
            "That the Prussians had already retreated beyond the Elbe.",
            "That the main Prussian army was at Auerstedt.",
          ],
          answer: 0,
          explanation:
            "The main body had begun to move north that morning, which is why Davout met it at Auerstedt the next day.",
        },
        {
          prompt:
            "Why did Bonaparte’s army fight at a disadvantage on the morning of Marengo?",
          choices: [
            "He had been wounded the day before.",
            "He believed Melas was at Turin and had sent detachments away.",
            "His guns had been lost crossing the Alps.",
          ],
          answer: 1,
          explanation:
            "Britannica says the mistaken belief led him to weaken the army by sending out detachments to find the enemy.",
        },
        {
          prompt: "What did Moore and Healy report about overprecision?",
          choices: [
            "It disappears on difficult tasks.",
            "It is the rarest form of overconfidence.",
            "It is more persistent than the other two kinds of overconfidence.",
          ],
          answer: 2,
          explanation:
            "The lesson uses this to ask how narrow a range of possibilities a plan allows for.",
        },
      ],
      sourceCheck: {
        question:
          "Why did Bernadotte’s corps not march with Davout on 14 October 1806?",
        witnesses: [
          {
            label: "The 1911 Britannica",
            claim:
              "Bernadotte had neglected to keep the emperor informed, concluded that he had missed an order for Dornburg, and marched there to conceal his error.",
          },
          {
            label: "Jean Linden, Revue du Souvenir Napoléonien",
            claim:
              "Davout told Bernadotte his instructions were to join him or to go to Dornburg as previously indicated, and Bernadotte chose Dornburg.",
          },
        ],
        prompt: "What should a careful reader conclude?",
        options: [
          {
            text: "Bernadotte deliberately betrayed Davout.",
            feedback:
              "Neither account says that. One describes a mistake being concealed, the other a choice between instructions.",
          },
          {
            text: "He went to Dornburg, and his motive is an interpretation that the two accounts make differently.",
            feedback:
              "They agree on the movement. The site’s study records that his conduct remains disputed, and motive is the hardest thing to recover.",
            best: true,
          },
          {
            text: "Linden is more reliable, because Davout is his subject.",
            feedback:
              "Writing about Davout may give him detail, but it also gives him a reason to see Davout’s side.",
          },
        ],
        battleSlug: "jena-auerstedt",
      },
      seminar: {
        prompt:
          "Describe a plan you know that survived a serious wrong assumption, and one that did not. What was different about how each was organised?",
        guidance:
          "Compare Jena with Marengo. Ask who could act without new orders, how far apart the parts were, and who carried the cost of the mistake.",
      },
      sources: [
        s.corsican,
        s.campaigns,
        s.jena,
        s.coalitions,
        s.jenaCampaign,
        s.marengoBattle,
        s.linden,
        s.gourgaud,
        s.criste,
        s.houssaye,
        s.mooreHealy,
        s.mitchell,
        s.timeline,
        s.forces,
      ],
    },
    {
      slug: "tempo-and-the-decisive-point",
      title: "Speed, and what it is spent on",
      part: "Judgement",
      themes: ["judgement", "restraint"],
      claim:
        "When speed concentrates force at the point that matters it can outweigh numbers, and whatever it buys is paid for by the people who march.",
      moment: {
        text: "At the end of July 1796 reports reached Bonaparte one after another. Masséna had been driven back, the enemy had appeared near Verona, a French general had been beaten at Salo, and the Austrians were in Brescia on his line of communication. He was besieging Mantua, the prize of the campaign, and its fall was thought to be close. He ordered the siege raised, told Sérurier to burn the siege train if necessary, and gathered everything he had in a central position.",
        evidence: "fact",
        refs: [
          { source: 0, locator: "“La manoeuvre de Castiglione”" },
          { source: 1 },
        ],
      },
      episodes: [
        {
          title: "Montenotte: at the hinge",
          text: "In April 1796, when two attacks forced his hand, Bonaparte left the brigade on the Genoa side to give ground and win time, and threw everything he could against d’Argenteau’s detachment at Montenotte, moving his divisions over the mountains by night. The point of the exercise was to be stronger in one place for one day than the enemy could be, however his total numbers compared.",
          evidence: "fact",
          refs: [{ source: 2, locator: "“Les opérations”" }],
          battleSlugs: ["montenotte"],
        },
        {
          title: "Castiglione: what was given up",
          text: "Having raised the siege, he left rearguards to hold Wurmser on the Mincio and took his main force against Quasdanovich, who was scattered and was beaten at Lonato and Salo. Then he brought it all back against Wurmser and defeated him at Castiglione on 5 August. Britannica attributes the unexpected success both to the sacrifice of the investment of Mantua and to the extraordinarily hard marching his strategy demanded. The Fondation’s article, which calls Castiglione the perfect type of a Napoleonic battle, adds that the victorious army was worn out by eight days of excessive marches and could not pursue.",
          evidence: "fact",
          refs: [
            { source: 0, locator: "“La manoeuvre de Castiglione”" },
            { source: 1 },
          ],
          battleSlugs: ["castiglione"],
        },
        {
          title: "The Six Days, February 1814",
          text: "Eighteen years later the method was still working. Leaving a force to contain Schwarzenberg, Napoleon marched against the flank of Blücher’s army, whose main column was strung out over more than forty miles. Between 10 and 14 February he struck its corps in turn at Champaubert, Montmirail, Château-Thierry and Vauchamps. Britannica says that an inferior force scattered a far larger one, and then adds that Blücher had rallied and been reinforced within days, and that Napoleon had spent himself and his troops to obtain only a postponement of defeat.",
          evidence: "fact",
          refs: [{ source: 3 }],
          battleSlugs: ["six-days-campaign"],
        },
      ],
      witnesses: [
        {
          who: "Bonaparte at Cherasco, April 1796",
          stake:
            "A general addressing his troops and, through the press, the government.",
          says: "He tells his soldiers they have made forced marches without shoes and bivouacked without brandy and often without bread. It is praise, and it is also a record of what speed cost.",
          refs: [{ source: 2, locator: "text of the proclamation" }],
        },
        {
          who: "The Revue du Souvenir Napoléonien on 1796",
          stake:
            "Based on a tactical course of 1913, from the high point of French study of Napoleon, and admiring in tone.",
          says: "It treats Castiglione as a model, and still records that the army could not pursue.",
          refs: [{ source: 0, locator: "“La manoeuvre de Castiglione”" }],
        },
        {
          who: "Wellington, as Earl Stanhope records him",
          stake:
            "His opponent, reported at second hand, and a general proud of his own defensive campaigns.",
          says: "On the campaign of 1814 he says: “The study of it has given me a greater idea of his genius than any other.” But, he adds, “he wanted patience.”",
          refs: [{ source: 7, locator: "p. 8" }],
        },
        {
          who: "Chaptal",
          stake:
            "Once his minister, describing the man at work in Paris and not on campaign.",
          says: "He says Napoleon kept no rule for meals or sleep: sometimes he slept eight or ten hours, and sometimes he had hardly gone to bed before he rose and worked all night.",
          refs: [{ source: 8, locator: "pp. 328–329" }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, giving up the siege of Mantua was a real sacrifice. Its fall had seemed near, and the siege train might have to be burned. The alternative was to keep the prize and let two converging armies choose the moment. He preferred a known loss to an unknown danger, and that is a sound pattern: speed had value because he had first decided what he was willing to abandon in order to be concentrated. Tempo without that choice would only have been hurry.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "“La manoeuvre de Castiglione”" },
            { source: 1 },
          ],
        },
        {
          text: "The Six Days are the hardest test of the idea. As operations they were brilliant, and Wellington thought so. As strategy they answered the wrong question: Blücher was reinforced within days and the allies had more armies than Napoleon had time. Speed can decide the point it is applied to. It cannot decide whether that point was the one that mattered, and by 1814 no point within his reach could end the war.",
          evidence: "interpretation",
          refs: [{ source: 3 }, { source: 7, locator: "p. 8" }],
        },
      ],
      psychologist: [
        {
          mechanism: "Decision-making when short of sleep",
          base: "review",
          text: "Harrison and Horne review research on sleep deprivation and say it particularly impairs decisions involving the unexpected, innovation, revising plans, competing distraction and effective communication, while complex rule-based tasks hold up in the short term. They name military commanders among those affected. That is why the famous claim that Napoleon needed only a few hours’ sleep matters. Chaptal, who watched him, describes something irregular rather than ascetic: sometimes eight or ten hours, sometimes none. So the claim is unproven, and the research does not tell us what sleep did to any particular decision.",
          evidence: "interpretation",
          refs: [{ source: 9 }, { source: 8, locator: "pp. 328–329" }],
          limit:
            "No source read here measures his sleep on campaign or links it to a decision, and Chaptal describes him in Paris. Only the abstract of the review was read.",
        },
      ],
      shadow: {
        text: "In the autumn of 1813 the method met an enemy who had studied it. Britannica calls that campaign the worst conceived and most disastrous of his career, tied as it was to fortresses on the Elbe. The allies had agreed to avoid battle with Napoleon and attack his subordinates, so a rapid march towards one army simply found another advancing somewhere else. Houdecek says that after the first phase of the campaign the French army was exhausted by marches and counter-marches. Speed needs something to catch.",
        evidence: "interpretation",
        refs: [{ source: 5 }, { source: 6 }],
        battleSlugs: ["dresden", "leipzig"],
      },
      counterCase: {
        text: "Kutuzov in 1812 made slowness his method. After Moscow he stopped at Tarutino, rested his men, gathered winter clothing and organised the partisans. Ganière records that Alexander, poorly informed, reproached him for inaction, and that he answered that the French were now in effect prisoners of their victory. On the retreat, Britannica says, he declined to bring on a general engagement at Krasnoe. Slowness is not a virtue in itself; his was chosen against an enemy whose system needed a quick result.",
        evidence: "interpretation",
        refs: [{ source: 11 }, { source: 12 }, { source: 4 }],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["maloyaroslavets"],
      },
      cost: {
        text: "Caulaincourt saw what the marches of June 1812 did. Rapid movement without stores consumed everything along the way; the vanguard ate well, the rest went hungry; thousands of horses died from exhaustion and cold rain, and young soldiers of the Guard died on the road of fatigue and hunger, pushed to match veterans. Britannica explains the logic behind it: the method relied on pillage and forced requisition, and so it fell on whoever lived along the road as well as on those who marched.",
        evidence: "fact",
        refs: [{ source: 10, locator: "pp. 49–50" }, { source: 4 }],
      },
      transfer: {
        holdsWhen: [
          "Moving first lets you be strong at a point that truly decides the matter.",
          "You have decided in advance what you will give up in order to move.",
        ],
        failsWhen: [
          "The other side can decline the contest and simply wait.",
          "The people doing the work are already exhausted, so that speed consumes what it was meant to protect.",
        ],
        questions: [
          "What are you prepared to abandon in order to move faster?",
          "If you win this race, does it settle anything?",
          "Who is carrying the cost of the pace, and for how long can they carry it?",
        ],
      },
      bearsOn:
        "This is the strongest evidence in the volume so far against simple decline. Wellington, who had reason not to flatter him, rated the 1814 campaign above all his others. The operational skill was intact nearly twenty years on. What had changed was the size of the enemy, the state of his army and whether any victory could still matter, which points towards “the problem got harder”.",
      questions: [
        {
          prompt:
            "What did Bonaparte give up in order to concentrate before Castiglione?",
          choices: [
            "The siege of Mantua, with its siege train at risk.",
            "His line of communication through Brescia.",
            "Masséna’s division.",
          ],
          answer: 0,
          explanation:
            "He ordered the siege raised and told Sérurier to burn the train if necessary.",
        },
        {
          prompt: "What does Chaptal say about Napoleon’s sleep?",
          choices: [
            "He never slept more than four hours.",
            "He kept no rule: sometimes eight or ten hours, sometimes hardly any.",
            "He slept mainly during the day.",
          ],
          answer: 1,
          explanation:
            "Chaptal describes irregularity, which is why the lesson leaves the popular claim unproven.",
        },
        {
          prompt: "What was the allied answer to Napoleon’s speed in 1813?",
          choices: [
            "To concentrate all their armies at Dresden at once.",
            "To retreat to the Rhine.",
            "To avoid battle with him and attack his subordinates.",
          ],
          answer: 2,
          explanation:
            "An opponent who declines the contest takes away what speed is for.",
        },
      ],
      sourceCheck: {
        question: "Was the Six Days a success?",
        witnesses: [
          {
            label: "Wellington, reported by Stanhope",
            claim:
              "The 1814 campaign gave him a greater idea of Napoleon’s genius than any other, though he wanted patience.",
          },
          {
            label: "Britannica",
            claim:
              "An inferior force scattered a larger one, and yet Blücher had rallied and been reinforced within days, so that it won only a postponement of defeat.",
          },
        ],
        prompt: "How should these be read together?",
        options: [
          {
            text: "Wellington is right, because he was a great general himself.",
            feedback:
              "His professional admiration is evidence about the operations. It does not show that they could have changed the war’s result.",
          },
          {
            text: "Britannica is right, so the campaign was a failure of generalship.",
            feedback:
              "Britannica’s point is about what the victories achieved. It does not say they were badly conducted.",
          },
          {
            text: "They are judging different things: operational skill, and what that skill could still achieve.",
            feedback:
              "Separating those two questions is the point of the lesson, and it bears directly on “worse or harder?”.",
            best: true,
          },
        ],
        battleSlug: "six-days-campaign",
      },
      seminar: {
        prompt:
          "Think of an organisation that moved fast and won a race that turned out not to matter. What should it have asked first?",
        guidance:
          "Compare Castiglione with the Six Days. Look at what was given up in order to move, and whether the point reached actually decided anything.",
      },
      sources: [
        s.tolentino,
        s.italy,
        s.nice,
        s.france1814,
        s.forces,
        s.autumn1813,
        s.collapse,
        s.stanhope,
        s.chaptal,
        s.harrisonHorne,
        s.caulaincourt,
        s.ganiere,
        s.retreat,
      ],
    },
    {
      slug: "knowing-when-to-stop",
      title: "Knowing when to stop: Acre and Moscow",
      part: "The limits of the self",
      themes: ["restraint", "judgement"],
      claim:
        "Cutting losses is hardest when the leader’s standing is tied to the commitment and no one can release them from it.",
      moment: {
        text: "Some time after he reached Moscow in September 1812, Napoleon admitted to those closest to him that it was a bad position. Caulaincourt had this from Berthier and Duroc: the city could be held only long enough to reorganise, and the Austrians and Prussians guarding his rear would become dangerous at the first reverse. He stayed for about a month. Caulaincourt, who watched it, could explain it only as hope, of an answer from the Tsar or of an armistice with Kutuzov that would lead further.",
        evidence: "fact",
        refs: [{ source: 0, locator: "pp. 145–146" }, { source: 2 }],
      },
      episodes: [
        {
          title: "Acre: a stopping rule",
          text: "In the spring of 1799 Bonaparte besieged Acre, a fortress resupplied from the sea. His letters ran hot: on 19 April he told a correspondent that Acre would be his by the time the letter arrived. On 9 May, with assaults failing, he set out both futures in one note. “This wretched clump of hovels has cost me many lives and much time.” If the last attempt succeeded he would raise Syria and march on Constantinople. “If I fail in the last assault I mean to deliver, I shall leave at once, as time is pressing.” The attackers reached the walls and found further defences built behind them. Reluctantly, in Britannica’s word, he accepted defeat; Lentz dates the lifting of the siege to 17 May.",
          evidence: "fact",
          refs: [
            { source: 1, locator: "pp. 96–98" },
            { source: 3 },
            { source: 4 },
          ],
          battleSlugs: ["acre"],
        },
        {
          title: "Smolensk: the wish to stop",
          text: "In August 1812 Smolensk was in ruins and the Russians had slipped away. Caulaincourt writes that the Emperor made the city his pivot, worked on its supplies and hospitals, and by 20 August seemed to have no wish to go further. A retreating enemy, a burned city and a war of mutual destruction gave him serious thought and strengthened his desire to seek negotiations. Then he went on. Britannica gives the logic: he needed a rapid and decisive victory, and Smolensk, though won, had not destroyed Russian resistance.",
          evidence: "fact",
          refs: [{ source: 0, locator: "pp. 80–81" }, { source: 5 }],
          battleSlugs: ["smolensk-1812"],
        },
        {
          title: "Moscow: the month",
          text: "The Russians refused to come to terms, and Britannica notes that both military and political dangers could be foreseen in wintering at Moscow. Ganière gives the sequence. Caulaincourt argued against going to the Tsar, so Lauriston went to Kutuzov’s outposts on 4 October, carrying instructions, as Ganière quotes them, that peace must be had at any price so long as honour was saved. No treaty came. What ended the wait was a Russian attack near Tarutino, after which, in Ganière’s account, he wanted it impossible to say that a check had forced him out, and ordered a march on Kaluga. The army began to leave on 19 October.",
          evidence: "fact",
          refs: [{ source: 2 }, { source: 6 }],
          battleSlugs: [],
          campaignSlugs: ["russian-campaign-of-1812"],
        },
      ],
      witnesses: [
        {
          who: "Caulaincourt",
          stake:
            "Close to Napoleon, and writing as the man who had warned against the war. This passage comes to him second hand, from Berthier and Duroc.",
          says: "Napoleon saw clearly that Moscow was dangerous and at the same time kept nourishing his hopes of peace.",
          refs: [{ source: 0, locator: "pp. 145–146" }],
        },
        {
          who: "Napoleon on St Helena, as Gourgaud records him",
          stake:
            "An exile’s defence: a single error implies that the plan itself was sound.",
          says: "“My great error was staying in that city too long. But for that, my enterprise might have been crowned with success.”",
          refs: [{ source: 7, locator: "p. 156" }],
        },
        {
          who: "Napoleon before Acre, in Johnston’s diary",
          stake:
            "Written at the time, for his own purposes and to subordinates, and later selected by an editor.",
          says: "He promises Acre within days, and on 9 May writes down what he will do if the last assault fails.",
          refs: [{ source: 1, locator: "pp. 96–98" }],
        },
        {
          who: "Paul Ganière",
          stake:
            "A historian writing for a Napoleonic society’s review, who quotes memoir sources without always naming them.",
          says: "He stresses how far Napoleon’s movements were shaped by the fear of seeming to run.",
          refs: [{ source: 6 }],
        },
      ],
      strategist: [
        {
          text: "Judged without hindsight, Moscow offered no good option. To winter there carried the dangers Britannica names. A march on St Petersburg, which he raised with his marshals, Caulaincourt thought he never seriously meant. To retreat was to announce failure to allies in his rear who would turn on him at the first reverse. Waiting for an answer was therefore not foolish in itself. The case against it is that the warning had been delivered: before the war Alexander had told Caulaincourt that a beaten Russia need not accept a dictated peace, and Caulaincourt says he passed it on. The information was available, and each week of waiting spent the season.",
          evidence: "interpretation",
          refs: [
            { source: 0, locator: "pp. 5–6, 134–135, 145" },
            { source: 2 },
          ],
        },
        {
          text: "What separates Acre from Moscow is not courage or intelligence. Before the last assault at Acre he had named what would make him stop, and he kept to it. Acre was one operation, and he could turn back to Egypt with a battle still to be won. Moscow was the furthest point reached by the largest army Europe had seen, and leaving without peace would tell every ally he had failed. The more depended on being seen to succeed, the harder it became to set or to keep a stopping rule.",
          evidence: "interpretation",
          refs: [{ source: 1, locator: "p. 98" }, { source: 3 }, { source: 8 }],
        },
      ],
      psychologist: [
        {
          mechanism: "Escalation of commitment",
          base: "contested",
          text: "Escalation of commitment names a tendency to put more into a failing course when one is personally responsible for it. Białek and colleagues, trying to replicate Staw’s 1976 study with 365 participants, found no evidence of it: people simply invested more in more promising projects. The FLoRA replication atlas records that result as failed and a 2022 replication as mixed. Sleesman and colleagues, by contrast, could carry out a meta-analysis of the many determinants studied over more than thirty-five years. The finding is unsettled, and Moscow should not be diagnosed with a laboratory label. It also fits Moscow badly. If Caulaincourt is right, Napoleon saw the danger and stayed, which looks less like a bias hiding a loss than like a loss he could not afford to admit.",
          evidence: "interpretation",
          refs: [{ source: 9 }, { source: 10 }, { source: 11 }],
          limit:
            "Experiments on investment decisions cannot be carried over to an emperor in 1812. Only abstracts were read for this lesson, and Staw’s original paper could not be read.",
        },
      ],
      shadow: {
        text: "Stopping is not the same as stopping well. Ganière has him unwilling even to pronounce the word retreat. He left Moscow announcing a march on Kaluga, meaning to return through country the war had not touched. Kutuzov blocked the way at Maloyaroslavets on 24 October. The French held the town, and Napoleon, in Ganière’s quotation, said that he kept beating the Russians and that it settled nothing. Then he took the road he had come by, known to be devastated and under constant threat. A decision delayed for reasons of face had lost the time that might have made it safe.",
        evidence: "interpretation",
        refs: [{ source: 6 }, { source: 2 }],
        battleSlugs: ["maloyaroslavets"],
      },
      counterCase: {
        text: "Kutuzov faced the mirror of this problem and took the other course. At a council at Fili on 13 September it was accepted that trying to hold Moscow would destroy the army. Davey-Wright, following Lieven, says Kutuzov had already reached that view but needed agreement before ordering the retreat, and Bennigsen later blamed him and Barclay for it. Alexander also reproached him over the halt at Tarutino. Kutuzov could give up the capital and keep his command, in part because, as Ganière notes, the Tsar knew the army had no one to replace him. Someone able to release him from the commitment had chosen not to punish him for leaving it.",
        evidence: "interpretation",
        refs: [{ source: 12 }, { source: 6 }],
        commanderSlug: "mikhail-kutuzov",
        battleSlugs: ["borodino"],
      },
      cost: {
        text: "Britannica notes that the large majority of the losses of the retreat occurred before the first snowfall on 6 November, which cuts against the familiar picture of an army killed by winter. On the way back the French found Smolensk ravaged and almost without supplies. On the retreat from Acre, Bonaparte passed through Jaffa and left behind men who had the plague, a decision for which, Lentz notes, he went on being criticised. Stopping had a price even when it was right. Not stopping had a greater one, and soldiers and the towns on the line of march paid it.",
        evidence: "fact",
        refs: [{ source: 2 }, { source: 4 }],
      },
      transfer: {
        holdsWhen: [
          "The person deciding has publicly staked their authority on the outcome.",
          "No superior, board or colleague can tell them to stop without cost to themselves.",
        ],
        failsWhen: [
          "The commitment can be reversed cheaply, so that little is really at stake.",
          "Stopping would itself destroy what can still be saved. At some point continuing is the least bad choice.",
        ],
        questions: [
          "What result would make you stop, and did you write it down before you began?",
          "Who could tell you to stop, and what would it cost them?",
          "How much of your reluctance is about the project, and how much about how stopping would look?",
        ],
      },
      bearsOn:
        "Acre and Moscow are thirteen years apart. The same man set a stopping rule at twenty-nine and could not keep to the wish to stop at forty-three. That can be read as decline. It can as easily be read as scale: at Acre he had an army to save and a career to make, and at Moscow an empire whose allies were waiting to see him fail. On St Helena his own verdict is one error in a sound plan. The evidence does not separate these readings.",
      questions: [
        {
          prompt:
            "What did Bonaparte write on 9 May 1799 about the last assault on Acre?",
          choices: [
            "That he would stay until Acre fell, whatever the cost.",
            "That if it failed he would leave at once.",
            "That he would wait for reinforcements from France.",
          ],
          answer: 1,
          explanation:
            "He set out what success would bring and what failure would mean, and he named time as the reason.",
        },
        {
          prompt:
            "According to Britannica, when did the large majority of the losses of the retreat from Moscow occur?",
          choices: [
            "Before the first snowfall.",
            "During the bitter cold of December.",
            "At the crossing of the Berezina.",
          ],
          answer: 0,
          explanation:
            "The first snowstorm came on 6 November. The picture of an army destroyed mainly by winter does not fit Britannica’s account.",
        },
        {
          prompt:
            "What does the lesson conclude about escalation of commitment?",
          choices: [
            "It proves why Napoleon stayed in Moscow.",
            "It has been refuted and should be ignored.",
            "The finding is unsettled, and it fits Moscow badly.",
          ],
          answer: 2,
          explanation:
            "A replication failed and another was mixed, while a meta-analysis shows a large body of work. And Caulaincourt suggests Napoleon saw the danger.",
        },
      ],
      sourceCheck: {
        question: "Did Napoleon understand his danger in Moscow?",
        witnesses: [
          {
            label: "Caulaincourt, from Berthier and Duroc",
            claim:
              "He admitted from the start that Moscow was a bad position, and went on hoping for peace.",
          },
          {
            label: "Napoleon on St Helena, recorded by Gourgaud",
            claim:
              "His great error was staying in the city too long; but for that, the enterprise might have succeeded.",
          },
        ],
        prompt: "What can be concluded from these two accounts?",
        options: [
          {
            text: "Napoleon did not grasp the danger until it was too late.",
            feedback:
              "Caulaincourt’s account says the opposite, though at second hand. Napoleon’s later regret does not show what he understood at the time.",
          },
          {
            text: "He knew the danger, and each account has reasons to frame that knowledge as it does.",
            feedback:
              "Caulaincourt had warned against the war and Napoleon was defending the enterprise. The two can agree on the fact and differ on its meaning.",
            best: true,
          },
          {
            text: "Neither account has value, because both were written after the event.",
            feedback:
              "Late accounts are still evidence. The task is to ask what each author wanted, and what they agree on despite that.",
          },
        ],
        campaignSlug: "russian-campaign-of-1812",
      },
      seminar: {
        prompt:
          "Think of a project you watched continue too long. Who could have stopped it, and what would that have cost them?",
        guidance:
          "Compare Acre with Moscow. Look for whether a stopping condition was named in advance, who was watching, and what admitting failure would have meant for the person in charge.",
      },
      sources: [
        s.caulaincourt,
        s.corsican,
        s.retreat,
        s.acre,
        s.lentz,
        s.smolensk,
        s.ganiere,
        s.gourgaud,
        s.russia,
        s.bialek,
        s.flora,
        s.sleesman,
        s.fili,
      ],
    },
  ],
};
