/*
  Warnings:

  - You are about to drop the column `data_end` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `date_booking` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `slip_img` on the `Bookings` table. All the data in the column will be lost.
  - Added the required column `end_date` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookings` DROP COLUMN `data_end`,
    DROP COLUMN `date_booking`,
    DROP COLUMN `price`,
    DROP COLUMN `slip_img`,
    ADD COLUMN `end_date` DATETIME(3) NOT NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Payments` (
    `id` VARCHAR(191) NOT NULL,
    `status_payment` VARCHAR(191) NOT NULL DEFAULT 'draft-payment',
    `count` INTEGER NOT NULL,
    `booking_id` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Payments_booking_id_key`(`booking_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SlipPayment` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `payment_id` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Bookings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SlipPayment` ADD CONSTRAINT `SlipPayment_payment_id_fkey` FOREIGN KEY (`payment_id`) REFERENCES `Payments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
