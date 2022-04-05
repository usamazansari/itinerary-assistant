import { Module } from '@nestjs/common';
import { ApiDatabaseNeo4jService } from './api-database-neo4j.service';

@Module({
  controllers: [],
  providers: [ApiDatabaseNeo4jService],
  exports: [ApiDatabaseNeo4jService]
})
export class ApiDatabaseNeo4jModule {}
