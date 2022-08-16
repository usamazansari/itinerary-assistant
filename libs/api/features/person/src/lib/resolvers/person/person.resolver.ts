import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import { PersonEntity as Entity, AddressEntity } from '../../entities';
import { PersonInput } from '../../inputs';
import { PersonService } from '../../services';

@Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Entity])
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

  @ResolveField(() => [AddressEntity], { name: 'addresses' })
  async resolvePersonAddress(@Parent() { id }: Entity) {
    return await this._service.getPersonAddress(id);
  }
}
