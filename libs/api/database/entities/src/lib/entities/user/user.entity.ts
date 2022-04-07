import { Field, ID, ObjectType } from '@nestjs/graphql';

// import { Gender } from '../imports/constants';
import {
  IUser,
  // Address as AddressModel,
  // Identification as IdentificationModel,
  // Photo as PhotoModel,
  SocialConnection as SocialConnectionModel,
  Demographics as DemographicsModel
} from '../imports/models';
import {
  // Address as AddressEntity,
  // Identification as IdentificationEntity,
  // Photo as PhotoEntity,
  SocialConnection as SocialConnectionEntity,
  Demographics as DemographicsEntity
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

  @Field(() => [SocialConnectionEntity])
  socialConnections!: SocialConnectionModel[];

  // @Field(() => [Photo])
  // photos!: PhotoModel[];
}
