import { Connection } from 'typeorm';

import { TripEntity } from '../imports/entities';
import { DATABASE_CONNECTION } from '../imports/constants';

import { REPOSITORY } from '../constants';

export const TripProviders = [
  {
    provide: REPOSITORY,
    useFactory: async (connection: Connection) => connection.getRepository(TripEntity),
    inject: [DATABASE_CONNECTION]
  }
];
