import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import {
  ILocation,
  CoordinatesModel,
  TimezoneModel
} from '../../imports/models';
import { Coordinates, Timezone } from '..';

@Entity({ name: 'Location' })
export class Location extends BaseEntity implements ILocation {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  plusCode!: string;

  @OneToOne(() => Coordinates)
  @JoinColumn()
  coordinates!: CoordinatesModel;

  @OneToOne(() => Timezone)
  @JoinColumn()
  timezone!: TimezoneModel;
}
