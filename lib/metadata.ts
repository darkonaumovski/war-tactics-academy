import type { Metadata } from "next";

export const siteName = "War Tactics Academy";
export const siteDescription =
  "Learn from history. Think like a general. An independent academy of military history, source-backed battle studies and historical decision learning.";

// Public origin including any base path, e.g. https://user.github.io/repo.
// Root-relative paths in metadata resolve beneath it.
export const siteUrl = new URL(
  (process.env.SITE_URL ?? "http://127.0.0.1:3000").replace(/\/?$/, "/"),
);

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type, siteName },
    twitter: { card: "summary", title, description },
  };
}
