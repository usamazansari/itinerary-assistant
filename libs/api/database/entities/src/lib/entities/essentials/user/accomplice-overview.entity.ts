import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IAccompliceOverview } from '../../imports/models';

@Entity({ name: 'AccompliceOverview' })
export class AccompliceOverview
  extends BaseEntity
  implements IAccompliceOverview
{
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  displayName!: string;

  @Column()
  displayAvatar!: string;
}
