import { Field, ObjectType } from '@nestjs/graphql';

import { ITripBase, Person, PersonEntity } from '../../imports/models';

@ObjectType()
class Trip implements ITripBase {
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

  @Field(() => [PersonEntity], { nullable: true })
  accomplices!: Person[];
}

export { Trip as TripEntity };
