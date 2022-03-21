import { EntitySchema } from 'typeorm';

import {
  Photo,
  SocialConnection,
  TripMaster
} from '../imports/entities';

export const Entities: EntitySchema<unknown>[] = [
  (<unknown>Photo) as EntitySchema<unknown>,
  (<unknown>SocialConnection) as EntitySchema<unknown>,

  (<unknown>TripMaster) as EntitySchema<unknown>
];
