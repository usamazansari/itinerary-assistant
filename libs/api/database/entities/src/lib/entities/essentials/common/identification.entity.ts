import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IIdentification, TenureModel } from '../../imports/models';
import { Tenure } from '..';

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

  @Field(() => Tenure)
  validity!: TenureModel;

  @Field(() => ID)
  userId!: string;
}
