import { Injectable } from '@nestjs/common';

import { Person } from './imports/models';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to NestJS!' };
  }

  getPerson(): Person {
    return new Person({});
  }
}
