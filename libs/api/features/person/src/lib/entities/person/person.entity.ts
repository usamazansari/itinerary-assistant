import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Gender } from '../../imports/constants';
import { IPersonBase } from '../../imports/models';

import { Address } from '../../models';
import { AddressEntity } from '..';

@ObjectType()
class Person implements IPersonBase {
  @Field(() => ID)
  id!: string;

  @Field()
  fullName!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field({ nullable: true })
  dateOfBirth!: Date;

  @Field(() => Gender, { nullable: true })
  gender!: Gender;

  @Field()
  website!: string;

  @Field(() => [AddressEntity], { nullable: true })
  addresses!: Address[];
}

export { Person as PersonEntity };
