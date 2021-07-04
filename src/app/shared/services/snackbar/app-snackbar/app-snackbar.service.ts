import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * @deprecated Use from `@core/services/common`
 *
 * @export
 * @class AppSnackbarService
 */
@Injectable({
  providedIn: 'root'
})
export class AppSnackbarService {

  constructor(
    private _snackbar: MatSnackBar
  ) { }

  openSnackbar<GenericSnackbarData>(snackbar: { message: string; action: string; config: MatSnackBarConfig<GenericSnackbarData>; }): void {
    this._snackbar.open(snackbar.message, snackbar.action, { ...snackbar.config });
  }
}
