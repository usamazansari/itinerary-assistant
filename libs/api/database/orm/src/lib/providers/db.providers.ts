import { createConnection } from 'typeorm';

import { MySQLConfig } from '../config';
import { ConnectionString } from '../constants';

/**
 * @deprecated No longer used.
 */
export const DB_PROVIDERS = [
  {
    provide: ConnectionString,
    useFactory: async () =>
      await createConnection({
        ...MySQLConfig
      })
  }
];
