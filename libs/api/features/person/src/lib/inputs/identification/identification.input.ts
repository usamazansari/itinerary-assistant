import { Field, InputType } from '@nestjs/graphql';

import { Identification } from '../../imports/entities';

@InputType()
export class IdentificationInput extends Identification {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  name!: string;

  @Field({ nullable: true })
  number!: string;

  @Field({ nullable: true })
  type!: string;
}
