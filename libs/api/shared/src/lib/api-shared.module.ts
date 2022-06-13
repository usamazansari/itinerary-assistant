import { Module } from '@nestjs/common';

import { LocationRepository } from './repositories';
import { LocationResolver } from './resolvers';
import { LocationService } from './services';

@Module({
  providers: [LocationRepository, LocationResolver, LocationService],
  exports: [LocationRepository, LocationResolver, LocationService]
})
export class ApiSharedModule {}
