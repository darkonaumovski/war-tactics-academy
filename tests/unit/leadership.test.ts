import { describe, it, expect } from "vitest";
import {
  counterCaseLessons,
  leadershipVolumes,
  lessonsForBattle,
  volumeForCommander,
} from "../../data/leadership";
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
const acceptsVolume = (changes: Partial<LeadershipVolume>) =>
  leadershipVolumeSchema.safeParse({ ...volume({}), ...changes }).success;

describe("leadership volumes", () => {
  const slugs = (values: { slug: string }[]) =>
    new Set(values.map((x) => x.slug));
  const battleSlugs = slugs(battles);
  const campaignSlugs = slugs(campaigns);
  const commanderSlugs = slugs(commanders);

  it("are valid and belong to known commanders", () => {
    expect(leadershipVolumes.map((x) => x.commanderSlug)).toEqual([
      "napoleon-bonaparte",
      "alexander-the-great",
      "radomir-putnik",
    ]);
    for (const x of leadershipVolumes) {
      leadershipVolumeSchema.parse(x);
      expect(commanderSlugs.has(x.commanderSlug), x.commanderSlug).toBe(true);
      for (const s of x.alsoCommanderSlugs ?? [])
        expect(commanderSlugs.has(s), s).toBe(true);
    }
    const named = leadershipVolumes.flatMap((x) => [
      x.commanderSlug,
      ...(x.alsoCommanderSlugs ?? []),
    ]);
    expect(new Set(named).size, "a commander in two volumes").toBe(
      named.length,
    );
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

it("lists the Alexander lessons in curriculum order", () => {
  const alexander = volumeForCommander("alexander-the-great");
  expect(alexander?.inProgress).toBeUndefined();
  expect(alexander?.lessons.map((l) => l.slug)).toEqual([
    "how-to-read-alexander",
    "a-borrowed-army",
    "the-king-in-the-front-rank",
    "a-new-enemy-every-year",
    "staying-at-tyre",
    "parmenions-advice",
    "the-river-they-would-not-cross",
    "the-cost-of-frankness",
    "opis",
    "after-gaugamela",
    "the-desert-road",
    "to-the-strongest",
    "the-ledger-of-conquest",
  ]);
});

describe("the Serbian Supreme Command volume, while it is being written", () => {
  const volume = volumeForCommander("radomir-putnik");

  it("is found from each of the commanders it names", () => {
    for (const s of ["zivojin-misic", "stepa-stepanovic", "petar-bojovic"])
      expect(volumeForCommander(s), s).toBe(volume);
    expect(volumeForCommander("crown-prince-alexander")).toBeUndefined();
  });

  it("lists the lessons written so far in curriculum order", () => {
    expect(volume?.inProgress).toBeTruthy();
    expect(volume?.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-the-serbian-front",
      "where-will-the-blow-fall",
      "when-allies-ask-you-to-attack",
      "the-capital-or-the-army",
      "who-decided",
      "the-retreat-that-kept-an-army",
    ]);
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

describe("links from the rest of the site", () => {
  it("gives every lesson a line for the strength-and-shadow table", () => {
    for (const l of leadershipVolumes.flatMap((x) => x.lessons))
      expect(l.inBrief?.strength && l.inBrief.shadow, l.slug).toBeTruthy();
  });

  it("finds the lessons that cite an engagement", () => {
    const slugs = lessonsForBattle("borodino").map((x) => x.lesson.slug);
    expect(slugs).toContain("the-last-reserve");
    expect(slugs).toContain("who-can-tell-you-no");
    expect(lessonsForBattle("midway")).toEqual([]);
    expect(lessonsForBattle("cannae").map((x) => x.lesson.slug)).toEqual([
      "parmenions-advice",
    ]);
    expect(
      lessonsForBattle("granicus").map((x) => x.volume.commanderSlug),
    ).toEqual([
      "alexander-the-great",
      "alexander-the-great",
      "alexander-the-great",
    ]);
  });

  it("finds a commander’s volume and counter-case lessons", () => {
    expect(volumeForCommander("napoleon-bonaparte")?.lessons).toHaveLength(19);
    expect(
      counterCaseLessons("radomir-putnik").map((x) => x.lesson.slug),
    ).toEqual(["when-the-leader-leaves"]);
    expect(
      counterCaseLessons("paul-von-hindenburg").map((x) => x.lesson.slug),
    ).toEqual(["who-decided"]);
    expect(volumeForCommander("mikhail-kutuzov")).toBeUndefined();
  });

  it("finds a shared volume from each commander it names", () => {
    const shared = {
      ...volume({}),
      commanderSlug: "ferdinand-foch",
      alsoCommanderSlugs: ["philippe-petain", "joseph-joffre"],
    };
    leadershipVolumes.push(shared);
    try {
      expect(volumeForCommander("ferdinand-foch")).toBe(shared);
      expect(volumeForCommander("philippe-petain")).toBe(shared);
      expect(volumeForCommander("august-von-mackensen")).toBeUndefined();
    } finally {
      leadershipVolumes.pop();
    }
  });
});

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

  it("accepts other commanders on a shared volume, each once", () => {
    expect(acceptsVolume({ alsoCommanderSlugs: ["zivojin-misic"] })).toBe(true);
    expect(acceptsVolume({ alsoCommanderSlugs: [] })).toBe(false);
    expect(acceptsVolume({ alsoCommanderSlugs: ["napoleon-bonaparte"] })).toBe(
      false,
    );
  });

  it("excludes the Alexander volume's untraced sayings and labels", () => {
    for (const text of [
      "He feared an army of sheep led by a lion.",
      "He wept that there were no more worlds to conquer.",
      "His alcoholism explains it.",
      "A paranoid king.",
      "The Dunning-Kruger effect applies.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
  });

  it("rejects a lesson filed under an unknown part", () =>
    expect(accepts({ part: "Elsewhere" })).toBe(false));
});
