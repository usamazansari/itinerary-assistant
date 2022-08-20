import { Module } from '@nestjs/common';

import { CoreModule, PersonModule } from './imports/libraries';

import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [CoreModule, PersonModule]
})
class AppModule {}

export { AppModule };
