import type { Provider } from '@nestjs/common';

import { Connection } from 'typeorm';
import type { Repository } from 'typeorm';

import { TripOverview } from '../imports/entities';
import { DBConnectionString } from '../imports/constants';

import { TRIP_REPOSITORY } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TripProviders: Provider<any>[] = [
  {
    provide: TRIP_REPOSITORY,
    useFactory: (connection: Connection): Repository<TripOverview> => connection.getRepository(TripOverview),
    inject: [DBConnectionString]
  }
];
