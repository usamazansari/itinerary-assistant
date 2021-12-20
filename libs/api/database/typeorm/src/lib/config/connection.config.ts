// import { join } from 'path';
// import { DATABASE } from '../databases';

import type { ConnectionOptions } from 'typeorm';

import {
  TripEntity // ,
  // UserEntity
} from '../imports/entities';

export const ENTITIES = [
  // `${join(
  //   process.cwd(),
  //   'apps',
  //   'api',
  //   '**',
  //   '*.{js|ts}'
  // )}`,
  // `${join(
  //   process.cwd(),
  //   'libs',
  //   'api',
  //   '**',
  //   '*.{js|ts}'
  // )}`
  // UserEntity
];

// const TYPE = process.env.DB_TYPE || 'sqlite';
// const TYPE = process.env.DB_TYPE || 'mysql';
// const TYPE = process.env.DB_TYPE || 'postgres';


// export const CONNECTIONS = DATABASE[TYPE](ENTITIES);

// export const CONNECTIONS: ConnectionOptions = {
// type: 'mysql' // ,
// entities: [...ENTITIES],
// host: process.env.MYSQL_HOST || 'localhost',
// port: +(process.env.MYSQL_PORT ?? '3306') || 3306,
// username: process.env.MYSQL_USER || 'root',
// password: process.env.MYSQL_PASSWORD || 'root',
// database: process.env.MYSQL_DEV_DATABASE || 'nestjs_dev'
// };

export const CONNECTIONS: ConnectionOptions = {
  database: process.env.MYSQL_DEV_DATABASE || 'nestjs_dev',
  entities: [
    TripEntity // ,
    // UserEntity
  ],
  host: process.env.MYSQL_HOST || 'localhost',
  password: process.env.MYSQL_PASSWORD || 'root',
  port: +(process.env.MYSQL_PORT ?? '3306') || 3306,
  type: 'mysql',
  username: process.env.MYSQL_USER || 'root'
};

// TODO: Usama Ansari - 🗑️ Cleanup required
