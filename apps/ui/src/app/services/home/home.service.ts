import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HomeVMModel, HOME_VM_STUB } from '../../models/home/home.model';
import { Constants as HomeConstants } from '../../constants/home/home.constants';

import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  /**
   * `BehaviorSubject` to hold `asset`s required by `TemporaryHomeContainerComponent`
   *
   * @private
   * @type {BehaviorSubject<HomeVMModel>}
   * @memberof TemporaryHomeService
   */
  private _vm$ = new BehaviorSubject<HomeVMModel>(HOME_VM_STUB);

  /**
   * Store `asset`s in the virtual memory for use within the service
   *
   * @private
   * @type {HomeVMModel}
   * @memberof TemporaryHomeService
   */
  private _vm: HomeVMModel = { ...HOME_VM_STUB };

  /**
   * Creates an instance of `TemporaryHomeService`
   * @memberof TemporaryHomeService
   */
  constructor() {} // private _routerService: RouterService

  /**
   * Fetch Default Assets
   *
   * ```ts
   * this._assets = {
   *   view   : {
   *     icon : { ...HOME_ICON_STUB },
   *     text : null
   *   },
   *   create : {
   *     icon : { ...HOME_ICON_STUB },
   *     text : null
   *   }
   * }
   * ```
   *
   * @memberof TemporaryHomeService
   */
  fetchAssets(): void {
    this._vm.assets = { ...HomeConstants.assets };
    this._setVm(this._vm);
  }

  /**
   * Set or Update the `asset`s in virtual memory
   *
   * @param {HomeVMModel} vm
   * @memberof TemporaryHomeService
   */
  private _setVm(vm: HomeVMModel): void {
    this._vm = { ...vm };
    this._vm$.next(this._vm);
  }

  /**
   * Return `asset`s from virtual memory as `Observable`
   *
   * @return {*}  {Observable<HomeAssetsModel>}
   * @memberof TemporaryHomeService
   */
  watchVm$(): Observable<HomeVMModel> {
    return this._vm$.asObservable();
  }

  /**
   * Navigate to View Trip page
   *
   * ```
   * baseURL/trip/view
   * ```
   *
   * @memberof TemporaryHomeService
   */
  gotoViewTrip(): void {
    // this._routerService.navigate({
    //   routes: [APP_ROUTES.TRIP, TRIP_ROUTES.VIEW_TRIP],
    //   extras: {}
    // });
  }

  /**
   * Navigate to Create Trip page
   *
   * ```
   * baseURL/trip/create
   * ```
   *
   * @memberof TemporaryHomeService
   */
  gotoCreateTrip(): void {
    // this._routerService.navigate({
    //   routes: [APP_ROUTES.TRIP, TRIP_ROUTES.CREATE_TRIP],
    //   extras: {}
    // });
  }
}
