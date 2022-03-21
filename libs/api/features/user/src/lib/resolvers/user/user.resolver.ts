import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import { User, UserName } from '../../imports/entities';
import {
  User as UserModel,
  UserName as UserNameModel
} from '../../imports/models';
import { GoaUsers } from '../../mock';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  user(@Args('id') id: string): UserModel {
    return GoaUsers.find(user => user.id === id) ?? new UserModel({});
  }

  @Query(() => [User])
  users(): UserModel[] {
    return GoaUsers;
  }
}
