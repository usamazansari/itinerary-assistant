import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import type { RouterPayloadModel } from '../../models';
import { EmptyString } from '../../constants';

/**
 * Router Service for Navigation
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
   * @param {Router} _router Angular Router
   * @memberof RouterService
   */
  constructor(private _router: Router) { }

  // TODO: 🧐 Documentation Required
  /**
   *
   *
   * @param {RouterPayloadModel} payload
   * @memberof RouterService
   */
  navigate(payload: RouterPayloadModel): void {
    this._router.navigate([EmptyString, ...payload.routes], {
      ...payload.extras
    });
  }
}
