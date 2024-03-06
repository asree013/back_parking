-- AlterTable
ALTER TABLE `Payments` ADD COLUMN `deposit` INTEGER NULL;

-- AlterTable
ALTER TABLE `SlipPayment` ADD COLUMN `detail` VARCHAR(191) NULL;
