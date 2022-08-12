import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IAddress, PersonBase } from '../../../imports/models';
import { PersonEntity } from '../person.entity';

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

  @Field(() => [PersonEntity])
  residents!: PersonBase[];
}

export { Address as AddressEntity };
