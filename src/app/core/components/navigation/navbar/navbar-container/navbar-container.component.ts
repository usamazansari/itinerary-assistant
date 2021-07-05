import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavbarService } from '@core/services/navigation/navbar/navbar.service';

import type { Observable } from 'rxjs';
import type { NavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import type { NavbarAssetsModel } from '@core/models/navigation/navbar/navbar.model';

/**
 * Container component for `NavbarComponent`
 *
 * @export
 * @class NavbarContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-navbar-container',
  template: `<app-navbar [assets]         = "assets$ | async"
                         (navigate$)      = "navigate($event)"
                         (toggleSidenav$) = "toggleSidenav()"></app-navbar>`
})
export class NavbarContainerComponent implements OnInit {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {Observable<NavbarAssetsModel>}
   * @memberof NavbarContainerComponent
   */
  assets$: Observable<NavbarAssetsModel>;

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof NavbarContainerComponent
   */
  @Output() toggleSidenav$ = new EventEmitter<void>();

  /**
   * Creates an instance of `NavbarContainerComponent`.
   * 
   * @param {NavbarService} _service Service associated with `NavbarContainerComponent`
   * @memberof NavbarContainerComponent
   */
  constructor(
    private _service: NavbarService
  ) { }

  /**
   * Fetch the initial state of the component
   *
   * @memberof NavbarContainerComponent
   */
  ngOnInit(): void {
    this._service.fetchAssets();
    this.assets$ = this._service.watchAssets$();
  }

  /**
   * Trigger a navigation
   *
   * @param {NavbarRouterPayloadModel} payload
   * @memberof NavbarContainerComponent
   */
  navigate(payload: NavbarRouterPayloadModel): void {
    this._service.navigate(payload);
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof NavbarContainerComponent
   */
  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }
}
