import { Module } from '@nestjs/common';

import { ApiDatabaseModule } from './imports/modules';

import { ApiCoreController } from './controllers';
import { ApiCoreService } from './services';

@Module({
  controllers: [ApiCoreController],
  imports: [ApiDatabaseModule],
  providers: [ApiCoreService],
  exports: [ApiDatabaseModule]
})
export class ApiCoreModule { }
