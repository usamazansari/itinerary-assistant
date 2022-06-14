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
import {
  AddressHelper,
  ExtractorService,
  IdentificationHelper,
  PersonHelper
} from './helpers';
import {
  AddressService,
  IdentificationService,
  PersonService
} from './services';

@Module({
  imports: [ApiSharedModule],
  providers: [
    AddressHelper,
    AddressRepository,
    AddressResolver,
    AddressService,
    ExtractorService,
    IdentificationHelper,
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
