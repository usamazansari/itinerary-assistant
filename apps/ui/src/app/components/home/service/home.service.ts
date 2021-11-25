import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { RouteConstants, RouterService } from '../imports';

import { HomeAssets, HomeAssetsStub } from '..';
import type { HomeAssetsModel } from '..';

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
  #assets$ = new BehaviorSubject<HomeAssetsModel>(HomeAssetsStub);
  #assets: HomeAssetsModel = { ...HomeAssetsStub };

  /**
   * Creates an instance of `HomeService`
   * @memberof HomeService
   */
  constructor(private _routerService: RouterService) { }

  /**
   * Fetch Assets for `HomeComponent`
   *
   * @memberof HomeService
   */
  fetchAssets(): void {
    this.#assets = { ...HomeAssets };
    this._setAssets(this.#assets);
  }

  /**
   * Store the latest value of `assets` in class props and update the `BehaviorSubject` with the same
   *
   * @private
   * @param {HomeAssetsModel} assets
   * @memberof HomeService
   */
  private _setAssets(assets: HomeAssetsModel): void {
    this.#assets = { ...assets ?? HomeAssetsStub };
    this.#assets$.next(this.#assets);
  }

  /**
   * Return Home page assets as `Observable<HomeAssetsModel>`
   *
   * @return {*}  {Observable<HomeAssetsModel>}
   * @memberof HomeService
   */
  watchAssets$(): Observable<HomeAssetsModel> {
    return this.#assets$.asObservable();
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
