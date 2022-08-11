import { Module } from '@nestjs/common';

import { GraphQLModule } from './imports/libraries';

@Module({
  imports: [GraphQLModule],
  exports: [GraphQLModule]
})
export class CoreModule {}
