import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { RouterPayloadModel } from '@shared/models/router/app-router.model';

/**
 * @deprecated Use from `@core/services/common`
 *
 * @export
 * @class AppRouterService
 */
@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  constructor(
    private _router: Router
  ) { }

  navigate(_: RouterPayloadModel): void {
    this._router.navigate([..._.routes], { ..._.extras });
  }
}
