import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  IIdentification,
  Tenure as TenureModel
} from '../../../imports/models';
import { Tenure as TenureEntity } from '../../..';

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
}
