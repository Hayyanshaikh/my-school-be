import 'dotenv/config';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const errors: string[] = [];
      const { email, username, password } = createUserDto;

      if (!username) {
        errors.push('Username is required');
      }
      if (!password) {
        errors.push('Password is required');
      }

      const usernameExist = await this.prisma.user.findFirst({
        where: {
          username,
        },
      });

      if (usernameExist) {
        errors.push('User already exists');
      }

      const emailExist = await this.prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (emailExist) {
        errors.push('Email already exists');
      }

      if (errors.length > 0) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      });
      return user;
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

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
