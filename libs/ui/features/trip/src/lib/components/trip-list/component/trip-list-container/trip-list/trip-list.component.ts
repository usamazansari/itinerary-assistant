import { Component, Input } from '@angular/core';
import { trigger } from '@angular/animations';

import { BehaviorSubject } from 'rxjs';

import {
  TripListAssets,
  TripListData,
  TripListError,
  TripListFlags
} from '../../..';

import { fadeIn } from './trip-list.animation';

// TODO: Usama Ansari - Use error flags to show error messages in the API response.

@Component({
  selector: 'ia-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  animations: [trigger('fadeIn', fadeIn())]
})
export class TripListComponent {
  #assets$ = new BehaviorSubject<TripListAssets>(new TripListAssets());
  #data$ = new BehaviorSubject<TripListData>(new TripListData());
  #flag$ = new BehaviorSubject<TripListFlags>(new TripListFlags());
  #error$ = new BehaviorSubject<TripListError>(new TripListError());

  @Input()
  set assets(value: TripListAssets) {
    this.#assets$.next(value);
  }
  get assets(): TripListAssets {
    return this.#assets$.getValue();
  }

  @Input()
  set data(value: TripListData) {
    this.#data$.next(value);
  }
  get data(): TripListData {
    return this.#data$.getValue();
  }

  @Input()
  set flags(value: TripListFlags) {
    this.#flag$.next(value);
  }
  get flags(): TripListFlags {
    return this.#flag$.getValue();
  }

  @Input()
  set error(value: TripListError) {
    this.#error$.next(value);
  }
  get error(): TripListError {
    return this.#error$.getValue();
  }
}
