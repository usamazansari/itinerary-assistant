import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Connection, Query } from 'cypher-query-builder';

import { NEO4J_CONNECTION_STRING } from '../../constants';

@Injectable()
class QueryRepositoryService implements OnApplicationShutdown {
  constructor(
    @Inject(NEO4J_CONNECTION_STRING) private readonly connection: Connection
  ) {}

  onApplicationShutdown(): void {
    this.connection.close();
  }

  queryBuilder(): Query {
    return this.connection.query();
  }
}

export { QueryRepositoryService };
