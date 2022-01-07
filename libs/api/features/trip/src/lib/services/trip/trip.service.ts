import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { HttpStatus } from '../../imports/constants';
import { TripOverview } from '../../imports/entities';
import { APIResponseModel } from '../../imports/models';
import type { TripOverview } from '../../imports/models';

import { goa, ladakh, manali, northEast } from '../../mock';
import { TRIP_REPOSITORY } from '../../constants';

@Injectable()
export class TripService {
  #tripOverviewDict: { [tripName: string]: TripOverview; } = {
    goa,
    ladakh,
    manali,
    northEast
  };
  #tripOverview!: TripOverview;

  constructor(
    @Inject(TRIP_REPOSITORY)
    private _repository: Repository<TripOverview>
  ) { }


  fetchTripList(): Promise<APIResponseModel<TripOverview[]>> {
    return this._repository.find()
      .then(trips => new APIResponseModel(
        trips,
        null,
        HttpStatus.Ok
      ))
      .catch(error => new APIResponseModel(
        [],
        error,
        error.status ?? HttpStatus.InternalServerError
      ));
  };

  fetchTrip(id: string | number) {
    return this._repository.findOne(id);
  }

  // fetchTripList(): TripListItemModel[] {
  //   return [...this.#tripList];
  // }
}
