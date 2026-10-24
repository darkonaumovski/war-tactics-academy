// Evaluated on the server for each request; calendar rollover follows the academy's editorial timezone.
export function dailyChallengeIndex(count: number) {
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  return Math.floor(Date.parse(date) / 86400000) % count;
}
