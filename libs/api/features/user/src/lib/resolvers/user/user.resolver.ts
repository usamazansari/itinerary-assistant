import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Person } from '../../imports/entities';
import { Person as PersonModel } from '../../imports/models';
import { GoaUsers } from '../../mock';

@Resolver(() => Person)
export class UserResolver {
  @Query(() => Person)
  user(@Args('id') id: string): PersonModel {
    return GoaUsers.find(user => user.id === id) ?? new PersonModel({});
  }

  // TODO: Usama Ansari - Resolve for Address, Identification, Social Connection and Photo

  @Query(() => [Person])
  users(): PersonModel[] {
    return GoaUsers;
  }
}
