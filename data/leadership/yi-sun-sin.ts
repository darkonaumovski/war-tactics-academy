import type { LeadershipVolume } from "../../lib/types";
// Volume 10, on Yi Sun-sin. Lessons are added in reviewed batches;
// docs/LEADERSHIP_EVIDENCE_YI.md records which sources can carry each one,
// and docs/SOURCE_AUDIT.md how each was read. Yi's diary, his reports and the
// Annals of King Seonjo are read in the original Classical Chinese or in
// Korean translation and paraphrased; no English sentence is quoted as his.
// Not yet listed in `leadershipVolumes`, so no route goes live until the
// pilot ships.
export const yiVolume: LeadershipVolume = {
  commanderSlug: "yi-sun-sin",
  title: "Leadership Lessons from Yi Sun-sin: from Okpo to Noryang, 1592–1598",
  summary:
    "What a person who leads others can take from Yi Sun-sin, the Joseon admiral who won at sea in 1592, was charged by his own king in 1597, returned when the fleet was lost and died in the last battle of the war, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In the 5th lunar month of 1592 Yi Sun-sin, commander of the Left Jeolla fleet, took his ships out of his own province to fight the Japanese invasion off Okpo, and won. By 1593 he commanded the navies of all three southern provinces. In 1597 his king accused him of deceiving the court and letting the enemy go, crimes he said deserved death; Yi was imprisoned, released to serve without rank, and restored only after his successor’s fleet was destroyed at Chilcheollyang. With the ships that were left he held the strait of Myeongnyang, and in 1598, fighting beside a Ming fleet, he was killed at Noryang as the Japanese withdrew. This volume asks how a commander leads when his own government may be the greater danger, and how much of that story was written by others.",
  question:
    "How do you lead when your own government is the greater danger: by obedience, by evasion, by results, or does the record decide who was in danger?",
  parts: [
    "Orientation",
    "The first year",
    "Rivals and the court",
    "With almost nothing",
    "The end",
  ],
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
