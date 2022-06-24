import { Field, ObjectType } from '@nestjs/graphql';

import { Sanity } from '../../models';

@ObjectType()
export class SanityEntity extends Sanity {
  @Field(() => String)
  message!: string;
}
