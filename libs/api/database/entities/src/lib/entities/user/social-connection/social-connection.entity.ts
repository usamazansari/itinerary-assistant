import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ISocialConnection, Person as PersonModel } from '../../imports/models';
import { Person as PersonEntity } from '..';

@ObjectType()
export class SocialConnection implements ISocialConnection {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  url!: string;

  @Field(() => PersonEntity)
  person!: PersonModel;
}
