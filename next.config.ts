import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-better-sqlite3"],
  devIndicators: false,
  images: {
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
