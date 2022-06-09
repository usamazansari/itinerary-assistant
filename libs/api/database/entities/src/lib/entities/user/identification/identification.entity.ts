import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  IIdentification,
  Person as PersonModel,
  Tenure as TenureModel
} from '../../imports/models';
import { Person as PersonEntity, Tenure as TenureEntity } from '../..';

@ObjectType()
export class Identification implements IIdentification {
  @Field(() => ID)
  id!: string;

  @Field()
  type!: string;

  @Field()
  number!: string;

  @Field()
  name!: string;

  @Field(() => TenureEntity)
  validity!: TenureModel;

  @Field(() => PersonEntity)
  person!: PersonModel;
}
