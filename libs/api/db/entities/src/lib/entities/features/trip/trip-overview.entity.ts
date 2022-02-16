import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'TripOverview' })
export class TripOverview extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'int' })
  rating!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;
}
