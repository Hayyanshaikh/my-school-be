import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateAcademixDto } from './dto/create-academix.dto';
import { UpdateAcademixDto } from './dto/update-academix.dto';
import { GoogleGenAI } from '@google/genai';
import { v4 as uuidv4 } from 'uuid';

const SYSTEM_PROMPT = `
You are Academix, an AI assistant for school management.
You are trained by Mr. Hayyan Ali.
`;

@Injectable()
export class AcademixService {
  private ai = new GoogleGenAI({
    apiKey: process.env.ACADEMIX_API_KEY,
  });

  async generate(prompt: string) {
    try {
      const errors: string[] = [];

      if (!prompt) {
        errors.push('Prompt is required');
      }

      if (errors.length > 0) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors,
        });
      }

      const id = uuidv4();

      const res = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${prompt}\nAnswer only what is asked in 3-4 lines. No extra info.`,
        config: {
          maxOutputTokens: 400,
          temperature: 0.2,
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      return {
        data: {
          id: String(id),
          role: 'assistant',
          text: res.text,
        },
        message: 'Response generated successfully',
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new HttpException(
        {
          message: 'Failed to generate response',
          errors: [error.message || 'Unknown error'],
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  create(createAcademixDto: CreateAcademixDto) {
    return 'This action adds a new academix';
  }

  findAll() {
    return `This action returns all academix`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academix`;
  }

  update(id: number, updateAcademixDto: UpdateAcademixDto) {
    return `This action updates a #${id} academix`;
  }

  remove(id: number) {
    return `This action removes a #${id} academix`;
  }
}
