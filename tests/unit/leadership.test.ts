import { describe, it, expect } from "vitest";
import {
  counterCaseLessons,
  leadershipVolumes,
  lessonsDiscussing,
  lessonsForBattle,
  volumeForCommander,
} from "../../data/leadership";
import { wellingtonVolume } from "../../data/leadership/arthur-wellesley";
import { caesarVolume } from "../../data/leadership/julius-caesar";
import { hannibalScipioVolume } from "../../data/leadership/hannibal-barca";
import { grantLeeVolume } from "../../data/leadership/ulysses-s-grant";
import { slimVolume } from "../../data/leadership/william-slim";
import { yiVolume } from "../../data/leadership/yi-sun-sin";
import { battles, campaigns } from "../../data/catalog";
import commanders from "../../data/commanders.json";
import {
  leadershipProblems,
  problemsForLesson,
} from "../../data/leadership/problems";
import {
  leadershipProblemSchema,
  leadershipVolumeSchema,
} from "../../lib/validation";
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
      "douglas-haig",
      "arthur-wellesley",
      "julius-caesar",
      "hannibal-barca",
      "ulysses-s-grant",
      "william-slim",
      "yi-sun-sin",
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

  it("name as people only other profiled commanders", () => {
    for (const v of leadershipVolumes) {
      const own = new Set([v.commanderSlug, ...(v.alsoCommanderSlugs ?? [])]);
      for (const l of v.lessons) {
        const people = l.people ?? [];
        expect(new Set(people).size, l.slug).toBe(people.length);
        for (const s of people) {
          expect(commanderSlugs.has(s), `${l.slug}: ${s}`).toBe(true);
          expect(own.has(s), `${l.slug}: ${s} is the subject`).toBe(false);
          expect(s, `${l.slug}: ${s} is the counter-case`).not.toBe(
            l.counterCase.commanderSlug,
          );
        }
      }
    }
    expect(lessonsDiscussing("parmenion").map((x) => x.lesson.slug)).toEqual([
      "a-borrowed-army",
      "parmenions-advice",
      "the-cost-of-frankness",
    ]);
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

describe("the Serbian Supreme Command volume", () => {
  const volume = volumeForCommander("radomir-putnik");

  it("is found from each of the commanders it names", () => {
    for (const s of ["zivojin-misic", "stepa-stepanovic", "petar-bojovic"])
      expect(volumeForCommander(s), s).toBe(volume);
    expect(volumeForCommander("crown-prince-alexander")).toBeUndefined();
  });

  it("lists its lessons in curriculum order", () => {
    expect(volume?.inProgress).toBeUndefined();
    expect(volume?.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-the-serbian-front",
      "where-will-the-blow-fall",
      "when-allies-ask-you-to-attack",
      "the-capital-or-the-army",
      "who-decided",
      "november-1915",
      "the-retreat-that-kept-an-army",
      "after-the-chief",
      "a-near-goal",
      "where-to-break-the-front",
      "the-people-left-behind",
      "the-ledger-of-survival",
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

describe("the Western Front volume", () => {
  const volume = volumeForCommander("douglas-haig");

  it("is found from both of its commanders", () =>
    expect(volumeForCommander("ferdinand-foch")).toBe(volume));

  it("lists its lessons in curriculum order", () => {
    expect(volume?.inProgress).toBeUndefined();
    expect(volume?.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-the-western-front",
      "the-doctrine-before-the-war",
      "the-plan-that-was-neither",
      "why-the-somme-went-on",
      "what-reaches-the-top",
      "where-the-learning-happened",
      "the-day-the-front-broke",
      "coordination-by-persuasion",
      "knowing-when-to-switch",
      "the-general-battle",
      "how-to-end-it",
      "the-ledger-of-learning",
    ]);
  });
});

describe("the Wellington volume", () => {
  it("is found from Wellington's profile", () =>
    expect(volumeForCommander("arthur-wellesley")).toBe(wellingtonVolume));

  it("lists its lessons in curriculum order", () => {
    expect(wellingtonVolume.inProgress).toBeUndefined();
    expect(wellingtonVolume.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-wellington",
      "the-only-army",
      "ground-chosen-in-advance",
      "the-commissariat",
      "the-afternoon-at-salamanca",
      "the-breach",
      "a-short-leash",
      "the-scum-of-the-earth",
      "allies-he-could-not-command",
      "the-government-at-home",
      "the-empty-country",
      "the-ledger",
    ]);
  });
});

describe("the Caesar volume", () => {
  it("is found from Caesar's profile", () =>
    expect(volumeForCommander("julius-caesar")).toBe(caesarVolume));

  it("lists its lessons in curriculum order", () => {
    expect(caesarVolume.inProgress).toBeUndefined();
    expect(caesarVolume.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-caesar",
      "celeritas",
      "the-sabis",
      "the-reverse-explained",
      "two-fronts",
      "my-soldiers",
      "lieutenants",
      "gaul-divided",
      "clemency",
      "a-rival-who-knew-him",
      "the-rubicon",
      "the-ledger",
    ]);
  });
});

describe("the Hannibal and Scipio volume", () => {
  it("is found from both commanders' profiles", () => {
    expect(volumeForCommander("hannibal-barca")).toBe(hannibalScipioVolume);
    expect(volumeForCommander("scipio-africanus")).toBe(hannibalScipioVolume);
  });

  it("lists all its lessons in curriculum order", () => {
    expect(hannibalScipioVolume.inProgress).toBeUndefined();
    expect(hannibalScipioVolume.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-the-hannibalic-war",
      "over-the-alps",
      "reading-the-consul",
      "the-allies-who-stayed",
      "an-army-of-many-peoples",
      "the-delayer",
      "the-young-commander",
      "learning-from-the-enemy",
      "allies-made-and-kept",
      "taking-the-war-to-africa",
      "the-meeting-at-zama",
      "both-rejected",
      "the-ledger",
    ]);
  });
});

describe("the Yi volume", () => {
  it("is found from Yi's profile", () => {
    expect(yiVolume.alsoCommanderSlugs).toBeUndefined();
    expect(volumeForCommander("yi-sun-sin")).toBe(yiVolume);
  });

  it("lists all its lessons in curriculum order", () => {
    expect(yiVolume.inProgress).toBeUndefined();
    expect(yiVolume.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-yi",
      "beyond-his-province",
      "the-new-ship",
      "a-way-out",
      "what-a-fleet-cannot-do",
      "the-joint-report",
      "the-agents-story",
      "the-successor",
      "the-remnant",
      "an-ally-who-would-let-them-go",
      "noryang",
      "the-ledger",
    ]);
  });
});

describe("the Slim volume", () => {
  it("is found from Slim's profile", () => {
    expect(slimVolume.alsoCommanderSlugs).toBeUndefined();
    expect(volumeForCommander("william-slim")).toBe(slimVolume);
  });

  it("lists all its lessons in curriculum order", () => {
    expect(slimVolume.inProgress).toBeUndefined();
    expect(slimVolume.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-slim",
      "the-first-defeat",
      "the-long-retreat",
      "sidelined",
      "the-army-that-expected-to-lose",
      "stand-and-be-supplied",
      "whose-army",
      "fighting-at-the-end-of-his-line",
      "the-enemys-gamble",
      "the-subordinate-with-a-patron",
      "last-in-line",
      "the-changed-plan",
      "after-rangoon",
      "the-ledger",
    ]);
  });
});

describe("the Grant and Lee volume", () => {
  it("is found from both commanders' profiles", () => {
    expect(grantLeeVolume.alsoCommanderSlugs).toEqual(["robert-e-lee"]);
    expect(volumeForCommander("ulysses-s-grant")).toBe(grantLeeVolume);
    expect(volumeForCommander("robert-e-lee")).toBe(grantLeeVolume);
  });

  it("lists all its lessons in curriculum order", () => {
    expect(grantLeeVolume.inProgress).toBeUndefined();
    expect(grantLeeVolume.lessons.map((l) => l.slug)).toEqual([
      "how-to-read-grant-and-lee",
      "unconditional-surrender",
      "surprised-at-shiloh",
      "cutting-loose",
      "the-divided-army",
      "the-third-day",
      "general-in-chief",
      "fight-it-out-on-this-line",
      "the-army-that-could-not-be-replaced",
      "the-exchange-that-stopped",
      "whose-war",
      "appomattox",
      "the-ledger",
    ]);
  });
});

describe("problems compared across volumes", () => {
  it("are valid and name only existing volumes and lessons", () => {
    const slugs = leadershipProblems.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of leadershipProblems) {
      leadershipProblemSchema.parse(p);
      for (const { volume, slugs } of p.lessons) {
        const v = volumeForCommander(volume);
        expect(v?.commanderSlug, `${p.slug}: ${volume}`).toBe(volume);
        for (const s of slugs)
          expect(
            v?.lessons.some((l) => l.slug === s),
            `${p.slug}: ${s}`,
          ).toBe(true);
      }
    }
  });

  it("rejects a problem drawn from one volume, or listing a volume twice", () => {
    const lessons = [{ volume: "napoleon-bonaparte", slugs: ["the-ledger"] }];
    const problem = {
      slug: "x",
      title: "X",
      question: "X?",
      lessons,
      note: "N",
    };
    expect(leadershipProblemSchema.safeParse(problem).success).toBe(false);
    expect(
      leadershipProblemSchema.safeParse({
        ...problem,
        lessons: [...lessons, ...lessons],
      }).success,
    ).toBe(false);
  });

  it("finds the problems a lesson is compared under", () => {
    expect(
      problemsForLesson("radomir-putnik", "after-the-chief").map((p) => p.slug),
    ).toEqual(["dissent", "government-at-home", "succession"]);
    expect(problemsForLesson("napoleon-bonaparte", "the-ledger")).toHaveLength(
      1,
    );
    expect(problemsForLesson("alexander-the-great", "opis")).toEqual([]);
    expect(
      problemsForLesson("douglas-haig", "what-reaches-the-top").map(
        (p) => p.slug,
      ),
    ).toEqual(["dissent", "stopping"]);
    expect(
      problemsForLesson("arthur-wellesley", "the-only-army").map((p) => p.slug),
    ).toEqual(["irreplaceable"]);
    expect(
      problemsForLesson("julius-caesar", "two-fronts").map((p) => p.slug),
    ).toEqual(["stopping", "who-pays"]);
    expect(
      problemsForLesson("julius-caesar", "the-reverse-explained").map(
        (p) => p.slug,
      ),
    ).toEqual(["rebuilding"]);
    expect(
      problemsForLesson("william-slim", "the-enemys-gamble").map((p) => p.slug),
    ).toEqual(["adapting", "dissent", "stopping"]);
    expect(
      problemsForLesson("william-slim", "the-long-retreat").map((p) => p.slug),
    ).toEqual(["irreplaceable", "who-pays"]);
    expect(problemsForLesson("william-slim", "whose-army")).toHaveLength(1);
    expect(
      problemsForLesson("hannibal-barca", "the-meeting-at-zama").map(
        (p) => p.slug,
      ),
    ).toEqual(["adapting", "settlement"]);
    expect(
      problemsForLesson("ulysses-s-grant", "the-third-day").map((p) => p.slug),
    ).toEqual(["stopping", "irreplaceable"]);
    expect(
      problemsForLesson("yi-sun-sin", "the-successor").map((p) => p.slug),
    ).toEqual(["taking-over", "irreplaceable", "succession"]);
    expect(
      problemsForLesson("yi-sun-sin", "the-agents-story").map((p) => p.slug),
    ).toEqual(["dissent", "government-at-home"]);
    expect(
      problemsForLesson("arthur-wellesley", "the-government-at-home").map(
        (p) => p.slug,
      ),
    ).toEqual(["dissent", "government-at-home"]);
    expect(problemsForLesson("yi-sun-sin", "the-ledger")).toHaveLength(2);
  });
});

describe("links from the rest of the site", () => {
  it("gives every lesson a line for the strength-and-shadow table", () => {
    for (const l of leadershipVolumes.flatMap((x) => x.lessons))
      expect(l.inBrief?.strength && l.inBrief.shadow, l.slug).toBeTruthy();
  });

  it("finds the lessons that cite an engagement", () => {
    const slugs = lessonsForBattle("borodino").map((x) => x.lesson.slug);
    expect(slugs).toContain("the-last-reserve");
    expect(slugs).toContain("who-can-tell-you-no");
    expect(lessonsForBattle("guadalcanal")).toEqual([]);
    expect(lessonsForBattle("cannae").map((x) => x.lesson.slug)).toEqual([
      "parmenions-advice",
      "celeritas",
      "over-the-alps",
      "reading-the-consul",
      "the-allies-who-stayed",
      "the-delayer",
      "the-ledger",
      // The Grant and Lee volume's ledger uses Hannibal as its counter-case.
      "the-ledger",
      // The Yi volume sets Cannae against the way out Yi left the enemy.
      "a-way-out",
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
    ).toEqual(["when-the-leader-leaves", "the-successor"]);
    expect(
      counterCaseLessons("paul-von-hindenburg").map((x) => x.lesson.slug),
    ).toEqual(["who-decided", "how-to-end-it"]);
    expect(
      counterCaseLessons("erich-von-falkenhayn").map((x) => x.lesson.slug),
    ).toEqual(["after-the-chief", "why-the-somme-went-on"]);
    expect(
      counterCaseLessons("kosta-pecanac").map((x) => x.lesson.slug),
    ).toEqual(["the-people-left-behind"]);
    expect(volumeForCommander("mikhail-kutuzov")).toBeUndefined();
  });

  it("finds a shared volume from each commander it names", () => {
    const shared = {
      ...volume({}),
      commanderSlug: "joseph-joffre",
      alsoCommanderSlugs: ["arthur-currie", "john-monash"],
    };
    leadershipVolumes.push(shared);
    try {
      expect(volumeForCommander("joseph-joffre")).toBe(shared);
      expect(volumeForCommander("arthur-currie")).toBe(shared);
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

  it("excludes the Wellington volume's untraced sayings", () => {
    for (const text of [
      "Waterloo was won on the playing fields of Eton.",
      "Hard pounding, gentlemen.",
      "Up, Guards, and at 'em!",
      "By God, they frighten me.",
      "Publish and be damned.",
      "Next to a battle lost, the saddest thing is a battle won.",
      "He made his campaigns of ropes.",
      "The thin red line held.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
    // His own later account of the order at Waterloo is traced.
    expect(
      accepts({ bearsOn: "He wrote that he said: Stand up, Guards!" }),
    ).toBe(true);
  });

  it("excludes the Caesar volume's untraced sayings", () => {
    for (const text of [
      "Et tu, Brute?",
      "Alea iacta est.",
      "Caesar's wife must be above suspicion.",
      "Fortune favours the bold, he said.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
    // The forms traced to a named reporter stay allowed.
    for (const text of [
      "As Suetonius reports it, he said: iacta alea est.",
      "As Plutarch tells it, he said: Let the die be cast.",
      "Suetonius says some wrote that he asked Brutus in Greek: You too, my child?",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(true);
  });

  it("excludes the Hannibal and Scipio volume's untraced sayings", () => {
    for (const text of [
      "I will find a way or make one.",
      "Aut viam inveniam aut faciam.",
      "Hannibal ad portas!",
      "Carthago delenda est.",
      "Ceterum censeo Carthaginem esse delendam... delenda est Carthago.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
    // The traced forms, with their reporters, stay allowed.
    for (const text of [
      "Livy says Hannibal rode with his cavalry up to the Colline Gate to inspect the walls.",
      "As Plutarch tells it, Cato added to every vote: In my opinion, Carthage must be destroyed.",
      "As Livy tells it, Maharbal said: You know how to win victory, Hannibal, you do not know how to use it.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(true);
  });

  it("excludes the Grant and Lee volume's forged, later and misquoted sayings", () => {
    for (const text of [
      "Duty is the sublimest word in our language.",
      "As Sherman said, war is hell.",
      "I propose to fight it out on this line if it takes all summer.",
      "It is well that war is so terrible, or we should grow too fond of it.",
      "It's all my fault.",
      "It’s all my fault, Lee said.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
    // The traced forms, with their reporters, stay allowed.
    for (const text of [
      "Grant wrote to Halleck on 11 May 1864 that he purposed to fight it out on this line if it took all summer.",
      "Cooke, in 1871, has Lee murmur: It is well this is so terrible! we should grow too fond of it!",
      "Fremantle heard Lee tell Wilcox: all this has been my fault.",
      "Grant demanded no terms except an unconditional and immediate surrender.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(true);
  });

  it("excludes the Slim volume's untraced and unattributed sayings and the wartime slur", () => {
    for (const text of [
      "When you go home, tell them of us and say, for your tomorrow we gave our today.",
      "As Slim put it, leadership is just plain you.",
      "The Japs had cut the road.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
    // The traced forms, with their authors, stay allowed.
    for (const text of [
      "John Maxwell Edmonds wrote: When you go home, tell them of us and say, For your tomorrows these gave their today.",
      "The Japanese had cut the road to Kohima.",
      "Slim recalled that he had taken counsel of his fears.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(true);
  });

  it("excludes the Yi volume's untraced and unattributed sayings", () => {
    for (const text of [
      "Yi told the court that he still had twelve warships.",
      "Yi was undefeated in twenty-three battles.",
      "He never lost a battle at sea.",
      "The turtle ship was the first ironclad.",
      "Tōgō Heihachirō said he was no match for Yi Sun-sin.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(false);
    // The traced forms, with their sources, stay allowed.
    for (const text of [
      "Yi Bun's Record of Conduct says Yi told the court he still had twelve warships.",
      "Ballard wrote that Yi never knew defeat.",
      "Britannica says the turtle ship is thought to have been the first ironclad.",
      "Those who resolve to die live, Yi told his commanders, citing the military classics.",
    ])
      expect(accepts({ bearsOn: text }), text).toBe(true);
  });

  it("rejects a lesson filed under an unknown part", () =>
    expect(accepts({ part: "Elsewhere" })).toBe(false));
});
