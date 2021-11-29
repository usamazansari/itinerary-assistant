import type { Provider } from '@nestjs/common';

import { Connection } from 'typeorm';

import { TripEntity } from '../imports/entities';
import { DATABASE_CONNECTION } from '../imports/constants';

import { REPOSITORY } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TripProviders: Provider<any>[] = [
  {
    provide: REPOSITORY,
    useFactory: async (connection: Connection) => connection.getRepository(TripEntity),
    inject: [DATABASE_CONNECTION]
  }
];
