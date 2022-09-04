import { Module } from '@nestjs/common';

import { CoreModule } from './imports/libraries';

import { AddressHelper, PersonHelper } from './helpers';
import { AddressRepository, PersonRepository } from './repositories';
import { AddressResolver, PersonResolver } from './resolvers';
import { AddressService, CoreService, PersonService } from './services';

@Module({
  imports: [CoreModule],
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
