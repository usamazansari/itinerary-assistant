import { Module } from '@nestjs/common';

import { AddressHelper, PersonHelper } from './helpers';
import { AddressRepository, PersonRepository } from './repositories';
import { AddressResolver, PersonResolver } from './resolvers';
import { AddressService, CoreService, PersonService } from './services';

@Module({
  providers: [
    AddressHelper,
    AddressRepository,
    AddressResolver,
    AddressService,
    CoreService,
    PersonHelper,
    PersonRepository,
    PersonResolver,
    PersonService
  ]
})
export class PersonModule {}
