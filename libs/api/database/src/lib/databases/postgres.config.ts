import { ConnectionOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function connection(entities: any): ConnectionOptions {
  return {
    type: 'postgres',
    entities,
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DATABASE || 'postgres',
    synchronize: true,
    dropSchema: !!process.env.DROP_DB
  };
}
