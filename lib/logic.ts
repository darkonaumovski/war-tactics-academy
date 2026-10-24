import type { Battle, Question } from "./types";
export function formatYear(year: number) {
  if (!Number.isInteger(year) || year === 0)
    throw new Error("Historical year must be a nonzero integer");
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}
export const normalize = (v: string) =>
  v
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
export function filterBattles(
  battles: Battle[],
  query = "",
  era = "",
  region = "",
  kind = "",
) {
  const q = normalize(query.trim());
  return battles.filter(
    (b) =>
      (!q ||
        normalize(`${b.name} ${b.summary} ${b.location} ${b.topic}`).includes(
          q,
        )) &&
      (!era || b.eraId === era) &&
      (!region || b.region === region) &&
      (!kind || b.kind === kind),
  );
}
export function nextPhase(current: number, count: number) {
  return count < 1 ? 0 : (current + 1) % count;
}
export function quizScore(questions: Question[], answers: number[]) {
  return questions.reduce(
    (score, q, i) => score + Number(q.answer === answers[i]),
    0,
  );
}
export function decisionTransition(
  state: "briefing" | "feedback",
  option: number,
  count: number,
) {
  if (
    state !== "briefing" ||
    !Number.isInteger(option) ||
    option < 0 ||
    option >= count
  )
    throw new Error("Invalid decision transition");
  return "feedback" as const;
}
