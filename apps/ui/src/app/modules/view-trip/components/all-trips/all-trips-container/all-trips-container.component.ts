import { Component, OnInit } from '@angular/core';

import type { Observable } from 'rxjs';

import type { TripModel } from '../../../imports/models';

import { AllTripsService } from '../../../services';

@Component({
  selector: 'ia-all-trips-container',
  template: `<ia-all-trips *ngIf      = "tripList$ | async as tripList"
                           [tripList] = "tripList"></ia-all-trips>`
})
export class AllTripsContainerComponent implements OnInit {
  // TODO: Use VM for trip tripList
  // TODO: Rename this component to TripsListContainerComponent
  tripList$!: Observable<TripModel[]>;

  constructor(private _service: AllTripsService) {}

  ngOnInit(): void {
    this._service.fetchTripList();
    this.tripList$ = this._service.watchTripList$();
  }
}
