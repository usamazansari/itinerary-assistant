import { DynamicModule, Module } from '@nestjs/common';
import {
  ConfigModule
  // ConfigService
} from '@nestjs/config';
import { Connection } from 'cypher-query-builder';

import { NEO4J_CONNECTION, NEO4J_CONFIG } from './constants';
import {
  ConnectionWithDriver,
  Neo4jConfig,
  ConnectionErrorType
} from './models';
import { QueryRepositoryService } from './services';
import { createDatabaseConfig } from './utils';

@Module({
  providers: [QueryRepositoryService]
})
export class Neo4jModule {
  // static forRootAsync(config: Neo4jConfig): DynamicModule {
  static forRootAsync(): DynamicModule {
    return {
      module: Neo4jModule,
      imports: [ConfigModule],
      global: true,
      providers: [
        {
          provide: NEO4J_CONFIG,
          // inject: [ConfigService],
          // useFactory: (configService: ConfigService) => {
          // createDatabaseConfig(configService, config);
          // }
          useFactory: () => createDatabaseConfig()
        },
        {
          provide: NEO4J_CONNECTION,
          inject: [NEO4J_CONFIG],
          useFactory: async (config: Neo4jConfig) => {
            try {
              const {
                scheme,
                host,
                port,
                // database,
                username,
                password
              } = config;
              const connection = new Connection(`${scheme}://${host}:${port}`, {
                username,
                password
              }) as ConnectionWithDriver;

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
