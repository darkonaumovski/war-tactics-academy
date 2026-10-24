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
};
export type Research = {
  slug: string;
  sources: Source[];
  sections: { title: string; text: string; evidence: Evidence }[];
  phases: Phase[];
  perspectives?: Perspective[];
};
export type Battle = {
  slug: string;
  name: string;
  year: number;
  date: string;
  eraId: string;
  kind: "Battle" | "Siege" | "Campaign";
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
};
export type War = {
  slug: string;
  name: string;
  eraId: string;
  period: string;
  summary: string;
  causes: string;
  consequences: string;
};
export type Campaign = {
  slug: string;
  name: string;
  warId: string;
  summary: string;
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
