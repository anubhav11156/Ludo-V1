-- AlterTable
ALTER TABLE "UserStakingDetails" ALTER COLUMN "Asset" DROP DEFAULT,
ALTER COLUMN "Asset" SET DATA TYPE TEXT;
