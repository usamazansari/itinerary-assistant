import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ICoordinates } from '../../imports/models';
import { Location } from '.';

@Entity({ name: 'Coordinates' })
export class Coordinates extends BaseEntity implements ICoordinates {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  latitude!: number;

  @Column()
  longitude!: number;

  @OneToOne(() => Location, location => location.coordinates)
  @JoinColumn()
  location!: string;
}