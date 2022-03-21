import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ISocialConnection } from '../../imports/models';
import { User } from '..';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'SocialConnection' })
export class SocialConnection
  extends BaseEntity
  implements ISocialConnection
{
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  url!: string;

  // @Field()
  // @ManyToOne(() => User, user => user.socialConnection)
  // user!: string;
}
