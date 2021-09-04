import { Component, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { TripListItemModel } from '../../../../imports/models';

@Component({
  selector: 'ia-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {
  #tripList = new BehaviorSubject<TripListItemModel[]>([]);

  @Input()
  set tripList(value: TripListItemModel[]) { this.#tripList.next(value); }
  get tripList(): TripListItemModel[] { return this.#tripList.getValue(); }
}
