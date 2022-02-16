import { Module } from '@nestjs/common';

import { CoreController } from './controllers';
import { CoreService } from './services';

@Module({
  controllers: [CoreController],
  imports: [],
  providers: [CoreService],
  exports: []
})
export class CoreModule {}
