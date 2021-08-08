import { Module } from '@nestjs/common';

import { ApiCoreModule } from '@itinerary-assistant/api/core';
import { ApiTripsModule } from '@itinerary-assistant/api/trips';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, ApiTripsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
