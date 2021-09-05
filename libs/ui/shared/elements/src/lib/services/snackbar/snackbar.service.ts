import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { SnackbarConfigStub } from '../../constants';

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
  constructor(private _snackbar: MatSnackBar) { }

  /**
   * Opens a material snackbar
   *
   * @template SnackbarData
   * @param {string} message
   * @param {string} [action='']
   * @param {MatSnackBarConfig<SnackbarData>} [config=SnackbarConfig]
   * @memberof SnackbarService
   */
  openSnackbar<SnackbarData>(
    message: string,
    action: string = '',
    config: MatSnackBarConfig<SnackbarData> = SnackbarConfigStub
  ): void {
    this._snackbar.open(message, action, config);
  }
}
