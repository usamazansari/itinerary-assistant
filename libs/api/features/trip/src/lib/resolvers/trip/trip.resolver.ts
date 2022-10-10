import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import { PersonEntity } from '../../imports/entities';

import { TripEntity as Entity } from '../../entities';
import { TripInput as Input } from '../../inputs';
import { TripService } from '../../services';

@Resolver(() => Entity)
export class TripResolver {
  constructor(private _service: TripService) {}

  // TODO: Usama Ansari - Implement this method
  // async getTrips() {
  //   this._service.getTrips();
  // }

  @Query(() => Entity, {
    description: 'Get `TRIP` having `{ id: id }`',
    nullable: true
  })
  async getTrip(@Args('id', { type: () => String }) id: string) {
    return this._service.getTrip(id);
  }

  @Mutation(() => Entity, {
    description: 'Create a new node having label `TRIP` with the input provided'
  })
  async createTrip(@Args('trip', { type: () => Input }) trip: Entity) {
    return await this._service.createTrip(trip);
  }

  @Mutation(() => Entity, {
    description: 'Update the `TRIP` having `{ id: id }` with the input provided'
  })
  async updateTrip(
    @Args('id', { type: () => String }) id: string,
    @Args('trip', { type: () => Input }) trip: Entity
  ) {
    return await this._service.updateTrip(id, trip);
  }

  @Mutation(() => Entity, {
    description: 'Delete the `TRIP` having `{ id: id }`'
  })
  async deleteTrip(@Args('id', { type: () => String }) id: string) {
    return await this._service.deleteTrip(id);
  }

  @Mutation(() => Entity, {
    description:
      'Link `TRIP` having `{ id: tripId }` to the `PERSON` having `{ id: personId }`, if not linked already'
  })
  async associateTripWithPerson(
    @Args('tripId', { type: () => String }) tripId: string,
    @Args('personId', { type: () => String }) personId: string
  ) {
    return await this._service.associateTripWithPerson({
      tripId,
      personId
    });
  }

  @ResolveField(() => [PersonEntity], {
    defaultValue: [],
    description:
      'Fetch all the `PERSON`s associated with `TRIP` having `{ id: id }`',
    name: 'accomplices',
    nullable: true
  })
  async resolveAccomplices(@Parent() { id }: Entity) {
    return await this._service.resolveAccomplices(id);
  }
}
