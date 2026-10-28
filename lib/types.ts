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
export type WarDetails = {
  participants: string[];
  geography: string;
  developments: Chronology;
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
export type Campaign = {
  slug: string;
  name: string;
  warId: string;
  summary: string;
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
export type Catalog = {
  battles: Battle[];
  commanders: Commander[];
  wars: War[];
  campaigns: Campaign[];
  courses: Course[];
  scenarios: Scenario[];
};
