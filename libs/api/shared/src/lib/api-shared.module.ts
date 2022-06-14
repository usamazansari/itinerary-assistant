import { Module } from '@nestjs/common';

import { CoordinatesHelper, ExtractorService, LocationHelper } from './helpers';
import { CoordinatesRepository, LocationRepository } from './repositories';
import { CoordinatesResolver, LocationResolver } from './resolvers';
import { CoordinatesService, LocationService } from './services';

@Module({
  providers: [
    ExtractorService,
    CoordinatesHelper,
    CoordinatesRepository,
    CoordinatesResolver,
    CoordinatesService,
    LocationHelper,
    LocationRepository,
    LocationResolver,
    LocationService
  ],
  exports: [
    CoordinatesRepository,
    CoordinatesResolver,
    CoordinatesService,
    LocationRepository,
    LocationResolver,
    LocationService
  ]
})
export class ApiSharedModule {}
