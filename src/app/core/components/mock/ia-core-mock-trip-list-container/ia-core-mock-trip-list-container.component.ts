import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreMockTripListService } from '@ia-core/services/mock/ia-core-mock-trip-list/ia-core-mock-trip-list.service';

@Component({
  selector: 'app-ia-core-mock-trip-list-container',
  template: `<app-ia-core-mock-trip-list [tripList] = "tripList$ | async"></app-ia-core-mock-trip-list>`
})
export class IaCoreMockTripListContainerComponent implements OnInit {

  tripList$: Observable<any>; // <- models

  constructor(
    private _service: IaCoreMockTripListService
  ) { }

  ngOnInit(): void {
    this.tripList$ = this._service.watchTripList$();
  }
}
