import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import type { TripModel } from '../../../../imports/models';

@Component({
  selector: 'ia-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {
  // TODO: Use VM for trip tripList
  // TODO: Rename this component to TripsListComponent
  #tripList = new BehaviorSubject<TripModel[]>([]);

  @Input() set tripList(value: TripModel[]) {
    this.#tripList.next(value);
  }
  get tripList(): TripModel[] {
    return this.#tripList.getValue();
  }

  constructor() {}

  ngOnInit(): void {}
}
