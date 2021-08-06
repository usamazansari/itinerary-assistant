import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HomeVMStub } from '../../models/home/home.model';
import { Constants as HomeConstants } from '../../constants/home/home.constants';

import type { Observable } from 'rxjs';
import type { HomeVMModel } from '../../models/home/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  #vm$ = new BehaviorSubject<HomeVMModel>(HomeVMStub);
  #vm: HomeVMModel = { ...HomeVMStub };

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
    this.#vm.assets = { ...HomeConstants.assets };
    this._setVm(this.#vm);
  }

  /**
   * Set or Update the `asset`s in virtual memory
   *
   * @param {HomeVMModel} vm
   * @memberof TemporaryHomeService
   */
  private _setVm(vm: HomeVMModel): void {
    this.#vm = { ...vm };
    this.#vm$.next(this.#vm);
  }

  /**
   * Return `asset`s from virtual memory as `Observable`
   *
   * @return {*}  {Observable<HomeAssetsModel>}
   * @memberof TemporaryHomeService
   */
  watchVm$(): Observable<HomeVMModel> {
    return this.#vm$.asObservable();
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
