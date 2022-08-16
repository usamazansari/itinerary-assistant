import { Module } from '@nestjs/common';

import { CoreModule, PersonModule } from './imports/libraries';

@Module({
  imports: [CoreModule, PersonModule]
})
class AppModule {}

export { AppModule };
