/*
  Warnings:

  - Added the required column `code` to the `Specialty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Specialty" ADD COLUMN     "code" INTEGER NOT NULL;
