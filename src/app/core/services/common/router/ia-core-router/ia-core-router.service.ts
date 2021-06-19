import { Injectable } from '@angular/core';
import { IA_CORE_ROUTES } from '@ia-core/ia-core.routes';

import { IaCoreRouterPayloadModel } from '@ia-core/models/ia-core.model';
import { AppRouterService } from '@shared/services/router/app-router/app-router.service';

/**
 * :monocle_face: Documentation Required!
 *
 * @export
 * @class IaCoreRouterService
 */
@Injectable({
  providedIn: 'root'
})
export class IaCoreRouterService {

  constructor(
    private _routerService: AppRouterService
  ) { }

  /**
   * Navigate within the core module
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
