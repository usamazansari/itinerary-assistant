import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { ToolbarVMModel } from '../../models';
import { ToolbarVMStub } from '../../constants';

// TODO: 🧐 Documentation required
// TODO: Make services free of loose strings - use constants file for each module

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
    this.#vm = {
      ...this.#vm,
      assets: {
        ...this.#vm.assets,
        // logo: APPLICATION_NAME,
        trigger: { name: 'bars', style: 'fas' }
      }
    };
    this._setVM(this.#vm);
  }

  private _setVM(vm: ToolbarVMModel): void {
    this.#vm = !!vm ? { ...vm } : { ...ToolbarVMStub };
    this.#vm$.next(this.#vm);
  }

  watchVM$(): Observable<ToolbarVMModel> {
    return this.#vm$.asObservable();
  }

  gotoHome(): void {}
}
