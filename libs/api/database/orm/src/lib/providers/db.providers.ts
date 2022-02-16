import { createConnection } from 'typeorm';

import { MySQLConfig } from '../config';
import { ConnectionString } from '../constants';

export const DB_PROVIDERS = [
  {
    provide: ConnectionString,
    useFactory: async () =>
      await createConnection({
        ...MySQLConfig
      })
  }
];
