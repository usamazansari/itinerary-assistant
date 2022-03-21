import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
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

  @ManyToOne(() => User, user => user.photo)
  user!: string;
}
