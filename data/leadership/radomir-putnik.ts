import type { LeadershipVolume } from "../../lib/types";
// Volume 3, a shared volume. Lessons are added in reviewed batches;
// docs/LEADERSHIP_EVIDENCE_SERBIA.md records which sources can carry each one,
// and docs/SOURCE_AUDIT.md how each was read. Not yet listed in
// `leadershipVolumes`, so no route goes live until the pilot lessons ship.
export const serbianSupremeCommandVolume: LeadershipVolume = {
  commanderSlug: "radomir-putnik",
  alsoCommanderSlugs: ["zivojin-misic", "stepa-stepanovic", "petar-bojovic"],
  title: "Leadership Lessons from the Serbian Supreme Command, 1914–1918",
  summary:
    "What a person who leads others can take from the Serbian Supreme Command of 1914–1918, Radomir Putnik with Stepa Stepanović, Živojin Mišić and Petar Bojović, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In 1914 a small army, just out of two Balkan Wars and short of rifles and artillery ammunition, turned back the Austro-Hungarian invasions. In 1915, attacked by Germany, Austria-Hungary and Bulgaria together, it lost its whole country, retreated through Montenegro and Albania in winter and was evacuated by the Allies to Corfu. In 1918 it broke through at Dobro Pole and marched home. Its command was shared: a chief of staff in poor health, army commanders who became field marshals, a prince regent who was commander-in-chief, and a government at war. Each lesson tests one claim about leading people against that record, and asks who, in a shared command, actually decided. One record cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "Did its commanders make Serbia’s endurance, or did they keep from wasting it?",
  parts: [
    "Orientation",
    "Judgement, 1914",
    "Sharing command",
    "Catastrophe, 1915",
    "The return",
  ],
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
