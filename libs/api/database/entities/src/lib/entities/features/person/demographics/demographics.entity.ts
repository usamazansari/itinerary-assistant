import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Salutation } from '../../../imports/constants';
import { IDemographics } from '../../../imports/models';

@ObjectType()
export class Demographics implements IDemographics {
  @Field(() => ID)
  id!: string;

  @Field(() => Salutation)
  salutation!: Salutation;

  @Field()
  firstName!: string;

  @Field()
  middleName!: string;

  @Field()
  lastName!: string;

  @Field()
  nickname!: string;
}
