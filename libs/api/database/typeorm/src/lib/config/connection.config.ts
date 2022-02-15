import { ConnectionOptions } from 'typeorm';

import { DBMap } from '../databases';

import { TripOverview, User } from '../imports/entities';

export const Entities = [TripOverview, User];

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
