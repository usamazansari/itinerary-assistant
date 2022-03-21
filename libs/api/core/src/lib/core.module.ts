import { Module } from '@nestjs/common';

import { GraphQLModule } from './imports/modules';

import { CoreController } from './controllers';
import { CoreService } from './services';

@Module({
  controllers: [CoreController],
  imports: [GraphQLModule],
  providers: [CoreService],
  exports: [GraphQLModule]
})
export class CoreModule {}
