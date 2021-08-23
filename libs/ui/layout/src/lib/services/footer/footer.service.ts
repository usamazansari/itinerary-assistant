import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Author } from '../../imports/constants';
import { ClipboardService, SnackbarService } from '../../imports/services';

import type { FooterDataModel, FooterVMModel } from '../../models';
import { FooterConstants as Constants, FooterVMStub } from '../../constants';

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
  #vm$ = new BehaviorSubject<FooterVMModel>(FooterVMStub);
  #vm: FooterVMModel = { ...FooterVMStub };

  /**
   * Creates an instance of FooterService.
   *
   * @memberof FooterService
   */
  constructor(
    private _clipboard: ClipboardService,
    private _snackbar: SnackbarService
  ) {}

  /**
   * Fetch assets for the `FooterComponent`
   * @memberof FooterService
   */
  fetchAssets(): void {
    this.setVM({
      ...this.#vm,
      assets: {
        ...this.#vm.assets,
        ...Constants.assets
      }
    });
  }

  setData(data: FooterDataModel): void {
    this.setVM({
      ...this.#vm,
      data: {
        ...this.#vm.data,
        ...data
      }
    });
  }

  private setVM(vm: FooterVMModel): void {
    this.#vm = { ...vm };
    this.#vm$.next(this.#vm);
  }

  /**
   * Observe changes in VM for the `FooterComponent`
   *
   * @return {*}  {Observable<FooterVMModel>}
   * @memberof FooterService
   */
  watchVM$(): Observable<FooterVMModel> {
    return this.#vm$.asObservable();
  }

  /**
   * Refactored version of Clipboard Copy Text
   *
   * @memberof FooterService
   */
  copyText(): void {}

  /**
   * Copy the Discord ID: `usama251993#5438` to the clipboard
   *
   * @memberof FooterService
   */
  copyDiscordID(): void {
    const isTextCopied: boolean = this._clipboard.copy(this.#vm.data.discord);
    if (isTextCopied) {
      this._snackbar.openSnackbar(
        Constants.strings.snackbar.discord.success.message,
        Constants.strings.snackbar.discord.success.action
      );
    } else {
      this._snackbar.openSnackbar(
        Constants.strings.snackbar.discord.fail.message,
        Constants.strings.snackbar.discord.fail.action
      );
    }
  }

  /**
   * Copy the email ID: `usama251993@gmail.com` to the clipboard
   *
   * @memberof FooterService
   */
  copyEmailID(): void {
    const isTextCopied: boolean = this._clipboard.copy(this.#vm.data.email);
    if (isTextCopied) {
      this._snackbar.openSnackbar(
        Constants.strings.snackbar.email.success.message,
        Constants.strings.snackbar.email.success.action
      );
    } else {
      this._snackbar.openSnackbar(
        Constants.strings.snackbar.email.fail.message,
        Constants.strings.snackbar.email.fail.action
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
