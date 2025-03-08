/*
  Warnings:

  - You are about to drop the column `productId` on the `Stock` table. All the data in the column will be lost.
  - Added the required column `ingredientName` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_productId_fkey";

-- DropIndex
DROP INDEX "Stock_productId_key";

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "productId",
ADD COLUMN     "ingredientName" TEXT NOT NULL;
