import { EntitySchema } from 'typeorm';

import {
  Address,
  Coordinates,
  Identification,
  Location,
  UserName,
  Photo,
  SocialConnection,
  Tenure,
  Timezone,
  User
  // TripMaster
} from '../imports/entities';

export const Entities: EntitySchema<unknown>[] = [
  (<unknown>Address) as EntitySchema<unknown>,
  (<unknown>Coordinates) as EntitySchema<unknown>,
  (<unknown>Identification) as EntitySchema<unknown>,
  (<unknown>Location) as EntitySchema<unknown>,
  (<unknown>UserName) as EntitySchema<unknown>,
  (<unknown>Photo) as EntitySchema<unknown>,
  (<unknown>SocialConnection) as EntitySchema<unknown>,
  (<unknown>Tenure) as EntitySchema<unknown>,
  (<unknown>Timezone) as EntitySchema<unknown>,
  (<unknown>User) as EntitySchema<unknown>

  // (<unknown>TripMaster) as EntitySchema<unknown>
];
