import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { PrismaModule } from './prisma/prisma.module';
import { SectionsModule } from './sections/sections.module';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [StudentsModule, PrismaModule, SectionsModule, GeminiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
