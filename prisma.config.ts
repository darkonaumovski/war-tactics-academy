import "dotenv/config";
import { defineConfig } from "prisma/config";
import path from "node:path";
const url = process.env.DATABASE_URL ?? "file:./prisma/academy.db";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations", seed: "tsx prisma/seed.ts" },
  datasource: { url: `file:${path.resolve(url.replace(/^file:/, ""))}` },
});
