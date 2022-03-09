import { EntitySchema } from 'typeorm';

import {
  TripMaster,
  UserMaster,
  Coordinates,
  Location,
  Name,
  Tenure,
  Timezone
} from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>,
  (<unknown>UserMaster) as EntitySchema<unknown>,
  (<unknown>Coordinates) as EntitySchema<unknown>,
  (<unknown>Timezone) as EntitySchema<unknown>,
  (<unknown>Location) as EntitySchema<unknown>,
  (<unknown>Name) as EntitySchema<unknown>,
  (<unknown>Tenure) as EntitySchema<unknown>
];
