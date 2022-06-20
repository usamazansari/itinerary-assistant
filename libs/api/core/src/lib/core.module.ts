import { Module } from '@nestjs/common';

import { GraphQLModule, Neo4jModule } from './imports/modules';

import { CoreService } from './services';

@Module({
  imports: [GraphQLModule, Neo4jModule.forRootAsync()],
  providers: [CoreService],
  exports: [GraphQLModule, Neo4jModule]
})
export class CoreModule {}
