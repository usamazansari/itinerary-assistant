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
  NameModel,
  PhotoModel,
  IUser
} from '../../imports/models';

import {
  Address,
  Identification,
  Name,
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

  @OneToOne(() => Name)
  @JoinColumn()
  name!: NameModel;

  @OneToMany(
    () => SocialConnection,
    socialConnection => socialConnection.user
  )
  socialConnection!: SocialConnectionModel[];

  @OneToMany(() => Photo, photo => photo.user)
  photo!: PhotoModel;
}
