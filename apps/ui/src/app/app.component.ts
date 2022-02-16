import { Component, OnInit } from '@angular/core';

import type { Observable } from 'rxjs';

import type { LayoutData } from './imports/models';
import { RouterService } from './imports/services';

import { CoreService } from './services';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layoutData$!: Observable<LayoutData>;

  constructor(
    private _coreService: CoreService,
    private _router: RouterService
  ) {}

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
