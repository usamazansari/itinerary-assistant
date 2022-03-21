import { Query, Resolver } from '@nestjs/graphql';

import { User } from '../../imports/entities';
import { User as UserModel } from '../../imports/models';

@Resolver()
export class UserResolver {
  @Query(() => User)
  async user() {
    return new UserModel({});
  }
}
