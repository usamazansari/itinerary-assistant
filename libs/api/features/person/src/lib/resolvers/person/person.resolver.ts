import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import { TripEntity } from '../../imports/entities';

import { PersonEntity as Entity, AddressEntity } from '../../entities';
import { PersonInput } from '../../inputs';
import { PersonService } from '../../services';

@Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Entity], { nullable: true })
  async getPeople() {
    return await this._service.getPeople();
  }

  @Query(() => Entity)
  async getPerson(@Args('id', { type: () => String }) id: string) {
    return await this._service.getPerson(id);
  }

  @Mutation(() => Entity)
  async createPerson(
    @Args('person', { type: () => PersonInput }) person: Entity
  ) {
    return await this._service.createPerson(person);
  }

  @Mutation(() => Entity)
  async updatePerson(
    @Args('id', { type: () => String }) id: string,
    @Args('person', { type: () => PersonInput }) person: Entity
  ) {
    return await this._service.updatePerson(id, person);
  }

  @Mutation(() => Entity)
  async deletePerson(@Args('id', { type: () => String }) id: string) {
    return await this._service.deletePerson(id);
  }

  @ResolveField(() => [AddressEntity], { name: 'addresses', nullable: true })
  async resolveAddresses(@Parent() { id }: Entity) {
    return await this._service.getAddresses(id);
  }

  @ResolveField(() => [TripEntity], { name: 'trips', nullable: true })
  async resolveTrips(@Parent() { id }: Entity) {
    return await this._service.getTrips(id);
  }
}
