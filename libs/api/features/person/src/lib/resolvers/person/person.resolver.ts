import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import {
  Address,
  Demographics,
  Identification,
  Person as Entity,
  SocialConnection
} from '../../imports/entities';
import { Person } from '../../imports/models';

import { PersonInput } from '../../inputs';
import { PersonService } from '../../services';

@Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Entity])
  async getPeople(): Promise<Person[]> {
    return await this._service.getPeople();
  }

  @Query(() => Entity)
  async getPerson(
    @Args('person', { type: () => PersonInput }) person: Entity
  ): Promise<Person> {
    return await this._service.getPerson(person.id);
  }

  @ResolveField(() => Address, { name: 'address' })
  async getAddress(@Parent() { id }: Entity): Promise<Address> {
    return await this._service.getAddress(id);
  }

  @ResolveField(() => Demographics, { name: 'demographics' })
  async getDemographics(@Parent() { id }: Entity): Promise<Demographics> {
    return await this._service.getDemographics(id);
  }

  @ResolveField(() => [Identification], { name: 'identifications' })
  async getIdentifications(
    @Parent() { id }: Entity
  ): Promise<Identification[]> {
    return await this._service.getIdentifications(id);
  }

  @ResolveField(() => [SocialConnection], { name: 'socialConnections' })
  async getSocialConnections(
    @Parent() { id }: Entity
  ): Promise<SocialConnection[]> {
    return await this._service.getSocialConnections(id);
  }

  @Mutation(() => Entity)
  async createPerson(
    @Args('person', { type: () => PersonInput }) person: Entity
  ): Promise<Person> {
    return await this._service.createPerson(person);
  }

  @Mutation(() => Entity)
  async updatePerson(
    @Args('id', { type: () => String }) id: string,
    @Args('person', { type: () => PersonInput }) person: Entity
  ): Promise<Person> {
    return await this._service.updatePerson(id, person);
  }

  @Mutation(() => Entity)
  async deletePerson(
    @Args('id', { type: () => String }) id: string
  ): Promise<Person> {
    return await this._service.deletePerson(id);
  }
}
