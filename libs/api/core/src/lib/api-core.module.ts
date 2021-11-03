import { Module } from '@nestjs/common';

import { ApiDatabaseTypeormModule } from './imports/modules';

import { ApiCoreController } from './controllers';
import { ApiCoreService } from './services';

@Module({
  controllers: [ApiCoreController],
  imports: [ApiDatabaseTypeormModule],
  providers: [ApiCoreService],
  exports: [ApiDatabaseTypeormModule]
})
export class ApiCoreModule { }
