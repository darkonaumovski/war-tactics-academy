-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Battle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "ordinal" INTEGER NOT NULL DEFAULT 0,
    "region" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "campaignId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "Battle_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Battle" ("campaignId", "id", "kind", "latitude", "longitude", "name", "payload", "region", "year") SELECT "campaignId", "id", "kind", "latitude", "longitude", "name", "payload", "region", "year" FROM "Battle";
DROP TABLE "Battle";
ALTER TABLE "new_Battle" RENAME TO "Battle";
CREATE INDEX "Battle_year_region_kind_idx" ON "Battle"("year", "region", "kind");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
