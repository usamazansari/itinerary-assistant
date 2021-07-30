import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HOME_VM_STUB } from '../../../../models/home/home.model';

import type { HomeVMModel } from '../../../../models/home/home.model';

@Component({
  selector: 'ia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _vm$ = new BehaviorSubject<HomeVMModel>(HOME_VM_STUB);

  @Input()
  set vm(value: HomeVMModel) {
    this._vm$.next(value);
  }
  get vm(): HomeVMModel {
    return this._vm$.getValue();
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
