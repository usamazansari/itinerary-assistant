import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IAddress, LocationModel } from '../../imports/models';
import { Location } from '.';

@Entity({ name: 'Address' })
export class Address extends BaseEntity implements IAddress {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  room!: string;

  @Column()
  apartment!: string;

  @Column()
  wing!: string;

  @Column()
  street!: string;

  @Column()
  landmark!: string;

  @Column()
  locality!: string;

  @Column()
  suburb!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  country!: string;

  @Column()
  zip!: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location!: LocationModel;
}
