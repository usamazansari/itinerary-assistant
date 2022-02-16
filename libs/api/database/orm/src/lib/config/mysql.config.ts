import { ConnectionOptions } from 'typeorm';

import { Entities } from '../entities';

const Config: ConnectionOptions = {
  type: 'mysql',
  entities: Entities,
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT ?? '3306', 10) || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DEV_DATABASE || 'nestjs_dev',
  synchronize: true
};

export { Config as MySQLConfig };
