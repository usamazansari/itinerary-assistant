import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ITenure } from '../../imports/models';

@Entity({ name: 'tenure' })
export class Tenure extends BaseEntity implements ITenure {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  start!: string | number;

  @Column()
  end!: string | number;
}
