import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

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

@Entity({ name: 'User' })
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  dateOfBirth!: Date;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  website!: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address!: AddressModel;

  @OneToMany(
    () => Identification,
    identification => identification.user
  )
  identifications!: IdentificationModel[];

  @Column({
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.Male
  })
  gender!: GenderEnum;

  @OneToOne(() => UserName)
  @JoinColumn()
  name!: UserNameModel;

  @OneToMany(
    () => SocialConnection,
    socialConnection => socialConnection.user
  )
  socialConnection!: SocialConnectionModel[];

  @OneToMany(() => Photo, photo => photo.user)
  photo!: PhotoModel;
}
