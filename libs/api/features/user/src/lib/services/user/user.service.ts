import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { from } from 'rxjs';
import type { Observable } from 'rxjs';

import { Repository } from 'typeorm';
import type { SelectQueryBuilder } from 'typeorm';

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
} from '../../imports/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Address)
    private _address: Repository<Address>,
    @InjectRepository(Coordinates)
    private _coordinates: Repository<Coordinates>,
    @InjectRepository(Identification)
    private _identification: Repository<Identification>,
    @InjectRepository(Location)
    private _location: Repository<Location>,
    @InjectRepository(Photo)
    private _photo: Repository<Photo>,
    @InjectRepository(SocialConnection)
    private _socialConnection: Repository<SocialConnection>,
    @InjectRepository(Tenure)
    private _tenure: Repository<Tenure>,
    @InjectRepository(Timezone)
    private _timezone: Repository<Timezone>,
    @InjectRepository(UserName)
    private _username: Repository<UserName>,
    @InjectRepository(User)
    private _user: Repository<User>
  ) {}

  findAll(): Observable<User[]> {
    // const users: SelectQueryBuilder<User> = this._user
    //   .createQueryBuilder()
    //   .select('user.username', 'username')
    //   .from(
    //     usernameQuery =>
    //       usernameQuery
    //         .select('user.username', 'username')
    //         .from(UserName, 'username'),
    //     'username'
    //   );
    return from(
      // users
      //   .printSql()
      this._user
        .createQueryBuilder()
        // .select('user')
        // .leftJoinAndSelect('user.username', 'username')
        // .leftJoinAndSelect('user.address', 'address')
        // .leftJoinAndSelect('user.socialConnection', 'socialConnection')
        // .leftJoinAndSelect('user.identifications', 'identifications')
        // .leftJoinAndSelect('user.photo', 'photo')
        // .printSql()
        .getMany()
        .then(
          data => data,
          error => {
            throw error;
          }
        )
        .catch(error => error)
    );
  }

  // async findOne(id: number): Promise<User | undefined> {
  //   return await this._repository.findOne(id);
  // }

  create(user: User): Observable<User> {
    return from(
      this._user
        .save(user)
        .then(
          data => data,
          error => {
            throw error;
          }
        )
        .catch(error => error)
    );
  }

  // async update(id: number, user: User): Promise<User> {
  //   return await this._repository.update(id, user);
  // }

  async delete(id: number): Promise<void> {
    await this._user.delete(id);
  }
}
