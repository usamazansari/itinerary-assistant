import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ToolbarVMStub } from '../../models';

import type { Observable } from 'rxjs';
import type { ToolbarVMModel } from '../../models';

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
  #vm$ = new BehaviorSubject<ToolbarVMModel>(ToolbarVMStub);
  #vm: ToolbarVMModel = { ...ToolbarVMStub };

  constructor() {} // private _routerService: RouterService

  // TODO: Fetch from `constants`
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
    this.setVM(this.#vm);
  }

  setVM(vm: ToolbarVMModel): void {
    this.#vm = !!vm ? { ...vm } : { ...ToolbarVMStub };
    this.#vm$.next(this.#vm);
  }

  watchVM$(): Observable<ToolbarVMModel> {
    return this.#vm$.asObservable();
  }

  gotoHome(): void {}
}