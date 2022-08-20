import { Resolver } from '@nestjs/graphql';

import { TripEntity as Entity } from '../../entities';
import { TripService } from '../../services';

@Resolver(() => Entity)
export class TripResolver {
  constructor(private _service: TripService) {}
}
