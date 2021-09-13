import { Component, Input } from '@angular/core';
import { trigger } from '@angular/animations';

import { BehaviorSubject } from 'rxjs';

import type { TripListDataModel } from '../../../../imports/models';

import {
  TripListAssetsStub,
  TripListDataStub,
  TripListErrorStub,
  TripListFlagStub
} from '../../../../constants';

import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '../../../../models';

import { fadeIn } from './trip-list.animation';

@Component({
  selector: 'ia-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  animations: [trigger('fadeIn', fadeIn())]
})
export class TripListComponent {
  #assets$ = new BehaviorSubject<TripListAssetsModel>(TripListAssetsStub);
  #data$ = new BehaviorSubject<TripListDataModel>(TripListDataStub);
  #flag$ = new BehaviorSubject<TripListFlagModel>(TripListFlagStub);
  #error$ = new BehaviorSubject<TripListErrorModel>(TripListErrorStub);

  @Input()
  set assets(value: TripListAssetsModel) { this.#assets$.next(value); }
  get assets(): TripListAssetsModel { return this.#assets$.getValue(); }

  @Input()
  set data(value: TripListDataModel) { this.#data$.next(value); }
  get data(): TripListDataModel { return this.#data$.getValue(); }

  @Input()
  set flags(value: TripListFlagModel) { this.#flag$.next(value); }
  get flags(): TripListFlagModel { return this.#flag$.getValue(); }

  @Input()
  set error(value: TripListErrorModel) { this.#error$.next(value); }
  get error(): TripListErrorModel { return this.#error$.getValue(); }
}
