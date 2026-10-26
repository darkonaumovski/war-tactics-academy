import { readFile } from "node:fs/promises";
import { db } from "../lib/db";
import { battles, wars, campaigns, eras, slugify } from "../data/catalog";
import { courses as courseData, scenarios } from "../data/learning";
import {
  commanderSchema,
  courseSchema,
  researchSchema,
  warDetailsSchema,
} from "../lib/validation";
import { warDetails } from "../data/war-details";
import { research as researchData } from "../data/research";
import { media } from "../lib/media";
import type { Prisma } from "../generated/prisma/client";
import type { Source } from "../lib/types";
const json = (v: unknown) =>
  JSON.parse(JSON.stringify(v)) as Prisma.InputJsonValue;
const research = researchSchema.parse(researchData);
const commanders = commanderSchema.parse(
  JSON.parse(await readFile("data/commanders.json", "utf8")),
);
const courses = courseSchema.parse(courseData);
warDetailsSchema.parse(warDetails);
// All reads/validation precede the transaction; a failed seed never leaves a partial catalog.
await db.$transaction(
  async (tx) => {
    for (const era of eras)
      await tx.historicalEra.upsert({
        where: { id: era.id },
        update: { name: era.name },
        create: { id: era.id, name: era.name },
      });
    for (const war of wars)
      await tx.war.upsert({
        where: { id: war.slug },
        update: { name: war.name, payload: json(war) },
        create: {
          id: war.slug,
          name: war.name,
          eraId: war.eraId,
          payload: json(war),
        },
      });
    for (const campaign of campaigns)
      await tx.campaign.upsert({
        where: { id: campaign.slug },
        update: { payload: json(campaign) },
        create: {
          id: campaign.slug,
          name: campaign.name,
          warId: campaign.warId,
          payload: json(campaign),
        },
      });
    async function source(s: Source) {
      return tx.historicalSource.upsert({
        where: { url: s.url },
        update: { title: s.title, publisher: s.publisher },
        create: { id: slugify(s.url), ...s },
      });
    }
    for (const commander of commanders) {
      await tx.commander.upsert({
        where: { id: commander.slug },
        update: { name: commander.name, payload: json(commander) },
        create: {
          id: commander.slug,
          name: commander.name,
          eraId: commander.eraId,
          payload: json(commander),
        },
      });
      const ref = await source(commander.source);
      // Source joins mirror the current editorial files, so replaced links drop out.
      await tx.commanderSource.deleteMany({
        where: { commanderId: commander.slug, sourceId: { not: ref.id } },
      });
      await tx.commanderSource.upsert({
        where: {
          commanderId_sourceId: {
            commanderId: commander.slug,
            sourceId: ref.id,
          },
        },
        update: {},
        create: { commanderId: commander.slug, sourceId: ref.id },
      });
    }
    for (const battle of battles) {
      const study = research.find((r) => r.slug === battle.slug);
      const record = { ...battle, research: study };
      await tx.battle.upsert({
        where: { id: battle.slug },
        update: {
          name: battle.name,
          kind: battle.kind,
          year: battle.year,
          region: battle.region,
          latitude: battle.lat,
          longitude: battle.lon,
          campaignId: battle.campaignId,
          payload: json(record),
        },
        create: {
          id: battle.slug,
          name: battle.name,
          kind: battle.kind,
          year: battle.year,
          region: battle.region,
          latitude: battle.lat,
          longitude: battle.lon,
          campaignId: battle.campaignId,
          payload: json(record),
        },
      });
      for (const faction of battle.factions) {
        const id = slugify(faction);
        await tx.faction.upsert({
          where: { id },
          update: { name: faction },
          create: { id, name: faction },
        });
        await tx.battleParticipant.upsert({
          where: {
            battleId_factionId: { battleId: battle.slug, factionId: id },
          },
          update: {},
          create: { battleId: battle.slug, factionId: id },
        });
      }
      for (const commander of commanders.filter((c) =>
        c.battleSlugs.includes(battle.slug),
      ))
        await tx.commanderAssignment.upsert({
          where: {
            battleId_commanderId: {
              battleId: battle.slug,
              commanderId: commander.slug,
            },
          },
          update: {},
          create: {
            battleId: battle.slug,
            commanderId: commander.slug,
            role: "Associated historical command; see profile for responsibility",
          },
        });
      for (const [i, phase] of (study?.phases ?? []).entries()) {
        const id = `${battle.slug}-${i}`;
        await tx.battlePhase.upsert({
          where: { id },
          update: { ...phase, ordinal: i },
          create: { id, battleId: battle.slug, ordinal: i, ...phase },
        });
        await tx.mapEvent.upsert({
          where: { id },
          update: { label: phase.title, description: phase.description },
          create: {
            id,
            phaseId: id,
            label: phase.title,
            description: phase.description,
            coordinateSystem: "schematic",
          },
        });
      }
      await tx.battleSource.deleteMany({ where: { battleId: battle.slug } });
      for (const ref of study?.sources ?? []) {
        const s = await source(ref);
        await tx.battleSource.upsert({
          where: {
            battleId_sourceId: { battleId: battle.slug, sourceId: s.id },
          },
          update: {},
          create: { battleId: battle.slug, sourceId: s.id },
        });
        await tx.mediaResource.upsert({
          where: { id: s.id },
          update: {},
          create: {
            id: s.id,
            sourceId: s.id,
            kind: "External reading",
            author: ref.publisher,
            license:
              "Linked reading; copyright remains with publisher. No media reproduced.",
            attribution: `${ref.title} — ${ref.publisher}`,
          },
        });
      }
    }
    // Battles now point at current campaigns; drop campaigns renamed or removed
    // from the editorial data so they do not linger as empty pages.
    await tx.campaign.deleteMany({
      where: { id: { notIn: campaigns.map((c) => c.slug) } },
    });
    for (const [courseOrdinal, course] of courses.entries()) {
      await tx.learningCourse.upsert({
        where: { id: course.slug },
        update: {
          title: course.title,
          description: course.description,
          level: course.level,
          ordinal: courseOrdinal,
        },
        create: {
          id: course.slug,
          title: course.title,
          description: course.description,
          level: course.level,
          ordinal: courseOrdinal,
        },
      });
      for (const [ordinal, lesson] of course.lessons.entries()) {
        const id = `${course.slug}/${lesson.slug}`;
        await tx.lesson.upsert({
          where: { id },
          update: { payload: json(lesson) },
          create: {
            id,
            courseId: course.slug,
            ordinal,
            title: lesson.title,
            payload: json(lesson),
          },
        });
        await tx.quiz.upsert({
          where: { id },
          update: {},
          create: { id, lessonId: id },
        });
        for (const [i, q] of lesson.questions.entries())
          await tx.quizQuestion.upsert({
            where: { id: `${id}-${i}` },
            update: { ...q, choices: json(q.choices) },
            create: {
              id: `${id}-${i}`,
              quizId: id,
              ...q,
              choices: json(q.choices),
            },
          });
        const refs = [
          ...(lesson.sources ?? []),
          ...research
            .filter((r) => lesson.battleSlugs.includes(r.slug))
            .flatMap((r) => r.sources),
        ];
        await tx.lessonSource.deleteMany({ where: { lessonId: id } });
        for (const ref of refs) {
          const s = await source(ref);
          await tx.lessonSource.upsert({
            where: { lessonId_sourceId: { lessonId: id, sourceId: s.id } },
            update: {},
            create: { lessonId: id, sourceId: s.id },
          });
        }
      }
    }
    for (const item of media) {
      const s = await source({
        title: item.title,
        url: item.url,
        publisher: item.publisher,
      });
      await tx.mediaResource.upsert({
        where: { id: item.id },
        update: {
          sourceId: s.id,
          kind: item.kind,
          author: item.publisher,
          license: item.license,
          attribution: item.attribution,
        },
        create: {
          id: item.id,
          sourceId: s.id,
          kind: item.kind,
          author: item.publisher,
          license: item.license,
          attribution: item.attribution,
        },
      });
    }
    for (const scenario of scenarios) {
      await tx.historicalDecision.upsert({
        where: { id: scenario.slug },
        update: { payload: json(scenario) },
        create: {
          id: scenario.slug,
          battleId: scenario.battleSlug,
          title: scenario.title,
          payload: json(scenario),
        },
      });
      for (const [i, option] of scenario.options.entries())
        await tx.decisionOption.upsert({
          where: { id: `${scenario.slug}-${i}` },
          update: { ...option },
          create: {
            id: `${scenario.slug}-${i}`,
            decisionId: scenario.slug,
            ordinal: i,
            ...option,
          },
        });
    }
  },
  { timeout: 60000 },
);
console.log(
  `Seed complete: ${battles.length} engagements, ${commanders.length} commanders, ${research.length} studies, ${courses.length} courses, ${scenarios.length} exercises, ${media.length} media records.`,
);
await db.$disconnect();
