import { Module } from '@nestjs/common';

import { CoreModule, TripModule, UserModule } from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, TripModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
