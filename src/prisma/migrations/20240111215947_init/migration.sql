/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `privilege_group` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PrivilegeGroup" AS ENUM ('Merchant_owner', 'Merchant_admin', 'Guest', 'Merchant_supervisor', 'Area_manager');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "password" INTEGER NOT NULL,
ADD COLUMN     "privilege_group" "PrivilegeGroup" NOT NULL;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "ProductType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductBrand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "ProductBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "supplier_contact_name" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "supplier_website" TEXT NOT NULL,
    "contact_phone" INTEGER NOT NULL,
    "contact_mobile" INTEGER NOT NULL,
    "street_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "postal_address_name" TEXT,
    "postal_city" TEXT,
    "postal_code_postal" TEXT,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);
