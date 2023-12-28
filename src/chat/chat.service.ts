import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class ChatService {
  constructor(private readonly configService: ConfigService) {}

  async postQuestion(question: string) {
    const geminiApiKey = this.configService.get<string>('GEMINI_API_KEY')
    const genAI = new GoogleGenerativeAI(geminiApiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-pro"})

    const prompt = `Consider yourself as a Mental Health Expert. Please answer the following question - ${question}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return { message: text }
  }
}
