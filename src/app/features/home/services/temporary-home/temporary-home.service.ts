import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { APP_ROUTES } from '@app/app.routes';
import { RouterService } from '@app/core/services/common/router/router.service';
import { TRIP_ROUTES } from '@app/features/trip/trip.routes';
import { HOME_ASSETS_STUB } from '../../models/temporary-home/temporary-home.model';

import type { Observable } from 'rxjs';
import type { TemporaryHomeAssetsModel } from '../../models/temporary-home/temporary-home.model';

@Injectable({
  providedIn: 'root'
})
export class TemporaryHomeService {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {BehaviorSubject<TemporaryHomeAssetsModel>}
   * @memberof TemporaryHomeService
   */
  private _assets$: BehaviorSubject<TemporaryHomeAssetsModel> = new BehaviorSubject<TemporaryHomeAssetsModel>(null);

  /**
   * TODO: 🧐 Documentation Required
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
   * TODO: 🧐 Documentation Required
   *
   * @memberof TemporaryHomeService
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
   * @param {TemporaryHomeAssetsModel} assets
   * @memberof TemporaryHomeService
   */
  private _setAssets(assets: TemporaryHomeAssetsModel): void {
    this._assets = { ...assets };
    this._assets$.next(this._assets);
  }

  /**
   * TODO: 🧐 Documentation Required
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
    this._routerService.navigate({ routes: [APP_ROUTES.TRIP, TRIP_ROUTES.VIEW_TRIP], extras: {} });
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
    this._routerService.navigate({ routes: [APP_ROUTES.TRIP, TRIP_ROUTES.CREATE_TRIP], extras: {} });
  }
}
