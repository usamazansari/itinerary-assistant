import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Address, Person as PersonEntity } from '../../imports/entities';
import { Person as PersonModel } from '../../imports/models';
import { PersonService } from '../../services';

@Resolver(() => PersonEntity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => PersonEntity)
  async getPerson(
    @Args('email', { type: () => String }) email: string
  ): Promise<PersonModel> {
    return await this._service.getPerson(new PersonModel({ email }));
  }

  @ResolveField(() => Address, { name: 'address' })
  async getAddress(@Parent() { email }: PersonEntity): Promise<Address> {
    return await this._service.getAddress(new PersonModel({ email }));
  }
}
