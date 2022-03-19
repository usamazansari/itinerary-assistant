import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// import { TripMaster } from './imports/entities';

import { TripController } from './controllers';
import { TripService } from './services';

@Module({
  // imports: [TypeOrmModule.forFeature([TripMaster])],
  controllers: [TripController],
  providers: [TripService],
  exports: []
})
export class TripModule {}
