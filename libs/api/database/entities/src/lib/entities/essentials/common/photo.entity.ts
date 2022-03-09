import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IPhoto } from '../../imports/models';
import { User } from '..';

@Entity({ name: 'Photos' })
export class Photo extends BaseEntity implements IPhoto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  large!: string;

  @Column()
  medium!: string;

  @Column()
  thumbnail!: string;

  @OneToOne(() => User, user => user.photo)
  user!: string;
}
