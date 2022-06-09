import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Salutation } from '../../imports/constants';
import { IDemographics, Person as PersonModel } from '../../imports/models';
import { Person as PersonEntity } from '..';

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

  @Field(() => PersonEntity)
  person!: PersonModel;
}
