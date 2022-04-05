import { Module } from '@nestjs/common';

import { QueryService } from './services';

@Module({
  controllers: [],
  providers: [QueryService],
  exports: [QueryService]
})
export class Neo4jModule {}
