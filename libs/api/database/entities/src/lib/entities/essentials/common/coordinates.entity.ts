import { Field, ObjectType } from '@nestjs/graphql';

import { ICoordinates } from '../../imports/models';

@ObjectType()
export class Coordinates implements ICoordinates {
  @Field()
  id!: string;

  @Field()
  latitude!: number;

  @Field()
  longitude!: number;

  @Field()
  locationId!: string;
}
