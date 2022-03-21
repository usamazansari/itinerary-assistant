import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IIdentification } from '../../imports/models';
import { Tenure, User } from '..';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Identification' })
export class Identification
  extends BaseEntity
  implements IIdentification
{
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  type!: string;

  @Field()
  @Column()
  number!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @OneToOne(() => Tenure)
  @JoinColumn()
  validity!: string;

  // @Field()
  // @ManyToOne(() => User, user => user.identifications)
  // user!: string;
}
