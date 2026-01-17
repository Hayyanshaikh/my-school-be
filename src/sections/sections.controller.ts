import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  FindAllSectionResponseDto,
  FindOneSectionResponseDto,
  ResponseSectionDto,
} from './dto/response-section.dto';

@ApiTags('sections')
@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new section' })
  @ApiResponse({ status: 201, description: 'Section created successfully.' })
  @ApiResponse({ status: 404, description: 'Section not found.' })
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sections' })
  @ApiResponse({
    status: 200,
    type: FindAllSectionResponseDto,
  })
  findAll() {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all sections' })
  @ApiResponse({
    status: 200,
    type: FindOneSectionResponseDto,
  })
  findOne(@Param('id') id: string) {
    return this.sectionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a section by ID' })
  @ApiResponse({ status: 200, description: 'Section updated successfully.' })
  @ApiResponse({ status: 404, description: 'Section not found.' })
  update(@Param('id') id: string, @Body() updateSectionDto: UpdateSectionDto) {
    return this.sectionsService.update(id, updateSectionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a section by ID' })
  @ApiResponse({ status: 200, description: 'Section deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Section not found.' })
  remove(@Param('id') id: string) {
    return this.sectionsService.remove(id);
  }
}
