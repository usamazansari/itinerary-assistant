import { Module } from '@nestjs/common';

import { CoreModule, PersonModule } from './imports/libraries';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [CoreModule, PersonModule],
  controllers: [AppController],
  providers: [AppService, AppResolver]
})
class AppModule {}

export { AppModule };
