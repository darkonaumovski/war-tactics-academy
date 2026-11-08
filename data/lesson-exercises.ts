import type { Question, SourceCheck } from "../lib/types";

/**
 * Extra questions and source-criticism exercises, merged into the lessons by
 * "course/lesson" key. Questions test the lesson's own text. Source checks
 * restate a disagreement already sourced on the linked campaign page.
 */
const q = (
  prompt: string,
  choices: string[],
  answer: number,
  explanation: string,
): Question => ({ prompt, choices, answer, explanation });
const opt = (text: string, feedback: string) => ({ text, feedback });
const best = (text: string, feedback: string) => ({
  text,
  feedback,
  best: true,
});

export const lessonExercises: Record<
  string,
  { questions: Question[]; sourceCheck?: SourceCheck }
> = {
  "foundations/strategy-and-tactics": {
    questions: [
      {
        prompt:
          "In the Cannae example, which is the larger outcome rather than the immediate objective?",
        choices: [
          "Breaking the Roman field army on the day of battle.",
          "Placing the infantry so that the centre could give way.",
          "A political settlement favourable to Carthage.",
        ],
        answer: 2,
        explanation:
          "The immediate objective was the destruction of an army. The larger outcome Carthage needed was a settlement, and the victory did not by itself produce one.",
      },
      {
        prompt:
          "A writer says a general “knew this battle would decide the war”. What should you check first?",
        choices: [
          "Whether the claim relies on a result the general could not yet know.",
          "Whether the general won the battle.",
          "Whether the battle involved a large number of soldiers.",
        ],
        answer: 0,
        explanation:
          "The lesson warns against treating the eventual result as something commanders could know in advance. Winning, or fighting on a large scale, does not show what anyone knew beforehand.",
      },
    ],
    sourceCheck: {
      question: "How many Romans died at Cannae?",
      witnesses: [
        {
          label: "Polybius",
          claim:
            "About seventy thousand Romans and allies died, and some ten thousand were captured away from the field.",
        },
        {
          label: "Livy",
          claim:
            "Forty thousand foot and 2,700 horse are said to have been slain.",
        },
      ],
      prompt: "What is the soundest way to use these two figures?",
      options: [
        {
          text: "Accept Polybius, because he wrote earlier than Livy.",
          feedback:
            "An earlier writer is often closer to the evidence, but date alone does not settle a number. Polybius does not tell us how his total was reached, so it still needs testing.",
        },
        {
          text: "Take the average, about 56,000.",
          feedback:
            "An average looks balanced but produces a figure that no source reports. If one number rests on a poor tradition, averaging simply carries the error forward.",
        },
        {
          text: "Report both, and ask who was counted and where each number came from.",
          best: true,
          feedback:
            "Keep the disagreement visible and ask what each writer was counting and what he drew on. The strategic lesson also survives either figure: on both accounts the loss was immense, and Rome still fought on.",
        },
      ],
      campaignSlug: "hannibal-s-italian-campaign",
    },
  },
  "foundations/command-structures": {
    questions: [
      {
        prompt:
          "Besides who can issue orders, what decides whether an army can react to change?",
        choices: [
          "The rank of its most senior officer.",
          "Communication, trust and shared purpose.",
          "The number of regiments it contains.",
        ],
        answer: 1,
        explanation:
          "Rank defines authority, but the lesson stresses that effective cooperation also depends on communication, trust and shared purpose.",
      },
      {
        prompt: "What should you examine when judging a coalition’s plan?",
        choices: [
          "Which commander later wrote the fullest account of it.",
          "Whether the plan looked clear when drawn on paper.",
          "What was promised, how messages travelled and what could interrupt execution.",
        ],
        answer: 2,
        explanation:
          "A plan on paper is not the same as a force arriving on time. Promises, communications and obstacles show whether it could actually be carried out.",
      },
    ],
    sourceCheck: {
      question: "Why did the Prussians retreat toward Wavre after Ligny?",
      witnesses: [
        {
          label: "Encyclopædia Britannica (1911)",
          claim:
            "Gneisenau chose Wavre to restore his communications rather than to help Wellington; Blücher and Grolmann brought the army to Waterloo.",
        },
        {
          label: "J. Holland Rose",
          claim:
            "Gneisenau first aimed to reunite the Prussian wings, but soon saw the chance of joining Wellington.",
        },
        {
          label: "Gneisenau’s biographer in the Neue Deutsche Biographie",
          claim:
            "Recent research shows that he acted entirely in Blücher’s sense.",
        },
      ],
      prompt:
        "All three describe the same march. What are they really arguing about?",
      options: [
        {
          text: "Where the Prussian army went after the battle.",
          feedback:
            "The route is common ground. The accounts part company over why it was chosen and who deserves the credit.",
        },
        {
          text: "The motives behind the decision, which a march alone cannot reveal.",
          best: true,
          feedback:
            "A movement can be established; an intention has to be inferred. That is why this lesson’s advice matters: to go further you would look at what was ordered, what was promised and what each officer knew when he decided.",
        },
        {
          text: "Nothing of importance, since the Prussians arrived at Waterloo anyway.",
          feedback:
            "The outcome does not settle the argument. Judging the decision by its result is the hindsight this course asks you to avoid, and the motive matters for how the coalition actually worked.",
        },
      ],
      campaignSlug: "waterloo-campaign",
    },
  },
  "foundations/terrain": {
    questions: [
      {
        prompt:
          "Why is “the ridge gave them the advantage” not a general rule?",
        choices: [
          "Its effects depend on weather, transport, weapons and organization.",
          "Ridges have never influenced a battle.",
          "High ground mattered only before the age of gunpowder.",
        ],
        answer: 0,
        explanation:
          "Terrain matters in relation to the armies using it. The lesson’s point is that a ridge is not an advantage in every circumstance.",
      },
      {
        prompt:
          "Hastings and Waterloo were both shaped by ground and position. What follows from that?",
        choices: [
          "They can be treated as the same kind of battle.",
          "Similar features do not make them interchangeable.",
          "The side holding the higher ground was bound to win.",
        ],
        answer: 1,
        explanation:
          "The forces, weapons and political situations were different, so a resemblance in the ground does not make the engagements interchangeable.",
      },
    ],
    sourceCheck: {
      question: "Why were 17,000 of Wellington’s men at Hal?",
      witnesses: [
        {
          label: "Napoleon",
          claim: "His cavalry drew Wellington’s 17,000 men away to Hal.",
        },
        {
          label: "J. Holland Rose, citing Houssaye",
          claim: "Napoleon’s claim is a fabrication.",
        },
      ],
      prompt:
        "How should you treat a defeated commander’s explanation of where the enemy stood?",
      options: [
        {
          text: "Trust it, because Napoleon commanded the army and knew the situation.",
          feedback:
            "Being in command gives a witness access, but also a motive. A defeated general has reasons to present events as the result of his own design.",
        },
        {
          text: "Dismiss everything Napoleon said about the campaign.",
          feedback:
            "That goes too far. A partial witness can still be right about many things; each claim has to be tested on its own.",
        },
        {
          text: "Test the claim against other evidence of why the troops were placed there.",
          best: true,
          feedback:
            "Positions on a map are not self-explaining. Ask who says why the troops stood where they did, and what that witness gains from the explanation. Rose rejects this claim on that kind of test.",
        },
      ],
      campaignSlug: "waterloo-campaign",
    },
  },
  "foundations/logistics": {
    questions: [
      {
        prompt: "What does an army’s nominal strength leave out?",
        choices: [
          "How many soldiers are on its rolls.",
          "How long it can act, given food, ammunition, transport and care of the wounded.",
          "The name of the army’s commander.",
        ],
        answer: 1,
        explanation:
          "Nominal strength is a count of men. Usable strength depends on sustainment, which also rests on the civilians who bear requisition and displacement.",
      },
      {
        prompt:
          "A map shows a bold line of advance. What should you ask before accepting it as feasible?",
        choices: [
          "What had to arrive, by which route and under whose control.",
          "Whether the line is drawn in a straight direction.",
          "Whether the commander was known for boldness.",
        ],
        answer: 0,
        explanation:
          "A line on a map does not show that a manoeuvre could be supplied. The lesson asks you to test it against what had to arrive and how.",
      },
    ],
    sourceCheck: {
      question: "How much air supply did the Sixth Army need at Stalingrad?",
      witnesses: [
        {
          label: "Manfred Kehrig (Neue Deutsche Biographie)",
          claim: "Hitler announced a daily air supply of 500 tons.",
        },
        {
          label: "Earl Ziemke and Magna Bauer",
          claim:
            "The army’s daily minimum was 300 tons; in December the airlift averaged 90 tons a day and reached the minimum only once.",
        },
      ],
      prompt: "Do these figures contradict each other?",
      options: [
        {
          text: "Yes, so one of the two historians must be mistaken.",
          feedback:
            "Look at what each number describes before calling it a contradiction. One is a promise and the other a requirement.",
        },
        {
          text: "No: they measure different things, a promise, a requirement and a delivery.",
          best: true,
          feedback:
            "Announced, required and delivered are three separate quantities. The gap between them is the lesson: possessing transport aircraft was not the same as a reliable flow of supplies.",
        },
        {
          text: "No, because the numbers are close enough to treat as the same.",
          feedback:
            "They are far apart, and 90 tons a day is less than a third of the minimum. The differences carry the meaning here.",
        },
      ],
      campaignSlug: "german-summer-offensive-of-1942",
    },
  },
  "foundations/uncertainty": {
    questions: [
      {
        prompt: "What makes for a fair assessment of a commander’s decision?",
        choices: [
          "Judging it by whether the battle was eventually won.",
          "Asking whether a later strategist would have chosen differently.",
          "Asking whether it was reasonable on the information then available.",
        ],
        answer: 2,
        explanation:
          "The lesson separates the quality of a decision from the luck of its outcome. Start with what could be known at the time, then examine how later events affected it.",
      },
      {
        prompt:
          "A writer says that if the carriers had been found five minutes later, Japan would have won. What kind of statement is this?",
        choices: [
          "A counterfactual claim, not a historical fact.",
          "A documented event of the battle.",
          "An intelligence report from the time.",
        ],
        answer: 0,
        explanation:
          "Alternative outcomes can be useful to think with, but they remain counterfactual claims and should be labelled as such.",
      },
    ],
    sourceCheck: {
      question: "What did the Americans know before Midway?",
      witnesses: [
        {
          label: "U.S. Strategic Bombing Survey",
          claim:
            "Japanese intentions were “suspected” by the United States command.",
        },
        {
          label: "Editors of the online edition of the Survey",
          claim:
            "The account was written long before the American decryption of Japanese naval codes was declassified.",
        },
      ],
      prompt: "What does the editors’ note teach about the Survey’s wording?",
      options: [
        {
          text: "That the Survey’s authors were deliberately lying.",
          feedback:
            "Nothing here shows that. A document can be limited by what was secret or unavailable when it was written, without any intent to deceive.",
        },
        {
          text: "That the Survey is useless and should be ignored.",
          feedback:
            "It remains valuable, not least for what Japanese officers said. The note tells you where to be careful, not to discard it.",
        },
        {
          text: "That what a source can say depends on what was known or releasable when it was written.",
          best: true,
          feedback:
            "Always ask when a source was written and what its author could reveal. Later knowledge can show that a cautious word like “suspected” stood in for something secret.",
        },
      ],
      campaignSlug: "japanese-midway-operation",
    },
  },
  "classical-warfare/infantry-formations": {
    questions: [
      q(
        "Why does the lesson treat the phalanx as social history as well as military history?",
        [
          "Greek infantry used the same weapons as everyone else.",
          "Equipment and service reflected people’s social resources.",
          "Herodotus was interested only in social questions.",
        ],
        1,
        "Maintaining a horse required wealth, while naval service drew on other groups. Who fought, and how, depended on who could afford what.",
      ),
      q(
        "An excavated set of armour shows protection and weight. What can it not establish on its own?",
        [
          "What the armour was made of.",
          "How heavy the equipment was.",
          "How a whole formation moved.",
        ],
        2,
        "Objects illuminate equipment, but the lesson warns that an object alone cannot establish how a formation moved.",
      ),
    ],
    sourceCheck: {
      question: "How much do the casualty figures for Marathon rest on?",
      witnesses: [
        {
          label: "Herodotus",
          claim: "About 6,400 Persians and 192 Athenians were slain.",
        },
        {
          label: "Encyclopædia Britannica (1911)",
          claim:
            "A burial mound excavated in 1891–1892 holds the Athenian dead. The Persian force was perhaps 50,000, a modern estimate.",
        },
      ],
      prompt: "What does the excavated mound add to Herodotus?",
      options: [
        opt(
          "It proves that exactly 192 Athenians died.",
          "The mound shows that Athenian dead were buried on the field. It does not supply a count that confirms his precise number.",
        ),
        best(
          "It confirms a mass burial of Athenian dead, but cannot confirm his figures.",
          "Material evidence can corroborate that an event happened as described in general while leaving the numbers untested. The Persian total remains a matter of estimate.",
        ),
        opt(
          "It makes the written account unnecessary.",
          "The mound cannot tell us who commanded, how the armies were drawn up or why they fought. Archaeology and text answer different questions.",
        ),
      ],
      campaignSlug: "persian-expedition-to-the-aegean",
    },
  },
  "classical-warfare/cavalry-and-combined-forces": {
    questions: [
      q(
        "Did the presence of cavalry guarantee coordinated action?",
        [
          "No: terrain, communication and the enemy’s response could prevent it.",
          "Yes: horsemen always supported the infantry.",
          "Yes, provided the cavalry outnumbered the enemy.",
        ],
        0,
        "The lesson stresses that different arms had to be brought to work together, and that this could fail.",
      ),
      q(
        "What do the arrows in the Cannae replay represent?",
        [
          "The surveyed route of each unit.",
          "The recorded path of each rider.",
          "Editorial explanations of the surviving narrative.",
        ],
        2,
        "They explain a narrative. They cannot tell us each rider’s route or prove that every stage unfolded as planned.",
      ),
    ],
    sourceCheck: {
      question: "How large an army did Hannibal bring into Italy?",
      witnesses: [
        {
          label: "Polybius",
          claim:
            "12,000 African and 8,000 Iberian foot and no more than 6,000 horse, as Hannibal himself recorded in an inscription at the Lacinian promontory.",
        },
        {
          label: "An account reported by Livy",
          claim:
            "80,000 foot and 10,000 horse, a total Livy suggests may include those who joined later.",
        },
      ],
      prompt: "Which figure deserves more weight, and why?",
      options: [
        best(
          "Polybius’s, because it names a document, while asking what the larger total counted.",
          "A figure traced to a named inscription is stronger than an unexplained total. Livy himself hints that the larger number may include later recruits, so the two may not be measuring the same moment.",
        ),
        opt(
          "Livy’s, because the larger army better explains Hannibal’s victories.",
          "Choosing the number that suits a story is circular. An explanation has to fit the evidence, not the other way round.",
        ),
        opt(
          "Neither, since ancient numbers are always worthless.",
          "Ancient numbers need care, but they differ in quality. Here we can see where one of them came from.",
        ),
      ],
      campaignSlug: "hannibal-s-italian-campaign",
    },
  },
  "classical-warfare/roman-organization": {
    questions: [
      q(
        "How should you use Polybius’s account of the Roman army?",
        [
          "As a description of a particular period, not of every century.",
          "As a guide to the army throughout Roman history.",
          "As evidence only for the imperial period.",
        ],
        0,
        "It is a structured explanation from one period, and the lesson warns against projecting it onto all of Roman history.",
      ),
      q(
        "Which question fits the lesson’s approach to Roman institutions?",
        [
          "Which general had the finest reputation?",
          "Who supplied soldiers, who held authority and how was it maintained?",
          "Which battle had the most dramatic ending?",
        ],
        1,
        "Institutions explain endurance and mobilization beyond the reputation of an individual commander.",
      ),
    ],
    sourceCheck: {
      question: "How did the siege of Alesia end?",
      witnesses: [
        {
          label: "Caesar",
          claim:
            "He ordered the arms to be given up and the chiefs brought out.",
        },
        {
          label: "Cassius Dio",
          claim:
            "Vercingetorix might have escaped, but hoped for pardon from a man who had once been his friend.",
        },
      ],
      prompt:
        "Dio wrote much later and adds a motive that Caesar omits. How should you treat it?",
      options: [
        opt(
          "Accept it, since a fuller account must be better informed.",
          "More detail is not more evidence. A later writer may have good information, or may be supplying a motive that makes a better story.",
        ),
        best(
          "Keep it as a later tradition, and note that neither version can be checked.",
          "Caesar has reasons to be spare and Dio reasons to dramatize. Report what each says and be clear that the motive of Vercingetorix cannot be recovered from them.",
        ),
        opt(
          "Reject it, because Caesar was there and Dio was not.",
          "Being present gives Caesar knowledge, but he was also the victor writing about his own triumph. Presence does not end the need for caution.",
        ),
      ],
      campaignSlug: "gallic-revolt-of-52-bce",
    },
  },
  "classical-warfare/siege-warfare": {
    questions: [
      q(
        "What should not disappear behind the language of military achievement in a siege?",
        [
          "The engineering of the siege works.",
          "The names of the commanders.",
          "The experience of civilians.",
        ],
        2,
        "A siege creates pressure on the people inside a defended place as well as on the armies.",
      ),
      q(
        "Why does the lesson ask you to read Caesar cautiously?",
        [
          "He was both a participant and an advocate for his own reputation.",
          "He did not take part in the siege.",
          "He wrote centuries after the events.",
        ],
        0,
        "His detail is useful, but his political position may shape what he emphasizes or omits.",
      ),
    ],
    sourceCheck: {
      question: "How many people were at Alesia?",
      witnesses: [
        {
          label: "Caesar",
          claim: "Eighty thousand inside, and a relief army of about 258,000.",
        },
        {
          label: "Plutarch",
          claim:
            "Not fewer than 170,000 fighting men in the city and 300,000 outside.",
        },
      ],
      prompt: "Why might you hesitate to accept even Caesar’s lower figures?",
      options: [
        best(
          "He had reasons to magnify the enemy he defeated.",
          "The larger the enemy, the greater the victory. The lesson tells you to treat reported enemy totals cautiously, and Caesar is the only contemporary narrator.",
        ),
        opt(
          "He was not present at the siege.",
          "He commanded it. The difficulty is that he was present and had a reputation to build.",
        ),
        opt(
          "Plutarch’s figures are higher, which proves Caesar’s are too low.",
          "A later and larger number does not prove anything about the earlier one. Plutarch may simply show how such figures grew.",
        ),
      ],
      campaignSlug: "gallic-revolt-of-52-bce",
    },
  },
  "classical-warfare/classical-case-studies": {
    questions: [
      q(
        "Why can’t Marathon, Cannae and Alesia be judged by a single measure of command quality?",
        [
          "They were all fought by the same army.",
          "They were different kinds of engagement in different political struggles.",
          "Only one of them has any surviving evidence.",
        ],
        1,
        "A field battle, a destructive army defeat and an extended siege pose different problems.",
      ),
      q(
        "What should a responsible written comparison make visible?",
        [
          "Which commander was greatest.",
          "Its limits, and which parts are documented or your own interpretation.",
          "As many battle names as possible.",
        ],
        1,
        "The lesson asks you to state which parts are documented and which are interpretation.",
      ),
    ],
    sourceCheck: {
      question: "When did Hannibal leave Italy?",
      witnesses: [
        {
          label: "Encyclopædia Britannica (1911)",
          claim: "Italy was finally cleared of Carthaginian troops in 205 BCE.",
        },
        {
          label: "The same article",
          claim:
            "The Carthaginian peace talks that led to Hannibal’s recall followed Scipio’s victories of 203 BCE.",
        },
      ],
      prompt: "What does this show about reference works?",
      options: [
        opt(
          "Encyclopedias can be trusted without checking, since editors catch errors.",
          "This one contains a date that does not fit its own narrative. Even a good reference work needs reading with attention.",
        ),
        opt(
          "The whole article should be thrown out.",
          "One inconsistent date does not make its other judgements worthless. Note the problem and check that point against other sources.",
        ),
        best(
          "Test any date against the sequence of events the same source describes.",
          "A source can be checked against itself. Livy, too, places Hannibal’s departure after these events, in the sixteenth year of the war.",
        ),
      ],
      campaignSlug: "hannibal-s-italian-campaign",
    },
  },
  "alexanders-campaigns/granicus-and-issus": {
    questions: [
      q(
        "What did Alexander’s victorious right do after Darius’s mercenaries attacked the gap in the phalanx at Issus?",
        [
          "It wheeled against the mercenaries’ flank.",
          "It pursued Darius out of the battle at once.",
          "It withdrew across the Pinarus.",
        ],
        0,
        "The charge broke the Persian left, and the right then turned against the flank of the mercenaries.",
      ),
      q(
        "How did Polybius challenge Callisthenes’s figures for Issus?",
        [
          "By finding a contradicting inscription.",
          "By showing that they could not fit the ground.",
          "By interviewing veterans of the battle.",
        ],
        1,
        "Terrain can test a number: an army of a given size needs room in which to deploy.",
      ),
    ],
    sourceCheck: {
      question: "How did Alexander cross the Granicus?",
      witnesses: [
        {
          label: "Arrian and Plutarch",
          claim: "A direct assault across the river late in the day.",
        },
        {
          label: "Diodorus, preferred by Livius",
          claim: "A crossing at dawn.",
        },
      ],
      prompt:
        "The outline of the battle is secure, but not the sequence. What should a diagram do?",
      options: [
        opt(
          "Show the version found in the most sources.",
          "Two writers against one is not a vote. Later writers may share a single earlier source, so counting them can mislead.",
        ),
        best(
          "Say which account it follows and that the sequence is disputed.",
          "A diagram of combined action is a reconstruction. It should declare which narrative it depends on instead of presenting one version as what happened.",
        ),
        opt(
          "Combine the two into a dawn crossing and a late-day assault.",
          "Merging incompatible stories produces an event that no source describes.",
        ),
      ],
      battleSlug: "granicus",
    },
  },
  "alexanders-campaigns/tyre-and-gaza": {
    questions: [
      q(
        "What did the fall of the Phoenician cities show about naval power?",
        [
          "A navy could be defeated from the land by taking its ports.",
          "Fleets no longer mattered after Issus.",
          "An island fortress could be taken without ships.",
        ],
        0,
        "When the cities submitted, their ships left the Persian fleet. Yet Tyre itself could not be taken without ships.",
      ),
      q(
        "Curtius reports crucifixions at Tyre and the dragging of Batis, which Arrian does not mention. What does Arrian’s silence show?",
        [
          "That the events did not happen.",
          "That Curtius invented them.",
          "Nothing certain: silence alone neither confirms nor refutes them.",
        ],
        2,
        "Writers select. An omission has to be weighed against what each author was trying to do.",
      ),
    ],
    sourceCheck: {
      question: "Why did Alexander besiege Tyre?",
      witnesses: [
        {
          label: "Arrian",
          claim:
            "Gives Alexander a speech arguing that Egypt and Babylon could not safely be attempted while Persia held the sea.",
        },
        {
          label: "Livius",
          claim:
            "The siege was strategically unnecessary, and its cause was religious: Tyre refused Alexander the right to sacrifice to Melqart.",
        },
      ],
      prompt: "How should you read the speech in Arrian?",
      options: [
        opt(
          "As a record of Alexander’s actual words.",
          "A speech in an ancient history, written long after, is not a transcript. It shows how the decision was explained.",
        ),
        best(
          "As one explanation of the decision, to be weighed against what followed.",
          "The speech gives a strategic logic, and the defection of the Phoenician fleets fits it. That does not exclude other motives, and the modern reading shows the question is still open.",
        ),
        opt(
          "As worthless, since Arrian lived after Alexander.",
          "A later author can still preserve older material. Arrian’s value depends on the sources he used, not on his date alone.",
        ),
      ],
      battleSlug: "tyre",
    },
  },
  "alexanders-campaigns/gaugamela": {
    questions: [
      q(
        "Why did Alexander place a second line behind the first?",
        [
          "To keep reserves away from the fighting.",
          "To face about if the army were surrounded.",
          "To guard the baggage on the march.",
        ],
        1,
        "With his flanks exposed on open ground, the second line was ordered to turn if the army were enveloped.",
      ),
      q(
        "Why did Darius seek open ground in 331 BCE?",
        [
          "He wished to avoid using his cavalry.",
          "He had been persuaded that the narrow field at Issus had cost him.",
          "He expected Alexander to refuse battle.",
        ],
        1,
        "Open ground would let his numbers, cavalry and scythed chariots be used.",
      ),
    ],
    sourceCheck: {
      question: "Did Darius flee at Gaugamela, or was he abandoned?",
      witnesses: [
        { label: "Arrian", claim: "Darius fled first." },
        {
          label: "A contemporary Babylonian astronomical diary",
          claim: "His troops deserted him.",
        },
      ],
      prompt: "Livius prefers the diary. What is the strongest reason?",
      options: [
        best(
          "It is contemporary and independent of the Greek tradition.",
          "The diary also dates the eclipse and the battle independently. Arrian’s picture of a fleeing king suits the Macedonian story, though the diary’s writers had their own reasons for how they reported a change of ruler.",
        ),
        opt(
          "Babylonians were more honest than Greeks.",
          "No people is more honest as a group. What matters is when and why a particular record was made.",
        ),
        opt(
          "Arrian never used earlier sources.",
          "He did use earlier authorities. The point is that they came from Alexander’s side.",
        ),
      ],
      battleSlug: "gaugamela",
    },
  },
  "alexanders-campaigns/mountains-and-steppe": {
    questions: [
      q(
        "What was decisive at the Persian Gate?",
        [
          "A frontal attack on the defile.",
          "Turning the position by a night march to the Persian rear.",
          "The arrival of Parmenion’s column.",
        ],
        1,
        "The frontal attack had been costly. Alexander then marched by another route while Craterus waited for the trumpets.",
      ),
      q(
        "Livius reads the surrounded detachment on the Jaxartes as bait. What is the status of that reading?",
        [
          "A modern reconstruction.",
          "A statement in Arrian.",
          "A finding from excavation.",
        ],
        0,
        "The lesson labels it as a modern reconstruction, which should be kept apart from what the ancient sources report.",
      ),
    ],
  },
  "alexanders-campaigns/hydaspes-and-limits": {
    questions: [
      q(
        "What were Craterus’s orders at the Hydaspes?",
        [
          "To cross at once and attack the elephants.",
          "To cross only if Porus took all his elephants against Alexander or was beaten.",
          "To march upstream and join the crossing.",
        ],
        1,
        "Alexander had divided his army, and these orders governed when the second part would cross.",
      ),
      q(
        "How did Alexander avoid attacking the elephant line head-on?",
        [
          "He sent Coenus toward the Indian right and charged the cavalry as it turned.",
          "He waited until the elephants withdrew.",
          "He crossed the river again further down.",
        ],
        0,
        "When the Indian cavalry turned to meet Coenus, Alexander charged it while it was turning.",
      ),
    ],
    sourceCheck: {
      question: "How much of a victory was the Hydaspes?",
      witnesses: [
        {
          label: "Arrian",
          claim:
            "Names his authorities, Ptolemy and Aristobulus, reports three versions of the force under Porus’s son and prefers Ptolemy’s.",
        },
        {
          label: "Livius",
          claim:
            "It was in fact a skirmish fought with part of Alexander’s army, and Porus was the long-term winner.",
        },
      ],
      prompt: "What does Arrian’s choice of Ptolemy tell you?",
      options: [
        opt(
          "That the account must be accurate, because a witness wrote it.",
          "Ptolemy was a companion of Alexander, so he had knowledge and an interest. A witness can shape a story as well as preserve it.",
        ),
        best(
          "That Arrian weighs his sources, but how far a companion shapes the story remains open.",
          "Naming authorities and comparing them is good practice. It lets you see the choice he made, without settling whether a companion’s version is neutral.",
        ),
        opt(
          "That the battle cannot be studied at all.",
          "We have a detailed narrative. The task is to know which questions it can answer and where it leans.",
        ),
      ],
      battleSlug: "hydaspes",
    },
  },
  "rome-at-war/legion-against-phalanx": {
    questions: [
      q(
        "How did the battle of Cynoscephalae begin?",
        [
          "With a planned Roman assault on the ridge.",
          "With a chance meeting in fog, as both sides fed in troops.",
          "With a siege of the Macedonian camp.",
        ],
        1,
        "Neither commander chose the field, which matters when the battle is used to generalize about tactics.",
      ),
      q(
        "Why do the studies treat Polybius’s conclusion as an argument and not a law?",
        [
          "He was not interested in tactics.",
          "It generalizes from particular encounters, such as one fought in fog on broken ground.",
          "He never saw a phalanx.",
        ],
        1,
        "Two battles fought in unusual conditions make a strong case, but not a general rule.",
      ),
    ],
    sourceCheck: {
      question: "How many Macedonians fell at Cynoscephalae?",
      witnesses: [
        {
          label: "Valerius Antias, reported by Livy",
          claim:
            "Forty thousand dead and 5,700 prisoners. Livy says he “on every occasion exaggerates numbers enormously”.",
        },
        {
          label: "Claudius, reported by Livy",
          claim: "Thirty-two thousand dead and 4,300 prisoners.",
        },
        {
          label: "Polybius",
          claim: "Eight thousand dead and five thousand prisoners.",
        },
      ],
      prompt: "What does this reveal about Roman battle figures?",
      options: [
        opt(
          "That all three should be averaged.",
          "An average would give weight to a writer whom Livy himself names as an exaggerator.",
        ),
        best(
          "That some Roman writers inflated victories, so figures known only from them need caution.",
          "Here we can see the inflation because Polybius survives. For many battles there is no such check.",
        ),
        opt(
          "That Livy is unreliable because he reports exaggerated numbers.",
          "Livy reports them in order to criticize them. Quoting a bad source is different from being misled by it.",
        ),
      ],
      campaignSlug: "second-macedonian-war",
    },
  },
  "rome-at-war/cannae-to-zama": {
    questions: [
      q(
        "How did Scipio’s formation at Zama answer the elephants?",
        [
          "He placed his maniples one behind another, leaving lanes.",
          "He kept his infantry out of the battle.",
          "He massed his cavalry in front of them.",
        ],
        0,
        "A formation was adapted to a specific threat, and the elephant charge failed.",
      ),
      q(
        "What decided the infantry fight against Hannibal’s veterans at Zama?",
        [
          "The return of the Roman horse, striking from the rear.",
          "A fresh charge by the elephants.",
          "Hannibal’s withdrawal before contact.",
        ],
        0,
        "The infantry fought evenly until Laelius and Massinissa came back.",
      ),
    ],
    sourceCheck: {
      question: "Was Hannibal trying to repeat Cannae at Zama?",
      witnesses: [
        {
          label: "Livius",
          claim: "Reads Hannibal as trying to repeat Cannae and failing.",
        },
        {
          label: "Polybius",
          claim: "His narrative does not make that reading explicit.",
        },
      ],
      prompt: "What kind of claim is the Livius reading?",
      options: [
        best(
          "A modern interpretation that goes beyond what the narrative states.",
          "It may be persuasive, but it infers an intention. Keep what the source reports apart from what a modern reader concludes from it.",
        ),
        opt(
          "A fact recorded by the ancient sources.",
          "Polybius does not state it. If an inference is presented as a report, the reader loses track of the evidence.",
        ),
        opt(
          "An error, since Hannibal cannot have remembered Cannae.",
          "He certainly knew his own victory. The question is whether his plan at Zama was an attempt to repeat it, which the sources do not say.",
        ),
      ],
      battleSlug: "zama",
    },
  },
  "rome-at-war/civil-war-land-and-sea": {
    questions: [
      q(
        "Why was Actium, in the lesson’s view, decided before the fleets met?",
        [
          "Agrippa’s seizure of bases cut Antony’s supply lines.",
          "Antony had already left the theatre of war.",
          "A storm had destroyed Octavian’s fleet.",
        ],
        0,
        "Hunger wore down Antony’s army and allies deserted while Octavian refused battle.",
      ),
      q(
        "What follows from the fact that both battles reach us through the winners?",
        [
          "Their accounts are the most reliable.",
          "They need reading with attention to what the victors wished to show.",
          "The battles probably did not take place.",
        ],
        1,
        "Augustan propaganda, for example, cast the civil war as a war against a foreign queen.",
      ),
    ],
    sourceCheck: {
      question: "How many Pompeians died at Pharsalus?",
      witnesses: [
        {
          label: "Caesar",
          claim:
            "About 15,000 fell and over 24,000 surrendered, for no more than two hundred of his own men.",
        },
        {
          label:
            "Asinius Pollio, an officer in the battle, as reported by Appian and Plutarch",
          claim: "Six thousand dead, most of them servants killed at the camp.",
        },
      ],
      prompt:
        "Both witnesses fought on the same side. What should you conclude?",
      options: [
        opt(
          "That they must agree, so one number is a copying error.",
          "Serving together does not produce agreement, and nothing suggests a slip of the pen.",
        ),
        best(
          "That even a participant’s count may serve a purpose, and that the commander’s has a clear one.",
          "Caesar’s figures make the victory large and cheap. Pollio was on his side yet reports far fewer dead, which is why his figure is worth setting against the commander’s.",
        ),
        opt(
          "That Pollio is lying, because he disagrees with his commander.",
          "Disagreeing with a commander is no sign of dishonesty. It may be the reverse.",
        ),
      ],
      campaignSlug: "caesar-s-civil-war",
    },
  },
  "rome-at-war/frontiers-and-revolts": {
    questions: [
      q(
        "Why could Varus’s column not fight effectively at Kalkriese?",
        [
          "It could not form ranks among its wagons and was attacked from a fortified slope.",
          "It had no infantry.",
          "It was caught crossing the Rhine.",
        ],
        0,
        "The site’s narrow ground and the baggage train deprived the legions of the formation they relied on.",
      ),
      q(
        "How did Titus change his approach at Jerusalem?",
        [
          "He offered the factions a settlement and withdrew.",
          "He turned from assault to blockade, so that famine would do what the rams could not.",
          "He moved his army to Galilee.",
        ],
        1,
        "People caught outside the walls were crucified in great numbers. The lesson asks you to keep that human cost in view.",
      ),
    ],
    sourceCheck: {
      question: "Who decided the fate of the Temple?",
      witnesses: [
        {
          label: "Josephus",
          claim:
            "Repeatedly shows Titus wishing to preserve the city and Temple, and blames a soldier.",
        },
        {
          label:
            "A fragment attributed to Tacitus, preserved by Sulpicius Severus",
          claim:
            "Titus was among those who held that it must be destroyed, to root out Judaism and Christianity.",
        },
      ],
      prompt: "What should you ask about Josephus first?",
      options: [
        best(
          "Whose service he was in when he wrote.",
          "Josephus was in Titus’s service. That does not make him wrong, but it gives him a clear reason to clear his patron of the destruction of the Temple.",
        ),
        opt(
          "Whether he was Jewish, since that makes him trustworthy on this point.",
          "His background gave him knowledge, but it does not settle his loyalties at the time of writing.",
        ),
        opt(
          "Whether he was present, since an eyewitness settles the question.",
          "He was there, yet a witness to the burning need not have known what was decided in the commander’s council.",
        ),
      ],
      campaignSlug: "judaean-campaign-of-vespasian-and-titus",
    },
  },
  "rome-at-war/the-late-empire": {
    questions: [
      q(
        "Why does the lesson question Ammianus’s comparison of Adrianople with Cannae?",
        [
          "Livius notes that later writers followed his view of a turning point, which is not necessarily correct.",
          "Ammianus never mentioned Cannae.",
          "Adrianople was a Roman victory.",
        ],
        0,
        "A contemporary’s sense of catastrophe is evidence of how a defeat was felt, not proof of its long-term effect.",
      ),
      q(
        "In Ammianus’s view, what did Fritigern’s negotiations achieve?",
        [
          "They ended the war.",
          "They bought time for the Gothic cavalry to return.",
          "They brought Gratian’s army to the field.",
        ],
        1,
        "The cavalry’s return against a Roman army only partly deployed decided the battle.",
      ),
    ],
    sourceCheck: {
      question: "What did Constantine see before the Milvian Bridge?",
      witnesses: [
        {
          label: "Lactantius",
          claim:
            "Constantine was directed in a dream to mark a heavenly sign on his soldiers’ shields.",
        },
        {
          label: "Eusebius",
          claim:
            "A cross of light in the sky by day, which he says Constantine swore to him was true, followed by a dream.",
        },
      ],
      prompt:
        "The Britannica article notes the vision is missing from Eusebius’s earlier history. What does that suggest?",
      options: [
        opt(
          "That Lactantius copied Eusebius.",
          "Nothing here shows that, and the dream in Lactantius is told differently.",
        ),
        opt(
          "That nothing happened, since the stories differ.",
          "Differing accounts need not mean that nothing occurred. They show that the story changed in the telling, and that Constantine adopted a sign.",
        ),
        best(
          "That the story grew, and that the later and fuller version needs the most caution.",
          "The form of the story appears after the emperor’s death, on his own reported word. An account’s growth over time is itself historical evidence.",
        ),
      ],
      campaignSlug: "constantine-s-italian-campaign",
    },
  },
  "napoleonic-warfare/corps-organization": {
    questions: [
      q(
        "What does the label “corps” fail to establish on its own?",
        [
          "That the formation combined several arms.",
          "That it served under one commander.",
          "Equal training, strength or efficiency across armies or years.",
        ],
        2,
        "Composition and independence varied, so the same word can cover very different forces.",
      ),
      q(
        "Which was not true of a Napoleonic corps?",
        [
          "It was a self-sufficient miniature state.",
          "It could operate apart from the main army for a limited time.",
          "It could be defeated before support arrived.",
        ],
        0,
        "Corps could act apart for a time, but coordination still depended on staff work, marching capacity and imperfect information.",
      ),
    ],
    sourceCheck: {
      question: "Was Napoleon physically impaired in 1815?",
      witnesses: [
        {
          label: "Encyclopædia Britannica (1911)",
          claim: "Napoleon’s physical strength was impaired.",
        },
        {
          label: "J. Holland Rose",
          claim:
            "There is no trustworthy evidence of decline during the campaign.",
        },
      ],
      prompt:
        "Why should an explanation based on the commander’s health be handled with care?",
      options: [
        best(
          "It is easy to reach for after a defeat, and it needs evidence from the campaign itself.",
          "A declining commander is a tidy explanation for a loss, and can excuse the system around him. Rose’s objection is about the evidence for it, which is the right place to press.",
        ),
        opt(
          "Health can never influence a commander’s decisions.",
          "It certainly can. The question is whether there is reliable evidence that it did so here.",
        ),
        opt(
          "Rose must be right, because he wrote a whole biography.",
          "Length is not proof. His judgement should be weighed on the evidence he offers.",
        ),
      ],
      campaignSlug: "waterloo-campaign",
    },
  },
  "napoleonic-warfare/campaign-maneuver": {
    questions: [
      q(
        "What should you construct before explaining a decisive day?",
        [
          "A list of the commanders’ reputations.",
          "A sequence of constraints.",
          "A scale drawing of the final position.",
        ],
        1,
        "Distances, tired troops and uncertain cooperation limit the options that a retrospective map seems to offer.",
      ),
      q(
        "Why is “a geometric trick on the Pratzen Heights” an incomplete account of Austerlitz?",
        [
          "The allies’ political and military situation shaped their willingness to attack.",
          "The battle was not fought near the Pratzen Heights.",
          "The French did not attack the allied centre.",
        ],
        0,
        "The battle followed Ulm, the occupation of Vienna and continuing allied movement.",
      ),
    ],
    sourceCheck: {
      question: "When did Mack surrender at Ulm?",
      witnesses: [
        {
          label: "J. Holland Rose and the Neue Deutsche Biographie",
          claim: "Mack’s capitulation took place on 20 October 1805.",
        },
        {
          label: "Encyclopædia Britannica (1911)",
          claim: "The remnant of his army laid down its arms on 22 October.",
        },
      ],
      prompt: "What is the first thing to check?",
      options: [
        opt(
          "Which publication is the most recent.",
          "Newer work is often better, but that does not tell you whether these writers disagree at all.",
        ),
        best(
          "Whether the two dates describe the same event.",
          "A capitulation being agreed and an army laying down its arms are different moments. Many apparent contradictions dissolve once you define the event.",
        ),
        opt(
          "Which date agrees with Trafalgar.",
          "Britannica’s link with Trafalgar is a detail of its narrative, and a nearby event cannot decide the date.",
        ),
      ],
      campaignSlug: "war-of-the-third-coalition",
    },
  },
  "napoleonic-warfare/artillery": {
    questions: [
      q(
        "What does Wellington’s use of the reverse slope show about artillery?",
        [
          "That artillery was ineffective at Waterloo.",
          "That the relation between weapons and position must be examined.",
          "That guns could not be moved in wet ground.",
        ],
        1,
        "The lesson says this does not make artillery ineffective; it means the effect has to be examined, not assumed.",
      ),
      q(
        "What should a historical explanation of a weapon connect?",
        [
          "Its date of invention and its price.",
          "Its manufacturer and its calibre.",
          "The weapon, its employment and the enemy’s response.",
        ],
        2,
        "Technology acts through people and organization, so one equipment advantage is not a universal cause of victory.",
      ),
    ],
  },
  "napoleonic-warfare/coalition-warfare": {
    questions: [
      q(
        "What do Austerlitz and Waterloo prove about coalitions in general?",
        [
          "That they are inherently strong.",
          "That they are inherently weak.",
          "Neither: they support investigation of particular decisions.",
        ],
        2,
        "One coalition lost and another won. The cases direct you to what was agreed, what was known and whether partners could act in time.",
      ),
      q(
        "A writer says an alliance failed because of one nation’s character. How does the lesson ask you to respond?",
        [
          "Keep national stereotypes out, and look at the process of coordination.",
          "Accept it if the writer is a general.",
          "Accept it if the nation lost.",
        ],
        0,
        "Armies can differ in language, staff procedure and supply. Those are matters of evidence, while a national character is not an explanation.",
      ),
    ],
    sourceCheck: {
      question: "How large was the allied army before Austerlitz?",
      witnesses: [
        { label: "Encyclopædia Britannica (1911)", claim: "Over 86,000 men." },
        { label: "J. Holland Rose", claim: "About 80,000 men." },
      ],
      prompt: "How much should you make of this difference?",
      options: [
        best(
          "Little: treat it as rough agreement, and avoid resting an argument on the gap.",
          "Figures this close suggest the order of magnitude is reasonably settled. An explanation that depends on a difference of a few thousand claims more than the evidence supports.",
        ),
        opt(
          "A great deal: one of the two must be seriously unreliable.",
          "Differences of this size are normal for armies of this period, and “about” already signals an approximation.",
        ),
        opt(
          "None: numbers do not matter in history.",
          "They matter, for example for what a force could attempt. They just need to be used at the precision they can bear.",
        ),
      ],
      campaignSlug: "war-of-the-third-coalition",
    },
  },
  "napoleonic-warfare/two-battles": {
    questions: [
      q(
        "What can the shorthand of “Napoleon’s brilliance and decline” obscure?",
        [
          "The dates of the battles.",
          "The particular conditions of each campaign.",
          "The fact that Napoleon commanded in both.",
        ],
        1,
        "The opposing armies, coalition relationships and opportunities differed.",
      ),
      q(
        "At Waterloo, what does the lesson say happened before coalition pressure became overwhelming?",
        [
          "Successive French attacks failed to break Wellington’s position.",
          "Wellington withdrew from the field.",
          "The French army attacked the allied centre with total success.",
        ],
        0,
        "Neither Austerlitz nor Waterloo should be turned into a numerical score for a commander.",
      ),
    ],
  },
  "napoleons-campaigns/italy-1796": {
    questions: [
      q(
        "What did Montenotte, Millesimo and Dego achieve?",
        [
          "They separated the Sardinian and Austrian armies.",
          "They captured Mantua.",
          "They ended the war with Austria.",
        ],
        0,
        "Each allied army had its own line of retreat, and by 28 April the armistice of Cherasco took Sardinia out of the war.",
      ),
      q(
        "How did the campaign help to make Bonaparte’s reputation?",
        [
          "Through official histories written by Austrian officers.",
          "Through letters to the Directory, reprinted in French newspapers.",
          "Through the verdict of foreign ambassadors.",
        ],
        1,
        "The campaign built an image as well as a military record, and the lesson asks you to keep the two apart.",
      ),
    ],
    sourceCheck: {
      question: "Did Bonaparte carry the flag across the bridge at Arcole?",
      witnesses: [
        {
          label: "The later image",
          claim:
            "Bonaparte with a flag on the bridge, painted by Gros, became central to his legend.",
        },
        {
          label: "The account used in the Arcole study",
          claim: "On the first day his troops would not follow him.",
        },
      ],
      prompt: "What does the famous painting tell the historian?",
      options: [
        opt(
          "Exactly what happened on the bridge.",
          "A painting made to celebrate its subject is not a report. Its composition serves the legend.",
        ),
        opt(
          "Nothing of any value.",
          "It is excellent evidence of something else: how Bonaparte’s image was built and spread.",
        ),
        best(
          "How the event was presented, which is a different question from what occurred.",
          "Propaganda is a historical source in its own right. Ask what it was made to do, then go elsewhere for what took place.",
        ),
      ],
      battleSlug: "arcole",
    },
  },
  "napoleons-campaigns/egypt-and-syria": {
    questions: [
      q(
        "What was the consequence of Nelson’s victory in Aboukir Bay?",
        [
          "The French army was left cut off in Egypt.",
          "The French army returned to France.",
          "Acre surrendered to Bonaparte.",
        ],
        0,
        "With its fleet destroyed, the expedition had no secure link with France.",
      ),
      q(
        "Why, according to Lentz, was the land battle called Aboukir?",
        [
          "It was the nearest Ottoman fortress.",
          "The name was chosen to make people forget the naval disaster.",
          "It had always been known by that name.",
        ],
        1,
        "Even the name of a battle can be part of how a campaign is presented.",
      ),
    ],
    sourceCheck: {
      question: "How should the shooting of the Jaffa prisoners be judged?",
      witnesses: [
        {
          label: "J. Holland Rose",
          claim:
            "Defends it on military grounds, citing a letter in the British Admiralty records that the same troops had broken their parole from El Arish.",
        },
        {
          label: "British wartime propaganda",
          claim: "Exploited the killing of the prisoners against Bonaparte.",
        },
      ],
      prompt: "What should you keep separate?",
      options: [
        opt(
          "Nothing: if the killing was propaganda material, it did not happen.",
          "The killing is not in doubt. Propaganda can use real events as well as invented ones.",
        ),
        best(
          "The event itself, the argument that excuses it and the use made of it.",
          "That prisoners were shot, whether a reason for it holds and how enemies exploited it are three questions. A military justification does not remove the moral question.",
        ),
        opt(
          "The nationality of the historians involved.",
          "A writer’s background can be relevant, but Rose is defending the act using a British record. The argument has to be examined on its own terms.",
        ),
      ],
      campaignSlug: "egyptian-and-syrian-campaign",
    },
  },
  "napoleons-campaigns/corps-system-1805-1807": {
    questions: [
      q(
        "How did the French trap Mack at Ulm?",
        [
          "By defeating him in a great battle at Ulm.",
          "By crossing the Danube behind him and cutting him off from Vienna.",
          "By a landing on the Baltic coast.",
        ],
        1,
        "Most of his army was taken prisoner before the main battle of the campaign was fought.",
      ),
      q(
        "What does Eylau show about the corps system?",
        [
          "That it had limits, as snow, losses and a checked turning movement showed.",
          "That it guaranteed a decisive result.",
          "That cavalry no longer mattered.",
        ],
        0,
        "The French held the field at heavy cost, and Ganière calls it a half-success.",
      ),
    ],
    sourceCheck: {
      question: "Who won at Pultusk?",
      witnesses: [
        { label: "Napoleon’s bulletin", claim: "A brilliant victory." },
        { label: "The Russian claim", claim: "A drawn fight in their favour." },
      ],
      prompt:
        "After Eylau each side likewise minimized its own losses. What does that suggest about such reports?",
      options: [
        best(
          "They were weapons of the war, and must be read for what they were meant to achieve.",
          "A bulletin addresses an audience. J. Holland Rose’s estimate for Eylau, about 25,000 out of action on each side from some 75,000, shows how a historian has to work around both.",
        ),
        opt(
          "That the French report should be preferred, since the French stayed on the field.",
          "Holding the ground does not make a commander’s report accurate.",
        ),
        opt(
          "That the truth always lies exactly halfway between two reports.",
          "It may not lie between them at all. Each needs testing against other evidence.",
        ),
      ],
      campaignSlug: "war-of-the-fourth-coalition",
    },
  },
  "napoleons-campaigns/bigger-armies-1809-1812": {
    questions: [
      q(
        "Why was Napoleon’s position at Aspern-Essling so exposed?",
        [
          "He fought with part of his army across a single fragile line of bridges.",
          "He had no cavalry at all.",
          "Charles’s army had already been destroyed.",
        ],
        0,
        "When the bridges broke he withdrew to Lobau, his first setback of the campaign.",
      ),
      q(
        "What, more than combat, wore down the army of 1812?",
        [
          "The defection of its generals.",
          "Naval blockade.",
          "Long marches and supply failures, above all for its horses.",
        ],
        2,
        "The cavalry lost in Russia could not be replaced, and a battle won on the field had not won the campaign.",
      ),
    ],
    sourceCheck: {
      question:
        "Did refusing to commit the Guard cost Napoleon victory at Borodino?",
      witnesses: [
        {
          label: "Encyclopædia Britannica",
          claim:
            "Rejecting Davout’s flanking plan and refusing to commit the Guard forfeited a decisive victory.",
        },
        {
          label: "The Fondation Napoléon’s chronology",
          claim: "Historians still debate it.",
        },
      ],
      prompt: "What kind of claim is “this forfeited a decisive victory”?",
      options: [
        opt(
          "A documented fact about the battle.",
          "That the Guard was not committed is documented. What would have followed if it had been is not.",
        ),
        best(
          "A counterfactual judgement that needs reasons and cannot be proved.",
          "It may be a good argument, but it describes an event that never happened. Label it, and ask what would have to be true for it to work.",
        ),
        opt(
          "A meaningless statement that historians should never make.",
          "Considering alternatives helps to assess decisions. The danger is presenting the result as fact.",
        ),
      ],
      battleSlug: "borodino",
    },
  },
  "napoleons-campaigns/coalitions-close-in": {
    questions: [
      q(
        "Why could the rebuilt French army of 1813 not pursue after its victories?",
        [
          "It had no infantry left.",
          "It lacked cavalry.",
          "Its commanders refused orders.",
        ],
        1,
        "Lützen and Bautzen were won, but a beaten enemy could not be followed up.",
      ),
      q(
        "What turned defeat into disaster at Leipzig?",
        [
          "The early destruction of the Elster bridge.",
          "The arrival of the Spanish army.",
          "The capture of Dresden by the French.",
        ],
        0,
        "The converging armies attacked together, and the loss of the bridge came too early for the French.",
      ),
    ],
    sourceCheck: {
      question: "Was the armistice of 1813 Napoleon’s great mistake?",
      witnesses: [
        {
          label: "The Fondation Napoléon’s timeline",
          claim: "The armistice of Pläswitz was Napoleon’s great mistake.",
        },
        {
          label: "Encyclopædia Britannica",
          claim: "His offensive had already spent its force.",
        },
      ],
      prompt: "What separates these two judgements?",
      options: [
        best(
          "Whether he had a real alternative at the moment he accepted it.",
          "If his offensive was spent, the armistice was a response to weakness. If it was not, it threw away a chance. Assess the decision on what was possible then.",
        ),
        opt(
          "Only the fact that Austria later entered the war.",
          "That outcome is known to us and was not known then. A later result alone cannot show whether the decision was reasonable.",
        ),
        opt(
          "Nothing, since Napoleon finally lost anyway.",
          "Knowing the end does not settle whether a particular decision was a mistake.",
        ),
      ],
      battleSlug: "bautzen",
    },
  },
  "industrial-world-wars/military-technology": {
    questions: [
      q(
        "What did the significance of early tanks depend on?",
        [
          "Their mere presence on the battlefield.",
          "The number of guns each one carried.",
          "Training, maintenance and cooperation with other forces.",
        ],
        2,
        "Early tanks suffered breakdowns and difficult ground, so their effect ran through the organization using them.",
      ),
      q(
        "What should you identify when explaining technological change?",
        [
          "The institution using the equipment and the problem it was trying to solve.",
          "The country that built the most units.",
          "The first recorded use of the device.",
        ],
        0,
        "A new weapon can create possibilities without removing uncertainty, as the scouting decisions at Midway show.",
      ),
    ],
  },
  "industrial-world-wars/command-coordination": {
    questions: [
      q(
        "Why should the coalition problems of Waterloo and Normandy not be treated as the same?",
        [
          "Only one involved more than one nation.",
          "The scale, communications and available institutions differed.",
          "Neither required cooperation.",
        ],
        1,
        "Both required cooperation, but similar vocabulary should not erase those differences.",
      ),
      q(
        "What does a successful result not prove?",
        [
          "That every command relationship worked smoothly.",
          "That the campaign took place.",
          "That orders were issued.",
        ],
        0,
        "The lesson asks you to identify uncertainty, contingency and the contribution of subordinate organizations.",
      ),
    ],
  },
  "industrial-world-wars/trench-warfare": {
    questions: [
      q(
        "How does the lesson ask you to understand a trench?",
        [
          "As a precarious living environment as well as a defensive position.",
          "Purely as a piece of engineering.",
          "As a temporary feature of little importance.",
        ],
        0,
        "Mud, water, disease and exposure shaped daily life for the soldiers who held them.",
      ),
      q(
        "What should you ask after a local success?",
        [
          "Which officer received the credit.",
          "How the gain could be supplied and maintained.",
          "How many maps recorded it.",
        ],
        1,
        "Protection and reinforcement mattered both on the Western Front and at Stalingrad, even though the two are not identical.",
      ),
    ],
    sourceCheck: {
      question: "How many Germans were lost at Stalingrad?",
      witnesses: [
        {
          label: "Earl Ziemke and Magna Bauer",
          claim:
            "Somewhat over two hundred thousand. The exact total was apparently never determined.",
        },
        {
          label: "Soviet accounts",
          claim:
            "147,000 German dead counted and 91,000 prisoners. The Soviet Union never released its own losses.",
        },
      ],
      prompt: "What is the main limit on these numbers?",
      options: [
        opt(
          "Soviet accounts must be accurate, since the Soviets held the field.",
          "The victor is well placed to count, and has reasons to count high. The figure still needs caution.",
        ),
        best(
          "The two sides’ totals cannot be checked against each other, and one side’s losses are missing.",
          "An enemy’s count without its own losses gives a one-sided picture. A careful historian says what is unknown instead of filling the gap.",
        ),
        opt(
          "Numbers from this period cannot be used at all.",
          "They give a sense of scale. They should be presented with the uncertainty that the historians themselves state.",
        ),
      ],
      campaignSlug: "german-summer-offensive-of-1942",
    },
  },
  "industrial-world-wars/mechanized-warfare": {
    questions: [
      q(
        "What new dependencies did mechanization introduce?",
        [
          "Fuel, spare parts, recovery and trained crews.",
          "Horses, fodder and farriers alone.",
          "None, since vehicles were self-sufficient.",
        ],
        0,
        "A machine offered possibilities, but only with the support needed to keep it moving.",
      ),
      q(
        "What does the lesson warn against in explaining mechanized success?",
        [
          "Connecting mobility with geography.",
          "Considering the other forces involved.",
          "A single-machine explanation.",
        ],
        2,
        "Breaching a defended area did not automatically deliver a durable advance, because support still had to move and the defender could respond.",
      ),
    ],
    sourceCheck: {
      question: "Who was responsible for the failure of 1942?",
      witnesses: [
        {
          label: "Halder and other German generals, writing after the war",
          claim:
            "The offensive should never have been launched, and Hitler’s decisions were to blame.",
        },
        {
          label: "A caution on the Blau study",
          claim:
            "It rests on the postwar writings of Halder and his associates, who had reason to lay the blame on Hitler.",
        },
      ],
      prompt: "How should you use the generals’ verdict?",
      options: [
        opt(
          "Accept it, because they were the professionals on the spot.",
          "Their expertise is real, but so is their interest in showing that the defeat was someone else’s fault.",
        ),
        opt(
          "Reject it, since Hitler cannot have been responsible.",
          "Hitler’s responsibility is well documented. The caution concerns how much it is used to excuse others.",
        ),
        best(
          "Use it, while asking what it leaves out about the generals’ own part.",
          "A self-interested witness can still be informative. Note the interest, then test the claims against records from the time.",
        ),
      ],
      campaignSlug: "german-summer-offensive-of-1942",
    },
  },
  "industrial-world-wars/air-and-naval-operations": {
    questions: [
      q(
        "What can differ from knowing an enemy’s broad intention?",
        [
          "Having aircraft available.",
          "Locating a moving force at a useful moment.",
          "Keeping radio contact with the fleet.",
        ],
        1,
        "Midway’s changing picture shows why knowing the intention did not remove the need to find the enemy.",
      ),
      q(
        "Which evidence suits the Atlantic campaign?",
        [
          "Shipping, losses and deliveries over time.",
          "A single strike sequence.",
          "The diary of a carrier pilot on one day.",
        ],
        0,
        "The Atlantic concerned the continued movement of supplies, so one dramatic event cannot describe it.",
      ),
    ],
  },
  "industrial-world-wars/strategic-resources": {
    questions: [
      q(
        "What should you ask of a resource statistic?",
        [
          "Whether it is a large number.",
          "Which country published it most recently.",
          "What it measures, whose work it conceals and whether the material arrived.",
        ],
        2,
        "Production and transport were inseparable, and civilian labour and suffering are not incidental to the balance sheet.",
      ),
      q(
        "What does the lesson ask a concluding argument to state?",
        [
          "Only the factors that support it.",
          "What the evidence supports, what remains disputed and what would weaken it.",
          "Which commander deserves the most credit.",
        ],
        1,
        "A good argument shows the conditions under which it would fail.",
      ),
    ],
    sourceCheck: {
      question: "How many pilots did Japan lose at Midway?",
      witnesses: [
        {
          label: "U.S. Strategic Bombing Survey",
          claim: "Some hundred first-line pilots at Midway.",
        },
        {
          label: "American Military History",
          claim:
            "Japan lost the bulk of its best naval pilots at the Coral Sea and Midway together.",
        },
      ],
      prompt: "Can these two statements be compared directly?",
      options: [
        opt(
          "Yes, and the Survey must be wrong, since “the bulk” sounds larger.",
          "A vague phrase covering two battles cannot be measured against a figure for one.",
        ),
        best(
          "No: they cover different battles, and one gives no number.",
          "Before comparing, check that the scope is the same. A resource figure means little until you know what it includes.",
        ),
        opt(
          "Yes, because both are official American publications.",
          "Sharing a publisher does not mean sharing a measure.",
        ),
      ],
      campaignSlug: "japanese-midway-operation",
    },
  },
  "first-world-war/plans-meet-reality-1914": {
    questions: [
      q(
        "How does Britannica describe the double envelopment at Tannenberg?",
        [
          "An afterthought, not a planned second Cannae.",
          "A plan worked out years before the war.",
          "A failure that let Samsonov escape.",
        ],
        0,
        "The famous result should not be read back into the original intention.",
      ),
      q(
        "How did the first battle of Ypres show why mobile war ended?",
        [
          "Trenches were ordered by a treaty.",
          "Crude entrenchments stopped stronger attackers, and every flanking attempt met a defender who arrived in time.",
          "Both sides ran out of soldiers in 1914.",
        ],
        1,
        "Mobile war ended less by design than through this repeated meeting of attack and timely defence.",
      ),
    ],
    sourceCheck: {
      question: "Who devised the plan for Tannenberg?",
      witnesses: [
        {
          label: "Timothy Dowling",
          claim:
            "Hoffmann drafted the concentration against Samsonov before Hindenburg and Ludendorff arrived.",
        },
        {
          label: "Erich Ludendorff, in his memoirs",
          claim:
            "The plan took shape under his direction from 24 to 26 August.",
        },
      ],
      prompt: "Why is Ludendorff’s memoir weak evidence on this point?",
      options: [
        opt(
          "Because he was not at Tannenberg.",
          "He was there. His closeness is what makes his claim both informative and self-interested.",
        ),
        best(
          "Because he is claiming credit for a famous victory.",
          "On a question of credit, a claimant is the witness to trust least. A record dated before his arrival would settle more than his recollection can.",
        ),
        opt(
          "Because memoirs are always false.",
          "Memoirs can be very useful. The problem here is the specific interest in this specific claim.",
        ),
      ],
      campaignSlug: "east-prussian-campaign",
    },
  },
  "first-world-war/the-trench-deadlock": {
    questions: [
      q(
        "What did the first night of Second Ypres reveal?",
        [
          "The gap stood open, but no German troops were ready to pass through it.",
          "Gas had no effect on the Allied line.",
          "The Germans had abundant reserves in place.",
        ],
        0,
        "The Germans used chlorine as a means to limited ends, and the surprise did not come twice.",
      ),
      q(
        "What does the study call its hardest lesson?",
        [
          "That artillery is always decisive.",
          "That the weather favoured the defender.",
          "The cost of persisting after the conditions for success have gone.",
        ],
        2,
        "Haig took Plumer’s limited success as a sign of enemy collapse, and the deeper attacks of October failed in the mud.",
      ),
    ],
    sourceCheck: {
      question: "What was the ratio of losses at Verdun?",
      witnesses: [
        {
          label: "Erich von Falkenhayn",
          claim: "German losses were about a third of the French.",
        },
        { label: "Jonathan Krause", claim: "The figures were roughly equal." },
      ],
      prompt: "Why might Falkenhayn’s figure be expected to be low?",
      options: [
        best(
          "The strategy he later defended depended on the French bleeding faster.",
          "A commander writing about his own campaign has reasons to make its logic look successful. The figures are the test of that claim, and Krause’s do not bear it out.",
        ),
        opt(
          "German records of the time were entirely lost.",
          "Nothing here shows that. The issue is the use made of the numbers by an interested author.",
        ),
        opt(
          "Commanders never know their own losses.",
          "They often know a great deal. Knowing a figure and reporting it fairly are different things.",
        ),
      ],
      campaignSlug: "western-front-in-1916",
    },
  },
  "first-world-war/beyond-the-western-front": {
    questions: [
      q(
        "How did Brusilov’s method differ from concentration at one point?",
        [
          "He attacked only with cavalry.",
          "He attacked on a broad front, with many attack points and short bombardments.",
          "He relied on a very long preliminary bombardment.",
        ],
        1,
        "With no single place to send their reserves, the Austrians could not stop the first days.",
      ),
      q(
        "What does Kitchen say ended the Ottoman war?",
        [
          "Bulgaria’s collapse, not Megiddo.",
          "The capture of Jerusalem.",
          "The landings at Gallipoli.",
        ],
        0,
        "A brilliant battle should not be credited automatically with the end of a war.",
      ),
    ],
    sourceCheck: {
      question: "How heavy were Ottoman losses at First Gaza?",
      witnesses: [
        {
          label: "General Murray’s report",
          claim: "Over 8,000 Ottoman losses.",
        },
        {
          label: "James E. Kitchen",
          claim: "1,372 Ottoman casualties, against 3,967 British.",
        },
      ],
      prompt:
        "Murray’s report led London to order an advance on Jerusalem. What does this show?",
      options: [
        opt(
          "That London was right to trust its general.",
          "It did trust him, on a figure that greatly exaggerated the result. That is the problem.",
        ),
        opt(
          "That casualty figures have no effect on events.",
          "This case shows the opposite: an inflated report helped to shape strategy.",
        ),
        best(
          "That a false report can be historically important because people acted on it.",
          "Two questions arise: what happened, and what decision-makers believed had happened. An inaccurate source can still explain later events.",
        ),
      ],
      campaignSlug: "sinai-and-palestine-campaign",
    },
  },
  "first-world-war/sea-power-jutland": {
    questions: [
      q(
        "Why did Jellicoe believe the German fleet was still in port on 31 May?",
        [
          "Its flagship’s call sign was still heard from Jade Bay.",
          "British aircraft had photographed it there.",
          "Beatty had reported it at anchor.",
        ],
        0,
        "Signals intelligence helped the British sail first, but its interpretation could still mislead.",
      ),
      q(
        "What decision does Britannica call the most vital of the battle?",
        [
          "Hipper’s turn to the south.",
          "Jellicoe’s deployment across the line of the German advance.",
          "Scheer’s decision to leave port.",
        ],
        1,
        "Jellicoe made it seconds after learning where the German fleet was.",
      ),
    ],
    sourceCheck: {
      question: "Who won at Jutland?",
      witnesses: [
        {
          label: "German claims at the time",
          claim: "A victory, since the British lost more ships and men.",
        },
        {
          label: "Michael Epkenhans",
          claim:
            "Even if called a German tactical victory, it did not change the strategic situation.",
        },
      ],
      prompt: "How can both of these stand?",
      options: [
        best(
          "They answer different questions: the result on the day and the result in the war.",
          "Ships lost measure the encounter; the continuing blockade measures the war at sea. Before arguing about who won, ask “won what?”",
        ),
        opt(
          "They cannot: one must be false.",
          "Both can be true, because they are measuring success on different levels.",
        ),
        opt(
          "German claims can be ignored because Germany lost the war.",
          "The later outcome does not show what happened on 31 May. The British did lose more ships.",
        ),
      ],
      campaignSlug: "war-in-the-north-sea",
    },
  },
  "first-world-war/new-methods-1918": {
    questions: [
      q(
        "Why did the success at Cambrai remain unexploited?",
        [
          "Tank breakdowns, weather, poor communications and reserves absorbed by Passchendaele.",
          "The Germans had abandoned the Hindenburg Line.",
          "British commanders refused to use tanks.",
        ],
        0,
        "A German counter-stroke on 30 November then reversed most of the gains.",
      ),
      q(
        "What did Haig do at Amiens when resistance stiffened?",
        [
          "He pressed the attack on the same front.",
          "He withdrew to the original line.",
          "He stopped and struck elsewhere, as Foch planned.",
        ],
        2,
        "A series of attacks replaced the earlier habit of persisting on one front.",
      ),
    ],
    sourceCheck: {
      question: "Was 8 August 1918 the “black day” of the German army?",
      witnesses: [
        {
          label: "Erich Ludendorff",
          claim: "He called 8 August the black day of the German army.",
        },
        {
          label: "Jonathan Krause",
          claim:
            "Ludendorff used the phrase for several different days, and his memoirs call 20 August another.",
        },
      ],
      prompt: "What does Krause’s observation warn you about?",
      options: [
        opt(
          "That the battle of Amiens did not matter.",
          "Its importance is not in question. The warning is about how much weight one famous phrase can carry.",
        ),
        best(
          "That a memorable quotation can be less precise than it is later made to seem.",
          "Check a famous phrase in its full context. Repetition by historians can make a loose expression look like a considered verdict.",
        ),
        opt(
          "That Ludendorff did not write his memoirs.",
          "He did, and that is how we can see him using the phrase more than once.",
        ),
      ],
      campaignSlug: "western-front-in-1918",
    },
  },
  "second-world-war/blitzkrieg-and-its-limits": {
    questions: [
      q(
        "Why was the war in Poland more than a military campaign?",
        [
          "From the first days it was a war against civilians.",
          "It was fought without aircraft.",
          "Only soldiers were affected.",
        ],
        0,
        "SS, police and military units shot thousands of civilians, and the Soviet occupation brought deportations and the murder of officers at Katyn.",
      ),
      q(
        "What did the switch to London on 7 September do?",
        [
          "It destroyed Fighter Command.",
          "It relieved Fighter Command’s airfields.",
          "It ended the bombing of Britain.",
        ],
        1,
        "The Luftwaffe had no consistent plan, and how close Fighter Command came to defeat is debated.",
      ),
    ],
    sourceCheck: {
      question: "How many aircraft did the RAF destroy on 15 August 1940?",
      witnesses: [
        {
          label: "Figure given to the public at the time",
          claim: "182 enemy aircraft certainly destroyed.",
        },
        {
          label: "German records, as reported by Denis Richards",
          claim: "Seventy-six.",
        },
      ],
      prompt:
        "Richards does not accuse the pilots of lying. What is his explanation?",
      options: [
        best(
          "In the confusion of big raids several men could honestly claim the same aircraft.",
          "An error need not be a lie. Richards faults the Air Ministry instead, for presenting estimates as facts. Ask how a number was produced.",
        ),
        opt(
          "Nothing happened on that day.",
          "It was a day of heavy fighting. The dispute is over how many aircraft were destroyed.",
        ),
        opt(
          "German records must be false, because Germany lost the battle.",
          "Losing a battle does not falsify a loss return. Richards accepts these records, and notes that German claims about British losses were wilder still.",
        ),
      ],
      campaignSlug: "battle-of-britain",
    },
  },
  "second-world-war/the-eastern-front": {
    questions: [
      q(
        "What does the lesson say Germany planned Barbarossa as?",
        [
          "A limited border war.",
          "A war of annihilation, with an occupation policy of starvation.",
          "A campaign to restore the Tsar.",
        ],
        1,
        "The invasion began the Holocaust by shooting, and Soviet prisoners of war died in vast numbers.",
      ),
      q(
        "At Kursk, what did the Soviet command choose to do?",
        [
          "Defend first and counterattack later.",
          "Attack first across the whole front.",
          "Withdraw behind the Dnepr.",
        ],
        0,
        "Defences in depth absorbed the last major German offensive in the east.",
      ),
    ],
    sourceCheck: {
      question: "Why did the Red Army stop on the Vistula in 1944?",
      witnesses: [
        {
          label: "Encyclopædia Britannica",
          claim: "The halt during the Warsaw Uprising was intentional.",
        },
        {
          label: "Imperial War Museums",
          claim: "Also stresses Soviet exhaustion.",
        },
      ],
      prompt: "What makes this question difficult?",
      options: [
        opt(
          "That the Red Army did not in fact halt.",
          "The halt is not in dispute. The argument is over why.",
        ),
        opt(
          "That exhaustion and intent cannot both be true.",
          "They can. An exhausted army can also be deliberately held back. The sources may be weighing two real factors.",
        ),
        best(
          "That political motive and military limits could both produce the same halt.",
          "When two causes predict the same event, the event cannot choose between them. You would need evidence of what was decided and why.",
        ),
      ],
      battleSlug: "bagration",
    },
  },
  "second-world-war/asia-and-the-pacific": {
    questions: [
      q(
        "What had Mutaguchi gambled on at Imphal?",
        [
          "Capturing Allied supplies.",
          "Air supply from Rangoon.",
          "Early American reinforcements.",
        ],
        0,
        "He kept attacking long after his offensive had failed, while Slim’s encircled formations were supplied by air.",
      ),
      q(
        "How did Kuribayashi defend Iwo Jima?",
        [
          "He met the invaders on the beaches.",
          "He gave up the beaches and fought from tunnels and caves.",
          "He evacuated the garrison.",
        ],
        1,
        "On Okinawa Ushijima likewise held the fortified south, forcing costly frontal assaults.",
      ),
    ],
    sourceCheck: {
      question: "Why did the Japanese not strike again at Pearl Harbor?",
      witnesses: [
        {
          label:
            "U.S. Strategic Bombing Survey, from Japanese officers’ memory",
          claim:
            "The aim of crippling the capital ships had been achieved, the American carriers could not be found and land-based aircraft remained.",
        },
        {
          label: "American Military History",
          claim:
            "Counts the untouched oil tanks, repair shops and absent carriers among the attack’s failures.",
        },
      ],
      prompt: "What should you notice about the first account?",
      options: [
        best(
          "It was given from memory after defeat, and explains the choice by the aim as then defined.",
          "The Survey itself warns that details may need correcting. It tells you how the decision was explained; the American history judges it by what the war later showed.",
        ),
        opt(
          "It is worthless, since Japanese officers lost the war.",
          "Their testimony is often the only evidence of Japanese reasoning. It needs care, not dismissal.",
        ),
        opt(
          "It proves the attack was a complete success.",
          "It shows the planners’ stated aim. Whether that aim was the right one is the question the American history raises.",
        ),
      ],
      campaignSlug: "japanese-offensive-of-1941-1942",
    },
  },
  "second-world-war/sea-lanes-and-supply": {
    questions: [
      q(
        "Why did Dönitz’s control of the wolf packs by radio become a weakness?",
        [
          "The Germans had no radios on U-boats.",
          "It exposed the boats to direction-finding.",
          "It made them too fast to supply.",
        ],
        1,
        "He believed the signals secure, but technology, intelligence, numbers and tactics combined against him.",
      ),
      q(
        "What did the Australian drive toward the sea at El Alamein achieve?",
        [
          "It pulled Axis forces north.",
          "It captured Tobruk.",
          "It ended the battle at once.",
        ],
        0,
        "Montgomery then struck with Supercharge, after an attritional phase he called crumbling.",
      ),
    ],
    sourceCheck: {
      question: "How much did code-breaking matter in the spring of 1943?",
      witnesses: [
        {
          label: "Naval History and Heritage Command",
          claim:
            "Allied intelligence was at its weakest during the turning point.",
        },
        {
          label: "Encyclopædia Britannica",
          claim:
            "Lists the repenetration of the U-boat codes among the causes of the turn.",
        },
      ],
      prompt:
        "Why are single-cause stories about secret intelligence tempting, and risky?",
      options: [
        opt(
          "Because secrets are always decisive.",
          "They can matter greatly. This campaign is one where the timing of the intelligence is itself disputed.",
        ),
        best(
          "Because they are dramatic, while the lesson finds that no one factor was decisive alone.",
          "Codebreaking makes a compelling story. Compare when the intelligence was actually available with when the losses changed, and set it beside numbers, technology and tactics.",
        ),
        opt(
          "Because code-breaking did not exist in this war.",
          "It did. The debate is about its weight at this moment.",
        ),
      ],
      battleSlug: "battle-of-the-atlantic",
    },
  },
  "second-world-war/western-allies-1944": {
    questions: [
      q(
        "What did the repeated attacks around Caen contribute?",
        [
          "They captured Paris.",
          "They drew most German armour away from the western sector.",
          "They ended the need for an American breakout.",
        ],
        1,
        "D-Day missed many first-day objectives, Caen among them, but the fighting there helped the later breakout.",
      ),
      q(
        "What did the stands at St Vith, Bastogne and the northern shoulder deny the Germans in the Ardennes?",
        [
          "The roads they needed.",
          "The element of surprise.",
          "Their fuel depots in Germany.",
        ],
        0,
        "Allied confidence that the enemy was beaten had invited the surprise, but delay on the roads was fatal to the offensive.",
      ),
    ],
    sourceCheck: {
      question: "Who failed to close the Falaise gap?",
      witnesses: [
        {
          label: "General Bradley, in his later account",
          claim:
            "He took responsibility for halting his corps, while criticizing Montgomery for not doing more to seal the gap.",
        },
        {
          label: "David Hogan",
          claim:
            "Bradley was under no real restriction preventing him from sending the corps north.",
        },
      ],
      prompt:
        "How should you read a commander who accepts blame and also shares it?",
      options: [
        opt(
          "As fully honest, since he admits responsibility.",
          "Accepting some blame can be sincere, and can also make the rest of the account more persuasive.",
        ),
        best(
          "By testing his stated reasons against what he was actually free to do.",
          "Hogan checks the claim against the command boundaries in force and finds most of the reasons unconvincing. That is the method to copy.",
        ),
        opt(
          "As a personal quarrel of no historical interest.",
          "The controversy concerns a real operational decision, with a German army escaping or not as the result.",
        ),
      ],
      campaignSlug: "north-west-europe-campaign",
    },
  },
  "serbian-front/waiting-for-the-blow": {
    questions: [
      q(
        "What did the Serbian plan of August 1914 depend on?",
        [
          "An immediate invasion of Bosnia.",
          "Staying on the defensive until the direction of the invasion was clear.",
          "Holding every kilometre of the frontier.",
        ],
        1,
        "Expecting the attack from the north, the armies then had to shift west when it came across the Drina.",
      ),
      q(
        "What shaped what Serbia could attempt after Cer?",
        [
          "Ammunition, equipment and allied expectations.",
          "Only the skill of its generals.",
          "The weather in Syrmia alone.",
        ],
        0,
        "Pressed by its allies, Serbia attacked into Syrmia and was repulsed at Šašinci.",
      ),
    ],
    sourceCheck: {
      question: "When was the battle of Cer?",
      witnesses: [
        { label: "Dmitar Tasić", claim: "17–19 August 1914." },
        { label: "Mile Bjelajac", claim: "16–20 August." },
        { label: "Richard Hall", claim: "16–25 August." },
      ],
      prompt: "Why might three specialists give three dates?",
      options: [
        best(
          "A battle has no natural edges, and each may draw them differently.",
          "Do you count from first contact, the main fighting or the end of the pursuit? Check what each historian means by “the battle”.",
        ),
        opt(
          "Because two of them must have made errors.",
          "Possibly, but first ask whether they are measuring the same thing.",
        ),
        opt(
          "Because the battle cannot be dated at all.",
          "All three place it in the same week of August. The core is secure and only the edges differ.",
        ),
      ],
      campaignSlug: "serbian-campaign-of-1914",
    },
  },
  "serbian-front/ground-for-time": {
    questions: [
      q(
        "When can trading ground for time turn defeat into victory?",
        [
          "Whenever the capital is given up.",
          "Only if the army survives the withdrawal and the enemy over-extends.",
          "Only if allies arrive in the same week.",
        ],
        1,
        "The Serbian withdrawal of 1914 worked because both of these conditions were met.",
      ),
      q(
        "What was the cost that came after the victory of December 1914?",
        [
          "An epidemic that killed many soldiers, civilians and prisoners.",
          "The immediate loss of Valjevo.",
          "A revolt in the Serbian army.",
        ],
        0,
        "Victory did not end the suffering, and the army was exhausted.",
      ),
    ],
    sourceCheck: {
      question: "How large was the Habsburg effort against Serbia in 1914?",
      witnesses: [
        { label: "Mile Bjelajac, on men mobilized", claim: "400,000." },
        {
          label: "Mile Bjelajac, on the operational army",
          claim: "Roughly 250,000 combatants.",
        },
      ],
      prompt: "Which figure should you use?",
      options: [
        opt(
          "Always the larger, because it shows the true scale.",
          "It shows one kind of scale. Men in rear services and depots were not all facing the Serbian line.",
        ),
        opt(
          "Always the smaller, since only combatants matter.",
          "The men behind the front were also a real burden on the empire and part of its effort.",
        ),
        best(
          "It depends on the question: combatants for battle, mobilized men for the burden of war.",
          "A single “size of the army” often hides two measures. State which you mean.",
        ),
      ],
      campaignSlug: "serbian-campaign-of-1914",
    },
  },
  "serbian-front/invaded-from-two-sides": {
    questions: [
      q(
        "What did Seeckt organise for Mackensen’s campaign?",
        [
          "Heavy artillery, aircraft and bridging.",
          "A naval landing in Albania.",
          "A cavalry raid on Niš.",
        ],
        0,
        "Showalter calls the campaign an overlooked proto-blitzkrieg.",
      ),
      q(
        "What dilemma did the Supreme Command face on 25 November 1915?",
        [
          "Which ally to accept help from.",
          "Whether to lose the country or lose the army.",
          "Whether to attack Bulgaria or Austria first.",
        ],
        1,
        "It judged the army unfit for a counteroffensive and capitulation worse, and ordered the retreat through Montenegro and Albania.",
      ),
    ],
    sourceCheck: {
      question: "Was Montenegro’s surrender a betrayal of Serbia?",
      witnesses: [
        {
          label: "The charge in later debate",
          claim: "The surrender in January 1916 betrayed Serbia.",
        },
        {
          label: "Radoslav Raspopović",
          claim: "Leaves the motives of Montenegro’s leaders open.",
        },
      ],
      prompt: "Why is a historian’s refusal to decide useful here?",
      options: [
        best(
          "The evidence may not reveal motive, and “betrayal” is a judgement as well as a claim.",
          "National memory often wants a verdict. Separate what happened from what it is called, and do not let the charge run ahead of the evidence.",
        ),
        opt(
          "Because historians should never make judgements.",
          "They should, when the evidence allows. Here the motives are the unresolved part.",
        ),
        opt(
          "Because Montenegro did not surrender.",
          "Its surrender is agreed. Even its date is a matter of only a day between the sources.",
        ),
      ],
      campaignSlug: "serbian-campaign-of-1915",
    },
  },
  "serbian-front/exile-and-occupation": {
    questions: [
      q(
        "Why was the entry into Monastir in November 1916 significant for Serbia?",
        [
          "It was the first Serbian town to be liberated.",
          "It ended the occupation of Belgrade.",
          "It forced Bulgaria to sign an armistice.",
        ],
        0,
        "The army rebuilt on Corfu had been given the centre of the Allied line.",
      ),
      q(
        "What drove men into the woods in occupied Serbia?",
        [
          "The offer of Allied pay.",
          "A shortage of housing.",
          "Bulgarian conscription and denationalisation.",
        ],
        2,
        "The rising broke out in February 1917, before the breakthrough it had been meant to support, and was crushed with reprisals against civilians.",
      ),
    ],
    sourceCheck: {
      question:
        "How many civilians were killed in suppressing the Toplica uprising?",
      witnesses: [
        { label: "Dmitar Tasić", claim: "Some 20,000." },
        {
          label: "Milan Ristović",
          claim: "Cites an international commission’s figure of around 25,000.",
        },
      ],
      prompt: "How should such figures be handled?",
      options: [
        opt(
          "Treat the difference as a reason to doubt that the killing occurred.",
          "A range does not cast doubt on the atrocity. Both sources describe mass killing on a terrible scale.",
        ),
        best(
          "Give the range, say who compiled the figures and when, and keep the scale in view.",
          "A commission’s figure has an origin and a purpose that can be examined. Careful attribution honours the victims better than false precision.",
        ),
        opt(
          "Choose the highest figure, out of respect for the victims.",
          "Respect is shown by accuracy. Inflating a number gives deniers something to attack.",
        ),
      ],
      campaignSlug: "occupation-of-serbia",
    },
  },
  "serbian-front/breaking-the-front": {
    questions: [
      q(
        "Why was Dobro Pole chosen for the attack?",
        [
          "It was the highest point on the front.",
          "Flatter ground behind the ridge led to the Vardar valley.",
          "It was defended only by Austrian troops.",
        ],
        1,
        "Hall notes that the idea came from a Serbian staff officer in 1916.",
      ),
      q(
        "What does Hall argue were as decisive as the attack itself?",
        [
          "Hunger, poor equipment and strained alliances.",
          "The weather of September 1918.",
          "The death of the Bulgarian commander.",
        ],
        0,
        "A collapse has causes that were building well before the day of the breakthrough.",
      ),
    ],
    sourceCheck: {
      question: "Were the two sides on the Macedonian front evenly matched?",
      witnesses: [
        {
          label: "Dmitar Tasić, on the whole front",
          claim:
            "600,000 on the Central Powers’ side against 619,000 Allied troops.",
        },
        {
          label: "The Dobro Pole attack",
          claim:
            "Six Serbian and two French divisions attacked a front held by one Bulgarian division.",
        },
      ],
      prompt: "What do these two pictures show together?",
      options: [
        best(
          "That near parity overall can hide a crushing superiority at the point of attack.",
          "Totals for a whole front say little about a decisive sector. Ask where the force was, not only how much of it existed.",
        ),
        opt(
          "That one of the two numbers has to be wrong.",
          "Both can be right, since they describe the front as a whole and one sector of it.",
        ),
        opt(
          "That numbers were irrelevant to the outcome.",
          "They were relevant, in the form that mattered: concentration at a chosen point, together with Bulgarian exhaustion.",
        ),
      ],
      campaignSlug: "macedonian-front",
    },
  },
};
