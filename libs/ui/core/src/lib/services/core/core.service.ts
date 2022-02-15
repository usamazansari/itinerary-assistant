import { Injectable } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';

import type { APIResponse } from '../../imports/models';
import type { HttpStatus } from '../../imports/constants';
import { getServerResponseMessage } from '../../imports/utils';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // 🧐 Documentation Required
  /**
   *
   *
   * @param {HttpStatus} status
   * @return {*}  {string}
   * @memberof CoreService
   */
  getServerResponseMessage(status: HttpStatus): string {
    return getServerResponseMessage(status);
  }

  /**
   * Check if the error is due to service unavailability
   *
   * @param {HttpErrorResponse} error
   * @return {*}  {boolean}
   * @memberof CoreService
   */
  isServiceAvailable(error: APIResponse<unknown>): boolean {
    return !!(<HttpErrorResponse>error.error).status;
  }
}
