import { EntitySchema } from 'typeorm';

import { TripMaster } from '../imports/entities';

export const Entities: EntitySchema<unknown>[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>
];
