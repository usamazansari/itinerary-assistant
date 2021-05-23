import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreNavbarService } from '@ia-core/services/navbar/ia-core-navbar/ia-core-navbar.service';
import { IaNavbarRouterPayloadModel } from '@ia-core/models/navigation/ia-navigation-model';
import { IaNavbarAssetsModel } from '@ia-core/models/navigation/navbar/ia-navbar.model';

@Component({
  selector: 'app-ia-core-navbar-container',
  template: `<app-ia-core-navbar [assets]         = "assets$ | async"
                                 (navigate$)      = "navigate($event)"
                                 (toggleSidenav$) = "toggleSidenav()"></app-ia-core-navbar>`
})
export class IaCoreNavbarContainerComponent implements OnInit {

  assets$: Observable<IaNavbarAssetsModel>;

  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor(
    private _service: IaCoreNavbarService
  ) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this.assets$ = this._service.watchAssets$();
  }

  navigate(_: IaNavbarRouterPayloadModel): void {
    this._service.navigate(_);
  }

  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }

}
