import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IUserOverview } from '../../imports/models';

@Entity({ name: 'UserOverview' })
export class UserOverview extends BaseEntity implements IUserOverview {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  displayName!: string;

  @Column()
  displayAvatar!: string;
}
