import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ISocialConnection } from '../../imports/models';

@ObjectType()
export class SocialConnection implements ISocialConnection {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  url!: string;
}
