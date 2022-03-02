import { BaseEntity, Column, Entity } from 'typeorm';

// TODO - Usama Ansari: Heavily extend models from `shared/data`

@Entity({ name: 'UserMaster' })
export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  email!: string;
}
