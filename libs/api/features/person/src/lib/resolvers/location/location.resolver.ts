import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import {
  Coordinates,
  Location as LocationEntity,
  Timezone
} from '../../imports/entities';
import { Location as LocationModel } from '../../imports/models';

import { LocationService } from '../../services';

@Resolver(() => LocationEntity)
export class LocationResolver {
  constructor(private _service: LocationService) {}

  @ResolveField(() => Coordinates, { name: 'coordinates' })
  async getLocation(@Parent() location: LocationEntity): Promise<Coordinates> {
    return await this._service.getCoordinates(
      new LocationModel({ ...location })
    );
  }

  @ResolveField(() => Timezone, { name: 'timezone' })
  async getTimezone(@Parent() location: LocationEntity): Promise<Timezone> {
    return await this._service.getTimezone(new LocationModel({ ...location }));
  }
}
