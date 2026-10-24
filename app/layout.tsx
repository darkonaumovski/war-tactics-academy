import type { Metadata } from "next";
import { Shell } from "../components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "War Tactics Academy — The Art of Command",
    template: "%s | War Tactics Academy",
  },
  description:
    "Learn from history. Think like a general. An independent academy of military history, source-backed battle studies and historical decision learning.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
