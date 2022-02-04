import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import type { MatSnackBarConfig } from '@angular/material/snack-bar';

import { SnackbarMessage } from '..';

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
   * Opens a material snackbar.
   *
   * @template SnackbarData
   * @param {SnackbarMessage<SnackbarData>} [init=new SnackbarMessage<SnackbarData>()]
   * @memberof SnackbarService
   */
  openSnackbar<SnackbarData>(
    init: SnackbarMessage<SnackbarData> = new SnackbarMessage<SnackbarData>()
  ): void {
    this._snackbar.open(
      init.message,
      init.action,
      <MatSnackBarConfig<SnackbarData>>init.config);
  }
}
