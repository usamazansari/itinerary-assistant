import { ConnectionOptions } from 'typeorm';

const Config: ConnectionOptions = {
  type: 'sqlite',
  entities: [],
  database: 'tmp/trips.db',
  synchronize: true,
  logging: true
};

export { Config as SQLiteConfig };
