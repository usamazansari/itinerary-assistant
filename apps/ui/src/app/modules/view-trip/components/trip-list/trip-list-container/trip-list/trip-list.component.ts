import { Component, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { TripListItemModel } from '../../../../imports/models';

import { TripListErrorStub } from '../../../../constants';
import type { TripListErrorModel } from '../../../../models';

@Component({
  selector: 'ia-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {
  #tripList$ = new BehaviorSubject<TripListItemModel[]>([]);
  #error$ = new BehaviorSubject<TripListErrorModel>(TripListErrorStub);

  @Input()
  set tripList(value: TripListItemModel[]) { this.#tripList$.next(value); }
  get tripList(): TripListItemModel[] { return this.#tripList$.getValue(); }

  @Input()
  set error(value: TripListErrorModel) { this.#error$.next(value); }
  get error(): TripListErrorModel { return this.#error$.getValue(); }
}
