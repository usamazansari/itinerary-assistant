import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ia-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {
  // TODO: Use VM for trip tripList
  // TODO: Rename this component to TripsListComponent
  #tripList = new BehaviorSubject<any[]>([]);

  @Input() set tripList(value: any[]) {
    this.#tripList.next(value);
  }
  get tripList(): any[] {
    return this.#tripList.getValue();
  }

  constructor() {}

  ngOnInit(): void {}
}
