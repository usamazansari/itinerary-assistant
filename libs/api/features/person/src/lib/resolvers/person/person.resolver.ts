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
import { Person, PersonDTO } from '../../imports/models';

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
    return await this._service.getPerson(new Person({ ...person }));
  }

  @ResolveField(() => Address, { name: 'address' })
  async getAddress(@Parent() person: Entity): Promise<Address> {
    return await this._service.getAddress(new Person({ ...person }));
  }

  @ResolveField(() => Demographics, { name: 'demographics' })
  async getDemographics(@Parent() person: Entity): Promise<Demographics> {
    return await this._service.getDemographics(new Person({ ...person }));
  }

  @ResolveField(() => [Identification], { name: 'identifications' })
  async getIdentifications(
    @Parent() person: Entity
  ): Promise<Identification[]> {
    return await this._service.getIdentifications(new Person({ ...person }));
  }

  @ResolveField(() => [SocialConnection], { name: 'socialConnections' })
  async getSocialConnections(
    @Parent() person: Entity
  ): Promise<SocialConnection[]> {
    return await this._service.getSocialConnections(new Person({ ...person }));
  }

  @Mutation(() => Entity)
  async createPerson(
    @Args('person', { type: () => PersonInput }) person: Entity
  ): Promise<Person> {
    return await this._service.createPerson(new PersonDTO({ ...person }));
  }

  @Mutation(() => Entity)
  async updatePerson(
    @Args('id', { type: () => String }) id: string,
    @Args('person', { type: () => PersonInput }) person: Entity
  ): Promise<Person> {
    return await this._service.updatePerson(id, new PersonDTO({ ...person }));
  }

  @Mutation(() => Entity)
  async deletePerson(
    @Args('id', { type: () => String }) id: string
  ): Promise<Person> {
    return await this._service.deletePerson(id);
  }
}
