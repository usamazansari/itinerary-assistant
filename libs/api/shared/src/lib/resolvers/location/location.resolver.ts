import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import {
  Coordinates as CoordinatesEntity,
  Location as Entity
} from '../../imports/entities';
import { LocationInput } from '../../inputs';
import {
  Coordinates as CoordinatesModel,
  Location
} from '../../imports/models';

import { LocationService } from '../../services';

@Resolver(() => Entity)
export class LocationResolver {
  constructor(private _service: LocationService) {}

  @Query(() => Entity)
  async getLocation(
    @Args('id', { type: () => String }) id: string
  ): Promise<Location> {
    return await this._service.getLocation(id);
  }

  @ResolveField(() => CoordinatesEntity, { name: 'coordinates' })
  async getCoordinates(@Parent() { id }: Entity): Promise<CoordinatesModel> {
    return await this._service.getCoordinates(id);
  }

  @Mutation(() => Entity)
  async createLocation(
    @Args('location', { type: () => LocationInput }) location: Location
  ): Promise<Location> {
    return await this._service.createLocation(location);
  }

  @Mutation(() => Entity)
  async updateLocation(
    @Args('id', { type: () => String }) id: string,
    @Args('location', { type: () => LocationInput }) location: Location
  ): Promise<Location> {
    return await this._service.updateLocation(id, location);
  }

  @Mutation(() => Entity)
  async deleteLocation(
    @Args('id', { type: () => String }) id: string
  ): Promise<Location> {
    return await this._service.deleteLocation(id);
  }
}
