import { Field, InputType } from '@nestjs/graphql';

import { Gender } from '../../imports/constants';
import { IPerson } from '../../imports/models';

@InputType()
class PersonInput extends IPerson {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  fullName!: string;

  @Field({ nullable: true })
  email!: string;

  @Field({ nullable: true })
  phone!: string;

  @Field(() => Gender, { nullable: true })
  gender!: Gender;

  @Field(() => Date, { nullable: true })
  dateOfBirth!: Date;

  @Field({ nullable: true })
  website!: string;
}

export { PersonInput };
