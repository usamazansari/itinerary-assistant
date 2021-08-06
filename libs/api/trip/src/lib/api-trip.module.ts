import { Module } from '@nestjs/common';
import { TripController } from './controllers';
import { TripService } from './services';

@Module({
  controllers: [TripController],
  providers: [TripService],
  exports: []
})
export class ApiTripModule {}
