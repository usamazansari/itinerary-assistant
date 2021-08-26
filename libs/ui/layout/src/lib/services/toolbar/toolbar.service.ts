import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { ToolbarVMModel, ToolbarDataModel } from '../../models';
import { ToolbarConstants as Constants, ToolbarVMStub } from '../../constants';

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

  constructor() {}

  /**
   * Fetch Assets for `ToolbarComponent`
   *
   * @memberof ToolbarService
   */
  fetchAssets(): void {
    this.#vm.assets = {
      ...this.#vm.assets,
      ...Constants.assets
    };
    this.setVM(this.#vm);
  }

  /**
   * Set Data for `ToolbarComponent`
   *
   * @param {ToolbarDataModel} data
   * @memberof ToolbarService
   */
  setData(data: ToolbarDataModel): void {
    this.setVM({
      ...this.#vm,
      data: {
        ...this.#vm.data,
        ...data
      }
    });
  }

  /**
   * Set the value of VM
   *
   * @private
   * @param {ToolbarVMModel} vm
   * @memberof ToolbarService
   */
  private setVM(vm: ToolbarVMModel): void {
    this.#vm = { ...(vm ?? ToolbarVMStub) };
    this.#vm$.next(this.#vm);
  }

  /**
   * Observe changes in VM for the `ToolbarComponent`
   *
   * @return {*}  {Observable<ToolbarVMModel>}
   * @memberof ToolbarService
   */
  watchVM$(): Observable<ToolbarVMModel> {
    return this.#vm$.asObservable();
  }
}
