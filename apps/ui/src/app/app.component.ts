import { Component, OnInit } from '@angular/core';

import type { Observable } from 'rxjs';

import { RouterService } from './imports/services';
import type { LayoutDataModel } from './imports/models';

import { CoreService } from './services';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layoutData$!: Observable<LayoutDataModel>;

  constructor(
    private _coreService: CoreService,
    private _router: RouterService
  ) { }

  ngOnInit(): void {
    this._coreService.fetchLayoutData();
    this.layoutData$ = this._coreService.watchLayoutData$();
  }

  navigate(): void {
    this._router.navigate({
      routes: [],
      extras: {}
    });
  }
}
