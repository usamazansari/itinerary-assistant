import { Field, ObjectType } from '@nestjs/graphql';

import { ITimezone } from '../../imports/models';

@ObjectType()
export class Timezone implements ITimezone {
  @Field()
  id!: string;

  @Field()
  description!: string;

  @Field()
  offset!: number;

  @Field()
  locationId!: string;
}
