import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TRIP_OVERVIEW_LIST_STUB } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

import type { TripOverviewListVMModel } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

/**
 * `TripOverviewListComponent`
 *
 * @export
 * @class TripOverviewListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-trip-overview-list',
  templateUrl: './trip-overview-list.component.html',
  styleUrls: ['./trip-overview-list.component.scss']
})
export class TripOverviewListComponent implements OnInit {

  /**
   * Virtual Memory as a `BehaviorSubject` to be used by `getter` and `setter`
   *
   * @private
   * @type {BehaviorSubject<TripOverviewListVMModel>}
   * @memberof TripOverviewListComponent
   */
  private _vm$: BehaviorSubject<TripOverviewListVMModel> = new BehaviorSubject<TripOverviewListVMModel>(TRIP_OVERVIEW_LIST_STUB);

  /**
   * The virtual memory of `TripOverviewListComponent`
   *
   * @memberof TripOverviewListComponent
   */
  @Input()
  set vm(value: TripOverviewListVMModel) { this._vm$.next(value); }
  get vm(): TripOverviewListVMModel { return this._vm$.getValue(); }

  constructor() { }

  ngOnInit(): void { }
}
