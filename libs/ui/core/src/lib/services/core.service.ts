import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { ServerResponse } from '../imports/constants';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  // 🧐 Documentation Required
  /**
   *
   *
   * @param {HttpStatusCode} status
   * @return {*}  {string}
   * @memberof CoreService
   */
  getConstant(status: HttpStatusCode): string {
    return ServerResponse.get(status) ?? '';
  }

  /**
   * Check if the error is due to service unavailability
   *
   * @param {HttpErrorResponse} error
   * @return {*}  {boolean}
   * @memberof CoreService
   */
  checkError(error: HttpErrorResponse): boolean {
    return !!error.status;
  }
}
