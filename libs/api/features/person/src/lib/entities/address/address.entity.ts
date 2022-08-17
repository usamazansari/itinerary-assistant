import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IAddress } from '../../imports/models';

import { Person } from '../../models';
import { PersonEntity } from '..';

@ObjectType()
class Address implements IAddress {
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

  @Field()
  addressType!: string;

  @Field(() => [PersonEntity], { nullable: true })
  residents!: Person[];
}

export { Address as AddressEntity };
