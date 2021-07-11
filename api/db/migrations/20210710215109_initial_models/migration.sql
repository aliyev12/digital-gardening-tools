-- CreateTable
CREATE TABLE "SeedsSource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isWeb" BOOLEAN NOT NULL DEFAULT false,
    "url" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PlantVariety" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "seedsSourceId" TEXT NOT NULL,
    "daysToMaturity" INTEGER,
    FOREIGN KEY ("seedsSourceId") REFERENCES "SeedsSource" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Planting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "datePlanted" DATETIME NOT NULL,
    "notes" TEXT,
    "isSuccession" BOOLEAN NOT NULL DEFAULT false,
    "successionPeriod" INTEGER,
    "plantVarietyId" TEXT NOT NULL,
    FOREIGN KEY ("plantVarietyId") REFERENCES "PlantVariety" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
