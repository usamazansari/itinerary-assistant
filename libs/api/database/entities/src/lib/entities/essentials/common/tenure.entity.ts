import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ITenure } from '../../imports/models';

@Entity({ name: 'Tenure' })
export class Tenure extends BaseEntity implements ITenure {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  start!: Date;

  @Column()
  end!: Date;
}
