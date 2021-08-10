import { Component, OnInit } from '@angular/core';

import { AllTripsService } from '../../../services';

import type { Observable } from 'rxjs';

@Component({
  selector: 'ia-all-trips-container',
  template: `<ia-all-trips *ngIf      = "tripList$ | async as tripList"
                           [tripList] = "tripList"></ia-all-trips>`
})
export class AllTripsContainerComponent implements OnInit {
  // TODO: Use VM for trip tripList
  // TODO: Rename this component to TripsListContainerComponent
  tripList$!: Observable<any[]>;

  constructor(private _service: AllTripsService) {}

  ngOnInit(): void {
    this._service.fetchTripList();
    this.tripList$ = this._service.watchTripList$();
  }
}
