import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IAccomplice } from '../../imports/models';

import { AccompliceOverview } from '.';

@Entity({ name: 'AccompliceMaster' })
export class AccompliceMaster
  extends BaseEntity
  implements IAccomplice
{
  @PrimaryGeneratedColumn()
  id!: string;

  @OneToOne(() => AccompliceOverview)
  @JoinColumn()
  overview!: AccompliceOverview;

  // @OneToOne(() => AccompliceDetails)
  // @JoinColumn()
  // details!: AccompliceDetails;
}
