import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { TripModel } from '../../imports/models';
import { EndpointService } from '../../imports/services';

@Injectable({
  providedIn: 'root'
})
export class AllTripsService {
  // TODO: Use VM for trip tripList
  // TODO: Rename this service to TripsListService
  #tripList$ = new BehaviorSubject<TripModel[]>([]);
  #tripList: TripModel[] = [];

  /**
   * Creates an instance of AllTripsService.
   * @param {EndpointService} _endpointService
   * @memberof AllTripsService
   */
  constructor(private _endpointService: EndpointService) {}

  fetchTripList(): void {
    this._endpointService
      .get<TripModel[]>(`http://localhost:3333/api/trips`)
      .pipe()
      .subscribe((trips: TripModel[]) => {
        this._setTrips(trips);
      });
  }

  private _setTrips(trips: TripModel[]): void {
    this.#tripList = [...trips];
    this.#tripList$.next(this.#tripList);
  }

  watchTripList$(): Observable<TripModel[]> {
    return this.#tripList$.asObservable();
  }
}
