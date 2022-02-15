import { ConnectionOptions } from 'typeorm';

import { sqlite } from './sqlite.config';
import { postgres } from './postgres.config';
import { mysql } from './mysql.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const DBMap: Map<
  string,
  (entities: unknown[]) => ConnectionOptions
> = new Map();
DBMap.set('sqlite', sqlite);
DBMap.set('postgres', postgres);
DBMap.set('mysql', mysql);
