-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "soldDate" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "DailyBuying" (
    "Id" TEXT NOT NULL,
    "particular" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "Amount" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyBuying_pkey" PRIMARY KEY ("Id")
);
