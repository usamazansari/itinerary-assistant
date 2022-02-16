import { Module } from '@nestjs/common';

import { TripController } from './controllers';
import { TripService } from './services';

import { TripProviders } from './providers';

@Module({
  imports: [],
  controllers: [TripController],
  providers: [...TripProviders, TripService]
})
export class TripModule {}
