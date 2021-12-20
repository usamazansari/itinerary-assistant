import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constants';
import { CONNECTIONS } from '../config';

export const DBProviders = [
  {
    provide: DATABASE_CONNECTION,
    // provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(CONNECTIONS)
  }
];

// TODO: Usama Ansari - 🗑️ Cleanup required
