import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

// TODO - Usama Ansari: Heavily extend models from `shared/data`

@Entity({ name: 'TripMaster' })
export class TripMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'int' })
  rating!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;
}
