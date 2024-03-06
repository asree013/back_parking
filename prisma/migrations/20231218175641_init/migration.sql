/*
  Warnings:

  - You are about to drop the column `usernam` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idCard]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `usernam`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `idCard` VARCHAR(191) NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_username_key` ON `Users`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_idCard_key` ON `Users`(`idCard`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);
