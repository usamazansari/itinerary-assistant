import { BaseEntity, Column } from 'typeorm';

export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar' }) name!: string;
  @Column({ type: 'varchar' }) email!: string;
}

// TODO: Usama Ansari - 🗑️ Cleanup required
