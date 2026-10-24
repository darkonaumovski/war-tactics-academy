import type { Metadata } from "next";
import { Shell } from "../components/shell";
import { MotionProvider } from "../components/motion";
import { siteDescription, siteName, siteUrl } from "../lib/metadata";
import { fontVariables } from "./fonts";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "War Tactics Academy — The Art of Command",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: { siteName, type: "website", locale: "en" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={fontVariables}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <MotionProvider>
          <Shell>{children}</Shell>
        </MotionProvider>
      </body>
    </html>
  );
}
