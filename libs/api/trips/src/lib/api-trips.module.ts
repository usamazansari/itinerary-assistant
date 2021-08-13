import { Module } from '@nestjs/common';

import * as Controllers from './controllers';
import * as Services from './services';

@Module({
  controllers: [Controllers.TripsController],
  providers: [Services.TripsService],
  exports: []
})
export class ApiTripsModule {}
