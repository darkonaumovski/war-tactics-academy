import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";
const globalDB = globalThis as unknown as { db?: PrismaClient };
export const db =
  globalDB.db ??
  new PrismaClient({
    adapter: new PrismaBetterSqlite3({
      url: process.env.DATABASE_URL ?? "file:./prisma/academy.db",
    }),
  });
if (process.env.NODE_ENV !== "production") globalDB.db = db;
