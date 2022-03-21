import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IUserName } from '../../imports/models';

@Entity({ name: 'UserName' })
export class UserName extends BaseEntity implements IUserName {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  first!: string;

  @Column()
  last!: string;

  @Column({ nullable: true })
  full!: string;
}
