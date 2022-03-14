import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { GenderEnum, IUser } from '../../imports/models';

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
  address!: string;

  @OneToMany(
    () => Identification,
    identification => identification.user
  )
  identifications!: string[];

  @Column({
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.Male
  })
  gender!: GenderEnum;

  @OneToOne(() => UserName)
  @JoinColumn()
  username!: string;

  @OneToMany(
    () => SocialConnection,
    socialConnection => socialConnection.user
  )
  socialConnection!: string[];

  @OneToMany(() => Photo, photo => photo.user)
  photo!: string;
}
