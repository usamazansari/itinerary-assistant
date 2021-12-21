// import { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import type { HttpStatus } from '../../constants';

/**
 * API Response Model
 *
 * ```ts
 * type APIResponseModel<DataType> = {
 *   data: DataType;
 *   error: unknown;
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
  error: unknown | null;
  status: HttpStatus;

  /**
   * Creates an instance of APIResponseModel.
   * @param {(DataType | null)} [data=null]
   * @param {(unknown | null)} [error=null]
   * @param {HttpStatus} [status=0]
   * @memberof APIResponseModel
   */
  constructor(
    data: DataType | null = null,
    error: unknown | null = null,
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
  headers?: { [key: string]: string | number | boolean; };
  params?: { [key: string]: string | number | boolean; };
  body?: unknown;
  auth?: AuthModel;

  constructor(
    headers?: { [key: string]: string | number | boolean; },
    params?: { [key: string]: string | number | boolean; },
    body?: unknown,
    auth?: AuthModel
  ) {
    this.headers = headers ?? {};
    this.params = params ?? {};
    this.body = body ?? null;
    this.auth = auth ?? new AuthModel();
  }
}
