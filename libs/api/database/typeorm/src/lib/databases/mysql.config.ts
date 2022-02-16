import { ConnectionOptions, EntitySchema } from 'typeorm';

function connection(
  entities: (string | (() => unknown) | EntitySchema<unknown>)[]
): ConnectionOptions {
  return {
    type: 'mysql',
    entities,
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT ?? '3306', 10) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DEV_DATABASE || 'nestjs_dev'
  };
}

export { connection as mysql };
