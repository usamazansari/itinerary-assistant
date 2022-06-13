import { Module } from '@nestjs/common';

import { ApiSharedModule } from './imports/modules';
import {
  AddressRepository,
  IdentificationRepository,
  PersonRepository
} from './repositories';
import {
  AddressResolver,
  IdentificationResolver,
  PersonResolver
} from './resolvers';
import { PersonHelper } from './helpers';
import {
  AddressService,
  IdentificationService,
  PersonService
} from './services';

@Module({
  imports: [ApiSharedModule],
  providers: [
    AddressRepository,
    AddressResolver,
    AddressService,
    IdentificationRepository,
    IdentificationResolver,
    IdentificationService,
    PersonHelper,
    PersonRepository,
    PersonResolver,
    PersonService
  ]
})
export class PersonModule {}