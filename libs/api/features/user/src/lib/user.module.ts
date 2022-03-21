import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SocialConnection } from './imports/entities';

import { UserController } from './controllers';
import { UserService } from './services';
import { UserResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([SocialConnection])],
  controllers: [UserController],
  providers: [UserResolver, UserService],
  exports: []
})
export class UserModule {}
