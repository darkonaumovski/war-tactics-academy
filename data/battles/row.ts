import type { Battle } from "../../lib/types";
// slug, name, signed year, date, eraId, kind, region, location, lat, lon,
// warId, campaign name, factions as "A|B", summary, outcome, topic
export type Row = [
  string,
  string,
  number,
  string,
  string,
  Battle["kind"],
  string,
  string,
  number,
  number,
  string,
  string,
  string,
  string,
  string,
  string,
];
