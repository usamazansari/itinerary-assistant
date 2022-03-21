import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IPhoto } from '../../imports/models';
import { User } from '..';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Photos' })
export class Photo extends BaseEntity implements IPhoto {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  large!: string;

  @Field()
  @Column()
  medium!: string;

  @Field()
  @Column()
  thumbnail!: string;

  // @Field()
  // @ManyToOne(() => User, user => user.photo)
  // user!: string;
}
