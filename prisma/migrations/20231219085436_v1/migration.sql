/*
  Warnings:

  - Added the required column `data_end` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_booking` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookings` ADD COLUMN `data_end` VARCHAR(191) NOT NULL,
    ADD COLUMN `date_booking` VARCHAR(191) NOT NULL;
