import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// :recycle: Optimization Required

@Component({
  selector: 'app-ia-core-mock-trip-list',
  templateUrl: './ia-core-mock-trip-list.component.html',
  styleUrls: ['./ia-core-mock-trip-list.component.scss']
})
export class IaCoreMockTripListComponent implements OnInit {

  private _tripList$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  @Input()
  set tripList(value: any) { this._tripList$.next(value); }
  get tripList(): any { return this._tripList$.getValue(); }

  constructor() { }

  ngOnInit(): void {
  }

}
