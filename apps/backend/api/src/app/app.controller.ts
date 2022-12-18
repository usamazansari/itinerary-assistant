import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get('')
  sanity() {
    return { message: 'API ping successful!' };
  }
}
