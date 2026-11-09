export type Evidence = "fact" | "interpretation" | "uncertainty";
export type Source = { title: string; url: string; publisher: string };
export type Phase = { title: string; time: string; description: string };
export type Perspective = {
  name: string;
  objective: string;
  known: string;
  uncertainty: string;
  constraints: string;
  decision: string;
  forces?: string;
  terrain?: string;
  logistics?: string;
  outcome?: string;
};
// Index into the study's `sources`, with a standard book/chapter locator where one exists.
export type SectionRef = { source: number; locator?: string };
export type Research = {
  slug: string;
  sources: Source[];
  sections: {
    title: string;
    text: string;
    evidence: Evidence;
    refs?: SectionRef[];
  }[];
  phases: Phase[];
  perspectives?: Perspective[];
};
export type Battle = {
  slug: string;
  name: string;
  year: number;
  date: string;
  eraId: string;
  kind: "Battle" | "Siege" | "Operation" | "Campaign";
  region: string;
  location: string;
  lat: number;
  lon: number;
  warId: string;
  campaignId: string;
  factions: string[];
  summary: string;
  outcome: string;
  topic: string;
  research?: Research;
};
export type Commander = {
  slug: string;
  name: string;
  years: string;
  state: string;
  eraId: string;
  role: string;
  summary: string;
  approach: string;
  strength: string;
  limitation: string;
  legacy: string;
  battleSlugs: string[];
  source: Source;
  editorialStatus?: string;
  details?: CommanderDetails;
};
export type Chronology = { date: string; event: string }[];
export type CommanderCategory =
  | "Ruler-commander"
  | "Field commander"
  | "Naval commander"
  | "Staff planner"
  | "Coalition and theater commander";
export type CommanderDetails = {
  category: CommanderCategory;
  titles: string;
  principalCommands: string[];
  timeline: Chronology;
  notableDecision: string;
  setback: string;
};
// A curated war bibliography entry: a source that was read, with a note on
// what it covers and where its limits lie.
export type BibliographyEntry = Source & { note: string };
export type WarDetails = {
  participants: string[];
  geography: string;
  developments: Chronology;
  bibliography?: BibliographyEntry[];
};
export type War = {
  slug: string;
  name: string;
  eraId: string;
  period: string;
  summary: string;
  causes: string;
  consequences: string;
  details?: WarDetails;
};
// A campaign narrative. Each paragraph names the member studies it covers and
// cites the campaign's own sources, which were read for the narrative.
export type CampaignDetails = {
  summary: string;
  narrative: {
    title: string;
    text: string;
    evidence: Evidence;
    studies: string[];
    refs: SectionRef[];
  }[];
  sources: Source[];
};
export type Campaign = {
  slug: string;
  name: string;
  warId: string;
  summary: string;
  details?: CampaignDetails;
};
// A curated reading path across wars. Members come from the rule (any listed
// war or campaign), so new engagements join without editing the collection.
export type Collection = {
  slug: string;
  title: string;
  summary: string;
  introduction: string;
  // Each paragraph names the member studies it summarises.
  arc: { text: string; studies: string[] }[];
  wars?: string[];
  campaigns?: string[];
  courseSlugs: string[];
  // Draw a line joining the engagements in date order on the collection map.
  route?: boolean;
  // Shown while a collection is still being built out.
  inProgress?: string;
};
export type Question = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};
export type SourceCheck = {
  question: string;
  witnesses: { label: string; claim: string }[];
  prompt: string;
  options: { text: string; feedback: string; best?: boolean }[];
  campaignSlug?: string;
  battleSlug?: string;
};
export type Lesson = {
  slug: string;
  title: string;
  objectives: string[];
  paragraphs: string[];
  battleSlugs: string[];
  questions: Question[];
  sources?: Source[];
  diagram?: string[];
  seminar?: { prompt: string; guidance: string };
  sourceCheck?: SourceCheck;
};
export type Course = {
  slug: string;
  title: string;
  level: string;
  description: string;
  lessons: Lesson[];
};
export type Scenario = {
  slug: string;
  title: string;
  battleSlug: string;
  commander: string;
  situation: string;
  known: string;
  unknown: string;
  historical: string;
  options: { text: string; feedback: string; historical: boolean }[];
};
// A shared vocabulary, so that later volumes can be compared with this one.
export type LeadershipTheme =
  | "judgement"
  | "motivation"
  | "communication"
  | "organisation"
  | "adaptation"
  | "restraint"
  | "succession"
  | "ethics";
export type LeadershipReading = {
  text: string;
  evidence: Evidence;
  refs: SectionRef[];
};
// How far the research behind a psychological reading can be trusted. "none"
// says plainly that no reliable mechanism is offered, and then needs no refs.
export type ResearchBase =
  "meta-analysis" | "review" | "single study" | "theory" | "contested" | "none";
export type LeadershipLesson = {
  slug: string;
  title: string;
  // One of the titles in the volume's `parts`.
  part: string;
  themes: LeadershipTheme[];
  // The principle under test, as a conditional claim with its scope.
  claim: string;
  moment: LeadershipReading;
  episodes: (LeadershipReading & {
    title: string;
    battleSlugs: string[];
    campaignSlugs?: string[];
  })[];
  witnesses: {
    who: string;
    stake: string;
    says: string;
    refs: SectionRef[];
  }[];
  strategist: LeadershipReading[];
  psychologist: (Omit<LeadershipReading, "evidence"> & {
    evidence: "interpretation";
    mechanism: string;
    base: ResearchBase;
    limit: string;
  })[];
  shadow: LeadershipReading & { battleSlugs?: string[] };
  counterCase: LeadershipReading & {
    commanderSlug?: string;
    battleSlugs: string[];
  };
  cost?: LeadershipReading;
  transfer: { holdsWhen: string[]; failsWhen: string[]; questions: string[] };
  // What this lesson adds to the question that organises the volume.
  bearsOn: string;
  questions: Question[];
  sourceCheck?: SourceCheck;
  seminar: { prompt: string; guidance: string };
  sources: Source[];
};
// One commander's volume, addressed by the commander's slug. Editorial data
// imported by its own pages, not seeded, so it stays out of the catalog payload.
export type LeadershipVolume = {
  commanderSlug: string;
  title: string;
  summary: string;
  introduction: string;
  question: string;
  parts: string[];
  lessons: LeadershipLesson[];
  // Shown while a volume is still being written.
  inProgress?: string;
};
export type Catalog = {
  battles: Battle[];
  commanders: Commander[];
  wars: War[];
  campaigns: Campaign[];
  courses: Course[];
  scenarios: Scenario[];
};
