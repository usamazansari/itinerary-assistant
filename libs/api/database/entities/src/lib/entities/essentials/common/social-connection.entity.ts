import { Field, ObjectType } from '@nestjs/graphql';

import { ISocialConnection } from '../../imports/models';

@ObjectType()
export class SocialConnection implements ISocialConnection {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  url!: string;

  @Field()
  userId!: string;
}
