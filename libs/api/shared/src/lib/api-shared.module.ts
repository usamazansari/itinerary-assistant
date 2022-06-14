import { Module } from '@nestjs/common';

import {
  CoordinatesHelper,
  ExtractorService,
  LocationHelper,
  TenureHelper
} from './helpers';
import {
  CoordinatesRepository,
  LocationRepository,
  TenureRepository
} from './repositories';
import {
  CoordinatesResolver,
  LocationResolver,
  TenureResolver
} from './resolvers';
import { CoordinatesService, LocationService, TenureService } from './services';

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
    LocationService,
    TenureHelper,
    TenureRepository,
    TenureResolver,
    TenureService
  ],
  exports: [
    CoordinatesRepository,
    CoordinatesResolver,
    CoordinatesService,
    LocationRepository,
    LocationResolver,
    LocationService,
    TenureRepository,
    TenureResolver,
    TenureService
  ]
})
export class ApiSharedModule {}
