import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { ClipboardService, SnackbarService } from '../imports';

import type { FooterAssetsModel, FooterDataModel } from '..';
import { FooterAssets, FooterAssetsStub, FooterDataStub, FooterStrings } from '..';



/**
 * Service for use in `FooterComponent`
 *
 * @export
 * @class FooterService
 */
@Injectable({
  providedIn: 'root'
})
export class FooterService {
  #assets$ = new BehaviorSubject<FooterAssetsModel>(FooterAssetsStub);
  #assets = { ...FooterAssetsStub };

  #data$ = new BehaviorSubject<FooterDataModel>(FooterDataStub);
  #data = { ...FooterDataStub };

  /**
   * Creates an instance of FooterService.
   *
   * @memberof FooterService
   */
  constructor(
    private _clipboard: ClipboardService,
    private _snackbar: SnackbarService
  ) { }

  /**
   * Fetch assets for `FooterComponent`
   *
   * @memberof FooterService
   */
  fetchAssets(): void {
    this.#assets = { ...FooterAssets };
    this._setAssets(this.#assets);
  }

  private _setAssets(assets: FooterAssetsModel): void {
    this.#assets = { ...assets ?? FooterAssetsStub };
    this.#assets$.next(this.#assets);
  }

  watchAssets$(): Observable<FooterAssetsModel> {
    return this.#assets$.asObservable();
  }

  /**
   * Set Data for `FooterComponent`
   *
   * @param {FooterDataModel} data
   * @memberof FooterService
   */
  setData(data: FooterDataModel): void {
    this.#data = { ...data ?? FooterDataStub };
    this.#data$.next(this.#data);
  }

  watchData$(): Observable<FooterDataModel> {
    return this.#data$.asObservable();
  }

  /**
   * Copy the Discord ID: `usama251993#5438` to the clipboard
   *
   * @memberof FooterService
   */
  copyDiscordID(): void {
    const isTextCopied: boolean = this._clipboard.copy(this.#data.discord);
    if (isTextCopied) {
      this._snackbar.openSnackbar(
        FooterStrings.snackbar.discord.success.message,
        FooterStrings.snackbar.discord.success.action
      );
    } else {
      this._snackbar.openSnackbar(
        FooterStrings.snackbar.discord.fail.message,
        FooterStrings.snackbar.discord.fail.action
      );
    }
  }

  /**
   * Copy the email ID: `usama251993@gmail.com` to the clipboard
   *
   * @memberof FooterService
   */
  copyEmailID(): void {
    const isTextCopied: boolean = this._clipboard.copy(this.#data.email);
    if (isTextCopied) {
      this._snackbar.openSnackbar(
        FooterStrings.snackbar.email.success.message,
        FooterStrings.snackbar.email.success.action
      );
    } else {
      this._snackbar.openSnackbar(
        FooterStrings.snackbar.email.fail.message,
        FooterStrings.snackbar.email.fail.action
      );
    }
  }

  // TODO: Use Lumberjack
  /**
   *
   * @memberof FooterService
   */
  log(): void {
    console.groupCollapsed(
      `[ ${this.constructor.name} ] - [ ${this.log.name} ]`
    );
    console.log('Test Logging Message');
    console.groupEnd();
  }
}
