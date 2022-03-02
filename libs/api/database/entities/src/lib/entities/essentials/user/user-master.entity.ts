import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

// TODO - Usama Ansari: Heavily extend models from `shared/data`

@Entity({ name: 'UserMaster' })
export class UserMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  email!: string;
}
