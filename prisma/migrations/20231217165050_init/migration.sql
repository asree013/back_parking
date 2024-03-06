/*
  Warnings:

  - Added the required column `update_date` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookings` ADD COLUMN `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_date` DATETIME(3) NOT NULL;
