import { EntitySchema } from 'typeorm';

import { SocialConnection, TripMaster } from '../imports/entities';

export const Entities: EntitySchema<unknown>[] = [
  (<unknown>SocialConnection) as EntitySchema<unknown>,

  (<unknown>TripMaster) as EntitySchema<unknown>
];
