import { Module } from '@nestjs/common';

import {
  AddressRepository,
  LocationRepository,
  PersonRepository
} from './repositories';
import { AddressResolver, LocationResolver, PersonResolver } from './resolvers';
import { AddressService, LocationService, PersonService } from './services';

@Module({
  providers: [
    AddressRepository,
    AddressResolver,
    AddressService,
    LocationRepository,
    LocationResolver,
    LocationService,
    PersonRepository,
    PersonResolver,
    PersonService
  ]
})
export class PersonModule {}
