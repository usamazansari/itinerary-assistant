import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

import * as Libraries from './imports/modules';

// import { DB_CONNECTION } from './configs/typeorm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot(DB_CONNECTION),
    Libraries.ApiCoreModule,
    Libraries.TripModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }

// TODO: Usama Ansari - 🗑️ Cleanup required
