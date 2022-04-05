// import { ConfigService } from '@nestjs/config';
import { Neo4jConfig } from '../models';

export const createDatabaseConfig = (
  // service: ConfigService,
  config: Neo4jConfig = new Neo4jConfig({})
): Neo4jConfig => config;
