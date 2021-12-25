import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { ClipboardService, SnackbarService } from '../imports';

import { Assets, FooterAssets, FooterData, Strings } from '..';



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
  #assets$ = new BehaviorSubject<FooterAssets>(new FooterAssets());
  #assets = new FooterAssets();

  #data$ = new BehaviorSubject<FooterData>(new FooterData());
  #data = new FooterData();

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
    this.#assets = { ...Assets };
    this._setAssets(this.#assets);
  }

  private _setAssets(assets: FooterAssets): void {
    this.#assets = { ...assets ?? new FooterAssets() };
    this.#assets$.next(this.#assets);
  }

  watchAssets$(): Observable<FooterAssets> {
    return this.#assets$.asObservable();
  }

  /**
   * Set Data for `FooterComponent`
   *
   * @param {FooterData} data
   * @memberof FooterService
   */
  setData(data: FooterData): void {
    this.#data = { ...data ?? new FooterData() };
    this.#data$.next(this.#data);
  }

  watchData$(): Observable<FooterData> {
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
        Strings.snackbar.discord.success.message,
        Strings.snackbar.discord.success.action
      );
    } else {
      this._snackbar.openSnackbar(
        Strings.snackbar.discord.fail.message,
        Strings.snackbar.discord.fail.action
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
        Strings.snackbar.email.success.message,
        Strings.snackbar.email.success.action
      );
    } else {
      this._snackbar.openSnackbar(
        Strings.snackbar.email.fail.message,
        Strings.snackbar.email.fail.action
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
