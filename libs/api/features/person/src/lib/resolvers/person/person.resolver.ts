import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import {
  Address,
  Demographics,
  Person as PersonEntity
} from '../../imports/entities';
import { Person as PersonModel } from '../../imports/models';

import { PersonInput } from '../../inputs';
import { PersonService } from '../../services';

@Resolver(() => PersonEntity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [PersonEntity])
  async getPeople(): Promise<PersonModel[]> {
    return await this._service.getPeople();
  }

  @Query(() => PersonEntity)
  async getPerson(
    @Args('person', { type: () => PersonInput }) person: PersonEntity
  ): Promise<PersonModel> {
    return await this._service.getPerson(new PersonModel({ ...person }));
  }

  @ResolveField(() => Address, { name: 'address' })
  async getAddress(@Parent() person: PersonEntity): Promise<Address> {
    return await this._service.getAddress(new PersonModel({ ...person }));
  }

  @ResolveField(() => Demographics, { name: 'demographics' })
  async getDemographics(@Parent() person: PersonEntity): Promise<Demographics> {
    return await this._service.getDemographics(new PersonModel({ ...person }));
  }
}
