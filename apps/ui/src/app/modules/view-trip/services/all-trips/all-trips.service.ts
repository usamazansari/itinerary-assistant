import { Injectable } from '@angular/core';

import { BehaviorSubject, of } from 'rxjs';

import { EndpointService } from '../../imports/services';

import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllTripsService {
  // TODO: Use VM for trip tripList
  // TODO: Rename this service to TripsListService
  #tripList$ = new BehaviorSubject<any[]>([]);
  #tripList: any[] = [];

  /**
   * Creates an instance of AllTripsService.
   * @param {EndpointService} _endpointService
   * @memberof AllTripsService
   */
  constructor(private _endpointService: EndpointService) {}

  fetchTripList(): void {
    this._endpointService
      .get<any[]>(`http://localhost:3333/api/trips`)
      .pipe()
      .subscribe((trips: any[]) => {
        this._setTrips(trips);
      });
  }

  private _setTrips(trips: any[]): void {
    this.#tripList = [...trips];
    this.#tripList$.next(this.#tripList);
  }

  watchTripList$(): Observable<any[]> {
    return this.#tripList$.asObservable();
  }
}
