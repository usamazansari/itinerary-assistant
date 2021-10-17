import { join } from 'path';
import { DATABASE } from './databases';

export const ENTITIES = [
  `${join(
    __dirname,
    'libs',
    'api',
    '**',
    '*.entity{.ts,.js}'
  )}`,
  `${join(
    __dirname,
    'apps',
    'api',
    '**',
    '*.entity{.ts,.js}'
  )}`
];

const TYPE = process.env.DB_TYPE || 'sqlite';

export const CONNECTIONS = DATABASE[TYPE](ENTITIES);
