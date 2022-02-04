import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import type { Observable } from 'rxjs';
import { from } from 'rxjs';

import { TripOverview } from '../../imports/entities';
import { TRIP_REPOSITORY } from '../../constants';

@Injectable()
export class TripService {

  constructor(
    @Inject(TRIP_REPOSITORY)
    private _repository: Repository<TripOverview>
  ) { }

  fetchTripList(): Observable<TripOverview[]> {
    return from(
      this._repository.find()
        .then(data => data, error => { throw error; })
        .catch(error => error)
    );
  };

  fetchTrip(id: string | number) {
    return this._repository.findOne(id);
  }
}
