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
    "Three lessons are available while the format is reviewed. Sixteen more are planned, and the last will answer the question above.",
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
