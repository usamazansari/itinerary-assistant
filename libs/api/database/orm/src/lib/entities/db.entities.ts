import { EntitySchema } from 'typeorm';

import {
  TripMaster,
  User,
  Coordinates,
  Location,
  Name,
  Photo,
  Tenure,
  Timezone
} from '../imports/entities';

export const Entities: EntitySchema<unknown>[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>,
  (<unknown>User) as EntitySchema<unknown>,
  (<unknown>Coordinates) as EntitySchema<unknown>,
  (<unknown>Timezone) as EntitySchema<unknown>,
  (<unknown>Location) as EntitySchema<unknown>,
  (<unknown>Name) as EntitySchema<unknown>,
  (<unknown>Tenure) as EntitySchema<unknown>,
  (<unknown>Photo) as EntitySchema<unknown>
];
