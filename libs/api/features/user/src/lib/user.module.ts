import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Address,
  Coordinates,
  Identification,
  Location,
  Photo,
  SocialConnection,
  Tenure,
  Timezone,
  UserName,
  User
} from './imports/entities';

import { UserController } from './controllers';
import { UserService } from './services';
import { UserResolver } from './resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Address,
      Coordinates,
      Identification,
      Location,
      Photo,
      SocialConnection,
      Tenure,
      Timezone,
      UserName,
      User
    ])
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: []
})
export class UserModule {}
