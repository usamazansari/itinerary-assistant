import { Component, OnInit } from '@angular/core';

import { TripOverviewListService } from '@app/features/trip/services/trip-list/trip-overview-list/trip-overview-list.service';

import type { Observable } from 'rxjs';
import type { TripOverviewListVMModel } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

/**
 * Container for `TripOverviewListComponent`
 *
 * @export
 * @class TripOverviewListContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-trip-overview-list-container',
  template: `<app-trip-overview-list [vm] = "vm$ | async"></app-trip-overview-list>`
})
export class TripOverviewListContainerComponent implements OnInit {

  /**
   * Virtual Memory to feed to the underlying component
   *
   * @type {Observable<TripOverviewListVMModel>}
   * @memberof TripOverviewListContainerComponent
   */
  vm$: Observable<TripOverviewListVMModel>;

  /**
   * Creates an instance of TripOverviewListContainerComponent.
   * 
   * @param {TripOverviewListService} _service Instance of `TripOverviewListService`
   * @memberof TripOverviewListContainerComponent
   */
  constructor(
    private _service: TripOverviewListService
  ) { }

  /**
   * Operations performed on initialization of `TripOverviewListContainerComponent`
   * 
   * 1. Reset the Virtual Memory
   * 2. Fetch the Trips List
   * 3. Watch the Virtual Memory
   *
   * @memberof TripOverviewListContainerComponent
   */
  ngOnInit(): void {
    this._service.resetVm();
    this._service.fetchTripList$();

    this.vm$ = this._service.watchVm$();
  }
}
