import { cache } from "react";
import { db } from "./db";
import type {
  Battle,
  Commander,
  War,
  Campaign,
  Course,
  Lesson,
  Scenario,
  Catalog,
} from "./types";
export const getCatalog = cache(async (): Promise<Catalog> => {
  const [battles, commanders, wars, campaigns, courses, scenarios] =
    await Promise.all([
      db.battle.findMany({ orderBy: { year: "asc" } }),
      db.commander.findMany({ orderBy: { name: "asc" } }),
      db.war.findMany(),
      db.campaign.findMany(),
      db.learningCourse.findMany({
        include: { lessons: { orderBy: { ordinal: "asc" } } },
      }),
      db.historicalDecision.findMany(),
    ]);
  return {
    battles: battles.map((x) => x.payload as unknown as Battle),
    commanders: commanders.map((x) => x.payload as unknown as Commander),
    wars: wars.map((x) => x.payload as unknown as War),
    campaigns: campaigns.map((x) => x.payload as unknown as Campaign),
    courses: courses.map(
      (x) =>
        ({
          slug: x.id,
          title: x.title,
          level: x.level,
          description: x.description,
          lessons: x.lessons.map((l) => l.payload as unknown as Lesson),
        }) as Course,
    ),
    scenarios: scenarios.map((x) => x.payload as unknown as Scenario),
  };
});
