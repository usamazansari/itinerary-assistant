import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TRIP_OVERVIEW_STUB } from '@app/features/trip/models/trip-list/trip-overview/trip-overview.model';

import type { TripOverviewModel } from '@app/features/trip/models/trip-list/trip-overview/trip-overview.model';

@Component({
  selector: 'app-trip-overview',
  templateUrl: './trip-overview.component.html',
  styleUrls: ['./trip-overview.component.scss']
})
export class TripOverviewComponent implements OnInit {

  private _vm$: BehaviorSubject<TripOverviewModel> = new BehaviorSubject<TripOverviewModel>(TRIP_OVERVIEW_STUB);

  @Input()
  set vm(value: TripOverviewModel) { this._vm$.next(value); }
  get vm(): TripOverviewModel { return this._vm$.getValue(); }

  constructor() { }

  ngOnInit(): void {
  }

}
