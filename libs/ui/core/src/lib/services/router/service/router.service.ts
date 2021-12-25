import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EmptyString } from '../imports';
import type { RouterPayload } from '..';

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

  /**
   * ### Navigate
   *
   * Call the `navigate` method of the `Router` service in `@angular/router` package.
   *
   * @param {RouterPayload} payload
   * @memberof RouterService
   */
  navigate(payload: RouterPayload): void {
    this._router.navigate(
      [EmptyString, ...payload.routes],
      { ...payload.extras }
    );
  }
}
