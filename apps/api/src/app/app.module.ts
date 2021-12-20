import { Module } from '@nestjs/common';

import * as Libraries from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    Libraries.ApiCoreModule,
    Libraries.TripModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
