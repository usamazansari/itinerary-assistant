import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TripEntity as Entity } from '../../entities';
import { TripInput } from '../../inputs';
import { TripService } from '../../services';

@Resolver(() => Entity)
export class TripResolver {
  constructor(private _service: TripService) {}

  @Query(() => Entity)
  async getTrip(@Args('id', { type: () => String }) id: string) {
    return this._service.getTrip(id);
  }

  @Mutation(() => Entity)
  async createTrip(@Args('trip', { type: () => TripInput }) trip: Entity) {
    return await this._service.createTrip(trip);
  }

  @Mutation(() => Entity)
  async updateTrip(
    @Args('id', { type: () => String }) id: string,
    @Args('trip', { type: () => TripInput }) trip: Entity
  ) {
    return await this._service.updateTrip(id, trip);
  }

  @Mutation(() => Entity)
  async deleteTrip(@Args('id', { type: () => String }) id: string) {
    return await this._service.deleteTrip(id);
  }

  // TODO: Usama Ansari - Add Accomplices Resolver
}
