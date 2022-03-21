import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IAddress, LocationModel } from '../../imports/models';
import { Location } from '..';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Address' })
export class Address extends BaseEntity implements IAddress {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  room!: string;

  @Field()
  @Column()
  apartment!: string;

  @Field()
  @Column()
  wing!: string;

  @Field()
  @Column()
  street!: string;

  @Field()
  @Column()
  landmark!: string;

  @Field()
  @Column()
  locality!: string;

  @Field()
  @Column()
  suburb!: string;

  @Field()
  @Column()
  city!: string;

  @Field()
  @Column()
  state!: string;

  @Field()
  @Column()
  country!: string;

  @Field()
  @Column()
  zip!: string;

  @Field()
  @OneToOne(() => Location)
  @JoinColumn()
  location!: LocationModel;
}
