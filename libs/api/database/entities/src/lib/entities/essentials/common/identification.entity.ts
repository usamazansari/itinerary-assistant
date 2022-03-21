import { Field, ObjectType } from '@nestjs/graphql';

import { IIdentification, TenureModel } from '../../imports/models';
import { Tenure } from '..';

@ObjectType()
export class Identification implements IIdentification {
  @Field()
  id!: string;

  @Field()
  type!: string;

  @Field()
  number!: string;

  @Field()
  name!: string;

  @Field(() => Tenure)
  validity!: TenureModel;

  @Field()
  userId!: string;
}
