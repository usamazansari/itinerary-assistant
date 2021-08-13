import type { IconModel } from '../../imports/models';
import { IconStub } from '../../imports/models';

/**
 * Assets for `ToolbarComponent`
 *
 * ```ts
 * interface ToolbarAssetsModel {
 *   trigger : IconModel
 *   logo    : string
 * }
 * ```
 *
 * @export
 * @interface ToolbarAssetsModel
 */
export interface ToolbarAssetsModel {
  /**
   * Trigger for the Sidenav
   *
   * @type {IconModel}
   * @memberof ToolbarAssetsModel
   */
  trigger: IconModel;
}

// TODO: Move to constants
/**
 * Stub for `ToolbarAssetsModel`
 *
 * ```ts
 * const ToolbarAssetsStub: ToolbarAssetsModel = {
 *   trigger : { ...IconStub }
 *   logo    : ''
 * };
 * ```
 */
export const ToolbarAssetsStub: ToolbarAssetsModel = {
  trigger: { ...IconStub }
};

export interface ToolbarDataModel {
  /**
   * Logo of the application
   *
   * @type {string}
   * @memberof ToolbarAssetsModel
   */
  logo: string;
}

// TODO: Move to constants
export const ToolbarDataStub: ToolbarDataModel = {
  logo: ''
};

export interface ToolbarVMModel {
  assets: ToolbarAssetsModel;
  data: ToolbarDataModel;
}

// TODO: Move to constants
export const ToolbarVMStub: ToolbarVMModel = {
  assets: { ...ToolbarAssetsStub },
  data: { ...ToolbarDataStub }
};
