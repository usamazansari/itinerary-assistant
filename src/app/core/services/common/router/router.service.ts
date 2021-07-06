import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { APP_ROUTES } from '@app/app.routes';

import { RouterPayloadModel } from '@core/models/common/router/router.model';

/**
 * TODO: 🧐 Documentation Required!
 *
 * @export
 * @class RouterService
 */
@Injectable({
  providedIn: 'root'
})
export class RouterService {

  /**
   * Creates an instance of RouterService.
   * 
   * @param {Router} _router Instance of Angular Router from `@angular/router`
   * @memberof RouterService
   */
  constructor(
    private _router: Router
  ) { }

  /**
   * Navigate within the application
   * 
   * ```
   * baseURL/{{ payload.routes }}
   * ```
   *
   * @param {RouterPayloadModel} payload
   * @memberof RouterService
   */
  navigate(payload: RouterPayloadModel): void {
    this._router.navigate(
      [APP_ROUTES.EMPTY, ...payload.routes],
      { ...payload.extras }
    );
  }
}
