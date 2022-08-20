import { Module } from '@nestjs/common';

import { TripHelper } from './helpers';
import { TripRepository } from './repositories';
import { TripResolver } from './resolvers';
import { CoreService, TripService } from './services';

@Module({
  providers: [
    CoreService,
    TripHelper,
    TripRepository,
    TripResolver,
    TripService
  ]
})
export class TripModule {}
