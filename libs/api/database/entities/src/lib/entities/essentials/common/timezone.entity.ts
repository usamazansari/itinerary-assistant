import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ITimezone } from '../../imports/models';

@ObjectType()
export class Timezone implements ITimezone {
  @Field(() => ID)
  id!: string;

  @Field()
  description!: string;

  @Field()
  offset!: number;

  @Field(() => ID)
  locationId!: string;
}
