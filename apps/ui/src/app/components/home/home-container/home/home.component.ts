import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HomeVMStub } from '../../../../models';
import type { HomeVMModel } from '../../../../models';

@Component({
  selector: 'ia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  #vm$ = new BehaviorSubject<HomeVMModel>(HomeVMStub);

  @Input()
  set vm(value: HomeVMModel) {
    this.#vm$.next(value);
  }
  get vm(): HomeVMModel {
    return this.#vm$.getValue();
  }

  @Output() gotoViewTrip$: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotoCreateTrip$: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  gotoViewTrip(): void {
    this.gotoViewTrip$.emit();
  }

  gotoCreateTrip(): void {
    this.gotoCreateTrip$.emit();
  }
}
