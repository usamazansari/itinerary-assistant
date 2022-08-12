import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Gender } from '../../imports/constants';
import { IPerson } from '../../imports/models';

@ObjectType()
class Person implements IPerson {
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
}

export { Person as PersonEntity };
