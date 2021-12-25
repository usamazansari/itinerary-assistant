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

const APIResponseStub: IAPIResponse = {
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
   * @param {IAPIResponse} [init=ResponseStub]
   * @memberof APIResponse
   */
  constructor(
    init: Partial<IAPIResponse> = APIResponseStub
  ) {
    this.data = init.data ?? APIResponseStub.data;
    this.error = init.error ?? APIResponseStub.error;
    this.status = init.status ?? APIResponseStub.status;
  }
}
