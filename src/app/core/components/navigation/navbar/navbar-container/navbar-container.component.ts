import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { NavbarService } from '@core/services/navbar/navbar.service';
import { IaNavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import { IaNavbarAssetsModel } from '@core/models/navigation/navbar/navbar.model';

@Component({
  selector: 'app-navbar-container',
  template: `<app-navbar [assets]         = "assets$ | async"
                         (navigate$)      = "navigate($event)"
                         (toggleSidenav$) = "toggleSidenav()"></app-navbar>`
})
export class NavbarContainerComponent implements OnInit {

  assets$: Observable<IaNavbarAssetsModel>;

  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor(
    private _service: NavbarService
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
