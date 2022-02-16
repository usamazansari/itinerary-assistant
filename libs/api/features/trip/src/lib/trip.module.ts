import { Module } from '@nestjs/common';

import { TypeormModule } from './imports/modules';

import { TripController } from './controllers';
import { TripService } from './services';

import { TripProviders } from './providers';

@Module({
  imports: [TypeormModule],
  controllers: [TripController],
  providers: [...TripProviders, TripService]
})
export class TripModule {}
