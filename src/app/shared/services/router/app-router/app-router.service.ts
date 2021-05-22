import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { AppRouterPayloadModel } from '@shared/models/router/app-router.model';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  constructor(
    private _router: Router
  ) { }

  navigate(_: AppRouterPayloadModel): void {
    this._router.navigate([..._.routes], { ..._.extras });
  }
}
