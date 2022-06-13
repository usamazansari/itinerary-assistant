import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import {
  Coordinates,
  Location as Entity,
  Timezone
} from '../../imports/entities';
import { Location as LocationModel } from '../../imports/models';

import { LocationService } from '../../services';

@Resolver(() => Entity)
export class LocationResolver {
  constructor(private _service: LocationService) {}

  @ResolveField(() => Coordinates, { name: 'coordinates' })
  async getLocation(@Parent() location: Entity): Promise<Coordinates> {
    return await this._service.getCoordinates(
      new LocationModel({ ...location })
    );
  }

  @ResolveField(() => Timezone, { name: 'timezone' })
  async getTimezone(@Parent() location: Entity): Promise<Timezone> {
    return await this._service.getTimezone(new LocationModel({ ...location }));
  }
}
