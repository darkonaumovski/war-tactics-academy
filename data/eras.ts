// Kept apart from catalog.ts: client components need the era list, and
// importing it from there would put every battle row and campaign narrative in
// the browser bundle.
export const eras = [
  { id: "ancient", name: "Classical antiquity", period: "490 BCE – 500 CE" },
  { id: "medieval", name: "Medieval worlds", period: "500 – 1500" },
  { id: "early-modern", name: "Early modern", period: "1500 – 1800" },
  { id: "napoleonic", name: "Napoleonic era", period: "1792 – 1815" },
  { id: "industrial", name: "Age of industry", period: "1815 – 1913" },
  { id: "world-wars", name: "The World Wars", period: "1914 – 1945" },
  { id: "modern", name: "After 1945", period: "1945 onward" },
];
