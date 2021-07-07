import { Component, OnInit } from '@angular/core';

import { TripOverviewListService } from '@app/features/trip/services/trip-list/trip-overview-list/trip-overview-list.service';

import type { Observable } from 'rxjs';
import type { TripOverviewListModel } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

@Component({
  selector: 'app-trip-overview-list-container',
  template: `<app-trip-overview-list [vm] = "vm$ | async"></app-trip-overview-list>`
})
export class TripOverviewListContainerComponent implements OnInit {

  vm$: Observable<TripOverviewListModel>;

  constructor(
    private _service: TripOverviewListService
  ) { }

  ngOnInit(): void {
    this._service.resetVm();
    this.vm$ = this._service.watchVm$();
  }
}
