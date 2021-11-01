import { join } from 'path';
import { DATABASE } from '../databases';

export const ENTITIES = [
  `${join(
    process.cwd(),
    'apps',
    'api',
    '**',
    '*.{js|ts}'
  )}`,
  `${join(
    process.cwd(),
    'libs',
    'api',
    '**',
    '*.{js|ts}'
  )}`
];

// const TYPE = process.env.DB_TYPE || 'sqlite';
const TYPE = process.env.DB_TYPE || 'mysql';
// const TYPE = process.env.DB_TYPE || 'postgres';


export const CONNECTIONS = DATABASE[TYPE](ENTITIES);
