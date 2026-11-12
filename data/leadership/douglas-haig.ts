import type { LeadershipVolume } from "../../lib/types";
// Volume 4, a shared volume. Lessons are added in reviewed batches;
// docs/LEADERSHIP_EVIDENCE_WESTERN_FRONT.md records which sources can carry
// each one, and docs/SOURCE_AUDIT.md how each was read. Not yet listed in
// `leadershipVolumes`, so no route goes live until the pilot lessons ship.
export const westernFrontVolume: LeadershipVolume = {
  commanderSlug: "douglas-haig",
  alsoCommanderSlugs: ["ferdinand-foch"],
  title: "Leadership Lessons from Foch and Haig: the Western Front, 1914–1918",
  summary:
    "What a person who leads others can take from Douglas Haig and Ferdinand Foch on the Western Front, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "For four years the armies on the Western Front attacked fortified lines with no flanks to turn. Douglas Haig commanded the British armies in France from December 1915 to the end. Ferdinand Foch commanded French armies and army groups, was removed after the Somme, and in 1918 was given the task of coordinating the Allied armies, then their strategic direction. The British army that attacked on the Somme in 1916 was not the army that broke the German lines in 1918, and historians still argue about how much of the change was learning, who did the learning, and whether its price could have been lower. Each lesson tests one claim about leading people against that record. One record cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question: "Did the generals learn, and was the learning worth its price?",
  parts: [
    "Orientation",
    "Learning under fire, 1914–1916",
    "The cost of persistence, 1917",
    "Sharing command, 1918",
    "Ending and accounting",
  ],
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
