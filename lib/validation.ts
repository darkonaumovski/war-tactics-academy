import { z } from "zod";
export const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.url().refine((v) => v.startsWith("https://")),
  publisher: z.string(),
});
const chronologySchema = z
  .array(z.object({ date: z.string().min(1), event: z.string().min(1) }))
  .min(1);
export const researchSchema = z.array(
  z.object({
    slug: z.string(),
    sources: z.array(sourceSchema).min(1),
    sections: z
      .array(
        z.object({
          title: z.string(),
          text: z.string(),
          evidence: z.enum(["fact", "interpretation", "uncertainty"]),
          refs: z
            .array(
              z.object({
                source: z.number().int().nonnegative(),
                locator: z.string().min(1).optional(),
              }),
            )
            .min(1)
            .optional(),
        }),
      )
      .min(14),
    phases: z
      .array(
        z.object({
          title: z.string(),
          time: z.string(),
          description: z.string(),
        }),
      )
      .min(4),
    perspectives: z
      .array(
        z.object({
          name: z.string(),
          objective: z.string(),
          known: z.string(),
          uncertainty: z.string(),
          constraints: z.string(),
          decision: z.string(),
          forces: z.string().min(1).optional(),
          terrain: z.string().min(1).optional(),
          logistics: z.string().min(1).optional(),
          outcome: z.string().min(1).optional(),
        }),
      )
      .optional(),
  }),
);
export const commanderSchema = z.array(
  z.object({
    slug: z.string(),
    name: z.string(),
    years: z.string(),
    state: z.string(),
    eraId: z.string(),
    role: z.string(),
    summary: z.string(),
    approach: z.string(),
    strength: z.string(),
    limitation: z.string(),
    legacy: z.string(),
    battleSlugs: z.array(z.string()),
    source: sourceSchema,
    editorialStatus: z.string().optional(),
    details: z
      .object({
        category: z.enum([
          "Ruler-commander",
          "Field commander",
          "Naval commander",
          "Staff planner",
          "Coalition and theater commander",
        ]),
        titles: z.string().min(1),
        principalCommands: z.array(z.string().min(1)).min(1),
        timeline: chronologySchema.min(4),
        notableDecision: z.string().min(1),
        setback: z.string().min(1),
      })
      .optional(),
  }),
);
export const warDetailsSchema = z.record(
  z.string(),
  z.object({
    participants: z.array(z.string().min(1)).min(2),
    geography: z.string().min(1),
    developments: chronologySchema.min(3),
  }),
);
const questionSchema = z
  .object({
    prompt: z.string().min(1),
    choices: z.array(z.string().min(1)).min(2),
    answer: z.number().int().nonnegative(),
    explanation: z.string().min(1),
  })
  .refine((q) => q.answer < q.choices.length, "Answer index out of range");
export const courseSchema = z.array(
  z.object({
    slug: z.string(),
    title: z.string().min(1),
    level: z.string(),
    description: z.string().min(1),
    lessons: z
      .array(
        z.object({
          slug: z.string(),
          title: z.string().min(1),
          objectives: z.array(z.string()).min(1),
          paragraphs: z.array(z.string()).min(3),
          battleSlugs: z.array(z.string()),
          questions: z.array(questionSchema).min(1),
          sources: z.array(sourceSchema).optional(),
          diagram: z.array(z.string().min(1)).min(2).optional(),
          seminar: z
            .object({ prompt: z.string().min(1), guidance: z.string().min(1) })
            .optional(),
        }),
      )
      .min(1),
  }),
);
