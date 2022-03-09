import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IName } from '../../imports/models';

@Entity({ name: 'Name' })
export class Name extends BaseEntity implements IName {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  first!: string;

  @Column()
  last!: string;

  @Column()
  full!: string;
}
