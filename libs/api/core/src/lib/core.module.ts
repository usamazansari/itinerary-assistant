import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule, Neo4jModule } from './imports/libraries';

import { LoggerService } from './services';

@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule, Neo4jModule.forRootAsync()],
  providers: [LoggerService],
  exports: [ConfigModule, GraphQLModule, Neo4jModule, LoggerService]
})
export class CoreModule {
  constructor(private _logger: LoggerService) {
    this._logger.warn('Brief logging is prevented in production', 'CoreModule');
  }
}
