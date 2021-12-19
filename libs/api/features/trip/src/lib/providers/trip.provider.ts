import type { Provider } from '@nestjs/common';

import { Connection } from 'typeorm';
import type { Repository } from 'typeorm';

import { TripEntity } from '../imports/entities';
import { DATABASE_CONNECTION } from '../imports/constants';

import { TRIP_REPOSITORY } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TripProviders: Provider<any>[] = [
  {
    provide: TRIP_REPOSITORY,
    useFactory: (connection: Connection): Repository<TripEntity> => connection.getRepository(TripEntity),
    inject: [DATABASE_CONNECTION]
  }
];
