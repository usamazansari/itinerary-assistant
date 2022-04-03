import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ICoordinates } from '../../../imports/models';

@ObjectType()
export class Coordinates implements ICoordinates {
  @Field(() => ID)
  id!: string;

  @Field()
  latitude!: number;

  @Field()
  longitude!: number;

  @Field(() => ID)
  locationId!: string;
}
