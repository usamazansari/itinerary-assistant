import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { APP_ROUTES } from '@app/app.routes';
import { RouterService } from '@app/core/services/common/router/router.service';
import { TRIP_ROUTES } from '@app/features/trip/trip.routes';

import { Constants as HomeConstants } from '@home/constants/constants';
import { HOME_ASSETS_STUB } from '@home/models/temporary-home/temporary-home.model';

import type { Observable } from 'rxjs';
import type { TemporaryHomeAssetsModel } from '@home/models/temporary-home/temporary-home.model';

/**
 * Service for `TemporaryHomeContainerComponent`
 *
 * @export
 * @class TemporaryHomeService
 */
@Injectable({
  providedIn: 'root'
})
export class TemporaryHomeService {

  /**
   * `BehaviorSubject` to hold `asset`s required by `TemporaryHomeContainerComponent`
   *
   * @private
   * @type {BehaviorSubject<TemporaryHomeAssetsModel>}
   * @memberof TemporaryHomeService
   */
  private _assets$: BehaviorSubject<TemporaryHomeAssetsModel> = new BehaviorSubject<TemporaryHomeAssetsModel>(null);

  /**
   * Store `asset`s in the virtual memory for use within the service
   *
   * @private
   * @type {TemporaryHomeAssetsModel}
   * @memberof TemporaryHomeService
   */
  private _assets: TemporaryHomeAssetsModel = { ...HOME_ASSETS_STUB };

  /**
   * Creates an instance of `TemporaryHomeService`
   * @memberof TemporaryHomeService
   */
  constructor(
    private _routerService: RouterService
  ) { }

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
    this._assets = { ...HomeConstants.assets };
    this._setAssets(this._assets);
  }

  /**
   * Set or Update the `asset`s in virtual memory
   *
   * @param {TemporaryHomeAssetsModel} assets
   * @memberof TemporaryHomeService
   */
  private _setAssets(assets: TemporaryHomeAssetsModel): void {
    this._assets = { ...assets };
    this._assets$.next(this._assets);
  }

  /**
   * Return `asset`s from virtual memory as `Observable`
   *
   * @return {*}  {Observable<HomeAssetsModel>}
   * @memberof TemporaryHomeService
   */
  watchAssets$(): Observable<TemporaryHomeAssetsModel> {
    return this._assets$.asObservable();
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
    this._routerService.navigate(
      {
        routes: [APP_ROUTES.TRIP, TRIP_ROUTES.VIEW_TRIP],
        extras: {}
      });
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
    this._routerService.navigate(
      {
        routes: [APP_ROUTES.TRIP, TRIP_ROUTES.CREATE_TRIP],
        extras: {}
      });
  }
}
