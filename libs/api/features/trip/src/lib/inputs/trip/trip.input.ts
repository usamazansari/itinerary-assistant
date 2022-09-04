import { Field, InputType } from '@nestjs/graphql';

import { ITripBase } from '../../imports/models';

@InputType()
class TripInput implements ITripBase {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  source!: string;

  @Field({ nullable: true })
  destination!: string;

  @Field({ nullable: true })
  start!: Date;

  @Field({ nullable: true })
  end!: Date;

  @Field({ nullable: true })
  name!: string;
}

export { TripInput };
