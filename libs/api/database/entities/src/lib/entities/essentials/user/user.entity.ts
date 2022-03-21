import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  IUser,
  AddressModel,
  IdentificationModel,
  PhotoModel,
  SocialConnectionModel,
  UserNameModel
} from '../../imports/models';
import {
  Address,
  Identification,
  Photo,
  SocialConnection,
  UserName
} from '..';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id!: string;

  @Field(() => UserName)
  username!: UserNameModel;

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

  @Field(() => Address)
  address!: AddressModel;

  @Field(() => [Identification])
  identifications!: IdentificationModel[];

  @Field(() => [SocialConnection])
  socialConnections!: SocialConnectionModel[];

  @Field(() => [Photo])
  photos!: PhotoModel[];
}
