import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreHomeService } from '@ia-core/services/home/ia-core-home/ia-core-home.service';
import { IaCoreHomeAssetsModel } from '@ia-core/models/home/ia-core-home.model';

@Component({
  selector: 'app-ia-core-home-container',
  template: `<app-ia-core-home [assets] = "assets$ | async"></app-ia-core-home>`
})
export class IaCoreHomeContainerComponent implements OnInit {

  assets$: Observable<IaCoreHomeAssetsModel>;

  constructor(
    private _service: IaCoreHomeService
  ) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this.assets$ = this._service.watchAssets$();
  }
}
