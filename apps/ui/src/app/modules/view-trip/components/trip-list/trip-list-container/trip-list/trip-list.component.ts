import { Component, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TripListAssetsStub, TripListDataStub, TripListErrorStub } from '../../../../constants';
import type { TripListAssetsModel, TripListDataModel, TripListErrorModel } from '../../../../models';

@Component({
  selector: 'ia-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {
  #assets$ = new BehaviorSubject<TripListAssetsModel>(TripListAssetsStub);
  #data$ = new BehaviorSubject<TripListDataModel>(TripListDataStub);
  #error$ = new BehaviorSubject<TripListErrorModel>(TripListErrorStub);

  @Input()
  set assets(value: TripListAssetsModel) { this.#assets$.next(value); }
  get assets(): TripListAssetsModel { return this.#assets$.getValue(); }

  @Input()
  set data(value: TripListDataModel) { this.#data$.next(value); }
  get data(): TripListDataModel { return this.#data$.getValue(); }

  @Input()
  set error(value: TripListErrorModel) { this.#error$.next(value); }
  get error(): TripListErrorModel { return this.#error$.getValue(); }
}
