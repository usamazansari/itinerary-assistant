import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GraphQLModule, Neo4jModule } from './imports/libraries';

import { ENVIRONMENT_VARIABLES } from './constants';

@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule, Neo4jModule.forRootAsync()],
  exports: [ConfigModule, GraphQLModule, Neo4jModule]
})
export class CoreModule {
  constructor(private _service: ConfigService) {
    const env = this._service.get(ENVIRONMENT_VARIABLES.KEYS.NODE_ENV);
    if (env === ENVIRONMENT_VARIABLES.VALUES.PRODUCTION) {
      // https://javascript.plainenglish.io/how-to-use-nestjs-logger-2a9cb107bce9
      Logger.warn('Brief logging is prevented in production', 'CoreModule');
    }
  }
}
