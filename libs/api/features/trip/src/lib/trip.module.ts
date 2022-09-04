import { Module } from '@nestjs/common';

import { CoreModule } from './imports/libraries';

import { TripHelper } from './helpers';
import { TripRepository } from './repositories';
import { TripResolver } from './resolvers';
import { CoreService, TripService } from './services';

@Module({
  imports: [CoreModule],
  providers: [
    CoreService,
    TripHelper,
    TripRepository,
    TripResolver,
    TripService
  ]
})
export class TripModule {}
