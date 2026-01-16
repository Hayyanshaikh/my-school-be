import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const errors: string[] = []; // validation / custom errors array

    try {
      // Example manual validation before DB
      if (!createStudentDto.name) {
        errors.push('Name is required.');
      }
      if (typeof createStudentDto.age !== 'number') {
        errors.push('Age must be a number.');
      }
      if (typeof createStudentDto.rollNo !== 'number') {
        errors.push('Roll number must be a number.');
      }

      if (
        createStudentDto.gender !== 'MALE' &&
        createStudentDto.gender !== 'FEMALE'
      ) {
        errors.push('Gender must be MALE or FEMALE.');
      }

      if (
        createStudentDto.classId === null ||
        createStudentDto.classId === undefined
      ) {
        errors.push('Class ID is required.');
      }

      if (
        createStudentDto.sectionId === null ||
        createStudentDto.sectionId === undefined
      ) {
        errors.push('Section ID is required.');
      }

      if (errors.length > 0) {
        // Agar errors ho to throw kar do
        throw new BadRequestException({
          message: 'Validation failed',
          errors, // array of collected errors
        });
      }

      // Prisma create call
      const student = await this.prisma.student.create({
        data: createStudentDto,
      });

      return student;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new HttpException(
        {
          message: 'Failed to create student',
          errors: [error.message || 'Unknown error'],
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const students = await this.prisma.student.findMany();
      return students;
    } catch (error) {}
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
