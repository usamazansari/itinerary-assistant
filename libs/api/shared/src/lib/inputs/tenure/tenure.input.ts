import { Field, InputType } from '@nestjs/graphql';

import { Tenure } from '../../imports/entities';

@InputType()
export class TenureInput extends Tenure {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  start!: Date;

  @Field({ nullable: true })
  end!: Date;
}
