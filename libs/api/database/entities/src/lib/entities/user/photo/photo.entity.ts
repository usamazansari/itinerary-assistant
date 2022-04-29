import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IPhoto } from '../../imports/models';

@ObjectType()
export class Photo implements IPhoto {
  @Field(() => ID)
  id!: string;

  @Field()
  large!: string;

  @Field()
  medium!: string;

  @Field()
  thumbnail!: string;

  @Field(() => ID)
  personId!: string;
}
