import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { HomeService } from '@core/services/home/home.service';
import { IaCoreHomeAssetsModel } from '@core/models/home/home.model';

@Component({
  selector: 'app-home-container',
  template: `<app-home [assets]          = "assets$ | async"
                       (gotoViewTrip$)   = "gotoViewTrip()"
                       (gotoCreateTrip$) = "gotoCreateTrip()"></app-home>`
})
export class HomeContainerComponent implements OnInit {

  assets$: Observable<IaCoreHomeAssetsModel>;

  constructor(
    private _service: HomeService
  ) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this.assets$ = this._service.watchAssets$();
  }

  gotoViewTrip(): void {
    this._service.gotoViewTrip();
  }

  gotoCreateTrip(): void {
    this._service.gotoCreateTrip();
  }
}
