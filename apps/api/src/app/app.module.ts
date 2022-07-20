import { Module } from '@nestjs/common';

import { CoreModule, PersonModule } from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, PersonModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
