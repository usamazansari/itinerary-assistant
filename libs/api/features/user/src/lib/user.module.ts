import { Module } from '@nestjs/common';

import { UserController } from './controllers';
import { UserService } from './services';
import { UserResolver } from './resolvers';

@Module({
  controllers: [UserController],
  providers: [UserResolver, UserService],
  exports: []
})
export class UserModule {}
