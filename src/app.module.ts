import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { PrismaModule } from './prisma/prisma.module';
import { SectionsModule } from './sections/sections.module';
import { AcademixModule } from './academix/academix.module';

@Module({
  imports: [StudentsModule, PrismaModule, SectionsModule, AcademixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
