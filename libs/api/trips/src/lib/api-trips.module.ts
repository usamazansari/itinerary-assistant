import { Module } from '@nestjs/common';
import { TripsController } from './controllers';
import { TripsService } from './services';

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  exports: []
})
export class ApiTripsModule {}
