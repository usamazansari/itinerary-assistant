import { Component, OnInit } from '@angular/core';

import { TripOverviewService } from '@app/features/trip/services/trip-list/trip-overview/trip-overview.service';

import type { Observable } from 'rxjs';
import type { TripOverviewModel } from '@app/features/trip/models/trip-list/trip-overview/trip-overview.model';

@Component({
  selector: 'app-trip-overview-container',
  template: `<app-trip-overview></app-trip-overview>`
})
export class TripOverviewContainerComponent implements OnInit {

  vm$: Observable<TripOverviewModel>;

  constructor(
    private _service: TripOverviewService
  ) { }

  ngOnInit(): void {
    this._service.resetVm();
    this.vm$ = this._service.watchVm$();
  }

}
