import { EntitySchema } from 'typeorm';

import {
  TripMaster,
  UserMaster
  // UserOverview,
  // Name
} from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>,
  (<unknown>UserMaster) as EntitySchema<unknown>
  // (<unknown>UserOverview) as EntitySchema<unknown>,
  // (<unknown>Name) as EntitySchema<unknown>
];
