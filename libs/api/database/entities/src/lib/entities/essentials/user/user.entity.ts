import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
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

import { Name } from '..';

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

  // @Column()
  address!: AddressModel;

  // @Column()
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

  // @Column()
  social!: SocialConnectionModel[];

  // @Column()
  photo!: PhotoModel;
}
