import { Field, InputType } from '@nestjs/graphql';

import { ITrip } from '../../imports/models';

@InputType()
class TripInput implements ITrip {
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
