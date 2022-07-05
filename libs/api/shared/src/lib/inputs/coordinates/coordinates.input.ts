import { Field, InputType } from '@nestjs/graphql';

import { Coordinates } from '../../imports/entities';

@InputType()
export class CoordinatesInput extends Coordinates {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  latitude!: number;

  @Field({ nullable: true })
  longitude!: number;
}
