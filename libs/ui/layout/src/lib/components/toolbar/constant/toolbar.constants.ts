// TODO: Usama Ansari - 🗑️ Remove this file.

import { Icon } from '../imports';
import type {
  ToolbarAssetsModel,
  ToolbarDataModel
} from '../';

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
  trigger: new Icon()
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
export const ToolbarAssets: ToolbarAssetsModel = {
  trigger: {
    name: 'bars',
    style: 'fas'
  }
};
