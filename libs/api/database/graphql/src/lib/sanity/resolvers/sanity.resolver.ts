import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Address, Person } from '../../imports/entities';
import { SanityService } from '..';

@Resolver(() => Person)
export class SanityResolver {
  // constructor(private _service: SanityService) {}
  // @Query(() => Person)
  // async getPerson(@Args('email', { type: () => String }) email: string) {
  //   return await this._service.getPerson(email);
  // }
  // @ResolveField(() => Address, { name: 'address' })
  // async getAddress(@Parent() { email }: Person) {
  //   return await this._service.getAddress(email);
  // }
}
