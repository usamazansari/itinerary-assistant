import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { HomeVMModel } from '../../../../models';
import { HomeVMStub } from '../../../../constants';

@Component({
  selector: 'ia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  #vm$ = new BehaviorSubject<HomeVMModel>(HomeVMStub);

  @Input()
  set vm(value: HomeVMModel) { this.#vm$.next(value ?? HomeVMStub); }
  get vm(): HomeVMModel { return this.#vm$.getValue(); }

  @Output() gotoViewTrip$: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotoCreateTrip$: EventEmitter<void> = new EventEmitter<void>();

  gotoViewTrip(): void {
    this.gotoViewTrip$.emit();
  }

  gotoCreateTrip(): void {
    this.gotoCreateTrip$.emit();
  }
}
