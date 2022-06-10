import { Module } from '@nestjs/common';

import { PersonRepository } from './repositories';
import { PersonResolver } from './resolvers';
import { PersonService } from './services';

@Module({
  providers: [PersonRepository, PersonResolver, PersonService]
})
export class PersonModule {}
