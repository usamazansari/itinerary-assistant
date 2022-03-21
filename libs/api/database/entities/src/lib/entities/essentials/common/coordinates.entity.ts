import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ICoordinates } from '../../imports/models';
import { Location } from '..';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Coordinates' })
export class Coordinates extends BaseEntity implements ICoordinates {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  latitude!: number;

  @Field()
  @Column()
  longitude!: number;

  @Field()
  @OneToOne(() => Location, location => location.coordinates)
  location!: string;
}
