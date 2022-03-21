import { Field, ObjectType } from '@nestjs/graphql';

import { UserName } from '..';
import { IUser, UserNameModel } from '../../imports/models';

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
  // @Field()
  // address!: AddressModel;

  // @OneToMany(
  //   () => Identification,
  //   identification => identification.user
  // )
  // @Field()
  // identifications!: IdentificationModel[];

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
