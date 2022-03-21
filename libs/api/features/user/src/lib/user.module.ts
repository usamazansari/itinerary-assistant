import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Identification,
  Photo,
  SocialConnection,
  Tenure
} from './imports/entities';

import { UserController } from './controllers';
import { UserService } from './services';
import { UserResolver } from './resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Identification,
      Photo,
      SocialConnection,
      Tenure
    ])
  ],
  controllers: [UserController],
  providers: [UserResolver, UserService],
  exports: []
})
export class UserModule {}
