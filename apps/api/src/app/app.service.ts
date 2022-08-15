import { Injectable } from '@nestjs/common';

import { Person } from './imports/models';
import { EramPerson, UsamaPerson } from './imports/seed';

const people: Person[] = [UsamaPerson, EramPerson];

@Injectable()
class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to NestJS!' };
  }

  getPerson(): Person {
    return Math.random() > 0.5 ? people[0] : people[1];
  }
}

export { AppService };
