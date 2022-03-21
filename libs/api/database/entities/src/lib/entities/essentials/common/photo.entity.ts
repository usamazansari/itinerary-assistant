import { Field, ObjectType } from '@nestjs/graphql';

import { IPhoto } from '../../imports/models';

@ObjectType()
export class Photo implements IPhoto {
  @Field()
  id!: string;

  @Field()
  large!: string;

  @Field()
  medium!: string;

  @Field()
  thumbnail!: string;

  @Field()
  userId!: string;
}
