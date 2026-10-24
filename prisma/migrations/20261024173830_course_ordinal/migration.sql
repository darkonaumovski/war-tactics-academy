-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LearningCourse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "ordinal" INTEGER NOT NULL DEFAULT 0,
    "level" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_LearningCourse" ("description", "id", "level", "title") SELECT "description", "id", "level", "title" FROM "LearningCourse";
DROP TABLE "LearningCourse";
ALTER TABLE "new_LearningCourse" RENAME TO "LearningCourse";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
