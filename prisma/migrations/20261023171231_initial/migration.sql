-- CreateTable
CREATE TABLE "HistoricalEra" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "War" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "eraId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "War_eraId_fkey" FOREIGN KEY ("eraId") REFERENCES "HistoricalEra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "warId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "Campaign_warId_fkey" FOREIGN KEY ("warId") REFERENCES "War" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Battle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "campaignId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "Battle_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Commander" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "eraId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "Commander_eraId_fkey" FOREIGN KEY ("eraId") REFERENCES "HistoricalEra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Faction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BattleParticipant" (
    "battleId" TEXT NOT NULL,
    "factionId" TEXT NOT NULL,

    PRIMARY KEY ("battleId", "factionId"),
    CONSTRAINT "BattleParticipant_battleId_fkey" FOREIGN KEY ("battleId") REFERENCES "Battle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BattleParticipant_factionId_fkey" FOREIGN KEY ("factionId") REFERENCES "Faction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CommanderAssignment" (
    "battleId" TEXT NOT NULL,
    "commanderId" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    PRIMARY KEY ("battleId", "commanderId"),
    CONSTRAINT "CommanderAssignment_battleId_fkey" FOREIGN KEY ("battleId") REFERENCES "Battle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CommanderAssignment_commanderId_fkey" FOREIGN KEY ("commanderId") REFERENCES "Commander" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BattlePhase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "battleId" TEXT NOT NULL,
    "ordinal" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    CONSTRAINT "BattlePhase_battleId_fkey" FOREIGN KEY ("battleId") REFERENCES "Battle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MapEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phaseId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coordinateSystem" TEXT NOT NULL DEFAULT 'schematic',
    CONSTRAINT "MapEvent_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "BattlePhase" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistoricalDecision" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "battleId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "HistoricalDecision_battleId_fkey" FOREIGN KEY ("battleId") REFERENCES "Battle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DecisionOption" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "decisionId" TEXT NOT NULL,
    "ordinal" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "historical" BOOLEAN NOT NULL,
    CONSTRAINT "DecisionOption_decisionId_fkey" FOREIGN KEY ("decisionId") REFERENCES "HistoricalDecision" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistoricalSource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publisher" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BattleSource" (
    "battleId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    PRIMARY KEY ("battleId", "sourceId"),
    CONSTRAINT "BattleSource_battleId_fkey" FOREIGN KEY ("battleId") REFERENCES "Battle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BattleSource_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "HistoricalSource" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CommanderSource" (
    "commanderId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    PRIMARY KEY ("commanderId", "sourceId"),
    CONSTRAINT "CommanderSource_commanderId_fkey" FOREIGN KEY ("commanderId") REFERENCES "Commander" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CommanderSource_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "HistoricalSource" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaResource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "attribution" TEXT NOT NULL,
    CONSTRAINT "MediaResource_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "HistoricalSource" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LearningCourse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "ordinal" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "LearningCourse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LessonSource" (
    "lessonId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    PRIMARY KEY ("lessonId", "sourceId"),
    CONSTRAINT "LessonSource_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LessonSource_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "HistoricalSource" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    CONSTRAINT "Quiz_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "QuizQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quizId" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "choices" JSONB NOT NULL,
    "answer" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,
    CONSTRAINT "QuizQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Battle_year_region_kind_idx" ON "Battle"("year", "region", "kind");

-- CreateIndex
CREATE UNIQUE INDEX "BattlePhase_battleId_ordinal_key" ON "BattlePhase"("battleId", "ordinal");

-- CreateIndex
CREATE UNIQUE INDEX "HistoricalSource_url_key" ON "HistoricalSource"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_courseId_ordinal_key" ON "Lesson"("courseId", "ordinal");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_lessonId_key" ON "Quiz"("lessonId");
