import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { TemporaryHomeAssetsModel } from '@app/features/home/models/temporary-home/temporary-home.model';

@Component({
  selector: 'app-temporary-home',
  templateUrl: './temporary-home.component.html',
  styleUrls: ['./temporary-home.component.scss']
})
export class TemporaryHomeComponent implements OnInit {

  private _assets$: BehaviorSubject<TemporaryHomeAssetsModel> = new BehaviorSubject<TemporaryHomeAssetsModel>(null);

  @Input()
  set assets(value: TemporaryHomeAssetsModel) { this._assets$.next(value); }
  get assets(): TemporaryHomeAssetsModel { return this._assets$.getValue(); }

  @Output() gotoViewTrip$: EventEmitter<void> = new EventEmitter<void>();
  @Output() gotoCreateTrip$: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  gotoViewTrip(): void {
    this.gotoViewTrip$.emit();
  }

  gotoCreateTrip(): void {
    this.gotoCreateTrip$.emit();
  }

}
