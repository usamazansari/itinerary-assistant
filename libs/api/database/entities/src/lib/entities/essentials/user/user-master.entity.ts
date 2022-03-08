import {
  BaseEntity,
  Entity,
  // JoinColumn,
  // OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IUser } from '../../imports/models';

// import { UserOverview } from '.';

@Entity({ name: 'UserMaster' })
export class UserMaster extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id!: string;

  // @OneToOne(() => UserOverview)
  // @JoinColumn()
  // overview!: UserOverview;

  // @OneToOne(() => UserDetails)
  // @JoinColumn()
  // details!: UserDetails;
}
