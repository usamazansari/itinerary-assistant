import { Field, ObjectType } from '@nestjs/graphql';

import { IUserName } from '../../imports/models';

@ObjectType()
export class UserName implements IUserName {
  @Field()
  id!: string;

  @Field()
  first!: string;

  @Field()
  last!: string;

  @Field()
  full!: string;

  @Field()
  userId!: string;
}
