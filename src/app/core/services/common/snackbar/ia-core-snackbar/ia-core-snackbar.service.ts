import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppSnackbarService } from '@shared/services/snackbar/app-snackbar/app-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class IaCoreSnackbarService {

  constructor(
    private _snackbar: AppSnackbarService
  ) { }

  openSnackbar<GenericSnackbarData>(snackbar: { message: string; action: string; config: MatSnackBarConfig<GenericSnackbarData>; }): void {
    this._snackbar.openSnackbar({ ...snackbar });
  }
}
