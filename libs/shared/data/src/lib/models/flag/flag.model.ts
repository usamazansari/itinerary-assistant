/**
 * Model for Flag class.
 *
 * ```ts
 * interface IFlag {
 *   dirty    : boolean;
 *   fail     : boolean;
 *   progress : boolean;
 *   success  : boolean;
 *   visible  : boolean;
 * }
 * ```
 *
 * @interface IFlag
 */
interface IFlag {
  /**
   * `dirty` is a boolean value that indicates if the entitiy/operation is dirty.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  dirty: boolean;

  /**
   * `fail` is a boolean value that indicates if the entitiy/operation has failed.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  fail: boolean;

  /**
   * `progress` is a boolean value that indicates if the entitiy/operation is in progress.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  progress: boolean;

  /**
   * `success` is a boolean value that indicates if the entitiy/operation has succeeded.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  success: boolean;

  /**
   * `visible` is a boolean value that indicates if the entitiy/operation is visible.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  visible: boolean;
}

/**
 * Stub for the Flag Model.
 *
 * ```ts
 * const FlagStub: IFlag = {
 *   dirty    : false,
 *   fail     : false,
 *   progress : false,
 *   success  : false,
 *   visible  : false
 * };
 * ```
 */
const FlagStub: IFlag = {
  dirty: false,
  fail: false,
  progress: false,
  success: false,
  visible: false
};

/**
 * Flag Wrapper.
 *
 * @export
 * @interface FlagModel
 */
export class Flag implements IFlag {
  dirty: boolean;
  fail: boolean;
  progress: boolean;
  success: boolean;
  visible: boolean;

  /**
   * ### Flag Model
   *
   * This interface is used to define a flag used throughout the application. Be it front end or back end, this model is available across the applications.
   *
   * ```ts
   * const flag: Flag = new Flag({
   *   dirty    : false,
   *   fail     : false,
   *   progress : false,
   *   success  : false,
   *   visible  : false
   * });
   * ```
   *
   * @param {IFlag} [init={ ...FlagStub }]
   * @memberof Flag
   */
  constructor(init: IFlag = { ...FlagStub }) {
    this.dirty = init.dirty;
    this.fail = init.fail;
    this.progress = init.progress;
    this.success = init.success;
    this.visible = init.visible;
  }
}
