-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_classId_fkey";

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "sectionId" TEXT;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;
