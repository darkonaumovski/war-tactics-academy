import type { LeadershipVolume } from "../../lib/types";
// Volume 2. Lessons are added in reviewed batches; docs/LEADERSHIP_EVIDENCE_ALEXANDER.md
// records which sources can carry each one, and docs/SOURCE_AUDIT.md how each
// was read. Not yet listed in `leadershipVolumes`, so no route goes live until
// the pilot lessons ship.
export const alexanderVolume: LeadershipVolume = {
  commanderSlug: "alexander-the-great",
  title: "Leadership Lessons from Alexander the Great",
  summary:
    "What a person who leads others can take from Alexander’s career, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "Alexander led his father’s army from the Hellespont into India, and there it refused to go further. Two years later, at Opis, it mutinied again. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. Almost nothing written in his lifetime survives beyond a few inscriptions and Babylonian records; the narratives were written centuries later from accounts now lost, so every lesson begins with who is speaking. One career cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did his army stop following him, or did he stop leading it?",
  parts: [
    "Orientation",
    "The instrument",
    "The consent of the army",
    "Winning and ruling",
    "What remains",
  ],
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
