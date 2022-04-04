import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import { User } from '../../imports/entities';
import { User as UserModel } from '../../imports/models';
import { GoaUsers } from '../../mock';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  user(@Args('id') id: string): UserModel {
    return GoaUsers.find(user => user.id === id) ?? new UserModel({});
  }

  // TODO: Usama Ansari - Resolve for Address, Identification, Social Connection and Photo

  @Query(() => [User])
  users(): UserModel[] {
    return GoaUsers;
  }
}
