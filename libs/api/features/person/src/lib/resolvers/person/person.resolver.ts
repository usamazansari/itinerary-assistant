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
import { PersonInput as Input } from '../../inputs';
import { PersonService } from '../../services';

@Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Entity], {
    defaultValue: [],
    description: 'Fetch all the nodes labelled `PERSON` in the database',
    nullable: true
  })
  async getPeople() {
    return await this._service.getPeople();
  }

  @Query(() => Entity, {
    description: 'Get `PERSON` having `{ id: id }`',
    nullable: true
  })
  async getPerson(@Args('id', { type: () => String }) id: string) {
    return await this._service.getPerson(id);
  }

  @Mutation(() => Entity, {
    description:
      'Create a new node having label `PERSON` with the input provided'
  })
  async createPerson(@Args('person', { type: () => Input }) person: Entity) {
    return await this._service.createPerson(person);
  }

  @Mutation(() => Entity, {
    description:
      'Update the `PERSON` having `{ id: id }` with the input provided'
  })
  async updatePerson(
    @Args('id', { type: () => String }) id: string,
    @Args('person', { type: () => Input }) person: Entity
  ) {
    return await this._service.updatePerson(id, person);
  }

  @Mutation(() => Entity, {
    description: 'Delete the `PERSON` having `{ id: id }`'
  })
  async deletePerson(@Args('id', { type: () => String }) id: string) {
    return await this._service.deletePerson(id);
  }

  @ResolveField(() => [AddressEntity], {
    defaultValue: [],
    description:
      'Fetch all the `ADDRESS`es associated with `PERSON` having `{ id: id }`',
    name: 'addresses',
    nullable: true
  })
  async resolveAddresses(@Parent() { id }: Entity) {
    return await this._service.getAddresses(id);
  }

  @ResolveField(() => [TripEntity], {
    defaultValue: [],
    description:
      'Fetch all the `TRIP`s associated with person having `{ id: id }`',
    name: 'trips',
    nullable: true
  })
  async resolveTrips(@Parent() { id }: Entity) {
    return await this._service.getTrips(id);
  }
}
