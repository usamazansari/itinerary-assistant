import { EntitySchema } from 'typeorm';

import {
  Identification,
  Photo,
  SocialConnection,
  Tenure,
  TripMaster
} from '../imports/entities';

export const Entities: EntitySchema<unknown>[] = [
  (<unknown>Identification) as EntitySchema<unknown>,
  (<unknown>Photo) as EntitySchema<unknown>,
  (<unknown>SocialConnection) as EntitySchema<unknown>,
  (<unknown>Tenure) as EntitySchema<unknown>,

  (<unknown>TripMaster) as EntitySchema<unknown>
];
