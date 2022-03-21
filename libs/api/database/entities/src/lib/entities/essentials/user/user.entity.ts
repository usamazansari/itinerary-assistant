import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';

import {
  AddressModel,
  GenderEnum,
  IdentificationModel,
  SocialConnectionModel,
  UserNameModel,
  PhotoModel,
  IUser
} from '../../imports/models';

import {
  Address,
  Identification,
  UserName,
  Photo,
  SocialConnection
} from '..';

@ObjectType()
@Entity({ name: 'User' })
export class User extends BaseEntity implements IUser {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  dateOfBirth!: Date;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  phone!: string;

  @Field()
  @Column()
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

  // @Field()
  // @Column({
  //   type: 'enum',
  //   enum: GenderEnum,
  //   default: GenderEnum.Male
  // })
  // gender!: GenderEnum;

  // @OneToOne(() => UserName)
  // @JoinColumn()
  @Field(() => UserName)
  username!: UserName;

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
