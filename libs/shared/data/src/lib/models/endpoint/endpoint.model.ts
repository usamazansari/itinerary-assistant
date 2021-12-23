import type { HttpStatus } from '../../constants';

/**
 * Model for API Response class.
 *
 * ```ts
 * interface IApiResponse<DataType> {
 *   data   : DataType | unknown | null;
 *   error  : unknown | null;
 *   status : HttpStatus;
 * }
 * ```
 *
 * @interface IAPIResponse
 * @template DataType
 */
interface IAPIResponse<DataType = unknown> {
  /**
   * Response of the API call.
   *
   * @type {(DataType | unknown | null)}
   * @memberof IAPIResponse
   */
  data: DataType | unknown | null;

  /**
   * Error in the API call.
   *
   * @type {(unknown | null)}
   * @memberof IAPIResponse
   */
  error: unknown | null;

  /**
   *Status of the API call response.
   *
   * @type {HttpStatus}
   * @memberof IAPIResponse
   */
  status: HttpStatus;
}

const ResponseStub: IAPIResponse = {
  data: null,
  error: null,
  status: 0
};

/**
 * API Response Wrapper
 *
 * @export
 * @class APIResponse
 * @template DataType Data type of the response body
 */
export class APIResponse<DataType = unknown> implements IAPIResponse<DataType> {
  data: DataType | unknown | null;
  error: unknown | null;
  status: HttpStatus;

  /**
   * ### API Response Wrapper
   *
   * ```ts
   * // For a successful response
   * const response = new APIResponse<string>({
   *   data   : 'Hello World',
   *   error  : null,
   *   status : HttpStatus.Ok
   * });
   *
   * // For a failed response
   * const response = new APIResponse<string>({
   *   data   : null,
   *   error  : 'Something went wrong',        // Or the error object returned by the API
   *   status : HttpStatus.InternalServerError // Or some relevant error code
   * });
   * ```
   *
   * @param {IAPIResponse} [init={ ...ResponseStub }]
   * @memberof APIResponse
   */
  constructor(
    init: IAPIResponse = { ...ResponseStub }
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

const RequestStub: APIRequest = {
  headers: {},
  body: {},
  params: {},
  auth: new AuthModel()
};

/**
 * API Request Wrapper
 *
 * @export
 * @class APIRequest
 */
export class APIRequest {
  headers: { [key: string]: string | number | boolean; };
  params: { [key: string]: string | number | boolean; };
  body: unknown;
  auth: AuthModel;

  /**
   * ### API Request Wrapper
   *
   * ```ts
   * const request = new APIRequest({
   *   headers : {},
   *   body    : {},
   *   params  : {},
   *   auth    : {
   *     username : '',
   *     password : ''
   *   }
   * });
   * ```
   *
   * @param {APIRequest} [init={ ...RequestStub }]
   * @memberof APIRequest
   */
  constructor(
    init: APIRequest = { ...RequestStub }
  ) {
    this.headers = init.headers;
    this.params = init.params;
    this.body = init.body;
    this.auth = init.auth;
  }
}
