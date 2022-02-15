import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { _ToolbarAssets, ToolbarAssets, ToolbarData } from '..';

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
  #assets$ = new BehaviorSubject<ToolbarAssets>(new ToolbarAssets());
  #assets: ToolbarAssets = new ToolbarAssets();

  #data$ = new BehaviorSubject<ToolbarData>(new ToolbarData());
  #data: ToolbarData = new ToolbarData();

  /**
   * Fetch Assets for `ToolbarComponent`
   *
   * @memberof ToolbarService
   */
  fetchAssets(): void {
    this.#assets = { ..._ToolbarAssets };
    this._setAssets(this.#assets);
  }

  /**
   * Store the latest value of `assets` in class props and update the `BehaviorSubject` with the same
   *
   * @private
   * @param {ToolbarAssets} assets
   * @memberof ToolbarService
   */
  private _setAssets(assets: ToolbarAssets): void {
    this.#assets = { ...(assets ?? new ToolbarAssets()) };
    this.#assets$.next(this.#assets);
  }

  /**
   * Return Toolbar assets as `Observable<ToolbarAssetsModel>`
   *
   * @return {*}  {Observable<ToolbarAssetsModel>}
   * @memberof ToolbarService
   */
  watchAssets$(): Observable<ToolbarAssets> {
    return this.#assets$.asObservable();
  }

  /**
   * Store the latest value of `data` in class props and update the `BehaviorSubject` with the same
   *
   * @param {ToolbarData} data
   * @memberof ToolbarService
   */
  setData(data: ToolbarData): void {
    this.#data = { ...(data ?? new ToolbarData()) };
    this.#data$.next(this.#data);
  }

  /**
   * Return Toolbar data as `Observable<ToolbarDataModel>`
   *
   * @return {*}  {Observable<ToolbarDataModel>}
   * @memberof ToolbarService
   */
  watchData$(): Observable<ToolbarData> {
    return this.#data$.asObservable();
  }
}
