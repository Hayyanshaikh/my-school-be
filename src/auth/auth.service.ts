import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/response.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  private JWT_SECRET = process.env.JWT_SECRET || 'secret123';

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { username: loginDto.username },
      });

      if (!user) throw new BadRequestException({ message: 'Invalid Username' });

      const isPasswordValid = await bcrypt.compare(
        loginDto.password,
        user.password,
      );
      if (!isPasswordValid)
        throw new BadRequestException({ message: 'Invalid password' });

      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        this.JWT_SECRET,
        { expiresIn: '1h' },
      );

      const userData = {
        id: user.id,
        username: user.username,
        email: user.email || '',
        role: user.role || '',
      };

      return {
        data: userData,
        access_token: token,
        message: 'Login successfully',
        status: HttpStatus.OK,
      };
    } catch (error) {
      if (error instanceof BadRequestException) throw error;

      throw new HttpException(
        {
          message: 'Failed to login',
          errors: [error.message || 'Unknown error'],
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
