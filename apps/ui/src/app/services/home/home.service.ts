import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { RouterService } from '../../imports/services';

import { RouteConstants } from '../../app.routes';

import type { HomeVMModel } from '../../models';
import { Constants, HomeVMStub } from '../../constants';

/**
 * Service for `HomeComponent`
 *
 * @export
 * @class HomeService
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  #vm$ = new BehaviorSubject<HomeVMModel>(HomeVMStub);
  #vm: HomeVMModel = { ...HomeVMStub };

  /**
   * Creates an instance of `HomeService`
   * @memberof HomeService
   */
  constructor(private _routerService: RouterService) {}

  /**
   * Fetch Default Assets
   *
   * @memberof HomeService
   */
  fetchAssets(): void {
    this.#vm.assets = {
      ...this.#vm.assets,
      ...Constants.assets
    };
    this._setVm(this.#vm);
  }

  /**
   * Set or Update the `vm`
   *
   * @param {HomeVMModel} vm
   * @memberof HomeService
   */
  private _setVm(vm: HomeVMModel): void {
    this.#vm = { ...vm };
    this.#vm$.next(this.#vm);
  }

  /**
   * Return the virtual memory as `Observable`
   *
   * @return {*}  {Observable<HomeAssetsModel>}
   * @memberof HomeService
   */
  watchVm$(): Observable<HomeVMModel> {
    return this.#vm$.asObservable();
  }

  /**
   * Navigate to View Trip page
   *
   * ```
   * {{ baseURL }}/trip/view-trip
   * ```
   *
   * @memberof HomeService
   */
  gotoViewTrip(): void {
    this._routerService.navigate({
      routes: [RouteConstants.Trip, RouteConstants.ViewTrip],
      extras: {}
    });
  }

  /**
   * Navigate to Create Trip page
   *
   * ```
   * {{ baseURL }}/trip/create-trip
   * ```
   *
   * @memberof HomeService
   */
  gotoCreateTrip(): void {
    // this._routerService.navigate({
    //   routes: [APP_ROUTES.TRIP, TRIP_ROUTES.CREATE_TRIP],
    //   extras: {}
    // });
  }
}
