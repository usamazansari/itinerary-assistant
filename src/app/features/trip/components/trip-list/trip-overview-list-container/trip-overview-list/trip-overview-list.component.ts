import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TRIP_OVERVIEW_LIST_STUB } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

import type { TripOverviewListModel } from '@app/features/trip/models/trip-list/trip-overview-list/trip-overview-list.model';

@Component({
  selector: 'app-trip-overview-list',
  templateUrl: './trip-overview-list.component.html',
  styleUrls: ['./trip-overview-list.component.scss']
})
export class TripOverviewListComponent implements OnInit {

  private _vm$: BehaviorSubject<TripOverviewListModel> = new BehaviorSubject<TripOverviewListModel>(TRIP_OVERVIEW_LIST_STUB);

  @Input()
  set vm(value: TripOverviewListModel) { this._vm$.next(value); }
  get vm(): TripOverviewListModel { return this._vm$.getValue(); }

  constructor() { }

  ngOnInit(): void { }

}
