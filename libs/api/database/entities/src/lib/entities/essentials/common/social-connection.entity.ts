import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ISocialConnection } from '../../imports/models';
import { User } from '..';

@Entity({ name: 'SocialConnection' })
export class SocialConnection
  extends BaseEntity
  implements ISocialConnection
{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  url!: string;

  @ManyToOne(() => User, user => user.socialConnection)
  user!: string;
}
