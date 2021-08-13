import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { SnackbarConfig } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  /**
   * Creates an instance of SnackbarService.
   *
   * @param {MatSnackBar} _snackbar Instance of `MatSnackbar` from `@angular/material/snack-bar`
   * @memberof SnackbarService
   */
  constructor(private _snackbar: MatSnackBar) {}

  /**
   *
   *
   * @template GenericSnackbarData
   * @param {string} message
   * @param {(string | undefined)} [action]
   * @param {MatSnackBarConfig<GenericSnackbarData>} [config]
   * @memberof SnackbarService
   */
  openSnackbar<GenericSnackbarData>(
    message: string,
    action?: string | undefined,
    config: MatSnackBarConfig<GenericSnackbarData> = SnackbarConfig
  ): void {
    this._snackbar.open(message, action, config);
  }
}
