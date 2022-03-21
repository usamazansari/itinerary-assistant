import { Field, ObjectType } from '@nestjs/graphql';

import {
  IUser,
  AddressModel,
  IdentificationModel,
  PhotoModel,
  UserNameModel
} from '../../imports/models';
import { Address, Identification, Photo, UserName } from '..';

@ObjectType()
export class User implements IUser {
  @Field()
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

  // @OneToMany(
  //   () => SocialConnection,
  //   socialConnection => socialConnection.user
  // )
  // @Field()
  // socialConnection!: SocialConnectionModel[];

  @Field(() => [Photo])
  photos!: PhotoModel[];
}
