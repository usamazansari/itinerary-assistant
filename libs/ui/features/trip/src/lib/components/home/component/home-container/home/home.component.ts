import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HomeAssets } from '../../..';

@Component({
  selector: 'ia-trip-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  #assets$ = new BehaviorSubject<HomeAssets>(new HomeAssets());

  @Input()
  set assets(value: HomeAssets) { this.#assets$.next(value); }
  get assets(): HomeAssets { return this.#assets$.getValue(); }

  @Output() gotoViewTrip$: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotoCreateTrip$: EventEmitter<void> = new EventEmitter<void>();

  gotoViewTrip(): void {
    this.gotoViewTrip$.emit();
  }

  gotoCreateTrip(): void {
    this.gotoCreateTrip$.emit();
  }
}
