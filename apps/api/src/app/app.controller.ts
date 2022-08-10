import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Person } from './imports/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greeting')
  getData(): { message: string } {
    return this.appService.getData();
  }

  @Get('person')
  getPerson(): Person {
    return this.appService.getPerson();
  }
}
