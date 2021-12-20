import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TripOverview extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: string;

  @Column({ type: 'int' })
  rating!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;
}
