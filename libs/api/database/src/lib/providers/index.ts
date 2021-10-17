import { createConnection } from 'typeorm';
import { DB_CONNECTION_TOKEN } from '../constants';
import { CONNECTIONS } from '../config';

export const DB_PROVIDERS = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: async () => createConnection(CONNECTIONS)
  }
];
