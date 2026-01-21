import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AcademixService } from './academix.service';
import { CreateAcademixDto } from './dto/create-academix.dto';
import { UpdateAcademixDto } from './dto/update-academix.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseAcademixDto } from './dto/response-academix.dto';

@Controller('academix')
export class AcademixController {
  constructor(private readonly academixService: AcademixService) {}

  @Post('generate')
  @ApiOperation({ summary: 'Generate response from academix' })
  @ApiResponse({ status: 200, type: ResponseAcademixDto })
  generate(@Body() body: CreateAcademixDto) {
    return this.academixService.generate(body.prompt);
  }

  @Post()
  create(@Body() createAcademixDto: CreateAcademixDto) {
    return this.academixService.create(createAcademixDto);
  }

  // @Get()
  // findAll() {
  //   return this.academixService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academixService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcademixDto: UpdateAcademixDto,
  ) {
    return this.academixService.update(+id, updateAcademixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academixService.remove(+id);
  }
}
