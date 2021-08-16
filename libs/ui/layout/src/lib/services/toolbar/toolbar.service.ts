import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { ToolbarVMModel } from '../../models';
import { ToolbarConstants as Constants, ToolbarVMStub } from '../../constants';

// TODO: 🧐 Documentation required
// TODO: Implement Routing to home page
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
  #vm$ = new BehaviorSubject<ToolbarVMModel>(ToolbarVMStub);
  #vm: ToolbarVMModel = { ...ToolbarVMStub };

  constructor() {} // private _routerService: RouterService

  /**
   * Fetch Assets
   *
   * @memberof ToolbarService
   */
  fetchAssets(): void {
    this.#vm.assets = {
      ...this.#vm.assets,
      ...Constants.assets
    };
    this._setVM(this.#vm);
  }

  /**
   *
   *
   * @private
   * @param {ToolbarVMModel} vm
   * @memberof ToolbarService
   */
  private _setVM(vm: ToolbarVMModel): void {
    this.#vm = !!vm ? { ...vm } : { ...ToolbarVMStub };
    this.#vm$.next(this.#vm);
  }

  /**
   *
   *
   * @return {*}  {Observable<ToolbarVMModel>}
   * @memberof ToolbarService
   */
  watchVM$(): Observable<ToolbarVMModel> {
    return this.#vm$.asObservable();
  }

  /**
   *
   *
   * @memberof ToolbarService
   */
  gotoHome(): void {}
}
