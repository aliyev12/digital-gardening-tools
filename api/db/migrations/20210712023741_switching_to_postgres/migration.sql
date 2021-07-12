-- CreateTable
CREATE TABLE "SeedsSource" (
    "id" TEXT NOT NULL,
    "isWeb" BOOLEAN NOT NULL DEFAULT false,
    "url" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantVariety" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "seedsSourceId" TEXT NOT NULL,
    "daysToMaturity" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planting" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "datePlanted" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "isSuccession" BOOLEAN NOT NULL DEFAULT false,
    "successionPeriod" INTEGER,
    "plantVarietyId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlantVariety" ADD FOREIGN KEY ("seedsSourceId") REFERENCES "SeedsSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planting" ADD FOREIGN KEY ("plantVarietyId") REFERENCES "PlantVariety"("id") ON DELETE CASCADE ON UPDATE CASCADE;
