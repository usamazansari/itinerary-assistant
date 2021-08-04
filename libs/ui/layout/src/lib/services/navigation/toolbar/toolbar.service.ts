import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { APPLICATION_NAME } from '@itinerary-assistant/ui/core';

import { ToolbarVMStub } from '../../../models';

import type { Observable } from 'rxjs';
import type { ToolbarVMModel } from '../../../models';

// TODO: 🧐 Documentation required
/**
 * Toolbar Service
 *
 * @export
 * @class ToolbarService
 */
@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private _vm$ = new BehaviorSubject<ToolbarVMModel>(ToolbarVMStub);

  private _vm!: ToolbarVMModel;

  constructor() {} // private _routerService: RouterService

  // TODO: Fetch from `constants`
  /**
   * Fetch Assets
   *
   * @memberof ToolbarService
   */
  fetchAssets(): void {
    this._vm = {
      assets: {
        logo: APPLICATION_NAME,
        trigger: { name: 'bars', style: 'fas' }
      }
    };
    this._setVm(this._vm);
  }

  private _setVm(_: ToolbarVMModel): void {
    this._vm = { ..._ };
    this._vm$.next(this._vm);
  }

  watchVm$(): Observable<ToolbarVMModel> {
    return this._vm$.asObservable();
  }

  gotoHome(): void {}
}
