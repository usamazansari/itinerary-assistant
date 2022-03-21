import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripController } from './controllers';
import { TripService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [TripController],
  providers: [TripService],
  exports: []
})
export class TripModule {}
