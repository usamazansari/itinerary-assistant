import { ConnectionOptions } from 'typeorm';
import type { EntitySchema } from 'typeorm';

import { DBMap } from '../databases';

import { TripOverview, User } from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripOverview) as EntitySchema<unknown>,
  (<unknown>User) as EntitySchema<unknown>
];

// const TYPE = process.env.DB_TYPE || 'sqlite';
const DBType = process.env.DB_TYPE || 'mysql';
// const TYPE = process.env.DB_TYPE || 'postgres';

const ConnectionOption = DBMap.get(DBType);
const FallbackConnectionOption: ConnectionOptions = {
  type: 'sqlite',
  database: './db.sqlite'
};

export const DBConnections: ConnectionOptions = !!ConnectionOption
  ? ConnectionOption(Entities)
  : FallbackConnectionOption;
