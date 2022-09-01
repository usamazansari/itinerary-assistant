import { Module } from '@nestjs/common';

import { CoreModule, PersonModule, TripModule } from './imports/libraries';

import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [CoreModule, PersonModule, TripModule]
})
class AppModule {}

export { AppModule };
