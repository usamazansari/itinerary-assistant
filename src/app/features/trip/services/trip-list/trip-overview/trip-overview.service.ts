import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TRIP_OVERVIEW_STUB } from '@app/features/trip/models/trip-list/trip-overview/trip-overview.model';

import type { Observable } from 'rxjs';
import type { TripOverviewModel } from '@app/features/trip/models/trip-list/trip-overview/trip-overview.model';

@Injectable({
  providedIn: 'root'
})
export class TripOverviewService {

  private _vm$: BehaviorSubject<TripOverviewModel> = new BehaviorSubject<TripOverviewModel>(TRIP_OVERVIEW_STUB);

  private _vm: TripOverviewModel = { ...TRIP_OVERVIEW_STUB };

  constructor() { }

  private _setVm(vm: TripOverviewModel): void {
    this._vm = vm;
    this._vm$.next(this._vm);
  }

  resetVm(): void {
    this._vm = { ...TRIP_OVERVIEW_STUB };
    this._setVm(this._vm);
  }

  watchVm$(): Observable<TripOverviewModel> {
    return this._vm$.asObservable();
  }
}
