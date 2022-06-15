import { Module } from '@nestjs/common';

import { CoreModule, PersonModule, TripModule } from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, PersonModule, TripModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
