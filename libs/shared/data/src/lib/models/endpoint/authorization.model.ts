/**
 * Authorization Model
 *
 * ```ts
 * interface IAuthorization {
 *   username : string;
 *   password : string;
 * }
 * ```
 *
 * @interface IAuthorization
 */
interface IAuthorization {
  /**
   * Username for Basic Authentication.
   *
   * @type {string}
   * @memberof IAuthorization
   */
  username: string;

  /**
   * Password for Basic Authentication.
   *
   * @type {string}
   * @memberof IAuthorization
   */
  password: string;
}

/**
 * Stub for Authorization Interface.
 *
 * ```ts
 * const AuthorizationStub = {
 *   username : '',
 *   password : ''
 * }
 * ```
 */
const AuthorizationStub = {
  username: '',
  password: ''
};

/**
 * Endpoint Authorization Model.
 *
 * @export
 * @class Authorization
 * @implements {IAuthorization}
 */
export class Authorization implements IAuthorization {
  username: string;
  password: string;

  /**
   * ### Authorization Wrapper
   *
   * ```ts
   * const authorization = new Authorization({
   *   username : '',
   *   password : ''
   * });
   * ```
   *
   * @param {IAuthorization} [init={ ...AuthorizationStub }]
   * @memberof Authorization
   */
  constructor({
    username = AuthorizationStub.username,
    password = AuthorizationStub.password
  }: Partial<IAuthorization>) {
    this.username = username;
    this.password = password;
  }
}
