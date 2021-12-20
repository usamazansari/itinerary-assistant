import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { HttpStatus } from '../../imports/constants';
import { TripOverview } from '../../imports/entities';
import { APIResponseModel } from '../../imports/models';
import type { TripOverviewModel } from '../../imports/models';

import { goa, ladakh, manali, northEast } from '../../mock';
import { TRIP_REPOSITORY } from '../../constants';

const TripListResponseStub = new APIResponseModel<TripOverviewModel[]>();

@Injectable()
export class TripService {
  #tripList$ = new BehaviorSubject<APIResponseModel<TripOverviewModel[]>>(TripListResponseStub);
  #tripList: APIResponseModel<TripOverviewModel[]> = TripListResponseStub;
  #tripOverviewDict: { [tripName: string]: TripOverviewModel; } = {
    goa,
    ladakh,
    manali,
    northEast
  };
  #tripOverview!: TripOverviewModel;

  constructor(
    @Inject(TRIP_REPOSITORY)
    private _repository: Repository<TripOverview>
  ) { }

  private _setTripList(tripList: APIResponseModel<TripOverviewModel[]>): void {
    this.#tripList = { ...tripList ?? TripListResponseStub };
    this.#tripList$.next(this.#tripList);
  }

  fetchTripList(): Observable<APIResponseModel<TripOverviewModel[]>> {
    this._repository.find()
      .then(trips => {

        // Logpoint of trips

        this._setTripList(new APIResponseModel(
          [],
          null,
          HttpStatus.Ok
        ));
      })
      .catch(error => {

        // Logpoint of error

        this._setTripList(new APIResponseModel(
          [],
          error,
          error.status ?? HttpStatus.InternalServerError
        ));
      });
    return this.#tripList$.asObservable();
  };

  fetchTrip(id: string | number) {
    return this._repository.findOne(id);
  }

  // fetchTripList(): TripListItemModel[] {
  //   return [...this.#tripList];
  // }

  fetchTripOverview(tripName: string): TripOverviewModel {
    this.setTripOverview(tripName);
    return { ...this.#tripOverview };
  }

  setTripOverview(tripName: string): void {
    tripName = kebabToCamel(tripName);
    this.#tripOverview = this.#tripOverviewDict[tripName];
  }
}

// TODO: Move this function into `utilities`
/**
 * Converts an input string from `kebab-case` to `camelCase`
 *
 * @param {string} input Input string in `kebab-case`
 * @return {*}  {string} Output string in `camelCase`
 */
function kebabToCamel(input: string): string {
  return input
    .split('-')
    .map((s, i) =>
      !!i
        ? `${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()}`
        : s.toLowerCase()
    )
    .join('');
}
