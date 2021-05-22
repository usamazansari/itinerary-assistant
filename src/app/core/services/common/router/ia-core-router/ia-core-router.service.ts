import { Injectable } from '@angular/core';
import { CORE_ROUTES } from '@ia-core/core.routes';

import { IaCoreRouterPayloadModel } from '@ia-core/models/ia-core.model';
import { AppRouterService } from '@shared/services/router/app-router/app-router.service';

@Injectable({
  providedIn: 'root'
})
export class IaCoreRouterService {

  constructor(
    private _routerService: AppRouterService
  ) { }

  navigate(payload: IaCoreRouterPayloadModel): void { // use a separate service for navigation
    this._routerService.navigate({ routes: [CORE_ROUTES.EMPTY, ...payload.routes], extras: { ...payload.extras } });
  }
}
