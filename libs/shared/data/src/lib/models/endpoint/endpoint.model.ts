import type { HttpStatus } from '../../constants';

const ResponseStub: APIResponse = { data: null, error: null, status: 0 };

/**
 * API Response Wrapper
 *
 * @export
 * @class APIResponseModel
 * @template DataType Data type of the response body
 */
export class APIResponse<DataType = unknown> {
  data!: DataType | unknown | null;
  error!: unknown | null;
  status!: HttpStatus;

  /**
   * ### API Response Wrapper
   *
   * ```ts
   * const response = new APIResponse<string>({
   *   data: 'Hello World',
   *   error: null,
   *   status: HttpStatus.Ok
   * });
   * ```
   *
   * @param {APIResponseModel} [init={ ...ResponseStub }]
   * @memberof APIResponseModel
   */
  constructor(
    init: APIResponse = { ...ResponseStub }
  ) {
    this.data = init.data;
    this.error = init.error;
    this.status = init.status;
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

// TODO: Usama Ansari - Make it the same as APIResponse
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
