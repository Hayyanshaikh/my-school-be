import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import dayjs from 'dayjs';

@Injectable()
export class SectionsService {
  constructor(private prisma: PrismaService) {}

  async create(createSectionDto: CreateSectionDto) {
    try {
      const errors: string[] = [];

      const existingSection = await this.prisma.section.findUnique({
        where: {
          name: createSectionDto.name,
        },
      });

      if (existingSection) {
        errors.push('Section Name already exists');
      }

      if (!createSectionDto.name) {
        errors.push('Section name is required');
      }

      if (errors.length > 0) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors,
        });
      }

      const section = await this.prisma.section.create({
        data: {
          name: createSectionDto.name,
          isActive: createSectionDto.isActive,
          createdAt: dayjs().toDate(),
          updatedAt: dayjs().toDate(),
        },
      });
      return {
        data: section,
        message: 'Section created successfully',
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new HttpException(
        {
          message: 'Failed to create Section',
          errors: [error.message || 'Unknown error'],
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    const sections = await this.prisma.section.findMany({
      orderBy: [
        {
          isActive: 'desc',
        },
        {
          createdAt: 'desc',
        },
        {
          updatedAt: 'desc',
        },
        {
          name: 'asc',
        },
      ],
    });
    return {
      data: sections,
      meta: {
        message: 'Purchaseorder Findall Success',
        total: sections.length,
        totalRecords: sections.length,
      },
    };
  }

  async findOne(id: string) {
    const section = await this.prisma.section.findUnique({
      where: {
        id,
      },
    });
    return {
      data: section,
      message: 'Section found successfully',
    };
  }

  async update(id: string, updateSectionDto: UpdateSectionDto) {
    const section = await this.prisma.section.update({
      where: {
        id,
      },
      data: updateSectionDto,
    });
    return {
      data: section,
      message: 'Section updated successfully',
    };
  }

  async remove(id: string) {
    const section = await this.prisma.section.delete({
      where: {
        id,
      },
    });
    return {
      data: section,
      message: 'Section deleted successfully',
    };
  }
}
