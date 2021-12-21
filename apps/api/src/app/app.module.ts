import { Module } from '@nestjs/common';

import { ApiCoreModule, TripModule } from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ApiCoreModule,
    TripModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
