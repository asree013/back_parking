/*
  Warnings:

  - Added the required column `count` to the `SlipPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SlipPayment` ADD COLUMN `count` INTEGER NOT NULL;