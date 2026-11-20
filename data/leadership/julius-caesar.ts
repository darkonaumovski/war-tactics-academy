import type { LeadershipVolume } from "../../lib/types";
// Volume 6. Lessons are added in reviewed batches;
// docs/LEADERSHIP_EVIDENCE_CAESAR.md records which sources can carry each
// one, and docs/SOURCE_AUDIT.md how each was read. Not yet listed in
// `leadershipVolumes`, so no route goes live until the pilot lessons ship.
export const caesarVolume: LeadershipVolume = {
  commanderSlug: "julius-caesar",
  title: "Leadership Lessons from Julius Caesar",
  summary:
    "What a person who leads others can take from Caesar’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Gaius Julius Caesar commanded in Gaul from 58 to 50 BCE and fought the civil war against Pompey and the Senate from 49 to 45. He won most of the battles he chose to fight, was beaten at Gergovia and Dyrrhachium, and wrote the main account of the Gallic War and of the civil war to 48 himself, year by year and in the third person, for readers in Rome who would decide his future. The writers who tell the story differently, Plutarch, Suetonius, Appian and Cassius Dio, wrote one to three centuries after him, and the Gallic side survives almost only through Roman authors and archaeology. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. The costs stay in view: the peoples of Gaul, killed and enslaved in a war of conquest, the soldiers of both sides in a civil war, and a Republic that did not survive his victory. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "What won Caesar his wars: his speed, his soldiers, his enemies’ divisions, or his own account of them?",
  parts: [
    "Orientation",
    "Speed and risk",
    "An army bound to him",
    "Enemies and allies",
    "Beyond the battlefield",
  ],
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
