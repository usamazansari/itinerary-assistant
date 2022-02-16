import { BaseEntity, Column } from 'typeorm';

export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  email!: string;
}
