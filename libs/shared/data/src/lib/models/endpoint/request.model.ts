import { Authorization } from '.';
import { GenericObject } from '..';

// TODO: Usama Ansari - 🧐 Documentation required.

interface IAPIRequest {
  headers: GenericObject,
  body: unknown,
  params: GenericObject,
  auth: Authorization;
}

const RequestStub: IAPIRequest = {
  headers: {},
  body: {},
  params: {},
  auth: new Authorization()
};

/**
 * API Request Wrapper
 *
 * @export
 * @class APIRequest
 */
export class APIRequest implements IAPIRequest {
  headers: GenericObject;
  params: GenericObject;
  body: unknown;
  auth: Authorization;

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
    init: IAPIRequest = { ...RequestStub }
  ) {
    this.headers = init.headers;
    this.params = init.params;
    this.body = init.body;
    this.auth = init.auth;
  }
}
