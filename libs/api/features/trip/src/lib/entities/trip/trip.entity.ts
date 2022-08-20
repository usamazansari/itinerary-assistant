import { Field } from '@nestjs/graphql';

import { ITrip, Person } from '../../imports/models';

class TripEntity implements ITrip {
  @Field()
  id!: string;

  @Field()
  source!: string;

  @Field()
  destination!: string;

  @Field()
  start!: Date;

  @Field()
  end!: Date;

  @Field()
  name!: string;

  @Field(() => [Person])
  accomplices!: Person[];
}

export { TripEntity };
