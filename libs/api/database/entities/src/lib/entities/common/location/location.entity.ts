import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  ILocation,
  Coordinates as CoordinatesModel
} from '../../../imports/models';
import { Coordinates as CoordinatesEntity } from '.';

@ObjectType()
export class Location implements ILocation {
  @Field(() => ID)
  id!: string;

  @Field()
  plusCode!: string;

  @Field(() => CoordinatesEntity)
  coordinates!: CoordinatesModel;
}
