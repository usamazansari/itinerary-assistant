import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Gender } from '../imports/constants';
import {
  IUser,
  Address as AddressModel,
  Demographics as DemographicsModel,
  Identification as IdentificationModel,
  Photo as PhotoModel,
  SocialConnection as SocialConnectionModel
} from '../imports/models';
import {
  Address as AddressEntity,
  Identification as IdentificationEntity,
  Demographics as DemographicsEntity,
  Photo as PhotoEntity,
  SocialConnection as SocialConnectionEntity
} from '.';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id!: string;

  @Field()
  fullName!: string;

  @Field(() => DemographicsEntity)
  demographics!: DemographicsModel;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  dateOfBirth!: Date;

  @Field(() => Gender)
  gender!: Gender;

  @Field()
  website!: string;

  @Field(() => AddressEntity)
  address!: AddressModel;

  @Field(() => [IdentificationEntity])
  identifications!: IdentificationModel[];

  @Field(() => [SocialConnectionEntity])
  socialConnections!: SocialConnectionModel[];

  @Field(() => [PhotoEntity])
  photos!: PhotoModel[];
}
