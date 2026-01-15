/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHERS');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthDate" TIMESTAMP(3),
    "gender" "Gender" NOT NULL,
    "classId" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "admissionDate" TIMESTAMP(3) NOT NULL,
    "rollNo" INTEGER NOT NULL,
    "fatherName" TEXT,
    "motherName" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teacher" TEXT NOT NULL,
    "roomNo" TEXT,
    "totalStudents" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollNo_key" ON "Student"("rollNo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_key" ON "Class"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Section_name_key" ON "Section"("name");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
