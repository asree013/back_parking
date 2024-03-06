-- AlterTable
ALTER TABLE `Bookings` MODIFY `slip_img` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Parks` ADD COLUMN `image_park` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `image_user` VARCHAR(191) NULL;
