import { Module } from '@nestjs/common';

import { ApiSharedModule } from './imports/modules';
import {
  AddressRepository,
  IdentificationRepository,
  PersonRepository,
  SocialConnectionRepository
} from './repositories';
import {
  AddressResolver,
  IdentificationResolver,
  PersonResolver,
  SocialConnectionResolver
} from './resolvers';
import {
  AddressHelper,
  ExtractorService,
  IdentificationHelper,
  PersonHelper,
  SocialConnectionHelper
} from './helpers';
import {
  AddressService,
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
