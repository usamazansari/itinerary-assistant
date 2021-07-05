import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { APP_ROUTES } from 'src/app/app.routes';
import { TRIP_ROUTES } from '@trip/trip.routes';

import { RouterService } from '@core/services/common/router/router.service';
import { HomeAssetsModel, HOME_ASSETS_STUB } from '@home/models/home/home.model';

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @class HomeService
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {BehaviorSubject<HomeAssetsModel>}
   * @memberof HomeService
   */
  private _assets$: BehaviorSubject<HomeAssetsModel> = new BehaviorSubject<HomeAssetsModel>(null);

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {HomeAssetsModel}
   * @memberof HomeService
   */
  private _assets: HomeAssetsModel = { ...HOME_ASSETS_STUB };

  /**
   * Creates an instance of `HomeService`
   * @memberof HomeService
   */
  constructor(
    private _routerService: RouterService
  ) { }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof HomeService
   */
  fetchAssets(): void {
    this._assets = {
      view: {
        icon: { name: 'hiking', style: 'fas' },
        text: 'View Trip'
      },
      create: {
        icon: { name: 'map-marked-alt', style: 'fas' },
        text: 'Create Trip'
      }
    };
    this._setAssets(this._assets);
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @param {HomeAssetsModel} assets
   * @memberof HomeService
   */
  private _setAssets(assets: HomeAssetsModel): void {
    this._assets = { ...assets };
    this._assets$.next(this._assets);
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @return {*}  {Observable<HomeAssetsModel>}
   * @memberof HomeService
   */
  watchAssets$(): Observable<HomeAssetsModel> {
    return this._assets$.asObservable();
  }

  /**
   * Navigate to View Trip page
   * 
   * ```
   * baseURL/trip/view
   * ```
   *
   * @memberof HomeService
   */
  gotoViewTrip(): void {
    this._routerService.navigate({ routes: [APP_ROUTES.TRIP, TRIP_ROUTES.VIEW_TRIP], extras: {} });
  }

  /**
   * Navigate to Create Trip page
   * 
   * ```
   * baseURL/trip/create
   * ```
   *
   * @memberof HomeService
   */
  gotoCreateTrip(): void {
    this._routerService.navigate({ routes: [APP_ROUTES.TRIP, TRIP_ROUTES.CREATE_TRIP], extras: {} });
  }
}
