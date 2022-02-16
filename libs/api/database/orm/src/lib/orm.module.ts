import { Module, OnModuleDestroy } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { MySQLConfig } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(MySQLConfig)]
})
export class OrmModule implements OnModuleDestroy {
  constructor(private connection: Connection) {}

  onModuleDestroy() {
    this.connection.close();
  }
}
