import { Module } from '@nestjs/common';

import { ApiCoreModule } from '@itinerary-assistant/api/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as Modules from './modules';

@Module({
  imports: [ApiCoreModule, Modules.TripModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
