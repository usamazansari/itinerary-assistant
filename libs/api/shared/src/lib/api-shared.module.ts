import { Module } from '@nestjs/common';

import { ExtractorService, LocationHelper } from './helpers';
import { LocationRepository } from './repositories';
import { LocationResolver } from './resolvers';
import { LocationService } from './services';

@Module({
  providers: [
    ExtractorService,
    LocationHelper,
    LocationRepository,
    LocationResolver,
    LocationService
  ],
  exports: [LocationRepository, LocationResolver, LocationService]
})
export class ApiSharedModule {}
