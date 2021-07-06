import { Component, OnInit } from '@angular/core';

import { TemporaryHomeService } from '@home/services/temporary-home/temporary-home.service';

import type { Observable } from 'rxjs';
import type { TemporaryHomeAssetsModel } from '@app/features/home/models/temporary-home/temporary-home.model';

@Component({
  selector: 'app-temporary-home-container',
  template: `<app-temporary-home [assets]          = "assets$ | async"
                                 (gotoCreateTrip$) = "gotoCreateTrip()"
                                 (gotoViewTrip$)   = "gotoViewTrip()"></app-temporary-home>`
})
export class TemporaryHomeContainerComponent implements OnInit {

  assets$: Observable<TemporaryHomeAssetsModel>;

  constructor(
    private _service: TemporaryHomeService
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
