import { Injectable } from '@angular/core';
import { IA_CORE_ROUTES } from '@ia-core/core.routes';

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
   * :monocle_face: Documentation Required!
   *
   * @param {IaCoreRouterPayloadModel} payload
   * @memberof IaCoreRouterService
   */
  navigate(payload: IaCoreRouterPayloadModel): void { // use a separate service for navigation
    this._routerService.navigate({ routes: [IA_CORE_ROUTES.EMPTY, ...payload.routes], extras: { ...payload.extras } });
  }
}
