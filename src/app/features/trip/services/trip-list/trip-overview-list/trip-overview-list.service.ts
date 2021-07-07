import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TRIP_OVERVIEW_LIST_STUB } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

import type { Observable } from 'rxjs';
import type { TripOverviewListModel } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

@Injectable({
  providedIn: 'root'
})
export class TripOverviewListService {

  private _vm$: BehaviorSubject<TripOverviewListModel> = new BehaviorSubject<TripOverviewListModel>(TRIP_OVERVIEW_LIST_STUB);

  private _vm: TripOverviewListModel = { ...TRIP_OVERVIEW_LIST_STUB };

  constructor() { }

  private _setVm(vm: TripOverviewListModel): void {
    this._vm = vm;
    this._vm$.next(this._vm);
  }

  resetVm(): void {
    this._vm = { ...TRIP_OVERVIEW_LIST_STUB };
    this._setVm(this._vm);
  }

  watchVm$(): Observable<TripOverviewListModel> {
    return this._vm$.asObservable();
  }
}
