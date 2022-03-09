import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ITimezone } from '../../imports/models';
import { Location } from '.';
@Entity({ name: 'Timezone' })
export class Timezone extends BaseEntity implements ITimezone {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  description!: string;

  @Column()
  offset!: number;

  @OneToOne(() => Location, location => location.timezone)
  @JoinColumn()
  locationId!: string;
}
