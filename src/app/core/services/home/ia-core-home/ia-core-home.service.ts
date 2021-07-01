import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IaCoreRouterService } from '@ia-core/services/common/router/ia-core-router/ia-core-router.service';
import { IaCoreHomeAssetsModel, DEFAULT_IA_CORE_HOME_ASSETS } from '@ia-core/models/home/ia-core-home.model';
import { IA_CORE_ROUTES } from '@ia-core/ia-core.routes';
import { TRIP_ROUTES } from 'src/app/features/trip/trip.routes';

/**
 * TODO: :monocle_face: Documentation Required
 *
 * @export
 * @class IaCoreHomeService
 */
@Injectable({
  providedIn: 'root'
})
export class IaCoreHomeService {

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {BehaviorSubject<IaCoreHomeAssetsModel>}
   * @memberof IaCoreHomeService
   */
  private _assets$: BehaviorSubject<IaCoreHomeAssetsModel> = new BehaviorSubject<IaCoreHomeAssetsModel>(null);

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {IaCoreHomeAssetsModel}
   * @memberof IaCoreHomeService
   */
  private _assets: IaCoreHomeAssetsModel = { ...DEFAULT_IA_CORE_HOME_ASSETS };

  /**
   * Creates an instance of `IaCoreHomeService`
   * @memberof IaCoreHomeService
   */
  constructor(
    private _routerService: IaCoreRouterService
  ) { }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreHomeService
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
   * TODO: :monocle_face: Documentation Required
   *
   * @param {IaCoreHomeAssetsModel} assets
   * @memberof IaCoreHomeService
   */
  private _setAssets(assets: IaCoreHomeAssetsModel): void {
    this._assets = { ...assets };
    this._assets$.next(this._assets);
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @return {*}  {Observable<IaCoreHomeAssetsModel>}
   * @memberof IaCoreHomeService
   */
  watchAssets$(): Observable<IaCoreHomeAssetsModel> {
    return this._assets$.asObservable();
  }

  /**
   * Navigate to View Trip page
   * 
   * ```
   * baseURL/trip/view
   * ```
   *
   * @memberof IaCoreHomeService
   */
  gotoViewTrip(): void {
    this._routerService.navigate({ routes: [IA_CORE_ROUTES.TRIP, TRIP_ROUTES.VIEW_TRIP], extras: {} });
  }

  /**
   * Navigate to Create Trip page
   * 
   * ```
   * baseURL/trip/create
   * ```
   *
   * @memberof IaCoreHomeService
   */
  gotoCreateTrip(): void {
    this._routerService.navigate({ routes: [IA_CORE_ROUTES.TRIP, TRIP_ROUTES.CREATE_TRIP], extras: {} });
  }
}
