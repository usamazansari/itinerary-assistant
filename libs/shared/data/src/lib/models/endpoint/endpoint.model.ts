import { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import type { HttpStatus } from '../../constants';

/**
 * API Response Model
 *
 * ```ts
 * type APIResponseModel<DataType> = {
 *   data: DataType;
 *   error: HttpErrorResponse;
 *   status: HttpStatus;
 * }
 * ```
 *
 * The `APIResponseModel` class requries three properties:
 * 1. `data`: The data returned by the API.
 * 2. `error`: The error returned by the API.
 * 3. `status`: The status code of the API response.
 *
 * @export
 * @class APIResponseModel
 * @template DataType Data type of the response body
 */
export class APIResponseModel<DataType> {
  data: DataType | null;
  error: HttpErrorResponse | null;
  status: HttpStatus;

  /**
   * Creates an instance of APIResponseModel.
   * @param {(DataType | null)} [data=null]
   * @param {(HttpErrorResponse | null)} [error=null]
   * @param {HttpStatus} [status=0]
   * @memberof APIResponseModel
   */
  constructor(
    data: DataType | null = null,
    error: HttpErrorResponse | null = null,
    status: HttpStatus = 0
  ) {
    this.data = data;
    this.error = error;
    this.status = status;
  }
}

class AuthModel {
  username!: string;
  password!: string;

  constructor(
    username = '',
    password = ''
  ) {
    this.username = username;
    this.password = password;
  }
}

export class APIRequestModel {
  headers?: HttpHeaders;
  params?: HttpParams;
  body?: unknown;
  auth?: AuthModel;

  constructor(
    headers?: HttpHeaders,
    params?: HttpParams,
    body?: unknown,
    auth?: AuthModel
  ) {
    this.headers = headers ?? new HttpHeaders();
    this.params = params ?? new HttpParams();
    this.body = body ?? null;
    this.auth = auth ?? new AuthModel();
  }
}
