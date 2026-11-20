import type { LeadershipVolume } from "../../lib/types";
// Volume 7, shared by Hannibal and Scipio. Lessons are added in reviewed
// batches; docs/LEADERSHIP_EVIDENCE_HANNIBAL_SCIPIO.md records which sources
// can carry each one, and docs/SOURCE_AUDIT.md how each was read. Not yet
// listed in `leadershipVolumes`, so no route goes live until the pilot ships.
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
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
