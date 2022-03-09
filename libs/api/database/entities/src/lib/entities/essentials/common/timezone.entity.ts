import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ITimezone } from '../../imports/models';

@Entity({ name: 'Timezone' })
export class Timezone extends BaseEntity implements ITimezone {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  description!: string;

  @Column()
  offset!: number;
}
