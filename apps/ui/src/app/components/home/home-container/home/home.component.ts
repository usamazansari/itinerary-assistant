import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HomeAssetsStub } from '../../../../constants';
import { HomeAssetsModel } from '../../../../models';

@Component({
  selector: 'ia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  #assets$ = new BehaviorSubject<HomeAssetsModel>(HomeAssetsStub);

  @Input()
  set assets(value: HomeAssetsModel) { this.#assets$.next(value ?? HomeAssetsStub); }
  get assets(): HomeAssetsModel { return this.#assets$.getValue(); }

  @Output() gotoViewTrip$: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotoCreateTrip$: EventEmitter<void> = new EventEmitter<void>();

  gotoViewTrip(): void {
    this.gotoViewTrip$.emit();
  }

  gotoCreateTrip(): void {
    this.gotoCreateTrip$.emit();
  }
}
