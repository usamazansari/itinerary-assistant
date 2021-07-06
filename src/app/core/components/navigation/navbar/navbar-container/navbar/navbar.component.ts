import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { NAVBAR_ASSETS_STUB } from '@core/models/navigation/navbar/navbar.model';

import type { NavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import type { NavbarAssetsModel } from '@core/models/navigation/navbar/navbar.model';

/**
 * Navbar component of the application
 *
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /**
   * `BehaviorSubject` to hold `asset`s of navbar
   *
   * @private
   * @memberof NavbarComponent
   */
  private _assets$ = new BehaviorSubject<NavbarAssetsModel>(NAVBAR_ASSETS_STUB);

  /**
   * Assets used by `NavbarComponent`
   *
   * @memberof NavbarComponent
   */
  @Input()
  set assets(value: NavbarAssetsModel) { this._assets$.next(value); }
  get assets(): NavbarAssetsModel { return this._assets$.getValue(); }

  /**
   * `EventEmitter` to navigate through the application
   *
   * @memberof NavbarComponent
   */
  @Output() navigate$ = new EventEmitter<NavbarRouterPayloadModel>();

  /**
   * `EventEmitter` to notify the `app-component` about sidenav toggle
   *
   * @memberof NavbarComponent
   */
  @Output() toggleSidenav$ = new EventEmitter<void>();

  /**
   * Creates an instance of `NavbarComponent`
   * @memberof NavbarComponent
   */
  constructor() { }

  /**
   * On Initialization of `FooterComponent`
   *
   * @memberof NavbarComponent
   */
  ngOnInit(): void { }

  /**
   * Trigger the navigation by the `EventEmitter`: `navigate$`
   *
   * @param {string[]} routes
   * @memberof NavbarComponent
   */
  navigate(routes: string[]): void {
    const payload: NavbarRouterPayloadModel = { routes: [...routes], extras: {} };
    this.navigate$.emit(payload);
  }

  /**
   * Trigger toggle of sidenav by the `EventEmitter`: `toggleSidenav$`
   *
   * @memberof NavbarComponent
   */
  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }

}
