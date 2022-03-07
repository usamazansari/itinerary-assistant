import { EntitySchema } from 'typeorm';

import {
  TripMaster,
  AccompliceMaster,
  AccompliceOverview
} from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>,
  (<unknown>AccompliceMaster) as EntitySchema<unknown>,
  (<unknown>AccompliceOverview) as EntitySchema<unknown>
];
