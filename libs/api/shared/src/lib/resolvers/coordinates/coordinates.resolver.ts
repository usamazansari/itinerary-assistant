import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Coordinates as Entity } from '../../imports/entities';
import { CoordinatesInput } from '../../inputs';
import { Coordinates } from '../../imports/models';

import { CoordinatesService } from '../../services';

@Resolver(() => Entity)
export class CoordinatesResolver {
  constructor(private _service: CoordinatesService) {}

  @Mutation(() => Entity)
  async createCoordinates(
    @Args('coordinates', { type: () => CoordinatesInput })
    coordinates: Coordinates
  ): Promise<Coordinates> {
    return await this._service.createCoordinates(coordinates);
  }

  @Mutation(() => Entity)
  async updateCoordinates(
    @Args('id', { type: () => String }) id: string,
    @Args('coordinates', { type: () => CoordinatesInput })
    coordinates: Coordinates
  ): Promise<Coordinates> {
    return await this._service.updateCoordinates(id, coordinates);
  }
}
