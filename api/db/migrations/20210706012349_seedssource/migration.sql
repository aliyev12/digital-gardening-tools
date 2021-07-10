-- CreateTable
CREATE TABLE "SeedsSource" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isWeb" BOOLEAN NOT NULL,
    "url" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
