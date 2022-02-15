import { Inject, Module, OnModuleDestroy } from '@nestjs/common';

import { DBConnectionString } from './constants';
import { DBProviders } from './providers';

@Module({
  providers: [...DBProviders],
  exports: [...DBProviders, DBConnectionString]
})
export class ApiDatabaseTypeormModule implements OnModuleDestroy {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(DBConnectionString) private readonly dbConnection: any
  ) {}

  public onModuleDestroy(): void {
    this.dbConnection.close();
  }
}
