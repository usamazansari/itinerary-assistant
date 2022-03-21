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
  @JoinColumn()
  validity!: string;

  @ManyToOne(() => User, user => user.identifications)
  user!: string;
}
