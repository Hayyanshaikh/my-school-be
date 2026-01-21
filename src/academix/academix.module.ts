import { Module } from '@nestjs/common';
import { AcademixService } from './academix.service';
import { AcademixController } from './academix.controller';

@Module({
  controllers: [AcademixController],
  providers: [AcademixService],
})
export class AcademixModule {}
