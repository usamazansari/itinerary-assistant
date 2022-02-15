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
   * `dirty` is a boolean value that indicates if the entity/operation is dirty.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  dirty: boolean;

  /**
   * `fail` is a boolean value that indicates if the entity/operation has failed.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  fail: boolean;

  /**
   * `progress` is a boolean value that indicates if the entity/operation is in progress.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  progress: boolean;

  /**
   * `success` is a boolean value that indicates if the entity/operation has succeeded.
   *
   * @type {boolean}
   * @memberof IFlag
   */
  success: boolean;

  /**
   * `visible` is a boolean value that indicates if the entity/operation is visible.
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
   * @param {IFlag} [{ ...FlagStub }]
   * @memberof Flag
   */
  constructor({
    dirty = FlagStub.dirty,
    fail = FlagStub.fail,
    progress = FlagStub.progress,
    success = FlagStub.success,
    visible = FlagStub.visible
  }: Partial<IFlag>) {
    this.dirty = dirty;
    this.fail = fail;
    this.progress = progress;
    this.success = success;
    this.visible = visible;
  }
}
