import { Field, ObjectType } from '@nestjs/graphql';

import {
  IUser,
  AddressModel,
  IdentificationModel,
  UserNameModel
} from '../../imports/models';
import { Address, Identification, UserName } from '..';

@ObjectType()
export class User implements IUser {
  @Field()
  id!: string;

  // @OneToOne(() => UserName)
  // @JoinColumn()
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

  // @OneToOne(() => Address)
  // @JoinColumn()
  @Field(() => Address)
  address!: AddressModel;

  // @OneToMany(
  //   () => Identification,
  //   identification => identification.user
  // )
  @Field(() => [Identification])
  identifications!: IdentificationModel[];

  // @OneToMany(
  //   () => SocialConnection,
  //   socialConnection => socialConnection.user
  // )
  // @Field()
  // socialConnection!: SocialConnectionModel[];

  // @OneToMany(() => Photo, photo => photo.user)
  // @Field()
  // photo!: PhotoModel;
}
