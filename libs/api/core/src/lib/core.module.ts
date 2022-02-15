import { Module } from '@nestjs/common';

import { TypeormModule } from './imports/modules';

import { CoreController } from './controllers';
import { CoreService } from './services';

@Module({
  controllers: [CoreController],
  imports: [TypeormModule],
  providers: [CoreService],
  exports: [TypeormModule]
})
export class CoreModule {}
