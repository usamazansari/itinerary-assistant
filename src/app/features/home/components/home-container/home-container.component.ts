import { Component } from '@angular/core';

import { HomeService } from '@core/services/home/home.service';

import type { OnInit } from '@angular/core';
import type { Observable } from 'rxjs';
import type { HomeAssetsModel } from '@home/models/home/home.model';

@Component({
  selector: 'app-home-container',
  template: `<app-home [assets]          = "assets$ | async"
                       (gotoViewTrip$)   = "gotoViewTrip()"
                       (gotoCreateTrip$) = "gotoCreateTrip()"></app-home>`
})
export class HomeContainerComponent implements OnInit {

  assets$: Observable<HomeAssetsModel>;

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
