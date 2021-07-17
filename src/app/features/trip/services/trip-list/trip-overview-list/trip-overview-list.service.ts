import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { FirebaseService } from '@core/services/common/firebase/firebase.service';

import { TRIP_OVERVIEW_LIST_STUB } from '@trip/models/trip-list/trip-overview-list/trip-overview-list.model';
import * as Constants from '@trip/constants/constants';

import type { Observable } from 'rxjs';
import type { TripOverviewListVMModel, TripOverviewModel } from '@trip/models/trip-list/trip-overview-list/trip-overview-list.model';

/**
 * Service associated with `TripOverviewListComponent`
 *
 * @export
 * @class TripOverviewListService
 */
@Injectable({
  providedIn: 'root'
})
export class TripOverviewListService {

  /**
   * Virtual Memory of `TripOverviewListComponent` as a `BehaviorSubject`
   *
   * @private
   * @type {BehaviorSubject<TripOverviewListVMModel>}
   * @memberof TripOverviewListService
   */
  private _vm$: BehaviorSubject<TripOverviewListVMModel> = new BehaviorSubject<TripOverviewListVMModel>(TRIP_OVERVIEW_LIST_STUB);

  /**
   * Actual Virtual Memory of `TripOverviewListComponent`
   *
   * @private
   * @type {TripOverviewListVMModel}
   * @memberof TripOverviewListService
   */
  private _vm: TripOverviewListVMModel = { ...TRIP_OVERVIEW_LIST_STUB };

  /**
   * Creates an instance of TripOverviewListService.
   * 
   * @param {FirebaseService} _firebase Instance of FirebaseService from `@core`
   * @memberof TripOverviewListService
   */
  constructor(
    private _firebase: FirebaseService
  ) { }

  /**
   * Update the Virtual Memory
   *
   * @private For internal use only
   * @param {TripOverviewListVMModel} vm Updated value of VM
   * @memberof TripOverviewListService
   */
  private _setVm(vm: TripOverviewListVMModel): void {
    this._vm = vm;
    this._vm$.next(this._vm);
  }

  /**
   * Reinitialize the Virtual Memory
   *
   * @memberof TripOverviewListService
   */
  resetVm(): void {
    this._vm = { ...TRIP_OVERVIEW_LIST_STUB };
    this._setVm(this._vm);
  }

  watchVm$(): Observable<TripOverviewListVMModel> {
    return this._vm$.asObservable();
  }

  fetchTripList$(): void {
    this._vm = {
      ...this._vm,
      flags: {
        ...this._vm.flags,
        trips: {
          ...this._vm.flags.trips,
          progress: true
        }
      }
    };
    this._setVm(this._vm);

    this._firebase.watchCollection$(Constants.TRIP_COLLECTION)
      .pipe()
      .subscribe({
        next: tripList => {
          const trips: TripOverviewModel[] = [];
          tripList.forEach(trip => {
            trips.push(trip as TripOverviewModel);
          });

          this._vm = {
            ...this._vm,
            trips,
            flags: {
              ...this._vm.flags,
              trips: {
                ...this._vm.flags.trips,
                progress: false,
                success: true
              }
            }
          };
          this._setVm(this._vm);

        }
      });
  }
}
