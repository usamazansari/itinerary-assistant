import { Module } from '@nestjs/common';

import { AddressRepository, PersonRepository } from './repositories';
import { AddressResolver, PersonResolver } from './resolvers';
import { AddressService, PersonService } from './services';

@Module({
  providers: [
    AddressRepository,
    AddressResolver,
    AddressService,
    PersonRepository,
    PersonResolver,
    PersonService
  ]
})
export class PersonModule {}
