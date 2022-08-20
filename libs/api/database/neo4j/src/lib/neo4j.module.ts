import { DynamicModule, Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'cypher-query-builder';

import { ENVIRONMENT_VARIABLES, NEO4J_CONNECTION } from './constants';
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
          provide: NEO4J_CONNECTION,
          inject: [ConfigService],
          useFactory: async (service: ConfigService) => {
            const environment = service.get(
              ENVIRONMENT_VARIABLES.KEYS.NODE_ENV
            );
            Logger.debug(`Environment: ${environment}`, 'Neo4jModule');

            const { uri, username, password } = createDatabaseConfig(
              service,
              environment
            );
            const connection = new Connection(uri ?? '', {
              username,
              password
            }) as ConnectionWithDriver;

            try {
              Logger.log(`Connecting to Neo4j`, 'Neo4jModule');
              const result = await connection.driver.verifyConnectivity();
              Logger.log(
                `Connection Successful at: ${result.address}`,
                'Neo4jModule'
              );

              return connection;
            } catch (error: unknown) {
              Logger.error(
                `Error in connection - ${(<ConnectionErrorType>error).code}`,
                'Neo4jModule'
              );
              Logger.error(`Could not connect to Neo4j`, 'Neo4jModule');
              return null;
            }
          }
        }
      ],
      exports: [QueryRepositoryService]
    };
  }
}
