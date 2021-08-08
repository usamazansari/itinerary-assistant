import { Module } from '@nestjs/common';

import { ApiCoreController } from './controllers';
import { ApiCoreService } from './services';

@Module({
  controllers: [ApiCoreController],
  providers: [ApiCoreService],
  exports: []
})
export class ApiCoreModule {}
