import { Injectable } from '@nestjs/common';

import { Person } from './imports/models';

@Injectable()
class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to NestJS!' };
  }

  getPerson(): Person {
    return new Person({});
  }
}

export { AppService };
