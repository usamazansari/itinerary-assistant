import { Field, InputType } from '@nestjs/graphql';

import { Gender } from '../../imports/constants';
import { Person } from '../../imports/entities';

@InputType()
export class PersonInput extends Person {
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

  @Field({ nullable: true })
  website!: string;
}
