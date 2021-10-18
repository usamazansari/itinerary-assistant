import { Module } from '@nestjs/common';

import { ApiCoreModule, ApiEntityModule } from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as Modules from './modules';

@Module({
  imports: [
    ApiCoreModule,
    ApiEntityModule,
    Modules.TripModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
