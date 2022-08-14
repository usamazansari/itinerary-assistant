import { Field, InputType } from '@nestjs/graphql';

import { IAddress } from '../../imports/models';

@InputType()
export class AddressInput implements IAddress {
  @Field({ nullable: true })
  room!: string;

  @Field({ nullable: true })
  apartment!: string;

  @Field({ nullable: true })
  wing!: string;

  @Field({ nullable: true })
  street!: string;

  @Field({ nullable: true })
  landmark!: string;

  @Field({ nullable: true })
  locality!: string;

  @Field({ nullable: true })
  suburb!: string;

  @Field({ nullable: true })
  city!: string;

  @Field({ nullable: true })
  state!: string;

  @Field({ nullable: true })
  country!: string;

  @Field({ nullable: true })
  zip!: string;
}
