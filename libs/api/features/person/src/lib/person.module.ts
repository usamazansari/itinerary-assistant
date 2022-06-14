import { Module } from '@nestjs/common';

import { ApiSharedModule } from './imports/modules';
import {
  AddressRepository,
  DemographicsRepository,
  IdentificationRepository,
  PersonRepository,
  SocialConnectionRepository
} from './repositories';
import {
  AddressResolver,
  DemographicsResolver,
  IdentificationResolver,
  PersonResolver,
  SocialConnectionResolver
} from './resolvers';
import {
  AddressHelper,
  DemographicsHelper,
  ExtractorService,
  IdentificationHelper,
  PersonHelper,
  SocialConnectionHelper
} from './helpers';
import {
  AddressService,
  DemographicsService,
  IdentificationService,
  PersonService,
  SocialConnectionService
} from './services';

@Module({
  imports: [ApiSharedModule],
  providers: [
    AddressHelper,
    AddressRepository,
    AddressResolver,
    AddressService,
    DemographicsRepository,
    DemographicsResolver,
    DemographicsHelper,
    DemographicsService,
    ExtractorService,
    IdentificationHelper,
    IdentificationRepository,
    IdentificationResolver,
    IdentificationService,
    PersonHelper,
    PersonRepository,
    PersonResolver,
    PersonService,
    SocialConnectionHelper,
    SocialConnectionResolver,
    SocialConnectionRepository,
    SocialConnectionService
  ]
})
export class PersonModule {}
