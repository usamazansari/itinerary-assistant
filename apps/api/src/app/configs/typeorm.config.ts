import type { ConnectionOptions } from 'typeorm';

// import { TripEntity, UserEntity } from '../imports/entities';

export const DB_CONNECTION: ConnectionOptions = {
  type: 'mysql',
  entities: [],
  host: process.env.MYSQL_HOST || 'localhost',
  port: +(process.env.MYSQL_PORT ?? '3306') || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DEV_DATABASE || 'nestjs_dev'
};

// TODO: Usama Ansari - 🗑️ Cleanup required
