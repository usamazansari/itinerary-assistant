import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ITenure } from '../../../imports/models';

@ObjectType()
export class Tenure implements ITenure {
  @Field(() => ID)
  id!: string;

  @Field()
  start!: Date;

  @Field()
  end!: Date;
}
