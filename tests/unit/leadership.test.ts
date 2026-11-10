import { describe, it, expect } from "vitest";
import { leadershipVolumes } from "../../data/leadership";
import { battles, campaigns } from "../../data/catalog";
import commanders from "../../data/commanders.json";
import { leadershipVolumeSchema } from "../../lib/validation";
import type { LeadershipLesson, LeadershipVolume } from "../../lib/types";

const reading = {
  text: "A passage.",
  evidence: "fact" as const,
  refs: [{ source: 0 }],
};
const lesson: LeadershipLesson = {
  slug: "a-lesson",
  title: "A lesson",
  part: "Judgement",
  themes: ["judgement"],
  claim: "When a condition holds, a behaviour tends to follow.",
  moment: reading,
  episodes: [
    { ...reading, title: "One", battleSlugs: ["austerlitz"] },
    { ...reading, title: "Two", battleSlugs: [] },
  ],
  witnesses: [
    { who: "A", stake: "Some", says: "This", refs: [{ source: 0 }] },
    { who: "B", stake: "Other", says: "That", refs: [{ source: 1 }] },
  ],
  strategist: [reading],
  psychologist: [
    {
      text: "A mechanism may apply.",
      evidence: "interpretation",
      refs: [{ source: 1 }],
      mechanism: "A mechanism",
      base: "review",
      limit: "One person cannot be tested.",
    },
  ],
  shadow: reading,
  counterCase: { ...reading, battleSlugs: [] },
  transfer: {
    holdsWhen: ["A"],
    failsWhen: ["B"],
    questions: ["One?", "Two?", "Three?"],
  },
  bearsOn: "It adds this.",
  questions: [1, 2, 3].map((n) => ({
    prompt: `Question ${n}`,
    choices: ["Yes", "No"],
    answer: 0,
    explanation: "Because.",
  })),
  seminar: { prompt: "Discuss.", guidance: "Compare the witnesses." },
  sources: [
    { title: "One", url: "https://example.org/1", publisher: "P" },
    { title: "Two", url: "https://example.org/2", publisher: "P" },
  ],
};
const volume = (changes: Partial<LeadershipLesson>): LeadershipVolume => ({
  commanderSlug: "napoleon-bonaparte",
  title: "A volume",
  summary: "A summary",
  introduction: "An introduction",
  question: "A question?",
  parts: ["Judgement"],
  lessons: [{ ...lesson, ...changes }],
});
const accepts = (changes: Partial<LeadershipLesson>) =>
  leadershipVolumeSchema.safeParse(volume(changes)).success;

describe("leadership volumes", () => {
  const slugs = (values: { slug: string }[]) =>
    new Set(values.map((x) => x.slug));
  const battleSlugs = slugs(battles);
  const campaignSlugs = slugs(campaigns);
  const commanderSlugs = slugs(commanders);

  it("are valid and belong to known commanders", () => {
    expect(leadershipVolumes.map((x) => x.commanderSlug)).toEqual([
      "napoleon-bonaparte",
    ]);
    for (const x of leadershipVolumes) {
      leadershipVolumeSchema.parse(x);
      expect(commanderSlugs.has(x.commanderSlug), x.commanderSlug).toBe(true);
    }
  });

  it("link only to existing studies, campaigns and commanders", () => {
    for (const l of leadershipVolumes.flatMap((x) => x.lessons)) {
      const linked = [
        ...l.episodes,
        l.counterCase,
        { battleSlugs: l.shadow.battleSlugs ?? [] },
      ].flatMap((x) => x.battleSlugs);
      for (const s of linked) expect(battleSlugs.has(s), s).toBe(true);
      for (const s of l.episodes.flatMap((x) => x.campaignSlugs ?? []))
        expect(campaignSlugs.has(s), s).toBe(true);
      if (l.counterCase.commanderSlug)
        expect(commanderSlugs.has(l.counterCase.commanderSlug)).toBe(true);
    }
  });
});

it("lists the Napoleon lessons in curriculum order", () =>
  expect(leadershipVolumes[0].lessons.map((l) => l.slug)).toEqual([
    "how-to-read-napoleon",
    "inherit-before-you-invent",
    "intuition-is-stored-work",
    "plan-for-being-wrong",
    "tempo-and-the-decisive-point",
    "be-seen-where-it-is-hardest",
    "what-people-will-do-for-recognition",
    "words-that-win-and-words-that-spend-trust",
    "delegate-the-fight",
    "a-headquarters-built-for-one-mind",
    "the-bottleneck",
    "your-rivals-are-learning",
    "winning-battles-is-not-ending-wars",
    "knowing-when-to-stop",
    "who-can-tell-you-no",
    "the-last-reserve",
    "when-the-leader-leaves",
    "what-outlasts-you",
    "the-ledger",
  ]));

describe("the leadership lesson schema", () => {
  it("accepts a complete lesson", () => expect(accepts({})).toBe(true));

  it("requires a claim that states when it applies", () =>
    expect(accepts({ claim: "Leaders should be bold." })).toBe(false));

  it("rejects a reference to a source the lesson does not list", () =>
    expect(accepts({ moment: { ...reading, refs: [{ source: 2 }] } })).toBe(
      false,
    ));

  it("requires the psychologist to state a limit and a source", () => {
    const [p] = lesson.psychologist;
    expect(accepts({ psychologist: [{ ...p, limit: "" }] })).toBe(false);
    expect(accepts({ psychologist: [{ ...p, refs: [] }] })).toBe(false);
    expect(accepts({ psychologist: [{ ...p, refs: [], base: "none" }] })).toBe(
      true,
    );
  });

  it("keeps psychological readings as interpretation", () => {
    const [p] = lesson.psychologist;
    const changed = { ...p, evidence: "fact" } as unknown as typeof p;
    expect(accepts({ psychologist: [changed] })).toBe(false);
  });

  it("requires exercises and two sources", () => {
    expect(accepts({ questions: lesson.questions.slice(0, 2) })).toBe(false);
    expect(accepts({ sources: lesson.sources.slice(0, 1) })).toBe(false);
  });

  it("requires a link to at least one study or campaign", () =>
    expect(
      accepts({
        episodes: lesson.episodes.map((e) => ({ ...e, battleSlugs: [] })),
      }),
    ).toBe(false));

  it("excludes untraced sayings, diagnoses and casualty figures", () => {
    for (const text of [
      "He said an army marches on its stomach.",
      "A narcissistic ruler.",
      "Studies of ego depletion apply.",
      "The battle left 30,000 dead.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
  });

  it("allows a source title to name what prose may not", () =>
    expect(
      accepts({
        sources: [
          {
            title: "Narcissistic leaders: a review",
            url: "https://example.org/3",
            publisher: "P",
          },
          lesson.sources[1],
        ],
      }),
    ).toBe(true));

  it("rejects a lesson filed under an unknown part", () =>
    expect(accepts({ part: "Elsewhere" })).toBe(false));
});
