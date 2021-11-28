import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TripEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id!: string;
  @Column() rating!: number;
  @Column() title!: string;
}
