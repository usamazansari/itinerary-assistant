import { Field, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IUserName } from '../../imports/models';

@ObjectType()
@Entity({ name: 'UserName' })
export class UserName extends BaseEntity implements IUserName {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  first!: string;

  @Field()
  @Column()
  last!: string;

  @Field()
  @Column({ nullable: true })
  full!: string;
}
