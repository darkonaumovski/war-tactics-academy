import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Inter,
  Source_Serif_4,
} from "next/font/google";

// All four families are SIL Open Font License. next/font downloads them at build
// time and serves them with the site, so browsers never contact Google.
// `subsets` only chooses what is preloaded: the generated CSS still declares the
// Latin Extended and Vietnamese ranges (names such as Tōgō and Điện Biên Phủ),
// which browsers fetch only on pages that use those characters.
export const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
export const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["Consolas", "Menlo", "monospace"],
});

export const fontVariables = [display, serif, sans, mono]
  .map((f) => f.variable)
  .join(" ");
