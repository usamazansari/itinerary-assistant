import { Module } from '@nestjs/common';

import { GraphQLModule, OrmModule } from './imports/modules';

import { CoreController } from './controllers';
import { CoreService } from './services';

@Module({
  controllers: [CoreController],
  imports: [GraphQLModule, OrmModule],
  providers: [CoreService],
  exports: [GraphQLModule, OrmModule]
})
export class CoreModule {}
