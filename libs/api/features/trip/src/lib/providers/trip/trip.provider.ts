import type { Provider } from '@nestjs/common';

import { Connection } from 'typeorm';
import type { Repository } from 'typeorm';

import { TripOverview } from '../../imports/entities';

import { TRIP_REPOSITORY } from '../../constants';

export const TripProviders: Provider<unknown>[] = [
  {
    provide: TRIP_REPOSITORY,
    useFactory: (connection: Connection): Repository<TripOverview> =>
      connection.getRepository(TripOverview),
    inject: []
  }
];
