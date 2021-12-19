import { Inject, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

import { TripListItemModel, TripOverviewModel } from '../../imports/models';
import { TripEntity } from '../../imports/entities';

import { TripListStub, goa, ladakh, manali, northEast } from '../../mock';
import { TRIP_REPOSITORY } from '../../constants';

@Injectable()
export class TripService {
  #tripList: TripListItemModel[] = [...TripListStub];
  #tripOverviewDict: { [tripName: string]: TripOverviewModel; } = {
    goa,
    ladakh,
    manali,
    northEast
  };
  #tripOverview!: TripOverviewModel;

  constructor(
    @Inject(TRIP_REPOSITORY) private _repository: Repository<TripEntity>
  ) { }

  fetchTripList(): Observable<TripEntity[]> {
    return from(this._repository.find());
  }

  // fetchTrip(id: string | number): Observable<TripEntity> {
  //   return from(this._repository.findOne(id));
  // }

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
