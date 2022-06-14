import { Field, InputType } from '@nestjs/graphql';

import { Salutation } from '../../imports/constants';
import { Demographics } from '../../imports/entities';

@InputType()
export class DemographicsInput extends Demographics {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  firstName!: string;

  @Field({ nullable: true })
  lastName!: string;

  @Field({ nullable: true })
  middleName!: string;

  @Field({ nullable: true })
  nickname!: string;

  @Field(() => Salutation, { nullable: true })
  salutation!: Salutation;
}
