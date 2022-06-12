import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Gender } from '../imports/constants';
import {
  IPerson,
  Address as AddressModel,
  Demographics as DemographicsModel,
  Identification as IdentificationModel,
  SocialConnection as SocialConnectionModel
} from '../imports/models';
import {
  Address as AddressEntity,
  Identification as IdentificationEntity,
  Demographics as DemographicsEntity,
  SocialConnection as SocialConnectionEntity
} from '.';

@ObjectType()
export class Person implements IPerson {
  @Field(() => ID)
  id!: string;

  @Field()
  fullName!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  website!: string;

  @Field({ nullable: true })
  dateOfBirth!: Date;

  @Field(() => Gender, { nullable: true })
  gender!: Gender;

  @Field(() => AddressEntity)
  address!: AddressModel;

  @Field(() => DemographicsEntity)
  demographics!: DemographicsModel;

  @Field(() => [IdentificationEntity])
  identifications!: IdentificationModel[];

  @Field(() => [SocialConnectionEntity])
  socialConnections!: SocialConnectionModel[];
}
