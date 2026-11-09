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
const sourceCheckSchema = z.object({
  question: z.string().min(1),
  witnesses: z
    .array(z.object({ label: z.string().min(1), claim: z.string().min(1) }))
    .min(2),
  prompt: z.string().min(1),
  options: z
    .array(
      z.object({
        text: z.string().min(1),
        feedback: z.string().min(1),
        best: z.boolean().optional(),
      }),
    )
    .min(2),
  campaignSlug: z.string().min(1).optional(),
  battleSlug: z.string().min(1).optional(),
});
const refSchema = z.object({
  source: z.number().int().nonnegative(),
  locator: z.string().min(1).optional(),
});
const leadershipReadingSchema = z.object({
  text: z.string().min(1),
  evidence: z.enum(["fact", "interpretation", "uncertainty"]),
  refs: z.array(refSchema).min(1),
});
// A lesson's claim must carry its scope; one career cannot prove a rule.
const conditionalClaim =
  /\b(when|where|if|unless|once|while|the more|the higher)\b/i;
// Sayings not yet traced to a text, and labels and popular findings the
// editorial rules exclude. Remove a saying only after recording its origin in
// docs/SOURCE_AUDIT.md.
const excludedInLessons: [RegExp, string][] = [
  [/marches on its stomach/i, "untraced saying"],
  [/interrupt your enemy/i, "untraced saying"],
  [/lucky generals/i, "untraced saying"],
  [/baton in his knapsack/i, "untraced saying"],
  [/lies agreed upon/i, "untraced saying"],
  [/impossible is not french/i, "untraced saying"],
  [/narcissis|psychopath|sociopath|megalomania|bipolar/i, "psychiatric label"],
  [
    /ego depletion|power pos(e|ing)|myers.briggs|10,000.hour/i,
    "excluded claim",
  ],
  [/\b\d[\d,]*\s+(dead|killed|casualties|wounded)\b/i, "casualty figure"],
];
const leadershipLessonSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    part: z.string().min(1),
    themes: z
      .array(
        z.enum([
          "judgement",
          "motivation",
          "communication",
          "organisation",
          "adaptation",
          "restraint",
          "succession",
          "ethics",
        ]),
      )
      .min(1),
    claim: z
      .string()
      .regex(conditionalClaim, "A claim must state when it applies"),
    moment: leadershipReadingSchema,
    episodes: z
      .array(
        leadershipReadingSchema.extend({
          title: z.string().min(1),
          battleSlugs: z.array(z.string()),
          campaignSlugs: z.array(z.string()).optional(),
        }),
      )
      .min(2)
      .max(4),
    witnesses: z
      .array(
        z.object({
          who: z.string().min(1),
          stake: z.string().min(1),
          says: z.string().min(1),
          refs: z.array(refSchema).min(1),
        }),
      )
      .min(2),
    strategist: z.array(leadershipReadingSchema).min(1),
    psychologist: z
      .array(
        z
          .object({
            text: z.string().min(1),
            evidence: z.literal("interpretation"),
            refs: z.array(refSchema),
            mechanism: z.string().min(1),
            base: z.enum([
              "meta-analysis",
              "review",
              "single study",
              "theory",
              "contested",
              "none",
            ]),
            limit: z.string().min(1),
          })
          .refine(
            (p) => p.base === "none" || p.refs.length > 0,
            "A psychological reading needs a read source",
          ),
      )
      .min(1)
      .max(2),
    shadow: leadershipReadingSchema.extend({
      battleSlugs: z.array(z.string()).optional(),
    }),
    counterCase: leadershipReadingSchema.extend({
      commanderSlug: z.string().min(1).optional(),
      battleSlugs: z.array(z.string()),
    }),
    cost: leadershipReadingSchema.optional(),
    transfer: z.object({
      holdsWhen: z.array(z.string().min(1)).min(1),
      failsWhen: z.array(z.string().min(1)).min(1),
      questions: z.array(z.string().min(1)).length(3),
    }),
    bearsOn: z.string().min(1),
    questions: z.array(questionSchema).min(3),
    sourceCheck: sourceCheckSchema.optional(),
    seminar: z.object({
      prompt: z.string().min(1),
      guidance: z.string().min(1),
    }),
    sources: z.array(sourceSchema).min(2),
  })
  .superRefine((lesson, ctx) => {
    const blocks: { refs: { source: number }[] }[] = [
      lesson.moment,
      ...lesson.episodes,
      ...lesson.witnesses,
      ...lesson.strategist,
      ...lesson.psychologist,
      lesson.shadow,
      lesson.counterCase,
      ...(lesson.cost ? [lesson.cost] : []),
    ];
    for (const ref of blocks.flatMap((b) => b.refs))
      if (ref.source >= lesson.sources.length)
        ctx.addIssue({
          code: "custom",
          message: `Reference ${ref.source} is out of range in ${lesson.slug}`,
        });
    // Source titles may legitimately name a disorder or a study; prose may not.
    const prose = JSON.stringify({ ...lesson, sources: [] });
    for (const [pattern, reason] of excludedInLessons)
      if (pattern.test(prose))
        ctx.addIssue({
          code: "custom",
          message: `${reason} in ${lesson.slug}: ${pattern}`,
        });
    if (
      !lesson.episodes.some(
        (e) => e.battleSlugs.length || e.campaignSlugs?.length,
      )
    )
      ctx.addIssue({
        code: "custom",
        message: `${lesson.slug} must link at least one study or campaign`,
      });
  });
export const leadershipVolumeSchema = z
  .object({
    commanderSlug: z.string().min(1),
    title: z.string().min(1),
    summary: z.string().min(1),
    introduction: z.string().min(1),
    question: z.string().min(1),
    parts: z.array(z.string().min(1)).min(1),
    lessons: z.array(leadershipLessonSchema),
    inProgress: z.string().min(1).optional(),
  })
  .superRefine((volume, ctx) => {
    const slugs = volume.lessons.map((l) => l.slug);
    if (new Set(slugs).size !== slugs.length)
      ctx.addIssue({ code: "custom", message: "Duplicate lesson slug" });
    for (const lesson of volume.lessons)
      if (!volume.parts.includes(lesson.part))
        ctx.addIssue({
          code: "custom",
          message: `${lesson.slug} names an unknown part: ${lesson.part}`,
        });
  });
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
          sourceCheck: sourceCheckSchema.optional(),
        }),
      )
      .min(1),
  }),
);
