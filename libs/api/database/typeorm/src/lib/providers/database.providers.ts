import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constants';
import { CONNECTIONS } from '../config';

export const DATABASE_PROVIDERS = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => createConnection(CONNECTIONS)
  }
];
