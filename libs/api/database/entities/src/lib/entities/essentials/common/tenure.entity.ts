import { Field, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ITenure } from '../../imports/models';

@ObjectType()
@Entity({ name: 'Tenure' })
export class Tenure extends BaseEntity implements ITenure {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  start!: Date;

  @Field()
  @Column()
  end!: Date;
}
