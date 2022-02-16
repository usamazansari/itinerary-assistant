/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import type { Observable } from 'rxjs';
import { from } from 'rxjs';

import { TRIP_REPOSITORY } from '../../constants';

@Injectable()
export class TripService {
  // Inject Trip Repository
  constructor() {}

  // find from repository
  fetchTripList(): Observable<unknown[]> {
    return from(new Promise<unknown[]>(resolve => resolve([])));
  }

  // findOne from repository
  fetchTrip(id: string | number) {}
}
