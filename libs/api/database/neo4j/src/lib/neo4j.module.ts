import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'cypher-query-builder';

import { ENVIRONMENT_VARIABLES, NEO4J_CONNECTION_STRING } from './constants';
import { ConnectionErrorType, ConnectionWithDriver } from './models';
import { QueryRepositoryService } from './services';
import { createDatabaseConfig } from './utils';

@Module({
  providers: [QueryRepositoryService]
})
export class Neo4jModule {
  static forRootAsync(): DynamicModule {
    return {
      module: Neo4jModule,
      imports: [ConfigModule],
      global: true,
      providers: [
        {
          provide: NEO4J_CONNECTION_STRING,
          inject: [ConfigService],
          useFactory: async (service: ConfigService) => {
            const environment = service.get(
              ENVIRONMENT_VARIABLES.KEYS.NODE_ENV
            );
            console.log(
              `Environment: ${
                environment ?? 'undefined - fallback to development'
              }`
            );

            const { uri, username, password } = createDatabaseConfig(
              service,
              environment
            );
            const connection = new Connection(uri ?? '', {
              username,
              password
            }) as ConnectionWithDriver;

            try {
              console.log(`Connecting to Neo4j`);
              const result = await connection.driver.verifyConnectivity();
              console.log(`Connection Successful at: ${result.address}`);

              return connection;
            } catch (error: unknown) {
              console.log(
                `Error in connection - ${(<ConnectionErrorType>error).code}`
              );
              console.log(`Could not connect to Neo4j`);
              return null;
            }
          }
        }
      ],
      exports: [QueryRepositoryService]
    };
  }
}
