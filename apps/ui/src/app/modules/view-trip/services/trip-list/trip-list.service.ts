import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { TripListItemModel } from '../../imports/models';
import { EndpointService } from '../../imports/services';

// TODO: Refactor to make it free of loose strings
/**
 * TODO: Refactor to make it free of loose strings
 *
 * @export
 * @class TripListService
 */
@Injectable({
  providedIn: 'root'
})
export class TripListService {
  #tripList$ = new BehaviorSubject<TripListItemModel[]>([]);
  #tripList: TripListItemModel[] = [];

  /**
   * Creates an instance of TripListService.
   * @param {EndpointService} _endpointService
   * @memberof TripListService
   */
  constructor(private _endpointService: EndpointService) { }

  fetchTripList(): void {
    this._endpointService
      .get<TripListItemModel[]>(`http://localhost:3333/api/trip/view-trip`)
      .pipe()
      .subscribe((trips: TripListItemModel[]) => {
        this._setTrips(trips);
      });
  }

  private _setTrips(trips: TripListItemModel[]): void {
    this.#tripList = [...trips];
    this.#tripList$.next(this.#tripList);
  }

  watchTripList$(): Observable<TripListItemModel[]> {
    return this.#tripList$.asObservable();
  }
}
