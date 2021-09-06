import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject, timer } from 'rxjs';

import type { LoaderConfigModel } from '../../../../imports/models';
import { LoaderSize, LoaderConfigStub } from '../../../../imports/constants';

import type { HomeVMModel } from '../../../../models';
import { HomeVMStub } from '../../../../constants';

@Component({
  selector: 'ia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  #vm$ = new BehaviorSubject<HomeVMModel>(HomeVMStub);

  @Input()
  set vm(value: HomeVMModel) { this.#vm$.next(value ?? HomeVMStub); }
  get vm(): HomeVMModel { return this.#vm$.getValue(); }

  @Output() gotoViewTrip$: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotoCreateTrip$: EventEmitter<void> = new EventEmitter<void>();

  // TODO: ❌ Remove this
  loaderConfig$ = new BehaviorSubject<LoaderConfigModel>(LoaderConfigStub);

  ngOnInit(): void {
    // TODO: ❌ Remove this
    this.loaderConfig$.next({
      visible: true, size: LoaderSize.Small
    });
    timer(5000).subscribe(() => {
      this.loaderConfig$.next({
        ...this.loaderConfig$.getValue(),
        visible: false
      });
    });
  }

  gotoViewTrip(): void {
    this.gotoViewTrip$.emit();
  }

  gotoCreateTrip(): void {
    this.gotoCreateTrip$.emit();
  }
}
