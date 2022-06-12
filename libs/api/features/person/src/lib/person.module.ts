import { Module } from '@nestjs/common';

import {
  AddressRepository,
  IdentificationRepository,
  LocationRepository,
  PersonRepository
} from './repositories';
import {
  AddressResolver,
  IdentificationResolver,
  LocationResolver,
  PersonResolver
} from './resolvers';
import { PersonHelper } from './helpers';
import {
  AddressService,
  IdentificationService,
  LocationService,
  PersonService
} from './services';

@Module({
  providers: [
    AddressRepository,
    AddressResolver,
    AddressService,
    IdentificationRepository,
    IdentificationResolver,
    IdentificationService,
    LocationRepository,
    LocationResolver,
    LocationService,
    PersonHelper,
    PersonRepository,
    PersonResolver,
    PersonService
  ]
})
export class PersonModule {}
