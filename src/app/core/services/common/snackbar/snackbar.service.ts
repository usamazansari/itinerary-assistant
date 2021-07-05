import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @class SnackbarService
 */
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
  constructor(
    private _snackbar: MatSnackBar
  ) { }

  /**
   * TODO: ⚠️ This section could get problematic in the near future
   *
   * @template GenericSnackbarData
   * @param {{
   *         message: string;
   *         action?: string;
   *         config?: MatSnackBarConfig<GenericSnackbarData>;
   *       }} [snackbar={ message: '', action: '', config: null }]
   * @memberof SnackbarService
   */
  openSnackbar<GenericSnackbarData>(
    snackbar:
      {
        message: string;
        action?: string;
        config?: MatSnackBarConfig<GenericSnackbarData>;
      } = { message: '', action: '', config: null }
  ): void {
    this._snackbar.open(
      snackbar.message,
      snackbar.action,
      snackbar.config
    );
  }
}
