import { Module } from '@nestjs/common';

import { GraphQLModule, Neo4jModule } from './imports/libraries';

@Module({
  imports: [GraphQLModule, Neo4jModule.forRootAsync()],
  exports: [GraphQLModule, Neo4jModule]
})
export class CoreModule {}
