-- AlterTable
ALTER TABLE "Supplier" ALTER COLUMN "contact_phone" DROP NOT NULL,
ALTER COLUMN "contact_phone" SET DATA TYPE BIGINT,
ALTER COLUMN "contact_mobile" DROP NOT NULL,
ALTER COLUMN "contact_mobile" SET DATA TYPE BIGINT;
