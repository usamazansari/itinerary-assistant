import { ConnectionOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function connection(entities: any): ConnectionOptions {
  return {
    type: 'sqlite',
    entities,
    database: 'tmp/trips.db',
    synchronize: true,
    logging: true
  };
}

export { connection as sqlite };
