import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { ToolbarAssetsModel, ToolbarDataModel } from '..';
import { ToolbarAssets, ToolbarAssetsStub, ToolbarDataStub } from '..';

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
  #assets$ = new BehaviorSubject<ToolbarAssetsModel>(ToolbarAssetsStub);
  #assets: ToolbarAssetsModel = { ...ToolbarAssetsStub };

  #data$ = new BehaviorSubject<ToolbarDataModel>(ToolbarDataStub);
  #data: ToolbarDataModel = { ...ToolbarDataStub };

  /**
   * Fetch Assets for `ToolbarComponent`
   *
   * @memberof ToolbarService
   */
  fetchAssets(): void {
    this.#assets = { ...ToolbarAssets };
    this._setAssets(this.#assets);
  }

  /**
   * Store the latest value of `assets` in class props and update the `BehaviorSubject` with the same
   *
   * @private
   * @param {ToolbarAssetsModel} assets
   * @memberof ToolbarService
   */
  private _setAssets(assets: ToolbarAssetsModel): void {
    this.#assets = { ...assets ?? ToolbarAssetsStub };
    this.#assets$.next(this.#assets);
  }

  /**
   * Return Toolbar assets as `Observable<ToolbarAssetsModel>`
   *
   * @return {*}  {Observable<ToolbarAssetsModel>}
   * @memberof ToolbarService
   */
  watchAssets$(): Observable<ToolbarAssetsModel> {
    return this.#assets$.asObservable();
  }

  /**
   * Store the latest value of `data` in class props and update the `BehaviorSubject` with the same
   *
   * @param {ToolbarDataModel} data
   * @memberof ToolbarService
   */
  setData(data: ToolbarDataModel): void {
    this.#data = { ...data ?? ToolbarDataStub };
    this.#data$.next(this.#data);
  }

  /**
   * Return Toolbar data as `Observable<ToolbarDataModel>`
   *
   * @return {*}  {Observable<ToolbarDataModel>}
   * @memberof ToolbarService
   */
  watchData$(): Observable<ToolbarDataModel> {
    return this.#data$.asObservable();
  }
}
