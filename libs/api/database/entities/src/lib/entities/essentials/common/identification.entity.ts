import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IIdentification } from '../../imports/models';
import { Tenure } from '.';
import { User } from '..';

@Entity({ name: 'Identification' })
export class Identification
  extends BaseEntity
  implements IIdentification
{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  type!: string;

  @Column()
  number!: string;

  @Column()
  name!: string;

  @OneToOne(() => Tenure)
  validity!: string;

  @ManyToOne(() => User, user => user.identifications)
  user!: string;
}
