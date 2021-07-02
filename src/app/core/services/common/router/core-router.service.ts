import { Injectable } from '@angular/core';
import { IA_CORE_ROUTES } from '@core/core.routes';

import { IaCoreRouterPayloadModel } from '@core/models/core.model';
import { AppRouterService } from '@shared/services/router/app-router/app-router.service';

/**
 * 🧐 Documentation Required!
 *
 * @export
 * @class IaCoreRouterService
 */
@Injectable({
  providedIn: 'root'
})
export class CoreRouterService {

  constructor(
    private _routerService: AppRouterService
  ) { }

  /**
   * Navigate within the application
   * 
   * ```
   * baseURL/{{ payload.routes }}
   * ```
   *
   * @param {IaCoreRouterPayloadModel} payload
   * @memberof IaCoreRouterService
   */
  navigate(payload: IaCoreRouterPayloadModel): void {
    this._routerService.navigate({ routes: [IA_CORE_ROUTES.EMPTY, ...payload.routes], extras: { ...payload.extras } });
  }
}
