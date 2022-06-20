import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  IAddress,
  Location as LocationModel,
  Person as PersonModel
} from '../../../../imports/models';
import { Location as LocationEntity, Person as PersonEntity } from '../../..';

@ObjectType()
export class Address implements IAddress {
  @Field(() => ID)
  id!: string;

  @Field()
  room!: string;

  @Field()
  apartment!: string;

  @Field()
  wing!: string;

  @Field()
  street!: string;

  @Field()
  landmark!: string;

  @Field()
  locality!: string;

  @Field()
  suburb!: string;

  @Field()
  city!: string;

  @Field()
  state!: string;

  @Field()
  country!: string;

  @Field()
  zip!: string;

  @Field(() => LocationEntity)
  location!: LocationModel;

  @Field(() => [PersonEntity])
  residents!: PersonModel[];
}
