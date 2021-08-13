import { Injectable } from '@nestjs/common';

import { tripListStub, goa, ladakh, manali, northEast } from '../mock';

import type { TripModel, TripOverviewModel } from '../imports/models';

@Injectable()
export class TripsService {
  #tripList: TripModel[] = [...tripListStub];
  #tripOverviewDict: { [tripName: string]: TripOverviewModel } = {
    goa,
    ladakh,
    manali,
    northEast
  };
  #tripOverview!: TripOverviewModel;

  fetchTripsList(): TripModel[] {
    return [...this.#tripList];
  }

  fetchTripOverview(tripName: string): TripOverviewModel {
    this.setTripOverview(tripName);
    return { ...this.#tripOverview };
  }

  setTripOverview(tripName: string): void {
    tripName = kebabToCamel(tripName);
    this.#tripOverview = this.#tripOverviewDict[tripName];
  }
}
function kebabToCamel(input: string): string {
  return input
    .split('-')
    .map((s, i) =>
      !!i ? `${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()}` : s
    )
    .join('');
}
