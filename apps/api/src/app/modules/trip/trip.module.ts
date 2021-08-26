import { Module } from '@nestjs/common';

import * as Controllers from './controllers';
import * as Services from './services/trip/trip.service';

@Module({
  controllers: [Controllers.TripController],
  providers: [Services.TripService]
})
export class TripModule {}
