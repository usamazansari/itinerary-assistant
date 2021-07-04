import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { OnInit } from '@angular/core';
import type { HomeAssetsModel } from '@home/models/home/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _assets$: BehaviorSubject<HomeAssetsModel> = new BehaviorSubject<HomeAssetsModel>(null);

  @Input()
  set assets(value: HomeAssetsModel) { this._assets$.next(value); }
  get assets(): HomeAssetsModel { return this._assets$.getValue(); }

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
