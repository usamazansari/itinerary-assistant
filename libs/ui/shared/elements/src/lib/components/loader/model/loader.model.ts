import { LoaderSize } from '../constant/loader.constants';

/**
 * Loader Config Model.
 *
 * @export
 * @interface LoaderConfigModel
 */
interface ILoaderConfig {
  visible: boolean;
  size: LoaderSize;
}

/**
 * Stub Loader Config Model.
 *
 * ```ts
 * const LoaderConfigStub: ILoaderConfig = {
 *   visible : false,
 *   size    : LoaderSize.Medium
 * }
 * ```
 */
const LoaderConfigStub: ILoaderConfig = {
  visible: false,
  size: LoaderSize.Medium
};

/**
 * Loader Config class.
 *
 * @export
 * @class LoaderConfig
 * @implements {ILoaderConfig}
 */
export class LoaderConfig implements ILoaderConfig {
  visible: boolean;
  size: LoaderSize;

  /**
   * ### Loader Config
   *
   * Creates an instance of LoaderConfig.
   *
   * ```ts
   * const LoaderConfig: ILoaderConfig = new LoaderConfig({
   *   visible : false,
   *   size    : LoaderSize.Medium
   * })
   * ```
   *
   * @param {Partial<ILoaderConfig>} [init=LoaderConfigStub]
   * @memberof LoaderConfig
   */
  constructor(
    init: Partial<ILoaderConfig> = LoaderConfigStub
  ) {
    this.size = init.size ?? LoaderConfigStub.size;
    this.visible = init.visible ?? LoaderConfigStub.visible;
  }
}
