import { Module } from '@nestjs/common';

import { PersonHelper } from './helpers';
import { PersonRepository } from './repositories';
import { PersonResolver } from './resolvers';
import { CoreService, PersonService } from './services';

@Module({
  providers: [
    CoreService,
    PersonHelper,
    PersonResolver,
    PersonRepository,
    PersonService
  ]
})
export class PersonModule {}
