import type { NextConfig } from "next";
// Project pages on GitHub Pages are served from /<repository-name>/; the deploy
// workflow sets BASE_PATH. Local builds serve from the root.
const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const config: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  poweredByHeader: false,
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-better-sqlite3"],
  devIndicators: false,
  images: {
    // Static hosting has no image optimizer; portraits load from the archive.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "catalog.archives.gov",
        pathname: "/medialz/presidential-libraries/truman/photographs/**",
      },
    ],
  },
};
export default config;
