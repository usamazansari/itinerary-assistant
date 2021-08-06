import { Module } from '@nestjs/common';

import { ApiCoreModule } from '@itinerary-assistant/api/core';
import { ApiTripModule } from '@itinerary-assistant/api/trip';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, ApiTripModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
