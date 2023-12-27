import { BadRequestException, Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ChatService } from './chat.service';
import * as _ from 'lodash';

interface QuestionDto {
  question: string
}

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  sanitize(question: string): string {
    const sanitizedQuestion = question.replace(/[^a-zA-Z0-9 .,?!-]/g, '')
    const escapedQuestion = _.escape(sanitizedQuestion)
  
    if (escapedQuestion.length > 255) {
      throw new BadRequestException('Question exceeds maximum length');
    }
  
    return escapedQuestion
  }
  
  
  @Post()
  async ask(
    @Body(ValidationPipe) questionDto: QuestionDto): Promise<any> {
    const sanitizedQuestion = this.sanitize(questionDto.question);
    console.log(`User asked ${questionDto.question}, sanitized: ${sanitizedQuestion}`);

    return this.chatService.postQuestion(sanitizedQuestion);
  }
}
