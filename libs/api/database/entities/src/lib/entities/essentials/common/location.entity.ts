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
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Location' })
export class Location extends BaseEntity implements ILocation {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  plusCode!: string;

  @Field()
  @OneToOne(() => Coordinates)
  @JoinColumn()
  coordinates!: CoordinatesModel;

  @Field()
  @OneToOne(() => Timezone)
  @JoinColumn()
  timezone!: TimezoneModel;
}
