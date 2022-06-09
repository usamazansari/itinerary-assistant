import { Module } from '@nestjs/common';

import { PersonRepository } from './repositories';
import { PeopleResolver, PersonResolver } from './resolvers';
import { PersonService } from './services';

@Module({
  providers: [PeopleResolver, PersonRepository, PersonResolver, PersonService]
})
export class PersonModule {}
