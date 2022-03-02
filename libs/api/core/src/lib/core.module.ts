import { Module } from '@nestjs/common';

import { OrmModule } from './imports/modules';

import { CoreController } from './controllers';
import { CoreService } from './services';

@Module({
  controllers: [CoreController],
  imports: [OrmModule],
  providers: [CoreService],
  exports: [OrmModule]
})
export class CoreModule {}
