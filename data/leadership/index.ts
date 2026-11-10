import type { LeadershipLesson, LeadershipVolume } from "../../lib/types";
import { alexanderVolume } from "./alexander-the-great";
import { napoleonVolume } from "./napoleon";
export const leadershipVolumes: LeadershipVolume[] = [
  napoleonVolume,
  alexanderVolume,
];
export type LessonLink = { volume: LeadershipVolume; lesson: LeadershipLesson };
const allLessons: LessonLink[] = leadershipVolumes.flatMap((volume) =>
  volume.lessons.map((lesson) => ({ volume, lesson })),
);
// Every engagement a lesson links, from its episodes, shadow and counter-case.
export const lessonBattleSlugs = (l: LeadershipLesson) =>
  new Set([
    ...l.episodes.flatMap((e) => e.battleSlugs),
    ...(l.shadow.battleSlugs ?? []),
    ...l.counterCase.battleSlugs,
  ]);
export const lessonsForBattle = (slug: string) =>
  allLessons.filter(({ lesson }) => lessonBattleSlugs(lesson).has(slug));
// Lessons that use a commander as the counter-case to the volume's subject.
export const counterCaseLessons = (commanderSlug: string) =>
  allLessons.filter(
    ({ lesson }) => lesson.counterCase.commanderSlug === commanderSlug,
  );
// The volume about a commander, including a shared volume that names them.
export const volumeForCommander = (commanderSlug: string) =>
  leadershipVolumes.find(
    (v) =>
      v.commanderSlug === commanderSlug ||
      v.alsoCommanderSlugs?.includes(commanderSlug),
  );
