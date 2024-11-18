/*
  Warnings:

  - You are about to drop the column `address` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `billingPhoneNumber` on the `Order` table. All the data in the column will be lost.
  - Added the required column `table` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "address",
DROP COLUMN "billingPhoneNumber",
ADD COLUMN     "table" TEXT NOT NULL;
