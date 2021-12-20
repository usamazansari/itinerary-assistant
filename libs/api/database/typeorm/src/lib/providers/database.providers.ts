import { createConnection } from 'typeorm';

import { DBConnectionString } from '../constants';
import { DBConnections } from '../config';

export const DBProviders = [
  {
    provide: DBConnectionString,
    useFactory: async () => await createConnection(DBConnections)
  }
];
