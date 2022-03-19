import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import type { Observable } from 'rxjs';
import { from } from 'rxjs';

import { TripMaster } from '../../imports/entities';

@Injectable()
export class TripService {
  constructor() // @InjectRepository(TripMaster)
  // private _repository: Repository<TripMaster>
  {}

  // fetchTripList(): Observable<TripMaster[]> {
  //   return from(
  //     this._repository
  //       .find()
  //       .then(
  //         data => data,
  //         error => {
  //           throw error;
  //         }
  //       )
  //       .catch(error => error)
  //   );
  // }

  // fetchTrip(id: string | number) {
  //   return this._repository.findOne(id);
  // }
}
