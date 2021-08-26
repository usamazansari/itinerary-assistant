import { IconStub } from '../../imports/constants';
import type {
  ToolbarAssetsModel,
  ToolbarDataModel,
  ToolbarVMModel
} from '../../models';

/**
 * Stub for `ToolbarAssetsModel`
 *
 * ```ts
 * const ToolbarAssetsStub: ToolbarAssetsModel = {
 *   trigger : IconStub
 * };
 * ```
 */
export const ToolbarAssetsStub: ToolbarAssetsModel = {
  trigger: { ...IconStub }
};

/**
 * Stub for `ToolbarDataModel`
 *
 * ```ts
 * const ToolbarDataStub: ToolbarDataModel = {
 *   logo : ''
 * };
 * ```
 */
export const ToolbarDataStub: ToolbarDataModel = {
  logo: ''
};

/**
 * Stub for `ToolbarVMModel`
 *
 * ```ts
 * const ToolbarVMStub: ToolbarVMModel = {
 *   assets : ToolbarAssetsStub,
 *   data   : ToolbarDataStub
 * };
 * ```
 */
export const ToolbarVMStub: ToolbarVMModel = {
  assets: { ...ToolbarAssetsStub },
  data: { ...ToolbarDataStub }
};

/**
 * Static assets for the application toolbar
 *
 * ```ts
 * const assets: ToolbarAssetsModel = {
 *   trigger : {
 *     name  : 'bars',
 *     style : 'fas'
 *   }
 * };
 * ```
 */
export const Constants: ToolbarVMModel = {
  assets: {
    trigger: {
      name: 'bars',
      style: 'fas'
    }
  },
  data: {
    logo: ''
  }
};
