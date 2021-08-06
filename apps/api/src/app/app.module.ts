import { Module } from '@nestjs/common';

import { ApiCoreModule } from '@itinerary-assistant/api/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
