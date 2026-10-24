import { z } from "zod";
export const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.url().refine((v) => v.startsWith("https://")),
  publisher: z.string(),
});
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
  }),
);
