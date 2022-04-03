import { Field, ID, ObjectType } from '@nestjs/graphql';

// import { Gender } from '../imports/constants';
import {
  IUser,
  // Address as AddressModel,
  // Identification as IdentificationModel,
  // Photo as PhotoModel,
  // SocialConnection as SocialConnectionModel,
  UserDemographics as UserDemographicsModel
} from '../imports/models';
import {
  // Address as AddressEntity,
  // Identification as IdentificationEntity,
  // Photo as PhotoEntity,
  // SocialConnection as SocialConnectionEntity,
  UserDemographics as UserDemographicsEntity
} from '.';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id!: string;

  @Field(() => UserDemographicsEntity)
  demographics!: UserDemographicsModel;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  dateOfBirth!: Date;

  // @Field()
  // @Column({
  //   type: 'enum',
  //   enum: GenderEnum,
  //   default: GenderEnum.Male
  // })
  // gender!: GenderEnum;

  @Field()
  website!: string;

  // @Field(() => Address)
  // address!: AddressModel;

  // @Field(() => [Identification])
  // identifications!: IdentificationModel[];

  // @Field(() => [SocialConnection])
  // socialConnections!: SocialConnectionModel[];

  // @Field(() => [Photo])
  // photos!: PhotoModel[];
}
