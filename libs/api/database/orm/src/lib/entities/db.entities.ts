import { EntitySchema } from 'typeorm';

import {
  TripMaster,
  AccompliceMaster,
  AccompliceOverview,
  Name
} from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>,
  (<unknown>AccompliceMaster) as EntitySchema<unknown>,
  (<unknown>AccompliceOverview) as EntitySchema<unknown>,
  (<unknown>Name) as EntitySchema<unknown>
];
