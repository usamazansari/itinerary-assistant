import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IaCoreHomeAssetsModel } from '@ia-core/models/home/ia-core-home.model';

@Component({
  selector: 'app-ia-core-home',
  templateUrl: './ia-core-home.component.html',
  styleUrls: ['./ia-core-home.component.scss']
})
export class IaCoreHomeComponent implements OnInit {

  private _assets$: BehaviorSubject<IaCoreHomeAssetsModel> = new BehaviorSubject<IaCoreHomeAssetsModel>(null);

  @Input()
  set assets(value: IaCoreHomeAssetsModel) { this._assets$.next(value); }
  get assets(): IaCoreHomeAssetsModel { return this._assets$.getValue(); }

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
