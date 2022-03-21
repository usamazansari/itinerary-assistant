import { Field, ObjectType } from '@nestjs/graphql';

import { ITenure } from '../../imports/models';

@ObjectType()
export class Tenure implements ITenure {
  @Field()
  id!: string;

  @Field()
  start!: Date;

  @Field()
  end!: Date;
}
