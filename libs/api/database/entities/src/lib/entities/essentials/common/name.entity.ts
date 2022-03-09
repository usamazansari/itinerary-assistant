import {
  BaseEntity,
  Column,
  Entity,
  // JoinColumn,
  // OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IName } from '../../imports/models';

@Entity({ name: 'Name' })
export class Name extends BaseEntity implements IName {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  first!: string;

  @Column()
  last!: string;

  @Column()
  full!: string;

  // @OneToOne(() => UserDetails)
  // @JoinColumn()
  userId!: string;
}
