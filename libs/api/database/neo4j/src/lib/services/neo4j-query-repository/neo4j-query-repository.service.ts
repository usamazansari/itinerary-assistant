import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Connection, Query } from 'cypher-query-builder';

import { NEO4J_CONNECTION } from '../../constants';

@Injectable()
export class Neo4jQueryRepositoryService implements OnApplicationShutdown {
  constructor(
    @Inject(NEO4J_CONNECTION) private readonly connection: Connection
  ) {}

  onApplicationShutdown(): void {
    console.log('Neo4j Shutdown');
    this.connection.close();
  }

  queryBuilder(): Query {
    return this.connection.query();
  }
}