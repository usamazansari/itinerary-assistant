import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ITimezone } from '../../imports/models';
import { Location } from '..';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Timezone' })
export class Timezone extends BaseEntity implements ITimezone {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  offset!: number;

  @Field()
  @OneToOne(() => Location, location => location.timezone)
  location!: string;
}
