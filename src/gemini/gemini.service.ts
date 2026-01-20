import { Injectable } from '@nestjs/common';
import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  private ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  async generate(prompt: string) {
    try {
      const template = `You are a school ERP assistant.
Section record fields:
section_name, class_name, teacher_name, capacity.
only requierd fields ask.
Final answer in JSON only.
User: ${prompt}
`;

      const res = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: template,
        config: {
          maxOutputTokens: 200,
          temperature: 0.2,
        },
      });

      return res.text;
    } catch (e) {
      console.log(e);
    }
  }

  create(createGeminiDto: CreateGeminiDto) {
    return 'This action adds a new gemini';
  }

  findAll() {
    return `This action returns all gemini`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gemini`;
  }

  update(id: number, updateGeminiDto: UpdateGeminiDto) {
    return `This action updates a #${id} gemini`;
  }

  remove(id: number) {
    return `This action removes a #${id} gemini`;
  }
}
