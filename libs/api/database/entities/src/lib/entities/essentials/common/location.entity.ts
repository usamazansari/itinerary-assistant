import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  ILocation,
  CoordinatesModel,
  TimezoneModel
} from '../../imports/models';
import { Coordinates, Timezone } from '..';

@ObjectType()
export class Location implements ILocation {
  @Field(() => ID)
  id!: string;

  @Field()
  plusCode!: string;

  @Field(() => Coordinates)
  coordinates!: CoordinatesModel;

  @Field(() => Timezone)
  timezone!: TimezoneModel;
}
