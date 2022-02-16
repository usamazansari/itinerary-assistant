import { EntitySchema } from 'typeorm';

import { TripOverview, User } from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripOverview) as EntitySchema<unknown>,
  (<unknown>User) as EntitySchema<unknown>
];
