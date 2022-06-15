import { Module } from '@nestjs/common';

import { GraphQLModule, Neo4jModule } from './imports/modules';

import { CoreController } from './controllers';
import { CoreService } from './services';

@Module({
  controllers: [CoreController],
  imports: [GraphQLModule, Neo4jModule.forRootAsync()],
  providers: [CoreService],
  exports: [GraphQLModule, Neo4jModule]
})
export class CoreModule {}
