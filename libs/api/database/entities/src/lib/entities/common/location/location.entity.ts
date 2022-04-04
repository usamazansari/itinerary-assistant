import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  ILocation,
  Coordinates as CoordinatesModel,
  Timezone as TimezoneModel
} from '../../imports/models';
import {
  Coordinates as CoordinatesEntity,
  Timezone as TimezoneEntity
} from '.';

@ObjectType()
export class Location implements ILocation {
  @Field(() => ID)
  id!: string;

  @Field()
  plusCode!: string;

  @Field(() => CoordinatesEntity)
  coordinates!: CoordinatesModel;

  @Field(() => TimezoneEntity)
  timezone!: TimezoneModel;
}
