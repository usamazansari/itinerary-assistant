import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripOverview } from './imports/entities';

import { TripController } from './controllers';
import { TripService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([TripOverview])],
  controllers: [TripController],
  providers: [TripService],
  exports: []
})
export class TripModule {}
