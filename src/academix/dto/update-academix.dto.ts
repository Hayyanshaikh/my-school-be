import { PartialType } from '@nestjs/swagger';
import { CreateAcademixDto } from './create-academix.dto';

export class UpdateAcademixDto extends PartialType(CreateAcademixDto) {}
