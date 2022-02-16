import { ConnectionOptions, EntitySchema } from 'typeorm';

import { sqlite } from './sqlite.config';
import { postgres } from './postgres.config';
import { mysql } from './mysql.config';

export const DBMap: Map<
  string,
  (
    entities: (string | (() => unknown) | EntitySchema<unknown>)[]
  ) => ConnectionOptions
> = new Map();
DBMap.set('sqlite', sqlite);
DBMap.set('postgres', postgres);
DBMap.set('mysql', mysql);
